---
sidebar_position: 4
id: service-client
title: Client voor HTTP-services en REST API
sidebar_label: Client voor Services
---

## Introductie

In het technologische ecosysteem van Netuno worden enkele modules op NPM geleverd, zoals:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Zie ook de [GIT-repository van de Service Client](https://github.com/netuno-org/service-client).

Deze module dient om integraties uit te voeren met de services die in Netuno zijn ontwikkeld, dat wil zeggen, de
endpoints van de REST API die in de backend van Netuno zijn ontwikkeld, binnen de map `server/services` in de
Netuno-applicaties.

Het is gebruikelijk bij de ontwikkeling van services om programma's te gebruiken zoals:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

om HTTP-verzoeken naar de services te testen.

In de frontendcode zouden we om deze services te integreren fetch, requests, AXIOS en zoveel andere kunnen gebruiken.

Netuno levert echter zijn eigen client, die werkt bij de ontwikkeling van JavaScript-frontend en ook in de
NodeJS-backend.

De reden waarom Netuno zijn eigen implementatie van een HTTP-client voor de services heeft, is om meer
praktisch gemak te bieden, de implementatie van de code te vereenvoudigen en meer snelheid in de ontwikkeling te
garanderen.

## Installatie

De installatie van de service-client is zoals het installeren van elke andere module.

Waar we het bestand `package.json` hebben, voeren we het installatiecommando uit:

```bash
bun add @netuno/service-client
```

## Importeren

Om de service-client te importeren in moderne JavaScript-ontwikkeling:

```js
import _service from '@netuno/service-client';
```

Om de service-client te importeren in klassieke JavaScript-ontwikkeling:

```js
const _service = require('@netuno/service-client');
```

Merk op dat de interne naam in de code `_service` is.

> Standaard gebruikt Netuno de `_` als prefix om aan te geven dat iets intern of specifiek is, zoals een
> hulpmiddel of een tool uit zijn ecosysteem.

Daarom moeten we, om de standaard te volgen, altijd de naam `_service` gebruiken.

## Configuratie

De configuratie wordt globaal uitgevoerd: de configuratie wordt één
keer gedefinieerd en kan het beste op een beginpunt van de algemene code worden uitgevoerd.

Dit zal de minimale configuratie zijn:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

Dat wil zeggen, definieert de prefix van de adressen van de services, dit voorkomt
de noodzaak om altijd de volledige URL te plaatsen, zodat we bij de
aanroepen naar de services alleen de rest van de URL hoeven aan te geven.

### Volledige configuratie

We kunnen standaardwaarden configureren voor alle aanroepen van
services, waarbij we bij de aanroep van elke service deze waarden kunnen overschrijven.

Zie alle parameters die we kunnen configureren:

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

Is de globale prefix van de URL's.

#### url

Is het deel van de URL dat aan de prefix wordt toegevoegd, het specifieke
adres van de service.

#### method

HTTP-methode die gebruikt wordt in het HTTP-verzoek, standaard
is dit `GET`.

#### credentials

Definieert het gedrag van de inloggegevens bij de HTTP-aanroepen:

- `omit` - Verzendt en ontvangt nooit inloggegevens.
- `same-origin` - Verzendt en voegt alleen inloggegevens toe wanneer
het verzoeken binnen hetzelfde domein betreft.
- `include` - Moet altijd de inloggegevens opnemen, zelfs als het domein verschilt.

Standaard is de waarde `include`, omdat dit het meest logisch is in
standaardontwikkeling; de backend kan zich al dan niet in hetzelfde domein
bevinden, afhankelijk van de architectuur, en bij lokale ontwikkeling verschilt dit soms
van productie, daarom raden we aan om `include` te gebruiken
om verrassingen te voorkomen.

#### headers

In de `headers` kunnen we sleutels en waarden in de HTTP-header definiëren.

Standaard is gedefinieerd dat gegevens in JSON-formaat worden verzonden en
ontvangen.

#### start

`callback`-functie die wordt uitgevoerd wanneer het HTTP-verzoek gaat beginnen.

#### succes

`callback`-functie die wordt uitgevoerd wanneer het HTTP-verzoek met succes
is uitgevoerd op de backend-server.

De inhoud van het antwoord wordt verkregen via het eerste argument van de functie.

#### fail

`callback`-functie die wordt uitgevoerd wanneer het HTTP-verzoek een fout
heeft veroorzaakt.

De details van de fout worden verkregen via het eerste argument van de functie.

#### end

`callback`-functie die wordt uitgevoerd wanneer het HTTP-verzoek is voltooid.

Wordt altijd uitgevoerd, ongeacht of er succes of een fout was.

## Gebruik

Om een service uit te voeren met een HTTP-verzoek definiëren we de waarden
van de parameters die de vereisten van de service configureren.

In de sleutel `data` verzenden we de gegevens zelf, dat wil zeggen, alle
gegevensparameters die we naar de backend-service gaan verzenden.

Zie het basisvoorbeeld van een verzoek:

```js
import _service from '@netuno/service-client';

_service({
  url: "mijn-service",
  data: { id: 1, voorbeeld: "Hallo backend." },
  start: () => {
    console.log("Het verzoek gaat beginnen.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Antwoordde in tekst:", response.text);
    }
    if (response.json) {
      console.info("Antwoordde in JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("Mislukt met de fout:", error);
  },
  end: () => {
    console.log("Het verzoek is voltooid.");
  }
});
```

De uiteindelijke URL houdt rekening met de prefix die globaal is gedefinieerd
in de algemene configuratie.

Omdat de HTTP-methode niet is gedefinieerd, wordt verzonden met de
standaardmethode die in de algemene configuratie is gedefinieerd, die
standaard `GET` is.

### Eenvoudig

Eenvoudig voorbeeld van hoe een verzoek van het type `POST` uit te voeren:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "product",
  data: { naam: "Strohoed", aantal: 20 },
  success: ({json}) => {
    console.info("Product succesvol aangemaakt:", json);
  },
  fail: (error) => {
    console.error("Fout bij aanmaken product:", error);
  }
});
```

### Formulier

Wanneer we formulieren gebruiken, kunnen we de klasse FormData laden met de inhoud van het formulier, zie het voorbeeld:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("formulier"));
_service({
  method: "PUT",
  url: "klant",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Klant succesvol bijgewerkt.");
    } else {
      alert("Ongeldig antwoord.");
    }
  },
  fail: (e) => {
    console.log("Fout", e);
  }
});
```

