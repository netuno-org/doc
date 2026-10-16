---
id: import
title: Importación
sidebar_label: Importación
---

## Introducción

Cuando desarrollamos, necesitamos utilizar múltiples archivos de código interconectados para
organizar, reutilizar funcionalidades, evitar repeticiones, facilitar el mantenimiento con
la centralización de funciones útiles, lo que reduce las líneas de código en general y, en consecuencia,
hay una gran reducción de errores.

Entonces centralizamos el código útil en otro archivo de código que podrá ser importado por los demás,
que pueden reutilizarlo fácilmente.

Aquí se demostrarán algunas soluciones que Netuno presenta para realizar la reutilización
de código.

## Core Políglota

En cualquier lenguaje de programación soportado por Netuno, podemos importar cualquier
archivo de código que esté en la carpeta `server/core` de la aplicación.

La forma simplificada que ofrece Netuno es utilizar un formato de comentario especial
para la importación de código, donde la línea comentada tiene el prefijo `_core:`, y a continuación
tiene la ruta del archivo de código a partir de la carpeta `server/core` de la aplicación.

Entonces, para importar el archivo de código:

- `server/core/ejemplo/archivo`

> El archivo deberá tener la extensión según el lenguaje de programación utilizado.

Es posible importar otro archivo al inicio de cualquier archivo de código, por ejemplo, en los servicios.

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

> En este comentario especial de importación no es necesario colocar la extensión del archivo;
> Netuno la detecta automáticamente.

Las variables, constantes, funciones, clases, etc., declaradas en el archivo importado se ponen a disposición
para su utilización en el archivo que realiza la importación con este tipo de comentario al inicio.

Para importar varios archivos basta con repetir el comentario de importación con la ruta de los otros archivos.

En el caso de JavaScript, Groovy y Kotlin, para importar diversos archivos:

```javascript
// _core: ejemplo/archivo1
// _core: ejemplo/archivo2
// _core: ejemplo/archivo3

...
```

En el caso de Python y Ruby, para importar diversos archivos:

```python
# _core: ejemplo/archivo1
# _core: ejemplo/archivo2
# _core: ejemplo/archivo3

...
```

## Recurso Exec

A través del recurso `_exec` podemos importar código en cualquier momento durante la ejecución.

> Las variables, constantes, funciones, clases, etc., declaradas en el archivo de código importado pueden ser utilizadas.

### core

Para ejecutar programáticamente la importación de un archivo de código, en este caso dentro de la carpeta 
`📁 server/core`:

```javascript
_exec.core('ruta/del/archivo')
```

> No es necesario colocar la extensión del archivo, ya que Netuno la detecta automáticamente.

### services

Para ejecutar programáticamente la importación de un archivo de código, en este caso dentro de la carpeta 
`📁 server/services`:

```javascript
_exec.service('ruta/del/archivo')
```

> No es necesario colocar la extensión del archivo, ya que Netuno la detecta automáticamente.

## JavaScript

Netuno proporciona una base para el desarrollo en JavaScript, al ser el lenguaje más utilizado, especialmente
porque en JavaScript tanto programamos el front-end como el back-end, lo que permite realizar el desarrollo full-stack
utilizando el mismo lenguaje de programación.

Netuno analiza el código y detecta automáticamente si se está utilizando `import` (ECMAScript Modules) o
`require` (CommonJS).

> No se debe mezclar el patrón de `import` con `require`; se debe utilizar uno u otro.

Con esto podemos utilizar siempre la extensión `.js` en los archivos de código, y al utilizar instrucciones con `import`
Netuno lo procesará como ECMAScript Modules y así podemos utilizar el `export default`.

> Se recomienda la utilización de `import` siempre que sea posible, por ser el estándar moderno.

### Importar Código

Al utilizar la importación nativa, a diferencia de los ejemplos anteriores, solo se importará lo que se
exporte explícitamente, según el patrón de CommonJS (`require`) o de ECMAScript Modules (`import`).

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

const bdPerfil = perfil.obtenerLogueado();
```

Ya que se utiliza `import`, en el archivo importado se utilizará `export default`:

```js title="server/core/lib/perfil.js"
import {_db, _user} from "@netuno/server-types";

