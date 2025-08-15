---
layout: default
title: Fashion Criticism
permalink: /fashion/criticism/
# We’ll handle pagination in a moment…
---



<div class="crit-header">
  <h1>Fashion Criticism</h1>
  <p>Thoughts, notes, and deep dives into style culture.</p>
</div>

<section id="about-crit">
  <h2>About this Blog</h2>
  <p>
    Here I share both my evolving thoughts (“<strong>Notes</strong>”) as I learn the craft of criticism,
    and polished analyses (“<strong>Critique</strong>”) of editorial shoots, runway shows, and cultural trends.
  </p>
</section>

<section class="crit-filter">
  <button data-filter="all">All</button>
  <button data-filter="notes">Notes</button>
  <button data-filter="critique">Critique</button>
</section>

{% assign posts = site.fashion_criticism | default: site.empty %}
{% assign posts = posts | sort: 'date' | reverse %}

{% if posts and posts.size > 0 %}
<ul class="crit-posts">
  {% for post in posts limit:5 offset: paginator.offset %}
    <li data-tags="{{ post.tags | join:' ' }}">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <p class="summary">
        {% if post.summary %}{{ post.summary }}{% else %}{{ post.excerpt | strip_html }}{% endif %}
      </p>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No criticism posts yet. Check back soon!</p>
{% endif %}
</ul>

<nav class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="prev">← Previous</a>
  {% endif %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next →</a>
  {% endif %}
</nav>

{% include criticism-filter.js %}
