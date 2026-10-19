---
sidebar_position: 4
id: service-client
title: Client für HTTP-Dienste und REST-API
sidebar_label: Client für Dienste
---

## Einleitung

Im Ökosystem der Netuno-Technologien werden einige Module im npm bereitgestellt, wie zum Beispiel:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> Siehe auch das [Git-Repository des Service Client](https://github.com/netuno-org/service-client).

Dieses Modul dient der Integration mit Diensten, die in Netuno entwickelt wurden, also den Endpunkten
der REST-API, die im Backend von Netuno innerhalb des Ordners `server/services` in Netuno-Anwendungen
entwickelt werden.

Bei der Entwicklung von Diensten ist es üblich, Programme wie die folgenden zu verwenden:

- [Pororoca](https://pororoca.io/)
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

um HTTP-Anfragen an die Dienste zu testen.

Im Frontend-Code könnten wir zur Integration dieser Dienste fetch, requests, AXIOS und viele andere verwenden.

Netuno bietet jedoch seinen eigenen Client, der sowohl in der JavaScript-Frontend-Entwicklung als auch im
NodeJS-Backend funktioniert.

Der Grund, warum Netuno seine eigene HTTP-Client-Implementierung für Dienste hat, ist größere
Praktikabilität zu bieten, die Codeimplementierung zu vereinfachen und eine höhere
Entwicklungsgeschwindigkeit zu gewährleisten.

## Installation

Die Installation des Dienstclients erfolgt wie bei jedem anderen Modul.

Dort, wo wir die Datei `package.json` haben, führen wir den Installationsbefehl aus:

```bash
bun add @netuno/service-client
```

## Import

Um den Dienstclient in der modernen JavaScript-Entwicklung zu importieren:

```js
import _service from '@netuno/service-client';
```

Um den Dienstclient in der klassischen JavaScript-Entwicklung zu importieren:

```js
const _service = require('@netuno/service-client');
```

Beachten Sie, dass der interne Name im Code `_service` ist.

> Standardmäßig verwendet Netuno `_` als Präfix, um anzuzeigen, dass etwas intern oder spezifisch ist,
> wie eine Ressource oder ein Werkzeug aus seinem Ökosystem.

Um dem Standard zu folgen, sollten wir daher immer den Namen `_service` verwenden.

## Konfiguration

Die Konfiguration erfolgt global; sie wird einmalig definiert und sollte an einer initialen Stelle des
allgemeinen Codes ausgeführt werden.

Dies ist die Minimalkonfiguration:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

Das heißt, es wird das Präfix der Dienstadressen definiert. Dadurch muss nicht immer die vollständige
URL angegeben werden, sodass wir bei Aufrufen der Dienste nur den restlichen Teil der URL angeben können.

### Vollständige Konfiguration

Wir können Standardwerte für alle Dienstaufrufe konfigurieren; beim Aufruf jedes Dienstes können wir
diese Werte überschreiben.

Sehen Sie alle Parameter, die wir konfigurieren können:

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

Ist das globale Präfix der URLs.

#### url

Ist der Teil der URL, der an das Präfix angehängt wird, also die spezifische Adresse
des Dienstes.

#### method

HTTP-Methode, die bei der HTTP-Anfrage verwendet wird; standardmäßig ist es `GET`.

#### credentials

Definiert das Verhalten der Anmeldeinformationen bei HTTP-Aufrufen:

- `omit` – Anmeldeinformationen werden niemals gesendet und empfangen.
- `same-origin` – Anmeldeinformationen werden nur gesendet und eingeschlossen, wenn
Anfragen an dieselbe Domain gehen.
- `include` – Anmeldeinformationen werden immer eingeschlossen, auch wenn die Domain
unterschiedlich ist.

Standardmäßig ist der Wert `include`, da dies in der Standardentwicklung am sinnvollsten ist:
Das Backend kann je nach Architektur in derselben Domain liegen oder nicht, und in der lokalen
Entwicklung unterscheidet sich dies manchmal von der Produktion; um Überraschungen zu vermeiden,
empfehlen wir daher `include`.

#### headers

In den `headers` können wir Schlüssel und Werte im HTTP-Header definieren.

Standardmäßig wird festgelegt, dass Daten im JSON-Format gesendet und empfangen werden.

#### start

`callback`-Funktion, die ausgeführt wird, wenn die HTTP-Anfrage gestartet wird.

#### success

`callback`-Funktion, die ausgeführt wird, wenn die HTTP-Anfrage im Backend-Server
erfolgreich ausgeführt wurde.

Der Antwortinhalt wird im ersten Argument der Funktion bereitgestellt.

#### fail

`callback`-Funktion, die ausgeführt wird, wenn die HTTP-Anfrage einen Fehler
erzeugt hat.

Die Fehlerdetails werden im ersten Argument der Funktion bereitgestellt.

#### end

`callback`-Funktion, die ausgeführt wird, wenn die HTTP-Anfrage abgeschlossen wurde.

Sie wird immer ausgeführt, unabhängig davon, ob ein Erfolg oder Fehler vorlag.

## Verwendung

Um einen Dienst mit einer HTTP-Anfrage auszuführen, definieren wir die Werte
der Parameter, die die Anforderungen des Dienstes konfigurieren.

Im Schlüssel `data` senden wir die Daten selbst, also alle Datenparameter,
die wir an den Backend-Dienst senden.

Sehen Sie das grundlegende Beispiel einer Anfrage:

```js
import _service from '@netuno/service-client';

_service({
  url: "mein-dienst",
  data: { id: 1, beispiel: "Hallo Backend." },
  start: () => {
    console.log("Die Anfrage wird gestartet.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Antwortete als Text:", response.text);
    }
    if (response.json) {
      console.info("Antwortete mit JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("Fehlgeschlagen mit Fehler:", error);
  },
  end: () => {
    console.log("Die Anfrage wurde abgeschlossen.");
  }
});
```

Die endgültige URL berücksichtigt das global in der allgemeinen Konfiguration
definierte Präfix.

Da die HTTP-Methode nicht definiert wurde, wird sie mit der Standardmethode
gesendet, die in der allgemeinen Konfiguration definiert wurde und standardmäßig
`GET` ist.

### Einfach

Einfaches Beispiel, wie eine Anfrage vom Typ `POST` ausgeführt wird:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "produkt",
  data: { name: "Strohhut", menge: 20 },
  success: ({json}) => {
    console.info("Produkt erfolgreich erstellt:", json);
  },
  fail: (error) => {
    console.error("Fehler beim Erstellen des Produkts:", error);
  }
});
```

### Formular

Bei der Verwendung von Formularen können wir die Klasse FormData mit dem Inhalt des Formulars befüllen; siehe Beispiel:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("formular"));
_service({
  method: "PUT",
  url: "kunde",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Kunde erfolgreich aktualisiert.");
    } else {
      alert("Ungültige Antwort.");
    }
  },
  fail: (e) => {
    console.log("Fehler", e);
  }
});
```

