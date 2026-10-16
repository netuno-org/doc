---
id: cli
title: Línea de Comandos
sidebar_label: Línea de Comandos
---


La interfaz de línea de comandos de Netuno es la herramienta principal para gestionar tu entorno de desarrollo. A través de ella, puedes consultar información del sistema, gestionar aplicaciones y configurar el servidor de forma rápida.

#### Requisitos previos

- **Terminal:** Debes tener un terminal (Símbolo del sistema, PowerShell o Bash) abierto en la carpeta raíz donde se instaló Netuno.

Estos son los comandos iniciales para verificar si tu entorno está listo para su uso.

| OPCIÓN    | DESCRIPCIÓN    |
|----------|--------------|
| `help` | Permite visualizar todos los comandos disponibles de Netuno. |
| `version` | Permite visualizar la versión actual de Netuno. |

#### Listar comandos disponibles

Si tienes dudas sobre qué operaciones puedes realizar, usa el comando de ayuda. Devolverá una lista completa de funciones.

```shell
./netuno help
```
#### Visualizar la versión de Netuno

Es fundamental saber qué versión estás utilizando para garantizar la compatibilidad con scripts y módulos específicos.

```shell
./netuno version
```

## Instalar

Antes de iniciar el desarrollo, es necesario instalar el motor de Netuno en tu entorno. Para más información, accede a nuestra página de [Instalación](/docs/get-started/installation).

Esta sección detalla los parámetros que se pueden utilizar durante el proceso de instalación para automatizar u optimizar el proceso.

| OPCIÓN | DESCRIPCIÓN |
|----------|--------------|
| `checksum` | Actualiza el código de verificación (checksum) de todos los archivos del paquete instalado. |
| `force` | Fuerza la sustitución de todos los archivos, incluso si existen cambios locales.|
| `graal=true/false` | Define el uso de GraalVM para obtener un mayor rendimiento en la ejecución de las aplicaciones. |
| `path=[Directorio]`| Define manualmente la ruta (carpeta) donde se instalará Netuno.|
| `remove` | Elimina completamente todos los archivos relacionados con Netuno del sistema.|
| `version=[versión]`| Selecciona una versión específica para instalar. Usa la más reciente para la versión de desarrollo.|
| `yes`| Responde automáticamente "SÍ" a todas las confirmaciones, ignorando avisos sobre pérdida de datos.|

#### Ejemplo de cómo actualizar el checksum:

```shell
./netuno install checksum
```

#### Ejemplo de cómo forzar todos los cambios locales:

```shell
./netuno install force
```

#### Ejemplo de cómo desactivar GraalVM: 

```shell
./netuno install graal=false
```

> GraalVM está activa por defecto y se descarga automáticamente durante la instalación de Netuno.

#### Ejemplo de cómo definir la ruta de instalación:

```shell
./netuno install path ='directorioNetuno'
```
#### Ejemplo de cómo eliminar todas las carpetas de Netuno:

```shell
./netuno install remove
```

#### Ejemplo de cómo seleccionar la versión de Netuno que se debe instalar:

```shell
./netuno install version='latest'
```

##### Ejemplo de cómo responder SÍ a todas las preguntas: 
```shell
./netuno install yes 
```

## Servidor

Después de completar la instalación, inicia el servidor para empezar a desarrollar tus aplicaciones.

Para iniciar el servidor con la configuración predeterminada, ejecuta el comando siguiente en la carpeta raíz de Netuno:

```shell
./netuno server
```

> Por defecto, el servidor utiliza el puerto 9000. Tan pronto como el terminal indique que el sistema está listo, podrás acceder al panel de gestión a través del enlace: http://localhost:9000/

Esta sección detalla los parámetros que se pueden utilizar durante el proceso de inicio del servidor.

OPCIÓN | DESCRIPCIÓN |
|----------|--------------|
| `app=[nombre_de_la_app]` | Define específicamente qué aplicación debe iniciarse |
| `host=[IP/nombre del host]` | Permite cambiar el nombre del host de Netuno |
| `launch=true/false` | Define si Netuno debe abrir automáticamente el navegador |
| `npm` | Ejecuta el comando 'npm watch' automáticamente para compilar el frontend de la App en tiempo real |
| `port=[número]` | Define el puerto de inicio del servidor |
| `secret=[contraseña]` | Define una contraseña de seguridad para permitir el acceso a la gestión remota del servidor |
| `web=[carpeta]` | Cambia la carpeta raíz del proyecto (web home) predefinida |

Por defecto, Netuno utiliza la carpeta **'webapp'** para almacenar todos los archivos esenciales para su funcionamiento.

**Atención al cambiar el directorio:** Si utilizas el parámetro web=[carpeta] para cambiar el nombre de la carpeta raíz, recuerda que también debes renombrar físicamente la carpeta en tu sistema de archivos. El comando solo indica al código de Netuno dónde buscar los archivos, no renombra carpetas automáticamente.

