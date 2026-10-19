---
sidebar_position: 4
id: service-client
title: Client pentru Servicii HTTP și API REST
sidebar_label: Client pentru Servicii
---

## Introducere

În ecosistemul de tehnologii Netuno sunt furnizate unele module pe NPM, cum ar fi:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Vedeți și repository-ul [GIT al Service Client](https://github.com/netuno-org/service-client).

Acest modul servește pentru a realiza integrările cu serviciile dezvoltate în Netuno, adică endpoint-urile
API-ului REST dezvoltate în backend-ul Netuno, în folderul `server/services` din aplicațiile Netuno.

Este obișnuit în dezvoltarea serviciilor să se utilizeze programe precum:

- [Pororoca](https://pororoca.io/)
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

Pentru a face teste de cereri HTTP către servicii.

În codul de frontend pentru a integra aceste servicii am putea utiliza fetch, requests, AXIOS și multe altele.

Totuși, Netuno oferă propriul său client, care funcționează în dezvoltarea frontend-ului JavaScript,
precum și în backend-ul NodeJS.

Motivul pentru care Netuno are propria sa implementare de client HTTP pentru servicii este de a oferi o mai
mare practicitate, simplificând implementarea codului și garantând o mai mare agilitate în dezvoltare.

## Instalare

Instalarea clientului de servicii este ca instalarea oricărui alt modul.

Acolo unde avem fișierul `package.json` executăm comanda de instalare:

```bash
bun add @netuno/service-client
```

## Importare

Pentru a importa clientul de servicii în dezvoltarea JavaScript modernă:

```js
import _service from '@netuno/service-client';
```

Pentru a importa clientul de servicii în dezvoltarea JavaScript clasic:

```js
const _service = require('@netuno/service-client');
```

Observați că numele intern din cod este `_service`.

> În mod implicit, Netuno utilizează `_` ca prefix pentru a indica faptul că este ceva intern sau specific precum
> o resursă sau un instrument din ecosistemul său.

Prin urmare, pentru a menține standardul trebuie să folosim întotdeauna numele `_service`.

## Configurare

Configurarea se face global, configurarea se definește o
singură dată, se recomandă executarea la un punct inițial al codului general.

Aceasta va fi configurarea minimă:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

Adică, definește prefixul adreselor serviciilor, acest lucru evită
necesitatea de a pune întotdeauna URL-ul complet, astfel încât la
apelurile către servicii putem indica doar restul URL-ului.

### Configurare completă

Putem configura valori implicite pentru toate apelurile de
servicii, iar la apelul fiecărui serviciu putem suprascrie
aceste valori.

Vedeți toți parametrii pe care îi putem configura:

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

Este prefixul global al URL-urilor.

#### url

Este partea din URL care este adăugată la prefix, adresa specifică
a serviciului.

#### method

Metoda HTTP care va fi utilizată în cererea HTTP, în
mod implicit este `GET`.

#### credentials

Definește comportamentul acreditărilor în apelurile HTTP:

- `omit` - Niciodată nu trimite și nici nu primește acreditări.
- `same-origin` - Trimite și include acreditări doar atunci când
cererile sunt pe același domeniu.
- `include` - Trebuie să includă întotdeauna acreditările, chiar dacă domeniul este diferit.

În mod implicit, valoarea este `include`, deoarece este ceea ce are cel mai mult
sens în dezvoltarea standard, backend-ul poate fi sau nu pe același domeniu,
depinde de arhitectură, iar în dezvoltarea locală uneori diferă
de producție, prin urmare, pentru a evita surprizele, recomandăm utilizarea
`include`.

#### headers

În `headers` putem defini chei și valori în header-ul HTTP.

În mod implicit, este definit că se vor trimite și primi date în format
JSON.

#### start

Funcție de `callback` executată când urmează să înceapă cererea HTTP.

#### success

Funcție de `callback` executată când cererea HTTP a fost executată
cu succes pe serverul de backend.

Conținutul răspunsului este obținut în primul argument al funcției.

#### fail

Funcție de `callback` executată când cererea HTTP a generat o
eroare.

Detaliile erorii sunt obținute în primul argument al funcției.

#### end

Funcție de `callback` executată când cererea HTTP a fost finalizată.

Se execută întotdeauna, indiferent dacă a fost succes sau eroare.

## Utilizare

Pentru a executa un serviciu cu o cerere HTTP, definim valorile
parametrilor care configurează cerințele serviciului.

În cheia `data` trimitem datele în sine, adică toți parametrii
de date pe care îi vom trimite către serviciul de backend.

Vedeți exemplul de bază al unei cereri:

```js
import _service from '@netuno/service-client';

_service({
  url: "serviciu-meu",
  data: { id: 1, exemplu: "Salut backend." },
  start: () => {
    console.log("Cererea va începe.");
  },
  success: (response) => {
    if (response.text) {
      console.info("A răspuns în text:", response.text);
    }
    if (response.json) {
      console.info("A răspuns în JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("A eșuat cu eroarea:", error);
  },
  end: () => {
    console.log("Cererea a fost finalizată.");
  }
});
```

URL-ul final va ține cont de prefixul definit global în
configurarea generală.

Deoarece nu a fost definită metoda HTTP, atunci va fi trimisă cu
metoda implicită care a fost definită în configurarea generală, care în
mod implicit este `GET`.

### Simplu

Exemplu simplu de cum să executați o cerere de tip `POST`:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "produs",
  data: { nume: "Pălărie de paie", cantitate: 20 },
  success: ({json}) => {
    console.info("Produs creat cu succes:", json);
  },
  fail: (error) => {
    console.error("Eroare la crearea produsului:", error);
  }
});
```

### Formular

Când utilizăm formulare, putem încărca clasa FormData cu conținutul formularului, vedeți exemplul:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("formular"));
_service({
  method: "PUT",
  url: "client",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Client actualizat cu succes.");
    } else {
      alert("Răspuns invalid.");
    }
  },
  fail: (e) => {
    console.log("Eroare", e);
  }
});
```

