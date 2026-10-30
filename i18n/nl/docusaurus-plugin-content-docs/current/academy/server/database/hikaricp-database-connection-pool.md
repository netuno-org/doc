---
id: hikaricp-database-connection-pool
title: HikariCP - Databaseverbindingspool
sidebar_label: DB-verbindingspool
---

## Wat is het

Het maken van nieuwe verbindingen met de database vereist de nodige verwerking, vooral wanneer er authenticatie plaatsvindt.

Daarom is het voor een grotere prestatieverbetering raadzaam om verbindingen te hergebruiken en niet voortdurend een nieuwe verbinding te openen.

Om dit probleem op te lossen wordt een verbindingspool gebruikt. Wanneer een verbinding wordt vrijgegeven, wordt deze niet echt gesloten en vernietigd; in plaats daarvan wordt de verbinding in de wacht gezet om opnieuw te worden gebruikt wanneer er een nieuwe verbinding nodig is.

Dit levert grote prestatievoordelen op en maakt ook veel meer configuratieparameters mogelijk, waaronder de bekendste: het maximumaantal verbindingen beperken om overbelasting van de database te voorkomen.

## HikariCP

Hikari betekent licht in het Japans. Het is de meest efficiënte en breed gebruikte oplossing in Java-applicaties en staat bekend om zijn veruit beste prestaties.

