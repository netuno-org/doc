---
sidebar_position: 4
id: execution
title: Uitvoering
sidebar_label: Uitvoering
---

Nu het project is geïnstalleerd en geconfigureerd, is het tijd om het uit te voeren.

## De server starten

Voer in de hoofdmap van Netuno het volgende uit:

```
./netuno server app=cluar
```

Dit start tegelijkertijd de back-end en de front-end.

> De eerste uitvoering kan langer duren vanwege de installatie van de front-endafhankelijkheden.

Standaard:

- De backoffice van Netuno is beschikbaar op [http://localhost:9000/](http://localhost:9000/)
- De OpenAPI van de services is beschikbaar op [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## De website starten

Om de website handmatig te starten:

```
cd website
bun run dev
```

Standaard is de website beschikbaar op [http://localhost:3000/](http://localhost:3000/)

> Het is mogelijk om de website automatisch samen met de Netuno-server te laten starten door het betreffende commando in `config/_development.json` te activeren — zie [Configuratie](/docs/academy/cluar/configuration#7-automatische-start-van-de-website-optioneel).

## Probleemoplossing

### GLIBC-versiefout bij het uitvoeren van `bun run dev`

Als bij het starten van de website een fout zoals deze verschijnt:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Het gaat niet om de bug met optionele afhankelijkheden van npm die in de melding wordt genoemd, maar om een **GLIBC-versie-incompatibiliteit**: de native Rollup-binary is gecompileerd met de vereiste `GLIBC_2.32` of nieuwer, en oudere Linux-distributies (bijvoorbeeld Ubuntu 20.04, met glibc 2.31) hebben die niet beschikbaar.

Om dit op te lossen, forceer je dat Rollup de WASM-versie gebruikt in plaats van de native versie, door een `overrides`-veld toe te voegen aan de root van de `package.json` van de website:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Installeer daarna de afhankelijkheden opnieuw:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Volgende stap

Nu het project draait, kun je de [Talen](/docs/academy/cluar/languages) of het [Pagina-model](/docs/academy/cluar/pages/overview) verkennen.