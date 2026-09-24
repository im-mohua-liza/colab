// CoLab journal: the post list and card templates, shared by the Journal page
// (/colab/journal/, full category carousels) and the Research page (latest-posts strip).
// Add a new post at the top of blogPosts; both pages pick it up.

const blogPosts = [
  { cat:"Evidence", title:"The Most Significant Change Technique: An Evidence Synthesis", desc:"A research snippet exploring the Most Significant Change technique as a tool for capturing real impact stories.", date:"17 July 2026", img:"/colab/images/insights/shikshagraha-campaign.webp", href:"/colab/journal/the-most-significant-change-technique-a-research-snippet/" },
  { cat:"Evidence", title:"Rethinking Evidence", desc:"A perspective on what counts as evidence in education — and why the definition matters.", date:"5 June 2026", img:"/colab/images/insights/rethinking-evidence.webp", href:"/colab/journal/rethinking-evidence/" },
  { cat:"Innovation", title:"A Third Dimension to a Public Good", desc:"Exploring what it takes to turn a solution into a true global public good.", date:"1 December 2025", img:"/colab/images/insights/public-good-dimension.webp", href:"/colab/journal/a-third-dimension-to-a-public-good/" },
  { cat:"Design", title:"Leaning Tower of Pisa | What Makes It Stand Strong?", desc:"A metaphor for structural resilience, and what it suggests about designing solutions built to last.", date:"1 December 2025", img:"/colab/images/journal/leaning-tower-of-pisa-what-makes-it-stand-strong.webp", href:"/colab/journal/leaning-tower-of-pisa-what-makes-it-stand-strong/" },
  { cat:"Evidence", title:"Collective Interest Is the Way to Build Evidence in Education | #Evidence 01", desc:"Why building evidence in education works best as a collective effort among stakeholders, not a solo pursuit.", date:"1 December 2025", img:"/colab/images/journal/collective-interest-is-the-way-to-build-evidence-in-education-evidence-01.webp", href:"/colab/journal/collective-interest-is-the-way-to-build-evidence-in-education-evidence-01/" },
  { cat:"Innovation", title:"Should We Make Education Work?", desc:"A critical look at what it actually means to make education systems work.", date:"1 December 2025", img:"/colab/images/journal/should-we-make-education-work.webp", href:"/colab/journal/should-we-make-education-work/" },
  { cat:"Evidence", title:"Is Research at the Top of the Hierarchy?", desc:"Examining where research really sits in how education decisions get made.", date:"1 December 2025", img:"/colab/images/journal/is-research-at-the-top-of-the-hierarchy.webp", href:"/colab/journal/is-research-at-the-top-of-the-hierarchy/" },
  { cat:"Education", title:"Highlights of Education in India 2022", desc:"A round-up of the year's major developments and trends across Indian education.", date:"1 December 2025", img:"/colab/images/journal/highlights-of-education-in-india-2022.webp", href:"/colab/journal/highlights-of-education-in-india-2022/" },
  { cat:"Education", title:"Holistic Education — at School or Home?", desc:"Weighing where comprehensive, whole-child learning is best supported.", date:"1 December 2025", img:"/colab/images/journal/holistic-education-at-school-or-home.webp", href:"/colab/journal/holistic-education-at-school-or-home/" },
  { cat:"Education", title:"Does \"Mentoring\" in the Education Sector Make Sense?", desc:"An honest look at how effective mentoring really is in education contexts.", date:"1 December 2025", img:"/colab/images/journal/does-mentoring-in-the-education-sector-make-sense.webp", href:"/colab/journal/does-mentoring-in-the-education-sector-make-sense/" },
  { cat:"Implementation", title:"Kalaburagi's Stint With Enabling Enriching Learning Experiences at Scale", desc:"A field story from implementation efforts to enrich learning at scale in Kalaburagi.", date:"1 December 2025", img:"/colab/images/journal/kalaburagis-stint-with-enabling-enriching-learning-experiences-at-scale.webp", href:"/colab/journal/kalaburagis-stint-with-enabling-enriching-learning-experiences-at-scale/" },
  { cat:"Innovation", title:"The Future of Communities: Sustainability and Innovation at the Heart of Resilience", desc:"A strategic vision for community development grounded in sustainability and innovation.", date:"27 November 2025", img:"/colab/images/journal/the-future-of-communities-sustainability-and-innovation-at-the-heart-of-resilience.webp", href:"/colab/journal/the-future-of-communities-sustainability-and-innovation-at-the-heart-of-resilience/" },
  { cat:"Innovation", title:"From Challenges to Change: Creating Resilient Communities Through Innovation and Inclusion", desc:"An approach to transformative community work built on innovation and inclusion.", date:"27 November 2025", img:"/colab/images/journal/from-challenges-to-change-creating-resilient-communities-through-innovation-and-inclusion.webp", href:"/colab/journal/from-challenges-to-change-creating-resilient-communities-through-innovation-and-inclusion/" },
  { cat:"Innovation", title:"Sustainable Solutions for Stronger Communities: The Power of Inclusive Innovation", desc:"How sustainability and community engagement combine to build stronger communities.", date:"27 November 2025", img:"/colab/images/journal/sustainable-solutions-for-stronger-communities-the-power-of-inclusive-innovation.webp", href:"/colab/journal/sustainable-solutions-for-stronger-communities-the-power-of-inclusive-innovation/" },
  { cat:"Innovation", title:"Building Resilience Through Collective Innovation and Collaboration", desc:"The collaborative mechanisms that help communities build lasting resilience.", date:"27 November 2025", img:"/colab/images/journal/building-resilience-through-collective-innovation-and-collaboration.webp", href:"/colab/journal/building-resilience-through-collective-innovation-and-collaboration/" },
  { cat:"Innovation", title:"Innovating Together: How Collaboration Fuels Community Resilience", desc:"How partnership dynamics drive resilience-building efforts on the ground.", date:"30 October 2025", img:"/colab/images/journal/innovating-together-how-collaboration-fuels-community-resilience.webp", href:"/colab/journal/innovating-together-how-collaboration-fuels-community-resilience/" },
];

