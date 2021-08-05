---
id: h2database
title: H2 Database
sidebar_label: H2Database
---

## Introduction

H2 Database has many advantages: an open-source and a very fast database engine, also has strong security features and Embedded and Server mode, Clustering support.

> Therefore, H2 Database is recommended only for developement and tests and in the process has to be used another type of database more compatible.

## Recomendations and Limitations

H2 Database will not allow more than a process to access the database file.

Thus, in case the user needs to manipulate any file or have access throught the web console, they will need to stop _Netuno_.

## Database Filesg

H2 Database can be found in the folder `dbs`, which is inside the `app`. See the below example:

- `apps/my_app/dbs`

To give another name to the Database, the user will need to rename the file and amend the applications settings. See the example below into de **Development Enviroment** 👇

- `config/_development.json`

This adjusment should be made inside the configuration area as can be seen below 👇

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "my_db",
            "username": ""
        }
    }
    ...
```

## Web Console

The user can have access to H2 Database by the web console, wil need to execute directly _jar_ of the H2 Database, see the example below 👇

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> It is assumed to be at the _Netuno_ root.

To view available options:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Start your web console on the port **9000**  _Netuno_, giving you access to all external IP's:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> You should STOP _Netuno_ execution before to prevent multiple processes from manipulating the database file.

The following link JDBC URL will be to connect to the database:

`jdbc:h2:./apps/my_app/dbs/my_db;IGNORECASE=TRUE;CASE_INSENSITIVE_IDENTIFIERS=TRUE;MODE=PostgreSQL;DATABASE_TO_UPPER=FALSE;DB_CLOSE_ON_EXIT=TRUE;FILE_LOCK=NO;`

> Replace `my_app` with any name You like to give to your  `app` and `my_db` by any name that you wish to give to your `database`.

The user `sa` will be your _Authentication_ but without a password.


### Reset Access

This step will help especially when `dev` user access is lost.

Access through the H2 Database web console as described above.

To create access you must delete table data `netuno_user`, as an example:

> `delete from netuno_user`
 
Therefore, _Netuno_ will rebuilt users with their default passwords when started again.

