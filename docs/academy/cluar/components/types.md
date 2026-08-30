---
sidebar_position: 2
id: types
title: Component Types
sidebar_label: Component Types
---

## What they are

Every [Component](/docs/academy/cluar/components/overview) has a **Type** field, which defines which visual variant is used to render it. This field isn't a fixed list stored in the database — it's **dynamic**, built from the folders that exist inside `website/src/components/<Component>/`. For example, for the Banner:

```
website/src/components/Banner/
├── index.jsx           # "router" component: picks which type to render
├── Default/
│   ├── index.jsx        # the variant itself
│   ├── index.less
│   ├── info.json        # type name/description, per language
│   └── config.json       # type capabilities (e.g. whether it supports actions)
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

Each folder inside `Banner/` is a **type** selectable in the **Type** field, in that component's edit form (e.g., when adding or editing a Banner on a page, this is the form where the select with the available types shows up).

In the select, what the person **sees** is the translated label defined in `info.json` (e.g., "Default"), but what gets **saved** in the component's `type` field is the **folder name** (e.g., `Default`) — it's this folder name that the "router" component later uses to decide which variant to render (see [info.json and config.json](#infojson-and-configjson) below).

> The "Sub" name in folders like `DefaultSubBanner` doesn't indicate a nested subfolder inside another type — it's just another type, at the same level as the others, only with a naming convention indicating that it's a more discreet/secondary variant of the base type.

### `info.json` and `config.json`

- **`info.json`** — defines the type's label and description, per language. It's the label (`label`) that shows up in the edit form's select:
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "pt": { "label": "Padrão", "description": "Adiciona um banner." }
  }
  ```
- **`config.json`** — defines the type's capabilities. Today, the only parameter is `action`, which controls whether the Actions section shows up in the form and is rendered for that type:
  ```json
  { "action": true }
  ```

These two files are read in real time by a service on the server (`server/services/components/<component>/list/`), which scans the folders inside `website/src/components/<Component>/` and returns the list of available types — this is what feeds the Type select in that component's edit form. Because of this, **you don't need to restart the server or change the database to add a new type** — just create the folder.

In the "router" component (`Banner/index.jsx`), the saved `type` is used to decide which variant to import and render:

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

1. Create a new folder inside `website/src/components/<Component>/` (e.g., `Banner/Highlight/`).
2. Inside it, create the `index.jsx` (the variant's React component), the `index.less` (styles), the `info.json` (label/description per language) and the `config.json` (with `action: true` or `false`).
3. In the parent component's `index.jsx` (e.g., `Banner/index.jsx`), import the new component and add it to the condition that picks the variant by `type`.
4. The new type automatically shows up in that component's edit form's Type select, with the folder name as the saved value.

## Next step

Explore each component in detail: [Banner](/docs/academy/cluar/components/banner), [Content](/docs/academy/cluar/components/content), [Listing](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Functionality](/docs/academy/cluar/components/functionality).