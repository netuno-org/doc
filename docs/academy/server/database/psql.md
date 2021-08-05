---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Introduction

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> is a powerful, open source object-relational database system that has earned it a strong reputation for reliability, feature robustness, and performance.

## Installation

How to Installed PostgreSQL.

#### With Ubuntu

Run into the Terminal 👇:

```shell
sudo apt install postgresql
```

#### With Windows

Installing Database Server:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">Download PostgreSQL Database </a>.

Client PostgreSQL Installation <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Client

To run management commands lines into the database server, you will need to connect to PostgreSQL.

#### Ubuntu

Run into the terminal the below command line:

```shell
sudo -u postgres psql
```

#### Windows

Use and Install <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Create an User

Run the following command line that is conneted to the Client PostgreSQL:

```sql
create user app_user with password 'S3cR3t';
```

## Building a Database

For this step the user will need to run the below command line that is conneted to the client PostgreSQL:

```sql
create database app_db with owner app_user;
```

> To Exit use the command line: `\q`

## Database Set up

Using the client app PostgreSQL, you can also connect yourself to the new database that you built.

#### Ubuntu

Run the below line command into the terminal:

```shell
sudo -u postgres psql app_db
```

#### Windows

Use and Install <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### UUID Extension and Installation

Is required to install into PostgreSQL an extension to generate UUID.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Application Set up

You must edit the configuration file of the application according to the environment:

- `config/_development.json`

PostgreSQL example and Configuration:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Also can be used advanced setups as you can see below 👇:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
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
