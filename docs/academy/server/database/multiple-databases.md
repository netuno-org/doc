---
id: multiple-databases
title: Multiple Databases
sidebar_label: Multiple Databases
---

## Connect to Multiple Databases

_Netuno_ allows an application to connect to multiple databases.

This way data can be managed through several different connections and database types.

_Netuno_ supports databases connections such as:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(coming soon)_

## Default Database

For applications to work correctly, a database must always be set as the default.

Remember that the application settings are kept in the following files:

```
/web/app/YOUR_APP/config/_development.json
/web/app/YOUR_APP/config/_production.json
/web/app/YOUR_APP/config/_YOUR_ENVIRONMENT.json
```

There you will find the connection seetings to the _default_ database, as can be seen below:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

Therefore, to add more connections to other Databases just repeat this step by changing the name _default_ to other name as you wish.

For example, imagine you have an application where the default database will be `PostgreSQL` but you also have to connect to a `WordPress MariaDB` database (_website-wp_) and also to another `Microsoft SQL Server` database of a .Net/C# application (_app-dotnet-mssql_)...

The configuration of this application to be able to connect to these multiple databases will be this way:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "website-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "database",
            "username": "user"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "database",
            "username": "user"
        }
    },
    ...
```

To be able to communicate with each of these applications just use the _db resource as follows:

```
var dbDefault = _db.init()

var dbWebsiteWP = _db.init("website-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Each variable contains an instance of the * _db * resource associated with the database that corresponds to the key that identifies the connection defined in the application settings.

Consequently, using these variables can be perform database operations such as `queries`, `inserts`, `updates` and `deletes`.

For more information on database operations see the documentation: *_db*
