---
id: import
title: Importowanie
sidebar_label: Importowanie
---

## Wprowadzenie

Gdy tworzymy oprogramowanie, musimy korzystać z wielu połączonych plików kodu, aby
organizować i ponownie wykorzystywać funkcjonalności, unikać powtórzeń oraz ułatwiać utrzymanie
dzięki centralizacji przydatnych funkcji. Zmniejsza to ogólną liczbę linii kodu, a w konsekwencji
znacznie redukuje liczbę błędów.

Dlatego centralizujemy przydatny kod w innym pliku kodu, który może być importowany przez
inne pliki i łatwo ponownie wykorzystywany.

Poniżej przedstawiono niektóre rozwiązania, które Netuno oferuje do ponownego wykorzystywania
kodu.

## Wielojęzyczny rdzeń

W dowolnym języku programowania obsługiwanym przez Netuno możemy importować dowolny
plik kodu znajdujący się w folderze `server/core` aplikacji.

Uproszczony sposób oferowany przez Netuno polega na użyciu specjalnego formatu komentarza
do importowania kodu, w którym zakomentowana linia ma prefiks `_core:`, a następnie
znajduje się ścieżka pliku kodu od folderu `server/core` aplikacji.

Aby więc zaimportować plik kodu:

- `server/core/przyklad/plik`

> Plik musi mieć rozszerzenie zgodne z używanym językiem programowania.

Można importować inny plik na początku dowolnego pliku kodu, na przykład w usługach.

W przypadku JavaScript, Groovy i Kotlin:

```javascript
// _core: exemplo/arquivo

...
```

W przypadku Python i Ruby:

```python
# _core: przyklad/plik

...
```

> W tym specjalnym komentarzu importu nie trzeba podawać rozszerzenia pliku,
> Netuno wykryje je automatycznie.

Zmienne, stałe, funkcje, klasy itp. zadeklarowane w importowanym pliku są udostępniane
do użycia w pliku, który wykonuje import za pomocą tego typu komentarza na początku.

Aby zaimportować wiele plików, wystarczy powtórzyć komentarz importu ze ścieżkami innych plików.

W przypadku JavaScript, Groovy i Kotlin, aby zaimportować wiele plików:

```javascript
// _core: exemplo/arquivo1
// _core: exemplo/arquivo2
// _core: exemplo/arquivo3

...
```

W przypadku Python i Ruby, aby zaimportować wiele plików:

```python
# _core: przyklad/plik1
# _core: przyklad/plik2
# _core: przyklad/plik3

...
```

## Zasób Exec

Dzięki zasobowi `_exec` możemy importować kod w dowolnym momencie podczas wykonywania.

> Zmienne, stałe, funkcje, klasy itp. zadeklarowane w importowanym pliku kodu mogą być używane.

### core

Aby programowo wykonać import pliku kodu, w tym przypadku z folderu
`📁 server/core`:

```javascript
_exec.core('sciezka/do/pliku')
```

> Nie trzeba podawać rozszerzenia pliku, Netuno wykryje je automatycznie.

### services

Aby programowo wykonać import pliku kodu, w tym przypadku z folderu
`📁 server/services`:

```javascript
_exec.service('sciezka/do/pliku')
```

> Nie trzeba podawać rozszerzenia pliku, Netuno wykryje je automatycznie.

## JavaScript

Netuno zapewnia podstawę do programowania w JavaScript, będącym najczęściej używanym językiem,
zwłaszcza że w JavaScript programujemy zarówno front-end, jak i back-end, co pozwala na tworzenie
full-stack przy użyciu tego samego języka programowania.

Netuno analizuje kod i automatycznie wykrywa, czy używane jest `import` (ECMAScript Modules), czy
`require` (CommonJS).

> Nie należy mieszać wzorca `import` z `require`; trzeba używać jednego albo drugiego.

Dzięki temu możemy zawsze używać rozszerzenia `.js` w plikach kodu, a używając instrukcji z `import`,
Netuno przetworzy je jako ECMAScript Modules i wtedy możemy użyć `export default`.

> Zaleca się używanie `import` zawsze, gdy to możliwe, ponieważ jest to nowoczesny standard.

### Importowanie kodu

Przy korzystaniu z natywnego importu, w przeciwieństwie do poprzednich przykładów, zaimportowane
zostanie tylko to, co zostało jawnie wyeksportowane, zgodnie ze standardem CommonJS (`require`) lub
ECMAScript Modules (`import`).

W folderze `📁 server` znajduje się plik `package.json`, w którym powinniśmy mieć następującą instrukcję:

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

Dzięki temu możemy importować dowolny plik w dowolnym innym pliku kodu, na przykład:

```js title="server/services/profil/pobierz.js"
import profil from "#core/lib/profil.js";

const profilBazy = profil.pobierzZalogowanego();
```

Ponieważ używany jest `import`, w importowanym pliku zostanie użyty `export default`:

```js title="server/core/lib/profil.js"
import {_db, _user} from "@netuno/server-types";

export default {
  pobierzZalogowanego: () => {
    return _db.form("profil")
      .where(_db.where("profil_uzytkownika_id").equal(_user.id))
      .first();
  }
};
```

