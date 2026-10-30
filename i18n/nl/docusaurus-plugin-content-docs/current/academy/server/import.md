---
id: import
title: Import
sidebar_label: Import
---

## Inleiding

Wanneer we ontwikkelen, moeten we meerdere onderling verbonden codebestanden gebruiken om
functionaliteit te organiseren en hergebruiken, om herhalingen te vermijden, om onderhoud te vergemakkelijken door
nuttige functies te centraliseren, wat het aantal regels code in het algemeen vermindert en daardoor
het aantal bugs sterk reduceert.

Daarom centraliseren we nuttige code in een ander codebestand dat door
de andere bestanden kan worden geïmporteerd en eenvoudig kan worden hergebruikt.

Hier worden enkele oplossingen getoond die Netuno biedt om code
te hergebruiken.

## Polyglot Core

In elke programmeertaal die door Netuno wordt ondersteund, kunnen we elk
codebestand importeren dat zich in de map `server/core` van de applicatie bevindt.

De vereenvoudigde manier die Netuno biedt, is het gebruik van een speciaal commentaarformaat
voor het importeren van code, waarbij de regel met commentaar het prefix `_core:` heeft, gevolgd door
het pad van het codebestand vanaf de map `server/core` van de applicatie.

Dus om het codebestand te importeren:

- `server/core/voorbeeld/bestand`

> Het bestand moet de extensie hebben die overeenkomt met de gebruikte programmeertaal.

Het is mogelijk om een ander bestand aan het begin van elk codebestand te importeren, bijvoorbeeld in services.

In het geval van JavaScript, Groovy en Kotlin:

```javascript
// _core: exemplo/arquivo

...
```

In het geval van Python en Ruby:

```python
# _core: voorbeeld/bestand

...
```

> In dit speciale importcommentaar is het niet nodig om de bestandsextensie te vermelden;
> Netuno detecteert deze automatisch.

De variabelen, constanten, functies, klassen, enz. die in het geïmporteerde bestand zijn gedeclareerd, worden beschikbaar
voor gebruik in het bestand dat de import uitvoert met dit type commentaar aan het begin.

Om meerdere bestanden te importeren, herhaal je gewoon het importcommentaar met de paden van de andere bestanden.

In het geval van JavaScript, Groovy en Kotlin, om meerdere bestanden te importeren:

```javascript
// _core: exemplo/arquivo1
// _core: exemplo/arquivo2
// _core: exemplo/arquivo3

...
```

In het geval van Python en Ruby, om meerdere bestanden te importeren:

```python
# _core: voorbeeld/bestand1
# _core: voorbeeld/bestand2
# _core: voorbeeld/bestand3

...
```

## Exec-resource

Via de `_exec`-resource kunnen we op elk moment tijdens de uitvoering code importeren.

> De variabelen, constanten, functies, klassen, enz. die in het geïmporteerde codebestand zijn gedeclareerd, kunnen worden gebruikt.

### core

Om programmatisch een codebestand te importeren, in dit geval binnen de map
`📁 server/core`:

```javascript
_exec.core('pad/van/bestand')
```

> Het is niet nodig om de bestandsextensie te vermelden; Netuno detecteert deze automatisch.

### services

Om programmatisch een codebestand te importeren, in dit geval binnen de map
`📁 server/services`:

```javascript
_exec.service('pad/van/bestand')
```

> Het is niet nodig om de bestandsextensie te vermelden; Netuno detecteert deze automatisch.

## JavaScript

Netuno biedt een basis voor ontwikkeling in JavaScript, de meest gebruikte taal, vooral
omdat we in JavaScript zowel de front-end als de back-end programmeren, waardoor full-stackontwikkeling
met dezelfde programmeertaal mogelijk is.

Netuno analyseert de code en detecteert automatisch of `import` (ECMAScript Modules) of
`require` (CommonJS) wordt gebruikt.

> Je mag het `import`-patroon niet met `require` mengen; gebruik het een of het ander.

Hierdoor kunnen we altijd de extensie `.js` in codebestanden gebruiken, en bij gebruik van instructies met `import`
verwerkt Netuno dit als ECMAScript Modules, zodat we `export default` kunnen gebruiken.

> Het gebruik van `import` wordt waar mogelijk aanbevolen, omdat het de moderne standaard is.

### Code importeren

Bij gebruik van native import wordt, in tegenstelling tot de vorige voorbeelden, alleen geïmporteerd wat
expliciet is geëxporteerd, op basis van de CommonJS-standaard (`require`) of ECMAScript Modules (`import`).

In de map `📁 server` staat het bestand `package.json`; daarin moeten we de volgende instructie hebben:

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

Hiermee kunnen we elk bestand in elk ander codebestand importeren, bijvoorbeeld:

```js title="server/services/profiel/get.js"
import profiel from "#core/lib/profiel.js";

const dbProfiel = profiel.getIngelogde();
```

Omdat `import` wordt gebruikt, wordt in het geïmporteerde bestand `export default` gebruikt:

