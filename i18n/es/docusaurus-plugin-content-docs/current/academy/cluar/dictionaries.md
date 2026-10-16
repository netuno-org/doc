---
sidebar_position: 10
id: dictionaries
title: Diccionarios
sidebar_label: Diccionarios
---

Cómo traducir los textos fijos de la interfaz del sitio web.

## Introducción

**Diccionarios** es el sistema de traducciones de textos fijos de la interfaz del sitio web — etiquetas, mensajes, textos de botones — cosas que no son contenido de página, sino texto "incorporado" en el código, y que aun así necesita existir en cada idioma.

Involucra dos formularios en el backoffice:

- **Entrada** (`dictionary_entry`)
- **Diccionario** (`dictionary`)

## Entrada

Define una "clave" de traducción — **Código** (`code`, usado en el código para ir a buscar el valor) y **Descripción**. Ej.: una entrada `formulario-contacto-exito`, usada para el mensaje de éxito del formulario de contacto (es exactamente la que aparece en el [`FormularioContacto`](/docs/academy/cluar/components/functionality) de la Funcionalidad).

## Diccionario

Es el **valor traducido** de una Entrada, para un determinado **Idioma** (`language_id`) — campo **Valor** (`value`, acepta HTML).

:::info Sin valor genérico/sin idioma
A diferencia de las [Configuraciones](/docs/academy/cluar/settings), el Diccionario **no tiene** un mecanismo de reserva sin idioma — cada Entrada necesita un Valor definido explícitamente para cada idioma en el que se use. Si falta la traducción en un idioma, el texto que aparece es el propio código de la Entrada (ej.: `formulario-contacto-exito`), no un valor genérico.
:::

## Programáticamente

La clase `website/src/common/Cluar.js` ofrece funciones para leer entradas del diccionario, todas devolviendo el código de la entrada como resultado si no hay traducción (útil para detectar traducciones faltantes):

- `Cluar.dictionary(entrada)` — obtiene el valor traducido en el idioma actual, tal como se guardó (puede incluir HTML).
- `Cluar.plainDictionary(entrada)` — igual, pero elimina etiquetas `<p>` y `<br>`. Es la más usada en etiquetas de interfaz (botones, campos de formulario, notificaciones).
- `Cluar.plainTitle(entrada)` — igual, pero elimina solo etiquetas `<p>`.
- `Cluar.plainHTML(entrada)` — elimina todas las etiquetas HTML.
- `Cluar.dictionaryNoParagraph(entrada)` — elimina solo etiquetas `<p>` (equivalente a `plainTitle`).

## Próximo paso

Explora las [Plantillas](/docs/academy/cluar/templates).