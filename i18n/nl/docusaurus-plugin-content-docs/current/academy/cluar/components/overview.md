---
sidebar_position: 1
id: overview
title: Overzicht
sidebar_label: Overzicht
---

**Componenten** zijn de inhoudsblokken die een [Pagina](/docs/academy/cluar/pages/overview) vormen, binnen een [Versie](/docs/academy/cluar/pages/versions-publishing). Er zijn 5 typen:

- **Banner**
- **Inhoud**
- **Lijstweergave** (met items)
- **Slider** (met items)
- **Functionaliteit**

Elk heeft zijn eigen entiteit (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), zijn eigen formulier in de backoffice en zijn eigen React-component op de website.

## Gemeenschappelijke velden

Hoewel elk component eigen velden heeft, delen de meeste een vergelijkbare basis:

| Veld | Beschrijving |
|---|---|
| **Type** (`type`) | Bepaalt welke visuele variant wordt gebruikt om dit component te renderen — zie [Componenttypen](/docs/academy/cluar/components/types). |
| **Volgorde** (`sorter`) | Positie van het component binnen de pagina. |
| **Bewerkingsmodus** (`edit_mode`) | Bepaalt of de inhoud (`content`) platte tekst of HTML (`html_content`) is. |
| **Achtergrond van titel / inhoud omkeren** (`title_invert_background`, `content_invert_background`) | Keert het kleurenschema (licht/donker) om van de **editor** voor titel-/inhoudstekst — handig bij het schrijven van tekst die op een donkere achtergrond komt te staan (bijv. een donkere afbeelding in de banner), om de tekst met contrast te zien tijdens het bewerken. Het wijzigt de kleur van de reeds gepubliceerde inhoud op de pagina niet. |
| **Acties** | Knoppen/links die aan het component zijn gekoppeld — zie [Acties](/docs/academy/cluar/actions). Niet alle typen ondersteunen acties — zie [Componenttypen](/docs/academy/cluar/components/types). |

## Volgende stap

Elk component gebruikt hetzelfde mechanisme voor dynamische typen — zie [Componenttypen](/docs/academy/cluar/components/types). Verken daarna elk component in detail: [Banner](/docs/academy/cluar/components/banner), [Inhoud](/docs/academy/cluar/components/content), [Lijstweergave](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Functionaliteit](/docs/academy/cluar/components/functionality).