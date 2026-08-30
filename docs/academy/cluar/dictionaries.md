---
sidebar_position: 10
id: dictionaries
title: Dictionaries
sidebar_label: Dictionaries
---

How to translate the website interface's fixed text.

## Introduction

**Dictionaries** is the system for translating the website interface's fixed text — labels, messages, button text — things that aren't page content, but text "embedded" in the code, and which still needs to exist in every language.

It involves two forms in the backoffice:

- **Entry** (`dictionary_entry`)
- **Dictionary** (`dictionary`)

## Entry

Defines a translation "key" — **Code** (`code`, used in the code to fetch the value) and **Description**. E.g.: an entry `contact-form-success`, used for the contact form's success message (it's exactly this one that shows up in the Functionality's [`ContactForm`](/docs/academy/cluar/components/functionality)).

## Dictionary

This is the **translated value** of an Entry, for a given **Language** (`language_id`) — **Value** field (`value`, accepts HTML).

:::info No generic/languageless value
Unlike [Settings](/docs/academy/cluar/settings), Dictionary **doesn't have** a languageless fallback mechanism — each Entry needs a Value explicitly set for every language it's used in. If a translation is missing for a language, the text that shows up is the Entry's own code (e.g., `contact-form-success`), not a generic value.
:::

## Programmatically

The `website/src/common/Cluar.js` class provides functions to read dictionary entries, all of them returning the entry's code as the result if there's no translation (useful to notice missing translations):

- `Cluar.dictionary(entry)` — gets the translated value in the current language, exactly as it was saved (may include HTML).
- `Cluar.plainDictionary(entry)` — same, but removes `<p>` and `<br>` tags. It's the most commonly used for interface labels (buttons, form fields, notifications).
- `Cluar.plainTitle(entry)` — same, but only removes `<p>` tags.
- `Cluar.plainHTML(entry)` — removes all HTML tags.
- `Cluar.dictionaryNoParagraph(entry)` — removes only `<p>` tags (equivalent to `plainTitle`).

## Next step

Explore [Templates](/docs/academy/cluar/templates).