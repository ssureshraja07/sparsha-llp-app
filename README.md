# Sparsha Logistics LLP — React + Tailwind

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Build

```bash
npm run build
npm run preview
```

### Main structure

- `src/components/` — Navbar, Footer, Reveal animation, ServiceCard
- `src/pages/` — Home, Services, Service Details, Gallery, About, Contact
- `src/data.js` — 12 services, detailed service content, 4 homepage hero slides and gallery content
- `src/assets/sparsha-logo.png` — supplied logo with the white background removed

## Before production

Replace the placeholder:
- phone number
- WhatsApp number
- email
- office address / map
- social links
- sample Unsplash images with the company's actual photos
- contact form submission logic

The service detail route is dynamic:
`/services/:serviceId`

### Latest UI updates
- Four-image full-width homepage slider with autoplay, arrows and dots
- Sky-blue `Sparsha` + gold `Logistics LLP` brand treatment
- Service detail pages expanded with banner, breadcrumb, richer content, benefits and related services
- Contact page simplified to Call, WhatsApp, Email and Location only
- Navbar now shows `Sparsha` before the supplied logo
