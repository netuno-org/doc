---
sidebar_position: 2
id: config
title: Configuración
---

# Configura la aplicación

Esta guía presenta los pasos iniciales para configurar el idioma de la aplicación Demo, de la base de datos y habilitar comandos automáticos que se ejecutan con el servidor.

Todas las modificaciones se realizan en el archivo `_development.json` de configuración de la aplicación **Demo**, ubicado en la carpeta /apps/demo/**config**.

### Requisitos previos

Antes de editar la configuración, confirma estos puntos:

- La aplicación Demo ya se ha creado e inicializado.
- Estás en la raíz del proyecto Netuno.
- Tienes un editor de código abierto en `/apps/demo/config/development.json`.
- Podrás reiniciar el servidor después de guardar los cambios.

## Configuración de idiomas

### 1. Aplicación

En el archivo de configuración, localiza los campos `language` y `locale` para cambiar el idioma de la aplicación.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Define los valores según el idioma deseado:

- **Portugués**: `pt_PT` o `pt_BR`
- **Inglés**: `en_GB` o `en_US`

### 2. Base de datos

Localiza el objeto **"db"** y, a continuación, la configuración de **"default"**.

Cambia el campo **"name"** para definir la base de datos correspondiente:

- `demo_pt`: base de datos en portugués.
- `demo_en`: base de datos en inglés.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Habilitar varios comandos

Netuno permite ejecutar varios comandos simultáneamente al iniciar el servidor, mostrando las salidas en la misma consola.

De forma predeterminada, la aplicación **Demo** incluye el comando `bun run watch` configurado, pero desactivado. Este comando compila automáticamente cualquier cambio realizado en los archivos de código del backoffice.

Para activarlo, localiza el array **"commands"** y cambia el valor del campo **enabled** de false a **true**.
 
```json title="/apps/demo/config/development.json"
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

- La aplicación Demo está en el idioma configurado.
- La consola muestra la ejecución del comando `bun run watch`, si está habilitado.

## Próximos pasos

Avanza a la siguiente etapa de **Formulario** para explorar y modificar la aplicación de demostración.