---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Einleitung

<a href="https://mariadb.org/" target="_blank">MariaDB</a> ist eine innovative relationale Open-Source-Datenbank, die mit **MySQL** kompatibel ist.

## Installation

So installieren Sie MariaDB.

#### Ubuntu

Führen Sie im Terminal aus:

```shell
sudo apt install mariadb-server
```

#### Windows

Laden Sie MariaDB herunter und installieren Sie es:

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB-Download</a>

## Client

Verbinden Sie sich mit MariaDB, um Verwaltungsbefehle auf dem Datenbankserver auszuführen.

#### Ubuntu

Führen Sie im Terminal aus:

```shell
sudo mariadb
```

#### Windows

Öffnen Sie die App `Command Prompt MariaDB` und führen Sie aus:

```shell
mariadb -u root -p
```

Oder suchen Sie nach `MySQL Client` oder `MariaDB Client`.

## Datenbank erstellen

Führen Sie im MariaDB-Client den folgenden Befehl aus:

```sql
CREATE DATABASE anwendung_db
```

## Benutzer erstellen

Führen Sie im MariaDB-Client den folgenden Befehl aus:

```sql
CREATE USER 'anwendung_benutzer'@'localhost' IDENTIFIED BY 'G3h31m';
```

Um dem Benutzer allgemeinen Zugriff auf die erstellte Datenbank zu gewähren, führen Sie aus:

```sql
GRANT ALL PRIVILEGES ON anwendung_db.* TO 'anwendung_benutzer'@'localhost';
```

Aktualisieren Sie die Zugriffsrechte:

```sql
FLUSH PRIVILEGES;
```

> Zum Beenden verwenden Sie den Befehl: `\q`

## Anwendung konfigurieren

Bearbeiten Sie die Konfigurationsdatei der Anwendung entsprechend der Umgebung:

- `config/_development.json`

Beispiel der Datenbankkonfiguration für MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "anwendung_db",
            "username": "anwendung_benutzer",
            "password": "G3h31m"
        }
    },
    ...
}
```

Es können erweiterte Konfigurationen wie folgt verwendet werden:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "anwendung_db",
            "username": "anwendung_benutzer",
            "password": "G3h31m",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```

> Erfahren Sie mehr über die [Datenbankverbindungskonfigurationen mit HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).