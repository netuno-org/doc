---
id: services
title: Servicios
sidebar_label: Servicios
---

Los servicios web REST en Netuno son scripts en JavaScript ejecutados en el servidor (Back-end) que permiten interactuar directamente con la base de datos de la aplicación. A través de ellos, es posible:

* Leer datos de la base de datos 
* Insertar nuevos registros 
* Actualizar datos existentes 
* Eliminar datos 
* Ejecutar lógicas complejas que impliquen cálculos o procesamiento de datos.
* Integrarse con sistemas externos.

Cada servicio se accede a través de una URL (endpoint), lo que permite que interfaces web (Front-end), aplicaciones móviles u otros sistemas externos consuman los datos de su aplicación de forma segura y estandarizada.

#### Requisitos previos

* Tener nociones básicas de _**JavaScript, React.js**_ y _**HTML**_.
* Familiaridad con SQL y con la estructura de carpetas de una aplicación. 
* Es recomendable tener conocimientos básicos en **Formularios**, **Campos** y **Relaciones**. 

Si tiene dudas en estos pasos, consulte:

* [Formularios](/docs/academy/ui/forms)
* [Campos](/docs/academy/ui/fields)
* [Relaciones entre formularios](/docs/academy/ui/relationships-between-forms)



## Primeros pasos  

Utilizaremos una aplicación de registro de horas de trabajo, donde el objetivo es calcular el total de horas realizadas por cada trabajador.

**Estructura de la aplicación:**

