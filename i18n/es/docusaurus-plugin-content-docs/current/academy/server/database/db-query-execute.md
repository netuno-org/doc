---
id: db-query-execute
title: Query y Execute - Comandos directos en Base de Datos
sidebar_label: Query & Execute
---

## Antes de empezar

Para poder comprender este tutorial con la mayor eficacia posible, te aconsejamos que te asegures de tener nociones básicas de _**JavaScript, SQL**_ y que sepas crear servicios en Netuno.

Si no sabes crear servicios, dirígete a [Servicios Web REST](/docs/academy/server/services/rest).

## Creación de Queries

Netuno incluye funciones orientadas a la creación de queries a la base de datos, y en este tutorial presentaremos y describiremos brevemente el efecto de cada una y también las buenas prácticas para obtener el mejor resultado.

### _db.query('SELECT * FROM ...')

Esta función permite retornar datos de una query.

```javascript
_out.json(
  _db.query('SELECT * FROM tabla_nombre')
)
```

> Ten en cuenta que la función _out.json() sirve para permitir la visualización de los datos del servicio en pantalla al llamarlo desde el navegador

Esta función también permite la aceptación de argumentos, que se pasan directamente en la llamada al servicio; por ejemplo, imaginemos que tenemos el servicio _seleccionar-todos.js_, la llamada al mismo se hará mediante _**http://localhost:9000/services/seleccionar-todos.netuno**_ donde los argumentos a pasar se colocan a continuación de la llamada, después de un signo de interrogación:

```
http://localhost:9000/services/seleccionar-todos.netuno?argumento1=1&argumento2=nombre
```

> Ten en cuenta que para enviar múltiples argumentos basta con separarlos con un ampersand (&)

### Query con parámetros

Y por último, basta con declarar esta variable en la query de la siguiente forma:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM tabla_nombre WHERE id = ? AND nombre = ?', 
        _req.getInt("argumento1"), _req.getString("argumento2")
    )
)
```

> En el lugar de los '?' (interrogaciones) se inyectará el parámetro correspondiente de acuerdo con su orden.

## Query con parámetros y tipos de PostgreSQL y H2DataBase

No obstante, H2Database y PostgreSQL soportan una sintaxis de conversión simple, y así podemos asignar tipos a los parámetros de la siguiente forma:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM tabla_nombre WHERE id = ?::int AND nombre = ?::varchar', 
    _req.getInt("id"), _req.getString("nombre")
  )
)
```

## Tipos de parámetros de H2Database y PostgreSQL

Como habrás podido observar anteriormente, cuando se pretende ejecutar una consulta con argumentos hay que definir el tipo de los mismos. A continuación se muestra una lista con todos los tipos de variables y cuál es el tipo más adecuado para cada una:

* Adecuado para parámetros de números enteros:
    * **?::int**
* Adecuado para parámetros de números decimales:
    * **?::float**
 * Adecuado para parámetros de identificador único global/universal, más conocidos como guid o uuid:
    * **?::uuid**
 * Adecuado para parámetros de texto genérico, strings:
    * **?::varchar**
    * **?::text**
 * Adecuado para parámetros de tipo fecha:
    * **?::date**
 * Adecuado para parámetros de tipo hora:
    *  **?::time**
 * Adecuado para parámetros con fecha y hora:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Esta función permite ejecutar un comando de base de datos, como updates, inserts y deletes.

Retorna el número de registros afectados por el comando ejecutado.

```javascript
// Ejemplo de Insert:
const nRegistrosInsertados = _db.execute(
    "INSERT INTO tabla_nombre(id, activo, nombre) " + 
    "VALUES(nextval('tabla_nombre_id'), ?::int, ?::varchar)", 
    1, nombre
)

// Ejemplo de Update:
const nRegistrosActualizados = _db.execute(
    "UPDATE tabla_nombre SET nombre = ?::varchar WHERE id = ?::int",
    _req.getString("nombre"), _req.getInt("id")
)

// Ejemplo de Delete:
const nRegistrosEliminados = _db.execute(
    "DELETE FROM tabla_nombre WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Nota:** Cuando se hace un insert, verifica que el campo activo sea igual a 1; de lo contrario no aparecerá en el resultado. 

## Ejemplo de Interacción con los Datos

A continuación presentamos normas recomendadas para que obtengas los mejores resultados posibles.

## Query First

A continuación se muestra cómo obtener la primera línea de la query, o será nulo si no se obtiene ninguna línea.

```javascript
// Seleccionar los datos:
const resultadoDb = _db.queryFirst(
    'SELECT nombre FROM tabla_nombre WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!resultadoDb) {
    // Código de estado de HTTP:
    _header.status(404)
    // Indicación del error:
    _out.json(
        _val.map()
            .set('error', 'id-no-encontrado')
    )
    // Finaliza la ejecución del servicio:
    _exec.stop()
}
```

## Validar la cantidad de registros

Cuando realizas una selección en la base de datos cuyo resultado sea único, para acceder a los datos conviene proceder de la **siguiente forma**:

Ten en cuenta que este es solo un ejemplo simple que garantiza que se devuelva al menos 1 resultado y evita el error en caso de que no haya resultado.

```javascript
// Selección de los datos:
var resultadosDb = _db.query(
  'SELECT nombre FROM tabla_nombre WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let nombre = null;
// Garantiza que existan datos, y se puede utilizar el 
// símbolo mayor que (resultado.length > 1) en caso 
// de que haya más de un registro:
if (resultadosDb.size() >= 1) {
  // Para acceder al valor del nombre directamente basta con:
  nombre = resultadosDb.get(0).getString('nombre');
}
```

## Iteración en bucle de los registros

Si el resultado de la selección son **múltiples resultados**, puedes interactuar con el ciclo 'for' para obtener los datos de la siguiente forma:

```javascript
// Ejecutar la query
const resultadosDb = _db.query('SELECT id, nombre FROM tabla_nombre');

// Inicializar la variable para que pueda recibir valores
const elementos = _val.init();

// Iteración por todos los resultados para recibir cada valor por separado
for (const resultadoDb of resultadosDb) {
    elementos.push(
        _val.map()
            .set("uid", resultadoDb.getString("uid"))
            .set("nombre", resultadoDb.getString("nombre"))
    );
}

// Envía en la salida de datos la nueva lista de datos:
_out.json(elementos);
```

Si tienes alguna pregunta, no dudes en contactar; consulta las indicaciones en el pie de página de este sitio web.

¡Buen desarrollo!