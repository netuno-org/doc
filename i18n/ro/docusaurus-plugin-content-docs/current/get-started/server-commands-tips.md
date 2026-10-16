---
sidebar_position: 2
id: server-commands-tips
title: Server, Comenzi & Sfaturi
sidebar_label: Server, Comenzi & Sfaturi
---

# Comenzi server

Referință pentru principalele comenzi Netuno. Executați-le în **terminal**, din folderul unde Netuno este instalat.

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

Pornește serverul cu aplicația specifică definită de parametrul `app`. Dacă nu este definită niciuna, va fi pornită aplicația demonstrativă.

```bash
./netuno server app=NUME_APP
```

---

## Aplicație nouă

Creează o aplicație nouă de la zero, solicitând informații și configurații inițiale.

```bash
./netuno app
```

---

## Listare comenzi

Listează toate comenzile și parametrizările disponibile cu descrierile respective.

```bash
./netuno help
```

---

## Statistici de performanță

Afișează cele mai recente informații de performanță, stocate în `logs/stats-*`.

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