![estructura-aplicacion-es.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
El campo **id** se crea y gestiona automáticamente por Netuno en todas las tablas, por lo que no es necesario definirlo manualmente.
:::

Los servicios de una aplicación Netuno se encuentran en la carpeta **server/services/**.

#### Estructura de carpetas

```text
mi-app/
└── server/
    └── services/
        ├── trabajadores.js   ← archivo de servicio
        └──... 
```

## Crear servicio

Dentro de la carpeta **server/services/**, cree un nuevo archivo que definirá la URL de su servicio. Para este ejemplo, nombre el archivo como `trabajadores.js`.

:::tip
- Utilice solo letras **minúsculas**.
- Si el nombre es compuesto, separe las palabras con **guion (-)**.
- Ejemplos: **trabajadores.js**, **informe-horas.js**, **registro-entradas.js**.
:::


## Consultar la base de datos

Netuno proporciona el objeto global **_db** para interactuar de forma nativa con la base de datos. 

Para ejecutar una consulta SQL, utilizamos el método `_db.query()`.


```javascript
// Realiza una consulta SQL que agrupa el total de horas por trabajador
const dbRegistros = _db.query(`
    SELECT DISTINCT
        trabajador.nombre, SUM(DATEDIFF(HOUR, registro.inicio, registro.fin)) AS total
    FROM trabajador INNER JOIN registro
        ON trabajador.id = registro.trabajador_id
    WHERE trabajador.activo = true AND registro.activo = true
    GROUP BY trabajador.nombre
    ORDER BY total ASC
`);
```

:::note Entendiendo la consulta SQL

* **INNER JOIN**: Une las tablas trabajador y registro utilizando la clave foránea trabajador_id.

* **DATEDIFF(HOUR, inicio, fin)**: Calcula la diferencia en horas entre el inicio y el fin.

* **SUM(...) AS total**: Suma todas las horas procesadas de cada trabajador.

* **WHERE ... activo = true**: Filtra la búsqueda para considerar solo trabajadores y registros que no han sido eliminados (activos).

* **GROUP BY trabajador.nombre**: Agrupa las sumas por el nombre de cada trabajador.

* **ORDER BY total ASC**: Ordena el resultado final del menor al mayor número de horas trabajadas.
:::

## Procesar los datos

El método `_db.query()` devuelve los datos en un formato interno de Netuno. 

Para enviar una respuesta limpia en formato JSON, es necesario transformar estos datos utilizando los objetos globales **_val.list()** (para arrays) y **_val.map()** (para objetos).

```javascript
// Crea una lista vacía para almacenar los datos procesados
const lista = _val.list();

// Itera sobre cada registro devuelto por la consulta SQL
for (const dbRegistro of dbRegistros) {
    lista.add(
        _val.map()
            .set("nombre", dbRegistro.getString("nombre"))   // Extrae el nombre como texto
            .set("total", dbRegistro.getInt("total"))    // Extrae el total como número entero
    );
}
```
### Métodos utilizados

| Recurso | Descripción |
|---------|-----------|
| **_val.list()** | Crea una lista (equivalente a un Array en JS). |
| **_val.map()** | Crea un objeto clave-valor (equivalente a un Object o JSON). |
| **.add(...)** | Añade un nuevo elemento al final de la lista. |
| **.set("clave", valor)** | Define una nueva propiedad y su respectivo valor en el mapa. |
| **.getString("columna")** | Extrae el valor de la columna especificada formateado como texto (String). |
| **.getInt("columna")** | Extrae el valor de la columna especificada formateado como número entero (Integer). |

## Retorno de los datos 

Se utiliza el objeto **_out** para enviar la lista procesada al cliente en formato JSON.

```javascript
// Envía la lista como respuesta HTTP en formato JSON
_out.json(lista);
```

## Ejemplo práctico

En esta etapa final, consolidamos todos los conceptos aprendidos para crear un servicio funcional. 

El código completo a continuación realiza una consulta a la base de datos para calcular el total de horas trabajadas y devuelve estos datos formateados en JSON.

```javascript
// 1. Consulta el total de horas realizadas por cada trabajador activo
const dbRegistros = _db.query(`
    SELECT DISTINCT
        trabajador.nombre, SUM(DATEDIFF(HOUR, registro.inicio, registro.fin)) AS total
    FROM trabajador INNER JOIN registro
        ON trabajador.id = registro.trabajador_id
    WHERE trabajador.activo = true AND registro.activo = true
    GROUP BY trabajador.nombre
    ORDER BY total ASC
`);

// 2. Crea la estructura de datos para la respuesta
const lista = _val.list();

// 3. Procesa y mapea los resultados
for (const dbRegistro of dbRegistros) {
    lista.add(
        _val.map()
            .set("nombre", dbRegistro.getString("nombre"))
            .set("total", dbRegistro.getInt("total"))
    );
}

// 4. Devuelve los datos en formato JSON
_out.json(lista);
```

### Acceder al servicio

Después de crear y configurar su servicio en Netuno, estará listo para utilizarse y probarse directamente desde el navegador o integrarlo con otras aplicaciones.

#### Formas de acceso

El servicio se puede consumir utilizando:

- **Navegador:** Para pruebas rápidas de métodos GET.

- **Clientes HTTP:** Herramientas como Postman, Insomnia o Thunder Client.

- **Front-end:** Mediante peticiones fetch o bibliotecas como Axios.

#### Estructura de la URL

Por defecto, Netuno asigna automáticamente los archivos creados en la carpeta de servicios a direcciones web.

Si se está ejecutando localmente en el puerto predeterminado, la dirección seguirá este modelo:

http://localhost:9000/services/trabajadores



:::info ¿Cómo funciona el enrutamiento?
Netuno utiliza un sistema de enrutamiento automático basado en el sistema de archivos:

**Carpeta de origen:** Todos los archivos dentro de server/services/ se convierten en rutas.

**Mapeo:** El archivo **trabajadores.js** se convierte en el endpoint **/services/trabajadores**.

**Extensiones:** Tenga en cuenta que la extensión **.js** se omite en la URL. Opcionalmente, se puede utilizar el sufijo **.netuno** (ej.: /services/trabajadores.netuno), pero el acceso sin extensión es el estándar recomendado por ser más limpio.
:::

**Ejemplo de respuesta HTTP:**
Si existen datos compatibles en su base de datos, la respuesta devuelta por el servidor será similar a esta:

```json
[
    {
        "nombre": "Leonor Santos",
        "total": 40
    },
    {
        "nombre": "Carlos Alves",
        "total": 35
    },
    {
        "nombre": "Maria Oliveira",
        "total": 45
    }
]
```

## Objetos globales del sistema

Durante el desarrollo de servicios en Netuno, utilizaremos con frecuencia objetos nativos que facilitan la comunicación con la base de datos, el control de peticiones y la salida de información.

Estos objetos son instancias preconfiguradas y listas para usar en sus scripts de servidor **(archivos .js)**. Eliminan la necesidad de importar bibliotecas externas para tareas fundamentales como consultas SQL o lectura de parámetros.

| Objeto | Descripción |
|--------|-----------|
| **_db**| Ejecutar operaciones de base de datos (query, insert, update, delete). |
| **_val** | Creación y manipulación de estructuras de datos (list, map). |
| **_out** | Envío de respuestas al usuario (JSON, HTML...). |
| **_req** | Acceso a los parámetros enviados en la petición del usuario (GET, POST). |
| **_log**| Registro de mensajes de error o depuración en la consola del servidor.|



Si tiene dificultades o sugerencias de mejora, póngase en contacto.

Nuestro equipo y comunidad están listos para ayudar.

¡Buen desarrollo!