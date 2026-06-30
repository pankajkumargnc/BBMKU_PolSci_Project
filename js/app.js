/**
 * BBMKU M.A. Political Science Dashboard — Main Application Script
 * ================================================================
 * Features:
 *   1. Tab Switching with header title updates
 *   2. Dark / Light Mode Toggle (persisted via localStorage)
 *   3. Hindi / English Language Toggle (persisted via localStorage)
 *   4. Full-text Search across all tab panes with snippet previews
 *   5. Mobile Sidebar (hamburger menu + overlay)
 *   6. Keyboard Navigation (Escape, Ctrl+K / Cmd+K)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ─── Utility: Debounce ───────────────────────────────────────────────
  /**
   * Returns a debounced version of `fn` that delays invocation
   * until `delay` ms have elapsed since the last call.
   */
  const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  // ─── DOM References ──────────────────────────────────────────────────
  const root            = document.documentElement;
  const sidebar         = document.getElementById('sidebar');
  const overlay         = document.getElementById('overlay');
  const hamburgerBtn    = document.getElementById('hamburger-btn');
  const searchInput     = document.getElementById('search-input');
  const searchResults   = document.getElementById('search-results');
  const darkModeToggle  = document.getElementById('dark-mode-toggle');
  const langToggle      = document.getElementById('lang-toggle');
  const currentTabTitle = document.getElementById('current-tab-title');
  const navItems        = document.querySelectorAll('.nav-item');
  const tabPanes        = document.querySelectorAll('.tab-pane');

  // ─── Constants ───────────────────────────────────────────────────────
  const THEME_KEY       = 'bbmku-theme';
  const LANG_KEY        = 'bbmku-lang';
  const MOBILE_BP       = 768;          // pixels
  const SEARCH_SNIPPET  = 50;           // chars either side of match
  const MAX_RESULTS     = 20;
  const DEBOUNCE_MS     = 300;

  // =====================================================================
  //  1. TAB SWITCHING
  // =====================================================================

  /**
   * Extract the display label from a nav-item element.
   * Grabs the icon (first child text or emoji) + the visible language span.
   */
  const getNavLabel = (navEl) => {
    const lang = root.dataset.lang || 'hi';
    const hiSpan = navEl.querySelector('.hi');
    const enSpan = navEl.querySelector('.en');
    // Visible text based on current language
    const text = lang === 'en'
      ? (enSpan ? enSpan.textContent : '')
      : (hiSpan ? hiSpan.textContent : '');

    // Try to capture leading icon / emoji that lives outside the spans
    let icon = '';
    for (const node of navEl.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        const trimmed = node.textContent.trim();
        if (trimmed) { icon = trimmed; break; }
      } else if (node.nodeType === Node.ELEMENT_NODE &&
                 !node.classList.contains('hi') &&
                 !node.classList.contains('en')) {
        icon = node.textContent.trim();
        break;
      }
    }

    return icon ? `${icon} ${text}` : text;
  };

  /**
   * Activate a specific tab by its ID.
   */
  const switchTab = (tabId) => {
    // Deactivate all nav items and tab panes
    navItems.forEach(n => n.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));

    // Activate the target nav item and pane
    const targetNav  = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    const targetPane = document.getElementById(tabId);

    if (targetNav)  targetNav.classList.add('active');
    if (targetPane) targetPane.classList.add('active');

    // Initialize specialized games/tools when tab is activated
    if (tabId === 'mock-test' && typeof window.initMockTest === 'function') {
      window.initMockTest();
    }
    if (tabId === 'chronology' && typeof window.initChronologyGame === 'function') {
      window.initChronologyGame();
    }
    if (tabId === 'debate' && typeof window.initDebateGame === 'function') {
      window.initDebateGame();
    }
    if (tabId === 'matching' && typeof window.initMatchingGame === 'function') {
      window.initMatchingGame();
    }
    
    // Update header title based on active nav item
    if (targetNav && currentTabTitle) {
      currentTabTitle.textContent = getNavLabel(targetNav);
    }

    // Sync mobile bottom nav
    document.querySelectorAll('.bottom-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // On mobile, auto-close sidebar
    if (window.innerWidth < MOBILE_BP) {
      closeSidebar();
    }

    // Scroll content area to top
    if (targetPane) {
      targetPane.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Tab-specific initialization
    if (tabId === 'quiz' && typeof QuizEngine !== 'undefined') {
      QuizEngine.renderSetup();
    }
    if (tabId === 'flashcard' && typeof FlashcardEngine !== 'undefined') {
      FlashcardEngine.renderSetup();
    }
    if (tabId === 'rev') {
      if (typeof updateRevisionTab !== 'undefined') updateRevisionTab();
    }
    if (tabId === 'matching') {
      if (typeof initMatchingGame !== 'undefined') initMatchingGame();
    }
    if (tabId === 'home') {
      updateDashboard();
    }

    // Save last tab
    if (typeof ProgressTracker !== 'undefined') {
      ProgressTracker.setLastTab(tabId);
    }
  };

  // Delegate click events on nav items
  navItems.forEach(nav => {
    nav.addEventListener('click', () => {
      const tabId = nav.dataset.tab;
      if (tabId) switchTab(tabId);
    });
  });

  // Mobile bottom nav
  document.querySelectorAll('.bottom-nav-item[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      if (tabId) switchTab(tabId);
    });
  });

  // =====================================================================
  //  2. DARK MODE TOGGLE
  // =====================================================================

  /**
   * Apply theme and update toggle button icon.
   */
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (darkModeToggle) {
      darkModeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  // Determine initial theme
  const initTheme = () => {
    let stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (stored) {
      applyTheme(stored);
    } else {
      let prefersDark = false;
      try { prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) {}
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  };

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // =====================================================================
  //  3. LANGUAGE TOGGLE
  // =====================================================================

  /**
   * Apply language and update toggle button text.
   */
  const applyLang = (lang) => {
    root.dataset.lang = lang;
    root.setAttribute('lang', lang);
    if (langToggle) {
      // Show the label of the *other* language (what clicking will switch to)
      langToggle.textContent = lang === 'hi' ? 'EN' : 'हि';
    }
  };

  /**
   * Refresh the header title to match the current language.
   */
  const refreshHeaderTitle = () => {
    const activeNav = document.querySelector('.nav-item.active');
    if (activeNav && currentTabTitle) {
      currentTabTitle.textContent = getNavLabel(activeNav);
    }
  };

  const initLang = () => {
    let stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) {}
    applyLang(stored || 'hi');
  };

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const next = root.dataset.lang === 'hi' ? 'en' : 'hi';
      localStorage.setItem(LANG_KEY, next);
      applyLang(next);
      refreshHeaderTitle();
    });
  }

  // =====================================================================
  //  4. SEARCH FUNCTIONALITY
  // =====================================================================

  /**
   * Map tab IDs to human-readable names (uses current language).
   */
  const getTabDisplayName = (tabId) => {
    const nav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    return nav ? getNavLabel(nav) : tabId;
  };

  /**
   * Build a snippet of text around a match position.
   */
  const buildSnippet = (text, matchStart, matchLen) => {
    const before = text.substring(Math.max(0, matchStart - SEARCH_SNIPPET), matchStart);
    const match  = text.substring(matchStart, matchStart + matchLen);
    const after  = text.substring(matchStart + matchLen, matchStart + matchLen + SEARCH_SNIPPET);

    const prefix = matchStart - SEARCH_SNIPPET > 0 ? '…' : '';
    const suffix = matchStart + matchLen + SEARCH_SNIPPET < text.length ? '…' : '';

    return `${prefix}${escapeHTML(before)}<strong>${escapeHTML(match)}</strong>${escapeHTML(after)}${suffix}`;
  };

  /**
   * Simple HTML-escape utility.
   */
  const escapeHTML = (str) =>
    str.replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;');

  /**
   * Perform search across all tab panes.
   */
  const performSearch = (query) => {
    if (!searchResults) return;
    searchResults.innerHTML = '';

    if (!query) {
      hideSearchResults();
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    tabPanes.forEach(pane => {
      if (results.length >= MAX_RESULTS) return;

      const textContent = pane.textContent || '';
      const lowerText   = textContent.toLowerCase();
      let searchPos     = 0;

      // Find all occurrences inside this pane
      while (results.length < MAX_RESULTS) {
        const idx = lowerText.indexOf(lowerQuery, searchPos);
        if (idx === -1) break;

        results.push({
          tabId   : pane.id,
          snippet : buildSnippet(textContent, idx, query.length),
          offset  : idx,
        });

        searchPos = idx + query.length;
      }
    });

    if (results.length === 0) {
      const lang = root.dataset.lang || 'hi';
      const noResultText = lang === 'en' ? 'No results found.' : 'कोई परिणाम नहीं मिला।';
      searchResults.innerHTML = `<div class="search-result-item" style="cursor:default;opacity:.7">${noResultText}</div>`;
      showSearchResults();
      return;
    }

    results.forEach(r => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div style="font-weight:600;font-size:.85em;margin-bottom:2px;">${getTabDisplayName(r.tabId)}</div>
        <div style="font-size:.82em;line-height:1.4;">${r.snippet}</div>
      `;
      item.addEventListener('click', () => handleResultClick(r));
      searchResults.appendChild(item);
    });

    showSearchResults();
  };

  /**
   * Handle clicking a search result: switch tab, scroll, highlight.
   */
  const handleResultClick = (result) => {
    // Switch to the tab
    switchTab(result.tabId);

    // Clear search
    if (searchInput) searchInput.value = '';
    hideSearchResults();

    // Attempt to find and highlight the matching text in the DOM
    const pane = document.getElementById(result.tabId);
    if (!pane) return;

    const query = searchInput ? searchInput.value : '';
    // Walk text nodes to find the offset and scroll to it
    highlightInPane(pane, result.offset);
  };

  /**
   * Walk text nodes in a pane to locate a character offset and
   * scroll + briefly highlight the containing element.
   */
  const highlightInPane = (pane, charOffset) => {
    const walker = document.createTreeWalker(pane, NodeFilter.SHOW_TEXT, null);
    let accumulated = 0;
    let node;

    while ((node = walker.nextNode())) {
      const len = node.textContent.length;
      if (accumulated + len > charOffset) {
        // Found the target text node
        const el = node.parentElement;
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('search-highlight');
          setTimeout(() => el.classList.remove('search-highlight'), 2000);
        }
        return;
      }
      accumulated += len;
    }
  };

  const showSearchResults = () => {
    if (searchResults) searchResults.style.display = 'block';
  };

  const hideSearchResults = () => {
    if (searchResults) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
    }
  };

  // Debounced search handler
  if (searchInput) {
    const debouncedSearch = debounce(() => {
      const q = searchInput.value.trim().toLowerCase();
      performSearch(q);
    }, DEBOUNCE_MS);

    searchInput.addEventListener('input', debouncedSearch);
  }

  // Hide search results when clicking outside
  document.addEventListener('click', (e) => {
    if (searchInput && searchResults &&
        !searchInput.contains(e.target) &&
        !searchResults.contains(e.target)) {
      hideSearchResults();
    }
  });

  // =====================================================================
  //  5. MOBILE SIDEBAR
  // =====================================================================

  const openSidebar = () => {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
  };

  const closeSidebar = () => {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  };

  const toggleSidebar = () => {
    if (sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleSidebar);
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Auto-close sidebar when viewport expands past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth >= MOBILE_BP) {
      closeSidebar();
    }
  });

  // =====================================================================
  //  6. KEYBOARD NAVIGATION
  // =====================================================================

  document.addEventListener('keydown', (e) => {
    // Escape — close search results and mobile sidebar
    if (e.key === 'Escape') {
      hideSearchResults();
      closeSidebar();
      if (searchInput) searchInput.blur();
    }

    // Ctrl+K / Cmd+K — focus search input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  // =====================================================================
  //  7. READING PROGRESS BAR
  // =====================================================================

  const progressFill = document.getElementById('reading-progress-fill');

  const updateReadingProgress = () => {
    if (!progressFill) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressFill.style.width = `${Math.min(100, progress)}%`;
  };

  window.addEventListener('scroll', updateReadingProgress, { passive: true });

  // =====================================================================
  //  8. DASHBOARD UPDATES
  // =====================================================================

  const updateDashboard = () => {
    if (typeof ProgressTracker === 'undefined') return;
    const data = ProgressTracker.get();

    // Streak
    const streakEl = document.getElementById('dash-streak');
    if (streakEl && data.streak) streakEl.textContent = data.streak.count || 0;

    // Quiz stats
    const quizStats = ProgressTracker.getQuizStats();
    const quizAvgEl = document.getElementById('dash-quiz-avg');
    if (quizAvgEl) quizAvgEl.textContent = quizStats.avg + '%';

    // Gamification (Level & XP)
    const gamification = ProgressTracker.getGamification();
    const levelXpEl = document.getElementById('dash-level-xp');
    if (levelXpEl) levelXpEl.textContent = `Lvl ${gamification.level} (${gamification.xp} XP)`;

    // Flashcard stats
    const fcStats = ProgressTracker.getFlashcardStats();
    const fcKnownEl = document.getElementById('dash-fc-known');
    if (fcKnownEl) fcKnownEl.textContent = fcStats.known;

    // Semester rings (will animate if checklist data exists)
    const overall = ProgressTracker.getOverallProgress();
    const colors = { sem1: '#6366f1', sem2: '#a855f7', sem3: '#10b981', sem4: '#f59e0b' };
    const circumference = 2 * Math.PI * 35; // r=35

    Object.entries(overall.semesters).forEach(([sem, { done, total }]) => {
      const ring = document.querySelector(`.sem-ring[data-sem="${sem}"] .sem-ring-fill`);
      const text = document.querySelector(`.sem-ring[data-sem="${sem}"] .sem-ring-text`);
      if (ring && text) {
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        ring.setAttribute('stroke-dasharray', `${(pct / 100) * circumference} ${circumference}`);
        text.textContent = pct + '%';
      }
    });
  };

  // =====================================================================
  //  9. COLLAPSIBLE ACCORDIONS FOR PAPER UNITS
  // =====================================================================

  const initAccordions = () => {
    const paperSections = document.querySelectorAll('.paper-section');
    paperSections.forEach(section => {
      const title = section.querySelector('.paper-title');
      if (!title) return;
      
      // Create content wrapper
      const content = document.createElement('div');
      content.className = 'paper-content';
      
      // Move all siblings into content
      while(title.nextSibling) {
        content.appendChild(title.nextSibling);
      }
      section.appendChild(content);

      // Add icon to title
      title.innerHTML += ' <i class="fas fa-chevron-down accordion-icon"></i>';
      title.style.cursor = 'pointer';
      title.title = "Click to expand/collapse";
      
      title.addEventListener('click', () => {
        section.classList.toggle('expanded');
      });
    });
  };

  // =====================================================================
  //  10. SYLLABUS CHECKLIST & BOOKMARKS
  // =====================================================================

  const initChecklistAndBookmarks = () => {
    if (typeof ProgressTracker === 'undefined') return;
    
    const unitTitles = document.querySelectorAll('.unit-title');
    unitTitles.forEach((el, index) => {
      const baseText = el.textContent.replace(/[^a-zA-Z0-9]/g, '').substring(0, 15);
      const tabPane = el.closest('.tab-pane');
      const tabId = tabPane ? tabPane.id : 'home';
      const id = `chk-${tabId}-${index}-${baseText}`;
      
      const chk = document.createElement('input');
      chk.type = 'checkbox';
      chk.className = 'unit-checkbox';
      chk.checked = ProgressTracker.get().checklist?.[id] || false;
      chk.title = root.dataset.lang === 'en' ? 'Mark as completed' : 'पूर्ण चिह्नित करें';
      
      if (chk.checked) el.style.opacity = '0.6';
      
      chk.addEventListener('change', (e) => {
        e.stopPropagation();
        const isChecked = ProgressTracker.toggleChecklist(id);
        el.style.opacity = isChecked ? '0.6' : '1';
        showToast(root.dataset.lang === 'en' ? (isChecked ? 'Marked as read' : 'Marked as unread') : (isChecked ? 'पढ़ा हुआ चिह्नित किया गया' : 'अपठित चिह्नित किया गया'));
        updateDashboard();
      });
      
      el.prepend(chk);
    });

    // Initialize Syllabus Tracker Checkboxes
    const sylChecks = document.querySelectorAll('.syl-check');
    sylChecks.forEach(chk => {
      // Convert 's1p1' to 'sem1-syl-p1' so getOverallProgress matches 'sem1'
      const id = 'sem' + chk.dataset.id.substring(1,2) + '-syl-' + chk.dataset.id.substring(2); 
      chk.checked = ProgressTracker.get().checklist?.[id] || false;
      chk.addEventListener('change', (e) => {
        ProgressTracker.toggleChecklist(id);
        if (typeof updateDashboard === 'function') updateDashboard();
      });
    });
    
    // Add bookmark buttons to all unit titles and info box titles
    const bookmarkableElements = document.querySelectorAll('.unit-title, .info-box h4');

    
    bookmarkableElements.forEach((el, index) => {
      // Create unique ID based on text content
      const baseText = el.textContent.replace(/[^a-zA-Z0-9]/g, '').substring(0, 15);
      const id = `bm-${index}-${baseText}`;
      
      const btn = document.createElement('button');
      btn.className = 'bookmark-btn';
      btn.innerHTML = `<i class="${ProgressTracker.isBookmarked(id) ? 'fas' : 'far'} fa-bookmark"></i>`;
      btn.title = root.dataset.lang === 'en' ? 'Bookmark this' : 'बुकमार्क करें';
      
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (ProgressTracker.isBookmarked(id)) {
          ProgressTracker.removeBookmark(id);
          btn.innerHTML = '<i class="far fa-bookmark"></i>';
          showToast(root.dataset.lang === 'en' ? 'Bookmark removed' : 'बुकमार्क हटाया गया');
        } else {
          // Find closest tab-pane to get the semester/tab id
          const tabPane = el.closest('.tab-pane');
          const tabId = tabPane ? tabPane.id : 'home';
          ProgressTracker.addBookmark(id, tabId, el.textContent);
          btn.innerHTML = '<i class="fas fa-bookmark"></i>';
          showToast(root.dataset.lang === 'en' ? 'Saved to Bookmarks' : 'बुकमार्क में सहेजा गया');
        }
        if (document.getElementById('rev').classList.contains('active')) {
          updateRevisionTab();
        }
      });
      
      el.style.display = 'flex';
      el.style.justifyContent = 'space-between';
      el.style.alignItems = 'center';
      el.appendChild(btn);
    });
  };

  const updateRevisionTab = () => {
    if (typeof ProgressTracker === 'undefined') return;
    const list = document.getElementById('bookmarks-list');
    if (!list) return;
    
    const progress = ProgressTracker.get();
    const bookmarks = progress.bookmarks || [];
    const lang = root.dataset.lang || 'hi';
    
    if (bookmarks.length === 0) {
      list.innerHTML = `<p style="color: var(--text-secondary); text-align: center; grid-column: 1/-1; padding: 20px;">
        ${lang === 'en' ? 'No bookmarks yet. Click the bookmark icon on any topic to save it here for quick revision.' : 'अभी कोई बुकमार्क नहीं है। किसी भी विषय पर बुकमार्क आइकन पर क्लिक करें।'}
      </p>`;
      return;
    }
    
    list.innerHTML = bookmarks.map(b => `
      <div class="bookmark-card">
        <div class="bookmark-card-text">${b.text}</div>
        <div class="bookmark-card-meta">
          <span style="color: var(--primary); font-weight: 600; cursor: pointer;" onclick="document.querySelector('[data-tab=${b.tabId}]').click();">
            <i class="fas fa-external-link-alt"></i> ${lang === 'en' ? 'Go to Topic' : 'विषय पर जाएं'}
          </span>
          <button class="remove-btn" onclick="ProgressTracker.removeBookmark('${b.id}'); window.updateRevisionTab();">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  };
  
  // Expose to global for inline onclick
  window.updateRevisionTab = updateRevisionTab;

  // =====================================================================
  //  11. TOAST NOTIFICATION & AUDIO GAMIFICATION
  // =====================================================================

  window.showToast = (msg) => {
    let toast = document.getElementById('fc-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'fc-toast';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  };

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  window.playSound = (type) => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // A5
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    }
  };

  // =====================================================================
  //  12. HERO PARTICLES ANIMATION
  // =====================================================================

  const initHeroParticles = () => {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 3;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255,255,255,${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 8 + 6}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      container.appendChild(particle);
    }

    // Add particle animation keyframes
    if (!document.getElementById('particle-keyframes')) {
      const style = document.createElement('style');
      style.id = 'particle-keyframes';
      style.textContent = `
        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * -50}px) scale(1.2); opacity: 0.6; }
          50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * -80}px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * -40}px) scale(1.1); opacity: 0.5; }
        }
      `;
      document.head.appendChild(style);
    }
  };

  // =====================================================================
  //  10. MOTIVATIONAL QUOTES
  // =====================================================================

  const showHeroQuote = () => {
    const el = document.getElementById('hero-quote');
    if (!el) return;
    const lang = root.dataset.lang || 'hi';

    const quotes = [
      { hi: '"शिक्षा सबसे शक्तिशाली हथियार है जिसे आप दुनिया बदलने के लिए उपयोग कर सकते हैं।" — नेल्सन मंडेला', en: '"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela' },
      { hi: '"ज्ञान ही शक्ति है।" — फ्रांसिस बेकन', en: '"Knowledge is power." — Francis Bacon' },
      { hi: '"जब तक आप इसे सरल नहीं बना सकते, तब तक आप पर्याप्त नहीं समझे हैं।" — आइंस्टीन', en: '"If you can\'t explain it simply, you don\'t understand it well enough." — Einstein' },
      { hi: '"सफलता अंतिम नहीं, असफलता घातक नहीं: साहस ही मायने रखता है।" — चर्चिल', en: '"Success is not final, failure is not fatal: it is the courage to continue that counts." — Churchill' },
      { hi: '"कठिन परिश्रम का कोई विकल्प नहीं।" — थॉमस एडिसन', en: '"There is no substitute for hard work." — Thomas Edison' },
      { hi: '"खुद को खोजने का सबसे अच्छा तरीका है कि आप दूसरों की सेवा में खुद को खो दें।" — गाँधी', en: '"The best way to find yourself is to lose yourself in the service of others." — Gandhi' },
    ];

    const today = new Date().getDate();
    const quote = quotes[today % quotes.length];
    el.textContent = lang === 'en' ? quote.en : quote.hi;
  };

  // =====================================================================
  //  INITIALISATION
  // =====================================================================

  initTheme();
  initLang();

  // Initialize ProgressTracker
  if (typeof ProgressTracker !== 'undefined') {
    ProgressTracker.load();
  }

  // Set the header title for the initially active tab
  refreshHeaderTitle();
  
  // Init Accordions
  initAccordions();
  
  // Init Checklist and Bookmarks
  initChecklistAndBookmarks();

  // Init hero section
  initHeroParticles();
  showHeroQuote();

  // Load Markdown files for .md-container (e.g. PYQ tab)
  const mdContainers = document.querySelectorAll('.md-container');
  mdContainers.forEach(container => {
    const file = container.getAttribute('data-md');
    if (file) {
      fetch(file + '?v=' + new Date().getTime()) // cache buster
        .then(res => res.text())
        .then(text => {
          if (typeof marked !== 'undefined') {
            container.innerHTML = marked.parse(text);
          } else {
            container.innerHTML = `<pre>${text}</pre>`;
          }
        })
        .catch(err => {
          container.innerHTML = `<p style="color:red;">Error loading content.</p>`;
        });
    }
  });

  // Init dashboard stats
  updateDashboard();

  // =====================================================================
  //  13. ARTICLE SEARCH FILTER (Quick Revision Tab)
  // =====================================================================
  const articleSearch = document.getElementById('article-search');
  const articleTable = document.getElementById('article-table');
  if (articleSearch && articleTable) {
    articleSearch.addEventListener('input', () => {
      const query = articleSearch.value.toLowerCase().trim();
      const rows = articleTable.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // =====================================================================
  //  14. SYLLABUS CHECKBOX STYLING
  // =====================================================================
  document.querySelectorAll('.syl-check').forEach(chk => {
    const label = chk.closest('label');
    if (label && chk.checked) {
      label.style.textDecoration = 'line-through';
      label.style.opacity = '0.6';
    }
    chk.addEventListener('change', () => {
      if (label) {
        label.style.textDecoration = chk.checked ? 'line-through' : 'none';
        label.style.opacity = chk.checked ? '0.6' : '1';
      }
    });
  });

});