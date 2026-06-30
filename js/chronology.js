/**
 * Chronology Builder Game Logic
 */

window.initChronologyGame = function() {
    const container = document.getElementById('chronology-game-container');
    if (!container || !window.CHRONOLOGY_DATA) return;

    container.innerHTML = '';
    
    // Shuffle items
    let items = [...window.CHRONOLOGY_DATA].sort(() => Math.random() - 0.5);
    
    const list = document.createElement('div');
    list.className = 'chronology-list';
    
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'chronology-item glass-card';
        div.draggable = true;
        div.dataset.year = item.year;
        div.innerHTML = `<i class="fas fa-grip-lines drag-handle"></i> ${item.text}`;
        
        div.addEventListener('dragstart', (e) => {
            div.classList.add('dragging');
        });
        
        div.addEventListener('dragend', () => {
            div.classList.remove('dragging');
            checkOrder();
        });
        
        list.appendChild(div);
    });
    
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement == null) {
            list.appendChild(dragging);
        } else {
            list.insertBefore(dragging, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.chronology-item:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn';
    checkBtn.style.marginTop = '20px';
    checkBtn.innerHTML = '<span class="en">Check Order</span><span class="hi">क्रम जाँचे</span>';
    
    const resultMsg = document.createElement('p');
    resultMsg.style.marginTop = '15px';
    resultMsg.style.fontWeight = 'bold';

    function checkOrder() {
        // Just clear the message on drag
        resultMsg.innerHTML = '';
    }

    checkBtn.onclick = () => {
        const currentItems = [...list.querySelectorAll('.chronology-item')];
        let isCorrect = true;
        
        for (let i = 0; i < currentItems.length - 1; i++) {
            if (parseInt(currentItems[i].dataset.year) > parseInt(currentItems[i+1].dataset.year)) {
                isCorrect = false;
                break;
            }
        }
        
        if (isCorrect) {
            resultMsg.innerHTML = '<span class="en" style="color: #10b981;">Perfect! Correct chronological order.</span><span class="hi" style="color: #10b981;">बिल्कुल सही! सही कालानुक्रम।</span>';
            if(window.playSound) window.playSound('success');
            currentItems.forEach(item => {
                item.innerHTML += ` <span style="float:right; color:#10b981;">(${item.dataset.year})</span>`;
                item.draggable = false;
            });
            checkBtn.style.display = 'none';
        } else {
            resultMsg.innerHTML = '<span class="en" style="color: #ef4444;">Not quite right. Keep trying!</span><span class="hi" style="color: #ef4444;">पूरी तरह सही नहीं है। पुनः प्रयास करें!</span>';
            if(window.playSound) window.playSound('error');
        }
    };
    
    container.appendChild(list);
    container.appendChild(checkBtn);
    container.appendChild(resultMsg);
};
