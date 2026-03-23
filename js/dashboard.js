// ============================================
// Dashboard Module
// ============================================

function initDashboard() {
  renderDashboardCards();
  updateStats();
}

function renderDashboardCards() {
  const cards = [
    { page: 'listening', icon: '🎧', title: '听力练习', subtitle: 'Listening Practice', desc: 'Practice rejoinders and listening comprehension with audio scenarios.', weight: '25% of exam' },
    { page: 'reading', icon: '📖', title: '阅读练习', subtitle: 'Reading Practice', desc: 'Read emails, ads, articles, and social media posts with comprehension questions.', weight: '25% of exam' },
    { page: 'writing', icon: '✍️', title: '写作练习', subtitle: 'Writing Practice', desc: 'Practice story narration and email reply with scoring rubrics.', weight: '25% of exam' },
    { page: 'speaking', icon: '🎤', title: '口语练习', subtitle: 'Speaking Practice', desc: 'Simulated conversations and cultural presentations with timers.', weight: '25% of exam' },
    { page: 'vocabulary', icon: '📝', title: '词汇汉字', subtitle: 'Vocabulary & Characters', desc: 'Flashcards and quizzes organized by AP topic areas.' },
    { page: 'culture', icon: '🏯', title: '文化知识', subtitle: 'Cultural Knowledge', desc: 'Quizzes on Chinese holidays, traditions, food, geography, and modern life.' },
    { page: 'mockexam', icon: '📋', title: '模拟考试', subtitle: 'Mock Exam', desc: 'Full timed simulation following the official AP exam format.' }
  ];

  const container = document.getElementById('dashboard-cards');
  container.innerHTML = cards.map(c => {
    const completion = AppState.getSectionCompletion(c.page);
    return `
      <div class="section-card" onclick="navigateTo('${c.page}')">
        <div class="section-card-icon">${c.icon}</div>
        <h3>${c.title}</h3>
        <div class="card-subtitle">${c.subtitle}${c.weight ? ' · ' + c.weight : ''}</div>
        <p>${c.desc}</p>
        <div class="progress-bar-sm">
          <div class="fill" style="width: ${completion}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

function updateStats() {
  document.getElementById('stat-total').textContent = AppState.stats.totalAnswered;
  document.getElementById('stat-correct').textContent = AppState.getAccuracy() + '%';
  document.getElementById('stat-streak').textContent = AppState.stats.streak;
  document.getElementById('stat-vocab').textContent = AppState.stats.vocabMastered;
}
