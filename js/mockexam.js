// ============================================
// Mock Exam Module
// ============================================

let mockExamState = { active: false, section: 0, questionIndex: 0, score: {}, timer: null, timeLeft: 0, answers: [] };

const MOCK_SECTIONS = [
  { 
    name: 'Section I-A: Listening (听力)', 
    time: 20 * 60, 
    type: 'listening',
    description: 'Listen/read and answer comprehension questions'
  },
  { 
    name: 'Section I-B: Reading (阅读)', 
    time: 60 * 60, 
    type: 'reading',
    description: 'Read passages and answer comprehension questions'
  },
  { 
    name: 'Section II-A: Writing (写作)', 
    time: 30 * 60, 
    type: 'writing',
    description: 'Story narration and email reply'
  },
  { 
    name: 'Section II-B: Speaking (口语)', 
    time: 10 * 60, 
    type: 'speaking',
    description: 'Simulated conversation and cultural presentation'
  }
];

function initMockExam() {
  renderMockExamMenu();
}

function renderMockExamMenu() {
  clearMockTimer();
  mockExamState.active = false;
  
  const el = document.getElementById('mockexam-content');
  el.innerHTML = `
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <p style="color:var(--text-secondary);font-size:0.9rem">
        <strong style="color:var(--gold-light)">📋 Full Mock Exam:</strong>
        Simulate the complete AP Chinese exam with timed sections. 
        Total time: ~2 hours 15 minutes (with 10-min break between sections).
      </p>
    </div>
    
    <div style="display:grid;gap:var(--space-md);margin-bottom:var(--space-xl)">
      ${MOCK_SECTIONS.map((s, i) => `
        <div class="glass-card" style="display:flex;align-items:center;gap:var(--space-md)">
          <div style="font-size:2rem">${['🎧', '📖', '✍️', '🎤'][i]}</div>
          <div style="flex:1">
            <h4>${s.name}</h4>
            <p style="color:var(--text-muted);font-size:0.85rem">${s.description} · ${Math.floor(s.time/60)} minutes</p>
          </div>
          <div style="color:var(--gold-light);font-weight:700">25%</div>
        </div>
      `).join('')}
    </div>
    
    <div style="text-align:center">
      <button class="btn btn-gold btn-lg" onclick="startMockExam()" style="font-size:1.1rem;padding:var(--space-lg) var(--space-2xl)">
        🚀 Start Mock Exam
      </button>
      <p style="color:var(--text-muted);font-size:0.8rem;margin-top:var(--space-md)">
        Make sure you have ~2 hours of uninterrupted time before starting.
      </p>
    </div>
    
    <div style="text-align:center;margin-top:var(--space-xl)">
      <h4 style="margin-bottom:var(--space-md)">Or practice individual sections:</h4>
      <div style="display:flex;gap:var(--space-md);justify-content:center;flex-wrap:wrap">
        <button class="btn btn-secondary" onclick="startMockSection(0)">🎧 Listening Only</button>
        <button class="btn btn-secondary" onclick="startMockSection(1)">📖 Reading Only</button>
        <button class="btn btn-secondary" onclick="startMockSection(2)">✍️ Writing Only</button>
        <button class="btn btn-secondary" onclick="startMockSection(3)">🎤 Speaking Only</button>
      </div>
    </div>
  `;
}

function startMockExam() {
  mockExamState = { active: true, section: 0, questionIndex: 0, score: {}, timer: null, timeLeft: 0, answers: [] };
  runMockSection(0);
}

function startMockSection(sectionIndex) {
  mockExamState = { active: true, section: sectionIndex, questionIndex: 0, score: {}, timer: null, timeLeft: 0, answers: [] };
  runMockSection(sectionIndex);
}

function runMockSection(sectionIndex) {
  const section = MOCK_SECTIONS[sectionIndex];
  mockExamState.section = sectionIndex;
  mockExamState.questionIndex = 0;
  mockExamState.timeLeft = section.time;
  
  if (section.type === 'listening') {
    runMockListening();
  } else if (section.type === 'reading') {
    runMockReading();
  } else if (section.type === 'writing') {
    runMockWriting();
  } else if (section.type === 'speaking') {
    runMockSpeaking();
  }
}

