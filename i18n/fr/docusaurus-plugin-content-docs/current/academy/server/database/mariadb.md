---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Introduction

<a href="https://mariadb.org/" target="_blank">MariaDB</a> est la base de données relationnelle innovante open-source compatible avec **MySQL**.

## Installation

Comment installer MariaDB.

#### Ubuntu

Exécutez dans le terminal :

```shell
sudo apt install mariadb-server
```

#### Windows

Téléchargez et installez MariaDB :

- <a href="https://mariadb.com/downloads/" target="_blank">Téléchargement de MariaDB</a>

## Client

Connectez-vous à MariaDB pour exécuter des commandes de gestion sur le serveur de base de données.

#### Ubuntu

Exécutez dans le terminal :

```shell
sudo mariadb
```

#### Windows

Ouvrez l'application `Command Prompt MariaDB` et exécutez :

```shell
mariadb -u root -p
```

Ou recherchez `MySQL Client` ou `MariaDB Client`.

## Créer la base de données

Exécutez la commande suivante une fois connecté au client MariaDB :

```sql
CREATE DATABASE bdd_app
```

## Créer un utilisateur

Exécutez la commande suivante une fois connecté au client MariaDB :

```sql
CREATE USER 'utilisateur_app'@'localhost' IDENTIFIED BY 'S3cR3t';
```

Pour donner l'accès général de l'utilisateur à la base de données qui a été créée, exécutez :

```sql
GRANT ALL PRIVILEGES ON bdd_app.* TO 'utilisateur_app'@'localhost';
```

Actualisez les privilèges d'accès :

```sql
FLUSH PRIVILEGES;
```

> Pour quitter, utilisez la commande : `\q`

## Configurer l'application

Modifiez le fichier de configuration de l'application en fonction de l'environnement :

- `config/_development.json`

Exemple de configuration de base de données pour MariaDB :

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "bdd_app",
            "username": "utilisateur_app",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Des configurations avancées peuvent être utilisées, comme :

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "bdd_app",
            "username": "utilisateur_app",
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

> En savoir plus sur les [configurations de connexion à la base de données avec HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).