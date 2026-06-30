import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Navigation
nav_updates = """
      <li class="nav-separator"><span class="hi">प्रो गेम्स & टेस्ट 🏆</span><span class="en">Pro Games & Tests 🏆</span></li>
      <li class="nav-item" data-tab="mock-test"><i class="fas fa-stopwatch"></i> <span class="hi">PYQ मॉक टेस्ट</span><span class="en">PYQ Mock Test</span></li>
      <li class="nav-item" data-tab="chronology"><i class="fas fa-sort-numeric-down"></i> <span class="hi">क्रोनोलॉजी गेम</span><span class="en">Chronology Game</span></li>
      <li class="nav-item" data-tab="debate"><i class="fas fa-balance-scale"></i> <span class="hi">डिबेट / आर्गुमेंट</span><span class="en">Debate Mode</span></li>
"""
if 'data-tab="mock-test"' not in html:
    html = html.replace('</ul>\n  </aside>', nav_updates + '</ul>\n  </aside>')

# 2. Update Dashboard (Home) to add Pomodoro & Progress Tracker
dashboard_widgets = """
        <!-- PRO DASHBOARD WIDGETS -->
        <div class="pro-dashboard-grid">
          <div class="dashboard-widget pomodoro-widget glass-card">
            <h3><i class="fas fa-clock"></i> <span class="en">Pomodoro Timer</span><span class="hi">पोमोडोरो टाइमर</span></h3>
            <div class="timer-display" id="timer-display">25:00</div>
            <div class="timer-controls">
              <button id="start-timer" class="btn"><i class="fas fa-play"></i></button>
              <button id="pause-timer" class="btn"><i class="fas fa-pause"></i></button>
              <button id="reset-timer" class="btn"><i class="fas fa-undo"></i></button>
            </div>
            <p id="timer-status" class="timer-status"><span class="en">Ready to study!</span><span class="hi">पढ़ाई के लिए तैयार!</span></p>
          </div>
          
          <div class="dashboard-widget progress-widget glass-card">
            <h3><i class="fas fa-chart-line"></i> <span class="en">Syllabus Progress</span><span class="hi">सिलेबस प्रगति</span></h3>
            <div class="progress-bar-container">
              <div class="progress-bar" id="overall-progress" style="width: 0%"></div>
            </div>
            <p><span class="en">Overall Completion: </span><span class="hi">कुल प्रगति: </span><span id="progress-text">0%</span></p>
            <div class="semester-checkboxes">
              <label><input type="checkbox" class="sem-check" data-sem="1"> Semester 1</label>
              <label><input type="checkbox" class="sem-check" data-sem="2"> Semester 2</label>
              <label><input type="checkbox" class="sem-check" data-sem="3"> Semester 3</label>
              <label><input type="checkbox" class="sem-check" data-sem="4"> Semester 4</label>
            </div>
          </div>
        </div>
"""
if 'pro-dashboard-grid' not in html:
    html = html.replace('<!-- HOME DASHBOARD -->\n      <div id="home" class="tab-pane active">', 
                        '<!-- HOME DASHBOARD -->\n      <div id="home" class="tab-pane active">\n' + dashboard_widgets)

# 3. Add New Tab Panes before </div> <!-- End main-content -->
new_tabs = """
      <!-- MOCK TEST TAB -->
      <div id="mock-test" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-stopwatch"></i> <span class="en">UGC NET PYQ Mock Test</span><span class="hi">UGC NET PYQ मॉक टेस्ट</span></h2>
        <div class="mock-test-header">
          <div class="mock-timer" id="mock-timer">60:00</div>
          <button id="submit-test" class="btn"><span class="en">Submit Test</span><span class="hi">टेस्ट सबमिट करें</span></button>
        </div>
        <div class="mock-test-layout">
          <div class="mock-questions" id="mock-questions-container"></div>
          <div class="mock-palette glass-card">
            <h4><span class="en">Question Palette</span><span class="hi">प्रश्न पैलेट</span></h4>
            <div id="mock-palette-grid" class="palette-grid"></div>
          </div>
        </div>
        <div id="mock-result" style="display:none;" class="glass-card result-card"></div>
      </div>

      <!-- CHRONOLOGY TAB -->
      <div id="chronology" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-sort-numeric-down"></i> <span class="en">Chronology Builder Game</span><span class="hi">क्रोनोलॉजी मेकर गेम</span></h2>
        <p class="intro-text"><span class="en">Drag and drop the events/books in the correct chronological order (oldest to newest).</span><span class="hi">घटनाओं/पुस्तकों को ड्रैग करके सही कालानुक्रम (पुराने से नए) में सजाएं।</span></p>
        <div id="chronology-game-container"></div>
      </div>

      <!-- DEBATE TAB -->
      <div id="debate" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-balance-scale"></i> <span class="en">Argument Builder (Debate Mode)</span><span class="hi">आर्गुमेंट बिल्डर (डिबेट मोड)</span></h2>
        <p class="intro-text"><span class="en">Drag the statements to the correct side (Pros vs Cons) for a given topic.</span><span class="hi">दिए गए विषय के लिए कथनों को सही पक्ष (समर्थन या आलोचना) में ड्रैग करें।</span></p>
        <div id="debate-game-container"></div>
      </div>
"""
if 'id="mock-test"' not in html:
    html = html.replace('    </div>\n  </main>', new_tabs + '    </div>\n  </main>')

# 4. Add Scripts
scripts = """
  <script src="js/dashboard.js"></script>
  <script src="data/mock-data.js"></script>
  <script src="js/mock-test.js"></script>
  <script src="data/advanced-games-data.js"></script>
  <script src="js/chronology.js"></script>
  <script src="js/debate.js"></script>
"""
if 'js/dashboard.js' not in html:
    html = html.replace('</body>', scripts + '\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html architecture successfully.")
