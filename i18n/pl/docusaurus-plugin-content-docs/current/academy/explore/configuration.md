---
id: configuration
title: Konfiguracja
sidebar_label: Konfiguracja
---

## Podstawowa konfiguracja aplikacji

Każda aplikacja utworzona w Netuno ma określone konfiguracje, które definiują, jak ma łączyć się z bazami danych, kluczami dostępu i innymi podstawowymi parametrami.

Netuno wykorzystuje inteligentny system, który organizuje te konfiguracje zgodnie ze środowiskiem, w którym aplikacja działa — lokalnie, na serwerze oficjalnym lub w dowolnym innym miejscu.

Konfiguracje Twojej aplikacji są skupione w folderze **config**, znajdującym się w katalogu głównym projektu.

**Domyślna ścieżka:** `moja-aplikacja/config`

### Środowiska wykonawcze

W folderze config pliki są nazywane zgodnie ze środowiskiem, dla którego zostały utworzone. Netuno automatycznie ładuje tylko pliki odpowiadające środowisku, w którym aktualnie działa:

- **Programistyczne**: Pliki nazwane `_development` są odczytywane tylko wtedy, gdy środowisko Netuno jest ustawione jako programistyczne.

- **Produkcyjne**: Pliki nazwane `_production` są odczytywane tylko wtedy, gdy środowisko Netuno jest ustawione jako produkcyjne.


### Typy plików konfiguracyjnych

Dla każdego środowiska możesz używać dwóch typów plików, które współpracują ze sobą:

### JSON

- `_development.json` 
- `_production.json`

**Funkcja:** Przechowywanie statycznych definicji i parametryzacji.

**Przykład:** Umieszczenie danych dostępowych do bazy danych, URL-i zewnętrznych API i stałych konfiguracji.

### JS

- `_development.js` 
- `_production.js`

**Funkcja:** Wykonywanie logiki w momencie ładowania konfiguracji.

**Przykład:** Dynamiczna zmiana konfiguracji lub wykonywanie zadań i wstępnych przetworzeń potrzebnych, zanim aplikacja w pełni się uruchomi.


### Ustawianie ogólnego środowiska

Aby Twoje aplikacje wiedziały, której konfiguracji mają używać, musisz poinformować serwer Netuno, w jakim „trybie” pracuje. Ta globalna konfiguracja jest definiowana w jednym pliku w katalogu głównym Netuno.

1. **Znajdź globalny plik konfiguracyjny:** Przejdź do katalogu głównego, w którym zainstalowano Netuno. Znajdź i otwórz plik `config.js`.
2. **Znajdź zmienną środowiskową:** W pliku wyszukaj właściwość `config.env`.
3. **Ustaw żądane środowisko:** Zmień wartość zmiennej zgodnie ze środowiskiem, które chcesz aktywować. 


#### Środowisko programistyczne
Używane, gdy programujesz i testujesz na własnym komputerze.

```javascript
// W pliku ./config.js w katalogu głównym Netuno
config.env = 'development'
```

#### Środowisko produkcyjne
Używane, gdy projekt jest ukończony i działa na oficjalnym serwerze dla użytkowników.

```javascript
// W pliku ./config.js w katalogu głównym Netuno
config.env = 'production'
```

#### Inne środowiska (niestandardowe)

Netuno jest elastyczny i pozwala tworzyć niestandardowe nazwy środowisk, na przykład: `test`, `homologacja` lub `staging`.

```javascript
// W pliku ./config.js w katalogu głównym Netuno
config.env = 'test'
```

> Konfiguracja aplikacji musi zaczynać się od `_`, mieć rozszerzenie `.json`, a także plik z rozszerzeniem `.js`, oba dla tego samego środowiska.

## Repozytorium GIT

Podczas używania Git do wersjonowania kodu aplikacji kluczowe jest zapewnienie bezpieczeństwa danych.

Pliki konfiguracyjne zwykle zawierają poufne informacje, takie jak hasła do baz danych, klucze prywatnych API itp. Dlatego **nigdy nie należy wysyłać rzeczywistych plików konfiguracyjnych do repozytorium**.

Aby mieć pewność, że hasła nie wyciekną, a jednocześnie utrzymać projekt udokumentowany dla innych programistów, wykonaj dwa kroki:

### 1. Ukryj rzeczywiste pliki

W katalogu głównym aplikacji otwórz (lub utwórz) plik `.gitignore`. Dodaj ścieżki do swoich plików konfiguracyjnych `.json`, aby Git całkowicie je ignorował.

