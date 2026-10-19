---
id: multiple-databases
title: Multiple Databases
sidebar_label: Multiple Databases
---

## Connecting to Multiple Databases

Netuno allows an application to connect to multiple databases.

This way you can manipulate data through several connections and different database types.

Netuno supports connections to databases such as:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(coming soon)_

## DEFAULT database

For applications to work correctly, there must always be a database configured as default.

Remember that the application configurations are stored in the files:

```
/web/app/YOUR_APP/config/_development.json
/web/app/YOUR_APP/config/_production.json
/web/app/YOUR_APP/config/_YOUR_ENVIRONMENT.json
```

There you will find the configuration of the _default_ database connection, as follows:

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

So, to add more connections to other databases, just repeat this configuration, changing the name _default_ to another desired name.

For example, imagine you have an application where the default database is on PostgreSQL but you also need to connect to a MariaDB database from WordPress (_website-wp_) and also to another database on Microsoft SQL Server from a .Net/C# application (_app-dotnet-mssql_)...

The configuration of this application to be able to connect to these multiple databases will be like this:

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

To be able to communicate with each of these applications, just use the _db resource as follows:

```
var dbDefault = _db.init()

var dbWebsiteWP = _db.init("website-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Each variable contains an instance of the *_db* resource associated with the database corresponding to the key that identifies the connection defined in the application's configurations.

So, using these variables you can perform database operations such as queries, inserts, updates and deletes.

For more information about database operations, see the resource documentation: [_db](/docs/library/resources/db)