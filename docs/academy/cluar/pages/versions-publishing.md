---
sidebar_position: 2
id: versions-publishing
title: Versions and Publishing
sidebar_label: Versions and Publishing
---

## Versions

Each page has one or more **Versions** (`page_version`), each with its own status (Draft / Published). This allows editing a new version of the content without affecting what's already published — it's only when the version is marked as Published that it becomes the page's active version.

Content components (Banner, Content, Listing, Slider, Functionality) always belong to a specific version (`page_version_id`), not to the page directly. This means editing a component in a draft version doesn't affect what's published.

## Publishing

When publishing a page, CLUAR:

1. Collects all active components from the published version (banners, content blocks, listings, sliders, functionalities, along with their respective actions).
2. Generates a JSON structure file with that content.
3. In production, pre-renders a static `index.html` for the page's URL (per language), already with the SEO and Open Graph meta tags filled in — important for social media sharing and search engines, since the site itself is a React SPA.

## Next step

A common way to create a page is by duplicating an existing one — see [Clone Page](/docs/academy/cluar/pages/cloning).