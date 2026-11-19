// 智光商工 - 數位科技概論 智慧學習系統主要邏輯

document.addEventListener('DOMContentLoaded', () => {
  initAudioSystem();
  initTheme();
  initNavigation();
  initChaptersSection();
  initQuizSection();
  initExercisesSection();
  initDrillsSection();
  initAudioLab();
  initSearch();
  updateGlobalStats();
});

/* ==========================================================================
   1. 音效與語音合成系統 (Web Audio API + Web Speech API)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// 播放正確音效 (清脆兩度升和弦 C5 -> E5 -> G5)
function playCorrectSound() {
  if (!soundEnabled) return;
  initAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
  notes.forEach((freq, index) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + index * 0.08);

    gain.gain.setValueAtTime(0, now + index * 0.08);
    gain.gain.linearRampToValueAtTime(0.18, now + index * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now + index * 0.08);
    osc.stop(now + index * 0.08 + 0.26);
  });
}

// 播放錯誤提示音 (柔和低頻雙音)
function playWrongSound() {
  if (!soundEnabled) return;
  initAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(260, now);
  osc.frequency.linearRampToValueAtTime(180, now + 0.2);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.3);
}

// 播放通關勝利號角音效
function playFanfare() {
  if (!soundEnabled) return;
  initAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const arpeggio = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  arpeggio.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const start = now + idx * 0.12;
    const dur = (idx === arpeggio.length - 1) ? 0.6 : 0.22;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, start);

    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.2, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, start + dur);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(start);
    osc.stop(start + dur + 0.05);
  });
}

// 輕觸按鍵音效
function playClickSound() {
  if (!soundEnabled) return;
  initAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  gain.gain.setValueAtTime(0.05, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.05);
}

// Web Speech API 語音朗讀
let ttsVoice = null;
let voicesList = [];

function initAudioSystem() {
  if ('speechSynthesis' in window) {
    const loadVoices = () => {
      voicesList = window.speechSynthesis.getVoices();
      // 優先尋找繁體中文 (zh-TW, zh-HK)
      ttsVoice = voicesList.find(v => v.lang === 'zh-TW' || v.lang.includes('TW')) ||
                 voicesList.find(v => v.lang.startsWith('zh')) || null;
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  // 頂部快速語音按鈕 (朗讀 "智光商工")
  const quickAudioBtn = document.getElementById('btnQuickAudio');
  if (quickAudioBtn) {
    quickAudioBtn.addEventListener('click', () => {
      initAudioContext();
      speakText('智光商工。數位科技概論線上學習平台。');
    });
  }

  // 音效切換開關
  const soundToggleBtn = document.getElementById('btnSoundToggle');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.innerHTML = soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
      soundToggleBtn.title = soundEnabled ? '音效已開啟' : '音效已靜音';
      if (soundEnabled) playCorrectSound();
    });
  }
}

function speakText(text, onEnd) {
  if (!('speechSynthesis' in window)) {
    alert('您的瀏覽器不支援語音合成功能');
    return;
  }
  window.speechSynthesis.cancel(); // 停止先前的朗讀

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-TW';
  if (ttsVoice) utterance.voice = ttsVoice;

  // 讀取設定 (如 AudioLab 中有調整)
  const rateInput = document.getElementById('ttsRate');
  const pitchInput = document.getElementById('ttsPitch');
  if (rateInput) utterance.rate = parseFloat(rateInput.value);
  if (pitchInput) utterance.pitch = parseFloat(pitchInput.value);

  if (onEnd) utterance.onend = onEnd;

  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}


/* ==========================================================================
   2. 深淺主題切換 (Dark / Light Theme)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('btnThemeToggle');
  const savedTheme = localStorage.getItem('zk_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playClickSound();
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('zk_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('btnThemeToggle');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    btn.title = theme === 'dark' ? '切換淺色模式' : '切換深色模式';
  }
}


/* ==========================================================================
   3. 導覽列與分頁切換 (Navigation & Tab Switch)
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .btn-switch-tab');
  const tabPanels = document.querySelectorAll('.tab-content');
  const mobileToggle = document.getElementById('btnMobileMenu');
  const mainNav = document.getElementById('mainNav');

  function switchTab(targetId) {
    playClickSound();
    // 更新連結狀態
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-tab') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 切換面板
    tabPanels.forEach(panel => {
      if (panel.id === targetId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    if (mainNav) mainNav.classList.remove('show-mobile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, null, `#${targetId}`);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('data-tab');
      if (target) {
        e.preventDefault();
        switchTab(target);
      }
    });
  });

  // 點擊品牌 logo 回首頁
  const brandSection = document.getElementById('brandSection');
  if (brandSection) {
    brandSection.addEventListener('click', () => switchTab('tabOverview'));
  }

  // 行動裝置漢堡選單
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('show-mobile');
    });
  }

  // 處理初始 Hash 網址
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }
}


/* ==========================================================================
   4. 數位教材庫 (Chapters & PDF Reader)
   ========================================================================== */
