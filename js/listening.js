// ============================================
// Listening Practice Module
// ============================================

let listeningState = { mode: null, currentIndex: 0, answered: [], quizItems: [] };

function initListening() {
  listeningState = { mode: null, currentIndex: 0, answered: [], quizItems: [] };
  renderListeningMenu();
}

function renderListeningMenu() {
  stopAllAudio();
  const header = document.querySelector('#page-listening .page-header');
  if (header) header.style.display = '';
  const el = document.getElementById('listening-content');
  el.innerHTML = `
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <p style="color:var(--text-secondary);font-size:0.9rem">
        <strong style="color:var(--gold-light)">📋 Instructions:</strong>
        Listen to the audio, then answer the comprehension questions. You only hear the audio once or twice on the real test.
        In the real exam, the Listening Section has 25-35 questions and takes about 20 minutes.
      </p>
    </div>
    
    <div class="tabs">
      <button class="tab active" onclick="showListeningTab('rejoinders')">应答题 Rejoinders</button>
      <button class="tab" onclick="showListeningTab('conversations')">对话理解 Conversations</button>
    </div>
    <div id="listening-tab-content"></div>
  `;
  showListeningTab('rejoinders');
}

function showListeningTab(tab) {
  stopAllAudio();
  document.querySelectorAll('#page-listening .tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  const el = document.getElementById('listening-tab-content');
  
  if (tab === 'rejoinders') {
    const total = LISTENING_DATA.rejoinders.length;
    el.innerHTML = `
      <div class="glass-card" style="margin-bottom:var(--space-lg)">
        <p style="color:var(--text-secondary);font-size:0.9rem">
          <strong style="color:var(--gold-light)">📋 Instructions:</strong> 
          Listen to each statement or question (audio plays automatically), then choose the best response.
          Text is hidden by default — just like the real AP exam!
        </p>
        <p style="color:var(--text-muted);font-size:0.8rem;margin-top:var(--space-sm)">
          🎧 ${total} questions in pool · 10 randomly selected per practice · Audio powered by browser TTS
        </p>
      </div>
      <div style="text-align:center;margin-top:var(--space-lg)">
        <button class="btn btn-primary btn-lg" onclick="startListeningRejoinders()">
          ▶️ Start Rejoinder Practice (10 questions)
        </button>
      </div>
    `;
  } else {
    const items = LISTENING_DATA.conversations;
    el.innerHTML = `
      <div class="glass-card" style="margin-bottom:var(--space-lg)">
        <p style="color:var(--text-secondary);font-size:0.9rem">
          <strong style="color:var(--gold-light)">📋 Instructions:</strong>
          Listen to the conversation (audio plays automatically), then answer the comprehension questions.
          You can show the transcript text if needed.
        </p>
      </div>
      <div class="item-list">
        ${items.map((c, i) => `
          <div class="item-card" onclick="startListeningConversation(${i})">
            <span class="item-icon">🗣️</span>
            <div class="item-info">
              <h4>${c.title}</h4>
              <p>${c.titleEn} · ${c.questions.length} questions</p>
            </div>
            ${AppState.getProgress('listening', c.id) ? '<span class="item-badge completed">✓ Done</span>' : '<span class="item-badge new">New</span>'}
          </div>
        `).join('')}
      </div>
    `;
  }
}

// ── TTS Audio Functions ──
function speakChinese(text, onEnd) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.startsWith('zh')) || voices.find(v => v.lang.includes('CN'));
  if (zhVoice) utterance.voice = zhVoice;
  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
}

function speakChineseSlow(text) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.55;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.startsWith('zh')) || voices.find(v => v.lang.includes('CN'));
  if (zhVoice) utterance.voice = zhVoice;
  window.speechSynthesis.speak(utterance);
}

function stopAllAudio() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

// Ensure voices are loaded
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  window.speechSynthesis.getVoices();
}

// ── Rejoinder Practice ──
function startListeningRejoinders() {
  listeningState.mode = 'rejoinders';
  listeningState.currentIndex = 0;
  listeningState.answered = [];
  
  // Hide the main page header to save space during quiz
  const header = document.querySelector('#page-listening .page-header');
  if (header) header.style.display = 'none';

  // Randomly select 10 questions from the pool of 30
  listeningState.quizItems = shuffleArray(LISTENING_DATA.rejoinders).slice(0, 10);
  
  // Replace the ENTIRE tab content to remove the Start button
  const el = document.getElementById('listening-tab-content');
  el.innerHTML = '<div id="rejoinder-area"></div>';
  renderRejoinder();
}

