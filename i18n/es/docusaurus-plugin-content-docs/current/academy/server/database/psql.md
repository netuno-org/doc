---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Introducción

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> es una de las bases de datos objeto-relacionales de código abierto más utilizadas.

## Instalación

Información sobre cómo instalar PostgreSQL.

#### Ubuntu

Ejecute en el terminal:

```shell
sudo apt install postgresql
```

#### Windows

Instale el servidor de base de datos:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">Descarga de la base de datos PostgreSQL</a>.

Instale el cliente de PostgreSQL <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Cliente

Conéctese a PostgreSQL para ejecutar comandos de gestión en el servidor de base de datos.

#### Ubuntu

Ejecute en el terminal:

```shell
sudo -u postgres psql
```

#### Windows

Instale y utilice <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Crear usuario

Ejecute el siguiente comando conectado al cliente de PostgreSQL:

```sql
create user usuario_app with password 'S3cR3t';
```

## Crear la base de datos

Ejecute el siguiente comando conectado al cliente de PostgreSQL:

```sql
create database bd_app with owner usuario_app;
```

> Para salir utilice el comando: `\q`

## Configurar la base de datos

Conéctese a la nueva base de datos creada utilizando la aplicación cliente de PostgreSQL.

#### Ubuntu

Ejecute el siguiente comando en el terminal:

```shell
sudo -u postgres psql bd_app
```

#### Windows

Instale y utilice <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Instalar extensión UUID

Es necesario instalar en PostgreSQL la extensión para generar los UUID.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Configurar la aplicación

Edite el fichero de configuración de la aplicación de acuerdo con el entorno:

- `config/_development.json`

Ejemplo de la configuración para PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "bd_app",
            "username": "usuario_app",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Se pueden utilizar configuraciones avanzadas como:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "bd_app",
            "username": "usuario_app",
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