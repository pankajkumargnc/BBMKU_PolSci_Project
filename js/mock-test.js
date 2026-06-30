/**
 * PYQ Mock Test Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialized when tab is active
});

window.initMockTest = function() {
    const questionsContainer = document.getElementById('mock-questions-container');
    const paletteGrid = document.getElementById('mock-palette-grid');
    const submitBtn = document.getElementById('submit-test');
    const resultDiv = document.getElementById('mock-result');
    const timerDiv = document.getElementById('mock-timer');
    
    if (!questionsContainer || !window.MOCK_QUESTIONS) return;

    let userAnswers = new Array(window.MOCK_QUESTIONS.length).fill(null);
    let currentQuestionIndex = 0;
    
    // Timer
    let timeLeft = 60 * 60; // 60 mins
    let timerId = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        let s = (timeLeft % 60).toString().padStart(2, '0');
        timerDiv.textContent = `${m}:${s}`;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            submitTest();
        }
    }, 1000);

    function renderQuestion(index) {
        questionsContainer.innerHTML = '';
        const q = window.MOCK_QUESTIONS[index];
        
        const qDiv = document.createElement('div');
        qDiv.className = 'mock-q-card glass-card';
        
        const qTitle = document.createElement('h3');
        qTitle.innerHTML = `Q${index + 1}. ${q.question}`;
        qDiv.appendChild(qTitle);
        
        const optsDiv = document.createElement('div');
        optsDiv.className = 'mock-options';
        
        q.options.forEach((opt, optIndex) => {
            const label = document.createElement('label');
            label.className = 'mock-opt-label';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `mock-q-${index}`;
            radio.value = optIndex;
            if (userAnswers[index] === optIndex) radio.checked = true;
            
            radio.addEventListener('change', () => {
                userAnswers[index] = optIndex;
                updatePalette();
            });
            
            const span = document.createElement('span');
            span.innerHTML = opt;
            
            label.appendChild(radio);
            label.appendChild(span);
            optsDiv.appendChild(label);
        });
        
        qDiv.appendChild(optsDiv);
        
        // Navigation buttons
        const navDiv = document.createElement('div');
        navDiv.className = 'mock-nav-btns';
        
        if (index > 0) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'btn';
            prevBtn.innerHTML = '<span class="en">Previous</span><span class="hi">पिछला</span>';
            prevBtn.onclick = () => renderQuestion(index - 1);
            navDiv.appendChild(prevBtn);
        }
        
        if (index < window.MOCK_QUESTIONS.length - 1) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'btn';
            nextBtn.innerHTML = '<span class="en">Next</span><span class="hi">अगला</span>';
            nextBtn.onclick = () => renderQuestion(index + 1);
            navDiv.appendChild(nextBtn);
        }
        
        qDiv.appendChild(navDiv);
        questionsContainer.appendChild(qDiv);
        currentQuestionIndex = index;
        updatePalette();
    }

    function updatePalette() {
        paletteGrid.innerHTML = '';
        window.MOCK_QUESTIONS.forEach((_, idx) => {
            const box = document.createElement('div');
            box.className = 'palette-box';
            box.textContent = idx + 1;
            
            if (userAnswers[idx] !== null) box.classList.add('answered');
            if (idx === currentQuestionIndex) box.classList.add('current');
            
            box.onclick = () => renderQuestion(idx);
            paletteGrid.appendChild(box);
        });
    }

    function submitTest() {
        clearInterval(timerId);
        let score = 0;
        userAnswers.forEach((ans, idx) => {
            if (ans === window.MOCK_QUESTIONS[idx].answer) score++;
        });
        
        document.querySelector('.mock-test-layout').style.display = 'none';
        submitBtn.style.display = 'none';
        timerDiv.style.display = 'none';
        
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <h2><span class="en">Test Complete!</span><span class="hi">टेस्ट समाप्त!</span></h2>
            <div class="score-display">
                <span class="en">Your Score:</span><span class="hi">आपका स्कोर:</span> 
                <strong>${score} / ${window.MOCK_QUESTIONS.length}</strong>
            </div>
            <p><span class="en">Keep practicing to reach Gold Medalist status!</span><span class="hi">गोल्ड मेडलिस्ट बनने के लिए अभ्यास जारी रखें!</span></p>
        `;
    }

    submitBtn.onclick = () => {
        if (confirm("Are you sure you want to submit the test?")) {
            submitTest();
        }
    };

    renderQuestion(0);
};
