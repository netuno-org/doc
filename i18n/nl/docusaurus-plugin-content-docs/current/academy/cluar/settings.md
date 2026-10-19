---
sidebar_position: 9
id: settings
title: Instellingen
sidebar_label: Instellingen
---

Het systeem van sleutel/waarde-parameters, beheerd door de inhoudseditor, zonder code.

## Inleiding

**Instellingen** is een systeem van sleutel/waarde-parameters, beheerd door de inhoudseditor in de backoffice — bedoeld voor websitewaarden die vaak veranderen of per taal verschillen (bijv. telefoonnummer, adres, links naar sociale media, een logo-afbeelding), zonder code te hoeven aanpassen.

Het omvat drie formulieren in de backoffice:

- **Type** (`configuration_parameter_type`)
- **Parameter** (`configuration_parameter`)
- **Configuratie** (`configuration`)

## Type

Bepaalt welk type waarde een Parameter accepteert. Het heeft alleen **Code** (`code`) en **Naam** (`name`). Deze zijn al standaard aangemaakt:

| Code | Naam |
|---|---|
| `boolean` | Boolean |
| `number` | Nummer |
| `image` | Afbeelding |
| `color` | Kleur |
| `text` | Tekst |
| `html` | HTML |

## Parameter

Bepaalt een configuratie-"sleutel" — **Code** (`code`, gebruikt in de code om de waarde op te halen), **Beschrijving** en het **Type** (welk van de bovenstaande typen). Bijv. een parameter `telefoonnummer`, van het type Tekst.

## Configuratie

Het is de **waarde** van een Parameter, voor een bepaalde **Taal** — **Waarde** (`value`, tekst) of **Afbeelding** (`value_img`), afhankelijk van het type van de parameter.

### Waarden zonder taal (generieke fallback)

Als het veld **Taal** van een Configuratie leeg blijft, wordt die waarde gebruikt als **fallback voor alle talen** die geen eigen waarde voor die parameter hebben gedefinieerd. Dit voorkomt dat je dezelfde waarde (bijv. een telefoonnummer dat in alle talen hetzelfde is) apart in elke taal moet dupliceren — je definieert ze één keer, zonder gekoppelde taal, en definieert alleen een specifieke waarde per taal waar die echt anders is.

## Programmatisch

De klasse `website/src/common/Cluar.js` biedt functies om configuraties te lezen:

- `Cluar.configuration(parameter)` — haalt de waarde van een parameter op in de huidige taal; als er geen waarde voor die taal is, wordt de waarde zonder taal (fallback) gebruikt; als geen van beide bestaat, wordt de naam van de parameter zelf teruggegeven (handig om snel een ontbrekende configuratie op te merken).
- `Cluar.configurationNumber(parameter)` — hetzelfde, maar converteert de waarde naar een getal (0 als deze niet numeriek is).
- `Cluar.configurationMultilines(parameter)` — hetzelfde, maar converteert regeleinden naar `<br>`.

## Volgende stap

Verken de [Woordenboeken](/docs/academy/cluar/dictionaries).