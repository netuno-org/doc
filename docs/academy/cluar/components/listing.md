---
sidebar_position: 5
id: listing
title: Listing
sidebar_label: Listing
---

How to present a series of related items — products, services, news, and so on.

## Introduction

The **Listing** is used to present a series of related items — products, services, references, news, and so on. Each Listing has its own title/introductory content, and groups several **Items**, managed separately in the backoffice (`Listing > Item`).

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Listing Fields

In addition to the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background, Actions), the Listing has:

| Field | Description |
|---|---|
| **Title** (`title`) | Title of the listing. |
| **Content** (`content` / `html_content`) | Introductory text of the listing. |
| **Image** (`image`) | Image associated with the listing itself (not with the items). |
| **Image Alt** (`image_alt`) | Alternative text of the image. |
| **Image Title** (`image_title`) | `title` attribute of the image. |

## Items

Each item belongs to a Listing (`page_listing_id`), and has its own fields:

| Field | Description |
|---|---|
| **Title** (`title`) | Title of the item. |
| **Content** (`content` / `html_content`) | Text of the item. |
| **Image** (`image`) | Image of the item. |
| **URL** (`link`) | Link of the item — where the user goes when clicking. |
| **Order** (`sorter`) | Position of the item within the listing. |

Note that the Item **does not have its own Type field** — it inherits the type of the Listing it belongs to: the React component of the Listing passes its `type` to each item when rendering it.

## Rendering structure

Unlike the Banner and the Content, where each type is an independent folder inside the component, in the Listing the component that renders the items (`Item`) is **inside** the type's folder:

```
website/src/components/Listing/
├── index.jsx              # router: chooses the listing type
└── Default/
    ├── index.jsx           # listing layout, renders the <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # how each item is rendered, for this type
```

This makes sense because the way an item is presented (grid, list, cards...) usually depends directly on the listing layout — so the `Item` of each type can be customized together with the type itself, instead of being a generic component shared by all types.

## Available types

Currently there is only the **Default** type (`Default`). To create a new Listing type (with its own `Item`), follow the same process described in [Component Types](/docs/academy/cluar/components/types), remembering to include the `Item/` subfolder inside the new type.

## Next step

Continue to the [Slider](/docs/academy/cluar/components/slider).