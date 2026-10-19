---
sidebar_position: 4
id: execution
title: Ejecución
sidebar_label: Ejecución
---

Con el proyecto instalado y configurado, es hora de ejecutarlo.

## Iniciar el servidor

En el directorio raíz de Netuno, ejecuta:

```
./netuno server app=cluar
```

Esto inicia el back-end y el front-end al mismo tiempo.

> La primera ejecución puede tardar más tiempo debido a la instalación de las dependencias del front-end.

Por defecto:

- El backoffice de Netuno está disponible en [http://localhost:9000/](http://localhost:9000/)
- El OpenAPI de los servicios está en [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Iniciar el sitio web

Para iniciar el sitio web manualmente:

```
cd website
bun run dev
```

Por defecto, el sitio web está disponible en [http://localhost:3000/](http://localhost:3000/)

> Es posible hacer que el sitio web se inicie automáticamente junto con el servidor Netuno, activando el comando correspondiente en `config/_development.json` — ver [Configuración](/docs/academy/cluar/configuration#7-inicio-automático-del-sitio-web-opcional).

## Resolución de problemas

### Error de versión de GLIBC al ejecutar `bun run dev`

Si aparece un error como este al iniciar el sitio web:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

No se trata del bug de dependencias opcionales de npm mencionado en el mensaje, sino de una **incompatibilidad de versión de GLIBC**: el binario nativo de Rollup se compiló exigiendo `GLIBC_2.32` o posterior, y las distribuciones de Linux más antiguas (por ejemplo, Ubuntu 20.04, que trae glibc 2.31) no lo tienen disponible.

Para resolverlo, fuerza a Rollup a usar la versión WASM en lugar de la nativa, añadiendo un campo `overrides` en la raíz del `package.json` del sitio web:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

A continuación, reinstala las dependencias:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Siguiente paso

Con el proyecto en ejecución, explora los [Idiomas](/docs/academy/cluar/languages) o el [modelo de Páginas](/docs/academy/cluar/pages/overview).