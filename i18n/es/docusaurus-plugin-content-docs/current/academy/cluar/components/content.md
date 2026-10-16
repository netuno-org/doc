---
sidebar_position: 4
id: content
title: Contenido
sidebar_label: Contenido
---

El componente de texto e imagen más genérico de CLUAR.

## Introducción

El **Contenido** es el componente de texto/imagen más genérico de CLUAR — utilizado para bloques de texto simple, texto con imagen al lado, o solo una imagen, dependiendo del tipo elegido.

Sigue el mismo mecanismo común a todos los componentes, descrito en [Visión General](/docs/academy/cluar/components/overview) y [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos

Además de los [campos comunes](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Orden, Modo de Edición, Invertir fondo, Acciones), el Contenido tiene:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título del bloque de contenido. |
| **Contenido** (`content` / `html_content`) | Texto del bloque. |
| **Imagen** (`image`) | Imagen asociada (no utilizada en tipos solo de texto). |
| **Alt de la imagen** (`image_alt`) | Texto alternativo de la imagen. |
| **Título de la imagen** (`image_title`) | Atributo `title` de la imagen. |
| **Ancho máximo de la imagen** (`image_max_width`) | Limita el ancho de la imagen, en píxeles — útil para evitar que la imagen se estire demasiado en pantallas anchas, principalmente en los tipos donde la imagen queda al lado del texto. |

## Tipos disponibles

A diferencia del Banner, el Contenido tiene varios tipos enfocados en diferentes disposiciones de imagen y texto:

- **Predeterminado** (`Default`)
- **Texto** (`TextContent`) — solo texto, sin imagen.
- **Imagen** (`ImageContent`) — solo imagen, sin texto.
- **Imagen a la izquierda** (`ImageLeft`)
- **Imagen a la derecha** (`ImageRight`)
- **Imagen arriba** (`ImageTop`)
- **Imagen abajo** (`ImageBottom`)

Para los detalles de cómo funcionan los tipos y cómo crear uno nuevo, ver [Tipos de Componente](/docs/academy/cluar/components/types).

## Próximo paso

Continúa para el [Listado](/docs/academy/cluar/components/listing).