/* ============================================================
   CLOUDFLIX – script.js
   Production JavaScript | Vanilla ES6+
   ============================================================ */

'use strict';

/* ============================================================
   1. MOVIE DATA
   Using Unsplash for high-quality royalty-free poster images
   ============================================================ */
const MOVIES = {
  trending: [
    { id: 1,  title: 'Neon Horizon',        year: 2025, rating: '9.2', duration: '2h 14m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80' },
    { id: 2,  title: 'Apex Protocol',       year: 2025, rating: '8.8', duration: '1h 58m', genre: 'Action',      progress: null, img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80' },
    { id: 3,  title: 'The Last Signal',     year: 2024, rating: '9.0', duration: '2h 32m', genre: 'Thriller',    progress: null, img: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80' },
    { id: 4,  title: 'Midnight Atlas',      year: 2025, rating: '8.5', duration: '1h 46m', genre: 'Mystery',     progress: null, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { id: 5,  title: 'Iron Meridian',       year: 2024, rating: '8.7', duration: '2h 08m', genre: 'Action',      progress: null, img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80' },
    { id: 6,  title: 'Quantum Veil',        year: 2025, rating: '9.1', duration: '2h 20m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1445375011782-2384686778a0?w=400&q=80' },
    { id: 7,  title: 'Crimson Tide II',     year: 2025, rating: '8.4', duration: '1h 52m', genre: 'Drama',       progress: null, img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=400&q=80' },
    { id: 8,  title: 'Phantom Circuit',     year: 2025, rating: '8.9', duration: '2h 04m', genre: 'Spy',         progress: null, img: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80' },
    { id: 9,  title: 'Solar Drift',         year: 2024, rating: '8.6', duration: '1h 38m', genre: 'Adventure',   progress: null, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
    { id: 10, title: 'The Deep Frequency',  year: 2025, rating: '9.3', duration: '2h 46m', genre: 'Horror',      progress: null, img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80' },
  ],
  popular: [
    { id: 11, title: 'Orbital Siege',       year: 2025, rating: '8.3', duration: '2h 10m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80' },
    { id: 12, title: 'Dark Resonance',      year: 2024, rating: '9.0', duration: '2h 28m', genre: 'Thriller',    progress: null, img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80' },
    { id: 13, title: 'Velvet Underground',  year: 2025, rating: '8.7', duration: '1h 54m', genre: 'Crime',       progress: null, img: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=400&q=80' },
    { id: 14, title: 'Pulse City',          year: 2025, rating: '8.5', duration: '2h 02m', genre: 'Action',      progress: null, img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80' },
    { id: 15, title: 'Fractured Sky',       year: 2024, rating: '8.9', duration: '2h 16m', genre: 'Drama',       progress: null, img: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=400&q=80' },
    { id: 16, title: 'Hollow Earth',        year: 2025, rating: '8.1', duration: '1h 48m', genre: 'Adventure',   progress: null, img: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=400&q=80' },
    { id: 17, title: 'Code Red: Zero',      year: 2025, rating: '8.6', duration: '2h 06m', genre: 'Spy',         progress: null, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { id: 18, title: 'The Drift Protocol',  year: 2024, rating: '8.8', duration: '2h 22m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&q=80' },
    { id: 19, title: 'Obsidian Tower',      year: 2025, rating: '9.1', duration: '2h 34m', genre: 'Mystery',     progress: null, img: 'https://images.unsplash.com/photo-1494523374921-0a1dd7228f2d?w=400&q=80' },
    { id: 20, title: 'Storm Protocol',      year: 2025, rating: '8.4', duration: '1h 56m', genre: 'Action',      progress: null, img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80' },
  ],
  newReleases: [
    { id: 21, title: 'Zero Gravity',        year: 2025, rating: '8.2', duration: '1h 44m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=400&q=80' },
    { id: 22, title: 'Nocturn',             year: 2025, rating: '8.9', duration: '2h 12m', genre: 'Thriller',    progress: null, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { id: 23, title: 'Blade of Ashes',      year: 2025, rating: '8.6', duration: '2h 08m', genre: 'Action',      progress: null, img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80' },
    { id: 24, title: 'The Forgotten Net',   year: 2025, rating: '9.0', duration: '2h 26m', genre: 'Drama',       progress: null, img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80' },
    { id: 25, title: 'Siren Protocol',      year: 2025, rating: '8.4', duration: '1h 50m', genre: 'Horror',      progress: null, img: 'https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?w=400&q=80' },
    { id: 26, title: 'Static',              year: 2025, rating: '8.7', duration: '2h 04m', genre: 'Mystery',     progress: null, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
    { id: 27, title: 'Last Transmission',   year: 2025, rating: '8.3', duration: '1h 58m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=400&q=80' },
    { id: 28, title: 'Zenith',              year: 2025, rating: '9.2', duration: '2h 40m', genre: 'Epic',        progress: null, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { id: 29, title: 'Frequency X',         year: 2025, rating: '8.5', duration: '2h 00m', genre: 'Crime',       progress: null, img: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80' },
    { id: 30, title: 'Rogue Satellite',     year: 2025, rating: '8.8', duration: '2h 18m', genre: 'Spy',         progress: null, img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80' },
  ],
  continueWatching: [
    { id: 31, title: 'Apex Protocol',       year: 2025, rating: '8.8', duration: '1h 58m', genre: 'Action',      progress: 65,   img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80' },
    { id: 32, title: 'Quantum Veil',        year: 2025, rating: '9.1', duration: '2h 20m', genre: 'Sci-Fi',      progress: 42,   img: 'https://images.unsplash.com/photo-1445375011782-2384686778a0?w=400&q=80' },
    { id: 33, title: 'Dark Resonance',      year: 2024, rating: '9.0', duration: '2h 28m', genre: 'Thriller',    progress: 88,   img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80' },
    { id: 34, title: 'Nocturn',             year: 2025, rating: '8.9', duration: '2h 12m', genre: 'Thriller',    progress: 18,   img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { id: 35, title: 'Crimson Tide II',     year: 2025, rating: '8.4', duration: '1h 52m', genre: 'Drama',       progress: 55,   img: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=400&q=80' },
    { id: 36, title: 'Solar Drift',         year: 2024, rating: '8.6', duration: '1h 38m', genre: 'Adventure',   progress: 30,   img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
    { id: 37, title: 'Fractured Sky',       year: 2024, rating: '8.9', duration: '2h 16m', genre: 'Drama',       progress: 72,   img: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=400&q=80' },
    { id: 38, title: 'Zenith',              year: 2025, rating: '9.2', duration: '2h 40m', genre: 'Epic',        progress: 10,   img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
  ],
  topPicks: [
    { id: 41, title: 'Project Blackhole',   year: 2025, rating: '9.4', duration: '2h 52m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&q=80' },
    { id: 42, title: 'Echo Chamber',        year: 2025, rating: '8.8', duration: '2h 06m', genre: 'Thriller',    progress: null, img: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80' },
    { id: 43, title: 'Invisible Grid',      year: 2024, rating: '9.0', duration: '1h 58m', genre: 'Spy',         progress: null, img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80' },
    { id: 44, title: 'The Algorithm',       year: 2025, rating: '8.7', duration: '2h 14m', genre: 'Drama',       progress: null, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80' },
    { id: 45, title: 'Vertex Point',        year: 2025, rating: '8.5', duration: '2h 02m', genre: 'Action',      progress: null, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { id: 46, title: 'Subterran',           year: 2025, rating: '8.9', duration: '2h 22m', genre: 'Horror',      progress: null, img: 'https://images.unsplash.com/photo-1439853949212-36089f8f37f7?w=400&q=80' },
    { id: 47, title: 'Deep Satellite',      year: 2025, rating: '8.6', duration: '1h 46m', genre: 'Sci-Fi',      progress: null, img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80' },
    { id: 48, title: 'The Mirage Files',    year: 2024, rating: '9.1', duration: '2h 36m', genre: 'Mystery',     progress: null, img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80' },
    { id: 49, title: 'Phantom Protocol',    year: 2025, rating: '8.3', duration: '1h 54m', genre: 'Action',      progress: null, img: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&q=80' },
    { id: 50, title: 'Signal Lost',         year: 2025, rating: '8.8', duration: '2h 10m', genre: 'Drama',       progress: null, img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80' },
  ],
  onlyCloudflix: [
    { id: 51, title: 'CloudBurst',          year: 2025, rating: '9.5', duration: '2h 44m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1427434991195-f42379e2139d?w=400&q=80' },
    { id: 52, title: 'The AWS Files',       year: 2025, rating: '9.2', duration: '2h 18m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80' },
    { id: 53, title: 'Lambda Rising',       year: 2025, rating: '8.9', duration: '1h 56m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=400&q=80' },
    { id: 54, title: 'Serverless',          year: 2025, rating: '8.7', duration: '2h 08m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { id: 55, title: 'Elastic Pulse',       year: 2025, rating: '9.0', duration: '2h 24m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80' },
    { id: 56, title: 'The Edge Node',       year: 2025, rating: '8.8', duration: '1h 50m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&q=80' },
    { id: 57, title: 'Region US-East',      year: 2025, rating: '9.1', duration: '2h 32m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80' },
    { id: 58, title: 'Failover',            year: 2025, rating: '8.6', duration: '2h 04m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80' },
    { id: 59, title: 'Availability Zone',   year: 2025, rating: '8.4', duration: '1h 48m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80' },
    { id: 60, title: 'Auto Scale',          year: 2025, rating: '9.3', duration: '2h 38m', genre: 'Exclusive',   progress: null, img: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=400&q=80' },
  ],
};

/* ============================================================
   2. CARD RENDERING
   ============================================================ */

/**
 * Build a single movie card element
 * @param {Object} movie - Movie data object
 * @returns {HTMLElement}
 */
function createCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.setAttribute('role', 'article');
  card.setAttribute('aria-label', movie.title);

  const progressBar = movie.progress !== null
    ? `<div class="card-progress-bar">
         <div class="card-progress-fill" style="width:${movie.progress}%"></div>
       </div>`
    : '';

  card.innerHTML = `
    <div class="card-poster">
      <img
        src="${movie.img}"
        alt="${movie.title} poster"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80'"
      />
      <div class="card-poster-overlay"></div>
      <button class="card-play-btn" aria-label="Play ${movie.title}">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      </button>
    </div>
    ${progressBar}
    <div class="card-info">
      <div class="card-title">${movie.title}</div>
      <div class="card-meta">
        <span class="card-rating">★ ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.duration}</span>
      </div>
      <div class="card-genre">${movie.genre}</div>
    </div>
  `;

  return card;
}

/**
 * Populate a row with movie cards
 * @param {string} trackId - DOM id of cards-track element
 * @param {Array}  movies  - Array of movie objects
 */
function populateRow(trackId, movies) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const fragment = document.createDocumentFragment();
  movies.forEach(movie => fragment.appendChild(createCard(movie)));
  track.appendChild(fragment);
}

/**
 * Render all content rows
 */
function renderAllRows() {
  populateRow('trending',         MOVIES.trending);
  populateRow('popular',          MOVIES.popular);
  populateRow('newReleases',      MOVIES.newReleases);
  populateRow('continueWatching', MOVIES.continueWatching);
  populateRow('topPicks',         MOVIES.topPicks);
  populateRow('onlyCloudflix',    MOVIES.onlyCloudflix);
}

/* ============================================================
   3. HORIZONTAL SCROLL (ROW ARROWS)
   ============================================================ */

/**
 * Attach left/right arrow scroll behaviour to every content row
 */
function initRowArrows() {
  const rows = document.querySelectorAll('.content-row');

  rows.forEach(row => {
    const track = row.querySelector('.cards-track');
    const btnLeft  = row.querySelector('.row-arrow-left');
    const btnRight = row.querySelector('.row-arrow-right');

    if (!track || !btnLeft || !btnRight) return;

    const SCROLL_AMT = () => track.clientWidth * 0.75;

    btnLeft.addEventListener('click', () => {
      track.scrollBy({ left: -SCROLL_AMT(), behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      track.scrollBy({ left: SCROLL_AMT(), behavior: 'smooth' });
    });

    // Show/hide arrows based on scroll position
    const updateArrows = () => {
      btnLeft.style.opacity  = track.scrollLeft > 10 ? '1' : '0';
      btnRight.style.opacity = track.scrollLeft < (track.scrollWidth - track.clientWidth - 10) ? '1' : '0';
    };

    track.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
  });
}

/* ============================================================
   4. STICKY NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on init
}

/* ============================================================
   5. HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ============================================================
   6. SCROLL REVEAL ANIMATIONS
   ============================================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-up');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stagger children if they also have reveal-up
        const children = entry.target.querySelectorAll('.reveal-up');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 80);
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================================
   7. BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   8. HERO PARALLAX
   ============================================================ */
function initHeroParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;

  // Only on non-touch devices
  const mq = window.matchMedia('(hover: hover)');
  if (!mq.matches) return;

  const onScroll = () => {
    const scrolled = window.scrollY;
    // Subtle parallax — move bg slower than scroll
    heroBg.style.transform = `scale(1.06) translateY(${scrolled * 0.18}px)`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============================================================
   9. LOADING SCREEN
   ============================================================ */
function initLoadingScreen() {
  const screen = document.getElementById('loadingScreen');
  if (!screen) return;

  // Hide loading screen after page is ready
  const hide = () => {
    screen.classList.add('hidden');
    // Trigger reveal of hero content
    document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 120);
    });
  };

  if (document.readyState === 'complete') {
    setTimeout(hide, 900);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 900));
  }
}

/* ============================================================
   10. AWS STATUS PANEL – live clock update
   ============================================================ */
function initStatusPanel() {
  const lastUpdatedEl = document.getElementById('lastUpdated');
  if (!lastUpdatedEl) return;

  let seconds = 0;

  setInterval(() => {
    seconds++;
    if (seconds < 60) {
      lastUpdatedEl.textContent = seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
    } else {
      const mins = Math.floor(seconds / 60);
      lastUpdatedEl.textContent = mins === 1 ? '1 minute ago' : `${mins} minutes ago`;
    }
  }, 1000);
}

/* ============================================================
   11. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================
   12. ACTIVE NAV LINK ON SCROLL
   ============================================================ */
function initActiveNavHighlight() {
  const links = document.querySelectorAll('.nav-link');

  // Just first link stays active for this single-page demo
  // In a multi-section app, use IntersectionObserver per section
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/* ============================================================
   13. SEARCH BUTTON INTERACTION (UI DEMO)
   ============================================================ */
function initSearchInteraction() {
  const searchBtn = document.querySelector('.nav-icon-btn[aria-label="Search"]');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', () => {
    // A simple visual flash — would open a search overlay in production
    searchBtn.style.color = 'var(--cf-accent)';
    setTimeout(() => { searchBtn.style.color = ''; }, 300);
  });
}

/* ============================================================
   14. CARD INTERACTION SOUNDS / MICRO-FEEDBACK (VISUAL)
   ============================================================ */
function initCardInteractions() {
  // Delegate — works for dynamically created cards
  document.addEventListener('click', (e) => {
    const playBtn = e.target.closest('.card-play-btn');
    if (!playBtn) return;

    const card = playBtn.closest('.movie-card');
    const title = card?.querySelector('.card-title')?.textContent || 'this title';

    // Brief "playing" flash
    playBtn.style.background = 'var(--cf-accent)';
    playBtn.style.color = '#fff';
    setTimeout(() => {
      playBtn.style.background = '';
      playBtn.style.color = '';
    }, 400);
  });
}

/* ============================================================
   15. INIT – Entry Point
   ============================================================ */
function init() {
  // 1. Render movie rows first (so observers see elements)
  renderAllRows();

  // 2. Initialise all features
  initLoadingScreen();
  initNavbar();
  initHamburger();
  initRowArrows();
  initScrollReveal();
  initBackToTop();
  initHeroParallax();
  initStatusPanel();
  initSmoothScroll();
  initActiveNavHighlight();
  initSearchInteraction();
  initCardInteractions();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