### Încărcare

Exemplu simplu de cum să realizați încărcarea fișierelor utilizând clasa `FormData`:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('fisier', document.getElementById("campulFisier").files[0]);
formData.append('altCamp', 'valoare...');
_service({
  method: "PUT",
  url: "/incarcare",
  data: formData,
  success: ({json}) => {
    alert('Fișier încărcat cu succes.');
  },
  fail: (e) => {
    console.log("Eroare la răspuns", e);
  }
});
```

### Descărcare

Putem realiza descărcarea fișierelor generate dinamic de servicii într-un mod integrat în contextul
paginii.

#### BLOB - Obiect binar mare

Pentru a realiza descărcarea răspunsurilor binare, trebuie să definim `blob` cu valoarea `true` în parametrizarea de bază,
și obținem octeții generați în `blob`-ul răspunsului.

```js
import _service from '@netuno/service-client';

_service({
  url: "/descarcare",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Definește că răspunsul este binar.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Răspuns invalid.");
    }
  },
  fail: (e) => {
    console.log("Eroare", e);
  }
});
```

#### Fișier personalizat

Numele și tipul fișierului pot fi personalizate în frontend, dependența [DownloadJS](https://www.npmjs.com/package/downloadjs) este foarte utilă în acest proces.

Instalați dependența [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

În cod poate fi utilizat în felul următor:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/raport/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "raport.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Eroare", e);
  }
});

_service({
  url: "/services/raport/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "raport.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Eroare", e);
  }
});
```

### URL pentru servicii

Există situații în care trebuie să generăm URL-ul serviciilor, de exemplu, când există servicii care furnizează resurse ce
trebuie integrate în HTML sau în CSS.

Un exemplu clar este Avatarul, utilizatorul își definește imaginea de avatar, iar pentru a o prezenta putem genera URL-ul final
în felul următor:

```js
const avatarLink = _service.url(`/profil/avatar?uid=${user.uid}`)
```

URL-ul generat poate fi injectat în HTML sau într-o proprietate CSS, cum ar fi background.

### React & Ant.Design

Deoarece folosim mult React și Ant.Design, iată câteva sfaturi utile.

Importurile clasice:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Definiți starea de procesare:

```js
const [loading, setLoading] = useState(false);
```

Implementarea evenimentului pentru salvarea unui formular, care va trimite obiectul cu valorile completate în format JSON:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: 'Eroare',
      description: 'Nu s-au putut salva datele.'
    });
  };
  _service({
    url: '/services/client',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Succes',
          description: 'Datele au fost salvate cu succes.'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("Serviciul a eșuat.", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

În componenta de formular a Ant.Design se definește proprietatea acțiunii care trimite datele cu evenimentul
implementat anterior, de exemplu:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Încărcare

Iată un exemplu complet de cum să faceți încărcarea fișierelor utilizând un formular în Ant.Design și cu
FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function FormularIncarcare() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("titlu", values.titlu);
    formData.append("fisier", values.fisier.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "fisier/salvare",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: 'Formular',
          description: 'Datele tale au fost salvate cu succes.'
        });
      },
      fail: (e) => {
        console.error("Încărcarea formularului a eșuat", e);
        notification.error({
          title: 'Formular',
          description: 'Nu s-au putut salva datele tale.'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Titlu" name="titlu"
        rules={[{ required: true, message: 'Vă rugăm să introduceți titlul.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Fișier" name="fisier"
        rules={[{ required: true, message: 'Vă rugăm să introduceți fișierul.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Încărcare</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Salvează
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormularIncarcare;
```

## Concluzie

Service Client accelerează integrarea cu backend-ul pentru a obține și trimite date și fișiere.

Este posibil să utilizați orice altă metodă nativă sau altă dependență pentru a realiza aceste operațiuni, totuși
Service Client este dezvoltat pentru a facilita și accelera integrările, fiind flexibil și foarte intuitiv.

Scopul principal al Netuno de a furniza în ecosistemul său Service Client este de a garanta că dezvoltarea este
clară și rapidă.

Când utilizați Service Client, dacă întâmpinați vreo problemă, raportați-o în [Issues](https://github.com/netuno-org/service-client/issues) ale proiectului.

⭐ Nu uitați să acordați steaua pe GitHub-ul proiectului:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).