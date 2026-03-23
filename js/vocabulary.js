// ============================================
// Vocabulary & Characters Module
// ============================================

let vocabState = { categoryIndex: 0, mode: 'flashcard', cardIndex: 0, flipped: false, quizScore: 0, quizIndex: 0, quizData: [] };

function initVocabulary() {
  vocabState = { categoryIndex: 0, mode: 'flashcard', cardIndex: 0, flipped: false, quizScore: 0, quizIndex: 0, quizData: [] };
  renderVocabularyMenu();
}

function renderVocabularyMenu() {
  const el = document.getElementById('vocabulary-content');
  const cats = VOCABULARY_DATA.categories;
  
  el.innerHTML = `
    <div class="tabs">
      <button class="tab ${vocabState.mode === 'flashcard' ? 'active' : ''}" onclick="vocabState.mode='flashcard'; renderVocabularyMenu()">🃏 Flashcards</button>
      <button class="tab ${vocabState.mode === 'quiz' ? 'active' : ''}" onclick="vocabState.mode='quiz'; renderVocabularyMenu()">📝 Quiz Mode</button>
    </div>
    
    <div class="category-chips">
      ${cats.map((c, i) => `
        <button class="chip ${vocabState.categoryIndex === i ? 'active' : ''}" onclick="vocabState.categoryIndex=${i}; vocabState.cardIndex=0; vocabState.flipped=false; renderVocabContent()">
          ${c.icon} ${c.name}
        </button>
      `).join('')}
    </div>
    
    <div id="vocab-content-area"></div>
  `;
  renderVocabContent();
}

function renderVocabContent() {
  const el = document.getElementById('vocab-content-area');
  if (!el) return;
  
  const cat = VOCABULARY_DATA.categories[vocabState.categoryIndex];
  
  if (vocabState.mode === 'flashcard') {
    renderFlashcards(el, cat);
  } else {
    renderVocabQuiz(el, cat);
  }
}

function renderFlashcards(el, cat) {
  const word = cat.words[vocabState.cardIndex];
  
  el.innerHTML = `
    <div class="flashcard-container" onclick="flipCard()">
      <div class="flashcard ${vocabState.flipped ? 'flipped' : ''}" id="flashcard">
        <div class="flashcard-face">
          <div class="flashcard-chinese">${word.simplified}</div>
          <p style="color:var(--text-muted);font-size:0.85rem;margin-top:var(--space-md)">Click to flip</p>
        </div>
        <div class="flashcard-face flashcard-back">
          <div class="flashcard-pinyin">${word.pinyin}</div>
          <div class="flashcard-english">${word.english}</div>
          <div style="color:var(--text-muted);font-size:0.75rem;margin-top:4px">Traditional: ${word.traditional}</div>
          <div class="flashcard-example" style="margin-top:var(--space-md)">${word.example}</div>
        </div>
      </div>
    </div>
    
    <div class="flashcard-nav">
      <button class="btn btn-secondary btn-sm" onclick="prevCard()" ${vocabState.cardIndex === 0 ? 'disabled style="opacity:0.3"' : ''}>← Prev</button>
      <span class="flashcard-counter">${vocabState.cardIndex + 1} / ${cat.words.length}</span>
      <button class="btn btn-secondary btn-sm" onclick="nextCard()" ${vocabState.cardIndex === cat.words.length - 1 ? 'disabled style="opacity:0.3"' : ''}>Next →</button>
    </div>
    
    <div class="progress-bar" style="margin-top:var(--space-lg)">
      <div class="fill" style="width:${((vocabState.cardIndex + 1) / cat.words.length) * 100}%"></div>
    </div>
    
    <div style="text-align:center;margin-top:var(--space-lg)">
      <button class="btn btn-sm btn-secondary" onclick="shuffleVocab()">🔀 Shuffle</button>
    </div>
  `;
}

function flipCard() {
  vocabState.flipped = !vocabState.flipped;
  const card = document.getElementById('flashcard');
  if (card) card.classList.toggle('flipped', vocabState.flipped);
}

function nextCard() {
  const cat = VOCABULARY_DATA.categories[vocabState.categoryIndex];
  if (vocabState.cardIndex < cat.words.length - 1) {
    vocabState.cardIndex++;
    vocabState.flipped = false;
    renderVocabContent();
  }
}

function prevCard() {
  if (vocabState.cardIndex > 0) {
    vocabState.cardIndex--;
    vocabState.flipped = false;
    renderVocabContent();
  }
}

