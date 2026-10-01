// Home hero: the CoLab logo grows like a tree. Built from the real logo-white.svg paths:
// the trunk/branch shapes are revealed from the base upward, each leaf buds in as the growth
// reaches it, and as the tree fills out the wordmark is unveiled by one soft left-to-right sweep.
// After that leaves sway, now and then one detaches
// and falls, and a new leaf grows back in its place. The tree is drawn TREE_SCALE larger than in
// the file (scaled from its base, the wordmark stays as is). Reduced motion: shown fully grown, static.
(() => {
  const stage = document.querySelector('[data-hero-tree]');
  if (!stage) return;
  const img = stage.querySelector('img.hero-logo');
  const layer = stage.querySelector('.hero-logo-leaves');
  const showStatic = () => stage.classList.remove('tree-pending');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!img || !layer) return showStatic();

  const NS = 'http://www.w3.org/2000/svg';
  const BASE = { x: 40.5, y: 75 };          // foot of the trunk, inside the "l" of the wordmark
  const TREE_SCALE = 1.15;                  // tree size relative to the wordmark (1 = as in the file)
  const TOP = BASE.y - BASE.y * TREE_SCALE; // how far the scaled tree reaches above the file's viewBox
  const WOOD_PATHS = [0, 1, 14];            // first subpath = trunk/branches, the rest = leaves
  const WORD_START = 2600, WORD_MS = 1700;  // wordmark sweep, timed from when growth begins
  const rand = (a, b) => a + Math.random() * (b - a);
  const el = (tag, attrs) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); return n; };

  fetch(img.currentSrc || img.src)
    .then((r) => (r.ok ? r.text() : Promise.reject()))
    .then(build)
    .catch(showStatic);

  function build(text) {
    const src = new DOMParser().parseFromString(text, 'image/svg+xml');
    const paths = [...src.querySelectorAll('path')];
    if (paths.length < 15) return showStatic();

    const H = 75 - TOP;
    const svg = el('svg', { viewBox: '0 ' + TOP + ' 80 ' + H, width: '80', height: H, class: 'hero-logo hero-tree', role: 'img', 'aria-label': 'CoLab' });
    const clip = el('clipPath', { id: 'treeGrowClip' });
    const grow = el('circle', { cx: BASE.x, cy: BASE.y, r: 0 });
    clip.appendChild(grow);
    // Wordmark mask: a rect with a feathered right edge slides across, unveiling the word.
    const grad = el('linearGradient', { id: 'treeWordFade' });
    grad.appendChild(el('stop', { offset: '0.78', 'stop-color': '#fff' }));
    grad.appendChild(el('stop', { offset: '1', 'stop-color': '#000' }));
    const mask = el('mask', { id: 'treeWordMask', maskUnits: 'userSpaceOnUse', x: -10, y: 40, width: 100, height: 45 });
    const sweep = el('rect', { x: -100, y: 40, width: 100, height: 45, fill: 'url(#treeWordFade)' });
    mask.appendChild(sweep);
    const defs = el('defs', {});
    defs.appendChild(clip);
    defs.appendChild(grad);
    defs.appendChild(mask);
    svg.appendChild(defs);

    const leaves = [];
    const word = el('g', { mask: 'url(#treeWordMask)' });
    const copy = (p, d, extra) => el('path', Object.assign({ d, fill: p.getAttribute('fill'), 'fill-rule': 'evenodd', 'clip-rule': 'evenodd' }, extra || {}));

    // Keep the original paint order. Tree parts go into groups scaled up from the trunk's base;
    // a new group starts after the wordmark so the cyan branches still paint over it.
    const treeT = 'translate(' + BASE.x + ' ' + BASE.y + ') scale(' + TREE_SCALE + ') translate(' + -BASE.x + ' ' + -BASE.y + ')';
    let seg = null;
    const tree = () => seg || (seg = svg.appendChild(el('g', { transform: treeT })));
    paths.forEach((p, i) => {
      const d = p.getAttribute('d');
      if (WOOD_PATHS.includes(i)) {
        const subs = d.split(/(?=M)/);
        tree().appendChild(copy(p, subs[0], { 'clip-path': 'url(#treeGrowClip)' }));
        subs.slice(1).forEach((sd) => {
          const g = el('g', { class: 'tree-leaf' });
          const leaf = copy(p, sd);
          g.appendChild(leaf);
          tree().appendChild(g);
          leaves.push(g);
        });
      } else if (i >= 5) {
        word.appendChild(copy(p, d));
        if (i === 13) { svg.appendChild(word); seg = null; }
      } else {
        tree().appendChild(copy(p, d, { 'clip-path': 'url(#treeGrowClip)' }));
      }
    });
    const seed = el('circle', { cx: BASE.x, cy: 71, r: 1.4, fill: '#1BCEDF', class: 'tree-seed' });
    tree().appendChild(seed);

    img.replaceWith(svg);
    stage.classList.remove('tree-pending');

    // Bud timing follows distance from the base, so leaves appear as the wood reaches them.
    const MAX_R = 82, GROW_MS = 3400, START_MS = 500;
    leaves.forEach((g) => {
      const b = g.getBBox();
      const dist = Math.hypot(b.x + b.width / 2 - BASE.x, b.y + b.height / 2 - BASE.y);
      g._dist = dist;
      g.style.setProperty('--bud-delay', Math.round(START_MS + (dist / MAX_R) * GROW_MS * 0.92 + rand(0, 260)) + 'ms');
      const leaf = g.firstChild;
      leaf.style.setProperty('--sway-dur', rand(3.2, 5.4).toFixed(2) + 's');
      leaf.style.setProperty('--sway-delay', rand(0, 2.5).toFixed(2) + 's');
      leaf.style.setProperty('--sway-deg', rand(3, 6).toFixed(1) + 'deg');
    });

    let started = false, visible = false, timer = 0, raf = 0;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    function startGrowth() {
      started = true;
      svg.classList.add('is-growing');
      const t0 = performance.now() + START_MS;
      const tick = (now) => {
        const t = Math.min(1, Math.max(0, (now - t0) / GROW_MS));
        grow.setAttribute('r', (easeOut(t) * MAX_R).toFixed(2));
        const w = Math.min(1, Math.max(0, (now - t0 - WORD_START) / WORD_MS));
        sweep.setAttribute('x', (-100 + easeInOut(w) * 106).toFixed(2));
        if (t < 1 || w < 1) raf = requestAnimationFrame(tick);
        else {
          svg.querySelectorAll('[clip-path]').forEach((n) => n.removeAttribute('clip-path'));
          word.removeAttribute('mask');
          setTimeout(() => { svg.classList.add('is-grown'); schedule(); }, 600);
        }
      };
      raf = requestAnimationFrame(tick);
    }

    // Continuous cycle: a leaf detaches and falls, then a new one grows back in its place.
    function dropLeaf() {
      const ready = leaves.filter((g) => !g.classList.contains('is-gone') && !g.classList.contains('is-regrow'));
      if (leaves.length - ready.length >= 4 || !ready.length) return;
      const g = ready[Math.floor(Math.random() * ready.length)];
      const r = g.getBoundingClientRect(), s = stage.getBoundingClientRect(), b = g.getBBox();
      const fall = document.createElement('span');
      fall.className = 'hero-leaf';
      const fsvg = el('svg', { viewBox: [b.x, b.y, b.width, b.height].join(' ') });
      fsvg.appendChild(g.firstChild.cloneNode());
      fall.appendChild(fsvg);
      const dir = Math.random() < 0.5 ? -1 : 1;
      const p = {
        '--w': r.width + 'px', '--h': r.height + 'px',
        '--dur': rand(6, 10).toFixed(2) + 's',
        '--flutter': rand(1.4, 2.6).toFixed(2) + 's',
        '--sway': rand(3, 10).toFixed(1) + 'px',
        '--hx': (dir * rand(2, 6)).toFixed(1) + 'px',
        '--dx': (dir * rand(20, 100)).toFixed(1) + 'px',
        '--dy': (s.bottom - r.top + rand(10, 50)).toFixed(1) + 'px',
        '--r0': (dir * rand(8, 25)).toFixed(0) + 'deg',
        '--r1': (dir * rand(140, 460)).toFixed(0) + 'deg',
      };
      fall.style.left = r.left - s.left + 'px';
      fall.style.top = r.top - s.top + 'px';
      for (const k in p) fall.style.setProperty(k, p[k]);
      fall.addEventListener('animationend', (e) => { if (e.target === fall) fall.remove(); });
      setTimeout(() => fall.remove(), 12000);   // backstop in case animationend never fires
      layer.appendChild(fall);
      g.classList.add('is-gone');
      setTimeout(() => {
        g.classList.remove('is-gone');
        g.classList.add('is-regrow');
        g.addEventListener('animationend', function done(e) {
          if (e.target !== g) return;
          g.classList.remove('is-regrow');
          g.removeEventListener('animationend', done);
        });
      }, rand(3500, 6500));
    }

    function schedule() {
      clearTimeout(timer);
      const paused = !visible || document.hidden;
      svg.classList.toggle('is-paused', paused);
      layer.classList.toggle('is-paused', paused);
      if (paused || calm.matches) return;
      timer = setTimeout(() => { dropLeaf(); schedule(); }, rand(1400, 3000));
    }

    // Reduced motion: jump straight to the finished, static logo (also if switched on mid-visit).
    function finish() {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      started = true;
      grow.setAttribute('r', MAX_R);
      svg.querySelectorAll('[clip-path]').forEach((n) => n.removeAttribute('clip-path'));
      word.removeAttribute('mask');
      leaves.forEach((g) => g.classList.remove('is-gone', 'is-regrow'));
      layer.textContent = '';
      svg.classList.add('is-growing', 'is-grown');
    }
    if (calm.matches) finish();
    calm.addEventListener('change', () => (calm.matches ? finish() : started && schedule()));

    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !started) startGrowth();
      else if (svg.classList.contains('is-grown')) schedule();
    }, { threshold: 0.25 }).observe(stage);
    document.addEventListener('visibilitychange', () => { if (svg.classList.contains('is-grown')) schedule(); });
  }
})();
