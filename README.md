# Murtaza Aziz — Portfolio

Personal portfolio site built with React, Vite, TypeScript, and Tailwind CSS v4.

## Stack

- **React 18** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v6** (client-side routing)
- Custom scroll-reveal (`IntersectionObserver` — no library)

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build     # TypeScript check + Vite production build
npm run preview   # Serve the dist/ output locally
```

Output goes to `dist/`.

## Deploy (GitHub Pages)

This site is configured for a **project site** at:

`https://murtaza-aziz.github.io/portfolio-murtaza/`

1. In the repo on GitHub, go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from branch")
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds `dist/` and publishes it

The Vite `base` is set to `/portfolio-murtaza/` so assets resolve correctly on GitHub Pages.

## Content

All copy (projects, experience, education, contact info) lives in a single file:

```
src/content.ts
```

Edit that file to update the portfolio without touching any component.

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, work, experience, about, contact |
| `/docforge` | DocForge AI case study |

## Assets

Static assets are in `public/`:
- `public/images/` — project screenshots, CV PDF
- `public/favicon.svg`
