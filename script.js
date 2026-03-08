// ══════════════════════════════════════════
//  TRADUCTIONS
// ══════════════════════════════════════════
const translations = {
  fr: {
    "nav.skills":   "Compétences",
    "nav.projects": "Projets",
    "nav.annexes":  "Annexes",
    "hero.tag":     "Portfolio",
    "hero.sub":     "Développeur passionné. Je conçois des applications web modernes et performantes, de la conception à la mise en production.",
    "hero.cta":     "Voir mes projets",
    "hero.contact": "Contact",
    "contact.title":   "Me contacter",
    "contact.desc":    "Envoie-moi un message directement via Gmail.",
    "contact.gmail":   "Ouvrir Gmail",
    "contact.linkedin":"Message LinkedIn",
    "skills.title":  "Compétences",
    "level.advanced":    "Avancé",
    "level.intermediate":"Intermédiaire",
    "level.beginner":    "Débutant",
    "skills.js.1":  "Développement d'applications React SPA avec hooks et context API",
    "skills.js.2":  "Automatisation de tâches avec Node.js et scripts CLI",
    "skills.js.3":  "Intégration d'APIs REST et WebSocket en temps réel",
    "skills.js.4":  "Tests unitaires avec Jest et Testing Library",
    "skills.php.1": "Conception d'APIs RESTful avec Symfony et API Platform",
    "skills.php.2": "Gestion de l'authentification avec JWT et OAuth2",
    "skills.php.3": "Création de CRUD avec Doctrine ORM et migrations",
    "skills.php.4": "Tests fonctionnels avec PHPUnit et Behat",
    "skills.py.1":  "Scripts d'automatisation et traitement de données CSV/JSON",
    "skills.py.2":  "API backend avec FastAPI et Flask",
    "skills.py.3":  "Web scraping avec BeautifulSoup et Playwright",
    "skills.py.4":  "Analyse de données avec Pandas et Matplotlib",
    "skills.sql.1": "Modélisation de bases de données relationnelles (MySQL, PostgreSQL)",
    "skills.sql.2": "Requêtes complexes avec jointures, sous-requêtes, agrégations",
    "skills.sql.3": "Optimisation des performances avec index et query plans",
    "skills.sql.4": "Introduction à MongoDB et bases NoSQL",
    "skills.docker.1": "Containerisation d'applications avec Docker et docker-compose",
    "skills.docker.2": "Configuration de pipelines CI/CD avec GitHub Actions",
    "skills.docker.3": "Déploiement sur VPS avec Nginx et PM2",
    "skills.css.1": "Intégration pixel-perfect de maquettes Figma/Adobe XD",
    "skills.css.2": "Layouts complexes avec CSS Grid et Flexbox",
    "skills.css.3": "Animations CSS et micro-interactions",
    "skills.css.4": "Accessibilité WCAG 2.1 et SEO technique",
    "projects.title": "Projets",
    "projects.alpha.desc": "Application web full-stack de gestion de tâches collaboratives avec notifications temps réel et tableau Kanban drag-and-drop.",
    "projects.beta.desc":  "API REST sécurisée pour une plateforme e-commerce : gestion des produits, panier, commandes et paiement Stripe.",
    "projects.gamma.desc": "Dashboard d'analyse de données avec visualisations interactives, filtres dynamiques et export PDF/CSV.",
    "projects.delta.desc": "Application mobile-first de suivi d'habitudes avec gamification, statistiques hebdomadaires et rappels push.",
    "annexes.title":          "Annexes",
    "annexes.cv.title":       "Curriculum Vitæ",
    "annexes.cv.desc":        "Mon CV complet au format PDF — Dernière mise à jour : 2025",
    "annexes.stage.title":    "Rapport de stage",
    "annexes.stage.desc":     "Rapport de stage de fin d'études — Entreprise XYZ, 2024",
    "annexes.cert.title":     "Certifications",
    "annexes.cert.desc":      "AWS Cloud Practitioner, Google Analytics, freeCodeCamp",
    "annexes.memoire.title":  "Mémoire de fin d'études",
    "annexes.memoire.desc":   "Étude sur l'accessibilité des interfaces web — 2024",
    "footer.phone":  "Téléphone",
    "footer.rights": "Tous droits réservés",
  },
  en: {
    "nav.skills":   "Skills",
    "nav.projects": "Projects",
    "nav.annexes":  "Annexes",
    "hero.tag":     "Portfolio",
    "hero.sub":     "Passionate developer. I build modern, high-performance web applications from design to deployment.",
    "hero.cta":     "See my projects",
    "hero.contact": "Contact",
    "contact.title":   "Contact me",
    "contact.desc":    "Send me a message directly via Gmail.",
    "contact.gmail":   "Open Gmail",
    "contact.linkedin":"LinkedIn Message",
    "skills.title":  "Skills",
    "level.advanced":    "Advanced",
    "level.intermediate":"Intermediate",
    "level.beginner":    "Beginner",
    "skills.js.1":  "React SPA development with hooks and context API",
    "skills.js.2":  "Task automation with Node.js and CLI scripts",
    "skills.js.3":  "REST API and real-time WebSocket integration",
    "skills.js.4":  "Unit testing with Jest and Testing Library",
    "skills.php.1": "RESTful API design with Symfony and API Platform",
    "skills.php.2": "Authentication management with JWT and OAuth2",
    "skills.php.3": "CRUD with Doctrine ORM and database migrations",
    "skills.php.4": "Functional testing with PHPUnit and Behat",
    "skills.py.1":  "Automation scripts and CSV/JSON data processing",
    "skills.py.2":  "Backend API with FastAPI and Flask",
    "skills.py.3":  "Web scraping with BeautifulSoup and Playwright",
    "skills.py.4":  "Data analysis with Pandas and Matplotlib",
    "skills.sql.1": "Relational database modelling (MySQL, PostgreSQL)",
    "skills.sql.2": "Complex queries with joins, subqueries, aggregations",
    "skills.sql.3": "Performance optimisation with indexes and query plans",
    "skills.sql.4": "Introduction to MongoDB and NoSQL databases",
    "skills.docker.1": "Application containerisation with Docker and docker-compose",
    "skills.docker.2": "CI/CD pipeline setup with GitHub Actions",
    "skills.docker.3": "VPS deployment with Nginx and PM2",
    "skills.css.1": "Pixel-perfect Figma/Adobe XD mockup integration",
    "skills.css.2": "Complex layouts with CSS Grid and Flexbox",
    "skills.css.3": "CSS animations and micro-interactions",
    "skills.css.4": "WCAG 2.1 accessibility and technical SEO",
    "projects.title": "Projects",
    "projects.alpha.desc": "Full-stack web application for collaborative task management with real-time notifications and drag-and-drop Kanban board.",
    "projects.beta.desc":  "Secured REST API for an e-commerce platform: product management, cart, orders and Stripe payments.",
    "projects.gamma.desc": "Data analytics dashboard with interactive charts, dynamic filters and PDF/CSV export.",
    "projects.delta.desc": "Mobile-first habit tracking app with gamification, weekly stats and push notifications.",
    "annexes.title":          "Annexes",
    "annexes.cv.title":       "Curriculum Vitæ",
    "annexes.cv.desc":        "My full CV in PDF format — Last updated: 2025",
    "annexes.stage.title":    "Internship Report",
    "annexes.stage.desc":     "End-of-studies internship report — Company XYZ, 2024",
    "annexes.cert.title":     "Certifications",
    "annexes.cert.desc":      "AWS Cloud Practitioner, Google Analytics, freeCodeCamp",
    "annexes.memoire.title":  "Thesis",
    "annexes.memoire.desc":   "Study on web interface accessibility — 2024",
    "footer.phone":  "Phone",
    "footer.rights": "All rights reserved",
  }
};

