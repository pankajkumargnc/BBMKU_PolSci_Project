import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove Google Translate script and div
html = re.sub(r'<div id="google_translate_element" .*?</div>', '', html)
html = re.sub(r'<script type="text/javascript">.*?googleTranslateElementInit.*?</script>', '', html, flags=re.DOTALL)
html = re.sub(r'<script type="text/javascript" src="//translate\.google\.com/translate_a/element\.js\?cb=googleTranslateElementInit"></script>', '', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