// Webinar/workshop clips, testimonials, etc. Add real entries as { title, url, date, desc }
// (url: a YouTube watch/shorts link — thumbnail and card are generated automatically).
// Left empty until CoLab has titles/links to feature; the "Videos" row stays hidden until then.
const videoPosts = [
];

const categoryMeta = {
  Evidence:       { slug: 'evidence',       color: 'sky',      desc: 'Research notes and honest questions about what counts as evidence in education, and how it gets built.' },
  Innovation:     { slug: 'innovation',     color: 'gold',     desc: 'Field stories and ideas on what it takes to design solutions that actually hold up in communities.' },
  Design:         { slug: 'design',         color: 'cardinal', desc: 'Notes on structure and resilience: what makes a solution built to last.' },
  Education:      { slug: 'education',      color: 'sage',     desc: 'Perspectives on how education plays out at school, at home, and across the system.' },
  Implementation: { slug: 'implementation', color: 'clay',     desc: 'Stories from the field on taking a programme from design to scale.' },
  Videos:         { slug: 'videos',         color: 'sand',     desc: 'Webinars, workshop highlights and short clips from CoLab\'s work.' },
};

function getYouTubeId(url) {
  const m = (url || '').match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

function renderVideoCard(v) {
  const id = getYouTubeId(v.url);
  const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
  const visual = thumb
    ? `<div class="h-36 overflow-hidden relative">
         <img src="${thumb}" alt="${v.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
         <span class="absolute inset-0 flex items-center justify-center bg-navy/20 group-hover:bg-navy/35 transition">
           <span class="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg"><svg width="18" height="18" viewBox="0 0 24 24" fill="#073763"><path d="M8 5v14l11-7z"/></svg></span>
         </span>
       </div>`
    : `<div class="h-36 flex items-center justify-center bg-navy"><span class="tag text-gold">Video</span></div>`;
  return `
    <article class="reveal card-lift snap-start shrink-0 w-[260px] sm:w-[300px] bg-white rounded-2xl border hairline overflow-hidden flex flex-col group">
      <a href="${v.url}" target="_blank" rel="noopener" class="contents">
        ${visual}
        <div class="p-6 flex flex-col flex-1">
          <span class="text-xs text-navy/50 font-semibold mb-3">${v.date || ''}</span>
          <h4 class="text-base font-bold leading-snug text-navy mb-3">${v.title}</h4>
          <p class="text-[13px] text-navy/70 leading-relaxed flex-1">${v.desc || ''}</p>
          <span class="mt-4 text-sm font-semibold text-navy inline-flex items-center gap-2">Watch <span>→</span></span>
        </div>
      </a>
    </article>
  `;
}

function renderBlogCard(b) {
  const visual = b.img
    ? `<div class="h-36 overflow-hidden"><img src="${b.img}" alt="${b.title}" loading="lazy" class="img-reveal w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></div>`
    : `<div class="h-36 flex items-center justify-center bg-navy"><span class="tag text-gold">${b.cat}</span></div>`;
  return `
    <article class="reveal card-lift snap-start shrink-0 w-[260px] sm:w-[300px] bg-white rounded-2xl border hairline overflow-hidden flex flex-col group">
      ${visual}
      <div class="p-6 flex flex-col flex-1">
        <span class="text-xs text-navy/50 font-semibold mb-3">${b.date}</span>
        <h4 class="text-base font-bold leading-snug text-navy mb-3">${b.title}</h4>
        <p class="text-[13px] text-navy/70 leading-relaxed flex-1">${b.desc}</p>
        <a href="${b.href}" class="mt-4 text-sm font-semibold text-navy inline-flex items-center gap-2">Read More <span>→</span></a>
      </div>
    </article>
  `;
}

// Journal page: one carousel row per category, with category nav (mobile pills, desktop sidebar).
const blogCategoriesEl = document.getElementById('blogCategories');
if (blogCategoriesEl) {
  const navMobileEl = document.getElementById('blogCatNavMobile');
  const navDesktopEl = document.getElementById('blogCatNavDesktop');

  const categoriesInOrder = Object.keys(categoryMeta)
    .filter(cat => cat !== 'Videos')
    .map(cat => ({ cat, meta: categoryMeta[cat], posts: blogPosts.filter(b => b.cat === cat), render: renderBlogCard }))
    .concat([{ cat: 'Videos', meta: categoryMeta.Videos, posts: videoPosts, render: renderVideoCard }])
    .filter(group => group.posts.length)
    .sort((a, b) => b.posts.length - a.posts.length);

  categoriesInOrder.forEach(({ cat, meta, posts, render }) => {
    navMobileEl.insertAdjacentHTML('beforeend', `<a href="#cat-${meta.slug}" class="shrink-0 text-sm font-semibold text-navy/70 bg-paper border hairline rounded-full px-4 py-2 whitespace-nowrap">${cat}</a>`);
    navDesktopEl.insertAdjacentHTML('beforeend', `<a href="#cat-${meta.slug}" class="flex items-center gap-2.5 text-sm font-semibold text-navy/70 hover:text-navy py-2 transition"><span class="w-2 h-2 rounded-full bg-${meta.color} shrink-0"></span>${cat}<span class="ml-auto text-xs text-navy/35 font-normal">${posts.length}</span></a>`);

    const section = document.createElement('div');
    section.id = `cat-${meta.slug}`;
    section.className = 'scroll-mt-28 reveal';
    const needsCarousel = posts.length > 2;
    section.innerHTML = `
      <div class="flex items-center gap-3 mb-2">
        <span class="w-2.5 h-2.5 rounded-full bg-${meta.color}"></span>
        <h3 class="text-2xl font-bold text-navy">${cat}</h3>
        <span class="text-sm text-navy/35 font-semibold">${posts.length} post${posts.length > 1 ? 's' : ''}</span>
      </div>
      <p class="text-navy/60 max-w-xl mb-6">${meta.desc}</p>
      <div class="relative">
        <div class="carousel-row flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar" data-row="${meta.slug}">
          ${posts.map(render).join('')}
        </div>
        ${needsCarousel ? `
        <button type="button" class="carousel-nav-btn hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2" data-scroll="prev" data-target="${meta.slug}" aria-label="Show previous ${cat} posts">‹</button>
        <button type="button" class="carousel-nav-btn hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2" data-scroll="next" data-target="${meta.slug}" aria-label="Show more ${cat} posts">›</button>
        ` : ''}
      </div>
    `;
    blogCategoriesEl.appendChild(section);
  });

  document.querySelectorAll('.carousel-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = document.querySelector(`.carousel-row[data-row="${btn.dataset.target}"]`);
      if (!row) return;
      const card = row.querySelector('article');
      const step = card ? card.getBoundingClientRect().width + 24 : 300;
      row.scrollBy({ left: btn.dataset.scroll === 'next' ? step : -step, behavior: 'smooth' });
    });
  });
}

// Latest-posts strips (Research page, Home hub): three posts unless the element sets data-count.
const journalLatestEl = document.getElementById('journalLatest');
if (journalLatestEl) journalLatestEl.innerHTML = blogPosts.slice(0, Number(journalLatestEl.dataset.count) || 3).map(renderBlogCard).join('');

// Journal hero video: falls back to the static poster frame on reduced motion,
// or if the video fails to load or play for any reason.
(() => {
  const video = document.getElementById('journalHeroVideo');
  const poster = document.getElementById('journalHeroPoster');
  if (!video || !poster) return;
  const showPoster = () => { video.style.display = 'none'; poster.style.display = 'block'; };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { showPoster(); return; }
  video.addEventListener('error', showPoster);
  video.preload = 'auto';
  video.play().catch(showPoster);
})();
