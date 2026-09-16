# Jacob Goldring, portfolio

Personal portfolio site for Jacob Goldring, full stack engineer and co-founder
and CTO at Vamo.

Live at [jacobharv.dev](https://jacobharv.dev).

## Stack

- [Next.js 14](https://nextjs.org) with the App Router, built as a fully static
  export (`output: 'export'`)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) with dark mode driven by the system
  setting (`darkMode: 'media'`)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals, which
  respect `prefers-reduced-motion`
- MDX is wired up through `@next/mdx` but no MDX content exists yet
- Mona Sans, a variable font served from `src/fonts`

The contact form posts to [getform.io](https://getform.io) and is protected by
Google reCAPTCHA v2. There is no backend, no API routes and no server actions.

## Local development

```bash
npm ci
npm run dev
```

The site runs at http://localhost:3000.

Other commands:

```bash
npm run build   # static export into out/
npm run lint    # eslint
```

## Deploying

This repo is not connected to Netlify. Pushing to `main` publishes nothing.
Deploys are manual:

1. Run `npm run build`, which writes the site into `out/`
2. Open the site in the Netlify dashboard
3. Go to Deploys
4. Drag the whole `out/` folder onto the drop zone

Netlify serves the new build once the upload finishes.

## Structure

```
src/app          routes, one folder per page, plus sitemap.ts and robots.ts
src/components   shared UI
src/lib          site constants and helpers
src/styles       tailwind layers and typography
public/images    images, served as is because image optimization is disabled
public/llms.txt  plain text summary for AI crawlers
```

## SEO

- `sitemap.ts` and `robots.ts` generate `sitemap.xml` and `robots.txt` at build
- `metadataBase` in `src/app/layout.tsx` makes Open Graph URLs absolute
- Every page sets its own title, description and canonical URL
- A JSON-LD `Person` schema is rendered in the root layout
- `public/llms.txt` gives AI crawlers a plain text summary
