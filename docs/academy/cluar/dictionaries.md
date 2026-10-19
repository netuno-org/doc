---
sidebar_position: 10
id: dictionaries
title: Dictionaries
sidebar_label: Dictionaries
---

How to translate the fixed interface texts of the website.

## Introduction

**Dictionaries** is the system for translating fixed interface texts of the website — labels, messages, button texts — things that are not page content, but text "embedded" in code, and that still needs to exist in each language.

It involves two forms in the backoffice:

- **Entry** (`dictionary_entry`)
- **Dictionary** (`dictionary`)

## Entry

Defines a translation "key" — **Code** (`code`, used in code to fetch the value) and **Description**. E.g.: an entry `contact-form-success`, used for the contact form success message (it is exactly this one that appears in the [`ContactForm`](/docs/academy/cluar/components/functionality) of the Feature).

## Dictionary

It is the **translated value** of an Entry, for a given **Language** (`language_id`) — field **Value** (`value`, accepts HTML).

:::info No generic value/no language
Unlike [Settings](/docs/academy/cluar/settings), the Dictionary **does not have** a language-less fallback mechanism — each Entry needs an explicitly defined Value for each language in which it is used. If the translation is missing in a language, the text that appears is the Entry code itself (e.g.: `contact-form-success`), not a generic value.
:::

## Programmatically

The `website/src/common/Cluar.js` class provides functions to read dictionary entries, all returning the entry code as the result if there is no translation (useful for noticing missing translations):

- `Cluar.dictionary(entry)` — gets the translated value in the current language, as it was saved (may include HTML).
- `Cluar.plainDictionary(entry)` — same, but removes `<p>` and `<br>` tags. It is the most used in interface labels (buttons, form fields, notifications).
- `Cluar.plainTitle(entry)` — same, but removes only `<p>` tags.
- `Cluar.plainHTML(entry)` — removes all HTML tags.
- `Cluar.dictionaryNoParagraph(entry)` — removes only `<p>` tags (equivalent to `plainTitle`).

## Next step

Explore the [Templates](/docs/academy/cluar/templates).