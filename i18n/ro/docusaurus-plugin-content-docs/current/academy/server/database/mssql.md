---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configurarea MSSQL în Docker

Presupunând că Docker este deja instalat, este suficient să descărcați imaginea containerului din Microsoft Container Registry cu următoarea comandă:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

Iar pentru a porni noul container, executați următoarea comandă:

```
docker run -d --name server_mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

Parametrul *-e 'SA\_PASSWORD=Secret123'*, unde apare *Secret123*, va fi parola utilizatorului *sa*.

Atenție, parola trebuie să conțină cel puțin 8 caractere pentru a respecta norma minimă de securitate MSSQL, altfel containerul nu va fi inițializat.

După inițializarea containerului, asigurați-vă că MSSQL funcționează corect; pentru aceasta, puteți instala comanda *mssql* prin *NPM*:

```
npm install mssql -g
```

Cu aceasta, puteți executa comanda pentru a vă conecta la MSSQL prin terminal:

```
mssql -u sa -p Secret123
```

Atenție! Dacă ați modificat parola, înlocuiți *Secret123* cu parola pentru _sa_ configurată în container.

## Crearea unei aplicații noi

Pentru a crea o aplicație nouă în Netuno conectată la Microsoft SQL Server, urmați pașii obișnuiți de creare a unei aplicații noi în Netuno și alegeți motorul de baze de date MSSQL.

Așadar, urmați pașii tutorialului:

După ce alegeți motorul de baze de date MSSQL, vi se vor solicita datele pentru realizarea conexiunii la baza de date MSSQL.

De exemplu:

![creare-aplicație](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Modificarea configurației aplicațiilor

Pentru ca o aplicație să poată lucra cu MSSQL și astfel să utilizeze MSSQL ca bază de date principală a aplicației, modificați configurațiile de mediu în:

```
/web/app/APLICATIA_TA/config/_development.json
/web/app/APLICATIA_TA/config/_production.json
/web/app/APLICATIA_TA/config/_MEDIUL_TAU.json
```

Configurarea trebuie realizată astfel:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

Dacă doriți să vă conectați ca bază de date alternativă și nu principală, atunci înlocuiți _"default"_ cu numele dorit pentru această conexiune.

## Instanțe

Dacă trebuie să vă conectați la o instanță specifică a MSSQLSRV, atunci adăugați în configurația conexiunii valoarea `instance`, de exemplu:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "numele-instantei-mele",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```