---
id: config
title: Config
sidebar_label: Config
---

Algemene applicatie-instellingen.

## Configuratiemap

De configuraties van de applicatie zijn beschikbaar in de map `📂 config`; dit is waar de algemene parameters van de applicatie en van externe integraties worden ingesteld.

Netuno ondersteunt verschillende soorten omgevingen; standaard gebruiken we `development` (ontwikkeling) en `production` (productie).

De actieve omgeving wordt gedefinieerd in `config.js`, dat zich in de hoofdmap van de Netuno-installatie bevindt:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Er kan elke naam worden gebruikt om de omgeving te definiëren, maar de applicaties moeten dezelfde omgevingsnaam hebben als de bestandsnamen (`.json` en `.js`) in de map `📂 config` van de applicatie.

Standaard vinden we in deze map de volgende bestanden:

## _development.js

De injectie van JavaScript-code maakt dynamische configuraties mogelijk via programmatische logica op de parameters die in het bestand `_development.json` zijn gedefinieerd. Bijvoorbeeld het definiëren van een configuratie op basis van informatie in een database, het instellen van het gedrag van code-uitvoering, enzovoort.

Dit bestand wordt gebruikt afhankelijk van de omgevingsdefinitie, in dit geval of het `development` (ontwikkeling) is.

## _development.json

Definitie van de parameters van de applicatie, zoals de taal, de algemene instellingen van functies en integraties. Bijvoorbeeld configuraties van databases, Cron Jobs, integraties met SMTP of externe API's, authenticatie, en nog veel meer.

Dit bestand wordt gebruikt afhankelijk van de omgevingsdefinitie, in dit geval of het `development` (ontwikkeling) is.

## _production.js

De injectie van JavaScript-code maakt dynamische configuraties mogelijk via programmatische logica op de parameters die in `_production.js` zijn gedefinieerd. Bijvoorbeeld het definiëren van de configuratie met informatie in een database, het instellen van het gedrag van code-uitvoering, enzovoort.

Dit bestand wordt gebruikt afhankelijk van de omgevingsdefinitie, in dit geval of het `production` (productie) is.

## _production.json

Definitie van de parameters van de applicatie, zoals de taal, de algemene instellingen van functies en integraties. Bijvoorbeeld configuraties van databases, Cron Jobs, integraties met SMTP of externe API's, authenticatie, en nog veel meer.

Dit bestand wordt gebruikt afhankelijk van de omgevingsdefinitie, in dit geval of het `production` (productie) is.