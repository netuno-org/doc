---
sidebar_position: 10
id: translations
title: Translations
sidebar_label: Translations
---

How to translate the fixed interface texts of the website.

## Introduction

**Translations** is the system for translating fixed interface texts of the website — labels, messages, button texts — things that are not page content, but text "embedded" in code, and that still needs to exist in each language.

It involves two forms in the backoffice:

- **Entry** (`translation_entry`)
- **Translation** (`translation`)

## Entry

Defines a translation "key" — **Code** (`code`, used in code to fetch the value) and **Description**. E.g.: an entry `contact-form-success`, used for the contact form success message (it is exactly this one that appears in the [`ContactForm`](/docs/academy/cluar/components/functionality) of the Feature).

## Translation

It is the **translated value** of an Entry, for a given **Language** (`language_id`) — field **Value** (`value`, accepts HTML).

:::info No generic value/no language
Unlike [Settings](/docs/academy/cluar/settings), the Translations system **does not have** a language-less fallback mechanism — each Entry needs an explicitly defined Value for each language in which it is used. If the translation is missing in a language, the text that appears is the Entry code itself (e.g.: `contact-form-success`), not a generic value.
:::

## Programmatically

The `website/src/common/Cluar.js` class provides functions to read translation entries, all returning the entry code as the result if there is no translation (useful for noticing missing translations):

- `Cluar.translation(entry)` — gets the translated value in the current language, as it was saved (may include HTML).
- `Cluar.plainTranslation(entry)` — same, but removes `<p>` and `<br>` tags. It is the most used in interface labels (buttons, form fields, notifications).
- `Cluar.plainTitle(entry)` — same, but removes only `<p>` tags.
- `Cluar.plainHTML(entry)` — removes all HTML tags.
- `Cluar.translationNoParagraph(entry)` — removes only `<p>` tags (equivalent to `plainTitle`).

## Next step

Explore the [Templates](/docs/academy/cluar/templates).