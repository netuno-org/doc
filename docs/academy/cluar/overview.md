---
sidebar_position: 1
id: overview
title: Overview
sidebar_label: Overview
---

CLUAR is an open source CMS built on [Netuno](https://www.netuno.org/), for creating multilingual websites. The visual components of the pages (banners, listings, sliders, etc.) are developed in ReactJS, with [Ant Design](https://ant.design/) for the interface, [React Router](https://reactrouter.com/) for navigation and [Less](https://lesscss.org/) for styles — while the content (pages, texts, images, languages, menus) is managed through a backoffice, with no need to code.

The code is available in the [CLUAR repository on GitHub](https://github.com/netuno-org/cluar) — contributions are welcome.

## Content model

CLUAR content follows the **Page → Version → Components** structure:

- Each **Page** represents a website URL (`link`), with title, menu, SEO, etc.
- Each page has one or more **Versions**, which allow you to work on a draft without affecting what is already published.
- Within each version are the content **Components** — Banner, Content, Listing, Slider and Feature — which are the blocks that actually appear on the page, each with its own visual type and, optionally, associated actions (buttons/links).

## Project architecture

The project is divided into four parts:

- **`server`** — the Netuno application: data entities, REST services, and the initial setup scripts (`setup`).
- **`website`** — the ReactJS website that consumes data via REST and renders the pages.
- **`ui`** — CLUAR-specific extensions to the Netuno backoffice.
- **`config`** — environment configuration (database, authentication, general settings).

## Next steps

- [Installation](/docs/academy/cluar/install)
- [Configuration](/docs/academy/cluar/configuration)
- [Components](/docs/academy/cluar/components/overview)
- [Pages](/docs/academy/cluar/pages/overview)
- [Languages](/docs/academy/cluar/languages)
- [Permissions](/docs/academy/cluar/permissions)