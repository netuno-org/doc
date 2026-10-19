---
sidebar_position: 4
id: content
title: Contenido
sidebar_label: Contenido
---

El componente de texto e imagen más genérico de CLUAR.

## Introducción

El **Contenido** es el componente de texto/imagen más genérico de CLUAR — se usa para bloques de texto simple, texto con una imagen al lado, o solo una imagen, según el tipo elegido.

Sigue el mismo mecanismo común a todos los componentes, descrito en [Visión general](/docs/academy/cluar/components/overview) y [Tipos de componente](/docs/academy/cluar/components/types).

## Campos

Además de los [campos comunes](/docs/academy/cluar/components/overview#campos-comunes) (Tipo, Orden, Modo de edición, Invertir fondo, Acciones), el Contenido tiene:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título del bloque de contenido. |
| **Contenido** (`content` / `html_content`) | Texto del bloque. |
| **Imagen** (`image`) | Imagen asociada (no se usa en tipos de solo texto). |
| **Imagen Alt** (`image_alt`) | Texto alternativo de la imagen. |
| **Título de la Imagen** (`image_title`) | Atributo `title` de la imagen. |
| **Anchura Máxima de la Imagen** (`image_max_width`) | Limita la anchura de la imagen, en píxeles — útil para evitar que la imagen se estire demasiado en pantallas anchas, principalmente en los tipos en los que la imagen queda al lado del texto. |

## Tipos disponibles

A diferencia del Banner, el Contenido tiene varios tipos centrados en diferentes disposiciones de imagen y texto:

- **Predeterminado** (`Default`)
- **Texto** (`TextContent`) — solo texto, sin imagen.
- **Imagen** (`ImageContent`) — solo imagen, sin texto.
- **Imagen a la izquierda** (`ImageLeft`)
- **Imagen a la derecha** (`ImageRight`)
- **Imagen arriba** (`ImageTop`)
- **Imagen abajo** (`ImageBottom`)

Para obtener detalles sobre cómo funcionan los tipos y cómo crear uno nuevo, consulta [Tipos de componente](/docs/academy/cluar/components/types).

## Próximo paso

Continúa al [Listado](/docs/academy/cluar/components/listing).