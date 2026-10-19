---
id: multiple-databases
title: Meerdere databases
sidebar_label: Meerdere databases
---

## Verbinden met meerdere databases

Netuno maakt het mogelijk dat een applicatie verbinding maakt met meerdere databases.

Zo kunt u gegevens beheren via verschillende verbindingen en verschillende databasetypen.

Netuno ondersteunt verbindingen naar databases zoals:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(binnenkort)_

## Standaarddatabase

Voor een correcte werking van applicaties is het altijd noodzakelijk dat er een database als standaard (default) is geconfigureerd.

Onthoud dat de configuraties van applicaties in de volgende bestanden staan:

```
/web/app/UW_APP/config/_development.json
/web/app/UW_APP/config/_production.json
/web/app/UW_APP/config/_UW_OMGEVING.json
```

Daar vindt u de configuratie van de verbinding met de _default_-database, als volgt:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "database",
            "username": "gebruiker"
        }
    },
    ...
```

Om meer verbindingen naar andere databases toe te voegen, hoeft u deze configuratie alleen maar te herhalen en de naam _default_ te vervangen door een andere gewenste naam.

Stel bijvoorbeeld dat u een applicatie heeft waarbij de standaarddatabase in PostgreSQL draait, maar die ook verbinding moet maken met een MariaDB-database van WordPress (_website-wp_) en ook met een andere Microsoft SQL Server-database van een .Net/C#-applicatie (_app-dotnet-mssql_)...

De configuratie van deze applicatie om verbinding te kunnen maken met deze meerdere databases zal er als volgt uitzien:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "database",
            "username": "gebruiker"
        },
        "website-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "database",
            "username": "gebruiker"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "database",
            "username": "gebruiker"
        }
    },
    ...
```

Om met elk van deze applicaties te kunnen communiceren, hoeft u alleen de _db-resource als volgt te gebruiken:

```
var dbStandaard = _db.init()

var dbWebsiteWP = _db.init("website-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Elke variabele bevat een instantie van de *_db*-resource die gekoppeld is aan de database die overeenkomt met de sleutel die de verbinding definieert zoals ingesteld in de configuratie van de applicatie.

Zo kunt u met deze variabelen databasebewerkingen uitvoeren, zoals query's, inserts, updates en deletes.

Raadpleeg voor meer informatie over databasebewerkingen de documentatie van de resource: [_db](/docs/library/resources/db)