---
sidebar_position: 5
id: relationships-between-forms
title: Relacje między formularzami
sidebar_label: Relacje
---

## Jak tworzyć relacje między formularzami

Tworzenie relacji między formularzami to kluczowa funkcja pozwalająca inteligentnie organizować informacje. Łącząc formularze, eliminujesz potrzebę duplikowania danych i zapewniasz, że Twoja aplikacja jest spójna, skalowalna i łatwa w utrzymaniu.

Jedną z dużych zalet Netuno jest możliwość automatycznego generowania diagramu modelu danych.

Relacje określają, w jaki sposób dane z różnych tabel oddziałują na siebie. To połączenie przekłada się bezpośrednio na interfejs użytkownika (UI), pozwalając polom jednego formularza automatycznie pobierać informacje z innego.

**Diagram prosty:** Idealny do walidacji wstępnej logiki małych modułów.

![Prosty diagram szablonu](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Diagram złożony:** Pokazuje solidność narzędzia w aplikacjach na dużą skalę, mapując wiele zależności i przepływów danych.
 
![Złożony diagram szablonu](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Tworzenie pola relacyjnego typu Select

Pole Select tworzy relację między dwoma formularzami. Pozwala wybrać wartość z listy rozwijanej (dropdown) zamiast wpisywać ją ręcznie. Ta lista jest wypełniana danymi, które już istnieją w innym formularzu.

Jako przykładu użyjemy formularzy **Pojazd** i **Kolor**. 

**Kiedy używać?** Użyj pola select, gdy masz relację typu „wiele do jednego” (N-1).

**Przykład:** Wiele pojazdów może mieć jeden kolor. Zamiast wpisywać „Niebieski” za każdym razem, wybierasz „Niebieski” z listy już zarejestrowanych kolorów.

- **Formularz docelowy:** Pojazd (w nim utworzymy pole select).
- **Formularz źródłowy:** Kolor (z niego pochodzą dane listy kolorów).


### Wymagania
Przed rozpoczęciem upewnij się, że:

- Oba formularze (**Pojazd** i **Kolor**) są już utworzone w Netuno. Aby uzyskać więcej szczegółów, zapoznaj się z naszym przewodnikiem dotyczącym [tworzenia formularzy](/docs/academy/ui/forms).

- Formularz źródłowy (**Kolor**) ma już kilka zarejestrowanych rekordów (np. „Niebieski”, „Czerwony”, „Srebrny”). Aby uzyskać więcej szczegółów, zapoznaj się z naszym przewodnikiem dotyczącym [tworzenia pól](/docs/academy/ui/fields).

### Tworzenie i konfiguracja pola Select

Dodaj typ pola **select** w formularzu **Pojazd**, aby mógł „pobierać” dane z formularza **Kolor**.

![Utwórz i skonfiguruj pole select](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Otwórz formularz docelowy

- W Backoffice przejdź do zarządzania polami i otwórz edycję formularza **Pojazd**.
 
#### 2 - Utwórz nowe pole

- Kliknij „Utwórz nowe pole”.

#### 3 - Zdefiniuj tytuł i nazwę kolumny

- **Tytuł pola:** Nadaj przyjazną nazwę, która będzie widoczna dla użytkownika. **Przykład:** Kolor samochodu.
- **Nazwa kolumny:** To techniczna nazwa pola w bazie danych.

**Dobra praktyka:** Tworząc pole relacyjne, zawsze używaj sufiksu `_id` w **Nazwie kolumny**. Dzięki temu jasne jest, że kolumna nie przechowuje tekstu „Niebieski”, lecz identyfikator referencyjny rekordu „Niebieski” w formularzu **Kolor**. **Przykład:** `kolor_samochodu_id`.

#### 4 - Wybierz typ danych

- W polu **Typ** wybierz z listy opcję _`select - select`_.

#### 5 - Skonfiguruj link (relację)

![Skonfiguruj link](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- Po wybraniu _`select`_ wyświetli się nowe pole o nazwie **Link**.
- Kliknij przycisk **Konfiguruj**.
- Otworzy się modal z listą wszystkich formularzy. To moment, aby wybrać formularz źródłowy.
- Wybierz formularz zawierający dane, które chcesz wyświetlić na liście. W naszym przykładzie kliknij **kolor - Kolor**.
- Po wybraniu kliknij przycisk **Zamknij** w modalu.

#### 6 - Zapisz zmiany

- Kliknij przycisk **Zapisz** w zarządzaniu polami, aby zastosować wszystkie ustawienia.

### Wynik

Gotowe! Teraz w trybie „podglądu”, gdy dodajesz lub edytujesz rekord w formularzu **Pojazd**, pole „Kolor samochodu” będzie listą rozwijaną (dropdown) pokazującą wszystkie kolory zarejestrowane w formularzu Kolor.

## Tworzenie pola relacyjnego typu Multiselect

Pole **Multiselect** tworzy relację „wiele do wielu” (N-M). Pozwala wybrać wiele elementów z listy w jednym polu.

Jako przykładu użyjemy formularzy **Osoba**, **Funkcja** i **Osoba-Funkcja**.

**Kiedy używać?** Użyj pola multiselect, gdy rekord może być powiązany z wieloma innymi rekordami i odwrotnie.
**Przykład:** Wiele osób może mieć wiele funkcji.

- Osoba (np. „Anna”) może mieć funkcje „Administrator” i „Menedżer”.
- Funkcja „Menedżer” może być przypisana do wielu osób (np. „Anna”, „Bruno” i „Tomasz”).

Aby to działało, potrzebujemy trzech formularzy:

- **Formularz nadrzędny (Osoba):** W nim pole _`multiselect`_ będzie widoczne dla użytkownika.
- **Formularz źródłowy (Funkcja):** Z niego pochodzą opcje listy (np. „Administrator”, „Menedżer”).
- **Formularz łączący (Osoba-Funkcja):** Formularz „pomostowy”, który przechowuje powiązania między **Osobą** a **Funkcją**.

### Wymagania
Przed rozpoczęciem upewnij się, że:

- Formularz nadrzędny (**Osoba**) jest już utworzony i ma kilka rekordów (np. „Anna”, „Bruno”, „Łukasz”).
- Formularz źródłowy (**Funkcja**) jest już utworzony i ma kilka rekordów (np. „Administrator”, „Menedżer”, „Konsultant”).

### Tworzenie i konfiguracja pola Multiselect 
Konfiguracja odbywa się w 4 krokach:

### Krok 1: utwórz formularz łączący (Osoba-Funkcja)
Najpierw utwórzmy formularz „pomostowy”.

1 - **Przejdź do Zarządzanie > Formularze** i kliknij „Utwórz nowy formularz”.

2 - **Tytuł formularza:** Osoba-Funkcja.

3 - **Nazwa tabeli:** osoba_funkcja (lub podobna).

4 - **Ważne:** W polu **Nadrzędny** wybierz główny formularz nadrzędny, którym w tym przypadku jest **Osoba**. To sprawia, że **Osoba-Funkcja** staje się podformularzem.

5 - Kliknij **Zapisz**.

![Utwórz formularz nadrzędny dla formularza łączącego](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Krok 2: skonfiguruj pola formularza łączącego

Dodaj pola „pomostowe” do formularza Osoba-Funkcja.

1 - Przejdź do zarządzania polami formularza Osoba-Funkcja, który właśnie utworzyłeś.

2 - Dodaj dwa pola typu select: jedno wskazujące na Osobę, a drugie na Funkcję.

**Pole 1 (link do osoby):**

![Pole linku do osoby](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Tytuł pola:** Nazwa osoby
- **Nazwa kolumny:** `nazwa_osoby_id` (zgodnie z konwencją **_id**)
- **Typ:** `select - select`
- **Link:** Kliknij **Konfiguruj** i wybierz główne pole formularza **Osoba**, na przykład: `osoba:nazwa`.
- Kliknij **Zapisz**.

**Pole 2 (link do funkcji):**

- **Tytuł pola:** Funkcja osoby. 
- **Nazwa kolumny:** `funkcja_osoby_id`.
- **Typ:** `select - select`.
- **Link:** Kliknij **Konfiguruj** i wybierz główne pole formularza **Funkcja**, na przykład: `funkcja:funkcja_id`.
- Kliknij **Zapisz**.

![Pole linku do funkcji osoby](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Krok 3: utwórz pole multiselect w formularzu „nadrzędnym”

Gdy „pomost” (**Osoba-Funkcja**) jest gotowy, możemy wrócić do formularza **Osoba**, aby utworzyć końcowe pole.

1 - Przejdź do zarządzania polami formularza **Osoba**.

2 - Kliknij „Utwórz nowe pole”.

3 - **Tytuł pola:** Funkcje osoby.

4 - **Nazwa kolumny:** _`osoba_funkcja_id`_.

5 - **Typ:** _`multiselect - multiselect`_.


### Krok 4: skonfiguruj pole multiselect

Po wybraniu typu _`multiselect`_ pojawią się dwa nowe pola konfiguracji: **Referencja** i **Link**.

#### 1 - Referencja (Gdzie zapisać relację?)

 - **To pole mówi Netuno:** „Które pole formularza łączącego odnosi się z powrotem do mnie (**Osoba**)?”
 - Kliknij **Konfiguruj**.
 - Wybierz formularz łączący (**Osoba-Funkcja**) i pole utworzone w kroku 2 (Pole 1). **Przykład:** _`osoba_funkcja:nazwa_osoby_id`_.

#### 2 - Link (Skąd pochodzą opcje?)

 - **To pole mówi:** „Które pole formularza łączącego odnosi się do opcji (**Funkcja**)?”
 - Kliknij **Konfiguruj**.
 - Wybierz formularz łączący (**Osoba-Funkcja**) i pole utworzone w kroku 2 (Pole 2). **Przykład:** _`osoba_funkcja:funkcja_osoby_id`_.
  
#### 3 - Zapisz zmiany

- Kliknij przycisk **Zapisz** w zarządzaniu polami, aby zastosować wszystkie ustawienia.

![Skonfiguruj pole multiselect](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Wynik

Gotowe! Teraz w trybie „podglądu”, podczas dodawania lub edycji rekordu w formularzu **Osoba**, pole „Funkcje osoby” będzie wyświetlane jako pole wielokrotnego wyboru. Będziesz mógł wybrać wiele funkcji z listy (pochodzących z formularza **Funkcja**), a Netuno automatycznie zapisze te powiązania w formularzu **Osoba-Funkcja**.

W razie pytań skontaktuj się z nami przez społeczność i inne kanały dostępne na dole tej strony.

Udanej pracy!