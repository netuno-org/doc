---
sidebar_position: 4
id: execution
title: Execuție
sidebar_label: Execuție
---

Cu proiectul instalat și configurat, este timpul să îl rulezi.

## Pornirea serverului

În directorul rădăcină al Netuno, execută:

```
./netuno server app=cluar
```

Aceasta pornește back-end-ul și front-end-ul simultan.

> La prima rulare poate dura mai mult, din cauza instalării dependențelor front-end-ului.

În mod implicit:

- Backoffice-ul Netuno este disponibil la [http://localhost:9000/](http://localhost:9000/)
- OpenAPI-ul serviciilor se află la [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Pornirea site-ului web

Pentru a porni site-ul web manual:

```
cd website
bun run dev
```

În mod implicit, site-ul web este disponibil la [http://localhost:3000/](http://localhost:3000/)

> Este posibil să pornești automat site-ul web împreună cu serverul Netuno, activând comanda corespunzătoare în `config/_development.json` — vezi [Configurare](/docs/academy/cluar/configuration#7-arranque-automático-do-website-opcional).

## Rezolvarea problemelor

### Eroare de versiune GLIBC la rularea `bun run dev`

Dacă apare o eroare ca aceasta la pornirea site-ului web:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Nu este vorba despre bug-ul dependențelor opționale npm menționat în mesaj, ci despre o **incompatibilitate de versiune GLIBC**: binarul nativ Rollup a fost compilat cerând `GLIBC_2.32` sau mai recent, iar distribuțiile Linux mai vechi (de exemplu, Ubuntu 20.04, care vine cu glibc 2.31) nu îl au disponibil.

Pentru a rezolva, forțează Rollup să folosească versiunea WASM în locul celei native, adăugând un câmp `overrides` în rădăcina `package.json` al site-ului web:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Apoi, reinstalează dependențele:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Următorul pas

Cu proiectul pornit, explorează [Limbile](/docs/academy/cluar/languages) sau [șablonul de Pagini](/docs/academy/cluar/pages/overview).