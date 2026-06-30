/**
 * Dashboard Logic - Pomodoro & Progress Tracker (LocalStorage)
 */

document.addEventListener('DOMContentLoaded', () => {
    initPomodoro();
    initProgressTracker();
});

function initPomodoro() {
    let timeLeft = 25 * 60; // 25 minutes
    let timerId = null;
    let isWorking = true;

    const display = document.getElementById('timer-display');
    const status = document.getElementById('timer-status');
    const btnStart = document.getElementById('start-timer');
    const btnPause = document.getElementById('pause-timer');
    const btnReset = document.getElementById('reset-timer');

    if (!display) return;

    function updateDisplay() {
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        display.textContent = `${m}:${s}`;
    }

    function startTimer() {
        if (timerId) return;
        status.innerHTML = isWorking 
            ? '<span class="en">Focus Time!</span><span class="hi">पढ़ाई का समय!</span>' 
            : '<span class="en">Break Time!</span><span class="hi">ब्रेक का समय!</span>';
        
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerId);
                timerId = null;
                if(window.playSound) window.playSound('success');
                
                isWorking = !isWorking;
                timeLeft = isWorking ? 25 * 60 : 5 * 60;
                updateDisplay();
                alert(isWorking ? "Break is over! Back to study." : "Great job! Take a 5 minute break.");
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerId);
        timerId = null;
        status.innerHTML = '<span class="en">Paused</span><span class="hi">रुका हुआ</span>';
    }

    function resetTimer() {
        clearInterval(timerId);
        timerId = null;
        isWorking = true;
        timeLeft = 25 * 60;
        updateDisplay();
        status.innerHTML = '<span class="en">Ready to study!</span><span class="hi">पढ़ाई के लिए तैयार!</span>';
    }

    btnStart.addEventListener('click', startTimer);
    btnPause.addEventListener('click', pauseTimer);
    btnReset.addEventListener('click', resetTimer);
    updateDisplay();
}

function initProgressTracker() {
    const checkboxes = document.querySelectorAll('.sem-check');
    const progressBar = document.getElementById('circular-progress');
    const progressText = document.getElementById('progress-text');

    if (!progressBar) return;

    // Load from LocalStorage
    const savedProgress = JSON.parse(localStorage.getItem('bbmku_progress') || '{}');

    function updateProgress() {
        let completed = 0;
        checkboxes.forEach(chk => {
            if (chk.checked) completed++;
            savedProgress[chk.dataset.sem] = chk.checked;
        });
        
        localStorage.setItem('bbmku_progress', JSON.stringify(savedProgress));

        const percentage = Math.round((completed / checkboxes.length) * 100) || 0;
        progressBar.style.background = `conic-gradient(var(--primary-color) ${percentage * 3.6}deg, var(--border-color) 0deg)`;
        progressText.textContent = `${percentage}%`;

        if (percentage === 100) {
            progressBar.style.background = `conic-gradient(#10b981 360deg, var(--border-color) 0deg)`;
        }
    }

    checkboxes.forEach(chk => {
        if (savedProgress[chk.dataset.sem]) {
            chk.checked = true;
        }
        chk.addEventListener('change', updateProgress);
    });

    updateProgress();
}
