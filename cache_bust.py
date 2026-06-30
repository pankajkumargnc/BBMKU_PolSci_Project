import re
import time

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add a timestamp query parameter to local CSS and JS files to bust cache
v = str(int(time.time()))

html = re.sub(r'href="css/style\.css(\?v=[0-9]+)?"', f'href="css/style.css?v={v}"', html)
html = re.sub(r'src="js/app\.js(\?v=[0-9]+)?"', f'src="js/app.js?v={v}"', html)
html = re.sub(r'src="js/dashboard\.js(\?v=[0-9]+)?"', f'src="js/dashboard.js?v={v}"', html)
html = re.sub(r'src="data/mock-data\.js(\?v=[0-9]+)?"', f'src="data/mock-data.js?v={v}"', html)
html = re.sub(r'src="js/mock-test\.js(\?v=[0-9]+)?"', f'src="js/mock-test.js?v={v}"', html)
html = re.sub(r'src="data/advanced-games-data\.js(\?v=[0-9]+)?"', f'src="data/advanced-games-data.js?v={v}"', html)
html = re.sub(r'src="js/chronology\.js(\?v=[0-9]+)?"', f'src="js/chronology.js?v={v}"', html)
html = re.sub(r'src="js/debate\.js(\?v=[0-9]+)?"', f'src="js/debate.js?v={v}"', html)
html = re.sub(r'src="data/matching-data\.js(\?v=[0-9]+)?"', f'src="data/matching-data.js?v={v}"', html)
html = re.sub(r'src="js/matching\.js(\?v=[0-9]+)?"', f'src="js/matching.js?v={v}"', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Cache busting applied with v={v}")
