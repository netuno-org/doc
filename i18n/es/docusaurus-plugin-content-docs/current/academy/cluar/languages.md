---
sidebar_position: 5
id: languages
title: Idiomas
sidebar_label: Idiomas
---

Cómo gestiona CLUAR los idiomas del sitio web y el contenido multilingüe.

## Introducción

CLUAR es multilingüe por defecto: cada **Página** está asociada a un idioma, y el sitio web presenta un selector para que el visitante cambie entre los idiomas disponibles.

Los idiomas se gestionan en el backoffice, a través del formulario **Idioma**.

## Campos

| Campo | Descripción |
|---|---|
| **Código** (`code`) | Código internacional del idioma (ej.: `PT`, `EN`). Es el valor usado para asociar contenido (páginas, diccionario, configuraciones) a este idioma. |
| **Localización** (`locale`) | Localización completa (ej.: `pt`, `en`). Es el valor usado en el enlace de las páginas y en el cambio de idioma vía código. |
| **Predeterminado** (`default`) | Marca este idioma como el preferido del sitio web — es el que se carga por defecto. |
| **Descripción** (`description`) | Nombre del idioma presentado al visitante (ej.: "Portugués"). |

## Selección de idioma en el sitio web

Actualmente existen dos selectores de idioma en el proyecto:

- **Header del sitio público** (`website/src/base/Header`) — el selector tradicional, hecho con el [Menú de Ant Design](https://ant.design/components/menu/). Al cambiar de idioma, navega a `/{locale}/`. Solo lista idiomas que ya tienen páginas publicadas (vía `Cluar.pages()`), para no mostrar opciones vacías.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — usado dentro del Área Reservada (`ReservedArea`). Es un desplegable más simple: cambia el idioma activo y recarga la página actual, sin navegar a otra ruta.

## Programáticamente

La clase `website/src/common/Cluar.js` pone a disposición funciones para trabajar con idiomas:

- `Cluar.defaultLanguage()` — obtiene el idioma marcado como predeterminado.
- `Cluar.currentLanguage()` — obtiene el idioma activo en el momento.
- `Cluar.changeLanguage(codigoOLocalizacion)` — activa otro idioma programáticamente (acepta tanto el `code` como el `locale`).
- `Cluar.languages()` — obtiene la lista de todos los idiomas.

## Próximo paso

Explora cómo se organiza el contenido en cada idioma en las [Páginas](/docs/academy/cluar/pages/overview).