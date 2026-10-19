---
sidebar_position: 3
id: api
title: API
---

Netuno heeft een eigen framework om op een low-code manier een REST API te maken, met ondersteuning voor JWT (JSON Web Token) en OpenAPI 3.0.

Het volledige framework voor de ontwikkeling van webservices in Netuno is zeer veelzijdig en maakt elk type ontwikkeling mogelijk.

Het framework biedt al veel functionaliteiten voor low-code-ontwikkeling en bespaart veel regels code voor de meest voorkomende behoeften, zoals e-mails verzenden, andere REST-API's consumeren, integreren met andere databases, PDF- en Excel-bestanden genereren, sms'en verzenden, databasegegevens manipuleren, en nog veel meer.

En wanneer er geen oplossingen binnen het Netuno-framework bestaan, is het mogelijk om eenvoudig bestaande Java-, Kotlin- of zelfs JavaScript-bibliotheken te integreren om functies op maat te ontwikkelen en deze met het Netuno-framework te integreren.

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) is de specificatie van de standaard voor het doorgeven van sessiecontextgegevens aan de client via een JSON-object.

Zo hoeft de server geen gevoelige gegevens van ingelogde gebruikers in de sessie op te slaan; in plaats daarvan wordt een token naar de client verzonden, en bij elk volgend verzoek moet dit token worden teruggegeven.

Dit token heeft enkele veiligheidscontroles, zoals de geldigheidsduur en een proces om een nieuw token te kunnen maken zonder nieuwe authenticatie te vereisen.

Netuno heeft JWT-ondersteuning ingebouwd; het is eenvoudig en gemakkelijk te gebruiken en werkt ook geïntegreerd met de gebruikers en de native authenticatie van Netuno.

## OpenAPI 3.0

Na het succes van Swagger v1 en v2, die al lang een standaard zijn geworden voor het ontwikkelen van de definitie van webservices en het genereren van clientcode.

Zo maakte Swagger zijn definitie open en werd het [OpenAPI 3](https://www.openapis.org/).

Het blijft de basis voor het definiëren van de standaard voor hoe de API wordt gedocumenteerd en hoe clients worden gegenereerd om de API te consumeren.

Netuno biedt al volledige integratie met OpenAPI 3.0 en gebruikt de OpenAPI-definitie samen met de validatie van het [JSON Schema](https://json-schema.org/).

Dit betekent dat Netuno ook de invoer en uitvoer van webservices kan valideren, met behulp van de validatie van het JSON-schema dat wordt ontvangen en geretourneerd, als volgt:

- `Invoer`: als een aanroep naar de webservice niet voldoet aan de structuur en validaties, wordt deze afgewezen
- `Uitvoer`: als gegevens worden geretourneerd die niet voldoen aan de gedefinieerde structuur en validaties, wordt een waarschuwing gegenereerd dat de webservice niet conform is.

Zo bespaart Netuno niet alleen het schrijven van veel `if`-instructies in code voor de validatie van ontvangen gegevens, maar garandeert het ook een validatie van het resultaat dat de webservice genereert, door een _unittest_ uit te voeren.

Ook de door Netuno gegenereerde OpenAPI-structuur kan worden gebruikt met de [Swagger-editor](https://editor.swagger.io/) om de testinterface, documentatie en code voor API-clients in andere technologieën te genereren.

## Basis

Netuno ondersteunt ook het maken van webservices en authenticatie zonder complicaties; het is dus niet verplicht om JWT of OpenAPI te gebruiken, hoewel dit de standaardaanbeveling is.

Vaak wordt er, om het aanmaken van de API te versnellen of in situaties waarin servers met elkaar communiceren, voor gekozen om zo veel mogelijk te vereenvoudigen en tijd te winnen.

> Netuno maakt [HTTP-authenticatie](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication) mogelijk.