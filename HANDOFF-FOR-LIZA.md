# For Liza (and Liza's Claude) — what changed and how to work now

Hi Liza — Sahariar's Claude here. We connected your website into the CoLab OS.
This file is the full detail; the short version your Claude will always read
automatically is `CLAUDE.md` at the repo root.

## What we did (2 changes, chronological)

### 1. The contact form now feeds the CRM (already merged by you, PR #1)

- The form on `contact/index.html` posts to FormSubmit
  (`https://formsubmit.co/sahariar@colabglobal.org`) — activated and live.
- The newsletter box (`js/site.js`) subscribes for real via the same service.
- On the CoLab OS side, an engine reads that inbox: every enquiry becomes a
  proposed lead in the CRM that a human approves. Your website is the front
  door of the system now — first pipeline proven end to end with a test
  submission on 26 Aug.

### 2. Content and design are now separated (this commit)

New folder **`content/`** — the website's words and numbers as data:

| File | Feeds | Shape |
|---|---|---|
| `content/projects.json` | Projects page grid + homepage "glimpse" strip | array of `{name, cat[], desc, img, featured?}` — `featured: 1/2/3` picks and orders the homepage three |
| `content/stats.json` | Hero stat card + the four-number navy band | `{hero: {value, note}, band: [{count, suffix, label}] }` (exactly 4 band entries) |
| `content/testimonials.json` | "What Our Partners Say" | array of `{quote, name, org, logo}` |

What changed in your pages (design untouched, markup templates identical):

- `projects/index.html`: the inline `const projects = [...]` array became a
  `fetch('/colab/content/projects.json')`; your `renderProjects`, filters and
  modal all work unchanged. The two hardcoded testimonial cards became a
  `#testimonialGrid` container + a small renderer that reproduces your exact
  markup (same quote SVG, same alternating accent colours).
- `index.html`: the three hardcoded "glimpse" cards became `#featuredGrid` +
  a renderer using your exact card markup and your category chip colours; the
  stats band counters now take their numbers from `stats.json` (your count-up
  animation kept); the hero stat card got two ids so it updates from the same
  file.
- `.github/workflows/validate-content.yml`: every push that touches
  `content/` gets checked — files must parse as JSON and have the right
  shape. A typo can't silently blank a section on the live site.
- `CLAUDE.md`: the operating contract any Claude reads when opening this repo.

## How to work from now on

- **Words, numbers, projects, quotes → edit `content/*.json`.**
  "Add a project" = one new object in `projects.json`. Nothing else.
- **Design, layout, pages → yours, as always.** The HTML/CSS/JS is your lane.
- **Always `git pull` before starting** — three people's Claudes push here now
  (you, Sahariar, and later the OS itself).
- **Don't rename** the contact-form fields, the form's action URL, or the
  `content/` file keys — the CRM pipeline and the renderers read them.
- Pushing to `main` = live in about a minute. There is no staging.

### 3. The content is now REAL (27 Aug — sourced from the CRM + colabglobal.org)

- **Stats band** now carries real aggregates: 10+ research outputs, **24 completed
  engagements**, **1,378 workshop participants**, 15 partner organisations.
- **9 real engagements** added to `projects.json` (Impact Evaluation · WEP,
  PBL Toolkit · Education Above All, Design Sprint Playbooks · C4EC, Adversity
  Study · Shiksharth…). Only partners CoLab already names publicly are named;
  everything else stays inside the aggregate numbers.
- **5 real testimonials** (was 2) — including C4EC and Mantra4Change. The
  renderer now works without a logo (IDO has none).
- **Identity corrected everywhere**: CoLab is an independent research, design
  and innovation lab founded 2019, working across education, women's
  empowerment, livelihoods and environmental sustainability. The old
  "education lab under Mantra4Change / brand under MIE Design" lines are gone
  (24 references across 6 pages), and the About page quote is now the real
  mission, verbatim.
- **NEW `content/team.json`** — the real 9-person team (names, roles,
  one-line bios from colabglobal.org), ready for you to design a Team section
  on the About page whenever you like. That's a design task, so it's yours.
- Design ideas waiting for you (your lane): a Team section from `team.json`,
  and an Insights section — CoLab has real published articles on
  colabglobal.org (Rethinking Evidence, AI in Research, Most Significant
  Change…) that could be linked or mirrored.

## What comes next (so nothing surprises you)

- The CoLab OS will soon *write* to `content/` too: when a partnership is won
  in the CRM, Claude will draft it as a project/case-study entry, a human
  approves, and it lands here as a normal commit. Same rules, same files.
- Real content is still owed from the team (field photos, one result number
  per project, PDFs for Resources) — your design is ready for it.

Questions → Sahariar. And genuinely: the structure you built made this easy —
your projects page was already data-driven, we just moved the data into files.
