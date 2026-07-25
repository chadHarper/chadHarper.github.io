---
layout: page
title: "Curriculum Vitae"
description: "Scroll and download the CV of Chad Harper."
section: "about"
permalink: /cv/
wide_body: true
cv_pdf: "/assets/pdf/cv.pdf"
---
<p>You can read my CV directly on this page and download the PDF if you would like a copy.</p>

<section class="cv-viewer" aria-label="Embedded CV PDF">
  <div class="cv-viewer__frame">
    <iframe
      src="{{ page.cv_pdf | relative_url }}#view=FitH"
      title="Curriculum Vitae of Chad Harper"
      loading="lazy"
    ></iframe>
  </div>
  <p class="cv-viewer__fallback">
    If the embedded PDF does not load on your device, <a href="{{ page.cv_pdf | relative_url }}">open the CV directly</a>.
  </p>
</section>
