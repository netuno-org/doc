---
sidebar_position: 7
id: functionality
title: Functionaliteit
sidebar_label: Functionaliteit
---

De concrete functionaliteiten die op een pagina kunnen worden opgenomen, zoals formulieren en kaarten.

## Inleiding

De **Functionaliteit** is anders dan de andere componenten: in plaats van visuele variaties van dezelfde inhoud, is elk type een **concrete functionaliteit** om op de pagina op te nemen — momenteel een contactformulier of een kaart.

Het volgt hetzelfde mechanisme dat alle componenten gemeen hebben, beschreven in [Overzicht](/docs/academy/cluar/components/overview) en [Componenttypen](/docs/academy/cluar/components/types) — maar hier kies je bij het selecteren van het Type **welke functionaliteit** op de pagina verschijnt, niet alleen een andere stijl.

## Velden

Naast de [algemene velden](/docs/academy/cluar/components/overview#gemeenschappelijke-velden) (Type, Volgorde, Bewerkingsmodus, Achtergrond omkeren, Acties), heeft de Functionaliteit:

| Veld | Beschrijving |
|---|---|
| **Titel** (`title`) | Titel van het blok. |
| **Inhoud** (`content` / `html_content`) | Tekst van het blok. |
| **Afbeelding** (`image`) | Bijbehorende afbeelding (niet alle typen gebruiken deze). |

## Beschikbare typen

### Contactformulier (`ContactForm`)

Toont een contactformulier (naam, e-mail, bericht), beveiligd met reCAPTCHA. Bij verzending worden de gegevens naar de service `contact` op de server gestuurd, die ze opslaat in de entiteit `contact` (zichtbaar in de backoffice) en waarmee e-mailwaarschuwingen kunnen worden geconfigureerd.

### Contactkaart (`ContactMap`)

Toont een interactieve kaart met [Mapbox](https://www.mapbox.com/). Gebruikt de configuratie `settings.cluar.website.mapbox` (zie [Configuratie](/docs/academy/cluar/configuration)) — met name de `accessToken` (verplicht om de kaart te laten werken) en de optie `dark` (licht of donker thema van de kaart).

## Volgende stap

Nu je de 5 componenten hebt verkend, ga je verder naar de [Acties](/docs/academy/cluar/actions), die aan de meeste ervan kunnen worden gekoppeld.