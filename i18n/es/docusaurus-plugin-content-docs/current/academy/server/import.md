---
id: import
title: Importación
sidebar_label: Importación
---

## Introducción

Cuando desarrollamos necesitamos utilizar múltiples archivos de código interconectados para
organizar y reutilizar funcionalidades, evitar repeticiones y facilitar el mantenimiento mediante
la centralización de funciones útiles, lo que reduce las líneas de código en general y, en consecuencia,
hay una gran reducción de errores.

Así, centralizamos el código útil en otro archivo de código que podrá ser importado por los
demás, que pueden reutilizarlo fácilmente.

Aquí se demostrarán algunas soluciones que Netuno presenta para realizar la reutilización
de código.

## Core políglota

En cualquier lenguaje de programación soportado por Netuno, podemos importar cualquier
archivo de código que esté en la carpeta `server/core` de la aplicación.

La forma simplificada que ofrece Netuno es utilizar un formato de comentario especial
para la importación de código, donde la línea comentada tiene el prefijo `_core:` y, a continuación,
la ruta del archivo de código a partir de la carpeta `server/core` de la aplicación.

Entonces, para importar el archivo de código:

- `server/core/ejemplo/archivo`

> El archivo deberá tener la extensión correspondiente al lenguaje de programación utilizado.

Es posible importar otro archivo al inicio de cualquier archivo de código; por ejemplo, en los servicios.

En el caso de JavaScript, Groovy y Kotlin:

```javascript
// _core: ejemplo/archivo

...
```

En el caso de Python y Ruby:

```python
# _core: ejemplo/archivo

...
```

> En este comentario especial de importación no es necesario poner la extensión del archivo;
> Netuno la detecta automáticamente.

Las variables, constantes, funciones, clases, etc., declaradas en el archivo importado quedan disponibles
para su utilización en el archivo que realiza la importación con este tipo de comentario al inicio.

Para importar varios archivos basta con repetir el comentario de importación con la ruta de los demás archivos.

En el caso de JavaScript, Groovy y Kotlin, para importar varios archivos:

```javascript
// _core: ejemplo/archivo1
// _core: ejemplo/archivo2
// _core: ejemplo/archivo3

...
```

En el caso de Python y Ruby, para importar varios archivos:

```python
# _core: ejemplo/archivo1
# _core: ejemplo/archivo2
# _core: ejemplo/archivo3

...
```

## Recurso Exec

Mediante el recurso `_exec` podemos importar código en cualquier momento durante la ejecución.

> Las variables, constantes, funciones, clases, etc., declaradas en el archivo de código importado pueden utilizarse.

### core

Para ejecutar programáticamente la importación de un archivo de código, en este caso dentro de la carpeta
`📁 server/core`:

```javascript
_exec.core('ruta/del/archivo')
```

> No es necesario poner la extensión del archivo; Netuno la detecta automáticamente.

### services

Para ejecutar programáticamente la importación de un archivo de código, en este caso dentro de la carpeta
`📁 server/services`:

```javascript
_exec.service('ruta/del/archivo')
```

> No es necesario poner la extensión del archivo; Netuno la detecta automáticamente.

## JavaScript

Netuno proporciona una base para el desarrollo en JavaScript, siendo el lenguaje más utilizado, especialmente
porque en JavaScript programamos tanto el front-end como el back-end, lo que permite realizar el desarrollo full-stack
utilizando el mismo lenguaje de programación.

Netuno analiza el código y detecta automáticamente si se está utilizando `import` (ECMAScript Modules) o
`require` (CommonJS).

> No se debe mezclar el estándar de `import` con `require`; debe utilizarse uno u otro.

Con esto podemos utilizar siempre la extensión `.js` en los archivos de código, y al utilizar instrucciones con `import`,
Netuno las procesará como ECMAScript Modules y así podemos utilizar `export default`.

> Se recomienda el uso de `import` siempre que sea posible por ser el estándar moderno.

### Importar código

Al utilizar la importación nativa, a diferencia de los ejemplos anteriores, solo se importará lo que se
exporte explícitamente, según el estándar de CommonJS (`require`) o de ECMAScript Modules (`import`).

En la carpeta `📁 server` se encuentra el archivo `package.json`; allí debemos tener la siguiente instrucción:

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

Con esto podemos importar cualquier archivo en cualquier otro archivo de código, por ejemplo:

```js title="server/services/perfil/obtener.js"
import perfil from "#core/lib/perfil.js";

const dbPerfil = perfil.obtenerConectado();
```

Dado que se utiliza `import` en el archivo importado, se utilizará `export default`:

```js title="server/core/lib/perfil.js"
import {_db, _user} from "@netuno/server-types";

export default {
  obtenerConectado: () => {
    return _db.form("perfil")
      .where(_db.where("perfil_usuario_id").equal(_user.id))
      .first();
  }
};
```

