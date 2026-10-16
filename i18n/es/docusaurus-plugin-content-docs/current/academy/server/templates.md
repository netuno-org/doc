---
id: templates
title: Plantillas
sidebar_label: Plantillas
---

## Antes de empezar
Antes de crear servicios que llaman a plantillas, asegúrese de que sabe crear **Servicios Web REST**; si no lo sabe, visite el siguiente enlace:

* [Servicios Web REST](/docs/academy/server/services/rest)

También es aconsejable que, antes de empezar este tutorial, se asegure de que tiene nociones básicas de _**JavaScript**_.

## Uso de plantillas en servicios

En este tutorial abordaremos la creación de plantillas y las acciones necesarias para poder llamarlas en su servicio.

Al crear un servicio en Netuno, tiene la opción de acceder a plantillas creadas por usted, es decir, según el resultado podrá redirigir su servicio a una plantilla en HTML con datos.

En este ejemplo tendremos una plantilla básica en HTML y pasaremos datos del servicio a la misma plantilla.

## Creación de una plantilla

![templates1.png](/docs/assets/templates1.png)

Después de estar en el directorio anterior, vamos a crear un archivo en `.html`, en este ejemplo se llamará `plantilla.html`.

A continuación se muestra el contenido de esta página:

```html
<!-- Llamada al header de Netuno -->
_{include=_|includes/head}

<!-- Definición de estilos -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Inicio del body del html -->
<h1>T&iacute;tulo de la plantilla</h1>

<!-- Cuando necesite pasar datos de un servicio a una plantilla utilice _{&variable} -->
<p>Hola, soy un <b>_{&data=nombre}</b> y estoy recibiendo <b>_{&data=datos}</b> de un servicio!</p>

<!-- Fin del body del html -->

<!-- Llamada al footer de Netuno -->
_{include=_|includes/foot}
```

Por último, se crea el servicio con la llamada a la plantilla con la siguiente función:

`_template.output(‘nombre_de_la_plantilla’, variables(opcional));`

A continuación se muestra el ejemplo del servicio ‘servicio.js’:

```javascript
// Iniciar el objeto 'data' para que este pueda recibir datos
var data = _val.init()
    
// Asociar valores al objeto 'data'
    .set("nombre", "plantilla")
    .set("datos", "datos")

// Esta función es la que permite realizar la llamada a la plantilla
_template.output("plantilla", data);
```

> Si tiene su plantilla en un subdirectorio indique en la función: `_template.output('directorio/nombre_de_la_plantilla')`

Por último, basta con efectuar la llamada al servicio en el navegador y aparecerá algo similar a lo siguiente:

![templates2.png](/docs/assets/templates2.png)

> Tenga en cuenta que según su navegador los resultados anteriormente presentados podrán diferir.

Si tiene alguna pregunta no dude en contactarnos a través de los medios presentados al final de la página.

¡Buen desarrollo!