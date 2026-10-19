---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Definición del esquema de servicios.

## Introducción

OpenAPI es una especificación que estandariza los servicios que ofrecen las API REST; ayuda a entender cómo están definidos los servicios, como la dirección, las entradas y las salidas.

Permite la generación de una interfaz de pruebas y la generación automática de clientes para integrarlos con otras tecnologías.

> Más información sobre <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Activación y Configuración

Para activar y configurar OpenAPI en su aplicación en Netuno, es necesario editar el archivo de configuración de la aplicación correspondiente al entorno que está utilizando, como:

- `📂 config/_development.json`
- `📂 config/_production.json`

Inserte y ajuste los siguientes parámetros:

```
...
    "openapi": {
        "host": "http://mi-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://mi-app.local.netu.no:9000/services",
                "description": "Desarrollo Local"
            }
        ]
    },
...
```

Asegúrese de que las configuraciones tienen sentido; en el ejemplo anterior son para el entorno de _development_.

> En producción, conviene utilizar `https`.

### _openapi.json en los Servicios

En la raíz de los servicios, configure el archivo `_openapi.json`.

La ruta completa dentro de la aplicación es:

- `📂 server/services/_openapi.json`

El contenido de este archivo será como este ejemplo:

```
{
  "info": {
    "title": "Mi Aplicación",
    "description": "API REST de Mi Aplicación, utilícela con moderación.",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Ajuste el título y la descripción para que tengan sentido en su caso.

## Entrada

Configurar archivos _schema_ de entrada permite a Netuno realizar la validación de los parámetros recibidos al compararlos con las reglas de JSON Schema.

> Más información sobre el <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Si se produce algún fallo en la validación, se impide la ejecución del servicio y se muestra un error en el `log` de Netuno; además, a quien consume el servicio se le devuelve el código de estado HTTP **400** (_Bad Request_).

Para configurar las reglas de los parámetros de entrada, es necesario crear un archivo con la extensión `in.json` junto al archivo de código del servicio; el nombre debe ser el mismo.

- El servicio `detalle.js` tendría que tener el archivo `detalle.in.json`.
- El servicio `detalle.post.js` tendría que tener el archivo `detalle.post.in.json`.
- El servicio `detalle/post.js` tendría que tener el archivo `detalle/post.in.json`.

Ejemplo de contenido de `in.json`:

```
{
    "tags":[
      "servicios de producto"
    ],
    "summary": "Detalle del Producto",
    "description": "Se obtienen todos los campos de detalle del producto especificado.",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno admite algunos tipos adicionales que no son compatibles con JSON Schema, como `string-not-empty`, `array-not-empty`, `id` y el `uid` (o `uuid` o también `guid`).

> Más información sobre esta especificación en <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Salida

Configurar archivos _schema_ de salida permite a Netuno realizar la validación de los parámetros enviados al compararlos con las reglas de JSON Schema.

> Más información sobre el <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

Si se produce algún fallo en la validación, la salida se envía de todos modos a quien consume el servicio, pero los mensajes de fallos de validación se muestran en el `log` de Netuno.

Para configurar las reglas de los parámetros de salida, es necesario crear un archivo con la extensión `out.200.json` junto al archivo de código del servicio; el nombre debe ser el mismo que el del servicio.

Donde **200** es el código de estado HTTP que va en la respuesta; para admitir múltiples códigos de estado HTTP, basta con añadir más archivos JSON con el número diferente.

Algunos ejemplos:
- El servicio `guardar.js` tendría que tener el archivo `guardar.out.200.json`.
- El servicio `guardar.post.js` tendría que tener el archivo `guardar.post.out.200.json`.
- El servicio `guardar/post.js` tendría que tener el archivo `guardar/post.out.200.json`.

Ejemplo de contenido de `out.200.json`:

```
{
    "type": "object",
    "properties": {
      "result": {
        "type": "boolean"
      }
    },
    "required": [
      "result"
    ]
}
```

Netuno admite algunos tipos adicionales que no son compatibles con JSON Schema, como `string-not-empty`, `array-not-empty`, `id` y el `uid` (o `uuid` o también `guid`).

> Más información sobre esta especificación en <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Importación de esquemas

Netuno permite importar _schemas_, lo que posibilita reutilizar parte del _schema_ en múltiples JSON.

> Al importar _schemas_ se evita la repetición de código.

Cree la carpeta `_schema` en la raíz de la carpeta de los servicios, en:

- `📂 server/services/_schema`

Ahora, en la configuración del JSON es posible importar _schemas_ con el parámetro `_schema` en el JSON; por ejemplo:

```
{
    "summary": "Eliminar Productos",
    "description": "Permite eliminar definitivamente productos.",
    "_schema": "get/solo-codigo.in"
}
```

Esto significa que se importará el archivo `_schema/get/solo-codigo.in.json`, donde está el parámetro `_schema`.

## Especificación y Pruebas

Para generar la especificación completa de todos los servicios que admiten OpenAPI con JSON Schema, acceda, por ejemplo, a:

- http://localhost:9000/services/_openapi

Se mostrará un JSON con toda la especificación.

Para probar, copie todo el JSON generado.

Abra el Editor de Swagger: https://editor.swagger.io/

Borre el contenido que haya en el lado izquierdo, pegue el JSON y responda que sí a la pregunta de conversión de JSON a YAML.

Con la interfaz generada en el lado derecho es posible entender mejor todos los servicios disponibles y realizar pruebas.

También permite generar automáticamente clientes para otras tecnologías.

## Programáticamente

En la carpeta `_schema` podemos utilizar archivos `.js` que se ejecutarán junto con la generación de la definición de OpenAI, pero también en el proceso de validación de entrada y salida de los servicios.

Mediante la programación del esquema podemos generar validaciones dinámicas, por ejemplo:
- Aceptar únicamente un código que existe en la base de datos.
- Con el `UID`, obtiene el registro de la base de datos y lo comparte con los servicios.
- Si es `POST` o `PUT`, genera un tipo de esquema diferente del que se genera en el caso de `DELETE`.

### Ejemplo con Lista de Valores

Imagine que tenemos un servicio que recibe el código de una determinada categoría.

No podemos recibir cualquier valor como código, porque puede ser un valor que no corresponde a un código válido de categoría.

Entonces podemos restringir los códigos aceptados únicamente a los que están registrados en la base de datos.

Se crea el esquema en: `server/services/_schema/categoria/codigos.js`

```javascript
const dbCategorias = _db.query("SELECT codigo FROM categoria")

const listaCodigos = _val.list()

for (const dbCategoria of dbCategorias) {
    listaCodigos.add(dbCategoria.getString("codigo"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listaCodigos
    )
```

> En `listaCodigos` estarán todos los códigos de categorías registrados en la base de datos.

En el servicio podemos tener el siguiente `JSON` que utiliza el esquema `categoria/codigos`:

```json
{
  "summary": "Lista los Productos en la Categoría",
  "description": "Obtiene todos los productos asociados a una determinada categoría.",
  "type": "object",
  "properties": {
    "categoria": {
      "type": "object",
      "properties": {
        "codigo": {
          "_schema": "categoria/codigos"
        }
      },
      "required": [
        "codigo"
      ]
    }
  },
  "required": [
    "categoria"
  ]
}
```

De esta forma conseguimos garantizar que el servicio solo se ejecuta si el código es válido.

### Ejemplo con Objeto Global

Imagine que tenemos varios servicios que reciben el `UID` del cliente y que, en cada servicio, tenemos que acceder a la base de datos para obtener los datos del cliente relacionados con su `UID`.

Podemos centralizar esto en un esquema programado que, mediante el `UID` del cliente recibido, obtiene los datos del cliente de la base de datos y los almacena en un objeto global accesible desde el código de los servicios.

Así, los datos del cliente se cargan siempre de forma global y automática cuando recibimos un `UID` de cliente.

Creamos un esquema programado en: `server/services/_schema/cliente.js`

```javascript
const cliente = _req.getValues('cliente', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbCliente = _db.get('cliente', cliente.getString("uid"))
    
    if (dbCliente == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'cliente-no-encontrado')
        )
        _service.cancel()
    }
    
    _val.global().set('cliente', dbCliente)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> Con `_service.isGeneratingOpenAPIDefinition()` podemos validar si se trata de la generación de la definición de OpenAPI; en caso contrario, es la ejecución de una petición HTTP.
> 
> Si no se encuentra el `UID` del cliente, se devuelve el 404 y se interrumpe la ejecución del servicio.
> 
> Observe que utilizamos `_val.global()`, que permite compartir datos globalmente entre todos los archivos de código que se ejecuten durante el procesamiento de la petición HTTP.

Siguiendo con el ejemplo, tenemos un servicio que lista las compras realizadas por el cliente.

Tenemos la validación de entrada para el servicio en: `server/services/cliente/compras/post.in.json`

```json
{
    "summary": "Lista de Compras",
    "description": "Lista las compras realizadas por el cliente.",
    "type": "object",
    "properties": {
        "cliente": {
            "_schema": "cliente"
        }
    },
    "required": [
        "cliente"
    ]
}
```

> Observe que el valor de `"_schema"` del cliente es el nombre del archivo de código que programamos anteriormente en el esquema. 

Y en el código del servicio de compras de clientes en: `server/services/cliente/compras/post.js`

```javascript
const dbCliente = _val.global().getValues('cliente')
...
```

Mediante `_val.global()` obtenemos los datos del cliente de la base de datos que se cargaron automáticamente mediante el código del esquema.

### Ejemplo con Método HTTP

Podemos devolver un esquema diferente para cada tipo de método HTTP.

Por ejemplo, podemos generar un esquema mediante código para operaciones de crear, editar o eliminar puertos de red:

- Si es POST, realiza la operación de creación, por lo que no contiene el UID, pero exige el nombre y el número de puerto.
- Si es PUT, realiza la operación de edición y debe exigir el UID, el nombre y el número del puerto de red.
- Cuando sea PUT o DELETE, necesita el UID para realizar las respectivas operaciones de edición y eliminación. 

```javascript
const propiedades = _val.map()
const requeridos = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    propiedades.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    requeridos.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    propiedades
        .set(
            'nombre',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'puerto',
            _val.map()
                .set('type', 'integer')
                .set('minimum', puertoMinimo)
                .set('maximum', puertoMaximo)
        )
    requeridos
        .add('nombre')
        .add('puerto')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        propiedades
    )
    .set(
        'required',
        requeridos
    )
```

## Vídeos

A continuación se muestran algunos vídeos de ejemplo sobre cómo desarrollar la API integrada con OpenAPI:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Conclusión

Con el soporte de OpenAPI podemos crear reglas de validación utilizando JSON Schema, lo que ofrece las siguientes ventajas:

- Garantizar una mayor seguridad de los datos que se inyectan en los servicios. 
- Alerta en el `log` si la salida del servicio no es como se especificó.
- Genera fácilmente una interfaz de navegación por los servicios y de pruebas.