---
layout: page
title: "Fashion Criticism"
description: "Critical writing on fashion, aesthetics, and culture."
section: "fashion"
wide_body: true
---
A running set of notes and critiques on fashion, visual culture, and the aesthetics of interpretation.

{% assign criticism = site.fashion_criticism | sort: "date" | reverse %}
{% if criticism.size > 0 %}
  <div data-filter-region>
    {% include tag-filter.html filters=site.data.filters.fashion attribute="data-type" aria_label="Filter fashion criticism posts" %}
    <section class="listing-stack listing-region" aria-label="Fashion criticism posts">
      {% for post in criticism %}
        {% include post-card.html post=post show_image=true show_type=true %}
      {% endfor %}
      <p class="empty-state" data-empty-message hidden>No posts match that filter yet.</p>
    </section>
  </div>
{% else %}
  <p class="empty-state">Fashion criticism pieces are being prepared and will appear here soon.</p>
{% endif %}

