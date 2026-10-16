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

Ouvrez l'application `Invite de commandes MariaDB` et exécutez :

```shell
mariadb -u root -p
```

Ou recherchez `MySQL Client` ou `MariaDB Client`.

## Créer la base de données

Exécutez la commande suivante connecté au client MariaDB :

```sql
CREATE DATABASE base_app
```

## Créer un utilisateur

Exécutez la commande suivante connecté au client MariaDB :

```sql
CREATE USER 'utilisateur_app'@'localhost' IDENTIFIED BY 'S3cR3t';
```

Pour donner un accès général à l'utilisateur sur la base de données créée, exécutez :

```sql
GRANT ALL PRIVILEGES ON base_app.* TO 'utilisateur_app'@'localhost';
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
            "name": "base_app",
            "username": "utilisateur_app",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Vous pouvez utiliser des configurations avancées telles que :

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "base_app",
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

> Voir plus sur les [configurations de connexion à la base de données avec HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).