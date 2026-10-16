---
id: modal-form
title: Formulario Modal
---

Creación y gestión de formularios en ventanas modales.
## Introducción

El Modal es un recurso de (UI) que permite abrir un formulario sin que el usuario tenga que salir de la página actual.

El uso de modales mejora significativamente la Experiencia de Usuario (UX), permitiendo la ejecución de operaciones **CRUD (Crear, Leer, Actualizar, Eliminar)** sin necesidad de recargar la página o perder el contexto de la pantalla actual. 

Netuno gestiona automáticamente la comunicación con el backend y la inyección del HTML necesario.


#### Requisitos previos

Para implementar los ejemplos, necesitará:

- Acceso al entorno de desarrollo de su aplicación Netuno.
- Un formulario debidamente configurado en el panel administrativo (backoffice) de Netuno.
- Conocimientos básicos en JavaScript y manipulación de eventos en el DOM.

En los siguientes ejemplos, utilizaremos un formulario genérico llamado **"prueba"**.

Si tiene dudas en estos pasos, consulte: [Formularios](/docs/academy/ui/forms).

## Estructura Base

La creación y manipulación de modales en Netuno está centralizada en el objeto `netuno.modal`.

El método **netuno.modal.create()** crea la estructura base del modal en la interfaz. Recibe un objeto de configuración con las siguientes propiedades:

- **name (String):** El nombre del formulario (creado en el backoffice) que servirá de base para el modal.
- **callback (Function):** Función ejecutada tan pronto como la estructura del modal se inyecta en el DOM (pero antes de mostrarse), recibe como parámetro el elemento del modal creado.

### Función Callback

Dentro de la función callback, deberá definir cuál será el estado (modo) del formulario utilizando las funciones de carga nativas:

- **Modo Listado - `netuno.loadForm()`**: Renderiza la tabla de búsqueda y listado de los registros de ese formulario.

- **Modo Edición/Creación - `netuno.loadFormEdit()`**: Renderiza los campos de entrada del formulario. Se puede usar para insertar un nuevo registro o editar uno existente.

## Implementación
A continuación, detallamos tres escenarios de uso más comunes.

### 1. Modo de Listado

`netuno.loadForm()` se utiliza cuando desea que el usuario visualice todos los datos de un formulario en formato de tabla (grid) de búsqueda.

```jsx
netuno.modal.create({
  name: 'prueba',
  callback: function (modal) {
    // 1. Localiza el contenedor interno destinado a recibir el formulario
    let contenedorFormulario = modal.find('[netuno-form]');
    // 2. Inyecta la lista de datos del formulario en el contenedor
    netuno.loadForm(contenedorFormulario); 
    // 3. Muestra el modal al usuario
    netuno.modal.show(modal);
  }
});
```
### 2. Modo de Creación

`netuno.loadFormEdit()` se utiliza para botones del tipo "Añadir nuevo". Abre el formulario limpio, listo para la entrada de datos.

```jsx
netuno.modal.create({
  name: 'prueba',
  callback: function (modal) {
    let contenedorFormulario = modal.find('[netuno-form]');
    // Carga el formulario en modo de inserción (nuevo registro)
    netuno.loadFormEdit(contenedorFormulario); 
    netuno.modal.show(modal);
  }
});
```

:::info
Al utilizar `netuno.loadFormEdit()` sin pasar un **ID**, Netuno entiende que desea usar la "pantalla de edición" desde cero. Carga la interfaz con los campos de entrada vacíos, listos para la creación de un nuevo registro. En este escenario, Netuno dispara internamente el evento `netuno:new`.
:::

### 3. Modo de Edición

Si necesita que el modal cargue un registro específico para su modificación, debe pasar el **UID** o **ID** del registro como segundo parámetro en la función de carga.

```jsx
// Ejemplo: Editando el registro con ID 1234
const idRegistro = 1234; 

netuno.modal.create({
  name: 'prueba',
  callback: function (modal) {
    let contenedorFormulario = modal.find('[netuno-form]');
    // Inyecta los datos del registro 1234 en los campos del formulario
    netuno.loadFormEdit(contenedorFormulario, idRegistro); 
    netuno.modal.show(modal);
  }
});
```


## Eventos

El contenedor del formulario (`[netuno-form]`) emite eventos personalizados que acompañan el ciclo de vida de la interacción del usuario. 

Se recomienda el uso de estos eventos para disparar lógicas de negocio específicas de su frontend (como actualizar tablas en segundo plano, mostrar alertas, etc.).

| TIPO DE EVENTO   | DESCRIPCIÓN    |
| ------- |--------------|
| ` netuno:new` | Se dispara cuando se muestra la pantalla de creación de un nuevo elemento. |
| `netuno:edit` | Se dispara cuando se muestra la pantalla de edición de un elemento existente. |
| `netuno:save` | Se dispara cuando se añade un nuevo elemento. |
| `netuno:back` | Se dispara después de hacer clic en el botón de volver. |
| `netuno:delete` | Se dispara después de la eliminación de un elemento. |


### Ejemplo: Interceptando Múltiples Eventos

En este ejemplo listo para producción, creamos el modal y añadimos *listeners* para monitorear el éxito de las operaciones del usuario:

```jsx
netuno.modal.create({
  name: 'prueba',
  callback: function (modal) {
    let contenedorFormulario = modal.find('[netuno-form]');
    
    // Monitorizando la pantalla de inserción
    contenedorFormulario.on('netuno:new', function(evento) {
       console.info("Interfaz de creación cargada.");
    });

    // Monitorizando un guardado exitoso
    contenedorFormulario.on('netuno:save', function(evento) {
       console.success("¡El registro se ha guardado correctamente!");
       // Ejemplo: Cerrar el modal automáticamente después de guardar
       netuno.modal.hide(modal); 
    });

    // Renderizando el modal en modo de lista y mostrándolo
    netuno.loadForm(contenedorFormulario);
    netuno.modal.show(modal);
  }
});
```
Si tiene dificultades o sugerencias de mejora, póngase en contacto.
Nuestro equipo y comunidad están listos para ayudar.

¡Buen desarrollo!