---
sidebar_position: 2
id: config
title: Configuración
---

# Configurar la aplicación

Esta guía presenta los pasos iniciales para configurar el idioma de la aplicación Demostración, de la base de datos y habilitar comandos automáticos ejecutados con el servidor.

Todos los cambios se realizan en el archivo `_development.json` de configuración de la aplicación **Demostración**, ubicado en la carpeta /apps/demostracion/**config**.

### Prerrequisitos

Antes de editar la configuración, confirma estos puntos:

- La aplicación Demostración ya ha sido creada e inicializada.
- Estás en la raíz del proyecto Netuno.
- Un editor de código está abierto en `/apps/demostracion/config/development.json`.
- Podrás reiniciar el servidor después de guardar los cambios.

## Configuración de idiomas

### 1. Aplicación

En el archivo de configuración, localiza los campos `language` y `locale` para cambiar el idioma de la aplicación.

```json title="/apps/demostracion/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Define los valores de acuerdo con el idioma deseado:

- **Portugués**: `pt_PT` o `pt_BR`
- **Inglés**: `en_GB` o `en_US`

### 2. Base de datos

Localiza el objeto **"db"** y, a continuación, las configuraciones de **"default"**.

Cambia el campo **"name"** para definir la base de datos correspondiente:

- `demostracion_pt`: base de datos en portugués.
- `demostracion_en`: base de datos en inglés.

```json title="/apps/demostracion/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demostracion_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Habilitar múltiples comandos

Netuno permite ejecutar múltiples comandos simultáneamente en la inicialización del servidor, mostrando las salidas en la misma consola.

Por defecto, la aplicación **Demostración** trae el comando `bun run watch` configurado, pero desactivado. Este comando compila automáticamente cualquier cambio realizado en los archivos de código del backoffice.

Para activarlo, localiza en el array **"commands"** y cambia el valor del campo **enabled** de false a **true**.
 
```json title="/apps/demostracion/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parámetros del objeto "commands"

- `enabled`: activa (true) o desactiva (false) la ejecución automática del comando.
- `path`: define la ruta (carpeta) de la aplicación donde se ejecutará el comando.
- `command`: define el comando que se ejecutará en la terminal.

:::tip
Puedes añadir otros comandos dentro del array `"commands"`, siempre que mantengas la misma estructura de objeto.
:::


Después de guardar el archivo de configuración, reinicia el servidor Netuno para aplicar los cambios.


## Resultado esperado

Después de reiniciar el servidor, confirma los siguientes puntos:

- La aplicación Demostración está en el idioma configurado.
- La consola muestra la ejecución del comando `bun run watch`, si está habilitado.

## Próximos pasos

Avanza a la siguiente etapa de **Formulario** para explorar y modificar la aplicación de demostración.