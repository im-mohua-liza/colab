/* ---------- Mobile menu ---------- */
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (burgerBtn && mobileMenu) {
  function toggleMenu(open){
    const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('open');
    burgerBtn.classList.toggle('open', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  burgerBtn.addEventListener('click', () => toggleMenu());
  document.querySelectorAll('[data-nav-mobile]').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth >= 1024) toggleMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) { toggleMenu(false); burgerBtn.focus(); }
  });

  // Fold-open sections: About, Services and Research show their sub-pages behind a chevron so
  // the whole menu fits on a phone screen. The section you're on starts open. The parent link
  // still goes to its page; only the chevron folds.
  mobileMenu.querySelectorAll('.mobile-sub').forEach((sub, i) => {
    const parent = sub.previousElementSibling;
    if (!parent || parent.tagName !== 'A') return;
    const row = document.createElement('div');
    row.className = 'mobile-parent';
    parent.before(row);
    row.appendChild(parent);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mobile-sub-toggle';
    sub.id = sub.id || 'mobileSub' + i;
    btn.setAttribute('aria-controls', sub.id);
    btn.setAttribute('aria-label', 'Show ' + parent.textContent.trim() + ' pages');
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    row.appendChild(btn);
    const setOpen = (open) => { sub.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); };
    setOpen(!!(parent.getAttribute('aria-current') || sub.querySelector('[aria-current]')));
    btn.addEventListener('click', () => setOpen(!sub.classList.contains('is-open')));
  });
  mobileMenu.classList.add('has-folds');
}

/* ---------- Hero background videos: poster-first, video only once it really plays ----------
   The poster image (a frame of the video, same size) is always shown underneath. The video
   sits on top, invisible, and fades in only when it is actually playing. If a browser blocks
   autoplay (Low Power Mode, data saver, reduced motion) or the file fails, the video simply
   never appears and the poster stays: the hero is never black, blank or broken. */
document.querySelectorAll('.photo-hero-bg > video, .vh-panel > video').forEach((video) => {
  // a panel hidden at this screen size (e.g. the side clips on phones) is not loaded at all
  if (video.parentElement.classList.contains('vh-panel') && getComputedStyle(video.parentElement).display === 'none') { video.removeAttribute('autoplay'); video.preload = 'none'; return; }
  // Each video's own shape (from its poster, an exact frame, or the video itself) drives the
  // phone layout in css/site.css, so every video is framed whole rather than one fixed crop.
  const hero = video.closest('.photo-hero'), still = video.parentElement.querySelector('img');
  const setRatio = (w, h) => { if (hero && w && h) hero.style.setProperty('--video-ratio', (w / h).toFixed(4)); };
  if (still) { if (still.complete) setRatio(still.naturalWidth, still.naturalHeight); else still.addEventListener('load', () => setRatio(still.naturalWidth, still.naturalHeight)); }
  video.addEventListener('loadedmetadata', () => setRatio(video.videoWidth, video.videoHeight));
  const fail = () => { video.classList.remove('is-playing'); video.pause(); video.hidden = true; };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { video.removeAttribute('autoplay'); fail(); return; }
  video.addEventListener('playing', () => video.classList.add('is-playing'));
  video.addEventListener('error', fail);
  const source = video.querySelector('source');
  if (source) source.addEventListener('error', fail);   // a failed file fires on <source>, not <video>
  if (!video.paused && video.readyState > 2) video.classList.add('is-playing');   // autoplay beat this script
  video.preload = 'auto';
  const p = video.play();
  if (p) p.catch(fail);
});

/* ---------- Interactive "How We Work" journey selector ---------- */
const journeySteps = document.querySelectorAll('.journey-step');
if (journeySteps.length) {
  const journeyPanels = document.querySelectorAll('.journey-panel-content');
  const journeyFill = document.getElementById('journeyFill');
  function setJourneyStep(index) {
    journeySteps.forEach((btn, i) => {
      const active = i === index;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    journeyPanels.forEach((panel, i) => panel.classList.toggle('is-active', i === index));
    if (journeyFill) journeyFill.style.width = (index / (journeySteps.length - 1)) * 100 + '%';
  }
  journeySteps.forEach((btn, i) => btn.addEventListener('click', () => setJourneyStep(i)));
  setJourneyStep(0);
}

/* ---------- Nav scroll shadow ---------- */
const navEl = document.getElementById('nav');
if (navEl) {
  const onScroll = () => {
    navEl.classList.toggle('scrolled', window.scrollY > 20);
    navEl.style.paddingTop = window.scrollY > 20 ? '0' : '';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();   // right state on load too (e.g. a reload halfway down the page)
}

/* ---------- Scroll reveal (also covers .img-reveal image entrances) ---------- */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .img-reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));
}

/* ---------- Lightweight scroll parallax for .parallax-img ---------- */
const parallaxEls = document.querySelectorAll('.parallax-img');
if (parallaxEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let parallaxTicking = false;
  function updateParallax(){
    parallaxEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-22, Math.min(22, center * -0.05));
      el.style.setProperty('--parallax-y', offset.toFixed(1) + 'px');
    });
    parallaxTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!parallaxTicking) { requestAnimationFrame(updateParallax); parallaxTicking = true; }
  }, { passive: true });
  updateParallax();
}

/* ---------- Animated counters ---------- */
const counters = document.querySelectorAll('.counter-num');
if (counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      function tick(now){
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));
}

/* ---------- Toast for "soon" placeholder links ---------- */
const toast = document.getElementById('toast');
if (toast) {
  let toastTimer;
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-soon]');
    if (!link) return;
    e.preventDefault();
    toast.classList.remove('opacity-0');
    toast.classList.add('opacity-100');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.classList.remove('opacity-100'); toast.classList.add('opacity-0'); }, 2200);
  });
}

/* ---------- Newsletter (footer, every page) — sends for real ---------- */
const OS_INBOX = 'sahariar@colabglobal.org';
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    try {
      await fetch('https://formsubmit.co/ajax/' + OS_INBOX, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email: input ? input.value : '',
          _subject: 'Newsletter signup — CoLab website',
          _template: 'table'
        })
      });
    } catch (_) { /* the thanks note still shows; misses surface in the inbox check */ }
    document.getElementById('newsletterMsg').classList.remove('hidden');
    e.target.reset();
  });
}

/* ---------- Contact form: show the sent state after the redirect back ---------- */
const collabMsgEl = document.getElementById('collabMsg');
if (collabMsgEl && new URLSearchParams(location.search).get('sent') === '1') {
  collabMsgEl.textContent = 'Thank you — your message is on its way. We usually reply within two working days.';
  collabMsgEl.classList.remove('hidden');
  collabMsgEl.style.color = '#5B8C5A';
  collabMsgEl.scrollIntoView({ block: 'center' });
}
