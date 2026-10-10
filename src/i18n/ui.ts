import type { Locale } from './config';

const es = {
  'site.title': 'Tito Jaramillo',
  'site.description':
    'Ingeniero de software en Quito. Construyo sistemas con IA y estudio cómo piensan las redes neuronales.',
  'site.tagline': 'Construyo sistemas con IA y estudio cómo piensan las redes neuronales.',
  'site.location': 'Quito, Ecuador · UTC−5',

  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.blog': 'Blog',
  'nav.now': 'Ahora',
  'nav.contact': 'Contacto',
  'nav.cv': 'CV',
  'nav.menu': 'Menú',
  'nav.skip': 'Saltar al contenido',

  'theme.toggle': 'Cambiar tema',
  'theme.light': 'Tema claro',
  'theme.dark': 'Tema oscuro',
  'lang.switch': 'Cambiar idioma',

  'home.cta.projects': 'Ver proyectos',
  'home.cta.contact': 'Contacto',

  'page.home.title': 'Inicio',
  'page.about.title': 'Sobre mí',
  'page.projects.title': 'Proyectos',
  'page.blog.title': 'Blog',
  'page.now.title': 'Ahora',
  'page.contact.title': 'Contacto',
  'page.cv.title': 'CV',
  'page.cv.download': 'Descargar CV (PDF)',
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
    'Software engineer in Quito. I build AI-backed systems and study how neural networks think.',
  'site.tagline': 'I build AI-backed systems and study how neural networks think.',
  'site.location': 'Quito, Ecuador · UTC−5',

  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.blog': 'Blog',
  'nav.now': 'Now',
  'nav.contact': 'Contact',
  'nav.cv': 'CV',
  'nav.menu': 'Menu',
  'nav.skip': 'Skip to content',

  'theme.toggle': 'Toggle theme',
  'theme.light': 'Light theme',
  'theme.dark': 'Dark theme',
  'lang.switch': 'Change language',

  'home.cta.projects': 'See projects',
  'home.cta.contact': 'Contact',

  'page.home.title': 'Home',
  'page.about.title': 'About',
  'page.projects.title': 'Projects',
  'page.blog.title': 'Blog',
  'page.now.title': 'Now',
  'page.contact.title': 'Contact',
  'page.cv.title': 'CV',
  'page.cv.download': 'Download CV (PDF)',
  'page.placeholder': 'This page is under construction.',

  'footer.rights': 'Tito Jaramillo',
  'footer.source': 'Open source on GitHub',
  'footer.rss': 'RSS',

  'notFound.title': 'Page not found',
  'notFound.body': 'This address does not exist or has moved.',
  'notFound.back': 'Back to home',
};

export const UI: Record<Locale, UiDictionary> = { es, en };
