---
layout: default
title:  Старт проекта!
createAt:   Понедельник, 1 мая, 2017
imageInfo:
  url: images/ssd-first-post.jpg
previewText: Старт проекта начинается с данной вступительной новости)
---

<h2 class="news-title"><a href="{{ page.url }}">{{ page.title }}</a></h2>
<p class="news-date">{{ page.createAt }}</p>
<div class="news-image-preview-container">
  <img class="news-image-preview" src="{{ page.imageInfo.url }}" alt="Изображение твердотельного накопителя">
</div>

<div class="news-text">
  <p>Старт проекта начинается с данной вступительной новости)</p>
  <p>Планируется регулярная публикация новостей из мира твердотельных накопителей(SSD), а также заметки по эксплуатации некоторых моделей в реальных условиях.</p>
  <p>Для лучшего восприятия информации о твердотельных накопителях, планируется вести словарь терминов по технологиям, используемых в данной сфере.</p>
  <p>Некоторые разделы еще пусты и находятся в стадии разработки, но в самое ближайшее время интересная информация будет появляться и там.</p>
</div>

<div class="bottom-links">
  {% if page.previous.url %}
    <a href="{{ page.previous.url }}">&laquo; {{ page.previous.title }}</a>
  {% endif %}
  <a href="{{ site.url }}">Главная</a>
  {% if page.next.url %}
    <a href="{{ page.next.url }}">{{ page.next.title }} &raquo;</a>
  {% endif %}
</div>
