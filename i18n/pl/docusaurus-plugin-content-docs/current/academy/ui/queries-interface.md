---
sidebar_position: 4
id: queries-interface
title: Interfejs zapytań
---


Narzędzie Query w Netuno to potężna funkcja, która umożliwia bezpośrednią interakcję z bazą danych aplikacji za pomocą SQL (Structured Query Language).

Ta funkcjonalność jest niezbędna do testowania logiki biznesowej, walidowania przechowywanych informacji oraz tworzenia podstaw dla raportów lub złożonych komponentów interfejsu. Netuno obsługuje obecnie trzy systemy zarządzania bazami danych: **PostgreSql, H2 Database i MySQL**.

## 1 - Sekcja Zapytań

W trybie „Buduj”, w menu bocznym, przejdź do obszaru „Zarządzanie” i kliknij sekcję „Zapytania”.

![Interfejs zapytań](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Obszar poleceń

Ten obszar to środowisko bezpośredniej interakcji z bazą danych projektu. Można tu wykonywać polecenia, aby precyzyjnie i natychmiast przeszukiwać, pobierać i analizować dane.

Upewnij się, że używana składnia jest zgodna z bazą danych skonfigurowaną w Twoim środowisku Netuno.

![Obszar zapytań do bazy danych](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Obszar walidacji

Obszar walidacji dostarcza natychmiastowych informacji zwrotnych na temat składni i wykonania kodu.

- **Sukces (zielony):** Gdy zapytanie zostanie wykonane bez błędów składniowych lub strukturalnych, komunikat jest wyświetlany na zielonym tle. Oznacza to, że dane zostały przetworzone i są gotowe do wyświetlenia.

![Obszar walidacji — sukces](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Niepowodzenie lub błąd (czerwony):** Jeśli wystąpi jakakolwiek przeszkoda w wykonaniu (np. błąd składni, nieprawidłowa nazwa kolumny lub brak uprawnień), komunikat zostanie wyświetlony na czerwonym tle. Oprócz koloru system przedstawi techniczny dziennik błędu, aby ułatwić diagnozę.

![Obszar walidacji — błąd](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Obszar wyników

To miejsce, w którym informacje żądane od bazy danych są prezentowane w uporządkowanej formie. Pozwala zobaczyć zawartość tabel i potwierdzić, czy logika zapytania zwraca oczekiwane rekordy.

![Obszar wyników](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Przyciski akcji

Ta sekcja opisuje narzędzia dostępne do wykonywania, zapisywania i zarządzania skryptami SQL, optymalizując przepływ pracy i ponowne wykorzystywanie złożonych zapytań.

Umożliwia nie tylko wykonywanie poleceń w czasie rzeczywistym, ale także inteligentne zarządzanie produktywnością za pomocą historii i bibliotek zapisanych skryptów.

![Przyciski akcji](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Przycisk - Wykonaj

- **Funkcja:** Wysyła skrypt znajdujący się w obszarze „Polecenia” do przetworzenia przez bazę danych.

- **Informacja zwrotna:** Po wykonaniu system wyświetla komunikat o sukcesie (na zielono) i automatycznie wypełnia „Obszar wyników” żądanymi danymi.

### 5.2 Przycisk - Historia

- **Funkcja:** Rejestruje ostatnio wykonane zapytania, wyświetlając czas wykonania (w milisekundach) oraz zapis „data/godzina” dla każdej akcji.

- **Szybkie odzyskiwanie:** Po kliknięciu dowolnego wpisu na liście historii odpowiedni skrypt zostaje ponownie wstawiony do obszaru „Polecenia”, aby można go było wykonać lub edytować.

![Przycisk historii poleceń](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Przycisk - Zapisz

**Funkcja:** Pozwala przechowywać przydatne skrypty i przekształcać je w stałe szablony. Jest to przydatne w przypadku złożonych zapytań, które trzeba często wykonywać.

**Krok po kroku, jak zapisać:**

- Gdy skrypt jest gotowy w edytorze, kliknij Zapisz.

- W oknie modalnym „Zapisz polecenie” wprowadź czytelną „Nazwę”, aby zidentyfikować funkcję zapytania (np. „Filtruj produkty według ceny”).

- Kliknij przycisk Zapisz w oknie modalnym, aby potwierdzić zapis.

![Przycisk zapisywania polecenia](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Przycisk - Rejestr

**Funkcja:** Pozwala wyświetlić listę wszystkich wcześniej zapisanych skryptów.

- **Wczytaj skrypt:** Kliknij żądany skrypt, aby dodać go do obszaru „Polecenia”.

- **Usuń:** Użyj ikony kosza obok każdego wpisu, aby trwale go usunąć po potwierdzeniu.

![Przycisk zarejestrowanych poleceń](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)