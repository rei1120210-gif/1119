import re
import json

# 1. Load parsed quizzes
with open('parsed_quizzes.json', encoding='utf-8') as f:
    quizzes_raw = json.load(f)

# Clean quizzes
clean_quizzes = []
for i, q in enumerate(quizzes_raw):
    # filter out empty options
    opts = q['options']
    if not opts or 'A' not in opts or not opts['A']:
        continue
    
    clean_quizzes.append({
        'id': f"quiz-{q['chap_num']}-{q['num']}",
        'chapter': q['chap_num'],
        'chapterTitle': q['chapter'],
        'num': q['num'],
        'question': q['question'].strip(),
        'options': opts,
        'answer': q['ans'].strip().upper(),
        'type': 'quiz'
    })

# 2. Parse exercises
with open('exercise_extracted.txt', encoding='utf-8') as f:
    ex_text = f.read()

parts = re.split(r'(第[三四五六]回\s+[^\n]+)', ex_text)
chap_map = {
    '第三回': (3, '第 3 章 系統平台的組成架構－硬體'),
    '第四回': (4, '第 4 章 系統平台的組成架構－軟體與網路'),
    '第五回': (5, '第 5 章 系統平台的運作與未來發展'),
    '第六回': (6, '第 6 章 辦公室軟體與影像∕影音軟體')
}

clean_exercises = []
for i in range(1, len(parts), 2):
    header = parts[i].strip()
    cnum, ctitle = 3, '第 3 章 系統平台的組成架構－硬體'
    for k, v in chap_map.items():
        if k in header:
            cnum, ctitle = v
            break
            
    content = parts[i+1]
    pattern = re.compile(r'(\*?\s*\(\s*([A-D])\s*\)\s*(\d+)[\.、\s].*?)(?=(\*?\s*\(\s*[A-D]\s*\)\s*\d+[\.、\s])|二、|三、|四、|$)', re.DOTALL)
    for m in pattern.findall(content):
        q_block = m[0].strip()
        first_line_m = re.match(r'^\*?\s*\(\s*([A-D])\s*\)\s*(\d+)[\.、\s](.*)', q_block, re.DOTALL)
        if first_line_m:
            ans = first_line_m.group(1).strip().upper()
            num = int(first_line_m.group(2))
            ct = first_line_m.group(3).strip()
            opt_m = re.search(r'\((A)\)(.*?)\((B)\)(.*?)\((C)\)(.*?)\((D)\)(.*)', ct, re.DOTALL)
            if opt_m:
                q_text = ct[:opt_m.start()].strip()
                opts = {
                    'A': opt_m.group(2).strip().replace('\n', ' '),
                    'B': opt_m.group(4).strip().replace('\n', ' '),
                    'C': opt_m.group(6).strip().replace('\n', ' '),
                    'D': opt_m.group(8).strip().replace('\n', ' ')
                }
                clean_exercises.append({
                    'id': f"ex-{cnum}-{num}",
                    'chapter': cnum,
                    'chapterTitle': ctitle,
                    'num': num,
                    'question': q_text.replace('\n', ' '),
                    'options': opts,
                    'answer': ans,
                    'type': 'exercise'
                })

print(f'Clean quizzes: {len(clean_quizzes)}')
print(f'Clean exercises: {len(clean_exercises)}')

