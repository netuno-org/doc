---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Inleiding

<a href="https://mariadb.org/" target="_blank">MariaDB</a> is de innovatieve open-source relationele database die compatibel is met **MySQL**.

## Installatie

Zo installeer je MariaDB.

#### Ubuntu

Voer in de terminal uit:

```shell
sudo apt install mariadb-server
```

#### Windows

Download en installeer MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB downloaden</a>

## Client

Maak verbinding met MariaDB om beheercommando's op de databaseserver uit te voeren.

#### Ubuntu

Voer in de terminal uit:

```shell
sudo mariadb
```

#### Windows

Open de app `Command Prompt MariaDB` en voer uit:

```shell
mariadb -u root -p
```

Of zoek naar `MySQL Client` of `MariaDB Client`.

## Database aanmaken

Voer het volgende commando uit terwijl je verbonden bent met de MariaDB-client:

```sql
CREATE DATABASE app_database
```

## Gebruiker aanmaken

Voer het volgende commando uit terwijl je verbonden bent met de MariaDB-client:

```sql
CREATE USER 'app_gebruiker'@'localhost' IDENTIFIED BY 'G3h31m';
```

Om de gebruiker algemene toegang te geven tot de database die is aangemaakt, voer je uit:

```sql
GRANT ALL PRIVILEGES ON app_database.* TO 'app_gebruiker'@'localhost';
```

Werk de toegangsprivileges bij:

```sql
FLUSH PRIVILEGES;
```

> Om af te sluiten gebruik je het commando: `\q`

## Applicatie configureren

Bewerk het configuratiebestand van de applicatie afhankelijk van de omgeving:

- `config/_development.json`

Voorbeeld van de databaseconfiguratie voor MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_database",
            "username": "app_gebruiker",
            "password": "G3h31m"
        }
    },
    ...
}
```

Er kunnen geavanceerde configuraties worden gebruikt, zoals:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_database",
            "username": "app_gebruiker",
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

> Zie meer over de [databaseverbindingsinstellingen met HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).