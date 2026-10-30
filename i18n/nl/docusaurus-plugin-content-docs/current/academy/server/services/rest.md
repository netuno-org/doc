---
id: rest
title: REST - Webdiensten
sidebar_label: REST - Webdiensten
---

## Inleiding

REST-verzoeken zijn online adressen die informatie retourneren over gegevens die op de server worden verwerkt, met de bedrijfslogica van gegevens die beveiliging en betrouwbaarheid vereisen, en met integratie van de database.

> Meer over <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

De REST-API wordt gebouwd op basis van de Services van Netuno.

## ALL

Om een service in Netuno te maken die op elk type HTTP-methode reageert:

- `📂 server/services/mijn-service.js`

In de browser wordt deze service uitgevoerd voor alle soorten verzoeken op het adres:

- http://localhost:9000/services/mijn-service

## GET

Adressen van het type GET worden meestal gebruikt voor bewerkingen om gegevens op te lijsten of op te halen.

Om een service in Netuno te maken die alleen op het HTTP-methodetype GET reageert, gebruikt u een van deze vormen:

- `📂 server/services/lijst/get.js`
- `📂 server/services/lijst.get.js`

In de browser wordt deze service alleen uitgevoerd voor het verzoektype GET op het adres:

- GET http://localhost:9000/services/lijst

## POST

Adressen van het type POST worden meestal gebruikt voor bewerkingen die nieuwe gegevens aanmaken of genereren.

Om een service in Netuno te maken die alleen op het HTTP-methodetype POST reageert, maakt u het codebestand aan met een van deze vormen:

- `📂 server/services/aanmaken/post.js`
- `📂 server/services/aanmaken.post.js`

Deze service wordt alleen uitgevoerd voor het verzoektype POST op het adres:

- POST http://localhost:9000/services/aanmaken

## PUT

Adressen van het type PUT worden meestal gebruikt voor bewerkingen die gegevensrecords wijzigen.

Om een service in Netuno te maken die alleen op het HTTP-methodetype PUT reageert, maakt u het codebestand aan met een van deze vormen:

- `📂 server/services/opslaan/put.js`
- `📂 server/services/opslaan.put.js`

Deze service wordt alleen uitgevoerd voor het verzoektype PUT op het adres:

- PUT http://localhost:9000/services/opslaan

## DELETE

Adressen van het type DELETE worden meestal gebruikt voor bewerkingen die gegevensrecords verwijderen.

Om een service in Netuno te maken die alleen op het HTTP-methodetype DELETE reageert, maakt u het codebestand aan met een van deze vormen:

- `📂 server/services/verwijderen/delete.js`
- `📂 server/services/verwijderen.delete.js`

Deze service wordt alleen uitgevoerd voor het verzoektype DELETE op het adres:

- DELETE http://localhost:9000/services/verwijderen

## OPTIONS

Bij integratie met de frontend voert de browser tijdens het CORS-validatieproces een aanroep van het type OPTIONS uit.

> Meer over <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Om een service in Netuno te maken die alleen op het HTTP-methodetype OPTIONS reageert, maakt u het codebestand aan met een van deze vormen:

- `📂 server/services/weergeven/options.js`
- `📂 server/services/weergeven.options.js`

Dit moet worden geïmplementeerd voor alle services die in een externe frontend, zoals een website, worden geïntegreerd.

Normaal gebruikte code:

```javascript
_out.json(_val.map().set("resultaat", true))
```

Deze service wordt uitgevoerd voor het verzoektype OPTIONS op het adres:

- OPTIONS http://localhost:9000/services/weergeven

## Clients en Testuitvoering

Om services te testen met een specifiek HTTP-methodetype kunt u gespecialiseerde programma's gebruiken die REST-API's testen, zoals:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Met de opdracht `curl` in de terminal kunt u elk type test uitvoeren.

Vanuit de console/opdrachtregel stuurt u een GET:

```
curl http://localhost:9000/services/bewaren
```

Met `-X` kunt u het methodetype opgeven:

```
curl -X POST -F 'naam=Test' -F 'email=email@voorbeeld.com' http://localhost:9000/services/bewaren
```

> De parameter `-F` verzendt met Content-Type: `multipart/form-data`

Een andere manier om parameters te verzenden:

```
curl -X POST -d 'naam=Test' -d 'email=email@voorbeeld.com' http://localhost:9000/services/bewaren
```

Dit kan als volgt worden samengevoegd:

```
curl -X POST -d 'naam=Test&email=email@voorbeeld.com' http://localhost:9000/services/bewaren
```

> De parameter `-d` verzendt met Content-Type: `application/x-www-form-urlencoded`

### JSON

Om in JSON-formaat te verzenden, moet u het inhoudstype opgeven:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"naam": "Test", "email": "email@voorbeeld.com"}' \
    http://localhost:9000/services/bewaren
```

> Met `-H` wordt de parametrisering van de header (_HEADER_) gedefinieerd

### Uploaden

Om bestanden te uploaden:

```
curl -X POST -F 'afbeelding=@/home/gebruiker/bestand.jpg' http://localhost:9000/services/bewaren
```

## Service Client - NPM

Om de integratie met de frontend gemakkelijk te maken, is de NPM-module beschikbaar:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Installatieopdracht: `npm i -S @netuno/service-client`

Bij het definiëren van het adres van de services, zoals:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

kunt u services uitvoeren die met de frontend zijn geïntegreerd, bijvoorbeeld:

```
  _service({
      url: "/services/mijn-service",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("Service-antwoord", response.json);
          }
      },
      fail: (e) => {
          console.log("Service-fout", e);
      }
  });
```

## Conclusie

Het is mogelijk om services te beperken tot alleen het gewenste HTTP-methodetype.

Voor integratie met de frontend kan dit op het laagste niveau met `fetch`.

Om de implementatie te versnellen en te standaardiseren is de NPM-module [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client) beschikbaar.