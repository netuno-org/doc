---
sidebar_position: 1
id: overview
title: Visión general
sidebar_label: Visión general
---

Los **Componentes** son los bloques de contenido que componen una [Página](/docs/academy/cluar/pages/overview), dentro de una [Versión](/docs/academy/cluar/pages/versions-publishing). Existen 5 tipos:

- **Banner**
- **Contenido**
- **Listado** (con Elementos)
- **Slider** (con Elementos)
- **Funcionalidad**

Cada uno tiene su propia entidad (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), su propio formulario en el backoffice y su propio componente React en el sitio web.

## Campos comunes

Aunque cada componente tiene sus propios campos, la mayoría comparte una base similar:

| Campo | Descripción |
|---|---|
| **Tipo** (`type`) | Define qué variante visual se utiliza para renderizar este componente — ver [Tipos de Componente](/docs/academy/cluar/components/types). |
| **Orden** (`sorter`) | Posición del componente dentro de la página. |
| **Modo de Edición** (`edit_mode`) | Define si el contenido (`content`) es texto simple o HTML (`html_content`). |
| **Invertir fondo del título / contenido** (`title_invert_background`, `content_invert_background`) | Invierte el esquema de color (claro/oscuro) del **editor** de texto del título/contenido — útil al escribir un texto que va a quedar sobre un fondo oscuro (p. ej.: una imagen oscura en el banner), para ver el texto con contraste mientras se edita. No altera el color del contenido ya publicado en la página. |
| **Acciones** | Botones/enlaces asociados al componente — ver [Acciones](/docs/academy/cluar/actions). No todos los tipos admiten acciones — ver [Tipos de Componente](/docs/academy/cluar/components/types). |

## Siguiente paso

Todos los componentes usan el mismo mecanismo de tipos dinámicos — ver [Tipos de Componente](/docs/academy/cluar/components/types). Después, explora cada componente en detalle: [Banner](/docs/academy/cluar/components/banner), [Contenido](/docs/academy/cluar/components/content), [Listado](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funcionalidad](/docs/academy/cluar/components/functionality).