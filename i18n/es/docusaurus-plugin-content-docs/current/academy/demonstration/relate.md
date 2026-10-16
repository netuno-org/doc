---
sidebar_position: 5
id: relate
title: Relacionar datos
description: Relaciona tareas y registros de horas para saber quién ejecutó qué tarea y cuánto tiempo se invirtió.
---

# Relacionar datos

Crea una relación entre tareas y registros de horas para saber **quién** ejecutó **qué tarea** y **cuánto tiempo** se invirtió.

Al finalizar esta etapa, el formulario **Registro** estará relacionado con la tabla **Tarea**, lo que permitirá visualizar la tarea asociada directamente en el listado de registros.

## Requisitos previos

Antes de empezar, verifica si ya has completado:

- La creación del formulario **Tarea** con el campo `nombre`.
- La creación del formulario **Registro** con los campos básicos de horas trabajadas.
- La configuración de las tablas correspondientes en la **Base de datos**.

:::tip
Para obtener más detalles sobre cómo relacionar datos, consulta la [Guía de interfaz: Relaciones](/docs/academy/ui/relationships-between-forms).
:::

Hasta ahora, has creado una gestión de tareas y un registro de horas, pero cada lista todavía funciona de forma aislada.  

Es importante relacionarlos, de modo que cada registro de horas indique claramente qué tarea realizó un colaborador y en qué periodo.

En esta etapa, vas a:

- Crear un campo de tipo `select` en el formulario **Registro**.
- Configurar el campo para que se relacione con la tabla **Tarea**.
- Actualizar algunos datos para ver la relación funcionando en la práctica.

## Campo de tipo `select`

Añade un campo que permitirá seleccionar la tarea asociada a cada registro de horas.

1. En el entorno **Construir**, abre el formulario **Registro** y accede a la gestión de campos.
2. Crea un nuevo campo con las siguientes configuraciones:
   - **Título del campo**: `Tarea`
   - **Nombre de la columna**: `tarea_id`
   - **Tipo**: `select`
3. Activa la opción **Obligatorio** para garantizar que todo registro esté asociado a una tarea.
4. Mantén desactivada la opción **Valores únicos**, ya que habrá muchos registros para la misma tarea.

:::note
Sugerimos el nombre `tarea_id` para mantener un patrón de nomenclatura consistente en todo el modelo de datos.
:::

## Usar el sufijo `_id`

El nombre del campo que hace referencia a otro registro deberá terminar con `_id`.  
Este patrón facilita identificar que el campo representa una relación con otra tabla y deja el modelo de datos más organizado.

:::warning
Evita usar nombres genéricos como `tarea` o `ref_tarea` para campos de relación.  
Estandarizar con `_id` ayuda a evitar confusión cuando estés analizando datos o creando integraciones.
:::

## Configurar el Link de relación

Configura el **Link**, que es el responsable de relacionar el campo `tarea_id` con la tabla de tareas.

1. En el campo recién creado (`tarea_id`), desplázate hasta la sección de configuración de **Link**.
2. Haz clic en **Añadir**.
3. En la ventana que se abra:
   - Selecciona la opción **tarea**.
   - A continuación, selecciona el campo **nombre**.
   - Cierra la ventana para aplicar.

Al finalizar, el **Link** será definido como:

```text
tarea:nombre
```

Esto significa que:

- La relación se hará con la tabla **tarea**.
- En la interfaz, se mostrará el valor del campo **nombre** de la tarea al seleccionar en el campo `Tarea`.

Haz clic en el botón **Guardar** para guardar la configuración del campo.

:::tip
Siempre que sea posible, utiliza un campo descriptivo (como `nombre`) para mostrar la información relacionada, en lugar de un identificador técnico o numérico.
:::

## Actualizar registros

Con el campo de relación configurado, ajusta los datos para visualizar el resultado.

1. Accede a la visualización del formulario **Registro**.
2. Observa que ahora la tabla de resultados tiene una nueva columna llamada **Tarea**, que inicialmente estará vacía.
3. Edita algunos registros:
   - Haz clic sobre una fila en la tabla de resultados para abrir el formulario de edición.
   - En el campo **Tarea**, selecciona la tarea correspondiente.
   - Haz clic en **Guardar** para guardar.

**Después de guardar:**

- La columna **Tarea** en la tabla de resultados pasará a mostrar el nombre de la tarea asociada.
- Cada **Registro** quedará claramente relacionado con una **Tarea**, lo que permitirá un análisis más completo del tiempo dedicado a cada actividad.

:::note
Si existen muchos registros sin tarea definida, considera hacer la actualización por lotes o definir una tarea predeterminada temporal, de acuerdo con tu política de datos.
:::

### Resultado esperado

El listado de **Registro** deberá mostrar:

- Una columna **Tarea** rellenada con los nombres de las tareas asociadas.
- Cada fila representando un registro de horas con su respectiva tarea, lo que facilita identificar dónde se invirtió el tiempo.

## Próximos pasos

En el próximo apartado, verás cómo crear un **Servicio** para exponer estos datos y utilizarlos en otras partes de la aplicación, como informes o interfaces personalizadas.