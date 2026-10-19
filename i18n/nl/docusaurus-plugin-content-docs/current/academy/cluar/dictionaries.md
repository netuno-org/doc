---
sidebar_position: 10
id: dictionaries
title: Woordenboeken
sidebar_label: Woordenboeken
---

Hoe u de vaste teksten van de website-interface vertaalt.

## Inleiding

**Woordenboeken** is het systeem voor het vertalen van vaste teksten in de website-interface — labels, berichten, knopteksten — dingen die geen pagina-inhoud zijn, maar tekst die "ingebakken" zit in de code en toch in elke taal moet bestaan.

Het omvat twee formulieren in de backoffice:

- **Woordenboekitem** (`dictionary_entry`)
- **Woordenboek** (`dictionary`)

## Woordenboekitem

Definieert een vertaalsleutel — **Code** (`code`, gebruikt in de code om de waarde op te halen) en **Beschrijving**. Bijv.: een item `contactformulier-succes`, gebruikt voor het succesbericht van het contactformulier (precies datgene dat verschijnt in de [`ContactFormulier`](/docs/academy/cluar/components/functionality) van de Functionaliteit).

## Woordenboek

Het is de **vertaalde waarde** van een Woordenboekitem, voor een bepaalde **Taal** (`language_id`) — veld **Waarde** (`value`, accepteert HTML).

:::info Geen generieke waarde/geen taal
Anders dan bij de [Instellingen](/docs/academy/cluar/settings) heeft het Woordenboek **geen** fallbackmechanisme zonder taal — elk Woordenboekitem moet expliciet een Waarde hebben voor elke taal waarin het wordt gebruikt. Als de vertaling in een taal ontbreekt, is de tekst die verschijnt de code van het Woordenboekitem zelf (bijv. `contactformulier-succes`), geen generieke waarde.
:::

## Programmatisch

De klasse `website/src/common/Cluar.js` biedt functies om woordenboekitems te lezen; ze retourneren allemaal de code van het item als er geen vertaling is (handig om ontbrekende vertalingen op te merken):

- `Cluar.dictionary(item)` — haalt de vertaalde waarde in de huidige taal op, zoals opgeslagen (kan HTML bevatten).
- `Cluar.plainDictionary(item)` — hetzelfde, maar verwijdert `<p>`- en `<br>`-tags. Deze wordt het meest gebruikt in interfacelabels (knoppen, formuliervelden, meldingen).
- `Cluar.plainTitle(item)` — hetzelfde, maar verwijdert alleen `<p>`-tags.
- `Cluar.plainHTML(item)` — verwijdert alle HTML-tags.
- `Cluar.dictionaryNoParagraph(item)` — verwijdert alleen `<p>`-tags (gelijk aan `plainTitle`).

## Volgende stap

Verken de [Sjablonen](/docs/academy/cluar/templates).