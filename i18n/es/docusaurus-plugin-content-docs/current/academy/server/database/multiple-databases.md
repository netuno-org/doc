---
id: multiple-databases
title: Múltiples Bases de Datos
sidebar_label: Múltiples Bases de Datos
---

## Conectar a Múltiples Bases de Datos

Netuno permite que una aplicación se conecte a múltiples bases de datos.

Así podrá manipular datos a través de varias conexiones y tipos de bases de datos diferentes.

Netuno soporta la conexión a bases de datos como:

- PostgreSQL
- MariaDB
- H2DataBase
- Microsoft SQL Server
- Oracle _(próximamente)_

## Base de datos DEFAULT

Para que las aplicaciones funcionen correctamente, siempre es necesario que haya una base de datos configurada como default (predeterminada).

Recuerde que las configuraciones de las aplicaciones se encuentran en los archivos:

```
/web/app/TU_APP/config/_development.json
/web/app/TU_APP/config/_production.json
/web/app/TU_APP/config/_TU_ENTORNO.json
```

Allí encontrará la configuración de la conexión a la base de datos _default_, de la siguiente forma:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql|mariadb|h2|mssql",
            "host": "localhost",
            "name": "base_de_datos",
            "username": "usuario"
        }
    },
    ...
```

Por lo tanto, para añadir más conexiones a otras bases de datos basta con repetir esta configuración cambiando el nombre _default_ por otro nombre deseado.

Por ejemplo, imagine que tiene una aplicación en la que la base de datos default está en PostgreSQL, pero que también se tiene que conectar a una base de datos en MariaDB de WordPress (_sitio-wp_) y también a otra base de datos en Microsoft SQL Server de una aplicación .Net/C# (_app-dotnet-mssql_)...

La configuración de esta aplicación para poder conectarse a estas múltiples bases de datos será de esta forma:

```
    ...
    "db": {
        "default": {
            "password": "*****",
            "engine": "psql",
            "host": "localhost",
            "name": "base_de_datos",
            "username": "usuario"
        },
        "sitio-wp": {
            "password": "*****",
            "engine": "mariadb",
            "host": "localhost",
            "name": "base_de_datos",
            "username": "usuario"
        },
        "app-dot-net": {
            "password": "*****",
            "engine": "mssql",
            "host": "localhost",
            "name": "base_de_datos",
            "username": "usuario"
        }
    },
    ...
```

Para poder comunicarse con cada una de estas aplicaciones, basta con utilizar el recurso _db de la siguiente forma:

```
var dbDefault = _db.init()

var dbSitioWP = _db.init("sitio-wp")

var dbAppDotNet = _db.init("app-dot-net")
```

Cada variable contiene una instancia del recurso *_db* asociado a la base de datos correspondiente a la clave que identifica la conexión definida en las configuraciones de la aplicación.

Así, utilizando estas variables podrá realizar las operaciones de base de datos como consultas, inserciones, actualizaciones y eliminaciones.

Para más información sobre las operaciones de base de datos, consulte la documentación del recurso: [_db](/docs/library/resources/db)