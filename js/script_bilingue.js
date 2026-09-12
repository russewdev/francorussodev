document.addEventListener("DOMContentLoaded", () => {

  // =====================================================
  // SCROLL REVEAL
  // =====================================================

  const revealItems = document.querySelectorAll(
    ".section, .academic-project, .education-card, .about-new, .stack-layout, .fr-contact-grid"
  );


  revealItems.forEach(element => {

    element.classList.add("reveal");

  });


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, obs) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            obs.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealItems.forEach(element => {

      observer.observe(element);

    });

  } else {

    revealItems.forEach(element => {

      element.classList.add(
        "is-visible"
      );

    });

  }


  // =====================================================
  // IMAGE LIGHTBOX
  // =====================================================

  const images = document.querySelectorAll(
    ".academic-project-image .carousel-item img"
  );


  if (images.length > 0) {

    const overlay =
      document.createElement("div");

    overlay.className =
      "image-lightbox";


    overlay.innerHTML = `

      <button
        class="image-lightbox-close"
        type="button"
        aria-label="Close image"
      >
        ×
      </button>

      <img
        src=""
        alt=""
      >

    `;


    document.body.appendChild(
      overlay
    );


    const lightboxImg =
      overlay.querySelector("img");


    const closeButton =
      overlay.querySelector(
        ".image-lightbox-close"
      );


    // CERRAR LIGHTBOX

    const closeLightbox = () => {

      overlay.classList.remove(
        "active"
      );

      document.body.classList.remove(
        "lightbox-open"
      );

      lightboxImg.removeAttribute(
        "src"
      );

    };


    // ABRIR IMAGEN

    images.forEach(img => {

      img.style.cursor =
        "zoom-in";


      img.addEventListener(
        "click",
        () => {

          lightboxImg.src =
            img.currentSrc ||
            img.src;


          lightboxImg.alt =
            img.alt || "";


          overlay.classList.add(
            "active"
          );


          document.body.classList.add(
            "lightbox-open"
          );

        }
      );

    });


    // CERRAR AL HACER CLICK
    // FUERA DE LA IMAGEN

    overlay.addEventListener(
      "click",
      event => {

        if (
          event.target === overlay
        ) {

          closeLightbox();

        }

      }
    );


    // BOTÓN X

    if (closeButton) {

      closeButton.addEventListener(
        "click",
        closeLightbox
      );

    }


    // ESC

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape"
        ) {

          closeLightbox();

        }

      }
    );

  }


  // =====================================================
  // LANGUAGE SWITCH
  // =====================================================

  const languageToggle =
    document.querySelector(
      "#language-toggle"
    );


  const flagES =
    document.querySelector(
      "#flag-es"
    );


  const flagEN =
    document.querySelector(
      "#flag-en"
    );


  const supportedLanguages = [
    "es",
    "en"
  ];


  // =====================================================
  // IDIOMA GUARDADO
  // =====================================================

  let currentLanguage =
    localStorage.getItem(
      "portfolio-language"
    ) || "es";


  if (
    !supportedLanguages.includes(
      currentLanguage
    )
  ) {

    currentLanguage = "es";

  }


  // =====================================================
  // TRADUCCIONES
  // =====================================================

  const translations = {

    es: {

      // HEADER

      "nav-home": "Inicio",
      "nav-projects": "Proyectos",
      "nav-education": "Formación",
      "nav-about": "Sobre mí",
      "nav-stack": "Stack",
      "nav-contact": "Hablemos ↗",

      // HERO

      "hero-status":
        "DESARROLLADOR DE SOFTWARE JR.",

      "hero-location":
        "BUENOS AIRES, ARGENTINA",

      "hero-title":
        "Software<br><em>Developer.</em>",

      "hero-projects":
        "Ver proyectos",

      "hero-contact":
        "Contactarme",

      // PROJECTS

      "projects-label":
        "PROYECTOS ACADÉMICOS",

      "projects-title":
        "Cosas que he<br><em>construido.</em>",

      // EDUCATION

      "education-label":
        "FORMACIÓN",

      "education-title":
        "Formación y<br><em>certificaciones.</em>",

      // ABOUT

      "about-label":
        "SOBRE MÍ",

      "about-kicker":
        "UN POCO SOBRE MÍ",

      "about-title":
        "Curioso por naturaleza.<br><em>Técnico por elección.</em>",

      // STACK

      "stack-label":
        "TECNOLOGÍAS",

      "stack-title":
        "Un stack preparado para<br><em>crear.</em>",

      // CONTACT

      "contact-label":
        "CONTACTO",

      "contact-title":
        "Construyamos<br>algo<br><em>útil.</em>",

      "contact-button":
        "Iniciar una conversación ↗",

      // FOOTER

      "footer-built":
        "DISEÑADO Y DESARROLLADO CON HTML / CSS / JS"

    },


    en: {

      // HEADER

      "nav-home": "Home",
      "nav-projects": "Projects",
      "nav-education": "Education",
      "nav-about": "About",
      "nav-stack": "Stack",
      "nav-contact": "Let's talk ↗",

      // HERO

      "hero-status":
        "SOFTWARE DEVELOPER JR.",

      "hero-location":
        "BUENOS AIRES, ARGENTINA",

      "hero-title":
        "Software<br><em>Developer.</em>",

      "hero-projects":
        "View projects",

      "hero-contact":
        "Contact me",

      // PROJECTS

      "projects-label":
        "ACADEMIC PROJECTS",

      "projects-title":
        "Things I've<br><em>built.</em>",

      // EDUCATION

      "education-label":
        "EDUCATION",

      "education-title":
        "Education &<br><em>certifications.</em>",

      // ABOUT

      "about-label":
        "ABOUT ME",

      "about-kicker":
        "A LITTLE ABOUT ME",

      "about-title":
        "Curious by nature.<br><em>Technical by choice.</em>",

      // STACK

      "stack-label":
        "TECHNOLOGIES",

      "stack-title":
        "A stack built to<br><em>ship.</em>",

      // CONTACT

      "contact-label":
        "CONTACT",

      "contact-title":
        "Let's build<br>something<br><em>useful.</em>",

      "contact-button":
        "Start a conversation ↗",

      // FOOTER

      "footer-built":
        "DESIGNED & BUILT WITH HTML / CSS / JS"

    }

  };


  // =====================================================
  // FUNCIÓN AUXILIAR
  // =====================================================

  const setText = (
    selector,
    value
  ) => {

    const element =
      document.querySelector(
        selector
      );


    if (element) {

      element.innerHTML =
        value;

    }

  };


  // =====================================================
  // APLICAR IDIOMA
  // =====================================================

  const applyLanguage = language => {

    if (
      !supportedLanguages.includes(
        language
      )
    ) {

      language = "es";

    }


    currentLanguage =
      language;


    // HTML LANG

    document.documentElement.lang =
      language;


    // =================================================
    // SWITCH
    // =================================================

    if (languageToggle) {

      languageToggle.checked =
        language === "en";

    }


    // =================================================
    // BANDERAS
    // =================================================

    if (flagES) {

      flagES.classList.toggle(
        "active",
        language === "es"
      );

    }


    if (flagEN) {

      flagEN.classList.toggle(
        "active",
        language === "en"
      );

    }


    // =================================================
    // ELEMENTOS CON DATA-I18N
    // =================================================

    document
      .querySelectorAll(
        "[data-i18n-es][data-i18n-en]"
      )
      .forEach(element => {

        if (
          language === "es"
        ) {

          element.innerHTML =
            element.dataset.i18nEs;

        } else {

          element.innerHTML =
            element.dataset.i18nEn;

        }

      });


    // =================================================
    // HEADER
    // =================================================

    const navLinks =
      document.querySelectorAll(
        ".nav > a:not(.nav-button)"
      );


    if (navLinks.length >= 5) {

      navLinks[0].textContent =
        translations[language][
          "nav-home"
        ];

      navLinks[1].textContent =
        translations[language][
          "nav-projects"
        ];

      navLinks[2].textContent =
        translations[language][
          "nav-education"
        ];

      navLinks[3].textContent =
        translations[language][
          "nav-about"
        ];

      navLinks[4].textContent =
        translations[language][
          "nav-stack"
        ];

    }


    const navButton =
      document.querySelector(
        ".nav-button"
      );


    if (navButton) {

      navButton.innerHTML =
        translations[language][
          "nav-contact"
        ];

    }


    // =================================================
    // HERO
    // =================================================

    const heroTopline =
      document.querySelectorAll(
        ".hero-topline span"
      );


    if (
      heroTopline.length >= 4
    ) {

      heroTopline[1].textContent =
        translations[language][
          "hero-status"
        ];

      heroTopline[3].textContent =
        translations[language][
          "hero-location"
        ];

    }


    setText(
      ".hero-simple h1",
      translations[language][
        "hero-title"
      ]
    );


    setText(
      ".hero-actions .button-primary",
      translations[language][
        "hero-projects"
      ] + " <span>↓</span>"
    );


    setText(
      ".hero-actions .button-ghost",
      translations[language][
        "hero-contact"
      ] + " <span>↗</span>"
    );


    // =================================================
    // PROJECTS
    // =================================================

    setText(
      "#projects .section-label span:last-child",
      translations[language][
        "projects-label"
      ]
    );


    setText(
      "#projects .projects-head .kicker",
      translations[language][
        "projects-label"
      ]
    );


    setText(
      "#projects .projects-head h2",
      translations[language][
        "projects-title"
      ]
    );


    // =================================================
    // EDUCATION
    // =================================================

    setText(
      "#education .section-label span:last-child",
      translations[language][
        "education-label"
      ]
    );


    setText(
      "#education .section-intro .kicker",
      translations[language][
        "education-label"
      ]
    );


    setText(
      "#education .section-intro h2",
      translations[language][
        "education-title"
      ]
    );


    // =================================================
    // ABOUT
    // =================================================

    setText(
      "#about .section-label span:last-child",
      translations[language][
        "about-label"
      ]
    );


    setText(
      "#about .about-new-title .kicker",
      translations[language][
        "about-kicker"
      ]
    );


    setText(
      "#about .about-new-title h2",
      translations[language][
        "about-title"
      ]
    );


    // =================================================
    // STACK
    // =================================================

    setText(
      "#stack .section-label span:last-child",
      "STACK"
    );


    setText(
      "#stack .section-intro .kicker",
      translations[language][
        "stack-label"
      ]
    );


    setText(
      "#stack .section-intro h2",
      translations[language][
        "stack-title"
      ]
    );


    // =================================================
    // CONTACT
    // =================================================

    setText(
      "#contact .fr-section-label span:last-child",
      translations[language][
        "contact-label"
      ]
    );


    setText(
      "#contact .fr-contact-copy h2",
      translations[language][
        "contact-title"
      ]
    );


    setText(
      ".fr-contact-button",
      translations[language][
        "contact-button"
      ]
    );


    // =================================================
    // FOOTER
    // =================================================

    const footerSpans =
      document.querySelectorAll(
        ".footer span"
      );


    if (footerSpans.length >= 2) {

      footerSpans[1].textContent =
        translations[language][
          "footer-built"
        ];

    }


    // =================================================
    // WHATSAPP
    // =================================================

    const message =
      language === "es"

        ? `Hola Franco, me pongo en contacto con vos a través de tu sitio web.

Me gustaría conocer más sobre tu perfil y/o conversar acerca de una posible oportunidad de trabajo o proyecto.

Quedo atento. Muchas gracias.`

        : `Hi Franco, I’m getting in touch with you through your website.

I’d like to learn more about your profile and/or discuss a potential job opportunity or project.

I look forward to hearing from you. Thank you.`;


    const whatsappURL =
      `https://wa.me/541167459591?text=${encodeURIComponent(
        message
      )}`;


    document
      .querySelectorAll(
        'a[href^="https://wa.me/"]'
      )
      .forEach(link => {

        link.href =
          whatsappURL;

      });


    // =================================================
    // ACCESSIBILITY
    // =================================================

    if (languageToggle) {

      languageToggle.setAttribute(
        "aria-label",
        language === "es"
          ? "Cambiar a inglés"
          : "Switch to Spanish"
      );

    }


    // =================================================
    // GUARDAR IDIOMA
    // =================================================

    localStorage.setItem(
      "portfolio-language",
      language
    );

  };


  // =====================================================
  // EVENTO DEL SWITCH
  // =====================================================

  if (languageToggle) {

    languageToggle.addEventListener(
      "change",
      () => {

        if (
          languageToggle.checked
        ) {

          applyLanguage("en");

        } else {

          applyLanguage("es");

        }

      }
    );

  }


  // =====================================================
  // INICIAR
  // =====================================================

  applyLanguage(
    currentLanguage
  );

});