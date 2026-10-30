---
sidebar_position: 4
id: execution
title: Uruchamianie
sidebar_label: Uruchamianie
---

Gdy projekt jest zainstalowany i skonfigurowany, nadszedł czas, aby go uruchomić.

## Uruchamianie serwera

W katalogu głównym Netuno uruchom:

```
./netuno server app=cluar
```

To uruchamia jednocześnie back-end i front-end.

> Pierwsze uruchomienie może potrwać dłużej ze względu na instalację zależności front-endu.

Domyślnie:

- Backoffice Netuno jest dostępny pod adresem [http://localhost:9000/](http://localhost:9000/)
- OpenAPI usług jest dostępne pod adresem [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Uruchamianie strony internetowej

Aby ręcznie uruchomić stronę internetową:

```
cd website
bun run dev
```

Domyślnie strona internetowa jest dostępna pod adresem [http://localhost:3000/](http://localhost:3000/)

> Można sprawić, aby strona internetowa uruchamiała się automatycznie razem z serwerem Netuno, włączając odpowiednie polecenie w `config/_development.json` — zobacz [Konfiguracja](/docs/academy/cluar/configuration#7-automatyczne-uruchamianie-witryny-opcjonalne).

## Rozwiązywanie problemów

### Błąd wersji GLIBC podczas uruchamiania `bun run dev`

Jeśli podczas uruchamiania strony internetowej pojawi się błąd podobny do tego:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

Nie chodzi o wspomniany w komunikacie błąd opcjonalnych zależności npm, lecz o **niezgodność wersji GLIBC**: natywny plik binarny Rollup został skompilowany z wymaganiem `GLIBC_2.32` lub nowszego, a starsze dystrybucje Linuksa (na przykład Ubuntu 20.04, które zawiera glibc 2.31) nie mają go dostępnego.

Aby to rozwiązać, wymuś używanie przez Rollup wersji WASM zamiast natywnej, dodając pole `overrides` w głównym pliku `package.json` strony internetowej:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Następnie zainstaluj ponownie zależności:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Następny krok

Gdy projekt działa, zapoznaj się z [Językami](/docs/academy/cluar/languages) lub [modelem stron](/docs/academy/cluar/pages/overview).