### Upload

Einfaches Beispiel für das Hochladen von Dateien mit der Klasse `FormData`:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('datei', document.getElementById("dateiFeld").files[0]);
formData.append('anderesFeld', 'Wert...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('Datei erfolgreich hochgeladen.');
  },
  fail: (e) => {
    console.log("Fehler in der Antwort", e);
  }
});
```

### Download

Wir können Dateien, die dynamisch von Diensten erzeugt werden, integriert im Kontext der
Seite herunterladen.

#### BLOB – Binäres Großobjekt

Um binäre Antworten herunterzuladen, müssen wir `blob` in der Basisparametrisierung auf den Wert `true` setzen;
die erzeugten Bytes erhalten wir im `blob` der Antwort.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Legt fest, dass die Antwort binär ist.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Ungültige Antwort.");
    }
  },
  fail: (e) => {
    console.log("Fehler", e);
  }
});
```

#### Benutzerdefinierte Datei

Der Dateiname und -typ können im Frontend angepasst werden; die Abhängigkeit [DownloadJS](https://www.npmjs.com/package/downloadjs) ist in diesem Prozess sehr nützlich.

Installieren Sie die Abhängigkeit [DownloadJS](https://www.npmjs.com/package/downloadjs):

```shell
bun add downloadjs
```

Im Code kann sie wie folgt verwendet werden:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/bericht/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "bericht.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Fehler", e);
  }
});