De officiële repository van HikariCP is hier te vinden op [GitHub](https://github.com/brettwooldridge/HikariCP); bekijk de prestatiegrafieken en de informatie over de configuraties.

Netuno gebruikt HikariCP om de verbindingen met PostgreSQL, MariaDB, Microsoft SQL Server en Oracle te beheren.

## Configuratie

De configuratie van HikariCP in Netuno gebeurt samen met de databaseconfiguratie in de applicaties.

Dat wil zeggen, binnen de applicatie in de map `config` in de omgevingsconfiguratie, zoals:

- \_development.json
- \_production.json

In de sectie "db" staan de databaseconfiguraties.

Zowel voor de standaardverbinding als voor elke andere verbinding kunnen de HikariCP-parameters op dezelfde manier worden geconfigureerd.

Dus binnen `default`, waar je host, port, name (database), username en password hebt, hoef je alleen maar meer HikariCP-parameters toe te voegen, zoals:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "mijn_database",
            "username": "mijn_gebruiker",
            "password": "geheim",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

Elk van deze extra HikariCP-configuraties hierboven dient bijvoorbeeld voor:

* `maximumPoolSize` bepaalt de maximale grootte van het aantal verbindingen in HikariCP; in dit voorbeeld is de limiet aan verbindingen 25.
* `minimumIdle` bepaalt het minimumaantal verbindingen dat in de wachtrij staat om gebruikt te worden.
* `idleTimeout` is de tijd dat een verbinding inactief mag blijven.
* `maxLifetime` is de maximale levensduur van de verbinding.

> De HikariCP-configuraties moeten in overeenstemming zijn met de configuratie van de databasemotor.
> Het maximumaantal verbindingen en de tijdslimieten mogen bijvoorbeeld nooit hoger zijn dan wat in de databasemotor is gedefinieerd.

Elke andere HikariCP-parameter kan op dezelfde manier worden geconfigureerd; voeg gewoon de gewenste configuratieparameters toe.

## Parameters

Hieronder staat de lijst met parameters die Netuno voor HikariCP toestaat te configureren.

Elke andere configuratieparameter van HikariCP wordt ofwel automatisch door Netuno vooraf gedefinieerd, ofwel is niet van toepassing.

### Vaak gebruikt

##### autoCommit

Deze eigenschap regelt het standaard automatische commit-gedrag van verbindingen die uit de pool worden teruggegeven.
Het is een booleaanse waarde.

Standaard: `true`

##### connectionTimeout

Deze eigenschap regelt het maximale aantal milliseconden dat een client (dat ben jij) wacht op een verbinding uit de pool. Als deze tijd wordt overschreden zonder dat er een verbinding beschikbaar is, wordt een SQLException gegooid. De laagst acceptabele verbindingstime-out is 250 ms.

Standaard: `30000 (30 seconden)`

##### idleTimeout

Deze eigenschap regelt de maximale hoeveelheid tijd dat een verbinding inactief in de pool mag blijven. **Deze instelling is alleen van toepassing wanneer `minimumIdle` lager is ingesteld dan `maximumPoolSize`.** Inactieve verbindingen worden niet verwijderd wanneer de pool het aantal `minimumIdle`-verbindingen bereikt. Of een verbinding als inactief wordt verwijderd of niet, is onderhevig aan een maximale variatie van +30 seconden en een gemiddelde variatie van +15 seconden. Een verbinding wordt nooit als inactief afgedankt vóór deze tijdslimiet. Een waarde van 0 betekent dat inactieve verbindingen nooit uit de pool worden verwijderd. De minimaal toegestane waarde is 10000ms (10 seconden).

Standaard: `600000 (10 minuten)`

##### maxLifetime

Deze eigenschap regelt de maximale levensduur van een verbinding in de pool. Een verbinding die in gebruik is, wordt nooit verwijderd; pas wanneer deze gesloten is, wordt ze verwijderd. Op verbinding-per-verbinding-basis wordt een kleine negatieve variatie toegepast om massale verwijdering uit de pool te voorkomen. **We raden sterk aan deze waarde in te stellen; ze moet enkele seconden korter zijn dan elke verbindingstijdslimiet die door een database of infrastructuur wordt opgelegd.** Een waarde van 0 duidt op een maximale levensduur (oneindige duur), uiteraard onder voorbehoud van de instelling van `idleTimeout`. De minimaal toegestane waarde is 30000ms (30 seconden).

Standaard: `1800000 (30 minuten)`

##### minimumIdle

Deze eigenschap regelt het minimumaantal inactieve verbindingen dat HikariCP in de pool probeert te behouden. Als het aantal inactieve verbindingen onder deze waarde zakt en het totale aantal verbindingen in de pool lager is dan de `maximumPoolSize`, doet HikariCP zijn best om snel en efficiënt extra verbindingen toe te voegen. Voor maximale prestaties en responsiviteit bij piekbelasting raden we echter aan deze waarde niet in te stellen en HikariCP in plaats daarvan te laten werken als een verbindingspool met vaste grootte.

Standaard: hetzelfde als de `maximumPoolSize`

##### maximumPoolSize

Deze eigenschap regelt de maximale grootte die de pool kan bereiken, inclusief zowel inactieve als in gebruik zijnde verbindingen. In principe bepaalt deze waarde het maximale aantal echte verbindingen met de backend van de database. Een redelijke waarde hiervoor wordt het beste bepaald door je uitvoeringsomgeving. Wanneer de pool deze grootte bereikt en er geen inactieve verbindingen beschikbaar zijn, worden aanroepen naar getConnection() geblokkeerd tot `connectionTimeout` milliseconden voordat de time-out optreedt.

Standaard: `10`

### Minder vaak gebruikt

##### initializationFailTimeout

Deze eigenschap regelt of de pool snel zal falen als de pool niet met succes kan worden geïnitialiseerd met een initiële verbinding. Elk positief getal wordt beschouwd als het aantal milliseconden om te proberen een initiële verbinding te verkrijgen; de applicatethread wordt gedurende deze periode geblokkeerd. Als er vóór dit tijdsinterval geen verbinding kan worden verkregen, wordt een uitzondering gegenereerd. Deze time-out wordt toegepast na de periode van `connectionTimeout`. Als de waarde nul (0) is, probeert HikariCP een verbinding te verkrijgen en te valideren. Als een verbinding wordt verkregen maar de validatie mislukt, wordt een uitzondering gegenereerd en wordt de pool niet gestart. Als het echter niet mogelijk is een verbinding te verkrijgen, wordt de pool gestart, maar latere pogingen om een verbinding te verkrijgen kunnen mislukken. Een waarde lager dan nul omzeilt elke initiële verbindingspoging, en de pool start onmiddellijk terwijl er op de achtergrond wordt geprobeerd verbindingen te verkrijgen. Bijgevolg kunnen latere pogingen om een verbinding te verkrijgen mislukken.

Standaard: `1`

##### catalog

Deze eigenschap definieert de standaardcatalogus voor databases die het concept catalogi ondersteunen. Als deze eigenschap niet is opgegeven, wordt de standaardcatalogus gebruikt die door de JDBC-driver is gedefinieerd.

Standaard: `driver default`

##### validationTimeout

Deze eigenschap regelt de maximale tijdsperiode waarin een verbinding op levensvatbaarheid wordt getest. Deze waarde moet kleiner zijn dan de `connectionTimeout`. De laagst acceptabele validatietime-out is 250 ms.

Standaard: `5000`

##### leakDetectionThreshold

Deze eigenschap regelt de hoeveelheid tijd dat een verbinding buiten de pool mag zijn voordat een bericht wordt gelogd dat een mogelijke verbindingslek aangeeft. Een waarde van 0 betekent dat lekdetectie is uitgeschakeld. De laagst acceptabele waarde om lekdetectie in te schakelen is 2000 (2 seconden).

Standaard: `0`

##### schema

Deze eigenschap definieert het standaardschema voor databases die het concept schema's ondersteunen. Als deze eigenschap niet is opgegeven, wordt het standaardschema gebruikt dat door de JDBC-driver is gedefinieerd.

Standaard: `driver default`

### DataSource

Het is ook mogelijk configuraties aan de DataSource toe te voegen, dat wil zeggen aanvullende configuraties die specifiek zijn voor het type database dat wordt gebruikt.

Voor deze geavanceerdere configuratie moet je het configuratieobject `datasource` binnen het configuratieobject van de databaseverbinding toevoegen.

Bijvoorbeeld zo:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "mijn_database",
            "username": "mijn_gebruiker",
            "password": "geheim",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Merk op dat de waarden van de DataSource-parameterconfiguraties van het type _string_ zijn; Netuno converteert ze hoe dan ook altijd automatisch naar _string_.

## Conclusie

Met HikariCP is het mogelijk geavanceerde configuraties uit te voeren om de belasting en het gedrag van databaseverbindingen te beheren.

Dit kan worden geoptimaliseerd voor de meest uiteenlopende scenario's, met behoud van hoge prestaties.