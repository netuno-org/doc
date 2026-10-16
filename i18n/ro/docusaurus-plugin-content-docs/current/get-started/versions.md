---
sidebar_position: 4
id: versions
title: Versiuni
sidebar_label: Versiuni
---


# Versiuni

Dacă începeți să utilizați Netuno, vă recomandăm să efectuați **instalarea standard** pentru a asigura utilizarea versiunii celei mai recente și stabile a platformei.

Netuno permite, de asemenea, instalarea anumitor versiuni anterioare specifice sau a versiunilor experimentale încă în dezvoltare, utile pentru medii de testare sau reproducerea erorilor.

Înainte de a instala sau actualiza la o versiune specifică, consultați lista oficială de versiuni:

- **Lista de Versiuni:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Sfat
Verificați notele de lansare înainte de a instala o versiune specifică, în special în mediile de producție.
:::

## Instalarea unei Versiuni Specifice

Pentru a instala sau actualiza Netuno la o versiune specifică, adăugați parametrul `version` la comanda de instalare împreună cu identificatorul versiunii dorite.

Alegeți metoda care se potrivește cel mai bine mediului dvs.:

### Metoda 1: Instalator Java

Utilizați această metodă pentru instalări noi:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Metoda 2: Executor Principal

Utilizați această metodă dacă Netuno este deja instalat și doriți să actualizați la o versiune specifică:

```bash
./netuno install version=20230417.0119
```

### Metoda 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Înlocuiți `20230417.0119` cu identificatorul versiunii dorite, disponibil în **[lista de versiuni](https://github.com/netuno-org/platform/releases)**.

După executarea comenzii, Netuno va începe automat procesul de instalare a versiunii indicate.
:::