function shuffleVocab() {
  const cat = VOCABULARY_DATA.categories[vocabState.categoryIndex];
  // Shuffle in place
  for (let i = cat.words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cat.words[i], cat.words[j]] = [cat.words[j], cat.words[i]];
  }
  vocabState.cardIndex = 0;
  vocabState.flipped = false;
  renderVocabContent();
}

function renderVocabQuiz(el, cat) {
  // Generate quiz from category words
  if (vocabState.quizData.length === 0 || vocabState.quizIndex === 0) {
    vocabState.quizData = generateVocabQuiz(cat);
    vocabState.quizIndex = 0;
    vocabState.quizScore = 0;
  }
  
  if (vocabState.quizIndex >= vocabState.quizData.length) {
    // Quiz complete
    AppState.setProgress('vocabulary', cat.id, true);
    if (vocabState.quizScore >= vocabState.quizData.length * 0.8) {
      AppState.stats.vocabMastered = Math.max(AppState.stats.vocabMastered, 
        VOCABULARY_DATA.categories.filter((c, i) => AppState.getProgress('vocabulary', c.id)).length * 10);
      AppState.save();
    }
    
    el.innerHTML = `
      <div class="score-report glass-card">
        <div class="score-circle">
          <span><span class="score-value">${vocabState.quizScore}</span><span class="score-total">/${vocabState.quizData.length}</span></span>
        </div>
        <h3>Vocabulary Quiz Complete!</h3>
        <p style="color:var(--text-secondary)">${cat.icon} ${cat.name} — ${cat.nameEn}</p>
        <p style="color:var(--text-muted);margin-top:var(--space-sm)">Accuracy: ${Math.round((vocabState.quizScore/vocabState.quizData.length)*100)}%</p>
        <div style="margin-top:var(--space-lg);display:flex;gap:var(--space-md);justify-content:center">
          <button class="btn btn-primary" onclick="vocabState.quizData=[]; vocabState.quizIndex=0; renderVocabContent()">🔄 Retry</button>
          <button class="btn btn-secondary" onclick="vocabState.mode='flashcard'; renderVocabularyMenu()">🃏 Flashcards</button>
        </div>
      </div>
    `;
    if (vocabState.quizScore === vocabState.quizData.length) showConfetti();
    return;
  }
  
  const q = vocabState.quizData[vocabState.quizIndex];
  
  el.innerHTML = `
    <div class="quiz-container">
      <div class="progress-bar"><div class="fill" style="width:${(vocabState.quizIndex / vocabState.quizData.length) * 100}%"></div></div>
      <div class="progress-text">${vocabState.quizIndex + 1} / ${vocabState.quizData.length}</div>
      
      <div class="question-card">
        <div class="question-number">Question ${vocabState.quizIndex + 1}</div>
        <div class="question-text" style="font-size:1.5rem">${q.question}</div>
        <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:var(--space-lg)">${q.hint}</p>
        <div class="options-list" id="vocab-options">
          ${q.options.map((opt, i) => `
            <button class="option-btn" onclick="answerVocabQ(${i}, ${q.correct})">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function answerVocabQ(selected, correct) {
  const btns = document.querySelectorAll('#vocab-options .option-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === correct) btn.classList.add('correct');
    if (i === selected && selected !== correct) btn.classList.add('incorrect');
  });
  
  if (selected === correct) vocabState.quizScore++;
  AppState.recordAnswer(selected === correct);
  
  setTimeout(() => {
    vocabState.quizIndex++;
    renderVocabContent();
  }, 1500);
}

function generateVocabQuiz(cat) {
  const words = [...cat.words];
  const questions = [];
  
  // Mix of Chinese→English and English→Chinese
  const shuffled = shuffleArray(words).slice(0, Math.min(10, words.length));
  
  shuffled.forEach((word, i) => {
    if (i % 2 === 0) {
      // Chinese → English
      const wrongAnswers = shuffleArray(words.filter(w => w !== word)).slice(0, 3).map(w => w.english);
      const options = shuffleArray([word.english, ...wrongAnswers]);
      questions.push({
        question: word.simplified,
        hint: 'What does this word mean?',
        options,
        correct: options.indexOf(word.english)
      });
    } else {
      // English → Chinese
      const wrongAnswers = shuffleArray(words.filter(w => w !== word)).slice(0, 3).map(w => w.simplified);
      const options = shuffleArray([word.simplified, ...wrongAnswers]);
      questions.push({
        question: word.english,
        hint: 'Which Chinese word matches?',
        options,
        correct: options.indexOf(word.simplified)
      });
    }
  });
  
  return questions;
}
