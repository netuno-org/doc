---
sidebar_position: 2
id: server-commands-tips
title: Serwer, polecenia i wskazówki
sidebar_label: Serwer, polecenia i wskazówki
---

# Polecenia serwera

Dokumentacja referencyjna głównych poleceń Netuno. Uruchamiaj je w **terminalu**, z katalogu, w którym zainstalowano Netuno.

:::tip
Nie wiesz, jak dotrzeć do katalogu Netuno? Zapoznaj się z przewodnikiem po [Instalacji](/docs/get-started/installation).
:::

---

## Uruchomienie serwera

Uruchamia serwer z aplikacją `demonstracyjną`.

```bash
./netuno server
```

---

## Uruchomienie serwera z aplikacją

Uruchamia serwer z konkretną aplikacją określoną przez parametr `app`. Jeśli żadna nie zostanie podana, uruchomiona zostanie aplikacja demonstracyjna.

```bash
./netuno server app=APP_NAME
```

---

## Nowa aplikacja

Tworzy nową aplikację od podstaw, pytając o informacje i konfiguracje początkowe.

```bash
./netuno app
```

---

## Lista poleceń

Wyświetla listę wszystkich dostępnych poleceń i parametrów wraz z ich opisami.

```bash
./netuno help
```

---

## Statystyki wydajności

Przedstawia najnowsze informacje o wydajności, zapisane w `logs/stats-*`.

```bash
./netuno stats
```

---

## Aktualizacja do wersji stabilnej

Aktualizuje Netuno do najnowszej wersji stabilnej.

```bash
./install-stable
```

---

## Aktualizacja do wersji testowej

Aktualizuje Netuno do najnowszej wersji w fazie rozwoju.

```bash
./install-testing
```