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
}

/* ---------- Nav scroll shadow ---------- */
const navEl = document.getElementById('nav');
if (navEl) {
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('scrolled', window.scrollY > 20);
    navEl.style.paddingTop = window.scrollY > 20 ? '0' : '';
  }, { passive: true });
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));
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

/* ---------- Newsletter (footer, every page) ---------- */
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('newsletterMsg').classList.remove('hidden');
    e.target.reset();
  });
}
