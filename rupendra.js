/* Rupendra - single-page site interactions */
(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  function closeNav() {
    if (!navToggle || !primaryNav) return;
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }

  function openNav() {
    if (!navToggle || !primaryNav) return;
    primaryNav.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close menu');
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      if (primaryNav.classList.contains('is-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close the drawer after choosing a destination.
    primaryNav.addEventListener('click', function (evt) {
      var link = evt.target.closest('a');
      if (link) closeNav();
    });

    // Reset the drawer when returning to desktop widths.
    var mq = window.matchMedia('(min-width: 821px)');
    var onChange = function (e) { if (e.matches) closeNav(); };
    if (mq.addEventListener) {
      mq.addEventListener('change', onChange);
    } else if (mq.addListener) {
      mq.addListener(onChange);
    }
  }

  /* ---------- Smooth scroll with sticky-header offset ---------- */
  var header = document.getElementById('siteHeader');

  function scrollToTarget(target) {
    var headerH = header ? header.offsetHeight : 0;
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerH + 1;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (evt) {
      var hash = anchor.getAttribute('href');
      if (!hash || hash === '#' || hash.length < 2) return;
      var target = document.getElementById(hash.slice(1));
      if (!target) return;
      evt.preventDefault();
      scrollToTarget(target);
      if (typeof target.setAttribute === 'function' && !target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- Animated stat counters ---------- */
  function formatNumber(value, decimals) {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }
    return Math.round(value).toLocaleString('en-US');
  }

  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var divide = parseFloat(el.getAttribute('data-divide')) || 1;
    var decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var finalValue = target / divide;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      el.textContent = formatNumber(finalValue, decimals) + suffix;
      return;
    }

    var duration = 1600;
    var start = null;

    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNumber(finalValue * eased, decimals) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = formatNumber(finalValue, decimals) + suffix;
      }
    }

    window.requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('.stat-card__num[data-count]');
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var counterObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { counterObserver.observe(el); });
    } else {
      counters.forEach(runCounter);
    }
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lastFocused = null;

  function openLightbox(src, caption, altText) {
    if (!lightbox || !lightboxImg) return;
    lastFocused = document.activeElement;
    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', altText || caption || 'Content preview');
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightbox.removeAttribute('hidden');
    document.body.classList.add('is-locked');
    var closeBtn = lightbox.querySelector('.lightbox__close');
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute('hidden', '');
    document.body.classList.remove('is-locked');
    if (lightboxImg) {
      lightboxImg.setAttribute('src', '');
      lightboxImg.setAttribute('alt', '');
    }
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  document.querySelectorAll('.gallery__open').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var full = btn.getAttribute('data-full');
      var caption = btn.getAttribute('data-caption');
      var img = btn.querySelector('img');
      var alt = img ? img.getAttribute('alt') : '';
      if (full) openLightbox(full, caption, alt);
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', function (evt) {
      if (evt.target.closest('[data-close]')) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (lightbox && !lightbox.hasAttribute('hidden')) {
        closeLightbox();
      } else if (primaryNav && primaryNav.classList.contains('is-open')) {
        closeNav();
        if (navToggle) navToggle.focus();
      }
    }
  });

  /* ---------- Form validation ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(field, message) {
    var errorEl = document.querySelector('.field__error[data-for="' + field.id + '"]');
    if (errorEl) errorEl.textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function validateField(field) {
    var value = (field.value || '').trim();
    if (field.hasAttribute('required') && !value) {
      setError(field, 'This field is required.');
      return false;
    }
    if (field.type === 'email' && value && !EMAIL_RE.test(value)) {
      setError(field, 'Please enter a valid email address.');
      return false;
    }
    setError(field, '');
    return true;
  }

  var collabForm = document.getElementById('collabForm');
  var formStatus = document.getElementById('formStatus');

  if (collabForm) {
    var collabFields = collabForm.querySelectorAll('input, textarea');
    collabFields.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
    });

    collabForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var valid = true;
      var firstInvalid = null;
      collabFields.forEach(function (field) {
        if (!validateField(field)) {
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!valid) {
        if (formStatus) {
          formStatus.textContent = 'Please fix the highlighted fields.';
          formStatus.classList.remove('is-success');
          formStatus.classList.add('is-error');
        }
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (formStatus) {
        formStatus.textContent = 'Thanks! Your enquiry has been noted. Rupendra will reply within 48 hours. (Demo form - connect a backend to send.)';
        formStatus.classList.remove('is-error');
        formStatus.classList.add('is-success');
      }
      collabForm.reset();
      collabFields.forEach(function (field) { field.setAttribute('aria-invalid', 'false'); });
    });
  }

  var newsForm = document.getElementById('newsForm');
  var newsStatus = document.getElementById('newsStatus');

  if (newsForm) {
    var newsEmail = document.getElementById('newsEmail');
    newsForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var value = newsEmail ? (newsEmail.value || '').trim() : '';
      if (!value || !EMAIL_RE.test(value)) {
        if (newsStatus) {
          newsStatus.textContent = 'Please enter a valid email address.';
          newsStatus.classList.remove('is-success');
          newsStatus.classList.add('is-error');
        }
        if (newsEmail) newsEmail.focus();
        return;
      }
      if (newsStatus) {
        newsStatus.textContent = 'You are on the list. Watch your inbox for the next drop. (Demo form.)';
        newsStatus.classList.remove('is-error');
        newsStatus.classList.add('is-success');
      }
      newsForm.reset();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
