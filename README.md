# SuleimanAahmed.github.io

Static academic site for Suleiman Ahmed. Plain HTML/CSS/JS, no build step, no dependencies beyond Google Fonts (loaded via CDN in `style.css`).

## Files

```
index.html          Home
about.html           Background, education, awards, affiliations
research.html         Research statement + research experience
publications.html      Posters, manuscript, thesis, presentations
projects.html         Project write-ups
cv.html             CV download page
contact.html          Contact + advisor details
style.css           All styling (design tokens at top of file)
script.js            Mobile nav toggle + active-link highlighting
favicon.svg          Site icon
assets/Suleiman_Ahmed_CV.pdf   Downloadable CV
```

## What I did not do

I have no GitHub credentials and no network access in this environment. I cannot create the repository, push code, or flip the Pages toggle. Everything below is run by you.

## Deploy — exact steps for github.com/SuleimanAahmed

1. Go to https://github.com/new while logged in as `SuleimanAahmed`.
2. Repository name, exactly:
   ```
   SuleimanAahmed.github.io
   ```
   Must match your username exactly, including case. Set visibility to **Public**. Do not initialize with a README (you already have one).
3. Unzip this package locally, then from inside the unzipped folder:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/SuleimanAahmed/SuleimanAahmed.github.io.git
   git push -u origin main
   ```
   If you don't use git locally: on the new repo's GitHub page, use "uploading an existing file" and drag every file/folder in instead of steps above. Same result.
4. On the repo page: **Settings → Pages → Source → Deploy from a branch → Branch: main, folder: / (root) → Save**.
5. Live in a few minutes at:
   ```
   https://suleimanaahmed.github.io
   ```
   (GitHub Pages URLs are case-insensitive in practice, but the repo name itself must match your username's case exactly for Pages to activate at all.)

## Filled in this pass

- `contact.html` — LinkedIn (`linkedin.com/in/suleimanaliahmed`) and GitHub (`github.com/SuleimanAahmed`) links are live.
- Every footer "Source" link across all seven pages now points to `github.com/SuleimanAahmed/SuleimanAahmed.github.io`.

## Still open — not something I can resolve for you

- `publications.html` carries a visible warning about a thesis-attribution conflict (M.Eng./Democritus vs. undergraduate/Aristotle) first flagged in the CV review. Confirm against your official transcript, correct the entry, delete the warning note.
- `cv.html` links a static PDF snapshot. When your CV changes, replace `assets/Suleiman_Ahmed_CV.pdf` with the new file — the page won't do it automatically.
