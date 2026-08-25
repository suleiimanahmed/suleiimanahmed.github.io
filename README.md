# SuleimanAahmed.github.io

Academic site for Suleiman Ahmed — PhD researcher, Geotechnical Engineering, Concordia University.

Live at: https://suleimanaahmed.github.io

Static HTML/CSS. No build step at deploy time, no framework, no JS dependency. Fonts load from Google Fonts via CDN in `style.css`.

Layout: fixed left sidebar (name, tagline, contact links, CV download) with a scrolling content column on the right, styled after a common academic-portfolio pattern. Collapses to a stacked header on narrow screens.

## Structure

```
index.html                       Home
about.html                       Background, education, awards, affiliations
research.html                    Research statement + research experience
publications.html                Posters, manuscript, thesis, presentations
projects.html                    Project write-ups
cv.html                          CV download page
contact.html                     Contact + advisor details
style.css                        All styling (design tokens at top of file)
favicon.svg                      Site icon
build.js                         Node script that generates all seven HTML files
assets/Suleiman_Ahmed_CV.pdf     Downloadable CV
assets/headshot.jpg              Sidebar photo
```

## Editing content

`build.js` is the source of truth — it contains every page's content as template strings and writes out the `.html` files. To change content: edit `build.js`, then run `node build.js` (requires Node.js) to regenerate the HTML, then upload the changed `.html` file(s).

If Node isn't available, editing the `.html` files directly also works — they're plain HTML, `build.js` just saves re-typing the shared sidebar/nav on every page.

## Avatar

`assets/headshot.jpg` is used in the sidebar (104px circle, `object-fit: cover`, defined in the `avatarSVG()` function in `build.js` despite the function name — it now returns an `<img>` tag, not an SVG monogram). To swap the photo: replace `assets/headshot.jpg` with a new image of the same filename, or update the `src` in `build.js` if using a different filename.

## Content source

All CV-derived content (education, experience, publications, funding, affiliations, leadership) is synced to `Suleiman_Ahmed_CV_Funding_v3.pdf` as of the last update. The earlier thesis-attribution conflict (M.Eng./Democritus vs. undergraduate/Aristotle) that appeared in prior drafts is not present in v3 — the CV now lists a single, consistent thesis record — so no warning note remains on `publications.html`. If a future CV revision reintroduces inconsistent institution/degree-level attribution for the same thesis, check it against the transcript before publishing.

## Maintenance notes

- `cv.html` links a static PDF. Replace `assets/Suleiman_Ahmed_CV.pdf` when the CV updates; the page doesn't regenerate the file itself.
- If Google Fonts is unreachable, the browser falls back to the system serif/sans-serif/monospace stack already defined in `style.css` — no action needed.
