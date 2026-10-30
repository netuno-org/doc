---
id: import
title: Importation
sidebar_label: Importation
---

## Introduction

Lorsque nous développons, nous devons utiliser plusieurs fichiers de code interconnectés pour
organiser, réutiliser des fonctionnalités afin d'éviter les répétitions, faciliter la maintenance
en centralisant les fonctions utiles, ce qui réduit les lignes de code en général et par conséquent
il y a une grande réduction des bugs.

Nous centralisons donc le code utile dans un autre fichier de code qui pourra être importé par
les autres qui peuvent facilement le réutiliser.

Ici seront démontrées quelques solutions que Netuno propose pour réaliser la réutilisation
de code.

## Core Polyglotte

Dans n'importe quel langage de programmation pris en charge par Netuno, nous pouvons importer n'importe
quel fichier de code qui se trouve dans le dossier `server/core` de l'application.

La forme simplifiée que Netuno propose est d'utiliser un format de commentaire spécial
pour l'importation de code, où la ligne commentée a le préfixe `_core:`, et ensuite
le chemin du fichier de code à partir du dossier `server/core` de l'application.

Ainsi, pour importer le fichier de code :

- `server/core/exemple/fichier`

> Le fichier doit avoir l'extension correspondant au langage de programmation utilisé.

Il est possible d'importer un autre fichier au début de n'importe quel fichier de code, par exemple, dans les services.

Dans le cas de JavaScript, Groovy et Kotlin :

```javascript
// _core: exemplo/arquivo

...
```

Dans le cas de Python et Ruby :

```python
# _core: exemplo/arquivo

...
```

> Dans ce commentaire spécial d'importation, il n'est pas nécessaire de mettre l'extension du fichier,
> Netuno la détecte automatiquement.

Les variables, constantes, fonctions, classes, etc., déclarées dans le fichier importé sont mises à disposition
pour être utilisées dans le fichier qui effectue l'importation avec ce type de commentaire au début.

Pour importer plusieurs fichiers, il suffit de répéter le commentaire d'importation avec le chemin des autres fichiers.

Dans le cas de JavaScript, Groovy et Kotlin, pour importer plusieurs fichiers :

```javascript
// _core: exemplo/arquivo1
// _core: exemplo/arquivo2
// _core: exemplo/arquivo3

...
```

Dans le cas de Python et Ruby, pour importer plusieurs fichiers :

```python
# _core: exemplo/arquivo1
# _core: exemplo/arquivo2
# _core: exemplo/arquivo3

...
```

## Ressource Exec

Grâce à la ressource `_exec`, nous pouvons importer du code à tout moment pendant l'exécution.

> Les variables, constantes, fonctions, classes, etc., déclarées dans le fichier de code importé peuvent être utilisées.

### core

Pour exécuter programmatiquement l'importation d'un fichier de code, dans ce cas dans le dossier
`📁 server/core` :

```javascript
_exec.core('chemin/du/fichier')
```

> Il n'est pas nécessaire de mettre l'extension du fichier, Netuno la détecte automatiquement.

### services

Pour exécuter programmatiquement l'importation d'un fichier de code, dans ce cas dans le dossier
`📁 server/services` :

```javascript
_exec.service('chemin/du/fichier')
```

> Il n'est pas nécessaire de mettre l'extension du fichier, Netuno la détecte automatiquement.

## JavaScript

Netuno impose une base pour le développement en JavaScript, étant le langage le plus utilisé, surtout
parce qu'en JavaScript nous programmons à la fois le front-end et le back-end, ce qui permet de réaliser le développement full-stack
en utilisant le même langage de programmation.

Netuno analyse le code et détecte automatiquement si `import` (ECMAScript Modules) ou
`require` (CommonJS) est utilisé.

> Il ne faut pas mélanger le standard `import` avec `require`, il faut utiliser l'un ou l'autre.

Ainsi, nous pouvons toujours utiliser l'extension `.js` dans les fichiers de code, et en utilisant des instructions avec `import`
Netuno va traiter comme étant ECMAScript Modules et ainsi nous pouvons utiliser `export default`.

> L'utilisation de `import` est recommandée chaque fois que possible car c'est le standard moderne.

### Importer du code

En utilisant l'importation native, contrairement aux exemples précédents, seul ce qui est
explicitement exporté sera importé, sur la base du standard CommonJS (`require`) ou ECMAScript Modules (`import`).

Dans le dossier `📁 server` se trouve le fichier `package.json`, nous devons y avoir l'instruction suivante :

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

Avec cela, nous pouvons importer n'importe quel fichier dans n'importe quel autre fichier de code, par exemple :

```js title="server/services/profil/obtenir.js"
import profil from "#core/lib/profil.js";

const dbProfil = profil.getConnecte();
```

Puisque `import` est utilisé, dans le fichier importé `export default` sera utilisé :

```js title="server/core/lib/profil.js"
import {_db, _user} from "@netuno/server-types";

export default {
  getConnecte: () => {
    return _db.form("profil")
      .where(_db.where("profil_utilisateur_id").equal(_user.id))
      .first();
  }
};
```

