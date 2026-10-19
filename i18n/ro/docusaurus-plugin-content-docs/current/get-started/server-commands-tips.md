---
sidebar_position: 2
id: server-commands-tips
title: Server, Comenzi & Sfaturi
sidebar_label: Server, Comenzi & Sfaturi
---

# Comenzile serverului

Referință pentru principalele comenzi Netuno. Executați-le în **terminal**, din folderul în care Netuno este instalat.

:::tip
Nu știți cum să ajungeți în folderul Netuno? Consultați ghidul de [Instalare](/docs/get-started/installation).
:::

---

## Pornirea serverului

Pornește serverul cu aplicația de `demonstrație`.

```bash
./netuno server
```

---

## Pornirea serverului în aplicație

Pornește serverul cu aplicația specifică definită de parametrul `app`. Dacă nu este definită niciuna, va fi pornită aplicația de demonstrație.

```bash
./netuno server app=NUME_APLICATIE
```

---

## Aplicație nouă

Creează o aplicație nouă de la zero, solicitând informații și configurații inițiale.

```bash
./netuno app
```

---

## Listarea comenzilor

Listează toate comenzile și parametrizările disponibile, împreună cu descrierile respective.

```bash
./netuno help
```

---

## Statistici de performanță

Prezintă cele mai recente informații de performanță, stocate în `logs/stats-*`.

```bash
./netuno stats
```

---

## Actualizare la versiunea stabilă

Actualizează Netuno la cea mai recentă versiune stabilă.

```bash
./install-stable
```

---

## Actualizare la versiunea de test

Actualizează Netuno la cea mai recentă versiune în dezvoltare.

```bash
./install-testing
```