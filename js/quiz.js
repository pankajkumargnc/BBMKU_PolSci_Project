/**
 * BBMKU Quiz Engine — quiz.js
 * ============================
 * Interactive MCQ quiz with timer, scoring, and review mode
 */

const QuizEngine = (() => {
  let currentQuiz = [];
  let currentIndex = 0;
  let score = 0;
  let answers = [];
  let timerInterval = null;
  let timeRemaining = 0;
  let quizStartTime = 0;
  let selectedPaper = 'all';
  let quizSize = 10;

  const getLang = () => document.documentElement.dataset.lang || 'hi';

  // ── Paper list ──
  const getPapers = () => {
    if (typeof MCQ_BANK === 'undefined') return [];
    const papers = [...new Set(MCQ_BANK.map(q => q.paper))];
    return papers;
  };

  // ── Start Quiz ──
  const startQuiz = (paper = 'all', size = 10, isMock = false) => {
    if (typeof MCQ_BANK === 'undefined') return;
    selectedPaper = paper;
    
    // In Mock Mode, force size to 50 questions
    quizSize = isMock ? 50 : size;
    let pool = paper === 'all' ? [...MCQ_BANK] : MCQ_BANK.filter(q => q.paper === paper);

    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    currentQuiz = pool.slice(0, Math.min(quizSize, pool.length));
    currentIndex = 0;
    score = 0;
    answers = new Array(currentQuiz.length).fill(null);
    quizStartTime = Date.now();

    // Timer: 60 mins (3600s) for Mock Mode, else 60 seconds per question
    timeRemaining = isMock ? 3600 : currentQuiz.length * 60;

    renderQuizUI();
    startTimer();
  };

  // ── Timer ──
  const startTimer = () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        finishQuiz();
      }
    }, 1000);
  };

  const updateTimerDisplay = () => {
    const el = document.getElementById('quiz-timer');
    if (!el) return;
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (timeRemaining < 60) el.classList.add('timer-danger');
    else el.classList.remove('timer-danger');
  };

  // ── Render ──
  const renderQuizUI = () => {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    const lang = getLang();
    const q = currentQuiz[currentIndex];

    const questionText = lang === 'en' ? q.q_en : q.q_hi;
    const options = lang === 'en' ? q.options_en : q.options_hi;

    container.innerHTML = `
      <div class="quiz-header">
        <div class="quiz-progress-info">
          <span class="quiz-counter">${lang === 'en' ? 'Question' : 'प्रश्न'} ${currentIndex + 1} / ${currentQuiz.length}</span>
          <span class="quiz-score">${lang === 'en' ? 'Score' : 'स्कोर'}: ${score}</span>
        </div>
        <div class="quiz-timer-wrap">
          <i class="fas fa-clock"></i>
          <span id="quiz-timer">--:--</span>
        </div>
      </div>
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${((currentIndex) / currentQuiz.length) * 100}%"></div>
      </div>
      <div class="quiz-question-card">
        <div class="quiz-difficulty-badge ${q.difficulty}">${q.difficulty.toUpperCase()}</div>
        <div class="quiz-paper-badge">${q.paper}</div>
        <h3 class="quiz-question-text">${questionText}</h3>
        <div class="quiz-options">
          ${options.map((opt, i) => `
            <button class="quiz-option ${answers[currentIndex] === i ? 'selected' : ''}" data-index="${i}" onclick="QuizEngine.selectOption(${i})">
              <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="quiz-option-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
      <div class="quiz-nav">
        <button class="quiz-nav-btn" onclick="QuizEngine.prevQuestion()" ${currentIndex === 0 ? 'disabled' : ''}>
          <i class="fas fa-chevron-left"></i> ${lang === 'en' ? 'Previous' : 'पिछला'}
        </button>
        <div class="quiz-dots">
          ${currentQuiz.map((_, i) => `<span class="quiz-dot ${i === currentIndex ? 'active' : ''} ${answers[i] !== null ? 'answered' : ''}" onclick="QuizEngine.goTo(${i})">${i + 1}</span>`).join('')}
        </div>
        ${currentIndex === currentQuiz.length - 1 ?
          `<button class="quiz-nav-btn quiz-submit-btn" onclick="QuizEngine.finishQuiz()">
            <i class="fas fa-check-circle"></i> ${lang === 'en' ? 'Submit' : 'जमा करें'}
          </button>` :
          `<button class="quiz-nav-btn" onclick="QuizEngine.nextQuestion()">
            ${lang === 'en' ? 'Next' : 'अगला'} <i class="fas fa-chevron-right"></i>
          </button>`
        }
      </div>
    `;
    updateTimerDisplay();
  };

  // ── Select Option ──
  const selectOption = (index) => {
    answers[currentIndex] = index;
    renderQuizUI();
  };

  // ── Navigation ──
  const nextQuestion = () => {
    if (currentIndex < currentQuiz.length - 1) {
      currentIndex++;
      renderQuizUI();
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuizUI();
    }
  };

  const goTo = (index) => {
    if (index >= 0 && index < currentQuiz.length) {
      currentIndex = index;
      renderQuizUI();
    }
  };

  // ── Finish Quiz ──
  const finishQuiz = () => {
    clearInterval(timerInterval);
    const timeTaken = Math.round((Date.now() - quizStartTime) / 1000);

    // Calculate score
    score = 0;
    currentQuiz.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });

    const percentage = Math.round((score / currentQuiz.length) * 100);

    // Save to progress
    if (typeof ProgressTracker !== 'undefined') {
      ProgressTracker.addQuizScore(score, currentQuiz.length, selectedPaper, timeTaken);
      // Gamification
      ProgressTracker.addXP(score * 10);
    }

    if(percentage >= 80 && window.confetti) {
      window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      if(window.playSound) window.playSound('success');
    } else if(percentage < 40 && window.playSound) {
      window.playSound('error');
    }

    renderResults(timeTaken, percentage);
  };

  // ── Results ──
  const renderResults = (timeTaken, percentage) => {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    const lang = getLang();
    const mins = Math.floor(timeTaken / 60);
    const secs = timeTaken % 60;

    let emoji = '🎉';
    let message_hi = 'उत्कृष्ट!', message_en = 'Excellent!';
    if (percentage < 40) { emoji = '😢'; message_hi = 'और मेहनत करो!'; message_en = 'Need more practice!'; }
    else if (percentage < 60) { emoji = '💪'; message_hi = 'अच्छा प्रयास!'; message_en = 'Good effort!'; }
    else if (percentage < 80) { emoji = '👍'; message_hi = 'बहुत अच्छा!'; message_en = 'Very Good!'; }

    container.innerHTML = `
      <div class="quiz-results">
        <div class="results-emoji">${emoji}</div>
        <h2 class="results-title">${lang === 'en' ? message_en : message_hi}</h2>
        <div class="results-score-ring">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--border)" stroke-width="8"/>
            <circle cx="60" cy="60" r="54" fill="none" stroke="${percentage >= 60 ? 'var(--secondary)' : 'var(--accent-warm)'}" stroke-width="8"
              stroke-dasharray="${(percentage / 100) * 339.3} 339.3" stroke-linecap="round"
              transform="rotate(-90 60 60)" class="score-ring-fill"/>
          </svg>
          <div class="results-score-text">
            <span class="score-number">${percentage}%</span>
            <span class="score-label">${score}/${currentQuiz.length}</span>
          </div>
        </div>
        <div class="results-stats">
          <div class="results-stat"><i class="fas fa-clock"></i><span>${mins}m ${secs}s</span></div>
          <div class="results-stat"><i class="fas fa-check-circle" style="color:var(--secondary)"></i><span>${score} ${lang === 'en' ? 'Correct' : 'सही'}</span></div>
          <div class="results-stat"><i class="fas fa-times-circle" style="color:var(--accent-warm)"></i><span>${currentQuiz.length - score} ${lang === 'en' ? 'Wrong' : 'गलत'}</span></div>
        </div>
        <div class="results-actions">
          <button class="quiz-btn-primary" onclick="QuizEngine.showReview()"><i class="fas fa-eye"></i> ${lang === 'en' ? 'Review Answers' : 'उत्तर देखें'}</button>
          <button class="quiz-btn-secondary" onclick="QuizEngine.renderSetup()"><i class="fas fa-redo"></i> ${lang === 'en' ? 'New Quiz' : 'नई क्विज़'}</button>
        </div>
      </div>
    `;

    // Confetti for high scores
    if (percentage >= 80) {
      launchConfetti();
    }
  };

  // ── Review Mode ──
  const showReview = () => {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    const lang = getLang();

    let reviewHTML = `<div class="quiz-review">
      <h2 class="review-title"><i class="fas fa-clipboard-check"></i> ${lang === 'en' ? 'Answer Review' : 'उत्तर समीक्षा'}</h2>`;

    currentQuiz.forEach((q, i) => {
      const isCorrect = answers[i] === q.correct;
      const questionText = lang === 'en' ? q.q_en : q.q_hi;
      const options = lang === 'en' ? q.options_en : q.options_hi;
      const explanation = lang === 'en' ? q.explanation_en : q.explanation_hi;

      reviewHTML += `
        <div class="review-card ${isCorrect ? 'review-correct' : 'review-wrong'}">
          <div class="review-card-header">
            <span class="review-number">Q${i + 1}</span>
            <span class="review-badge ${isCorrect ? 'badge-correct' : 'badge-wrong'}">
              <i class="fas ${isCorrect ? 'fa-check' : 'fa-times'}"></i>
              ${isCorrect ? (lang === 'en' ? 'Correct' : 'सही') : (lang === 'en' ? 'Wrong' : 'गलत')}
            </span>
          </div>
          <p class="review-question">${questionText}</p>
          <div class="review-options">
            ${options.map((opt, j) => `
              <div class="review-option ${j === q.correct ? 'correct-option' : ''} ${j === answers[i] && j !== q.correct ? 'wrong-option' : ''}">
                <span class="review-letter">${String.fromCharCode(65 + j)}</span>
                ${opt}
                ${j === q.correct ? '<i class="fas fa-check-circle"></i>' : ''}
                ${j === answers[i] && j !== q.correct ? '<i class="fas fa-times-circle"></i>' : ''}
              </div>
            `).join('')}
          </div>
          <div class="review-explanation">
            <strong><i class="fas fa-lightbulb"></i> ${lang === 'en' ? 'Explanation' : 'व्याख्या'}:</strong> ${explanation}
          </div>
        </div>
      `;
    });

    reviewHTML += `
      <div class="results-actions" style="margin-top:24px;">
        <button class="quiz-btn-primary" onclick="QuizEngine.renderSetup()"><i class="fas fa-redo"></i> ${lang === 'en' ? 'New Quiz' : 'नई क्विज़'}</button>
      </div>
    </div>`;

    container.innerHTML = reviewHTML;
  };

  // ── Setup Screen ──
  const renderSetup = () => {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    const lang = getLang();
    const papers = getPapers();
    const stats = typeof ProgressTracker !== 'undefined' ? ProgressTracker.getQuizStats() : { total: 0, avg: 0, best: 0 };

    container.innerHTML = `
      <div class="quiz-setup">
        <div class="quiz-setup-hero">
          <div class="quiz-hero-icon"><i class="fas fa-brain"></i></div>
          <h2>${lang === 'en' ? 'UGC NET Quiz Practice' : 'UGC NET क्विज़ अभ्यास'}</h2>
          <p>${lang === 'en' ? 'Test your knowledge with MCQ-based quizzes' : 'MCQ आधारित क्विज़ से अपने ज्ञान का परीक्षण करें'}</p>
        </div>

        ${stats.total > 0 ? `
        <div class="quiz-past-stats">
          <div class="past-stat"><span class="past-stat-num">${stats.total}</span><span class="past-stat-label">${lang === 'en' ? 'Quizzes Taken' : 'क्विज़ दिए'}</span></div>
          <div class="past-stat"><span class="past-stat-num">${stats.avg}%</span><span class="past-stat-label">${lang === 'en' ? 'Average Score' : 'औसत स्कोर'}</span></div>
          <div class="past-stat"><span class="past-stat-num">${stats.best}%</span><span class="past-stat-label">${lang === 'en' ? 'Best Score' : 'सर्वश्रेष्ठ'}</span></div>
        </div>` : ''}

        <div class="quiz-setup-form">
          <div class="setup-field">
            <label><i class="fas fa-book"></i> ${lang === 'en' ? 'Select Paper / Topic' : 'पेपर / विषय चुनें'}</label>
            <select id="quiz-paper-select">
              <option value="all">${lang === 'en' ? '🎯 All Papers (Mixed)' : '🎯 सभी पेपर (मिश्रित)'}</option>
              ${papers.map(p => `<option value="${p}">${p}</option>`).join('')}
            </select>
          </div>
          <div class="setup-field">
            <label><i class="fas fa-hashtag"></i> ${lang === 'en' ? 'Number of Questions' : 'प्रश्नों की संख्या'}</label>
            <div class="quiz-size-options">
              ${[10, 20, 30, 50].map(n => `
                <button class="size-btn ${n === 10 ? 'active' : ''}" onclick="document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');this.dataset.size='${n}'" data-size="${n}">${n}</button>
              `).join('')}
            </div>
          </div>
          
          <div class="setup-field" style="margin-top: 15px; background: rgba(220, 38, 38, 0.05); padding: 12px; border-radius: 8px; border: 1px dashed var(--accent-warm);">
            <label style="display: flex; align-items: center; cursor: pointer; margin-bottom: 0;">
              <input type="checkbox" id="mock-test-mode" style="margin-right: 12px; width: 20px; height: 20px; accent-color: var(--accent-warm);">
              <span style="font-weight: 600; color: var(--accent-warm); font-size: 1.05rem;">🔥 ${lang === 'en' ? 'UGC NET Mock Test Mode (60 Mins, 50 Qs)' : 'UGC NET मॉक टेस्ट मोड (60 मिनट, 50 प्रश्न)'}</span>
            </label>
          </div>

          <button class="quiz-start-btn" onclick="
            const isMock = document.getElementById('mock-test-mode').checked;
            QuizEngine.startQuiz(document.getElementById('quiz-paper-select').value, parseInt(document.querySelector('.size-btn.active')?.dataset.size || 10), isMock);
          ">
            <i class="fas fa-play-circle"></i> ${lang === 'en' ? 'Start Quiz' : 'क्विज़ शुरू करें'}
          </button>
        </div>
      </div>
    `;
  };

  // ── Confetti ──
  const launchConfetti = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#6366f1', '#a855f7', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#06b6d4'];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rot: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        if (p.opacity <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rot += p.vr;
        if (frame > 100) p.opacity -= 0.02;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (alive && frame < 200) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };
    requestAnimationFrame(animate);
  };

  return {
    startQuiz, selectOption, nextQuestion, prevQuestion, goTo,
    finishQuiz, showReview, renderSetup, getPapers, launchConfetti
  };
})();

if (typeof window !== 'undefined') {
  window.QuizEngine = QuizEngine;
}
