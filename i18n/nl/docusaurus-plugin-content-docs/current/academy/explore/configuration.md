---
id: configuration
title: Configuratie
sidebar_label: Configuratie
---

## Basisconfiguraties van een applicatie

Elke applicatie die in Netuno wordt gemaakt, heeft specifieke configuraties die bepalen hoe deze verbinding moet maken met databases, toegangssleutels en andere essentiële parameters.

Netuno gebruikt een intelligent systeem dat deze configuraties organiseert op basis van de omgeving waarin de applicatie draait, of dat nu lokaal, op een officiële server of op een andere locatie is.

De configuraties van uw applicatie staan gecentraliseerd in de map **config**, in de hoofdmap van uw project.

**Standaardpad:** `mijn-app/config`

### Uitvoeringsomgevingen

In de map config worden de bestanden genoemd naar de omgeving waarvoor ze zijn gemaakt. Netuno laadt automatisch alleen de bestanden die overeenkomen met de omgeving waarin het op dat moment draait:

- **Ontwikkeling**: Bestanden met namen zoals `_development` worden alleen gelezen wanneer de Netuno-omgeving is ingesteld op ontwikkeling.

- **Productie**: Bestanden met namen zoals `_production` worden alleen gelezen wanneer de Netuno-omgeving is ingesteld op productie.


### Typen configuratiebestanden

Voor elke omgeving kunt u twee soorten bestanden gebruiken die samenwerken:

### JSON

- `_development.json` 
- `_production.json`

**Functie:** Statische definities en parametriseringen opslaan.

**Voorbeeld:** Database-inloggegevens, URL's van externe API's en vaste configuraties plaatsen.

### JS

- `_development.js` 
- `_production.js`

**Functie:** Logica uitvoeren op het moment dat de configuratie wordt geladen.

**Voorbeeld:** Configuraties dynamisch wijzigen of noodzakelijke initiële taken en verwerkingen uitvoeren voordat de applicatie volledig draait.


### Definitie van de algemene omgeving

Om ervoor te zorgen dat uw applicaties weten welke configuratie ze moeten gebruiken, moet u de Netuno-server laten weten in welke "modus" deze werkt. Deze globale configuratie wordt gedefinieerd in één bestand in de hoofdmap van Netuno.

1. **Zoek het globale configuratiebestand:** Ga naar de hoofdmap waar Netuno is geïnstalleerd. Zoek en open het bestand met de naam `config.js`.
2. **Zoek de omgevingsvariabele:** Zoek in het bestand naar de eigenschap `config.env`.
3. **Stel de gewenste omgeving in:** Wijzig de waarde van de variabele afhankelijk van de omgeving die u wilt activeren.


#### Ontwikkelomgeving
Wordt gebruikt terwijl u op uw eigen machine programmeert en test.

```javascript
// In het bestand ./config.js in de hoofdmap van Netuno
config.env = 'development'
```

#### Productieomgeving
Wordt gebruikt wanneer uw project voltooid is en op de officiële server voor de gebruikers draait.

```javascript
// In het bestand ./config.js in de hoofdmap van Netuno
config.env = 'production'
```

#### Andere omgevingen (aangepast)

Netuno is flexibel en stelt u in staat aangepaste omgevingsnamen te maken, bijvoorbeeld: `test`, `homologation` of `staging`.

```javascript
// In het bestand ./config.js in de hoofdmap van Netuno
config.env = 'test'
```

> De configuratie van de applicatie moet beginnen met `_`, de extensie `.json` hebben, en er moet ook een bestand met de extensie `.js` zijn; beide uit dezelfde omgeving.

## GIT-repository

Wanneer u Git gebruikt voor versiebeheer van de code van uw applicatie, is het essentieel om de veiligheid van uw gegevens te waarborgen.

Configuratiebestanden bevatten meestal gevoelige informatie, zoals databasewachtwoorden, sleutels van privé-API's, enz. Daarom **mag u nooit de echte configuratiebestanden naar de repository sturen**.

Volg deze twee stappen om ervoor te zorgen dat uw wachtwoorden niet uitlekken en tegelijkertijd het project gedocumenteerd te houden voor andere ontwikkelaars:

### 1. Verberg de echte bestanden

Open (of maak) in de hoofdmap van uw applicatie het bestand met de naam `.gitignore`. Voeg de paden van uw `.json`-configuratiebestanden toe zodat Git ze volledig negeert.

**Voorbeeld van wat u aan `.gitignore` toevoegt:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Voorbeeldconfiguratiebestand

Maak een voorbeeldbestand met de gegevens die nodig zijn zodat nieuwe ontwikkelaars het project gemakkelijk kunnen configureren.

- Ga naar de map config/ van uw applicatie.
- Maak een bestand met de naam `voorbeeld.json`.
- Kopieer de structuur van uw `_development.json` hierin en laat alleen de veldnamen staan.

