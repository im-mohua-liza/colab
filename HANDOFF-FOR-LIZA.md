# READ ME FIRST — briefing for Liza's Claude (drop this in before any website change)

You are working on the **live public website of CoLab Global Consulting**
(https://im-mohua-liza.github.io/colab/). This repo is not a standalone site
anymore — it is one organ of the **CoLab OS**, a connected system where the
CRM, an automation engine, and this website talk to each other. Changes here
have consequences beyond this repo. Read all of this before editing anything.

---

## 1. How the site works now (architecture)

**Content and design are separated.**

- **`content/*.json` — the words and numbers.** The pages fetch these files
  and render them:

| File | What it feeds | Shape |
|---|---|---|
| `content/projects.json` | Projects page grid + the homepage "glimpse" strip | array of `{name, cat[], desc, img, featured?}` — `featured: 1/2/3` picks and orders the homepage three |
| `content/stats.json` | Hero stat card + the four-number navy stats band | `{hero:{value,note}, band:[{count,suffix,label}]}` — exactly 4 band entries |
| `content/testimonials.json` | "What Our Partners Say" | array of `{quote, name, org, logo}` — logo may be `""` |
| `content/team.json` | "The team behind the work" on About | array of `{name, role, bio}` |

- **HTML/CSS/JS — the design.** Owned by **Mohua Liza**. Layout, styling,
  new sections, visual changes: her lane.

**To change what the site says → edit the JSON. Never hand-edit the
rendered sections in HTML** (projects grid, testimonials, team cards,
stats numbers, homepage glimpse) — they are overwritten by the JSON at load.

## 2. Three other Claudes push to this repo — always pull first

1. **Liza's Claude** (you) — design and structure.
2. **Sahariar's Claude** — content edits by chat, on request.
3. **The CoLab OS engine** — automated commits: when a project is completed
   in the CRM and a human approves, the engine adds it to `projects.json`
   and pushes. These commits look like `engine: website update (approved)`.
   They are legitimate. Do not revert them.

Therefore: **start EVERY session with `git pull`.** Pushing to `main`
deploys the live site in ~1 minute. There is no staging environment.

## 3. Load-bearing — breaking these breaks the business pipeline

1. **Contact form** (`contact/index.html`): posts to
   `https://formsubmit.co/sahariar@colabglobal.org`. The field names
   (`name`, `email`, `organisation`, `message`) and hidden `_`-fields are
   parsed by the OS engine — every submission becomes a proposed CRM lead.
   Restyle freely; never rename fields or change the action URL.
2. **Newsletter box** (`js/site.js`): posts to the same inbox via AJAX.
   Same rule.
3. **`content/` keys and file names**: renderers on the pages AND the OS
   engine read them. Do not rename files or keys.
4. **JSON validity**: a GitHub Action (`validate-content.yml`) checks every
   push touching `content/`. Keep JSON strict — no comments, no trailing
   commas.
5. **Compiled Tailwind** (`css/tailwind.css`): any class used in
   JS-generated markup must already exist in the compiled CSS or it silently
   does nothing. When generating markup, reuse classes already used for the
   same kind of component. If you add genuinely new classes, recompile.

## 4. Facts that are now locked (do not reintroduce old text)

- CoLab is an **independent research, design and innovation lab, founded
  2019**, working across **education, women's empowerment, livelihoods and
  environmental sustainability**. It is NOT "an education lab under
  Mantra4Change" and NOT "a brand under MIE Design Private Limited" — those
  old lines were removed everywhere on 27 Aug. Never bring them back.
- The About page quote is CoLab's real mission, verbatim. Keep it.
- Stats are real CRM aggregates (24 completed engagements, 1,378 workshop
  participants…). They update through the OS engine — don't invent numbers.
- **Privacy line (hard rule): only these 15 publicly-acknowledged partners
  may ever be NAMED on the site** — Alohomora, Centre for Equity Action on
  Integrated Development, Centre for Exponential Change, ChildAid Network,
  Education Above All, EduWeave Foundation, India Foundation for Education
  Transformation, Key Education Foundation, Liechtenstein Languages, Makkala
  Jagriti, Mantra4Change, Odisha Rising Foundation, Shikshagraha, Shiksharth,
  Women's Education Project. All other client work stays inside aggregate
  numbers. Never add a client name that is not on this list.

## 5. How to work (the ritual)

1. `git pull`
2. Show the human what will change **before** writing it (old vs new).
3. Make the change (JSON for content, HTML/CSS for design).
4. If you touched content JSON: check it parses.
5. Commit with a plain-words message, push. Live in ~1 minute — treat every
   push as production.

## 6. Open design tasks (Liza's lane, whenever she chooses)

- **Team photos**: add a `photo` field to `team.json` entries and extend the
  About-page team renderer (currently initials tiles) to prefer photos.
- **Insights section**: CoLab has real published articles on colabglobal.org
  (Rethinking Evidence, AI in Research, Most Significant Change…) worth
  linking or mirroring.
- **Events strip**, richer Resources (real PDFs), and real field photography
  from the team — content is being gathered.

## 7. People

- **Mohua Liza** — designer & builder of this site (github.com/im-mohua-liza)
- **Sahariar Mody** — CoLab OS operator, collaborator (github.com/mody-sahariar1)
- The OS itself lives in `mody-sahariar1/colab-operating-system` (private).
  Questions about the engine, the CRM, or anything in this file → Sahariar.
