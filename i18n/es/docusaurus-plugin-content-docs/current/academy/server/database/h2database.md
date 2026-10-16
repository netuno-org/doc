---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Introducción

La gran ventaja de H2Database es que no necesita un servidor de base de datos, ya que permite funcionar de forma embebida en las aplicaciones.

> H2Database se recomienda solo para fines de desarrollo y pruebas; en producción deberá utilizarse otro tipo de base de datos más consistente.

## Recomendaciones y limitaciones

H2Database no permite que más de un único proceso acceda al archivo de base de datos.

Así, si va a manipular el archivo o acceder desde la consola web, tendrá que detener la ejecución de Netuno.

## Archivos de base de datos

Los archivos de base de datos de H2Database se encuentran dentro de la carpeta `dbs`, que está dentro de la aplicación, por ejemplo:

- `apps/mi_app/dbs`

Si desea cambiar el nombre de la base de datos, modifique el nombre del archivo y corrija las configuraciones de la aplicación, por ejemplo en el entorno de _development_:

- `config/_development.json`

La corrección debe realizarse en la parte de la configuración de la conexión a la base de datos:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "mi_db",
            "username": ""
        }
    }
    ...
```

## Consola web

Puede ser necesario acceder a la base de datos directamente; en este caso, será posible a través de la consola web de H2Database.

La consola web se inicia al ejecutar directamente el _jar_ de H2Database de la siguiente forma:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Se asume que está en la raíz de Netuno.

Para visualizar las opciones disponibles:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Inicia la consola web en el puerto de Netuno **9000** y permite el acceso de IPs externos:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> Deberá detener la ejecución de Netuno antes para evitar que múltiples procesos manipulen el archivo de base de datos.

La URL JDBC para conectar a la base de datos deberá ser:

`jdbc:h2:./apps/mi_app/dbs/mi_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Sustituir la parte de `mi_app` por el nombre de la app y `mi_db` por el nombre de la base de datos correspondiente.

La autenticación será el usuario `sa` pero sin contraseña.


### Restablecer los accesos

Especialmente cuando se pierde el acceso del usuario `dev`.

Acceda a través de la consola web de H2Database como se describe arriba.

Para recrear el acceso, borre los datos de la tabla `netuno_user`, por ejemplo:

- `delete from netuno_user`
 
Así, Netuno recreará los usuarios con sus respectivas contraseñas predeterminadas cuando se inicie de nuevo.