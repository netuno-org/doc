---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configuration de MSSQL dans Docker

En supposant que Docker soit déjà installé, il suffit de télécharger l'image du conteneur depuis le Microsoft Container Registry avec la commande suivante :

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

Et pour démarrer le nouveau conteneur, exécutez la commande suivante :

```
docker run -d --name serveur_mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=MotDePasse123' -p 1433:1433 microsoft/mssql-server-linux
```

Le paramètre *-e 'SA\_PASSWORD=MotDePasse123'* où se trouve *MotDePasse123* sera le mot de passe de l'utilisateur *sa*.

Attention, le mot de passe doit contenir au moins 8 caractères pour respecter la norme de sécurité minimale de MSSQL, sinon le conteneur ne sera pas initialisé.

Après l'initialisation du conteneur, assurez-vous que MSSQL fonctionne correctement. Pour cela, il est possible d'installer la commande *mssql* via *NPM* :

```
npm install mssql -g
```

Avec cela, vous pourrez exécuter la commande pour vous connecter à MSSQL via le terminal :

```
mssql -u sa -p MotDePasse123
```

Attention ! Si vous avez modifié le mot de passe, remplacez *MotDePasse123* par le mot de passe de _sa_ configuré dans le conteneur.

## Créer une nouvelle application

Pour créer une nouvelle application dans Netuno connectée à Microsoft SQL Server, suivez les étapes normales de création d'une nouvelle application dans Netuno et choisissez le moteur de base de données MSSQL.

Ainsi, suivez les étapes du tutoriel : 

Après avoir choisi le moteur de base de données MSSQL, les données pour établir la connexion à la base de données MSSQL vous seront demandées.

Par exemple :

![création-application](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Modifier la configuration des applications

Pour qu'une application puisse fonctionner avec MSSQL et ainsi utiliser MSSQL comme base de données principale de l'application, modifiez les configurations d'environnement dans :

```
/web/app/VOTRE_APP/config/_development.json
/web/app/VOTRE_APP/config/_production.json
/web/app/VOTRE_APP/config/_VOTRE_ENVIRONNEMENT.json
```

La configuration doit être effectuée comme suit :

```
    ...
    "db": {
        "default": {
            "password": "MotDePasse123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

Si vous souhaitez vous connecter en tant que base de données alternative et non principale, remplacez _"default"_ par le nom souhaité pour cette connexion.

## Instances

Si vous devez vous connecter à une instance spécifique de MSSQLSRV, ajoutez dans la configuration de la connexion la valeur `instance`, par exemple :

```
    ...
    "db": {
        "default": {
            "password": "MotDePasse123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "nom-de-mon-instance",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```