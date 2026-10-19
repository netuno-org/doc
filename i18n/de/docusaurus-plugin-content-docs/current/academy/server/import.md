---
id: import
title: Import
sidebar_label: Import
---

## Einführung

Wenn wir entwickeln, müssen wir mehrere miteinander verbundene Codedateien verwenden, um
Funktionalitäten zu organisieren und wiederzuverwenden, um Wiederholungen zu vermeiden, die Wartung durch
die Zentralisierung nützlicher Funktionen zu erleichtern, was die Anzahl der Codezeilen insgesamt reduziert und folglich
zu einer großen Reduzierung von Bugs führt.

Also zentralisieren wir den nützlichen Code in einer anderen Codedatei, die von den
anderen importiert werden kann, die ihn leicht wiederverwenden können.

Hier werden einige Lösungen vorgestellt, die Netuno bietet, um die Wiederverwendung
von Code zu ermöglichen.

## Polyglotter Core

In jeder von Netuno unterstützten Programmiersprache können wir jede
Codedatei importieren, die sich im Ordner `server/core` der Anwendung befindet.

Die vereinfachte Form, die Netuno bietet, ist die Verwendung eines speziellen Kommentarformats
für den Import von Code, bei dem die kommentierte Zeile das Präfix `_core:` hat und danach
der Pfad der Codedatei ab dem Ordner `server/core` der Anwendung folgt.

Also um die Codedatei zu importieren:

- `server/core/beispiel/datei`

> Die Datei muss die Erweiterung gemäß der verwendeten Programmiersprache haben.

Es ist möglich, eine andere Datei am Anfang jeder Codedatei zu importieren, zum Beispiel in den Diensten.

Im Fall von JavaScript, Groovy und Kotlin:

```javascript
// _core: beispiel/datei

...
```

Im Fall von Python und Ruby:

```python
# _core: beispiel/datei

...
```

> In diesem speziellen Importkommentar ist es nicht notwendig, die Erweiterung der Datei anzugeben,
> Netuno erkennt sie automatisch.

Die in der importierten Datei deklarierten Variablen, Konstanten, Funktionen, Klassen usw. werden
für die Verwendung in der Datei verfügbar gemacht, die den Import mit diesem Kommentartyp am Anfang durchführt.

Um mehrere Dateien zu importieren, wiederholen Sie einfach den Importkommentar mit dem Pfad der anderen Dateien.

Im Fall von JavaScript, Groovy und Kotlin, um mehrere Dateien zu importieren:

```javascript
// _core: beispiel/datei1
// _core: beispiel/datei2
// _core: beispiel/datei3

...
```

Im Fall von Python und Ruby, um mehrere Dateien zu importieren:

```python
# _core: beispiel/datei1
# _core: beispiel/datei2
# _core: beispiel/datei3

...
```

## Exec-Ressource

Durch die Ressource `_exec` können wir Code jederzeit während der Ausführung importieren.

> Die in der importierten Codedatei deklarierten Variablen, Konstanten, Funktionen, Klassen usw. können verwendet werden.

### core

Um programmatisch den Import einer Codedatei auszuführen, in diesem Fall innerhalb des Ordners 
`📁 server/core`:

```javascript
_exec.core('pfad/zur/datei')
```

> Es ist nicht notwendig, die Erweiterung der Datei anzugeben, die Netuno automatisch erkennt.

### services

Um programmatisch den Import einer Codedatei auszuführen, in diesem Fall innerhalb des Ordners 
`📁 server/services`:

```javascript
_exec.service('pfad/zur/datei')
```

> Es ist nicht notwendig, die Erweiterung der Datei anzugeben, die Netuno automatisch erkennt.

## JavaScript

Netuno bietet eine solide Grundlage für die Entwicklung in JavaScript, der am häufigsten verwendeten Sprache, besonders
weil wir in JavaScript sowohl das Front-End als auch das Back-End programmieren können und so eine Full-Stack-Entwicklung
mit derselben Programmiersprache ermöglichen.

Netuno analysiert den Code und erkennt automatisch, ob `import` (ECMAScript Modules) oder
`require` (CommonJS) verwendet wird.

> Man sollte nicht das `import`-Muster mit `require` mischen, es sollte eines oder das andere verwendet werden.

Damit können wir immer die Erweiterung `.js` in den Codedateien verwenden, und bei der Verwendung von Anweisungen mit `import`
verarbeitet Netuno sie als ECMAScript Modules und so können wir `export default` verwenden.

> Die Verwendung von `import` wird empfohlen, wann immer möglich, da es der moderne Standard ist.

### Code importieren

Bei der Verwendung des nativen Imports wird, anders als in den vorherigen Beispielen, nur das importiert, was
explizit exportiert wurde, basierend auf dem Standard von CommonJS (`require`) oder ECMAScript Modules (`import`).

Im Ordner `📁 server` befindet sich die Datei `package.json`, dort müssen wir folgende Anweisung haben:

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

Damit können wir jede Datei in jede andere Codedatei importieren, zum Beispiel:

```js title="server/services/profil/get.js"
import profil from "#core/lib/profil.js";

const dbProfil = profil.getAngemeldet();
```

Da `import` in der importierten Datei verwendet wird, wird `export default` verwendet:

```js title="server/core/lib/profil.js"
import {_db, _user} from "@netuno/server-types";

export default {
  getAngemeldet: () => {
    return _db.form("profil")
      .where(_db.where("profil_benutzer_id").equal(_user.id))
      .first();
  }
};
```

