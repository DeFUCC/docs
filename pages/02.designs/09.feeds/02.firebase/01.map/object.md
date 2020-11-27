---
title: 'Карта сущностей'
---

# Карта сущностей и их связей

- program
	- author: (user)
	- designers: [users] link list
	- title: string
	- idea: md
	- projects: [project] link list
	- opportunities: [projects.opportunities] calc

- project
	- author: (user)
	- doers: [users] link list
	- title: string
	- purpose: md
	- createdAt:
	- objects: [object] link list
	- events: [event] link list
	- opporunities: [opportunity] link list

- opportunity
	- title: string
	- face: (user)
	- 