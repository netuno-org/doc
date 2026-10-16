---
sidebar_position: 7
id: functionality
title: Funcionalidad
sidebar_label: Funcionalidad
---

Las funcionalidades concretas disponibles para incluir en una página, como formularios y mapas.

## Introducción

La **Funcionalidad** es diferente de los otros componentes: en lugar de variaciones visuales del mismo contenido, cada tipo es una **funcionalidad concreta** a incluir en la página — hoy, un formulario de contacto o un mapa.

Sigue el mismo mecanismo común a todos los componentes, descrito en [Visión General](/docs/academy/cluar/components/overview) y [Tipos de Componente](/docs/academy/cluar/components/types) — pero aquí, al elegir el Tipo, se está eligiendo **qué funcionalidad** aparece en la página, no solo un estilo diferente.

## Campos

Además de los [campos comunes](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Orden, Modo de Edición, Invertir fondo, Acciones), la Funcionalidad tiene:

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título del bloque. |
| **Contenido** (`content` / `html_content`) | Texto del bloque. |
| **Imagen** (`image`) | Imagen asociada (no todos los tipos la usan). |

## Tipos disponibles

### Formulario de Contacto (`ContactForm`)

Presenta un formulario de contacto (nombre, correo electrónico, mensaje), protegido por reCAPTCHA. Al enviarse, envía los datos al servicio `contact` en el servidor, que graba en la entidad `contact` (visible en el backoffice) y permite configurar alertas por correo electrónico.

### Mapa de Contacto (`ContactMap`)

Presenta un mapa interactivo, usando [Mapbox](https://www.mapbox.com/). Usa la configuración `settings.cluar.website.mapbox` (ver [Configuración](/docs/academy/cluar/configuration)) — concretamente el `accessToken` (obligatorio para que el mapa funcione) y la opción `dark` (tema claro u oscuro del mapa).

## Siguiente paso

Con los 5 componentes explorados, avanza hacia las [Acciones](/docs/academy/cluar/actions), que pueden asociarse a la mayoría de ellos.