---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Introduction

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> is one of the most widely used open source object-relational databases.

## Installation

Information on how to install PostgreSQL.

#### Ubuntu

Run in the terminal:

```shell
sudo apt install postgresql
```

#### Windows

Install the database server:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL Database Download</a>.

Install the PostgreSQL client <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Client

Connect to PostgreSQL to run management commands on the database server.

#### Ubuntu

Run in the terminal:

```shell
sudo -u postgres psql
```

#### Windows

Install and use <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Create User

Run the following command connected to the PostgreSQL client:

```sql
create user app_user with password 'S3cR3t';
```

## Create the Database

Run the following command connected to the PostgreSQL client:

```sql
create database app_db with owner app_user;
```

> To exit, use the command: `\q`

## Configure the Database

Connect to the newly created database using the PostgreSQL client application.

#### Ubuntu

Run the following command in the terminal:

```shell
sudo -u postgres psql app_db
```

#### Windows

Install and use <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Install the UUID extension

The extension to generate UUIDs must be installed in PostgreSQL.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Configure the Application

Edit the application's configuration file according to the environment:

- `config/_development.json`

Example of the configuration for PostgreSQL:

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

Advanced configurations can be used, such as:

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