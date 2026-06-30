import json

filepath = r"C:\Users\panka\.gemini\antigravity-ide\brain\2003ab5d-5a67-482a-80cb-e4c9f61b16f0\.system_generated\logs\transcript_full.jsonl"
with open(filepath, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if "content" in data and "The following code has been modified to include a line number before every line" in data["content"]:
                with open('recovered_views.txt', 'a', encoding='utf-8') as out:
                    out.write(data["content"])
                    out.write("\n\n=========\n\n")
        except Exception as e:
            pass
