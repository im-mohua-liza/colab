# CoLab website — operating contract

This repo is the public website of CoLab Global Consulting (live at
https://im-mohua-liza.github.io/colab/) — and it is **part of the CoLab OS**:
a connected system where the CRM, the engines, and this website all work
together through Claude. Whoever you are (Liza's Claude, Sahariar's, Akhil's),
read this before changing anything.

## The one big rule

**Content and design are separated.**

- **Content** (what the site *says*) lives in `content/*.json`:
  - `content/projects.json` — every project card (name, categories, blurb,
    image, optional `featured: 1..3` for the homepage strip)
  - `content/stats.json` — the hero stat card + the four-number stats band
  - `content/testimonials.json` — partner quotes
  To change words, numbers, projects, quotes: **edit the JSON, never the HTML.**
  The pages fetch these files and render them (design lives in the page markup
  the JS templates replicate).
- **Design** (how it *looks*) is the HTML/CSS/JS — it belongs to **Mohua Liza**.
  Structural or visual changes are her lane; others propose, she decides.

## Load-bearing — do not break

1. **The contact form** (`contact/index.html`) posts to
   `https://formsubmit.co/sahariar@colabglobal.org`. The field names
   (`name`, `email`, `organisation`, `message`) and the hidden `_`-fields are
   read by the CoLab OS engine, which turns every submission into a proposed
   CRM lead. Restyle freely; renaming/removing fields or the action URL breaks
   the lead pipeline.
2. **The newsletter box** (in `js/site.js`) posts to the same inbox via
   FormSubmit AJAX. Same rule.
3. **JSON validity** — a broken `content/*.json` file makes a section render
   empty. A GitHub Action checks every push; don't bypass it, and keep the
   files valid JSON (no comments, no trailing commas).
4. **Tailwind is compiled** (`css/tailwind.css`). If you introduce NEW utility
   classes in JS-generated markup, they must already exist in the compiled CSS
   or they silently do nothing — prefer reusing the classes already used for
   the same component.

## Working rules (same five beats as the whole OS)

- **Pull before you work** — several people push here. Start every session
  with `git pull`.
- **Preview → yes** — show the human what will change before writing it.
  For content edits: show old vs new values. For design: describe or render.
- Pushing to `main` deploys: GitHub Pages rebuilds the live site in about a
  minute. There is no staging — treat every push as production.
- Commit messages: say what changed in plain words.

## Who is who

- **Mohua Liza** — built and owns the design. github.com/im-mohua-liza
- **Sahariar Mody** — CoLab OS operator, collaborator here. github.com/mody-sahariar1
- The CoLab OS lives in `mody-sahariar1/colab-operating-system` (private):
  CRM, engines, work queue, diary. This site feeds it (form → leads) and will
  receive from it (wins → case studies, planned).
