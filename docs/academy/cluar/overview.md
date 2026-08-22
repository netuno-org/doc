---
sidebar_position: 1
id: overview
title: Overview
sidebar_label: Overview
---

## Introduction

CLUAR is an open source CMS, built on top of [Netuno](https://www.netuno.org/), for building multilingual websites. The visual components of the pages (banners, listings, sliders, etc.) are developed in ReactJS, while the content — pages, text, images, languages, menus — is managed through a backoffice, with no need to code.

## Content model

CLUAR's content follows the **Page → Version → Components** structure:

- Each **Page** represents a URL on the site (`link`), with a title, menu, SEO, etc.
- Each page has one or more **Versions**, which allow working on a draft without affecting what is already published.
- Within each version come the content **Components** — Banner, Content, Listing, Slider and Functionality — which are the blocks that actually appear on the page, each with its own visual type and, optionally, associated actions (buttons/links).

## Project architecture

The project is divided into four parts:

- **`server`** — the Netuno application: data entities, REST services, and the initial setup scripts (`setup`).
- **`website`** — the ReactJS site that consumes the data via REST and renders the pages.
- **`ui`** — CLUAR-specific extensions to the Netuno backoffice.
- **`config`** — environment configuration (database, authentication, general settings).

## Next steps

- [Installation](/docs/academy/cluar/install)
- [Configuration](/docs/academy/cluar/configuration)
- [Components](/docs/academy/cluar/components/overview)
- [Pages](/docs/academy/cluar/pages/overview)
- [Languages](/docs/academy/cluar/languages)
- [Permissions](/docs/academy/cluar/permissions)