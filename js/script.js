const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));




    (() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion) return;

      document.body.classList.add('page-loaded');

      const revealSelectors = [
        '.section',
        '.fr-contact-section',
        '.footer',
        '.about-title',
        '.about-content',
        '.stack-row',
        '.principles',
        '.project-card',
        '.timeline article',
        '.fr-contact-item'
      ];

      const elements = document.querySelectorAll(revealSelectors.join(','));
      elements.forEach((el) => el.classList.add('reveal'));

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      });

      elements.forEach((el) => observer.observe(el));
    })();
