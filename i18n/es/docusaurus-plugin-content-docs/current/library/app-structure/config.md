---
id: config
title: Configuración
sidebar_label: Configuración
---

Configuración general de la aplicación.

## Carpeta de Configuración

Las configuraciones de la aplicación están disponibles en la carpeta `📂 config`, es donde se realizan las parametrizaciones generales de la aplicación y de las integraciones externas.

Netuno soporta diversos tipos de entornos; por defecto utilizamos `development` (desarrollo) y `production` (producción),

El entorno activo se define en `config.js`, que se encuentra en la raíz de la instalación de Netuno:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Se puede utilizar cualquier nombre para definir el entorno, pero las aplicaciones deben tener el mismo nombre de entorno como nombre de los archivos (`.json` y `.js`) en la carpeta `📂 config` de la aplicación.

Por defecto, en esta carpeta encontramos los siguientes archivos:

## _development.js

La inyección de código JavaScript que permite realizar configuraciones dinámicas a través de la lógica programática sobre las parametrizaciones definidas en el archivo `_development.json`. Por ejemplo, definir alguna configuración con base en información que está en la base de datos, definir la parametrización del comportamiento de la ejecución de código, entre otros.

Este archivo se utiliza dependiendo de la definición del entorno, si es el de `development` (desarrollo).

## _development.json

Definición de las parametrizaciones de la aplicación como el idioma, las configuraciones generales de recursos e integraciones. Como por ejemplo, configuraciones de bases de datos, Cron Jobs, integraciones con SMTP o API remotas, autenticación, entre muchos otros.

Este archivo se utiliza dependiendo de la definición del entorno, si es el de `development` (desarrollo).

## _production.js

La inyección de código JavaScript permite realizar configuraciones dinámicas a través de lógica programática sobre las parametrizaciones definidas en `_production.js`. Por ejemplo, definir la configuración con información que está en la base de datos, parametrización del comportamiento de la ejecución de código, entre otros.

Este archivo se utiliza dependiendo de la definición del entorno, si es el de `production` (producción).

## _production.json

Definición de las parametrizaciones de la aplicación como el idioma, las configuraciones generales de recursos e integraciones. Como por ejemplo, configuraciones de bases de datos, Cron Jobs, integraciones con SMTP o API remotas, autenticación, entre muchos otros.

Este archivo se utiliza dependiendo de la definición del entorno, si es el de `production` (producción).