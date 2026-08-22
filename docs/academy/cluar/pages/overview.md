---
sidebar_position: 1
id: overview
title: Overview
sidebar_label: Overview
---

## Introduction

A **Page** is CLUAR's central entity: it represents a website URL. Each page belongs to a single language — there's no single "multilingual" page; each language has its own page (with its own `link`, title, content, etc.), and they are only linked to each other through the [cloning](/docs/academy/cluar/pages/cloning) action.

## Fields

| Field | Description |
|---|---|
| **Title** (`title`) | The page's title. |
| **Link** (`link`) | The page's URL (e.g.: `/about-us`). |
| **Language** (`language_id`) | The language this page belongs to. |
| **Parent** (`parent_id`) | Parent page, used to build hierarchy/breadcrumbs and submenus. |
| **Template** (`template`) | Template used to render the page (see [Templates](/docs/academy/cluar/templates)). It's a select in the form, dynamically populated with the folders that exist in `website/src/pages/Template/`. |
| **Status** (`status_id`) | Draft or Published — reflects the state of the current version. |
| **Menu** (`menu`) | If checked, the page appears in the navigation menu. |
| **Menu Title** (`menu_title`) | Alternative title shown in the menu (if empty, uses the page's Title). |
| **Navigable** (`navigable`) | Controls whether the page is directly accessible (even without appearing in the menu). |
| **Order** (`sorter`) | The page's position among its "siblings" (same `parent_id`). |
| **Description** / **Keywords** | SEO meta tags (`<meta name="description">` / `<meta name="keywords">`). |
| **Social Media Description** / **Social Media Image** | Used in the Open Graph tags (`og:description`, `og:image`) when the page is shared. |

## Next step

Each page has several versions and goes through a publishing flow — see [Versions and Publishing](/docs/academy/cluar/pages/versions-publishing).