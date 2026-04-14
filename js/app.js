// ============================================
// AP Chinese Prep - App Router & Global State
// ============================================

// Global state management
const AppState = {
  currentPage: 'dashboard',
  progress: {},
  stats: { totalAnswered: 0, totalCorrect: 0, streak: 0, lastDate: null, vocabMastered: 0 },
  examDate: null,
  
  init() {
    // Load from localStorage
    const saved = localStorage.getItem('ap-chinese-progress');
    if (saved) {
      const data = JSON.parse(saved);
      this.progress = data.progress || {};
      this.stats = { ...this.stats, ...data.stats };
      this.examDate = data.examDate || null;
    }
    this.updateStreak();
  },

  save() {
    const data = {
      progress: this.progress,
      stats: this.stats,
      examDate: this.examDate
    };
    localStorage.setItem('ap-chinese-progress', JSON.stringify(data));
    if (typeof window.onProgressSaved === 'function') window.onProgressSaved(data);
  },

  recordAnswer(correct) {
    this.stats.totalAnswered++;
    if (correct) this.stats.totalCorrect++;
    this.updateStreak();
    this.save();
  },

  updateStreak() {
    const today = new Date().toDateString();
    if (this.stats.lastDate !== today && this.stats.totalAnswered > 0) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (this.stats.lastDate === yesterday.toDateString()) {
        this.stats.streak++;
      } else if (this.stats.lastDate !== today) {
        this.stats.streak = 1;
      }
      this.stats.lastDate = today;
    }
  },

  getAccuracy() {
    if (this.stats.totalAnswered === 0) return 0;
    return Math.round((this.stats.totalCorrect / this.stats.totalAnswered) * 100);
  },

  setProgress(section, key, value) {
    if (!this.progress[section]) this.progress[section] = {};
    this.progress[section][key] = value;
    this.save();
  },

  getProgress(section, key) {
    return this.progress[section]?.[key] || null;
  },

  getSectionCompletion(section) {
    const prog = this.progress[section];
    if (!prog) return 0;
    const completed = Object.values(prog).filter(v => v === true || v === 'completed').length;
    let total = 1;
    switch(section) {
      case 'reading': total = window.READING_DATA?.length || 1; break;
      case 'listening': total = (window.LISTENING_DATA?.rejoinders?.length || 0) + (window.LISTENING_DATA?.conversations?.length || 0) || 1; break;
      case 'vocabulary': total = window.VOCABULARY_DATA?.categories?.length || 1; break;
      case 'culture': total = window.CULTURE_DATA?.length || 1; break;
      default: total = 1;
    }
    return Math.min(Math.round((completed / total) * 100), 100);
  }
};

// Navigation
function navigateTo(page, updateHash = true) {
  // Stop any playing audio
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  // Show target
  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active');
    // Re-trigger animation
    target.style.animation = 'none';
    target.offsetHeight; // reflow
    target.style.animation = '';
  }
  
  // Update nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector(`.nav-link[data-page="${page}"]`)?.classList.add('active');
  
  // Close mobile nav
  document.getElementById('nav-links')?.classList.remove('open');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  AppState.currentPage = page;
  
  if (updateHash) {
    window.location.hash = page;
  }
  
  // Initialize page content
  switch(page) {
    case 'dashboard': initDashboard(); break;
    case 'listening': initListening(); break;
    case 'reading': initReading(); break;
    case 'writing': initWriting(); break;
    case 'speaking': initSpeaking(); break;
    case 'vocabulary': initVocabulary(); break;
    case 'culture': initCulture(); break;
    case 'mockexam': initMockExam(); break;
  }
}

function toggleMobileNav() {
  document.getElementById('nav-links').classList.toggle('open');
}

// Countdown timer
let countdownInterval;
function setExamDate(dateStr) {
  AppState.examDate = dateStr;
  AppState.save();
  startCountdown();
}

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  
  if (!AppState.examDate) {
    document.getElementById('countdown-days').textContent = '--';
    document.getElementById('countdown-hours').textContent = '--';
    document.getElementById('countdown-mins').textContent = '--';
    document.getElementById('countdown-secs').textContent = '--';
    return;
  }

  function update() {
    const now = new Date();
    const exam = new Date(AppState.examDate + 'T08:00:00');
    const diff = exam - now;
    
    if (diff <= 0) {
      document.getElementById('countdown-days').textContent = '0';
      document.getElementById('countdown-hours').textContent = '0';
      document.getElementById('countdown-mins').textContent = '0';
      document.getElementById('countdown-secs').textContent = '0';
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown-days').textContent = days;
    document.getElementById('countdown-hours').textContent = hours;
    document.getElementById('countdown-mins').textContent = mins;
    document.getElementById('countdown-secs').textContent = secs;
  }
  
  update();
  countdownInterval = setInterval(update, 1000);
}

// Confetti effect
function showConfetti() {
  const colors = ['#dc2626', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#fbbf24'];
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.width = (Math.random() * 8 + 5) + 'px';
    piece.style.height = (Math.random() * 8 + 5) + 'px';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3500);
  }
}

// Utility: shuffle array
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Route handler
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const validPages = ['dashboard', 'listening', 'reading', 'writing', 'speaking', 'vocabulary', 'culture', 'mockexam'];
    if (validPages.includes(hash)) {
      navigateTo(hash, false);
      return;
    }
  }
  navigateTo('dashboard', false);
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  AppState.init();
  
  // Set exam date input
  const dateInput = document.getElementById('exam-date-input');
  if (AppState.examDate) {
    dateInput.value = AppState.examDate;
  }
  
  startCountdown();
  
  // Check deep link hash
  const hash = window.location.hash.replace('#', '');
  const validPages = ['dashboard', 'listening', 'reading', 'writing', 'speaking', 'vocabulary', 'culture', 'mockexam'];
  if (hash && validPages.includes(hash)) {
    navigateTo(hash, false);
  } else {
    navigateTo('dashboard', false);
  }
});
// ============================================
// Backup & Restore
// ============================================

window.exportProgress = function() {
  const data = localStorage.getItem('ap-chinese-progress');
  if (!data) {
    alert('No progress to export yet!');
    return;
  }
  
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ap_chinese_backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

window.importProgress = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const content = e.target.result;
      const data = JSON.parse(content);

      if (data.progress && data.stats) {
        localStorage.setItem('ap-chinese-progress', JSON.stringify(data));
        alert('Progress imported successfully! The page will now reload.');
        window.location.reload();
      } else {
        alert('Invalid backup file format. Missing progress or stats data.');
      }
    } catch (err) {
      alert('Error reading backup file: ' + err.message);
    }
    event.target.value = ''; // Reset input so same file can be selected again
  };
  reader.readAsText(file);
};

// Re-initialize from localStorage when cloud sync overwrites local data
window.addEventListener('progress:synced', () => {
  AppState.init();
  navigateTo(AppState.currentPage, false);
});
