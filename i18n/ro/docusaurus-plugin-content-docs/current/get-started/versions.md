---
sidebar_position: 4
id: versions
title: Versiuni
sidebar_label: Versiuni
---


# Versiuni

Dacă abia începi să folosești Netuno, îți recomandăm să efectuezi **instalarea standard** pentru a te asigura că utilizezi cea mai recentă și stabilă versiune a platformei.

Netuno permite de asemenea instalarea unor versiuni anterioare specifice sau a unor versiuni experimentale aflate încă în dezvoltare, utile pentru medii de testare sau pentru reproducerea erorilor.

Înainte de a instala sau actualiza la o versiune specifică, consultă lista oficială de versiuni:

- **Lista de versiuni:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Sfat
Verifică notele versiunii înainte de a instala o versiune specifică, în special în mediile de producție.
:::

## Instalarea unei versiuni specifice

Pentru a instala sau actualiza Netuno la o versiune specifică, adaugă parametrul `version` la comanda de instalare, împreună cu identificatorul versiunii dorite.

Alege metoda care se potrivește cel mai bine mediului tău:

### Metoda 1: Instalator Java

Folosește această metodă pentru instalări noi:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Metoda 2: Executor principal

Folosește această metodă dacă Netuno este deja instalat și vrei să actualizezi la o versiune specifică:

```bash
./netuno install version=20230417.0119
```

### Metoda 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Înlocuiește `20230417.0119` cu identificatorul versiunii dorite, disponibil în **[lista de versiuni](https://github.com/netuno-org/platform/releases)**.

După executarea comenzii, Netuno va începe automat procesul de instalare a versiunii indicate.
:::