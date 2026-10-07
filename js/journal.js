// CoLab journal: the post list and card templates, shared by the Journal page
// (/colab/journal/, full category carousels) and the Research page (latest-posts strip).
// Add a new post at the top of blogPosts; both pages pick it up.

const blogPosts = [
  { cat:"Evidence", title:"The Most Significant Change Technique: An Evidence Synthesis", desc:"1. Overview of the Most Significant Change (MSC) Technique The Most Significant Change (MSC) technique is a form of participatory monitoring and evaluation that relies on the collection, discussion, and systematic…", date:"17 July 2026", img:"/colab/images/insights/shikshagraha-campaign.webp", href:"/colab/journal/the-most-significant-change-technique-a-research-snippet/" },
  { cat:"Evidence", title:"Rethinking Evidence", desc:"RETHINKING EVIDENCE – From Data Collection to Collective Action “Evidence means different things to different people, shaped by where you sit, your role, and your accountability. The hardest part of working with…", date:"5 June 2026", img:"/colab/images/insights/rethinking-evidence.webp", href:"/colab/journal/rethinking-evidence/" },
  { cat:"Innovation", title:"A Third Dimension to a Public Good", desc:"How many times do you visit wikipedia in a week? Have you ever thought of how wikipedia came into existence? Yes! Its tagline ‘The Free Encyclopedia’ tells its story. Encyclopedia Britannica aimed to make a…", date:"1 December 2025", img:"/colab/images/insights/public-good-dimension.webp", href:"/colab/journal/a-third-dimension-to-a-public-good/" },
  { cat:"Design", title:"Leaning Tower of Pisa | What makes it stand strong?", desc:"Do you know the reason for how the leaning tower of Pisa is standing strong? Are all the interventions in education sector this strong? It dates back to 1173 (12th century) when the Republic of Pisa set to increase…", date:"1 December 2025", img:"/colab/images/journal/leaning-tower-of-pisa-what-makes-it-stand-strong.webp", href:"/colab/journal/leaning-tower-of-pisa-what-makes-it-stand-strong/" },
  { cat:"Evidence", title:"Collective interest is the way to build evidence in education | #Evidence 01", desc:"CoLab dreams of ‘a global community for education equity’. Because we believe that it is where everything starts. A shared vision with different approaches to achieve it will help bring in constructive changes that…", date:"1 December 2025", img:"/colab/images/journal/collective-interest-is-the-way-to-build-evidence-in-education-evidence-01.webp", href:"/colab/journal/collective-interest-is-the-way-to-build-evidence-in-education-evidence-01/" },
  { cat:"Innovation", title:"Should we make education work?", desc:"Time to decide which question we are exploring an answer for! Pause and reflect on these 3 questions before reading further: Does knowledge about ‘what works’ exists? Is teaching an intervention and learning an…", date:"1 December 2025", img:"/colab/images/journal/should-we-make-education-work.webp", href:"/colab/journal/should-we-make-education-work/" },
  { cat:"Evidence", title:"Is research at the top of the hierarchy?", desc:"Is education being driven by the research or researchers? Around 8% of the total workforce is in the education sector. All of us want every child to have an enriching learning experience. While that is the world we…", date:"1 December 2025", img:"/colab/images/journal/is-research-at-the-top-of-the-hierarchy.webp", href:"/colab/journal/is-research-at-the-top-of-the-hierarchy/" },
  { cat:"Education", title:"Highlights of Education in India 2022", desc:"Digitalisation of Education The thrust for greater digitalization of education has been made by the government through several initiatives, such as DIKSHA (Digital Infrastructure for Knowledge Sharing), online MOOC…", date:"1 December 2025", img:"/colab/images/journal/highlights-of-education-in-india-2022.webp", href:"/colab/journal/highlights-of-education-in-india-2022/" },
  { cat:"Education", title:"Holistic Education – at School or Home?", desc:"Much different than making school home or making home a school. The future of education is here or it is on its way. A new type of ‘School’ will mark the education system in the next few years: homeschool. The…", date:"1 December 2025", img:"/colab/images/journal/holistic-education-at-school-or-home.webp", href:"/colab/journal/holistic-education-at-school-or-home/" },
  { cat:"Education", title:"Does “Mentoring” in the education sector make sense?", desc:"This is a question Rafi asked me recently at work. Rafi leads Mantra4Change’s team that works with district-level leadership in Tumkur. His question came from concerns about a low cluster head-to-teacher ratio (even…", date:"1 December 2025", img:"/colab/images/journal/does-mentoring-in-the-education-sector-make-sense.webp", href:"/colab/journal/does-mentoring-in-the-education-sector-make-sense/" },
  { cat:"Implementation", title:"Kalaburagi’s Stint with Enabling Enriching Learning Experiences at Scale", desc:"*Pragatiya Hejje is an Annual District-level Celebration Event for School Leaders in Karnataka Today, at the lunch table at the Mantra4Change office in Bengaluru, Sindhu from the Kalaburagi Team exclaimed joyfully,…", date:"1 December 2025", img:"/colab/images/journal/kalaburagis-stint-with-enabling-enriching-learning-experiences-at-scale.webp", href:"/colab/journal/kalaburagis-stint-with-enabling-enriching-learning-experiences-at-scale/" },
  { cat:"Innovation", title:"The Future of Communities: Sustainability and Innovation at the Heart of Resilience", desc:"Introduction In a world where uncertainty is a constant, the resilience of a community depends on its ability to adapt and grow in the face of adversity. However, resilience doesn’t come from isolation—it stems from…", date:"27 November 2025", img:"/colab/images/journal/the-future-of-communities-sustainability-and-innovation-at-the-heart-of-resilience.webp", href:"/colab/journal/the-future-of-communities-sustainability-and-innovation-at-the-heart-of-resilience/" },
  { cat:"Innovation", title:"From Challenges to Change: Creating Resilient Communities Through Innovation and Inclusion", desc:"Introduction In a world where uncertainty is a constant, the resilience of a community depends on its ability to adapt and grow in the face of adversity. However, resilience doesn’t come from isolation—it stems from…", date:"27 November 2025", img:"/colab/images/journal/from-challenges-to-change-creating-resilient-communities-through-innovation-and-inclusion.webp", href:"/colab/journal/from-challenges-to-change-creating-resilient-communities-through-innovation-and-inclusion/" },
  { cat:"Innovation", title:"Sustainable Solutions for Stronger Communities: The Power of Inclusive Innovation", desc:"Introduction In a world where uncertainty is a constant, the resilience of a community depends on its ability to adapt and grow in the face of adversity. However, resilience doesn’t come from isolation—it stems from…", date:"27 November 2025", img:"/colab/images/journal/sustainable-solutions-for-stronger-communities-the-power-of-inclusive-innovation.webp", href:"/colab/journal/sustainable-solutions-for-stronger-communities-the-power-of-inclusive-innovation/" },
  { cat:"Innovation", title:"Building Resilience Through Collective Innovation and Collaboration", desc:"Introduction In a world where uncertainty is a constant, the resilience of a community depends on its ability to adapt and grow in the face of adversity. However, resilience doesn’t come from isolation—it stems from…", date:"27 November 2025", img:"/colab/images/journal/building-resilience-through-collective-innovation-and-collaboration.webp", href:"/colab/journal/building-resilience-through-collective-innovation-and-collaboration/" },
  { cat:"Innovation", title:"Innovating Together: How Collaboration Fuels Community Resilience", desc:"Introduction In today’s rapidly changing world, community resilience is more crucial than ever. From natural disasters to economic upheavals, communities are constantly facing challenges. However, the power of…", date:"30 October 2025", img:"/colab/images/journal/innovating-together-how-collaboration-fuels-community-resilience.webp", href:"/colab/journal/innovating-together-how-collaboration-fuels-community-resilience/" },
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

// Related-reading strip on individual article pages: same-category posts first,
// backfilled with other posts (in list order) if the category is small.
const relatedPostsEl = document.getElementById('relatedPosts');
if (relatedPostsEl) {
  const current = blogPosts.find(b => b.href === location.pathname);
  if (current) {
    const sameCategory = blogPosts.filter(b => b !== current && b.cat === current.cat);
    const others = blogPosts.filter(b => b !== current && b.cat !== current.cat);
    const related = sameCategory.concat(others).slice(0, 3);
    relatedPostsEl.innerHTML = related.map(renderBlogCard).join('');
  }
}

// (The Journal hero video and its poster fallback are handled by js/site.js, like every hero video.)
