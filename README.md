# Noah — Portfolio

Personal site for professional work: selected projects, skills, and experience. Built as a fast, accessible one-pager with a dark editorial layout.

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** for scroll and micro-interactions
- **Lucide** for icons
- **next/font** — Geist, Geist Mono, Instrument Serif

Server Components handle static content. Client Components are used only where interaction is required.

## Development

Requires Node.js 20.9+ (`.nvmrc` pins 24).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

On the same Wi-Fi, the Network URL printed by `next dev` can be opened on a phone.

## Project layout

```
src/
  app/                 # Routes, metadata, global CSS
  components/
    graphics/          # Mark and hero portrait
    layout/            # Header, footer, skip link, scroll progress
    motion/            # Shared animation primitives
    sections/          # Page sections
    ui/                # Small presentational pieces
  content/site.ts      # Site copy, links, and asset paths
  hooks/
  lib/
  types/
public/images/         # Portrait and project stills
```

Copy lives in `src/content/site.ts`. Components do not hard-code text.

## Design

Warm dark canvas, copper accent, serif display type. Motion is tied to content (section reveals, active nav) and respects `prefers-reduced-motion`. The hero portrait scales with the viewport so the full image stays visible.

## Deploy

Import the repository on [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` to the production domain and keep `url` in `src/content/site.ts` in sync. Do not commit `.env` files; `.env.example` documents the public URL variable.

## Accessibility

Skip link, semantic landmarks, visible focus, reduced-motion support, and image alt text.
