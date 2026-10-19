---
sidebar_position: 8
id: actions
title: Acciones
sidebar_label: Acciones
---

Cómo crear y reutilizar CTAs (botones/enlaces) asociados a los componentes.

## Introducción

Una **Acción** es, en el fondo, un **CTA** (call-to-action) reutilizable — un botón/enlace con título, texto, imagen y destino (`link`) — que se puede asociar a [Componentes](/docs/academy/cluar/components/overview) como Banner, Contenido, Listado, Slider (en los elementos) y Funcionalidad.

## Campos

| Campo | Descripción |
|---|---|
| **Título** (`title`) | Título de la acción, renderizado como encabezado (`<h4>`). |
| **Contenido** (`content`) | Texto descriptivo de la acción, renderizado como párrafo (`<p>`). |
| **Indicación** (`indication`) | El texto del propio enlace/CTA — es lo que aparece escrito **dentro** del botón clicable (p. ej.: "Saber más", "Comprar ahora"). |
| **Imagen** (`image`) | Imagen asociada a la acción (p. ej.: icono). |
| **Enlace** (`link`) | Destino de la acción (URL) — a donde lleva el CTA al hacer clic. |
| **Idioma** (`language_id`) | Idioma al que pertenece esta acción. |
| **Parámetro** (`parameter_id`) | Agrupa esta acción con sus equivalentes en otros idiomas — ver abajo. |

## Parámetro

El **Parámetro** (`action_parameter`, con solo `código` y `descripción`) es un agrupador: varias Acciones — cada una en su idioma, pero representando la **misma funcionalidad/destino** — comparten el mismo Parámetro.

Esto se usa al [clonar una página](/docs/academy/cluar/pages/cloning) a otro idioma: para cada Acción asociada a un componente de la página original, CLUAR busca, entre las Acciones existentes, una que tenga el **mismo Parámetro** y esté en el **idioma de destino** de la clonación. Si la encuentra, asocia automáticamente esa Acción (la versión ya traducida) al componente clonado — sin necesidad de añadirla manualmente después.

:::info Es necesario crear la Acción en el idioma de destino primero
La asociación automática solo funciona si ya existe una Acción con el mismo Parámetro en el idioma al que se está clonando. Si aún no existe, la acción simplemente no se asocia al componente clonado — queda como si no se hubiera definido. Es decir, el Parámetro no traduce ni crea la Acción automáticamente; solo vincula Acciones equivalentes ya existentes, una vez que se hayan creado en cada idioma.
:::

Por ejemplo: una Acción "Saber más" con el Parámetro `saber-mas`, en español, y otra Acción "Learn more" con el mismo Parámetro `saber-mas`, en inglés — al clonar una página de español a inglés, un Banner que tenía la primera Acción asociada pasa a tener automáticamente la segunda.

## Siguiente paso

Explora las [Configuraciones](/docs/academy/cluar/settings).