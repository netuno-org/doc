---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## MSSQL Configuration in Docker

Assuming Docker is already installed, simply download the container image from the Microsoft Container Registry with the following command:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

And to start the new container run the following command:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

The parameter *-e 'SA\_PASSWORD=Secret123'* where *Secret123* is located will be the password of the *sa* user.

Note that the password must contain at least 8 characters to comply with the MSSQL minimum security standard, otherwise the container will not initialize.

After the container has initialized, make sure that MSSQL is working correctly; to do so, you can install the *mssql* command through *NPM*:

```
npm install mssql -g
```

With this you can run the command to connect to MSSQL through the terminal:

```
mssql -u sa -p Secret123
```

Attention! If you have changed the password, replace *Secret123* with the password of the _sa_ configured in the container.

## Create a new application

To create a new application in Netuno connected to Microsoft SQL Server, follow the normal steps for creating a new application in Netuno and choose the MSSQL database engine.

So follow the tutorial steps:

After choosing the MSSQL database engine, you will be asked for the data to make the connection to the MSSQL database.

For example:

![app-create](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Change the application configuration

For an application to work with MSSQL and thus start using MSSQL as the application's main database, change the environment settings in:

```
/web/app/YOUR_APP/config/_development.json
/web/app/YOUR_APP/config/_production.json
/web/app/YOUR_APP/config/_YOUR_ENVIRONMENT.json
```

The configuration should be done as follows:

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

If you want to connect as an alternative rather than the main database, then change _"default"_ to the desired name for this connection.

## Instances

If you need to connect to a specific MSSQLSRV instance, then add the `instance` value to the connection configuration, for example:

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