---
sidebar_position: 2
id: versions-publishing
title: Versiones y Publicación
sidebar_label: Versiones y Publicación
---

## Versiones

Cada página tiene una o más **Versiones** (`page_version`), cada una con su propio estado (Borrador / Publicada). Esto permite editar una nueva versión del contenido sin afectar lo que está publicado — solo cuando la versión se marca como Publicada es cuando pasa a ser la versión activa de la página.

Los componentes de contenido (Banner, Contenido, Listado, Slider, Funcionalidad) pertenecen siempre a una versión específica (`page_version_id`), no a la página directamente. Es decir, editar un componente en una versión en borrador no afecta lo que está publicado.

## Publicación

Al publicar una página, el CLUAR:

1. Recoge todos los componentes activos de la versión publicada (banners, contenidos, listados, sliders, funcionalidades, con sus respectivas acciones).
2. Genera un archivo de estructura en JSON con ese contenido.
3. En producción, pre-renderiza un `index.html` estático para la URL de la página (por idioma), ya con las meta etiquetas de SEO y Open Graph rellenadas — importante para compartir en redes sociales y para motores de búsqueda, ya que el sitio en sí es una SPA en React.

## Siguiente paso

Una forma común de crear una página es duplicar otra ya existente — ver [Clonar Página](/docs/academy/cluar/pages/cloning).