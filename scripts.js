// scripts.js - interação básica: menu mobile, smooth-scroll, lightbox, formulário demo

document.addEventListener('DOMContentLoaded', () => {
  // ano automático
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // toggle menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // smooth scroll para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // fecha menu mobile se aberto
        if (navLinks && navLinks.classList.contains('open')) navLinks.classList.remove('open');
      }
    });
  });

  // Lightbox da galeria
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const full = img.dataset.full || img.src;
      if (lightbox && lightboxImg) {
        lightboxImg.src = full;
        lightbox.setAttribute('aria-hidden', 'false');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.src = '';
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
      }
    });
  }

  // formulário demo (não envia, apenas feedback)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensagem simulada enviada! Substitua por integração real se quiser enviar de verdade.');
      form.reset();
    });
  }
});



// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Ano no footer
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // NAV TOGGLE
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navLinks.setAttribute('aria-hidden', !open);
  });

  // LIGHTBOX PARA A GALERIA
  const galleryImgs = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  lightboxClose?.addEventListener('click', () => {
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.src = '';
    }
  });

  // REVEAL ON SCROLL (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => io.observe(r));

  // Add .reveal to larger blocks for animation
  ['.congresso-aprovado', '.about', '.programacao-evento', '.gallery', '.footer'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
  });

  // Small micro animation for CTA pulse when scrolled into view
  const cta = document.querySelector('.cta-btn');
  if (cta) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          cta.animate([
            { transform: 'translateY(0) scale(1)' },
            { transform: 'translateY(-3px) scale(1.02)' },
            { transform: 'translateY(0) scale(1)' }
          ], { duration: 900, iterations: 1, easing: 'ease-out' });
          ctaObserver.unobserve(cta);
        }
      });
    }, { threshold: 0.8 });
    ctaObserver.observe(cta);
  }

  // Accessibility: close nav with Escape key and close lightbox with Esc
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navLinks.setAttribute('aria-hidden', 'true');
      }
      if (lightbox && lightbox.getAttribute('aria-hidden') === 'false') {
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
      }
    }
  });
});

