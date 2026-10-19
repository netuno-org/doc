---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Wprowadzenie

<a href="https://mariadb.org/" target="_blank">MariaDB</a> to innowacyjna relacyjna baza danych open source zgodna z **MySQL**.

## Instalacja

Jak zainstalować MariaDB.

#### Ubuntu

Wykonaj w terminalu:

```shell
sudo apt install mariadb-server
```

#### Windows

Pobierz i zainstaluj MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">Pobierz MariaDB</a>

## Klient

Połącz się z MariaDB, aby wykonywać polecenia zarządzania na serwerze bazy danych.

#### Ubuntu

Wykonaj w terminalu:

```shell
sudo mariadb
```

#### Windows

Otwórz aplikację `Command Prompt MariaDB` i wykonaj:

```shell
mariadb -u root -p
```

Lub wyszukaj `MySQL Client` lub `MariaDB Client`.

## Tworzenie bazy danych

Wykonaj następujące polecenie w kliencie MariaDB:

```sql
CREATE DATABASE baza_aplikacji
```

## Tworzenie użytkownika

Wykonaj następujące polecenie w kliencie MariaDB:

```sql
CREATE USER 'uzytkownik_aplikacji'@'localhost' IDENTIFIED BY 'S3cR3t';
```

Aby przyznać użytkownikowi ogólny dostęp do utworzonej bazy danych, wykonaj:

```sql
GRANT ALL PRIVILEGES ON baza_aplikacji.* TO 'uzytkownik_aplikacji'@'localhost';
```

Odśwież uprawnienia dostępu:

```sql
FLUSH PRIVILEGES;
```

> Aby wyjść, użyj polecenia: `\q`

## Konfiguracja aplikacji

Edytuj plik konfiguracyjny aplikacji zgodnie ze środowiskiem:

- `config/_development.json`

Przykład konfiguracji bazy danych dla MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "baza_aplikacji",
            "username": "uzytkownik_aplikacji",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Można użyć zaawansowanych ustawień, takich jak:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "baza_aplikacji",
            "username": "uzytkownik_aplikacji",
            "password": "S3cR3t",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```

> Zobacz więcej o [konfiguracjach połączenia z bazą danych za pomocą HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).