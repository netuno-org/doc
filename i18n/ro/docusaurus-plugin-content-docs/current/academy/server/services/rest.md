---
id: rest
title: REST - Servicii web
sidebar_label: REST - Servicii web
---

## Introducere

Cererile REST sunt adrese online care returnează informații despre datele procesate pe server, unde se află logica de afaceri a datelor ce necesită securitate și fiabilitate, cu integrarea bazei de date.

> Mai multe despre <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

Construirea API-ului REST se bazează pe Serviciile Netuno.

## ALL

Pentru a crea un serviciu în Netuno care să răspundă la orice tip de metodă HTTP:

- `📂 server/services/serviciul-meu.js`

În browser, acest serviciu va fi executat pentru toate tipurile de cereri la adresa:

- http://localhost:9000/services/serviciul-meu

## GET

Adresele de tip GET sunt utilizate de obicei pentru operațiuni de listare sau de obținere a datelor.

Pentru a crea un serviciu în Netuno care să răspundă doar la metoda GET, utilizați una dintre aceste forme:

- `📂 server/services/lista/get.js`
- `📂 server/services/lista.get.js`

În browser, acest serviciu va fi executat doar pentru cererea GET la adresa:

- GET http://localhost:9000/services/lista

## POST

Adresele de tip POST sunt utilizate de obicei pentru operațiuni care creează sau generează date noi.

Pentru a crea un serviciu în Netuno care să răspundă doar la metoda POST, creați fișierul de cod folosind una dintre aceste forme:

- `📂 server/services/creare/post.js`
- `📂 server/services/creare.post.js`

Acest serviciu va fi executat doar pentru cererea POST la adresa:

- POST http://localhost:9000/services/creare

## PUT

Adresele de tip PUT sunt utilizate de obicei pentru operațiuni care modifică înregistrări de date.

Pentru a crea un serviciu în Netuno care să răspundă doar la metoda PUT, creați fișierul de cod folosind una dintre aceste forme:

- `📂 server/services/salvare/put.js`
- `📂 server/services/salvare.put.js`

Acest serviciu va fi executat doar pentru cererea PUT la adresa:

- PUT http://localhost:9000/services/salvare

## DELETE

Adresele de tip DELETE sunt utilizate de obicei pentru operațiuni care elimină înregistrări noi de date.

Pentru a crea un serviciu în Netuno care să răspundă doar la metoda DELETE, creați fișierul de cod folosind una dintre aceste forme:

- `📂 server/services/eliminare/delete.js`
- `📂 server/services/eliminare.delete.js`

Acest serviciu va fi executat doar pentru cererea DELETE la adresa:

- DELETE http://localhost:9000/services/eliminare

## OPTIONS

În integrarea cu frontend-ul, în timpul procesului de validare CORS, browserul efectuează apelul de tip OPTIONS.

> Mai multe despre <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Pentru a crea un serviciu în Netuno care să răspundă doar la metoda OPTIONS, creați fișierul de cod folosind una dintre aceste forme:

- `📂 server/services/listare/options.js`
- `📂 server/services/listare.options.js`

Trebuie implementat pentru toate serviciile integrate într-un frontend extern, cum ar fi un site web.

Cod utilizat de obicei:

```javascript
_out.json(_val.map().set("result", true))
```

Acest serviciu va fi executat pentru cererea OPTIONS la adresa:

- OPTIONS http://localhost:9000/services/listare

## Clienți și executarea testelor

Pentru a executa teste pe servicii cu un tip de metodă specific, puteți utiliza programe dedicate care efectuează teste pe API REST, cum ar fi:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Cu comanda `curl` în terminal puteți realiza orice tip de test.

Din consolă/linia de comandă trimiteți un GET:

```
curl http://localhost:9000/services/salvare
```

Cu `-X` puteți specifica tipul de metodă:

```
curl -X POST -F 'nume=Test' -F 'email=email@exemplu.com' http://localhost:9000/services/salvare
```

> Parametrul `-F` trimite folosind Content-Type: `multipart/form-data`

O altă modalitate de a trimite parametri:

```
curl -X POST -d 'nume=Test' -d 'email=email@exemplu.com' http://localhost:9000/services/salvare
```

Poate fi concatenat astfel:

```
curl -X POST -d 'nume=Test&email=email@exemplu.com' http://localhost:9000/services/salvare
```

> Parametrul `-d` trimite folosind Content-Type: `application/x-www-form-urlencoded`

### JSON

Pentru a trimite în format JSON, este necesar să specificați tipul de conținut:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"nume": "Test", "email": "email@exemplu.com"}' \
    http://localhost:9000/services/salvare
```

> `-H` definește parametrizarea antetului (_HEADER_)

### Încărcare

Pentru a încărca fișiere:

```
curl -X POST -F 'imagine=@/home/utilizator/fisier.jpg' http://localhost:9000/services/salvare
```

## Client de servicii - NPM

Pentru a realiza cu ușurință integrarea cu frontend-ul, este disponibil modulul NPM:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Comandă de instalare: `npm i -S @netuno/service-client`

La definirea adresei serviciilor, cum ar fi:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Puteți executa servicii integrate cu frontend-ul, de exemplu:

```
  _service({
      url: "/services/serviciul-meu",
      method: 'POST',
      data: { parametru1: "1", parametru2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("Răspuns serviciu", response.json);
          }
      },
      fail: (e) => {
          console.log("Eroare serviciu", e);
      }
  });
```

## Concluzie

Este suportată restricționarea serviciilor doar la tipul de metodă HTTP dorit.

Integrarea cu frontend-ul se poate face la cel mai jos nivel folosind `fetch`.

Pentru a accelera și standardiza implementarea, este disponibil modulul NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client).