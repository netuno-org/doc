---
sidebar_position: 4
id: service-client
title: Client per Servizi HTTP e API REST
sidebar_label: Client per Servizi
---

## Introduzione

Nell'ecosistema di tecnologie di Netuno sono forniti alcuni moduli in NPM, come il:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Vedi anche il repository [GIT del Service Client](https://github.com/netuno-org/service-client).

Questo modulo serve per realizzare le integrazioni con i servizi sviluppati in Netuno, ovvero gli endpoint
dell'API REST sviluppati nel backend di Netuno, all'interno della cartella `server/services` nelle applicazioni Netuno.

È comune nello sviluppo dei servizi utilizzare programmi come:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

Per effettuare i test delle richieste HTTP ai servizi.

Nel codice di frontend per integrare questi servizi potremmo utilizzare fetch, requests, AXIOS e molti altri.

Tuttavia, Netuno fornisce il proprio client, che funziona nello sviluppo del frontend JavaScript così come
nel backend NodeJS.

Il motivo per cui Netuno ha la propria implementazione di client HTTP per i servizi è fornire maggiore
praticità, semplificando l'implementazione del codice e garantendo maggiore agilità nello sviluppo.

## Installazione

L'installazione del client dei servizi è come installare qualsiasi altro modulo.

Dove abbiamo il file `package.json` eseguiamo il comando di installazione:

```bash
bun add @netuno/service-client
```

## Importazione

Per importare il client dei servizi nello sviluppo JavaScript moderno:

```js
import _service from '@netuno/service-client';
```

Per importare il client dei servizi nello sviluppo JavaScript classico:

```js
const _service = require('@netuno/service-client');
```

Nota che il nome interno nel codice è `_service`.

> Per impostazione predefinita Netuno utilizza `_` come prefisso per indicare che qualcosa è interno o specifico come una risorsa
> o uno strumento, del suo ecosistema.

Pertanto, per mantenere lo standard dobbiamo utilizzare sempre il nome `_service`.

## Configurazione

La configurazione viene fatta globalmente, si definisce la configurazione una
sola volta, conviene eseguirla in un punto iniziale del codice generale.

Questa sarà la configurazione minima:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

Ovvero, definisce il prefisso degli indirizzi dei servizi, questo evita
la necessità di inserire sempre l'URL completo, così nelle chiamate ai
servizi possiamo indicare solo il resto dell'URL.

### Configurazione Completa

Possiamo configurare valori predefiniti per tutte le chiamate ai
servizi, e nella chiamata a ciascun servizio possiamo sovrascrivere
questi valori.

Vedi tutti i parametri che possiamo configurare:

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

È il prefisso globale degli URL.

#### url

È la parte dell'URL che viene aggiunta al prefisso, l'indirizzo specifico
del servizio.

#### method

Metodo HTTP che verrà utilizzato nella richiesta HTTP, per
impostazione predefinita è `GET`.

#### credentials

Definisce il comportamento delle credenziali nelle chiamate HTTP:

- `omit` - Non invia né riceve mai credenziali.
- `same-origin` - Invia e include credenziali solo quando le
richieste sono nello stesso dominio.
- `include` - Deve sempre includere le credenziali, anche se il dominio è diverso.

Per impostazione predefinita il valore è `include`, poiché è quello che ha più senso nello
sviluppo standard, il backend può essere o non essere nello stesso dominio
a seconda dell'architettura, e nello sviluppo locale a volte differisce
dalla produzione, quindi per evitare sorprese raccomandiamo di utilizzare
`include`.

#### headers

Negli `headers` possiamo definire chiavi e valori nell'intestazione HTTP.

Per impostazione predefinita è definito che i dati saranno inviati e ricevuti nel formato
JSON.

#### start

Funzione di `callback` eseguita quando sta per iniziare la richiesta HTTP.

#### success

Funzione di `callback` eseguita quando la richiesta HTTP è stata eseguita
con successo nel server di backend.

Il contenuto della risposta si ottiene nel primo argomento della funzione.

#### fail

Funzione di `callback` eseguita quando la richiesta HTTP ha generato qualche
errore.

I dettagli dell'errore si ottengono nel primo argomento della funzione.

#### end

Funzione di `callback` eseguita quando la richiesta HTTP è stata completata.

Viene eseguita sempre, indipendentemente se c'è stato successo o errore.

## Utilizzo

Per eseguire un servizio con una richiesta HTTP definiamo i valori
dei parametri che configurano i requisiti del servizio.

Nella chiave `data` inviamo i dati stessi, ovvero tutti i parametri
di dati che invieremo al servizio di backend.

Vedi l'esempio base di una richiesta:

```js
import _service from '@netuno/service-client';

_service({
  url: "mio-servizio",
  data: { id: 1, esempio: "Ciao backend." },
  start: () => {
    console.log("La richiesta sta per iniziare.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Ha risposto in testo:", response.text);
    }
    if (response.json) {
      console.info("Ha risposto in JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("Fallito con l'errore:", error);
  },
  end: () => {
    console.log("La richiesta è stata completata.");
  }
});
```

