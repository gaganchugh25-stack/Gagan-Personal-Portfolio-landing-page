# Gagan Chugh — personal portfolio

Next.js, React, TypeScript and Tailwind CSS, with selective GSAP scroll animation and an independently loaded React Three Fiber sculpture.

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

## Production checks

```sh
npm run typecheck
npm run build
npm start
```

Verified: production build and TypeScript checks pass. Current browser checks covered 1440px desktop and 390px mobile, zero horizontal overflow, 16px main copy, live WebGL on both widths, the page-wide sculpture path, native FAQ expansion and required contact-form validation. Scroll progress and sculpture position were measured before and after scrolling. Cropped screenshots changed during rotation and matched after pause settled; resume was restored for the preview. No browser error/warning logs were observed. Independent visual review returned `ship` against the supplied charcoal/lime reference. Form tests did not open or send an enquiry. Reduced-motion handling is implemented and code-reviewed; a separate OS-level reduced-motion session was not emulated. No Lighthouse score or cross-browser certification is claimed.

## Deployment

Import this directory into a Next.js-compatible host such as Vercel. Use `npm run build`, the default Next.js output and Node.js 22 or newer. No API keys, database or environment variables are needed. For a Node server, use `npm ci`, `npm run build` and `npm start` (the supplied start script binds to loopback for a local reverse proxy). Set the externally reachable hostname if your hosting platform requires it.

After a domain is selected, add its canonical URL and production Open Graph image in `src/app/layout.tsx`. No site has been published by this implementation.

## Content and design

- Career copy and results: `src/app/page.tsx`.
- Base styles: `src/app/globals.css`. Current charcoal/lime reference, readable type and responsive layout: `src/app/reference-refresh.css`.
- Supplied assets: `public/images/`.
- 3D form (desktop and mobile): `src/components/sculpture.tsx`.
- Reference image remains visible until WebGL is ready or when reduced motion is requested. The same 3D scene rotates on desktop and mobile, with a GSAP timeline carrying it along the viewport edge throughout the page. Rotation pauses in background tabs and has a manual pause control. Canvas measurement ignores CSS scaling, preventing the sculpture from shrinking twice while scrolling.
- Navigation, email and LinkedIn links work without scroll animation. Native FAQ controls work without animation. The contact form validates required fields and opens a mailto draft; it does not send or store data. No analytics, cookies or contact-data storage are included.

The user confirmed all résumé figures and the current title Manager Logistics. The supplied LinkedIn URL is used; its profile content could not be retrieved. Portrait and sculpture were supplied by the user; font packages are self-hosted from Fontsource and carry their upstream licences. The live procedural chrome form is an interpretation of the supplied sculpture, not an exact model of it.

`PRODUCT.md` and `DESIGN.md` preserve the approved content and design decisions.

The user explicitly approved matching the supplied reference’s charcoal and lime sections, replacing the earlier light-only direction. The component mapping is recorded in `.impeccable/component-map.md`; unsupported designer testimonials, prices and projects are not copied.

Browser-comment refinements: uppercase GC; uniform uppercase employer typography; transparent OTIF, annual-savings and commercial-expertise backgrounds; shared left alignment for career text. ImageGen-retouched studio portrait is in `public/images/gagan-chugh-professional.jpg`; the original is retained. The edit prompt is retained locally. Checked at 1126px and 390px with no horizontal overflow or console errors.

## Repository privacy

Personal resume documents, credentials, environment files, local review screenshots, dependencies and generated build output are excluded through `.gitignore`. No secrets or private resume file are needed to run this project. Public-facing profile information and website images are included.
