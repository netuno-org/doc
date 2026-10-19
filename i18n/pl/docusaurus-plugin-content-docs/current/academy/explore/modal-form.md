---
id: modal-form
title: Formularz Modalny
---

Tworzenie i zarządzanie formularzami w oknach modalnych.
## Wprowadzenie

Modal to funkcja interfejsu użytkownika (UI), która pozwala otworzyć formularz bez konieczności opuszczania bieżącej strony przez użytkownika.

Stosowanie modali znacząco poprawia doświadczenie użytkownika (UX), umożliwiając wykonywanie operacji **CRUD (Tworzenie, Odczyt, Aktualizacja, Usuwanie)** bez konieczności przeładowywania strony lub utraty kontekstu bieżącego ekranu.

Netuno automatycznie zarządza komunikacją z backendem oraz wstrzykiwaniem niezbędnego kodu HTML.


#### Wymagania wstępne

Aby zaimplementować przykłady, będziesz potrzebować:

- Dostępu do środowiska programistycznego swojej aplikacji Netuno.
- Formularza odpowiednio skonfigurowanego w panelu administracyjnym (backoffice) Netuno.
- Podstawowej znajomości JavaScript i obsługi zdarzeń w DOM.

W poniższych przykładach użyjemy ogólnego formularza o nazwie **"test"**.

W razie wątpliwości dotyczących tych kroków zapoznaj się z: [Formularze](/docs/academy/ui/forms).

## Struktura bazowa

Tworzenie i obsługa modali w Netuno jest scentralizowana w obiekcie `netuno.modal`.

Metoda **netuno.modal.create()** tworzy podstawową strukturę modala w interfejsie. Przyjmuje obiekt konfiguracji z następującymi właściwościami:

- **name (String):** Nazwa formularza (utworzonego w backoffice), który posłuży jako podstawa dla modala.
- **callback (Function):** Funkcja wykonywana zaraz po wstrzyknięciu struktury modala do DOM (ale przed jej wyświetleniem), jako parametr otrzymuje utworzony element modala.

### Funkcja Callback

Wewnątrz funkcji callback należy zdefiniować stan (tryb) formularza, korzystając z natywnych funkcji ładowania:

- **Tryb listy - `netuno.loadForm()`**: Renderuje tabelę wyszukiwania i listę rekordów tego formularza.

- **Tryb edycji/tworzenia - `netuno.loadFormEdit()`**: Renderuje pola wejściowe formularza. Można go użyć do wstawienia nowego rekordu lub edycji istniejącego.

## Implementacja
Poniżej szczegółowo opisujemy trzy najczęstsze scenariusze użycia.

### 1. Tryb listy

`netuno.loadForm()` jest używany, gdy chcesz, aby użytkownik zobaczył wszystkie dane formularza w formacie tabeli (siatki) wyszukiwania.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    // 1. Lokalizuje wewnętrzny kontener przeznaczony do odebrania formularza
    let kontenerFormularza = modal.find('[netuno-form]');
    // 2. Wstrzykuje listę danych formularza do kontenera
    netuno.loadForm(kontenerFormularza); 
    // 3. Wyświetla modal użytkownikowi
    netuno.modal.show(modal);
  }
});
```
### 2. Tryb tworzenia

`netuno.loadFormEdit()` jest używany dla przycisków typu "Dodaj nowy". Otwiera pusty formularz, gotowy do wprowadzenia danych.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let kontenerFormularza = modal.find('[netuno-form]');
    // Ładuje formularz w trybie wstawiania (nowy rekord)
    netuno.loadFormEdit(kontenerFormularza); 
    netuno.modal.show(modal);
  }
});
```

:::info
Gdy używasz `netuno.loadFormEdit()` bez przekazywania **ID**, Netuno rozumie, że chcesz użyć "ekranu edycji" od zera. Ładuje interfejs z pustymi polami wejściowymi, gotowymi do utworzenia nowego rekordu. W tym scenariuszu Netuno wewnętrznie wywołuje zdarzenie `netuno:new`.
:::

### 3. Tryb edycji

Jeśli chcesz, aby modal załadował konkretny rekord do modyfikacji, musisz przekazać **UID** lub **ID** rekordu jako drugi parametr funkcji ładowania.

```jsx
// Przykład: Edycja rekordu o ID 1234
const idRekordu = 1234; 

netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let kontenerFormularza = modal.find('[netuno-form]');
    // Wstrzykuje dane rekordu 1234 do pól formularza
    netuno.loadFormEdit(kontenerFormularza, idRekordu); 
    netuno.modal.show(modal);
  }
});
```


## Zdarzenia

Kontener formularza (`[netuno-form]`) emituje niestandardowe zdarzenia towarzyszące cyklowi życia interakcji użytkownika.

Zaleca się wykorzystanie tych zdarzeń do uruchamiania logiki biznesowej specyficznej dla twojego frontendu (takiej jak aktualizacja tabel w tle, wyświetlanie alertów itp.).

| TYP ZDARZENIA   | OPIS    |
| ------- |--------------|
| `netuno:new` | Wywoływane, gdy wyświetlany jest ekran tworzenia nowego elementu. |
| `netuno:edit` | Wywoływane, gdy wyświetlany jest ekran edycji istniejącego elementu. |
| `netuno:save` | Wywoływane, gdy dodawany jest nowy element. |
| `netuno:back` | Wywoływane po kliknięciu przycisku powrotu. |
| `netuno:delete` | Wywoływane po usunięciu elementu. |


### Przykład: Przechwytywanie wielu zdarzeń

W tym gotowym do wdrożenia przykładzie tworzymy modal i dodajemy *listenery* do monitorowania powodzenia operacji użytkownika:

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let kontenerFormularza = modal.find('[netuno-form]');
    
    // Monitorowanie ekranu wstawiania
    kontenerFormularza.on('netuno:new', function(event) {
       console.info("Interfejs tworzenia został załadowany.");
    });

    // Monitorowanie udanego zapisu
    kontenerFormularza.on('netuno:save', function(event) {
       console.success("Rekord został pomyślnie zapisany!");
       // Przykład: Automatyczne zamknięcie modala po zapisie
       netuno.modal.hide(modal); 
    });

    // Renderowanie modala w trybie listy i wyświetlanie
    netuno.loadForm(kontenerFormularza);
    netuno.modal.show(modal);
  }
});
```
W razie trudności lub sugestii dotyczących ulepszeń skontaktuj się z nami.
Nasz zespół i społeczność są gotowi do pomocy.

Dobrego programowania!