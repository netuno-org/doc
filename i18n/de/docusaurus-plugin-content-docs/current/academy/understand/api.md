---
sidebar_position: 3
id: api
title: API
---

Netuno verfügt über ein eigenes Framework zur Erstellung von REST-APIs nach dem Low-Code-Ansatz, mit Unterstützung für JWT (JSON Web Token) und OpenAPI 3.0.

Das gesamte Framework zur Entwicklung von Webdiensten in Netuno ist sehr vielseitig und ermöglicht jede Art der Entwicklung.

Das Framework bringt bereits viele Funktionen für die Low-Code-Entwicklung mit und spart viele Codezeilen bei den gängigsten Anforderungen, wie dem Versenden von E-Mails, dem Konsumieren anderer REST-APIs, der Integration mit anderen Datenbanken, dem Erzeugen von PDF- und Excel-Dateien, dem Versenden von SMS, der Manipulation von Datenbankdaten und vielem mehr.

Und wenn im Netuno-Framework keine Lösungen vorhanden sind, lassen sich vorhandene Java-, Kotlin- oder sogar JavaScript-Bibliotheken einfach integrieren, um maßgeschneiderte Ressourcen zu entwickeln und in das Netuno-Framework zu integrieren.

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) ist die Spezifikation des Standards für die Übergabe von Sitzungskontextdaten an den Client über ein JSON-Objekt.

Somit muss der Server die sensiblen Daten angemeldeter Benutzer nicht in der Sitzung speichern, sondern es wird ein Token an den Client übergeben, und bei jeder weiteren Anfrage muss dieser Token zurückgesendet werden.

Dieses Token unterliegt einigen Sicherheitskontrollen, wie der Ablaufzeit und einem Verfahren, das die Erstellung eines neuen Tokens ermöglicht, ohne eine erneute Authentifizierung zu verlangen.

Netuno bietet integrierte Unterstützung für JWT; sie ist einfach und unkompliziert zu verwenden und funktioniert auch integriert mit den Benutzern und der nativen Authentifizierung von Netuno.

## OpenAPI 3.0

Nach dem Erfolg von Swagger v1 und v2, die längst zum Standard für die Entwicklung der Definition von Webdiensten und die Generierung von Client-Code geworden sind.

So machte Swagger seine Definition offen und wurde zu [OpenAPI 3](https://www.openapis.org/).

Es bleibt die Grundlage dafür, den Standard festzulegen, wie die API dokumentiert wird und wie Clients für die Nutzung der API generiert werden.

Netuno bringt bereits die vollständige Integration mit OpenAPI 3.0 mit und verwendet die OpenAPI-Definition zusammen mit der Validierung des [JSON Schema](https://json-schema.org/).

Das bedeutet, dass Netuno auch die Eingabe und Ausgabe der Webdienste validieren kann, indem es die Validierung des erhaltenen und zurückgegebenen JSON-Schemas nutzt, und zwar für:

- `Eingabe`: Wenn ein Aufruf des Webdienstes erfolgt, der die Struktur und Validierungen nicht erfüllt, wird er abgelehnt
- `Ausgabe`: Wenn Daten zurückgegeben werden, die die definierte Struktur und die Validierungen nicht erfüllen, wird eine Warnung erzeugt, dass der Webdienst nicht konform ist.

Somit erspart Netuno sowohl die Erstellung vieler `if`s im Code für die Validierung der empfangenen Daten als auch gewährleistet es eine Validierung des Ergebnisses, das der Webdienst erzeugt, indem es einen _Unit-Test_ durchführt.

Auch die von Netuno generierte OpenAPI-Struktur kann mit dem [Swagger-Editor](https://editor.swagger.io/) verwendet werden, um die Testoberfläche, die Dokumentation und den Code für API-Clients in anderen Technologien zu generieren.

## Grundlagen

Netuno unterstützt auch die unkomplizierte Erstellung von Webdiensten und Authentifizierung, das heißt, die Verwendung von JWT oder OpenAPI ist nicht verpflichtend, obwohl dies die Standardempfehlung ist.

Oft wird, um die Erstellung der API zu beschleunigen oder in Situationen, die die Kommunikation zwischen Servern betreffen, eine maximale Vereinfachung gewählt, um Zeit zu sparen.

> Netuno ermöglicht die [HTTP-Authentifizierung](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).
