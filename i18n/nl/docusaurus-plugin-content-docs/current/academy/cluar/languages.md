---
sidebar_position: 5
id: languages
title: Talen
sidebar_label: Talen
---

Hoe CLUAR de talen van de website en meertalige inhoud beheert.

## Inleiding

CLUAR is standaard meertalig: elke **Pagina** is aan een taal gekoppeld, en de website toont een taalkeuze waarmee de bezoeker tussen de beschikbare talen kan wisselen.

Talen worden in de backoffice beheerd via het formulier **Taal**.

## Velden

| Veld | Beschrijving |
|---|---|
| **Code** (`code`) | Internationale taalcode (bijv. `PT`, `EN`). Dit is de waarde die wordt gebruikt om inhoud (pagina's, woordenboek, configuraties) aan deze taal te koppelen. |
| **Locale** (`locale`) | Volledige locale (bijv. `pt`, `en`). Dit is de waarde die wordt gebruikt in de paginalink en bij het programmatisch wisselen van taal. |
| **Standaard** (`default`) | Markeert deze taal als de voorkeurstaal van de website — deze wordt standaard geladen. |
| **Beschrijving** (`description`) | Naam van de taal die aan de bezoeker wordt getoond (bijv. "Portugees"). |

## Taalkeuze op de website

Er bestaan momenteel twee taalkeuzes in het project:

- **Header van de openbare site** (`website/src/base/Header`) — de traditionele taalkeuze, gemaakt met het [Menu van Ant Design](https://ant.design/components/menu/). Bij het wisselen van taal wordt naar `/{locale}/` genavigeerd. Alleen talen met al gepubliceerde pagina's worden vermeld (via `Cluar.pages()`), om geen lege opties te tonen.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — gebruikt binnen het Besloten gedeelte (`ReservedArea`). Het is een eenvoudigere dropdown: wisselt de actieve taal en herlaadt de huidige pagina, zonder naar een andere route te navigeren.

## Programmatisch

De klasse `website/src/common/Cluar.js` biedt functies om met talen te werken:

- `Cluar.defaultLanguage()` — haalt de taal op die als standaard is gemarkeerd.
- `Cluar.currentLanguage()` — haalt de momenteel actieve taal op.
- `Cluar.changeLanguage(codigoOuLocalizacao)` — activeert programmatisch een andere taal (accepteert zowel de `code` als de `locale`).
- `Cluar.languages()` — haalt de lijst van alle talen op.

## Volgende stap

Ontdek hoe de inhoud in elke taal is georganiseerd op de [Pagina's](/docs/academy/cluar/pages/overview).