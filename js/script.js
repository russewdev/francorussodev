/* =========================================================
   MOBILE MENU
========================================================= */

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {

  toggle.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    toggle.setAttribute(
      'aria-expanded',
      String(open)
    );

    toggle.textContent = open ? '×' : '☰';

  });


  /* CERRAR AL SELECCIONAR UNA OPCIÓN */

  nav.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      nav.classList.remove('open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

      toggle.textContent = '☰';

    });

  });


  /* CERRAR AL HACER CLICK FUERA */

  document.addEventListener('click', (event) => {

    if (
      nav.classList.contains('open') &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {

      nav.classList.remove('open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

      toggle.textContent = '☰';

    }

  });


  /* CERRAR CON ESC */

  document.addEventListener('keydown', (event) => {

    if (
      event.key === 'Escape' &&
      nav.classList.contains('open')
    ) {

      nav.classList.remove('open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

      toggle.textContent = '☰';

      toggle.focus();

    }

  });

}


/* =========================================================
   PAGE REVEAL
========================================================= */

(() => {

  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


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


  const elements =
    document.querySelectorAll(
      revealSelectors.join(',')
    );


  elements.forEach((element) => {

    element.classList.add('reveal');

  });


  const observer =
    new IntersectionObserver(
      (entries, obs) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;


          entry.target.classList.add(
            'is-visible'
          );


          obs.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12,

        rootMargin:
          '0px 0px -60px 0px'
      }
    );


  elements.forEach((element) => {

    observer.observe(element);

  });

})();


/* =========================================================
   PROJECT IMAGE LIGHTBOX
========================================================= */

(() => {

  const projectImages =
    document.querySelectorAll(
      '.academic-project-image .carousel-item img'
    );


  if (!projectImages.length) return;


  /* CREAR LIGHTBOX */

  const lightbox =
    document.createElement('div');


  lightbox.className =
    'image-lightbox';


  lightbox.innerHTML = `

    <button
      class="image-lightbox-close"
      type="button"
      aria-label="Cerrar imagen"
    >
      ×
    </button>

    <img
      src=""
      alt=""
    >

  `;


  document.body.appendChild(
    lightbox
  );


  const lightboxImage =
    lightbox.querySelector('img');


  const closeButton =
    lightbox.querySelector(
      '.image-lightbox-close'
    );


  /* ABRIR IMAGEN */

  projectImages.forEach((image) => {

    image.addEventListener(
      'click',
      () => {

        lightboxImage.src =
          image.src;

        lightboxImage.alt =
          image.alt;


        lightbox.classList.add(
          'active'
        );


        document.body.classList.add(
          'lightbox-open'
        );

      }
    );

  });


  /* CERRAR LIGHTBOX */

  const closeLightbox = () => {

    lightbox.classList.remove(
      'active'
    );


    document.body.classList.remove(
      'lightbox-open'
    );


    setTimeout(() => {

      lightboxImage.src = '';

    }, 250);

  };


  /* BOTÓN X */

  closeButton.addEventListener(
    'click',
    (event) => {

      event.stopPropagation();

      closeLightbox();

    }
  );


  /* CLICK FUERA DE LA IMAGEN */

  lightbox.addEventListener(
    'click',
    (event) => {

      if (
        event.target === lightbox
      ) {

        closeLightbox();

      }

    }
  );


  /* ESC */

  document.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Escape' &&
        lightbox.classList.contains(
          'active'
        )
      ) {

        closeLightbox();

      }

    }
  );

})();


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
  document.querySelector(
    '.cursor-glow'
  );


if (cursorGlow) {

  document.addEventListener(
    'mousemove',
    (event) => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    }
  );

}