function startMockTimer(onTimeUp) {
  clearMockTimer();
  mockExamState.timer = setInterval(() => {
    mockExamState.timeLeft--;
    updateTimerDisplay();
    if (mockExamState.timeLeft <= 0) {
      clearMockTimer();
      if (onTimeUp) onTimeUp();
    }
  }, 1000);
  updateTimerDisplay();
}

function clearMockTimer() {
  if (mockExamState.timer) { clearInterval(mockExamState.timer); mockExamState.timer = null; }
}

function updateTimerDisplay() {
  const el = document.getElementById('mock-timer');
  if (!el) return;
  const m = Math.floor(mockExamState.timeLeft / 60);
  const s = mockExamState.timeLeft % 60;
  el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
  if (mockExamState.timeLeft <= 60) el.style.color = 'var(--incorrect)';
  else if (mockExamState.timeLeft <= 300) el.style.color = 'var(--warning)';
  else el.style.color = 'var(--gold-light)';
}

// ── Mock Listening ──
function runMockListening() {
  const allQuestions = [
    ...LISTENING_DATA.rejoinders.map(r => ({ type: 'rejoinder', data: r })),
    ...LISTENING_DATA.conversations.flatMap(c => 
      c.questions.map(q => ({ type: 'conversation', data: { ...q, transcript: c.transcript, title: c.title } }))
    )
  ];
  
  mockExamState.score.listening = { correct: 0, total: allQuestions.length };
  let idx = 0;
  
  function renderQ() {
    const el = document.getElementById('mockexam-content');
    if (idx >= allQuestions.length) {
      endMockSection('listening');
      return;
    }
    
    const item = allQuestions[idx];
    const section = MOCK_SECTIONS[mockExamState.section];
    
    el.innerHTML = `
      <div class="exam-timer-bar">
        <div class="exam-section-label">${section.name}</div>
        <div class="exam-timer" id="mock-timer">${Math.floor(mockExamState.timeLeft/60)}:${(mockExamState.timeLeft%60).toString().padStart(2,'0')}</div>
        <button class="btn btn-sm btn-secondary" onclick="endMockSection('listening')">End Section</button>
      </div>
      
      <div class="quiz-container">
        <div class="progress-bar"><div class="fill" style="width:${(idx/allQuestions.length)*100}%"></div></div>
        <div class="progress-text">${idx+1} / ${allQuestions.length}</div>
        
        <div class="question-card">
          ${item.type === 'rejoinder' ? `
            <div class="question-number">Rejoinder</div>
            <div class="conversation-prompt">
              <div class="prompt-label">🔊 You hear:</div>
              <p style="font-size:1.1rem;font-family:'Noto Sans SC',sans-serif">${item.data.transcript}</p>
            </div>
            <div class="question-text" style="margin-top:var(--space-md)">Choose the best response:</div>
            <div class="options-list" id="mock-options">
              ${item.data.options.map((opt, i) => `
                <button class="option-btn" onclick="mockAnswer(${i}, ${item.data.correct})">
                  <span class="option-letter">${String.fromCharCode(65+i)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
          ` : `
            <div class="question-number">Listening Comprehension</div>
            <div class="conversation-prompt" style="font-size:0.9rem;max-height:200px;overflow-y:auto">
              <div class="prompt-label">🗣️ ${item.data.title}</div>
              <p style="font-family:'Noto Sans SC',sans-serif">${item.data.transcript}</p>
            </div>
            <div class="question-text" style="margin-top:var(--space-md)">${item.data.question}</div>
            <div class="options-list" id="mock-options">
              ${item.data.options.map((opt, i) => `
                <button class="option-btn" onclick="mockAnswer(${i}, ${item.data.correct})">
                  <span class="option-letter">${String.fromCharCode(65+i)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }
  
  window.mockAnswer = (selected, correct) => {
    const btns = document.querySelectorAll('#mock-options .option-btn');
    btns.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === correct) btn.classList.add('correct');
      if (i === selected && selected !== correct) btn.classList.add('incorrect');
    });
    if (selected === correct) mockExamState.score.listening.correct++;
    AppState.recordAnswer(selected === correct);
    setTimeout(() => { idx++; renderQ(); }, 1500);
  };
  
  startMockTimer(() => endMockSection('listening'));
  renderQ();
}