> Nie zaleca się w tej samej aplikacji lub projekcie mieszania użycia `import` (ECMAScript Modules) i
> `require` (CommonJS), nawet w różnych plikach i różnych sytuacjach; lepiej zawsze przyjąć
> jednolitą standaryzację.
> Zalecamy używanie `import`, ponieważ jest to nowoczesna metoda.

Alternatywnie, jeśli zamiast `import` (ECMAScript Modules) zostanie użyty `require` (CommonJS):

```js title="server/services/profil/pobierz.js"
const profil = require("#core/lib/profil.js");

const profilBazy = profil.pobierzZalogowanego();
```

Ponieważ używany jest `require`, w importowanym pliku zostanie użyty `module.exports`:

```js title="server/core/lib/profil.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  pobierzZalogowanego: () => {
    return _db.form("profil")
      .where(_db.where("profil_uzytkownika_id").equal(_user.id))
      .first();
  }
};
```

### Autouzupełnianie i walidacja kodu

Aby mieć funkcję autouzupełniania kodu zintegrowaną z walidacją kodu w edytorach, powinniśmy w folderze
`📁 server` aplikacji zainstalować [Typy serwera](https://www.npmjs.com/package/@netuno/server-types).

> Typy serwera (`@netuno/server-types`) to definicja wszystkich zasobów wielojęzycznego programowania
> low-code w TypeScript, co pozwala edytorom wykryć wszystko, co oferuje wielojęzyczny framework low-code
> Netuno, ale ponieważ jest to TypeScript, służy jedynie do wspomagania kodu w JavaScript.

W folderze `📁 server` zainstaluj [Typy serwera](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Dzięki temu w kodzie ogólnie można importować dowolny z dostępnych wielojęzycznych zasobów low-code
w frameworku Netuno, na przykład ten kod usługi:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const nazwa = _req.getString("nazwa");

_db.form("produkt")
  .set("nazwa", nazwa)
  .insert();

_out.json(
  _val.map()
    .set("nazwa", nazwa)
    .set("wynik", true)
);
```

Zauważ, że edytor będzie walidować i autouzupełniać kod, co jest niezwykle przydatne i znacznie
przyspiesza rozwój.

> W niektórych edytorach może być konieczna pewna konfiguracja/aktywacja, aby wykryć folder `📁 server`
> jako katalog główny kodu; na przykład Visual Studio Code wykrywa go automatycznie, ale w WebStorm trzeba
> kliknąć prawym przyciskiem myszy na folderze `server` i wybrać `Mark Directory As > Resource Root`, a
> następnie ponownie otworzyć projekt.

## JS i NPM – zależności zewnętrzne

Można instalować zewnętrzne zależności **NPM** w folderze `📁 server` aplikacji, w którym
znajduje się `package.json`.

Jednak w przeciwieństwie do tego, co zalecaliśmy wcześniej, do importowania bibliotek zewnętrznych
używamy `require` i w tym przypadku możemy mieszać go z `import` plików wewnętrznych projektu, co nie jest
zbyt eleganckie, ale jest możliwe.

Aby dodać zależność, wystarczy zainstalować ją poleceniem `bun add`.

Na przykład można zainstalować `momentjs`:

- `bun add moment`

Do importowania zależności używany jest `require`, oto przykład:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Inny przykład z `dayjs`, najpierw zainstaluj:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Zobacz pełny przykład z użyciem `date-fns`, najpierw zainstaluj:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profil from "#core/lib/profil.js";

const profilBazy = profil.pobierzZalogowanego();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Zależność od bibliotek zewnętrznych to sytuacje wyjątkowe; zwykle znajdujemy wszystko, czego potrzebujemy,
> w wielojęzycznym frameworku low-code Netuno.

### Natywne moduły NodeJS

Ponieważ GraalVM nie jest w pełni kompatybilna z natywnymi modułami NodeJS, aby to obejść, można uzyskać
większą kompatybilność z zależnościami zewnętrznymi, które implementują alternatywne rozwiązanie dla tych modułów.

Można zainstalować niektóre zależności zewnętrzne jako alternatywę, które oferują kompatybilność tak,
jakby były natywnymi modułami.

Poniżej znajduje się lista modułów używanych jako alternatywy do zastąpienia natywnych modułów NodeJS oraz
odpowiednie polecenia instalacji:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Pamiętaj, musisz zainstalować powyższe moduły w folderze `📁 server` aplikacji; zapewniana jest
kompatybilność z natywnymi modułami NodeJS, przy czym używane będą te alternatywne moduły.

## Podsumowanie

Możemy organizować nasz kod na różne sposoby, ale ponowne wykorzystywanie kodu i unikanie
powtórzeń jest zawsze bardzo ważne.

Im więcej linii kodu, tym większe prawdopodobieństwo wystąpienia błędów.

Pamiętaj, aby dobrze organizować kod i centralizować jego ponowne wykorzystanie; ułatwia to utrzymanie,
zapobiega błędom i ogólnie zwiększa produktywność.

Chociaż nadal istnieją pewne ograniczenia w korzystaniu z zależności zewnętrznych, pracujemy
nad ulepszeniem ekosystemu.

W międzyczasie Netuno oferuje różne zasoby low-code i wielojęzyczne, które zaspokajają większość potrzeb.