# Save both as a JS file
output_js = f"""// 智光商工 - 數位科技概論 學習題庫資料
const COURSE_QUIZZES = {json.dumps(clean_quizzes, ensure_ascii=False, indent=2)};

const COURSE_EXERCISES = {json.dumps(clean_exercises, ensure_ascii=False, indent=2)};

const CHAPTERS_DATA = [
  {{
    id: 3,
    title: "第 3 章 系統平台的組成架構－硬體",
    shortTitle: "Ch03 硬體系統與架構",
    icon: "fa-microchip",
    pdf: "book/C221A3_ch03.pdf",
    summary: "介紹電腦系統硬體之五大核心架構（輸入、輸出、控制、算術邏輯、記憶單元）、CPU構造與機器週期、記憶體階層（暫存器、快取、RAM、ROM）、儲存設備（SSD、HDD、快閃記憶體）以及主機板周邊介面（USB-C, HDMI, Thunderbolt 4 等）。",
    keyConcepts: [
      {{ title: "電腦五大單元", desc: "輸入單元 (IU)、輸出單元 (OU)、算術邏輯單元 (ALU)、控制單元 (CU)、記憶單元 (MU)。其中 ALU 與 CU 合稱為中央處理單元 (CPU)。" }},
      {{ title: "CPU 機器週期 (Machine Cycle)", desc: "依序為：1. 擷取 (Fetch) 2. 解碼 (Decode) 3. 執行 (Execute) 4. 儲存 (Store)。前二者為指令週期 (由 CU 主導)，後二者為執行週期 (由 ALU 主導)。" }},
      {{ title: "記憶體比較 (DRAM vs SRAM)", desc: "SRAM 速度快、價格昂貴、不用週期性充電，常用作快取 (Cache)；DRAM 速度較慢、價格便宜、需週期充電更新 (Refresh)，作為主記憶體。" }},
      {{ title: "儲存裝置 (SSD vs HDD)", desc: "SSD 使用快閃記憶體，抗震、讀寫快、安靜、耗電低；HDD 使用機械磁碟與讀寫頭，容量大但防震性較差。" }},
      {{ title: "高速傳輸介面", desc: "USB Type-C 支援正反插與供電；Thunderbolt 4 頻寬達 40Gbps；HDMI 與 DisplayPort 支援高畫質影音輸出。" }}
    ]
  }},
  {{
    id: 4,
    title: "第 4 章 系統平台的組成架構－軟體與網路",
    shortTitle: "Ch04 軟體分類與雲端",
    icon: "fa-network-wired",
    pdf: "book/C221A3_ch04.pdf",
    summary: "探討系統軟體與應用軟體之分類、作業系統之核心功能（行程管理、記憶體管理、檔案管理、周邊設備管理、使用者介面）、常見作業系統特性（Windows, Linux, macOS, Android, iOS）以及雲端運算的三層服務架構（IaaS, PaaS, SaaS）。",
    keyConcepts: [
      {{ title: "軟體分類", desc: "系統軟體（作業系統 OS、公用程式 Utility、驅動程式）與應用軟體（套裝軟體 Package、專案客製開發軟體 Custom Software）。" }},
      {{ title: "作業系統分類", desc: "單人單工 (MS-DOS)、單人多工 (Windows 10/11、macOS)、多人多工 (Linux、UNIX)。" }},
      {{ title: "開源作業系統 Linux", desc: "原始碼開放自由修改與散布，具有高度安全性與穩定性，常作為伺服器與嵌入式系統核心（如 Ubuntu, Fedora, CentOS）。" }},
      {{ title: "雲端運算三大架構", desc: "SaaS (軟體即服務，如 Google Docs/Gmail)、PaaS (平台即服務，如 Heroku/Google App Engine)、IaaS (基礎設施即服務，如 AWS EC2/Google Compute Engine)。" }}
    ]
  }},
  {{
    id: 5,
    title: "第 5 章 系統平台的運作與未來發展",
    shortTitle: "Ch05 系統運作與新興科技",
    icon: "fa-robot",
    pdf: "book/C221A3_ch05.pdf",
    summary: "解析系統平台日常運作流程（以手機 Google 地圖即時路況為例，說明感測器、衛星 GPS、無線通訊與雲端大數據分析之整合）、CPU 程序排程演算法（FCFS, SJF, RR）以及未來人工智慧 (AI)、物聯網 (IoT)、邊緣運算 (Edge Computing) 發展趨勢。",
    keyConcepts: [
      {{ title: "系統平台運作機制", desc: "感知層 (感測器/GPS) ➔ 傳輸層 (5G/Wi-Fi/物聯網) ➔ 處理層 (雲端伺服器與AI演算法分析) ➔ 應用回傳 (使用者手機即時導航)。" }},
      {{ title: "程序排程演算法", desc: "先來先服務 (FCFS - First-Come First-Served)、最短工作優先 (SJF - Shortest Job First)、輪替排程法 (Round Robin - 每程序分配固定時間片段)。" }},
      {{ title: "程序狀態轉換", desc: "新增 (New) ➔ 就緒 (Ready) ➔ 執行 (Running) ➔ 等待/阻塞 (Waiting) ➔ 結束 (Terminated)。" }},
      {{ title: "AI 與機器學習", desc: "人工智慧 (廣義智慧) 涵蓋機器學習 (以數據訓練模型)，再深入為深度學習 (多層類神經網路，如 LLM 與影像辨識)。" }}
    ]
  }},
  {{
    id: 6,
    title: "第 6 章 辦公室軟體與影像∕影音軟體",
    shortTitle: "Ch06 辦公與多媒體應用",
    icon: "fa-photo-film",
    pdf: "book/C221A3_ch06.pdf",
    summary: "認識辦公室文書處理 (Word/Writer)、試算表 (Excel/Calc)、簡報製作 (PowerPoint/Impress)，以及多媒體設計專長工具（點陣影像 Photoshop、向量繪圖 Illustrator、音訊剪輯 Audacity、短影音剪輯 威力導演/Premiere、3D建模 Blender），並掌握著作權授權與 CC 創用授權法規。",
    keyConcepts: [
      {{ title: "辦公室三大支柱", desc: "文書處理 (字型排版、表格目錄)、電子試算表 (函數公式、樞紐分析、統計圖表)、簡報設計 (投影片母片、動畫轉場)。" }},
      {{ title: "影像與影音製作工具", desc: "修圖美工 (Photoshop)、音訊錄音剪輯 (Audacity)、影片剪輯組合 (訊連科技威力導演、Premiere)、3D建模 (Blender, 3ds Max)。" }},
      {{ title: "點陣圖 vs 向量圖", desc: "點陣圖由像素組成，縮放易失真，適合照片 (JPEG, PNG)；向量圖由數學公式幾何線條組成，放大不失真，適合標誌與插圖 (SVG, AI)。" }},
      {{ title: "智慧財產權與授權規範", desc: "商業授權 (零售版、大量授權版)、自由開源軟體 (FOSS)、創用 CC (姓名標示、非商業性、禁止改作、相同方式分享) 與 CC0 (公眾領域貢獻宣告，完全免版稅自由利用)。" }}
    ]
  }}
];

const CONCEPT_DRILLS = [
  {{
    id: "drill-1",
    title: "電腦五大單元職責配對挑戰",
    description: "請將各硬體單元與其對應的關鍵職責進行正確配對：",
    pairs: [
      {{ term: "控制單元 (CU)", match: "負責協調整合各單元運作，主導指令擷取與解碼" }},
      {{ term: "算術邏輯單元 (ALU)", match: "負責加減乘除運算及邏輯判斷比較" }},
      {{ term: "記憶單元 (MU)", match: "負責存放待處理的資料與正在執行的程式" }},
      {{ term: "輸入單元 (IU)", match: "接收外界資料轉換為數位信號送入電腦 (鍵盤、滑鼠)" }},
      {{ term: "輸出單元 (OU)", match: "將電腦運算結果呈現給使用者 (螢幕、印表機)" }}
    ]
  }},
  {{
    id: "drill-2",
    title: "DRAM 與 SRAM 記憶體特性對比",
    description: "對比主記憶體 (DRAM) 與快取記憶體 (SRAM) 的重要技術指標：",
    table: [
      {{ item: "是否需週期性充電 (Refresh)", dram: "是 (需充電維持電荷)", sram: "否 (正反器結構保持)" }},
      {{ item: "存取速度", dram: "較慢", sram: "極快" }},
      {{ item: "單位容量成本", dram: "較便宜", sram: "昂貴" }},
      {{ item: "主要應用場景", dram: "主記憶體 (系統 RAM)", sram: "CPU 快取記憶體 (L1/L2/L3 Cache)" }}
    ]
  }},
  {{
    id: "drill-3",
    title: "雲端服務三層架構 (IaaS / PaaS / SaaS) 識別",
    description: "判斷下列日常與開發者情境分別歸屬於哪一層雲端運算模式：",
    cases: [
      {{ name: "Google 雲端硬碟 / Google Docs 文書軟體", layer: "SaaS (軟體即服務)", hint: "使用者直接透過瀏覽器使用完整應用軟體" }},
      {{ name: "Google App Engine / Firebase 開發平台", layer: "PaaS (平台即服務)", hint: "提供程式開發與執行環境，省去主機維護負擔" }},
      {{ name: "AWS EC2 虛擬主機 / 租賃雲端硬碟容量", layer: "IaaS (基礎設施即服務)", hint: "向雲端提供商租用運算硬體資源、網路與儲存空間" }}
    ]
  }}
];
"""

with open('course-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print('Successfully generated course-data.js')
