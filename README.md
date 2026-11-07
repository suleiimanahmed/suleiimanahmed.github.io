# Suleiman Ahmed

Personal portfolio of Suleiman Ahmed, PhD researcher in geotechnical engineering at Concordia University, Montréal.

**Live site:** https://suleimanahmedx.github.io/

## Features
- Light and dark themes that follow the device; the sun/moon button overrides it for the session
- Contact form: visitors write to me without ever seeing my email address
- Publication filter, copy-citation buttons and a BibTeX download
- Resource links filterable by type
- Responsive layout, three-line mobile menu, back-to-top button
- Scroll animations that switch off when the visitor prefers reduced motion
- No frameworks, no build step

## Structure
```
*.html                pages
style.css             styles, themes, print rules
site.js               theme, menu, animations, filters, citations, contact form, content protection
assets/               project illustrations, logos, og-image.png, app icons
tools/check-links.py  checks every external link (run locally, needs internet)
site.webmanifest, apple-touch-icon.png, favicon.svg, robots.txt, sitemap.xml, 404.html
```

## Deploying on GitHub Pages
Push the contents of this folder to the root of the `suleimanahmedx.github.io` repository (branch `main`), with Pages set to deploy from that branch. The `_nojekyll` file stops GitHub from running Jekyll over the files.

## Content protection
`site.js` blocks the right-click menu (except in form fields), Ctrl/Cmd+U, Ctrl/Cmd+S, F12 and the DevTools shortcuts. This is a deterrent only: a static site must send its HTML, CSS and JavaScript to every visitor, so the source can always be read from the browser menu, `view-source:` or a command-line download. To switch it off, set `ENABLE_CONTENT_PROTECTION` to `false` at the top of `site.js`.

## Maintenance
- Update the `<lastmod>` dates in `sitemap.xml` and the "Last updated" line in each page footer when content changes.
- Run `python3 tools/check-links.py` before publishing to catch dead external links.

Software names and logos belong to their owners and show tools I use, not endorsement.

(c) 2026 Suleiman Ahmed. All rights reserved.
