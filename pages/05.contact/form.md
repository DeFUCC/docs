---
title: Связь
routable: false
form:
    name: contact-us
    fields:
        -
            name: name
            label: Имя
            placeholder: Представьтесь
            autofocus: 'on'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: 'Введите адрес электронной почты'
            type: text
            validate:
                rule: email
                required: true
        -
            name: message
            label: Сообщение
            size: long
            placeholder: 'Что вы хотите нам сказать?'
            type: textarea
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Отправить
            classes: 'gdlr-button with-border excerpt-read-more'
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ config.plugins.email.from }}'
                    - '{{ form.value.email }}'
                subject: '[Фонду ФРУКТ] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Спасибо за ваше сообщение!!'
        -
            display: thankyou
---

Telegram: https://t.me/fondfrukt
