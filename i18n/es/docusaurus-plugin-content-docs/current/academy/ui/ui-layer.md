---
sidebar_position: 8
id: ui-layer
title: Capa de UI
sidebar_label: Capa de UI
---

Instalación y compilación del dashboard e interfaz general de las aplicaciones.

## Contexto

Las aplicaciones Netuno ya traen configuradas, por defecto, un conjunto de tecnologías avanzadas orientadas al front-end, siendo algunas de ellas [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) y [Ant.Design](https://ant.design/).

Dentro de las aplicaciones hay la carpeta `📁 ui` (_user interface_, interfaz de usuario), que es donde desarrollamos los dashboards y otros componentes de front-end.

## Antes de empezar

Asegúrese de que tiene instalado [Bun](https://bun.sh/), que es un requisito previo; más sobre cómo:

- [Instalar Bun](/docs/academy/website/bun)

## Instalar los módulos de dependencia

Para instalar todas las dependencias que vienen por defecto, entre en la carpeta `📁 ui` (_user interface_) dentro de su aplicación en desarrollo, por ejemplo:

```shell
cd apps/mi_app/ui/
```

Ejecute el comando de instalación de los módulos de dependencia:

```shell
bun install
```

> [Bun](https://bun.sh) es una alternativa mejorada y más optimizada que NPM.

## Compilación automática

Entre en la carpeta `📁 ui` (_user interface_) de su aplicación en desarrollo, por ejemplo:

```shell
cd apps/mi_app/ui/
```

Para compilar el front-end automáticamente en cada cambio de código, ejecute:

```shell
bun run watch
```

> Asegúrese de que tiene [Bun](https://bun.sh/) instalado.
 
## Integración automática del front-end con Netuno

Netuno le permite iniciar la UI junto con el proceso del servidor de la aplicación Netuno.

> Todos los mensajes de compilación de React estarán integrados en el mismo terminal que la aplicación Netuno.

Para ello, basta con activar la configuración en los `commands` de la aplicación Netuno en `📂 config/_development.json`, es decir, en el `command` con el `path` de `ui` poner el `enabled` en `true`, de la siguiente forma:

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

> Siempre que edite archivos de configuración de la aplicación Netuno es necesario reiniciar el servidor para que pueda asumir los nuevos cambios.

Por último, inicie/reinicie el servidor con su aplicación Netuno para comprobar su funcionamiento.

Y ahora todo quedará integrado en un solo terminal centralizado, evitando así tener varios terminales dispersos, más sobre:

- [Terminal centralizado](/docs/academy/explore/centralized-terminal)

## Otras tecnologías de front-end

Dentro de la carpeta `📁 ui` es posible configurar cualquier tecnología de front-end, o incluir cualquier nuevo módulo de dependencia que sea necesario.

Si no quiere utilizar ninguna de las tecnologías estándar, puede sustituirla por cualquier otra, adaptando especialmente los archivos:

- `package.json`
- `vite.config.js`