> Es wird nicht empfohlen, in derselben Anwendung oder demselben Projekt die Verwendung von `import` (ECMAScript Modules) und
> `require` (CommonJS) zu mischen, auch nicht in verschiedenen Dateien und Situationen, es ist vorzuziehen, immer
> eine einheitliche Standardisierung zu verfolgen.
> Wir empfehlen die Verwendung von `import`, da es die moderne Methode ist.

Alternativ, wenn `require` (CommonJS) anstelle von `import` (ECMAScript Modules) verwendet wird:

```js title="server/services/profil/get.js"
const profil = require("#core/lib/profil.js");

const dbProfil = profil.getAngemeldet();
```

Da `require` in der importierten Datei verwendet wird, wird `module.exports` verwendet:

```js title="server/core/lib/profil.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  getAngemeldet: () => {
    return _db.form("profil")
      .where(_db.where("profil_benutzer_id").equal(_user.id))
      .first();
  }
};
```

### Code-Autovervollständigung und -Validierung

Um die Funktion der Code-Autovervollständigung mit integrierter Code-Validierung in den Editoren zu haben, müssen wir im Ordner
`📁 server` der Anwendung die [Server-Typen](https://www.npmjs.com/package/@netuno/server-types) installieren.

> Die Server-Typen (`@netuno/server-types`) sind die Definition aller Low-Code-Polyglot-Programmierressourcen
> in TypeScript, was es den Editoren ermöglicht, alles zu erkennen, was das polyglotte Low-Code-Framework von
> Netuno bietet, aber da es TypeScript ist, dient es nur dazu, den Code in JavaScript zu unterstützen.

Innerhalb des Ordners `📁 server` installieren Sie die [Server-Typen](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Damit können Sie im Code im Allgemeinen jede der in der Netuno-Framework verfügbaren Low-Code-Polyglot-Ressourcen importieren,
zum Beispiel dieser Servicecode:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const name = _req.getString("name");

_db.form("produkt")
  .set("name", name)
  .insert();

_out.json(
  _val.map()
    .set("name", name)
    .set("ergebnis", true)
);
```

Beachten Sie, dass der Editor den Code validiert und autovervollständigt, was äußerst nützlich ist und die
Entwicklung sehr beschleunigt.

> In einigen Editoren kann es erforderlich sein, eine Konfiguration/Aktivierung vorzunehmen, um den Ordner `📁 server`
> als Code-Stammverzeichnis zu erkennen, zum Beispiel erkennt Visual Studio Code es automatisch, aber in WebStorm muss
> man mit der rechten Maustaste auf den Ordner `server` klicken und `Mark Directory As > Resource Root` auswählen und
> das Projekt neu öffnen.

## JS & NPM - Externe Abhängigkeiten

Es können externe **NPM**-Abhängigkeiten innerhalb des Ordners `📁 server` in der Anwendung installiert werden, wo sich
die `package.json` befindet.

Allerdings, anders als wir zuvor empfohlen haben, verwenden wir zum Importieren externer Bibliotheken
`require`, und in diesem Fall können wir es mit `import` von internen Projektdateien mischen, was nicht sehr
elegant ist, aber möglich.

Um also eine Abhängigkeit hinzuzufügen, installieren Sie sie einfach mit dem Befehl `bun add`.

Zum Beispiel ist es möglich, `momentjs` zu installieren:

- `bun add moment`

Zum Importieren von Abhängigkeiten wird `require` verwendet, hier ein Beispiel:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Ein weiteres Beispiel mit `dayjs`, installieren Sie zuerst:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Sehen Sie ein vollständiges Beispiel mit `date-fns`, installieren Sie zuerst:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profil from "#core/lib/profil.js";

const dbProfil = profil.getAngemeldet();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Sich auf externe Bibliotheken zu verlassen, sind Ausnahmesituationen; normalerweise finden wir alles, was wir brauchen,
> im polyglotten Low-Code-Framework von Netuno.

### NodeJS-Native Module

Da GraalVM nicht vollständig mit den nativen Modulen von NodeJS kompatibel ist, ist es zur Umgehung möglich,
eine größere Kompatibilität mit externen Abhängigkeiten zu erreichen, die eine alternative Lösung für diese Module implementieren.

Es ist möglich, einige externe Abhängigkeiten als Alternative zu installieren, die die Kompatibilität bieten, als
wären es native Module.

Es folgt die Liste der als Alternativen verwendeten Module, um die nativen Module von NodeJS zu ersetzen, und die
jeweiligen Installationsbefehle:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Denken Sie daran, Sie müssen diese oben genannten Module im Ordner `📁 server` innerhalb der Anwendung installieren, die
Kompatibilität mit den nativen Modulen von NodeJS wird bereitgestellt, wobei diese alternativen Module verwendet werden.

## Fazit

Wir können unseren Code auf verschiedene Weise organisieren, aber Code wiederzuverwenden und
Wiederholungen zu vermeiden ist immer sehr wichtig.

Je mehr Codezeilen es gibt, desto größer ist die Wahrscheinlichkeit, dass Bugs auftreten.

Denken Sie daran, Ihren Code gut zu organisieren und seine Wiederverwendung zu zentralisieren, es erleichtert die Wartung,
vermeidet Bugs und steigert die Produktivität im Allgemeinen.

Obwohl es noch einige Einschränkungen bei der Verwendung externer Abhängigkeiten gibt, arbeiten wir
daran, das Ökosystem zu verbessern.

In der Zwischenzeit bietet Netuno verschiedene Low-Code- und Polyglot-Ressourcen, die die meisten Anforderungen abdecken.