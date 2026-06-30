import json

filepath = r"C:\Users\panka\.gemini\antigravity-ide\brain\2003ab5d-5a67-482a-80cb-e4c9f61b16f0\.system_generated\logs\transcript_full.jsonl"
with open(filepath, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if "content" in data and ("CC-205" in data["content"] or "Paper 205" in data["content"]):
                with open('recovered.txt', 'a', encoding='utf-8') as out:
                    out.write(data["content"])
                    out.write("\n\n=========\n\n")
        except Exception as e:
            pass
