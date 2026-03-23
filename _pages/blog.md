---
layout: default
permalink: /blog/
title: notes
nav: true
nav_order: 4
pagination:
  enabled: true
collection: posts
permalink: /page/:num/
per_page: 5
sort_field: date
sort_reverse: true
trail:
  before: 1
  after: 3
---

# Field Notes
## short reports, fragments, and working thoughts

> A notebook, not a newsroom.

{% if page.pagination.enabled %}
  {% assign postlist = paginator.posts %}
{% else %}
  {% assign postlist = site.posts %}
{% endif %}

{% for post in postlist %}
  {% if post.external_source == blank %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
  {% else %}
    {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
  {% endif %}

  <div class="post-item">
    <h3>
      {% if post.redirect == blank %}
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% elsif post.redirect contains '://' %}
        <a href="{{ post.redirect }}">{{ post.title }}</a>
      {% else %}
        <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
      {% endif %}
    </h3>

    <p>{{ post.description }}</p>
    <p class="post-meta">{{ read_time }} min read · {{ post.date | date: '%B %d, %Y' }}</p>
  </div>
{% endfor %}

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}
