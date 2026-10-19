---
sidebar_position: 1
id: overview
title: Overzicht
sidebar_label: Overzicht
---

De **Pagina** is de centrale entiteit van CLUAR: vertegenwoordigt een URL van de website. Elke pagina behoort tot één taal — er bestaat niet één "meertalige" pagina, elke taal heeft zijn eigen pagina (met zijn eigen `link`, titel, inhoud, enz.), en ze worden alleen via de [kloonactie](/docs/academy/cluar/pages/cloning) aan elkaar gekoppeld.

## Velden

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van de pagina. |
| **Link** (`link`) | De URL van de pagina (bijv. `/over-ons`). |
| **Taal** (`language_id`) | Taal waartoe deze pagina behoort. |
| **Ouder** (`parent_id`) | Ouderpagina, gebruikt om hiërarchie/kruimelpad en submenu's op te bouwen. |
| **Template** (`template`) | Template gebruikt om de pagina te renderen (zie [Templates](/docs/academy/cluar/templates)). Het is een select in het formulier, dynamisch gevuld met de bestaande mappen in `website/src/pages/Template/`. |
| **Status** (`status_id`) | Concept of Gepubliceerd — weerspiegelt de status van de huidige versie. |
| **Menu** (`menu`) | Indien aangevinkt, verschijnt de pagina in het navigatiemenu. |
| **Menu Titel** (`menu_title`) | Alternatieve titel om in het menu weer te geven (indien leeg, wordt de Titel van de pagina gebruikt). |
| **Navigeerbaar** (`navigable`) | Bepaalt of de pagina rechtstreeks toegankelijk is (zelfs zonder in het menu te verschijnen). |
| **Volgorde** (`sorter`) | Positie van de pagina tussen haar "zusterpagina's" (zelfde `parent_id`). |
| **Beschrijving** / **Trefwoorden** | SEO-meta-tags (`<meta name="description">` / `<meta name="keywords">`). |
| **Beschrijving voor Sociale Media** / **Afbeelding voor Sociale Media** | Gebruikt in Open Graph-tags (`og:description`, `og:image`) wanneer de pagina wordt gedeeld. |

## Volgende stap

Elke pagina heeft meerdere versies en doorloopt een publicatiestroom — zie [Versies en Publicatie](/docs/academy/cluar/pages/versions-publishing).