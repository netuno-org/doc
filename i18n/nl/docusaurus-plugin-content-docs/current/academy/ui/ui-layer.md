---
sidebar_position: 8
id: ui-layer
title: UI-laag
sidebar_label: UI-laag
---

Installatie en compilatie van het dashboard en de algemene interface van de applicaties.

## Context

Netuno-applicaties worden standaard al geleverd met een reeks geavanceerde front-endtechnologieën, waaronder [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) en [Ant.Design](https://ant.design/).

Binnen de applicaties bevindt zich de map `📁 ui` (_user interface_, gebruikersinterface), waar we de dashboards en andere front-endcomponenten ontwikkelen.

## Voordat je begint

Controleer of [Bun](https://bun.sh/) geïnstalleerd is; dit is een voorwaarde. Meer over:

- [Bun installeren](/docs/academy/website/bun)

## De afhankelijkheidsmodules installeren

Om alle standaard meegeleverde afhankelijkheden te installeren, gaat u naar de map `📁 ui` (_user interface_) in uw applicatie in ontwikkeling, bijvoorbeeld:

```shell
cd apps/mijn_app/ui/
```

Voer de opdracht uit om de afhankelijkheidsmodules te installeren:

```shell
bun install
```

> [Bun](https://bun.sh) is een verbeterd en beter geoptimaliseerd alternatief voor NPM.

## Automatische compilatie

Ga naar de map `📁 ui` (_user interface_) van uw applicatie in ontwikkeling, bijvoorbeeld:

```shell
cd apps/mijn_app/ui/
```

Voer het volgende uit om de front-end automatisch te compileren bij elke codewijziging:

```shell
bun run watch
```

> Controleer of [Bun](https://bun.sh/) geïnstalleerd is.
 
## Automatische integratie van de front-end met Netuno

Met Netuno kunt u de UI samen met het serverproces van de Netuno-applicatie starten.

> Alle compilatiemeldingen van React worden geïntegreerd in dezelfde terminal als de Netuno-applicatie.

Hiervoor hoeft u alleen de configuratie in de `commands` van de Netuno-applicatie in `📂 config/_development.json` in te schakelen, dat wil zeggen in de `command` met het `path` van de `ui` de `enabled` op `true` te zetten, als volgt:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Telkens wanneer u de configuratiebestanden van de Netuno-applicatie bewerkt, moet u de server opnieuw starten zodat de nieuwe wijzigingen kunnen worden toegepast.

Start/herstart ten slotte de server met uw Netuno-applicatie om de werking te verifiëren.

En nu is alles geïntegreerd in slechts één gecentraliseerde terminal, zodat u geen verspreide terminals meer hebt, meer over:

- [Gecentraliseerde terminal](/docs/academy/explore/centralized-terminal)

## Andere front-endtechnologieën

In de map `📁 ui` is het mogelijk om elke front-endtechnologie te configureren, of om elke nieuwe afhankelijkheidsmodule toe te voegen die nodig is.

Als u geen van de standaardtechnologieën wilt gebruiken, kunt u deze vervangen door een andere, met name door de volgende bestanden aan te passen:

- `package.json`
- `vite.config.js`