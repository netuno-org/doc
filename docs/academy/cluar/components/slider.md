---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

## Introduction

The **Slider** presents a sequence of items in a carousel — each with a background image, title, text and, optionally, its own actions. It's rendered with the [Keen Slider](https://keen-slider.io/) library.

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Slider fields

Besides the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background), the Slider has:

| Field | Description |
|---|---|
| **Title** (`title`) | The slider block's title. |
| **Content** (`content` / `html_content`) | The block's introductory text. |
| **Image** (`image`) | Image associated with the slider itself (not with the items). |
| **Image Alt** (`image_alt`) | The image's alternative text. |
| **Image Title** (`image_title`) | The image's `title` attribute. |

## Items

Each item belongs to a Slider (`page_slider_id`), and is one of the carousel's "slides":

| Field | Description |
|---|---|
| **Title** (`title`) | The slide's title. |
| **Content** (`content` / `html_content`) | The slide's text. |
| **Image** (`image`) | The slide's background image. |
| **Image Alt** (`image_alt`) | The image's alternative text. |
| **Image Title** (`image_title`) | The image's `title` attribute. |
| **Order** (`sorter`) | The slide's position within the carousel. |
| **Actions** | Each item can have its own associated actions — see [Actions](/docs/academy/cluar/actions). |

:::info Difference from Listing
Unlike the Listing's Item, the Slider's Item **has its own actions**, associated individually (`page_slider_item_action`) — each slide can have its own button/link.
:::

## Rendering structure

Just like in Listing, the Slider's `Item` sits **inside** the type folder, not as a sibling folder:

```
website/src/components/Slider/
├── index.jsx              # router: picks the slider type
└── Default/
    ├── index.jsx           # slider layout, builds the carousel with the <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # each slide, including its own actions
```

## Available types

Today only the **Default** type (`Default`) exists. To create a new Slider type (with its own `Item`), follow the same process described in [Component Types](/docs/academy/cluar/components/types), remembering to include the `Item/` subfolder inside the new type.

## Next step

Continue to [Functionality](/docs/academy/cluar/components/functionality).