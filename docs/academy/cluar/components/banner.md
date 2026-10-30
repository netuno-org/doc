---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

The large-format highlight component, usually used at the top of the page.

## Introduction

The **Banner** is the large highlight of a page — usually a full-width image, with a prominent title over it and, optionally, introductory text and actions (buttons/links).

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types).

## Fields

In addition to the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background, Actions), the Banner has:

| Field | Description |
|---|---|
| **Title** (`title`) | Prominent title over the image. |
| **Content** (`content` / `html_content`) | Introductory text, below the title. |
| **Image** (`image`) | Banner background image. |
| **Image Alt** (`image_alt`) | Alternative text for the image, for accessibility and SEO. |
| **Image Title** (`image_title`) | `title` attribute of the image. |
| **Position X** / **Position Y** (`position_x`, `position_y`) | Adjust the focus of the background image (`background-position`), in percentage. |

## Image position

The **Position X** and **Position Y** fields control which part of the background image is always visible as the banner is resized at different resolutions — the same principle as `background-position` in CSS.

For example, `50%` / `50%` centers the focus in the middle of the image: at any resolution, it is the center of the image that remains visible, cropping the edges as needed.

## Available types

Currently there are three types of Banner:

- **Default** (`Default`) — base layout, with title, content, and actions.
- **Secondary** (`Secondary`) — visually different from Default (its own style in CSS/LESS), but with the same field structure.
- **Default with Highlight** (`DefaultSubBanner`) — a more discreet variant, without support for actions (`action: false` in `config.json`).

For details on how the types work and how to create a new one, see [Component Types](/docs/academy/cluar/components/types).

## Next step

Continue to [Content](/docs/academy/cluar/components/content).