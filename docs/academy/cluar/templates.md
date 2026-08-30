---
sidebar_position: 11
id: templates
title: Templates
sidebar_label: Templates
---

How a page's overall layout is defined, and how to create new templates.

## Introduction

A **Template** defines a [Page](/docs/academy/cluar/pages/overview)'s overall layout — it's the value of the page's `template` field, and corresponds to a folder in `website/src/pages/Template/`.

:::info Origin of the Component Types mechanism
The [Component Types](/docs/academy/cluar/components/types) mechanism (dynamic folders + `info.json`) was inspired by this Templates mechanism, which already worked this way first. The structure is practically the same, just applied to whole pages instead of content blocks.
:::

## How it works

```
website/src/pages/Template/
├── index.jsx        # router: picks the template to render
└── Default/
    ├── index.jsx      # the template itself
    ├── index.less
    └── info.json       # template name/description, per language
```

Each folder inside `Template/` is a template selectable in the page edit form's **Template** field. The folder name (`Default`) is the value saved in the page's `template` field.

The Default template's `info.json`, for example:

```json
{
  "en": { "label": "Default", "description": "For pages that use generic styling." },
  "pt": { "label": "Padrão", "description": "Para páginas que utilizam o estilo genérico." }
}
```

:::info The select now uses the translated `info.json` label
Just like Component Types, the Template select in the page form shows the translated `label` from `info.json` — to make this work, the request to the service sends the current language (`Cluar.currentLanguage().locale`). What's saved in the page's `template` field is still the folder name (`Default`).
:::

There's also a service on the server (`server/services/page/template/list/`) that scans the folders in real time and returns the list of available templates — for the same reason: **you don't need to restart the server to add a new template**, just create the folder.

One difference from Component Types: Templates don't have a `config.json` — there are no configurable capabilities per template today, just `index.jsx` and `info.json`.

## The Default template

The **Default** template (`Default`) is what most pages use: it wraps the page content with the site's header and footer (`BaseHeader` / `BaseFooter`) around the `Builder` — the component that actually iterates over and renders the page's components (Banner, Content, Listing, Slider, Functionality), in the order defined by each one's Order field.

:::info Page with an unrecognized template
If a page's `template` field doesn't match any existing folder (e.g., a misspelled name, or a deleted folder), CLUAR **doesn't fail or fall back to Default** — instead, it renders just the "bare" `Builder`, without the site's header or footer. This is different from what happens with Component Types, where an unrecognized type falls back to the Default type.
:::

This is decided by the router (`Template/index.jsx`):

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

Notice there's only one explicit check (`"Default"`) — any other `template` value, recognized or not, falls straight into the `else` and renders just the `Builder`.

## How to create a new template

1. Create a new folder inside `website/src/pages/Template/` (e.g., `Template/Landing/`).
2. Inside it, create the `index.jsx` (the template's React layout), the `index.less` (styles) and the `info.json` (label/description per language — this label is what shows up in the select).
3. In the router's `index.jsx` (`Template/index.jsx`), import the new template and add it to the condition that picks the template by the `page.template` field.
4. The new template automatically shows up in the page edit form's Template select, with the folder name as the saved value.

## Next step

Explore [Permissions](/docs/academy/cluar/permissions).