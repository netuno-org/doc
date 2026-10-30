---
id: services
title: Usługi
sidebar_label: Usługi
---

Usługi Web REST w Netuno to skrypty JavaScript wykonywane na serwerze (Back-end), które umożliwiają bezpośrednią interakcję z bazą danych aplikacji. Za ich pomocą można:

* Odczytywać dane z bazy danych 
* Wstawiać nowe rekordy 
* Aktualizować istniejące dane 
* Usuwać dane 
* Wykonywać złożone operacje obejmujące obliczenia lub przetwarzanie danych.
* Integrować się z systemami zewnętrznymi.

Każda usługa jest dostępna poprzez URL (endpoint), co pozwala interfejsom webowym (Front-end), aplikacjom mobilnym lub innym systemom zewnętrznym w bezpieczny i standardowy sposób korzystać z danych Twojej aplikacji.

#### Wymagania wstępne

* Podstawowa znajomość _**JavaScript, React.js**_ i _**HTML**_.
* Znajomość SQL oraz struktury katalogów aplikacji. 
* Zalecana jest podstawowa wiedza z zakresu **Formularzy**, **Pól** i **Relacji**. 

W razie wątpliwości dotyczących tych zagadnień zapoznaj się z:

* [Formularze](/docs/academy/ui/forms)
* [Pola](/docs/academy/ui/fields)
* [Relacje między formularzami](/docs/academy/ui/relationships-between-forms)



## Pierwsze kroki  

Użyjemy aplikacji do rejestrowania godzin pracy, której celem jest obliczenie sumy godzin przepracowanych przez każdego pracownika.

**Struktura aplikacji:**