function renderRejoinder() {
  const items = listeningState.quizItems;
  const idx = listeningState.currentIndex;
  
  if (idx >= items.length) {
    renderListeningResults();
    return;
  }
  
  const item = items[idx];
  const el = document.getElementById('rejoinder-area');
  if (!el) return;
  
  el.innerHTML = `
    <div class="progress-bar" style="margin-bottom:var(--space-sm)">
      <div class="fill" style="width:${(idx / items.length) * 100}%"></div>
    </div>
    <div class="progress-text" style="margin-bottom:var(--space-sm)">${idx + 1} / ${items.length}</div>
    
    <div class="question-card">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-sm);margin-bottom:var(--space-sm)">
        <div class="question-number" style="margin-bottom:0">🔊 You hear:</div>
        <div style="display:flex;align-items:center;gap:var(--space-sm)">
          <button class="btn btn-gold btn-sm" onclick="speakChinese('${escapeForAttr(item.transcript)}')" style="padding:4px 10px;font-size:0.75rem">
            🔊 Replay
          </button>
          <button class="btn btn-sm btn-secondary" onclick="speakChineseSlow('${escapeForAttr(item.transcript)}')" style="padding:4px 10px;font-size:0.75rem">
            🐢 Slow
          </button>
          <label style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:var(--text-muted);cursor:pointer">
            <input type="checkbox" onchange="toggleTranscript(this.checked)" style="accent-color:var(--gold-primary)"> Show text
          </label>
        </div>
      </div>
      <p style="font-size:1.1rem;font-family:'Noto Sans SC',sans-serif;display:none;margin-bottom:var(--space-xs)" id="transcript-text">${item.transcript}</p>
      <p style="color:var(--text-muted);font-size:0.8rem;display:none" id="transcript-en">${item.transcriptEn}</p>
      <div class="question-text" style="margin-top:var(--space-sm);margin-bottom:var(--space-sm)">Choose the best response:</div>
      <div class="options-list" id="rejoinder-options">
        ${item.options.map((opt, i) => `
          <button class="option-btn" onclick="answerRejoinder(${i}, ${item.correct})">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="explanation-box" id="rejoinder-explanation">
        💡 ${item.explanation}
      </div>
    </div>
  `;
  
  // Auto-play audio when question appears
  setTimeout(() => speakChinese(item.transcript), 400);
}

function escapeForAttr(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function toggleTranscript(show) {
  const textEl = document.getElementById('transcript-text');
  const enEl = document.getElementById('transcript-en');
  if (textEl) textEl.style.display = show ? '' : 'none';
  if (enEl) enEl.style.display = show ? '' : 'none';
}

function answerRejoinder(selected, correct) {
  const btns = document.querySelectorAll('#rejoinder-options .option-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === correct) btn.classList.add('correct');
    if (i === selected && selected !== correct) btn.classList.add('incorrect');
  });
  
  // Show explanation and text on answer
  document.getElementById('rejoinder-explanation').classList.add('show');
  const textEl = document.getElementById('transcript-text');
  const enEl = document.getElementById('transcript-en');
  if (textEl) textEl.style.display = '';
  if (enEl) enEl.style.display = '';
  
  const isCorrect = selected === correct;
  listeningState.answered.push(isCorrect);
  AppState.recordAnswer(isCorrect);
  
  setTimeout(() => {
    listeningState.currentIndex++;
    renderRejoinder();
  }, 2500);
}

// ── Conversation Practice ──
function startListeningConversation(index) {
  const conv = LISTENING_DATA.conversations[index];
  const el = document.getElementById('listening-tab-content');
  let currentQ = 0;
  let score = 0;
  let showTranscriptText = false;
  
  function renderConvQuestion() {
    // Hide the main page header to save space during quiz
    const header = document.querySelector('#page-listening .page-header');
    if (header) header.style.display = 'none';
    
    if (currentQ >= conv.questions.length) {
      stopAllAudio();
      AppState.setProgress('listening', conv.id, true);
      el.innerHTML = `
        <button class="back-btn" onclick="stopAllAudio(); renderListeningMenu()">← Back to Listening</button>
        <div class="score-report glass-card">
          <div class="score-circle">
            <span><span class="score-value">${score}</span><span class="score-total">/${conv.questions.length}</span></span>
          </div>
          <h3 style="margin-bottom:var(--space-sm)">Conversation Complete!</h3>
          <p style="color:var(--text-secondary)">${conv.title} — ${conv.titleEn}</p>
          <button class="btn btn-primary" style="margin-top:var(--space-lg)" onclick="renderListeningMenu()">Continue Practice</button>
        </div>
      `;
      if (score === conv.questions.length) showConfetti();
      return;
    }
    
    const q = conv.questions[currentQ];
    // Format transcript: trim each line to remove leading whitespace
    const formattedTranscript = conv.transcript.split('\n').map(l => l.trim()).filter(l => l).join('<br>');
    
    el.innerHTML = `
      <button class="back-btn" onclick="stopAllAudio(); renderListeningMenu()">← Back to Listening</button>
      
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);align-items:start">
        <!-- Left: Audio & Transcript -->
        <div class="passage-container" style="margin-bottom:0;position:sticky;top:80px;white-space:normal;padding:var(--space-md)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-sm)">
            <div class="passage-type-badge" style="margin-bottom:0">🗣️ ${conv.title}</div>
            <span style="font-size:0.75rem;color:var(--text-muted)">Q ${currentQ + 1}/${conv.questions.length}</span>
          </div>
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:var(--space-sm);margin-bottom:var(--space-sm)">
            <button class="btn btn-gold btn-sm" onclick="speakConversation(${index}, false)" style="padding:4px 10px;font-size:0.75rem">🔊 Play</button>
            <button class="btn btn-sm btn-secondary" onclick="speakConversation(${index}, true)" style="padding:4px 10px;font-size:0.75rem">🐢 Slow</button>
            <button class="btn btn-sm btn-secondary" onclick="stopAllAudio()" style="padding:4px 10px;font-size:0.75rem">⏹ Stop</button>
            
            <label style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:var(--text-muted);cursor:pointer;margin-left:auto">
              <input type="checkbox" ${showTranscriptText ? 'checked' : ''} onchange="toggleConvTranscript(this.checked)" style="accent-color:var(--gold-primary)"> Show transcript
            </label>
          </div>
          <div id="conv-transcript" style="display:${showTranscriptText ? 'block' : 'none'};font-family:'Noto Sans SC',sans-serif;line-height:1.8;font-size:0.9rem;max-height:calc(100vh - 280px);overflow-y:auto;padding-right:var(--space-sm);white-space:normal;margin-top:var(--space-sm)">${formattedTranscript}</div>
        </div>
        
        <!-- Right: Question & Options -->
        <div>
          <div class="progress-bar" style="margin-bottom:var(--space-sm)"><div class="fill" style="width:${(currentQ / conv.questions.length) * 100}%"></div></div>
          <div class="question-card">
            <div class="question-number">Question ${currentQ + 1}</div>
            <div class="question-text" style="margin-bottom:var(--space-sm)">${q.question}</div>
            <div class="options-list" id="conv-options">
              ${q.options.map((opt, i) => `
                <button class="option-btn" onclick="answerConvQ(this, ${i}, ${q.correct})">
                  <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
            <div class="explanation-box" id="conv-explanation">💡 ${q.explanation}</div>
          </div>
        </div>
      </div>
    `;
    
    // Auto-play conversation audio on first question
    if (currentQ === 0) {
      setTimeout(() => speakConversation(index, false), 500);
    }
  }
  
  window.toggleConvTranscript = (show) => {
    showTranscriptText = show;
    const el = document.getElementById('conv-transcript');
    if (el) el.style.display = show ? 'block' : 'none';
  };
  
  window.answerConvQ = (btn, selected, correct) => {
    const btns = document.querySelectorAll('#conv-options .option-btn');
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      if (i === correct) b.classList.add('correct');
      if (i === selected && selected !== correct) b.classList.add('incorrect');
    });
    document.getElementById('conv-explanation').classList.add('show');
    if (selected === correct) score++;
    AppState.recordAnswer(selected === correct);
    setTimeout(() => { currentQ++; renderConvQuestion(); }, 2000);
  };
  
  renderConvQuestion();
}

