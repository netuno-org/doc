---
id: modal-form
title: Formulario modal
---

Creación y gestión de formularios en ventanas modales.
## Introducción

El modal es un recurso de la interfaz de usuario (UI) que permite abrir un formulario sin que el usuario tenga que salir de la página actual.

El uso de modales mejora significativamente la experiencia de usuario (UX), ya que permite ejecutar operaciones de **CRUD (Crear, Leer, Actualizar, Eliminar)** sin necesidad de recargar la página ni perder el contexto de la pantalla actual. 

Netuno gestiona automáticamente la comunicación con el backend y la inyección del HTML necesario.


#### Requisitos previos

Para implementar los ejemplos, necesitarás:

- Acceso al entorno de desarrollo de tu aplicación Netuno.
- Un formulario debidamente configurado en el panel de administración (backoffice) de Netuno.
- Conocimientos básicos de JavaScript y manejo de eventos en el DOM.

En los siguientes ejemplos, utilizaremos un formulario genérico llamado **"prueba"**.

Si tienes dudas en estos pasos, consulta: [Formularios](/docs/academy/ui/forms).

## Estructura base

La creación y manipulación de modales en Netuno está centralizada en el objeto `netuno.modal`.

El método **netuno.modal.create()** crea la estructura base del modal en la interfaz. Recibe un objeto de configuración con las siguientes propiedades:

- **name (String):** El nombre del formulario (creado en el backoffice) que servirá de base para el modal.
- **callback (Function):** Función que se ejecuta en cuanto la estructura del modal se inyecta en el DOM (pero antes de mostrarse); recibe como parámetro el elemento del modal creado.

### Función callback

Dentro de la función callback, deberás definir cuál será el estado (modo) del formulario utilizando las funciones de carga nativas:

- **Modo de listado - `netuno.loadForm()`**: Renderiza la tabla de búsqueda y listado de los registros de ese formulario.

- **Modo de edición/creación - `netuno.loadFormEdit()`**: Renderiza los campos de entrada del formulario. Puede usarse para insertar un nuevo registro o editar uno existente.

## Implementación
A continuación, detallamos tres escenarios de uso habituales.

### 1. Modo de listado

`netuno.loadForm()` se utiliza cuando quieres que el usuario visualice todos los datos de un formulario en formato de tabla (grid) de búsqueda.

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
### 2. Modo de creación

`netuno.loadFormEdit()` se utiliza para botones del tipo "Añadir nuevo". Abre el formulario vacío, listo para introducir datos.

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
Al utilizar `netuno.loadFormEdit()` sin pasar un **ID**, Netuno entiende que quieres usar la "pantalla de edición" desde cero. Carga la interfaz con los campos de entrada vacíos, listos para la creación de un nuevo registro. En este escenario, Netuno dispara internamente el evento `netuno:new`.
:::

### 3. Modo de edición

Si necesitas que el modal cargue un registro específico para modificarlo, debes pasar el **UID** o **ID** del registro como segundo parámetro en la función de carga.

```jsx
// Ejemplo: Editando el registro de ID 1234
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

Se recomienda usar estos eventos para activar lógicas de negocio específicas de tu frontend (como actualizar tablas en segundo plano, mostrar alertas, etc.).

| TIPO DE EVENTO   | DESCRIPCIÓN    |
| ------- |--------------|
| ` netuno:new` | Se dispara cuando se muestra la pantalla de creación de un nuevo elemento. |
| `netuno:edit` | Se dispara cuando se muestra la pantalla de edición de un elemento existente. |
| `netuno:save` | Se dispara cuando se añade un nuevo elemento. |
| `netuno:back` | Se dispara tras hacer clic en el botón de volver. |
| `netuno:delete` | Se dispara tras eliminar un elemento. |


### Ejemplo: Interceptar varios eventos

En este ejemplo listo para producción, creamos el modal y añadimos *listeners* para hacer seguimiento del éxito de las operaciones del usuario:

```jsx
netuno.modal.create({
  name: 'prueba',
  callback: function (modal) {
    let contenedorFormulario = modal.find('[netuno-form]');
    
    // Monitorizando la pantalla de inserción
    contenedorFormulario.on('netuno:new', function(evento) {
       console.info("Interfaz de creación cargada.");
    });

    // Monitorizando un guardado correcto
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
Si tienes dificultades o sugerencias de mejora, ponte en contacto.
Nuestro equipo y la comunidad están listos para ayudar.

¡Buen desarrollo!