#### Ejemplo de cómo iniciar el servidor de una aplicación específica:

```shell
./netuno server app=miapp
```

#### Ejemplo de cómo cambiar el nombre del host:

```shell
./netuno server host=localhost
```

#### Ejemplo de cómo definir si Netuno inicia el navegador automáticamente:

```shell
./netuno server launch=false
```

>Por defecto, Netuno abre el navegador e inicia el enlace http://localhost:9000.

#### Ejemplo de cómo ejecutar npm para construir automáticamente el frontend

```shell
./netuno server npm
```

#### Ejemplo de cómo cambiar el puerto:

```shell
./netuno server port=10000
```

#### Ejemplo de cómo definir una contraseña para acceder a la gestión remota del servidor:

```shell
./netuno server secret='c#ntr@s3ñ@'
```

#### Ejemplo de cómo cambiar la carpeta predeterminada de la web:

```shell
./netuno server web=webapp
```

## Licencia

Para iniciar el desarrollo con Netuno, es necesario registrar tu entorno.

Para gestionar tu licencia, utiliza el comando base:

```shell
./netuno license
```

> Actualmente, Netuno ofrece tres modalidades de licencia: **Community, Standard y Enterprise**.

Esta sección detalla las acciones disponibles para configurar o consultar tu licencia.

| OPCIÓN    | DESCRIPCIÓN    |
|----------|--------------|
| `create , change` | Inicia el proceso para crear una nueva licencia o cambiar la actual |
| `key` | Muestra la clave de licencia activa en tu entorno |
| `mail=[tu@correo.com]` | Define la dirección de correo electrónico asociada a la cuenta de la licencia |
| `type=[community/standard/enterprise]`  | Define el tipo de licencia|


#### Ejemplo de cómo crear una licencia:

```shell
./netuno license create
```

#### Ejemplo de cómo visualizar la clave de la licencia: 

```shell
./netuno license key
```
##### Ejemplo de cómo definir tu correo electrónico y tipo de licencia:

```shell
./netuno license mail='correo@gmail.com' type='community'
```

## Aplicación

Con el servidor configurado y la licencia activa, puedes ampliar tu ecosistema creando nuevas soluciones.

```shell
./netuno app
```

Los archivos generados se organizarán automáticamente dentro de la estructura de carpetas de Netuno.

Para acceder o editar los archivos de tu aplicación, navega por la siguiente ruta desde la raíz del sistema: **webapp / apps / [nombre_de_tu_app]**

#### Estructura de carpetas

- **webapp**: Es la carpeta raíz que contiene todos los archivos esenciales para el funcionamiento de Netuno.

- **apps**: Carpeta específica donde se almacenan todas las aplicaciones desarrolladas o en demostración.

- **[nombre_de_tu_app]**: La carpeta exclusiva de la aplicación que acabas de crear.

Por defecto, Netuno tiene una aplicación de demostración que se muestra cuando se inicia el servidor Netuno.

| OPCIÓN    | DESCRIPCIÓN    |
|----------|--------------|
| `database=[nombre_de_la_base_de_datos]` | Define el nombre de la base de datos |
| `engine=[nombre]` | Define el tipo de base de datos |
| `host=[dirección]` | Define la dirección de la base de datos. |
| `language=[idioma]`  | Define el idioma de la aplicación |
| `locale=[idioma]` | Define el idioma local de la aplicación |
| `name=[nombre]`  | Permite crear una aplicación o reconstruir una aplicación existente |
| `password=[contraseña]`  | Define una contraseña para la base de datos |
| `port=[número]`  | Define el puerto de la base de datos |
| `username=[nombre]`  | Define el nombre de usuario de la base de datos |

#### Ejemplo de cómo definir el nombre de la base de datos:

```shell
./netuno app database=empleado
```

> El nombre de la base de datos puede contener números y letras; si el nombre tiene más de una palabra, debe separarse por "_", de la siguiente forma.
>
> **Ejemplo:** empleado_db

#### Ejemplo de cómo definir el tipo de base de datos:

```shell
./netuno app engine=pg
```
Existen los siguientes tipos de base de datos:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Ejemplo de cómo definir la dirección del servidor de base de datos:

```shell
./netuno app host=localhost
```

#### Ejemplo de cómo definir el idioma y la configuración regional:

```shell
./netuno app language=es_ES locale=es_ES
```
Existen los siguientes idiomas:
> - Portugués - pt_PT
> - Brasileño - pt_BR
> - Inglés - en_US
> - Español - es_ES

#### Ejemplo de cómo crear una aplicación o reconstruir una aplicación existente:

```shell
./netuno app name=demo
```

#### Ejemplo de cómo definir la contraseña de la base de datos:

```shell
./netuno app password=secreto
```

#### Ejemplo de cómo definir el puerto de la base de datos:

```shell
./netuno app port=5432
```
Por defecto, los puertos corresponden a:  

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### Ejemplo de cómo definir el nombre de usuario de la base de datos:

```shell
./netuno username=root
```