---
title: Исследования
date: '14:57 25-06-2020'
taxonomy:
    category:
        - docs
process:
    markdown: true
    twig: true
author: Давай
---

Полное собрание исследований ФРУКТа в важных для развития направлениях.

{% set children = page.collection({'items':'@self.children','order': {'by': 'default', 'dir': 'asc'}}) %}
{% for item in page.children %}
<div markdown="0" class="item-card"> 
<h2><a href="{{item.url}}">{{item.title}}</a>
    {by {{item.header.author}}</h2> 
<p>{{item.summary}}</p>  
</div>
{% endfor %}