---
layout: page
title: cases
permalink: /projects/
description: open investigations, prototypes, and side experiments
nav: true
nav_order: 3
horizontal: false
---

> Open cases: finished builds, active experiments, and unfinished lines of inquiry.

{% assign sorted_projects = site.projects | sort: "importance" %}

{% if page.horizontal %}
  {% for project in sorted_projects %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
{% else %}
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
{% endif %}
