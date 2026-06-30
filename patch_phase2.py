import re
import time

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Navigation Menu
nav_injection = """
      <li class="nav-separator"><span class="hi">एडवांस्ड मास्टरक्लास 🚀</span><span class="en">Advanced Masterclass 🚀</span></li>
      <li class="nav-item" data-tab="research-assistant"><i class="fas fa-microscope"></i> <span class="hi">रिसर्च असिस्टेंट</span><span class="en">Research Assistant</span></li>
      <li class="nav-item" data-tab="compass-game"><i class="fas fa-compass"></i> <span class="hi">पॉलिटिकल कंपास</span><span class="en">Political Compass</span></li>
      <li class="nav-item" data-tab="ar-masterclass"><i class="fas fa-brain"></i> <span class="hi">A/R मास्टरक्लास</span><span class="en">A/R Masterclass</span></li>
      <li class="nav-item" data-tab="mind-map"><i class="fas fa-project-diagram"></i> <span class="hi">माइंड मैप</span><span class="en">Mind Map</span></li>
      <li class="nav-item" data-tab="policy-sim"><i class="fas fa-city"></i> <span class="hi">पॉलिसी सिम्युलेटर</span><span class="en">Policy Simulator</span></li>
"""
if 'data-tab="research-assistant"' not in html:
    html = html.replace('</ul>\n  </aside>', nav_injection + '</ul>\n  </aside>')

# 2. Add the Scholar Quote Container to the Dashboard
quote_html = """
        <!-- SCHOLAR QUOTE WIDGET -->
        <div class="dashboard-widget scholar-quote-widget glass-card" style="margin-bottom: 20px;">
          <h3><i class="fas fa-quote-left"></i> <span class="en">Daily Scholar Quote</span><span class="hi">दैनिक सुविचार</span></h3>
          <p id="typewriter-text" style="font-size: 1.3rem; font-family: var(--font-secondary); min-height: 50px; margin-top: 15px;"></p>
        </div>
"""
if 'scholar-quote-widget' not in html:
    html = html.replace('<div class="pro-dashboard-grid">', quote_html + '\n        <div class="pro-dashboard-grid">')

