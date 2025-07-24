---
layout: default
title: Fashion Criticism
permalink: /fashion/criticism/
# We’ll handle pagination in a moment…
---

<style>
/* Temporary in‑page CSS to illustrate the palette & font; we’ll move this into your SCSS later */
.crit-header {
  background-color: #F5F2E7;      /* Cream */
  color: #2E4E1E;                 /* Forest green */
  padding: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
.crit-filter button {
  background: none;
  border: 2px solid #2E4E1E;
  color: #2E4E1E;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
}
.crit-posts {
  list-style: none;
  padding: 0;
}
.crit-posts li {
  margin-bottom: 2rem;
  border-bottom: 1px solid #DDD;
  padding-bottom: 1rem;
}
.crit-posts h2 {
  margin: 0;
}
.crit-posts .meta {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}
.crit-posts .summary {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}
</style>

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

<ul class="crit-posts">
  {% assign posts = site.fashion_criticism | sort: 'date' | reverse %}
  {% for post in posts limit:5 offset: paginator.offset %}
    <li data-tags="{{ post.tags | join:' ' }}">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <p class="summary">{{ post.excerpt | strip_html }}</p>
    </li>
  {% endfor %}
</ul>

<nav class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="prev">← Previous</a>
  {% endif %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next →</a>
  {% endif %}
</nav>

<script>
// Simple JS filter logic
document.querySelectorAll('.crit-filter button').forEach(btn=>{
  btn.onclick = ()=>{
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.crit-posts li').forEach(li=>{
      li.style.display = (filter==='all' || li.dataset.tags.includes(filter)) 
                        ? '' : 'none';
    });
  };
});
</script>
