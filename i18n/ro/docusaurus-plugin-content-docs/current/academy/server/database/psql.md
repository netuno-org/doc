---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Introducere

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> este una dintre cele mai utilizate baze de date open source obiect-relaționale.

## Instalare

Informații despre cum se instalează PostgreSQL.

#### Ubuntu

Executați în terminal:

```shell
sudo apt install postgresql
```

#### Windows

Instalați serverul bazei de date:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">Descărcare bază de date PostgreSQL</a>.

Instalați clientul PostgreSQL <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Client

Conectați-vă la PostgreSQL pentru a executa comenzi de administrare pe serverul bazei de date.

#### Ubuntu

Executați în terminal:

```shell
sudo -u postgres psql
```

#### Windows

Instalați și utilizați <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Creare utilizator

Executați următoarea comandă în clientul PostgreSQL:

```sql
create user utilizator_aplicatie with password 'S3cR3t';
```

## Crearea bazei de date

Executați următoarea comandă în clientul PostgreSQL:

```sql
create database baza_aplicatie with owner utilizator_aplicatie;
```

> Pentru a ieși, utilizați comanda: `\q`

## Configurarea bazei de date

Conectați-vă la noua bază de date creată folosind aplicația client PostgreSQL.

#### Ubuntu

Executați următoarea comandă în terminal:

```shell
sudo -u postgres psql baza_aplicatie
```

#### Windows

Instalați și utilizați <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Instalarea extensiei UUID

Este necesar să instalați în PostgreSQL extensia pentru generarea UUID-urilor.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Configurarea aplicației

Editați fișierul de configurare al aplicației în funcție de mediu:

- `config/_development.json`

Exemplu de configurare pentru PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "baza_aplicatie",
            "username": "utilizator_aplicatie",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Pot fi utilizate configurații avansate, cum ar fi:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "baza_aplicatie",
            "username": "utilizator_aplicatie",
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