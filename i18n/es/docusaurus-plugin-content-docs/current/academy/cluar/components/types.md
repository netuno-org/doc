---
sidebar_position: 2
id: types
title: Tipos de Componente
sidebar_label: Tipos de Componente
---

## Qué son

Cada [Componente](/docs/academy/cluar/components/overview) tiene un campo **Tipo**, que define qué variante visual se usa para renderizarlo. Ese campo no es una lista fija guardada en la base de datos — es **dinámico**, construido a partir de las carpetas que existen dentro de `website/src/components/<Componente>/`. Por ejemplo, para el Banner:

```
website/src/components/Banner/
├── index.jsx           # componente "enrutador": elige el tipo que se va a renderizar
├── Predeterminado/
│   ├── index.jsx        # la variante en sí
│   ├── index.less
│   ├── info.json        # nombre/descripción del tipo, por idioma
│   └── config.json       # capacidades del tipo (p. ej.: si admite acciones)
├── Secundario/
│   └── ...
└── SubBannerPredeterminado/
    └── ...
```

Cada carpeta dentro de `Banner/` es un **tipo** seleccionable en el campo **Tipo**, en el formulario de edición de ese componente (p. ej.: al añadir o editar un Banner en una página, es en ese formulario donde aparece el selector con los tipos disponibles).

En el selector, lo que la persona **ve** es la etiqueta traducida definida en el `info.json` (p. ej.: "Estándar"), pero lo que se **guarda** en el campo `type` del componente es el **nombre de la carpeta** (p. ej.: `Predeterminado`) — es ese nombre de carpeta el que el componente "enrutador" usa después para elegir qué variante renderizar (ver [`info.json` y `config.json`](#infojson-y-configjson) abajo).

> El nombre "Sub" en carpetas como `SubBannerPredeterminado` no indica una subcarpeta anidada dentro de otro tipo — es solo otro tipo, al mismo nivel que los demás, solo que con una convención de nombre que indica que es una variante más discreta/secundaria del tipo base.

### `info.json` y `config.json`

- **`info.json`** — define la etiqueta y la descripción del tipo, por idioma. Es la etiqueta (`label`) que aparece escrita en el selector del formulario de edición:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "es": { "label": "Estándar", "description": "Añade un banner." }
  }
  ```
- **`config.json`** — define capacidades del tipo. Actualmente, el único parámetro es `action`, que controla si la sección de Acciones aparece en el formulario y se renderiza en ese tipo:
  ```json
  { "action": true }
  ```

Estos dos archivos los lee en tiempo real un servicio del servidor (`server/services/components/<componente>/list/`), que recorre las carpetas dentro de `website/src/components/<Componente>/` y devuelve la lista de tipos disponibles — es eso lo que alimenta el selector de Tipo en el formulario de edición de ese componente. Por eso, **no es necesario reiniciar el servidor ni modificar la base de datos para añadir un nuevo tipo** — basta con crear la carpeta.

En el componente "enrutador" (`Banner/index.jsx`), el `type` guardado se usa para decidir qué variante importar y renderizar:

```jsx
if (props.type === "Predeterminado") {
  layout = <Predeterminado {...props} actions={renderedActions} />;
} else if (props.type === "Secundario") {
  layout = <Secundario {...props} actions={renderedActions} />;
} else if (props.type === "SubBannerPredeterminado") {
  layout = <SubBannerPredeterminado {...props} actions={renderedActions} />;
}
```

## Cómo crear un nuevo tipo

1. Crea una nueva carpeta dentro de `website/src/components/<Componente>/` (p. ej.: `Banner/Destacado/`).
2. Dentro de ella, crea el `index.jsx` (el componente React de la variante), el `index.less` (estilos), el `info.json` (etiqueta/descripción por idioma) y el `config.json` (con `action: true` o `false`).
3. En el `index.jsx` del componente padre (p. ej.: `Banner/index.jsx`), importa el nuevo componente y añádelo a la condición que elige la variante por el `type`.
4. El nuevo tipo pasa a aparecer automáticamente en el selector de Tipo del formulario de edición de ese componente, con el nombre de la carpeta como valor guardado.

## Siguiente paso

Explora cada componente en detalle: [Banner](/docs/academy/cluar/components/banner), [Contenido](/docs/academy/cluar/components/content), [Listado](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funcionalidad](/docs/academy/cluar/components/functionality).