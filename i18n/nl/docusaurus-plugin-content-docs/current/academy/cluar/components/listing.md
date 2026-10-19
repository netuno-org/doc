---
sidebar_position: 5
id: listing
title: Lijst
sidebar_label: Lijst
---

Hoe je een reeks gerelateerde items presenteert — producten, diensten, nieuws, enzovoort.

## Inleiding

De **Lijst** dient om een reeks gerelateerde items te presenteren — producten, diensten, referenties, nieuws, enzovoort. Elke lijst heeft een eigen titel/inleidende inhoud en groepeert meerdere **items**, die afzonderlijk in de backoffice worden beheerd (`Lijst > Item`).

Het volgt hetzelfde mechanisme dat alle componenten gemeen hebben, zoals beschreven in [Overzicht](/docs/academy/cluar/components/overview) en [Componenttypen](/docs/academy/cluar/components/types).

## Velden van de lijst

Naast de [algemene velden](/docs/academy/cluar/components/overview#gemeenschappelijke-velden) (Type, Volgorde, Bewerkingsmodus, Achtergrond omkeren, Acties) heeft de lijst:

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van de lijst. |
| **Inhoud** (`content` / `html_content`) | Inleidende tekst van de lijst. |
| **Afbeelding** (`image`) | Afbeelding die aan de lijst zelf is gekoppeld (niet aan de items). |
| **Alt-tekst afbeelding** (`image_alt`) | Alternatieve tekst van de afbeelding. |
| **Afbeeldingstitel** (`image_title`) | `title`-attribuut van de afbeelding. |

## Items

Elk item behoort tot een lijst (`page_listing_id`) en heeft zijn eigen velden:

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van het item. |
| **Inhoud** (`content` / `html_content`) | Tekst van het item. |
| **Afbeelding** (`image`) | Afbeelding van het item. |
| **URL** (`link`) | Link van het item — waar de gebruiker naartoe gaat wanneer hij erop klikt. |
| **Volgorde** (`sorter`) | Positie van het item binnen de lijst. |

Merk op dat het item **geen eigen veld Type heeft** — het erft het type van de lijst waartoe het behoort: de React-component van de lijst geeft zijn `type` door aan elk item wanneer hij het rendert.

## Weergavestructuur

Anders dan bij Banner en Inhoud, waar elk type een onafhankelijke map binnen de component is, bevindt bij de lijst de component die de items rendert (`Item`) zich **binnen** de map van het type:

```
website/src/components/Listing/
├── index.jsx              # router: kiest het lijsttype
└── Default/
    ├── index.jsx           # lay-out van de lijst, rendert de <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # hoe elk item wordt gerenderd, voor dit type
```

Dit is logisch omdat de manier waarop een item wordt gepresenteerd (raster, lijst, kaarten...) meestal rechtstreeks afhangt van de lay-out van de lijst — daarom kan de `Item` van elk type samen met het type zelf worden aangepast, in plaats van een generieke component te zijn die door alle typen wordt gedeeld.

## Beschikbare typen

Op dit moment bestaat alleen het type **Standaard** (`Default`). Om een nieuw lijsttype te maken (met zijn eigen `Item`), volg je hetzelfde proces als beschreven in [Componenttypen](/docs/academy/cluar/components/types), en vergeet niet de submap `Item/` in het nieuwe type op te nemen.

## Volgende stap

Ga verder naar de [Slider](/docs/academy/cluar/components/slider).