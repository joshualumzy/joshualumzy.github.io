# Portfolio (prototype)

Astro static site · GSAP + ScrollTrigger + Flip · Lenis · plain CSS tokens.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Edit
- **Content:** `src/data/content.ts` (all text, links, projects, skills).
- **Look:** `src/styles/tokens.css` (colors, fonts, spacing, easing, durations).
- **Motion:** `src/scripts/motion.ts`.
- Replace `public/resume.pdf` and `public/favicon.svg`; add `public/og-image.png` when ready.

## Deploy
`dist/` is plain static files, so any host works. Only two settings are host-specific:
`SITE_URL` and `BASE_PATH` (see `astro.config.mjs`).

- **GitHub Pages:** Settings → Pages → Source: *GitHub Actions*. Pushing to `main` runs `.github/workflows/deploy.yml`.
- **Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, output `dist`, set `SITE_URL` to your domain.
