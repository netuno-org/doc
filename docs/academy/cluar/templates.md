---
sidebar_position: 11
id: templates
title: Templates
sidebar_label: Templates
---

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

:::info The select shows the folder name, not the `info.json` label
Unlike Component Types, the Template select in the page form uses the **folder name** as the displayed text (not the translated `label` from `info.json`) — the service even returns the `info.json`, but the form doesn't use it for the label. In other words, the Template's `info.json` currently has no visible effect; it's groundwork for a translation that hasn't been wired up to the interface yet.
:::

There's also a service on the server (`server/services/page/template/list/`) that scans the folders in real time and returns the list of available templates — for the same reason: **you don't need to restart the server to add a new template**, just create the folder.

One difference from Component Types: Templates don't have a `config.json` — there are no configurable capabilities per template today, just `index.jsx` and `info.json`.

## The Default template

The **Default** template (`Default`) is what most pages use: it wraps the page content with the site's header and footer (`BaseHeader` / `BaseFooter`) around the `Builder` — the component that actually iterates over and renders the page's components (Banner, Content, Listing, Slider, Functionality), in the order defined by each one's Order field.

:::info Page with an unrecognized template
If a page's `template` field doesn't match any existing folder (e.g., a misspelled name, or a deleted folder), CLUAR **doesn't fail or fall back to Default** — instead, it renders just the "bare" `Builder`, without the site's header or footer. This is different from what happens with Component Types, where an unrecognized type falls back to the Default type.
:::

## How to create a new template

1. Create a new folder inside `website/src/pages/Template/` (e.g., `Template/Landing/`).
2. Inside it, create the `index.jsx` (the template's React layout), the `index.less` (styles) and the `info.json` (label/description per language — still with no visible effect on the interface, see the note above, but kept for consistency with the pattern).
3. In the router's `index.jsx` (`Template/index.jsx`), import the new template and add it to the condition that picks the template by the `page.template` field.
4. The new template automatically shows up in the page edit form's Template select, with the folder name as the saved value.

## Next step

Explore [Permissions](/docs/academy/cluar/permissions).