L'URL finale terrà conto del prefisso definito globalmente nella
configurazione generale.

Poiché non è stato definito il metodo HTTP, sarà inviato con il
metodo predefinito definito nella configurazione generale, che per
impostazione predefinita è `GET`.

### Semplice

Esempio semplice di come eseguire una richiesta di tipo `POST`:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "prodotto",
  data: { nome: "Cappello di Paglia", quantità: 20 },
  success: ({json}) => {
    console.info("Prodotto creato con successo:", json);
  },
  fail: (error) => {
    console.error("Errore durante la creazione del prodotto:", error);
  }
});
```

### Modulo

Quando utilizziamo i moduli possiamo caricare la classe FormData con il contenuto del modulo, vedi l'esempio:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("modulo"));
_service({
  method: "PUT",
  url: "cliente",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Cliente aggiornato con successo.");
    } else {
      alert("Risposta non valida.");
    }
  },
  fail: (e) => {
    console.log("Errore", e);
  }
});
```

### Upload

Esempio semplice di come eseguire l'upload di file utilizzando la classe `FormData`:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('file', document.getElementById("campoFile").files[0]);
formData.append('altroCampo', 'valore...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('File inviato con successo.');
  },
  fail: (e) => {
    console.log("Errore nella Risposta", e);
  }
});
```

### Download

Possiamo eseguire il download di file generati dinamicamente dai servizi in modo integrato nel contesto della
pagina.

#### BLOB - Oggetto Binario Grande

Per eseguire il download di risposte binarie dobbiamo definire il `blob` con il valore `true` nella parametrizzazione base,
e otteniamo i byte generati nel `blob` della risposta.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Definisce che la risposta è binaria.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Risposta non valida.");
    }
  },
  fail: (e) => {
    console.log("Errore", e);
  }
});
```

#### File Personalizzato

Il nome e il tipo del file possono essere personalizzati nel frontend, la dipendenza [DownloadJS](https://www.npmjs.com/package/downloadjs) è molto utile in questo processo.

Installa la dipendenza [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

Nel codice può essere utilizzato nel modo seguente:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/report/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "report.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Errore", e);
  }
});

_service({
  url: "/services/report/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "report.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Errore", e);
  }
});
```

### URL per Servizi

Ci sono situazioni in cui abbiamo bisogno di generare l'URL dei servizi, per esempio, quando ci sono servizi che forniscono risorse che
devono essere integrate nell'HTML o nel CSS.

Un esempio chiaro è l'Avatar, l'utente definisce la sua immagine avatar, e per presentarla possiamo generare l'URL finale
nel modo seguente:

```js
const linkAvatar = _service.url(`/profilo/avatar?uid=${utente.uid}`)
```

L'URL generata può essere iniettata nell'HTML o in una proprietà del CSS, come il background.

### React & Ant.Design

Poiché utilizziamo molto React e Ant.Design, seguono alcuni consigli utili.

Gli import classici:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Definire lo stato di elaborazione:

```js
const [loading, setLoading] = useState(false);
```

Implementazione dell'evento per salvare un modulo, che invierà l'oggetto con i valori compilati in formato JSON:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: 'Errore',
      description: 'Non è stato possibile salvare i dati.'
    });
  };
  _service({
    url: '/services/cliente',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Successo',
          description: 'I dati sono stati salvati con successo.'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("Servizio Fallito.", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

Nel componente modulo di Ant.Design si definisce la proprietà dell'azione che invia i dati con l'evento
precedentemente implementato, per esempio:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Upload

Ecco un esempio completo di come fare l'upload di file utilizzando un modulo in Ant.Design e con
FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function ModuloUpload() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("titolo", values.titolo);
    formData.append("file", values.file.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "file/salva",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: 'Modulo',
          description: 'I tuoi dati sono stati salvati con successo.'
        });
      },
      fail: (e) => {
        console.error("Modulo di Caricamento Fallito", e);
        notification.error({
          title: 'Modulo',
          description: 'Non è stato possibile salvare i tuoi dati.'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Titolo" name="titolo"
        rules={[{ required: true, message: 'Per favore, inserisci il titolo.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="File" name="file"
        rules={[{ required: true, message: 'Per favore, inserisci il file.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Salva
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ModuloUpload;
```

## Conclusione

Il Service Client velocizza l'integrazione con il backend per ottenere e inviare dati e file.

È possibile utilizzare qualsiasi altro metodo nativo o un'altra dipendenza per realizzare queste operazioni, tuttavia il
Service Client è sviluppato per facilitare e velocizzare le integrazioni, essendo flessibile e molto intuitivo.

Lo scopo principale di Netuno nel fornire nel suo ecosistema il Service Client è garantire che lo sviluppo sia
chiaro e veloce.

Utilizzando il Service Client, nel caso trovi qualche problema segnalalo nelle [Issues](https://github.com/netuno-org/service-client/issues) del progetto.

⭐ Ricordati di dare la tua stella su GitHub del progetto:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).