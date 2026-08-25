const fs = require('fs');

const NAV_ITEMS = [
  ['index.html', 'Home'],
  ['about.html', 'About'],
  ['research.html', 'Research'],
  ['publications.html', 'Publications'],
  ['projects.html', 'Projects'],
  ['cv.html', 'CV'],
  ['contact.html', 'Contact'],
];

const ICON = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9.5 14.5 14.5 9.5"/><path d="M11 6.5 12.3 5.2a3.4 3.4 0 0 1 4.8 4.8L15.8 11.3"/><path d="M13 17.5 11.7 18.8a3.4 3.4 0 0 1-4.8-4.8L8.2 12.7"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8.5 7 4 12l4.5 5"/><path d="M15.5 7 20 12l-4.5 5"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 4v11"/><path d="M7.5 11 12 15.5 16.5 11"/><path d="M4.5 18.5h15"/></svg>`,
};

function avatarSVG() {
  return `<img src="assets/headshot.jpg" alt="Suleiman Ahmed" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" loading="lazy" />`;
}

function groundGraphic() {
  // Schematic cold-region ground cross-section — stands in for a portrait photo.
  return `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic diagram of a permafrost ground cross-section">
    <rect x="0" y="0" width="640" height="46" fill="#F3F4F0"/>
    <rect x="0" y="46" width="640" height="30" fill="#C79A66"/>
    <rect x="0" y="76" width="640" height="26" fill="#9FC1CC"/>
    <rect x="0" y="102" width="640" height="42" fill="#5C8699"/>
    <rect x="0" y="144" width="640" height="76" fill="#35505E"/>
    <line x1="0" y1="46" x2="640" y2="46" stroke="#17211E" stroke-width="1" stroke-dasharray="2 4" opacity=".3"/>
    <line x1="0" y1="76" x2="640" y2="76" stroke="#17211E" stroke-width="1" stroke-dasharray="2 4" opacity=".25"/>
    <text x="16" y="30" font-family="IBM Plex Mono, monospace" font-size="11" fill="#4B5652">GROUND SURFACE</text>
    <text x="16" y="65" font-family="IBM Plex Mono, monospace" font-size="11" fill="#17211E">ACTIVE LAYER</text>
    <text x="16" y="93" font-family="IBM Plex Mono, monospace" font-size="11" fill="#17211E">PERMAFROST TABLE</text>
    <text x="16" y="127" font-family="IBM Plex Mono, monospace" font-size="11" fill="#F3F4F0">PERMAFROST — THM COUPLED ZONE</text>
    <text x="16" y="185" font-family="IBM Plex Mono, monospace" font-size="11" fill="#F3F4F0">DEEP GROUND / UNFROZEN BASE</text>
  </svg>`;
}

function sidebar(active) {
  const links = NAV_ITEMS.map(([href, label]) =>
    `<a href="${href}"${href === active ? ' class="active"' : ''}>${label}</a>`).join('\n        ');
  return `  <aside class="sidebar">
    <div class="avatar">${avatarSVG()}</div>
    <div class="sidebar-block-text">
      <p class="sidebar-name">Suleiman Ahmed</p>
      <p class="sidebar-role">PhD Researcher<span class="sep">·</span>Geotechnical Engineering<span class="sep">·</span>Concordia University<span class="sep">·</span>THM Modelling of Permafrost</p>
    </div>
    <div class="sidebar-strata"><span></span><span></span><span></span><span></span><span></span></div>
    <ul class="sidebar-links">
      <li><a href="mailto:suleiman.ahmed@mail.concordia.ca">${ICON.mail}Email</a></li>
      <li><a href="https://www.linkedin.com/in/suleimanaliahmed/" target="_blank" rel="noopener">${ICON.link}LinkedIn</a></li>
      <li><a href="https://github.com/SuleimanAahmed" target="_blank" rel="noopener">${ICON.code}GitHub</a></li>
      <li><a href="assets/Suleiman_Ahmed_CV.pdf" download>${ICON.download}Download CV</a></li>
    </ul>
    <div class="sidebar-footer">
      &copy; 2026 Suleiman Ahmed<br/>
      <a href="https://github.com/SuleimanAahmed/SuleimanAahmed.github.io" target="_blank" rel="noopener">Site source</a>
    </div>
  </aside>`;
}

