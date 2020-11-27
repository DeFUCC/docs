---
title: 'Feeds-app на Vuetify + GUN'
subtitle: 'Клиентское приложение, переписанное с нуля на новом фреймворке и с новой базой данных'
icon: app.png
people:
    -
        alias: /people/davay
        role: author
start_date: '03-03-2020 11:47'
end_date: '14-06-2020 08:47'
opportunities:
    -
        icon: 'fa fa-github'
        verb: 'Открыть код'
        text: 'приложения на GitHub'
        link: 'https://github.com/DeFUCC/feeds-app'
    -
        icon: 'fa fa-door'
        verb: 'Опробовать в действии'
        text: 'приложения на Glitch.me'
        link: 'https://feeds.frkt.ru/'
status: process
---

# FEEDS
## Collaborative project management app

Collaborative development at [Glitch.com](https://glitch.com/edit/#!/feeds-app)


JS stack:
  - [GUN](https://github.com/amark/gun)
    - [GUN DOCS](https://gun.eco/docs/Introduction)
    - [GUN webrtc adapter](https://github.com/amark/gun/blob/master/lib/webrtc.js)
    - Testing peer [gun-feeds](https://gun-feeds.glitch.me/gun) at [Glitch.com](https://glitch.com/edit/#!/gun-vue)
  - [Vue](https://vuejs.org/)
  - [Vue Router](https://router.vuejs.org/)
  - [Vue i18n](https://kazupon.github.io/vue-i18n/)
  - [Vuetify](https://vuetifyjs.com/en/)
    - [Material Design icons](https://materialdesignicons.com/)
  - [Vue Formulate](https://vueformulate.com/) to be added
  - [D3 graph visualization](https://observablehq.com/@d3/disjoint-force-directed-graph?collection=@d3/d3-force) with [vue-d3-network](https://github.com/emiliorizzo/vue-d3-network)

Based on previous experiments:
 - [feeds@frkt](https://feeds.frkt.ru/#/)
 - [feeds@glitch](http://feeds.glitch.me/#/K)


До марта 2020 разрабатывался как основа для онлайн-версии игры [ЭТОВОТЭТО](/designs/etovoteto/dictionary). Затем отделен форк для развития типов и вложенности. Но на этом витке усложнения приложения разработка no-build клиентского JS приложения стало упираться в ограничения. К тому же на горизонте появился Vue 3, вышедший в стабильной версии осенью 2020 года. И если онлайн-словарь получился рабочим на базовом уровне, то feeds-app не смог далеко уйти от концепции небольших карточек со словами. А нужны же еще изображения, детали. 