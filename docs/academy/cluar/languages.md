---
sidebar_position: 5
id: languages
title: Languages
sidebar_label: Languages
---

How CLUAR manages the website's languages and multilingual content.

## Introduction

CLUAR is multilingual by default: each **Page** is associated with a language, and the website shows a selector for visitors to switch between the available languages.

Languages are managed in the backoffice, through the **Language** form.

## Fields

| Field | Description |
|---|---|
| **Code** (`code`) | International language code (e.g.: `PT`, `EN`). This is the value used to associate content (pages, dictionary, settings) with this language. |
| **Locale** (`locale`) | Full locale (e.g.: `pt`, `en`). This is the value used in page links and when switching languages by code. |
| **Default** (`default`) | Marks this language as the website's preferred one — it's the one loaded by default. |
| **Description** (`description`) | The language name shown to the visitor (e.g.: "English"). |

## Language selection on the website

There are currently two language selectors in the project:

- **Public site Header** (`website/src/base/Header`) — the traditional selector, built with [Ant Design's Menu](https://ant.design/components/menu/). Switching language navigates to `/{locale}/`. It only lists languages that already have published pages (via `Cluar.pages()`), so it doesn't show empty options.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — used inside the Reserved Area (`ReservedArea`). It's a simpler dropdown: it switches the active language and reloads the current page, without navigating to another route.

## Programmatically

The `website/src/common/Cluar.js` class provides functions to work with languages:

- `Cluar.defaultLanguage()` — gets the language marked as default.
- `Cluar.currentLanguage()` — gets the currently active language.
- `Cluar.changeLanguage(codeOrLocale)` — activates another language programmatically (accepts either `code` or `locale`).
- `Cluar.languages()` — gets the list of all languages.

## Next step

Explore how content in each language is organized in [Pages](/docs/academy/cluar/pages/overview).