---
sidebar_position: 2
id: install
title: Instalare
sidebar_label: Instalare
---

## Cerințe

Înainte de a instala CLUAR, este necesar să ai:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) instalat.
2. [Bun](https://bun.sh/docs/installation) instalat.

## Clonarea proiectului

CLUAR este o aplicație Netuno, prin urmare trebuie clonată în directorul `apps` al instalării Netuno:

```
[directorul rădăcină al Netuno]/apps
```

Folosind comanda:

```
git clone https://github.com/netuno-org/cluar.git
```

## Instalarea site-ului web (cu Bun)

În interiorul directorului `website`:

```
cd website
```

Execută comanda de instalare a Bun:

```
bun install
```

Este necesar să permiți executarea scripturilor nesigure ale ESBUILD:

```
bun pm trust --all
```

Dacă ai nevoie să repornești instalarea site-ului web, șterge directorul `node_modules` și fișierele lock, apoi instalează din nou:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Pasul următor

Cu codul și dependențele instalate, treci la [Configurare](/docs/academy/cluar/configuration).