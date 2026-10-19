---
sidebar_position: 3
id: configuration
title: Configurazione
sidebar_label: Configurazione
---

> Il processo seguente è pensato per ambienti di sviluppo Linux.

## 1. Nome dell'app

Rinomina la cartella del progetto (il nome dell'app) usando solo lettere minuscole, numeri e underscore.

## 2. File di configurazione

Copia il file di configurazione di esempio, dalla radice dell'app:

```
cp config/sample.json config/_development.json
```

Per un ambiente di produzione, usa invece:

```
cp config/sample.json config/_production.json
```

Poi, modifica la proprietà `name` alla radice del JSON con il nome dell'app scelto al passo 1.

> I file `config/_development.js` e `config/_production.js` esistono già nel progetto e servono per configurazioni dinamiche/programmatiche — normalmente non devi toccarli; quello che si modifica è il corrispondente `.json`.

## 3. Database

CLUAR richiede una connessione a un database PostgreSQL. [Scopri come configurare qui](https://doc.netuno.org/pt/docs/academy/server/database/psql/).

Nel `config/_development.json` (o `_production.json`), individua `db.default` e sostituisci con i dati del tuo database:

```json
"db": {"default": {
    "password": "Tuo-DB-Segreto-Qui",
    "engine": "pg",
    "port": "5432",
    "host": "localhost",
    "name": "cluar",
    "username": "cluar"
}}
```

## 4. Segreto JWT

In `auth.jwt.secret`, imposta un segreto casuale di **32 caratteri**, usato per garantire la sicurezza dell'autenticazione:

```json
"auth": {
    "jwt": {
        "enabled": true,
        "secret": "QuestoSegretoHa32CaratteriEsatti",
        "expires": {
            "access": 1440,
            "refresh": 1440
        }
    }
}
```

> Si consiglia di generare il segreto con uno [strumento di generazione di codici casuali](https://www.random.org/passwords/).

## 5. Altcha (alternativa a reCAPTCHA)

CLUAR supporta [Altcha](https://altcha.org/) — un'alternativa a Google reCAPTCHA basata sulla prova di lavoro (*proof-of-work*), senza dipendere da servizi esterni né raccogliere dati dei visitatori. È usato nel login e nella registrazione degli utenti.

Ci sono due interruttori, in punti diversi del `.json`:

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

- `auth.altcha.enabled` — attiva la verifica di Altcha lato server (Netuno). Senza questo impostato a `true`, Altcha non viene validato, anche se appare nel sito web.
- `auth.altcha.admin.enabled` — attiva Altcha anche nel login del **backoffice di Netuno** (porta `9000`), separato dal login del sito web.

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

- `settings.cluar.website.auth.altcha` — rispecchia la stessa opzione lato sito web: controlla se il widget di Altcha viene mostrato nel modulo di login/registrazione del sito.

> Per far funzionare Altcha, attiva `enabled: true` **su entrambi i lati** — il server deve validare, e il sito web deve mostrare il widget.

## 6. Impostazioni di CLUAR

In `settings.cluar`, regola la configurazione del sito web:

```json
"settings": {
    "cluar": {
        "website": {
            "url": "http://localhost:3000",
            "name": "Nome del sito web",
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

- `website.url` — URL su cui verrà eseguito il sito web.
- `website.name` — nome del sito web.
- `website.services.api` — URL dell'API dei servizi di Netuno, utilizzata dal sito web.
- `website.auth.providers` — attiva/disattiva i metodi di login social (Discord, Facebook, GitHub, Google).
- `uglifyjs` — controlla se il codice del sito web viene minimizzato.

## 7. Avvio automatico del sito web (opzionale)

Il sito web può avviarsi automaticamente insieme al server Netuno, tramite la lista `commands`:

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

Basta impostare `enabled` su `true` nella voce con `"path": "website"`. Così, eseguendo `./netuno server app=cluar`, il sito web si avvia insieme senza che tu debba avviarlo manualmente in un altro terminale.

## Prossimo passo

Con l'app configurata, passa a [Esecuzione](/docs/academy/cluar/execution).