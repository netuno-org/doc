---
sidebar_position: 9
id: settings
title: Configuraciones
sidebar_label: Configuraciones
---

El sistema de parámetros clave/valor gestionados por el editor de contenido, sin necesidad de código.

## Introducción

**Configuraciones** es un sistema de parámetros clave/valor, gestionados por el editor de contenido en el backoffice — pensado para valores del sitio web que cambian con frecuencia o varían según el idioma (p. ej.: número de teléfono, dirección, enlaces de redes sociales, una imagen de logotipo), sin necesidad de tocar código.

Involucra tres formularios en el backoffice:

- **Tipo** (`configuration_parameter_type`)
- **Parámetro** (`configuration_parameter`)
- **Configuración** (`configuration`)

## Tipo

Define qué tipo de valor acepta un Parámetro. Solo tiene **Código** (`code`) y **Nombre** (`name`). Ya vienen creados por defecto:

| Código | Nombre |
|---|---|
| `boolean` | Booleano |
| `number` | Número |
| `image` | Imagen |
| `color` | Color |
| `text` | Texto |
| `html` | HTML |

## Parámetro

Define una "clave" de configuración — **Código** (`code`, usado en el código para obtener el valor), **Descripción** y el **Tipo** (cuál de los tipos anteriores). Ej.: un parámetro `numero-telefono`, del tipo Texto.

## Configuración

Es el **valor** de un Parámetro, para un determinado **Idioma** — **Valor** (`value`, texto) o **Imagen** (`value_img`), dependiendo del tipo del parámetro.

### Valores sin idioma (fallback genérico)

Si el campo **Idioma** de una Configuración queda en blanco, ese valor pasa a usarse como **fallback para todos los idiomas** que no tengan un valor propio definido para ese parámetro. Esto evita tener que duplicar el mismo valor (p. ej.: un número de teléfono que es igual en todos los idiomas) en cada idioma por separado — solo se define una vez, sin idioma asociado, y se define un valor específico por idioma únicamente donde sea realmente diferente.

## Programáticamente

La clase `website/src/common/Cluar.js` proporciona funciones para leer configuraciones:

- `Cluar.configuration(parametro)` — obtiene el valor de un parámetro en el idioma actual; si no hay valor para ese idioma, usa el valor sin idioma (fallback); si no hay ninguno de los dos, devuelve el propio nombre del parámetro (útil para detectar rápidamente una configuración faltante).
- `Cluar.configurationNumber(parametro)` — igual, pero convierte el valor a número (0 si no es numérico).
- `Cluar.configurationMultilines(parametro)` — igual, pero convierte los saltos de línea en `<br>`.

## Siguiente paso

Explora los [Diccionarios](/docs/academy/cluar/dictionaries).