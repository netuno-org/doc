---
id: cors
title: CORS
sidebar_label: CORS
---

CORS-configuratie in de applicatie.

## Inleiding

CORS (Cross Origin Resource Sharing) is een validatieproces dat browsers uitvoeren om te controleren of ze resources kunnen integreren die door een ander adres worden gedeeld.

Het wordt geïmplementeerd wanneer:

- Bij de ontwikkeling van de frontendlaag met de webpack-server, zoals het ontwikkelen van webinterfaces (website of webapplicatie) met moderne technologieën zoals ReactJS en VueJS.
- Het frontendadres verschilt van het serviceadres, bijvoorbeeld wanneer de services op `http://localhost:9000` draaien en de frontend op `http://localhost:3000`.
- In productie draaien de services bijvoorbeeld op een eigen subdomein `api.voorbeeld.com` en de frontend op `www.voorbeeld.com`.

> Meer over CORS:
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">Wikipedia</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno is voorbereid om CORS-integratie eenvoudig en direct uit te voeren.

## Configuratie

De CORS-configuratie wordt uitgevoerd in het configuratiebestand van de applicatie, afhankelijk van de omgeving.

Om dit te doen, navigeert u binnen de applicatie die u ontwikkelt naar het omgevingsconfiguratiebestand. In dit voorbeeld gebruiken we het ontwikkelomgevingsbestand op:

- 📂 `config/_development.json`

Controleer of er nog geen CORS-configuraties bestaan; als die er niet zijn, voegt u aan het einde van het configuratiebestand (in JSON-formaat) de configuratieparameters toe:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> De CORS-configuratie is een array en ondersteunt meerdere afzonderlijke CORS-regels.

### Origins

De parameter `origins` is de lijst met frontendadressen die met de services worden geïntegreerd.

### Productie

In productie moeten we als origins de adressen definiëren waarop de frontend online draait.

Het configuratiebestand van de applicatie waarin `cors` wordt gedefinieerd, moet per omgeving verschillen.

Het configuratiebestand van de applicatie moet zijn:

- 📂 `config/_production.json`

Voorbeeld van de CORS-configuratie:

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://mijn-project.com", "https://www.mijn-project.com" ]
        }
    ]
    ...
}
```

Het configuratiebestand van de applicatie is `_production.json`, overeenkomstig de Netuno-omgevingsconfiguratie in het bestand `netuno/config.js`:

```javascript title="netuno/config.js"
config.env = 'production'
```

## Header (HTTP-header)

De standaardheader (header van het HTTP-protocol) is:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

Om de standaardheader aan te passen, voegt u de configuratieparameter `header` toe, bijvoorbeeld:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

In het bovenstaande voorbeeld wordt in de header alleen `Authorization` geaccepteerd in plaats van alle andere standaard gedefinieerde headers.

U kunt nieuwe definities aan de header toevoegen, bijvoorbeeld om de standaarddefinitie te vervangen.

## Handmatig

CORS kan ook handmatig worden geconfigureerd in plaats van het automatische mechanisme van Netuno te gebruiken.

In uw Netuno-applicatie hoeft u alleen het bestand te wijzigen:

- `📂 server/core/_request_url.js`

En de volgende code te gebruiken:

```javascript title="server/core/_request_url.js"
const httpHeaderOorsprong = _header.getString("Origin", "null")

if (httpHeaderOorsprong == 'https://www.mijn-app.com'
	|| httpHeaderOorsprong == 'http://localhost'
	|| httpHeaderOorsprong == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOorsprong)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

Merk op dat in de bovenstaande code de `if` de 'Headers' beperkt op basis van het oorsprongsadres (`Origin`).

Vergeet niet deze aan te passen aan de adressen die u gaat gebruiken.

> Op deze manier ondersteunen alle services en adressen van uw applicatie de CORS-headers.

### Alleen voor geïsoleerde services

Als u het beveiligingsniveau wilt verhogen door de headers alleen voor specifieke services te activeren, gebruikt u dezelfde codelogica in het bestand:

- `📂 server/core/_service_config.js`

In plaats van het bestand:

- `📂 server/core/_request_url.js`

## Conclusie

Zodra CORS is geconfigureerd, antwoordt Netuno automatisch met de standaardheader (header van het HTTP-protocol) voor de adressen die als `origins` zijn geconfigureerd.

De standaard-`headers` kunnen worden aangepast en gewijzigd.

U kunt verschillende CORS-regels configureren.

Hoewel Netuno de handmatige configuratie van CORS-regels programmatisch ondersteunt, verdient het de voorkeur om het automatische mechanisme te gebruiken dat in de applicatieconfiguratie is ingebouwd.