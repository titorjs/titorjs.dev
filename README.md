# titorjs.dev

Personal site and blog of Tito Jaramillo ([@titorjs](https://github.com/titorjs)).
Static, bilingual (ES/EN), dark-first, built with [Astro](https://astro.build).

```bash
nvm use            # Node 24 (any >= 22.12 works)
npm install
npm run dev        # http://localhost:4321
npm run check      # type check (astro check)
npm run build      # static output in dist/
```

## Structure

```
src/
  i18n/
    config.ts      locale registry, site URL
    routes.ts      route ids → localized slugs, nav order
    ui.ts          UI strings per locale
    utils.ts       locale from URL, path builders, hreflang alternates
  styles/
    tokens.css     colours, type, spacing (dark default, light fallback)
    global.css     reset, base elements, utilities
  layouts/         BaseLayout (head, header, footer, theme bootstrap)
  components/      Header, Footer, Seo, ThemeToggle, LanguageSwitch
  pages/
    [...lang]/     one tree for every locale; `lang` is empty for the default locale
    404.astro
public/            favicon, static OG images
```

## Conventions

- **Routing.** Default locale (`es`) lives at the root, other locales under `/<locale>/`.
  Slugs are localized through `ROUTES` in `src/i18n/routes.ts`; pages never hardcode a path.
- **Adding a language.** Add it to `LOCALES` and `LOCALE_TAGS`, add a dictionary in `ui.ts`,
  add a slug per route in `routes.ts`. Nothing else enumerates locales.
- **Theme.** CSS custom properties only. Dark is the designed default; `prefers-color-scheme: light`
  and `data-theme="light"` swap the token values. An inline script in `BaseLayout` applies the
  stored choice before first paint.
- **Styling.** Plain CSS. No utility framework, no UI framework. Components take colours from the
  tokens in `tokens.css`, never from literals.

## Roadmap

1. Skeleton: layout, navigation, theme, i18n ← current
2. Home, About, Contact
3. Projects
4. Blog with RSS
5. Deploy to Cloudflare Pages, domain
6. SEO details, Open Graph images, accessibility pass, CV

## License

Code: MIT. Written content (posts, copy) is © Tito Jaramillo unless stated otherwise.
