---
sidebar_position: 3
id: form
title: Formulario
---


# Formulario

En esta etapa de la demostración, va a crear el formulario **Tarea** y configurar el primer campo de datos.

:::info Referencia
Para obtener una explicación más detallada sobre formularios, consulte la [Guía de Interfaz: Formularios](/docs/academy/ui/forms).
:::

## Objetivo

Al concluir esta etapa, tendrá:

- Un formulario llamado **Tarea**.
- Una tabla asociada en la base de datos.
- Un campo obligatorio para almacenar el nombre de la tarea.
- Una interfaz lista para crear, editar, buscar y eliminar registros.

## Requisitos previos

Verifique que:

- La aplicación de demostración ya ha sido creada.
- La etapa de configuración ya se ha completado.
- Está en el área de desarrollo de la plataforma.

## Crear el formulario

1. En la esquina superior derecha, haga clic en **Construir**.
2. En el menú principal, acceda a **Gestión > Formularios**.
3. En **Título del formulario**, rellene con `Tarea`.
4. En **Nombre de la tabla**, active la opción **Auto**.
5. Haga clic en **Guardar**.

:::note
- **Título del formulario** define el nombre que se muestra en el menú lateral.
- **Nombre de la tabla** define el identificador técnico usado en la base de datos.
:::

Después de guardar, el formulario **Tarea** estará disponible en el menú lateral izquierdo.

## Crear el primer campo

Con el formulario creado:

1. En el menú lateral, haga clic en **Tarea**.
2. En **Nombre para mostrar**, rellene con `Nombre`.
3. Confirme que el nombre técnico se ha generado automáticamente con letras minúsculas.
4. Active la opción **Clave primaria** (campo único).
5. Active la opción **No nulo** (campo obligatorio).
6. En **Tipo**, seleccione `text`.
7. Haga clic en **Guardar**.

:::tip
- **Clave primaria** garantiza valores únicos para cada registro.
- **No nulo** hace que el campo sea obligatorio.
- El tipo `text` permite almacenar texto simple.
:::

## Validar el resultado

Abra el área de visualización y confirme que:

- El formulario **Tarea** está disponible.
- El campo **Nombre** aparece para rellenar.
- Es posible crear un nuevo registro.
- El campo **Nombre** es obligatorio.

:::info Resultado esperado
Si la configuración es correcta, el formulario estará listo para operaciones de creación, edición, búsqueda y eliminación de registros.
:::

## Próximos pasos

Avance a la siguiente etapa de **Base de datos** para explorar y modificar la aplicación de demostración.