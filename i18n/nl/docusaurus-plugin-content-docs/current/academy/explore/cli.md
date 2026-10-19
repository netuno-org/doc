---
id: cli
title: Opdrachtregel
sidebar_label: Opdrachtregel
---

De opdrachtregelinterface van Netuno is het belangrijkste hulpmiddel voor het beheren van uw ontwikkelomgeving. Via deze interface kunt u systeeminformatie opvragen, applicaties beheren en de server snel configureren.

#### Vereisten

- **Terminal:** U moet een terminal (Opdrachtprompt, PowerShell of Bash) geopend hebben in de hoofdmap waar Netuno is geïnstalleerd.

Dit zijn de eerste opdrachten om te controleren of uw omgeving klaar is voor gebruik.

| OPTIE    | BESCHRIJVING    |
|----------|--------------|
| `help` | Hiermee kunt u alle beschikbare opdrachten van Netuno bekijken. |
| `version` | Hiermee kunt u de huidige versie van Netuno bekijken. |

#### Beschikbare opdrachten weergeven

Als u twijfelt over welke bewerkingen u kunt uitvoeren, gebruikt u de help-opdracht. Deze retourneert een volledige lijst met functies.

```shell
./netuno help
```
#### Netuno-versie weergeven

Het is essentieel om te weten welke versie u gebruikt om compatibiliteit met specifieke scripts en modules te garanderen.

```shell
./netuno version
```

## Installeren

Voordat u met de ontwikkeling begint, moet u de Netuno-engine in uw omgeving installeren. Ga voor meer informatie naar onze pagina [Installatie](/docs/get-started/installation).

Deze sectie beschrijft de parameters die tijdens het installatieproces kunnen worden gebruikt om het proces te automatiseren of te optimaliseren.

| OPTIE | BESCHRIJVING |
|----------|--------------|
| `checksum` | Werkt de verificatiecode (checksum) bij van alle bestanden in het geïnstalleerde pakket. |
| `force` | Forceert het vervangen van alle bestanden, zelfs als er lokale wijzigingen bestaan.|
| `graal=true/false` | Stelt het gebruik van GraalVM in om betere prestaties te behalen bij de uitvoering van applicaties. |
| `path=[Map]`| Stelt handmatig het pad (de map) in waar Netuno wordt geïnstalleerd.|
| `remove` | Verwijdert alle bestanden die verband houden met Netuno volledig van het systeem.|
| `version=[version]`| Selecteert een specifieke versie om te installeren. Gebruik 'latest' voor de ontwikkelversie.|
| `yes`| Beantwoordt automatisch "JA" op alle bevestigingen en negeert waarschuwingen over gegevensverlies.|

#### Voorbeeld van het bijwerken van de checksum:

```shell
./netuno install checksum
```

#### Voorbeeld van het forceren van alle lokale wijzigingen:

```shell
./netuno install force
```

#### Voorbeeld van het uitschakelen van GraalVM:

```shell
./netuno install graal=false
```

> GraalVM is standaard actief en wordt automatisch gedownload tijdens de installatie van Netuno.

#### Voorbeeld van het instellen van het installatiepad:

```shell
./netuno install path ='netunoMap'
```
#### Voorbeeld van het verwijderen van alle Netuno-mappen:

```shell
./netuno install remove
```

#### Voorbeeld van het selecteren van de Netuno-versie die moet worden geïnstalleerd:

```shell
./netuno install version='latest'
```

##### Voorbeeld van het beantwoorden van JA op alle vragen:
```shell
./netuno install yes 
```

## Server

Na het voltooien van de installatie start u de server om met de ontwikkeling van uw applicaties te beginnen.

Om de server met de standaardinstellingen te starten, voert u de onderstaande opdracht uit in de hoofdmap van Netuno:

```shell
./netuno server
```

> Standaard gebruikt de server poort 9000. Zodra de terminal aangeeft dat het systeem gereed is, kunt u het beheerpaneel openen via de link: http://localhost:9000/

Deze sectie beschrijft de parameters die kunnen worden gebruikt tijdens het opstartproces van de server.

OPTIE | BESCHRIJVING |
|----------|--------------|
| `app=[naam_van_de_app]` | Geeft specifiek aan welke applicatie moet worden gestart |
| `host=[IP/hostnaam]` | Hiermee kunt u de hostnaam van Netuno wijzigen |
| `launch=true/false` | Bepaalt of Netuno automatisch de browser moet openen |
| `npm` | Voert automatisch de opdracht 'npm watch' uit om de frontend van de app in realtime te compileren |
| `port=[nummer]` | Stelt de opstartpoort van de server in |
| `secret=[wachtwoord]` | Stelt een beveiligingswachtwoord in om toegang tot beheer op afstand van de server mogelijk te maken |
| `web=[map]` | Wijzigt de vooraf gedefinieerde hoofdmap van het project (web home) |

Standaard gebruikt Netuno de map **'webapp'** om alle bestanden op te slaan die essentieel zijn voor de werking ervan.

**Let op bij het wijzigen van de map:** Als u de parameter web=[map] gebruikt om de naam van de hoofdmap te wijzigen, moet u er rekening mee houden dat u de map ook fysiek moet hernoemen in uw bestandssysteem. De opdracht vertelt de Netuno-code alleen waar de bestanden moeten worden gezocht; de opdracht hernoemt mappen niet automatisch.

