---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Einführung

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> ist eine der am häufigsten verwendeten objektrelationalen Open-Source-Datenbanken.

## Installation

Informationen zur Installation von PostgreSQL.

#### Ubuntu

Führen Sie im Terminal aus:

```shell
sudo apt install postgresql
```

#### Windows

Installieren Sie den Datenbankserver:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL-Datenbank-Download</a>.

Installieren Sie den PostgreSQL-Client <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Client

Stellen Sie eine Verbindung zu PostgreSQL her, um Verwaltungsbefehle auf dem Datenbankserver auszuführen.

#### Ubuntu

Führen Sie im Terminal aus:

```shell
sudo -u postgres psql
```

#### Windows

Installieren und verwenden Sie <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Benutzer erstellen

Führen Sie den folgenden Befehl aus, während Sie mit dem PostgreSQL-Client verbunden sind:

```sql
create user app_benutzer with password 'S3cR3t';
```

## Datenbank erstellen

Führen Sie den folgenden Befehl aus, während Sie mit dem PostgreSQL-Client verbunden sind:

```sql
create database app_datenbank with owner app_benutzer;
```

> Verwenden Sie zum Beenden den Befehl: `\q`

## Datenbank konfigurieren

Stellen Sie mit der PostgreSQL-Clientanwendung eine Verbindung zur neu erstellten Datenbank her.

#### Ubuntu

Führen Sie den folgenden Befehl im Terminal aus:

```shell
sudo -u postgres psql app_datenbank
```

#### Windows

Installieren und verwenden Sie <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### UUID-Erweiterung installieren

Die Erweiterung zum Generieren von UUIDs muss in PostgreSQL installiert werden.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Anwendung konfigurieren

Bearbeiten Sie die Konfigurationsdatei der Anwendung entsprechend der Umgebung:

- `config/_development.json`

Beispiel der Konfiguration für PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_datenbank",
            "username": "app_benutzer",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Es können erweiterte Konfigurationen wie die folgenden verwendet werden:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_datenbank",
            "username": "app_benutzer",
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