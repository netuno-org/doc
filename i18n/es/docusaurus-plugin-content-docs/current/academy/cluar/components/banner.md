---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

El componente destacado de gran formato, que normalmente se usa en la parte superior de la página.

## Introducción

El **Banner** es el gran destacado de una página — normalmente una imagen que ocupa todo el ancho, con un título destacado encima y, opcionalmente, un texto introductorio y acciones (botones/enlaces).

Sigue el mismo mecanismo común a todos los componentes, descrito en [Visión General](/docs/academy/cluar/components/overview) y [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos

Además de los [campos comunes](/docs/academy/cluar/components/overview#campos-comunes) (Tipo, Orden, Modo de Edición, Invertir fondo, Acciones), el Banner tiene:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título destacado sobre la imagen. |
| **Contenido** (`content` / `html_content`) | Texto introductorio, debajo del título. |
| **Imagen** (`image`) | Imagen de fondo del banner. |
| **Imagen Alt** (`image_alt`) | Texto alternativo de la imagen, para accesibilidad y SEO. |
| **Imagen Título** (`image_title`) | Atributo `title` de la imagen. |
| **Posición X** / **Posición Y** (`position_x`, `position_y`) | Ajustan el foco de la imagen de fondo (`background-position`), en porcentaje. |

## Posición de la imagen

Los campos **Posición X** y **Posición Y** controlan qué parte de la imagen de fondo queda siempre visible, a medida que el banner se redimensiona en diferentes resoluciones — el mismo principio de `background-position` en CSS.

Por ejemplo, `50%` / `50%` centra el foco en el centro de la imagen: en cualquier resolución, es el centro de la imagen el que permanece visible, recortando los bordes según sea necesario.

## Tipos disponibles

Hoy existen tres tipos de Banner:

- **Estándar** (`Default`) — diseño base, con título, contenido y acciones.
- **Secundario** (`Secondary`) — visualmente diferente del Estándar (estilo propio en CSS/LESS), pero con la misma estructura de campos.
- **Estándar con Destacado** (`DefaultSubBanner`) — variante más discreta, sin soporte de acciones (`action: false` en `config.json`).

Para los detalles de cómo funcionan los tipos y cómo crear uno nuevo, consulta [Tipos de Componente](/docs/academy/cluar/components/types).

## Próximo paso

Continúa con el [Contenido](/docs/academy/cluar/components/content).