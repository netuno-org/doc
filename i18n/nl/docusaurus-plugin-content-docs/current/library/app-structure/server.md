---
id: server
title: Server
sidebar_label: Server
---

Ontwikkeling van de backend en API.

## De map Server

De map `📂 server` bevat een reeks bestanden en mappen die samen de backend van de applicatie vormen.

Alles in de map `📂 server` wordt gebruikt bij de verwerking van de backend-server, zoals integraties, API, database, beveiliging en authenticatie, Cron Jobs, en nog veel meer.

## Structuur van de map

In de map `📂 server` vindt u de volgende structuur:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Actions

In `📂 actions` kunnen aangepaste acties (_hooks_) worden toegevoegd aan de CRUD-bewerkingen van de formulieren die automatisch worden gegenereerd voor de backoffice; afhankelijk van de gegevensstructuur kan hier veel ingrepen in de gegevens worden gedaan.

Bijvoorbeeld bij het verwijderen van een klant is het nodig om al zijn bestellingen te verwijderen, of bij het aanmaken van een nieuw product moet dit worden geïntegreerd met een ander systeem. Kortom, elke ontwikkeling die rechtstreeks verband houdt met gegevens kan hier worden gedaan.

De actions zijn geïnspireerd op de `triggers` van een database, maar dan op het niveau van de uitvoering van code.

Zo kunnen specifieke bewerkingen worden geprogrammeerd bij het aanmaken, wijzigen en verwijderen van gegevens.

## Components

De `📂 components` worden gebruikt om aangepaste veldtypes te definiëren in de backoffice-formulieren, die zelf de gegevensmanipulatie kunnen uitvoeren.

Er kunnen componenten worden gemaakt via scripts om een nieuw specifiek veldtype in de applicatie te leveren.

## Core

De map `📂 core` maakt het mogelijk om code te injecteren in de verwerkingsstroom van HTTP-verzoeken.

Ze wordt ook gebruikt om code te delen tussen de verschillende services en andere onderdelen.

De `_config.js` wordt uitgevoerd nadat de configuratie bij elk HTTP-verzoek is geladen; hij wordt uitgevoerd na het configuratiescript van de omgeving dat zich in de map `📂 config` van de applicatie bevindt.

De `_init.js` dient om een instructie te injecteren wanneer de applicatie voor het eerst wordt geïnitialiseerd.

### Verwerking van HTTP-verzoeken

In de verwerkingsstroom van HTTP-verzoeken voor elke URL van de applicatie worden de respectieve scripts uitgevoerd:

- `_request_start.js` wordt uitgevoerd wanneer het HTTP-verzoek de Netuno-server bereikt.
- `_request_url.js` wordt uitgevoerd wanneer de URL door Netuno wordt verwerkt; de URL kan worden gewijzigd naar een andere bestemming.
- `_request_close.js` wordt uitgevoerd wanneer het antwoord op het HTTP-verzoek wordt gesloten.
- `_request_end.js` wordt uitgevoerd wanneer het HTTP-verzoek definitief is afgerond.
- `_request_error.js` wordt uitgevoerd wanneer er een fout optreedt bij de verwerking van het HTTP-verzoek.

### Verwerking van API-services

In de verwerkingsstroom van elke API-service van de applicatie worden de volgende scripts uitgevoerd:

- `_service_config.js` wordt uitgevoerd voordat de uitvoering van de service begint; het dient om onder andere de uitvoeringsconfiguraties van de service te definiëren. Er kan worden bepaald of de service al dan niet mag worden uitgevoerd, met andere woorden een beveiligingscontrole op de toegang tot de API-service.
- `_service_start.js` wordt uitgevoerd zodra een service begint te worden verwerkt.
- `_service_end.js` wordt uitgevoerd nadat de verwerking van een service is voltooid.
- `_service_error.js` wordt uitgevoerd wanneer er een fout optreedt bij de verwerking van een service.

## Services - API

In de map `📂 services` worden de services gemaakt die de applicatie-API vormen.

De services kunnen worden geschreven in verschillende talen: Javascript, Python, Java, Kotlin, Ruby of Groovy.

Omdat Netuno polyglot is, kan elk scriptbestand worden omgezet naar een andere ondersteunde programmeertaal; het volstaat dat de bestandsextensie overeenkomt met de taal.

Er zijn geen extra configuraties nodig op basis van de gebruikte programmeertaal; het volstaat het servicebestand aan te maken met de juiste extensie die overeenkomt met de programmeertaal.

## Setup

In de map `📂 setup` bevindt zich de code die automatisch wordt gegenereerd door de Netuno-engine en die de databaseschema's definieert; ook is dit de plaats waar we het laden van gegevens kunnen onderbrengen die essentieel zijn voor de werking van de applicatie.

Het script `_start.js` wordt uitgevoerd voordat de verwerking van de databaseopbouw begint.

Het script `_end.js` wordt uitgevoerd nadat de verwerking van de databaseopbouw is voltooid.

Op basis van de opbouw van de gegevensstructuur maakt Netuno hier in de map `📂 setup` automatisch de code aan die nodig is om de volledige gegevensstructuur opnieuw te creëren in een nieuwe database, of om iets aan te vullen dat ontbreekt in een andere database waarin de applicatie eventueel wordt uitgevoerd.

 ## Templates

De map `📂 templates` bevat de HTML-inhoud van de backoffice-pagina's van de applicatie, die door de Netuno-server worden gegenereerd.

De map `📂 dev` bevat het bestand `dashboard.html` dat het mogelijk maakt de werkruimte in de ontwikkelaarsmodus aan te passen.

De `dashboard.html` in de hoofdmap van de templates bevat de HTML van de algemene werkruimte van de backoffice.

### Native templates

In de map `📂 _` kan elke algemene template worden vervangen; met andere woorden de standaardtemplates van Netuno kunnen worden gewijzigd.

- [Hier vindt u de native templates van Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Als de naam van mappen en/of bestanden overeenkomt met die van de native templates in deze map, dan wordt de template in deze map gebruikt in plaats van de native template.

Met andere woorden, het volstaat dezelfde structuur van de native template binnen de map `📂 _` te repliceren om hem te vervangen.

### Scripts

De scripttemplates injecteren JavaScript-codebestanden aan het einde van de pagina's met het volgende doel:

1. `scripts.html` voegt JavaScript-code toe aan het einde van de **backoffice**-pagina.
2. `scripts_dev.html` voegt JavaScript-code toe aan het einde van de pagina van de **werkruimte van de ontwikkelaar**.
3. `scripts_login.html` voegt JavaScript-code toe aan het einde van de **login**-pagina.

### Styles

De stijltemplates injecteren stijlbestanden aan het begin van de pagina's met het volgende doel:

1. `styles.html` voegt CSS-code toe aan het begin van de **backoffice**-pagina.
2. `styles_dev.html` voegt CSS-code toe aan het begin van de pagina van de **werkruimte van de ontwikkelaar**.
3. `styles_login.html` voegt CSS-code toe aan het begin van de **login**-pagina.