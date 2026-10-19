---
sidebar_position: 8
id: ui-layer
title: Capa UI
sidebar_label: Capa UI
---

Instalación y compilación del panel de control y la interfaz general de las aplicaciones.

## Contexto

Las aplicaciones Netuno ya traen configuradas, por defecto, un conjunto de tecnologías avanzadas orientadas al 
front-end, siendo algunas de ellas [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) 
y [Ant.Design](https://ant.design/).

Dentro de las aplicaciones está la carpeta `📁 ui` (_interfaz de usuario_), que es donde desarrollamos los
paneles de control y otros componentes de front-end.

## Antes de empezar

Asegúrate de tener instalado [Bun](https://bun.sh/), que es un requisito previo; más información sobre cómo:

- [Instalar Bun](/docs/academy/website/bun)

## Instalar los módulos de dependencia

Para instalar todas las dependencias que vienen por defecto, entra en la carpeta `📁 ui` (_interfaz de usuario_) dentro de tu 
aplicación en desarrollo, por ejemplo:

```shell
cd apps/mi_app/ui/
```

Ejecuta el comando de instalación de los módulos de dependencia:

```shell
bun install
```

> [Bun](https://bun.sh) es una alternativa mejorada y más optimizada que NPM.

## Compilación automática

Entra en la carpeta `📁 ui` (_interfaz de usuario_) de tu aplicación en desarrollo, por ejemplo:

```shell
cd apps/mi_app/ui/
```

Para compilar el front-end automáticamente en cada cambio de código, ejecuta:

```shell
bun run watch
```

> Asegúrate de tener [Bun](https://bun.sh/) instalado.
 
## Integración automática del front-end con Netuno

Netuno te permite iniciar la UI junto con el proceso de servidor de la aplicación Netuno.

> Todos los mensajes de compilación de React estarán integrados en el mismo terminal que la aplicación Netuno.

Para ello, basta con activar la configuración en los `commands` de la aplicación Netuno en `📂 config/_development.json`,
es decir, en el `command` con el `path` de `ui`, poner `enabled` en `true`, de la siguiente forma:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Siempre que edites archivos de configuración de la aplicación Netuno es necesario reiniciar el servidor para que pueda 
> aplicar los nuevos cambios.

Por último, inicia/reinicia el servidor con tu aplicación Netuno para comprobar su funcionamiento.

Y ahora todo quedará integrado en un único terminal centralizado, evitando así tener varios terminales
dispersos; más sobre:

- [Terminal centralizado](/docs/academy/explore/centralized-terminal)

## Otras tecnologías de front-end

Dentro de la carpeta `📁 ui` es posible configurar cualquier tecnología de front-end, o incluir cualquier nuevo módulo de 
dependencia que sea necesario.

Si no quieres utilizar ninguna de las tecnologías estándar, puedes sustituirla por cualquier otra, especialmente
adaptando los archivos:

- `package.json`
- `vite.config.js`