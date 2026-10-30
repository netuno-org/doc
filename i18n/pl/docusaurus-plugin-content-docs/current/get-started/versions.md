---
sidebar_position: 4
id: versions
title: Wersje
sidebar_label: Wersje
---


# Wersje

Jeśli dopiero zaczynasz korzystać z Netuno, zalecamy wykonanie **standardowej instalacji**, aby zapewnić korzystanie z najnowszej i stabilnej wersji platformy.

Netuno umożliwia również instalację konkretnych wcześniejszych wersji lub wersji eksperymentalnych będących jeszcze w fazie rozwoju, co jest przydatne w środowiskach testowych lub do odtwarzania błędów.

Przed instalacją lub aktualizacją do konkretnej wersji zapoznaj się z oficjalną listą wydań:

- **Lista wersji:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Wskazówka
Przed instalacją konkretnej wersji sprawdź informacje o wydaniu, szczególnie w środowiskach produkcyjnych.
:::

## Instalacja konkretnej wersji

Aby zainstalować lub zaktualizować Netuno do konkretnej wersji, dodaj parametr `version` do polecenia instalacji wraz z identyfikatorem żądanej wersji.

Wybierz metodę najlepiej dopasowaną do swojego środowiska:

### Metoda 1: Instalator Java

Użyj tej metody w przypadku nowych instalacji:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Metoda 2: Główny wykonawca

Użyj tej metody, jeśli Netuno jest już zainstalowane i chcesz zaktualizować je do konkretnej wersji:

```bash
./netuno install version=20230417.0119
```

### Metoda 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Zastąp `20230417.0119` identyfikatorem żądanej wersji dostępnym w **[liście wydań](https://github.com/netuno-org/platform/releases)**.

Po wykonaniu polecenia Netuno automatycznie rozpocznie proces instalacji wskazanej wersji.
:::