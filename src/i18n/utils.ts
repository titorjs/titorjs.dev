import { DEFAULT_LOCALE, LOCALES, LOCALE_TAGS, SITE_URL, isLocale, type Locale } from './config';
import { ROUTES, type RouteId } from './routes';
import { UI, type UiKey } from './ui';

/** Resolves the locale from a URL: `/en/...` → en, anything else → default. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE;
}

/** Resolves the locale from the `[...lang]` rest param (undefined → default). */
export function getLocaleFromParam(lang: string | undefined): Locale {
  return isLocale(lang) ? lang : DEFAULT_LOCALE;
}

export function t(locale: Locale) {
  return (key: UiKey): string => UI[locale][key];
}

/** Builds a path for a route in a locale: `/sobre-mi`, `/en/about`, `/`, `/en`. */
export function localePath(locale: Locale, route: RouteId, suffix = ''): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const slug = ROUTES[route][locale];
  const path = [prefix, slug, suffix].filter(Boolean).join('/');
  return path ? `/${path.replace(/^\/+/, '')}` : '/';
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function localeTag(locale: Locale): string {
  return LOCALE_TAGS[locale];
}

/** `getStaticPaths` helper: one entry per locale, default locale with `lang: undefined`. */
export function localeStaticPaths<T extends Record<string, unknown>>(extra: (locale: Locale) => T[] = () => [{} as T]) {
  return LOCALES.flatMap((locale) =>
    extra(locale).map((params) => ({
      params: { lang: locale === DEFAULT_LOCALE ? undefined : locale, ...params },
      props: { locale },
    })),
  );
}

/** Every locale's URL for the same route, for hreflang and the language switch. */
export function alternates(route: RouteId, suffix = ''): { locale: Locale; path: string }[] {
  return LOCALES.map((locale) => ({ locale, path: localePath(locale, route, suffix) }));
}
