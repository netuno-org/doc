---
sidebar_position: 7
id: life-cycle
title: Eventos del Ciclo de Vida de la Interfaz
sidebar_label: Eventos de Ciclo de Vida
---

## Interfaz de Usuario (`ui`)

En la interfaz de gestión de datos de Netuno es posible inyectar código a medida para realizar personalizaciones y manipulaciones personalizadas.

El desarrollo se realiza en la programación dentro de la carpeta `ui` dentro de la carpeta raíz de la aplicación.

### addPageLoad()

La página no puede ser manipulada con seguridad hasta que la aplicación esté "lista".

El método será llamado cuando la página esté cargada.

```javascript
netuno.addPageLoad(() => {
   console.log('hago algo');
});
```

### addContentLoad()

Cuando se cargan formularios o informes, la interfaz se modifica con el contenido respectivo, ya sea un formulario de datos, una búsqueda o al filtrar datos de algún informe.

Tan pronto como se cargue algún contenido, se llama al método y se pasa el contenedor que contendrá el contenido que se está presentando.

```javascript
netuno.addContentLoad((contenedor) => {
   if (contenedor.is('[netuno-form-search]')) {
       console.log('hago cosas cuando el elemento exista');
   }
});
```