function speakConversation(index, slow) {
  const conv = LISTENING_DATA.conversations[index];
  const lines = conv.transcript.split('\n').map(l => l.trim()).filter(l => l);
  stopAllAudio();
  
  let lineIdx = 0;
  function speakNext() {
    if (lineIdx >= lines.length) return;
    const line = lines[lineIdx];
    const utterance = new SpeechSynthesisUtterance(line);
    utterance.lang = 'zh-CN';
    utterance.rate = slow ? 0.55 : 0.8;
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh')) || voices.find(v => v.lang.includes('CN'));
    if (zhVoice) utterance.voice = zhVoice;
    utterance.onend = () => { lineIdx++; setTimeout(speakNext, 400); };
    window.speechSynthesis.speak(utterance);
  }
  speakNext();
}

// ── Results ──
function renderListeningResults() {
  stopAllAudio();
  const correct = listeningState.answered.filter(Boolean).length;
  const total = listeningState.answered.length;
  const el = document.getElementById('listening-tab-content');
  
  el.innerHTML = `
    <div class="score-report glass-card">
      <div class="score-circle">
        <span><span class="score-value">${correct}</span><span class="score-total">/${total}</span></span>
      </div>
      <h3 style="margin-bottom:var(--space-sm)">Rejoinder Practice Complete!</h3>
      <p style="color:var(--text-secondary)">Accuracy: ${Math.round((correct/total)*100)}%</p>
      <p style="color:var(--text-muted);font-size:0.85rem;margin-top:var(--space-sm)">10 randomly selected from ${LISTENING_DATA.rejoinders.length} questions</p>
      <div style="margin-top:var(--space-lg);display:flex;gap:var(--space-md);justify-content:center">
        <button class="btn btn-primary" onclick="startListeningRejoinders()">🔄 Try Again (New Set)</button>
        <button class="btn btn-secondary" onclick="renderListeningMenu()">← Back</button>
      </div>
    </div>
  `;
  if (correct === total) showConfetti();
}
