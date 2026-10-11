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
- **Deploy flow:** work on `develop`, fast-forward `main` and push both. Never force-push.
- **Never commit.** The owner commits manually unless the prompt contains `COMMIT`.
- **Phases.** 1 skeleton · 2 Home/About/Contact · 3 Projects · 5 Cloudflare + domain (all done) ·
  4 Blog + RSS · 6 SEO/OG/a11y (CV done). Final copy, project selection and CV format are the owner's
  decisions: ask before inventing them.

## Layout

```
src/i18n/        config.ts · routes.ts · ui.ts · utils.ts
src/styles/      tokens.css · global.css
src/layouts/     BaseLayout.astro
src/components/  Header · Footer · Seo · ThemeToggle · LanguageSwitch · pages/ (one per route)
src/content/     pages/<route>.<locale>.md · projects/*.json (schema in src/content.config.ts)
src/site.ts      public contact links (footer and contact page)
src/pages/[...lang]/   index.astro · [slug].astro (static pages) · blog/ (phase 4)
public/          favicon.svg · og/ · cv/
cv/              CV sources and build script (npm run cv)
```

## Brief (who and why)

Tito Roberto Jaramillo Salazar, handle `titorjs` everywhere, software engineer in Quito, Ecuador,
Spanish native, English B2. Career direction: AI Solutions Architect / AI research, especially
neural-network interpretability, via teaching, consulting or a large firm. The site also serves as
a showcase for international freelancing and for open-source work on GitHub (`titorjs`).

Goal: a simple, fast, easy-to-maintain personal portfolio with a blog. It must present him, show
the best 2 or 3 projects, publish notes and articles, and make contact easy.

## Decisions already taken (do not reopen)

- Design: direction "F2" from the mockups. Round 1 (five styles):
  https://claude.ai/artifact/9VPprYdFDjdjZ7jvpiuEsq · Round 2 (B+D blend, dark-first, chosen):
  https://claude.ai/artifact/CuoDiNG6mKDFKVeBPx4zZp. Accent is the cobalt shown there.
- Plain CSS over Tailwind (public template repo; readable stylesheets). No React until needed.
- i18n: `es` at root, `en` under `/en/`. Mandarin may come later; the locale list is one array.
- Blog: a post may exist in only one language; show a "only in ES/EN" notice linking to it.
- Projects: hand-written cards (Markdown/JSON in repo), not pulled from the GitHub API.
- Contact: email, GitHub, LinkedIn, one line of services. No form, no backend.
- "Ahora/Now" is its own page (already routed), not a hero panel.
- Open Graph images: static PNGs in `public/og/`. Comments: none for now (Giscus maybe later).
- Analytics: Cloudflare Web Analytics, added at deploy time / when the domain is bought.
- Hosting: Cloudflare Workers serving `dist/` as static assets (Pages is no longer offered for
  new projects). Config in `wrangler.jsonc`: custom domains `titorjs.dev` and `www` (www redirects
  to the apex via `public/_redirects`), site 404 page, no trailing slashes. Builds on push to
  `main`; `develop` gets preview builds. Live since Oct 2026.
  Email `tito@titorjs.dev` forwards to his personal inbox via Cloudflare Email Routing (done);
  sending *as* that address from Gmail is still pending.
- CV: one PDF per language, public version without phone number or references. Sources in `cv/`
  (HTML + print CSS using the light tokens), rendered with `npm run cv` (headless Chrome) into
  `public/cv/titorjs-cv-<locale>.pdf`. Keep the original docx private.
- `doctest.titorjs.dev` (demos/testing, noindex, unlinked) is a separate project. Out of scope here.
- Social links: GitHub, LinkedIn, email only by default. Instagram undecided; ask. LinkedIn URL is
  the long slug `linkedin.com/in/tito-jaramillo-salazar-769ba922b` everywhere (site and CV).
- Copy rules: sincere and accurate. AI and interpretability are stated as intention and study, not
  as done work. The financial platform stays unnamed (private client). The "Jugador Infinito" award
  appears on the CV only, never on the site.

## Open items

- Home below the hero is empty. Proposed: featured projects, first Now bullets, latest posts
  (phase 4). Owner has not decided yet.
- `public/og/default.png` is referenced by `Seo.astro` but does not exist yet (phase 6).
- Open-source project: wanted but not chosen yet (TODO). Do not list one on the CV or the site
  until a repo with a README exists. `core-web-blueprint` is private and stays private.
- Palette and type are locked; the owner has only reviewed phone-width screenshots so far.
