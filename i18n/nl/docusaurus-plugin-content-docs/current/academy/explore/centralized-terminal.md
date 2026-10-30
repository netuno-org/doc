---
id: centralized-terminal
title: Gecentraliseerde terminal
sidebar_label: Gecentraliseerde terminal
---

Netuno maakt het mogelijk om de gegevensuitvoer (logs) van meerdere opdrachten en processen te bundelen in één terminalvenster — hetzelfde venster waarin de hoofdserver draait.

In moderne ontwikkelworkflows, waarin je gewoonlijk met verschillende technologieën tegelijk werkt, fungeert Netuno als een orchestrator van logs. Je kunt er diverse opdrachten in configureren die automatisch parallel worden gestart, zoals front-endprocessen van ReactJS, Angular, Vue en elke andere technologie.

> Elk proces kan worden gestart; je hoeft alleen maar de opdracht ervan te definiëren. Je kunt bijvoorbeeld zelfs een andere server integreren van een aanvullende REST-API die in een andere technologie is ontwikkeld.


## Configuratie

Om externe processen te integreren, moet je het configuratiebestand van de omgeving van je applicatie bewerken. In deze handleiding gebruiken we de ontwikkelomgeving als voorbeeld.

### Locatie van het bestand

Navigeer naar de map van je applicatie en zoek het bestand:

- 📂 `config/_development.json`

### Configuratiestructuur


De configuratie gebeurt via de sleutel "commands", die bestaat uit een array van objecten. Hiermee kun je meerdere services parallel uitvoeren.

Open het bestand en controleer of de sleutel `"commands"` al bestaat. Zo niet, voeg deze dan aan het einde van het bestand toe (met inachtneming van het JSON-formaat) volgens de onderstaande configuratie:

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "website",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Opmerking:** In het bovenstaande voorbeeld hebben we een opdracht geconfigureerd voor de map "ui" en een andere voor de map "website", beide met de pakketbeheerder bun.

### Parameterreferentie

**Gebruikersinterface (UI):** Voert `bun run watch` uit in de map `ui` van je applicatie.

**Website:** Voert `bun run dev` uit in de map `website`. 

### env

Definieert de omgevingsvariabelen die het proces nodig heeft om te draaien. Je kunt meerdere variabelen tegelijk definiëren.

### path

Definieert het pad naar de mappen waarin de opdracht wordt uitgevoerd, relatief ten opzichte van de hoofdmap van de applicatie.

### install

Netuno heeft ingebouwde intelligentie om pakketafhankelijkheden te beheren:

- **Automatische detectie:** Als je opdracht begint met `npm`, `bun`, `pnpm` of `yarn`, controleert Netuno of de map `node_modules` bestaat.

- **Slimme uitvoering:** Als de map niet wordt gevonden, wordt de bijbehorende installatieopdracht (bijvoorbeeld: `bun install`) automatisch uitgevoerd voordat het hoofdproces start.

- **Aanpassing:** Door de parameter `install` handmatig te definiëren, wordt de standaarddetectie vervangen door je aangepaste configuratie.

### command

De hoofdopdracht die moet worden uitgevoerd. Alle uitvoer (`output`) wordt geïntegreerd met Netuno.

### enabled

Bepaalt of de opdracht automatisch met de applicatie moet worden gestart (true) of niet (false).

## Conclusie

Het centraliseren van opdrachten in Netuno vereenvoudigt de workflow aanzienlijk.
De uniforme zichtbaarheid zorgt ervoor dat alle informatie van parallelle processen in één terminal wordt samengebracht, wat realtime monitoring eenvoudiger maakt.

Veilig afsluiten betekent dat wanneer je de Netuno-server stopt, alle geconfigureerde hulpprocessen automatisch worden beëindigd, zodat "achtergrondprocessen" of poortblokkades worden vermeden.