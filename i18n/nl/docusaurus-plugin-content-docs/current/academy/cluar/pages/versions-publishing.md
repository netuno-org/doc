---
sidebar_position: 2
id: versions-publishing
title: Versies en Publicatie
sidebar_label: Versies en Publicatie
---

## Versies

Elke pagina heeft een of meer **Versies** (`page_version`), elk met een eigen status (Concept / Gepubliceerd). Hierdoor kun je een nieuwe versie van de inhoud bewerken zonder wat gepubliceerd is te beïnvloeden — pas wanneer de versie als Gepubliceerd wordt gemarkeerd, wordt deze de actieve versie van de pagina.

De inhoudscomponenten (Banner, Inhoud, Lijstweergave, Slider, Functionaliteit) behoren altijd tot een specifieke versie (`page_version_id`), niet rechtstreeks tot de pagina. Met andere woorden, het bewerken van een component in een conceptversie beïnvloedt niet wat gepubliceerd is.

## Publicatie

Bij het publiceren van een pagina doet CLUAR het volgende:

1. Verzamelt alle actieve componenten van de gepubliceerde versie (banners, inhoud, lijstweergaven, sliders, functionaliteiten, met de bijbehorende acties).
2. Genereert een structuurbestand in JSON met die inhoud.
3. In productie wordt een statische `index.html` vooraf gerenderd voor de URL van de pagina (per taal), al met de SEO- en Open Graph-metatags ingevuld — belangrijk voor delen op sociale netwerken en voor zoekmachines, aangezien de site zelf een SPA in React is.

## Volgende stap

Een veelvoorkomende manier om een pagina te maken is een andere bestaande pagina dupliceren — zie [Pagina klonen](/docs/academy/cluar/pages/cloning).