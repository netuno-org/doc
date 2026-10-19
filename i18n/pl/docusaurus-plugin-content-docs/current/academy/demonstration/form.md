---
sidebar_position: 3
id: form
title: Formularz
---


# Formularz

W tym etapie demonstracji utworzysz formularz **Zadanie** i skonfigurujesz pierwsze pole danych.

:::info Odniesienie
Aby uzyskać bardziej szczegółowe wyjaśnienie dotyczące formularzy, zapoznaj się z [Przewodnikiem po interfejsie: Formularze](/docs/academy/ui/forms).
:::

## Cel

Po ukończeniu tego etapu będziesz mieć:

- Formularz o nazwie **Zadanie**.
- Powiązaną tabelę w bazie danych.
- Pole wymagane do przechowywania nazwy zadania.
- Interfejs gotowy do tworzenia, edycji, wyszukiwania i usuwania rekordów.

## Wymagania wstępne

Upewnij się, że:

- Aplikacja demonstracyjna została już utworzona.
- Etap konfiguracji został już ukończony.
- Jesteś w obszarze deweloperskim platformy.

## Utwórz formularz

1. W prawym górnym rogu kliknij **Zbuduj**.
2. W menu głównym przejdź do **Zarządzanie > Formularze**.
3. W polu **Tytuł formularza** wpisz `Zadanie`.
4. W polu **Nazwa tabeli** włącz opcję **Auto**.
5. Kliknij **Zapisz**.

:::note
- **Tytuł formularza** określa nazwę wyświetlaną w menu bocznym.
- **Nazwa tabeli** określa identyfikator techniczny używany w bazie danych.
:::

Po zapisaniu formularz **Zadanie** będzie dostępny w lewym menu bocznym.

## Utwórz pierwsze pole

Gdy formularz zostanie utworzony:

1. W menu bocznym kliknij **Zadanie**.
2. W polu **Nazwa wyświetlana** wpisz `Nazwa`.
3. Potwierdź, że nazwa techniczna została wygenerowana automatycznie małymi literami.
4. Włącz opcję **Klucz główny** (pole unikalne).
5. Włącz opcję **Niepuste** (pole wymagane).
6. W polu **Typ** wybierz `text`.
7. Kliknij **Zapisz**.

:::tip
- **Klucz główny** zapewnia unikalne wartości dla każdego rekordu.
- **Niepuste** sprawia, że wypełnienie jest wymagane.
- Typ `text` pozwala przechowywać zwykły tekst.
:::

## Sprawdź wynik

Otwórz obszar podglądu i potwierdź, że:

- Formularz **Zadanie** jest dostępny.
- Pole **Nazwa** jest wyświetlane do wypełnienia.
- Można utworzyć nowy rekord.
- Pole **Nazwa** jest wymagane.

:::info Oczekiwany wynik
Jeśli konfiguracja jest poprawna, formularz będzie gotowy do tworzenia, edycji, wyszukiwania i usuwania rekordów.
:::

## Następne kroki

Przejdź do następnego etapu **Baza danych**, aby poznać i zmodyfikować aplikację demonstracyjną.