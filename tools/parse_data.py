import re
import json

def parse_quiz():
    with open('quiz_extracted.txt', encoding='utf-8') as f:
        text = f.read()

    pages = text.split('=== Page ')
    quizzes = []
    
    current_chapter = "第 3 章 系統平台的組成架構－硬體"
    for p in pages[1:]:
        lines = p.split('\n')
        header = '\n'.join(lines[:10])
        if '第 3 回' in header or '第 3 章' in header:
            current_chapter = "第 3 章 系統平台的組成架構－硬體"
            chap_num = 3
        elif '第 4 回' in header or '第 4 章' in header:
            current_chapter = "第 4 章 系統平台的組成架構－軟體與網路"
            chap_num = 4
        elif '第 5 回' in header or '第 5 章' in header:
            current_chapter = "第 5 章 系統平台的運作與未來發展"
            chap_num = 5

        # extract questions
        full_text = '\n'.join(lines)
        # Find questions: * ( A )1. or ( C )2. etc
        pattern = re.compile(r'(\*?\s*\(\s*([A-D])\s*\)\s*(\d+)[\.、\s].*?)(?=(\*?\s*\(\s*[A-D]\s*\)\s*\d+[\.、\s])|二、|===|$)', re.DOTALL)
        matches = pattern.findall(full_text)
        for m in matches:
            q_block = m[0].strip()
            # parse answer and number
            first_line_m = re.match(r'^\*?\s*\(\s*([A-D])\s*\)\s*(\d+)[\.、\s](.*)', q_block, re.DOTALL)
            if first_line_m:
                ans = first_line_m.group(1)
                num = int(first_line_m.group(2))
                content = first_line_m.group(3).strip()
                
                # Split question text and options A, B, C, D
                # options pattern: (A)... (B)... (C)... (D)...
                opt_m = re.search(r'\((A)\)(.*?)\((B)\)(.*?)\((C)\)(.*?)\((D)\)(.*)', content, re.DOTALL)
                if opt_m:
                    q_text = content[:opt_m.start()].strip()
                    options = {
                        'A': opt_m.group(2).strip(),
                        'B': opt_m.group(4).strip(),
                        'C': opt_m.group(6).strip(),
                        'D': opt_m.group(8).strip()
                    }
                else:
                    q_text = content
                    options = {}

                quizzes.append({
                    'chapter': current_chapter,
                    'chap_num': chap_num,
                    'num': num,
                    'ans': ans,
                    'question': q_text.replace('\n', ' '),
                    'options': options,
                    'raw': q_block
                })

    return quizzes

qlist = parse_quiz()
print(f'Total parsed questions: {len(qlist)}')
with open('parsed_quizzes.json', 'w', encoding='utf-8') as f:
    json.dump(qlist, f, ensure_ascii=False, indent=2)
print('Saved to parsed_quizzes.json')