let currentChapterId = 3;

function initChaptersSection() {
  const sidebar = document.getElementById('chapterSidebarList');
  const detailPane = document.getElementById('chapterDetailPane');
  if (!sidebar || !detailPane) return;

  // 渲染章節側邊清單
  sidebar.innerHTML = CHAPTERS_DATA.map(ch => `
    <button class="sidebar-item ${ch.id === currentChapterId ? 'active' : ''}" data-chap="${ch.id}">
      <span><i class="fa-solid ${ch.icon} me-2"></i> ${ch.shortTitle}</span>
      <span class="item-badge">Ch0${ch.id}</span>
    </button>
  `).join('');

  sidebar.querySelectorAll('.sidebar-item').forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      const chId = parseInt(btn.getAttribute('data-chap'), 10);
      currentChapterId = chId;
      sidebar.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChapterDetail(chId);
    });
  });

  // 初始渲染
  renderChapterDetail(currentChapterId);
}

function renderChapterDetail(chId) {
  const ch = CHAPTERS_DATA.find(c => c.id === chId) || CHAPTERS_DATA[0];
  const detailPane = document.getElementById('chapterDetailPane');
  if (!detailPane) return;

  detailPane.innerHTML = `
    <div class="chapter-header">
      <div>
        <div class="chapter-badge">數位科技概論 • 第 ${ch.id} 章</div>
        <h2>${ch.title}</h2>
      </div>
      <div class="chapter-controls">
        <button class="btn-secondary" id="btnSpeakSummary">
          <i class="fa-solid fa-volume-high"></i> 朗讀本章精華
        </button>
        <a href="${ch.pdf}" target="_blank" class="btn-primary" download>
          <i class="fa-solid fa-download"></i> 下載 PDF
        </a>
      </div>
    </div>

    <div class="concept-item mb-4" style="border-left-color: var(--secondary);">
      <h4><i class="fa-solid fa-book-open"></i> 章節核心導讀</h4>
      <p id="chapterSummaryText">${ch.summary}</p>
    </div>

    <h3 class="mb-3 font-weight-bold" style="font-size: 1.15rem;">
      <i class="fa-solid fa-star text-warning"></i> 重點精華觀念整理
    </h3>
    <div class="concept-card-list">
      ${ch.keyConcepts.map(c => `
        <div class="concept-item">
          <h4>${c.title}</h4>
          <p>${c.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="pdf-viewer-wrap">
      <div class="pdf-viewer-header">
        <span><i class="fa-regular fa-file-pdf"></i> 原版教材線上瀏覽（${ch.shortTitle}）</span>
        <a href="${ch.pdf}" target="_blank" style="color: #60a5fa; text-decoration: none;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> 全螢幕開啟
        </a>
      </div>
      <iframe src="${ch.pdf}#toolbar=1" class="pdf-iframe" title="${ch.title}">
        您的瀏覽器不支援直接預覽 PDF，請點選上方「全螢幕開啟」或「下載 PDF」進行閱讀。
      </iframe>
    </div>
  `;

  // 綁定朗讀按鈕
  const speakBtn = document.getElementById('btnSpeakSummary');
  if (speakBtn) {
    speakBtn.addEventListener('click', () => {
      speakText(`${ch.title}。${ch.summary}`);
    });
  }
}


/* ==========================================================================
   5. 隨堂測驗系統 (Interactive Quiz System)
   ========================================================================== */
let activeQuizFilter = 'all'; // 'all', 3, 4, 5
let quizQuestionsPool = [];
let currentQuizIndex = 0;
let userQuizAnswers = {}; // { questionId: 'A' }
let quizSubmitted = false;

function initQuizSection() {
  const filterBtns = document.querySelectorAll('#quizFilterGroup .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeQuizFilter = btn.getAttribute('data-filter');
      startQuizSession();
    });
  });

  // 初始開始測驗
  startQuizSession();
}

function startQuizSession() {
  // 篩選題目
  if (activeQuizFilter === 'all') {
    quizQuestionsPool = [...COURSE_QUIZZES];
  } else {
    const chNum = parseInt(activeQuizFilter, 10);
    quizQuestionsPool = COURSE_QUIZZES.filter(q => q.chapter === chNum);
  }

  // 打亂順序或取前 20 題
  quizQuestionsPool = shuffleArray([...quizQuestionsPool]).slice(0, 20);
  currentQuizIndex = 0;
  userQuizAnswers = {};
  quizSubmitted = false;

  renderQuizUI();
}

function renderQuizUI() {
  const container = document.getElementById('quizCardContainer');
  const resultContainer = document.getElementById('quizResultContainer');
  const statusContainer = document.getElementById('quizStatusBar');
  if (!container) return;

  resultContainer.style.display = 'none';
  container.style.display = 'block';
  statusContainer.style.display = 'flex';

  if (quizQuestionsPool.length === 0) {
    container.innerHTML = `<p class="text-center p-4">目前無測驗題目</p>`;
    return;
  }

  const q = quizQuestionsPool[currentQuizIndex];
  const progressPercent = Math.round(((currentQuizIndex + 1) / quizQuestionsPool.length) * 100);

  // 更新狀態條
  document.getElementById('quizCurrentIdx').textContent = currentQuizIndex + 1;
  document.getElementById('quizTotalCount').textContent = quizQuestionsPool.length;
  document.getElementById('quizProgressFill').style.width = `${progressPercent}%`;

  const selectedOpt = userQuizAnswers[q.id];

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-card-header">
        <span class="quiz-badge">第 ${q.chapter} 章 • 第 ${q.num} 題</span>
        <button class="quiz-tts-btn" id="btnSpeakQuestion">
          <i class="fa-solid fa-volume-high"></i> 朗讀題目
        </button>
      </div>

      <div class="quiz-question-text">${q.question}</div>

      <div class="quiz-options-list">
        ${['A', 'B', 'C', 'D'].map(key => {
          const optText = q.options[key];
          if (!optText) return '';
          let cls = 'option-btn';
          if (selectedOpt === key) cls += ' selected';
          
          if (selectedOpt) {
            if (key === q.answer) cls += ' correct';
            else if (selectedOpt === key) cls += ' incorrect';
          }

          return `
            <button class="${cls}" data-opt="${key}">
              <span class="option-key">${key}</span>
              <span class="option-text">${optText}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="quiz-explanation-box ${selectedOpt ? 'show' : ''}" id="quizExplanation">
        <div class="explanation-title">
          <i class="fa-solid fa-lightbulb"></i> 正確答案：${q.answer}
        </div>
        <div class="explanation-body">
          ${selectedOpt === q.answer 
            ? '<span class="text-success font-weight-bold">答對了！恭喜掌握此概念。</span>' 
            : `<span class="text-danger font-weight-bold">答錯了，請複習第 ${q.chapter} 章相關核心重點。</span>`}
        </div>
      </div>

      <div class="quiz-controls-row">
        <button class="btn-secondary" id="btnQuizPrev" ${currentQuizIndex === 0 ? 'disabled' : ''}>
          <i class="fa-solid fa-arrow-left"></i> 上一題
        </button>
        <div>
          ${currentQuizIndex < quizQuestionsPool.length - 1 ? `
            <button class="btn-primary" id="btnQuizNext">
              下一題 <i class="fa-solid fa-arrow-right"></i>
            </button>
          ` : `
            <button class="btn-primary" id="btnQuizFinish" style="background: linear-gradient(135deg, #10b981, #059669);">
              <i class="fa-solid fa-check"></i> 查看結算成績
            </button>
          `}
        </div>
      </div>
    </div>
  `;

  // 綁定選項點擊
  container.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = btn.getAttribute('data-opt');
      if (userQuizAnswers[q.id]) return; // 已作答則鎖定

      userQuizAnswers[q.id] = chosen;

      if (chosen === q.answer) {
        playCorrectSound();
      } else {
        playWrongSound();
      }

      // 重新渲染顯示解析
      renderQuizUI();
      recordAnswerToHistory(chosen === q.answer);
    });
  });

  // 綁定題目朗讀
  const speakQBtn = document.getElementById('btnSpeakQuestion');
  if (speakQBtn) {
    speakQBtn.addEventListener('click', () => {
      let ttsMsg = q.question;
      ['A', 'B', 'C', 'D'].forEach(k => {
        if (q.options[k]) ttsMsg += `。選項 ${k}：${q.options[k]}`;
      });
      speakText(ttsMsg);
    });
  }

  // 上下題按鈕
  const prevBtn = document.getElementById('btnQuizPrev');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentQuizIndex > 0) {
        playClickSound();
        currentQuizIndex--;
        renderQuizUI();
      }
    });
  }

  const nextBtn = document.getElementById('btnQuizNext');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentQuizIndex < quizQuestionsPool.length - 1) {
        playClickSound();
        currentQuizIndex++;
        renderQuizUI();
      }
    });
  }

  const finishBtn = document.getElementById('btnQuizFinish');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      showQuizResults();
    });
  }
}

function showQuizResults() {
  const container = document.getElementById('quizCardContainer');
  const resultContainer = document.getElementById('quizResultContainer');
  const statusContainer = document.getElementById('quizStatusBar');

  container.style.display = 'none';
  statusContainer.style.display = 'none';
  resultContainer.style.display = 'block';

  let correctCount = 0;
  quizQuestionsPool.forEach(q => {
    if (userQuizAnswers[q.id] === q.answer) {
      correctCount++;
    }
  });

  const total = quizQuestionsPool.length;
  const score = Math.round((correctCount / total) * 100);

  if (score >= 80) {
    playFanfare();
  } else {
    playCorrectSound();
  }

  let verdict = '繼續加油！多閱讀章節教材能顯著提高得分！';
  let badgeIcon = '<i class="fa-solid fa-award"></i>';
  if (score === 100) {
    verdict = '太卓越了！滿分通過！完全掌握數位科技精髓！';
    badgeIcon = '<i class="fa-solid fa-crown"></i>';
  } else if (score >= 80) {
    verdict = '非常優秀！具備扎實的高職數位科技素養！';
  } else if (score >= 60) {
    verdict = '表現良好！及格通過，建議再加強錯題觀念！';
  }

  // 儲存最高分至 localStorage
  const prevHigh = parseInt(localStorage.getItem('zk_high_score') || '0', 10);
  if (score > prevHigh) {
    localStorage.setItem('zk_high_score', score);
  }

  resultContainer.innerHTML = `
    <div class="result-card">
      <div class="result-badge">${badgeIcon}</div>
      <div class="result-score">${score} 分</div>
      <div class="result-verdict">${verdict}</div>

      <div class="result-stats-grid">
        <div class="result-stat-box">
          <div class="result-stat-val text-primary">${total}</div>
          <div class="result-stat-lbl">總題數</div>
        </div>
        <div class="result-stat-box">
          <div class="result-stat-val text-success">${correctCount}</div>
          <div class="result-stat-lbl">答對題數</div>
        </div>
        <div class="result-stat-box">
          <div class="result-stat-val text-danger">${total - correctCount}</div>
          <div class="result-stat-lbl">答錯題數</div>
        </div>
      </div>

      <div class="d-flex justify-content-center gap-3">
        <button class="btn-primary" id="btnRestartQuiz">
          <i class="fa-solid fa-rotate-right"></i> 重新測驗
        </button>
        <button class="btn-secondary" id="btnReviewErrors">
          <i class="fa-solid fa-magnifying-glass"></i> 觀看題目檢討
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnRestartQuiz').addEventListener('click', () => {
    playClickSound();
    startQuizSession();
  });

  document.getElementById('btnReviewErrors').addEventListener('click', () => {
    playClickSound();
    currentQuizIndex = 0;
    renderQuizUI();
  });

  updateGlobalStats();
}


