---
sidebar_position: 3
id: api
title: API
---

Netuno are un framework propriu pentru crearea de API REST într-un mod low-code, cu suport pentru JWT (JSON Web Token) și OpenAPI 3.0.

Întregul framework pentru dezvoltarea serviciilor web în Netuno este foarte versatil, permițând realizarea oricărui tip de dezvoltare.

Frameworkul aduce deja multe funcționalități pentru dezvoltarea low-code, economisind multe linii de cod pentru a realiza nevoile cele mai comune, cum ar fi trimiterea de e-mailuri, consumul altor API-uri REST, integrarea cu alte baze de date, generarea de fișiere PDF și Excel, trimiterea de SMS, manipularea datelor din baza de date, printre multe altele.

Și când nu există soluții în frameworkul Netuno, este posibil să integrezi cu ușurință biblioteci Java, Kotlin sau chiar JavaScript deja existente pentru a dezvolta resurse personalizate și a le integra cu frameworkul Netuno.

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) este specificația standardului pentru transmiterea datelor din contextul sesiunii către client, prin obiect JSON.

Astfel, serverul nu trebuie să păstreze datele sensibile ale utilizatorilor autentificați în sesiune, ci devine un token care este transmis clientului, iar ulterior, la fiecare cerere, acest token trebuie returnat.

Acest token este supus unor controale de securitate, cum ar fi timpul limită de valabilitate și un proces care permite crearea unui token nou fără a solicita o nouă autentificare.

Netuno are integrat suportul pentru JWT, este simplu și ușor de utilizat, funcționează de asemenea integrat cu utilizatorii și autentificarea nativă Netuno.

## OpenAPI 3.0

După succesul Swagger v1 și v2, care de mult timp au devenit un standard pentru dezvoltarea definiției serviciilor web și generarea codului client.

Astfel, Swagger și-a deschis definiția și a devenit [OpenAPI 3](https://www.openapis.org/).

Unde continuă să fie fundamentul pentru definirea modului în care este documentat API-ul și modul în care sunt generați clienții pentru consumul API-ului.

Netuno aduce deja toată integrarea cu OpenAPI 3.0 și utilizează definiția OpenAPI împreună cu validarea [JSON Schema](https://json-schema.org/).

Adică Netuno permite, de asemenea, validarea inputului și outputului serviciilor web, recurgând la validarea schemei JSON obținute și returnate astfel pentru:

- `Input`: Dacă există un apel la serviciul web care nu respectă structura și validările, atunci este respins
- `Output`: Dacă returnează date care nu respectă structura și validările definite, atunci este generată o alertă că serviciul web nu este conform.

Astfel, Netuno atât economisește crearea multor `if`-uri în cod pentru validarea datelor primite, cât și garantează o validare a rezultatului pe care serviciul web îl generează, realizând un _test unitar_.

De asemenea, structura OpenAPI generată de Netuno poate fi utilizată cu [Editorul Swagger](https://editor.swagger.io/) pentru a genera interfața de testare, documentația și codul pentru clienții API în alte tehnologii.

## Noțiuni de bază

Netuno suportă, de asemenea, crearea de servicii web și autentificare fără complicații, adică nu este obligatoriu să utilizezi JWT sau OpenAPI, deși este recomandarea standard.

Adesea, pentru a accelera crearea API-ului sau în situații care implică comunicarea între servere, se alege simplificarea maximă și câștigarea de timp.

> Netuno permite realizarea [autentificării HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).