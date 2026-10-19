---
sidebar_position: 11
id: templates
title: Templates
sidebar_label: Templates
---

Cómo se define el layout general de una página y cómo crear nuevas plantillas.

## Introducción

La **Plantilla** define el layout general de una [Página](/docs/academy/cluar/pages/overview) — es el valor del campo `template` de la página y corresponde a una carpeta en `website/src/pages/Template/`.

:::info Origen del mecanismo de Tipos de Componente
El mecanismo de [Tipos de Componente](/docs/academy/cluar/components/types) (carpetas dinámicas + `info.json`) se inspiró en este mecanismo de Plantillas, que ya funcionaba así primero. La estructura es prácticamente la misma, solo que aplicada a páginas completas en lugar de bloques de contenido.
:::

## Cómo funciona

```
website/src/pages/Template/
├── index.jsx        # enrutador: elige la plantilla a renderizar
└── Default/
    ├── index.jsx      # la plantilla en sí
    ├── index.less
    └── info.json       # nombre/descripción de la plantilla, por idioma
```

Cada carpeta dentro de `Template/` es una plantilla seleccionable en el campo **Plantilla** del formulario de edición de la página. El nombre de la carpeta (`Default`) es el valor guardado en el campo `template` de la página.

El `info.json` de la plantilla predeterminada, por ejemplo:

```json
{
  "en": { "label": "Default", "description": "For pages that use generic styling." },
  "pt": { "label": "Padrão", "description": "Para páginas que utilizam o estilo genérico." }
}
```

:::info El select usa la etiqueta traducida del `info.json`
Igual que en los Tipos de Componente, el select de Plantilla del formulario de la página muestra la etiqueta (`label`) traducida del `info.json` — para ello, la petición al servicio envía el idioma actual (`Cluar.currentLanguage().locale`). Lo que se guarda en el campo `template` de la página sigue siendo el nombre de la carpeta (`Default`).
:::

También hay un servicio en el servidor (`server/services/page/template/list/`) que recorre las carpetas en tiempo real y devuelve la lista de plantillas disponibles — por el mismo motivo: **no hace falta reiniciar el servidor para añadir una plantilla nueva**, basta con crear la carpeta.

Una diferencia respecto a los Tipos de Componente: las Plantillas no tienen `config.json` — hoy no hay capacidades configurables por plantilla, solo el `index.jsx` y el `info.json`.

## La plantilla predeterminada

La plantilla **predeterminada** (`Default`) es la que usa la mayoría de las páginas: envuelve el contenido de la página con el encabezado y el pie del sitio (`BaseHeader` / `BaseFooter`) alrededor del `Builder` — el componente que efectivamente recorre y renderiza los componentes de la página (Banner, Contenido, Listado, Slider, Funcionalidad), en el orden definido por el campo Orden de cada uno.

:::info Página con plantilla no reconocida
Si el campo `template` de una página no corresponde a ninguna carpeta existente (p. ej.: nombre escrito incorrectamente, o carpeta borrada), CLUAR **no falla ni usa la predeterminada como sustituto** — en su lugar, renderiza solo el `Builder` "desnudo", sin el encabezado ni el pie del sitio. Es un comportamiento distinto del que se da en los Tipos de Componente, donde un tipo no reconocido recurre al tipo predeterminado.
:::

Es el enrutador (`Template/index.jsx`) el que decide eso:

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

Fíjate en que solo existe una comprobación explícita (`"Default"`) — cualquier otro valor de `template`, reconocido o no, cae directamente en el `else` y renderiza solo el `Builder`.

## Cómo crear una nueva plantilla

1. Crea una nueva carpeta dentro de `website/src/pages/Template/` (p. ej.: `Template/Landing/`).
2. Dentro de ella, crea el `index.jsx` (el layout React de la plantilla), el `index.less` (estilos) y el `info.json` (label/descripción por idioma — es esa etiqueta la que aparece en el select).
3. En el `index.jsx` del enrutador (`Template/index.jsx`), importa la nueva plantilla y añádela a la condición que elige la plantilla por el campo `page.template`.
4. La nueva plantilla pasa a aparecer automáticamente en el select de Plantilla del formulario de edición de la página, con el nombre de la carpeta como valor guardado.

## Siguiente paso

Explora los [Permisos](/docs/academy/cluar/permissions).