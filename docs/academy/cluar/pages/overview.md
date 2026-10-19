---
sidebar_position: 1
id: overview
title: Overview
sidebar_label: Overview
---

The **Page** is the central entity of CLUAR: it represents a website URL. Each page belongs to a single language — there is no single "multilingual" page; each language has its own page (with its own `link`, title, content, etc.), and they are linked to each other only through the [cloning](/docs/academy/cluar/pages/cloning) action.

## Fields

| Field | Description |
|---|---|
| **Title** (`title`) | Page title. |
| **Link** (`link`) | The page URL (e.g., `/about-us`). |
| **Language** (`language_id`) | Language this page belongs to. |
| **Parent** (`parent_id`) | Parent page, used to build hierarchy/breadcrumbs and submenus. |
| **Template** (`template`) | Template used to render the page (see [Templates](/docs/academy/cluar/templates)). It is a select in the form, dynamically populated with the existing folders in `website/src/pages/Template/`. |
| **Status** (`status_id`) | Draft or Published — reflects the status of the current version. |
| **Menu** (`menu`) | If checked, the page appears in the navigation menu. |
| **Menu Title** (`menu_title`) | Alternative title to show in the menu (if empty, uses the page Title). |
| **Navigable** (`navigable`) | Controls whether the page is directly accessible (even without appearing in the menu). |
| **Order** (`sorter`) | Position of the page among its "siblings" (same `parent_id`). |
| **Description** / **Keywords** | SEO meta tags (`<meta name="description">` / `<meta name="keywords">`). |
| **Social Media Description** / **Social Media Image** | Used in Open Graph tags (`og:description`, `og:image`) when the page is shared. |

## Next step

Each page has several versions and goes through a publishing flow — see [Versions and Publishing](/docs/academy/cluar/pages/versions-publishing).