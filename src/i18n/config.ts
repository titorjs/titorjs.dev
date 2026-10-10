/**
 * Locale registry. Adding a language = one entry here + one dictionary in ui.ts
 * + one slug per route in routes.ts. Nothing else in the codebase lists locales.
 */
export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/** BCP 47 tags used in <html lang>, hreflang and Open Graph. */
export const LOCALE_TAGS: Record<Locale, string> = {
  es: 'es-EC',
  en: 'en',
};

export const SITE_URL = 'https://titorjs.dev';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}
