# Suleiman Ahmed

This repository contains the source code for my personal website, built as a lightweight static site and hosted on GitHub Pages.

Live site: https://suleiimanahmed.github.io/

## Overview

This site includes a collection of pages for:
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
- Print or save the Experience page as a PDF
- Email address protection using a human verification step to avoid bot harvesting
- Responsive layout with a mobile menu
- Back-to-top button
- Scroll animations that automatically disable when reduced motion is preferred
- Search and sharing metadata including Open Graph, Twitter card, schema.org data, sitemap, web manifest, and app icons
- No frameworks and no build step required

## Running locally

```bash
git clone https://github.com/suleiimanahmed/suleiimanahmed.github.io.git
cd suleiimanahmed.github.io
python -m http.server 8000
Then open:

Text
http://localhost:8000/
Deployment
This repository must be named:

Text
suleiimanahmed.github.io
To deploy on GitHub Pages:

Open the repository settings
Go to Pages
Set the source to the main branch
Use the root folder as the publishing source
Upload the full site contents together in each release to avoid mixing old and new files
Project structure
Text
*.html               Pages
style.css            Styles, themes, and print rules
site.js              Theme logic, menu behavior, animations, filters, citations, and email checks
assets/              Project illustrations, og-image.png, app icons, and optional opengeosys.png
site.webmanifest     Web app manifest
apple-touch-icon.png App icon
favicon.svg          Favicon
robots.txt           Robots instructions
sitemap.xml          Sitemap
404.html             Not found page
Notes
Software names and logos belong to their respective owners and are shown to indicate tools I use, not as endorsements.

© 2026 Suleiman Ahmed. All rights reserved
