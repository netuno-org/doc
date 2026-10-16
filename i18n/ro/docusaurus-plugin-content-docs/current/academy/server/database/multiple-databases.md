---
id: multiple-databases
title: Baze de date multiple
sidebar_label: Baze de date multiple
---

## Conectarea la multiple baze de date

Netuno permite ca o aplicație să se conecteze la multiple baze de date.

Astfel, poți manipula date prin intermediul mai multor conexiuni și tipuri diferite de baze de date.

Netuno suportă conexiunea la baze de date precum:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(în curând)_

## Baza de date DEFAULT

Pentru ca aplicațiile să funcționeze corect, este întotdeauna necesar să existe o bază de date configurată ca default (implicită).

Rețineți că configurațiile aplicațiilor se află în fișierele:

```
/web/app/APLICATIA_TA/config/_development.json
/web/app/APLICATIA_TA/config/_production.json
/web/app/APLICATIA_TA/config/_AMBIENTUL_TAU.json
```

Acolo veți găsi configurația conexiunii la baza de date _default_, după cum urmează:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "baza_de_date",
            "username": "utilizator"
        }
    },
    ...
```

Prin urmare, pentru a adăuga mai multe conexiuni la alte baze de date, este suficient să repetați această configurație înlocuind numele _default_ cu alt nume dorit.

De exemplu, imaginați-vă că aveți o aplicație în care baza de date default este în PostgreSQL, dar care trebuie să se conecteze și la o bază de date MariaDB a WordPress (_site-wp_) și, de asemenea, la o altă bază de date Microsoft SQL Server a unei aplicații .Net/C# (_aplicatie-dotnet-mssql_)...

Configurația acestei aplicații pentru a se putea conecta la aceste multiple baze de date va fi următoarea:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "baza_de_date",
            "username": "utilizator"
        },
        "site-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "baza_de_date",
            "username": "utilizator"
        },
        "aplicatie-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "baza_de_date",
            "username": "utilizator"
        }
    },
    ...
```

Pentru a putea comunica cu fiecare dintre aceste aplicații, este suficient să utilizați resursa _db după cum urmează:

```
var dbImplicit = _db.init()

var dbSiteWP = _db.init("site-wp")

var dbAplicatieDotNet = _db.init("aplicatie-dot-net")
```

Fiecare variabilă conține o instanță a resursei *_db* asociată bazei de date care corespunde cheii ce identifică conexiunea definită în configurațiile aplicației.

Astfel, folosind aceste variabile, veți putea realiza operațiile de bază de date precum interogări, inserări, actualizări și ștergeri.

Pentru mai multe informații despre operațiile de bază de date, consultați documentația resursei: [_db](/docs/library/resources/db)