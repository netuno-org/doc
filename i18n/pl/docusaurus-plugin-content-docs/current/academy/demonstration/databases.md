---
sidebar_position: 4
id: databases
title: Baza danych
---

# Baza danych

W tym etapie zapoznamy się z **bazą danych** utworzoną automatycznie na podstawie wcześniej zdefiniowanego formularza **Zadanie**.

Podczas tworzenia formularza **Zadanie** z polem **Nazwa**, Netuno utworzył w bazie danych tabelę `zadanie` z kolumną `nazwa`, zgodnie z nazwami zdefiniowanymi podczas tworzenia formularza.

**Nazwy techniczne** pól (na przykład `zadanie`, `nazwa`, `zadanie_id`) są używane w programowaniu i zapytaniach SQL i nie odpowiadają nazwom wyświetlanym w interfejsie.

## Zapytania

W tej sekcji wykonamy zapytania bezpośrednio w bazie danych za pomocą interfejsu zarządzania Netuno.

1. Przejdź do środowiska **Buduj**.
2. W menu kliknij **Zarządzanie > Zapytanie**.
3. W edytorze zapytań wklej i uruchom poniższe polecenia.

### Proste zapytania

Wyświetl tylko nazwę zadań:

```sql
SELECT nazwa
FROM zadanie;
```

Wyświetl wszystkie pola tabeli zadań:

```sql
SELECT *
FROM zadanie;
```

Wyświetl wszystkie pola tabeli rejestrów:

```sql
SELECT *
FROM rejestr;
```

Wyświetl wszystkie pola tabeli pracowników:

```sql
SELECT *
FROM pracownik;
```

Po kliknięciu **Uruchom** Netuno generuje tabelę wyników dla **każdego** polecenia oddzielonego średnikiem (`;`).  
Jest to przydatne, gdy chcesz wykonać kilka zapytań jednocześnie.

### Zapytanie z relacjami

Teraz wykonaj zapytanie łączące wszystkie tabele:

```sql
SELECT
  zadanie.nazwa,
  rejestr.poczatek,
  rejestr.koniec,
  pracownik.nazwa
FROM zadanie
INNER JOIN rejestr
  ON zadanie.id = rejestr.zadanie_id
INNER JOIN pracownik
  ON pracownik.id = rejestr.pracownik_id;
```

To zapytanie zwraca:

- Nazwę zadania.
- Początek i koniec każdego rejestru.
- Nazwę pracownika powiązanego z każdym rejestrem.

Pokazuje ono, jak relacje między tabelami pozwalają łączyć informacje z różnych encji aplikacji.

## Diagram

Aby w bardziej intuicyjny sposób zwizualizować strukturę bazy danych, użyj **Diagramu** Netuno.

1. Przejdź do środowiska **Buduj**.
2. W menu kliknij **Zarządzanie > Diagram**.

W Diagramie możesz:

- Powiększać lub pomniejszać widok.
- Wyeksportować diagram jako obraz.

Te działania są dostępne za pomocą przycisków po prawej stronie panelu diagramu.

Netuno automatycznie tworzy linie ze strzałkami relacji na podstawie konfiguracji **Linków** w polach (na przykład pól typu `select`, które wskazują na inne tabele).

## Dobre praktyki

Podczas modelowania bazy danych w Netuno stosuj następujące dobre praktyki:

- Używaj sufiksu `_id` w polach reprezentujących relacje, na przykład:
  - `zadanie_id`
  - `pracownik_id`
- Unikaj używania nazw tabel i pól w liczbie mnogiej, takich jak `zadania`, `rejestry` lub `pracownicy`.

Unikanie liczby mnogiej pomaga:

- Zachować krótsze i bardziej czytelne nazwy.
- Zmniejszyć niejednoznaczności podczas pisania zapytań.
- Ułatwić czytanie formularzy i diagramów, zwłaszcza gdy występuje wiele relacji.

:::tip Wzorzec nazewnictwa
Domyślnie zawsze używaj **nazw w liczbie pojedynczej** dla formularzy, tabel i pól.  
Przykłady: `zadanie`, `rejestr`, `pracownik`, `zadanie_id`, `pracownik_id`.
:::

## Następny krok

Przejdź do następnego etapu **Powiązywanie danych**, aby kontynuować pracę z aplikacją demonstracyjną.