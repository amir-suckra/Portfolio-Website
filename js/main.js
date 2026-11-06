/*
 * Portfolio-Website — Shared JavaScript
 * Theme toggle, mobile nav, contact form, project filtering
 */
(function () {
  'use strict';

  const themeToggle = document.querySelector('.theme-toggle');
  const htmlEl = document.documentElement;
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) {
    htmlEl.setAttribute('data-theme', storedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlEl.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
  }

  const hamburger = document.querySelector('.nav__hamburger');
  const navList = document.querySelector('.nav__list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isOpen);
      navList.classList.toggle('nav__list--open');
    });
    document.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        navList.classList.remove('nav__list--open');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterBtns.forEach((b) => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');
        projectCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          const show = filter === 'all' || category === filter;
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
          setTimeout(() => {
            if (show) {
              card.style.display = '';
              void card.offsetWidth;
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            } else {
              card.style.display = 'none';
            }
          }, 200);
        });
      });
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            showFormMessage('Thanks! Your message has been sent.', 'success');
            contactForm.reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch((error) => {
          console.error(error);
          showFormMessage('Oops, something went wrong. Please email me directly.', 'error');
        });
    });
  }

  function showFormMessage(text, type) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.className = `form-message form-message--${type}`;
    formMessage.style.display = 'block';
    setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
  }

  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.project-card, .section__header, .skill__category, .contact-item').forEach((el) => {
    observer.observe(el);
  });
})();

  function highlightNav() {
    if (sections.length === 0 || navLinks.length === 0) return;
    const scrollY = window.pageYOffset;
    let current = null;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('nav__link--active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('nav__link--active');
      }
    });
  }

  if (sections.length > 0) {
    window.addEventListener('scroll', highlightNav);
    highlightNav();
  }
