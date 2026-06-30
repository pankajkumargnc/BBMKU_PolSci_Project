import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

pro_css = """
/* Pro Dashboard & Advanced Games CSS */

.pro-dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.dashboard-widget {
  padding: 30px;
  text-align: center;
}

.timer-display {
  font-size: 5rem;
  font-weight: 800;
  color: var(--primary-color);
  margin: 20px 0;
  font-family: monospace;
}

.timer-controls .btn {
  margin: 0 10px;
  font-size: 1.5rem;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.progress-bar-container {
  background: var(--bg-color);
  border-radius: 20px;
  height: 20px;
  width: 100%;
  margin: 20px 0;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
  transition: width 0.5s ease, background 0.5s ease;
}

.semester-checkboxes {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

/* Mock Test UI */
.mock-test-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  background: var(--card-bg);
  border-radius: 10px;
  border: 1px solid var(--primary-color);
}

.mock-timer {
  font-size: 2rem;
  font-weight: bold;
  color: #ef4444;
}

.mock-test-layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

.mock-q-card {
  padding: 30px;
}

.mock-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.mock-opt-label {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.mock-opt-label:hover {
  border-color: var(--primary-color);
  background: rgba(99,102,241,0.05);
}

.mock-opt-label input {
  transform: scale(1.5);
}

.mock-nav-btns {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.palette-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  gap: 10px;
  margin-top: 15px;
}

.palette-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background: var(--bg-color);
}

.palette-box.answered {
  background: #10b981;
  color: white;
  border-color: #059669;
}

.palette-box.current {
  border: 2px solid var(--primary-color);
  transform: scale(1.1);
}

.result-card {
  text-align: center;
  padding: 50px;
  font-size: 1.5rem;
}

/* Chronology Game */
.chronology-list {
  max-width: 600px;
  margin: 0 auto;
}

.chronology-item {
  padding: 20px;
  margin-bottom: 15px;
  cursor: grab;
  font-size: 1.2rem;
  font-weight: bold;
}

.chronology-item.dragging {
  opacity: 0.5;
  cursor: grabbing;
}

.drag-handle {
  margin-right: 15px;
  color: var(--text-light);
  cursor: grab;
}

/* Debate Game */
.debate-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.debate-statements {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.debate-card {
  padding: 15px;
  cursor: grab;
  font-weight: 600;
}

.debate-zones {
  display: flex;
  gap: 20px;
}

.debate-zone {
  flex: 1;
  min-height: 400px;
  padding: 20px;
  border: 2px dashed var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: all 0.3s;
}

.debate-zone.drag-over {
  background: rgba(99,102,241,0.1);
  border-color: var(--primary-color);
}

.pro-zone h4 { color: #10b981; text-align: center; margin-bottom: 15px; font-size: 1.5rem;}
.con-zone h4 { color: #ef4444; text-align: center; margin-bottom: 15px; font-size: 1.5rem;}

@media (max-width: 900px) {
  .pro-dashboard-grid, .mock-test-layout, .debate-layout, .debate-zones {
    grid-template-columns: 1fr;
  }
}
"""

if "Pro Dashboard & Advanced Games CSS" not in css:
    css += pro_css
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Added Pro Features CSS.")
else:
    print("Pro CSS already exists.")
