---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Introducere

<a href="https://mariadb.org/" target="_blank">MariaDB</a> este baza de date relațională inovatoare open-source compatibilă cu **MySQL**.

## Instalare

Cum se instalează MariaDB.

#### Ubuntu

Rulați în terminal:

```shell
sudo apt install mariadb-server
```

#### Windows

Descărcați și instalați MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">Descărcare MariaDB</a>

## Client

Conectați-vă la MariaDB pentru a executa comenzi de administrare pe serverul bazei de date.

#### Ubuntu

Rulați în terminal:

```shell
sudo mariadb
```

#### Windows

Deschideți aplicația `Command Prompt MariaDB` și rulați:

```shell
mariadb -u root -p
```

Sau căutați `MySQL Client` sau `MariaDB Client`.

## Crearea bazei de date

Rulați următoarea comandă conectat la clientul MariaDB:

```sql
CREATE DATABASE baza_de_date_app
```

## Crearea utilizatorului

Rulați următoarea comandă conectat la clientul MariaDB:

```sql
CREATE USER 'utilizator_app'@'localhost' IDENTIFIED BY 'S3cR3t';
```

Pentru a acorda acces general utilizatorului la baza de date creată, rulați:

```sql
GRANT ALL PRIVILEGES ON baza_de_date_app.* TO 'utilizator_app'@'localhost';
```

Actualizați privilegiile de acces:

```sql
FLUSH PRIVILEGES;
```

> Pentru a ieși, utilizați comanda: `\q`

## Configurarea aplicației

Editați fișierul de configurare al aplicației în funcție de mediu:

- `config/_development.json`

Exemplu de configurare a bazei de date pentru MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "baza_de_date_app",
            "username": "utilizator_app",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Pot fi utilizate configurații avansate precum:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "baza_de_date_app",
            "username": "utilizator_app",
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

> Vedeți mai multe despre [configurațiile de conexiune la baza de date cu HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).