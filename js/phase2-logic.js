/**
 * Phase 2 Advanced Masterclass Logic
 * Contains: Quotes, Citation Generator, Compass, MindMap, Policy Sim, and A/R
 */

document.addEventListener('DOMContentLoaded', () => {
    initQuotes();
});

// 1. Daily Scholar Quotes (Typewriter)
function initQuotes() {
    const quotes = [
        { en: "Man is by nature a political animal. - Aristotle", hi: "मनुष्य स्वभाव से एक राजनीतिक प्राणी है। - अरस्तू" },
        { en: "The philosophers have only interpreted the world, in various ways. The point, however, is to change it. - Karl Marx", hi: "दार्शनिकों ने केवल दुनिया की व्याख्या की है... लेकिन असली काम इसे बदलना है। - कार्ल मार्क्स" },
        { en: "Arise, awake, and stop not till the goal is reached. - Swami Vivekananda", hi: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए। - स्वामी विवेकानंद" },
        { en: "Education is the manifestation of the perfection already in man. - Swami Vivekananda", hi: "शिक्षा मनुष्य में पहले से मौजूद पूर्णता की अभिव्यक्ति है। - स्वामी विवेकानंद" },
        { en: "The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself. - Plato", hi: "शासन न करने का सबसे बड़ा दंड यह है कि आप पर कोई अयोग्य व्यक्ति शासन करेगा। - प्लेटो" }
    ];
    
    const textEl = document.getElementById('typewriter-text');
    if (!textEl) return;

    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const lang = document.documentElement.dataset.lang || 'hi';
    const textToType = lang === 'en' ? todayQuote.en : todayQuote.hi;
    
    let i = 0;
    textEl.innerHTML = '';
    
    function typeWriter() {
        if (i < textToType.length) {
            textEl.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // Re-trigger on language toggle
    document.getElementById('lang-toggle')?.addEventListener('click', () => {
        setTimeout(() => {
            const newLang = document.documentElement.dataset.lang;
            textToType2 = newLang === 'en' ? todayQuote.en : todayQuote.hi;
            textEl.innerHTML = textToType2; // Instant swap without typewriter to avoid glitches
        }, 100);
    });
}

// 2. Citation Generator
window.generateCitation = function(type) {
    const author = document.getElementById('cit-author').value || "Author, Unknown";
    const year = document.getElementById('cit-year').value || "n.d.";
    const title = document.getElementById('cit-title').value || "Unknown Title";
    const pub = document.getElementById('cit-publisher').value || "Unknown Publisher";
    
    const output = document.getElementById('citation-output');
    
    if (type === 'APA') {
        output.innerHTML = `${author}. (${year}). <i>${title}</i>. ${pub}.`;
    } else {
        output.innerHTML = `${author}. <i>${title}</i>. ${pub}, ${year}.`;
    }
    if(window.playSound) window.playSound('success');
};

// 3. Political Compass Game
let compassX = 0;
let compassY = 0;
let compassQIndex = 0;
const compassQuestions = [
    { text: "The government should control the economy.", axis: 'x', weight: -20 },
    { text: "Free speech must be absolute.", axis: 'y', weight: 20 },
    { text: "Taxes on the rich should be increased heavily.", axis: 'x', weight: -20 },
    { text: "The military needs more funding for national security.", axis: 'y', weight: -20 },
    { text: "Healthcare is a fundamental human right.", axis: 'x', weight: -20 }
];

// Initialize on tab switch
const originalSwitchTab = window.switchTab;
if (typeof originalSwitchTab === 'function') {
    // Already handled globally via HTML injection usually, but we will hook directly if possible
}

// Compass Logic exposed
window.answerCompass = function(val) {
    const q = compassQuestions[compassQIndex];
    if (q.axis === 'x') compassX += (val * q.weight);
    if (q.axis === 'y') compassY += (val * q.weight);
    
    compassQIndex++;
    if (compassQIndex < compassQuestions.length) {
        document.getElementById('compass-q-text').innerText = `Q${compassQIndex+1}: ${compassQuestions[compassQIndex].text}`;
    } else {
        document.getElementById('compass-questions').style.display = 'none';
        let res = "";
        if(compassX < 0 && compassY > 0) res = "Left-Libertarian (Democratic Socialist)";
        if(compassX > 0 && compassY > 0) res = "Right-Libertarian (Classical Liberal)";
        if(compassX < 0 && compassY < 0) res = "Left-Authoritarian (State Socialist)";
        if(compassX > 0 && compassY < 0) res = "Right-Authoritarian (Conservative)";
        if(compassX === 0 && compassY === 0) res = "Centrist";
        
        document.getElementById('compass-result').innerText = `Your Ideology: ${res}`;
        
        // Move marker
        // X maps from -100 to 100 to 0% to 100%
        const leftPercent = ((compassX + 100) / 200) * 100;
        // Y maps from 100 to -100 to 0% to 100% (Auth is up/negative y visual, Lib is down)
        const topPercent = ((-compassY + 100) / 200) * 100;
        
        const marker = document.getElementById('compass-marker');
        marker.style.left = `${Math.max(0, Math.min(100, leftPercent))}%`;
        marker.style.top = `${Math.max(0, Math.min(100, topPercent))}%`;
        marker.style.background = 'black';
        if(window.playSound) window.playSound('success');
    }
};

// Initialize first question
setTimeout(() => {
    if(document.getElementById('compass-q-text')) {
        document.getElementById('compass-q-text').innerText = `Q1: ${compassQuestions[0].text}`;
    }
}, 1000);

// 4. Mind Map
window.expandNode = function(id) {
    if (id === 'root') {
        document.getElementById('map-children').style.opacity = '1';
        if(window.playSound) window.playSound('success');
    }
};

// 5. Policy Sim
window.playSim = function(choice) {
    const res = document.getElementById('sim-result');
    if (choice === 'keynes') {
        res.innerHTML = '<span style="color:#10b981;">Outcome: You injected cash into the economy! Unemployment drops, but inflation might worsen in the long run. (Keynesian Approach)</span>';
    } else {
        res.innerHTML = '<span style="color:#3b82f6;">Outcome: You raised interest rates! Inflation stops, but businesses complain about expensive loans. (Monetarist Approach)</span>';
    }
    if(window.playSound) window.playSound('success');
};

// 6. AR Masterclass
window.playAR = function(answer) {
    const res = document.getElementById('ar-result');
    if(answer === 1) {
        res.innerHTML = '<span style="color:#10b981">Correct! Both are true and R explains A.</span>';
        if(window.playSound) window.playSound('success');
    } else {
        res.innerHTML = '<span style="color:#ef4444">Incorrect. Review the concepts.</span>';
        if(window.playSound) window.playSound('error');
    }
};

setTimeout(() => {
    const arC = document.getElementById('ar-container');
    if(arC) {
        arC.innerHTML = `
            <div class="glass-card" style="padding:20px;">
                <h3 style="color:var(--primary-color)">Assertion (A):</h3>
                <p style="font-size:1.2rem; font-weight:bold;">Marxism believes the state is an instrument of class exploitation.</p>
                <h3 style="color:var(--primary-color); margin-top:15px;">Reason (R):</h3>
                <p style="font-size:1.2rem; font-weight:bold;">The state exists to protect the property and interests of the ruling class.</p>
                
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
                    <button class="btn" onclick="playAR(1)">(1) Both A and R are true and R is the correct explanation of A.</button>
                    <button class="btn" onclick="playAR(2)">(2) Both A and R are true but R is NOT the correct explanation of A.</button>
                    <button class="btn" onclick="playAR(3)">(3) A is true but R is false.</button>
                    <button class="btn" onclick="playAR(4)">(4) A is false but R is true.</button>
                </div>
                <p id="ar-result" style="margin-top:20px; font-weight:bold; font-size:1.3rem;"></p>
            </div>
        `;
    }
}, 1000);

// 7. Devil's Advocate Logic
window.toggleDevil = function(btn) {
    const card = btn.closest('.paper-section');
    card.classList.toggle('devil-mode');
    
    let devilContent = card.querySelector('.devil-content');
    if (!devilContent) {
        devilContent = document.createElement('div');
        devilContent.className = 'devil-content';
        devilContent.style.marginTop = '20px';
        devilContent.style.padding = '15px';
        devilContent.style.background = 'rgba(239, 68, 68, 0.1)';
        devilContent.style.borderLeft = '4px solid #ef4444';
        devilContent.innerHTML = `
            <h4 style="color:#ef4444;"><i class="fas fa-fire"></i> Devil's Advocate (Criticism)</h4>
            <p style="font-weight:bold;">Karl Popper strongly criticized Plato in his book "The Open Society and Its Enemies", arguing that Plato's ideal state is a blueprint for Totalitarianism and suppresses individual freedom.</p>
        `;
        card.appendChild(devilContent);
    }
    
    if (card.classList.contains('devil-mode')) {
        devilContent.style.display = 'block';
        card.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.4)';
        btn.innerHTML = '<i class="fas fa-times"></i> Close Criticism';
        btn.style.background = '#ef4444';
        if(window.playSound) window.playSound('error'); // dramatic sound
    } else {
        devilContent.style.display = 'none';
        card.style.boxShadow = '';
        btn.innerHTML = '<i class="fas fa-fire"></i> Devil\'s Advocate';
        btn.style.background = '';
    }
};
