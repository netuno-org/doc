---
sidebar_position: 2
id: forms
title: Formularze
---

## Jak tworzyć formularze

Zarządzanie formularzami to obszar, w którym możesz tworzyć struktury danych swojej aplikacji i nimi zarządzać. Każdy utworzony tutaj formularz staje się interfejsem w backoffice do wprowadzania, edycji i przeglądania danych, a ponadto odpowiada tabeli w bazie danych.

Jest podzielony na dwa istotne i obowiązkowe kroki, wraz z krótkim omówieniem **grupowania formularzy** i **trybu diagramu**.

![Zarządzanie formularzami](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Tytuł formularza

To nazwa twojego formularza, więc wprowadź nazwę jasną i intuicyjną. 
Będzie ona wyświetlana w menu bocznym backoffice w następujących sekcjach: **Formularze** (w trybie wyświetlania) i **Zarządzaj polami** (w trybie budowania).

![Tytuł formularza](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Nazwa tabeli

To nazwa techniczna, która zostanie użyta do utworzenia odpowiedniej tabeli w bazie danych. Ta nazwa jest używana wewnętrznie przez system i przez deweloperów.

**Jak wypełnić:**

- **Ręcznie:** Wpisz unikalną nazwę w liczbie pojedynczej, małymi literami, bez spacji i znaków specjalnych (użyj formatu `snake_case`, na przykład: rejestracja_klienta).
- **Automatycznie:** Zaznacz opcję **Auto** obok pola. System automatycznie wygeneruje nazwę techniczną na podstawie **Tytułu formularza**. To zalecana praktyka zapewniająca spójność.
- 

![Nazwa tabeli](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Grupowanie formularzy (Nadrzędny)

To pole pozwala utworzyć hierarchię między formularzami. Wybierając „Nadrzędny”, określasz, że bieżący formularz jest podpozycją wybranego formularza. Będzie on wyświetlany w menu bocznym w następujących sekcjach: „Formularze” (w trybie wyświetlania) i „Zarządzaj polami” (w trybie budowania) powiązanego formularza głównego.

**Jak wypełnić:**

- Pozostaw puste, jeśli to ma być formularz główny (taki jak „Klient”).
- Wybierz istniejący formularz z listy, jeśli chcesz utworzyć relację zależności. Na przykład formularz „Adresy” mógłby mieć jako nadrzędny formularz „Klient”.

![Grupowanie formularzy (formularz nadrzędny)](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Opcje kontroli

Te pola wyboru włączają funkcje specyficzne dla formularza.

- **Pokaż ID:** Zaznacz tę opcję, jeśli chcesz, aby pole unikalnego identyfikatora (ID) każdego rekordu było widoczne na liście danych formularza.
- **Kontrola aktywności:** Włącza kontrolę statusu (Aktywny/Nieaktywny) dla każdego rekordu. Pozwala to dezaktywować element bez konieczności usuwania go z bazy danych.
- **Kontrola według użytkownika:** Sprawia, że każdy rekord utworzony w formularzu jest powiązany z użytkownikiem, który go utworzył. Jest przydatna do śledzenia, kto wykonał każdy wpis.
- **Kontrola według grupy:** Powiązuje każdy rekord z grupą użytkowników. Ta opcja jest często używana do zarządzania uprawnieniami dostępu do danych na podstawie grup zarejestrowanych w systemie.

![Opcje kontroli](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Ustawienia sortowania i powiązani użytkownicy

Te pola definiują wartości domyślne dla nowych rekordów oraz kolejność wyświetlania.

- **Zmień kolejność:** Ustaw liczbę określającą kolejność, w jakiej ten formularz będzie wyświetlany w menu bocznym. Mniejsze liczby (takie jak 0, 1, 2) pojawiają się pierwsze.
- **Użytkownik:** Wybierz domyślnego użytkownika, który będzie powiązany z nowymi rekordami, jeśli opcja „Kontrola według użytkownika” jest włączona. „Ogólny” oznacza, że nie ma określonego użytkownika.
- **Grupa:** Wybierz domyślną grupę, która będzie powiązana z nowymi rekordami, jeśli opcja „Kontrola według grupy” jest włączona. „Ogólna” oznacza, że nie ma określonej grupy.

![Ustawienia sortowania i powiązani użytkownicy](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Tryb diagramu

Ekran **Diagram** oferuje graficzną wizualizację całej struktury danych twojej aplikacji. Znany jako diagram związków encji (ERD), wyświetla wszystkie formularze (które reprezentują tabele w bazie danych), ich odpowiednie pola oraz połączenia między nimi.
To narzędzie jest kluczowe do szybkiego zrozumienia, jak informacje w twojej aplikacji są zorganizowane i połączone, ułatwiając analizę i rozwój.

![Diagram formularzy](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Spróbuj utworzyć wiele formularzy i pól, a następnie zobacz je w trybie diagramu!

## Następny krok

Zapisz formularz i przejdź do następnego kroku: tworzenia pól!

Zobacz [tutaj](/docs/academy/ui/fields), jak zacząć tworzyć pola.