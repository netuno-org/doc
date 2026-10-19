---
id: cli
title: Wiersz poleceń
sidebar_label: Wiersz poleceń
---


Interfejs wiersza poleceń Netuno jest głównym narzędziem do zarządzania środowiskiem programistycznym. Za jego pomocą możesz szybko sprawdzić informacje o systemie, zarządzać aplikacjami i konfigurować serwer.

#### Wymagania wstępne

- **Terminal:** Musisz mieć otwarty terminal (Wiersz polecenia, PowerShell lub Bash) w katalogu głównym, w którym zainstalowano Netuno.

Oto początkowe polecenia służące sprawdzeniu, czy Twoje środowisko jest gotowe do użycia.

| OPCJA    | OPIS    |
|----------|--------------|
| `help` | Umożliwia wyświetlenie wszystkich poleceń dostępnych w Netuno. |
| `version` | Umożliwia wyświetlenie bieżącej wersji Netuno. |

#### Wyświetlanie dostępnych poleceń

Jeśli masz wątpliwości, jakie operacje możesz wykonać, skorzystaj z polecenia pomocy. Zwróci ono pełną listę funkcji.

```shell
./netuno help
```
#### Wyświetlanie wersji Netuno

Znajomość używanej wersji jest kluczowa dla zapewnienia zgodności ze skryptami i konkretnymi modułami.

```shell
./netuno version
```

## Instalacja

Przed rozpoczęciem pracy z programowaniem konieczna jest instalacja silnika Netuno w Twoim środowisku. Więcej informacji znajdziesz na naszej stronie [Instalacja](/docs/get-started/installation).

W tej sekcji opisano parametry, których można użyć podczas procesu instalacji, aby zautomatyzować lub zoptymalizować ten proces.

| OPCJA | OPIS |
|----------|--------------|
| `checksum` | Aktualizuje sumę kontrolną (checksum) wszystkich plików zainstalowanego pakietu. |
| `force` | Wymusza zastąpienie wszystkich plików, nawet jeśli istnieją lokalne zmiany.|
| `graal=true/false` | Określa użycie GraalVM w celu uzyskania wyższej wydajności podczas uruchamiania aplikacji. |
| `path=[katalog]`| Ręcznie określa ścieżkę (katalog), w którym zostanie zainstalowane Netuno.|
| `remove` | Całkowicie usuwa z systemu wszystkie pliki związane z Netuno.|
| `version=[wersja]`| Wybiera konkretną wersję do zainstalowania. Użyj wartości latest, aby wybrać wersję rozwojową.|
| `yes`| Automatycznie odpowiada "TAK" na wszystkie potwierdzenia, pomijając ostrzeżenia o utracie danych.|

#### Przykład aktualizacji sumy kontrolnej:

```shell
./netuno install checksum
```

#### Przykład wymuszenia nadpisania wszystkich lokalnych zmian:

```shell
./netuno install force
```

#### Przykład wyłączenia GraalVM:

```shell
./netuno install graal=false
```

> GraalVM jest domyślnie aktywna i pobierana automatycznie podczas instalacji Netuno.

#### Przykład określenia ścieżki instalacji:

```shell
./netuno install path ='katalogNetuno'
```
#### Przykład usunięcia wszystkich katalogów Netuno:

```shell
./netuno install remove
```

#### Przykład wyboru wersji Netuno, która ma zostać zainstalowana:

```shell
./netuno install version='latest'
```

##### Przykład odpowiadania TAK na wszystkie pytania:
```shell
./netuno install yes 
```

## Serwer

Po zakończeniu instalacji uruchom serwer, aby rozpocząć tworzenie swoich aplikacji.

Aby uruchomić serwer z domyślnymi ustawieniami, wykonaj poniższe polecenie w katalogu głównym Netuno:

```shell
./netuno server
```

> Domyślnie serwer korzysta z portu 9000. Gdy terminal wskaże, że system jest gotowy, będziesz mógł uzyskać dostęp do panelu zarządzania pod adresem: http://localhost:9000/

W tej sekcji opisano parametry, których można użyć podczas uruchamiania serwera.

OPCJA | OPIS |
|----------|--------------|
| `app=[nazwa_aplikacji]` | Określa konkretnie, która aplikacja ma zostać uruchomiona |
| `host=[IP/nazwa hosta]` | Pozwala zmienić nazwę hosta Netuno |
| `launch=true/false` | Określa, czy Netuno ma automatycznie otwierać przeglądarkę |
| `npm` | Automatycznie wykonuje polecenie 'npm watch', aby kompilować frontend aplikacji w czasie rzeczywistym |
| `port=[numer]` | Określa port uruchamiania serwera |
| `secret=[hasło]` | Ustawia hasło zabezpieczające umożliwiające dostęp do zdalnego zarządzania serwerem |
| `web=[katalog]` | Zmienia wstępnie zdefiniowany katalog główny projektu (web home) |

Domyślnie Netuno używa katalogu **'webapp'** do przechowywania wszystkich plików niezbędnych do jego działania.

