---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Definitie van het serviceschema.

## Inleiding

OpenAPI is een specificatie die de services standaardiseert die door REST-API's worden aangeboden; het helpt te begrijpen hoe de services zijn gedefinieerd, zoals adres, invoer en uitvoer.

Het maakt de generatie van een testinterface en de automatische generatie van clients mogelijk, zodat je kunt integreren met andere technologieën.

> Meer over <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Activering en configuratie

Om OpenAPI in je applicatie in Netuno te activeren en configureren, moet je het configuratiebestand van de applicatie voor de omgeving die je gebruikt bewerken, zoals:

- `📂 config/_development.json`
- `📂 config/_production.json`

Voer de volgende parameters in en pas ze aan:

```
...
    "openapi": {
        "host": "http://mijn-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://mijn-app.local.netu.no:9000/services",
                "description": "Lokale ontwikkeling"
            }
        ]
    },
...
```

Controleer of de configuraties kloppen; in het bovenstaande voorbeeld is dat voor de _development_-omgeving.

> In productie is het raadzaam om `https` te gebruiken.

### _openapi.json in de services

Configureer in de hoofdmap van de services het bestand `_openapi.json`.

Het volledige pad binnen de applicatie is:

- `📂 server/services/_openapi.json`

De inhoud van dit bestand ziet eruit als dit voorbeeld:

