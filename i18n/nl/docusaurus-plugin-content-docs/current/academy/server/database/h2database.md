---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Inleiding

Het grote voordeel van H2Database is dat er geen databaseserver nodig is, omdat het embedded in applicaties kan werken.

> H2Database wordt alleen aanbevolen voor ontwikkel- en testdoeleinden; in productie moet een ander, consistenter type database worden gebruikt.

## Aanbevelingen en beperkingen

H2Database staat niet toe dat meer dan één proces toegang heeft tot het databasebestand.

Dus als u het bestand wilt bewerken of via de webconsole wilt openen, moet u de uitvoering van Netuno stoppen.

## Databasebestanden

De databasebestanden van H2Database staan in de map `dbs`, die zich in de applicatie bevindt, bijvoorbeeld:

- `apps/mijn_app/dbs`

Als u de database wilt hernoemen, wijzigt u de naam van het bestand en past u de configuratie van de applicatie aan, bijvoorbeeld in de _development_-omgeving:

- `config/_development.json`

De aanpassing moet worden gedaan in het gedeelte van de configuratie voor de databaseverbinding:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "mijn_db",
            "username": ""
        }
    }
    ...
```

## Webconsole

Het kan nodig zijn om rechtstreeks toegang te krijgen tot de database; in dat geval is dit mogelijk via de webconsole van H2Database.

De webconsole wordt gestart door de _jar_ van H2Database rechtstreeks als volgt uit te voeren:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Er wordt aangenomen dat u zich in de hoofdmap van Netuno bevindt.

Om de beschikbare opties te bekijken:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Start de webconsole op de Netuno-poort **9000** en staat toegang vanaf externe IP's toe:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> U moet de uitvoering van Netuno eerst stoppen om te voorkomen dat meerdere processen het databasebestand bewerken.

De JDBC-URL om verbinding te maken met de database moet zijn:

`jdbc:h2:./apps/mijn_app/dbs/mijn_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Vervang het deel `mijn_app` door de naam van de app en `mijn_db` door de naam van de overeenkomstige database.

De authenticatie is gebruiker `sa` maar zonder wachtwoord.


### Toegangen resetten

Vooral wanneer de toegang van de gebruiker `dev` verloren gaat.

Open de webconsole van H2Database zoals hierboven beschreven.

Om de toegang opnieuw aan te maken, verwijdert u de gegevens uit de tabel `netuno_user`, bijvoorbeeld:

- `delete from netuno_user`
 
Zo maakt Netuno de gebruikers opnieuw aan met de respectieve standaardwachtwoorden wanneer het opnieuw wordt gestart.