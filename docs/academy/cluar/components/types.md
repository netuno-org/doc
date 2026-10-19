---
sidebar_position: 2
id: types
title: Component Types
sidebar_label: Component Types
---

## What they are

Each [Component](/docs/academy/cluar/components/overview) has a **Type** field, which defines which visual variant is used to render it. This field is not a fixed list stored in the database — it is **dynamic**, built from the folders that exist inside `website/src/components/<Component>/`. For example, for the Banner:

```
website/src/components/Banner/
├── index.jsx           # "router" component: chooses which type to render
├── Default/
│   ├── index.jsx        # the variant itself
│   ├── index.less
│   ├── info.json        # type name/description, per language
│   └── config.json       # type capabilities (e.g.: whether it supports actions)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Each folder inside `Banner/` is a **type** selectable in the **Type** field, in the editing form of that component (e.g.: when adding or editing a Banner on a page, it is in that form that the select with the available types appears).

In the select, what the person **sees** is the translated label defined in `info.json` (e.g.: "Padrão"), but what is **stored** in the `type` field of the component is the **folder name** (e.g.: `Default`) — it is that folder name that the "router" component later uses to choose which variant to render (see [`info.json` and `config.json`](#infojson-and-configjson) below).

> The name "Sub" in folders such as `DefaultSubBanner` does not indicate a subfolder nested inside another type — it is just one more type, at the same level as the others, only with a naming convention that indicates it is a more discreet/secondary variant of the base type.

### `info.json` and `config.json`

- **`info.json`** — defines the label and description of the type, per language. It is the label (`label`) that appears written in the select of the editing form:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "pt": { "label": "Padrão", "description": "Adiciona um banner." }
  }
  ```
- **`config.json`** — defines the capabilities of the type. Today, the only parameter is `action`, which controls whether the Actions section appears in the form and is rendered in that type:
  ```json
  { "action": true }
  ```

These two files are read in real time by a service on the server (`server/services/components/<component>/list/`), which walks the folders inside `website/src/components/<Component>/` and returns the list of available types — that is what feeds the Type select in the editing form of that component. Therefore, **there is no need to restart the server or change the database to add a new type** — just create the folder.

In the "router" component (`Banner/index.jsx`), the stored `type` is used to decide which variant to import and render:

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## How to create a new type

1. Create a new folder inside `website/src/components/<Component>/` (e.g.: `Banner/Highlight/`).
2. Inside it, create the `index.jsx` (the React component of the variant), the `index.less` (styles), the `info.json` (label/description per language) and the `config.json` (with `action: true` or `false`).
3. In the `index.jsx` of the parent component (e.g.: `Banner/index.jsx`), import the new component and add it to the condition that chooses the variant by `type`.
4. The new type then automatically appears in the Type select of the editing form of that component, with the folder name as the stored value.

## Next step

Explore each component in detail: [Banner](/docs/academy/cluar/components/banner), [Content](/docs/academy/cluar/components/content), [Listing](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Feature](/docs/academy/cluar/components/functionality).