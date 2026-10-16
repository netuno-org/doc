---
id: rest
title: REST - Servicii Web
sidebar_label: REST - Servicii Web
---

## Introducere

Cererile REST sunt adrese online care returnează informații despre datele procesate pe server, care conțin logica de business a datelor ce necesită securitate și fiabilitate, cu integrarea bazei de date.

> Mai multe despre <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

Construcția API-ului REST se face pe baza Serviciilor Netuno.

## ALL

Pentru a crea un serviciu în Netuno care răspunde la orice tip de metodă HTTP:

- `📂 server/services/serviciu-meu.js`

În browser, acest serviciu va fi executat pentru toate tipurile de cereri la adresa:

- http://localhost:9000/services/serviciu-meu

## GET

Adresele de tip GET sunt de obicei utilizate pentru operațiuni de listare sau de obținere a datelor.

Pentru a crea un serviciu în Netuno care răspunde doar la tipul de metodă GET, utilizați una dintre următoarele forme:

- `📂 server/services/lista/get.js`
- `📂 server/services/lista.get.js`

În browser, acest serviciu va fi executat doar pentru tipul de cerere GET la adresa:

- GET http://localhost:9000/services/lista

## POST

Adresele de tip POST sunt de obicei utilizate pentru operațiuni care creează sau generează date noi.

Pentru a crea un serviciu în Netuno care răspunde doar la tipul de metodă POST, creați fișierul de cod folosind una dintre următoarele forme:

- `📂 server/services/creare/post.js`
- `📂 server/services/creare.post.js`

Acest serviciu va fi executat doar pentru tipul de cerere POST la adresa:

- POST http://localhost:9000/services/creare

## PUT

Adresele de tip PUT sunt de obicei utilizate pentru operațiuni care modifică înregistrări de date.

Pentru a crea un serviciu în Netuno care răspunde doar la tipul de metodă PUT, creați fișierul de cod folosind una dintre următoarele forme:

- `📂 server/services/salvare/put.js`
- `📂 server/services/salvare.put.js`

Acest serviciu va fi executat doar pentru tipul de cerere PUT la adresa:

- PUT http://localhost:9000/services/salvare

## DELETE

Adresele de tip DELETE sunt de obicei utilizate pentru operațiuni care elimină înregistrări noi de date.

Pentru a crea un serviciu în Netuno care răspunde doar la tipul de metodă DELETE, creați fișierul de cod folosind una dintre următoarele forme:

- `📂 server/services/stergere/delete.js`
- `📂 server/services/stergere.delete.js`

Acest serviciu va fi executat doar pentru tipul de cerere DELETE la adresa:

- DELETE http://localhost:9000/services/stergere

## OPTIONS

În integrarea cu frontend-ul, în timpul procesului de validare CORS, browserul efectuează apelul de tip OPTIONS.

> Mai multe despre <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Pentru a crea un serviciu în Netuno care răspunde doar la tipul de metodă OPTIONS, creați fișierul de cod folosind una dintre următoarele forme:

- `📂 server/services/listare/options.js`
- `📂 server/services/listare.options.js`

Trebuie implementat pentru toate serviciile care sunt integrate în frontend extern, cum ar fi un site web.

Cod utilizat în mod normal:

```javascript
_out.json(_val.map().set("result", true))
```

Acest serviciu va fi executat pentru tipul de cerere OPTIONS la adresa:

- OPTIONS http://localhost:9000/services/listare

## Clienți și Executarea Testelor

Pentru a executa teste pe servicii cu tipul de metodă specific, puteți utiliza programe dedicate care efectuează teste pe API REST, cum ar fi:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Cu comanda `curl` în terminal puteți efectua orice tip de test.

Din consolă/linia de comandă trimiteți un GET:

```
curl http://localhost:9000/services/pastrare
```

Cu `-X` puteți specifica tipul de metodă:

```
curl -X POST -F 'nume=Test' -F 'email=email@exemplu.com' http://localhost:9000/services/pastrare
```

> Parametrul `-F` trimite cu Content-Type: `multipart/form-data`

Alt mod de a trimite parametri:

```
curl -X POST -d 'nume=Test' -d 'email=email@exemplu.com' http://localhost:9000/services/pastrare
```

Poate fi concatenat în felul următor:

```
curl -X POST -d 'nume=Test&email=email@exemplu.com' http://localhost:9000/services/pastrare
```

> Parametrul `-d` trimite cu Content-Type: `application/x-www-form-urlencoded`

### JSON

Pentru a trimite în format JSON este necesar să specificați tipul de conținut:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"nume": "Test", "email": "email@exemplu.com"}' \
    http://localhost:9000/services/pastrare
```

> `-H` definește parametrizarea antetului (_HEADER_)

### Încărcare

Pentru a realiza încărcarea fișierelor:

```
curl -X POST -F 'imagine=@/home/utilizator/fisier.jpg' http://localhost:9000/services/pastrare
```

## Service Client - NPM

Pentru a realiza cu ușurință integrarea cu frontend-ul, este disponibil modulul NPM:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Comanda de instalare: `npm i -S @netuno/service-client`

La definirea adresei serviciilor, cum ar fi:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Veți putea executa servicii integrate cu frontend-ul, cum ar fi de exemplu:

```
  _service({
      url: "/services/serviciu-meu",
      method: 'POST',
      data: { parametru1: "1", parametru2: "2" },
      success: (raspuns) => {
          if (raspuns.json) {
              console.log("Răspuns Serviciu", raspuns.json);
          }
      },
      fail: (eroare) => {
          console.log("Eroare Serviciu", eroare);
      }
  });
```

## Concluzie

Este suportată restricționarea serviciilor doar la tipul de metodă HTTP dorit.

Pentru a integra cu frontend-ul se poate face la cel mai jos nivel utilizând `fetch`.

Pentru a agiliza și standardiza implementarea este disponibil modulul NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client).