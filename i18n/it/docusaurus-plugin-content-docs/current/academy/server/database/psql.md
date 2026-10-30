---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Introduzione

Il <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> è uno dei database relazionali a oggetti open source più utilizzati.

## Installazione

Informazioni su come installare PostgreSQL.

#### Ubuntu

Esegui nel terminale:

```shell
sudo apt install postgresql
```

#### Windows

Installa il server di database:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">Download del database PostgreSQL</a>.

Installa il client di PostgreSQL <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Client

Connettiti a PostgreSQL per eseguire comandi di gestione sul server di database.

#### Ubuntu

Esegui nel terminale:

```shell
sudo -u postgres psql
```

#### Windows

Installa e utilizza <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Creare un utente

Esegui il seguente comando connesso al client di PostgreSQL:

```sql
create user utente_app with password 'S3cR3t';
```

## Creare il database

Esegui il seguente comando connesso al client di PostgreSQL:

```sql
create database db_app with owner utente_app;
```

> Per uscire utilizza il comando: `\q`

## Configurare il database

Connettiti al nuovo database creato utilizzando l'applicazione client di PostgreSQL.

#### Ubuntu

Esegui il seguente comando nel terminale:

```shell
sudo -u postgres psql db_app
```

#### Windows

Installa e utilizza <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Installare l'estensione UUID

È necessario installare in PostgreSQL l'estensione per generare gli UUID.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Configurare l'applicazione

Modifica il file di configurazione dell'applicazione in base all'ambiente:

- `config/_development.json`

Esempio di configurazione per PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "db_app",
            "username": "utente_app",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Possono essere utilizzate configurazioni avanzate come:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "db_app",
            "username": "utente_app",
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