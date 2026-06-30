import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the specific block that adds ::before
css = re.sub(r'\.search-container::before \{[\s\S]*?\}', '', css)
css = re.sub(r'\.search-container input:focus \+ ::before \{[\s\S]*?\}', '', css)

# Add styling for existing search-icon
icon_css = """
.search-container .search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  pointer-events: none;
  transition: color 0.3s ease;
  z-index: 10;
}

.search-container input:focus ~ .search-icon {
  color: var(--primary-color);
}
"""
if ".search-container .search-icon" not in css:
    css += icon_css

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("Fixed search icon CSS.")
