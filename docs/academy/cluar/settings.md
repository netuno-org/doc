---
sidebar_position: 9
id: settings
title: Settings
sidebar_label: Settings
---

The key/value parameter system managed by the content editor, without needing code.

## Introduction

**Settings** is a key/value parameter system, managed by the content editor in the backoffice — designed for website values that change frequently or vary by language (e.g.: phone number, address, social media links, a logo image), without having to touch code.

It involves three forms in the backoffice:

- **Type** (`configuration_parameter_type`)
- **Parameter** (`configuration_parameter`)
- **Configuration** (`configuration`)

## Type

Defines what kind of value a Parameter accepts. It only has **Code** (`code`) and **Name** (`name`). The following come pre-created by default:

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

It is the **value** of a Parameter, for a given **Language** — **Value** (`value`, text) or **Image** (`value_img`), depending on the parameter type.

### Values without language (generic fallback)

If the **Language** field of a Configuration is left blank, that value becomes the **fallback for all languages** that do not have their own value defined for that parameter. This avoids having to duplicate the same value (e.g.: a phone number that is the same in all languages) in each language separately — you define it once, without an associated language, and define a specific value per language only where it is actually different.

## Programmatically

The `website/src/common/Cluar.js` class provides functions to read configurations:

- `Cluar.configuration(parameter)` — gets the value of a parameter in the current language; if there is no value for that language, it uses the value without language (fallback); if neither exists, it returns the parameter name itself (useful to quickly notice a missing configuration).
- `Cluar.configurationNumber(parameter)` — same, but converts the value to a number (0 if it is not numeric).
- `Cluar.configurationMultilines(parameter)` — same, but converts line breaks into `<br>`.

## Next step

Explore the [Dictionaries](/docs/academy/cluar/dictionaries).