```
{
  "info": {
    "title": "Mijn Applicatie",
    "description": "REST API van Mijn Applicatie, gebruik met mate.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Pas de titel en beschrijving aan naar wat in jouw geval zinvol is.

## Invoer

Wanneer je _schema_-bestanden voor invoer configureert, kan Netuno de ontvangen parameters valideren door ze te vergelijken met de regels van JSON Schema.

> Meer over <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Als er een validatiefout optreedt, wordt de uitvoering van de service geblokkeerd en verschijnt er een fout in de `log` van Netuno; aan de afnemer van de service wordt HTTP-statuscode **400** (_Bad Request_) teruggegeven.

Om de regels voor invoerparameters te configureren, maak je een bestand met de extensie `in.json` naast het codebestand van de service; de naam moet dezelfde zijn.

- De service `detail.js` zou het bestand `detail.in.json` moeten hebben.
- De service `detail.post.js` zou het bestand `detail.post.in.json` moeten hebben.
- De service `detail/post.js` zou het bestand `detail/post.in.json` moeten hebben.

Voorbeeld van de inhoud van `in.json`:

```
{
    "tags":[
      "productservices"
    ],
    "summary": "Productdetail",
    "description": "Alle detailvelden van het opgegeven product worden opgehaald.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno ondersteunt enkele extra typen die niet door JSON Schema worden ondersteund, zoals `string-not-empty`, `array-not-empty`, `id` en `uid` (of `uuid` of ook `guid`).

> Meer over deze specificatie in <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Uitvoer

Wanneer je _schema_-bestanden voor uitvoer configureert, kan Netuno de verzonden parameters valideren door ze te vergelijken met de regels van JSON Schema.

> Meer over <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Als er een validatiefout optreedt, wordt de uitvoer toch naar de afnemer van de service verzonden, maar de foutmeldingen van de validatie verschijnen in de `log` van Netuno.

Om de regels voor uitvoerparameters te configureren, maak je een bestand met de extensie `out.200.json` naast het codebestand van de service; de naam moet dezelfde zijn als die van de service.

Waarbij **200** de HTTP-statuscode is die in de respons wordt meegestuurd; om meerdere HTTP-statuscodes te ondersteunen, voeg je eenvoudig extra JSON-bestanden met een ander nummer toe.

Enkele voorbeelden:
- De service `opslaan.js` zou het bestand `opslaan.out.200.json` moeten hebben.
- De service `opslaan.post.js` zou het bestand `opslaan.post.out.200.json` moeten hebben.
- De service `opslaan/post.js` zou het bestand `opslaan/post.out.200.json` moeten hebben.

Voorbeeld van de inhoud van `out.200.json`:

```
{
    "type": "object",
    "properties": {
      "resultaat": {
        "type": "boolean"
      }
    },
    "required": [
      "resultaat"
    ]
}
```

Netuno ondersteunt enkele extra typen die niet door JSON Schema worden ondersteund, zoals `string-not-empty`, `array-not-empty`, `id` en `uid` (of `uuid` of ook `guid`).

> Meer over deze specificatie in <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Schema importeren

Netuno ondersteunt het importeren van _schemas_, waardoor je een deel van een _schema_ in meerdere JSON's kunt hergebruiken.

> Door _schemas_ te importeren vermijd je codeduplicatie.

Maak de map `_schema` aan in de hoofdmap van de services, op:

- `📂 server/services/_schema`

Nu kun je in de JSON-configuratie _schemas_ importeren met de parameter `_schema` in de JSON, bijvoorbeeld:

```
{
    "summary": "Producten verwijderen",
    "description": "Maakt het mogelijk producten definitief te verwijderen.",
    "_schema": "get/only-code.in"
}
```

Dit betekent dat het bestand `_schema/get/only-code.in.json` wordt geïmporteerd op de plaats waar de parameter `_schema` staat.

## Specificatie en tests

Om de volledige specificatie te genereren van alle services die OpenAPI met JSON Schema ondersteunen, open je bijvoorbeeld:

- http://localhost:9000/services/_openapi

Er wordt een JSON met de volledige specificatie weergegeven.

Kopieer voor het testen de volledige gegenereerde JSON.

Open de Swagger-editor: https://editor.swagger.io/

Verwijder de inhoud aan de linkerkant, plak de JSON en beantwoord ja op de vraag om JSON naar YAML te converteren.

Met de gegenereerde interface aan de rechterkant kun je alle beschikbare services beter begrijpen en tests uitvoeren.

Het maakt het ook mogelijk automatisch clients voor andere technologieën te genereren.

## Programmatisch

In de map `_schema` kunnen we `.js`-bestanden gebruiken die worden uitgevoerd tijdens het genereren van de OpenAPI-definitie, maar ook tijdens het validatieproces van de invoer en uitvoer van de services.

Via programmatie van het schema kunnen we dynamische validaties genereren, bijvoorbeeld:
- Alleen een code accepteren die in de database bestaat.
- Met de `UID` het record uit de database ophalen en met de services delen.
- Bij `POST` of `PUT` een ander schematype genereren dan bij `DELETE`.

### Voorbeeld met een lijst van waarden

Stel dat we een service hebben die de code van een bepaalde categorie ontvangt.

We kunnen niet zomaar elke waarde als code accepteren, omdat het een waarde kan zijn die niet overeenkomt met een geldige categoriecode.

Daarom kunnen we beperken dat alleen codes worden geaccepteerd die in de database zijn geregistreerd.

Maak het schema aan in: `server/services/_schema/categorie/codes.js`

```javascript
const dbCategorieen = _db.query("SELECT code FROM categorie")

const lijstCodes = _val.list()

for (const dbCategorie of dbCategorieen) {
    lijstCodes.add(dbCategorie.getString("code"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        lijstCodes
    )
```

> In `lijstCodes` staan alle categoriecodes die in de database zijn geregistreerd.

In de service kunnen we de volgende `JSON` hebben die het schema `categorie/codes` gebruikt:

```json
{
  "summary": "Producten in de categorie weergeven",
  "description": "Haalt alle producten op die aan een bepaalde categorie zijn gekoppeld.",
  "type": "object",
  "properties": {
    "categorie": {
      "type": "object",
      "properties": {
        "code": {
          "_schema": "categorie/codes"
        }
      },
      "required": [
        "code"
      ]
    }
  },
  "required": [
    "categorie"
  ]
}
```

Op deze manier zorgen we ervoor dat de service alleen wordt uitgevoerd als de code geldig is.

### Voorbeeld met een globaal object

Stel dat we verschillende services hebben die de `UID` van de klant ontvangen en dat we in elke service de database moeten raadplegen om de gegevens van de klant die bij zijn `UID` horen op te halen.

We kunnen dit centraliseren in een geprogrammeerd schema dat via de ontvangen `UID` van de klant de klantgegevens uit de database ophaalt en opslaat in een globaal object dat toegankelijk is in de code van de services.

Zo worden de klantgegevens altijd globaal en automatisch geladen wanneer we een klant-`UID` ontvangen.

We maken een geprogrammeerd schema aan in: `server/services/_schema/klant.js`

```javascript
const klant = _req.getValues('klant', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbKlant = _db.get('klant', klant.getString("uid"))
    
    if (dbKlant == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'klant-niet-gevonden')
        )
        _service.cancel()
    }
    
    _val.global().set('klant', dbKlant)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> Met `_service.isGeneratingOpenAPIDefinition()` kunnen we controleren of de OpenAPI-definitie wordt gegenereerd; anders is het de uitvoering van een HTTP-verzoek.
> 
> Als de `UID` van de klant niet wordt gevonden, wordt een 404 geretourneerd en wordt de uitvoering van de service onderbroken.
> 
> Merk op dat we `_val.global()` gebruiken, waarmee je gegevens globaal kunt delen tussen alle codebestanden die tijdens de verwerking van het HTTP-verzoek worden uitgevoerd.

In het verlengde van het voorbeeld hebben we een service die de aankopen van de klant weergeeft.

We hebben de invoervalidatie voor de service in: `server/services/klant/aankopen/post.in.json`

```json
{
    "summary": "Aankopenlijst",
    "description": "Geeft de aankopen weer die door de klant zijn gedaan.",
    "type": "object",
    "properties": {
        "klant": {
            "_schema": "klant"
        }
    },
    "required": [
        "klant"
    ]
}
```

> Merk op dat de waarde van `"_schema"` voor de klant de naam is van het codebestand dat we eerder in het schema hebben geprogrammeerd. 

En in de code van de service voor klantenaankopen in: `server/services/klant/aankopen/post.js`

```javascript
const dbKlant = _val.global().getValues('klant')
...
```

Via `_val.global()` halen we de klantgegevens uit de database op die automatisch door de schemacode zijn geladen.

### Voorbeeld met een HTTP-methode

We kunnen voor elk type HTTP-methode een ander schema retourneren.

We kunnen bijvoorbeeld per code een schema genereren voor het aanmaken, bewerken of verwijderen van netwerkpoorten:

- Bij POST wordt de aanmaakbewerking uitgevoerd; dan bevat het schema geen UID, maar zijn de naam en het poortnummer vereist.
- Bij PUT wordt de bewerkingsbewerking uitgevoerd; dan zijn de UID, de naam en het nummer van de netwerkpoort vereist.
- Bij PUT of DELETE is de UID nodig om de respectieve bewerkings- en verwijderingsoperaties uit te voeren. 

```javascript
const eigenschappen = _val.map()
const vereist = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    eigenschappen.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    vereist.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    eigenschappen
        .set(
            'naam',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'poort',
            _val.map()
                .set('type', 'integer')
                .set('minimum', poortMinimum)
                .set('maximum', poortMaximum)
        )
    vereist
        .add('naam')
        .add('poort')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        eigenschappen
    )
    .set(
        'required',
        vereist
    )
```

## Video's

Hieronder volgen enkele voorbeeldvideo's over hoe je een API ontwikkelt die met OpenAPI is geïntegreerd:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube-videospeler" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Conclusie

Met OpenAPI-ondersteuning kunnen we validatieregels maken met JSON Schema, wat de volgende voordelen biedt:

- Meer veiligheid garanderen voor de gegevens die in de services worden ingevoerd. 
- Een waarschuwing in de `log` als de uitvoer van de service niet overeenkomt met de specificatie.
- Genereert eenvoudig een navigatie- en testinterface voor de services.