function topNav(active) {
  const links = NAV_ITEMS.map(([href, label]) =>
    `<a href="${href}"${href === active ? ' class="active"' : ''}>${label}</a>`).join('\n        ');
  return `    <nav class="top-nav">
      <div class="inner">
        ${links}
      </div>
    </nav>`;
}

function page({ file, title, description, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} — Suleiman Ahmed</title>
<meta name="description" content="${description}" />
<link rel="icon" type="image/svg+xml" href="favicon.svg" />
<link rel="stylesheet" href="style.css" />
</head>
<body>
<div class="layout">
${sidebar(file)}
  <div class="main">
${topNav(file)}
${body}
    <footer class="page-footer">
      <div class="content">Built with static HTML/CSS.</div>
    </footer>
  </div>
</div>
</body>
</html>
`;
}

/* ---------------- HOME ---------------- */
const home = page({
  file: 'index.html', title: 'Home',
  description: 'Suleiman Ahmed — PhD researcher in geotechnical engineering, working on thermo-hydro-mechanical modelling of permafrost and frozen soils.',
  body: `
    <header class="hero content">
      <p class="eyebrow">Concordia University · Geotechnical Engineering</p>
      <h1 class="greet">Hello there, I'm Suleiman!</h1>
      <p class="lede">I work on computational geomechanics, with a focus on analytical and numerical modelling of complex thermo-hydro-mechanical (THM) systems in frozen soils and permafrost environments.</p>
      <figure class="ground-graphic">
        ${groundGraphic()}
        <figcaption class="ground-caption">Schematic cold-region ground profile — the active layer, permafrost table, and coupled THM zone this research models.</figcaption>
      </figure>
    </header>

    <section class="content">
      <h2>Research Interests</h2>
      <ul class="tag-grid">
        <li>Computational Geomechanics</li>
        <li>Finite Element Method (FEM)</li>
        <li>Thermo-Hydro-Mechanical (THM) Coupling</li>
        <li>Frozen Soils &amp; Permafrost</li>
        <li>Nonlinear Static &amp; Dynamic Analysis</li>
        <li>Multiphysics Modelling</li>
        <li>Numerical Methods for PDEs</li>
        <li>Geoenergy Systems</li>
      </ul>
    </section>

    <section class="content">
      <h2>Currently</h2>
      <p>PhD research in the Energy and Environmental Geomechanics Group at Concordia University, modelling permafrost degradation with OpenGeoSys and studying its coupled effects on ground stability and cold-region infrastructure. Advised by Dr. Biao Li.</p>
      <p><a class="text-link" href="research.html">Read the full research statement &rarr;</a></p>
    </section>
`,
});

/* ---------------- ABOUT ---------------- */
const about = page({
  file: 'about.html', title: 'About',
  description: 'About Suleiman Ahmed — background, education, and affiliations.',
  body: `
    <header class="page-hero content">
      <p class="eyebrow">About</p>
      <h1>Background</h1>
      <p class="lede">Geotechnical engineer and PhD student applying finite element and multiphysics methods to cold-region ground problems, with prior field and site-engineering experience in Greece and Kenya.</p>
    </header>

    <section class="content">
      <h2>Biography</h2>
      <p>Suleiman Ahmed is a PhD student in Civil Engineering (Geotechnical Engineering) at Concordia University, working within the Energy and Environmental Geomechanics Group under Dr. Biao Li. His research applies thermo-hydro-mechanical (THM) numerical modelling to permafrost degradation and its consequences for ground stability and infrastructure performance in cold regions, using the open-source multiphysics platform OpenGeoSys.</p>
      <p>He holds an M.Eng. in Civil Engineering from the Democritus University of Thrace, Greece, where his thesis examined the effect of stone columns on the seismic response of soils, supervised by Dr. Emmanouil Rovithis. Before returning to research, he worked as a site and civil engineer on construction projects in Greece and Kenya, and has volunteered extensively with student and community organizations in both countries.</p>
    </section>

    <section class="content">
      <h2>Education</h2>
      <div class="entry">
        <div class="entry-head"><h3>Ph.D., Civil Engineering — Geotechnical Engineering</h3><span class="entry-date">Sept 2025 – Present</span></div>
        <p class="entry-sub">Concordia University, Canada — Advisor: Dr. Biao Li</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>M.Eng., Civil Engineering</h3><span class="entry-date">Nov 2019 – Dec 2024</span></div>
        <p class="entry-sub">Democritus University of Thrace, Greece — Advisor: Dr. Emmanouil Rovithis</p>
        <p>Thesis: <em>Non-linear numerical analysis of stone columns effect on the seismic response of soils: the case of the 4th generation technology park in Thessaloniki.</em></p>
      </div>
    </section>

    <section class="content">
      <h2>Teaching Experience</h2>
      <div class="entry">
        <div class="entry-head"><h3>Teaching Assistant &amp; Marker, Geology for Civil Engineers</h3><span class="entry-date">Fall 2025, Fall 2026</span></div>
        <p class="entry-sub">Concordia University — Instructor: Dr. Biao Li</p>
        <ul><li>Lead tutorial sessions and grade assignments, quizzes, and exams against set rubrics, providing consistent feedback to undergraduate students.</li></ul>
      </div>
    </section>

    <section class="content">
      <h2>Professional Experience</h2>
      <div class="entry">
        <div class="entry-head"><h3>Civil Engineer, Hellas Constructions</h3><span class="entry-date">May 2025 – Aug 2025</span></div>
        <p class="entry-sub">Athens, Greece</p>
        <ul><li>Supervised on-site activities and coordinated contractors/design teams; conducted geotechnical site investigations and foundation monitoring using AutoCAD, DEEPSOIL, and Google Earth.</li></ul>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Site Civil Engineer, Sigma Construction</h3><span class="entry-date">Jan 2025 – Apr 2025</span></div>
        <p class="entry-sub">Nairobi, Kenya</p>
        <ul><li>Reviewed ETABS models for a 14-storey RC building against Eurocodes 1, 2, and 7; resolved foundation and reinforcement-detailing conflicts to reduce rework.</li></ul>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Engineering Intern, Technical Office, Ouzounidou</h3><span class="entry-date">Jul 2023 – Aug 2023</span></div>
        <p class="entry-sub">Xanthi, Greece — Supervisor: Anthoula Ouzounidou</p>
        <ul><li>Prepared and reviewed engineering drawings (AutoCAD) for design compliance on active building projects.</li></ul>
      </div>
    </section>

    <section class="content">
      <h2>Funding &amp; Awards</h2>
      <div class="entry">
        <div class="entry-head"><h3>Concordia Conference and Exposition Award</h3><span class="entry-date">2026</span></div>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Gina Cody School Conference Travel Support Award</h3><span class="entry-date">2026</span></div>
        <p>Gina Cody School of Engineering and Computer Science, Concordia University.</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Volt-Age Doctoral Fellowship</h3><span class="entry-date">Sept 2025 – Present</span></div>
        <p>Multi-year doctoral research fellowship, Concordia University.</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Concordia University International Tuition Award of Excellence</h3><span class="entry-date">Sept 2025 – Present</span></div>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Greek Government Scholarship</h3><span class="entry-date">Nov 2018 – Dec 2024</span></div>
        <p>Merit-based.</p>
      </div>
    </section>

    <section class="content">
      <h2>Professional Affiliations</h2>
      <div class="affiliation-row">
        <span>Canadian Society for Civil Engineering (CSCE) — Member</span>
        <span>American Society of Civil Engineers (ASCE) — Member</span>
        <span>Technical Chamber of Greece (TCG) — Licensed Civil Engineer, Member</span>
        <span>Engineers Board of Kenya (EBK) — Application Under Review</span>
      </div>
    </section>

    <section class="content">
      <h2>Leadership &amp; Community Engagement</h2>
      <div class="entry">
        <div class="entry-head"><h3>Volunteer, Volt-Age Summit</h3><span class="entry-date">May 2026</span></div>
        <p class="entry-sub">Concordia University</p>
        <p>Supported technical/organizational coordination and participant engagement.</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Volunteer, Open House Day</h3><span class="entry-date">Feb 2024</span></div>
        <p class="entry-sub">Dept. of Civil Engineering, Democritus University of Thrace</p>
        <p>Guided prospective students and visitors.</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Founding Member, Young Stars Charity Organization</h3><span class="entry-date">2021 – Present</span></div>
        <p>Coordinate mentorship, fundraising, and educational-resource distribution for underprivileged children in Kenya.</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Volunteer Translator, Greek–English</h3><span class="entry-date">2020 – 2025</span></div>
        <p>Provided translation support to international students and community members.</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Member, STEM Voices in Kenya</h3><span class="entry-date">2020 – Present</span></div>
        <p>Mentor students on international academic opportunities; guided two successful scholarship applications.</p>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Chairperson, Kenyan Students in Greece</h3><span class="entry-date">2019 – 2023</span></div>
        <p>Founded and led a ~40-member student organization; liaised between students, universities, and local institutions.</p>
      </div>
    </section>
`,
});

/* ---------------- RESEARCH ---------------- */
const research = page({
  file: 'research.html', title: 'Research',
  description: 'Research statement and research experience of Suleiman Ahmed.',
  body: `
    <header class="page-hero content">
      <p class="eyebrow">Research</p>
      <h1>Statement &amp; Experience</h1>
    </header>

    <section class="content">
      <h2>Research Statement</h2>
      <p>My research sits in computational geomechanics and geoenergy, applying the finite element method and multiphysics modelling to nonlinear static and dynamic problems in frozen soils and permafrost. The central question is how coupled thermal, hydraulic, and mechanical processes drive permafrost degradation, and how that degradation propagates into loss of ground stability and reduced infrastructure performance in cold regions.</p>
      <p>Current work uses OpenGeoSys to build and calibrate THM models against field data, including a field-scale investigation of pore-water salinity effects on active-layer and permafrost dynamics at Norman Wells, Northwest Territories, Canada. A parallel line of work examines geothermal energy as a low-carbon heating and cooling solution for cold-region and urban microclimates, connecting subsurface characterization to district-scale energy system design.</p>
    </section>

    <section class="content">
      <h2>Research Experience</h2>
      <div class="entry">
        <div class="entry-head"><h3>PhD Researcher, Energy and Environmental Geomechanics Group</h3><span class="entry-date">Sept 2025 – Present</span></div>
        <p class="entry-sub">Dept. of Building, Civil and Environmental Engineering, Concordia University</p>
        <ul>
          <li>Model coupled THM processes in permafrost using OpenGeoSys to study degradation mechanisms and their effects on ground stability and cold-region infrastructure performance.</li>
          <li>Develop and validate simulation models in C++, calibrated against field data and published literature.</li>
          <li>Contribute to the design of resilient geotechnical and geoenergy systems through coupled multiphysics numerical analysis.</li>
        </ul>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Research Assistant, Geothermal Energy Feasibility Study, Loyola Campus</h3><span class="entry-date">Oct 2025</span></div>
        <p class="entry-sub">Concordia University PLAN/NET ZER&Oslash; initiative, with industry partner &Eacute;nergir</p>
        <ul><li>Supported field investigations, exploratory drilling, and subsurface sampling to characterize ground thermal properties for a low-carbon district geothermal energy network.</li></ul>
      </div>
      <div class="entry">
        <div class="entry-head"><h3>Research Student</h3><span class="entry-date">May 2024 – Nov 2024</span></div>
        <p class="entry-sub">Dept. of Civil Engineering, Democritus University of Thrace, Greece</p>
        <ul>
          <li>Conducted 1D non-linear site response analysis in DEEPSOIL for stone-column-improved soils under a proposed Science and Technology Park, Thessaloniki.</li>
          <li>Applied equivalent-linear and effective-stress approaches under Eurocode-8-based seismic input motions.</li>
        </ul>
      </div>
    </section>

    <section class="content">
      <h2>Technical Skills</h2>
      <div class="two-col">
        <div><h3>FEM / Multiphysics</h3><p>ABAQUS, ANSYS, PLAXIS, FLAC, COMSOL Multiphysics, OpenGeoSys, MFront, DEEPSOIL</p></div>
        <div><h3>Programming</h3><p>Python, Fortran, MATLAB, C/C++, SQL</p></div>
      </div>
      <p style="margin-top:16px"><strong>Methods:</strong> THM coupling, constitutive modelling, fracture/damage and contact mechanics, high-performance computing, stochastic simulation, verification &amp; validation.</p>
    </section>
`,
});

/* ---------------- PUBLICATIONS ---------------- */
const publications = page({
  file: 'publications.html', title: 'Publications',
  description: 'Publications and presentations by Suleiman Ahmed.',
  body: `
    <header class="page-hero content">
      <p class="eyebrow">Publications</p>
      <h1>Publications &amp; Presentations</h1>
    </header>

    <section class="content">
      <h2>Manuscript</h2>
      <div class="pub">
        <span class="kind">Manuscript — awaiting publication · Nov 2024</span>
        <div>Ahmed, S., &amp; Rovithis, E. (2024). <em>Numerical Analysis of Stone Columns Effect on the Seismic Response of Soils: The Case of the 4th Generation Technology Park in Thessaloniki.</em></div>
      </div>
    </section>

    <section class="content">
      <h2>Conference Posters</h2>
      <div class="pub">
        <span class="kind">Poster · Sept 2026</span>
        <div>Ahmed, S., &amp; Li, B. (2026). <em>Pore-Water Salinity Effects on Seasonal Dynamics of Active Layer and Permafrost at Norman Wells, NWT, Canada, Using a Thermo-Hydro-Mechanical Model.</em> GeoQu&eacute;bec 2026 — 79th Canadian Geotechnical Conference, Qu&eacute;bec City.</div>
      </div>
      <div class="pub">
        <span class="kind">Poster · July 2026</span>
        <div>Ahmed, S., Li, B., Vadiee, S., Khaksar, K., Norouzi, E., &amp; Wang, L.L. (2026). <em>Transforming Built and Urban Microclimates: Geothermal Energy in Cold Regions.</em> DBMC 2026 — 17th International Conference on the Durability of Building Materials and Components, Montreal, July 20&ndash;24.</div>
      </div>
      <div class="pub">
        <span class="kind">Poster · May 2026</span>
        <div>Ahmed, S., Li, B., Vadiee, S., Khaksar, K., Norouzi, E., &amp; Wang, L.L. (2026). <em>Transforming Built and Urban Microclimates: Geothermal Energy in Cold Regions.</em> Volt-Age Electricity Society Summit.</div>
      </div>
    </section>

    <section class="content">
      <h2>Invited Presentations</h2>
      <div class="pub">
        <span class="kind">Course presentation · 2024</span>
        <div>&ldquo;Applications of the Finite Element Method in Geotechnical Engineering: Numerical Analysis of Slope Stability and Shield Tunnelling.&rdquo; Embankments and Earth Dams, Democritus University of Thrace.</div>
      </div>
    </section>
`,
});

/* ---------------- PROJECTS ---------------- */
const projects = page({
  file: 'projects.html', title: 'Projects',
  description: 'Research projects by Suleiman Ahmed in computational geomechanics and geoenergy.',
  body: `
    <header class="page-hero content">
      <p class="eyebrow">Projects</p>
      <h1>Selected Projects</h1>
    </header>
    <section class="content">
      <div class="project">
        <span class="project-status">Ongoing — PhD research</span>
        <h3>THM Modelling of Permafrost Degradation</h3>
        <p>Coupled thermo-hydro-mechanical simulation of permafrost in OpenGeoSys, focused on how degradation mechanisms affect ground stability and infrastructure performance, including a field-scale case study of pore-water salinity effects at Norman Wells, Northwest Territories.</p>
        <p class="tools">OpenGeoSys · C++ · Field calibration data</p>
      </div>
      <div class="project">
        <span class="project-status">Completed — Oct 2025</span>
        <h3>Loyola Campus Geothermal Feasibility Study</h3>
        <p>Field investigation supporting a geothermal feasibility assessment for a low-carbon district heating and cooling network at Concordia University's Loyola Campus, under the PLAN/NET ZER&Oslash; initiative with industry partner &Eacute;nergir. Contributed to subsurface characterization through exploratory drilling and sample collection.</p>
        <p class="tools">Field investigation · Subsurface sampling</p>
      </div>
      <div class="project">
        <span class="project-status">Completed — 2024</span>
        <h3>Seismic Response of Stone-Column-Improved Soils</h3>
        <p>M.Eng. thesis project analyzing the effect of stone columns (gravel piles) on the seismic response of soft soils, for a proposed Science and Technology Park in Thessaloniki, Greece. Used 1D non-linear site response analysis under Eurocode-8-based input motions.</p>
        <p class="tools">DEEPSOIL · Equivalent-linear &amp; effective-stress analysis</p>
      </div>
    </section>
`,
});

/* ---------------- CV ---------------- */
const cv = page({
  file: 'cv.html', title: 'CV',
  description: 'Curriculum vitae of Suleiman Ahmed.',
  body: `
    <header class="page-hero content">
      <p class="eyebrow">CV</p>
      <h1>Curriculum Vitae</h1>
      <p class="lede">Full academic CV, including research and teaching experience, publications, funding, and professional affiliations.</p>
    </header>
    <section class="content">
      <a class="btn" href="assets/Suleiman_Ahmed_CV.pdf" download>Download CV (PDF)</a>
      <p class="note">Replace <code>assets/Suleiman_Ahmed_CV.pdf</code> with the latest signed-off version before each funding cycle — this page links to a file, it does not regenerate one.</p>
    </section>
    <section class="content">
      <h2>Summary</h2>
      <p>PhD student in Geotechnical Engineering at Concordia University, specializing in computational geomechanics, geoenergy, and multiphysics modelling of thermo-hydro-mechanical processes in frozen soils and permafrost. M.Eng. in Civil Engineering, Democritus University of Thrace. Prior professional experience as a site and civil engineer in Greece and Kenya.</p>
    </section>
`,
});

/* ---------------- CONTACT ---------------- */
const contact = page({
  file: 'contact.html', title: 'Contact',
  description: 'Contact Suleiman Ahmed.',
  body: `
    <header class="page-hero content">
      <p class="eyebrow">Contact</p>
      <h1>Get in Touch</h1>
    </header>
    <section class="content">
      <ul class="contact-list">
        <li><span class="label">Email</span><a class="text-link" href="mailto:suleiman.ahmed@mail.concordia.ca">suleiman.ahmed@mail.concordia.ca</a></li>
        <li><span class="label">Phone</span><span>438-722-6732</span></li>
        <li><span class="label">Institution</span><span>Concordia University, Montr&eacute;al, QC</span></li>
        <li><span class="label">LinkedIn</span><a class="text-link" href="https://www.linkedin.com/in/suleimanaliahmed/">linkedin.com/in/suleimanaliahmed</a></li>
        <li><span class="label">GitHub</span><a class="text-link" href="https://github.com/SuleimanAahmed">github.com/SuleimanAahmed</a></li>
      </ul>
    </section>
    <section class="content">
      <h2>Advisors</h2>
      <div class="entry">
        <h3>Dr. Biao Li</h3>
        <p class="entry-sub">Associate Professor, Dept. of Building, Civil and Environmental Engineering, Concordia University — PhD Advisor</p>
        <p><a class="text-link" href="mailto:biao.li@concordia.ca">biao.li@concordia.ca</a></p>
      </div>
      <div class="entry">
        <h3>Dr. Emmanouil Rovithis</h3>
        <p class="entry-sub">Assistant Professor, Dept. of Civil Engineering, Democritus University of Thrace — M.Eng. Advisor</p>
        <p><a class="text-link" href="mailto:erovithis@civil.duth.gr">erovithis@civil.duth.gr</a></p>
      </div>
    </section>
`,
});

const files = { 'index.html': home, 'about.html': about, 'research.html': research,
  'publications.html': publications, 'projects.html': projects, 'cv.html': cv, 'contact.html': contact };
for (const [name, content] of Object.entries(files)) fs.writeFileSync(`/home/claude/site2/${name}`, content);
console.log('Built:', Object.keys(files).join(', '));
