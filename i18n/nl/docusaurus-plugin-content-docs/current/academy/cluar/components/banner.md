---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

Het grote uitgelichte component, meestal bovenaan de pagina gebruikt.

## Inleiding

De **Banner** is het grote uitgelichte element van een pagina — meestal een afbeelding over de volledige breedte, met daarboven een opvallende titel en optioneel een inleidende tekst en acties (knoppen/links).

Het volgt hetzelfde mechanisme dat alle componenten gemeen hebben, beschreven in [Overzicht](/docs/academy/cluar/components/overview) en [Componenttypen](/docs/academy/cluar/components/types).

## Velden

Naast de [gemeenschappelijke velden](/docs/academy/cluar/components/overview#gemeenschappelijke-velden) (Type, Volgorde, Bewerkingsmodus, Achtergrond omkeren, Acties), heeft de Banner:

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel die boven de afbeelding in het oog springt. |
| **Inhoud** (`content` / `html_content`) | Inleidende tekst, onder de titel. |
| **Afbeelding** (`image`) | Achtergrondafbeelding van de banner. |
| **Alt-tekst afbeelding** (`image_alt`) | Alternatieve tekst van de afbeelding, voor toegankelijkheid en SEO. |
| **Afbeeldingstitel** (`image_title`) | `title`-attribuut van de afbeelding. |
| **Positie X** / **Positie Y** (`position_x`, `position_y`) | Bepalen het focuspunt van de achtergrondafbeelding (`background-position`), in procenten. |

## Positie van de afbeelding

De velden **Positie X** en **Positie Y** bepalen welk deel van de achtergrondafbeelding altijd zichtbaar blijft wanneer de banner voor verschillende resoluties wordt geschaald — hetzelfde principe als `background-position` in CSS.

Bijvoorbeeld, `50%` / `50%` centreert de focus in het midden van de afbeelding: bij elke resolutie blijft het midden van de afbeelding zichtbaar, waarbij de randen indien nodig worden bijgesneden.

## Beschikbare typen

Momenteel zijn er drie typen Banner:

- **Standaard** (`Default`) — basislayout, met titel, inhoud en acties.
- **Secundair** (`Secondary`) — visueel verschillend van de Standaard (eigen stijl in CSS/LESS), maar met dezelfde veldstructuur.
- **Standaard met Nadruk** (`DefaultSubBanner`) — discretere variant, zonder ondersteuning voor acties (`action: false` in `config.json`).

Voor details over hoe de typen werken en hoe je een nieuw type maakt, zie [Componenttypen](/docs/academy/cluar/components/types).

## Volgende stap

Ga verder naar [Inhoud](/docs/academy/cluar/components/content).