# Suleiman Ahmed

Personal portfolio of Suleiman Ahmed, PhD researcher in geotechnical engineering at Concordia University, Montréal. The site covers research on permafrost and thermo-hydro-mechanical (THM) modelling, geothermal energy and seismic soil response.

**Live site:** https://suleiimanahmed.github.io/

## Pages
Home, About, Research, Projects, Publications, Resources, Experience, Contact. Each page ends with Previous / Next links.

## Features
- Light and dark themes that follow the device; the sun/moon button overrides it for the session
- Site search (press `/` or use the magnifier) across pages, papers, projects, tools and resources
- Software tools grouped by area, each linking to its official website
- Publication filter, copy-citation buttons and a BibTeX download
- Resource links filterable by type, with a sticky topic bar
- Copy-address button on the Contact page (address assembled only after a real click)
- Responsive layout, three-line mobile menu, back-to-top button
- Scroll animations that switch off when the visitor prefers reduced motion
- Search and sharing metadata: Open Graph / Twitter card, schema.org data, sitemap, web manifest, app icons
- No frameworks, no build step, no cookies, no tracking

## Run locally
```bash
git clone https://github.com/suleiimanahmed/suleiimanahmed.github.io.git
cd suleiimanahmed.github.io
python -m http.server 8000
```
Open http://localhost:8000/.

## Deploy
The repository must be named `suleiimanahmed.github.io`. In Settings > Pages, deploy from the `main` branch, root folder.

## Structure
```
*.html               pages
style.css            styles, themes, print rules
site.js              theme, menu, search, animations, filters, citations, email buttons
assets/              project illustrations, og-image.png, app icons, optional opengeosys.png
site.webmanifest, apple-touch-icon.png, favicon.svg, robots.txt, sitemap.xml, 404.html
```

## Editing
- Keep the navigation and the Previous/Next order identical on every page.
- Add new pages to `sitemap.xml` and to the search index at the top of `site.js`.
- To show the OpenGeoSys logo, save it as `assets/opengeosys.png`.

Software names and logos belong to their owners and show tools I use, not endorsement.

(c) 2026 Suleiman Ahmed. All rights reserved.
