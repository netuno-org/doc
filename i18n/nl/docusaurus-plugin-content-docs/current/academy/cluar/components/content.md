---
sidebar_position: 4
id: content
title: Inhoud
sidebar_label: Inhoud
---

De meest generieke tekst- en afbeeldingscomponent van CLUAR.

## Inleiding

De **Inhoud** is de meest generieke tekst-/afbeeldingscomponent van CLUAR — gebruikt voor eenvoudige tekstblokken, tekst met een afbeelding ernaast, of alleen een afbeelding, afhankelijk van het gekozen type.

Volgt hetzelfde mechanisme dat alle componenten gemeen hebben, beschreven in [Overzicht](/docs/academy/cluar/components/overview) en [Componenttypen](/docs/academy/cluar/components/types).

## Velden

Naast de [algemene velden](/docs/academy/cluar/components/overview#gemeenschappelijke-velden) (Type, Volgorde, Bewerkingsmodus, Achtergrond omkeren, Acties), heeft Inhoud:

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van het inhoudsblok. |
| **Inhoud** (`content` / `html_content`) | Tekst van het blok. |
| **Afbeelding** (`image`) | Bijbehorende afbeelding (niet gebruikt in typen met alleen tekst). |
| **Afbeelding Alt** (`image_alt`) | Alternatieve tekst van de afbeelding. |
| **Afbeeldingstitel** (`image_title`) | `title`-attribuut van de afbeelding. |
| **Maximale afbeeldingsbreedte** (`image_max_width`) | Beperkt de breedte van de afbeelding, in pixels — handig om te voorkomen dat de afbeelding te ver uitrekt op brede schermen, vooral bij de typen waarbij de afbeelding naast de tekst staat. |

## Beschikbare typen

In tegenstelling tot Banner heeft Inhoud verschillende typen die gericht zijn op verschillende schikkingen van afbeelding en tekst:

- **Standaard** (`Default`)
- **Tekst** (`TextContent`) — alleen tekst, zonder afbeelding.
- **Afbeelding** (`ImageContent`) — alleen afbeelding, zonder tekst.
- **Afbeelding links** (`ImageLeft`)
- **Afbeelding rechts** (`ImageRight`)
- **Afbeelding bovenaan** (`ImageTop`)
- **Afbeelding onderaan** (`ImageBottom`)

Voor details over hoe de typen werken en hoe je een nieuw type maakt, zie [Componenttypen](/docs/academy/cluar/components/types).

## Volgende stap

Ga verder naar de [Lijst](/docs/academy/cluar/components/listing).