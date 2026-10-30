---
id: multiple-databases
title: Wiele baz danych
sidebar_label: Wiele baz danych
---

## Łączenie z wieloma bazami danych

Netuno umożliwia aplikacji łączenie się z wieloma bazami danych.

Dzięki temu możesz manipulować danymi przez różne połączenia i różne typy baz danych.

Netuno obsługuje połączenia z bazami danych takimi jak:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(wkrótce)_

## Domyślna baza danych

Aby aplikacje działały poprawnie, zawsze konieczne jest skonfigurowanie bazy danych jako domyślnej (default).

Przypomnijmy, że konfiguracje aplikacji znajdują się w plikach:

```
/web/app/TWOJA_APP/config/_development.json
/web/app/TWOJA_APP/config/_production.json
/web/app/TWOJA_APP/config/_TWOJE_SRODOWISKO.json
```

Znajdziesz tam konfigurację połączenia z domyślną bazą danych (_default_) w następujący sposób:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

Aby dodać więcej połączeń z innymi bazami danych, wystarczy powtórzyć tę konfigurację, zmieniając nazwę _default_ na inną wybraną nazwę.

Na przykład wyobraź sobie aplikację, w której domyślna baza danych działa na PostgreSQL, ale trzeba też połączyć się z bazą danych MariaDB WordPressa (_strona-wp_) oraz z inną bazą danych Microsoft SQL Server aplikacji .Net/C# (_aplikacja-dotnet-mssql_)...

Konfiguracja tej aplikacji umożliwiająca połączenie z tymi wieloma bazami danych będzie wyglądać następująco:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "strona-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "aplikacja-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

Aby komunikować się z każdą z tych aplikacji, wystarczy użyć zasobu _db w następujący sposób:

```
var dbDomyslna = _db.init()

var dbStronaWP = _db.init("strona-wp")

var dbAplikacjaDotNet = _db.init("aplikacja-dot-net")
```

Każda zmienna zawiera instancję zasobu *_db* skojarzoną z bazą danych odpowiadającą kluczowi identyfikującemu połączenie zdefiniowane w konfiguracji aplikacji.

Dzięki tym zmiennym możesz wykonywać operacje na bazie danych, takie jak zapytania, wstawianie, aktualizacje i usuwanie.

Więcej informacji o operacjach na bazie danych znajdziesz w dokumentacji zasobu: [_db](/docs/library/resources/db)