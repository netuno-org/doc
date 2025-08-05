---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Introduction

<a href="https://mariadb.org/" target="_blank">MariaDB</a> is the innovative open-source relational database compatible with **MySQL**.

## Installation

How to install MariaDB.

#### Ubuntu

Run in the terminal:

```shell
sudo apt install mariadb-server
```

#### Windows

Download and install MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB Download</a>

## Client

Connect to MariaDB to execute management commands on the database server.

#### Ubuntu

Run in terminal:

```shell
sudo mariadb
```

#### Windows

Open the `Command Prompt MariaDB` app and run:

```shell
mariadb -u root -p
```

Or search for `MySQL Client` or `MariaDB Client`.

## Create the Database

Run the following command while connected to the MariaDB client:

```sql
CREATE DATABASE app_db
```

## Create User

Run the following command while connected to the MariaDB client:

```sql
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'S3cR3t';
```

To grant the user general access to the newly created database, run:

```sql
GRANT ALL PRIVILEGES ON app_db.* TO 'app_user'@'localhost';
```

Update access privileges:

```sql
FLUSH PRIVILEGES;
```

> To exit, use the command: `\q`

## Configure the Application

Edit the application configuration file according to the environment:

- `config/_development.json`

Example of database configuration for MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Advanced settings can be used such as:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
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

> See more about [Database connection settings with HikariCP](/docs/academy/server/database/hikaridb-database-connection-pool).
