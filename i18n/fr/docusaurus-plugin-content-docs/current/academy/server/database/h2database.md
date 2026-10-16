---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Introduction

Le grand avantage de H2Database est qu'il n'a pas besoin d'un serveur de base de données car il permet de fonctionner de manière embarquée dans les applications.

> H2Database est recommandé uniquement à des fins de développement et de test ; en production, un autre type de base de données plus cohérent devra être utilisé.

## Recommandations et limitations

H2Database ne permet pas à plus d'un seul processus d'accéder au fichier de base de données.

Ainsi, si vous devez manipuler le fichier ou y accéder via la console web, vous devrez arrêter l'exécution de Netuno.

## Fichiers de base de données

Les fichiers de base de données de H2Database se trouvent dans le dossier `dbs`, qui se trouve dans l'application, par exemple :

- `apps/mon_app/dbs`

Si vous souhaitez renommer la base de données, modifiez le nom du fichier et corrigez les configurations de l'application, par exemple dans l'environnement de _development_ :

- `config/_development.json`

La correction doit être effectuée dans la partie de configuration de la connexion à la base de données :

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "ma_db",
            "username": ""
        }
    }
    ...
```

## Console web

Il peut être nécessaire d'accéder directement à la base de données ; dans ce cas, cela sera possible via la console web de H2Database.

La console web est démarrée en exécutant directement le _jar_ de H2Database de la manière suivante :

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Il est supposé que vous êtes à la racine de Netuno.

Pour visualiser les options disponibles :

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Démarre la console web sur le port de Netuno **9000** et autorise l'accès depuis des IP externes :

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> Vous devrez arrêter l'exécution de Netuno au préalable afin d'éviter que plusieurs processus manipulent le fichier de base de données.

L'URL JDBC pour se connecter à la base de données devra être :

`jdbc:h2:./apps/mon_app/dbs/ma_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Remplacez la partie `mon_app` par le nom de l'application et `ma_db` par le nom de la base de données correspondante.

L'authentification se fera avec l'utilisateur `sa` mais sans mot de passe.


### Réinitialiser les accès

En particulier lorsque l'on perd l'accès de l'utilisateur `dev`.

Accédez-y via la console web de H2Database comme décrit ci-dessus.

Pour recréer l'accès, supprimez les données de la table `netuno_user`, par exemple :

- `delete from netuno_user`
 
Ainsi, Netuno recréera les utilisateurs avec leurs mots de passe par défaut respectifs lorsqu'il sera redémarré.