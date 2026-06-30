import re

with open('js/phase2-logic.js', 'r', encoding='utf-8') as f:
    js = f.read()

ar_logic = """
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
        btn.innerHTML = '<i class="fas fa-fire"></i> Devil\\'s Advocate';
        btn.style.background = '';
    }
};
"""

if "// 6. AR Masterclass" not in js:
    js += ar_logic
    with open('js/phase2-logic.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print("Added AR and Devil logic.")

# Inject Devil's Advocate button into Plato's section in index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

devil_btn = """
          <!-- DEVIL'S ADVOCATE BUTTON -->
          <button class="btn" style="background:#000; color:#ef4444; border: 1px solid #ef4444 !important; margin-top: 15px;" onclick="toggleDevil(this)">
             <i class="fas fa-fire"></i> Devil's Advocate
          </button>
"""
if "toggleDevil(this)" not in html:
    # Find Plato's section (it contains "Plato (?????)")
    # I will just inject it before the closing </div> of Plato's <details> or .paper-section
    html = re.sub(r'(<h3 class="unit-title"><i class="fas fa-landmark"></i>.*?Plato.*?</details>)', r'\1' + devil_btn, html, count=1, flags=re.DOTALL)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Injected Devil button.")
