---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## MSSQL - Docker Setup

Fot this step the user should have Docker already installed. The container image can be downloaded from Microsoft Container Registry through the following command:

```
sudo docker pull mcr.microsoft.com/mssql/server:2019-latest
```

To start the new container execute the following line command:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```
[DOCKER (Install Containers for SQL Server on Linux)](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash).

The parameter *-e 'SA\_PASSWORD=Secret123'* where *Secret123* is located will be the *sa*'s user password.

Please note, that the password must contain at least 8 characters to comply with the MSSQL minimum security standard, otherwise the container will not restart.

After restart the container make sure that MSSQL is working correctly and you can install the *mssql* command via *NPM*:

```
npm install mssql -g
```

This step will allow you to execute the command to connect to MSSQL via the terminal:

```
mssql -u sa -p Secret123
```

Attention! If you have changed the password, replace the *Secret123* with the _sa_ password configured in the container.

## Create a new application

To create a new Netuno application connected to Microsoft SQL Server, and  just follow the previous steps to the new Netuno app choosing MSSQL database engine.

The user should follow the steps of the tutorial: 

After choosing the MSSQL database engine you will be asked to make the connection to the database in MSSQL.

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

If the user wants to connect to a different database that is not main database, then change the _"default"_ to the desired name for this setup.
