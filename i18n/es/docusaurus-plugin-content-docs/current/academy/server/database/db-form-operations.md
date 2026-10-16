---
id: db-form-operations
title: Form y las Operaciones de Base de Datos
sidebar_label: DB Form
---

## Antes de Empezar

Antes de proceder, asegúrese de tener nociones de SQL, relaciones entre tablas como "uno a muchos" y "muchos a uno".

Además, es necesario tener conocimientos previos sobre los `Forms` de Netuno y cómo se organizan para poder sacar el máximo partido al DB Form.

## Introducción

En el desarrollo de software, a menudo necesitamos buscar información en una base de datos, y hacerlo usando SQL puro hace que las cosas sean algo masivas y estresantes. La Query transforma la construcción de consultas SQL en una experiencia intuitiva y libre de estrés. Con ella, puedes crear consultas potentes usando métodos amigables que abstraen la complejidad del SQL bruto, ofreciendo un enfoque de desarrollo de consultas que se alinea con tu flujo de pensamiento.

## Cómo Funciona

En el corazón del DB Form está la capacidad de estructurar comandos SQL utilizando objetos y métodos. En lugar de escribir los comandos SQL directamente, el DB Form te permite usar un mecanismo orientado a objetos para definir consultas y operaciones de forma programática.

Cada consulta u operación de base de datos se representa como un objeto.

Tú creas instancias de clases de consulta que encapsulan diferentes partes del SQL, como selección, filtrado, agrupamiento, etc. Y también ejecutas las operaciones de eliminar, insertar y actualizar registros.

## Inicialización

Todo comienza con la inicialización del DB Form, que necesita saber cuál será el nombre del formulario base o principal que se utilizará; es decir, los formularios en Netuno siempre representan tablas en la base de datos, por lo tanto es lo mismo que decir cuál es la tabla base o la tabla principal.

En este ejemplo, iniciamos el DB Form a partir del formulario/tabla `personas`:

```javascript
const dbFormPersonas = _db.form("personas")
```

Con el DB Form iniciado podemos realizar consultas u operaciones.

## Consulta Simple

El DB Form proporciona dos métodos muy comunes para obtener datos, además de la paginación y los resultados distintos; son los siguientes:

- `all` - Todos los registros como una lista.
- `first` - Obtiene solo el primer registro.

Veamos los ejemplos a continuación.

Para obtener todas las personas:

```javascript
const dbPersonas = _db.form("personas")
    .all()
```

Para obtener solo una persona:

```javascript
const dbPersona = _db.form("personas")
    .first()
```

## Filtros y Condiciones

Con el where podemos filtrar los datos que cumplen determinadas condiciones.

Veamos algunos ejemplos:

```js
const dbPersona = _db.form("personas")
    .where(_db.where("personas_usuario_id").equals(_user.id))
    .first()
```

```js
const dbPersonas = _db.form("personas")
    .where(
        _db.where("tipo").in(_val.list().add("cliente").add("administrador"))
            .and("correo").notEqual(null)
    ).all()
```

## Comparaciones Where

El `_db.where` proporciona el objeto [Where](/docs/library/objects/Where) que soporta las siguientes operaciones de comparación:

Comparaciones con los operadores numéricos y textuales:

-  `equal(...)` o `equals(...)` - Verifica la igualdad, es el `=`.
-  `notEqual(...)` o `notEquals(...)` - Si es diferente del valor pasado, es el `<>`.
-  `greaterThan(...)` - Si es mayor que el valor pasado, es el `>`.
-  `lessThan(...)` - Si es menor que el valor pasado, es el `<`.
-  `greaterOrEqualsThan(...)` - Si es mayor o igual que el valor pasado, es el `>=`.
-  `lessOrEqualsThan(...)` - Si es menor o igual que el valor pasado, es el `<=`.

Condiciones de texto con el operador `LIKE`:

-  `startsWith('text')` - Si comienza con el prefijo determinado, es el `LIKE '...%'`.
-  `endsWith('text')` - Si termina con el sufijo determinado, es el `LIKE '%...'`.
-  `contains('text')` - Si contiene el término, es el `LIKE '%...%'`..

Condiciones con listas con el operador `IN`:

-  `in(_val.list()...)` - Si es igual a algún valor de la lista, es la condición `IN (...)`.
-  `notIn(_val.list()...)` - Si no es igual a ningún valor de la lista, es la condición `NOT IN (...)`.

## Ejemplos Prácticos de Consulta

El `DB Form` es accesible a partir del recurso `_db.form('formulario')`; una vez invocado, tienes en tus manos la consulta base que puede configurarse usando los métodos y objetos disponibles en él.

### Muchos a Uno y Resultados Distintos

