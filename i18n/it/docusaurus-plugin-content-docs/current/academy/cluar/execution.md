---
sidebar_position: 4
id: execution
title: Esecuzione
sidebar_label: Esecuzione
---

Con il progetto installato e configurato, è ora di eseguirlo.

## Avviare il server

Nella directory radice di Netuno, esegui:

```
./netuno server app=cluar
```

Questo avvia il back-end e il front-end contemporaneamente.

> La prima esecuzione potrebbe richiedere più tempo, a causa dell'installazione delle dipendenze del front-end.

Per impostazione predefinita:

- Il backoffice di Netuno è disponibile all'indirizzo [http://localhost:9000/](http://localhost:9000/)
- L'OpenAPI dei servizi è disponibile all'indirizzo [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Avviare il sito web

Per avviare manualmente il sito web:

```
cd website
bun run dev
```

Per impostazione predefinita, il sito web è disponibile all'indirizzo [http://localhost:3000/](http://localhost:3000/)

> È possibile avviare automaticamente il sito web insieme al server Netuno, attivando il comando corrispondente in `config/_development.json` — vedi [Configurazione](/docs/academy/cluar/configuration#7-avvio-automatico-del-sito-web-opzionale).

## Risoluzione dei problemi

### Errore di versione GLIBC durante l'esecuzione di `bun run dev`

Se all'avvio del sito web compare un errore come questo:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Non si tratta del bug delle dipendenze opzionali di npm menzionato nel messaggio, ma di un'**incompatibilità di versione di GLIBC**: il binario nativo di Rollup è stato compilato richiedendo `GLIBC_2.32` o versione successiva, e le distribuzioni Linux più datate (ad esempio Ubuntu 20.04, che include glibc 2.31) non lo hanno disponibile.

Per risolvere, forza Rollup a usare la versione WASM invece di quella nativa, aggiungendo un campo `overrides` nella radice del `package.json` del sito web:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Poi reinstalla le dipendenze:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Passo successivo

Con il progetto in esecuzione, esplora le [Lingue](/docs/academy/cluar/languages) o il [modello delle Pagine](/docs/academy/cluar/pages/overview).