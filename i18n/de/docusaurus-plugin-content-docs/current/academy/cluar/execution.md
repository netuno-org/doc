---
sidebar_position: 4
id: execution
title: Ausführung
sidebar_label: Ausführung
---

Nachdem das Projekt installiert und konfiguriert ist, ist es Zeit, es auszuführen.

## Server starten

Führen Sie im Stammverzeichnis von Netuno aus:

```
./netuno server app=cluar
```

Dadurch werden Backend und Frontend gleichzeitig gestartet.

> Die erste Ausführung kann länger dauern, da die Frontend-Abhängigkeiten installiert werden.

Standardmäßig:

- Das Netuno-Backoffice ist unter [http://localhost:9000/](http://localhost:9000/) verfügbar
- Die OpenAPI der Dienste ist unter [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi) verfügbar

## Website starten

So starten Sie die Website manuell:

```
cd website
bun run dev
```

Standardmäßig ist die Website unter [http://localhost:3000/](http://localhost:3000/) verfügbar

> Es ist möglich, die Website automatisch zusammen mit dem Netuno-Server starten zu lassen, indem Sie den entsprechenden Befehl in `config/_development.json` aktivieren – siehe [Konfiguration](/docs/academy/cluar/configuration#7-automatischer-start-der-website-optional).

## Fehlerbehebung

### GLIBC-Versionsfehler beim Ausführen von `bun run dev`

Wenn beim Starten der Website ein Fehler wie dieser auftritt:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Dabei handelt es sich nicht um den in der Meldung erwähnten Bug bei optionalen npm-Abhängigkeiten, sondern um eine **GLIBC-Versionsinkompatibilität**: Das native Rollup-Binary wurde mit der Anforderung `GLIBC_2.32` oder neuer kompiliert, und ältere Linux-Distributionen (zum Beispiel Ubuntu 20.04, das glibc 2.31 mitbringt) stellen diese nicht bereit.

Um das zu beheben, zwingen Sie Rollup, statt der nativen die WASM-Version zu verwenden, indem Sie ein Feld `overrides` in der `package.json` im Stammverzeichnis der Website hinzufügen:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Installieren Sie anschließend die Abhängigkeiten neu:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Nächster Schritt

Nachdem das Projekt läuft, erkunden Sie die [Sprachen](/docs/academy/cluar/languages) oder das [Seitenmodell](/docs/academy/cluar/pages/overview).