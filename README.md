# NorthPeak Performance (Demo) — Next.js Static Export

Demo website project for a fictional Personal Trainer / Strength Coach in Nottingham.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- Static export (`output: "export"`)

## Run locally
```bash
npm install
npm run dev
```

## Production build (static export)
```bash
npm run build
```
This creates a static `out/` directory ready for hosting.

## Netlify deploy
- `netlify.toml` is configured with:
  - build command: `npm run build`
  - publish directory: `out`

## Cloudflare Pages deploy
- Build command: `npm run build`
- Build output directory: `out`
- Node version: 18+

## Notes
- This is demo content only and not a real business.
- Contact details, testimonials, and claims are placeholders.
