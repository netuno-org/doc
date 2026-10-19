---
sidebar_position: 3
id: form
title: Formulario
---


# Formulario

En esta etapa de la demostración, vas a crear el formulario **Tarea** y configurar el primer campo de datos.

:::info Referencia
Para una explicación más detallada sobre formularios, consulta la [Guía de Interfaz: Formularios](/docs/academy/ui/forms).
:::

## Objetivo

Al concluir esta etapa, tendrás:

- Un formulario llamado **Tarea**.
- Una tabla asociada en la base de datos.
- Un campo obligatorio para almacenar el nombre de la tarea.
- Una interfaz lista para crear, editar, buscar y eliminar registros.

## Requisitos previos

Verifica que:

- La aplicación de demostración ya fue creada.
- La etapa de configuración ya fue completada.
- Estás en el área de desarrollo de la plataforma.

## Crear el formulario

1. En la esquina superior derecha, haz clic en **Construir**.
2. En el menú principal, accede a **Gestión > Formularios**.
3. En **Título del Formulario**, completa con `Tarea`.
4. En **Nombre de la Tabla**, activa la opción **Auto**.
5. Haz clic en **Guardar**.

:::note
- **Título del Formulario** define el nombre presentado en el menú lateral.
- **Nombre de la Tabla** define el identificador técnico usado en la base de datos.
:::

Después de guardar, el formulario **Tarea** estará disponible en el menú lateral izquierdo.

## Crear el primer campo

Con el formulario creado:

1. En el menú lateral, haz clic en **Tarea**.
2. En **Nombre de Visualización**, completa con `Nombre`.
3. Confirma que el nombre técnico se generó automáticamente con letras minúsculas.
4. Activa la opción **Clave primaria** (campo único).
5. Activa la opción **No Nulo** (campo obligatorio).
6. En **Tipo**, selecciona `text`.
7. Haz clic en **Guardar**.

:::tip
- **Clave primaria** garantiza valores únicos para cada registro.
- **No Nulo** hace que el rellenado sea obligatorio.
- El tipo `text` permite almacenar texto simple.
:::

## Validar el resultado

Abre el área de visualización y confirma que:

- El formulario **Tarea** está disponible.
- El campo **Nombre** aparece para rellenar.
- Es posible crear un nuevo registro.
- El campo **Nombre** es obligatorio.

:::info Resultado esperado
Si la configuración es correcta, el formulario estará listo para operaciones de creación, edición, búsqueda y eliminación de registros.
:::

## Próximos pasos

Avanza a la siguiente etapa de **Base de Datos** para explorar y modificar la aplicación de demostración.