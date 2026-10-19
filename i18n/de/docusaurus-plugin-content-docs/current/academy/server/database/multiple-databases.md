---
id: multiple-databases
title: Mehrere Datenbanken
sidebar_label: Mehrere Datenbanken
---

## Verbindung zu mehreren Datenbanken herstellen

Netuno ermöglicht es einer Anwendung, sich mit mehreren Datenbanken zu verbinden.

So können Daten über verschiedene Verbindungen und unterschiedliche Datenbanktypen hinweg bearbeitet werden.

Netuno unterstützt Verbindungen zu Datenbanken wie:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(demnächst)_

## Standard-Datenbank

Damit Anwendungen korrekt funktionieren, muss immer eine Datenbank als default (Standard) konfiguriert sein.

Beachten Sie, dass die Konfigurationen der Anwendungen in den folgenden Dateien liegen:

```
/web/app/DEINE_APP/config/_development.json
/web/app/DEINE_APP/config/_production.json
/web/app/DEINE_APP/config/_DEINE_UMGEBUNG.json
```

Dort finden Sie die Konfiguration der Verbindung zur _default_-Datenbank wie folgt:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "datenbank",
            "username": "benutzer"
        }
    },
    ...
```

Um weitere Verbindungen zu anderen Datenbanken hinzuzufügen, wiederholen Sie einfach diese Konfiguration und ersetzen den Namen _default_ durch einen anderen gewünschten Namen.

Stellen Sie sich zum Beispiel eine Anwendung vor, deren Standarddatenbank in PostgreSQL liegt, die sich aber auch mit einer MariaDB-Datenbank von WordPress (_website-wp_) und außerdem mit einer weiteren Microsoft SQL Server-Datenbank einer .Net/C#-Anwendung (_app-dotnet-mssql_) verbinden muss ...

Die Konfiguration dieser Anwendung, um Verbindungen zu diesen mehreren Datenbanken herzustellen, sieht so aus:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "datenbank",
            "username": "benutzer"
        },
        "website-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "datenbank",
            "username": "benutzer"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "datenbank",
            "username": "benutzer"
        }
    },
    ...
```

Um mit jeder dieser Anwendungen zu kommunizieren, verwenden Sie einfach die Ressource _db_ wie folgt:

```
var dbStandard = _db.init()

var dbWebsiteWP = _db.init("website-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Jede Variable enthält eine Instanz der Ressource *_db*, die der Datenbank entspricht, die dem in den Anwendungskonfigurationen definierten Verbindungsschlüssel zugeordnet ist.

Mit diesen Variablen können Sie Datenbankoperationen wie Queries, Inserts, Updates und Deletes ausführen.

Weitere Informationen zu Datenbankoperationen finden Sie in der Dokumentation der Ressource: [_db](/docs/library/resources/db)