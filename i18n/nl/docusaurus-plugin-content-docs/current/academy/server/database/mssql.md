---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## MSSQL-configuratie in Docker

Ervan uitgaande dat Docker al is geïnstalleerd, hoef je alleen de containerimage te downloaden van de Microsoft Container Registry met het volgende commando:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

En om de nieuwe container te starten, voer je het volgende commando uit:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

De parameter *-e 'SA\_PASSWORD=Secret123'*, waarbij *Secret123* het wachtwoord is van de gebruiker *sa*.

Let op: het wachtwoord moet ten minste 8 tekens bevatten om te voldoen aan de minimale beveiligingsvereiste van MSSQL, anders wordt de container niet gestart.

Controleer na het starten van de container of MSSQL correct werkt; hiervoor kun je het commando *mssql* via *NPM* installeren:

```
npm install mssql -g
```

Hiermee kun je het commando uitvoeren om via de terminal verbinding te maken met MSSQL:

```
mssql -u sa -p Secret123
```

Let op! Als je het wachtwoord hebt gewijzigd, vervang dan *Secret123* door het wachtwoord van _sa_ dat in de container is geconfigureerd.

## Een nieuwe applicatie maken

Om een nieuwe applicatie in Netuno te maken die is verbonden met Microsoft SQL Server, volg je de normale stappen voor het maken van een nieuwe applicatie in Netuno en kies je de database-engine MSSQL.

Volg dus de stappen van de tutorial:

Nadat je de database-engine MSSQL hebt gekozen, worden de gegevens gevraagd om de verbinding met de MSSQL-database tot stand te brengen.

Bijvoorbeeld:

![app-aanmaken](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Applicatieconfiguratie wijzigen

Om een applicatie met MSSQL te laten werken en MSSQL zo als hoofddatabase van de applicatie te gebruiken, wijzig je de omgevingsconfiguraties in:

```
/web/app/UW_APP/config/_development.json
/web/app/UW_APP/config/_production.json
/web/app/UW_APP/config/_UW_OMGEVING.json
```

De configuratie moet als volgt worden uitgevoerd:

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

Als je verbinding wilt maken met een alternatieve database in plaats van de hoofddatabase, vervang dan _"default"_ door de gewenste naam voor deze verbinding.

## Instanties

Als je verbinding wilt maken met een specifieke MSSQLSRV-instantie, voeg dan de waarde `instance` toe aan de verbindingsconfiguratie, bijvoorbeeld:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "naam-van-mijn-instantie",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```