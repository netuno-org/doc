---
sidebar_position: 5
id: listing
title: Listado
sidebar_label: Listado
---

Cómo presentar una serie de elementos relacionados — productos, servicios, noticias, etcétera.

## Introducción

El **Listado** sirve para presentar una serie de elementos relacionados — productos, servicios, referencias, noticias, etcétera. Cada Listado tiene un título/contenido introductorio propio y agrupa varios **Elementos**, gestionados por separado en el backoffice (`Listado > Elemento`).

Sigue el mismo mecanismo común a todos los componentes, descrito en [Visión general](/docs/academy/cluar/components/overview) y [Tipos de componente](/docs/academy/cluar/components/types).

## Campos del listado

Además de los [campos comunes](/docs/academy/cluar/components/overview#campos-comunes) (Tipo, Orden, Modo de edición, Invertir fondo, Acciones), el Listado tiene:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título del listado. |
| **Contenido** (`content` / `html_content`) | Texto introductorio del listado. |
| **Imagen** (`image`) | Imagen asociada al listado en sí (no a los elementos). |
| **Imagen Alt** (`image_alt`) | Texto alternativo de la imagen. |
| **Título de imagen** (`image_title`) | Atributo `title` de la imagen. |

## Elementos

Cada elemento pertenece a un Listado (`page_listing_id`) y tiene sus propios campos:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título del elemento. |
| **Contenido** (`content` / `html_content`) | Texto del elemento. |
| **Imagen** (`image`) | Imagen del elemento. |
| **URL** (`link`) | Enlace del elemento — a donde va el usuario al hacer clic. |
| **Orden** (`sorter`) | Posición del elemento dentro del listado. |

Fíjate en que el elemento **no tiene un campo Tipo propio** — hereda el tipo del Listado al que pertenece: el componente React del Listado pasa su `type` a cada elemento al renderizarlo.

## Estructura de renderizado

A diferencia del Banner y del Contenido, donde cada tipo es una carpeta independiente dentro del componente, en el Listado el componente que renderiza los elementos (`Item`) está **dentro** de la carpeta del tipo:

```
website/src/components/Listing/
├── index.jsx              # enrutador: elige el tipo de listado
└── Default/
    ├── index.jsx           # diseño del listado, renderiza los <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # cómo se renderiza cada elemento, para este tipo
```

Tiene sentido porque la forma en que se presenta un elemento (cuadrícula, lista, tarjetas...) suele depender directamente del diseño del listado — por eso el `Item` de cada tipo se puede personalizar junto con el propio tipo, en lugar de ser un componente genérico compartido por todos los tipos.

## Tipos disponibles

Hoy solo existe el tipo **Predeterminado** (`Default`). Para crear un nuevo tipo de Listado (con su propio `Item`), sigue el mismo proceso descrito en [Tipos de componente](/docs/academy/cluar/components/types), recordando incluir la subcarpeta `Item/` dentro del nuevo tipo.

## Siguiente paso

Continúa con el [Slider](/docs/academy/cluar/components/slider).