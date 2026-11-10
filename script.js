(function () {
  'use strict';

  // Ano do rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Cabeçalho: fundo sólido após rolar
  var header = document.querySelector('.header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('menu');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  menuBtn.addEventListener('click', function () {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // FAQ (accordion): um item aberto por vez
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.acc__btn'));
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var willOpen = btn.getAttribute('aria-expanded') !== 'true';
      buttons.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.acc').classList.remove('is-open');
      });
      if (willOpen) {
        btn.setAttribute('aria-expanded', 'true');
        btn.closest('.acc').classList.add('is-open');
      }
    });
  });

  // Animações de entrada
  var items = document.querySelectorAll('.reveal');
  window.__revealReady = true;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // pequeno escalonamento entre irmãos que entram juntos
        var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
          return c.classList.contains('reveal');
        });
        el.style.transitionDelay = Math.min(siblings.indexOf(el), 5) * 80 + 'ms';
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) {
      // O que já está na tela ao carregar aparece de imediato, sem depender do observer
      if (el.getBoundingClientRect().top < window.innerHeight) {
        var first = Array.prototype.filter.call(el.parentElement.children, function (c) {
          return c.classList.contains('reveal');
        });
        el.style.transitionDelay = Math.min(first.indexOf(el), 5) * 80 + 'ms';
        el.classList.add('is-visible');
      } else {
        io.observe(el);
      }
    });
  }

  // Botão flutuante aparece depois do início da página
  var floatWa = document.querySelector('.float-wa');
  function toggleFloat() {
    floatWa.classList.toggle('is-visible', window.scrollY > 320);
  }
  toggleFloat();
  window.addEventListener('scroll', toggleFloat, { passive: true });
})();
