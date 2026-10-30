---
sidebar_position: 2
id: install
title: Installatie
sidebar_label: Installatie
---

## Vereisten

Voordat je CLUAR installeert, heb je het volgende nodig:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) geïnstalleerd.
2. [Bun](https://bun.sh/docs/installation) geïnstalleerd.

## Het project klonen

CLUAR is een Netuno-app en moet daarom worden gekloond in de map `apps` van de Netuno-installatie:

```
[hoofdmap van Netuno]/apps
```

Met het commando:

```
git clone https://github.com/netuno-org/cluar.git
```

## De website installeren (met Bun)

Ga naar de map `website`:

```
cd website
```

Voer het installatiecommando van Bun uit:

```
bun install
```

Het is nodig om de uitvoering van niet-vertrouwde scripts van ESBUILD toe te staan:

```
bun pm trust --all
```

Als je de installatie van de website opnieuw moet starten, verwijder je de map `node_modules` en de lock-bestanden, en installeer je opnieuw:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Volgende stap

Met de code en de afhankelijkheden geïnstalleerd, ga je verder naar de [Configuratie](/docs/academy/cluar/configuration).