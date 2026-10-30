---
sidebar_position: 3
id: fields
title: Pola
---



Pola to podstawowe komponenty i „klocki budulcowe” formularza w Netuno. Reprezentują interfejs interakcji z użytkownikiem i określają, w jaki sposób dane będą strukturyzowane i przechowywane.

W praktyce każde utworzone pole odpowiada kolumnie w tabeli bazy danych, określając typ informacji, które system może przetwarzać — takie jak teksty, liczby, daty, selekcje i pliki.

### Tworzenie i edycja pól

Te przyciski pozwalają zarządzać ogólnym stanem edycji:

- **Edytuj istniejące pole:** Menu rozwijane do wyboru już utworzonego pola i modyfikacji jego ustawień.

- **Utwórz nowe pole:** Czyści wszystkie pola formularza, aby rozpocząć konfigurację nowego elementu od zera.

- **Klonuj pole:** Duplikuje ustawienia wybranego pola, aby przyspieszyć tworzenie podobnych elementów.

![pole-edytuj-istniejace-pl.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Tytuł pola

Tytuł pola (technicznie znany jako Label) to instrukcja wizualna, która informuje użytkownika, jaką informację należy wprowadzić w formularzu. Działa jak etykieta identyfikująca, zapewniając intuicyjne i poprawne wypełnienie danych.

Na tym etapie tytuł ma podwójne przeznaczenie na platformie:

- **W zarządzaniu polami (Budowanie):** Służy do identyfikacji pola na liście elementów podczas tworzenia aplikacji.

![pole-tytul-nazwa-pl.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **W interfejsie użytkownika (Podgląd):** To tekst wyświetlany tuż nad lub obok pola wprowadzania (input), wskazujący użytkownikowi końcowemu, co ma wpisać w formularzu.

![pole-tytul-nazwa-zawartosc-pl.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Nazwa kolumny

W przeciwieństwie do tytułu, **Nazwa kolumny** to wewnętrzny i unikalny identyfikator pola, używany bezpośrednio w bazie danych i w logice programistycznej. To dzięki tej nazwie system lokalizuje informację w bazie danych.

**Automatyczne formatowanie (przełącznik Auto):**

Netuno ułatwia ten proces, automatycznie wypełniając nazwę na podstawie „Tytułu pola”. Używanym standardem jest snake_case.

**Zasady zapisu:** Jeśli zdecydujesz się wypełnić ręcznie (wyłączając „Auto”), zachowaj nazwę w liczbie pojedynczej, używaj tylko małych liter i unikaj spacji oraz znaków specjalnych.

![pole-nazwa-kolumny-pl.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Typy danych

Definicja **typu danych** określa charakter zbieranej informacji, bezpośrednio wpływając na wygląd pola dla użytkownika oraz sposób przechowywania danych w systemie.

![pole-typ-danych-pl.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Pola tekstowe

Te pola są przeznaczone do wprowadzania tekstu w różnych formatach. Różnią się w zależności od potrzebnej objętości danych.

| Typ | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| text | Tworzy proste pole wprowadzania dla jednej linii. | Imiona, tytuły artykułów, dzielnice itp. |
| textarea | Tworzy większe pole tekstowe do wielu linii. | Opisy produktów, komentarze, uwagi. |
| email | Tworzy pole tekstowe sformatowane do przyjmowania adresu e-mail. | Rejestracja e-maila kontaktowego, login użytkownika. |
| texthtml | Tworzy edytor tekstu sformatowanego, umożliwiający formatowanie za pomocą HTML. | Tworzenie treści bloga, e-maili marketingowych, stron serwisu. |
| textmd | Tworzy edytor tekstu obsługujący język znaczników Markdown. | Idealny do dokumentacji technicznej, postów blogowych dla programistów. |

### 3.2 Pola numeryczne

Używane do zbierania informacji ściśle numerycznych.

| Typ | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| textnum | Tworzy pole do wprowadzania liczb całkowitych. | Ilość w magazynie, wiek osoby, liczba miejsc. |
| textfloat | Tworzy pole do wprowadzania liczb z częścią dziesiętną. | Ceny produktów (np. 99.90), waga (np. 75.5), wzrost (np. 1.82). |

### 3.3 Pola wyboru

Używane, gdy użytkownik musi wybrać spośród wcześniej zdefiniowanych opcji.

| Typ | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| select | Tworzy listę opcji, z których użytkownik może wybrać tylko jedną. | Wybór województwa, stanu cywilnego, kategorii produktu. |
| multiselect | Tworzy listę opcji, z których użytkownik może wybrać wiele. | Wybór zainteresowań (sport, technologia), składników pizzy. |
| checkbox | Wyświetla pojedyncze pole wyboru (włącz/wyłącz). | „Akceptuję regulamin”, „Zapamiętaj hasło”. |
| color | Wyświetla wizualny selektor kolorów. | Wybór koloru produktu, personalizacja koloru wydarzenia. |

### 3.4 Pola daty i godziny

Wyspecjalizowane do wprowadzania informacji czasowych.

| Typ | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| date | Wyświetla kalendarz do wyboru daty (dzień, miesiąc, rok). | Data urodzenia, data zaplanowania. |
| datetime | Umożliwia wybór daty i godziny. | Początek wydarzenia, data i godzina publikacji. |
| time | Umożliwia wybór godziny (godziny i minuty). | Godziny otwarcia, godzina alarmu. |

### 3.5 Pola plików i multimediów

Używane do przesyłania plików i obrazów do aplikacji.

| Typ | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| file | Tworzy pole do przesyłania dowolnego pliku (PDF, DOCX, ZIP). | Załącz CV, wyślij potwierdzenie płatności. |
| image | Pole zoptymalizowane do przesyłania obrazów (JPG, PNG, GIF). | Zdjęcie profilowe użytkownika, obraz produktu. |

### 3.6 Pola techniczne i specjalne

Te pola mają automatyczne zachowania lub służą do określonych celów systemowych.

| Typ | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| hidden | Pole jest niewidoczne dla użytkownika, ale przechowuje wartość. | Przechowywanie ID pochodzącego z innej strony, kodu śledzenia. |
| uid | Automatycznie generuje uniwersalny unikalny identyfikator. | Klucz główny rekordu, unikalny kod zamówienia. |
| user | Wiąże rekord z użytkownikiem, który go utworzył lub zmodyfikował. | Identyfikacja autora posta blogowego, sprzedawcy, który zarejestrował klienta. |
| lastchange | Automatycznie przechowuje datę i godzinę ostatniej modyfikacji rekordu. | Audyt, aby wiedzieć, kiedy dane zostały ostatnio zmienione. |
| group | Używane do wizualnego grupowania innych pól w formularzu. | Tworzenie sekcji takich jak „Dane osobowe” i „Adres”, aby uporządkować długie formularze. |

## 4 - Ustawienia zachowania i układu

Ten obszar to „panel sterowania” pola, definiujący reguły biznesowe i uprawnienia dostępu.

![pole-zachowanie-i-uklad-pl.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Reguły integralności danych

Te opcje zapewniają jakość i spójność informacji.

| Konfiguracja | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| Unikalne wartości (klucz główny) | Przekształca pole w główny i unikalny identyfikator, uniemożliwiając duplikowanie wartości. | Użyj dla „PESEL”, zapewniając, że nie istnieje dwóch klientów o tym samym numerze. |
| Wymagane (niepuste) | Czyni wypełnienie pola obowiązkowym. | Zastosuj w polach kluczowych, takich jak „Imię” i „E-mail”. |

### 4.2 Kontrola uprawnień i widoczności

Określa, gdzie i w jaki sposób użytkownicy wchodzą w interakcję z danymi tego pola.

| Konfiguracja | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| Pokaż w wynikach | Określa, czy kolumna pojawi się na głównej liście danych. | Odznacz dla „Notatek wewnętrznych”, aby zachować czystą listę. |
| Zezwalaj na filtrowanie | Dodaje pole wyszukiwania dla tej kolumny na liście. | Włącz w „Statusie zamówienia”, aby ułatwić lokalizację. |
| Zezwalaj na podgląd | Kontroluje, czy zawartość będzie wyświetlana w trybie podglądu. | Pozostaw zaznaczone w większości przypadków. |
| Zezwalaj na edycję | Umożliwia zmianę zawartości podczas edycji rekordu. | Odznacz dla pól, których nie należy zmieniać, takich jak „Data rejestracji”. |
| Zezwalaj przy tworzeniu nowego | Określa, czy pole ma pojawić się w formularzu tworzenia. | Odznacz dla pól „opinii”, które powinny być wypełniane *po* utworzeniu. |
| Zezwalaj na eksport | Obejmuje dane tego pola podczas eksportowania listy (Excel, CSV). | Odznacz dane wewnętrzne, które nie są istotne dla raportów zewnętrznych. |

## 5 - Organizacja wizualna formularza

Określa rozmieszczenie pól w układzie.

![pole-organizacja-wizualna-formularza-pl.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Konfiguracja | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| Wiersz | Określa pionową pozycję pola w formularzu. | Umieść „Imię i nazwisko” w Wierszu: 1, a „Adres” w Wierszu: 2. |
| Kolumna | Określa poziomą pozycję, umożliwiając wiele pól obok siebie. | Aby mieć „Miasto” i „Województwo” razem, użyj Wiersz: 3, Kolumna: 1 (Miasto) i Kolumna: 2 (Województwo). |

## 6 - Zobacz więcej opcji

Aby uzyskać bardziej spersonalizowaną kontrolę, kliknij przycisk „+ Zobacz więcej opcji”.

### 6.1 Pole opisu

![pole-opcje-widoku-opis-pl.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Konfiguracja | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| Opis | Dodaje tekst pomocy lub instrukcję wyświetlaną pod polem. | W „Hasło” użyj opisu, aby poinformować o zasadach: „Hasło musi mieć co najmniej 8 znaków...”. |

### 6.2 Wymiarowanie pola

![pole-wymiary-uklad-pl.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Precyzyjna kontrola rozmiaru pola.

| Konfiguracja | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| Szerokość | Określa szerokość komponentu (na podstawie siatki 12 kolumn). | „PESEL” (Szerokość: 6) i „Data urodzenia” (Szerokość: 6) w tym samym wierszu. |
| Wysokość | Określa wysokość komponentu w pikselach (px). | W `textarea` „Uwagi” ustaw Wysokość „120”, aby uzyskać większy obszar. |
| Szerokość komórki (px) | Określa stałą szerokość komórki w pikselach. | Użyj do wyrównania pól o określonych szerokościach, takich jak „Województwo” (Szerokość: 80). |
| Wysokość komórki (px) | Określa stałą wysokość komórki w pikselach. | Zwiększ wysokość pola `image`, aby utworzyć obszar „przeciągnij i upuść”. |
| Rowspan | Umożliwia rozciągnięcie komórki w pionie na wiele wierszy. | `textarea` „Opis”, który zajmuje 3 wiersze wysokości obok mniejszych pól. |
| Colspan | Umożliwia rozciągnięcie komórki w poziomie na wiele kolumn. | Pole „Pełny adres” (Colspan: 2) nad „Miastem” i „Województwem”. |

### 6.3 Walidacja i reguły danych

Ustal limity dla wprowadzanych wartości.

| Konfiguracja | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| Maks | Maksymalna wartość (liczbowa) lub maksymalna liczba znaków (tekst). | W „Ocena (0 do 10)” ustaw Maks na „10”. W „Pseudonim” Maks „20”. |
| Min | Minimalna wartość (liczbowa) lub minimalna liczba znaków (tekst). | W „Ilość” ustaw Min na „1”. W „Uzasadnienie” Min „30”. |

### 6.4 Kontrola dostępu 

![pole-kontrola-dostepu-pl.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Zdefiniuj grupy i użytkowników, którzy mogą wyświetlać i edytować pole.

| Konfiguracja | Co robi? | Przykład praktycznego użycia |
| :--- | :--- | :--- |
| Widok użytkownika i widok grupy | Ogranicza *wyświetlanie* pola tylko do określonych użytkowników lub grup. | „Prowizja sprzedawcy” ma Widok grupy „Menedżerowie”. |
| Edycja użytkownika i edycja grupy | Pozwala tylko określonym użytkownikom lub grupom *edytować* pole (inni widzą je jako „tylko do odczytu”). | „Status zamówienia” ma Edycję grupy „Logistyka”. |