---
sidebar_position: 4
id: content
title: Content
sidebar_label: Content
---

CLUAR's most generic text and image component.

## Introduction

**Content** is CLUAR's most generic text/image component — used for plain text blocks, text with an image beside it, or just an image, depending on the chosen type.

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Fields

Besides the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Editing Mode, Invert background, Actions), Content has:

| Field | Description |
|---|---|
| **Title** (`title`) | Title of the content block. |
| **Content** (`content` / `html_content`) | Text of the block. |
| **Image** (`image`) | Associated image (not used in text-only types). |
| **Image Alt** (`image_alt`) | Alternative text for the image. |
| **Image Title** (`image_title`) | `title` attribute of the image. |
| **Image Max Width** (`image_max_width`) | Limits the image width, in pixels — useful to keep the image from stretching too much on wide screens, especially in the types where the image sits beside the text. |

## Available types

Unlike Banner, Content has several types focused on different image and text layouts:

- **Default** (`Default`)
- **Text** (`TextContent`) — text only, no image.
- **Image** (`ImageContent`) — image only, no text.
- **Image on the left** (`ImageLeft`)
- **Image on the right** (`ImageRight`)
- **Image on top** (`ImageTop`)
- **Image at the bottom** (`ImageBottom`)

For details on how types work and how to create a new one, see [Component Types](/docs/academy/cluar/components/types).

## Next step

Continue to [Listing](/docs/academy/cluar/components/listing).