// ── Mock Reading ──
function runMockReading() {
  const allPassages = READING_DATA;
  let passageIdx = 0;
  let qIdx = 0;
  let totalQ = allPassages.reduce((sum, p) => sum + p.questions.length, 0);
  let answered = 0;
  
  mockExamState.score.reading = { correct: 0, total: totalQ };
  
  function renderQ() {
    const el = document.getElementById('mockexam-content');
    if (passageIdx >= allPassages.length) {
      endMockSection('reading');
      return;
    }
    
    const passage = allPassages[passageIdx];
    if (qIdx >= passage.questions.length) {
      passageIdx++;
      qIdx = 0;
      renderQ();
      return;
    }
    
    const q = passage.questions[qIdx];
    const section = MOCK_SECTIONS[mockExamState.section];
    
    el.innerHTML = `
      <div class="exam-timer-bar">
        <div class="exam-section-label">${section.name}</div>
        <div class="exam-timer" id="mock-timer"></div>
        <button class="btn btn-sm btn-secondary" onclick="endMockSection('reading')">End Section</button>
      </div>
      
      <div class="passage-container" style="max-height:300px">
        <div class="passage-type-badge">${passage.typeLabel}</div>
        ${passage.passage}
      </div>
      
      <div class="quiz-container">
        <div class="progress-bar"><div class="fill" style="width:${(answered/totalQ)*100}%"></div></div>
        <div class="progress-text">${answered+1} / ${totalQ}</div>
        
        <div class="question-card">
          <div class="question-number">${passage.title} · Q${qIdx+1}</div>
          <div class="question-text">${q.question}</div>
          <div class="options-list" id="mock-options">
            ${q.options.map((opt, i) => `
              <button class="option-btn" onclick="mockReadingAnswer(${i}, ${q.correct})">
                <span class="option-letter">${String.fromCharCode(65+i)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    updateTimerDisplay();
  }
  
  window.mockReadingAnswer = (selected, correct) => {
    const btns = document.querySelectorAll('#mock-options .option-btn');
    btns.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === correct) btn.classList.add('correct');
      if (i === selected && selected !== correct) btn.classList.add('incorrect');
    });
    if (selected === correct) mockExamState.score.reading.correct++;
    AppState.recordAnswer(selected === correct);
    answered++;
    setTimeout(() => { qIdx++; renderQ(); }, 1500);
  };
  
  startMockTimer(() => endMockSection('reading'));
  renderQ();
}

// ── Mock Writing ──
function runMockWriting() {
  const el = document.getElementById('mockexam-content');
  const section = MOCK_SECTIONS[mockExamState.section];
  const prompt = WRITING_PROMPTS?.storyNarration?.[0];
  const emailPrompt = WRITING_PROMPTS?.emailReply?.[0];
  
  el.innerHTML = `
    <div class="exam-timer-bar">
      <div class="exam-section-label">${section.name}</div>
      <div class="exam-timer" id="mock-timer"></div>
      <button class="btn btn-sm btn-secondary" onclick="endMockSection('writing')">End Section</button>
    </div>
    
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <h3 style="margin-bottom:var(--space-md)">Task 1: Story Narration (15 minutes)</h3>
      ${prompt ? `
        <div class="story-images">
          ${prompt.images.map((img, i) => `
            <div class="story-image">
              <span class="image-number">${i+1}</span>
              <span>${img.emoji}</span>
              <span class="image-desc">${img.desc}</span>
            </div>
          `).join('')}
        </div>
      ` : '<p>Write a story connecting four pictures.</p>'}
      <textarea class="writing-area" placeholder="在这里写你的故事..." oninput="updateMockWordCount(1)"></textarea>
      <div class="writing-stats"><span>Characters: <strong id="mock-chars-1">0</strong></span></div>
    </div>
    
    <div class="glass-card">
      <h3 style="margin-bottom:var(--space-md)">Task 2: Email Reply (15 minutes)</h3>
      ${emailPrompt ? `
        <div class="passage-container" style="max-height:250px;margin-bottom:var(--space-md)">
          <div class="passage-type-badge">📧 Incoming Email</div>
          ${emailPrompt.email}
        </div>
      ` : '<p>Reply to the email.</p>'}
      <textarea class="writing-area" placeholder="在这里写你的回信..." oninput="updateMockWordCount(2)"></textarea>
      <div class="writing-stats"><span>Characters: <strong id="mock-chars-2">0</strong></span></div>
    </div>
  `;
  
  window.updateMockWordCount = (n) => {
    const textareas = el.querySelectorAll('.writing-area');
    const charEl = document.getElementById(`mock-chars-${n}`);
    if (textareas[n-1] && charEl) charEl.textContent = textareas[n-1].value.length;
  };
  
  startMockTimer(() => endMockSection('writing'));
}

