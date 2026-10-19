---
sidebar_position: 6
id: groups-users
title: Grupy i użytkownicy
---

## Tworzenie i edycja

Ta sekcja to centrum administracyjne Twojej aplikacji. Tutaj zarządzasz poświadczeniami, poziomami uprawnień i audytujesz działania wykonywane w systemie, zapewniając, że każdy użytkownik ma dostęp dokładnie do tego, czego potrzebuje.

#### Wymagania
- **Dostęp do Netuno:** Konieczne jest zalogowanie się do swojej instancji i posiadanie uprawnień **Administratora**.
- **Utworzona aplikacja:** Konieczne jest wcześniejsze utworzenie aplikacji. Dowiedz się więcej: [Przewodnik po interfejsie: Tworzenie aplikacji](/docs/academy/app-create).
- **Formularze:** Miej utworzony co najmniej jeden lub dwa formularze. Dowiedz się więcej: [Przewodnik po interfejsie: Tworzenie formularza](/docs/academy/ui/forms).

### Menu

Umożliwia dostęp do ustawień zarządzania bezpieczeństwem, użytkownikami, grupami i monitorowaniem logów.

![Menu dostępu](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Przejdź do „trybu podglądu” i kliknij „Developer” w prawym górnym rogu ekranu.

## Hasło

Umożliwia zmianę hasła dostępu do systemu.

Po kliknięciu „Developer” w prawym górnym rogu ekranu przejdź do sekcji „Hasło”.

- Wpisz swoje stare hasło.
- Wpisz nowe hasło. **Musi mieć co najmniej 8 znaków, w tym cyfry, wielkie i małe litery oraz znaki specjalne.**
- Potwierdź hasło i kliknij przycisk **Zapisz**.
- Po tej operacji wyświetli się komunikat o powodzeniu.

![Hasło](/docs/assets/academy/ui/groups-users/password-pt.png)

## Użytkownik

Ta sekcja to centrum sterowania do zarządzania profilami użytkowników.

Po kliknięciu „Developer” w prawym górnym rogu ekranu przejdź do sekcji „Użytkownik”.

#### Wymagania

- Użytkownik przeznaczony do edycji musi być wcześniej zarejestrowany w bazie danych.

### 1 - Edycja istniejącego użytkownika

W tej sekcji opisano, jak znaleźć i zaktualizować informacje o użytkowniku, który jest już zarejestrowany w systemie.

![Edycja istniejącego użytkownika](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Jak edytować użytkownika:**

- Wybierz zarejestrowanego użytkownika i zmień wybrane informacje.
- Kliknij przycisk **Zapisz**, aby potwierdzić zmianę.
- Po tej operacji wyświetli się komunikat o powodzeniu.

### 2 - Dodawanie nowego użytkownika

Ta sekcja umożliwia rejestrowanie nowych użytkowników poprzez określenie ich danych dostępowych i poziomów uprawnień w systemie.

![Tworzenie nowego użytkownika](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Imię i nazwisko:** Wpisz imię i nazwisko użytkownika.
- **Użytkownik:** Wpisz nazwę do logowania — powinna zawierać wyłącznie małe litery rozdzielone kropką.
- **Hasło:** Wpisz pierwsze hasło dostępu nowego użytkownika do systemu.
- **E-mail:** Wpisz adres e-mail do kontaktu.
- **Brak:** Umożliwia zablokowanie hasła użytkownika, aby uniemożliwić logowanie.
- **Grupa:** Wybierz główną grupę, do której należy użytkownik.
- **Aktywny:** Umożliwia aktywowanie lub dezaktywowanie użytkownika w systemie.
- **Przycisk Zapisz:** Kliknij, aby zapisać informacje o nowym użytkowniku.

### 3 - Uprawnienia użytkownika

Zarządzanie uprawnieniami odbywa się przez intuicyjny interfejs zorganizowany w zakładki **(Formularze i Raporty)**.

Pozwala to szczegółowo skonfigurować, do czego użytkownik może mieć dostęp zaraz po utworzeniu lub podczas edycji.

W kolumnach **Odczyt, Zapis i Usuwanie** znajdziesz listę rozwijaną z różnymi poziomami zakresu:

- **Nic:** Użytkownik nie ma żadnych uprawnień do tej czynności.
- **Właściciel:** Użytkownik może wchodzić w interakcję wyłącznie z rekordami utworzonymi przez siebie.
- **Grupa:** Użytkownik może wchodzić w interakcję z rekordami utworzonymi przez dowolnego członka jego grupy.
- **Wszystko:** Pełne uprawnienia. Użytkownik ma dostęp do rekordów wszystkich użytkowników i grup.

#### Zakładka Formularze

W tej zakładce kontrolujesz interakcję użytkownika z modułami wprowadzania danych w aplikacji.

![Uprawnienia użytkownika do formularzy](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Dla każdego wymienionego formularza należy zdefiniować następujące parametry:

- **Aktywny:** Określa widoczność. Jeśli zaznaczono, formularz pojawi się w menu bocznym użytkownika.
- **Odczyt:** Ustala poziom uprawnień wyłącznie do przeglądania rekordów.
- **Zapis:** Określa, czy użytkownik ma uprawnienia do wprowadzania nowych danych lub edycji istniejących informacji.
- **Usuwanie:** Określa, czy użytkownik ma uprawnienia do usuwania rekordów z bazy danych.

#### Zakładka Raporty

Podobnie jak w przypadku formularzy, ta zakładka kontroluje dostęp do modułów przeglądania i wyodrębniania danych analitycznych.

![Uprawnienia użytkownika do raportów](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Aby raport był dostępny, opcja **Aktywny** musi być zaznaczona, aby użytkownik miał uprawnienia do przeglądania.

- **Zapisz:** Kliknij przycisk „Zapisz”, aby zapisać zmiany.

### 4 - Przyciski akcji

![Przyciski akcji](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Zapisz:** Zapisuje wszystkie wprowadzone zmiany.

 - **Wyczyść:** Czyści wszystkie pola formularza, przywracając stan początkowy „Dodawanie nowego użytkownika”.

 - **Wciel się:** Potężne narzędzie Netuno. Po zapisaniu uprawnień użytkownika i kliknięciu przycisku **„Wciel się”** można zobaczyć system dokładnie tak, jak będzie z niego korzystał zarejestrowany użytkownik. Jest to niezbędne do sprawdzenia, czy uprawnienia zostały poprawnie skonfigurowane.

 - **Usuń:** Trwale usuwa rekord użytkownika.

## Grupa

To centralny panel do zarządzania profilami dostępu w Netuno, umożliwiający wykonanie dwóch czynności: **„Dodaj”** nową grupę i **„Edytuj”** istniejącą grupę.

Grupa działa jak profil lub reguła dostępu, która określa, co każdy zbiór użytkowników może przeglądać lub wykonywać w systemie.

Zamiast konfigurować uprawnienia indywidualnie dla każdego użytkownika, definiujesz je w grupie i przypisujesz do niej użytkowników, zapewniając skalowalną i uporządkowaną administrację.

Po kliknięciu **„Developer”** w prawym górnym rogu ekranu przejdź do sekcji **„Grupa”**.

#### Wymagania

- **Dostęp administracyjny:** Konieczne jest posiadanie profilu z uprawnieniami administratora do tworzenia lub modyfikowania grup.

### Jak dodać nową grupę

![Dodawanie nowej grupy](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Znajdź sekcję „Dodaj”.
- **Nazwa:** Nadaj grupie jasną i opisową nazwę.
- **Zezwalaj na logowanie:** Zaznacz tę opcję, jeśli użytkownicy z tej grupy mają mieć możliwość logowania się do systemu.
- **Administrator:** Zaznacz tę opcję tylko wtedy, gdy użytkownicy z tej grupy mają pełny dostęp do systemu.
- **E-mail:** Wpisz adres e-mail do kontaktu dla grupy.
- **Aktywny:** Zaznacz tę opcję, aby aktywować ustawienia w systemie.
- **Przycisk Zapisz:** Kliknij, aby zapisać ustawienia grupy.
- **Przycisk Wyczyść:** Kliknij, aby wyczyścić wszystkie pola formularza.

### Jak edytować istniejącą grupę

![Edycja istniejącej grupy](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Wybierz zarejestrowaną grupę w polu „Edytuj istniejącą grupę” u góry strony.
- Kliknij pole wyboru „Wybierz grupę”.
- Wybierz z listy grupę, którą chcesz edytować.
- Poczekaj, aż dane grupy automatycznie wypełnią pola (Nazwa, E-mail i opcje).
- Wprowadź żądane zmiany i kliknij „Zapisz”.

## Historia rekordów

Ekran „Historia rekordów” to narzędzie logowania i audytu Twojej aplikacji.

Gdy użytkownik utworzy, edytuje lub usunie rekord w dowolnym formularzu, system zapisze „log” tej czynności.

Ta strona umożliwia przeszukiwanie i filtrowanie całej tej historii. Jest to niezbędne do:

 - **Bezpieczeństwo:** Monitorowanie podejrzanych lub nieautoryzowanych działań.

 - **Audyt:** Utrzymywanie rejestru zgodności wszystkich zmian danych.

 - **Diagnostyka:** Zrozumienie, w jaki sposób konkretny rekord osiągnął obecny stan. Przykład: „kto usunął tego klienta?”.

### Jak wyszukiwać w historii rekordów

![Historia rekordów](/docs/assets/academy/ui/groups-users/log-pt.png)

Wypełnij jedno lub więcej pól „Filtry”, aby znaleźć interesujące Cię wpisy logów, a następnie kliknij przycisk „Szukaj”.

- Przejdź do strony „Historia rekordów”.
- Wypełnij żądane filtry, aby ograniczyć wyszukiwanie. Nie trzeba wypełniać wszystkich pól. Przykład: aby zobaczyć wszystko, co użytkownik „Developer” zrobił dzisiaj:
- Wybierz „Developer” w polu Użytkownik.
- W polu Początek wybierz dzisiejszą datę i godzinę.
- W polu Koniec wybierz dzisiejszą datę i godzinę.
- Kliknij przycisk „Szukaj”.
- Wyniki (lista logów) zostaną wyświetlone pod formularzem wyszukiwania.

## Wyloguj

Kliknij „Wyloguj”, aby bezpiecznie zakończyć sesję w systemie.