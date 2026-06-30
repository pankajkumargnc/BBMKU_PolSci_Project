import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add Google Translate element right after the lang-toggle button
google_translate_html = """
        <button id="lang-toggle" class="btn-icon" aria-label="Toggle Language" title="Change Language">
          <i class="fas fa-language"></i> <span class="lang-text">A/अ</span>
        </button>
        <div id="google_translate_element" style="display:inline-block; margin-left: 10px; vertical-align: middle;"></div>
"""

html = re.sub(r'<button id="lang-toggle"[^>]*>.*?</button>', google_translate_html, html, flags=re.DOTALL)

# Add script at the end of body
google_script = """
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'hi,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
"""

html = html.replace('</body>', google_script)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Added Google Translate widget.")
