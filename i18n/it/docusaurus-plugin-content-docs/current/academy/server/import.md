---
id: import
title: Importazione
sidebar_label: Importazione
---

## Introduzione

Quando sviluppiamo abbiamo bisogno di utilizzare più file di codice interconnessi per
organizzare e riutilizzare funzionalità, evitando ripetizioni e facilitando la manutenzione
grazie alla centralizzazione di funzioni utili, il che riduce le righe di codice in generale e
di conseguenza c'è una grande riduzione dei bug.

Quindi centralizziamo il codice utile in un altro file di codice che potrà essere importato dagli
altri file, che possono facilmente riutilizzarlo.

Qui verranno mostrate alcune soluzioni che Netuno offre per realizzare il riutilizzo
del codice.

## Core Poliglotta

In qualsiasi linguaggio di programmazione supportato da Netuno, possiamo importare qualsiasi
file di codice che si trova nella cartella `server/core` dell'applicazione.

La forma semplificata che Netuno offre consiste nell'utilizzare un formato di commento speciale
per l'importazione di codice, in cui la riga commentata ha il prefisso `_core:`, seguito
dal percorso del file di codice a partire dalla cartella `server/core` dell'applicazione.

Quindi per importare il file di codice:

- `server/core/exemplo/arquivo`

> Il file dovrà avere l'estensione conforme al linguaggio di programmazione utilizzato.

È possibile importare un altro file all'inizio di qualsiasi file di codice, per esempio nei servizi.

Nel caso di JavaScript, Groovy e Kotlin:

```javascript
// _core: exemplo/arquivo

...
```

Nel caso di Python e Ruby:

```python
# _core: exemplo/arquivo

...
```

> In questo commento speciale di importazione non è necessario inserire l'estensione del file,
> Netuno la rileva automaticamente.

Le variabili, costanti, funzioni, classi, ecc., dichiarate nel file importato sono rese disponibili
per l'utilizzo nel file che effettua l'importazione con questo tipo di commento all'inizio.

Per importare più file basta ripetere il commento di importazione con il percorso degli altri file.

Nel caso di JavaScript, Groovy e Kotlin, per importare diversi file:

```javascript
// _core: exemplo/arquivo1
// _core: exemplo/arquivo2
// _core: exemplo/arquivo3

...
```

Nel caso di Python e Ruby, per importare diversi file:

```python
# _core: exemplo/arquivo1
# _core: exemplo/arquivo2
# _core: exemplo/arquivo3

...
```

## Risorsa Exec

Attraverso la risorsa `_exec` possiamo importare codice in qualsiasi momento durante l'esecuzione.

> Le variabili, costanti, funzioni, classi, ecc., dichiarate nel file di codice importato possono essere utilizzate.

### core

Per eseguire programmaticamente l'importazione di un file di codice, in questo caso dentro la cartella
`📁 server/core`:

```javascript
_exec.core('percorso/del/file')
```

> Non è necessario inserire l'estensione del file, perché Netuno la rileva automaticamente.

### services

Per eseguire programmaticamente l'importazione di un file di codice, in questo caso dentro la cartella
`📁 server/services`:

```javascript
_exec.service('percorso/del/file')
```

> Non è necessario inserire l'estensione del file, perché Netuno la rileva automaticamente.

## JavaScript

Netuno fornisce una base per lo sviluppo in JavaScript, essendo il linguaggio più utilizzato, soprattutto
perché in JavaScript programmiamo sia il front-end sia il back-end, il che permette di realizzare lo sviluppo full-stack
utilizzando lo stesso linguaggio di programmazione.

Netuno analizza il codice e rileva automaticamente se viene utilizzato `import` (ECMAScript Modules) o
`require` (CommonJS).

> Non si deve mescolare lo standard `import` con `require`; deve essere utilizzato uno o l'altro.

Con questo possiamo utilizzare sempre l'estensione `.js` nei file di codice e, quando utilizziamo istruzioni con `import`,
Netuno le elaborerà come ECMAScript Modules e così possiamo utilizzare `export default`.

> L'utilizzo di `import` è raccomandato ogni volta che è possibile, perché è lo standard moderno.

### Importare Codice

Quando si utilizza l'importazione nativa, a differenza degli esempi precedenti, sarà importato solo ciò che è
esplicitamente esportato, in base allo standard CommonJS (`require`) o ECMAScript Modules (`import`).

Nella cartella `📁 server` c'è il file `package.json`, dove dobbiamo avere la seguente istruzione:

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

Con questo possiamo importare qualsiasi file in qualsiasi altro file di codice, per esempio:

```js title="server/services/profilo/get.js"
import profilo from "#core/lib/profilo.js";

const dbProfilo = profilo.getLoggato();
```

Poiché nel file importato viene utilizzato `import`, sarà utilizzato `export default`:

```js title="server/core/lib/profilo.js"
import {_db, _user} from "@netuno/server-types";

export default {
  getLoggato: () => {
    return _db.form("profilo")
      .where(_db.where("profilo_utente_id").equal(_user.id))
      .first();
  }
};
```

