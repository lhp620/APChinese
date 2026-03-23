// ============================================
// Cultural Knowledge Module
// ============================================

let cultureState = { topicIndex: -1, questionIndex: 0, score: 0 };

function initCulture() {
  cultureState = { topicIndex: -1, questionIndex: 0, score: 0 };
  renderCultureMenu();
}

function renderCultureMenu() {
  const el = document.getElementById('culture-content');
  
  el.innerHTML = `
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <p style="color:var(--text-secondary);font-size:0.9rem">
        <strong style="color:var(--gold-light)">📋 Cultural Knowledge:</strong>
        The AP Chinese exam tests your understanding of Chinese culture in both the speaking and writing sections.
        Practice these quizzes to strengthen your cultural knowledge.
      </p>
    </div>
    
    <div class="item-list">
      ${CULTURE_DATA.map((topic, i) => `
        <div class="item-card" onclick="startCultureTopic(${i})">
          <span class="item-icon">${topic.icon}</span>
          <div class="item-info">
            <h4>${topic.name}</h4>
            <p>${topic.nameEn} · ${topic.questions.length} questions</p>
          </div>
          ${AppState.getProgress('culture', topic.id) ? '<span class="item-badge completed">✓ Done</span>' : '<span class="item-badge new">New</span>'}
        </div>
      `).join('')}
    </div>
    
    <div style="text-align:center;margin-top:var(--space-xl)">
      <button class="btn btn-gold btn-lg" onclick="startCultureAll()">
        🎯 Take All Topics Quiz (${CULTURE_DATA.reduce((sum, t) => sum + t.questions.length, 0)} questions)
      </button>
    </div>
  `;
}

function startCultureTopic(index) {
  cultureState.topicIndex = index;
  cultureState.questionIndex = 0;
  cultureState.score = 0;
  renderCultureQuestion();
}

function startCultureAll() {
  cultureState.topicIndex = -1; // -1 means all topics
  cultureState.questionIndex = 0;
  cultureState.score = 0;
  renderCultureQuestion();
}

function getCultureQuestions() {
  if (cultureState.topicIndex === -1) {
    return CULTURE_DATA.flatMap(t => t.questions.map(q => ({ ...q, topicName: t.name })));
  }
  const topic = CULTURE_DATA[cultureState.topicIndex];
  return topic.questions.map(q => ({ ...q, topicName: topic.name }));
}

function renderCultureQuestion() {
  const el = document.getElementById('culture-content');
  const questions = getCultureQuestions();
  const idx = cultureState.questionIndex;
  
  if (idx >= questions.length) {
    // Complete
    if (cultureState.topicIndex >= 0) {
      AppState.setProgress('culture', CULTURE_DATA[cultureState.topicIndex].id, true);
    }
    
    const pct = Math.round((cultureState.score / questions.length) * 100);
    el.innerHTML = `
      <button class="back-btn" onclick="renderCultureMenu()">← Back to Culture</button>
      <div class="score-report glass-card">
        <div class="score-circle" style="border-color:${pct >= 80 ? 'var(--jade-primary)' : pct >= 60 ? 'var(--warning)' : 'var(--incorrect)'}">
          <span><span class="score-value" style="color:${pct >= 80 ? 'var(--jade-light)' : pct >= 60 ? 'var(--warning)' : 'var(--incorrect)'}">${cultureState.score}</span><span class="score-total">/${questions.length}</span></span>
        </div>
        <h3 style="margin-bottom:var(--space-sm)">Quiz Complete!</h3>
        <p style="color:var(--text-secondary)">Accuracy: ${pct}%</p>
        <p style="color:var(--text-muted);font-size:0.85rem;margin-top:var(--space-sm)">
          ${pct >= 80 ? '🎉 Excellent! You have strong cultural knowledge!' : pct >= 60 ? '👍 Good effort! Review the topics you missed.' : '📚 Keep studying! Review the cultural topics and try again.'}
        </p>
        <div style="margin-top:var(--space-lg);display:flex;gap:var(--space-md);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="${cultureState.topicIndex >= 0 ? `startCultureTopic(${cultureState.topicIndex})` : 'startCultureAll()'}">🔄 Retry</button>
          <button class="btn btn-secondary" onclick="renderCultureMenu()">← All Topics</button>
        </div>
      </div>
    `;
    if (cultureState.score === questions.length) showConfetti();
    return;
  }
  
  const q = questions[idx];
  
  el.innerHTML = `
    <button class="back-btn" onclick="renderCultureMenu()">← Back to Culture</button>
    
    <div class="quiz-container">
      <div class="progress-bar"><div class="fill" style="width:${(idx / questions.length) * 100}%"></div></div>
      <div class="progress-text">${idx + 1} / ${questions.length}</div>
      
      <div class="question-card">
        <div class="question-number">${q.topicName} · Question ${idx + 1}</div>
        <div class="question-text">${q.question}</div>
        <div class="options-list" id="culture-options">
          ${q.options.map((opt, i) => `
            <button class="option-btn" onclick="answerCultureQ(${i}, ${q.correct})">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="explanation-box" id="culture-explanation">💡 ${q.explanation}</div>
      </div>
    </div>
  `;
}

function answerCultureQ(selected, correct) {
  const btns = document.querySelectorAll('#culture-options .option-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === correct) btn.classList.add('correct');
    if (i === selected && selected !== correct) btn.classList.add('incorrect');
  });
  
  document.getElementById('culture-explanation').classList.add('show');
  
  if (selected === correct) cultureState.score++;
  AppState.recordAnswer(selected === correct);
  
  setTimeout(() => {
    cultureState.questionIndex++;
    renderCultureQuestion();
  }, 2000);
}
