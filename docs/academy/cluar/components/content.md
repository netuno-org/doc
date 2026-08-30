---
sidebar_position: 4
id: content
title: Content
sidebar_label: Content
---

CLUAR's most generic text and image component.

## Introduction

**Content** is CLUAR's most generic text/image component — used for plain text blocks, text with an image alongside it, or just an image, depending on the chosen type.

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Fields

Besides the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background, Actions), Content has:

| Field | Description |
|---|---|
| **Title** (`title`) | The content block's title. |
| **Content** (`content` / `html_content`) | The block's text. |
| **Image** (`image`) | Associated image (not used in text-only types). |
| **Image Alt** (`image_alt`) | The image's alternative text. |
| **Image Title** (`image_title`) | The image's `title` attribute. |
| **Image Max Width** (`image_max_width`) | Limits the image's width, in pixels — useful to avoid the image stretching too much on wide screens, especially in the types where the image sits alongside the text. |

## Available types

Unlike the Banner, Content has several types focused on different image and text layouts:

- **Default** (`Default`)
- **Text** (`TextContent`) — text only, no image.
- **Image** (`ImageContent`) — image only, no text.
- **Image Left** (`ImageLeft`)
- **Image Right** (`ImageRight`)
- **Image Top** (`ImageTop`)
- **Image Bottom** (`ImageBottom`)

For details on how types work and how to create a new one, see [Component Types](/docs/academy/cluar/components/types).

## Next step

Continue to [Listing](/docs/academy/cluar/components/listing).