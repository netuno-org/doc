---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

The large-format highlight component, usually used at the top of the page.

## Introduction

The **Banner** is a page's big highlight — usually a full-width image, with a prominent title over it and, optionally, an introductory text and actions (buttons/links).

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Fields

Besides the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background, Actions), the Banner has:

| Field | Description |
|---|---|
| **Title** (`title`) | Prominent title over the image. |
| **Content** (`content` / `html_content`) | Introductory text, below the title. |
| **Image** (`image`) | The banner's background image. |
| **Image Alt** (`image_alt`) | The image's alternative text, for accessibility and SEO. |
| **Image Title** (`image_title`) | The image's `title` attribute. |
| **Position X** / **Position Y** (`position_x`, `position_y`) | Adjust the background image's focus (`background-position`), as a percentage. |

## Image position

The **Position X** and **Position Y** fields control which part of the background image stays visible as the banner is resized across different resolutions — the same principle as `background-position` in CSS.

For example, `50%` / `50%` centers the focus in the middle of the image: at any resolution, it's the center of the image that remains visible, cropping the edges as needed.

## Available types

Today there are three Banner types:

- **Default** (`Default`) — base layout, with title, content and actions.
- **Secondary** (`Secondary`) — visually different from Default (its own CSS/LESS style), but with the same field structure.
- **Default Sub Banner** (`DefaultSubBanner`) — a more discreet variant, with no support for actions (`action: false` in `config.json`).

For details on how types work and how to create a new one, see [Component Types](/docs/academy/cluar/components/types).

## Next step

Continue to [Content](/docs/academy/cluar/components/content).