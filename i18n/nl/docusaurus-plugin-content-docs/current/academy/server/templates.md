---
id: templates
title: Sjablonen
sidebar_label: Sjablonen
---

## Voordat je begint
Voordat je services maakt die sjablonen aanroepen, moet je zeker weten dat je **REST-webservices** kunt maken. Als je dat nog niet weet, bezoek dan de volgende link:

* [REST-webservices](/docs/academy/server/services/rest)

Het is ook raadzaam om, voordat je met deze tutorial begint, te controleren of je basiskennis van _**JavaScript**_ hebt.

## Sjablonen gebruiken in services

In deze tutorial behandelen we het maken van sjablonen en de acties die nodig zijn om ze in je service aan te roepen.

Wanneer je een service in Netuno maakt, heb je de mogelijkheid om sjablonen te gebruiken die je zelf hebt gemaakt. Afhankelijk van het resultaat kun je je service dus doorverwijzen naar een HTML-sjabloon met gegevens.

In dit voorbeeld hebben we een eenvoudig HTML-sjabloon en geven we gegevens van de service door aan datzelfde sjabloon.

## Een sjabloon maken

![sjablonen1.png](/docs/assets/templates1.png)

Nadat je je in de bovenstaande map bevindt, gaan we een `.html`-bestand maken; in dit voorbeeld krijgt het de naam `sjabloon.html`.

Hieronder volgt de inhoud van deze pagina:

```html
<!-- Aanroep van de Netuno-header -->
_{include=_|includes/head}

<!-- Stijlen definiëren -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Begin van de body van de html -->
<h1>Titel van het sjabloon</h1>

<!-- Wanneer je gegevens van een service naar een sjabloon wilt doorgeven, gebruik _{&variabele} -->
<p>Hallo, ik ben een <b>_{&data=naam}</b> en ik ontvang <b>_{&data=gegevens}</b> van een service!</p>

<!-- Einde van de body van de html -->

<!-- Aanroep van de Netuno-footer -->
_{include=_|includes/foot}
```

Ten slotte maak je de service met de aanroep naar het sjabloon met de volgende functie:

`_template.output(‘naam_van_sjabloon’, variabelen(optioneel));`

Hieronder volgt het voorbeeld van de service ‘service.js’:

```javascript
// Initialiseer het object 'gegevens' zodat dit gegevens kan ontvangen
var gegevens = _val.init()
    
// Waarden aan het object 'gegevens' toewijzen
    .set("naam", "sjabloon")
    .set("gegevens", "gegevens")

// Deze functie maakt de aanroep naar het sjabloon mogelijk
_template.output("sjabloon", gegevens);
```

> Als je sjabloon in een submap staat, geef je dat in de functie aan: `_template.output('map/naam_van_sjabloon')`

Ten slotte hoef je alleen de service in de browser aan te roepen en verschijnt er iets dat lijkt op het volgende:

![sjablonen2.png](/docs/assets/templates2.png)

> Merk op dat de eerder getoonde resultaten kunnen verschillen afhankelijk van je browser.

Als je vragen hebt, aarzel dan niet om contact met ons op te nemen via de middelen die onderaan de pagina worden vermeld.

Veel succes met ontwikkelen!