// ══════════════════════════════════════════
//  ÉTAT
// ══════════════════════════════════════════
let currentLang  = localStorage.getItem('lang')  || 'fr';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ══════════════════════════════════════════
//  THÈME
// ══════════════════════════════════════════
const themeBtn  = document.getElementById('themeBtn');
const iconMoon  = document.getElementById('iconMoon');
const iconSun   = document.getElementById('iconSun');
const htmlEl    = document.documentElement;

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  if (theme === 'light') {
    iconMoon.style.display = 'none';
    iconSun.style.display  = 'block';
  } else {
    iconMoon.style.display = 'block';
    iconSun.style.display  = 'none';
  }
  localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
});

// ══════════════════════════════════════════
//  LANGUE
// ══════════════════════════════════════════
const langBtn   = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');

function applyLang(lang) {
  htmlEl.setAttribute('data-lang', lang);
  htmlEl.setAttribute('lang', lang);
  langLabel.textContent = lang.toUpperCase();
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  localStorage.setItem('lang', lang);
}

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  applyLang(currentLang);
});

// ══════════════════════════════════════════
//  MODAL CONTACT
// ══════════════════════════════════════════
const contactBtn   = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const modalClose   = document.getElementById('modalClose');

contactBtn.addEventListener('click', () => contactModal.classList.add('open'));
modalClose.addEventListener('click', () => contactModal.classList.remove('open'));
contactModal.addEventListener('click', e => {
  if (e.target === contactModal) contactModal.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') contactModal.classList.remove('open');
});

// ══════════════════════════════════════════
//  BURGER MENU
// ══════════════════════════════════════════
const burger     = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.menu-close').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ══════════════════════════════════════════
//  ACCORDÉON COMPÉTENCES
// ══════════════════════════════════════════
document.querySelectorAll('[data-skill]').forEach(card => {
  card.querySelector('.skill-header').addEventListener('click', () => {
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('[data-skill]').forEach(c => c.classList.remove('open'));
    if (!isOpen) card.classList.add('open');
  });
});

// ══════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ══════════════════════════════════════════
//  ANNÉE FOOTER
// ══════════════════════════════════════════
document.getElementById('year').textContent = new Date().getFullYear();

// ══════════════════════════════════════════
//  INIT (appliquer les préférences sauvegardées)
// ══════════════════════════════════════════
applyTheme(currentTheme);
applyLang(currentLang);