**Uwaga przy zmianie katalogu:** Jeśli użyjesz parametru web=[katalog], aby zmienić nazwę katalogu głównego, pamiętaj, że musisz również fizycznie zmienić nazwę katalogu w swoim systemie plików. Polecenie jedynie informuje kod Netuno, gdzie szukać plików — nie zmienia nazw katalogów automatycznie.

#### Przykład uruchomienia serwera dla konkretnej aplikacji:

```shell
./netuno server app=mojaapka
```

#### Przykład zmiany nazwy hosta:

```shell
./netuno server host=localhost
```

#### Przykład określenia, czy Netuno ma automatycznie uruchamiać przeglądarkę:

```shell
./netuno server launch=false
```

>Domyślnie Netuno otwiera przeglądarkę i uruchamia link http://localhost:9000.

#### Przykład uruchomienia npm w celu automatycznego zbudowania frontendu

```shell
./netuno server npm
```

#### Przykład zmiany portu:

```shell
./netuno server port=10000
```

#### Przykład ustawienia hasła dostępu do zdalnego zarządzania serwerem:

```shell
./netuno server secret='p#ssw@rd'
```

#### Przykład zmiany domyślnego katalogu web:

```shell
./netuno server web=webapp
```

## Licencja

Aby rozpocząć pracę z Netuno, konieczna jest rejestracja Twojego środowiska.

Aby zarządzać licencją, użyj polecenia bazowego:

```shell
./netuno license
```

> Obecnie Netuno oferuje trzy rodzaje licencji: **Community, Standard i Enterprise**.

W tej sekcji opisano działania dostępne w celu skonfigurowania lub sprawdzenia licencji.

| OPCJA    | OPIS    |
|----------|--------------|
| `create , change` | Rozpoczyna proces tworzenia nowej licencji lub zmiany bieżącej |
| `key` | Wyświetla aktywny klucz licencji w Twoim środowisku |
| `mail=[twoj@mail.com]` | Ustawia adres e-mail powiązany z kontem licencji |
| `type=[community/standard/enterprise]`  | Określa typ licencji|


#### Przykład utworzenia licencji:

```shell
./netuno license create
```

#### Przykład wyświetlenia klucza licencji:

```shell
./netuno license key
```
##### Przykład ustawienia adresu e-mail i typu licencji:

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## Aplikacja

Po skonfigurowaniu serwera i aktywowaniu licencji możesz rozszerzyć swój ekosystem, tworząc nowe rozwiązania.

```shell
./netuno app
```

Wygenerowane pliki zostaną automatycznie uporządkowane w strukturze katalogów Netuno.

Aby uzyskać dostęp do plików swojej aplikacji lub je edytować, przejdź następującą ścieżką od katalogu głównego systemu: **webapp / apps / [nazwa_twojej_aplikacji]**

#### Struktura katalogów

- **webapp**: To katalog główny zawierający wszystkie pliki niezbędne do działania Netuno.

- **apps**: Dedykowany katalog, w którym przechowywane są wszystkie tworzone lub demonstracyjne aplikacje.

- **[nazwa_twojej_aplikacji]**: Dedykowany katalog aplikacji, którą właśnie utworzyłeś.

Domyślnie Netuno ma aplikację demonstracyjną, która jest wyświetlana po uruchomieniu serwera Netuno.

| OPCJA    | OPIS    |
|----------|--------------|
| `database=[nazwa_bazy_danych]` | Określa nazwę bazy danych |
| `engine=[nazwa]` | Określa typ bazy danych |
| `host=[adres]` | Określa adres bazy danych. |
| `language=[język]`  | Określa język aplikacji |
| `locale=[język]` | Określa język lokalny aplikacji |
| `name=[nazwa]`  | Umożliwia utworzenie aplikacji lub odbudowanie istniejącej aplikacji |
| `password=[hasło]`  | Ustawia hasło do bazy danych |
| `port=[numer]`  | Określa port bazy danych |
| `username=[nazwa]`  | Określa nazwę użytkownika bazy danych |

#### Przykład określenia nazwy bazy danych:

```shell
./netuno app database=pracownik
```

> Nazwa bazy danych może zawierać cyfry i litery; jeśli nazwa składa się z więcej niż jednego słowa, należy je oddzielić znakiem "_", w następujący sposób.
>
> **Przykład:** pracownik_db

#### Przykład określenia typu bazy danych:

```shell
./netuno app engine=pg
```
Istnieją następujące typy baz danych:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Przykład określenia adresu serwera bazy danych:

```shell
./netuno app host=localhost
```

#### Przykład określenia języka i ustawień regionalnych:

```shell
./netuno app language=pl_PL locale=pl_PL
```
Istnieją następujące języki:
> - Portugalski - pt_PT
> - Brazylijski - pt_BR
> - Angielski - en_US
> - Hiszpański - es_ES

#### Przykład utworzenia aplikacji lub odbudowania istniejącej aplikacji:

```shell
./netuno app name=demo
```

#### Przykład ustawienia hasła do bazy danych:

```shell
./netuno app password=haslo
```

#### Przykład określenia portu bazy danych:

```shell
./netuno app port=5432
```
Domyślnie porty odpowiadają:

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### Przykład określenia nazwy użytkownika bazy danych:

```shell
./netuno username=root
```