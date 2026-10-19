---
sidebar_position: 3
id: configuration
title: Configurare
sidebar_label: Configurare
---

> Procesul de mai jos este destinat mediilor de dezvoltare Linux.

## 1. Numele aplicației

Redenumește folderul proiectului (numele aplicației) folosind doar litere mici, cifre și underscore.

## 2. Fișierul de configurare

Copiază fișierul de configurare exemplu, din rădăcina aplicației:

```
cp config/sample.json config/_development.json
```

Pentru un mediu de producție, folosește în schimb:

```
cp config/sample.json config/_production.json
```

Apoi, modifică proprietatea `name` din rădăcina JSON-ului la numele aplicației ales la pasul 1.

> Fișierele `config/_development.js` și `config/_production.js` există deja în proiect și servesc pentru configurații dinamice/programatice — de obicei nu trebuie să le atingi; ceea ce se editează este `.json`-ul corespunzător.

## 3. Baza de date

CLUAR are nevoie de o conexiune la o bază de date PostgreSQL. [Învață cum să configurezi aici](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

În `config/_development.json` (sau `_production.json`), găsește `db.default` și înlocuiește cu datele bazei tale de date:

```json
"db": {"default": {
    "password": "ParolaTa-DB-SeCr3t-Aici",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. Secretul JWT

În `auth.jwt.secret`, definește un secret aleatoriu cu **32 de caractere**, folosit pentru a garanta securitatea autentificării:

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "AcestSecretAreExact32Caractere!!",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> Se recomandă generarea secretului cu un [instrument de generare a codului aleatoriu](https://www.random.org/passwords/).

## 5. Altcha (alternativă la reCAPTCHA)

CLUAR suportă [Altcha](https://altcha.org/) — o alternativă la Google reCAPTCHA bazată pe dovada muncii (*proof-of-work*), fără a depinde de servicii externe și fără a colecta datele vizitatorului. Este folosit la autentificare și la înregistrarea utilizatorilor.

Există două comutatoare, în locuri diferite din `.json`:

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

- `auth.altcha.enabled` — activează verificarea Altcha pe partea serverului (Netuno). Fără aceasta setată la `true`, Altcha nu este validat, chiar dacă apare pe site.
- `auth.altcha.admin.enabled` — activează Altcha și la autentificarea în **backoffice-ul Netuno** (portul `9000`), separat de autentificarea pe site.

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

- `settings.cluar.website.auth.altcha` — oglindește aceeași opțiune pe partea site-ului: controlează dacă widgetul Altcha este afișat în formularul de autentificare/înregistrare al site-ului.

> Pentru ca Altcha să funcționeze, activează `enabled: true` **pe ambele părți** — serverul trebuie să valideze, iar site-ul trebuie să afișeze widgetul.

## 6. Setările CLUAR

În `settings.cluar`, ajustează configurația site-ului:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Numele site-ului",
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

- `website.url` — URL-ul unde va rula site-ul.
- `website.name` — numele site-ului.
- `website.services.api` — URL-ul API-ului de servicii Netuno, consumat de site.
- `website.auth.providers` — activează/dezactivează metodele de autentificare socială (Discord, Facebook, GitHub, Google).
- `uglifyjs` — controlează dacă codul site-ului este minificat.

## 7. Pornirea automată a site-ului (opțional)

Site-ul poate porni automat împreună cu serverul Netuno, prin lista `commands`:

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

Este suficient să setezi `enabled` la `true` în intrarea cu `"path": "website"`. Astfel, la rularea `./netuno server app=cluar`, site-ul pornește împreună fără a fi nevoie să îl inițiezi manual într-un alt terminal.

## Pasul următor

Cu aplicația configurată, continuă la [Execuție](/docs/academy/cluar/execution).