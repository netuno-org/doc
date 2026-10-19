---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Введение

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> — одна из наиболее часто используемых объектно-реляционных баз данных с открытым исходным кодом.

## Установка

Информация о том, как установить PostgreSQL.

#### Ubuntu

Выполните в терминале:

```shell
sudo apt install postgresql
```

#### Windows

Установите сервер базы данных:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">Загрузка базы данных PostgreSQL</a>.

Установите клиент PostgreSQL <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Клиент

Подключитесь к PostgreSQL, чтобы выполнять команды управления на сервере базы данных.

#### Ubuntu

Выполните в терминале:

```shell
sudo -u postgres psql
```

#### Windows

Установите и используйте <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Создание пользователя

Выполните следующую команду, подключившись к клиенту PostgreSQL:

```sql
create user пользователь_приложения with password 'S3cR3t';
```

## Создание базы данных

Выполните следующую команду, подключившись к клиенту PostgreSQL:

```sql
create database база_приложения with owner пользователь_приложения;
```

> Для выхода используйте команду: `\q`

## Настройка базы данных

Подключитесь к созданной новой базе данных с помощью клиентского приложения PostgreSQL.

#### Ubuntu

Выполните следующую команду в терминале:

```shell
sudo -u postgres psql база_приложения
```

#### Windows

Установите и используйте <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Установка расширения UUID

Необходимо установить в PostgreSQL расширение для генерации UUID.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Настройка приложения

Отредактируйте файл конфигурации приложения в соответствии с окружением:

- `config/_development.json`

Пример конфигурации для PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "база_приложения",
            "username": "пользователь_приложения",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Можно использовать расширенные настройки, например:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "база_приложения",
            "username": "пользователь_приложения",
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