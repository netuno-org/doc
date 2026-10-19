---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

The carousel component, used to present a sequence of highlighted items.

## Introduction

The **Slider** presents a sequence of items in a carousel — each one with a background image, title, text and, optionally, its own actions. It is rendered with the [Keen Slider](https://keen-slider.io/) library.

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Slider Fields

In addition to the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Editing Mode, Invert background), the Slider has:

| Field | Description |
|---|---|
| **Title** (`title`) | Title of the slider block. |
| **Content** (`content` / `html_content`) | Introductory text of the block. |
| **Image** (`image`) | Image associated with the slider itself (not with the items). |
| **Image Alt** (`image_alt`) | Alternative text of the image. |
| **Image Title** (`image_title`) | `title` attribute of the image. |

## Items

Each item belongs to a Slider (`page_slider_id`), and is one of the carousel's "slides":

| Field | Description |
|---|---|
| **Title** (`title`) | Title of the slide. |
| **Content** (`content` / `html_content`) | Text of the slide. |
| **Image** (`image`) | Background image of the slide. |
| **Image Alt** (`image_alt`) | Alternative text of the image. |
| **Image Title** (`image_title`) | `title` attribute of the image. |
| **Order** (`sorter`) | Position of the slide within the carousel. |
| **Actions** | Each item can have its own associated actions — see [Actions](/docs/academy/cluar/actions). |

:::info Difference from the Listing
Unlike the Listing Item, the Slider Item **has its own actions**, associated individually (`page_slider_item_action`) — each slide can have its own button/link.
:::

## Rendering structure

Just like in the Listing, the Slider `Item` is **inside** the type folder, not as a sibling folder:

```
website/src/components/Slider/
├── index.jsx              # router: chooses the slider type
└── Default/
    ├── index.jsx           # slider layout, assembles the carousel with the <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # each slide, including its own actions
```

## Available types

Currently there is only the **Default** (`Default`) type. To create a new Slider type (with its own `Item`), follow the same process described in [Component Types](/docs/academy/cluar/components/types), remembering to include the `Item/` subfolder inside the new type.

## Next step

Continue to [Functionality](/docs/academy/cluar/components/functionality).