> No se recomienda en la misma aplicación o proyecto mezclar la utilización de `import` (ECMAScript Modules) y
> `require` (CommonJS), incluso en archivos diferentes y situaciones diferentes; es preferible adoptar siempre
> una estandarización homogénea.
> Recomendamos utilizar `import` por ser el método moderno.

Alternativamente, si se utiliza `require` (CommonJS) en lugar de `import` (ECMAScript Modules):

```js title="server/services/perfil/obtener.js"
const perfil = require("#core/lib/perfil.js");

const dbPerfil = perfil.obtenerConectado();
```

Dado que se utiliza `require` en el archivo importado, se utilizará `module.exports`:

```js title="server/core/lib/perfil.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  obtenerConectado: () => {
    return _db.form("perfil")
      .where(_db.where("perfil_usuario_id").equal(_user.id))
      .first();
  }
};
```

### Autocompletado y validación del código

Para tener la función de autocompletar el código con validación integrada en los editores, debemos en la carpeta
`📁 server` de la aplicación realizar la instalación de los [Tipos del Servidor](https://www.npmjs.com/package/@netuno/server-types).

> Los tipos del servidor (`@netuno/server-types`) son la definición de todos los recursos de programación low-code
> políglota en TypeScript, lo que permite a los editores detectar todo lo que ofrece el framework low-code
> políglota de Netuno, pero al ser TypeScript solo sirve para ayudar en el código en JavaScript.

Dentro de la carpeta `📁 server` instale los [Tipos del Servidor](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Con esto, en el código en general puede importar cualquiera de los recursos low-code políglota disponibles en el framework de
Netuno, por ejemplo, este código de servicio:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const nombre = _req.getString("nombre");

_db.form("producto")
  .set("nombre", nombre)
  .insert();

_out.json(
  _val.map()
    .set("nombre", nombre)
    .set("resultado", true)
);
```

Observe que el editor va a validar y autocompletar el código, lo que es extremadamente útil y agiliza mucho el
desarrollo.

> En algunos editores puede ser necesario realizar alguna configuración/activación para detectar la carpeta `📁 server`
> como la raíz del código; por ejemplo, en Visual Studio Code se detecta automáticamente, pero en WebStorm es necesario
> hacer clic con el botón derecho sobre la carpeta `server` y hacer clic en `Mark Directory As > Resource Root` y
> reabrir el proyecto.

## JS y NPM - Dependencias externas

Se pueden instalar dependencias externas de **NPM** dentro de la carpeta `📁 server` de la aplicación, donde se
encuentra el `package.json`.

Sin embargo, al contrario de lo que recomendamos anteriormente, para importar bibliotecas externas utilizamos
`require` y, en este caso, podemos mezclar con `import` de archivos internos del proyecto, lo que no es muy
elegante, pero es posible.

Entonces, para añadir una dependencia basta con instalarla con el comando `bun add`.

Por ejemplo, es posible instalar `momentjs`:

- `bun add moment`

Para importar dependencias se utiliza `require`; a continuación, el ejemplo:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Otro ejemplo con `dayjs`, primero instale:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Vea un ejemplo completo utilizando `date-fns`, primero instale:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import perfil from "#core/lib/perfil.js";

const dbPerfil = perfil.obtenerConectado();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Las dependencias de bibliotecas externas son situaciones excepcionales; normalmente encontramos todo lo que necesitamos
> en el framework low-code políglota de Netuno.

### Módulos nativos de NodeJS

Como GraalVM no es totalmente compatible con los módulos nativos de NodeJS, para solventarlo es posible obtener
una mayor compatibilidad con las dependencias externas que implementan una solución alternativa a estos módulos.

Es posible instalar algunas dependencias externas como alternativa que ofrecen compatibilidad como si
fueran módulos nativos.

A continuación se muestra la lista de los módulos utilizados como alternativas para sustituir los módulos nativos de NodeJS, y los
respectivos comandos de instalación:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Recuerde, debe instalar estos módulos anteriores en la carpeta `📁 server` dentro de la aplicación; se proporciona
compatibilidad con los módulos nativos de NodeJS utilizando estos módulos alternativos.

## Conclusión

Podemos organizar nuestro código de diversas formas, pero reutilizar el código y evitar
repeticiones siempre es muy importante.

Cuantas más líneas de código haya, mayor será la probabilidad de que haya errores.

Recuerde organizar bien su código y centralizar su reutilización; facilita el mantenimiento,
evita errores y aumenta la productividad en general.

Aunque todavía existen algunas limitaciones con el uso de dependencias externas, estamos
trabajando para mejorar el ecosistema.

Mientras tanto, Netuno ofrece diversos recursos low-code y políglotas que cubren la mayoría de las necesidades.