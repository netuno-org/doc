---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configuración de MSSQL en Docker

Asumiendo que ya tiene instalado Docker, basta con descargar la imagen del contenedor desde Microsoft Container Registry con el siguiente comando:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

Y para iniciar el nuevo contenedor, ejecute el siguiente comando:

```
docker run -d --name servidor_mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secreto123' -p 1433:1433 microsoft/mssql-server-linux
```

El parámetro *-e 'SA\_PASSWORD=Secreto123'* donde *Secreto123* será la contraseña del usuario *sa*.

Tenga en cuenta que la contraseña deberá contener al menos 8 caracteres para cumplir con la norma mínima de seguridad de MSSQL; de lo contrario, el contenedor no se inicializará.

Tras la inicialización del contenedor, asegúrese de que MSSQL esté funcionando correctamente y, para ello, es posible instalar el comando *mssql* a través de *NPM*:

```
npm install mssql -g
```

Con esto podrá ejecutar el comando para conectarse a MSSQL a través del terminal:

```
mssql -u sa -p Secreto123
```

¡Atención! Si ha cambiado la contraseña, sustituya *Secreto123* por la contraseña de _sa_ configurada en el contenedor.

## Crear una nueva aplicación

Para crear una nueva aplicación en Netuno conectada a Microsoft SQL Server, siga los pasos normales de creación de una nueva aplicación en Netuno y elija el motor de base de datos MSSQL.

A continuación, siga los pasos del tutorial: 

Después de elegir el motor de base de datos MSSQL, se solicitarán los datos para realizar la conexión a la base de datos en MSSQL.

Como, por ejemplo:

![crear-aplicacion](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Cambiar la configuración de aplicaciones

Para que una aplicación pueda trabajar con MSSQL y pase así a utilizar MSSQL como base de datos principal de la aplicación, modifique las configuraciones de entorno en:

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
            "password": "Secreto123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_prueba",
            "username": "sa"
        },
        ...
    },
    ...
```

Si desea conectar como una base de datos alternativa y no principal, cambie el _"default"_ por el nombre deseado para esta conexión.

## Instancias

Si necesita conectar con una instancia específica de MSSQLSRV, añada en la configuración de la conexión el valor `instance`, como, por ejemplo:

```
    ...
    "db": {
        "default": {
            "password": "Secreto123",
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