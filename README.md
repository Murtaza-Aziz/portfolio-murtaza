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
