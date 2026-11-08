# Portfolio-Website

Engineering portfolio website for **Amir Suckra** — showcasing aerospace, electronics, CAD, and engineering coursework projects from Bergen County Technical High School – Teterboro.

## 📁 Site Structure

```
Portfolio-Website/
├── index.html                 # Home — hero, about preview, featured projects
├── about.html                 # Full bio, skills, education
├── projects.html              # Projects index — filterable grid of all projects
├── contact.html               # Contact form + contact info
├── projects/                  # Individual project detail pages (12 pages)
│   ├── airfoil-design.html
│   ├── cad-modeling.html
│   ├── puzzle-cube.html
│   ├── seaperch.html
│   ├── aerial-imaging.html
│   ├── electronic-music.html
│   ├── pinhole-camera.html
│   ├── safer-buildings.html
│   ├── digital-electronics.html
│   ├── multisim-circuitry.html
│   ├── aerospace-engineering-principles.html
│   └── introduction-to-aerospace-engineering.html
├── css/
│   └── style.css              # Global styles (dark mode, responsive, print)
├── js/
│   └── main.js                # Theme toggle, mobile nav, filters, contact form
└── assets/
    └── images/
        └── profile-placeholder.svg  # Replace with your photo
```

## 🚀 Getting Started

This is a **static, zero-dependency** site — no build step required.

### Local development
Open any HTML file directly in your browser, or serve with a local server:

```bash
# Using Python
python3 -m http.server 8000
# Then visit http://localhost:8000

# Using Node.js (if you have http-server)
npx http-server
```

## ✏️ Customizing Your Content

### 1. Replace placeholder text
Every page contains `<!-- TODO -->` style placeholder content marked with a `visually-hidden` paragraph or `todo-badge` badge. Look for:
- Profile photo: `assets/images/amir-suckra.webp` (home hero and About page)
- Resume: `assets/docs/Amir_Suckra_Resume.pdf` (public copy with street address and phone removed) plus page images `resume-page-1.webp` / `resume-page-2.webp` used by the in-page resume viewer. Re-export these if the resume changes.
- Project descriptions → edit each `projects/*.html` file
- Contact form → update the `action` URL in `contact.html` with your Formspree/Netlify Forms endpoint
- Social links → update the LinkedIn/GitHub URLs in the footer of each page

### 2. Add project images
Project card thumbnails use CSS gradients by default. To add real images, replace the `.project-card__thumb` div with an `` tag pointing to `assets/images/your-project.jpg`.

### 3. Theme
Dark mode is the default. A toggle in the header lets users switch to light mode; preference is saved in `localStorage`.

## 🌐 Deployment

### GitHub Pages (recommended)
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` / `/ (root)`
4. Your site will be live at `https://<your-username>.github.io/Portfolio-Website/`

## 📫 Contact

- **Email:** suckra.amir@gmail.com
- **LinkedIn:** linkedin.com/in/amir-suckra-32a355405
- **GitHub:** github.com/amir-suckra

---

*Built with semantic HTML5, modern CSS (CSS variables, dark mode, responsive grid), and vanilla JavaScript.*
# Portfolio-Website