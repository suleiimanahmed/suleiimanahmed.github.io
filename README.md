# Suleiman Ahmed

Civil engineer and researcher · geotechnical and structural engineering · THM modelling of permafrost

**Site:** https://suleiimanahmed.github.io/

Plain HTML, CSS and three small JavaScript files. No framework, no build step, no analytics, no third-party requests.

## Pages
index.html (home) · about.html · research.html · publications.html (filterable) · projects.html · cv.html · contact.html · 404.html

## Files
```
style.css          Design system (colours, spacing, type at the top)
theme-init.js      Applies the saved/system theme before first paint
site.js            Theme, menu, scroll effects, filters, reveal animations
contact.js         Email button (contact page only)
favicon.svg  sitemap.xml  robots.txt  .nojekyll
assets/topo.svg    Contour-line background
assets/Suleiman_Ahmed_CV.pdf   Draft CV generated from the website text (replace with your own if you have one)
docs/              SECURITY.md  TESTING.md  CHANGES.md
```
Not in the ZIP, keep your existing copies: `og-image.jpg`, `apple-touch-icon.jpg`, `assets/headshot.jpg`.

## Deploy (GitHub Pages)
1. Rename the site repository to exactly `suleiimanahmed.github.io`, and the profile repository to exactly `suleiimanahmed`.
2. Upload these files to the root of the `main` branch.
3. Settings > Pages > Deploy from a branch > `main` > `/ (root)`; enable Enforce HTTPS.
4. Regenerate the profile banner image: it still prints the old address.

## Local preview
`python -m http.server 8000` then open http://localhost:8000/

## Edit
- Text: edit the `.html` files. New page: copy one, add it to the menu on every page and to `sitemap.xml`.
- Colours: variables at the top of `style.css`.
- Email: the address is stored scrambled in `contact.js` (array `D` with key `K`). To change it, re-encode: each character code XOR key[i % key.length].

## Security
See docs/SECURITY.md. The email address is not in any HTML file and is decoded only on a real click.

All text, photo and CV are (c) 2026 Suleiman Ahmed.
