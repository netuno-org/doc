---
sidebar_position: 11
id: templates
title: Sjablonen
sidebar_label: Sjablonen
---

Hoe de algemene layout van een pagina wordt bepaald, en hoe je nieuwe sjablonen maakt.

## Inleiding

Het **sjabloon** definieert de algemene layout van een [Pagina](/docs/academy/cluar/pages/overview) — het is de waarde van het veld `template` van de pagina, en komt overeen met een map in `website/src/pages/Template/`.

:::info Oorsprong van het mechanisme van Componenttypen
Het mechanisme van [Componenttypen](/docs/academy/cluar/components/types) (dynamische mappen + `info.json`) is geïnspireerd op dit sjabloonmechanisme, dat al eerder zo werkte. De structuur is vrijwel hetzelfde, maar toegepast op volledige pagina's in plaats van contentblokken.
:::

## Hoe het werkt

```
website/src/pages/Template/
├── index.jsx        # router: kiest het sjabloon om te renderen
└── Default/
    ├── index.jsx      # het sjabloon zelf
    ├── index.less
    └── info.json       # naam/beschrijving van het sjabloon, per taal
```

Elke map binnen `Template/` is een selecteerbaar sjabloon in het veld **Sjabloon** van het bewerkingsformulier van de pagina. De naam van de map (`Default`) is de waarde die wordt opgeslagen in het veld `template` van de pagina.

De `info.json` van het standaardsjabloon, bijvoorbeeld:

```json
{
  "en": { "label": "Default", "description": "Voor pagina's die generieke opmaak gebruiken." },
  "pt": { "label": "Standaard", "description": "Voor pagina's die de generieke stijl gebruiken." }
}
```

:::info De keuzelijst gebruikt het vertaalde label uit `info.json`
Net als bij de componenttypen toont de sjabloonkeuzelijst in het paginaformulier het vertaalde label (`label`) uit `info.json` — daarvoor stuurt het verzoek aan de service de huidige taal mee (`Cluar.currentLanguage().locale`). Wat in het veld `template` van de pagina wordt opgeslagen, blijft de naam van de map (`Default`).
:::

Er is ook een service op de server (`server/services/page/template/list/`) die de mappen in realtime scant en de lijst met beschikbare sjablonen retourneert — om dezelfde reden: **je hoeft de server niet opnieuw te starten om een nieuw sjabloon toe te voegen**, je hoeft alleen de map te maken.

Een verschil met de componenttypen: sjablonen hebben geen `config.json` — er zijn vandaag geen configureerbare mogelijkheden per sjabloon, alleen `index.jsx` en `info.json`.

## Het standaardsjabloon

Het **standaardsjabloon** (`Default`) is wat de meeste pagina's gebruiken: het omringt de inhoud van de pagina met de header en footer van de site (`BaseHeader` / `BaseFooter`) rond de `Builder` — de component die daadwerkelijk de componenten van de pagina doorloopt en rendert (Banner, Inhoud, Lijst, Slider, Functionaliteit), in de volgorde die door het veld Volgorde van elk wordt bepaald.

:::info Pagina met een niet-herkend sjabloon
Als het veld `template` van een pagina niet overeenkomt met een bestaande map (bijv. een verkeerd gespelde naam, of een verwijderde map), dan **faalt CLUAR niet en gebruikt het het standaardsjabloon niet als vervanging** — in plaats daarvan rendert het alleen de kale `Builder`, zonder de header en footer van de site. Dit is een ander gedrag dan bij de componenttypen, waar een niet-herkend type terugvalt op het standaardtype.
:::

Het is de router (`Template/index.jsx`) die dit bepaalt:

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

Merk op dat er slechts één expliciete controle is (`"Default"`) — elke andere waarde van `template`, herkend of niet, valt direct in de `else` en rendert alleen de `Builder`.

## Een nieuw sjabloon maken

1. Maak een nieuwe map binnen `website/src/pages/Template/` (bijv. `Template/Landingspagina/`).
2. Maak daarin `index.jsx` aan (de React-layout van het sjabloon), `index.less` (stijlen) en `info.json` (label/beschrijving per taal — dat is het label dat in de keuzelijst verschijnt).
3. Importeer in `index.jsx` van de router (`Template/index.jsx`) het nieuwe sjabloon en voeg het toe aan de voorwaarde die het sjabloon kiest op basis van het veld `page.template`.
4. Het nieuwe sjabloon verschijnt dan automatisch in de sjabloonkeuzelijst van het bewerkingsformulier van de pagina, met de naam van de map als opgeslagen waarde.

## Volgende stap

Verken de [Machtigingen](/docs/academy/cluar/permissions).