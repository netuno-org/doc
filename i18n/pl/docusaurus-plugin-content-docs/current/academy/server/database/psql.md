---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Wprowadzenie

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> to jedna z najczęściej używanych otwartoźródłowych obiektowo-relacyjnych baz danych.

## Instalacja

Informacje o tym, jak zainstalować PostgreSQL.

#### Ubuntu

Wykonaj w terminalu:

```shell
sudo apt install postgresql
```

#### Windows

Zainstaluj serwer bazy danych:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL Database Download</a>.

Zainstaluj klienta PostgreSQL <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Klient

Połącz się z PostgreSQL, aby wykonywać polecenia zarządzania na serwerze bazy danych.

#### Ubuntu

Wykonaj w terminalu:

```shell
sudo -u postgres psql
```

#### Windows

Zainstaluj i używaj <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Tworzenie użytkownika

Wykonaj następujące polecenie połączony z klientem PostgreSQL:

```sql
create user uzytkownik_aplikacji with password 'T4jN3H4sL0';
```

## Tworzenie bazy danych

Wykonaj następujące polecenie połączony z klientem PostgreSQL:

```sql
create database baza_aplikacji with owner uzytkownik_aplikacji;
```

> Aby wyjść, użyj polecenia: `\q`

## Konfiguracja bazy danych

Połącz się z nowo utworzoną bazą danych, używając aplikacji klienckiej PostgreSQL.

#### Ubuntu

Wykonaj następujące polecenie w terminalu:

```shell
sudo -u postgres psql baza_aplikacji
```

#### Windows

Zainstaluj i używaj <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Instalacja rozszerzenia UUID

Konieczne jest zainstalowanie w PostgreSQL rozszerzenia do generowania UUID.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Konfiguracja aplikacji

Edytuj plik konfiguracji aplikacji odpowiednio do środowiska:

- `config/_development.json`

Przykład konfiguracji dla PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "baza_aplikacji",
            "username": "uzytkownik_aplikacji",
            "password": "T4jN3H4sL0"
        }
    },
    ...
}
```

Można użyć konfiguracji zaawansowanych, takich jak:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "baza_aplikacji",
            "username": "uzytkownik_aplikacji",
            "password": "T4jN3H4sL0",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```