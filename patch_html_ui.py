import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Inject Fonts and AOS CSS in the <head>
head_injection = """
  <!-- Google Fonts: Playfair Display & Outfit -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap" rel="stylesheet">
  
  <!-- AOS Animation Library -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
"""
if "family=Outfit" not in html:
    html = html.replace('</head>', head_injection + '\n</head>')

# 2. Inject AOS JS and init script before </body>
script_injection = """
  <!-- AOS Script -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
  </script>
"""
if "aos.js" not in html:
    html = html.replace('</body>', script_injection + '\n</body>')

# 3. Add AOS fade-up to major elements
# For paper-sections
html = html.replace('<div class="paper-section">', '<div class="paper-section" data-aos="fade-up">')
# For dashboard widgets
html = html.replace('<div class="dashboard-widget', '<div data-aos="zoom-in" class="dashboard-widget')
# For mock test layout
html = html.replace('<div class="mock-q-card', '<div data-aos="fade-right" class="mock-q-card')
html = html.replace('<div class="mock-palette', '<div data-aos="fade-left" class="mock-palette')

# 4. Modify Dashboard Progress Tracker HTML to use a Circular Ring layout
old_progress_html = """            <div class="progress-bar-container">
              <div class="progress-bar" id="overall-progress" style="width: 0%"></div>
            </div>
            <p><span class="en">Overall Completion: </span><span class="hi">कुल प्रगति: </span><span id="progress-text">0%</span></p>"""

new_progress_html = """
            <div class="circular-progress" id="circular-progress">
              <div class="inner-circle">
                <span id="progress-text">0%</span>
              </div>
            </div>
            <p style="margin-top: 15px;"><span class="en">Overall Completion</span><span class="hi">कुल प्रगति</span></p>
"""
if 'class="circular-progress"' not in html:
    html = html.replace(old_progress_html, new_progress_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("index.html patched with Fonts, AOS, and Circular Ring layout.")
