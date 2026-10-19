---
sidebar_position: 2
id: types
title: Componenttypen
sidebar_label: Componenttypen
---

## Wat zijn ze

Elke [Component](/docs/academy/cluar/components/overview) heeft een veld **Type**, dat bepaalt welke visuele variant wordt gebruikt om hem te renderen. Dat veld is geen vaste lijst die in de database is opgeslagen — het is **dynamisch**, opgebouwd uit de mappen die bestaan binnen `website/src/components/<Component>/`. Bijvoorbeeld voor de Banner:

```
website/src/components/Banner/
├── index.jsx           # "router"-component: kiest het type om te renderen
├── Default/
│   ├── index.jsx        # de variant zelf
│   ├── index.less
│   ├── info.json        # naam/beschrijving van het type, per taal
│   └── config.json       # mogelijkheden van het type (bijv.: of het acties ondersteunt)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Elke map binnen `Banner/` is een **type** dat selecteerbaar is in het veld **Type**, in het bewerkingsformulier van die component (bijv. wanneer je een Banner aan een pagina toevoegt of bewerkt, verschijnt in dat formulier de select met de beschikbare typen).

In de select ziet de gebruiker **de vertaalde label** die in `info.json` is gedefinieerd (bijv. "Standaard"), maar wat in het veld `type` van de component wordt **opgeslagen** is de **mapnaam** (bijv. `Default`) — die mapnaam gebruikt de "router"-component vervolgens om te kiezen welke variant wordt gerenderd (zie [`info.json` en `config.json`](#infojson-en-configjson) hieronder).

> De naam "Sub" in mappen zoals `DefaultSubBanner` duidt niet op een submap die binnen een ander type is genest — het is gewoon nog een type, op hetzelfde niveau als de andere, maar met een naamconventie die aangeeft dat het een discretere/secundaire variant van het basistype is.

### `info.json` en `config.json`

- **`info.json`** — definieert de label en beschrijving van het type, per taal. Het is de label (`label`) die in de select van het bewerkingsformulier verschijnt:
  ```json
  {
    "en": { "label": "Standaard", "description": "Voeg een banner toe." },
    "pt": { "label": "Standaard", "description": "Voegt een banner toe." }
  }
  ```
- **`config.json`** — definieert mogelijkheden van het type. Momenteel is de enige parameter `action`, die bepaalt of de sectie Acties in het formulier verschijnt en in dat type wordt gerenderd:
  ```json
  { "action": true }
  ```

Deze twee bestanden worden in realtime gelezen door een service op de server (`server/services/components/<component>/list/`), die de mappen binnen `website/src/components/<Component>/` doorloopt en de lijst met beschikbare typen retourneert — dat voedt de Type-select in het bewerkingsformulier van die component. Daarom **hoef je de server niet opnieuw te starten en de database niet te wijzigen om een nieuw type toe te voegen** — je hoeft alleen de map te maken.

In de "router"-component (`Banner/index.jsx`) wordt de opgeslagen `type` gebruikt om te beslissen welke variant moet worden geïmporteerd en gerenderd:

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## Een nieuw type maken

1. Maak een nieuwe map binnen `website/src/components/<Component>/` (bijv. `Banner/Uitgelicht/`).
2. Maak daarin `index.jsx` (de React-component van de variant), `index.less` (stijlen), `info.json` (label/beschrijving per taal) en `config.json` (met `action: true` of `false`).
3. Importeer in `index.jsx` van de bovenliggende component (bijv. `Banner/index.jsx`) de nieuwe component en voeg deze toe aan de voorwaarde die de variant op basis van `type` kiest.
4. Het nieuwe type verschijnt automatisch in de Type-select van het bewerkingsformulier van die component, met de mapnaam als opgeslagen waarde.

## Volgende stap

Verken elke component in detail: [Banner](/docs/academy/cluar/components/banner), [Inhoud](/docs/academy/cluar/components/content), [Lijst](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Functionaliteit](/docs/academy/cluar/components/functionality).