# 3. Add Tab Panes
new_tabs = """
      <!-- RESEARCH ASSISTANT TAB -->
      <div id="research-assistant" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-microscope"></i> <span class="en">Research & Dissertation Assistant</span><span class="hi">शोध प्रबंध एवं रिसर्च असिस्टेंट</span></h2>
        
        <div class="glass-card" style="padding: 20px; margin-bottom: 20px;">
          <h3><i class="fas fa-book"></i> <span class="en">Citation Generator (APA & MLA)</span><span class="hi">उद्धरण जनरेटर</span></h3>
          <div style="display: grid; gap: 15px; margin-top: 15px;">
            <input type="text" id="cit-author" placeholder="Author Last, First (e.g., Marx, Karl)" class="search-input">
            <input type="text" id="cit-year" placeholder="Year (e.g., 1867)" class="search-input">
            <input type="text" id="cit-title" placeholder="Book Title (e.g., Das Kapital)" class="search-input">
            <input type="text" id="cit-publisher" placeholder="Publisher (e.g., Penguin)" class="search-input">
            <div>
              <button class="btn" onclick="generateCitation('APA')">Generate APA</button>
              <button class="btn" onclick="generateCitation('MLA')">Generate MLA</button>
            </div>
          </div>
          <div id="citation-output" style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.1); border-left: 4px solid var(--primary-color); font-family: monospace; font-size: 1.1rem;">
            Generated citation will appear here...
          </div>
        </div>
      </div>

      <!-- COMPASS GAME TAB -->
      <div id="compass-game" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-compass"></i> <span class="en">Political Compass Analyzer</span><span class="hi">पॉलिटिकल कंपास विश्लेषक</span></h2>
        <div id="compass-container" style="text-align: center;">
          <div id="compass-grid" class="glass-card" style="position: relative; width: 300px; height: 300px; margin: 0 auto; background: conic-gradient(from 45deg, #ef4444 25%, #3b82f6 25% 50%, #10b981 50% 75%, #f59e0b 75%); border-radius: 5px; border: 2px solid white;">
            <!-- Axes -->
            <div style="position:absolute; top: 50%; left: 0; width: 100%; height: 2px; background: black;"></div>
            <div style="position:absolute; top: 0; left: 50%; width: 2px; height: 100%; background: black;"></div>
            <!-- Marker -->
            <div id="compass-marker" style="position:absolute; top: 50%; left: 50%; width: 12px; height: 12px; background: white; border: 2px solid black; border-radius: 50%; transform: translate(-50%, -50%); transition: all 0.5s;"></div>
          </div>
          <div id="compass-questions" style="margin-top: 30px;">
            <p id="compass-q-text" style="font-size: 1.2rem; font-weight: bold;"></p>
            <div style="margin-top: 15px; display: flex; justify-content: center; gap: 10px;">
              <button class="btn" onclick="answerCompass(1)">Agree</button>
              <button class="btn" onclick="answerCompass(-1)">Disagree</button>
            </div>
          </div>
          <h3 id="compass-result" style="margin-top: 20px; color: var(--primary-color);"></h3>
        </div>
      </div>

      <!-- AR MASTERCLASS TAB -->
      <div id="ar-masterclass" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-brain"></i> <span class="en">Assertion-Reasoning (A/R) Masterclass</span><span class="hi">अभिकथन-कारण मास्टरक्लास</span></h2>
        <div id="ar-container"></div>
      </div>

      <!-- MIND MAP TAB -->
      <div id="mind-map" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-project-diagram"></i> <span class="en">Interactive Concept Mind Map</span><span class="hi">इंटरैक्टिव माइंड मैप</span></h2>
        <div id="mindmap-container" style="text-align: center; padding: 20px;" class="glass-card">
          <p><span class="en">Click nodes to expand!</span><span class="hi">विस्तार करने के लिए नोड्स पर क्लिक करें!</span></p>
          <div id="map-root" class="map-node root-node" onclick="expandNode('root')">Marxism</div>
          <div id="map-children" style="display:flex; justify-content: center; gap: 20px; margin-top: 30px; opacity: 0; transition: opacity 0.5s;">
             <div class="map-node child-node">Class Struggle</div>
             <div class="map-node child-node">Surplus Value</div>
             <div class="map-node child-node">Historical Materialism</div>
          </div>
        </div>
      </div>

      <!-- POLICY SIMULATOR TAB -->
      <div id="policy-sim" class="tab-pane">
        <h2 class="semester-title"><i class="fas fa-city"></i> <span class="en">Public Admin: Policy Simulator</span><span class="hi">लोक प्रशासन: पॉलिसी सिम्युलेटर</span></h2>
        <div id="policy-container" class="glass-card" style="padding: 30px; text-align: center;">
          <h3 id="sim-scenario" style="color: #ef4444; margin-bottom: 20px;">Crisis: Severe Economic Inflation!</h3>
          <p id="sim-desc" style="font-size: 1.1rem; margin-bottom: 20px;">Prices are skyrocketing. The public is angry. As the Chief Policy Advisor, what do you recommend?</p>
          <div style="display: flex; flex-direction: column; gap: 15px;">
             <button class="btn" onclick="playSim('keynes')">Option A: Increase Government Spending (Keynesian)</button>
             <button class="btn" onclick="playSim('monetarist')">Option B: Raise Interest Rates (Monetarist)</button>
          </div>
          <div id="sim-result" style="margin-top: 20px; font-weight: bold; font-size: 1.2rem;"></div>
        </div>
      </div>
"""
if 'id="research-assistant"' not in html:
    html = html.replace('    </div>\n  </main>', new_tabs + '    </div>\n  </main>')

# 4. Add Scripts
scripts = """
  <script src="js/phase2-logic.js?v={v}"></script>
"""
v = str(int(time.time()))
scripts = scripts.replace('{v}', v)

if 'phase2-logic.js' not in html:
    html = html.replace('</body>', scripts + '\n</body>')

# Cache Bust overall
html = re.sub(r'\?v=[0-9]+"', f'?v={v}"', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html architecture successfully.")
