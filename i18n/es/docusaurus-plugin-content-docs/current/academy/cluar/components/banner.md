---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

El componente de destacado en gran formato, normalmente usado en la parte superior de la página.

## Introducción

El **Banner** es el gran destacado de una página — normalmente una imagen que ocupa todo el ancho, con un título en evidencia por encima y, opcionalmente, un texto introductorio y acciones (botones/enlaces).

Sigue el mismo mecanismo común a todos los componentes, descrito en [Visión General](/docs/academy/cluar/components/overview) y [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos

Además de los [campos comunes](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Orden, Modo de Edición, Invertir fondo, Acciones), el Banner tiene:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título en destacado sobre la imagen. |
| **Contenido** (`content` / `html_content`) | Texto introductorio, debajo del título. |
| **Imagen** (`image`) | Imagen de fondo del banner. |
| **Imagen Alt** (`image_alt`) | Texto alternativo de la imagen, para accesibilidad y SEO. |
| **Imagen Título** (`image_title`) | Atributo `title` de la imagen. |
| **Posición X** / **Posición Y** (`position_x`, `position_y`) | Ajustan el foco de la imagen de fondo (`background-position`), en porcentaje. |

## Posición de la imagen

Los campos **Posición X** y **Posición Y** controlan qué parte de la imagen de fondo permanece siempre visible, a medida que el banner se redimensiona en diferentes resoluciones — el mismo principio del `background-position` en CSS.

Por ejemplo, `50%` / `50%` centra el foco en el medio de la imagen: en cualquier resolución, es el centro de la imagen el que permanece visible, recortando los bordes según sea necesario.

## Tipos disponibles

Hoy existen tres tipos de Banner:

- **Predeterminado** (`Default`) — diseño base, con título, contenido y acciones.
- **Secundario** (`Secondary`) — visualmente diferente del Predeterminado (estilo propio en CSS/LESS), pero con la misma estructura de campos.
- **Predeterminado con Destacado** (`DefaultSubBanner`) — variante más discreta, sin soporte de acciones (`action: false` en `config.json`).

Para los detalles de cómo funcionan los tipos y cómo crear uno nuevo, ver [Tipos de Componente](/docs/academy/cluar/components/types).

## Próximo paso

Continúa para el [Contenido](/docs/academy/cluar/components/content).