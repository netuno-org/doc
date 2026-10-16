---
sidebar_position: 1
id: overview
title: Visión general
sidebar_label: Visión general
---

CLUAR es un CMS de código abierto, construido sobre [Netuno](https://www.netuno.org/), para la creación de sitios web multilingües. Los componentes visuales de las páginas (banners, listados, sliders, etc.) se desarrollan en ReactJS, con [Ant Design](https://ant.design/) para la interfaz, [React Router](https://reactrouter.com/) para la navegación y [Less](https://lesscss.org/) para los estilos — mientras que el contenido (páginas, textos, imágenes, idiomas, menús) se gestiona a través de un backoffice, sin necesidad de programar.

El código está disponible en el [repositorio de CLUAR en GitHub](https://github.com/netuno-org/cluar) — las contribuciones son bienvenidas.

## Modelo de contenido

El contenido de CLUAR sigue la estructura **Página → Versión → Componentes**:

- Cada **Página** representa una URL del sitio (`link`), con título, menú, SEO, etc.
- Cada página tiene una o más **Versiones**, que permiten trabajar en un borrador sin afectar lo que ya está publicado.
- Dentro de cada versión entran los **Componentes** de contenido — Banner, Contenido, Listado, Slider y Funcionalidad — que son los bloques que efectivamente aparecen en la página, cada uno con su tipo visual y, opcionalmente, acciones (botones/enlaces) asociadas.

## Arquitectura del proyecto

El proyecto está dividido en cuatro partes:

- **`server`** — la aplicación Netuno: entidades de datos, servicios REST y los scripts de configuración inicial (`setup`).
- **`website`** — el sitio en ReactJS que consume los datos vía REST y renderiza las páginas.
- **`ui`** — extensiones al backoffice de Netuno específicas de CLUAR.
- **`config`** — configuración de entorno (base de datos, autenticación, definiciones generales).

## Próximos pasos

- [Instalación](/docs/academy/cluar/install)
- [Configuración](/docs/academy/cluar/configuration)
- [Componentes](/docs/academy/cluar/components/overview)
- [Páginas](/docs/academy/cluar/pages/overview)
- [Idiomas](/docs/academy/cluar/languages)
- [Permisos](/docs/academy/cluar/permissions)