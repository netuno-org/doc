---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## MSSQL - Docker Setup

Make sure Docker is installed. The following command downloads the current SQL Server 2025 Linux image from Microsoft Container Registry:

```
docker pull mcr.microsoft.com/mssql/server:2025-latest
```

To start the new container execute the following line command:

```
docker run -d --name mssql_server --hostname mssql_server -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Secret123' -p 1433:1433 mcr.microsoft.com/mssql/server:2025-latest
```

See Microsoft's [SQL Server Linux container quickstart](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver17).

The `MSSQL_SA_PASSWORD` value sets the password for the `sa` account.

The password must be 8–128 characters long and contain characters from at least three of these sets: uppercase letters, lowercase letters, digits, and symbols. If it does not meet the policy, SQL Server stops during setup.

After the container starts, connect with the `sqlcmd` tool included in the image:

```
docker exec -it mssql_server /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "Secret123"
```

Replace `Secret123` with the `sa` password configured when the container was created. Do not expose a real production password in shell history.

## Create a new application

To create a Netuno application connected to Microsoft SQL Server, follow the standard application-creation flow and choose the MSSQL database engine.

The user should follow the steps of the tutorial: 

After choosing MSSQL, enter the database connection details.

For example:

![app-create](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Change application configuration

For an application to be able to work with MSSQL and thus start using MSSQL as the main application database, change the environment settings in:

```
/web/app/YOUR_APP/config/_development.json
/web/app/YOUR_APP/config/_production.json
/web/app/YOUR_APP/config/_YOUR_ENVIRONMENT.json
```

The configuration should be as follows:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

To configure an additional connection instead of the application's main database, replace `default` with the desired connection name.

## Instances

To connect to a specific SQL Server instance, add the `instance` value to the connection configuration. For example:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "my-instance-name",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```