```javascript
const consulta = _db.form('personas')
    .where(
        _db.where('nombre').startsWith('jail')
        .and(
             _db.where('correo').contains('jai')
             .or('correo').endsWith('com')
         )
    )
    .link('trabajo', _db.where('codigo').equal('gerente'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'personas_usuario_id',  
            _db.where('mail').startsWith('jai')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('personas')
            )
        )
    )
    .get("personas.nombre", "personas_nombre")
    .get("personas.activo", "personas_activo")
    .get("personas.uid", "personas_uid")
    .debug(true)
    .distinct(true)

const resultados = consulta.all();
```

En el ejemplo anterior hacemos una consulta a la tabla `personas` relacionándola con otras dos tablas, `trabajo` y `netuno_user`, donde `trabajo` se relaciona mediante el método `link` y `netuno_user` por medio del `join`. Es posible observar que el `link` es mucho más simplificado que el `join`; esto es porque el `link` reutiliza la relación del `Form` de Netuno para mapear la relación, mientras que el `join` utiliza solo la información proporcionada en el método. También es posible percibir los demás métodos y objetos utilizados como:

- `where` : Objeto proporcionado para montar condiciones para una tabla.
- `link` : Método que relaciona la tabla principal con otra tabla usando los criterios del `Form` de Netuno.
- `join` : Método que recibe un objeto de relación entre tablas.
- `get` : Método que define qué campos se devolverán en la consulta.
- `manyToOne` : Objeto que define el tipo de relación entre tablas, en este caso una relación del tipo `Many To One`.
- `debug` : Método que determina si la consulta construida se imprimirá en la consola.
- `distinct` : Método que determina si el comando `DISTINCT` se aplicará a la consulta.
- `all` : Método que ejecuta la consulta y devuelve los resultados en forma de lista.

> El método `link` solo debe usarse cuando las tablas ya tienen relación por medio del `Form` de Netuno.

### Primer Registro con Relación y Ordenación

```javascript
const consulta = _db.form('personas')
    .where(
        _db.where('nombre').startsWith('jail')
        .and('correo').in(
            _val.list().add('first@mail.com').add('second@mail.com'))
    )
    .link('trabajo')
    .get("personas.nombre", "personas_nombre")
    .get("personas.activo", "personas_activo")
    .get("trabajo.codigo", "trabajo_codigo")
    .order('personas.edad', 'desc')
    .debug(true)

const primerResultado = consulta.first();
```
Al final del ejemplo anterior invocamos el método `first()`; este devuelve la primera ocurrencia encontrada en la ejecución de la consulta, y si no encuentra ninguna, devolverá `null`.

### Paginación

```javascript
const consulta = _db.form('personas')
    .link(
        'trabajo', 
        _db.link('tarea')
    )
    .get("personas.nombre", "personas_nombre")
    .get("personas.activo", "personas_activo")
    .get("trabajo.codigo", "trabajo_codigo")
    .group("personas.id")
    .debug(true)

const pagina = consulta.page(_db.pagination(1, 10));
```

> El número de página en el objeto Pagination comienza a partir de 1, por lo que el ejemplo anterior es equivalente a: `offset = 0` y `limit = 10`.  

Al final del ejemplo anterior invocamos el método `page()` pasando como parámetro el objeto `pagination` que posee las preferencias de la paginación. Este devolverá un objeto página con los atributos equivalentes, por ejemplo:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"trabajo_codigo": "becario",
			"personas_activo": true,
			"personas_nombre": "Junior Freitas"
		},
		{
			"trabajo_codigo": "gerente",
			"personas_activo": true,
			"personas_nombre": "Caio Andrade"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## Insertar Registros

Para insertar datos en la base de datos utilizamos el método `insert`, por ejemplo:

```javascript
const dbPersonaInsertada = _db.form("personas")
    .set("nombre", "Caio Andrade")
    .set("correo", "caio@mail.com")
    .insert();
```

Con el resultado del `insert` podemos obtener el id del registro que se insertó en la base de datos.

Por lo tanto, en `dbPersonaInsertada` se obtiene el `id` del registro insertado de la siguiente forma:

```javascript
_log.info("ID de persona insertada: "+ dbPersonaInsertada.getInt('id'))
```

## Editar Registros

A través del objeto DB Form puedes actualizar los registros de la consulta de forma fácil e intuitiva.

```javascript
_db.form('personas')
    .link(
        'trabajo',
        _db.where('codigo').equal('becario')
    )
    .set("nombre", "nuevo nombre")
    .set("correo", "mynewemail@mail.com")
    .update();
```

> `Importante`. El método `update()` actualizará todas las ocurrencias de la consulta, así que ten cuidado al utilizarlo.

> Además, puedes usar otros métodos combinados como `order()` y `limit()` para mejorar tus consultas.

## Eliminar Registros

El DB Form también te permite eliminar registros devueltos en la consulta de forma sencilla.

```javascript
_db.form('personas')
    .link(
        'trabajo',
        _db.where('codigo').equal('becario')
    )
    .delete();
```

> `Importante`. El método `delete()` eliminará todas las ocurrencias de la consulta, así que ten cuidado al usarlo.

> Al igual que los demás, es posible combinar otros métodos como `order()` y `limit()` para mejorar los resultados.