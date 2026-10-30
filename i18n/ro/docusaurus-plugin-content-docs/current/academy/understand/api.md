---
sidebar_position: 3
id: api
title: API
---

Netuno are un framework propriu pentru crearea de API REST în mod low-code, cu suport pentru JWT (JSON Web Token) și OpenAPI 3.0.

Întregul framework pentru dezvoltarea serviciilor web în Netuno este foarte versatil, permițând realizarea oricărui tip de dezvoltare.

Framework-ul vine deja cu multe funcționalități pentru dezvoltarea low-code, economisind multe linii de cod pentru a realiza nevoile cele mai comune, cum ar fi trimiterea de e-mailuri, consumarea altor API-uri REST, integrarea cu alte baze de date, generarea de fișiere PDF și Excel, trimiterea de SMS-uri, manipularea datelor din baza de date, printre multe altele.

Iar când nu există soluții în framework-ul Netuno, este posibil să integrați cu ușurință biblioteci Java, Kotlin sau chiar JavaScript existente pentru a dezvolta resurse personalizate și a le integra cu framework-ul Netuno.

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) este specificația standardului pentru transmiterea datelor din contextul sesiunii către client, prin intermediul unui obiect JSON.

Astfel, serverul nu trebuie să păstreze în sesiune datele sensibile ale utilizatorilor autentificați, ci acestea sunt transmise clientului sub forma unui token, iar ulterior, la fiecare cerere, acest token trebuie returnat.

Acest token este supus unor controale de securitate, cum ar fi timpul limită de valabilitate și un proces care permite crearea unui token nou fără a solicita o nouă autentificare.

Netuno are integrat suportul pentru JWT, este simplu și ușor de utilizat și funcționează și împreună cu utilizatorii și autentificarea nativă din Netuno.

## OpenAPI 3.0

După succesul Swagger v1 și v2, care au devenit de mult un standard pentru dezvoltarea definiției serviciilor web și generarea codului client.

Astfel, Swagger a făcut publică definiția sa și a devenit [OpenAPI 3](https://www.openapis.org/).

Ea continuă să fie fundația pentru a defini standardul modului în care API-ul este documentat și în care sunt generați clienții pentru consumarea API-ului.

Netuno oferă deja întreaga integrare cu OpenAPI 3.0 și utilizează definiția OpenAPI împreună cu validarea [JSON Schema](https://json-schema.org/).

Asta înseamnă că Netuno permite, de asemenea, validarea datelor de intrare și de ieșire ale serviciilor web, recurgând la validarea schemei JSON obținute și returnate, astfel pentru:

- `Intrare`: Dacă există un apel către serviciul web care nu respectă structura și validările, atunci este respins
- `Ieșire`: Dacă sunt returnate date care nu respectă structura și validările definite, atunci este generată o alertă că serviciul web nu este conform.

Astfel, Netuno economisește atât crearea multor `if`-uri în cod pentru validarea datelor primite, cât și garantează o validare a rezultatului pe care serviciul web îl generează, realizând un _test unitar_.

De asemenea, structura OpenAPI generată de Netuno poate fi utilizată cu [Editorul Swagger](https://editor.swagger.io/) pentru a genera interfața de testare, documentația și codul pentru clienții API în alte tehnologii.

## Noțiuni de bază

Netuno acceptă, de asemenea, crearea de servicii web și autentificare fără complicații, adică nu este obligatoriu să utilizați JWT sau OpenAPI, deși aceasta este recomandarea standard.

Adesea, pentru a accelera crearea API-ului sau în situații care implică comunicarea între servere, se optează pentru simplificarea maximă și câștigarea de timp.

> Netuno permite realizarea [autentificării HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).

