# CLAUDE.md

Personal site of Tito Jaramillo (titorjs), https://titorjs.dev. Astro static site, bilingual
(ES default at root, EN under `/en/`), dark-first, plain CSS, no UI framework. Public repo.

## Commands

```bash
npm run dev      # dev server, http://localhost:4321
npm run check    # astro check (TypeScript + templates). Run before reporting done.
npm run build    # static build to dist/. Must pass before reporting done.
```

Node comes from nvm (`nvm use`, see `.nvmrc`).

## Rules that are not derivable from the code

- **Design is locked.** Tokens in `src/styles/tokens.css` implement the approved "F2" direction:
  deep navy, cobalt accent, zero radius, 1 px rules, no shadows or gradients, JetBrains Mono for
  headings/labels/metadata/code, IBM Plex Sans for body. Do not introduce new colours, radii,
  shadows or fonts without asking. Light theme is a full fallback, not an afterthought: every new
  token goes into all three blocks of `tokens.css`.
- **No literal colours in components.** Use `var(--color-*)` only.
- **No Tailwind, no React** unless a concrete interactive need appears. Client JS is allowed when
  it improves the experience; keep it small and progressive (the page must work without it).
- **Routing goes through `src/i18n/routes.ts`.** Never hardcode `/en/...` or a slug in a
  component; use `localePath()` / `alternates()` from `src/i18n/utils.ts`.
- **Adding a locale** touches exactly: `LOCALES`/`LOCALE_TAGS` in `config.ts`, a dictionary in
  `ui.ts`, a slug per route in `routes.ts`. If a change forces a fourth place, fix the design.
- **Posts may exist in one language only.** The post page must show a notice linking to the
  existing version instead of 404-ing or silently falling back.
- **Content is Markdown/MDX in content collections.** No CMS, no database, no runtime fetch.
- **Open Graph images are static files** under `public/og/` (reused outside the site).
- **Analytics (Cloudflare Web Analytics) is added at deploy time**, not before.
- **Never commit.** The owner commits manually unless the prompt contains `COMMIT`.
- **Phases.** 1 skeleton (done) · 2 Home/About/Contact · 3 Projects · 4 Blog + RSS · 5 Cloudflare
  Pages + domain · 6 SEO/OG/a11y/CV. Final copy, project selection and CV format are the owner's
  decisions: ask before inventing them.

## Layout

```
src/i18n/        config.ts · routes.ts · ui.ts · utils.ts
src/styles/      tokens.css · global.css
src/layouts/     BaseLayout.astro
src/components/  Header · Footer · Seo · ThemeToggle · LanguageSwitch
src/pages/[...lang]/   index.astro · [slug].astro (static pages) · blog/ (phase 4)
public/          favicon.svg · og/
```
