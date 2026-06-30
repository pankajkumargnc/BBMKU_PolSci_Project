import json

filepath = r"C:\Users\panka\.gemini\antigravity-ide\brain\2003ab5d-5a67-482a-80cb-e4c9f61b16f0\.system_generated\logs\transcript_full.jsonl"
with open(filepath, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if "content" in data and "<!-- SEMESTER 2 -->" in data["content"] and "<!-- SEMESTER 3 -->" in data["content"]:
                print("Found match in transcript!")
                content = data["content"]
                start_idx = content.find("<!-- SEMESTER 2 -->")
                end_idx = content.find("<!-- SEMESTER 3 -->")
                print(content[start_idx:end_idx][:1500])
                print("... [TRUNCATED] ...")
                print(content[start_idx:end_idx][-1500:])
                
                with open('recovered_sem2.txt', 'w', encoding='utf-8') as out:
                    out.write(content[start_idx:end_idx])
                break
        except Exception as e:
            pass
