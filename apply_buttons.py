import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Universal Premium Button Styling
universal_btn_css = """
/* =========================================
   UNIVERSAL PREMIUM MULTICOLOR BUTTONS
   ========================================= */
button, .btn, .control-btn, .print-btn, #submit-test, .bottom-nav-item, .nav-item {
  /* Override basic styles for uniformity, but carefully for nav */
}

/* We specifically target ACTION buttons for the uniform size and gradient */
button:not(.nav-item):not(.bottom-nav-item):not(.mcq-option-btn), 
.btn, .print-btn, .control-btn, #submit-test {
  background: linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc, #ff00cc);
  background-size: 400% 400%;
  animation: gradientBG 8s ease infinite;
  color: white !important;
  border: none !important;
  border-radius: 30px !important;
  padding: 12px 30px !important;
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  font-family: var(--font-primary) !important;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px;
  min-width: 150px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Exception for Pomodoro circular buttons to keep them round but same theme */
.timer-controls .btn {
  border-radius: 50% !important;
  width: 60px !important;
  height: 60px !important;
  min-width: 60px !important;
  padding: 0 !important;
}

/* Exception for Language Toggle */
#lang-toggle {
  min-width: 50px !important;
  border-radius: 20px !important;
  padding: 8px 15px !important;
}

button:not(.nav-item):not(.bottom-nav-item):not(.mcq-option-btn):hover, 
.btn:hover, .print-btn:hover, .control-btn:hover, #submit-test:hover {
  transform: translateY(-3px) scale(1.05) !important;
  box-shadow: 0 8px 25px rgba(255, 0, 204, 0.4);
}

button:not(.nav-item):not(.bottom-nav-item):not(.mcq-option-btn):active, 
.btn:active, .print-btn:active, .control-btn:active {
  transform: translateY(1px) scale(0.98) !important;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
"""

if "UNIVERSAL PREMIUM MULTICOLOR BUTTONS" not in css:
    css += universal_btn_css
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Added universal premium button styles.")
else:
    print("Premium button styles already exist.")

# Bust cache again
import time
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

v = str(int(time.time()))
html = re.sub(r'\?v=[0-9]+"', f'?v={v}"', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Cache busting applied with v={v}")
