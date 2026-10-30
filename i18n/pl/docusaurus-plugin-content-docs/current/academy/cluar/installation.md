---
sidebar_position: 2
id: install
title: Instalacja
sidebar_label: Instalacja
---

## Wymagania

Przed zainstalowaniem CLUAR należy mieć:

1. Zainstalowany [Netuno](https://doc.netuno.org/pt/docs/get-started/installation).
2. Zainstalowany [Bun](https://bun.sh/docs/installation).

## Klonowanie projektu

CLUAR jest aplikacją Netuno, dlatego należy sklonować go do folderu `apps` w instalacji Netuno:

```
[katalog główny Netuno]/apps
```

Za pomocą polecenia:

```
git clone https://github.com/netuno-org/cluar.git
```

## Instalacja strony internetowej (z Bun)

Wewnątrz folderu `website`:

```
cd website
```

Wykonaj polecenie instalacji Bun:

```
bun install
```

Konieczne jest zezwolenie na uruchamianie niezaufanych skryptów ESBUILD:

```
bun pm trust --all
```

Jeśli musisz ponownie uruchomić instalację strony internetowej, usuń folder `node_modules` oraz pliki blokad i zainstaluj ponownie:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Następny krok

Mając kod i zależności zainstalowane, przejdź do [Konfiguracji](/docs/academy/cluar/configuration).