// ── Mock Speaking ──
function runMockSpeaking() {
  const el = document.getElementById('mockexam-content');
  const section = MOCK_SECTIONS[mockExamState.section];
  const conv = SPEAKING_PROMPTS?.conversations?.[0];
  const topic = SPEAKING_PROMPTS?.culturalTopics?.[0];
  
  el.innerHTML = `
    <div class="exam-timer-bar">
      <div class="exam-section-label">${section.name}</div>
      <div class="exam-timer" id="mock-timer"></div>
      <button class="btn btn-sm btn-secondary" onclick="endMockSection('speaking')">End Section</button>
    </div>
    
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <h3 style="margin-bottom:var(--space-md)">Task 1: Simulated Conversation</h3>
      ${conv ? `
        <p style="color:var(--text-secondary);margin-bottom:var(--space-md)">${conv.scenario}</p>
        <div style="display:grid;gap:var(--space-sm)">
          ${conv.prompts.map(p => `
            <div class="conversation-prompt" style="padding:var(--space-md);${p.speaker === 'You' ? 'background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.2)' : ''}">
              <strong>${p.speaker}:</strong> ${p.text || p.hint}
            </div>
          `).join('')}
        </div>
        <div class="recording-controls" style="margin-top:var(--space-md)">
          <button class="record-btn" id="record-btn" onclick="toggleRecording()"></button>
        </div>
      ` : '<p>Practice the simulated conversation.</p>'}
    </div>
    
    <div class="glass-card">
      <h3 style="margin-bottom:var(--space-md)">Task 2: Cultural Presentation</h3>
      ${topic ? `
        <div class="conversation-prompt">
          <div class="prompt-label">Topic: ${topic.topic}</div>
          <p>${topic.prompt}</p>
        </div>
        <textarea class="writing-area" style="min-height:100px;margin-top:var(--space-md)" placeholder="Use this space for notes..."></textarea>
        <div class="recording-controls" style="margin-top:var(--space-md)">
          <button class="record-btn" onclick="toggleRecording()"></button>
        </div>
      ` : '<p>Choose a cultural topic and present.</p>'}
    </div>
  `;
  
  startMockTimer(() => endMockSection('speaking'));
}

function endMockSection(type) {
  clearMockTimer();
  
  const el = document.getElementById('mockexam-content');
  const sectionIdx = mockExamState.section;
  const nextIdx = sectionIdx + 1;
  
  // Build score info
  let scoreHtml = '';
  if (mockExamState.score[type]) {
    const s = mockExamState.score[type];
    scoreHtml = `<p style="margin-top:var(--space-md);font-size:1.2rem">Score: <strong style="color:var(--jade-light)">${s.correct}/${s.total}</strong> (${Math.round((s.correct/s.total)*100)}%)</p>`;
  } else {
    scoreHtml = `<p style="margin-top:var(--space-md);color:var(--text-muted)">Self-assess your performance using the scoring rubric.</p>`;
  }
  
  const hasNext = nextIdx < MOCK_SECTIONS.length && mockExamState.active;
  
  el.innerHTML = `
    <div class="score-report glass-card">
      <div style="font-size:3rem;margin-bottom:var(--space-lg)">${['🎧', '📖', '✍️', '🎤'][sectionIdx]}</div>
      <h3>${MOCK_SECTIONS[sectionIdx].name} — Complete!</h3>
      ${scoreHtml}
      
      <div style="margin-top:var(--space-xl);display:flex;gap:var(--space-md);justify-content:center;flex-wrap:wrap">
        ${hasNext ? `
          <button class="btn btn-gold btn-lg" onclick="runMockSection(${nextIdx})">
            Continue to ${MOCK_SECTIONS[nextIdx].name} →
          </button>
        ` : `
          <button class="btn btn-gold btn-lg" onclick="showFinalReport()">
            📊 View Final Report
          </button>
        `}
        <button class="btn btn-secondary" onclick="renderMockExamMenu()">← Exit Exam</button>
      </div>
    </div>
  `;
}

