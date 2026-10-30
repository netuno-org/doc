---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Introducción

La gran ventaja de H2Database es que no necesita un servidor de base de datos porque permite funcionar de forma integrada en las aplicaciones.

> H2Database se recomienda solo para fines de desarrollo y pruebas; en producción deberá utilizarse otro tipo de base de datos más consistente.

## Recomendaciones y limitaciones

H2Database no permite que más de un único proceso acceda al archivo de base de datos.

Así, en caso de que vaya a manipular el archivo o acceder mediante la consola web, tendrá que detener la ejecución de Netuno.

## Archivos de base de datos

Los archivos de base de datos de H2Database se encuentran dentro de la carpeta `dbs`, que está dentro de la aplicación, por ejemplo:

- `apps/mi_app/dbs`

Si quiere renombrar la base de datos, cambie el nombre del archivo y corrija las configuraciones de la aplicación, por ejemplo en el entorno de _development_:

- `config/_development.json`

La corrección debe hacerse en la parte de la configuración de la conexión a la base de datos:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "mi_bd",
            "username": ""
        }
    }
    ...
```

## Consola web

Puede ser necesario acceder directamente a la base de datos; en este caso, será posible mediante la consola web de H2Database.

La consola web se inicia al ejecutar directamente el _jar_ de H2Database de la siguiente forma:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> Se asume que está en la raíz de Netuno.

Para ver las opciones disponibles:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Inicia la consola web en el puerto de Netuno **9000** y permite el acceso desde direcciones IP externas:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> Deberá detener la ejecución de Netuno antes para evitar que múltiples procesos manipulen el archivo de base de datos.

La URL JDBC para conectar con la base de datos deberá ser:

`jdbc:h2:./apps/mi_app/dbs/mi_bd;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Sustituir la parte de `mi_app` por el nombre de la app y `mi_bd` por el nombre de la base de datos correspondiente.

La autenticación será el usuario `sa` pero sin contraseña.


### Restablecer los accesos

Especialmente cuando se pierde el acceso del usuario `dev`.

Acceda a través de la consola web de H2Database como se describe arriba.

Para recrear el acceso, elimine los datos de la tabla `netuno_user`, por ejemplo:

- `delete from netuno_user`
 
Así, Netuno volverá a crear los usuarios con sus respectivas contraseñas predeterminadas cuando se inicie de nuevo.