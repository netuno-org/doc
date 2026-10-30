---
id: db-form-operations
title: Formularz i operacje na bazie danych
sidebar_label: Formularz DB
---

## Zanim zaczniesz

Przed kontynuowaniem upewnij się, że znasz podstawy SQL oraz relacji między tabelami, takich jak „jeden do wielu” i „wielu do jednego”.

Ponadto potrzebna jest wcześniejsza znajomość `Forms` Netuno i sposobu ich organizacji, aby w pełni wykorzystać DB Form.

## Wprowadzenie

W tworzeniu oprogramowania często musimy pobierać informacje z bazy danych, a używanie do tego czystego SQL sprawia, że staje się to masowe i stresujące. DB Form zamienia konstruowanie zapytań SQL w intuicyjne i pozbawione stresu doświadczenie. Dzięki niemu możesz tworzyć zaawansowane zapytania za pomocą przyjaznych metod, które abstrahują złożoność surowego SQL, zapewniając podejście do tworzenia zapytań zgodne z Twoim sposobem myślenia.

## Jak to działa

W sercu DB Form znajduje się możliwość strukturyzowania poleceń SQL za pomocą obiektów i metod. Zamiast pisać polecenia SQL bezpośrednio, DB Form pozwala używać mechanizmu obiektowego do programowego definiowania zapytań i operacji.

Każde zapytanie lub operacja na bazie danych jest reprezentowana jako obiekt.

Tworzysz instancje klas zapytań, które enkapsulują różne części SQL, takie jak selekcja, filtrowanie, grupowanie itp. Wykonujesz także operacje usuwania, wstawiania i aktualizowania rekordów.

## Inicjalizacja

Wszystko zaczyna się od inicjalizacji DB Form, który musi wiedzieć, jaka będzie nazwa formularza bazowego lub głównego, który zostanie użyty, czyli formularze w Netuno zawsze reprezentują tabele w bazie danych, więc jest to równoznaczne ze wskazaniem tabeli bazowej lub tabeli głównej.

W tym przykładzie inicjujemy DB Form na podstawie formularza/tabeli `osoby`:

```javascript
const dbFormularzOsoby = _db.form("osoby")
```

Po zainicjowaniu DB Form możemy wykonywać zapytania lub operacje.

## Proste zapytanie

DB Form udostępnia dwie bardzo常见 metody pozyskiwania danych, poza paginacją i wynikami distinct, są to:

- `all` — Wszystkie rekordy jako lista.
- `first` — Pobiera tylko pierwszy rekord.

Zobacz poniższe przykłady.

Aby pobrać wszystkie osoby:

```javascript
const dbOsoby = _db.form("osoby")
    .all()
```

Aby pobrać tylko jedną osobę:

```javascript
const dbOsoba = _db.form("osoby")
    .first()
```

## Filtry i warunki

Za pomocą where możemy filtrować dane spełniające określone warunki.

Zobacz kilka przykładów:

```js
const dbOsoba = _db.form("osoby")
    .where(_db.where("osoby_id_uzytkownika").equals(_user.id))
    .first()
```

```js
const dbOsoby = _db.form("osoby")
    .where(
        _db.where("typ").in(_val.list().add("klient").add("administrator"))
            .and("email").notEqual(null)
    ).all()
```

## Porównania Where

`_db.where` udostępnia obiekt [Where](/docs/library/objects/Where), który obsługuje następujące operacje porównania:

Porównania z operatorami numerycznymi i tekstowymi:

-  `equal(...)` lub `equals(...)` — Sprawdza równość, to jest `=`.
-  `notEqual(...)` lub `notEquals(...)` — Czy jest różne od przekazanej wartości, to jest `<>`.
-  `greaterThan(...)` — Czy jest większe od przekazanej wartości, to jest `>`.
-  `lessThan(...)` — Czy jest mniejsze od przekazanej wartości, to jest `<`.
-  `greaterOrEqualsThan(...)` — Czy jest większe lub równe przekazanej wartości, to jest `>=`.
-  `lessOrEqualsThan(...)` — Czy jest mniejsze lub równe przekazanej wartości, to jest `<=`.

Warunki tekstowe z operatorem `LIKE`:

-  `startsWith('text')` — Czy zaczyna się od określonego prefiksu, to jest `LIKE '...%'`.
-  `endsWith('text')` — Czy kończy się określonym sufiksem, to jest `LIKE '%...'`.
-  `contains('text')` — Czy zawiera dany termin, to jest `LIKE '%...%'`..

Warunki z listami z operatorem `IN`:

-  `in(_val.list()...)` — Czy jest równe którejś wartości z listy, to jest warunek `IN (...)`.
-  `notIn(_val.list()...)` — Czy nie jest równe żadnej wartości z listy, to jest warunek `NOT IN (...)`.

## Praktyczne przykłady zapytań

`DB Form` jest dostępny z poziomu zasobu `_db.form('form')`; po wywołaniu masz w rękach zapytanie bazowe, które można skonfigurować za pomocą dostępnych w nim metod i obiektów.

### Wiele do jednego i wyniki distinct

```javascript
const zapytanie = _db.form('osoby')
    .where(
        _db.where('imie').startsWith('jan')
        .and(
             _db.where('email').contains('jan')
             .or('email').endsWith('com')
         )
    )
    .link('praca', _db.where('kod').equal('kierownik'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'osoby_id_uzytkownika',  
            _db.where('mail').startsWith('jan')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'id_grupy',
                _db.where('kod').equal('osoby')
            )
        )
    )
    .get("osoby.imie", "osoby_imie")
    .get("osoby.aktywny", "osoby_aktywny")
    .get("osoby.uid", "osoby_uid")
    .debug(true)
    .distinct(true)

const wyniki = zapytanie.all();
```

