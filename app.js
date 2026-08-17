const QUESTIONS = [
  {
    id: "ch1-q001",
    chapter: 1,
    category: "筋系・サルコメア",
    type: "standard",
    question: "骨格筋の基本的な機能的収縮単位として最も適切なのはどれか。",
    choices: ["筋原線維", "サルコメア（筋節）", "筋鞘", "神経筋接合部"],
    answer: 1,
    explanation: "サルコメア（筋節）は、隣接するZ線からZ線までの構造で、骨格筋の基本的な機能的収縮単位とされる。"
  },
  {
    id: "ch1-q002",
    chapter: 1,
    category: "筋系・フィラメント",
    type: "standard",
    question: "フィラメント滑走説について最も適切なのはどれか。",
    choices: [
      "アクチンとミオシン自体が収縮して短くなる",
      "筋フィラメントが互いに滑り込むことで筋が短縮・伸張する",
      "サルコメアが消失することで筋が短縮する",
      "カルシウムがミオシンを分解することで筋が短縮する"
    ],
    answer: 1,
    explanation: "フィラメント滑走説では、筋フィラメント自体の長さは変わらず、アクチンとミオシンが互いに滑り込むことで筋の短縮・伸張が起こると説明される。"
  },
  {
    id: "ch1-q003",
    chapter: 1,
    category: "筋系・調節タンパク質",
    type: "standard",
    question: "トロポニンがカルシウムイオンと結合したときに起こる変化として、資料の説明に最も合うものはどれか。",
    choices: [
      "アクチン上のミオシン結合部位からトロポミオシンを移動させる",
      "ミオシンを分解する",
      "ATPを直接合成する",
      "Z線を切断する"
    ],
    answer: 0,
    explanation: "資料では、トロポニンがカルシウムイオンと結合すると、アクチン上のミオシン結合部位からトロポミオシンを移動させ、ミオシン頭部がアクチンに結合できるようになると説明されている。"
  },
  {
    id: "ch1-q004",
    chapter: 1,
    category: "筋系・構造",
    type: "standard",
    question: "A帯について最も適切なのはどれか。",
    choices: [
      "ミオシンフィラメントの全長に相当する",
      "Z線からZ線までの距離そのものを指す",
      "ミオシンが存在しない部分だけを指す",
      "神経筋接合部の幅を指す"
    ],
    answer: 0,
    explanation: "資料では、A帯はミオシンフィラメントの全長に相当し、骨格筋の縞模様の暗帯を形成すると説明されている。"
  },
  {
    id: "ch1-q005",
    chapter: 1,
    category: "神経系・神経筋接合部",
    type: "standard",
    question: "神経筋接合部を構成するものとして最も適切な組み合わせはどれか。",
    choices: [
      "軸索終末・運動終板・シナプス間隙",
      "Z線・M線・H帯",
      "アクチン・タイチン・ネプリン",
      "筋鞘・筋原線維・A帯"
    ],
    answer: 0,
    explanation: "資料では、神経筋接合部は神経細胞の軸索終末、筋細胞膜の特殊領域である運動終板、両者の間のシナプス間隙（神経筋間隙）から構成されると説明されている。"
  },
  {
    id: "ch1-q006",
    chapter: 1,
    category: "筋系・ケース",
    type: "case",
    caseId: "case-001",
    question: "クライアントが高負荷の筋力トレーニングで筋収縮を行っている。神経から筋線維へ信号が伝わり、筋収縮が進行する過程を考えたとき、最初に神経筋接合部へ放出される物質として最も適切なのはどれか。",
    choices: ["カルシウムイオン", "アセチルコリン（ACh）", "アクチン", "トロポミオシン"],
    answer: 1,
    explanation: "資料では、活動電位が神経細胞の末端まで伝わると、神経筋接合部で興奮性神経伝達物質であるアセチルコリン（ACh）が放出されると説明されている。"
  }
];

const STORAGE_KEY = "cptmate_v01_state";

const defaultState = {
  answers: {},
  bookmarks: {},
  currentIndex: 0,
  lastViewed: "home"
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function answeredCount() {
  return Object.keys(state.answers).length;
}

function correctCount() {
  return Object.values(state.answers).filter(a => a.correct).length;
}

function accuracy() {
  const n = answeredCount();
  return n ? Math.round(correctCount() / n * 100) : 0;
}

function screenEl() {
  return document.getElementById("screen");
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.nav === name);
  });
}

