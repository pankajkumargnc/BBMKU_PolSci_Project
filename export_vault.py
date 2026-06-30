import os
import glob
import re
from datetime import datetime

# BBMKU Political Science Vault Exporter
# This script compiles all Markdown notes in the Vault into a single, beautifully styled HTML document.
# You can open the resulting HTML file in Chrome and use "Print -> Save as PDF" to generate your study material.

VAULT_DIR = "Vault"
OUTPUT_FILE = "BBMKU_UGC_NET_Study_Material_Master.html"

# CSS Styling to make the printed PDF look like a premium book
CSS_STYLES = """
<style>
    :root {
        --primary-color: #1e3a8a;
        --secondary-color: #3b82f6;
        --text-color: #333333;
        --bg-color: #ffffff;
    }
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: var(--text-color);
        background-color: var(--bg-color);
        max-width: 800px;
        margin: 0 auto;
        padding: 40px;
    }
    h1 {
        color: var(--primary-color);
        border-bottom: 3px solid var(--secondary-color);
        padding-bottom: 10px;
        margin-top: 50px;
        page-break-before: always;
    }
    h2 {
        color: var(--secondary-color);
        margin-top: 30px;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 5px;
    }
    h3 {
        color: #111827;
        margin-top: 25px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
    }
    th, td {
        border: 1px solid #d1d5db;
        padding: 12px;
        text-align: left;
    }
    th {
        background-color: #f3f4f6;
        font-weight: bold;
    }
    blockquote {
        border-left: 4px solid var(--secondary-color);
        background-color: #eff6ff;
        padding: 15px;
        margin: 20px 0;
        font-style: italic;
    }
    .cover-page {
        text-align: center;
        padding: 100px 0;
        page-break-after: always;
    }
    .cover-title {
        font-size: 3em;
        color: var(--primary-color);
        margin-bottom: 10px;
    }
    .cover-subtitle {
        font-size: 1.5em;
        color: #6b7280;
        margin-bottom: 50px;
    }
    .toc {
        page-break-after: always;
    }
    .toc h2 {
        border: none;
    }
    .toc ul {
        list-style-type: none;
        padding-left: 0;
    }
    .toc li {
        margin-bottom: 10px;
        font-size: 1.1em;
    }
    .mermaid {
        background-color: #f8fafc;
        padding: 10px;
        border: 1px dashed #cbd5e1;
        font-family: monospace;
        white-space: pre-wrap;
        margin: 15px 0;
    }
</style>
"""

def simple_markdown_to_html(md_text):
    # Extremely basic markdown to HTML converter for dependency-free execution
    
    # Headers
    md_text = re.sub(r'^# (.*?)$', r'<h1>\1</h1>', md_text, flags=re.MULTILINE)
    md_text = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', md_text, flags=re.MULTILINE)
    md_text = re.sub(r'^### (.*?)$', r'<h3>\1</h3>', md_text, flags=re.MULTILINE)
    
    # Bold
    md_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', md_text)
    
    # Italic
    md_text = re.sub(r'\*(.*?)\*', r'<em>\1</em>', md_text)
    
    # Lists
    md_text = re.sub(r'^- (.*?)$', r'<ul><li>\1</li></ul>', md_text, flags=re.MULTILINE)
    md_text = md_text.replace('</ul>\n<ul>', '\n') # Merge adjacent lists
    
    # Tables (Very basic handling)
    # Convert | a | b | to <tr><td>a</td><td>b</td></tr>
    def table_row(match):
        cells = match.group(0).strip('|').split('|')
        row = "<tr>" + "".join([f"<td>{c.strip()}</td>" for c in cells]) + "</tr>"
        if "---" in match.group(0):
            return "" # Skip separator row
        return row
    
    md_text = re.sub(r'^\|(.*)\|$', table_row, md_text, flags=re.MULTILINE)
    md_text = re.sub(r'(<tr>.*?</tr>\n)+', lambda m: f"<table><tbody>\n{m.group(0)}</tbody></table>\n", md_text)
    
    # Blockquotes
    md_text = re.sub(r'^> (.*?)$', r'<blockquote>\1</blockquote>', md_text, flags=re.MULTILINE)
    
    # Mermaid blocks
    def mermaid_block(match):
        return f'<div class="mermaid"><b>Diagram (Mermaid Format):</b>\n{match.group(1)}</div>'
    
    md_text = re.sub(r'```mermaid(.*?)```', mermaid_block, md_text, flags=re.DOTALL)
    
    # Clean up YAML frontmatter
    md_text = re.sub(r'^---.*?^---', '', md_text, flags=re.MULTILINE|re.DOTALL)
    
    # Paragraphs (Basic)
    md_text = md_text.replace('\n\n', '<br><br>')
    
    return md_text

def build_export():
    print("Gathering Vault notes...")
    
    files = glob.glob(os.path.join(VAULT_DIR, '**', '*.md'), recursive=True)
    files.sort() # Basic alphabetical sort
    
    if not files:
        print("No markdown files found in the Vault directory.")
        return

    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>BBMKU M.A. Political Science & UGC NET Notes</title>
        {CSS_STYLES}
    </head>
    <body>
        <div class="cover-page">
            <h1 class="cover-title">Master of Arts: Political Science</h1>
            <div class="cover-subtitle">BBMKU Dhanbad & UGC NET JRF Study Material</div>
            <p>Generated on: {datetime.now().strftime("%B %d, %Y")}</p>
            <p><strong>The Ultra Pro Max Edition</strong></p>
        </div>
        
        <div class="toc">
            <h2>Table of Contents</h2>
            <ul>
    """
    
    # Build TOC
    for f in files:
        title = os.path.basename(f).replace('.md', '').replace('_', ' ')
        html_content += f"<li>{title}</li>\n"
        
    html_content += """
            </ul>
        </div>
    """
    
    # Build Content
    for f in files:
        print(f"Processing: {f}")
        with open(f, 'r', encoding='utf-8') as file:
            md = file.read()
            html = simple_markdown_to_html(md)
            html_content += html
            
    html_content += """
    </body>
    </html>
    """
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out_file:
        out_file.write(html_content)
        
    print(f"\nSuccess! Exported {len(files)} modules to '{OUTPUT_FILE}'.")
    print("Instructions: Open this HTML file in your web browser, press Ctrl+P (or Cmd+P), and select 'Save as PDF'.")

if __name__ == "__main__":
    build_export()
