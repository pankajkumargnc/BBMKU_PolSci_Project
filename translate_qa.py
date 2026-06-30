import re
from bs4 import BeautifulSoup
from deep_translator import GoogleTranslator
import time

def translate_to_hindi(text):
    text = text.strip()
    if not text:
        return text
    try:
        translated = GoogleTranslator(source='en', target='hi').translate(text)
        time.sleep(0.1) # Be nice to the API
        return translated
    except Exception as e:
        print(f"Error translating: {e}")
        return text

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

accordions = soup.find_all('details', class_='qa-accordion')
print(f"Found {len(accordions)} accordions to translate.")

count = 0
for acc in accordions:
    # 1. Translate Summary text
    summary = acc.find('summary')
    if summary:
        # Check if already translated (contains .en or .hi)
        if not summary.find('span', class_='en'):
            # It usually has a badge <span class="qa-badge">Q1</span> and then text
            badge = summary.find('span', class_='qa-badge')
            marks = summary.find('span', class_='qa-marks')
            
            # We want to extract the text, excluding badge and marks
            # To do this safely, let's reconstruct the summary
            if badge:
                badge_html = str(badge)
                badge.extract()
            else:
                badge_html = ""
                
            if marks:
                marks_html = str(marks)
                marks.extract()
            else:
                marks_html = ""
                
            original_text = summary.get_text(strip=True)
            if original_text:
                hindi_text = translate_to_hindi(original_text)
                new_html = f"{badge_html} <span class=\"hi\">{hindi_text}</span><span class=\"en\">{original_text}</span> {marks_html}"
                # Replace summary contents
                summary.clear()
                summary.append(BeautifulSoup(new_html, 'html.parser'))
                count += 1
                
    # 2. Translate QA Content
    content = acc.find('div', class_='qa-content')
    if content:
        # Find all p, li, h5 that do not contain .hi or .en
        for tag_name in ['p', 'li', 'h5']:
            for tag in content.find_all(tag_name):
                if not tag.find('span', class_='en'):
                    # To handle strong tags inside p or li, we will just translate the entire HTML content of the tag
                    # Wait, deep-translator works best with raw text. 
                    # If we translate text and lose HTML (like strong), that's bad.
                    # A safe way is to just translate the raw text, but maybe it breaks formatting.
                    # Since Google Translate API can handle basic HTML sometimes, let's try passing the inner HTML? No, deep-translator strips HTML or gets confused.
                    
                    # Instead of translating the whole inner HTML, let's just translate the text.
                    # For simplicity, since it's just Q&A, we can translate the get_text().
                    original_html = "".join(str(item) for item in tag.contents)
                    original_text = tag.get_text(strip=True)
                    if original_text:
                        hindi_text = translate_to_hindi(original_text)
                        
                        # Just wrap the original HTML in .en and translated text in .hi
                        new_html = f"<span class=\"hi\">{hindi_text}</span><span class=\"en\">{original_html}</span>"
                        tag.clear()
                        tag.append(BeautifulSoup(new_html, 'html.parser'))
                        count += 1

    if count % 10 == 0:
        print(f"Processed {count} elements...")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print(f"Done. Translated {count} elements.")