> Non è raccomandato, nella stessa applicazione o progetto, mescolare l'utilizzo di `import` (ECMAScript Modules) e
> `require` (CommonJS) anche in file diversi e situazioni diverse; è preferibile adottare sempre
> una standardizzazione omogenea.
> Raccomandiamo di utilizzare `import` perché è il metodo moderno.

In alternativa, se viene utilizzato `require` (CommonJS) invece di `import` (ECMAScript Modules):

```js title="server/services/profilo/get.js"
const profilo = require("#core/lib/profilo.js");

const dbProfilo = profilo.getLoggato();
```

Poiché nel file importato viene utilizzato `require`, sarà utilizzato `module.exports`:

```js title="server/core/lib/profilo.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  getLoggato: () => {
    return _db.form("profilo")
      .where(_db.where("profilo_utente_id").equal(_user.id))
      .first();
  }
};
```

### Completamento Automatico e Validazione del Codice

Per avere la funzione di completamento automatico del codice con validazione integrata negli editor, dobbiamo nella cartella
`📁 server` dell'applicazione installare i [Tipi del Server](https://www.npmjs.com/package/@netuno/server-types).

> I Tipi del Server (`@netuno/server-types`) sono la definizione di tutte le risorse di programmazione low-code
> poliglotta in TypeScript, il che permette agli editor di rilevare tutto ciò che il framework low-code poliglotta di
> Netuno offre, ma, essendo TypeScript, serve solo ad aiutare nel codice JavaScript.

Dentro la cartella `📁 server` installa i [Tipi del Server](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Con questo, nel codice in generale puoi importare qualsiasi risorsa low-code poliglotta disponibile nel framework di
Netuno, per esempio, questo codice di servizio:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const nome = _req.getString("nome");

_db.form("prodotto")
  .set("nome", nome)
  .insert();

_out.json(
  _val.map()
    .set("nome", nome)
    .set("risultato", true)
);
```

Nota che l'editor validerà e completerà automaticamente il codice, il che è estremamente utile e velocizza molto
lo sviluppo.

> In alcuni editor potrebbe essere necessaria qualche configurazione/attivazione per rilevare la cartella `📁 server`
> come radice del codice; per esempio, in Visual Studio Code viene rilevata automaticamente, ma in WebStorm è necessario
> fare clic con il pulsante destro del mouse sulla cartella `server` e cliccare su `Mark Directory As > Resource Root` e
> riaprire il progetto.

## JS & NPM - Dipendenze Esterne

Possono essere installate dipendenze esterne **NPM** dentro la cartella `📁 server` all'interno dell'applicazione, dove si
trova il `package.json`.

Tuttavia, contrariamente a quanto raccomandato in precedenza, per importare librerie esterne utilizziamo
`require` e in questo caso possiamo mescolarlo con `import` di file interni del progetto, il che non è molto
elegante, ma è possibile.

Quindi per aggiungere una dipendenza basta installarla con il comando `bun add`.

Per esempio, è possibile installare `momentjs`:

- `bun add moment`

Per importare dipendenze viene utilizzato `require`, ecco l'esempio:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Un altro esempio con `dayjs`, prima installa:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Vedi un esempio completo che utilizza `date-fns`, prima installa:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profilo from "#core/lib/profilo.js";

const dbProfilo = profilo.getLoggato();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> L'uso di librerie esterne è una situazione eccezionale; normalmente troviamo tutto ciò di cui abbiamo bisogno
> nel framework low-code poliglotta di Netuno.

### Moduli nativi di NodeJS

Poiché GraalVM non è completamente compatibile con i moduli nativi di NodeJS, per aggirare il problema è possibile ottenere
una maggiore compatibilità con le dipendenze esterne che implementano una soluzione alternativa a questi moduli.

È possibile installare alcune dipendenze esterne alternative che offrono la compatibilità come se
fossero moduli nativi.

Di seguito l'elenco dei moduli utilizzati come alternative per sostituire i moduli nativi di NodeJS, e i
rispettivi comandi di installazione:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Ricorda, devi installare questi moduli sopra nella cartella `📁 server` all'interno dell'applicazione; viene fornita la
compatibilità con i moduli nativi di NodeJS utilizzando questi moduli alternativi.

## Conclusione

Possiamo organizzare il nostro codice in vari modi, ma riutilizzare il codice ed evitare
ripetizioni è sempre molto importante.

Più righe di codice ci sono, maggiore sarà la probabilità che ci siano bug.

Ricorda di organizzare bene il tuo codice e centralizzare il suo riutilizzo: facilita la manutenzione,
evita bug e aumenta la produttività in generale.

Nonostante ci siano ancora alcune limitazioni con l'utilizzo di dipendenze esterne, stiamo
lavorando per migliorare l'ecosistema.

Nel frattempo, Netuno offre diverse risorse low-code e poliglotte che soddisfano la maggior parte delle esigenze.