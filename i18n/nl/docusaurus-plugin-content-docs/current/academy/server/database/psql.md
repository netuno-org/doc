---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Inleiding

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> is een van de meest gebruikte open source object-relationele databases.

## Installatie

Informatie over het installeren van PostgreSQL.

#### Ubuntu

Voer in de terminal uit:

```shell
sudo apt install postgresql
```

#### Windows

Installeer de databaseserver:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL-database download</a>.

Installeer de PostgreSQL-client <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Client

Maak verbinding met PostgreSQL om beheercommando's op de databaseserver uit te voeren.

#### Ubuntu

Voer in de terminal uit:

```shell
sudo -u postgres psql
```

#### Windows

Installeer en gebruik <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Gebruiker aanmaken

Voer het volgende commando uit terwijl u verbonden bent met de PostgreSQL-client:

```sql
create user app_gebruiker with password 'S3cR3t';
```

## Database aanmaken

Voer het volgende commando uit terwijl u verbonden bent met de PostgreSQL-client:

```sql
create database app_database with owner app_gebruiker;
```

> Om af te sluiten gebruikt u het commando: `\q`

## Database configureren

Maak verbinding met de nieuw aangemaakte database via de PostgreSQL-clientapplicatie.

#### Ubuntu

Voer het volgende commando in de terminal uit:

```shell
sudo -u postgres psql app_database
```

#### Windows

Installeer en gebruik <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### UUID-extensie installeren

Het is nodig de extensie voor het genereren van UUID's in PostgreSQL te installeren.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Applicatie configureren

Bewerk het configuratiebestand van de applicatie afhankelijk van de omgeving:

- `config/_development.json`

Voorbeeld van de configuratie voor PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_database",
            "username": "app_gebruiker",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Geavanceerde configuraties kunnen worden gebruikt, zoals:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_database",
            "username": "app_gebruiker",
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