Zie hieronder hoe uw **config/voorbeeld.json** eruit moet zien:

```json
{
  "database": {
    "host": "ZET_HIER_DE_HOST",
    "user": "UW_GEBRUIKER",
    "password": "UW_WACHTWOORD"
  }
}
```

#### Toegang tot de configuraties in de code

Nadat u uw variabelen en sleutels in de configuratiebestanden (zoals `_development.json`) hebt gedefinieerd, moet u ze gebruiken in de logica van uw applicatie — bijvoorbeeld bij het maken van een service die verbinding maakt met een API en een opgeslagen *token* nodig heeft.

In Netuno zijn deze configuraties toegankelijk via de native resource `_app`.

#### Gegevens ophalen

In alle code die door de server wordt uitgevoerd (zoals in de map `server/services/`), gebruikt u de functie `_app.config()` om de waarden op te halen uit uw actieve configuratiebestand.

Om te begrijpen hoe de koppeling werkt, stel dat u in uw configuratiebestand (`config/_development.json`) het volgende hebt gedefinieerd:

```json
{
  "naam": "Mijn Applicatie",
  "versie": 2
}
```
 
 Om de waarde van de sleutel "naam" op te halen en deze in de console (log) van de server af te drukken, gebruikt u de volgende code in uw .js-service:

```javascript
// 1. Netuno gaat naar het JSON-bestand, zoekt de sleutel "naam" en haalt de waarde ervan op.
// 2. Vervolgens slaat het die waarde op in de JavaScript-variabele die we 'naamVanApp' noemen.
let naamVanApp = _app.config().getString("naam");

// 3. Drukt de inhoud van onze variabele af in de terminal van Netuno: "Mijn Applicatie"
_log.info(naamVanApp);
```

## Aangepaste configuraties

Naast de standaardconfiguraties van de database en de server kunt u uw eigen configuratievariabelen maken.

Dit is erg handig om bedrijfsregels te definiëren, zoals "maximaal aantal items per pagina" of "interval voor het verzenden van e-mails", zonder de applicatiecode telkens te hoeven wijzigen wanneer deze regels veranderen.

Deze variabelen worden opgeslagen in het blok `"settings"` in uw JSON-configuratiebestanden, zoals `_development.json` of `_production.json`.  

### JSON-structuur en zichtbaarheid (publiek vs. privé)

Bij het maken van uw configuraties is het essentieel om te scheiden wat de gebruikersinterface (frontend) mag zien en wat alleen op de server (backend) beschermd moet blijven.

* **Privévariabelen:** Deze staan in het blok `"settings"`. Alleen de server heeft er toegang toe.
* **Publieke variabelen:** Deze staan in het subblok `"public"`. Ze worden naar de gebruikersinterface (map `ui`) van het beheergebied gestuurd, zoals bij de ontwikkeling van dashboards.

**Voorbeeld van hoe u uw `.json`-bestand structureert:**

```json
{
  ...
  "settings": {
    "public": {
      "itemsPerPagina": 10
    },
    "intervalEmails": 10
  }
}
```

### Toegang tot de configuraties in de code
De manier om deze gegevens op te halen verschilt afhankelijk van waar u programmeert:

**1. Op de server / backend (services)**

Gebruik de functie `_app.settings()` in uw servercode (`.js`-bestanden in de map `server`) om algemene of privéconfiguraties te openen.  

```javascript
// Opent de privévariabele "intervalEmails"
const intervalEmails = _app.settings().getInt("intervalEmails");

_log.info("Het ingestelde interval is: " + intervalEmails);
```

**2. In de interface / frontend (UI)**

Bij de ontwikkeling van de interface (bestanden in de map `ui`) kunt u alles openen wat in het blok `"public"` is gedefinieerd. Gebruik hiervoor het globale object `netuno.config.app.settings`.

```javascript
// Opent de publieke variabele "itemsPerPagina" in de frontend
const itemsPerPagina = netuno.config.app.settings.itemsPerPagina;

console.log("Weergeven van " + itemsPerPagina + " items in de tabel.");
```
## Conclusie

Het configuratiesysteem van Netuno biedt flexibiliteit en structurele veiligheid voor uw applicatie. Hiermee is het mogelijk om:

* **Meerdere omgevingen beheren:** Verschillende uitvoeringscontexten (ontwikkeling, productie, enz.) met onafhankelijke parametriseringen maken en ondersteunen.
* **Variabelen aanpassen:** Het blok `settings` gebruiken om specifieke configuraties voor uw bedrijf toe te voegen. 
* **Verantwoordelijkheden scheiden:** Configuraties die beperkt zijn tot de backend isoleren en beschermen van diegene die in de frontend toegankelijk moeten zijn.