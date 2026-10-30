---
id: rest
title: REST - Servizi Web
sidebar_label: REST - Servizi Web
---

## Introduzione

Le richieste REST sono indirizzi online che restituiscono informazioni su dati elaborati nel server, che contiene la logica di business dei dati che richiedono sicurezza e affidabilità, con l'integrazione del database.

> Maggiori informazioni su <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

La costruzione dell'API REST avviene sulla base dei Servizi di Netuno.

## ALL

Per creare un servizio in Netuno che risponda a qualsiasi tipo di metodo HTTP:

- `📂 server/services/mio-servizio.js`

Nel browser, questo servizio verrà eseguito per tutti i tipi di richieste all'indirizzo:

- http://localhost:9000/services/mio-servizio

## GET

Gli indirizzi di tipo GET sono normalmente utilizzati per operazioni di elenco o di ottenimento di dati.

Per creare un servizio in Netuno che risponda solo al tipo di metodo GET, utilizza una di queste forme:

- `📂 server/services/elenco/get.js`
- `📂 server/services/elenco.get.js`

Nel browser, questo servizio verrà eseguito solo per il tipo di richiesta GET all'indirizzo:

- GET http://localhost:9000/services/elenco

## POST

Gli indirizzi di tipo POST sono normalmente utilizzati per operazioni che creano o generano nuovi dati.

Per creare un servizio in Netuno che risponda solo al tipo di metodo POST, crea il file di codice utilizzando una di queste forme:

- `📂 server/services/creare/post.js`
- `📂 server/services/creare.post.js`

Questo servizio verrà eseguito solo per il tipo di richiesta POST all'indirizzo:

- POST http://localhost:9000/services/creare

## PUT

Gli indirizzi di tipo PUT sono normalmente utilizzati per operazioni che modificano record di dati.

Per creare un servizio in Netuno che risponda solo al tipo di metodo PUT, crea il file di codice utilizzando una di queste forme:

- `📂 server/services/salvare/put.js`
- `📂 server/services/salvare.put.js`

Questo servizio verrà eseguito solo per il tipo di richiesta PUT all'indirizzo:

- PUT http://localhost:9000/services/salvare

## DELETE

Gli indirizzi di tipo DELETE sono normalmente utilizzati per operazioni che eliminano nuovi record di dati.

Per creare un servizio in Netuno che risponda solo al tipo di metodo DELETE, crea il file di codice utilizzando una di queste forme:

- `📂 server/services/eliminare/delete.js`
- `📂 server/services/eliminare.delete.js`

Questo servizio verrà eseguito solo per il tipo di richiesta DELETE all'indirizzo:

- DELETE http://localhost:9000/services/eliminare

## OPTIONS

Nell'integrazione con il frontend, durante il processo di validazione del CORS, il browser effettua la chiamata di tipo OPTIONS.

> Maggiori informazioni su <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Per creare un servizio in Netuno che risponda solo al tipo di metodo OPTIONS, crea il file di codice utilizzando una di queste forme:

- `📂 server/services/elencare/options.js`
- `📂 server/services/elencare.options.js`

Deve essere implementato per tutti i servizi che sono integrati in un frontend esterno, come un sito web.

Codice normalmente utilizzato:

```javascript
_out.json(_val.map().set("result", true))
```

Questo servizio verrà eseguito per il tipo di richiesta OPTIONS all'indirizzo:

- OPTIONS http://localhost:9000/services/elencare

## Client e Esecuzione di Test

Per eseguire test sui servizi con un tipo di metodo specifico, puoi utilizzare programmi dedicati che eseguono test su API REST, come:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Con il comando `curl` nel terminale puoi eseguire qualsiasi tipo di test.

Dalla console/riga di comando invia un GET:

```
curl http://localhost:9000/services/registrare
```

Con `-X` puoi specificare il tipo di metodo:

```
curl -X POST -F 'nome=Test' -F 'email=email@esempio.com' http://localhost:9000/services/registrare
```

> Il parametro `-F` invia con Content-Type: `multipart/form-data`

Un altro modo per inviare parametri:

```
curl -X POST -d 'nome=Test' -d 'email=email@esempio.com' http://localhost:9000/services/registrare
```

Può essere concatenato nel modo seguente:

```
curl -X POST -d 'nome=Test&email=email@esempio.com' http://localhost:9000/services/registrare
```

> Il parametro `-d` invia con Content-Type: `application/x-www-form-urlencoded`

### JSON

Per inviare in formato JSON è necessario specificare il tipo di contenuto:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"nome": "Test", "email": "email@esempio.com"}' \
    http://localhost:9000/services/registrare
```

> Il `-H` definisce la parametrizzazione dell'intestazione (_HEADER_)

### Upload

Per eseguire l'upload di file:

```
curl -X POST -F 'image=@/home/utente/file.jpg' http://localhost:9000/services/registrare
```

## Service Client - NPM

Per realizzare facilmente l'integrazione con il frontend, è disponibile il modulo NPM:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Comando di installazione: `npm i -S @netuno/service-client`

Nel definire l'indirizzo dei servizi, come:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Potrai eseguire servizi integrati con il frontend, come ad esempio:

```
  _service({
      url: "/services/mio-servizio",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("Service Response", response.json);
          }
      },
      fail: (e) => {
          console.log("Service Error", e);
      }
  });
```

## Conclusione

È supportato limitare i servizi solo al tipo di metodo HTTP desiderato.

Per integrare con il frontend si può fare al livello più basso utilizzando `fetch`.

Per velocizzare e standardizzare l'implementazione è disponibile il modulo NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client).