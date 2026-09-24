// Pointer-driven micro-interactions: cards tilt toward the cursor, buttons lean toward it.
// Mouse users only; nothing runs on touch screens or when reduced motion is preferred.
(() => {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || calm) return;

  const clamp = (v, max) => Math.max(-max, Math.min(max, v));

  // Cards (.card-lift, including ones added later by page scripts): 3D tilt that follows the pointer.
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest && e.target.closest('.card-lift');
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transition = 'transform .12s ease-out, box-shadow .35s ease-out, border-color .35s ease-out';
    card.style.transform = `perspective(900px) translateY(-6px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
  });
  document.addEventListener('pointerout', (e) => {
    const card = e.target.closest && e.target.closest('.card-lift');
    if (!card || card.contains(e.relatedTarget)) return;
    card.style.transition = '';
    card.style.transform = '';
  });

  // Buttons: lean a few pixels toward the pointer (skipped for full-width buttons such as form submits).
  const buttons = '.btn-primary, .btn-gold, .btn-sky, .btn-ghost';
  document.addEventListener('pointermove', (e) => {
    const btn = e.target.closest && e.target.closest(buttons);
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    if (r.width > 380) return;
    const dx = clamp((e.clientX - (r.left + r.width / 2)) * 0.18, 6);
    const dy = clamp((e.clientY - (r.top + r.height / 2)) * 0.25, 4);
    btn.style.transform = `translate(${dx.toFixed(1)}px, ${(dy - 3).toFixed(1)}px) scale(1.03)`;
  });
  document.addEventListener('pointerout', (e) => {
    const btn = e.target.closest && e.target.closest(buttons);
    if (!btn || btn.contains(e.relatedTarget)) return;
    btn.style.transform = '';
  });

  // Menu dropdowns: a solid pill glides behind whichever card the pointer is on.
  document.querySelectorAll('.nav-dd-menu').forEach((menu) => {
    const glow = menu.querySelector('.dd-glow');
    if (!glow) return;
    const moveTo = (card, instant) => {
      if (instant) glow.style.transition = 'none';
      glow.style.setProperty('--gx', card.offsetLeft + 'px');
      glow.style.setProperty('--gy', card.offsetTop + 'px');
      glow.style.setProperty('--gw', card.offsetWidth + 'px');
      glow.style.setProperty('--gh', card.offsetHeight + 'px');
      if (instant) { glow.getBoundingClientRect(); glow.style.transition = ''; }
      menu.classList.add('glow-on');
    };
    menu.querySelectorAll('.dd-card').forEach((card) => {
      card.addEventListener('pointerenter', () => moveTo(card, !menu.classList.contains('glow-on')));
      card.addEventListener('focus', () => moveTo(card, !menu.classList.contains('glow-on')));
    });
    menu.addEventListener('pointerleave', () => menu.classList.remove('glow-on'));
  });
})();