![application-structure-pt.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
Pole **id** jest tworzone i zarządzane automatycznie przez Netuno we wszystkich tabelach, więc nie ma potrzeby definiowania go ręcznie.
:::

Usługi aplikacji Netuno znajdują się w katalogu **server/services/**.

#### Struktura katalogów

```text
moja-aplikacja/
└── server/
    └── services/
        ├── pracownicy.js   ← plik usługi
        └──... 
```

## Tworzenie usługi

Wewnątrz katalogu **server/services/** utwórz nowy plik, który będzie definiował URL Twojej usługi. W tym przykładzie nazwij plik `pracownicy.js`.

:::tip
- Używaj wyłącznie **małych liter**.
- Jeśli nazwa jest złożona, oddziel słowa **myślnikiem (-)**.
- Przykłady: **pracownicy.js**, **raport-godzin.js**, **rejestr-wejsc.js**.
:::


## Odpytywanie bazy danych

Netuno udostępnia globalny obiekt **_db** do natywnej interakcji z bazą danych. 

Aby wykonać zapytanie SQL, używamy metody `_db.query()`.


```javascript
// Wykonuje zapytanie SQL, które grupuje sumę godzin według pracownika
const dbRejestry = _db.query(`
    SELECT DISTINCT
        pracownik.nazwa, SUM(DATEDIFF(HOUR, rejestr.poczatek, rejestr.koniec)) AS total
    FROM pracownik INNER JOIN rejestr
        ON pracownik.id = rejestr.pracownik_id
    WHERE pracownik.active = true AND rejestr.active = true
    GROUP BY pracownik.nazwa
    ORDER BY total ASC
`);
```

:::note Zrozumienie zapytania SQL

* **INNER JOIN**: Łączy tabele pracownik i rejestr przy użyciu klucza obcego pracownik_id.

* **DATEDIFF(HOUR, poczatek, koniec)**: Oblicza różnicę w godzinach między rozpoczęciem a zakończeniem.

* **SUM(...) AS total**: Sumuje wszystkie przepracowane godziny każdego pracownika.

* **WHERE ... active = true**: Filtruje wyszukiwanie tak, aby uwzględnić tylko pracowników i rejestry, które nie zostały usunięte (są aktywne).

* **GROUP BY pracownik.nazwa**: Grupuje sumy według nazwy każdego pracownika.

* **ORDER BY total ASC**: Sortuje końcowy wynik od najmniejszej do największej liczby przepracowanych godzin.
:::

## Przetwarzanie danych

Metoda `_db.query()` zwraca dane w wewnętrznym formacie Netuno. 

Aby wysłać czystą odpowiedź w formacie JSON, należy przekształcić te dane za pomocą globalnych obiektów **_val.list()** (dla tablic) i **_val.map()** (dla obiektów).

```javascript
// Tworzy pustą listę do przechowywania przetworzonych danych
const lista = _val.list();

// Iteruje po każdym rekordzie zwróconym przez zapytanie SQL
for (const dbRejestr of dbRejestry) {
    lista.add(
        _val.map()
            .set("name", dbRejestr.getString("nazwa"))   // Wyodrębnia nazwę jako tekst
            .set("total", dbRejestr.getInt("total"))    // Wyodrębnia sumę jako liczbę całkowitą
    );
}
```
### Użyte metody

| Zasób | Opis |
|---------|-----------|
| **_val.list()** | Tworzy listę (odpowiednik Array w JS). |
| **_val.map()** | Tworzy obiekt typu klucz-wartość (odpowiednik Object lub JSON). |
| **.add(...)** | Dodaje nowy element na końcu listy. |
| **.set("klucz", wartość)** | Ustawia nową właściwość i jej wartość w mapie. |
| **.getString("kolumna")** | Wyodrębnia wartość wskazanej kolumny sformatowaną jako tekst (String). |
| **.getInt("kolumna")** | Wyodrębnia wartość wskazanej kolumny sformatowaną jako liczba całkowita (Integer). |

## Zwracanie danych 

Do wysłania przetworzonej listy do klienta w formacie JSON używa się obiektu **_out**.

```javascript
// Wysyła listę jako odpowiedź HTTP w formacie JSON
_out.json(lista);
```

## Praktyczny przykład

Na tym końcowym etapie łączymy wszystkie poznane koncepcje, aby utworzyć działającą usługę. 

Poniższy kompletny kod wykonuje zapytanie do bazy danych w celu obliczenia sumy przepracowanych godzin i zwraca te dane sformatowane jako JSON.

```javascript
// 1. Odpytuje bazę o sumę godzin przepracowanych przez każdego aktywnego pracownika
const dbRejestry = _db.query(`
    SELECT DISTINCT
        pracownik.nazwa, SUM(DATEDIFF(HOUR, rejestr.poczatek, rejestr.koniec)) AS total
    FROM pracownik INNER JOIN rejestr
        ON pracownik.id = rejestr.pracownik_id
    WHERE pracownik.active = true AND rejestr.active = true
    GROUP BY pracownik.nazwa
    ORDER BY total ASC
`);

// 2. Tworzy strukturę danych dla odpowiedzi
const lista = _val.list();

// 3. Przetwarza i mapuje wyniki
for (const dbRejestr of dbRejestry) {
    lista.add(
        _val.map()
            .set("name", dbRejestr.getString("nazwa"))
            .set("total", dbRejestr.getInt("total"))
    );
}

// 4. Zwraca dane w formacie JSON
_out.json(lista);
```

### Uzyskiwanie dostępu do usługi

Po utworzeniu i skonfigurowaniu usługi w Netuno będzie ona gotowa do użycia i testowania bezpośrednio w przeglądarce lub do zintegrowania z innymi aplikacjami.

#### Sposoby dostępu

Usługę można wywoływać za pomocą:

- **Przeglądarki:** Do szybkich testów metod GET.

- **Klientów HTTP:** Narzędzi takich jak Postman, Insomnia lub Thunder Client.

- **Front-endu:** Poprzez żądania fetch lub biblioteki takie jak Axios.

#### Struktura URL

Domyślnie Netuno automatycznie mapuje pliki utworzone w katalogu usług na adresy webowe.

Jeśli aplikacja działa lokalnie na domyślnym porcie, adres będzie miał następujący format:

http://localhost:9000/services/pracownicy



:::info Jak działa routing?
Netuno wykorzystuje automatyczny system routingu oparty na systemie plików:

**Katalog źródłowy:** Wszystkie pliki wewnątrz server/services/ stają się trasami.

**Mapowanie:** Plik **pracownicy.js** jest przekształcany w endpoint **/services/pracownicy**.

**Rozszerzenia:** Zauważ, że rozszerzenie **.js** jest pomijane w URL. Opcjonalnie można użyć sufiksu **.netuno** (np. /services/pracownicy.netuno), ale dostęp bez rozszerzenia jest zalecanym standardem, ponieważ jest czystszy.
:::

**Przykład odpowiedzi HTTP:**
Jeśli w Twojej bazie danych istnieją zgodne dane, odpowiedź zwrócona przez serwer będzie podobna do tej:

```json
[
    {
        "nazwa": "Anna Kowalska",
        "total": 40
    },
    {
        "nazwa": "Jan Nowak",
        "total": 35
    },
    {
        "nazwa": "Maria Wiśniewska",
        "total": 45
    }
]
```

## Globalne obiekty systemowe

Podczas tworzenia usług w Netuno często będziemy używać natywnych obiektów, które ułatwiają komunikację z bazą danych, kontrolę żądań oraz zwracanie informacji.

Są to wstępnie skonfigurowane obiekty gotowe do użycia w skryptach serwera **(pliki .js)**. Eliminują konieczność importowania zewnętrznych bibliotek do podstawowych zadań, takich jak zapytania SQL czy odczytywanie parametrów.

| Obiekt | Opis |
|--------|-----------|
| **_db**| Wykonywanie operacji na bazie danych (query, insert, update, delete). |
| **_val** | Tworzenie i manipulacja strukturami danych (list, map). |
| **_out** | Wysyłanie odpowiedzi do użytkownika (JSON, HTML...). |
| **_req** | Dostęp do parametrów wysłanych w żądaniu użytkownika (GET, POST). |
| **_log**| Rejestrowanie komunikatów o błędach lub debugowania w konsoli serwera. |



W razie trudności lub sugestii dotyczących ulepszeń, skontaktuj się z nami.

Nasz zespół i społeczność są gotowe do pomocy.

Powodzenia w tworzeniu!