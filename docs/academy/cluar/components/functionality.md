---
sidebar_position: 7
id: functionality
title: Functionality
sidebar_label: Functionality
---

The concrete functionalities available to include on a page, such as forms and maps.

## Introduction

**Functionality** is different from the other components: instead of visual variations of the same content, each type is a **concrete functionality** to include on the page — currently, a contact form or a map.

It follows the same mechanism common to all components, described in [Overview](/docs/academy/cluar/components/overview) and [Component Types](/docs/academy/cluar/components/types) — but here, when choosing the Type, you are choosing **which functionality** appears on the page, not just a different style.

## Fields

In addition to the [common fields](/docs/academy/cluar/components/overview#common-fields) (Type, Order, Edit Mode, Invert background, Actions), Functionality has:

| Field | Description |
|---|---|
| **Title** (`title`) | Block title. |
| **Content** (`content` / `html_content`) | Block text. |
| **Image** (`image`) | Associated image (not all types use it). |

## Available types

### Contact Form (`ContactForm`)

Displays a contact form (name, email, message), protected by reCAPTCHA. When submitted, it sends the data to the `contact` service on the server, which saves it to the `contact` entity (visible in the backoffice) and allows you to configure email alerts.

### Contact Map (`ContactMap`)

Displays an interactive map using [Mapbox](https://www.mapbox.com/). It uses the `settings.cluar.website.mapbox` configuration (see [Configuration](/docs/academy/cluar/configuration)) — namely the `accessToken` (required for the map to work) and the `dark` option (light or dark map theme).

## Next step

With the 5 components explored, proceed to [Actions](/docs/academy/cluar/actions), which can be associated with most of them.