function renderHome() {
  state.lastViewed = "home";
  saveState();
  setActiveNav("home");

  const answered = answeredCount();
  const correct = correctCount();

  screenEl().innerHTML = `
    <section class="hero">
      <div class="label">CPTmate v0.1</div>
      <h2>今日も1問ずつ、確実に。</h2>
      <p>問題を解く → 解説で理解する → 間違いを復習する。この学習サイクルをここから育てていきます。</p>
      <button class="primary-btn full" onclick="startPractice()">問題演習を始める</button>
    </section>

    <div class="section-title"><h2>学習状況</h2><span>ローカル保存</span></div>
    <section class="card">
      <div class="stat-grid">
        <div class="stat"><div class="num">${answered}</div><div class="label">解答済み</div></div>
        <div class="stat"><div class="num">${accuracy()}%</div><div class="label">正答率</div></div>
      </div>
    </section>

    <div class="section-title"><h2>学習メニュー</h2></div>
    <div class="menu-grid">
      <button class="menu-item" onclick="startPractice()"><strong>通常問題</strong><small>第1章の問題を解く</small></button>
      <button class="menu-item" onclick="renderReview()"><strong>間違えた問題</strong><small>${wrongCount()}問を復習</small></button>
      <button class="menu-item" onclick="renderStats()"><strong>学習状況</strong><small>正答率と進捗を見る</small></button>
      <button class="menu-item" onclick="renderSettings()"><strong>設定</strong><small>データ管理</small></button>
    </div>

    <div class="section-title"><h2>現在のコンテンツ</h2></div>
    <section class="card">
      <h3>第1章：筋系、神経系、骨格系</h3>
      <p style="color:var(--muted);line-height:1.7;margin:0;">v0.1では、第1章を使って問題演習の土台を確認します。今後、章・ケース・図問題を順次追加します。</p>
    </section>
  `;
}

function startPractice(index = 0) {
  state.currentIndex = index;
  state.lastViewed = "practice";
  saveState();
  renderQuestion();
}

function renderQuestion() {
  setActiveNav("practice");
  const q = QUESTIONS[state.currentIndex % QUESTIONS.length];
  const saved = state.answers[q.id];
  const bookmarked = !!state.bookmarks[q.id];
  const letters = ["A", "B", "C", "D"];

  let choices = q.choices.map((choice, i) => {
    let cls = "";
    if (saved) {
      if (i === q.answer) cls = "correct";
      else if (i === saved.selected && !saved.correct) cls = "wrong";
    }
    return `<button class="choice ${cls}" ${saved ? "disabled" : ""} onclick="answerQuestion(${i})">
      <span class="letter">${letters[i]}</span><span>${choice}</span>
    </button>`;
  }).join("");

  const result = saved ? `
    <div class="result ${saved.correct ? "correct" : "wrong"}">
      <strong>${saved.correct ? "正解" : "不正解"}</strong>
      <div>${saved.correct ? "その選択で正解です。" : `正解は ${letters[q.answer]}：${q.choices[q.answer]}`}</div>
      <div class="explanation"><strong>解説</strong><br>${q.explanation}</div>
    </div>
    <button class="primary-btn full" onclick="nextQuestion()">次の問題</button>
  ` : "";

  screenEl().innerHTML = `
    <div class="back-row">
      <button class="back-btn" onclick="renderHome()">‹</button>
      <h2>問題演習</h2>
    </div>

    <section class="card">
      <div class="question-head">
        <span>第${q.chapter}章　${q.category}</span>
        <span>${state.currentIndex + 1} / ${QUESTIONS.length}</span>
      </div>
      <div class="bookmark-row">
        <button class="bookmark" onclick="toggleBookmark('${q.id}')">${bookmarked ? "★" : "☆"}</button>
      </div>
      <p class="question-text">${q.question}</p>
      <div>${choices}</div>
      ${result}
    </section>
  `;
}

function answerQuestion(selected) {
  const q = QUESTIONS[state.currentIndex % QUESTIONS.length];
  const correct = selected === q.answer;
  state.answers[q.id] = {
    selected,
    correct,
    answeredAt: new Date().toISOString()
  };
  saveState();
  renderQuestion();
}

