# MUSTAFATHEATHLETE

Informational website for Mustafa, personal trainer at Fitness First Oxford Street, central London.
Built with [Astro](https://astro.build) as a static site - no database, no backend.

Domain terms (Client, Prospect, Service, Base Gym, Home Visit, Transformation…) are defined in [GLOSSARY.md](./GLOSSARY.md).

## Run it

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # outputs the static site to dist/
```

## Pages

| Page            | File                              |
| --------------- | --------------------------------- |
| Home            | `src/pages/index.astro`           |
| About           | `src/pages/about.astro`           |
| Services        | `src/pages/services.astro`        |
| Testimonials    | `src/pages/testimonials.astro`    |
| Client Workouts | `src/pages/client-workouts.astro` |

## Before launch: fill-in checklist

Most settings live in **`src/config.ts`**.

- [ ] **Social links** - paste Instagram and TikTok URLs into `SOCIALS` in `src/config.ts`. Until then the icons show greyed out.
- [ ] **Home page media** - put clips/photos of Mustafa in `public/media/` and set `src` on each `HOME_MEDIA` item in `src/config.ts`. Keep videos short, muted and compressed (MP4, ideally under ~3 MB each).
- [ ] **All description text is lorem ipsum** - replace it page by page with Mustafa's real words (headings are already final). The About story, philosophy and qualification details are in `src/pages/about.astro`.
- [ ] **Testimonials** - replace the example entries in `src/pages/testimonials.astro`. Get **written consent** from each client before publishing their before/after photos.
- [ ] **Client Workouts** - add files to `public/media/` and set `src` on each item in `src/pages/client-workouts.astro`. Only show clients who've agreed.
- [ ] **Photos across the site** - every dashed placeholder box is an `<ImageSlot>`; pass `src="/media/your-file.jpg"` to fill it.
- [ ] **Services copy** - lorem ipsum in `SERVICES` in `src/config.ts`; write each service's summary and two paragraphs in Mustafa's voice.
- [ ] **Domain** - once bought, set `site` in `astro.config.mjs` (enables canonical URLs).

## Deploy

Free static hosting on Netlify or Vercel: connect the repo, build command `npm run build`, publish directory `dist`.

## Getting found on Google ("personal trainer near me")

The website helps, but the map results are driven mainly by a **Google Business Profile**:

1. Create a profile at business.google.com as a **service-area business** (hide the address - the gym belongs to Fitness First), category "Personal trainer", service area central London / London.
2. Link it to the website and the WhatsApp number.
3. Ask every happy client for a Google review - these are the biggest local ranking factor.
4. Once the domain is live, add it in Google Search Console and submit the site.
