---
id: db-query-execute
title: Zapytania i Execute - bezpośrednie polecenia w bazie danych
sidebar_label: Zapytania i Execute
---

## Zanim zaczniesz

Aby jak najlepiej zrozumieć ten samouczek, zalecamy upewnić się, że masz podstawową wiedzę z zakresu _**JavaScript i SQL**_ oraz potrafisz tworzyć usługi w Netuno.

Jeśli nie potrafisz tworzyć usług, zobacz [Usługi sieciowe REST](/docs/academy/server/services/rest).

## Tworzenie zapytań

Netuno udostępnia funkcje przeznaczone do tworzenia zapytań do bazy danych; w tym samouczku pokrótce przedstawimy i opiszemy działanie każdej z nich oraz dobre praktyki pozwalające uzyskać najlepsze rezultaty.

### _db.query('SELECT * FROM ...')

Ta funkcja pozwala zwrócić dane z zapytania.

```javascript
_out.json(
  _db.query('SELECT * FROM nazwa_tabeli')
)
```

> Należy pamiętać, że funkcja _out.json() pozwala wyświetlić dane usługi na ekranie po wywołaniu jej w przeglądarce.

Ta funkcja umożliwia również przyjmowanie argumentów, które są przekazywane bezpośrednio przez wywołanie usługi. Załóżmy na przykład, że mamy usługę _wybierz-wszystkie.js_; wywołanie będzie wykonywane przez _**http://localhost:9000/services/wybierz-wszystkie.netuno**_, a argumenty do przekazania umieszcza się po wywołaniu, po znaku zapytania:

```
http://localhost:9000/services/wybierz-wszystkie.netuno?argument1=1&argument2=nazwa
```

> Należy pamiętać, że aby przekazać wiele argumentów, wystarczy oddzielić je znakiem ampersand (&).

### Zapytanie z parametrami

Na koniec wystarczy zadeklarować tę zmienną w zapytaniu w następujący sposób:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM nazwa_tabeli WHERE id = ? AND nazwa = ?', 
        _req.getInt("argument1"), _req.getString("argument2")
    )
)
```

> W miejsce znaków zapytania '?' zostanie wstawiony odpowiedni parametr zgodnie z jego kolejnością.

## Zapytanie z parametrami i typami PostgreSQL oraz H2DataBase

Jednak H2Database i PostgreSQL obsługują prostą składnię konwersji, dzięki czemu możemy przypisać typy do parametrów w następujący sposób:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM nazwa_tabeli WHERE id = ?::int AND nazwa = ?::varchar', 
    _req.getInt("id"), _req.getString("nazwa")
  )
)
```

## Typy parametrów w H2Database i PostgreSQL

Jak można było zauważyć wcześniej, aby wykonać zapytanie z argumentami, należy zdefiniować ich typ. Poniżej znajduje się lista wszystkich typów zmiennych wraz z najlepszym zastosowaniem dla każdego z nich:

* Odpowiedni dla parametrów liczb całkowitych:
    * **?::int**
* Odpowiedni dla parametrów liczb dziesiętnych:
    * **?::float**
 * Odpowiedni dla parametrów globalnego/uniwersalnego unikalnego identyfikatora, powszechnie znanego jako guid lub uuid:
    * **?::uuid**
 * Odpowiedni dla parametrów ogólnego tekstu, ciągów znaków:
    * **?::varchar**
    * **?::text**
 * Odpowiedni dla parametrów typu data:
    * **?::date**
 * Odpowiedni dla parametrów typu godzina:
    *  **?::time**
 * Odpowiedni dla parametrów z datą i godziną:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Ta funkcja pozwala wykonać polecenie bazy danych, takie jak update, insert i delete.

Zwraca liczbę rekordów objętych wykonanym poleceniem.

```javascript
// Przykład INSERT:
const liczbaWstawionychRekordow = _db.execute(
    "INSERT INTO nazwa_tabeli(id, aktywny, nazwa) " + 
    "VALUES(nextval('nazwa_tabeli_id'), ?::int, ?::varchar)", 
    1, nazwa
)

// Przykład UPDATE:
const liczbaZaktualizowanychRekordow = _db.execute(
    "UPDATE nazwa_tabeli SET nazwa = ?::varchar WHERE id = ?::int",
    _req.getString("nazwa"), _req.getInt("id")
)

// Przykład DELETE:
const liczbaUsunietychRekordow = _db.execute(
    "DELETE FROM nazwa_tabeli WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Uwaga:** Podczas wykonywania INSERT sprawdź, czy pole aktywny ma wartość 1; w przeciwnym razie nie pojawi się w wyniku.

## Przykład interakcji z danymi

Przedstawimy teraz zalecane zasady, które pozwolą uzyskać najlepsze możliwe rezultaty.

## Pierwszy wynik zapytania

Poniżej pokazano, jak pobrać pierwszy wiersz zapytania; będzie on równy null, jeśli nie zostanie pobrany żaden wiersz.

```javascript
// Wybierz dane:
const wynikBazy = _db.queryFirst(
    'SELECT nazwa FROM nazwa_tabeli WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!wynikBazy) {
    // Kod stanu HTTP:
    _header.status(404)
    // Wskazanie błędu:
    _out.json(
        _val.map()
            .set('error', 'identyfikator-nie-znaleziony')
    )
    // Zakończ wykonywanie usługi:
    _exec.stop()
}
```

## Sprawdzanie liczby rekordów

Gdy wykonujesz zapytanie do bazy danych, którego wynik jest pojedynczy, aby uzyskać dostęp do danych, warto postąpić w **następujący sposób**:

Należy pamiętać, że to tylko prosty przykład, który gwarantuje zwrócenie co najmniej 1 wyniku i pozwala uniknąć błędu, gdy wynik nie istnieje.

```javascript
// Wybór danych:
var wynikiBazy = _db.query(
  'SELECT nazwa FROM nazwa_tabeli WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let nazwa = null;
// Gwarantuje, że dane istnieją; można użyć 
// symbolu większości (wynikiBazy.size() > 1), jeśli 
// istnieje więcej niż jeden rekord:
if (wynikiBazy.size() >= 1) {
  // Aby uzyskać dostęp do wartości nazwy bezpośrednio, wystarczy:
  nazwa = wynikiBazy.get(0).getString('nazwa');
}
```

## Iteracja w pętli po rekordach

Jeśli wynikiem zapytania jest **wiele wyników**, możesz użyć pętli 'for', aby pobrać dane w następujący sposób:

```javascript
// Wykonaj zapytanie
const wynikiBazy = _db.query('SELECT id, nazwa FROM nazwa_tabeli');

// Zainicjuj zmienną, aby mogła przyjmować wartości
const elementy = _val.init();

// Iteracja po wszystkich wynikach, aby otrzymać każdą wartość osobno
for (const wynik of wynikiBazy) {
    elementy.push(
        _val.map()
            .set("uid", wynik.getString("uid"))
            .set("nazwa", wynik.getString("nazwa"))
    );
}

// Wyślij nową listę danych w wyjściu danych:
_out.json(elementy);
```

W razie pytań prosimy o kontakt, zapoznaj się ze wskazówkami w stopce tej witryny.

Dobrego programowania!