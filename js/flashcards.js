/**
 * BBMKU Flashcard System — flashcards.js
 * ========================================
 * Swipeable flashcards with flip animation, categories, and progress tracking
 */

const FlashcardEngine = (() => {
  let cards = [];
  let currentIndex = 0;
  let isFlipped = false;
  let selectedCategory = 'all';
  let touchStartX = 0;

  const getLang = () => document.documentElement.dataset.lang || 'hi';

  const getCategories = () => {
    if (typeof FLASHCARD_DATA === 'undefined') return [];
    return [...new Set(FLASHCARD_DATA.map(c => c.category))];
  };

  const filterCards = (category = 'all') => {
    if (typeof FLASHCARD_DATA === 'undefined') return [];
    selectedCategory = category;
    if (category === 'all') {
      cards = [...FLASHCARD_DATA];
    } else {
      cards = FLASHCARD_DATA.filter(c => c.category === category);
    }
    // Shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;
    isFlipped = false;
  };

  const renderSetup = () => {
    const container = document.getElementById('flashcard-container');
    if (!container) return;
    const lang = getLang();
    const categories = getCategories();
    const stats = typeof ProgressTracker !== 'undefined' ? ProgressTracker.getFlashcardStats() : { known: 0, revise: 0, total: 0 };

    container.innerHTML = `
      <div class="fc-setup">
        <div class="fc-hero">
          <div class="fc-hero-icon"><i class="fas fa-clone"></i></div>
          <h2>${lang === 'en' ? 'Flashcard Study Mode' : 'फ्लैशकार्ड अध्ययन'}</h2>
          <p>${lang === 'en' ? 'Flip cards to test your knowledge. Mark as Known or Revise.' : 'कार्ड पलटें और अपने ज्ञान का परीक्षण करें।'}</p>
        </div>

        ${stats.total > 0 ? `
        <div class="fc-stats-row">
          <div class="fc-stat fc-stat-known"><i class="fas fa-check-circle"></i><span>${stats.known}</span><small>${lang === 'en' ? 'Known' : 'याद है'}</small></div>
          <div class="fc-stat fc-stat-revise"><i class="fas fa-redo"></i><span>${stats.revise}</span><small>${lang === 'en' ? 'Revise' : 'दोहराना है'}</small></div>
          <div class="fc-stat fc-stat-remain"><i class="fas fa-layer-group"></i><span>${stats.total - stats.known - stats.revise}</span><small>${lang === 'en' ? 'Remaining' : 'बाकी'}</small></div>
        </div>` : ''}

        <div class="fc-category-grid">
          <button class="fc-cat-btn active" onclick="FlashcardEngine.start('all')">
            <i class="fas fa-th"></i> ${lang === 'en' ? 'All Topics' : 'सभी विषय'}
            <span class="fc-cat-count">${typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA.length : 0}</span>
          </button>
          ${categories.map(cat => {
            const count = typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA.filter(c => c.category === cat).length : 0;
            const icons = {
              'Indian Constitution': 'fas fa-landmark',
              'Indian Thinkers': 'fas fa-users',
              'Western Thought': 'fas fa-globe-europe',
              'International Relations': 'fas fa-globe',
              'Public Admin': 'fas fa-building',
              'Political Theory': 'fas fa-balance-scale',
              'Jharkhand': 'fas fa-map-marker-alt',
              'Political Sociology': 'fas fa-people-arrows',
              'Books & Authors': 'fas fa-book'
            };
            const icon = icons[cat] || 'fas fa-folder';
            return `<button class="fc-cat-btn" onclick="FlashcardEngine.start('${cat}')">
              <i class="${icon}"></i> ${cat}
              <span class="fc-cat-count">${count}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
    `;
  };

  const start = (category = 'all') => {
    filterCards(category);
    if (cards.length === 0) return;
    render();
  };

  const render = () => {
    const container = document.getElementById('flashcard-container');
    if (!container || cards.length === 0) return;
    const lang = getLang();
    const card = cards[currentIndex];
    const origIndex = typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA.indexOf(card) : currentIndex;
    const status = typeof ProgressTracker !== 'undefined' ? (ProgressTracker.get().flashcardProgress || {})[origIndex] : null;

    const front = lang === 'en' ? card.front_en : card.front_hi;
    const back = lang === 'en' ? card.back_en : card.back_hi;

    container.innerHTML = `
      <div class="fc-player">
        <div class="fc-top-bar">
          <button class="fc-back-btn" onclick="FlashcardEngine.renderSetup()">
            <i class="fas fa-arrow-left"></i> ${lang === 'en' ? 'Back' : 'वापस'}
          </button>
          <span class="fc-counter">${currentIndex + 1} / ${cards.length}</span>
          <span class="fc-category-label"><i class="fas fa-tag"></i> ${card.category}</span>
        </div>
        <div class="fc-progress-bar">
          <div class="fc-progress-fill" style="width:${((currentIndex + 1) / cards.length) * 100}%"></div>
        </div>
        <div class="fc-card-wrapper" onclick="FlashcardEngine.flip()" id="fc-card-wrapper">
          <div class="fc-card ${isFlipped ? 'flipped' : ''}">
            <div class="fc-card-front">
              <div class="fc-card-label">${lang === 'en' ? 'QUESTION' : 'प्रश्न'}</div>
              <p>${front}</p>
              <div class="fc-tap-hint"><i class="fas fa-hand-pointer"></i> ${lang === 'en' ? 'Tap to reveal answer' : 'उत्तर देखने के लिए क्लिक करें'}</div>
            </div>
            <div class="fc-card-back">
              <div class="fc-card-label">${lang === 'en' ? 'ANSWER' : 'उत्तर'}</div>
              <p>${back}</p>
            </div>
          </div>
        </div>
        <div class="fc-actions">
          <button class="fc-action-btn fc-revise ${status === 'revise' ? 'active' : ''}" onclick="FlashcardEngine.markRevise()">
            <i class="fas fa-redo"></i> ${lang === 'en' ? 'Revise Later' : 'बाद में दोहराएं'}
          </button>
          <button class="fc-action-btn fc-known ${status === 'known' ? 'active' : ''}" onclick="FlashcardEngine.markKnown()">
            <i class="fas fa-check"></i> ${lang === 'en' ? 'I Know This' : 'मुझे याद है'}
          </button>
        </div>
        <div class="fc-nav">
          <button class="fc-nav-btn" onclick="FlashcardEngine.prev()" ${currentIndex === 0 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="fc-nav-btn fc-shuffle-btn" onclick="FlashcardEngine.shuffle()">
            <i class="fas fa-random"></i> ${lang === 'en' ? 'Shuffle' : 'मिलाएं'}
          </button>
          <button class="fc-nav-btn" onclick="FlashcardEngine.next()" ${currentIndex === cards.length - 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `;

    // Touch events for swipe
    const wrapper = document.getElementById('fc-card-wrapper');
    if (wrapper) {
      wrapper.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
      wrapper.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 60) {
          if (diff > 0) FlashcardEngine.prev();
          else FlashcardEngine.next();
        }
      }, { passive: true });
    }
  };

  const flip = () => {
    isFlipped = !isFlipped;
    const cardEl = document.querySelector('.fc-card');
    if (cardEl) cardEl.classList.toggle('flipped', isFlipped);
  };

  const next = () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      isFlipped = false;
      render();
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      currentIndex--;
      isFlipped = false;
      render();
    }
  };

  const shuffle = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;
    isFlipped = false;
    render();
    showToast(getLang() === 'en' ? 'Cards shuffled!' : 'कार्ड मिला दिए गए!');
  };

  const markKnown = () => {
    const card = cards[currentIndex];
    const origIndex = typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA.indexOf(card) : currentIndex;
    if (typeof ProgressTracker !== 'undefined') {
      ProgressTracker.setFlashcardStatus(origIndex, 'known');
      ProgressTracker.addXP(5); // Gamification
    }
    if (window.playSound) window.playSound('success');
    showToast(getLang() === 'en' ? '✅ Marked as Known (+5 XP)' : '✅ याद है (+5 XP)');
    if (currentIndex < cards.length - 1) {
      setTimeout(() => next(), 400);
    } else {
      if (window.confetti) window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      render();
    }
  };

  const markRevise = () => {
    const card = cards[currentIndex];
    const origIndex = typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA.indexOf(card) : currentIndex;
    if (typeof ProgressTracker !== 'undefined') {
      ProgressTracker.setFlashcardStatus(origIndex, 'revise');
    }
    showToast(getLang() === 'en' ? '🔁 Marked for Revision' : '🔁 दोहराने के लिए चिह्नित');
    if (currentIndex < cards.length - 1) {
      setTimeout(() => next(), 400);
    } else {
      render();
    }
  };

  const showToast = (msg) => {
    let toast = document.getElementById('fc-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'fc-toast';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  };

  return { renderSetup, start, flip, next, prev, shuffle, markKnown, markRevise, render };
})();

if (typeof window !== 'undefined') {
  window.FlashcardEngine = FlashcardEngine;
}
