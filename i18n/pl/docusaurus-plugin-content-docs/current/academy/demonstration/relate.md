---
sidebar_position: 5
id: relate
title: Powiązywanie danych
description: Powiąż zadania i wpisy czasu pracy, aby wiedzieć, kto wykonał które zadanie i ile czasu poświęcono.
---

# Powiązywanie danych

Utwórz relację między zadaniami a wpisami czasu pracy, aby wiedzieć, **kto** wykonał **które zadanie** i **ile czasu** poświęcono.

Na końcu tego etapu formularz **Wpis** będzie powiązany z tabelą **Zadanie**, co pozwoli wyświetlać powiązane zadanie bezpośrednio na liście wpisów.

## Wymagania wstępne

Przed rozpoczęciem sprawdź, czy masz już ukończone:

- Utworzenie formularza **Zadanie** z polem `nazwa`.
- Utworzenie formularza **Wpis** z podstawowymi polami przepracowanych godzin.
- Skonfigurowanie odpowiednich tabel w **Bazie danych**.

:::tip
Więcej szczegółów na temat powiązywania danych znajdziesz w [Przewodniku po interfejsie: Relacje](/docs/academy/ui/relationships-between-forms).
:::

Do tej pory utworzyłeś zarządzanie zadaniami i rejestr czasu pracy, ale każda lista nadal działa niezależnie.  

Ważne jest, aby je powiązać, tak aby każdy wpis czasu pracy jasno wskazywał, które zadanie zostało wykonane przez pracownika i w jakim okresie.

Na tym etapie:

- Utworzysz pole typu `select` w formularzu **Wpis**.
- Skonfigurujesz pole tak, aby było powiązane z tabelą **Zadanie**.
- Zaktualizujesz niektóre dane, aby zobaczyć relację w praktyce.

## Pole typu `select`

Dodaj pole, które pozwoli wybrać zadanie powiązane z każdym wpisem czasu pracy.

1. W środowisku **Buduj** otwórz formularz **Wpis** i przejdź do zarządzania polami.
2. Utwórz nowe pole z następującymi ustawieniami:
   - **Tytuł pola**: `Zadanie`
   - **Nazwa kolumny**: `zadanie_id`
   - **Typ**: `select`
3. Włącz opcję **Wymagane**, aby każdy wpis był powiązany z zadaniem.
4. Pozostaw opcję **Unikalne wartości** wyłączoną, ponieważ będzie wiele wpisów dla tego samego zadania.

:::note
Sugerujemy nazwę `zadanie_id`, aby zachować spójny standard nazewnictwa w całym modelu danych.
:::

## Stosowanie sufiksu `_id`

Nazwa pola odwołującego się do innego wpisu powinna kończyć się na `_id`.  
Ten wzorzec ułatwia rozpoznanie, że pole reprezentuje relację z inną tabelą, i sprawia, że model danych jest bardziej uporządkowany.

:::warning
Unikaj używania ogólnych nazw, takich jak `zadanie` lub `ref_zadanie`, dla pól relacji.  
Standaryzacja z `_id` pomaga uniknąć pomyłek podczas analizowania danych lub tworzenia integracji.
:::

## Konfigurowanie powiązania relacji

Skonfiguruj **Powiązanie**, które odpowiada za powiązanie pola `zadanie_id` z tabelą zadań.

1. W nowo utworzonym polu (`zadanie_id`) przewiń do sekcji konfiguracji **Powiązanie**.
2. Kliknij **Dodaj**.
3. W otwartym oknie:
   - Wybierz opcję **zadanie**.
   - Następnie wybierz pole **nazwa**.
   - Zamknij okno, aby zastosować.

Po zakończeniu **Powiązanie** zostanie zdefiniowane jako:

```text
zadanie:nazwa
```

To oznacza, że:

- Relacja zostanie utworzona z tabelą **zadanie**.
- W interfejsie będzie wyświetlana wartość pola **nazwa** zadania podczas wybierania w polu `Zadanie`.

Kliknij przycisk **Zapisz**, aby zapisać konfigurację pola.

:::tip
Gdy to możliwe, używaj pola opisowego (takiego jak `nazwa`) do wyświetlania powiązanej informacji zamiast identyfikatora technicznego lub numerycznego.
:::

## Aktualizowanie wpisów

Po skonfigurowaniu pola relacji dostosuj dane, aby zobaczyć wynik.

1. Przejdź do widoku formularza **Wpis**.
2. Zauważ, że tabela wyników ma teraz nową kolumnę o nazwie **Zadanie**, która początkowo będzie pusta.
3. Edytuj kilka wpisów:
   - Kliknij wiersz w tabeli wyników, aby otworzyć formularz edycji.
   - W polu **Zadanie** wybierz odpowiednie zadanie.
   - Kliknij **Zapisz**, aby zapisać.

**Po zapisaniu:**

- Kolumna **Zadanie** w tabeli wyników zacznie wyświetlać nazwę powiązanego zadania.
- Każdy **Wpis** będzie wyraźnie powiązany z **Zadaniem**, co pozwoli na pełniejszą analizę czasu poświęconego na każdą czynność.

:::note
Jeśli istnieje wiele wpisów bez zdefiniowanego zadania, rozważ aktualizację partiami lub tymczasowe zdefiniowanie zadania domyślnego, zgodnie z polityką danych.
:::

### Oczekiwany wynik

Lista **Wpis** powinna wyświetlać:

- Kolumnę **Zadanie** wypełnioną nazwami powiązanych zadań.
- Każdy wiersz reprezentujący wpis czasu pracy z przypisanym zadaniem, co ułatwia identyfikację, gdzie zainwestowano czas.

## Następne kroki

W następnym temacie zobaczysz, jak utworzyć **Usługę**, aby udostępnić te dane i wykorzystać je w innych częściach aplikacji, takich jak raporty lub niestandardowe interfejsy.