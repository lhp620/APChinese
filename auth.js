/* ═══════════════════════════════════════════════════════════
   AP Chinese — Firebase Auth + Firestore Sync
   Google Sign-In, cross-device progress sync
   ═══════════════════════════════════════════════════════════ */

const Auth = (() => {
  const USERS_COL   = 'apchinese_users';
  const STORAGE_KEY = 'ap-chinese-progress';
  const SYNC_KEY    = 'apchinese_firebase_synced'; // sessionStorage flag to prevent reload loops

  let db, auth, currentUser = null, unsubscribeWatch = null;

  // ─── Config check ───────────────────────────────────────
  function isConfigured() {
    return typeof FIREBASE_CONFIG !== 'undefined' &&
           FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY';
  }

  // ─── Safe HTML escape ───────────────────────────────────
  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
  }

  // ─── Init ───────────────────────────────────────────────
  function init() {
    if (!isConfigured() || typeof firebase === 'undefined') {
      renderAuthButton(null);
      return;
    }

    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      db   = firebase.firestore();
      auth = firebase.auth();
    } catch (e) {
      console.warn('Firebase init failed:', e);
      renderAuthButton(null);
      return;
    }

    // Hook: called by AppState.save() whenever progress is written to localStorage.
    window.onProgressSaved = function (progress) {
      if (currentUser) {
        db.collection(USERS_COL).doc(currentUser.uid)
          .update({ progress })
          .catch(e => console.warn('Firestore sync failed:', e));
      }
    };

    auth.onAuthStateChanged(async (user) => {
      currentUser = user;
      if (user) {
        await syncFromCloud(user);
      }
      renderAuthButton(user);
    });
  }

  // ─── Real-time Firestore listener ──────────────────────
  function watchProgress(user) {
    if (unsubscribeWatch) unsubscribeWatch();

    unsubscribeWatch = db.collection(USERS_COL).doc(user.uid)
      .onSnapshot((doc) => {
        if (!doc.exists || !doc.data().progress) return;
        if (doc.metadata.hasPendingWrites) return;

        const cloudProgress = doc.data().progress;
        const localStr      = localStorage.getItem(STORAGE_KEY) || '{}';
        const cloudStr      = JSON.stringify(cloudProgress);

        if (cloudStr !== localStr) {
          localStorage.setItem(STORAGE_KEY, cloudStr);
          window.dispatchEvent(new CustomEvent('progress:synced'));
        }
      }, (e) => console.warn('Firestore watch error:', e));
  }

  // ─── Initial cloud sync on sign-in ─────────────────────
  async function syncFromCloud(user) {
    if (sessionStorage.getItem(SYNC_KEY)) {
      watchProgress(user);
      return;
    }

    try {
      const docRef = db.collection(USERS_COL).doc(user.uid);
      const doc    = await docRef.get();

      if (doc.exists && doc.data().progress &&
          Object.keys(doc.data().progress).length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(doc.data().progress));
        sessionStorage.setItem(SYNC_KEY, '1');
        window.location.reload();
      } else {
        const localStr      = localStorage.getItem(STORAGE_KEY) || '{}';
        const localProgress = JSON.parse(localStr);
        const payload = {
          email:       user.email,
          displayName: user.displayName,
          photoURL:    user.photoURL,
          lastActive:  firebase.firestore.FieldValue.serverTimestamp()
        };
        if (Object.keys(localProgress).length > 0) {
          payload.progress  = localProgress;
          payload.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        }
        await docRef.set(payload, { merge: true });
        sessionStorage.setItem(SYNC_KEY, '1');
        watchProgress(user);
      }
    } catch (e) {
      console.warn('Cloud sync error:', e);
      sessionStorage.setItem(SYNC_KEY, '1');
      watchProgress(user);
    }
  }

  // ─── Sign in / out ──────────────────────────────────────
  function signIn() {
    if (!isConfigured()) {
      alert('Firebase is not configured yet.\nSee firebase-config.js for setup instructions.');
      return;
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(e => {
      console.error('Sign-in failed:', e);
      if (e.code !== 'auth/popup-closed-by-user') {
        showToast('Sign-in failed. Please try again.', 'error');
      }
    });
  }

  function signOut() {
    if (!auth) return;
    if (unsubscribeWatch) { unsubscribeWatch(); unsubscribeWatch = null; }
    auth.signOut().then(() => {
      sessionStorage.removeItem(SYNC_KEY);
      showToast('Signed out');
    }).catch(e => console.warn('Sign-out error:', e));
  }

  // ─── Simple toast ───────────────────────────────────────
  function showToast(msg, type = 'success') {
    const el = document.createElement('div');
    el.textContent = msg;
    Object.assign(el.style, {
      position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
      background: type === 'error' ? '#f43f5e' : '#10b981',
      color: '#fff', padding: '10px 18px', borderRadius: '8px',
      fontSize: '0.9rem', fontWeight: '600', boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
    });
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3100);
  }

  // ─── Render auth section in nav ─────────────────────────
  function renderAuthButton(user) {
    const container = document.getElementById('nav-auth-btn');
    if (!container) return;

    if (!isConfigured()) {
      container.style.display = 'none';
      return;
    }

    if (user) {
      const name = escapeHtml((user.displayName || 'User').split(' ')[0]);
      const avatarHtml = user.photoURL
        ? `<img class="nav-user-avatar" alt="${name}" referrerpolicy="no-referrer">`
        : '';

      container.innerHTML = `
        <div class="nav-user">
          ${avatarHtml}
          <span class="nav-user-name">${name}</span>
          <button class="btn-signout" id="signOutBtn">Sign out</button>
        </div>`;

      if (user.photoURL) {
        container.querySelector('.nav-user-avatar').src = user.photoURL;
      }
      container.querySelector('#signOutBtn').addEventListener('click', signOut);
    } else {
      container.innerHTML = `
        <button class="btn-signin" id="signInBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Sign in
        </button>`;
      container.querySelector('#signInBtn').addEventListener('click', signIn);
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  return { signIn, signOut, getUser: () => currentUser };
})();