/* ==========================================================================
   6. 習作精選練習 (Exercises & Contextual Practice)
   ========================================================================== */
let activeExerciseFilter = 3;

function initExercisesSection() {
  const filterBtns = document.querySelectorAll('#exerciseFilterGroup .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeExerciseFilter = parseInt(btn.getAttribute('data-filter'), 10);
      renderExercisesList();
    });
  });

  renderExercisesList();
}

function renderExercisesList() {
  const container = document.getElementById('exercisesListContainer');
  if (!container) return;

  const list = COURSE_EXERCISES.filter(ex => ex.chapter === activeExerciseFilter);

  container.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="font-weight-bold" style="font-size: 1.05rem;">
        <i class="fa-solid fa-pencil text-primary"></i> 第 ${activeExerciseFilter} 章 課後習作本練習（共 ${list.length} 題）
      </div>
      <a href="exercise/exercise.pdf" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
        <i class="fa-regular fa-file-pdf"></i> 原版習作本 PDF
      </a>
    </div>
    <div class="d-flex flex-column gap-3">
      ${list.map((ex, idx) => `
        <div class="quiz-card" style="padding: 1.5rem;" id="card-${ex.id}">
          <div class="quiz-card-header">
            <span class="quiz-badge">習作 第 ${idx + 1} 題</span>
            <button class="quiz-tts-btn" onclick="speakText('${escapeSingleQuotes(ex.question)}')">
              <i class="fa-solid fa-volume-high"></i> 朗讀
            </button>
          </div>
          <div class="quiz-question-text" style="font-size: 1rem; margin-bottom: 1rem;">
            ${ex.question}
          </div>
          <div class="quiz-options-list">
            ${['A', 'B', 'C', 'D'].map(k => ex.options[k] ? `
              <div class="option-btn" style="padding: 0.75rem 1rem;" data-exid="${ex.id}" data-opt="${k}">
                <span class="option-key">${k}</span>
                <span>${ex.options[k]}</span>
              </div>
            ` : '').join('')}
          </div>
          <div class="quiz-explanation-box" id="explain-${ex.id}">
            <div class="explanation-title">
              <i class="fa-solid fa-circle-check text-success"></i> 標準解答：${ex.answer}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // 綁定點擊即看答案
  container.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const exId = btn.getAttribute('data-exid');
      const opt = btn.getAttribute('data-opt');
      const ex = COURSE_EXERCISES.find(e => e.id === exId);
      if (!ex) return;

      const card = document.getElementById(`card-${exId}`);
      const explainBox = document.getElementById(`explain-${exId}`);
      explainBox.classList.add('show');

      card.querySelectorAll('.option-btn').forEach(b => {
        const k = b.getAttribute('data-opt');
        if (k === ex.answer) {
          b.classList.add('correct');
        } else if (k === opt) {
          b.classList.add('incorrect');
        }
      });

      if (opt === ex.answer) {
        playCorrectSound();
      } else {
        playWrongSound();
      }
    });
  });
}

function escapeSingleQuotes(str) {
  return (str || '').replace(/'/g, "\\'").replace(/\n/g, ' ');
}


/* ==========================================================================
   7. 觀念診斷與對比挑戰 (Concept Drills & Comparison)
   ========================================================================== */
function initDrillsSection() {
  const container = document.getElementById('drillsContainer');
  if (!container) return;

  container.innerHTML = `
    <!-- Drill 1: DRAM vs SRAM -->
    <div class="drill-card">
      <h3><i class="fa-solid fa-table-columns text-primary"></i> DRAM 與 SRAM 記憶體特性深度對比</h3>
      <p class="drill-desc">統測必考！掌握動態隨機存取記憶體與靜態隨機存取記憶體之架構差異。</p>
      <div class="concept-table-wrap">
        <table class="concept-table">
          <thead>
            <tr>
              <th>比較項目</th>
              <th>DRAM (動態隨機存取記憶體)</th>
              <th>SRAM (靜態隨機存取記憶體)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>內部儲存架構</strong></td>
              <td>電容器 + 電晶體 (電荷會逐漸流失)</td>
              <td>雙極性電晶體或正反器 (Flip-Flop)</td>
            </tr>
            <tr>
              <td><strong>是否需充電 (Refresh)</strong></td>
              <td><span class="badge-tag-sm badge-blue">需要週期性充電</span></td>
              <td><span class="badge-tag-sm badge-green">不需週期性充電</span></td>
            </tr>
            <tr>
              <td><strong>存取速度</strong></td>
              <td>較慢 (約數十奈秒)</td>
              <td>極快 (約數奈秒)</td>
            </tr>
            <tr>
              <td><strong>單位價格與密度</strong></td>
              <td>便宜、集成度高、容量大</td>
              <td>昂貴、集成度較低、容量小</td>
            </tr>
            <tr>
              <td><strong>主要系統應用</strong></td>
              <td>個人電腦主記憶體 (RAM 模組)</td>
              <td>CPU 快取記憶體 (L1 / L2 / L3 Cache)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Drill 2: 雲端三層服務架構 -->
    <div class="drill-card">
      <h3><i class="fa-solid fa-cloud text-accent"></i> 雲端運算三大服務架構 (IaaS / PaaS / SaaS)</h3>
      <p class="drill-desc">雲端技術核心模型，根據維護層級與服務內容劃分：</p>
      <div class="concept-table-wrap">
        <table class="concept-table">
          <thead>
            <tr>
              <th>服務模型</th>
              <th>全名</th>
              <th>主要提供內容</th>
              <th>典型範例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>SaaS</strong></td>
              <td>Software as a Service (軟體即服務)</td>
              <td>直接在瀏覽器使用完整的雲端應用軟體</td>
              <td>Google Docs, Gmail, Microsoft 365</td>
            </tr>
            <tr>
              <td><strong>PaaS</strong></td>
              <td>Platform as a Service (平台即服務)</td>
              <td>提供程式開發環境、資料庫與部署執行平台</td>
              <td>Google App Engine, Firebase, Heroku</td>
            </tr>
            <tr>
              <td><strong>IaaS</strong></td>
              <td>Infrastructure as a Service (基礎設施即服務)</td>
              <td>出租虛擬主機、儲存空間、網路等底層硬體</td>
              <td>AWS EC2, Google Compute Engine, 雲端儲存</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Drill 3: 印表機類別全面比較 -->
    <div class="drill-card">
      <h3><i class="fa-solid fa-print text-warning"></i> 常見印表機技術與耗材比較</h3>
      <p class="drill-desc">比較點陣式、噴墨式與雷射印表機之列印原理、速度及應用場景：</p>
      <div class="concept-table-wrap">
        <table class="concept-table">
          <thead>
            <tr>
              <th>印表機類別</th>
              <th>列印方式</th>
              <th>主要耗材</th>
              <th>列印速度</th>
              <th>最適用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>點陣式印表機</strong></td>
              <td>撞擊式 (鋼針撞擊色帶)</td>
              <td>色帶</td>
              <td>慢</td>
              <td>多聯式複寫發票、收據、郵局存摺</td>
            </tr>
            <tr>
              <td><strong>噴墨式印表機</strong></td>
              <td>非撞擊式 (微壓電或熱泡噴墨)</td>
              <td>CMYK 墨水匣、噴嘴頭</td>
              <td>中等</td>
              <td>高品質彩色相片、海報輸出</td>
            </tr>
            <tr>
              <td><strong>雷射印表機</strong></td>
              <td>非撞擊式 (感光鼓+靜電加熱)</td>
              <td>碳粉匣 (Toner)</td>
              <td>極快 (以 ppm 計算)</td>
              <td>辦公室大量黑白/彩色文件快速列印</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}


/* ==========================================================================
   8. 語音中心與實驗室 (Audio Lab & Voice Studio)
   ========================================================================== */
function initAudioLab() {
  const btnSpeakCustom = document.getElementById('btnSpeakCustom');
  const btnSpeakSchool = document.getElementById('btnSpeakSchool');
  const btnSpeakIntro = document.getElementById('btnSpeakIntro');
  const customTextInput = document.getElementById('customTtsInput');

  // 朗讀校名 (智光商工)
  if (btnSpeakSchool) {
    btnSpeakSchool.addEventListener('click', () => {
      playClickSound();
      speakText('智光商工');
    });
  }

  // 朗讀平台歡迎導覽
  if (btnSpeakIntro) {
    btnSpeakIntro.addEventListener('click', () => {
      playClickSound();
      speakText('歡迎蒞臨智光商工數位科技概論智慧學習平台！本平台專為期末專題設計，整合教科書、隨堂測驗、作業習題與語音導覽，祝您學習進步！');
    });
  }

  // 朗讀自訂文字
  if (btnSpeakCustom && customTextInput) {
    btnSpeakCustom.addEventListener('click', () => {
      const val = customTextInput.value.trim();
      if (val) {
        speakText(val);
      } else {
        speakText('請在輸入框中輸入您想朗讀的內容');
      }
    });
  }

  // 音效合成試聽按鈕
  document.getElementById('btnTestCorrect')?.addEventListener('click', playCorrectSound);
  document.getElementById('btnTestWrong')?.addEventListener('click', playWrongSound);
  document.getElementById('btnTestFanfare')?.addEventListener('click', playFanfare);
  document.getElementById('btnTestClick')?.addEventListener('click', playClickSound);
}


/* ==========================================================================
   9. 全域搜尋功能 (Global Search)
   ========================================================================== */
function initSearch() {
  const searchBtn = document.getElementById('btnSearchModal');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const closeBtn = document.getElementById('btnCloseSearch');

  if (!searchBtn || !searchModal) return;

  function openModal() {
    searchModal.classList.add('open');
    searchInput.value = '';
    searchInput.focus();
    renderSearchResults('');
  }

  function closeModal() {
    searchModal.classList.remove('open');
  }

  searchBtn.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeModal();
  });

  // 鍵盤快速鍵 Ctrl + K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openModal();
    } else if (e.key === 'Escape' && searchModal.classList.contains('open')) {
      closeModal();
    }
  });

  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim());
  });

  function renderSearchResults(query) {
    if (!searchResults) return;
    if (!query) {
      searchResults.innerHTML = `<div class="p-3 text-muted text-center">輸入關鍵字（例如：CPU、RAM、Linux、SaaS、印表機）即刻檢索！</div>`;
      return;
    }

    const qLower = query.toLowerCase();
    const matched = [];

    // 搜尋章節
    CHAPTERS_DATA.forEach(ch => {
      if (ch.title.toLowerCase().includes(qLower) || ch.summary.toLowerCase().includes(qLower)) {
        matched.push({
          type: '章節教材',
          title: ch.title,
          snippet: ch.summary.slice(0, 70) + '...',
          action: () => {
            closeModal();
            document.querySelector('[data-tab="tabChapters"]').click();
            const btn = document.querySelector(`[data-chap="${ch.id}"]`);
            if (btn) btn.click();
          }
        });
      }
      ch.keyConcepts.forEach(kc => {
        if (kc.title.toLowerCase().includes(qLower) || kc.desc.toLowerCase().includes(qLower)) {
          matched.push({
            type: `重點觀念 (Ch0${ch.id})`,
            title: kc.title,
            snippet: kc.desc,
            action: () => {
              closeModal();
              document.querySelector('[data-tab="tabChapters"]').click();
              const btn = document.querySelector(`[data-chap="${ch.id}"]`);
              if (btn) btn.click();
            }
          });
        }
      });
    });

    // 搜尋測驗題目
    COURSE_QUIZZES.forEach(qz => {
      if (qz.question.toLowerCase().includes(qLower)) {
        matched.push({
          type: `隨堂測驗 (Ch0${qz.chapter})`,
          title: qz.question.slice(0, 45) + '...',
          snippet: `正確解答：${qz.answer}`,
          action: () => {
            closeModal();
            document.querySelector('[data-tab="tabQuiz"]').click();
          }
        });
      }
    });

    if (matched.length === 0) {
      searchResults.innerHTML = `<div class="p-3 text-muted text-center">查無符合「${query}」之相關教材或題目</div>`;
      return;
    }

    searchResults.innerHTML = matched.slice(0, 10).map((item, idx) => `
      <div class="search-item" data-idx="${idx}">
        <span class="badge-tag-sm badge-blue me-2">${item.type}</span>
        <div class="search-item-title">${item.title}</div>
        <div class="search-item-desc">${item.snippet}</div>
      </div>
    `).join('');

    searchResults.querySelectorAll('.search-item').forEach((elem, idx) => {
      elem.addEventListener('click', () => {
        matched[idx].action();
      });
    });
  }
}


