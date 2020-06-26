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
<div class="item-card"> 
<h4><a href="{{item.url}}">{{item.title}}</a> </h4> 
	{{item.modified | nicetime}}
</div>
{% endfor %}