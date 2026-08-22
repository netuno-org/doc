---
sidebar_position: 9
id: settings
title: Settings
sidebar_label: Settings
---

## Introduction

**Settings** is a key/value parameter system, managed by the content editor in the backoffice — designed for website values that change frequently or vary by language (e.g., phone number, address, social media links, a logo image), without needing to touch code.

It involves three forms in the backoffice:

- **Type** (`configuration_parameter_type`)
- **Parameter** (`configuration_parameter`)
- **Configuration** (`configuration`)

## Type

Defines what kind of value a Parameter accepts. It only has **Code** (`code`) and **Name** (`name`). These come pre-created by default:

| Code | Name |
|---|---|
| `boolean` | Boolean |
| `number` | Number |
| `image` | Image |
| `color` | Color |
| `text` | Text |
| `html` | HTML |

## Parameter

Defines a configuration "key" — **Code** (`code`, used in the code to fetch the value), **Description** and the **Type** (which of the types above). E.g.: a `phone-number` parameter, of type Text.

## Configuration

This is the **value** of a Parameter, for a given **Language** — **Value** (`value`, text) or **Image** (`value_img`), depending on the parameter's type.

### Values without a language (generic fallback)

If a Configuration's **Language** field is left blank, that value is used as a **fallback for all languages** that don't have their own value set for that parameter. This avoids having to duplicate the same value (e.g., a phone number that's the same across all languages) separately for each language — it's set once, with no language attached, and a language-specific value is only set where it's actually different.

## Programmatically

The `website/src/common/Cluar.js` class provides functions to read settings:

- `Cluar.configuration(parameter)` — gets a parameter's value in the current language; if there's no value for that language, it uses the value without a language (fallback); if neither exists, it returns the parameter's own name (useful to quickly notice a missing setting).
- `Cluar.configurationNumber(parameter)` — same, but converts the value to a number (0 if it's not numeric).
- `Cluar.configurationMultilines(parameter)` — same, but converts line breaks into `<br>`.

## Next step

Explore [Dictionaries](/docs/academy/cluar/dictionaries).