### Upload

Eenvoudig voorbeeld van hoe bestanden te uploaden met de klasse `FormData`:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('bestand', document.getElementById("bestandVeld").files[0]);
formData.append('anderVeld', 'waarde...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('Bestand succesvol geüpload.');
  },
  fail: (e) => {
    console.log("Fout in antwoord", e);
  }
});
```

### Download

We kunnen bestanden die dynamisch door services worden gegenereerd, downloaden op een geïntegreerde manier in de
context van de pagina.

#### BLOB - Binair Groot Object

Om binaire antwoorden te downloaden, moeten we `blob` met de waarde `true` instellen in de basisparameters,
en we verkrijgen de gegenereerde bytes in de `blob` van het antwoord.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Geeft aan dat het antwoord binair is.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Ongeldig antwoord.");
    }
  },
  fail: (e) => {
    console.log("Fout", e);
  }
});
```

#### Aangepast bestand

De naam en het type van het bestand kunnen in de frontend worden aangepast; de afhankelijkheid [DownloadJS](https://www.npmjs.com/package/downloadjs) is zeer nuttig in dit proces.

Installeer de afhankelijkheid [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

In de code kan het als volgt worden gebruikt:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/rapport/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "rapport.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Fout", e);
  }
});

_service({
  url: "/services/rapport/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "rapport.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Fout", e);
  }
});
```

### URL voor services

Er zijn situaties waarin we de URL van services moeten genereren, bijvoorbeeld wanneer er services zijn die
hulpmiddelen leveren die in de HTML of CSS moeten worden geïntegreerd.

Een duidelijk voorbeeld is de Avatar: de gebruiker definieert zijn avatarafbeelding en om deze te presenteren kunnen we de uiteindelijke URL
als volgt genereren:

```js
const avatarUrl = _service.url(`/profile/avatar?uid=${user.uid}`)
```

De gegenereerde URL kan in de HTML of in een CSS-eigenschap, zoals de background, worden geïnjecteerd.

### React & Ant.Design

Omdat we veel React en Ant.Design gebruiken, volgen hier enkele nuttige tips.

De klassieke imports:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

De verwerkingsstatus definiëren:

```js
const [laden, setLaden] = useState(false);
```

Implementatie van de gebeurtenis om een formulier op te slaan, dat het object met de ingevulde waarden in JSON-formaat verzendt:

```js
const onFinish = (waarden) => {
  const bijFout = () => {
    notification.error({
      title: 'Fout',
      description: 'Kon de gegevens niet opslaan.'
    });
  };
  _service({
    url: '/services/klant',
    method: 'POST',
    data: waarden,
    start: () => {
      setLaden(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Succes',
          description: 'De gegevens zijn succesvol opgeslagen.'
        });
        return;
      }
      bijFout();
    },
    fail: (e) => {
      console.error("Service mislukt.", e);
      bijFout();
    },
    end: () => {
        setLaden(false);
    },
  });
};
```

In de formuliercomponent van Ant.Design definieert men de eigenschap van de actie die de gegevens verzendt met de
eerder geïmplementeerde gebeurtenis, bijvoorbeeld:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Upload

Hier is een volledig voorbeeld van hoe bestanden te uploaden met een formulier in Ant.Design en met
de FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function UploadFormulier() {
  const [laden, setLaden] = useState(false);
  const onFinish = (waarden)=> {
    const formData = new FormData();
    formData.append("titel", waarden.titel);
    formData.append("bestand", waarden.bestand.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "bestand/opslaan",
      data: formData,
      start: () => {
        setLaden(true);
      },
      success: () => {
        notification.success({
          title: 'Formulier',
          description: 'Uw gegevens zijn succesvol opgeslagen.'
        });
      },
      fail: (e) => {
        console.error("Uploadformulier mislukt", e);
        notification.error({
          title: 'Formulier',
          description: 'Kon uw gegevens niet opslaan.'
        });
      },
      end: () => {
        setLaden(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Titel" name="titel"
        rules={[{ required: true, message: 'Voer de titel in.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Bestand" name="bestand"
        rules={[{ required: true, message: 'Voer het bestand in.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Uploaden</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={laden}>
          Opslaan
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadFormulier;
```

## Conclusie

De Service Client versnelt de integratie met de backend om gegevens en bestanden op te halen en te verzenden.

Het is mogelijk om elke andere native methode of andere afhankelijkheid te gebruiken om deze bewerkingen uit te voeren, maar de
Service Client is ontwikkeld om integraties te vergemakkelijken en te versnellen, en is flexibel en zeer intuïtief.

Het belangrijkste doel van Netuno om de Service Client in zijn ecosysteem te leveren, is garanderen dat de ontwikkeling
duidelijk en snel is.

Als u bij het gebruik van de Service Client een probleem tegenkomt, meld dit dan in de [Issues](https://github.com/netuno-org/service-client/issues) van het project.

⭐ Vergeet niet een ster te geven aan de GitHub van het project:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).