function nextQuestion() {
  state.currentIndex = (state.currentIndex + 1) % QUESTIONS.length;
  saveState();
  renderQuestion();
}

function toggleBookmark(id) {
  state.bookmarks[id] = !state.bookmarks[id];
  saveState();
  renderQuestion();
}

function wrongCount() {
  return Object.values(state.answers).filter(a => !a.correct).length;
}

function renderReview() {
  setActiveNav("review");
  const wrong = QUESTIONS.filter(q => state.answers[q.id] && !state.answers[q.id].correct);

  screenEl().innerHTML = `
    <div class="back-row"><h2>復習</h2></div>
    <section class="card">
      <h3>間違えた問題</h3>
      ${wrong.length ? wrong.map(q => `
        <div class="list-item">
          <div><strong>${q.category}</strong><br><small>${q.question}</small></div>
          <button class="secondary-btn" onclick="startSpecific('${q.id}')">解く</button>
        </div>
      `).join("") : `<div class="empty">まだ間違えた問題はありません。<br>問題を解いてみましょう。</div>`}
    </section>
    <section class="card">
      <h3>ブックマーク</h3>
      ${QUESTIONS.filter(q => state.bookmarks[q.id]).map(q => `
        <div class="list-item">
          <div><strong>${q.category}</strong><br><small>${q.question}</small></div>
          <button class="secondary-btn" onclick="startSpecific('${q.id}')">解く</button>
        </div>
      `).join("") || `<div class="empty">ブックマークした問題はありません。</div>`}
    </section>
  `;
}

function startSpecific(id) {
  const index = QUESTIONS.findIndex(q => q.id === id);
  if (index >= 0) startPractice(index);
}

function renderStats() {
  setActiveNav("stats");
  const total = QUESTIONS.length;
  const answered = answeredCount();
  const correct = correctCount();

  screenEl().innerHTML = `
    <div class="back-row"><h2>学習状況</h2></div>
    <section class="card">
      <div class="stat-grid">
        <div class="stat"><div class="num">${answered}</div><div class="label">解答済み</div></div>
        <div class="stat"><div class="num">${accuracy()}%</div><div class="label">正答率</div></div>
        <div class="stat"><div class="num">${correct}</div><div class="label">正解数</div></div>
        <div class="stat"><div class="num">${wrongCount()}</div><div class="label">不正解数</div></div>
      </div>
    </section>

    <section class="card">
      <h3>第1章の進捗</h3>
      <div style="display:flex;justify-content:space-between;font-size:13px;">
        <span>${answered} / ${total} 問</span><span>${Math.round(answered / total * 100)}%</span>
      </div>
      <div class="progress"><div style="width:${Math.min(100, answered / total * 100)}%"></div></div>
    </section>
  `;
}

function renderSettings() {
  setActiveNav("settings");
  screenEl().innerHTML = `
    <div class="back-row"><h2>設定</h2></div>
    <section class="card">
      <h3>データ</h3>
      <p style="color:var(--muted);line-height:1.7;">v0.1では学習データをこのiPhoneのブラウザ内に保存しています。正式版ではバックアップ書き出し・復元を追加します。</p>
      <button class="secondary-btn full" onclick="exportBackup()">現在の学習データをバックアップ</button>
      <button class="secondary-btn full" onclick="resetProgress()">学習データをリセット</button>
    </section>
    <section class="card">
      <h3>アプリ情報</h3>
      <p style="margin:0;color:var(--muted);">CPTmate v0.1<br>GitHub Pages向け試作版</p>
    </section>
  `;
}

function exportBackup() {
  const payload = {
    app: "CPTmate",
    version: "0.1",
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `CPTmate_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function resetProgress() {
  if (!confirm("学習履歴とブックマークをリセットします。よろしいですか？")) return;
  state = { ...defaultState };
  saveState();
  renderSettings();
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const nav = btn.dataset.nav;
    if (nav === "home") renderHome();
    if (nav === "practice") startPractice();
    if (nav === "review") renderReview();
    if (nav === "stats") renderStats();
    if (nav === "settings") renderSettings();
  });
});

document.getElementById("bookmarkFilterBtn").addEventListener("click", renderReview);

renderHome();
