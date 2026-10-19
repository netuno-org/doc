---
sidebar_position: 3
id: configuration
title: Configuratie
sidebar_label: Configuratie
---

> Het onderstaande proces is gericht op Linux-ontwikkelomgevingen.

## 1. Naam van de app

Hernoem de projectmap (de naam van de app) met alleen kleine letters, cijfers en underscores.

## 2. Configuratiebestand

Kopieer het voorbeeldconfiguratiebestand vanuit de hoofdmap van de app:

```
cp config/sample.json config/_development.json
```

Gebruik voor een productieomgeving in plaats daarvan:

```
cp config/sample.json config/_production.json
```

Wijzig daarna de eigenschap `name` in de root van de JSON naar de naam van de app die je in stap 1 hebt gekozen.

> De bestanden `config/_development.js` en `config/_production.js` bestaan al in het project en dienen voor dynamische/programmatische configuraties — meestal hoef je die niet aan te passen; wat je bewerkt is de overeenkomstige `.json`.

## 3. Database

CLUAR heeft een verbinding met een PostgreSQL-database nodig. [Leer hier hoe je dit configureert](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

Zoek in `config/_development.json` (of `_production.json`) naar `db.default` en vervang dit door de gegevens van je database:

```json
"db": {"default": {
    "password": "Jouw-DB-GeHe1m-H13r",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. JWT-geheim

Stel in `auth.jwt.secret` een willekeurig geheim van **32 tekens** in, dat wordt gebruikt om de beveiliging van de authenticatie te waarborgen:

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "DitGeheimMoet32TekensBevatten!!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> Het wordt aanbevolen het geheim te genereren met een [tool voor het genereren van willekeurige codes](https://www.random.org/passwords/).

## 5. Altcha (alternatief voor reCAPTCHA)

CLUAR ondersteunt [Altcha](https://altcha.org/) — een alternatief voor Google reCAPTCHA op basis van een werkbewijs (*proof-of-work*), zonder afhankelijk te zijn van externe diensten en zonder gegevens van bezoekers te verzamelen. Het wordt gebruikt bij het inloggen en registreren van gebruikers.

Er zijn twee schakelaars, op verschillende plaatsen in de `.json`:

```json
"auth": {
    "altcha": {
        "enabled": false,
        "admin": {
            "enabled": false
        }
    }
}
```

- `auth.altcha.enabled` — activeert de Altcha-verificatie aan de serverzijde (Netuno). Zonder dit op `true` wordt Altcha niet gevalideerd, zelfs als het op de website verschijnt.
- `auth.altcha.admin.enabled` — activeert Altcha ook bij het inloggen op de **backoffice van Netuno** (poort `9000`), gescheiden van het inloggen op de website.

```json
"settings": {
    "cluar": {
        "website": {
            "auth": {
                "altcha": {
                    "enabled": false,
                    "admin": {
                        "enabled": false
                    }
                }
            }
        }
    }
}
```

- `settings.cluar.website.auth.altcha` — spiegelt dezelfde optie aan de websitezijde: bepaalt of de Altcha-widget wordt getoond in het inlog-/registratieformulier van de site.

> Om Altcha te laten werken, schakel je `enabled: true` **aan beide kanten** in — de server moet valideren en de website moet de widget tonen.

## 6. CLUAR-instellingen

Pas in `settings.cluar` de configuratie van de website aan:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Naam van website",
            "analytics": null,
            "mapbox": {
                "dark": false,
                "accessToken": null
            },
            "services": {
                "api": "http://localhost:9000/services/"
            },
            "auth": {"providers": {
                "discord": false,
                "facebook": false,
                "github": false,
                "google": false
            }}
        },
        "uglifyjs": false
    }
}
```

- `website.url` — URL waar de website zal draaien.
- `website.name` — naam van de website.
- `website.services.api` — URL van de services-API van Netuno, die door de website wordt gebruikt.
- `website.auth.providers` — activeert/deactiveert methoden voor sociale login (Discord, Facebook, GitHub, Google).
- `uglifyjs` — bepaalt of de code van de website wordt geminificeerd.

## 7. Automatische start van de website (optioneel)

De website kan automatisch samen met de Netuno-server starten via de lijst `commands`:

```json
"commands": [
    {
        "path": "website",
        "command": "bun run dev",
        "install": "bun install",
        "enabled": true
    }
]
```

Zet `enabled` op `true` in de vermelding met `"path": "website"`. Zo start de website mee wanneer je `./netuno server app=cluar` uitvoert, zonder dat je hem handmatig in een andere terminal hoeft te starten.

## Volgende stap

Nu de app is geconfigureerd, ga verder naar [Uitvoering](/docs/academy/cluar/execution).