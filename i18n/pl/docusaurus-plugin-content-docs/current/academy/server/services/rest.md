---
id: rest
title: REST - Usługi sieciowe
sidebar_label: REST - Usługi sieciowe
---

## Wprowadzenie

Żądania REST to adresy online, które zwracają informacje o danych przetwarzanych na serwerze, zawierającym logikę biznesową danych wymagających bezpieczeństwa i niezawodności, z integracją z bazą danych.

> Więcej o <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

Budowa API REST odbywa się na podstawie usług Netuno.

## ALL

Aby utworzyć usługę w Netuno, która odpowiada na dowolny typ metody HTTP:

- `📂 server/services/moj-serwis.js`

W przeglądarce ta usługa będzie wykonywana dla wszystkich typów żądań pod adresem:

- http://localhost:9000/services/moj-serwis

## GET

Adresy typu GET są zwykle używane do operacji listowania lub pobierania danych.

Aby utworzyć usługę w Netuno, która odpowiada tylko na metodę GET, użyj jednej z następujących form:

- `📂 server/services/lista/get.js`
- `📂 server/services/lista.get.js`

W przeglądarce ta usługa będzie wykonywana tylko dla żądania GET pod adresem:

- GET http://localhost:9000/services/lista

## POST

Adresy typu POST są zwykle używane do operacji tworzących lub generujących nowe dane.

Aby utworzyć usługę w Netuno, która odpowiada tylko na metodę POST, utwórz plik kodu, używając jednej z następujących form:

- `📂 server/services/utworz/post.js`
- `📂 server/services/utworz.post.js`

Ta usługa będzie wykonywana tylko dla żądania POST pod adresem:

- POST http://localhost:9000/services/utworz

## PUT

Adresy typu PUT są zwykle używane do operacji zmieniających rekordy danych.

Aby utworzyć usługę w Netuno, która odpowiada tylko na metodę PUT, utwórz plik kodu, używając jednej z następujących form:

- `📂 server/services/zapisz/put.js`
- `📂 server/services/zapisz.put.js`

Ta usługa będzie wykonywana tylko dla żądania PUT pod adresem:

- PUT http://localhost:9000/services/zapisz

## DELETE

Adresy typu DELETE są zwykle używane do operacji usuwających rekordy danych.

Aby utworzyć usługę w Netuno, która odpowiada tylko na metodę DELETE, utwórz plik kodu, używając jednej z następujących form:

- `📂 server/services/usun/delete.js`
- `📂 server/services/usun.delete.js`

Ta usługa będzie wykonywana tylko dla żądania DELETE pod adresem:

- DELETE http://localhost:9000/services/usun

## OPTIONS

Podczas integracji z frontendem, w procesie walidacji CORS, przeglądarka wykonuje wywołanie typu OPTIONS.

> Więcej o <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

Aby utworzyć usługę w Netuno, która odpowiada tylko na metodę OPTIONS, utwórz plik kodu, używając jednej z następujących form:

- `📂 server/services/wylistuj/options.js`
- `📂 server/services/wylistuj.options.js`

Należy go zaimplementować dla wszystkich usług integrowanych z zewnętrznym frontendem, takim jak strona internetowa.

Zwykle używany kod:

```javascript
_out.json(_val.map().set("result", true))
```

Ta usługa będzie wykonywana dla żądania OPTIONS pod adresem:

- OPTIONS http://localhost:9000/services/wylistuj

## Klienci i wykonywanie testów

Aby wykonywać testy usług dla konkretnego typu metody, możesz użyć dedykowanych programów do testowania API REST, takich jak:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

Za pomocą polecenia `curl` w terminalu możesz wykonać dowolny typ testu.

Z konsoli/wiersza poleceń wyślij żądanie GET:

```
curl http://localhost:9000/services/zachowaj
```

Za pomocą `-X` możesz określić typ metody:

```
curl -X POST -F 'imie=Test' -F 'email=email@przyklad.com' http://localhost:9000/services/zachowaj
```

> Parametr `-F` wysyła z Content-Type: `multipart/form-data`

Inny sposób wysyłania parametrów:

```
curl -X POST -d 'imie=Test' -d 'email=email@przyklad.com' http://localhost:9000/services/zachowaj
```

Można je połączyć w następujący sposób:

```
curl -X POST -d 'imie=Test&email=email@przyklad.com' http://localhost:9000/services/zachowaj
```

> Parametr `-d` wysyła z Content-Type: `application/x-www-form-urlencoded`

### JSON

Aby wysłać w formacie JSON, należy określić typ zawartości:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"imie": "Test", "email": "email@przyklad.com"}' \
    http://localhost:9000/services/zachowaj
```

> `-H` definiuje parametryzację nagłówka (_HEADER_)

### Przesyłanie plików

Aby przesłać pliki:

```
curl -X POST -F 'obraz=@/home/uzytkownik/plik.jpg' http://localhost:9000/services/zachowaj
```

## Klient usług - NPM

Aby ułatwić integrację z frontendem, udostępniono moduł NPM:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Polecenie instalacji: `npm i -S @netuno/service-client`

Przy definiowaniu adresu usług, np.:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

Możesz wykonywać usługi zintegrowane z frontendem, na przykład:

```
  _service({
      url: "/services/moj-serwis",
      method: 'POST',
      data: { parametr1: "1", parametr2: "2" },
      success: (odpowiedz) => {
          if (odpowiedz.json) {
              console.log("Odpowiedź usługi", odpowiedz.json);
          }
      },
      fail: (blad) => {
          console.log("Błąd usługi", blad);
      }
  });
```

## Podsumowanie

Obsługiwane jest ograniczanie usług tylko do zamierzonego typu metody HTTP.

Integrację z frontendem można wykonać na najniższym poziomie za pomocą `fetch`.

Aby przyspieszyć i ustandaryzować implementację, udostępniono moduł NPM [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client).