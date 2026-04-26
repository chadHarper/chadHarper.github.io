---
layout: page
title: "Writing"
description: "Technical notes, essays, and writing samples by Chad Harper."
section: "writing"
wide_body: true
---
Notes, explainers, and essays that move between mathematical exposition, science communication, and cultural interpretation.

<div data-filter-region>
  {% include tag-filter.html filters=site.data.filters.writing attribute="data-category" aria_label="Filter writing posts" %}
  <section class="listing-stack listing-region" aria-label="Writing posts">
    {% assign writings = site.writings | sort: "date" | reverse %}
    {% for post in writings %}
      {% include post-card.html post=post show_image=false show_category=true %}
    {% endfor %}
    <p class="empty-state" data-empty-message hidden>No posts match that filter yet.</p>
  </section>
</div>

