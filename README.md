# Suleiman Ahmed

This repository contains the source code for my personal website, built as a lightweight static site and hosted on GitHub Pages.

Live site: https://suleiimanahmed.github.io/

## Overview

This site includes pages for:
- Home
- About
- Research
- Projects
- Publications
- Resources
- Experience
- Contact

Each page ends with compact Previous / Next navigation links for easier browsing.

## Features

- Light and dark theme support that follows the device default
- Session-based theme override using the sun/moon toggle
- Publication filtering, citation copy buttons, and BibTeX download
- Resource filtering by type
- Email address protection using a human verification step to avoid bot harvesting
- Responsive layout with a mobile menu
- Back-to-top button
- Scroll animations that automatically disable when reduced motion is preferred
- Search and sharing metadata, including Open Graph, Twitter Card, schema.org data, sitemap, web manifest, and app icons
- No frameworks and no build step required

## Running locally

```bash
git clone https://github.com/suleiimanahmed/suleiimanahmed.github.io.git
cd suleiimanahmed.github.io
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Deployment

This repository must be named:

```text
suleiimanahmed.github.io
```

To deploy on GitHub Pages:

1. Open the repository settings
2. Go to Pages
3. Set the source to the main branch
4. Use the root folder as the publishing source
5. Upload the full site contents together in each release to avoid mixing old and new files

## Project structure

```text
*.html              Pages
style.css          Styles, themes, and print rules
site.js            Theme logic, menu behavior, animations, filters, citations, and email checks
assets/            Project illustrations, og-image.png, app icons, and optional opengeosys.png
site.webmanifest   Web app manifest
apple-touch-icon.png  App icon
favicon.svg        Favicon
robots.txt         Robots instructions
sitemap.xml       Sitemap
404.html           Not found page
```

## Notes

- Software names and logos belong to their respective owners and are shown to indicate tools I use, not as endorsements.
- This site is intentionally lightweight and framework-free.

© 2026 Suleiman Ahmed. All rights reserved
