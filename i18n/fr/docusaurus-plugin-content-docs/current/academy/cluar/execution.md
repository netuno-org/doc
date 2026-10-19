---
sidebar_position: 4
id: execution
title: Exécution
sidebar_label: Exécution
---

Une fois le projet installé et configuré, il est temps de l'exécuter.

## Démarrer le serveur

Dans le répertoire racine de Netuno, exécutez :

```
./netuno server app=monapp
```

Cela démarre le back-end et le front-end simultanément.

> La première exécution peut prendre plus de temps, en raison de l'installation des dépendances du front-end.

Par défaut :

- Le backoffice de Netuno est disponible à [http://localhost:9000/](http://localhost:9000/)
- L'OpenAPI des services se trouve à [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Démarrer le site web

Pour démarrer le site web manuellement :

```
cd website
bun run dev
```

Par défaut, le site web est disponible à [http://localhost:3000/](http://localhost:3000/)

> Il est possible de faire démarrer automatiquement le site web en même temps que le serveur Netuno, en activant la commande correspondante dans `config/_development.json` — voir [Configuration](/docs/academy/cluar/configuration#7-démarrage-automatique-du-site-web-facultatif).

## Résolution de problèmes

### Erreur de version de GLIBC lors de l'exécution de `bun run dev`

Si une erreur comme celle-ci apparaît lors du démarrage du site web :

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Il ne s'agit pas du bug de dépendances optionnelles de npm mentionné dans le message, mais d'une **incompatibilité de version de GLIBC** : le binaire natif de Rollup a été compilé en exigeant `GLIBC_2.32` ou plus récent, et les distributions Linux plus anciennes (par exemple, Ubuntu 20.04, qui fournit glibc 2.31) ne l'ont pas disponible.

Pour résoudre, forcez Rollup à utiliser la version WASM au lieu de la native, en ajoutant un champ `overrides` à la racine du `package.json` du site web :

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Ensuite, réinstallez les dépendances :

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Étape suivante

Une fois le projet en cours d'exécution, explorez les [Langues](/docs/academy/cluar/languages) ou le [modèle de Pages](/docs/academy/cluar/pages/overview).