/* techcadd Jalandhar — landing page interactions */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- sticky header shadow ---------- */
  var header = $('#header');
  var toTop = $('#toTop');

  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-stuck', y > 10);
    toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- mobile drawer ---------- */
  var burger = $('#burger');
  var drawer = $('#drawer');
  var scrim = $('#scrim');

  function setDrawer(open) {
    drawer.classList.toggle('is-open', open);
    scrim.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', function () {
    setDrawer(!drawer.classList.contains('is-open'));
  });
  scrim.addEventListener('click', function () { setDrawer(false); });
  $$('#drawer a').forEach(function (a) {
    a.addEventListener('click', function () { setDrawer(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });

  /* ---------- reveal on scroll ---------- */
  var revealables = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- animated counters ---------- */
  var counters = $$('[data-count]');
  function runCounter(el) {
    var target = parseFloat(el.dataset.count);
    var dec = parseInt(el.dataset.dec || '0', 10);
    var suffix = el.dataset.suffix || '';
    var start = performance.now();
    var dur = 1600;

    function frame(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var value = target * eased;
      el.textContent = (dec ? value.toFixed(dec) : Math.round(value).toLocaleString('en-IN')) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
  }

  /* ---------- technology tabs ---------- */
  var tabs = $$('.ttab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.dataset.tab;
      tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
      $$('.tpanel').forEach(function (p) {
        p.classList.toggle('is-active', p.dataset.panel === key);
      });
    });
  });

  /* ---------- FAQ: one open at a time ---------- */
  var accs = $$('.acc');
  accs.forEach(function (acc) {
    acc.addEventListener('toggle', function () {
      if (!acc.open) return;
      accs.forEach(function (other) { if (other !== acc) other.open = false; });
    });
  });

  /* ---------- enquiry form ---------- */
  var form = $('#demoForm');
  var note = $('#formNote');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = (data.get('name') || '').toString().trim();
    var phone = (data.get('phone') || '').toString().trim();

    if (name.length < 2) {
      note.textContent = 'Please enter your name.';
      note.classList.add('is-error');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      note.textContent = 'Please enter a valid 10-digit mobile number.';
      note.classList.add('is-error');
      return;
    }

    note.classList.remove('is-error');
    note.textContent = 'Thanks, ' + name.split(' ')[0] + '! A counsellor will call you shortly.';
    form.reset();
  });

  /* ---------- footer year ---------- */
  $('#year').textContent = new Date().getFullYear();

  /* ---------- active nav link on scroll ---------- */
  var sections = ['about', 'categories', 'courses', 'why', 'reviews', 'faq', 'blogs']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = $$('.nav__link[href^="#"]');

  if ('IntersectionObserver' in window) {
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = '#' + entry.target.id;
        navLinks.forEach(function (l) {
          l.classList.toggle('is-active', l.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { sio.observe(s); });
  }
})();