W powyższym przykładzie wykonujemy zapytanie do tabeli `osoby`, łącząc ją z dwiema innymi tabelami, `praca` i `netuno_user`, gdzie `praca` jest powiązana przez metodę `link`, a `netuno_user` przez `join`. Można zauważyć, że `link` jest znacznie prostszy niż `join`, ponieważ `link` wykorzystuje relację z `Form` Netuno do mapowania związku, podczas gdy `join` używa wyłącznie informacji przekazanych w metodzie. Można także zauważyć pozostałe użyte metody i obiekty, takie jak:

- `where` : Obiekt udostępniany do budowania warunków dla tabeli.
- `link` : Metoda, która wiąże tabelę główną z inną tabelą przy użyciu kryteriów `Form` Netuno.
- `join` : Metoda, która przyjmuje obiekt relacji między tabelami.
- `get` : Metoda, która określa, jakie pola zostaną zwrócone w zapytaniu.
- `manyToOne` : Obiekt określający typ relacji między tabelami, w tym przypadku relację typu `Many To One`.
- `debug` : Metoda określająca, czy zbudowane zapytanie zostanie wypisane w konsoli.
- `distinct` : Metoda określająca, czy polecenie `DISTINCT` zostanie zastosowane do zapytania.
- `all` : Metoda, która wykonuje zapytanie i zwraca wyniki w postaci listy.

> Metoda `link` powinna być używana tylko wtedy, gdy tabele są już powiązane przez `Form` Netuno.

### Pierwszy rekord z relacją i sortowaniem

```javascript
const zapytanie = _db.form('osoby')
    .where(
        _db.where('imie').startsWith('jan')
        .and('email').in(
            _val.list().add('pierwszy@mail.com').add('drugi@mail.com'))
    )
    .link('praca')
    .get("osoby.imie", "osoby_imie")
    .get("osoby.aktywny", "osoby_aktywny")
    .get("praca.kod", "praca_kod")
    .order('osoby.wiek', 'desc')
    .debug(true)

const pierwszyWynik = zapytanie.first();
```
Na końcu powyższego przykładu wywołujemy metodę `first()`, która zwraca pierwsze wystąpienie znalezione podczas wykonywania zapytania; jeśli nie znajdzie żadnego, zwróci `null`.

### Paginacja

```javascript
const zapytanie = _db.form('osoby')
    .link(
        'praca', 
        _db.link('zadanie')
    )
    .get("osoby.imie", "osoby_imie")
    .get("osoby.aktywny", "osoby_aktywny")
    .get("praca.kod", "praca_kod")
    .group("osoby.id")
    .debug(true)

const strona = zapytanie.page(_db.pagination(1, 10));
```

> Numer strony w obiekcie Pagination zaczyna się od 1, więc powyższy przykład jest równoważny: `offset = 0` i `limit = 10`.

Na końcu powyższego przykładu wywołujemy metodę `page()`, przekazując jako parametr obiekt `pagination`, który zawiera preferencje paginacji. Zwróci ona obiekt strony z równoważnymi atrybutami, na przykład:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"praca_kod": "stazysta",
			"osoby_aktywny": true,
			"osoby_imie": "Jan Kowalski"
		},
		{
			"praca_kod": "kierownik",
			"osoby_aktywny": true,
			"osoby_imie": "Anna Nowak"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Wstawianie rekordów

Aby wstawić dane do bazy danych, używamy metody `insert`, na przykład:

```javascript
const dbWstawionaOsoba = _db.form("osoby")
    .set("imie", "Jan Kowalski")
    .set("email", "jan@mail.com")
    .insert();
```

Na podstawie wyniku `insert` możemy uzyskać id rekordu, który został wstawiony do bazy danych.

Zatem w `dbWstawionaOsoba` uzyskujemy `id` wstawionego rekordu w następujący sposób:

```javascript
_log.info("ID wstawionej osoby: "+ dbWstawionaOsoba.getInt('id'))
```

## Edycja rekordów

Poprzez obiekt DB Form możesz aktualizować rekordy zapytania w łatwy i intuicyjny sposób.

```javascript
_db.form('osoby')
    .link(
        'praca',
        _db.where('kod').equal('stazysta')
    )
    .set("imie", "nowe imie")
    .set("email", "mojnowyemail@mail.com")
    .update();
```

> `Ważne`. Metoda `update()` zaktualizuje wszystkie wystąpienia zapytania, więc zachowaj ostrożność podczas jej używania.

> Ponadto możesz użyć innych metod w połączeniu, takich jak `order()` i `limit()`, aby ulepszyć zapytania.

## Usuwanie rekordów

DB Form pozwala także w prosty sposób usuwać rekordy zwrócone w zapytaniu.

```javascript
_db.form('osoby')
    .link(
        'praca',
        _db.where('kod').equal('stazysta')
    )
    .delete();
```

> `Ważne`. Metoda `delete()` usunie wszystkie wystąpienia zapytania, więc zachowaj ostrożność podczas jej używania.

> Podobnie jak w pozostałych przypadkach, możesz połączyć inne metody, takie jak `order()` i `limit()`, aby ulepszyć wyniki.