---
sidebar_position: 5
id: listing
title: Listing
sidebar_label: Listing
---

## Introduction

**Listing** is used to present a series of related items — products, services, references, news, and so on. Each Listing has its own title/introductory content, and groups several **Items**, managed separately in the backoffice (`Listing > Item`).

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Listing fields

Besides the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background, Actions), Listing has:

| Field | Description |
|---|---|
| **Title** (`title`) | The listing's title. |
| **Content** (`content` / `html_content`) | The listing's introductory text. |
| **Image** (`image`) | Image associated with the listing itself (not with the items). |
| **Image Alt** (`image_alt`) | The image's alternative text. |
| **Image Title** (`image_title`) | The image's `title` attribute. |

## Items

Each item belongs to a Listing (`page_listing_id`), and has its own fields:

| Field | Description |
|---|---|
| **Title** (`title`) | The item's title. |
| **Content** (`content` / `html_content`) | The item's text. |
| **Image** (`image`) | The item's image. |
| **URL** (`link`) | The item's link — where the user goes when clicking it. |
| **Order** (`sorter`) | The item's position within the listing. |

Note that the Item **doesn't have its own Type field** — it inherits the type from the Listing it belongs to: the Listing's React component passes its `type` down to each item when rendering it.

## Rendering structure

Unlike the Banner and Content, where each type is an independent folder within the component, in Listing the component that renders the items (`Item`) sits **inside** the type folder:

```
website/src/components/Listing/
├── index.jsx              # router: picks the listing type
└── Default/
    ├── index.jsx           # listing layout, renders the <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # how each item is rendered, for this type
```

This makes sense because how an item is presented (grid, list, cards...) usually depends directly on the listing's layout — so each type's `Item` can be customized together with the type itself, instead of being a generic component shared by all types.

## Available types

Today only the **Default** type (`Default`) exists. To create a new Listing type (with its own `Item`), follow the same process described in [Component Types](/docs/academy/cluar/components/types), remembering to include the `Item/` subfolder inside the new type.

## Next step

Continue to [Slider](/docs/academy/cluar/components/slider).