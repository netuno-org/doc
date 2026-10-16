---
id: import
title: Import
sidebar_label: Import
---

## Introducere

Când dezvoltăm, trebuie să folosim multiple fișiere de cod interconectate pentru a organiza, reutiliza funcționalități, a evita repetițiile, a facilita mentenanța prin centralizarea funcțiilor utile, ceea ce reduce liniile de cod în general și, în consecință, are loc o reducere semnificativă a erorilor.

Astfel, centralizăm codul util într-un alt fișier de cod care poate fi importat de celelalte, care îl pot reutiliza cu ușurință.

Aici vor fi demonstrate câteva soluții pe care Netuno le oferă pentru a realiza reutilizarea codului.

## Core poliglot

În orice limbaj de programare suportat de Netuno, putem importa orice fișier de cod care se află în folderul `server/core` al aplicației.

Forma simplificată pe care o oferă Netuno este utilizarea unui format special de comentariu pentru importul de cod, unde linia comentată are prefixul `_core:`, iar în continuare are calea fișierului de cod începând cu folderul `server/core` al aplicației.

Deci, pentru a importa un fișier de cod:

- `server/core/exemplu/fisier`

> Fișierul trebuie să aibă extensia conform limbajului de programare utilizat.

Este posibil să importați un alt fișier la începutul oricărui fișier de cod, de exemplu, în servicii.

În cazul JavaScript, Groovy și Kotlin:

```javascript
// _core: exemplu/fisier

...
```

În cazul Python și Ruby:

```python
# _core: exemplu/fisier

...
```

> În acest comentariu special de importare nu este necesar să puneți extensia fișierului, Netuno o detectează automat.

Variabilele, constantele, funcțiile, clasele etc. declarate în fișierul importat sunt disponibile pentru utilizare în fișierul care realizează importul cu acest tip de comentariu la început.

Pentru a importa mai multe fișiere, este suficient să repetați comentariul de importare cu calea celorlalte fișiere.

În cazul JavaScript, Groovy și Kotlin, pentru a importa mai multe fișiere:

```javascript
// _core: exemplu/fisier1
// _core: exemplu/fisier2
// _core: exemplu/fisier3

...
```

În cazul Python și Ruby, pentru a importa mai multe fișiere:

```python
# _core: exemplu/fisier1
# _core: exemplu/fisier2
# _core: exemplu/fisier3

...
```

## Resursa Exec

Prin resursa `_exec` putem importa cod în orice moment în timpul execuției.

> Variabilele, constantele, funcțiile, clasele etc. declarate în fișierul de cod importat pot fi utilizate.

### core

Pentru a executa programatic importul unui fișier de cod, în acest caz în folderul `📁 server/core`:

```javascript
_exec.core('cale/catre/fisier')
```

> Nu este necesar să puneți extensia fișierului, Netuno o detectează automat.

### services

Pentru a executa programatic importul unui fișier de cod, în acest caz în folderul `📁 server/services`:

```javascript
_exec.service('cale/catre/fisier')
```

> Nu este necesar să puneți extensia fișierului, Netuno o detectează automat.

## JavaScript

Netuno oferă o bază pentru dezvoltarea în JavaScript, fiind cel mai utilizat limbaj, în special pentru că în JavaScript programăm atât front-end-ul, cât și back-end-ul, permițând dezvoltarea full-stack folosind același limbaj de programare.

Netuno analizează codul și detectează automat dacă se utilizează `import` (ECMAScript Modules) sau `require` (CommonJS).

> Nu trebuie să amestecați modelul `import` cu `require`, trebuie utilizat unul sau celălalt.

Astfel, putem utiliza întotdeauna extensia `.js` în fișierele de cod, iar când utilizăm instrucțiuni cu `import`, Netuno le va procesa ca ECMAScript Modules și astfel putem utiliza `export default`.

> Utilizarea `import` este recomandată ori de câte ori este posibil, deoarece este standardul modern.

### Importul codului

Când utilizați importul nativ, spre deosebire de exemplele anterioare, se va importa doar ceea ce este exportat în mod explicit, pe baza standardului CommonJS (`require`) sau ECMAScript Modules (`import`).

În folderul `📁 server` se află fișierul `package.json`, acolo trebuie să avem următoarea instrucțiune:

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

Astfel, putem importa orice fișier în orice alt fișier de cod, de exemplu:

```js title="server/services/profil/obtine.js"
import profil from "#core/lib/profil.js";

const dbProfil = profil.obtineLogat();
```

Deoarece se utilizează `import` în fișierul importat, se va utiliza `export default`:

```js title="server/core/lib/profil.js"
import {_db, _user} from "@netuno/server-types";

export default {
  obtineLogat: () => {
    return _db.form("profil")
      .where(_db.where("profil_utilizator_id").equal(_user.id))
      .first();
  }
};
```

