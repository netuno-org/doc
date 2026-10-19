---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configuración de MSSQL en Docker

Suponiendo que ya tiene Docker instalado, basta con descargar la imagen del contenedor desde Microsoft Container Registry con el siguiente comando:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

Y para iniciar el nuevo contenedor ejecute el siguiente comando:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

En el parámetro *-e 'SA\_PASSWORD=Secret123'* donde está *Secret123* estará la contraseña del usuario *sa*.

Tenga en cuenta que la contraseña deberá contener al menos 8 caracteres para cumplir con la norma mínima de seguridad de MSSQL; de lo contrario, el contenedor no se iniciará.

Tras la inicialización del contenedor, asegúrese de que MSSQL está funcionando correctamente y, para ello, es posible instalar el comando *mssql* a través de *NPM*:

```
npm install mssql -g
```

Con esto podrá ejecutar el comando para conectarse a MSSQL a través de la terminal:

```
mssql -u sa -p Secret123
```

¡Atención! Si ha cambiado la contraseña, sustituya *Secret123* por la contraseña de _sa_ configurada en el contenedor.

## Crear una nueva aplicación

Para crear una nueva aplicación en Netuno conectada a Microsoft SQL Server, siga los pasos habituales de creación de una nueva aplicación en Netuno y elija el motor de base de datos MSSQL.

Así, siga los pasos del tutorial:

Después de elegir el motor de base de datos MSSQL se solicitarán los datos para realizar la conexión a la base de datos en MSSQL.

Como por ejemplo:

![app-create](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Cambiar la configuración de aplicaciones

Para que una aplicación pueda trabajar con MSSQL y pase así a utilizar MSSQL como base de datos principal de la aplicación, cambie las configuraciones de entorno en:

```
/web/app/TU_APP/config/_development.json
/web/app/TU_APP/config/_production.json
/web/app/TU_APP/config/_TU_ENTORNO.json
```

La configuración deberá realizarse de la siguiente forma:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_prueba",
            "username": "sa"
        },
        ...
    },
    ...
```

Si desea conectarse como una base de datos alternativa y no principal, entonces cambie _"default"_ por el nombre deseado para esta conexión.

## Instancias

Si necesita conectar con una instancia específica de MSSQLSRV, entonces añada en la configuración de la conexión el valor `instance`, como por ejemplo:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "nombre-de-mi-instancia",
            "name": "netuno_prueba",
            "username": "sa"
        },
        ...
    },
    ...
```
