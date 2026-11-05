# Suleiman Ahmed

Personal portfolio of Suleiman Ahmed, PhD researcher in geotechnical engineering at Concordia University, Montréal.

**Live site:** https://suleiimanahmed.github.io/

## Pages
Home, About, Research, Projects, Publications, Resources, Experience, Contact. Each page ends with compact Previous / Next links.

## Features
- Light and dark themes that follow the device; the sun/moon button overrides it for the session
- Contact form: visitors write to me without ever seeing my email address
- Publication filter, copy-citation buttons and a BibTeX download
- Resource links filterable by type
- Responsive layout, three-line mobile menu, back-to-top button
- Scroll animations that switch off when the visitor prefers reduced motion
- Search and sharing metadata: Open Graph / Twitter card, schema.org data, sitemap, web manifest, app icons
- No frameworks, no build step

## Activate the contact form (2 minutes)
1. Go to https://web3forms.com, enter the email address that should receive messages, and copy the access key they send.
2. Open `site.js` and replace `PASTE-YOUR-WEB3FORMS-ACCESS-KEY` on the first lines with that key.
3. Commit and push, then send yourself a test message from the Contact page.

The access key only routes messages to your inbox; the email address itself never appears in this repository. Until the key is added, the form tells visitors to use LinkedIn.

## Logos
- `assets/opengeosys.jpg` is the OpenGeoSys logo (included).
- Save the Technical Chamber of Greece logo as `assets/tee.jpg`; the About page picks it up automatically. Until then it shows the site's icon or the initials "TEE".
- Other tools and organisations use their website icon, falling back to initials.

## Run locally
```bash
git clone https://github.com/suleiimanahmed/suleiimanahmed.github.io.git
cd suleiimanahmed.github.io
python -m http.server 8000
```

## Deploy
The repository must be named `suleiimanahmed.github.io`. In Settings > Pages, deploy from the `main` branch, root folder. Always upload every file from a release together; a mix of old and new files breaks the layout.

## Structure
```
*.html               pages
style.css            styles, themes, print rules
site.js              theme, menu, animations, filters, citations, contact form
assets/              project illustrations, logos, og-image.png, app icons
site.webmanifest, apple-touch-icon.png, favicon.svg, robots.txt, sitemap.xml, 404.html
```

Software names and logos belong to their owners and show tools I use, not endorsement.

(c) 2026 Suleiman Ahmed. All rights reserved.
