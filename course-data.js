// 智光商工 - 數位科技概論 學習題庫資料
const COURSE_QUIZZES = [
  {
    "id": "quiz-3-1",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 1,
    "question": "隨機存取記憶體（RAM）區分為動態隨機存取記憶體（DRAM）及靜態隨機存取記憶體 （SRAM）兩種，請問下列哪一項是SRAM優於DRAM的特點？",
    "options": {
      "A": "單位資料的存取速度較快",
      "B": "單位面積所能儲存資料量較小",
      "C": "需要持續充電更新（refresh），才能確保資料完整",
      "D": "每單位資料的儲存成本較低。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-3-2",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 2,
    "question": "傑克將iPhone手機拍攝的照片轉存到電腦中，並列印出來與朋友分享。請問列印設備在電腦 的五大單元中，是歸屬為下列哪一種單元？",
    "options": {
      "A": "控制單元",
      "B": "輸入單元",
      "C": "輸出單元",
      "D": "記憶單元。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-3",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 3,
    "question": "下列對於電腦硬體五大單元的敘述何者有誤？",
    "options": {
      "A": "輸入單元：待處理的資料須經由此單元\n進入電腦",
      "B": "輸出單元：處理完成之資料由此單元送出",
      "C": "算術邏輯單元：所有的算術運\n算均在此單元完成",
      "D": "記憶單元：僅儲存輸入待處理之資料。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-3-4",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 4,
    "question": "電腦基本架構中有數個主要的組成單元（或部門），其中負責存放電腦程式與資料的單元 是：",
    "options": {
      "A": "算術與邏輯單元",
      "B": "輸入單元",
      "C": "記憶單元",
      "D": "控制單元。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-5",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 5,
    "question": "在電腦的組成單元中，下列哪兩個單元合稱為中央處理單元？",
    "options": {
      "A": "輸入單元及控制單元",
      "B": "控制單元及算術∕邏輯單元",
      "C": "輸入單元及輸出單元",
      "D": "算術∕邏輯單元及記憶單元。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-3-6",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 6,
    "question": "請問所謂的I/O指的是",
    "options": {
      "A": "1跟0",
      "B": "物聯網（IoT）",
      "C": "輸入與輸出",
      "D": "整合式辦公室系統（integrated office system）。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-7",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 7,
    "question": "關於 \"熱插拔\" 的敘述，何者為真？",
    "options": {
      "A": "只能在開機的情況下插拔",
      "B": "只能在關機的情況下插拔",
      "C": "在關機及開機的情況下皆可插拔",
      "D": "只有當主機溫度高於一定溫度時才可插拔。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-8",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 8,
    "question": "阿布想要為自己的筆記型電腦擴充2G的RAM，請問他應該將RAM安插在下列哪一種插槽？",
    "options": {
      "A": "記憶體插槽",
      "B": "PCI-E插槽",
      "C": "CPU插槽",
      "D": "M.2插槽。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-3-9",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 9,
    "question": "微軟公司在台灣成立了亞洲第一座「雲端運算」中心，以整合電腦的運算資源，來提供給國 內各項創新研究計畫使用。一般而言，研究計畫都需要大量的運算，包括計算、比對、配對 等不同的處理，請問電腦中負責這些運算工作的是下列哪一個單元？",
    "options": {
      "A": "CU",
      "B": "MU",
      "C": "ALU",
      "D": "OU。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-10",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 10,
    "question": "MIPS為一種衡量電腦CPU之測量指標，其中I代表：",
    "options": {
      "A": "資訊（Information）",
      "B": "指令（Instruction）",
      "C": "輸入（Input）",
      "D": "內部（Internal）。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-3-11",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 11,
    "question": "在「星際迷航記」影集中，船長寇克領導眾船員一同探索宇宙，當遇上危機時，船長便會指 派船員完成各自的工作，並引導船員們脫離險境。請問若以船長扮演的角色來看，可比喻成 電腦的哪一個單元最恰當？",
    "options": {
      "A": "輸入單元",
      "B": "記憶單元",
      "C": "輸出單元",
      "D": "控制單元。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-3-12",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 12,
    "question": "志華購買了一台安插8GB記憶體的64位元電腦，下列有關該台電腦的敘述何者正確？",
    "options": {
      "A": "8GB指的是快取記憶體的容量",
      "B": "一般用途暫存器的位元數為8GB",
      "C": "CPU時脈頻率為64位元",
      "D": "64位元指的是一般用途暫存器的位元數。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-3-13",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 13,
    "question": "高雄六龜區為了成立社區數位機會中心（digital opportunity center），打算將原社區教室的 電腦全數移轉至該中心。如果你是數位機會中心的電腦管理員，為了要提升這些電腦的執行 效能，下列何者最不可能是你優先考慮要更換的設備或元件？",
    "options": {
      "A": "CPU",
      "B": "主記憶體",
      "C": "顯示卡",
      "D": "鍵盤。 \n得   分"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-3-14",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 14,
    "question": "電腦的基本架構可分為五大單元，其中輸出單元（output unit）的功用為？",
    "options": {
      "A": "接收使用者所輸入的資料",
      "B": "執行程式和處理資料",
      "C": "進行算術運算與邏輯運算",
      "D": "將資料輸出到顯示器或儲存媒體。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-3-15",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 15,
    "question": "聯想推出搭載Intel Core i7-1165G7 2.80GHz CPU的「變形筆電」，這種筆電的螢幕可以360度 翻轉，變身為平板電腦。請根據以上敘述判斷下列何者正確？",
    "options": {
      "A": "Intel為CPU的產品型號",
      "B": "Core i7-1165G7為CPU的製造廠商",
      "C": "CPU的時脈頻率為2.80GHz",
      "D": "石英振盪器每秒振盪2.80億次。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-16",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 16,
    "question": "有關固態硬碟（solid state disk, SSD）與傳統機械硬碟（hard disk, HDD）的敘述，下列何者 正確？",
    "options": {
      "A": "HDD中的儲存元件是採用快閃記憶體",
      "B": "SSD採用低噪音馬達驅動讀寫頭並具抗震特點",
      "C": "HDD沒有旋轉及搜尋資料時間，僅須考量資料傳輸時間",
      "D": "SSD在經過長時間及多次使用致使內部儲存資料零散，仍可不須進行磁碟重組。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-3-17",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 17,
    "question": "為了減少對主記憶體的存取次 數，以提昇 電腦整體執行速度，個人 電腦的快取記憶體 （cache memory）通常以下列何者為材質？",
    "options": {
      "A": "DRAM",
      "B": "EPROM",
      "C": "ROM",
      "D": "SRAM。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-3-18",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 18,
    "question": "加、減、乘、除是程式中常需進行的算術運算，請問在電腦中負責這些運算處理的是哪一個 單元？",
    "options": {
      "A": "算術邏輯單元",
      "B": "控制單元",
      "C": "輸出單元",
      "D": "輸入單元。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-3-19",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 19,
    "question": "民眾只要持悠遊卡在台鐵剪票口刷卡，就可以進入月台搭車，且可隨時在全家超商等處利用 儲值設備進行悠遊卡的加值。請問悠遊卡最可能是利用下列哪一種元件來儲存資料？",
    "options": {
      "A": "DRAM",
      "B": "EEPROM",
      "C": "PROM",
      "D": "HDD。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-3-20",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 20,
    "question": "大雄在光華數位新天地買了一部桌上型電腦，此機配備了如選項中的四種記憶或儲存裝置， 請問它們中何者之存取速度最快？",
    "options": {
      "A": "快取記憶體（cache）",
      "B": "輔助記憶體－固態硬碟\n（SSD）",
      "C": "主記憶體（DRAM）",
      "D": "輔助記憶體－硬碟（HDD）。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-3-21",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 21,
    "question": "MacBook Air採用固態硬碟大幅降低機身的厚度，機身最薄處僅0.3公分，請問該筆電採用的 固態硬碟與傳統硬碟，差異為何？",
    "options": {
      "A": "固態硬碟的體積較大",
      "B": "傳統硬碟的耐震度較佳",
      "C": "固態硬碟是使用快閃記憶體來作為儲存元件",
      "D": "傳統硬碟的儲存容量通常較小。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-22",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 22,
    "question": "三星公司推出的某款Android智慧型手機，宣稱採用AMOLED技術，可使螢幕色彩更加鮮 豔，請問此款手機的螢幕最可能是採用下列哪一種材質所製成的？",
    "options": {
      "A": "陰極射線管",
      "B": "液晶",
      "C": "有機發光二極體",
      "D": "電漿。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-3-23",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 23,
    "question": "玫芳想要自己挑選一台印表機，如果她對列印品質的要求特別高，請問當她在購買時，應特 別考量下列哪一項印表機的規格？",
    "options": {
      "A": "解析度",
      "B": "外殼顏色",
      "C": "尺寸大小",
      "D": "重量。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-3-24",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 24,
    "question": "裕書的筆記型電腦內建有Type C、HDMI、line out等連接埠，下列為他使用些連接埠的操 作，請問何者不正確？",
    "options": {
      "A": "利用line out連接埠來上網",
      "B": "利用Type C連接埠來為手機充電",
      "C": "利用Type C連接埠將手機中的資料傳送至電腦",
      "D": "利用HDMI連接埠將手機畫面傳送至電視播放。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-3-25",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 25,
    "question": "史記：「秦始皇三十四年，丞相李斯上言儒生是古非今，反對批評朝政、法令，因此建議除 了秦記、醫藥、卜筮、種樹等書外，一律燒毀」。請問，如果在秦朝即擁有現代的資訊科 技，則可利用下列哪一種設備，將書籍內容數位化，以便備份起來？",
    "options": {
      "A": "印表機",
      "B": "QLED液晶螢幕",
      "C": "滑鼠",
      "D": "掃描器。 \n \nI 精解說明 \n1. SRAM單位面積所能儲存資料量較大；SRAM不需保持週期性充電更新，即可保存儲存於其內的資料；\nDRAM每單位資料的儲存成本較低。 \n3. 記憶單元：電腦存放程式與資料的地方。 \n9. 算術∕邏輯單元（ALU）：負責資料的運算與邏輯判斷。 \n14. 輸出單元：電腦輸出運算結果的管道。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-4-1",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 1,
    "question": "下列關於雲端資源的組成架構之敘述，何者正確？",
    "options": {
      "A": "單一公司通常難以同時提供IaaS、PaaS、SaaS等多項服務",
      "B": "Amazon、YouTube、Oracle Cloud皆屬於雲端資源組成架構中的SaaS",
      "C": "即使網路斷線也不會影響使用SaaS提供商所提供的應用軟體",
      "D": "若需要大量的儲存空間，可不必自行購置設備，向IaaS提供商租用雲端空間即可。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-4-2",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 2,
    "question": "下列何者不屬於應用軟體？",
    "options": {
      "A": "Firefox瀏覽器",
      "B": "PhotoImpact影像處理軟體",
      "C": "macOS作業系統",
      "D": "Word文書處理軟體。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-4-3",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 3,
    "question": "「大臺北公車」是專為台北市民所開發的系統，用來線上查詢公車的行進狀況。請問這套系 統是屬於",
    "options": {
      "A": "作業系統",
      "B": "專案開發軟體",
      "C": "套裝軟體",
      "D": "公用程式。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-4-4",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 4,
    "question": "磁碟清理的主要功能是下列何者？",
    "options": {
      "A": "將磁碟還原至原廠設定",
      "B": "將電腦還原到先前運作正常的狀態",
      "C": "檢查磁碟中的磁區是否損毀",
      "D": "清除不需長期保存的檔案。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-4-5",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 5,
    "question": "下列關於電腦軟體的說明，何者錯誤？",
    "options": {
      "A": "校務行政、銀行存提款等系統應歸屬為系統軟體",
      "B": "扮演使用者與電腦硬體間的溝通橋樑，是作業系統的功能之一",
      "C": "專案開發軟體是為特定對象的需求所設計的軟體",
      "D": "重組並最佳化磁碟機屬於公用程式，可提升電腦讀寫資料的效能。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-6",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 6,
    "question": "下列哪些軟體是屬於系統軟體？  a.Office文書處理軟體 b.重組並最佳化磁碟機 c.作業系統 d.網路訂票系統",
    "options": {
      "A": "abc",
      "B": "bc",
      "C": "bcd",
      "D": "ad。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-4-7",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 7,
    "question": "OpenOffice、Microsoft Office、PhotoImpact等軟體，歸屬於下列哪一類軟體最恰當？",
    "options": {
      "A": "作業系統",
      "B": "公用程式",
      "C": "專案開發軟體",
      "D": "套裝軟體。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-4-8",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 8,
    "question": "下列何者屬於應用軟體？",
    "options": {
      "A": "作業系統（Operating System）",
      "B": "語言編譯程式（Programming Language Translators）",
      "C": "公用服務程式（System Utilities）",
      "D": "文書處理軟體。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-4-9",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 9,
    "question": "下列有關軟體的敘述，何者錯誤？",
    "options": {
      "A": "平板電腦iPad使用的iOS作業系統，屬於應用軟體",
      "B": "財政部提供的報稅軟體，屬於應用軟體",
      "C": "驅動程式是為了使作業系統能辨識及管理硬體設備，屬於系統軟體",
      "D": "Office 2019內含Word、PowerPoint及Excel軟體，屬於套裝軟體。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-10",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 10,
    "question": "下列有關軟體的敘述，何者錯誤？",
    "options": {
      "A": "重組並最佳化磁碟機可提昇磁碟的運作效率，屬於專案開發軟體",
      "B": "Google文件可用來編輯文件、試算處理等，屬於應用軟體",
      "C": "Windows 11可作為使用者與電腦硬體間的溝通橋樑，屬於系統軟體",
      "D": "修復磁碟機屬於系統軟體。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-11",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 11,
    "question": "Linux作業系統屬於下列哪一類軟體？",
    "options": {
      "A": "系統軟體",
      "B": "應用軟體",
      "C": "文書處理軟體",
      "D": "資料庫軟體。 \n得   分"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-12",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 12,
    "question": "Windows 11家用版允許單一使用者在同一時間內，處理多項操作，請問該作業系統屬於下列 何種類型？",
    "options": {
      "A": "單人單工",
      "B": "多人多工",
      "C": "單人多工",
      "D": "多人單工。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-4-13",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 13,
    "question": "網際網路上的網站伺服器，通常必須在同一時間內執行多項工作，以便處理多位瀏覽者瀏覽 網頁的需求。請問網站伺服器適合使用下列哪一種類型的作業系統？",
    "options": {
      "A": "單人單工作業系\n統",
      "B": "多人多工作業系統",
      "C": "單人多工作業系統",
      "D": "多人單工作業系統。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-4-14",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 14,
    "question": "「開放格式」是公開文件檔案的格式及版權，以結合眾人的力量來維護與推廣這種格式。請 問下列何者的概念最接近開放格式？",
    "options": {
      "A": "開放原始碼",
      "B": "智慧財產權",
      "C": "綠色軟體",
      "D": "創用CC。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-15",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 15,
    "question": "下列3種電腦網路，請依據其規模（涵蓋的範圍）由大到小排列順序   a.區域網路 b.網際網路 c.廣域網路",
    "options": {
      "A": "abc",
      "B": "bca",
      "C": "acb",
      "D": "cab。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-4-16",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 16,
    "question": "小明受命規劃公司內部的網路連線，假設公司的範圍涵蓋同一棟大樓，請問此種網路是屬於 下列哪一種？",
    "options": {
      "A": "區域網路",
      "B": "廣域網路",
      "C": "網際網路",
      "D": "衛星網路。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-17",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 17,
    "question": "「WAN」是下列哪一種網路的英文簡稱？",
    "options": {
      "A": "廣域網路",
      "B": "整體服務數位網路",
      "C": "區域網路",
      "D": "加值型網路。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-18",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 18,
    "question": "LAN是哪一種網路的簡稱？",
    "options": {
      "A": "廣域網路",
      "B": "網際網路",
      "C": "區域網路",
      "D": "全球資訊網。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-4-19",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 19,
    "question": "下列哪一種網路所涵蓋的範圍最小？",
    "options": {
      "A": "LAN",
      "B": "MAN",
      "C": "WAN",
      "D": "Internet。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-20",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 20,
    "question": "下列何者不屬於應用軟體？",
    "options": {
      "A": "磁碟清理工具",
      "B": "電腦遊戲",
      "C": "薪資系統",
      "D": "資料庫管理系統。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-4-21",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 21,
    "question": "請問適合用來進行文書處理的軟體「Word」是屬於下列哪一類軟體？",
    "options": {
      "A": "系統軟體",
      "B": "應用軟體",
      "C": "工具程式",
      "D": "作業系統。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-4-22",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 22,
    "question": "下列有關作業系統的敘述，何者不正確？",
    "options": {
      "A": "MS-DOS為單人單工作業系統",
      "B": "Windows為單人多工作業系統",
      "C": "Android為多人單工作業系統",
      "D": "Linux為多人多工作業系統。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-4-23",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 23,
    "question": "遊戲橘子（Gamania）公司所代理的天堂、新楓之谷等線上遊戲，是屬於下列哪一種類型的 電腦軟體？",
    "options": {
      "A": "系統軟體",
      "B": "應用軟體",
      "C": "工具軟體",
      "D": "辦公室應用軟體。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-4-24",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 24,
    "question": "日本知名的迴轉壽司連鎖店－「藏壽司」，引進了一套全自動管理監視系統，餐廳的運作從 座位掌控、顧客點餐、送餐、結帳等程序，都是利用該套系統進行控管。請問該套專為「藏 壽司」所開發的軟體歸屬為下列哪一類軟體最恰當？",
    "options": {
      "A": "公用軟體",
      "B": "專案開發軟體",
      "C": "套裝軟體",
      "D": "系統軟體。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-4-25",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 25,
    "question": "下列敘述何者正確？",
    "options": {
      "A": "編譯器（Compiler）可編譯應用程式，故屬於應用軟體",
      "B": "會計系統輔助會計作業，屬於應用軟體",
      "C": "作業系統不能編譯程式，所以不是系統軟體",
      "D": "作業系統（Operation System）可以編譯程式，所以屬於系統軟體。 \n \nI 精解說明 \n1. 大型的網路公司常會同時提供IaaS、PaaS、SaaS等服務，例如Google公司在全球設有機房（IaaS）、\n架設開發平台（PaaS）、提供許多應用軟體（SaaS）； \nAmazon屬於IaaS、YouTube屬於SaaS、Oracle Cloud屬於PaaS； \n需要在連網狀態下才能使用SaaS提供商所提供的應用軟體。 \n2. macOS作業系統屬於系統軟體中的作業系統。 \n9. 平板電腦iPad使用的iOS作業系統，屬於系統軟體。 \n10. 磁碟重組工具可提昇磁碟的運作效率，屬於公用程式。 \n25. 編譯器（Compiler）屬於系統軟體；作業系統是系統軟體； \n作業系統（Operation System）不可以編譯程式。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-5-1",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 1,
    "question": "根據一般作業系統的概念，一個程序（process）可能的狀態包含了建立（new）、執行 （running）、就緒（ready）、結束（terminated），以及下列哪一項狀態？",
    "options": {
      "A": "忙碌（busy）",
      "B": "恢復（resumed）",
      "C": "排程（scheduling）",
      "D": "等待（waiting）。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-5-2",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 2,
    "question": "人工智慧（Artificial Intelligence, AI）主要研究如何讓電腦模仿人類的思考模式，使電腦具 有學習、記憶、推理與處理問題的能力。關於涵蓋面的描述，下列哪一項正確？",
    "options": {
      "A": "人工智慧 > 機器學習 > 深度學習",
      "B": "機器學習 > 人工智慧 > 深度學習",
      "C": "深度學習 > 機器學習 > 人工智慧",
      "D": "人工智慧 > 深度學習 > 機器學習。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-5-3",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 3,
    "question": "請問下列哪一項電腦狀況，無法透過工作管理員視窗來檢視？",
    "options": {
      "A": "處理程序",
      "B": "效能",
      "C": "應用程式歷程紀錄",
      "D": "瀏覽器瀏覽紀錄。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-5-4",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 4,
    "question": "在作業系統中，管理每項工作的處理順序，稱之為？",
    "options": {
      "A": "程序管理",
      "B": "通訊管理",
      "C": "檔案管理",
      "D": "輸出∕輸入管理。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-5-5",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 5,
    "question": "下列為常見的系統平台：  a.個人電腦   b.Instagram   c.校務行政平台  請問其規模大小應如何排列？",
    "options": {
      "A": "a > b > c",
      "B": "b > c > a",
      "C": "b > a > c",
      "D": "c > b > a。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-5-6",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 6,
    "question": "丹鳳使用印表機列印文件時，發現文件會依據她送出列印的先後依序列印，請問這是為作業 系統具有下列哪一項管理功能？",
    "options": {
      "A": "檔案管理",
      "B": "記憶體管理",
      "C": "輸出∕輸入管理",
      "D": "通訊管理。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-5-7",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 7,
    "question": "不同的輔助儲存設備（如硬碟），其機械電子特性及存取方法等皆有所不同，請問作業系統 是包含了下列何種功能，讓使用者不須因為儲存設備的不同，而採用不同的方式來存取資料 呢？",
    "options": {
      "A": "記憶體管理系統",
      "B": "輸出入系統",
      "C": "自動偵測系統",
      "D": "檔案管理系統。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-5-8",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 8,
    "question": "下列何者是系統平台中十分重要的一個項目，它除了作為使用者介面之外，也負責協調軟 體、硬體的運作？",
    "options": {
      "A": "雲端資源",
      "B": "作業系統",
      "C": "顯示卡",
      "D": "防毒軟體。"
    },
    "answer": "B",
    "type": "quiz"
  },
  {
    "id": "quiz-5-9",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 9,
    "question": "管理「使用者帳號」、「密碼」與「使用權限」等功能，是多工作業系統的哪一項功能？",
    "options": {
      "A": "輸入管理",
      "B": "效能監督",
      "C": "系統保護",
      "D": "記憶體管理。"
    },
    "answer": "C",
    "type": "quiz"
  },
  {
    "id": "quiz-5-10",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 10,
    "question": "圖片辨識系統通常是先蒐集大量的圖片資料，並利用下列哪一項技術，訓練系統學會辨識圖 片中的特定物體或人臉身分？",
    "options": {
      "A": "人工智慧",
      "B": "擴增實境",
      "C": "虛擬實境",
      "D": "平行處理。"
    },
    "answer": "A",
    "type": "quiz"
  },
  {
    "id": "quiz-5-11",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 11,
    "question": "下列何者是常見的聊天機器人？",
    "options": {
      "A": "Midjourney",
      "B": "EMIEW3",
      "C": "DALL．E 2",
      "D": "ChatGPT。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-5-12",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 12,
    "question": "下列有關系統平台運作流程3步驟的敘述，何者錯誤？",
    "options": {
      "A": "輸入是透過傳輸媒介，將資料輸入至系統中",
      "B": "處理是系統利用平台處理器來處理資料",
      "C": "輸出是透過傳輸媒介，將資料輸出至顯示器、儲存設備、雲端空間或系統平台的其他成員",
      "D": "輸入、處理、輸出的步驟都是在單一平台內完成。"
    },
    "answer": "D",
    "type": "quiz"
  },
  {
    "id": "quiz-5-13",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 13,
    "question": "在Windows作業系統中，可以同時按Ctrl鍵加Alt鍵加下列哪一個鍵開啟工作管理員？",
    "options": {
      "A": "Enter",
      "B": "Delete",
      "C": "Backspace",
      "D": "Tab。 \n得   分"
    },
    "answer": "B",
    "type": "quiz"
  }
];

const COURSE_EXERCISES = [
  {
    "id": "ex-3-1",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 1,
    "question": "請問電腦的五大單元，除了IU、OU之外，還包含哪些？",
    "options": {
      "A": "CU、ALU、MU",
      "B": "CPU、ALU、MU",
      "C": "CPU、MU、CU",
      "D": "ALU、CU、CPU。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-3-2",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 2,
    "question": "USB是電腦、手機、相機等3C產品普遍使用的連接埠，有關USB的敘 述，下列何者錯誤？",
    "options": {
      "A": "USB 3.0、USB4的插頭皆為Type-C規格",
      "B": "隨身碟上標示有  圖示，表示該隨身碟是使用USB與電腦連接",
      "C": "可作為週邊設備充電使用的連接埠",
      "D": "支援熱插拔。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-3-3",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 3,
    "question": "CPU的組成不包含下列何者？",
    "options": {
      "A": "快取記憶體",
      "B": "輔助記憶體",
      "C": "控制單元",
      "D": "暫存器。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-3-4",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 4,
    "question": "下列有關暫存器的敘述，何者不正確？",
    "options": {
      "A": "累加器用來存放運算的結果",
      "B": "位址暫存器用來存放指令或資料的位址",
      "C": "指令暫存器用來存放下一個要執行的指令位址",
      "D": "旗標暫存器用來存放CPU運算後的各種狀態。"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-3-5",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 5,
    "question": "個人電腦購買傳單上所標示的記憶體規格，通常是指下列哪一種記憶 體？",
    "options": {
      "A": "ROM",
      "B": "DRAM",
      "C": "SRAM",
      "D": "EEPROM。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-3-6",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 6,
    "question": "我們比較RAM、cache、磁碟機（Hard Disk）等記憶體或儲存設備的存 取速度，由快至慢依序排列，正確的選項是：",
    "options": {
      "A": "RAM＞cache＞磁碟機",
      "B": "磁碟機＞RAM＞cache",
      "C": "cache＞RAM＞磁碟機",
      "D": "cache＞磁碟機＞RAM。"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-3-7",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 7,
    "question": "下列各項記憶體中，讀寫速度比ROM快的有幾項？  a. DRAM b. L2 cache c. HDD d. L3 cache e. Blu-ray Disc",
    "options": {
      "A": "4項",
      "B": "3項",
      "C": "2項",
      "D": "1項。  === Page 2 ===  9 數位科技概論（上）習作本"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-3-8",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 8,
    "question": "請問固態硬碟與傳統硬碟差異為何？",
    "options": {
      "A": "固態硬碟的體積較大",
      "B": "傳統硬碟的耐震度較佳",
      "C": "固態硬碟是使用快閃記憶體來作為儲存元件",
      "D": "傳統硬碟的儲存容量通常較小。  情境素養題"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-3-9",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 9,
    "question": "惠萍負責校刊社團的採購，由於校刊社團經常需要列印大量的文稿， 社團指導老師要求她購買一部列印速度較快的印表機來列印。惠萍連 上購物網站後，她應該依據下列哪一個單位來判斷印表機列印的速 度，以找到符合需求的印表機？",
    "options": {
      "A": "dpi",
      "B": "bps",
      "C": "pixel",
      "D": "ppm。"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-3-10",
    "chapter": 3,
    "chapterTitle": "第 3 章 系統平台的組成架構－硬體",
    "num": 10,
    "question": "宜琳課業表現與操行表現良好，父親同意資助她買新手機，以茲獎 勵。宜琳喜歡最新款的iPhone手機，她連上Apple官方網站得知這是一 款極窄邊框的全屏手機，尺寸為6.7吋，請問這代表手機的何處為6.7 吋？",
    "options": {
      "A": "甲",
      "B": "乙",
      "C": "丙",
      "D": "丁。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-4-1",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 1,
    "question": "Garena傳說對決、英雄聯盟：激鬥峽谷等熱門的手機遊戲，是屬於下列 哪一種類型的軟體？",
    "options": {
      "A": "系統軟體",
      "B": "應用軟體",
      "C": "工具軟體",
      "D": "辦公室應用軟體。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-4-2",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 2,
    "question": "「Double Driver」是一套免費軟體，可用來備份硬體的驅動程式，以幫 助我們在重灌電腦後快速回復硬體的運作。請問Double Driver歸屬為下 列哪一類軟體最恰當？",
    "options": {
      "A": "公用程式",
      "B": "語言翻譯程式",
      "C": "應用軟體",
      "D": "自由軟體。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-4-3",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 3,
    "question": "下列有關軟體的敘述，何者錯誤？",
    "options": {
      "A": "重組並最佳化磁碟機可提升磁碟的讀寫效率，屬於專案開發軟體",
      "B": "Google文件可用來編輯文件、試算處理等，屬於應用軟體",
      "C": "Windows可作為使用者與電腦硬體間的溝通橋樑，屬於系統軟體",
      "D": "語言翻譯程式屬於系統軟體。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-4-4",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 4,
    "question": "下列作業系統中，何者不屬於多人多工作業系統？",
    "options": {
      "A": "iOS",
      "B": "UNIX",
      "C": "Linux",
      "D": "Windows Server。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-4-5",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 5,
    "question": "Samsung公司推出具有2億超高畫素的新款智慧型手機，請問該款手機 最可能是使用下列哪一套作業系統？",
    "options": {
      "A": "Windows",
      "B": "Linux",
      "C": "iOS",
      "D": "Android。"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-4-6",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 6,
    "question": "iOS作業系統僅允許使用者透過其內建的「App Store」下載軟體使用， 不允許安裝其他來源的軟體，這類系統可稱為？",
    "options": {
      "A": "封閉系統",
      "B": "開放系統",
      "C": "開放原始碼",
      "D": "自由軟體。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-4-7",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 7,
    "question": "下列哪一套作業系統，是由美國貝爾實驗室發展，採用C語言開發，常 應用在大型電腦上？",
    "options": {
      "A": "Linux",
      "B": "UNIX",
      "C": "W indows",
      "D": "macOS。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-4-8",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 8,
    "question": "我們經常使用LINE通訊軟體與親友傳訊，在組成雲端資源的架構中， LINE是屬於",
    "options": {
      "A": "IaaS",
      "B": "PaaS",
      "C": "BaaS",
      "D": "SaaS。  === Page 7 ===  14 數位科技概論（上）習作本  情境素養題"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-4-9",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 9,
    "question": "語欣在課堂中學到Linux作業系統可以免費下載安裝，但她要下載Linux 時，發現Linux作業系統有許多版本，例如Ubuntu、 RedHat、 Fedora 等。請問Linux有這麼多版本，主要原因為何？",
    "options": {
      "A": "Linux是免費軟體",
      "B": "Linux支援多種語言",
      "C": "Linux開放原始碼",
      "D": "Linux支援多點觸控技術。"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-4-10",
    "chapter": 4,
    "chapterTitle": "第 4 章 系統平台的組成架構－軟體與網路",
    "num": 10,
    "question": "阿雄喜歡用手機拍照，他將拍攝的照片都備份一份到Google的雲端硬碟 中，長期累積下來已使用了20GB的容量。阿雄想知道他的照片實際是 儲存在何處，請問下列哪一個位置是正確的儲存位置？",
    "options": {
      "A": "存在阿雄的手機中",
      "B": "存在網際網路的路由器中",
      "C": "分散存放在使用Google服務的其他人手機中",
      "D": "存放在Google公司分散在各處的伺服器中。"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-5-1",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 1,
    "question": "在一個大型的系統平台中，何者較不可能做為輸入的設備？",
    "options": {
      "A": "智慧型手機",
      "B": "電腦",
      "C": "CPU",
      "D": "GPS晶片。"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-5-2",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 2,
    "question": "系統平台運作的流程中，通常不包含下列何者？",
    "options": {
      "A": "偵錯",
      "B": "輸入",
      "C": "處理",
      "D": "輸出。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-5-3",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 3,
    "question": "系統平台運作過程中，由誰負責安排每項工作的處理順序，並管理程 序的啟動與結束？",
    "options": {
      "A": "應用軟體",
      "B": "作業系統",
      "C": "雲端伺服器",
      "D": "網路硬碟。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-5-4",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 4,
    "question": "在Windows作業系統中，透過按下列哪一組組合鍵，可開啟「工作管理 員」？",
    "options": {
      "A": "Shift + Enter",
      "B": "Ctrl + Alt + Delete",
      "C": "Ctrl + Shift + Delete",
      "D": "Enter + Delete。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-5-5",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 5,
    "question": "在系統平台中，透過印表機來列印文件，是屬於下列哪一種系統平台 的內部運作？",
    "options": {
      "A": "記憶體管理",
      "B": "工作排程",
      "C": "檔案管理",
      "D": "輸入∕輸出管理。"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-5-6",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 6,
    "question": "作業系統會依照不同的資料處理需求，使用不同的排程演算法，請問 下列哪一種排程演算法最可能發生「飢餓」情況，造成低優先順序的 程序被長時間擱置？",
    "options": {
      "A": "後來先服務",
      "B": "最短工作優先",
      "C": "優先排程",
      "D": "先來先服務。"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-5-7",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 7,
    "question": "一般來說，使用多核心CPU，每個核心同時工作，適合用來實現下列何 項技術？",
    "options": {
      "A": "分散處理",
      "B": "平行處理",
      "C": "單工處理",
      "D": "交談式處理。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-5-8",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 8,
    "question": "資訊科技不停發展，下列何者較不可能是未來系統平台發展的趨勢？",
    "options": {
      "A": "消耗更多資源",
      "B": "使用更多人工智慧技術",
      "C": "硬體設備的體積愈來愈小",
      "D": "系統從實體移至雲端。  === Page 12 ===  19 數位科技概論（上）習作本  情境素養題"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-5-9",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 9,
    "question": "薇薇使用電腦時，發現電腦運作速度愈來愈慢，她懷疑可能有惡意軟 體在偷偷佔用資源，請問薇薇可以透過Windows作業系統的哪一項功 能，來查看電腦中有哪些程序正在執行？",
    "options": {
      "A": "重組並最佳化磁碟機",
      "B": "磁碟檢查工具",
      "C": "檔案總管",
      "D": "工作管理員。"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-5-10",
    "chapter": 5,
    "chapterTitle": "第 5 章 系統平台的運作與未來發展",
    "num": 10,
    "question": "大雄在Windows作業系統中，嘗試將檔案屬性設定成「隱藏」，結果就 找不到被隱藏的檔案了！請問要如何操作，才能讓大雄能看到被隱藏的 檔案呢？",
    "options": {
      "A": "在被隱藏的檔案上按右鍵，選『內容』並取消隱藏",
      "B": "按功能表列的『檢視』，即可設定顯示被隱藏的檔案",
      "C": "按功能表列的『檔案』，可開啟「資料夾選項」來顯示被隱藏的檔案",
      "D": "在任一檔案上按右鍵，選『內容』並取消隱藏。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-6-1",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 1,
    "question": "下列軟體中，何者的主要功能與Word不同？",
    "options": {
      "A": "Writer",
      "B": "Pages",
      "C": "Google文件",
      "D": "Keynote。"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-6-2",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 2,
    "question": "在行政院主計總處工作的志宏，要統計消費者物價基本分類指數，並 將統計結果製成圖表。請依照以上敘述，判斷志宏最可能使用下列哪 一套軟體來完成工作？",
    "options": {
      "A": "3dsMax",
      "B": "SketchUp",
      "C": "Word",
      "D": "Excel。"
    },
    "answer": "D",
    "type": "exercise"
  },
  {
    "id": "ex-6-3",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 3,
    "question": "下列何者適合利用PowerPoint軟體來製作？",
    "options": {
      "A": "成果展簡報",
      "B": "室內設計圖",
      "C": "圖書管理系統",
      "D": "多媒體動畫。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-6-4",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 4,
    "question": "請問下列哪一項工作，最可能使用影像處理軟體（如PhotoImpact）來 達成？",
    "options": {
      "A": "為照片中的網紅加入對話",
      "B": "內政部統計各縣市全年總生 育率",
      "C": "剪輯行車紀錄器所拍攝的影片",
      "D": "撰寫一篇有關「攝影創作 與影像編修」的文章。"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-6-5",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 5,
    "question": "網路上流傳許多合成的照片，例如：搞笑合成照片、假靈異照片等， 請問下列哪一套軟體較適合用來進行上述影像合成的處理？",
    "options": {
      "A": "Audacity",
      "B": "Photoshop",
      "C": "PowerPoint",
      "D": "Excel。"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-6-6",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 6,
    "question": "下列各應用軟體之主要功用描述，何者正確？",
    "options": {
      "A": "威力導演為影像處理",
      "B": "Photoshop為預防電腦病毒",
      "C": "Excel為製作電子試算表",
      "D": "Windows Media Player為製作動畫。"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-6-7",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 7,
    "question": "玩具總動員、冰雪奇緣等立體的動畫電影，適合使用下列哪一種軟體 來製作？",
    "options": {
      "A": "威力導演",
      "B": "GIMP",
      "C": "3ds Max",
      "D": "PotPlayer。"
    },
    "answer": "C",
    "type": "exercise"
  },
  {
    "id": "ex-6-8",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 8,
    "question": "珮珮想要設計一個3D立體模型，並用3D印表機列印出來，請問她適合 使用下列哪一套軟體來設計3D模型？",
    "options": {
      "A": "PhotoImpact",
      "B": "SketchUp",
      "C": "Animate",
      "D": "Keynote。  情境素養題"
    },
    "answer": "B",
    "type": "exercise"
  },
  {
    "id": "ex-6-9",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 9,
    "question": "網紅阿D經常在YouTube分享自己唱歌的影片，這次他錄下自己的歌聲 後，想為自己的歌聲加入一些特效，請問他適合使用下列哪一種軟體 來「後製」聲音檔案呢？",
    "options": {
      "A": "Audacity",
      "B": "Animate",
      "C": "GOM Player",
      "D": "Impress。  === Page 16 ===  23 數位科技概論（上）習作本"
    },
    "answer": "A",
    "type": "exercise"
  },
  {
    "id": "ex-6-10",
    "chapter": 6,
    "chapterTitle": "第 6 章 辦公室軟體與影像∕影音軟體",
    "num": 10,
    "question": "三天兩夜的畢業旅行，曉菁拍了許多照片，她想利用「甲」軟體來 編修美化照片，再透過「乙」軟體將合適的照片組合成一段短影音。 請問甲與乙應分別為下列何種軟體？",
    "options": {
      "A": "Audacity、Photoshop",
      "B": "PowerPoint、小畫家3D",
      "C": "Photoshop、會聲會影",
      "D": "Windows Media Player、威力導演。"
    },
    "answer": "C",
    "type": "exercise"
  }
];

const CHAPTERS_DATA = [
  {
    id: 3,
    title: "第 3 章 系統平台的組成架構－硬體",
    shortTitle: "Ch03 硬體系統與架構",
    icon: "fa-microchip",
    pdf: "book/C221A3_ch03.pdf",
    summary: "介紹電腦系統硬體之五大核心架構（輸入、輸出、控制、算術邏輯、記憶單元）、CPU構造與機器週期、記憶體階層（暫存器、快取、RAM、ROM）、儲存設備（SSD、HDD、快閃記憶體）以及主機板周邊介面（USB-C, HDMI, Thunderbolt 4 等）。",
    keyConcepts: [
      { title: "電腦五大單元", desc: "輸入單元 (IU)、輸出單元 (OU)、算術邏輯單元 (ALU)、控制單元 (CU)、記憶單元 (MU)。其中 ALU 與 CU 合稱為中央處理單元 (CPU)。" },
      { title: "CPU 機器週期 (Machine Cycle)", desc: "依序為：1. 擷取 (Fetch) 2. 解碼 (Decode) 3. 執行 (Execute) 4. 儲存 (Store)。前二者為指令週期 (由 CU 主導)，後二者為執行週期 (由 ALU 主導)。" },
      { title: "記憶體比較 (DRAM vs SRAM)", desc: "SRAM 速度快、價格昂貴、不用週期性充電，常用作快取 (Cache)；DRAM 速度較慢、價格便宜、需週期充電更新 (Refresh)，作為主記憶體。" },
      { title: "儲存裝置 (SSD vs HDD)", desc: "SSD 使用快閃記憶體，抗震、讀寫快、安靜、耗電低；HDD 使用機械磁碟與讀寫頭，容量大但防震性較差。" },
      { title: "高速傳輸介面", desc: "USB Type-C 支援正反插與供電；Thunderbolt 4 頻寬達 40Gbps；HDMI 與 DisplayPort 支援高畫質影音輸出。" }
    ]
  },
  {
    id: 4,
    title: "第 4 章 系統平台的組成架構－軟體與網路",
    shortTitle: "Ch04 軟體分類與雲端",
    icon: "fa-network-wired",
    pdf: "book/C221A3_ch04.pdf",
    summary: "探討系統軟體與應用軟體之分類、作業系統之核心功能（行程管理、記憶體管理、檔案管理、周邊設備管理、使用者介面）、常見作業系統特性（Windows, Linux, macOS, Android, iOS）以及雲端運算的三層服務架構（IaaS, PaaS, SaaS）。",
    keyConcepts: [
      { title: "軟體分類", desc: "系統軟體（作業系統 OS、公用程式 Utility、驅動程式）與應用軟體（套裝軟體 Package、專案客製開發軟體 Custom Software）。" },
      { title: "作業系統分類", desc: "單人單工 (MS-DOS)、單人多工 (Windows 10/11、macOS)、多人多工 (Linux、UNIX)。" },
      { title: "開源作業系統 Linux", desc: "原始碼開放自由修改與散布，具有高度安全性與穩定性，常作為伺服器與嵌入式系統核心（如 Ubuntu, Fedora, CentOS）。" },
      { title: "雲端運算三大架構", desc: "SaaS (軟體即服務，如 Google Docs/Gmail)、PaaS (平台即服務，如 Heroku/Google App Engine)、IaaS (基礎設施即服務，如 AWS EC2/Google Compute Engine)。" }
    ]
  },
  {
    id: 5,
    title: "第 5 章 系統平台的運作與未來發展",
    shortTitle: "Ch05 系統運作與新興科技",
    icon: "fa-robot",
    pdf: "book/C221A3_ch05.pdf",
    summary: "解析系統平台日常運作流程（以手機 Google 地圖即時路況為例，說明感測器、衛星 GPS、無線通訊與雲端大數據分析之整合）、CPU 程序排程演算法（FCFS, SJF, RR）以及未來人工智慧 (AI)、物聯網 (IoT)、邊緣運算 (Edge Computing) 發展趨勢。",
    keyConcepts: [
      { title: "系統平台運作機制", desc: "感知層 (感測器/GPS) ➔ 傳輸層 (5G/Wi-Fi/物聯網) ➔ 處理層 (雲端伺服器與AI演算法分析) ➔ 應用回傳 (使用者手機即時導航)。" },
      { title: "程序排程演算法", desc: "先來先服務 (FCFS - First-Come First-Served)、最短工作優先 (SJF - Shortest Job First)、輪替排程法 (Round Robin - 每程序分配固定時間片段)。" },
      { title: "程序狀態轉換", desc: "新增 (New) ➔ 就緒 (Ready) ➔ 執行 (Running) ➔ 等待/阻塞 (Waiting) ➔ 結束 (Terminated)。" },
      { title: "AI 與機器學習", desc: "人工智慧 (廣義智慧) 涵蓋機器學習 (以數據訓練模型)，再深入為深度學習 (多層類神經網路，如 LLM 與影像辨識)。" }
    ]
  },
  {
    id: 6,
    title: "第 6 章 辦公室軟體與影像∕影音軟體",
    shortTitle: "Ch06 辦公與多媒體應用",
    icon: "fa-photo-film",
    pdf: "book/C221A3_ch06.pdf",
    summary: "認識辦公室文書處理 (Word/Writer)、試算表 (Excel/Calc)、簡報製作 (PowerPoint/Impress)，以及多媒體設計專長工具（點陣影像 Photoshop、向量繪圖 Illustrator、音訊剪輯 Audacity、短影音剪輯 威力導演/Premiere、3D建模 Blender），並掌握著作權授權與 CC 創用授權法規。",
    keyConcepts: [
      { title: "辦公室三大支柱", desc: "文書處理 (字型排版、表格目錄)、電子試算表 (函數公式、樞紐分析、統計圖表)、簡報設計 (投影片母片、動畫轉場)。" },
      { title: "影像與影音製作工具", desc: "修圖美工 (Photoshop)、音訊錄音剪輯 (Audacity)、影片剪輯組合 (訊連科技威力導演、Premiere)、3D建模 (Blender, 3ds Max)。" },
      { title: "點陣圖 vs 向量圖", desc: "點陣圖由像素組成，縮放易失真，適合照片 (JPEG, PNG)；向量圖由數學公式幾何線條組成，放大不失真，適合標誌與插圖 (SVG, AI)。" },
      { title: "智慧財產權與授權規範", desc: "商業授權 (零售版、大量授權版)、自由開源軟體 (FOSS)、創用 CC (姓名標示、非商業性、禁止改作、相同方式分享) 與 CC0 (公眾領域貢獻宣告，完全免版稅自由利用)。" }
    ]
  }
];

const CONCEPT_DRILLS = [
  {
    id: "drill-1",
    title: "電腦五大單元職責配對挑戰",
    description: "請將各硬體單元與其對應的關鍵職責進行正確配對：",
    pairs: [
      { term: "控制單元 (CU)", match: "負責協調整合各單元運作，主導指令擷取與解碼" },
      { term: "算術邏輯單元 (ALU)", match: "負責加減乘除運算及邏輯判斷比較" },
      { term: "記憶單元 (MU)", match: "負責存放待處理的資料與正在執行的程式" },
      { term: "輸入單元 (IU)", match: "接收外界資料轉換為數位信號送入電腦 (鍵盤、滑鼠)" },
      { term: "輸出單元 (OU)", match: "將電腦運算結果呈現給使用者 (螢幕、印表機)" }
    ]
  },
  {
    id: "drill-2",
    title: "DRAM 與 SRAM 記憶體特性對比",
    description: "對比主記憶體 (DRAM) 與快取記憶體 (SRAM) 的重要技術指標：",
    table: [
      { item: "是否需週期性充電 (Refresh)", dram: "是 (需充電維持電荷)", sram: "否 (正反器結構保持)" },
      { item: "存取速度", dram: "較慢", sram: "極快" },
      { item: "單位容量成本", dram: "較便宜", sram: "昂貴" },
      { item: "主要應用場景", dram: "主記憶體 (系統 RAM)", sram: "CPU 快取記憶體 (L1/L2/L3 Cache)" }
    ]
  },
  {
    id: "drill-3",
    title: "雲端服務三層架構 (IaaS / PaaS / SaaS) 識別",
    description: "判斷下列日常與開發者情境分別歸屬於哪一層雲端運算模式：",
    cases: [
      { name: "Google 雲端硬碟 / Google Docs 文書軟體", layer: "SaaS (軟體即服務)", hint: "使用者直接透過瀏覽器使用完整應用軟體" },
      { name: "Google App Engine / Firebase 開發平台", layer: "PaaS (平台即服務)", hint: "提供程式開發與執行環境，省去主機維護負擔" },
      { name: "AWS EC2 虛擬主機 / 租賃雲端硬碟容量", layer: "IaaS (基礎設施即服務)", hint: "向雲端提供商租用運算硬體資源、網路與儲存空間" }
    ]
  }
];
