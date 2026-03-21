/* ── Argus Panoptes — script.js ───────────────────────────────── */

(function () {
  'use strict';

  /* ── Page entry animation ─────────────────────────────────── */
  function revealPage() {
    const wrapper = document.querySelector('.page-wrapper');
    if (!wrapper) return;
    // Force a reflow so the initial state registers before the class is added
    wrapper.getBoundingClientRect();
    requestAnimationFrame(() => {
      wrapper.classList.add('visible');
    });
  }

  /* ── Active nav link ──────────────────────────────────────── */
  function setActiveNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ── Animated page-exit transitions ──────────────────────── */
  function bindNavTransitions() {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      // Only handle local html links; skip anchors, mailto, external
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('http') ||
        href.startsWith('//')
      ) return;

      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const wrapper = document.querySelector('.page-wrapper');
        if (!wrapper) { location.href = target; return; }

        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(-12px)';
        wrapper.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

        setTimeout(() => {
          location.href = target;
        }, 260);
      });
    });
  }

  /* ── Contact form: prevent default submit & show feedback ─── */
  function bindContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit');
      const note = form.querySelector('.form-note');
      btn.textContent = 'Message Sent';
      btn.style.background = 'var(--green)';
      btn.style.color = 'var(--black)';
      btn.disabled = true;
      if (note) note.textContent = 'Your message has been recorded. We\'ll be in touch.';
      form.reset();
    });
  }

  /* ── Roadmap: intersection observer for phase reveal ─────── */
  function bindRoadmapReveal() {
    const phases = document.querySelectorAll('.phase');
    if (!phases.length) return;

    if (!('IntersectionObserver' in window)) {
      phases.forEach(p => p.style.opacity = '1');
      return;
    }

    phases.forEach(phase => {
      phase.style.opacity = '0';
      phase.style.transform = 'translateX(-12px)';
      phase.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    phases.forEach(phase => obs.observe(phase));
  }

  /* ── Init ──────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    revealPage();
    setActiveNav();
    bindNavTransitions();
    bindContactForm();
    bindRoadmapReveal();
  });
})();
