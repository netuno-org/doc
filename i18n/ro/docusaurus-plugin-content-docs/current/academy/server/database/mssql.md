---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configurarea MSSQL în Docker

Presupunând că Docker este deja instalat, trebuie doar să descărcați imaginea containerului din Microsoft Container Registry cu următoarea comandă:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

Și pentru a porni noul container executați următoarea comandă:

```
docker run -d --name server_mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Parola123' -p 1433:1433 microsoft/mssql-server-linux
```

Parametrul *-e 'SA\_PASSWORD=Parola123'* unde *Parola123* va fi parola utilizatorului *sa*.

Atenție, parola trebuie să conțină cel puțin 8 caractere pentru a respecta norma minimă de securitate MSSQL, altfel containerul nu va porni.

După pornirea containerului, asigurați-vă că MSSQL funcționează corect, iar pentru aceasta puteți instala comanda *mssql* prin *NPM*:

```
npm install mssql -g
```

Cu aceasta, puteți executa comanda pentru a vă conecta la MSSQL prin terminal:

```
mssql -u sa -p Parola123
```

Atenție! Dacă ați modificat parola, înlocuiți *Parola123* cu parola pentru _sa_ configurată în container.

## Creați o aplicație nouă

Pentru a crea o aplicație nouă în Netuno conectată la Microsoft SQL Server, urmați pașii normali de creare a unei aplicații noi în Netuno și alegeți motorul de bază de date MSSQL.

Apoi urmați pașii din tutorial:

După alegerea motorului de bază de date MSSQL, vi se vor solicita datele pentru realizarea conexiunii la baza de date MSSQL.

De exemplu:

![creare-aplicatie](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Modificarea configurației aplicațiilor

Pentru ca o aplicație să poată lucra cu MSSQL și astfel să utilizeze MSSQL ca bază de date principală a aplicației, modificați configurațiile de mediu în:

```
/web/app/APLICATIA_TA/config/_development.json
/web/app/APLICATIA_TA/config/_production.json
/web/app/APLICATIA_TA/config/_AMBIENTUL_TAU.json
```

Configurația trebuie făcută după cum urmează:

```
    ...
    "db": {
        "default": {
            "password": "Parola123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

Dacă doriți să vă conectați ca bază de date alternativă și nu principală, atunci schimbați _"default"_ cu numele dorit pentru această conexiune.

## Instanțe

Dacă trebuie să vă conectați la o instanță specifică MSSQLSRV, atunci adăugați în configurația conexiunii valoarea `instance`, de exemplu:

```
    ...
    "db": {
        "default": {
            "password": "Parola123",
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