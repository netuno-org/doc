---
sidebar_position: 2
id: server-commands-tips
title: Server, Commando's & Tips
sidebar_label: Server, Commando's & Tips
---

# Servercommando's

Referentie van de belangrijkste Netuno-commando's. Voer ze uit in de **terminal**, vanuit de map waarin Netuno is geïnstalleerd.

:::tip
Weet u niet hoe u bij de Netuno-map komt? Raadpleeg de handleiding [Installatie](/docs/get-started/installation).
:::

---

## De server starten

Start de server met de `demonstratie`-applicatie.

```bash
./netuno server
```

---

## De server in de APP starten

Start de server met de specifieke applicatie die is gedefinieerd door de parameter `app`. Als er geen is gedefinieerd, wordt de demo-applicatie gestart.

```bash
./netuno server app=APP_NAAM
```

---

## Nieuwe applicatie

Maakt een nieuwe applicatie vanaf nul aan en vraagt om initiële informatie en configuraties.

```bash
./netuno app
```

---

## Commando's weergeven

Toont alle beschikbare commando's en parameters met de bijbehorende beschrijvingen.

```bash
./netuno help
```

---

## Prestatiestatistieken

Toont de meest recente prestatie-informatie, opgeslagen in `logs/stats-*`.

```bash
./netuno stats
```

---

## Bijwerken naar de stabiele versie

Werkt Netuno bij naar de meest recente stabiele versie.

```bash
./install-stable
```

---

## Bijwerken naar de testversie

Werkt Netuno bij naar de meest recente versie in ontwikkeling.

```bash
./install-testing
```