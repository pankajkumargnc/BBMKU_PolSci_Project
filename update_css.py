import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add premium table CSS
table_css = """
/* Premium Table Design */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--card-bg);
}

th {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  color: white;
  text-align: left;
  padding: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.9rem;
}

td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
  vertical-align: middle;
}

tr:last-child td {
  border-bottom: none;
}

tr:hover td {
  background-color: rgba(99, 102, 241, 0.05);
  transition: background-color 0.3s ease;
}

[data-theme="dark"] tr:hover td {
  background-color: rgba(99, 102, 241, 0.1);
}

/* Enhancing the Search Field */
.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.search-container input {
  width: 100%;
  padding: 12px 20px 12px 45px;
  border-radius: 30px;
  border: 2px solid var(--border-color);
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.search-container input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  transform: scale(1.02);
}

.search-container::before {
  content: "\\f002"; /* FontAwesome search icon */
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  pointer-events: none;
  transition: color 0.3s ease;
}

.search-container input:focus + ::before {
  color: var(--primary-color);
}
"""

# check if already added
if "Premium Table Design" not in css:
    css += table_css
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("CSS updated successfully.")
else:
    print("CSS already updated.")
