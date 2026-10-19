---
sidebar_position: 2
id: config
title: Configuratie
---

# De applicatie configureren

Deze handleiding beschrijft de eerste stappen om de taal van de Demo-applicatie en de database te configureren en om automatische commando's in te schakelen die met de server worden uitgevoerd.

Alle wijzigingen worden aangebracht in het configuratiebestand `_development.json` van de **Demo**-applicatie, dat zich in de map /apps/demo/**config** bevindt.

### Vereisten

Controleer de volgende punten voordat u de configuratie bewerkt:

- De Demo-applicatie is al aangemaakt en geïnitialiseerd.
- U bevindt zich in de hoofdmap van het Netuno-project.
- Er is een code-editor geopend op `/apps/demo/config/development.json`.
- U kunt de server opnieuw starten nadat u de wijzigingen hebt opgeslagen.

## Taalconfiguratie

### 1. Applicatie

Zoek in het configuratiebestand de velden `language` en `locale` om de taal van de applicatie te wijzigen.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Stel de waarden in overeenkomstig de gewenste taal:

- **Portugees**: `pt_PT` of `pt_BR`
- **Engels**: `en_GB` of `en_US`

### 2. Database

Zoek het object **"db"** en vervolgens de instellingen van **"default"**.

Wijzig het veld **"name"** om de overeenkomstige database in te stellen:

- `demo_pt`: database in het Portugees.
- `demo_en`: database in het Engels.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Meerdere commando's inschakelen

Netuno maakt het mogelijk om bij het opstarten van de server meerdere commando's tegelijk uit te voeren, waarbij de uitvoer in dezelfde console wordt weergegeven.

Standaard is in de **Demo**-applicatie het commando `bun run watch` geconfigureerd, maar uitgeschakeld. Dit commando compileert automatisch elke wijziging in de codebestanden van de backoffice.

Om dit in te schakelen, lokaliseert u in de array **"commands"** het veld **enabled** en wijzigt u de waarde van false in **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parameters van het object "commands"

- `enabled`: schakelt de automatische uitvoering van het commando in (true) of uit (false).
- `path`: definieert het pad (de map) van de applicatie waarin het commando wordt uitgevoerd.
- `command`: definieert het commando dat in de terminal wordt uitgevoerd.

:::tip
U kunt andere commando's toevoegen binnen de array `"commands"`, zolang u dezelfde objectstructuur behoudt.
:::


Start de Netuno-server opnieuw op nadat u het configuratiebestand hebt opgeslagen, om de wijzigingen toe te passen.


## Verwacht resultaat

Controleer na het opnieuw starten van de server de volgende punten:

- De Demo-applicatie staat in de geconfigureerde taal.
- De console toont de uitvoering van het commando `bun run watch`, als dit is ingeschakeld.

## Volgende stappen

Ga verder naar de volgende stap **Formulier** om de demo-applicatie te verkennen en te wijzigen.