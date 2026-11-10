# Amir Suckra: Engineering Portfolio

Portfolio site for Amir Suckra, an Aerospace Engineering student at Bergen County Technical High School – Teterboro. It covers my projects, coursework, competitions (NASA HUNCH and StellarXplorers), skills, and resume, and includes a playable version of my AP CSP game, BlockBreak.

**Stack:** plain HTML, CSS, and JavaScript, with no build step. The contact form uses [Formspree](https://formspree.io).
**Built with:** [Claude Code](https://claude.com/claude-code) (AI coding tool).

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Import the repo at [vercel.com](https://vercel.com) (**Add New → Project**, Framework Preset: **Other**, no build command). Every push to `main` redeploys the site.

## Structure

```
index.html, about.html, coursework.html, projects.html, contact.html
projects/          one page per project
css/style.css      styles (light/dark, responsive)
js/main.js         theme, menu, filters, contact form, resume viewer, game launcher
assets/            images, resume, videos, BlockBreak game, airfoil STL
vercel.json        cache headers
```

## Updating

- **Images:** add WebP files plus a 640px `-sm.webp` copy for thumbnails.
- **Resume:** replace the PDF and the two `resume-page-*.webp` images in `assets/docs/`.
- **CSS, JS, or game changes:** bump the `?v=` number where the file is referenced so returning visitors get the new version.
