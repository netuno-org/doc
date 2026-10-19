---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Introducción

<a href="https://mariadb.org/" target="_blank">MariaDB</a> es la base de datos relacional innovadora de código abierto compatible con **MySQL**.

## Instalación

Cómo instalar MariaDB.

#### Ubuntu

Ejecute en el terminal:

```shell
sudo apt install mariadb-server
```

#### Windows

Descargue e instale MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB Download</a>

## Cliente

Conéctese a MariaDB para ejecutar comandos de gestión en el servidor de base de datos.

#### Ubuntu

Ejecute en el terminal:

```shell
sudo mariadb
```

#### Windows

Abra la aplicación `Command Prompt MariaDB` y ejecute:

```shell
mariadb -u root -p
```

O bien busque `MySQL Client` o `MariaDB Client`.

## Crear la Base de Datos

Ejecute el siguiente comando conectado al cliente de MariaDB:

```sql
CREATE DATABASE app_bd
```

## Crear Usuario

Ejecute el siguiente comando conectado al cliente de MariaDB:

```sql
CREATE USER 'usuario_app'@'localhost' IDENTIFIED BY 'S3cR3t';
```

Para otorgar al usuario acceso general a la base de datos que se ha creado, ejecute:

```sql
GRANT ALL PRIVILEGES ON app_bd.* TO 'usuario_app'@'localhost';
```

Actualice los privilegios de acceso:

```sql
FLUSH PRIVILEGES;
```

> Para salir utilice el comando: `\q`

## Configurar la Aplicación

Edite el archivo de configuración de la aplicación según el entorno:

- `config/_development.json`

Ejemplo de configuración de base de datos para MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_bd",
            "username": "usuario_app",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Se pueden utilizar configuraciones avanzadas como:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
            "host": "localhost",
            "name": "app_bd",
            "username": "usuario_app",
            "password": "S3cR3t",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```

> Vea más sobre las [configuraciones de conexión a la Base de Datos con HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).