**Przykład tego, co dodać do `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Przykładowy plik konfiguracyjny

Utwórz przykładowy plik z danymi potrzebnymi, aby nowi programiści mogli łatwo skonfigurować projekt.

- Przejdź do folderu config/ swojej aplikacji.
- Utwórz plik o nazwie `przyklad.json`.
- Skopiuj do niego strukturę swojego `_development.json`, pozostawiając tylko nazwy pól.

Zobacz, jak powinien wyglądać Twój **config/przyklad.json**:

```json
{
  "database": {
    "host": "WPISZ_TUTAJ_HOST",
    "user": "TWOJ_UZYTKOWNIK",
    "password": "TWOJE_HASLO"
  }
}
```

#### Jak uzyskiwać dostęp do konfiguracji w kodzie

Po zdefiniowaniu zmiennych i kluczy w plikach konfiguracyjnych (takich jak `_development.json`) będziesz musiał użyć ich w logice aplikacji — na przykład podczas tworzenia usługi, która łączy się z API i potrzebuje zapisanego *tokena* dostępu. 

W Netuno do tych konfiguracji można uzyskać dostęp przez natywny zasób `_app`.

#### Jak pobierać dane

W dowolnym kodzie wykonywanym przez serwer (np. w folderze `server/services/`) użyjesz funkcji `_app.config()` do pobrania wartości z aktywnego pliku konfiguracyjnego.

Aby zrozumieć, jak działa to powiązanie, wyobraź sobie, że w pliku konfiguracyjnym (`config/_development.json`) zdefiniowano następujące dane:

```json
{
  "nazwa": "Moja Aplikacja",
  "wersja": 2
}
```
 
 Aby pobrać wartość klucza „nazwa” i wypisać ją w konsoli (logu) serwera, użyj następującego kodu w swoim pliku usługi .js:

```javascript
// 1. Netuno zagląda do pliku JSON, szuka klucza "nazwa" i pobiera jego wartość.
// 2. Następnie zapisuje tę wartość w zmiennej JavaScript, którą nazywamy 'nazwaAplikacji'.
let nazwaAplikacji = _app.config().getString("nazwa");

// 3. Wypisuje zawartość naszej zmiennej w terminalu Netuno: "Moja Aplikacja"
_log.info(nazwaAplikacji);
```

## Konfiguracje niestandardowe

Oprócz standardowych konfiguracji bazy danych i serwera możesz tworzyć własne zmienne konfiguracyjne. 

Jest to bardzo przydatne do definiowania reguł biznesowych, na przykład „maksymalna liczba elementów na stronę” lub „interwał wysyłania e-maili”, bez konieczności zmiany kodu aplikacji za każdym razem, gdy te reguły się zmienią.

Te zmienne są przechowywane w bloku `"settings"` w plikach konfiguracyjnych JSON, takich jak `_development.json` lub `_production.json`.  

### Struktura JSON i widoczność (publiczne vs. prywatne)

Podczas tworzenia konfiguracji kluczowe jest rozdzielenie tego, co może widzieć interfejs użytkownika (Frontend), od tego, co powinno pozostać chronione wyłącznie na serwerze (Backend).

* **Zmienne prywatne:** Znajdują się w bloku `"settings"`. Dostęp ma tylko serwer.
* **Zmienne publiczne:** Znajdują się w podbloku `"public"`. Są wysyłane do interfejsu użytkownika (folder `ui`) obszaru administracyjnego, na przykład podczas tworzenia dashboardów.

**Przykład struktury pliku `.json`:**

```json
{
  ...
  "settings": {
    "public": {
      "elementyNaStrone": 10
    },
    "interwalEmaili": 10
  }
}
```

### Jak uzyskiwać dostęp do konfiguracji w kodzie
Sposób pobierania tych danych zmienia się w zależności od tego, gdzie programujesz:

**1. Na serwerze / Backend (usługi)**

Aby uzyskać dostęp do konfiguracji ogólnych lub prywatnych, użyj zasobu `_app.settings()` w kodzie serwera (pliki .js w folderze server).  

```javascript
// Uzyskuje dostęp do prywatnej zmiennej "interwalEmaili"
const interwalEmaili = _app.settings().getInt("interwalEmaili");

_log.info("Zdefiniowany interwał wynosi: " + interwalEmaili);
```

**2. W interfejsie / Frontend (UI)**

Podczas tworzenia interfejsu (pliki w folderze ui) możesz uzyskać dostęp do wszystkiego, co zdefiniowano w bloku "public". W tym celu użyj globalnego obiektu `netuno.config.app.settings`.

```javascript
// Uzyskuje dostęp do publicznej zmiennej "elementyNaStrone" w frontendzie
const elementyNaStrone = netuno.config.app.settings.elementyNaStrone;

console.log("Wyświetlanie " + elementyNaStrone + " elementów w tabeli.");
```
## Podsumowanie

System konfiguracji Netuno zapewnia elastyczność i bezpieczeństwo strukturalne Twojej aplikacji. Dzięki niemu można:

* **Zarządzać wieloma środowiskami:** Tworzyć i obsługiwać różne konteksty wykonawcze (programistyczny, produkcyjny itp.) z niezależnymi parametryzacjami.
* **Dostosowywać zmienne:** Używać bloku `settings` do dodawania konfiguracji specyficznych dla Twojej działalności. 
* **Rozdzielać odpowiedzialności:** Izolować i chronić konfiguracje zastrzeżone dla backendu od tych, które powinny być dostępne w frontendzie.