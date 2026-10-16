---
id: generate-uid-guid
title: Generar IDs únicos (UID/GUID)
sidebar_label: Generar IDs únicos (UID/GUID)
---

## Antes de empezar

Antes de proceder, asegúrese de que sabe crear **Servicios Web REST**; si no lo sabe, visite el siguiente enlace:

* [Servicios Web REST](/docs/academy/server/services/rest)

También es aconsejable que, antes de comenzar este tutorial, se asegure de que tiene nociones básicas de _**JavaScript**_.

## Qué es un UID

Un UID (_unique identifier_), como su propio nombre indica, es una cadena única en toda su aplicación. También se conoce como GUID (_global unique identifier_).

Para poder ejemplificar la generación de UIDs vamos a crear un servicio.

## Generación de UIDs

Vamos a demostrar ahora la creación de un UID aleatorio, es bastante sencillo porque Netuno ya incluye una función creada específicamente para este propósito:

```javascript
_out.println(
  _uid.generate()
)
```

> Tenga en cuenta que la función `_out.println()` es solo para permitir la visualización del resultado en pantalla al realizar la llamada al servicio en el navegador

Si tiene alguna pregunta, no dude en contactarnos a través de los medios presentados al final de la página.

¡Feliz desarrollo!