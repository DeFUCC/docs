---
title: Свежее
date: '21:00 26-06-2020'
taxonomy:
    category:
        - docs
process:
    twig: true
    markdown: false
visible: true
author: Давай
---

{% set children = page.collection({'items':'@root','order': {'by': 'modified', 'dir': 'asc'}}) %}
{% for item in page.children %}
<div class="item-card"> 
<h2><a href="{{item.url}}">{{item.title}}</a> </h2> 
	{{item.summary}}
</div>
{% endfor %}