> Nu este recomandat, în aceeași aplicație sau proiect, să amestecați utilizarea `import` (ECMAScript Modules) și `require` (CommonJS), chiar și în fișiere diferite și situații diferite; este de preferat să adoptați întotdeauna o standardizare omogenă.
> Recomandăm utilizarea `import` deoarece este metoda modernă.

Alternativ, dacă se utilizează `require` (CommonJS) în loc de `import` (ECMAScript Modules):

```js title="server/services/profil/obtine.js"
const profil = require("#core/lib/profil.js");

const dbProfil = profil.obtineLogat();
```

Deoarece se utilizează `require` în fișierul importat, se va utiliza `module.exports`:

```js title="server/core/lib/profil.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  obtineLogat: () => {
    return _db.form("profil")
      .where(_db.where("profil_utilizator_id").equal(_user.id))
      .first();
  }
};
```

### Autocompletare și validare a codului

Pentru a avea funcția de autocompletare a codului cu validare integrată în editoare, trebuie să instalăm în folderul `📁 server` al aplicației [Tipurile de Server](https://www.npmjs.com/package/@netuno/server-types).

> Tipurile de server (`@netuno/server-types`) sunt definiția tuturor resurselor de programare low-code poliglot în TypeScript, ceea ce permite editoarelor să detecteze tot ceea ce oferă framework-ul low-code poliglot Netuno, dar, fiind TypeScript, servește doar pentru a ajuta la codul în JavaScript.

În folderul `📁 server` instalați [Tipurile de Server](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Astfel, în codul în general puteți importa oricare dintre resursele low-code poliglot disponibile în framework-ul Netuno, de exemplu, acest cod de serviciu:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const nume = _req.getString("nume");

_db.form("produs")
  .set("nume", nume)
  .insert();

_out.json(
  _val.map()
    .set("nume", nume)
    .set("rezultat", true)
);
```

Observați că editorul va valida și autocompleta codul, ceea ce este extrem de util și accelerează mult dezvoltarea.

> În unele editoare poate fi necesară o configurare/activare pentru a detecta folderul `📁 server` ca rădăcină de cod; de exemplu, în Visual Studio Code se detectează automat, dar în WebStorm trebuie să faceți clic dreapta pe folderul `server` și să faceți clic pe `Mark Directory As > Resource Root` și să redeschideți proiectul.

## JS & NPM - Dependențe externe

Pot fi instalate dependențe externe **NPM** în folderul `📁 server` din aplicație, unde se află `package.json`.

Totuși, spre deosebire de ceea ce am recomandat anterior, pentru a importa biblioteci externe utilizăm `require`, iar în acest caz putem amesteca cu `import` de fișiere interne ale proiectului, ceea ce nu este foarte elegant, dar este posibil.

Deci, pentru a adăuga o dependență, este suficient să instalați cu comanda `bun add`.

De exemplu, este posibil să instalați `momentjs`:

- `bun add moment`

Pentru a importa dependențe se utilizează `require`, urmează exemplul:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Un alt exemplu cu `dayjs`, mai întâi instalați:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Vedeți un exemplu complet folosind `date-fns`, mai întâi instalați:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profil from "#core/lib/profil.js";

const dbProfil = profil.obtineLogat();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Dependența de biblioteci externe sunt situații excepționale; de obicei găsim tot ce ne trebuie în framework-ul low-code poliglot Netuno.

### Module native NodeJS

Deoarece GraalVM nu este complet compatibilă cu modulele native NodeJS, pentru a ocoli această problemă este posibil să obțineți o compatibilitate mai mare cu dependențele externe care implementează o soluție alternativă la aceste module.

Este posibil să instalați câteva dependențe externe ca alternativă, care oferă compatibilitate ca și cum ar fi module native.

Urmează lista modulelor utilizate ca alternative pentru a înlocui modulele native NodeJS și comenzile de instalare respective:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Rețineți, trebuie să instalați aceste module de mai sus în folderul `📁 server` din aplicație; este oferită compatibilitatea cu modulele native NodeJS, urmând să utilizați aceste module alternative.

## Concluzie

Putem organiza codul nostru în diverse moduri, dar reutilizarea codului și evitarea repetițiilor este întotdeauna foarte importantă.

Cu cât există mai multe linii de cod, cu atât probabilitatea de a exista erori este mai mare.

Nu uitați să vă organizați bine codul și să centralizați reutilizarea acestuia; facilitează mentenanța, evită erorile și crește productivitatea în general.

Deși încă există unele limitări privind utilizarea dependențelor externe, lucrăm pentru a îmbunătăți ecosistemul.

Între timp, Netuno oferă diverse resurse low-code și poliglote care acoperă majoritatea nevoilor.