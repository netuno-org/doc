---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Definicja schematu usług.

## Wprowadzenie

OpenAPI to specyfikacja, która standaryzuje usługi udostępniane przez REST API; pomaga zrozumieć, jak usługi są zdefiniowane, m.in. adres, dane wejściowe i wyjściowe.

Umożliwia generowanie interfejsu do testów oraz automatyczne generowanie klientów do integracji z innymi technologiami.

> Więcej o <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Aktywacja i konfiguracja

Aby aktywować i skonfigurować OpenAPI w aplikacji Netuno, należy edytować plik konfiguracyjny aplikacji dla używanego środowiska, taki jak:

- `📂 config/_development.json`
- `📂 config/_production.json`

Wprowadź i dostosuj następujące parametry:

```
...
    "openapi": {
        "host": "http://moja-aplikacja.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://moja-aplikacja.local.netu.no:9000/services",
                "description": "Środowisko lokalne"
            }
        ]
    },
...
```

Upewnij się, że konfiguracje mają sens; w powyższym przykładzie dotyczą środowiska _development_.

> W środowisku produkcyjnym warto używać `https`.

### _openapi.json w usługach

W katalogu głównym usług skonfiguruj plik `_openapi.json`.

Pełna ścieżka w aplikacji to:

- `📂 server/services/_openapi.json`

Zawartość tego pliku będzie wyglądać jak w tym przykładzie:

```
{
  "info": {
    "title": "Moja Aplikacja",
    "description": "REST API aplikacji Moja Aplikacja. Używaj z umiarem.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Dostosuj tytuł i opis do tego, co ma sens w Twoim przypadku.

## Dane wejściowe

Konfigurując pliki _schema_ danych wejściowych, pozwalasz Netuno przeprowadzać walidację otrzymanych parametrów poprzez porównanie ich z regułami JSON Schema.

> Więcej o <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

W razie jakiegokolwiek błędu walidacji wykonanie usługi jest blokowane, a błąd jest prezentowany w `log` Netuno; konsumentowi usługi zwracany jest kod stanu HTTP **400** (_Bad Request_).

Aby skonfigurować reguły parametrów wejściowych, należy utworzyć plik z rozszerzeniem `in.json` obok pliku kodu usługi; nazwa musi być taka sama.

- Usługa `szczegoly.js` musiałaby mieć plik `szczegoly.in.json`.
- Usługa `szczegoly.post.js` musiałaby mieć plik `szczegoly.post.in.json`.
- Usługa `szczegoly/post.js` musiałaby mieć plik `szczegoly/post.in.json`.

Przykład zawartości `in.json`:

```
{
    "tags":[
      "usługi produktu"
    ],
    "summary": "Szczegóły produktu",
    "description": "Zwraca wszystkie pola szczegółowe określonego produktu.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno obsługuje niektóre dodatkowe typy, które nie są obsługiwane przez JSON Schema, takie jak `string-not-empty`, `array-not-empty`, `id` oraz `uid` (lub `uuid`, a także `guid`).

> Więcej o tej specyfikacji na stronie <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Dane wyjściowe

Konfigurując pliki _schema_ danych wyjściowych, pozwalasz Netuno przeprowadzać walidację wysyłanych parametrów poprzez porównanie ich z regułami JSON Schema.

> Więcej o <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

W razie jakiegokolwiek błędu walidacji dane wyjściowe są mimo to wysyłane do konsumenta usługi, ale komunikaty o błędach walidacji są prezentowane w `log` Netuno.

Aby skonfigurować reguły parametrów wyjściowych, należy utworzyć plik z rozszerzeniem `out.200.json` obok pliku kodu usługi; nazwa musi być taka sama jak nazwa usługi.

Gdzie **200** to kod stanu HTTP zwracany w odpowiedzi; aby obsłużyć wiele kodów stanu HTTP, wystarczy dodać kolejne pliki JSON z innym numerem.

Kilka przykładów:
- Usługa `zapisz.js` musiałaby mieć plik `zapisz.out.200.json`.
- Usługa `zapisz.post.js` musiałaby mieć plik `zapisz.post.out.200.json`.
- Usługa `zapisz/post.js` musiałaby mieć plik `zapisz/post.out.200.json`.

Przykład zawartości `out.200.json`:

```
{
    "type": "object",
    "properties": {
      "wynik": {
        "type": "boolean"
      }
    },
    "required": [
      "wynik"
    ]
}
```

Netuno obsługuje niektóre dodatkowe typy, które nie są obsługiwane przez JSON Schema, takie jak `string-not-empty`, `array-not-empty`, `id` oraz `uid` (lub `uuid`, a także `guid`).

> Więcej o tej specyfikacji na stronie <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Importowanie schematu

Netuno obsługuje importowanie _schemas_, co pozwala ponownie wykorzystać część _schema_ w wielu plikach JSON.

> Importowanie _schemas_ pozwala uniknąć powtarzania kodu.

Utwórz folder `_schema` w katalogu głównym folderu usług, w:

- `📂 server/services/_schema`

Teraz w konfiguracji JSON można importować _schemas_ za pomocą parametru `_schema` w JSON, na przykład:

```
{
    "summary": "Usuń produkty",
    "description": "Pozwala trwale usunąć produkty.",
    "_schema": "get/tylko-kod.in"
}
```

Oznacza to, że zostanie zaimportowany plik `_schema/get/tylko-kod.in.json`, w którym znajduje się parametr `_schema`.

## Specyfikacja i testy

Aby wygenerować pełną specyfikację wszystkich usług obsługujących OpenAPI z JSON Schema, przejdź na przykład do:

- http://localhost:9000/services/_openapi

Zostanie wyświetlony JSON z całą specyfikacją.

Aby przetestować, skopiuj cały wygenerowany JSON.

Otwórz Edytor Swagger: https://editor.swagger.io/

Usuń zawartość znajdującą się po lewej stronie i wklej JSON, a następnie potwierdź konwersję JSON na YAML.

Dzięki interfejsowi wygenerowanemu po prawej stronie można lepiej zrozumieć wszystkie dostępne usługi i przeprowadzać testy.

Umożliwia także automatyczne generowanie klientów dla innych technologii.

## Programowo

W folderze `_schema` możemy używać plików `.js`, które będą wykonywane wraz z generowaniem definicji OpenAPI, a także w procesie walidacji danych wejściowych i wyjściowych usług.

Poprzez programowanie schematu możemy generować dynamiczne walidacje, na przykład:
- Akceptować tylko kod, który istnieje w bazie danych.
- Na podstawie `UID` pobierać rekord z bazy danych i udostępniać go usługom.
- W przypadku `POST` lub `PUT` generować inny typ schematu niż w przypadku `DELETE`.

### Przykład z listą wartości

Wyobraź sobie, że mamy usługę, która otrzymuje kod określonej kategorii.

Nie możemy przyjmować dowolnej wartości jako kodu, ponieważ może to być wartość, która nie odpowiada prawidłowemu kodowi kategorii.

Możemy więc ograniczyć akceptowane kody wyłącznie do tych zarejestrowanych w bazie danych.

Tworzy się schemat w: `server/services/_schema/kategoria/kody.js`

```javascript
const dbKategorie = _db.query("SELECT kod FROM kategoria")

const listaKodow = _val.list()

for (const dbKategoria of dbKategorie) {
    listaKodow.add(dbKategoria.getString("kod"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listaKodow
    )
```

> W `listaKodow` będą znajdować się wszystkie kody kategorii zarejestrowane w bazie danych.

W usłudze możemy mieć następujący `JSON`, który wykorzystuje schemat `kategoria/kody`:

```json
{
  "summary": "Lista produktów w kategorii",
  "description": "Zwraca wszystkie produkty powiązane z określoną kategorią.",
  "type": "object",
  "properties": {
    "kategoria": {
      "type": "object",
      "properties": {
        "kod": {
          "_schema": "kategoria/kody"
        }
      },
      "required": [
        "kod"
      ]
    }
  },
  "required": [
    "kategoria"
  ]
}
```

W ten sposób możemy zapewnić, że usługa zostanie wykonana tylko wtedy, gdy kod będzie prawidłowy.

### Przykład z obiektem globalnym

Wyobraź sobie, że mamy wiele usług, które otrzymują `UID` klienta, i w każdej usłudze musimy uzyskać dostęp do bazy danych, aby pobrać dane klienta powiązanego z jego `UID`.

Możemy to scentralizować w programowanym schemacie, który na podstawie otrzymanego `UID` klienta pobiera dane klienta z bazy danych i zapisuje je w obiekcie globalnym dostępnym w kodzie usług.

Dzięki temu dane klienta są zawsze ładowane globalnie i automatycznie, gdy otrzymamy `UID` klienta.

Tworzymy programowany schemat w: `server/services/_schema/klient.js`

```javascript
const klient = _req.getValues('klient', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbKlient = _db.get('klient', klient.getString("uid"))
    
    if (dbKlient == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('blad', true)
                .set('kod', 'klient-nie-znaleziony')
        )
        _service.cancel()
    }
    
    _val.global().set('klient', dbKlient)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> Dzięki `_service.isGeneratingOpenAPIDefinition()` możemy sprawdzić, czy trwa generowanie definicji OpenAPI; w przeciwnym razie jest to wykonanie żądania HTTP.
> 
> Jeśli `UID` klienta nie zostanie znaleziony, zwracany jest kod 404 i następuje przerwanie wykonania usługi.
> 
> Zauważ, że używamy `_val.global()`, który pozwala globalnie udostępniać dane wszystkim plikom kodu wykonywanym podczas przetwarzania żądania HTTP.

Kontynuując przykład, mamy usługę, która wyświetla zakupy dokonane przez klienta.

Mamy walidację danych wejściowych dla usługi w: `server/services/klient/zakupy/post.in.json`

```json
{
    "summary": "Lista zakupów",
    "description": "Wyświetla zakupy dokonane przez klienta.",
    "type": "object",
    "properties": {
        "klient": {
            "_schema": "klient"
        }
    },
    "required": [
        "klient"
    ]
}
```

> Zauważ, że wartością `"_schema"` dla klienta jest nazwa pliku kodu, który zaprogramowaliśmy wcześniej w schemacie.

A w kodzie usługi zakupów klientów w: `server/services/klient/zakupy/post.js`

```javascript
const dbKlient = _val.global().getValues('klient')
...
```

Poprzez `_val.global()` otrzymujemy dane klienta z bazy danych, które zostały automatycznie załadowane przez kod schematu.

### Przykład z metodą HTTP

Możemy zwracać inny schemat dla każdego typu metody HTTP.

Na przykład możemy wygenerować schemat programowo dla operacji tworzenia, edycji lub usuwania portów sieciowych:

- W przypadku POST wykonywana jest operacja tworzenia, więc schemat nie zawiera UID, ale wymaga nazwy i numeru portu.
- W przypadku PUT wykonywana jest operacja edycji, więc schemat musi wymagać UID, nazwy i numeru portu sieciowego.
- W przypadku PUT lub DELETE potrzebny jest UID do wykonania odpowiednich operacji edycji i usuwania.

```javascript
const wlasciwosci = _val.map()
const wymagane = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    wlasciwosci.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    wymagane.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    wlasciwosci
        .set(
            'nazwa',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', minimalnyPort)
                .set('maximum', maksymalnyPort)
        )
    wymagane
        .add('nazwa')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        wlasciwosci
    )
    .set(
        'required',
        wymagane
    )
```

## Wideo

Poniżej znajduje się kilka przykładowych filmów pokazujących, jak rozwijać API zintegrowane z OpenAPI:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Podsumowanie

Dzięki obsłudze OpenAPI możemy tworzyć reguły walidacji z użyciem JSON Schema, co oferuje następujące zalety:

- Zapewnienie większego bezpieczeństwa danych wprowadzanych do usług.
- Ostrzeżenie w `log`, jeśli dane wyjściowe usługi nie są zgodne ze specyfikacją.
- Łatwe generowanie interfejsu do przeglądania usług i testowania.