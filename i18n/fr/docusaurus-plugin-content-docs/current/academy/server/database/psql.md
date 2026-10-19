---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Introduction

<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> est l'une des bases de données relationnelles-objet open source les plus utilisées.

## Installation

Informations sur la façon d'installer PostgreSQL.

#### Ubuntu

Exécutez dans le terminal :

```shell
sudo apt install postgresql
```

#### Windows

Installez le serveur de base de données :

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">Téléchargement de la base de données PostgreSQL</a>.

Installez le client PostgreSQL <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Client

Connectez-vous à PostgreSQL pour exécuter des commandes de gestion sur le serveur de base de données.

#### Ubuntu

Exécutez dans le terminal :

```shell
sudo -u postgres psql
```

#### Windows

Installez et utilisez <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Créer un utilisateur

Exécutez la commande suivante connecté au client PostgreSQL :

```sql
create user utilisateur_app with password 'S3cR3t';
```

## Créer la base de données

Exécutez la commande suivante connecté au client PostgreSQL :

```sql
create database bdd_app with owner utilisateur_app;
```

> Pour quitter, utilisez la commande : `\q`

## Configurer la base de données

Connectez-vous à la nouvelle base de données créée en utilisant l'application client PostgreSQL.

#### Ubuntu

Exécutez la commande suivante dans le terminal :

```shell
sudo -u postgres psql bdd_app
```

#### Windows

Installez et utilisez <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Installer l'extension UUID

Il est nécessaire d'installer dans PostgreSQL l'extension pour générer les UUID.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Configurer l'application

Modifiez le fichier de configuration de l'application en fonction de l'environnement :

- `config/_development.json`

Exemple de configuration pour PostgreSQL :

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "bdd_app",
            "username": "utilisateur_app",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Des configurations avancées peuvent être utilisées comme :

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
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