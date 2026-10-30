---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Wprowadzenie

Dużą zaletą H2Database jest to, że nie wymaga serwera bazy danych, ponieważ może działać w trybie wbudowanym w aplikacjach.

> H2Database jest zalecany wyłącznie do celów rozwojowych i testowych; w środowisku produkcyjnym należy używać innego, bardziej niezawodnego typu bazy danych.

## Zalecenia i ograniczenia

H2Database nie pozwala, aby więcej niż jeden proces uzyskiwał dostęp do pliku bazy danych.

Tak więc, jeśli chcesz manipulować plikiem lub uzyskać dostęp przez konsolę webową, musisz zatrzymać działanie Netuno.

## Pliki bazy danych

Pliki bazy danych H2Database znajdują się w folderze `dbs`, który znajduje się wewnątrz aplikacji, na przykład:

- `apps/moja_aplikacja/dbs`

Jeśli chcesz zmienić nazwę bazy danych, zmień nazwę pliku i popraw konfigurację aplikacji, na przykład w środowisku _development_:

- `config/_development.json`

Poprawki należy dokonać w części konfiguracji połączenia z bazą danych:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "moja_baza",
            "username": ""
        }
    }
    ...
```

## Konsola webowa

Może być konieczny bezpośredni dostęp do bazy danych; w tym przypadku można to zrobić przez konsolę webową H2Database.

Konsola webowa jest uruchamiana przez bezpośrednie wykonanie _jar_ H2Database w następujący sposób:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Zakłada się, że jesteś w katalogu głównym Netuno.

Aby wyświetlić dostępne opcje:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Uruchamia konsolę webową na porcie Netuno **9000** i umożliwia dostęp z zewnętrznych adresów IP:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> Przed uruchomieniem Netuno należy je zatrzymać, aby zapobiec manipulowaniu plikiem bazy danych przez wiele procesów.

JDBC URL do połączenia z bazą danych powinien mieć postać:

`jdbc:h2:./apps/moja_aplikacja/dbs/moja_baza;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Zastąp część `moja_aplikacja` nazwą aplikacji, a `moja_baza` nazwą odpowiedniej bazy danych.

Uwierzytelnianie będzie użytkownikiem `sa`, ale bez hasła.


### Resetowanie dostępów

Szczególnie gdy utracisz dostęp użytkownika `dev`.

Uzyskaj dostęp przez konsolę webową H2Database, jak opisano powyżej.

Aby odtworzyć dostęp, usuń dane z tabeli `netuno_user`, na przykład:

- `delete from netuno_user`
 
Wtedy Netuno odtworzy użytkowników z odpowiednimi domyślnymi hasłami przy ponownym uruchomieniu.