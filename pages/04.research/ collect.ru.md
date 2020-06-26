---
title: Исследования
date: '14:57 25-06-2020'
taxonomy:
    category:
        - docs
process:
    twig: true
    markdown: false
author: Давай
---

Полное собрание исследований ФРУКТа в важных для развития направлениях.

{% set children = page.collection({'items':'@self.children','order': {'by': 'default', 'dir': 'asc'}}) %}
{% for item in page.children %}
<div markdown="0" class="item-card"> 
<h2><a href="{{item.url}}">{{item.title}}</a> </h2> 
	{{item.summary}}
    {% for child in item.children %}
    	<div class="child-page">
            <h4><a href="{{child.url}}">{{child.title}}</a> <br />
                <span class="updated">Опубликовано {{child.date | nicetime}}</span>, <span class="updated">обновлено {{child.modified | nicetime}}</span></h4> 
            
    	</div>	
    <hr />
    {% endfor %}
</div>
{% endfor %}