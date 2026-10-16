---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Introducción

<a href="https://mariadb.org/" target="_blank">MariaDB</a> es la innovadora base de datos relacional de código abierto compatible con **MySQL**.

## Instalación

Cómo instalar MariaDB.

#### Ubuntu

Ejecute en el terminal:

```shell
sudo apt install mariadb-server
```

#### Windows

Descargue e instale MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">Descarga de MariaDB</a>

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

O busque `MySQL Client` o `MariaDB Client`.

## Crear la base de datos

Ejecute el siguiente comando conectado al cliente de MariaDB:

```sql
CREATE DATABASE app_bd
```

## Crear usuario

Ejecute el siguiente comando conectado al cliente de MariaDB:

```sql
CREATE USER 'app_usuario'@'localhost' IDENTIFIED BY 'S3cr3t0';
```

Para otorgar acceso general al usuario en la base de datos creada, ejecute:

```sql
GRANT ALL PRIVILEGES ON app_bd.* TO 'app_usuario'@'localhost';
```

Actualice los privilegios de acceso:

```sql
FLUSH PRIVILEGES;
```

> Para salir utilice el comando: `\q`

## Configurar la aplicación

Edite el fichero de configuración de la aplicación según el entorno:

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
            "username": "app_usuario",
            "password": "S3cr3t0"
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
            "username": "app_usuario",
            "password": "S3cr3t0",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```

> Vea más sobre las [configuraciones de conexión a la base de datos con HikariCP](/docs/academy/server/database/hikaricp-database-connection-pool).