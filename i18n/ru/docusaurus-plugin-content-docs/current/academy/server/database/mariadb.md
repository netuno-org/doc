---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Введение

<a href="https://mariadb.org/" target="_blank">MariaDB</a> — это инновационная реляционная база данных с открытым исходным кодом, совместимая с **MySQL**.

## Установка

Как установить MariaDB.

#### Ubuntu

Выполните в терминале:

```shell
sudo apt install mariadb-server
```

#### Windows

Скачайте и установите MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">Скачать MariaDB</a>

## Клиент

Подключитесь к MariaDB, чтобы выполнять команды управления на сервере базы данных.

#### Ubuntu

Выполните в терминале:

```shell
sudo mariadb
```

#### Windows

Откройте приложение `Command Prompt MariaDB` и выполните:

```shell
mariadb -u root -p
```

Или найдите `MySQL Client` или `MariaDB Client`.

## Создание базы данных

Выполните следующую команду, подключившись к клиенту MariaDB:

```sql
CREATE DATABASE baza_dannyh
```

## Создание пользователя

Выполните следующую команду, подключившись к клиенту MariaDB:

```sql
CREATE USER 'polzovatel'@'localhost' IDENTIFIED BY 'S3cR3t';
```

Чтобы предоставить пользователю полный доступ к созданной базе данных, выполните:

```sql
GRANT ALL PRIVILEGES ON baza_dannyh.* TO 'polzovatel'@'localhost';
```

Обновите привилегии доступа:

```sql
FLUSH PRIVILEGES;
```

> Для выхода используйте команду: `\q`

## Настройка приложения

Отредактируйте файл конфигурации приложения в соответствии с окружением:

- `config/_development.json`

Пример конфигурации базы данных для MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "baza_dannyh",
            "username": "polzovatel",
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
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "baza_dannyh",
            "username": "polzovatel",
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

> Подробнее о [настройках подключения к базе данных с HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).