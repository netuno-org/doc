---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

Het carrouselcomponent, om een reeks uitgelichte items te presenteren.

## Inleiding

De **Slider** presenteert een reeks items in een carrousel — elk met een achtergrondafbeelding, titel, tekst en, optioneel, zijn eigen acties. Het wordt gerenderd met de [Keen Slider](https://keen-slider.io/)-bibliotheek.

Het volgt hetzelfde gemeenschappelijke mechanisme als alle componenten, beschreven in [Overzicht](/docs/academy/cluar/components/overview) en [Componenttypen](/docs/academy/cluar/components/types).

## Slider-velden

Naast de [gemeenschappelijke velden](/docs/academy/cluar/components/overview#gemeenschappelijke-velden) (Type, Volgorde, Bewerkingsmodus, Achtergrond omkeren), heeft de Slider:

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van het sliderblok. |
| **Inhoud** (`content` / `html_content`) | Inleidende tekst van het blok. |
| **Afbeelding** (`image`) | Afbeelding die bij de slider zelf hoort (niet bij de items). |
| **Afbeelding Alt** (`image_alt`) | Alternatieve tekst van de afbeelding. |
| **Afbeelding Titel** (`image_title`) | `title`-attribuut van de afbeelding. |

## Items

Elk item behoort tot een Slider (`page_slider_id`) en is een van de "slides" van de carrousel:

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van de slide. |
| **Inhoud** (`content` / `html_content`) | Tekst van de slide. |
| **Afbeelding** (`image`) | Achtergrondafbeelding van de slide. |
| **Afbeelding Alt** (`image_alt`) | Alternatieve tekst van de afbeelding. |
| **Afbeelding Titel** (`image_title`) | `title`-attribuut van de afbeelding. |
| **Volgorde** (`sorter`) | Positie van de slide binnen de carrousel. |
| **Acties** | Elk item kan zijn eigen bijbehorende acties hebben — zie [Acties](/docs/academy/cluar/actions). |

:::info Verschil met de Lijstweergave
In tegenstelling tot het Item van de Lijstweergave heeft het Item van de Slider **eigen acties**, die afzonderlijk worden gekoppeld (`page_slider_item_action`) — elke slide kan zijn eigen knop/link hebben.
:::

## Renderstructuur

Net als bij de Lijstweergave staat het `Item` van de Slider **binnen** de map van het type, niet als zustermap:

```
website/src/components/Slider/
├── index.jsx              # router: kiest het type slider
└── Default/
    ├── index.jsx           # slider-layout, bouwt de carrousel met de <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # elke slide, inclusief zijn eigen acties
```

## Beschikbare typen

Momenteel bestaat alleen het type **Standaard** (`Default`). Om een nieuw Slider-type te maken (met zijn eigen `Item`), volg je hetzelfde proces als beschreven in [Componenttypen](/docs/academy/cluar/components/types), en vergeet niet de submap `Item/` binnen het nieuwe type op te nemen.

## Volgende stap

Ga verder naar de [Functionaliteit](/docs/academy/cluar/components/functionality).