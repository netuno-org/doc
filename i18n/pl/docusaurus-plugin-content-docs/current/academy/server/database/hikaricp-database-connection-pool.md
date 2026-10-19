---
id: hikaricp-database-connection-pool
title: HikariCP - pula połączeń z bazą danych
sidebar_label: Pula połączeń DB
---

## Co to jest

Tworzenie nowych połączeń z bazą danych wymaga pewnego przetwarzania, zwłaszcza gdy występuje uwierzytelnianie.

Dlatego, aby uzyskać większy wzrost wydajności, warto ponownie wykorzystywać połączenia i nie otwierać ciągle nowego połączenia.

Aby rozwiązać ten problem, stosuje się pulę połączeń, która sprawia, że gdy połączenie zostaje zwolnione, nie jest ono tak naprawdę zamykane i niszczone, lecz trafia do oczekiwania, aby można je było ponownie wykorzystać, gdy potrzebne będzie nowe połączenie.

Przynosi to duże korzyści wydajnościowe, a także pozwala na wiele dodatkowych parametrów konfiguracyjnych, w tym na najbardziej znany, czyli ograniczenie maksymalnej liczby połączeń, aby uniknąć przeciążenia bazy danych.

## HikariCP

Hikari po japońsku oznacza światło; jest to najbardziej wydajne i szeroko stosowane rozwiązanie w aplikacjach Java, znane z tego, że ma zdecydowanie najlepszą wydajność.