export default {
  obtenerLogueado: () => {
    return _db.form("perfil")
      .where(_db.where("perfil_usuario_id").equal(_user.id))
      .first();
  }
};
```

> No se recomienda, en la misma aplicación o proyecto, mezclar la utilización de `import` (ECMAScript Modules) y 
> `require` (CommonJS) incluso en archivos diferentes y situaciones diferentes; es preferible adoptar siempre 
> una estandarización homogénea.
> Recomendamos utilizar `import` por ser el método moderno. 

Como alternativa, si se utiliza `require` (CommonJS) en lugar de `import` (ECMAScript Modules):

```js title="server/services/perfil/obtener.js"
const perfil = require("#core/lib/perfil.js");

const bdPerfil = perfil.obtenerLogueado();
```

Ya que se utiliza `require`, en el archivo importado se utilizará `module.exports`:

```js title="server/core/lib/perfil.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  obtenerLogueado: () => {
    return _db.form("perfil")
      .where(_db.where("perfil_usuario_id").equal(_user.id))
      .first();
  }
};
```

### Autocompletar y Validación del Código

Para tener la función de autocompletar el código con validación del código integrada en los editores, debemos, en la carpeta
`📁 server` de la aplicación, realizar la instalación de los [Tipos del Servidor](https://www.npmjs.com/package/@netuno/server-types).

> Los tipos del servidor (`@netuno/server-types`) son la definición de todos los recursos de programación low-code 
> políglota en TypeScript, lo que permite a los editores detectar todo lo que ofrece el framework low-code 
> políglota de Netuno, pero, al ser TypeScript, solo sirve para auxiliar en el código en JavaScript.

Dentro de la carpeta `📁 server` instale los [Tipos del Servidor](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Con esto, en el código en general se puede importar cualquiera de los recursos low-code políglota disponibles en el framework de 
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

Observa que el editor validará y autocompletará el código, lo que es extremadamente útil y agiliza mucho 
el desarrollo.

> En algunos editores puede ser necesario hacer alguna configuración/activación para detectar la carpeta `📁 server` 
> como la raíz de código; por ejemplo, en Visual Studio Code se detecta automáticamente, pero en WebStorm es necesario 
> hacer clic con el botón derecho sobre la carpeta `server` y hacer clic en `Marcar directorio como > Raíz de recursos` y 
> reabrir el proyecto.

## JS & NPM - Dependencias Externas

Se pueden instalar dependencias externas de **NPM** dentro de la carpeta `📁 server` dentro de la aplicación, donde se 
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

Otro ejemplo con `dayjs`; primero instala:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Ve un ejemplo completo utilizando `date-fns`; primero instala:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import perfil from "#core/lib/perfil.js";

const bdPerfil = perfil.obtenerLogueado();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Depender de bibliotecas externas son situaciones excepcionales; normalmente encontramos todo lo que necesitamos 
> en el framework low-code políglota de Netuno. 

### Módulos Nativos de NodeJS

Como GraalVM no es totalmente compatible con los módulos nativos de NodeJS, para solucionarlo es posible obtener
mayor compatibilidad con las dependencias externas que implementan una solución alternativa a estos módulos.

Es posible instalar algunas dependencias externas como alternativa que ofrecen la compatibilidad como si 
fueran módulos nativos.

A continuación, la lista de los módulos utilizados como alternativas para sustituir los módulos nativos de NodeJS, y los
respectivos comandos de instalación:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Recuerda, debes instalar estos módulos anteriores en la carpeta `📁 server` dentro de la aplicación; se proporciona 
compatibilidad con los módulos nativos de NodeJS, utilizando estos módulos alternativos.

## Conclusión

Podemos organizar nuestro código de diversas formas, pero reutilizar el código y evitar 
repeticiones es siempre muy importante.

Cuantas más líneas de código haya, mayor será la probabilidad de que haya errores.

Recuerda organizar bien tu código y centralizar su reutilización; facilita el mantenimiento,
 evita errores y aumenta la productividad en general.

A pesar de que todavía hay algunas limitaciones con la utilización de dependencias externas, estamos
trabajando para mejorar el ecosistema.

Mientras tanto, Netuno ofrece diversos recursos low-code y políglota que suplen la mayoría de las necesidades.