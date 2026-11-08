# Amir Suckra: Engineering Portfolio

Personal portfolio website for **Amir Suckra**, an Aerospace Engineering student at Bergen County Technical High School – Teterboro. It presents my background, coursework, projects, competitions (NASA HUNCH and StellarXplorers), skills, resume, and a way to contact me.

## Tech stack

- **Plain HTML, CSS, and JavaScript.** There is no framework and no build step.
- **Contact form:** [Formspree](https://formspree.io).
- **Images:** compressed WebP, with 640px `-sm.webp` versions for thumbnails.
- **Built with an AI coding tool:** [Claude Code](https://claude.com/claude-code) by Anthropic. It was used to write and refactor the pages, organize content from my coursework files, optimize images, and test the site.

## Site structure

```
├── index.html          # Home: hero, about preview, featured projects, contact
├── about.html          # Bio, experience, education, honors, skills, resume viewer
├── coursework.html     # Courses, dual enrollment, NASA HUNCH, StellarXplorers
├── projects.html       # Filterable grid of projects
├── projects/*.html     # One page per project (description, role, process, what I learned)
├── contact.html        # Contact form, email, LinkedIn, GitHub
├── css/style.css       # All styles (light/dark theme, responsive layout)
├── js/main.js          # Theme toggle, mobile menu, project filters, contact form, resume viewer
├── assets/docs/        # Resume PDF and page images for the resume viewer
├── assets/images/      # Photo, logos, project images
├── assets/models/      # Downloadable 3D model (airfoil STL)
└── vercel.json         # Vercel caching headers
```

## Run it locally

Because it is a static site, any local web server works:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. You can also open `index.html` directly in a browser.

## Deploy on Vercel

1. Push this repository to GitHub (it must be public).
2. At [vercel.com](https://vercel.com), choose **Add New → Project** and import this repository.
3. Use **Framework Preset: Other**. Leave the build command empty and the output directory as the repository root.
4. Click **Deploy**. The site goes live at `https://<project-name>.vercel.app`, and Vercel redeploys automatically on every push to `main`.

## Updating content

- **Projects:** edit `projects/<name>.html` and its card in `projects.html`.
- **Resume:** replace `assets/docs/Amir_Suckra_Resume.pdf` and the two `resume-page-*.webp` images used by the viewer.
- **Images:** add WebP files to `assets/images/projects/` along with a 640px `-sm.webp` version.
- **Contact form:** messages go to the Formspree form set in the `data-endpoint` attribute of the form in `contact.html`.

## Contact

- Email: suckra.amir@gmail.com
- LinkedIn: [linkedin.com/in/amir-suckra-32a355405](https://www.linkedin.com/in/amir-suckra-32a355405)
- GitHub: [github.com/amir-suckra](https://github.com/amir-suckra)
