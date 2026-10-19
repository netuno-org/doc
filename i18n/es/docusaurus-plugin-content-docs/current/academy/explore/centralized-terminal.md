---
id: centralized-terminal
title: Terminal Centralizado
sidebar_label: Terminal Centralizado
---

Netuno permite unificar la salida de datos (logs) de múltiples comandos y procesos en una única ventana de terminal — la misma donde se está ejecutando el servidor principal.

En los flujos de desarrollo modernos, donde es habitual trabajar con diversas tecnologías simultáneamente, Netuno actúa como un orquestador de logs, pudiendo contener diversos comandos configurados para iniciarse automáticamente en paralelo, como procesos de front-end de ReactJS, Angular, Vue y cualquier otro.

> Se puede iniciar cualquier proceso, basta con definir su comando, por ejemplo incluso se puede integrar otro servidor de una API REST auxiliar desarrollada en cualquier otra tecnología.


## Configuración

Para integrar procesos externos, debe editar el archivo de configuración de entorno de su aplicación. En esta guía, utilizaremos el entorno de desarrollo como ejemplo.

### Ubicación del Archivo

Navegue hasta la carpeta de su aplicación y localice el archivo:

- 📂 `config/_development.json`

### Estructura de Configuración


La configuración se realiza mediante la clave "commands", que consiste en un array de objetos. Esto le permite ejecutar múltiples servicios en paralelo.

Abra el archivo y compruebe si la clave `"commands"` ya existe. En caso contrario, insértela al final del archivo (respetando el formato JSON) siguiendo la configuración que se muestra a continuación:

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "sitio-web",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Nota:** En el ejemplo anterior, hemos configurado un comando para la carpeta "ui" y otro para la carpeta "sitio-web", ambos utilizando el gestor bun.

### Referencia de Parámetros

**Interfaz de Usuario (UI):** Ejecuta `bun run watch` dentro del directorio `ui` de su aplicación.

**Sitio web:** Ejecuta `bun run dev` dentro de la carpeta `sitio-web`. 

### env

Define las variables de entorno que el proceso necesita para ejecutarse. Puede definir múltiples variables simultáneamente.

### path

Define la ruta de carpetas donde se ejecutará el comando, relativa a la raíz de la aplicación.

### install

Netuno posee una inteligencia integrada para gestionar dependencias de paquetes:

- **Detección Automática:** Si su comando empieza por `npm`, `bun`, `pnpm` o `yarn`, Netuno comprueba si existe la carpeta `node_modules`.

- **Ejecución Inteligente:** En caso de que no se encuentre la carpeta, el comando de instalación correspondiente (ejemplo: `bun install`) se ejecuta automáticamente antes de iniciar el proceso principal.

- **Personalización:** Al definir manualmente el parámetro `install`, la detección predeterminada se sustituye por su configuración personalizada.

### command

El comando principal que se va a ejecutar. Toda la salida de datos (`output`) se integrará con Netuno.

### enabled

Define si el comando debe (true) o no (false) iniciarse automáticamente con la aplicación.

## Conclusión

La centralización de comandos en Netuno simplifica enormemente el flujo de trabajo.
La visibilidad unificada permite que toda la información de procesos paralelos se consolide en un único terminal, facilitando el monitoreo en tiempo real.

El cierre seguro hace que, al detener la ejecución del servidor Netuno, todos los procesos auxiliares configurados también se cierren automáticamente, evitando procesos "en segundo plano" o bloqueos de puerto.