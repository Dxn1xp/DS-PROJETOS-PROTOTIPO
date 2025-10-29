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