Oficjalne repozytorium HikariCP można znaleźć tutaj na [GitHub](https://github.com/brettwooldridge/HikariCP); sprawdź wykresy wydajności i informacje o konfiguracji.

Netuno używa HikariCP do zarządzania połączeniami z PostgreSQL, MariaDB, Microsoft SQL Server i Oracle.

## Konfiguracja

Konfiguracja HikariCP w Netuno odbywa się razem z konfiguracją bazy danych w aplikacjach.

Czyli w aplikacji, w folderze `config`, w konfiguracji środowiska, takiej jak:

- \_development.json
- \_production.json

Sekcja "db" zawiera konfigurację bazy danych.

Zarówno dla połączenia domyślnego (`default`), jak i dla każdego innego, parametry HikariCP można skonfigurować w ten sam sposób.

Zatem w sekcji `default`, gdzie znajdują się host, port, name (baza danych), username i password, wystarczy dodać kolejne parametry HikariCP, takie jak:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "moja_baza_danych",
            "username": "moj_uzytkownik",
            "password": "tajne_haslo",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

Na przykład każde z tych dodatkowych ustawień HikariCP powyżej służy do:

* `maximumPoolSize` określa maksymalny rozmiar puli połączeń w HikariCP; w tym przykładzie limit połączeń wyniesie 25.
* `minimumIdle` określa minimalną liczbę połączeń bezczynnych oczekujących w kolejce do użycia.
* `idleTimeout` to czas, przez jaki połączenie może pozostawać bezczynne.
* `maxLifetime` to maksymalny czas życia połączenia.

> Konfiguracja HikariCP musi być spójna z konfiguracją silnika bazy danych.
> Na przykład maksymalna liczba połączeń i limity czasu nigdy nie mogą przekraczać wartości zdefiniowanych w silniku bazy danych.

Każdy inny parametr HikariCP można skonfigurować w ten sam sposób, wystarczy dodać żądane parametry konfiguracji.

## Parametry

Poniżej znajduje się lista parametrów, które Netuno pozwala konfigurować dla HikariCP.

Każdy inny parametr konfiguracyjny HikariCP jest albo automatycznie wstępnie definiowany przez Netuno, albo nie ma zastosowania.

### Często używane

##### autoCommit

Ta właściwość kontroluje domyślne zachowanie automatycznego zatwierdzania połączeń zwracanych z puli.
Jest to wartość logiczna.

Domyślnie: `true`

##### connectionTimeout

Ta właściwość kontroluje maksymalny czas w milisekundach, przez jaki klient (czyli ty) będzie oczekiwać na połączenie z puli. Jeśli ten czas zostanie przekroczony, a połączenie nie będzie dostępne, zostanie zgłoszony wyjątek SQLException. Najniższy akceptowalny limit czasu połączenia to 250 ms.

Domyślnie: `30000 (30 sekund)`

##### idleTimeout

Ta właściwość kontroluje maksymalny czas, przez jaki połączenie może pozostawać bezczynne w puli. **To ustawienie ma zastosowanie tylko wtedy, gdy `minimumIdle` jest ustawione na wartość mniejszą niż `maximumPoolSize`.** Połączenia bezczynne nie są usuwane, gdy pula osiągnie liczbę połączeń `minimumIdle`. To, czy połączenie zostanie usunięte jako bezczynne, podlega maksymalnemu odchyleniu +30 sekund i średniemu odchyleniu +15 sekund. Połączenie nigdy nie zostanie usunięte jako bezczynne przed tym limitem czasu. Wartość 0 oznacza, że bezczynne połączenia nigdy nie są usuwane z puli. Minimalna dozwolona wartość to 10000 ms (10 sekund).

Domyślnie: `600000 (10 minut)`

##### maxLifetime

Ta właściwość kontroluje maksymalny czas życia połączenia w puli. Połączenie w użyciu nigdy nie zostanie usunięte; zostanie usunięte dopiero po zamknięciu. Dla każdego połączenia stosowane jest niewielkie negatywne odchylenie, aby zapobiec masowemu usuwaniu połączeń z puli. **Zdecydowanie zalecamy ustawienie tej wartości; powinna być ona o kilka sekund krótsza niż jakikolwiek limit czasu połączenia narzucony przez bazę danych lub infrastrukturę.** Wartość 0 oznacza maksymalny czas życia (nieskończony czas trwania), oczywiście z zastrzeżeniem ustawienia `idleTimeout`. Minimalna dozwolona wartość to 30000 ms (30 sekund).

Domyślnie: `1800000 (30 minut)`

##### minimumIdle

Ta właściwość kontroluje minimalną liczbę połączeń bezczynnych, które HikariCP stara się utrzymywać w puli. Jeśli liczba połączeń bezczynnych spadnie poniżej tej wartości, a łączna liczba połączeń w puli jest mniejsza niż rozmiar `maximumPoolSize`, HikariCP dokłada wszelkich starań, aby szybko i wydajnie dodać dodatkowe połączenia. Jednak w celu uzyskania maksymalnej wydajności i responsywności na wymagania szczytowe zalecamy nie ustawiać tej wartości i zamiast tego pozwolić HikariCP działać jako pula połączeń o stałym rozmiarze.

Domyślnie: tak samo jak rozmiar `maximumPoolSize`

##### maximumPoolSize

Ta właściwość kontroluje maksymalny rozmiar, jaki może osiągnąć pula, obejmując zarówno połączenia bezczynne, jak i będące w użyciu. Zasadniczo wartość ta określa maksymalną liczbę rzeczywistych połączeń z zapleczem bazy danych. Rozsądna wartość jest najlepiej określana przez środowisko uruchomieniowe. Gdy pula osiągnie ten rozmiar i nie ma dostępnych bezczynnych połączeń, wywołania getConnection() będą blokowane przez `connectionTimeout` milisekund przed przekroczeniem limitu czasu.

Domyślnie: `10`

### Rzadko używane

##### initializationFailTimeout

Ta właściwość kontroluje, czy pula będzie „szybko zawodzić”, jeśli nie można jej pomyślnie zainicjować początkowym połączeniem. Każda liczba dodatnia jest traktowana jako liczba milisekund przeznaczonych na próbę uzyskania początkowego połączenia; wątek aplikacji będzie zablokowany przez ten okres. Jeśli połączenie nie zostanie uzyskane przed upływem tego czasu, zostanie zgłoszony wyjątek. Ten limit czasu jest stosowany po okresie `connectionTimeout`. Jeśli wartość wynosi zero (0), HikariCP spróbuje uzyskać i zweryfikować połączenie. Jeśli połączenie zostanie uzyskane, ale walidacja się nie powiedzie, zostanie zgłoszony wyjątek i pula nie zostanie uruchomiona. Jednak jeśli nie można uzyskać połączenia, pula uruchomi się, ale późniejsze próby uzyskania połączenia mogą się nie powieść. Wartość mniejsza niż zero pomija wszelkie początkowe próby połączenia, a pula uruchamia się natychmiast, próbując uzyskać połączenia w tle. W konsekwencji późniejsze próby uzyskania połączenia mogą się nie powieść.

Domyślnie: `1`

##### catalog

Ta właściwość ustawia domyślny katalog dla baz danych, które obsługują koncepcję katalogów. Jeśli ta właściwość nie jest określona, używany jest katalog domyślny zdefiniowany przez sterownik JDBC.

Domyślnie: `domyślne ustawienie sterownika`

##### validationTimeout

Ta właściwość kontroluje maksymalny czas, przez jaki połączenie będzie testowane pod kątem żywotności. Wartość ta powinna być mniejsza niż `connectionTimeout`. Najniższy akceptowalny limit czasu walidacji to 250 ms.

Domyślnie: `5000`

##### leakDetectionThreshold

Ta właściwość kontroluje czas, przez jaki połączenie może przebywać poza pulą, zanim zostanie zarejestrowany komunikat wskazujący możliwy wyciek połączenia. Wartość 0 oznacza, że wykrywanie wycieków jest wyłączone. Najniższa akceptowalna wartość umożliwiająca wykrywanie wycieków to 2000 (2 sekundy).

Domyślnie: `0`

##### schema

Ta właściwość ustawia domyślny schemat dla baz danych, które obsługują koncepcję schematów. Jeśli ta właściwość nie jest określona, używany jest schemat domyślny zdefiniowany przez sterownik JDBC.

Domyślnie: `domyślne ustawienie sterownika`

### DataSource

Można również dodać konfiguracje do DataSource, czyli dodatkowe ustawienia specyficzne dla używanego typu bazy danych.

Aby wykonać tę bardziej zaawansowaną konfigurację, należy dodać obiekt konfiguracji `datasource` wewnątrz obiektu konfiguracji połączenia z bazą danych.

Na przykład tak:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "moja_baza_danych",
            "username": "moj_uzytkownik",
            "password": "tajne_haslo",
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Zwróć uwagę, że wartości ustawień parametrów DataSource są typu _string_; Netuno i tak zawsze automatycznie konwertuje je na _string_.

## Podsumowanie

Za pomocą HikariCP można wykonywać zaawansowane konfiguracje do zarządzania obciążeniem i zachowaniem połączeń z bazą danych.

Można je optymalizować dla najróżniejszych scenariuszy, zapewniając wysoką wydajność.