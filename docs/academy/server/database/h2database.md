---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Introduction

The big advantage of H2Database is that it does not require a database server because it allows running embedded within applications.

> H2Database is recommended only for development and testing purposes; in production, another more reliable database type should be used.

## Recommendations and Limitations

H2Database does not allow more than a single process to access the database file.

So if you need to manipulate the file or access it through the web console, you must stop Netuno from running.

## Database Files

H2Database database files are stored inside the `dbs` folder, which is inside the application, for example:

- `apps/my_app/dbs`

If you want to rename the database, change the file name and update the application settings, for example in the _development_ environment:

- `config/_development.json`

The correction must be made in the database connection configuration section:

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

You may need to access the database directly; in this case, you can do so through the H2Database web console.

The web console is started by running the H2Database _jar_ directly as follows:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> It is assumed that you are at the Netuno root.

To view the available options:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Starts the web console on Netuno's port **9000** and allows access from external IPs:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> You must stop Netuno execution first to prevent multiple processes from manipulating the database file.

The JDBC URL to connect to the database should be:

`jdbc:h2:./apps/my_app/dbs/my_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Replace the `my_app` part with the app name and `my_db` with the corresponding database name.

Authentication will be with the `sa` user but without a password.


### Resetting Access

Especially when you lose access for the `dev` user.

Access it through the H2Database web console as described above.

To recreate the access, delete the data from the `netuno_user` table, for example:

- `delete from netuno_user`
 
This way, Netuno will recreate the users with their respective default passwords when it is started again.