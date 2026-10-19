---
id: server
title: Serwer
sidebar_label: Serwer
---

Rozwój backendu i API.

## Katalog serwera

Katalog `📂 server` zawiera zestaw plików i katalogów, które tworzą backend aplikacji.

Wszystko, co znajduje się w katalogu `📂 server`, jest wykorzystywane w przetwarzaniu serwera backendu, m.in. integracje, API, baza danych, bezpieczeństwo i uwierzytelnianie, Cron Jobs oraz wiele innych.

## Struktura katalogu

W katalogu `📂 server` znajduje się następująca struktura:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Akcje

W katalogu `📂 actions` można dodawać niestandardowe akcje dostosowane do potrzeb (_hooks_) do operacji CRUD formularzy generowanych automatycznie dla backoffice; w zależności od struktury danych można tu wykonać wiele ingerencji w dane.

Na przykład przy usuwaniu klienta konieczne jest usunięcie wszystkich jego zamówień, a podczas tworzenia nowego produktu należy zintegrować go z innym systemem. Krótko mówiąc, wszelkie prace rozwojowe bezpośrednio związane z danymi można wykonać tutaj.

Akcje są inspirowane `triggers` baz danych, ale na poziomie wykonywania kodu.

Można więc programować konkretne operacje przy tworzeniu, zmianie i usuwaniu danych.

## Komponenty

Katalog `📂 components` służy do definiowania niestandardowych typów pól w formularzach backoffice, które mogą same wykonywać manipulację danymi.

Można tworzyć komponenty za pomocą skryptów, aby zapewnić nowy, specyficzny typ pola w aplikacji.

## Core

Katalog `📂 core` umożliwia wstrzykiwanie kodu w przepływ przetwarzania żądań HTTP.

Służy również do współdzielenia kodu między różnymi usługami i innymi elementami.

Plik `_config.js` jest wykonywany po załadowaniu konfiguracji przy każdym żądaniu HTTP; jest wykonywany po skrypcie konfiguracji środowiska, który znajduje się w katalogu `📂 config` aplikacji.

Plik `_init.js` służy do wstrzyknięcia pewnej instrukcji przy pierwszej inicjalizacji aplikacji.

### Przetwarzanie żądań HTTP

W przepływie przetwarzania żądań HTTP do dowolnego adresu URL aplikacji wykonywane są odpowiednie skrypty:

- `_request_start.js` jest wykonywany, gdy żądanie HTTP dotrze do serwera Netuno.
- `_request_url.js` jest wykonywany, gdy URL jest przetwarzany przez Netuno; można zmienić URL na inny cel.
- `_request_close.js` jest wykonywany, gdy odpowiedź na żądanie HTTP jest zamykana.
- `_request_end.js` jest wykonywany, gdy żądanie HTTP zostanie ostatecznie zakończone.
- `_request_error.js` jest wykonywany, gdy wystąpi błąd podczas przetwarzania żądania HTTP.

### Przetwarzanie usług API

W przepływie przetwarzania dowolnej usługi API aplikacji wykonywane są następujące skrypty:

- `_service_config.js` jest wykonywany przed rozpoczęciem wykonywania usługi; służy do definiowania konfiguracji wykonania usługi, między innymi. Można określić, czy usługa może zostać uruchomiona, czy nie, co stanowi kontrolę bezpieczeństwa dostępu do usługi API.
- `_service_start.js` jest wykonywany, gdy tylko jakaś usługa zaczyna być przetwarzana.
- `_service_end.js` jest wykonywany po zakończeniu przetwarzania jakiejś usługi.
- `_service_error.js` jest wykonywany, gdy wystąpi błąd podczas przetwarzania jakiejś usługi.

## Usługi - API

W katalogu `📂 services` tworzone są usługi, które składają się na API aplikacji.

Usługi można pisać w różnych językach: JavaScript, Python, Java, Kotlin, Ruby lub Groovy.

Ponieważ Netuno jest poliglotą, każdy plik skryptu można zmienić na inny obsługiwany język programowania; wystarczy, aby rozszerzenie plików odpowiadało danemu językowi.

Nie są wymagane dodatkowe konfiguracje ze względu na używany język programowania; wystarczy utworzyć plik usługi z poprawnym rozszerzeniem odpowiadającym językowi programowania.

## Setup

W katalogu `📂 setup` znajduje się kod generowany automatycznie przez silnik Netuno, który definiuje schematy bazy danych, a także miejsce, w którym możemy umieścić wczytywanie danych niezbędnych do działania aplikacji.

Skrypt `_start.js` jest wykonywany przed rozpoczęciem procesu budowania bazy danych.

Skrypt `_end.js` jest wykonywany po zakończeniu procesu budowania bazy danych.

Zgodnie z budową struktury danych Netuno tworzy tutaj, w katalogu `📂 setup`, automatycznie kod niezbędny do odtworzenia całej struktury danych w nowej bazie danych lub do odtworzenia elementów brakujących w innej bazie danych, w której aplikacja ewentualnie zostanie uruchomiona.

 ## Szablony

Katalog `📂 templates` zawiera treść HTML stron backoffice aplikacji, które są generowane przez serwer Netuno.

Katalog `📂 dev` zawiera plik `dashboard.html`, który umożliwia zmianę obszaru roboczego w trybie pracy dewelopera.

Plik `dashboard.html` znajdujący się w katalogu głównym szablonów zawiera HTML ogólnego obszaru roboczego backoffice.

### Natywne szablony

W katalogu `📂 _` można zastąpić dowolny ogólny szablon, czyli można zmienić domyślne szablony Netuno.

- [Tutaj znajdują się natywne szablony Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Jeśli nazwy katalogów i/lub plików pokrywają się z nazwami natywnych szablonów w tym katalogu, używany jest szablon znajdujący się w tym katalogu zamiast szablonu natywnego.

Innymi słowy, wystarczy odtworzyć tę samą strukturę natywnego szablonu w katalogu `📂 _`, aby go zastąpić.

### Skrypty

Szablony skryptów wstrzykują pliki kodu JavaScript na końcu stron w następującym celu:

1. `scripts.html` dodaje kod JavaScript na końcu strony **backoffice**.
2. `scripts_dev.html` dodaje kod JavaScript na końcu strony **obszaru roboczego dewelopera**.
3. `scripts_login.html` dodaje kod JavaScript na końcu strony **logowania**.

### Style

Szablony stylów wstrzykują pliki stylów na początku stron w następującym celu:

1. `styles.html` dodaje kod CSS na początku strony **backoffice**.
2. `styles_dev.html` dodaje kod CSS na początku strony **obszaru roboczego dewelopera**.
3. `styles_login.html` dodaje kod CSS na początku strony **logowania**.