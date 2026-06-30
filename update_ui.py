import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Glassmorphism Navbar
navbar_css = """
/* Ultra Pro Max Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

[data-theme="dark"] .navbar {
  background: rgba(15, 23, 42, 0.8) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: rotate(10deg) scale(1.05);
}
"""

if "Ultra Pro Max Navbar" not in css:
    css = re.sub(r'\.navbar \{[\s\S]*?\}', '', css) # Remove old navbar
    css += navbar_css

# 2. Center-align Hero Section & Headers
hero_css = """
/* Centered Hero and Headers */
.hero-section {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(16,185,129,0.1) 100%);
  border-radius: 16px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  text-align: center;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 30px auto;
  text-align: center;
}

.paper-title, .unit-title, .semester-title {
  text-align: center;
}

.paper-section {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.paper-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}
"""
if "Centered Hero and Headers" not in css:
    css += hero_css

# 3. Mobile Responsiveness
mobile_css = """
/* Responsive Mobile Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .navbar {
    padding: 10px 15px;
  }
  .nav-controls {
    gap: 10px;
  }
  .btn-icon {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  .paper-section {
    padding: 15px;
  }
  .qa-accordion summary {
    font-size: 1rem;
    padding: 12px 15px;
  }
}
"""
if "Responsive Mobile Design" not in css:
    css += mobile_css

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("CSS updated for Ultra Pro Max UI.")
