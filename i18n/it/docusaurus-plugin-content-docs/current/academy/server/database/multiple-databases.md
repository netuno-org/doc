---
id: multiple-databases
title: Database multipli
sidebar_label: Database multipli
---

## Connessione a più database

Netuno consente a un'applicazione di connettersi a più database.

In questo modo potrai manipolare i dati tramite connessioni e tipi di database diversi.

Netuno supporta la connessione a database come:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(prossimamente)_

## Database DEFAULT

Perché le applicazioni funzionino correttamente, è sempre necessario che ci sia un database configurato come default (predefinito).

Ricorda che le configurazioni delle applicazioni si trovano nei file:

```
/web/app/TUA_APP/config/_development.json
/web/app/TUA_APP/config/_production.json
/web/app/TUA_APP/config/_TUO_AMBIENTE.json
```

Lì troverai la configurazione della connessione al database _default_, nel modo seguente:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "database",
            "username": "utente"
        }
    },
    ...
```

Pertanto, per aggiungere altre connessioni ad altri database basta ripetere questa configurazione cambiando il nome _default_ con un altro nome desiderato.

Ad esempio, immagina di avere un'applicazione in cui il database default è in PostgreSQL, ma che deve anche connettersi a un database MariaDB di WordPress (_sito-wp_) e anche a un altro database Microsoft SQL Server di un'applicazione .Net/C# (_app-dotnet-mssql_)...

La configurazione di questa applicazione per riuscire a connettersi a questi database multipli sarà la seguente:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "database",
            "username": "utente"
        },
        "sito-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "database",
            "username": "utente"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "database",
            "username": "utente"
        }
    },
    ...
```

Per comunicare con ciascuna di queste applicazioni basta utilizzare la risorsa _db_ nel modo seguente:

```
var dbDefault = _db.init()

var dbSitoWP = _db.init("sito-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Ogni variabile contiene un'istanza della risorsa *_db* associata al database corrispondente alla chiave che identifica la connessione definita nelle configurazioni dell'applicazione.

Così, utilizzando queste variabili, potrai eseguire le operazioni sul database come query, insert, update e delete.

Per maggiori informazioni sulle operazioni sul database consulta la documentazione della risorsa: [_db](/docs/library/resources/db)