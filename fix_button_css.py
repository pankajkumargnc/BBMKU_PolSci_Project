import re
import time

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix the button selector to exclude flashcard buttons and toggle buttons
old_selector = r'button:not\(\.nav-item\):not\(\.bottom-nav-item\):not\(\.mcq-option-btn\),[\s\n]*\.btn, \.print-btn, \.control-btn, #submit-test \{'
new_selector = r"""/* Specific action buttons ONLY, excluding flashcard, nav, and toggle controls */
button.btn, .print-btn, #submit-test, button.mock-action-btn {"""

css = re.sub(old_selector, new_selector, css)

# Fix hover selector
old_hover = r'button:not\(\.nav-item\):not\(\.bottom-nav-item\):not\(\.mcq-option-btn\):hover,[\s\n]*\.btn:hover, \.print-btn:hover, \.control-btn:hover, #submit-test:hover \{'
new_hover = r'button.btn:hover, .print-btn:hover, #submit-test:hover, button.mock-action-btn:hover {'
css = re.sub(old_hover, new_hover, css)

# Fix active selector
old_active = r'button:not\(\.nav-item\):not\(\.bottom-nav-item\):not\(\.mcq-option-btn\):active,[\s\n]*\.btn:active, \.print-btn:active, \.control-btn:active \{'
new_active = r'button.btn:active, .print-btn:active, button.mock-action-btn:active {'
css = re.sub(old_active, new_active, css)

# Revert language toggle exception since we are no longer applying universal style to it
# Keep it as it was originally defined (small and round)
if "/* Exception for Language Toggle */" in css:
    css = re.sub(r'/\* Exception for Language Toggle \*/[\s\S]*?#lang-toggle \{[\s\S]*?\}', '', css)

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Update index.html to bust cache
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

v = str(int(time.time()))
html = re.sub(r'\?v=[0-9]+"', f'?v={v}"', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("CSS Fixed and Cache Busted.")
