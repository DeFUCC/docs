---
title: ' Свежее'
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

{% set children = page.collection({'items':'@root.descendants','order': {'by': 'modified', 'dir': 'desc'}}) %}
{% for item in children %}
<div class="card"> 
	<div class="card-content">
<h4 class="title"><a href="{{item.url}}">{{item.title}}</a> </h4> 
        <p class="subtitle">{{item.modified | nicetime}}</p>
</div>
{% endfor %}
