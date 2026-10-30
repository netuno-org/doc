---
id: multiple-databases
title: Baze de date multiple
sidebar_label: Baze de date multiple
---

## Conectarea la multiple baze de date

Netuno permite ca o aplicație să se conecteze la multiple baze de date.

Astfel, veți putea manipula date prin intermediul mai multor conexiuni și tipuri diferite de baze de date.

Netuno suportă conexiunea la baze de date precum:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(în curând)_

## Baza de date DEFAULT

Pentru ca aplicațiile să funcționeze corect, este întotdeauna necesar să existe o bază de date configurată ca implicită (standard).

Rețineți că configurările aplicațiilor se află în fișierele:

```
/web/app/APLICATIA_TA/config/_dezvoltare.json
/web/app/APLICATIA_TA/config/_productie.json
/web/app/APLICATIA_TA/config/_MEDIUL_TAU.json
```

Acolo veți găsi configurația conexiunii la baza de date _default_, după cum urmează:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "bazadedate",
            "username": "utilizator"
        }
    },
    ...
```

Prin urmare, pentru a adăuga mai multe conexiuni la alte baze de date, este suficient să repetați această configurație schimbând numele _default_ cu alt nume dorit.

De exemplu, imaginați-vă că aveți o aplicație în care baza de date implicită este în PostgreSQL, dar care trebuie să se conecteze și la o bază de date MariaDB a WordPress (_site-wp_) și, de asemenea, la o altă bază de date Microsoft SQL Server a unei aplicații .Net/C# (_aplicatie-dotnet-mssql_)...

Configurația acestei aplicații pentru a se putea conecta la aceste multiple baze de date va fi în felul următor:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "bazadedate",
            "username": "utilizator"
        },
        "site-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "bazadedate",
            "username": "utilizator"
        },
        "aplicatie-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "bazadedate",
            "username": "utilizator"
        }
    },
    ...
```

Pentru a putea comunica cu fiecare dintre aceste aplicații, este suficient să utilizați resursa _db_ astfel:

```
var dbImplicit = _db.init()

var dbSiteWP = _db.init("site-wp")

var dbAplicatieDotNet = _db.init("aplicatie-dot-net")
```

Fiecare variabilă conține o instanță a resursei *_db* asociată bazei de date corespunzătoare cheii care identifică conexiunea definită în configurările aplicației.

Astfel, folosind aceste variabile, veți putea efectua operațiile cu baze de date, cum ar fi interogări, inserări, actualizări și ștergeri.

Pentru mai multe informații despre operațiile cu baze de date, consultați documentația resursei: [_db](/docs/library/resources/db)