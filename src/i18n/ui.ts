import type { Locale } from './config';

const es = {
  'site.title': 'Tito Jaramillo',
  'site.description':
    'Ingeniero de software en Quito. Backend Java/Spring, desarrollo con agentes de IA, y un camino que empieza hacia la investigación en IA.',
  'site.tagline':
    'Ingeniero de software en Quito. Backend Java/Spring, desarrollo con agentes de IA, y un camino que empieza hacia la investigación en IA.',
  'site.intro': 'Trabajo en sistemas bancarios, construyo aplicaciones web completas y escribo sobre lo que aprendo en el camino.',
  'site.location': 'Quito, Ecuador · UTC−5',

  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.blog': 'Blog',
  'nav.now': 'Ahora',
  'nav.contact': 'Contacto',
  'nav.cv': 'CV',
  'nav.privacy': 'Privacidad',
  'nav.menu': 'Menú',
  'nav.skip': 'Saltar al contenido',

  'theme.toggle': 'Cambiar tema',
  'theme.light': 'Tema claro',
  'theme.dark': 'Tema oscuro',
  'lang.switch': 'Cambiar idioma',

  'home.cta.projects': 'Ver proyectos',
  'home.cta.contact': 'Contacto',
  'home.projects.title': 'Proyectos destacados',
  'home.projects.all': 'Todos los proyectos',
  'home.now.title': 'Ahora',
  'home.now.all': 'Ver la página completa',

  'page.home.title': 'Inicio',
  'page.about.title': 'Sobre mí',
  'page.projects.title': 'Proyectos',
  'page.blog.title': 'Blog',
  'page.now.title': 'Ahora',
  'page.contact.title': 'Contacto',
  'page.cv.title': 'CV',
  'page.cv.download': 'Descargar CV (PDF)',
  'page.privacy.title': 'Privacidad',
  'page.privacy.description': 'Qué guarda este sitio en tu navegador y por qué. No hay cookies, analítica ni rastreadores.',
  'about.cv': 'Versión en PDF: CV',
  'now.updated': 'Actualizado',
  'projects.stack': 'Stack',
  'projects.link': 'Ver en GitHub',
  'contact.intro': 'Escríbeme a',
  'contact.also': 'También estoy en',
  'contact.services':
    'Disponible para proyectos freelance: backend Java/Spring, aplicaciones web con Angular y sitios estáticos para pequeños negocios.',
  'contact.meta': 'Zona horaria UTC−5 · Español nativo · Inglés B2',
  'page.placeholder': 'Esta página está en construcción.',

  'footer.rights': 'Tito Jaramillo',
  'footer.source': 'Código abierto en GitHub',
  'footer.rss': 'RSS',

  'notFound.title': 'Página no encontrada',
  'notFound.body': 'La dirección no existe o cambió de lugar.',
  'notFound.back': 'Volver al inicio',
} as const;

export type UiKey = keyof typeof es;
export type UiDictionary = Record<UiKey, string>;

const en: UiDictionary = {
  'site.title': 'Tito Jaramillo',
  'site.description':
    'Software engineer in Quito. Java/Spring backend, development with AI agents, and a path just starting toward AI research.',
  'site.tagline':
    'Software engineer in Quito. Java/Spring backend, development with AI agents, and a path just starting toward AI research.',
  'site.intro': 'I work on banking systems, build complete web applications and write about what I learn along the way.',
  'site.location': 'Quito, Ecuador · UTC−5',

  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.blog': 'Blog',
  'nav.now': 'Now',
  'nav.contact': 'Contact',
  'nav.cv': 'CV',
  'nav.privacy': 'Privacy',
  'nav.menu': 'Menu',
  'nav.skip': 'Skip to content',

  'theme.toggle': 'Toggle theme',
  'theme.light': 'Light theme',
  'theme.dark': 'Dark theme',
  'lang.switch': 'Change language',

  'home.cta.projects': 'See projects',
  'home.cta.contact': 'Contact',
  'home.projects.title': 'Featured projects',
  'home.projects.all': 'All projects',
  'home.now.title': 'Now',
  'home.now.all': 'See the full page',

  'page.home.title': 'Home',
  'page.about.title': 'About',
  'page.projects.title': 'Projects',
  'page.blog.title': 'Blog',
  'page.now.title': 'Now',
  'page.contact.title': 'Contact',
  'page.cv.title': 'CV',
  'page.cv.download': 'Download CV (PDF)',
  'page.privacy.title': 'Privacy',
  'page.privacy.description': 'What this site stores in your browser and why. No cookies, analytics or trackers.',
  'about.cv': 'PDF version: CV',
  'now.updated': 'Updated',
  'projects.stack': 'Stack',
  'projects.link': 'View on GitHub',
  'contact.intro': 'Write to me at',
  'contact.also': 'I am also on',
  'contact.services':
    'Available for freelance projects: Java/Spring backend, Angular web applications and static sites for small businesses.',
  'contact.meta': 'Time zone UTC−5 · Native Spanish · English B2',
  'page.placeholder': 'This page is under construction.',

  'footer.rights': 'Tito Jaramillo',
  'footer.source': 'Open source on GitHub',
  'footer.rss': 'RSS',

  'notFound.title': 'Page not found',
  'notFound.body': 'This address does not exist or has moved.',
  'notFound.back': 'Back to home',
};

export const UI: Record<Locale, UiDictionary> = { es, en };
