/**
 * BBMKU Progress Tracker — progress.js
 * ======================================
 * Tracks study progress, quiz scores, streaks, bookmarks, checklist
 */

const ProgressTracker = (() => {
  const STORAGE_KEY = 'bbmku-progress';

  const defaults = {
    checklist: {},       // { "sem1-psc101-u1": true, ... }
    quizScores: [],      // [{ date, score, total, paper, time }]
    bookmarks: [],       // [{ id, tabId, text, timestamp }]
    flashcardProgress: {},// { cardIndex: 'known'|'revise' }
    streak: { count: 0, lastDate: null },
    lastTab: 'home',
    notes: {},           // { "sem1-psc101": "user notes..." }
    xp: 0,
    level: 1
  };

  let data = { ...defaults };

  const load = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      data = raw ? { ...defaults, ...JSON.parse(raw) } : { ...defaults };
    } catch (e) {
      data = { ...defaults };
    }
    updateStreak();
    return data;
  };

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) { /* quota exceeded fallback */ }
  };

  const get = () => data || load();

  // ── Streak ──
  const updateStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    if (!data.streak) data.streak = { count: 0, lastDate: null };
    if (data.streak.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (data.streak.lastDate === yesterday) {
      data.streak.count++;
    } else if (data.streak.lastDate !== today) {
      data.streak.count = 1;
    }
    data.streak.lastDate = today;
    save();
  };

  // ── Checklist ──
  const toggleChecklist = (id) => {
    if (!data.checklist) data.checklist = {};
    data.checklist[id] = !data.checklist[id];
    save();
    return data.checklist[id];
  };

  const getChecklistProgress = (prefix) => {
    if (!data.checklist) return { done: 0, total: 0 };
    const keys = Object.keys(data.checklist).filter(k => k.startsWith(prefix));
    const done = keys.filter(k => data.checklist[k]).length;
    return { done, total: keys.length || 1 };
  };

  // ── Quiz Scores ──
  const addQuizScore = (score, total, paper, timeTaken) => {
    if (!data.quizScores) data.quizScores = [];
    data.quizScores.push({
      date: new Date().toISOString(),
      score, total, paper,
      time: timeTaken,
      percentage: Math.round((score / total) * 100)
    });
    if (data.quizScores.length > 100) data.quizScores = data.quizScores.slice(-100);
    save();
  };

  const getQuizStats = () => {
    const scores = data.quizScores || [];
    if (scores.length === 0) return { total: 0, avg: 0, best: 0, last: null };
    const percentages = scores.map(s => s.percentage);
    return {
      total: scores.length,
      avg: Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length),
      best: Math.max(...percentages),
      last: scores[scores.length - 1]
    };
  };

  // ── Bookmarks ──
  const addBookmark = (id, tabId, text) => {
    if (!data.bookmarks) data.bookmarks = [];
    if (data.bookmarks.find(b => b.id === id)) return false;
    data.bookmarks.push({ id, tabId, text: text.substring(0, 120), timestamp: Date.now() });
    save();
    return true;
  };

  const removeBookmark = (id) => {
    if (!data.bookmarks) return;
    data.bookmarks = data.bookmarks.filter(b => b.id !== id);
    save();
  };

  const isBookmarked = (id) => {
    return (data.bookmarks || []).some(b => b.id === id);
  };

  // ── Flashcard Progress ──
  const setFlashcardStatus = (index, status) => {
    if (!data.flashcardProgress) data.flashcardProgress = {};
    data.flashcardProgress[index] = status;
    save();
  };

  const getFlashcardStats = () => {
    const fp = data.flashcardProgress || {};
    const values = Object.values(fp);
    return {
      known: values.filter(v => v === 'known').length,
      revise: values.filter(v => v === 'revise').length,
      total: (typeof FLASHCARD_DATA !== 'undefined') ? FLASHCARD_DATA.length : 0
    };
  };

  // ── Notes ──
  const setNote = (key, text) => {
    if (!data.notes) data.notes = {};
    data.notes[key] = text;
    save();
  };

  const getNote = (key) => {
    return (data.notes || {})[key] || '';
  };

  // ── Last Tab ──
  const setLastTab = (tabId) => {
    data.lastTab = tabId;
    save();
  };

  const getLastTab = () => data.lastTab || 'home';

  // ── Overall Progress ──
  const getOverallProgress = () => {
    const cl = data.checklist || {};
    const allKeys = Object.keys(cl);
    const done = allKeys.filter(k => cl[k]).length;
    // Count per semester
    const semesters = ['sem1', 'sem2', 'sem3', 'sem4'];
    const semProgress = {};
    semesters.forEach(sem => {
      const semKeys = allKeys.filter(k => k.startsWith(sem));
      const semDone = semKeys.filter(k => cl[k]).length;
      semProgress[sem] = { done: semDone, total: Math.max(semKeys.length, 1) };
    });
    return { total: allKeys.length || 1, done, semesters: semProgress };
  };

  // ── Gamification (XP & Level) ──
  const addXP = (points) => {
    if (!data.xp) data.xp = 0;
    if (!data.level) data.level = 1;
    data.xp += points;
    // Level up every 100 XP
    if (data.xp >= data.level * 100) {
      data.level++;
      if(window.confetti) {
        window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      }
      if(window.showToast) window.showToast(`Level Up! You are now Level ${data.level} 🌟`);
    }
    save();
  };

  const getGamification = () => {
    return { xp: data.xp || 0, level: data.level || 1 };
  };

  return {
    load, save, get,
    toggleChecklist, getChecklistProgress,
    addQuizScore, getQuizStats,
    addBookmark, removeBookmark, isBookmarked,
    setFlashcardStatus, getFlashcardStats,
    setNote, getNote,
    setLastTab, getLastTab,
    getOverallProgress, updateStreak,
    addXP, getGamification
  };
})();

if (typeof window !== 'undefined') {
  window.ProgressTracker = ProgressTracker;
}
