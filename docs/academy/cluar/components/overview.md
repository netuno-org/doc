---
sidebar_position: 1
id: overview
title: Overview
sidebar_label: Overview
---

## Introduction

**Components** are the content blocks that make up a [Page](/docs/academy/cluar/pages/overview), within a [Version](/docs/academy/cluar/pages/versions-publishing). There are 5 types:

- **Banner**
- **Content**
- **Listing** (with Items)
- **Slider** (with Items)
- **Functionality**

Each one has its own entity (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), its own form in the backoffice, and its own React component on the website.

## Common fields

Even though each component has its own fields, most of them share a similar base:

| Field | Description |
|---|---|
| **Type** (`type`) | Defines which visual variant is used to render this component — see [Component Types](/docs/academy/cluar/components/types). |
| **Order** (`sorter`) | The component's position within the page. |
| **Edit Mode** (`edit_mode`) | Defines whether the content (`content`) is plain text or HTML (`html_content`). |
| **Invert title / content background** (`title_invert_background`, `content_invert_background`) | Inverts the color scheme (light/dark) of the title/content text **editor** — useful when writing text that will sit over a dark background (e.g., a dark image in the banner), to see the text with contrast while editing. It doesn't change the color of the content once published on the page. |
| **Actions** | Buttons/links associated with the component — see [Actions](/docs/academy/cluar/actions). Not all types support actions — see [Component Types](/docs/academy/cluar/components/types). |

## Next step

Every component uses the same dynamic types mechanism — see [Component Types](/docs/academy/cluar/components/types). Then, explore each component in detail: [Banner](/docs/academy/cluar/components/banner), [Content](/docs/academy/cluar/components/content), [Listing](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Functionality](/docs/academy/cluar/components/functionality).