> Il n'est pas recommandé, dans une même application ou projet, de mélanger l'utilisation de `import` (ECMAScript Modules) et
> `require` (CommonJS), même dans des fichiers différents et des situations différentes, il est préférable d'adopter toujours
> une normalisation homogène.
> Nous recommandons d'utiliser `import` car c'est la méthode moderne.

Alternativement, si `require` (CommonJS) est utilisé au lieu de `import` (ECMAScript Modules) :

```js title="server/services/profil/obtenir.js"
const profil = require("#core/lib/profil.js");

const dbProfil = profil.getConnecte();
```

Puisque `require` est utilisé, dans le fichier importé `module.exports` sera utilisé :

```js title="server/core/lib/profil.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  getConnecte: () => {
    return _db.form("profil")
      .where(_db.where("profil_utilisateur_id").equal(_user.id))
      .first();
  }
};
```

### Autocomplétion et validation du code

Pour avoir la fonction d'autocomplétion du code avec validation intégrée dans les éditeurs, nous devons dans le dossier
`📁 server` de l'application réaliser l'installation des [Types du serveur](https://www.npmjs.com/package/@netuno/server-types).

> Les types du serveur (`@netuno/server-types`) sont la définition de toutes les ressources de programmation low-code
> polyglotte en TypeScript, ce qui permet aux éditeurs de détecter tout ce que le framework low-code polyglotte de
> Netuno offre, mais comme c'est du TypeScript, cela sert uniquement à aider dans le code JavaScript.

Dans le dossier `📁 server`, installez les [Types du serveur](https://www.npmjs.com/package/@netuno/server-types) :

```bash
bun add @netuno/server-types
```

Avec cela, dans le code en général, vous pouvez importer n'importe laquelle des ressources low-code polyglotte disponibles dans le framework de
Netuno, par exemple, ce code de service :

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const nom = _req.getString("nom");

_db.form("produit")
  .set("nom", nom)
  .insert();

_out.json(
  _val.map()
    .set("nom", nom)
    .set("resultat", true)
);
```

Remarquez que l'éditeur va valider et autocompléter le code, ce qui est extrêmement utile et accélère beaucoup le
développement.

> Dans certains éditeurs, il peut être nécessaire de faire une configuration/activation pour détecter le dossier `📁 server`
> comme racine de code, par exemple, dans Visual Studio Code, il le détecte automatiquement, mais dans WebStorm, il faut
> cliquer avec le bouton droit sur le dossier `server` et cliquer sur `Mark Directory As > Resource Root` et
> rouvrir le projet.

## JS & NPM - Dépendances externes

Des dépendances externes du **NPM** peuvent être installées dans le dossier `📁 server` à l'intérieur de l'application, où se
trouve le `package.json`.

Cependant, contrairement à ce que nous recommandions précédemment, pour importer des bibliothèques externes, nous utilisons
`require` et dans ce cas nous pouvons mélanger avec `import` de fichiers internes du projet, ce qui n'est pas très
élégant, mais c'est possible.

Ainsi, pour ajouter une dépendance, il suffit d'installer avec la commande `bun add`.

Par exemple, il est possible d'installer `momentjs` :

- `bun add moment`

Pour importer des dépendances, `require` est utilisé, voici l'exemple :

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Un autre exemple avec `dayjs`, installez d'abord :

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Voir un exemple complet utilisant `date-fns`, installez d'abord :

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profil from "#core/lib/profil.js";

const dbProfil = profil.getConnecte();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Dépendre de bibliothèques externes sont des situations exceptionnelles, normalement nous trouvons tout ce dont nous avons besoin
> dans le framework low-code polyglotte de Netuno.

### Modules natifs de NodeJS

Comme GraalVM n'est pas totalement compatible avec les modules natifs de NodeJS, pour contourner cela, il est possible d'obtenir
une meilleure compatibilité avec les dépendances externes qui implémentent une solution alternative à ces modules.

Il est possible d'installer certaines dépendances externes comme alternative qui offrent la compatibilité comme si
c'étaient des modules natifs.

Voici la liste des modules utilisés comme alternatives pour remplacer les modules natifs de NodeJS, et les
commandes d'installation respectives :

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Rappelez-vous, vous devez installer ces modules ci-dessus dans le dossier `📁 server` à l'intérieur de l'application, la
compatibilité avec les modules natifs de NodeJS est fournie en utilisant ces modules alternatifs.

## Conclusion

Nous pouvons organiser notre code de diverses manières, mais réutiliser le code et éviter
les répétitions est toujours très important.

Plus il y a de lignes de code, plus la probabilité d'avoir des bugs est grande.

Rappelez-vous d'bien organiser votre code et de centraliser sa réutilisation, cela facilite la maintenance,
 évite les bugs, et augmente la productivité en général.

Bien qu'il y ait encore quelques limitations avec l'utilisation de dépendances externes, nous
travaillons pour améliorer l'écosystème.

En attendant, Netuno offre diverses ressources low-code et polyglotte qui répondent à la plupart des besoins.