import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update Typography
css = re.sub(r'--font-primary:.*?;', "--font-primary: 'Outfit', sans-serif;", css)
css = re.sub(r'--font-secondary:.*?;', "--font-secondary: 'Playfair Display', serif;", css)

# 2. Update Dark Mode to Neon Black
dark_updates = """
[data-theme="dark"] {
  --bg-color: #0b0f19;
  --card-bg: #111827;
  --border-color: rgba(99, 102, 241, 0.2);
  --text-color: #f8fafc;
  --text-light: #94a3b8;
  --primary-color: #6366f1;
  --primary-hover: #4f46e5;
  --shadow-light: 0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06);
}

[data-theme="dark"] .glass-card {
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
}

[data-theme="dark"] .glass-card:hover {
  box-shadow: 0 0 25px rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}
"""
css = re.sub(r'\[data-theme="dark"\] \{[\s\S]*?\}', '', css) # Remove old dark mode vars
css += dark_updates

# 3. Add Custom Scrollbar & Highlight
scrollbar_css = """
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: var(--bg-color);
}
::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--primary-hover);
}

/* Custom Selection */
::selection {
  background: var(--primary-color);
  color: white;
}
"""
if "::-webkit-scrollbar" not in css:
    css += scrollbar_css

# 4. Circular Progress & Bento Box CSS
bento_css = """
/* Circular Progress */
.circular-progress {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: conic-gradient(var(--primary-color) 0deg, var(--border-color) 0deg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
  transition: all 0.5s ease-in-out;
}

.inner-circle {
  position: absolute;
  height: 120px;
  width: 120px;
  background-color: var(--card-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.inner-circle #progress-text {
  font-size: 2.2rem;
  font-weight: 800;
  font-family: var(--font-secondary);
  color: var(--primary-color);
}

/* Bento Grid */
.pro-dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 10px;
}

.dashboard-widget {
  border-radius: 24px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.pomodoro-widget {
  grid-column: span 1;
}

.progress-widget {
  grid-column: span 1;
}

@media (min-width: 900px) {
  .pro-dashboard-grid {
    grid-template-columns: 1fr 1fr;
  }
}
"""
if ".circular-progress" not in css:
    css += bento_css

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("Applied Advanced CSS Overhaul.")
