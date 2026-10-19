---
sidebar_position: 2
id: server-commands-tips
title: Server, Comandi & Suggerimenti
sidebar_label: Server, Comandi & Suggerimenti
---

# Comandi del Server

Riferimento dei principali comandi di Netuno. Eseguili nel **terminal**, dalla cartella in cui Netuno è installato.

:::tip
Non sai come raggiungere la cartella di Netuno? Consulta la guida all'[Installazione](/docs/get-started/installation).
:::

---

## Avvia il server

Avvia il server con l'applicazione `dimostrazione`.

```bash
./netuno server
```

---

## Avvia il server nell'APP

Avvia il server con l'applicazione specifica definita dal parametro `app`. Se non ne viene definita nessuna, verrà avviata l'applicazione dimostrativa.

```bash
./netuno server app=NOME_APP
```

---

## Nuova Applicazione

Crea una nuova applicazione da zero, richiedendo informazioni e configurazioni iniziali.

```bash
./netuno app
```

---

## Elenca i Comandi

Elenca tutti i comandi e le parametrizzazioni disponibili con le rispettive descrizioni.

```bash
./netuno help
```

---

## Statistiche delle Prestazioni

Presenta le informazioni sulle prestazioni più recenti, memorizzate in `logs/stats-*`.

```bash
./netuno stats
```

---

## Aggiornamento alla Versione Stabile

Aggiorna Netuno alla versione stabile più recente.

```bash
./install-stable
```

---

## Aggiornamento alla Versione in Test

Aggiorna Netuno alla versione più recente in sviluppo.

```bash
./install-testing
```