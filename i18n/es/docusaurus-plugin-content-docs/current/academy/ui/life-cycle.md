---
sidebar_position: 7
id: life-cycle
title: Eventos del Ciclo de Vida de la Interfaz
sidebar_label: Eventos de Ciclo de Vida
---

## Interfaz de Usuario (`ui`)

En la interfaz de gestión de datos de Netuno es posible inyectar código a medida para realizar personalizaciones y manipulaciones a medida.

El desarrollo se realiza en la programación dentro de la carpeta `ui` dentro de la carpeta raíz de la aplicación.

### addPageLoad()

La página no se puede manipular de forma segura hasta que la aplicación esté "lista".

El método se llamará cuando la página esté cargada.

```javascript
netuno.addPageLoad(() => {
   console.log('hago algo');
});
```

### addContentLoad()

Cuando se cargan formularios o informes, la interfaz cambia con el contenido correspondiente, ya sea un formulario de datos, una búsqueda o al filtrar datos de algún informe.

En cuanto se carga algún contenido, se llama al método y se pasa el contenedor que contendrá el contenido que se está presentando.

```javascript
netuno.addContentLoad((contenedor) => {
   if (contenedor.is('[netuno-form-search]')) {
       console.log('hago cosas cuando el elemento exista');
   }
});
```