/* ==========================================================================
   10. 學習統計與歷史進度
   ========================================================================== */
function recordAnswerToHistory(isCorrect) {
  let answered = parseInt(localStorage.getItem('zk_answered_count') || '0', 10) + 1;
  let correct = parseInt(localStorage.getItem('zk_correct_count') || '0', 10);
  if (isCorrect) correct += 1;

  localStorage.setItem('zk_answered_count', answered);
  localStorage.setItem('zk_correct_count', correct);
  updateGlobalStats();
}

function updateGlobalStats() {
  const answered = parseInt(localStorage.getItem('zk_answered_count') || '0', 10);
  const correct = parseInt(localStorage.getItem('zk_correct_count') || '0', 10);
  const highScore = parseInt(localStorage.getItem('zk_high_score') || '0', 10);

  const statAnsweredEl = document.getElementById('statAnsweredCount');
  const statAccuracyEl = document.getElementById('statAccuracyRate');
  const statHighScoreEl = document.getElementById('statHighScore');

  if (statAnsweredEl) statAnsweredEl.textContent = answered;
  if (statAccuracyEl) {
    const acc = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    statAccuracyEl.textContent = `${acc}%`;
  }
  if (statHighScoreEl) statHighScoreEl.textContent = highScore > 0 ? `${highScore} 分` : '--';
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