function showFinalReport() {
  const el = document.getElementById('mockexam-content');
  
  let totalCorrect = 0;
  let totalQuestions = 0;
  let sectionResults = '';
  
  ['listening', 'reading'].forEach((type, i) => {
    const s = mockExamState.score[type];
    if (s) {
      totalCorrect += s.correct;
      totalQuestions += s.total;
      const pct = Math.round((s.correct/s.total)*100);
      sectionResults += `
        <div class="glass-card" style="display:flex;align-items:center;gap:var(--space-md)">
          <div style="font-size:2rem">${['🎧','📖'][i]}</div>
          <div style="flex:1">
            <h4>${MOCK_SECTIONS[i].name}</h4>
            <div class="progress-bar" style="margin:var(--space-sm) 0"><div class="fill" style="width:${pct}%"></div></div>
          </div>
          <div style="font-size:1.2rem;font-weight:700;color:${pct >= 80 ? 'var(--jade-light)' : pct >= 60 ? 'var(--warning)' : 'var(--incorrect)'}">${pct}%</div>
        </div>
      `;
    }
  });
  
  // Writing and Speaking are self-assessed
  ['writing', 'speaking'].forEach((type, i) => {
    sectionResults += `
      <div class="glass-card" style="display:flex;align-items:center;gap:var(--space-md)">
        <div style="font-size:2rem">${['✍️','🎤'][i]}</div>
        <div style="flex:1">
          <h4>${MOCK_SECTIONS[i+2].name}</h4>
          <p style="color:var(--text-muted);font-size:0.85rem">Self-assessed section</p>
        </div>
        <div style="color:var(--text-muted)">—</div>
      </div>
    `;
  });
  
  const overallPct = totalQuestions > 0 ? Math.round((totalCorrect/totalQuestions)*100) : 0;
  
  // Rough AP score estimate
  let apScore = 1;
  if (overallPct >= 85) apScore = 5;
  else if (overallPct >= 70) apScore = 4;
  else if (overallPct >= 55) apScore = 3;
  else if (overallPct >= 40) apScore = 2;
  
  el.innerHTML = `
    <div style="text-align:center;margin-bottom:var(--space-xl)">
      <h2 style="font-size:2rem;margin-bottom:var(--space-sm)">📊 Mock Exam Report</h2>
      <p style="color:var(--text-secondary)">Here's how you performed</p>
    </div>
    
    <div class="score-report glass-card" style="margin-bottom:var(--space-xl)">
      <div class="score-circle" style="border-color:var(--gold-primary)">
        <span><span class="score-value" style="color:var(--gold-light)">${apScore}</span><span class="score-total">/5</span></span>
      </div>
      <h3>Estimated AP Score</h3>
      <p style="color:var(--text-muted);font-size:0.85rem;margin-top:var(--space-xs)">(Based on multiple choice sections only)</p>
      ${totalQuestions > 0 ? `<p style="margin-top:var(--space-md);color:var(--text-secondary)">Multiple Choice: ${totalCorrect}/${totalQuestions} (${overallPct}%)</p>` : ''}
    </div>
    
    <h3 style="margin-bottom:var(--space-md)">Section Breakdown</h3>
    <div style="display:grid;gap:var(--space-md);margin-bottom:var(--space-xl)">
      ${sectionResults}
    </div>
    
    <div style="text-align:center">
      <button class="btn btn-primary btn-lg" onclick="renderMockExamMenu()">← Back to Mock Exam</button>
    </div>
  `;
  
  if (apScore >= 4) showConfetti();
}
