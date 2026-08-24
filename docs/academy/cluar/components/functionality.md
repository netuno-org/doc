---
sidebar_position: 7
id: functionality
title: Functionality
sidebar_label: Functionality
---

The concrete functionalities available to include on a page, such as forms and maps.

## Introduction

**Functionality** is different from the other components: instead of visual variations of the same content, each type is a **concrete functionality** to include on the page — today, a contact form or a map.

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types) — but here, choosing the Type means choosing **which functionality** appears on the page, not just a different style.

## Fields

Besides the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background, Actions), Functionality has:

| Field | Description |
|---|---|
| **Title** (`title`) | The block's title. |
| **Content** (`content` / `html_content`) | The block's text. |
| **Image** (`image`) | Associated image (not used by every type). |

## Available types

### Contact Form (`ContactForm`)

Shows a contact form (name, email, message), protected by reCAPTCHA. Upon submission, it sends the data to the `contact` service on the server, which saves it in the `contact` entity (visible in the backoffice) and allows configuring email alerts.

### Contact Map (`ContactMap`)

Shows an interactive map, using [Mapbox](https://www.mapbox.com/). It uses the `settings.cluar.website.mapbox` setting (see [Configuration](/docs/academy/cluar/configuration)) — namely the `accessToken` (required for the map to work) and the `dark` option (light or dark map theme).

## Next step

With all 5 components explored, move on to [Actions](/docs/academy/cluar/actions), which can be associated with most of them.