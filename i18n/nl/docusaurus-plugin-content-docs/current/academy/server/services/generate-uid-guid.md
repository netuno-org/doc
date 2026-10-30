---
id: generate-uid-guid
title: Unieke ID's genereren (UID/GUID)
sidebar_label: Unieke ID's genereren (UID/GUID)
---

## Voordat je begint

Voordat je verdergaat, zorg dat je weet hoe je **REST-webservices** maakt; als je dat nog niet weet, bezoek dan de volgende link:

* [REST-webservices](/docs/academy/server/services/rest)

Het is ook raadzaam om, voordat je deze tutorial begint, te controleren of je basiskennis van _**JavaScript**_ hebt.

## Wat is een UID

Een UID (_unique identifier_) is, zoals de naam al aangeeft, een unieke string in je hele applicatie. Het staat ook bekend als GUID (_global unique identifier_).

Om de generatie van UID's te kunnen demonstreren, maken we een service.

## Genereren van UID's

We demonstreren nu het maken van een willekeurige UID. Dat is vrij eenvoudig, omdat Netuno al een functie meelevert die speciaal voor dit doel is gemaakt:

```javascript
_out.println(
  _uid.generate()
)
```

> Let op: de functie `_out.println()` dient alleen om het resultaat op het scherm te tonen wanneer je de service in de browser aanroept

Als je vragen hebt, aarzel dan niet om contact met ons op te nemen via de middelen die onderaan de pagina worden vermeld.

Veel ontwikkelplezier!