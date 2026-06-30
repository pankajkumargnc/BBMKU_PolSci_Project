/**
 * Argument Builder (Debate Mode) Game Logic
 */

window.initDebateGame = function() {
    const container = document.getElementById('debate-game-container');
    if (!container || !window.DEBATE_DATA) return;

    container.innerHTML = '';
    
    const data = window.DEBATE_DATA;
    
    const header = document.createElement('h3');
    header.style.textAlign = 'center';
    header.style.marginBottom = '20px';
    header.innerHTML = `<span class="en">Topic: </span><span class="hi">विषय: </span> ${data.topic}`;
    container.appendChild(header);
    
    const layout = document.createElement('div');
    layout.className = 'debate-layout';
    
    // Statements column
    const statementsCol = document.createElement('div');
    statementsCol.className = 'debate-statements';
    
    let statements = [...data.statements].sort(() => Math.random() - 0.5);
    statements.forEach(stmt => {
        const div = document.createElement('div');
        div.className = 'debate-card glass-card';
        div.draggable = true;
        div.dataset.id = stmt.id;
        div.innerHTML = stmt.text;
        
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', stmt.id);
            setTimeout(() => div.classList.add('dragging'), 0);
        });
        div.addEventListener('dragend', () => {
            div.classList.remove('dragging');
        });
        
        statementsCol.appendChild(div);
    });
    
    // Drop zones
    const zonesCol = document.createElement('div');
    zonesCol.className = 'debate-zones';
    
    const proZone = document.createElement('div');
    proZone.className = 'debate-zone pro-zone glass-card';
    proZone.dataset.type = 'pro';
    proZone.innerHTML = '<h4><i class="fas fa-thumbs-up"></i> <span class="en">Pros (For)</span><span class="hi">समर्थन (पक्ष में)</span></h4>';
    
    const conZone = document.createElement('div');
    conZone.className = 'debate-zone con-zone glass-card';
    conZone.dataset.type = 'con';
    conZone.innerHTML = '<h4><i class="fas fa-thumbs-down"></i> <span class="en">Cons (Against)</span><span class="hi">आलोचना (विपक्ष में)</span></h4>';
    
    [proZone, conZone].forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const id = e.dataTransfer.getData('text/plain');
            const el = document.querySelector(`.debate-card[data-id="${id}"]`);
            if (el) zone.appendChild(el);
            checkDebateCompletion();
        });
    });
    
    zonesCol.appendChild(proZone);
    zonesCol.appendChild(conZone);
    
    layout.appendChild(statementsCol);
    layout.appendChild(zonesCol);
    
    container.appendChild(layout);
    
    const resultMsg = document.createElement('div');
    resultMsg.className = 'debate-result';
    resultMsg.style.marginTop = '20px';
    resultMsg.style.textAlign = 'center';
    resultMsg.style.fontWeight = 'bold';
    container.appendChild(resultMsg);

    function checkDebateCompletion() {
        // Only check when all cards are sorted
        if (statementsCol.querySelectorAll('.debate-card').length === 0) {
            let correct = true;
            document.querySelectorAll('.debate-card').forEach(card => {
                const stmt = data.statements.find(s => s.id === card.dataset.id);
                const parentZone = card.closest('.debate-zone');
                if (stmt.type !== parentZone.dataset.type) {
                    correct = false;
                }
            });
            
            if (correct) {
                resultMsg.innerHTML = '<span class="en" style="color: #10b981;">Brilliant Analysis! Gold Medal Answer!</span><span class="hi" style="color: #10b981;">शानदार विश्लेषण! गोल्ड मेडल उत्तर!</span>';
                if(window.playSound) window.playSound('success');
            } else {
                resultMsg.innerHTML = '<span class="en" style="color: #ef4444;">Review your arguments. Some points are in the wrong section.</span><span class="hi" style="color: #ef4444;">अपने तर्कों की समीक्षा करें। कुछ बिंदु गलत अनुभाग में हैं।</span>';
                if(window.playSound) window.playSound('error');
            }
        } else {
            resultMsg.innerHTML = '';
        }
    }
};
