import type { Locale } from './config';

/**
 * Top-level pages and their localized slugs. The key is the stable route id used
 * in code; the slug is what appears in the URL. `home` has no slug.
 */
export const ROUTES = {
  home: { es: '', en: '' },
  about: { es: 'sobre-mi', en: 'about' },
  projects: { es: 'proyectos', en: 'projects' },
  blog: { es: 'blog', en: 'blog' },
  now: { es: 'ahora', en: 'now' },
  contact: { es: 'contacto', en: 'contact' },
  cv: { es: 'cv', en: 'cv' },
  privacy: { es: 'privacidad', en: 'privacy' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteId = keyof typeof ROUTES;
/** Every route except home: the pages rendered by `[slug].astro`. */
export type StaticRouteId = Exclude<RouteId, 'home'>;

/** Order of entries in the main navigation. */
export const NAV_ORDER: readonly RouteId[] = ['home', 'about', 'projects', 'blog', 'now', 'contact'];

/** Top-level pages rendered by `[slug].astro` (everything except home). */
export const STATIC_PAGES: readonly StaticRouteId[] = (Object.keys(ROUTES) as RouteId[]).filter((id): id is StaticRouteId => id !== 'home');

export function routeFromSlug(locale: Locale, slug: string | undefined): StaticRouteId | undefined {
  return STATIC_PAGES.find((id) => ROUTES[id][locale] === slug);
}