_service({
  url: "/services/bericht/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "bericht.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Fehler", e);
  }
});
```

### URL für Dienste

Es gibt Situationen, in denen wir die URL von Diensten erzeugen müssen, zum Beispiel wenn Dienste Ressourcen
bereitstellen, die in HTML oder CSS eingebunden werden müssen.

Ein klares Beispiel ist der Avatar: Der Benutzer legt sein Avatar-Bild fest, und zur Anzeige können wir die endgültige
URL wie folgt erzeugen:

```js
const avatarVerweis = _service.url(`/profil/avatar?uid=${benutzer.uid}`)
```

Die erzeugte URL kann in HTML oder in eine CSS-Eigenschaft wie background eingefügt werden.

### React & Ant.Design

Da wir React und Ant.Design häufig verwenden, folgen einige nützliche Tipps.

Die klassischen Imports:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Den Verarbeitungsstatus definieren:

```js
const [loading, setLoading] = useState(false);
```

Implementierung des Ereignisses zum Speichern eines Formulars, das das Objekt mit den ausgefüllten Werten im JSON-Format sendet:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: 'Fehler',
      description: 'Die Daten konnten nicht gespeichert werden.'
    });
  };
  _service({
    url: '/services/kunde',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Erfolg',
          description: 'Die Daten wurden erfolgreich gespeichert.'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("Dienst fehlgeschlagen.", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

In der Formularkomponente von Ant.Design wird die Aktions-Eigenschaft definiert, die die Daten mit dem zuvor
implementierten Ereignis sendet, zum Beispiel:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Upload

Hier ist ein vollständiges Beispiel für das Hochladen von Dateien mit einem Formular in Ant.Design und mit
FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function UploadForm() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("titel", values.titel);
    formData.append("datei", values.datei.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "datei/speichern",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: 'Formular',
          description: 'Ihre Daten wurden erfolgreich gespeichert.'
        });
      },
      fail: (e) => {
        console.error("Upload-Formular fehlgeschlagen", e);
        notification.error({
          title: 'Formular',
          description: 'Ihre Daten konnten nicht gespeichert werden.'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Titel" name="titel"
        rules={[{ required: true, message: 'Bitte geben Sie den Titel ein.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Datei" name="datei"
        rules={[{ required: true, message: 'Bitte wählen Sie eine Datei aus.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Hochladen</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Speichern
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadForm;
```

## Fazit

Der Service Client beschleunigt die Integration mit dem Backend zum Abrufen und Senden von Daten und Dateien.

Es ist möglich, jede andere native Methode oder eine andere Abhängigkeit für diese Operationen zu verwenden;
der Service Client ist jedoch darauf ausgelegt, Integrationen zu erleichtern und zu beschleunigen, und ist
flexibel und sehr intuitiv.

Das Hauptziel von Netuno, den Service Client in seinem Ökosystem bereitzustellen, ist es, eine klare und
schnelle Entwicklung zu gewährleisten.

Wenn Sie bei der Verwendung des Service Client ein Problem finden, melden Sie es in den [Issues](https://github.com/netuno-org/service-client/issues) des Projekts.

⭐ Denken Sie daran, dem GitHub-Projekt einen Stern zu geben:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).