#### Voorbeeld van het starten van de server van een specifieke applicatie:

```shell
./netuno server app=mijnapp
```

#### Voorbeeld van het wijzigen van de hostnaam:

```shell
./netuno server host=localhost
```

#### Voorbeeld van het instellen of Netuno de browser automatisch start:

```shell
./netuno server launch=false
```

>Standaard opent Netuno de browser en initialiseert de link http://localhost:9000.

#### Voorbeeld van het uitvoeren van npm om de frontend automatisch te bouwen

```shell
./netuno server npm
```

#### Voorbeeld van het wijzigen van de poort:

```shell
./netuno server port=10000
```

#### Voorbeeld van het instellen van een wachtwoord voor toegang tot beheer op afstand van de server:

```shell
./netuno server secret='g#heim'
```

#### Voorbeeld van het wijzigen van de standaard webmap:

```shell
./netuno server web=webapp
```

## Licentie

Om met de ontwikkeling met Netuno te beginnen, moet u uw omgeving registreren.

Gebruik de basisopdracht om uw licentie te beheren:

```shell
./netuno license
```

> Momenteel biedt Netuno drie licentievormen: **Community, Standard en Enterprise**.

Deze sectie beschrijft de acties die beschikbaar zijn om uw licentie te configureren of op te vragen.

| OPTIE    | BESCHRIJVING    |
|----------|--------------|
| `create , change` | Start het proces om een nieuwe licentie aan te maken of de huidige te wijzigen |
| `key` | Toont de actieve licentiesleutel in uw omgeving |
| `mail=[uw@mail.com]` | Stelt het e-mailadres in dat aan het licentieaccount is gekoppeld |
| `type=[community/standard/enterprise]`  | Stelt het type licentie in |


#### Voorbeeld van het aanmaken van een licentie:

```shell
./netuno license create
```

#### Voorbeeld van het weergeven van de licentiesleutel:

```shell
./netuno license key
```
##### Voorbeeld van het instellen van uw e-mailadres en licentietype:

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## Applicatie

Met de server geconfigureerd en de licentie actief, kunt u uw ecosysteem uitbreiden door nieuwe oplossingen te creëren.

```shell
./netuno app
```

De gegenereerde bestanden worden automatisch georganiseerd binnen de mappenstructuur van Netuno.

Om de bestanden van uw applicatie te openen of te bewerken, navigeert u vanaf de systeemroot via het volgende pad: **webapp / apps / [naam_van_uw_app]**

#### Mappenstructuur

- **webapp**: Dit is de hoofdmap met alle essentiële bestanden voor de werking van Netuno.

- **apps**: Specifieke map waarin alle ontwikkelde of demonstratie-applicaties worden opgeslagen.

- **[naam_van_uw_app]**: De exclusieve map van de applicatie die u zojuist hebt aangemaakt.

Standaard heeft Netuno een demo-applicatie die wordt weergegeven wanneer de Netuno-server wordt gestart.

| OPTIE    | BESCHRIJVING    |
|----------|--------------|
| `database=[naam_van_de_database]` | Stelt de naam van de database in |
| `engine=[naam]` | Stelt het type database in |
| `host=[adres]` | Stelt het adres van de database in. |
| `language=[taal]`  | Stelt de taal van de applicatie in |
| `locale=[taal]` | Stelt de locale van de applicatie in |
| `name=[naam]`  | Maakt het mogelijk een applicatie aan te maken of een bestaande applicatie opnieuw op te bouwen |
| `password=[wachtwoord]`  | Stelt een wachtwoord in voor de database |
| `port=[nummer]`  | Stelt de poort van de database in |
| `username=[naam]`  | Stelt de gebruikersnaam van de database in |

#### Voorbeeld van het instellen van de naam van de database:

```shell
./netuno app database=werknemer
```

> De naam van de database mag cijfers en letters bevatten; als de naam uit meer dan één woord bestaat, moet deze worden gescheiden door "_", als volgt.
>
> **Voorbeeld:** werknemer_db

#### Voorbeeld van het instellen van het type database:

```shell
./netuno app engine=pg
```
Er bestaan de volgende databasetypen:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Voorbeeld van het instellen van het adres van de databaseserver:

```shell
./netuno app host=localhost
```

#### Voorbeeld van het instellen van de taal en locale:

```shell
./netuno app language=pt_PT locale=pt_PT
```
Er bestaan de volgende talen:
> - Portugees - pt_PT
> - Braziliaans - pt_BR
> - Engels - en_US
> - Spaans - es_ES

#### Voorbeeld van het aanmaken van een applicatie of het reconstrueren van een bestaande applicatie:

```shell
./netuno app name=demo
```

#### Voorbeeld van het instellen van het wachtwoord van de database:

```shell
./netuno app password=geheim
```

#### Voorbeeld van het instellen van de poort van de database:

```shell
./netuno app port=5432
```
Standaard komen de poorten overeen met:

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### Voorbeeld van het instellen van de gebruikersnaam van de database:

```shell
./netuno username=root
```