---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Introduzione

<a href="https://mariadb.org/" target="_blank">MariaDB</a> è il database relazionale innovativo open source compatibile con **MySQL**.

## Installazione

Come installare MariaDB.

#### Ubuntu

Eseguire nel terminale:

```shell
sudo apt install mariadb-server
```

#### Windows

Scaricare e installare MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">Download di MariaDB</a>

## Client

Connettersi a MariaDB per eseguire comandi di gestione sul server del database.

#### Ubuntu

Eseguire nel terminale:

```shell
sudo mariadb
```

#### Windows

Aprire l'app `Command Prompt MariaDB` ed eseguire:

```shell
mariadb -u root -p
```

Oppure cercare `MySQL Client` o `MariaDB Client`.

## Creare il Database

Eseguire il seguente comando una volta connessi al client di MariaDB:

```sql
CREATE DATABASE db_app
```

## Creare un Utente

Eseguire il seguente comando una volta connessi al client di MariaDB:

```sql
CREATE USER 'utente_app'@'localhost' IDENTIFIED BY 'S3gr3t0';
```

Per concedere all'utente l'accesso completo al database creato, eseguire:

```sql
GRANT ALL PRIVILEGES ON db_app.* TO 'utente_app'@'localhost';
```

Aggiornare i privilegi di accesso:

```sql
FLUSH PRIVILEGES;
```

> Per uscire utilizzare il comando: `\q`

## Configurare l'Applicazione

Modificare il file di configurazione dell'applicazione in base all'ambiente:

- `config/_development.json`

Esempio di configurazione del database per MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "db_app",
            "username": "utente_app",
            "password": "S3gr3t0"
        }
    },
    ...
}
```

È possibile utilizzare configurazioni avanzate come:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "db_app",
            "username": "utente_app",
            "password": "S3gr3t0",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```

> Per maggiori informazioni sulle [configurazioni di connessione al database con HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).