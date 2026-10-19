---
id: rest
title: REST - Webdienste
sidebar_label: REST - Webdienste
---

## Einführung

REST-Anfragen sind Online-Adressen, die Informationen über serverseitig verarbeitete Daten zurückgeben. Diese enthalten die Geschäftslogik der Daten, die Sicherheit und Zuverlässigkeit erfordern, mit Datenbankintegration.

> Mehr über <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

Die REST-API wird auf Basis der Netuno-Dienste erstellt.

## ALL

Um einen Dienst in Netuno zu erstellen, der auf jede Art von HTTP-Methode antwortet:

- `📂 server/services/mein-dienst.js`

Im Browser wird dieser Dienst für alle Arten von Anfragen unter der Adresse ausgeführt:

- http://localhost:9000/services/mein-dienst

## GET

GET-Adressen werden normalerweise für Auflistungs- oder Datenabrufvorgänge verwendet.

Um einen Dienst in Netuno zu erstellen, der nur auf die HTTP-Methode GET antwortet, verwenden Sie eine der folgenden Formen:

- `📂 server/services/liste/get.js`
- `📂 server/services/liste.get.js`

Im Browser wird dieser Dienst nur für Anfragen vom Typ GET unter der Adresse ausgeführt:

- GET http://localhost:9000/services/liste

## POST

POST-Adressen werden normalerweise für Vorgänge verwendet, die neue Daten erstellen oder erzeugen.

Um einen Dienst in Netuno zu erstellen, der nur auf die HTTP-Methode POST antwortet, erstellen Sie die Codedatei mit einer der folgenden Formen:

- `📂 server/services/erstellen/post.js`
- `📂 server/services/erstellen.post.js`

Dieser Dienst wird nur für Anfragen vom Typ POST unter der Adresse ausgeführt:

- POST http://localhost:9000/services/erstellen

## PUT

PUT-Adressen werden normalerweise für Vorgänge verwendet, die Datensätze ändern.

Um einen Dienst in Netuno zu erstellen, der nur auf die HTTP-Methode PUT antwortet, erstellen Sie die Codedatei mit einer der folgenden Formen:

- `📂 server/services/aktualisieren/put.js`
- `📂 server/services/aktualisieren.put.js`

Dieser Dienst wird nur für Anfragen vom Typ PUT unter der Adresse ausgeführt:

- PUT http://localhost:9000/services/aktualisieren

## DELETE

DELETE-Adressen werden normalerweise für Vorgänge verwendet, die Datensätze löschen.

Um einen Dienst in Netuno zu erstellen, der nur auf die HTTP-Methode DELETE antwortet, erstellen Sie die Codedatei mit einer der folgenden Formen:

- `📂 server/services/loeschen/delete.js`
- `📂 server/services/loeschen.delete.js`

Dieser Dienst wird nur für Anfragen vom Typ DELETE unter der Adresse ausgeführt:

- DELETE http://localhost:9000/services/loeschen

## OPTIONS

Bei der Integration mit dem Frontend führt der Browser während der CORS-Validierung den Aufruf vom Typ OPTIONS aus.

> Mehr über <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Um einen Dienst in Netuno zu erstellen, der nur auf die HTTP-Methode OPTIONS antwortet, erstellen Sie die Codedatei mit einer der folgenden Formen:

- `📂 server/services/auflisten/options.js`
- `📂 server/services/auflisten.options.js`

Sollte für alle Dienste implementiert werden, die in ein externes Frontend wie eine Website integriert sind.

Üblicherweise verwendeter Code:

```javascript
_out.json(_val.map().set("ergebnis", true))
```

Dieser Dienst wird für Anfragen vom Typ OPTIONS unter der Adresse ausgeführt:

- OPTIONS http://localhost:9000/services/auflisten

## Clients und Testausführung

Um Tests für Dienste mit einer bestimmten HTTP-Methode auszuführen, können Sie spezielle Programme verwenden, die Tests über REST-APIs durchführen, wie:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Mit dem Befehl `curl` im Terminal können Sie jede Art von Test durchführen.

Über die Konsole/Kommandozeile senden Sie ein GET:

```
curl http://localhost:9000/services/speichern
```

Mit `-X` können Sie die HTTP-Methode angeben:

```
curl -X POST -F 'name=Test' -F 'email=email@beispiel.com' http://localhost:9000/services/speichern
```

> Der Parameter `-F` sendet mit dem Content-Type: `multipart/form-data`

Eine andere Möglichkeit, Parameter zu senden:

```
curl -X POST -d 'name=Test' -d 'email=email@beispiel.com' http://localhost:9000/services/speichern
```

Sie können wie folgt verkettet werden:

```
curl -X POST -d 'name=Test&email=email@beispiel.com' http://localhost:9000/services/speichern
```

> Der Parameter `-d` sendet mit dem Content-Type: `application/x-www-form-urlencoded`

### JSON

Um im JSON-Format zu senden, muss der Inhaltstyp angegeben werden:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "Test", "email": "email@beispiel.com"}' \
    http://localhost:9000/services/speichern
```

> `-H` legt die Parametrisierung des Headers (_HEADER_) fest

### Upload

Zum Hochladen von Dateien:

```
curl -X POST -F 'bild=@/home/benutzer/datei.jpg' http://localhost:9000/services/speichern
```

## Service-Client - NPM

Um die Integration mit dem Frontend einfach durchzuführen, wird das NPM-Modul bereitgestellt:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Installationsbefehl: `npm i -S @netuno/service-client`

Wenn Sie die Adresse der Dienste festlegen, wie:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Können Sie in das Frontend integrierte Dienste ausführen, zum Beispiel:

```
  _service({
      url: "/services/mein-dienst",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("Service-Antwort", response.json);
          }
      },
      fail: (e) => {
          console.log("Service-Fehler", e);
      }
  });
```

## Fazit

Es ist möglich, Dienste auf die gewünschte HTTP-Methode zu beschränken.

Die Integration mit dem Frontend kann auf unterster Ebene mit `fetch` erfolgen.

Um die Implementierung zu beschleunigen und zu standardisieren, wird das NPM-Modul [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client) bereitgestellt.