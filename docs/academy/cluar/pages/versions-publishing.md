---
sidebar_position: 2
id: versions-publishing
title: Versions and Publishing
sidebar_label: Versions and Publishing
---

## Versions

Each page has one or more **Versions** (`page_version`), each with its own state (Draft / Published). This allows you to edit a new version of the content without affecting what is published — only when the version is marked as Published does it become the active version of the page.

Content components (Banner, Content, Listing, Slider, Feature) always belong to a specific version (`page_version_id`), not to the page directly. That is, editing a component in a draft version does not affect what is published.

## Publishing

When publishing a page, CLUAR:

1. Collects all active components of the published version (banners, contents, listings, sliders, features, along with their respective actions).
2. Generates a structure file in JSON with that content.
3. In production, pre-renders a static `index.html` for the page URL (per language), already with the SEO and Open Graph meta tags filled in — important for sharing on social networks and for search engines, since the site itself is a React SPA.

## Next step

A common way to create a page is to duplicate an existing one — see [Clone Page](/docs/academy/cluar/pages/cloning).