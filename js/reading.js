// ============================================
// Reading Practice Module
// ============================================

let readingState = { useTraditional: false };

function initReading() {
  renderReadingList();
}

function renderReadingList() {
  const el = document.getElementById('reading-content');
  const typeIcons = { email: '📧', advertisement: '📢', article: '📰', social: '💬', sign: '🪧', letter: '✉️' };
  
  el.innerHTML = `
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <p style="color:var(--text-secondary);font-size:0.9rem">
        <strong style="color:var(--gold-light)">📋 Instructions:</strong>
        Read each passage carefully, then answer the comprehension questions. You can toggle between simplified and traditional Chinese.
        In the real exam, you have 60 minutes for 30-40 questions.
      </p>
    </div>
    
    <div class="toggle-container" style="margin-bottom:var(--space-lg)">
      <span>简体 Simplified</span>
      <label class="toggle-switch">
        <input type="checkbox" id="traditional-toggle" onchange="readingState.useTraditional = this.checked">
        <span class="toggle-slider"></span>
      </label>
      <span>繁體 Traditional</span>
    </div>
    
    <div class="item-list">
      ${READING_DATA.map((passage, i) => `
        <div class="item-card" onclick="startReadingPassage(${i})">
          <span class="item-icon">${typeIcons[passage.type] || '📄'}</span>
          <div class="item-info">
            <h4>${passage.title}</h4>
            <p>${passage.typeLabel} · ${passage.questions.length} questions</p>
          </div>
          ${AppState.getProgress('reading', passage.id) ? '<span class="item-badge completed">✓ Done</span>' : '<span class="item-badge new">New</span>'}
        </div>
      `).join('')}
    </div>
  `;
}

function startReadingPassage(index) {
  const passage = READING_DATA[index];
  const el = document.getElementById('reading-content');
  let currentQ = 0;
  let score = 0;
  
  function renderQuestion() {
    if (currentQ >= passage.questions.length) {
      AppState.setProgress('reading', passage.id, true);
      
      el.innerHTML = `
        <button class="back-btn" onclick="renderReadingList()">← Back to Reading</button>
        <div class="score-report glass-card">
          <div class="score-circle">
            <span><span class="score-value">${score}</span><span class="score-total">/${passage.questions.length}</span></span>
          </div>
          <h3 style="margin-bottom:var(--space-sm)">${passage.title} — Complete!</h3>
          <p style="color:var(--text-secondary)">Accuracy: ${Math.round((score/passage.questions.length)*100)}%</p>
          <div style="margin-top:var(--space-lg);display:flex;gap:var(--space-md);justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="startReadingPassage(${index})">🔄 Retry</button>
            ${index < READING_DATA.length - 1 ? `<button class="btn btn-gold" onclick="startReadingPassage(${index + 1})">Next Passage →</button>` : ''}
            <button class="btn btn-secondary" onclick="renderReadingList()">← All Passages</button>
          </div>
        </div>
      `;
      if (score === passage.questions.length) showConfetti();
      return;
    }
    
    const q = passage.questions[currentQ];
    const text = readingState.useTraditional && passage.passageTraditional ? passage.passageTraditional : passage.passage;
    
    el.innerHTML = `
      <button class="back-btn" onclick="renderReadingList()">← Back to Reading</button>
      
      <div class="toggle-container" style="margin-bottom:var(--space-md)">
        <span>简体</span>
        <label class="toggle-switch">
          <input type="checkbox" ${readingState.useTraditional ? 'checked' : ''} onchange="readingState.useTraditional = this.checked; startReadingPassage(${index})">
          <span class="toggle-slider"></span>
        </label>
        <span>繁體</span>
      </div>
      
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);align-items:start">
        <!-- Left: Passage -->
        <div class="passage-container" style="margin-bottom:0;position:sticky;top:80px;white-space:normal;padding:var(--space-md)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-sm)">
            <div class="passage-type-badge" style="margin-bottom:0">${passage.typeLabel}</div>
            <span style="font-size:0.75rem;color:var(--text-muted)">Q ${currentQ + 1}/${passage.questions.length}</span>
          </div>
          <div style="font-family:'Noto Sans SC',sans-serif;line-height:1.8;font-size:0.9rem;max-height:calc(100vh - 280px);overflow-y:auto;padding-right:var(--space-sm);white-space:pre-wrap;">${text.split('\\n').map(l => l.trim()).filter(l => l).join('\\n\\n')}</div>
        </div>
        
        <!-- Right: Question & Options -->
        <div class="quiz-container" style="margin:0;max-width:100%;">
          <div class="progress-bar" style="margin-bottom:var(--space-sm)"><div class="fill" style="width:${(currentQ / passage.questions.length) * 100}%"></div></div>
          
          <div class="question-card">
            <div class="question-number">Question ${currentQ + 1}</div>
            <div class="question-text" style="margin-bottom:var(--space-sm)">${q.question}</div>
            <div class="options-list" id="reading-options">
              ${q.options.map((opt, i) => `
                <button class="option-btn" onclick="answerReadingQ(${i}, ${q.correct})">
                  <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
            <div class="explanation-box" id="reading-explanation">💡 ${q.explanation}</div>
          </div>
        </div>
      </div>
    `;
  }
  
  window.answerReadingQ = (selected, correct) => {
    const btns = document.querySelectorAll('#reading-options .option-btn');
    btns.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === correct) btn.classList.add('correct');
      if (i === selected && selected !== correct) btn.classList.add('incorrect');
    });
    document.getElementById('reading-explanation').classList.add('show');
    if (selected === correct) score++;
    AppState.recordAnswer(selected === correct);
    setTimeout(() => { currentQ++; renderQuestion(); }, 2000);
  };
  
  renderQuestion();
}
