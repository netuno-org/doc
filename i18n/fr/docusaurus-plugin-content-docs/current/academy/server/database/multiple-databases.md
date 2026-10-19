---
id: multiple-databases
title: Bases de données multiples
sidebar_label: Bases de données multiples
---

## Se connecter à plusieurs bases de données

Netuno permet à une application de se connecter à plusieurs bases de données.

Ainsi, vous pourrez manipuler des données via plusieurs connexions et types de bases de données différents.

Netuno prend en charge la connexion à des bases de données telles que :

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(prochainement)_

## Base de données par défaut

Pour que les applications fonctionnent correctement, il est toujours nécessaire d'avoir une base de données configurée par défaut.

Rappelez-vous que les configurations des applications se trouvent dans les fichiers :

```
/web/app/VOTRE_APP/config/_development.json
/web/app/VOTRE_APP/config/_production.json
/web/app/VOTRE_APP/config/_VOTRE_ENVIRONNEMENT.json
```

Vous y trouverez la configuration de la connexion à la base de données _default_, comme suit :

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "base_de_donnees",
            "username": "utilisateur"
        }
    },
    ...
```

Ainsi, pour ajouter d'autres connexions à d'autres bases de données, il suffit de répéter cette configuration en remplaçant le nom _default_ par un autre nom souhaité.

Par exemple, imaginez que vous avez une application dont la base de données par défaut est en PostgreSQL, mais qui doit également se connecter à une base de données MariaDB de WordPress (_site-web-wp_) et aussi à une autre base de données Microsoft SQL Server d'une application .Net/C# (_app-dotnet-mssql_)...

La configuration de cette application pour pouvoir se connecter à ces multiples bases de données sera la suivante :

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "base_de_donnees",
            "username": "utilisateur"
        },
        "site-web-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "base_de_donnees",
            "username": "utilisateur"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "base_de_donnees",
            "username": "utilisateur"
        }
    },
    ...
```

Pour pouvoir communiquer avec chacune de ces applications, il suffit d'utiliser la ressource _db comme suit :

```
var dbParDefaut = _db.init()

var dbSiteWebWP = _db.init("site-web-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Chaque variable contient une instance de la ressource *_db* associée à la base de données correspondant à la clé qui identifie la connexion définie dans les configurations de l'application.

Ainsi, en utilisant ces variables, vous pourrez effectuer les opérations de base de données telles que les requêtes, insertions, mises à jour et suppressions.

Pour plus d'informations sur les opérations de base de données, consultez la documentation de la ressource : [_db](/docs/library/resources/db)