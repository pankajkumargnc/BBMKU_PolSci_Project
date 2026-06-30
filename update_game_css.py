import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

game_css = """
/* Endless Game Enhancements */
.game-board {
  position: relative;
  min-height: 400px;
}

.game-header {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: var(--primary-color);
  font-weight: 700;
}

.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .glass-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* MCQ Mode */
.mcq-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.mcq-question {
  font-size: 1.8rem;
  margin-bottom: 40px;
  line-height: 1.4;
}

.mcq-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.mcq-option-btn {
  padding: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  color: var(--text-color);
  font-family: inherit;
  font-weight: 600;
}

.mcq-option-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  border-color: var(--primary-color);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
}

.mcq-option-btn.correct {
  background: rgba(16, 185, 129, 0.2) !important;
  border-color: #10b981 !important;
  color: #059669;
}

.mcq-option-btn.wrong {
  background: rgba(239, 68, 68, 0.2) !important;
  border-color: #ef4444 !important;
  color: #b91c1c;
}

[data-theme="dark"] .mcq-option-btn.correct {
  color: #34d399;
}

[data-theme="dark"] .mcq-option-btn.wrong {
  color: #f87171;
}

/* Overlay Animation */
.round-complete-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  border-radius: 16px;
  animation: fadeIn 0.3s ease-out forwards;
}

[data-theme="dark"] .round-complete-overlay {
  background: rgba(15, 23, 42, 0.85);
}

.round-star {
  font-size: 5rem;
  color: #f59e0b;
  margin-bottom: 20px;
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.round-text {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-color);
  animation: slideUp 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  80% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 768px) {
  .mcq-options {
    grid-template-columns: 1fr;
  }
}
"""

if "Endless Game Enhancements" not in css:
    css += game_css
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Added Game CSS.")
else:
    print("Game CSS already exists.")
