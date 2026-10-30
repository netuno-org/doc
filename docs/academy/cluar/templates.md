---
sidebar_position: 11
id: templates
title: Templates
sidebar_label: Templates
---

How the overall layout of a page is defined, and how to create new templates.

## Introduction

The **Template** defines the overall layout of a [Page](/docs/academy/cluar/pages/overview) — it is the value of the page's `template` field, and corresponds to a folder in `website/src/pages/Template/`.

:::info Origin of the Component Types mechanism
The [Component Types](/docs/academy/cluar/components/types) mechanism (dynamic folders + `info.json`) was inspired by this Templates mechanism, which already worked this way first. The structure is practically the same, only applied to entire pages instead of content blocks.
:::

## How it works

```
website/src/pages/Template/
├── index.jsx        # router: chooses which template to render
└── Default/
    ├── index.jsx      # the template itself
    ├── index.less
    └── info.json       # template name/description, per language
```

Each folder inside `Template/` is a template selectable in the **Template** field of the page editing form. The folder name (`Default`) is the value stored in the page's `template` field.

The `info.json` of the Default template, for example:

```json
{
  "en": { "label": "Default", "description": "For pages that use generic styling." },
  "pt": { "label": "Default", "description": "For pages that use generic styling." }
}
```

:::info The select uses the translated label from `info.json`
As with Component Types, the Template select in the page form shows the translated label (`label`) from `info.json` — for this, the request to the service sends the current language (`Cluar.currentLanguage().locale`). What is stored in the page's `template` field remains the folder name (`Default`).
:::

There is also a service on the server (`server/services/page/template/list/`) that scans the folders in real time and returns the list of available templates — for the same reason: **you do not need to restart the server to add a new template**, just create the folder.

One difference compared with Component Types: Templates do not have `config.json` — there are no configurable capabilities per template today, only `index.jsx` and `info.json`.

## The Default template

The **Default** template (`Default`) is the one most pages use: it wraps the page content with the site header and footer (`BaseHeader` / `BaseFooter`) around the `Builder` — the component that actually traverses and renders the page components (Banner, Content, Listing, Slider, Feature), in the order defined by each one's Order field.

:::info Page with an unrecognized template
If a page's `template` field does not match any existing folder (e.g., a misspelled name or a deleted folder), CLUAR **does not fail nor use Default as a fallback** — instead, it renders only the "bare" `Builder`, without the site header or footer. This is different from what happens in Component Types, where an unrecognized type falls back to the Default type.
:::

It is the router (`Template/index.jsx`) that decides this:

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

Note that there is only one explicit check (`"Default"`) — any other value of `template`, recognized or not, falls straight into the `else` and renders only the `Builder`.

## How to create a new template

1. Create a new folder inside `website/src/pages/Template/` (e.g., `Template/Landing/`).
2. Inside it, create `index.jsx` (the template's React layout), `index.less` (styles), and `info.json` (label/description per language — this is the label that appears in the select).
3. In the router's `index.jsx` (`Template/index.jsx`), import the new template and add it to the condition that chooses the template by the `page.template` field.
4. The new template then automatically appears in the Template select of the page editing form, with the folder name as the stored value.

## Next step

Explore the [Permissions](/docs/academy/cluar/permissions).