---
sidebar_position: 3
id: cloning
title: Clone Page
sidebar_label: Clone Page
---

## What it is

Starting from an existing page, it's possible to create a new one through the **Clone** option. In the cloning form, you need to specify:

- **Title** and **Link** for the new page.
- **Source version** — which version of the original page the content will be copied from.
- **Language** — optionally different from the original page's language.
- Whether the new page should be **published** right away.

Upon confirming, CLUAR duplicates the entire component structure (Banner, Content, Listing, Slider, Functionality, with their respective actions) from that version into the new page.

## What it's for

This is, in practice, how a page's "translation" is created: instead of building a new page from scratch, you pick the page that already exists in another language, clone it to the new language, and then adjust the text. It's also useful for quickly creating similar pages within the same language (e.g., several campaign pages with the same structure).

:::info Content translation
Cloning duplicates the page's **structure** (the same components, in the same order), but it **doesn't translate the text** — each component's fields (Banner, Content, Listing, Slider, Functionality) keep the original content, and you need to go into each one and translate it manually. Automatic content translation on clone is already planned, but hasn't been developed yet.
:::

## Next step

Explore the content blocks that make up a page in [Components](/docs/academy/cluar/components/overview).