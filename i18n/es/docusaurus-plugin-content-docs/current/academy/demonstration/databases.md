---
sidebar_position: 4
id: databases
title: Base de Datos
---

# Base de Datos

En esta etapa, vamos a explorar la **base de datos** creada automáticamente a partir del formulario **Tarea** definido anteriormente.

Al crear el formulario **Tarea** con el campo **Nombre**, Netuno creó en la base de datos la tabla `tarea` con la columna `nombre`, de acuerdo con los nombres definidos en la creación del formulario.

Los **nombres técnicos** de los campos (por ejemplo, `tarea`, `nombre`, `tarea_id`) se usan en la programación y en las consultas SQL, y no corresponden a los nombres de visualización mostrados en la interfaz.

## Consultas

En esta sección vamos a ejecutar consultas directamente en la base de datos usando la interfaz de gestión de Netuno.

1. Acceda al entorno **Construir**.
2. En el menú, haga clic en **Gestión > Query**.
3. En el editor de query, pegue y ejecute los comandos de abajo.

### Consultas Simples

Liste solo el nombre de las tareas:

```sql
SELECT nombre
FROM tarea;
```

Liste todos los campos de la tabla de tareas:

```sql
SELECT *
FROM tarea;
```

Liste todos los campos de la tabla de registros:

```sql
SELECT *
FROM registro;
```

Liste todos los campos de la tabla de trabajadores:

```sql
SELECT *
FROM trabajador;
```

Al hacer clic en **Ejecutar**, Netuno genera una tabla de resultados para **cada** comando separado por punto y coma (`;`).  
Esto es útil cuando quiere ejecutar varias consultas de una sola vez.

### Consulta con Relaciones

Ahora, ejecute una consulta que relaciona todas las tablas:

```sql
SELECT
  tarea.nombre,
  registro.inicio,
  registro.fin,
  trabajador.nombre
FROM tarea
INNER JOIN registro
  ON tarea.id = registro.tarea_id
INNER JOIN trabajador
  ON trabajador.id = registro.trabajador_id;
```

Esta query devuelve:

- El nombre de la tarea.
- El inicio y el fin de cada registro.
- El nombre del trabajador asociado a cada registro.

Demuestra cómo las relaciones entre tablas permiten combinar información de diferentes entidades de la aplicación.

## Diagrama

Para visualizar la estructura de la base de datos de forma más intuitiva, use el **Diagrama** de Netuno.

1. Acceda al entorno **Construir**.
2. En el menú, haga clic en **Gestión > Diagrama**.

En el Diagrama puede:

- Ampliar o reducir el zoom.
- Exportar el diagrama como imagen.

Estas acciones están disponibles en botones del lado derecho del panel del diagrama.

Netuno crea automáticamente las líneas con flechas de relación a partir de la configuración de **Links** en los campos (por ejemplo, campos de tipo `select` que apuntan a otras tablas).

## Buenas Prácticas

Al modelar su base de datos en Netuno, siga estas buenas prácticas:

- Use el sufijo `_id` en los campos que representan relaciones, por ejemplo:
  - `tarea_id`
  - `trabajador_id`
- Evite usar nombres de tablas y campos en plural, como `tareas`, `registros` o `trabajadores`.

Evitar el plural ayuda a:

- Mantener los nombres más cortos y legibles.
- Reducir ambigüedades al escribir consultas.
- Facilitar la lectura en los formularios y en los diagramas, principalmente cuando hay múltiples relaciones.

:::tip Patrón de nomenclatura
Como patrón, use siempre **nombres en singular** para formularios, tablas y campos.  
Ejemplos: `tarea`, `registro`, `trabajador`, `tarea_id`, `trabajador_id`.
:::

## Siguiente Paso

Avance a la siguiente etapa de **Relacionar Datos** para continuar con la aplicación de demostración.