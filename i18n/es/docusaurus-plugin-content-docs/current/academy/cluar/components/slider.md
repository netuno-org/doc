---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

El componente de carrusel, para presentar una secuencia de elementos destacados.

## Introducción

El **Slider** presenta una secuencia de elementos en carrusel — cada uno con imagen de fondo, título, texto y, opcionalmente, sus propias acciones. Se renderiza con la biblioteca [Keen Slider](https://keen-slider.io/).

Sigue el mismo mecanismo común a todos los componentes, descrito en [Visión General](/docs/academy/cluar/components/overview) y [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos del Slider

Además de los [campos comunes](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Orden, Modo de Edición, Invertir fondo), el Slider tiene:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título del bloque de slider. |
| **Contenido** (`content` / `html_content`) | Texto introductorio del bloque. |
| **Imagen** (`image`) | Imagen asociada al slider en sí (no a los elementos). |
| **Imagen Alt** (`image_alt`) | Texto alternativo de la imagen. |
| **Imagen Título** (`image_title`) | Atributo `title` de la imagen. |

## Elementos

Cada elemento pertenece a un Slider (`page_slider_id`), y es uno de los "slides" del carrusel:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título del slide. |
| **Contenido** (`content` / `html_content`) | Texto del slide. |
| **Imagen** (`image`) | Imagen de fondo del slide. |
| **Imagen Alt** (`image_alt`) | Texto alternativo de la imagen. |
| **Imagen Título** (`image_title`) | Atributo `title` de la imagen. |
| **Orden** (`sorter`) | Posición del slide dentro del carrusel. |
| **Acciones** | Cada elemento puede tener sus propias acciones asociadas — ver [Acciones](/docs/academy/cluar/actions). |

:::info Diferencia con respecto al Listado
A diferencia del Item del Listado, el Item del Slider **tiene acciones propias**, asociadas individualmente (`page_slider_item_action`) — cada slide puede tener su propio botón/enlace.
:::

## Estructura de renderización

Al igual que en el Listado, el `Item` del Slider queda **dentro** de la carpeta del tipo, no como carpeta hermana:

```
website/src/components/Slider/
├── index.jsx              # enrutador: elige el tipo de slider
└── Default/
    ├── index.jsx           # diseño del slider, monta el carrusel con los <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # cada slide, incluyendo sus propias acciones
```

## Tipos disponibles

Hoy solo existe el tipo **Predeterminado** (`Default`). Para crear un nuevo tipo de Slider (con su propio `Item`), sigue el mismo proceso descrito en [Tipos de Componente](/docs/academy/cluar/components/types), recordando incluir la subcarpeta `Item/` dentro del nuevo tipo.

## Siguiente paso

Continúa a la [Funcionalidad](/docs/academy/cluar/components/functionality).