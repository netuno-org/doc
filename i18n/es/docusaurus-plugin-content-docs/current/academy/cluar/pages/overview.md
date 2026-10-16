---
sidebar_position: 1
id: overview
title: Visión general
sidebar_label: Visión general
---

La **Página** es la entidad central de CLUAR: representa una URL del sitio web. Cada página pertenece a un único idioma — no existe una página "multilingüe" única, cada idioma tiene su propia página (con su propio `link`, título, contenido, etc.), y se enlazan entre sí solo mediante la acción de [clonación](/docs/academy/cluar/pages/cloning).

## Campos

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título de la página. |
| **Enlace** (`link`) | La URL de la página (ej.: `/sobre-nosotros`). |
| **Idioma** (`language_id`) | Idioma al que pertenece esta página. |
| **Padre** (`parent_id`) | Página padre, usada para construir la jerarquía/migas de pan y submenús. |
| **Plantilla** (`template`) | Plantilla usada para renderizar la página (ver [Plantillas](/docs/academy/cluar/templates)). Es un select en el formulario, rellenado dinámicamente con las carpetas existentes en `website/src/pages/Template/`. |
| **Estado** (`status_id`) | Borrador o Publicada — refleja el estado de la versión actual. |
| **Menú** (`menu`) | Si se marca, la página aparece en el menú de navegación. |
| **Título del menú** (`menu_title`) | Título alternativo que se muestra en el menú (si está vacío, usa el Título de la página). |
| **Navegable** (`navigable`) | Controla si la página es accesible directamente (aunque no aparezca en el menú). |
| **Orden** (`sorter`) | Posición de la página entre sus "hermanas" (mismo `parent_id`). |
| **Descripción** / **Palabras clave** | Metaetiquetas de SEO (`<meta name="description">` / `<meta name="keywords">`). |
| **Descripción para redes sociales** / **Imagen para redes sociales** | Usadas en las etiquetas Open Graph (`og:description`, `og:image`) cuando se comparte la página. |

## Próximo paso

Cada página tiene varias versiones y pasa por un flujo de publicación — ver [Versiones y Publicación](/docs/academy/cluar/pages/versions-publishing).