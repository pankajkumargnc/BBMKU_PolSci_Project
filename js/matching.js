/**
 * Endless Automated Matching & Objective Game Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initial check to start game if we are on the matching tab
});

window.initMatchingGame = function() {
    const container = document.getElementById('matching-game-container');
    if (!container) return;

    if (!window.MATCH_POOL || window.MATCH_POOL.length === 0) {
        container.innerHTML = '<p>No game data available.</p>';
        return;
    }

    let gamesPlayed = 0;
    
    // Function to start a random game mode
    function nextRound() {
        container.innerHTML = '';
        container.style.opacity = '0';
        
        setTimeout(() => {
            // Every 3rd round is an MCQ, otherwise Matching
            if (gamesPlayed > 0 && gamesPlayed % 3 === 0) {
                renderMCQ();
            } else {
                renderMatching();
            }
            container.style.transition = 'opacity 0.5s';
            container.style.opacity = '1';
        }, 300);
    }

    // --- MATCHING MODE ---
    function renderMatching() {
        const board = document.createElement('div');
        board.className = 'game-board matching-board';
        
        const header = document.createElement('h3');
        header.className = 'game-header';
        header.innerHTML = '<span class="en">Match the following pairs correctly</span><span class="hi">निम्नलिखित जोड़ियों का सही मिलान करें</span>';
        
        const leftCol = document.createElement('div');
        leftCol.className = 'matching-col left-col';
        
        const rightCol = document.createElement('div');
        rightCol.className = 'matching-col right-col';

        // Pick 4 random pairs
        let shuffledPool = [...window.MATCH_POOL].sort(() => Math.random() - 0.5);
        let selectedPairs = shuffledPool.slice(0, 4);

        let leftItems = [...selectedPairs].sort(() => Math.random() - 0.5);
        let rightItems = [...selectedPairs].sort(() => Math.random() - 0.5);
        
        let matchesFound = 0;

        leftItems.forEach((item, index) => {
            const dragItem = document.createElement('div');
            dragItem.className = 'drag-item glass-card';
            dragItem.draggable = true;
            dragItem.innerHTML = item.left;
            // Use original index in selectedPairs as ID
            dragItem.dataset.id = selectedPairs.indexOf(item);
            
            dragItem.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', dragItem.dataset.id);
                setTimeout(() => dragItem.classList.add('dragging'), 0);
            });
            
            dragItem.addEventListener('dragend', () => {
                dragItem.classList.remove('dragging');
            });
            
            leftCol.appendChild(dragItem);
        });

        rightItems.forEach((item) => {
            const dropZoneContainer = document.createElement('div');
            dropZoneContainer.className = 'drop-zone-container';
            
            const dropZone = document.createElement('div');
            dropZone.className = 'drop-zone glass-card';
            dropZone.dataset.matchId = selectedPairs.indexOf(item);
            dropZone.innerHTML = '<span class="en">Drop here</span><span class="hi">यहाँ छोड़ें</span>';
            
            const targetText = document.createElement('div');
            targetText.className = 'target-text';
            targetText.innerHTML = item.right;
            
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('drag-over');
            });
            
            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('drag-over');
            });
            
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('drag-over');
                const draggedId = e.dataTransfer.getData('text/plain');
                
                if (draggedId === dropZone.dataset.matchId) {
                    dropZone.classList.add('match-success');
                    dropZone.innerHTML = '<i class="fas fa-check-circle"></i>';
                    const draggedElement = document.querySelector(`.drag-item[data-id="${draggedId}"]`);
                    if (draggedElement) {
                        draggedElement.classList.add('matched');
                        draggedElement.draggable = false;
                        dropZone.appendChild(draggedElement);
                    }
                    if(window.playSound) window.playSound('success');
                    
                    matchesFound++;
                    if (matchesFound === 4) {
                        handleRoundComplete();
                    }
                } else {
                    dropZone.classList.add('match-error');
                    if(window.playSound) window.playSound('error');
                    setTimeout(() => {
                        dropZone.classList.remove('match-error');
                    }, 500);
                }
            });
            
            dropZoneContainer.appendChild(dropZone);
            dropZoneContainer.appendChild(targetText);
            rightCol.appendChild(dropZoneContainer);
        });

        board.appendChild(leftCol);
        board.appendChild(rightCol);
        container.appendChild(header);
        container.appendChild(board);
    }

    // --- OBJECTIVE (MCQ) MODE ---
    function renderMCQ() {
        if (!window.MCQ_POOL || window.MCQ_POOL.length === 0) {
            gamesPlayed++; // skip if no MCQ
            nextRound();
            return;
        }

        const board = document.createElement('div');
        board.className = 'game-board mcq-board';
        
        let q = window.MCQ_POOL[Math.floor(Math.random() * window.MCQ_POOL.length)];
        
        const header = document.createElement('h3');
        header.className = 'game-header mcq-question';
        header.innerHTML = q.question;
        
        const optionsGrid = document.createElement('div');
        optionsGrid.className = 'mcq-options';

        q.options.forEach((optHTML, idx) => {
            const btn = document.createElement('button');
            btn.className = 'mcq-option-btn glass-card';
            btn.innerHTML = optHTML;
            btn.onclick = () => {
                // Disable all buttons
                document.querySelectorAll('.mcq-option-btn').forEach(b => b.disabled = true);
                if (idx === q.correctIndex) {
                    btn.classList.add('correct');
                    if(window.playSound) window.playSound('success');
                    handleRoundComplete();
                } else {
                    btn.classList.add('wrong');
                    if(window.playSound) window.playSound('error');
                    // Show correct
                    document.querySelectorAll('.mcq-option-btn')[q.correctIndex].classList.add('correct');
                    // Still move to next round after penalty delay
                    setTimeout(handleRoundComplete, 1500);
                }
            };
            optionsGrid.appendChild(btn);
        });

        board.appendChild(header);
        board.appendChild(optionsGrid);
        container.appendChild(board);
    }

    function handleRoundComplete() {
        gamesPlayed++;
        const overlay = document.createElement('div');
        overlay.className = 'round-complete-overlay';
        overlay.innerHTML = '<i class="fas fa-star round-star"></i><h2 class="round-text"><span class="en">Excellent! Loading next...</span><span class="hi">बहुत बढ़िया! अगला आ रहा है...</span></h2>';
        container.appendChild(overlay);
        
        setTimeout(() => {
            nextRound();
        }, 2000);
    }

    // Start first round
    nextRound();
};