```js title="server/core/lib/profiel.js"
import {_db, _user} from "@netuno/server-types";

export default {
  getIngelogde: () => {
    return _db.form("profiel")
      .where(_db.where("profiel_gebruiker_id").equal(_user.id))
      .first();
  }
};
```

> Het wordt in dezelfde applicatie of hetzelfde project niet aanbevolen om `import` (ECMAScript Modules) en
> `require` (CommonJS) te mengen, zelfs niet in verschillende bestanden en situaties; het is beter om altijd
> een homogene standaard te hanteren.
> We raden aan `import` te gebruiken, omdat dit de moderne methode is.

Als alternatief, als `require` (CommonJS) in plaats van `import` (ECMAScript Modules) wordt gebruikt:

```js title="server/services/profiel/get.js"
const profiel = require("#core/lib/profiel.js");

const dbProfiel = profiel.getIngelogde();
```

Omdat `require` wordt gebruikt, wordt in het geïmporteerde bestand `module.exports` gebruikt:

```js title="server/core/lib/profiel.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  getIngelogde: () => {
    return _db.form("profiel")
      .where(_db.where("profiel_gebruiker_id").equal(_user.id))
      .first();
  }
};
```

### Autocomplete en codevalidatie

Om code-autocomplete met geïntegreerde codevalidatie in editors te krijgen, moeten we in de map
`📁 server` van de applicatie de [Servertypen](https://www.npmjs.com/package/@netuno/server-types) installeren.

> De servertypen (`@netuno/server-types`) zijn de definitie van alle polyglot low-code
> programmeerresources in TypeScript, waardoor editors alles kunnen detecteren wat het polyglot low-code
> framework van Netuno biedt; maar omdat het TypeScript is, dient het alleen ter ondersteuning van JavaScript-code.

Installeer in de map `📁 server` de [Servertypen](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Hierdoor kun je in de code in het algemeen elk van de beschikbare polyglot low-code resources in het
Netuno-framework importeren, bijvoorbeeld deze servicecode:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const naam = _req.getString("naam");

_db.form("product")
  .set("naam", naam)
  .insert();

_out.json(
  _val.map()
    .set("naam", naam)
    .set("resultaat", true)
);
```

Merk op dat de editor de code valideert en automatisch aanvult, wat uiterst nuttig is en de
ontwikkeling veel sneller maakt.

> In sommige editors kan enige configuratie/activering nodig zijn om de map `📁 server`
> als codewortel te detecteren; Visual Studio Code detecteert dit bijvoorbeeld automatisch, maar in WebStorm moet je
> met de rechtermuisknop op de map `server` klikken, op `Mark Directory As > Resource Root` klikken en
> het project opnieuw openen.

## JS & NPM - Externe afhankelijkheden

Je kunt externe **NPM**-afhankelijkheden installeren in de map `📁 server` van de applicatie, waar
`package.json` staat.

Echter, in tegenstelling tot wat we eerder aanraadden, gebruiken we voor het importeren van externe bibliotheken
`require`, en in dit geval kunnen we dit mengen met `import` van interne projectbestanden, wat niet erg
elegant is, maar mogelijk.

Om een afhankelijkheid toe te voegen, hoef je alleen maar te installeren met het commando `bun add`.

Je kunt bijvoorbeeld `momentjs` installeren:

- `bun add moment`

Voor het importeren van afhankelijkheden wordt `require` gebruikt; hier is het voorbeeld:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Nog een voorbeeld met `dayjs`; installeer eerst:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Bekijk een compleet voorbeeld met `date-fns`; installeer eerst:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profiel from "#core/lib/profiel.js";

const dbProfiel = profiel.getIngelogde();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Afhankelijk zijn van externe bibliotheken zijn uitzonderlijke situaties; meestal vinden we alles wat we nodig hebben
> in het polyglot low-code framework van Netuno.

### Native NodeJS-modules

Omdat GraalVM niet volledig compatibel is met de native NodeJS-modules, kun je als omweg een grotere
compatibiliteit verkrijgen met externe afhankelijkheden die een alternatieve oplossing voor deze modules implementeren.

Je kunt enkele externe afhankelijkheden als alternatief installeren die compatibiliteit bieden alsof het
native modules zijn.

Hier is de lijst van modules die als alternatieven worden gebruikt om de native NodeJS-modules te vervangen, met de
bijbehorende installatiecommando's:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Onthoud dat je deze modules hierboven in de map `📁 server` van de applicatie moet installeren; er wordt
compatibiliteit met de native NodeJS-modules geboden doordat deze alternatieve modules worden gebruikt.

## Conclusie

We kunnen onze code op verschillende manieren organiseren, maar code hergebruiken en
repetities vermijden is altijd erg belangrijk.

Hoe meer regels code, hoe groter de kans op bugs.

Onthoud dat je je code goed organiseert en het hergebruik centraliseert; dat vergemakkelijkt het onderhoud,
voorkomt bugs en verhoogt over het algemeen de productiviteit.

Hoewel er nog enkele beperkingen zijn bij het gebruik van externe afhankelijkheden, werken we
aan het verbeteren van het ecosysteem.

Ondertussen biedt Netuno diverse low-code en polyglot resources die in de meeste behoeften voorzien.