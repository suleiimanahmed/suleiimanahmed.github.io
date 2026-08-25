# SuleimanAahmed.github.io

Academic site for Suleiman Ahmed — PhD researcher, Geotechnical Engineering, Concordia University.

Live at: https://suleimanaahmed.github.io

Static HTML/CSS/JS. No build step, no framework, no dependencies beyond Google Fonts (loaded via CDN in `style.css`).

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
script.js                        Mobile nav toggle + active-link highlighting
favicon.svg                      Site icon
assets/Suleiman_Ahmed_CV.pdf     Downloadable CV
```

## Updating the site

Edit the relevant HTML file directly, then upload the changed file(s) through GitHub's web UI (repo page → **Add file → Upload files**) or push via git if working locally. GitHub Pages rebuilds automatically from the `main` branch, usually within a couple of minutes.

## Known open item

`publications.html` flags a real inconsistency in the thesis record: it is listed as an M.Eng. thesis at Democritus University of Thrace in one place and as an undergraduate thesis at Aristotle University of Thessaloniki in another. This needs to be checked against the official transcript and corrected — the warning note currently on that page should be deleted once fixed, not before.

## Maintenance notes

- `cv.html` links a static PDF. Replace `assets/Suleiman_Ahmed_CV.pdf` whenever the CV is updated; the page does not regenerate the file itself.
- Fonts (Fraunces, Inter, IBM Plex Mono) load from Google Fonts over the network. If unavailable, the browser falls back to the system serif/sans-serif stack already defined in `style.css` — no action needed.
