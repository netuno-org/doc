---
sidebar_position: 5
id: languages
title: Languages
sidebar_label: Languages
---

How CLUAR manages website languages and multilingual content.

## Introduction

CLUAR is multilingual by default: each **Page** is associated with a language, and the website presents a selector so visitors can switch between the available languages.

Languages are managed in the backoffice through the **Language** form.

## Fields

| Field | Description |
|---|---|
| **Code** (`code`) | International language code (e.g., `PT`, `EN`). This is the value used to associate content (pages, dictionary, settings) with this language. |
| **Locale** (`locale`) | Full locale (e.g., `pt`, `en`). This is the value used in page links and when changing language programmatically. |
| **Default** (`default`) | Marks this language as the website's preferred language — it is the one loaded by default. |
| **Description** (`description`) | Language name shown to the visitor (e.g., "Portuguese"). |

## Language selection on the website

There are currently two language selectors in the project:

- **Public site header** (`website/src/base/Header`) — the traditional selector, built with the [Ant Design Menu](https://ant.design/components/menu/). When changing language, it navigates to `/{locale}/`. It only lists languages that already have published pages (via `Cluar.pages()`), so it does not show empty options.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — used inside the Reserved Area (`ReservedArea`). It is a simpler dropdown: it changes the active language and reloads the current page, without navigating to another route.

## Programmatically

The `website/src/common/Cluar.js` class provides functions for working with languages:

- `Cluar.defaultLanguage()` — gets the language marked as default.
- `Cluar.currentLanguage()` — gets the currently active language.
- `Cluar.changeLanguage(codeOrLocale)` — activates another language programmatically (accepts both `code` and `locale`).
- `Cluar.languages()` — gets the list of all languages.

## Next step

Explore how content in each language is organized in [Pages](/docs/academy/cluar/pages/overview).