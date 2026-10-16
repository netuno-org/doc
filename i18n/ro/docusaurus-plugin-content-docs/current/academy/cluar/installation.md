---
sidebar_position: 2
id: install
title: Instalare
sidebar_label: Instalare
---

## Cerințe

Înainte de a instala CLUAR, este necesar să aveți:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) instalat.
2. [Bun](https://bun.sh/docs/installation) instalat.

## Clonarea proiectului

CLUAR este o aplicație Netuno, prin urmare trebuie clonată în dosarul `apps` al instalării Netuno:

```
[directorul rădăcină al Netuno]/apps
```

Folosind comanda:

```
git clone https://github.com/netuno-org/cluar.git
```

## Instalarea site-ului (cu Bun)

În dosarul `website`:

```
cd website
```

Executați comanda de instalare Bun:

```
bun install
```

Este necesar să permiteți executarea scripturilor nesigure ESBUILD:

```
bun pm trust --all
```

Dacă trebuie să reiei instalarea site-ului, șterge dosarul `node_modules` și fișierele lock, apoi instalează din nou:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Următorul pas

Odată ce codul și dependențele sunt instalate, continuați cu [Configurare](/docs/academy/cluar/configuration).