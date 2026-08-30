---
sidebar_position: 8
id: actions
title: Actions
sidebar_label: Actions
---

How to create and reuse CTAs (buttons/links) associated with components.

## Introduction

An **Action** is, at its core, a reusable **CTA** (call-to-action) — a button/link with title, text, image and a destination (`link`) — that can be associated with [Components](/docs/academy/cluar/components/overview) such as Banner, Content, Listing, Slider (on its items) and Functionality.

## Fields

| Field | Description |
|---|---|
| **Title** (`title`) | The action's title, rendered as a heading (`<h4>`). |
| **Content** (`content`) | The action's descriptive text, rendered as a paragraph (`<p>`). |
| **Indication** (`indication`) | The text of the link/CTA itself — it's what shows up written **inside** the clickable button (e.g., "Learn more", "Buy now"). |
| **Image** (`image`) | Image associated with the action (e.g., an icon). |
| **Link** (`link`) | The action's destination (URL) — where the CTA leads when clicked. |
| **Language** (`language_id`) | The language this action belongs to. |
| **Parameter** (`parameter_id`) | Groups this action with its equivalents in other languages — see below. |

## Parameter

The **Parameter** (`action_parameter`, with only `code` and `description`) is a grouping mechanism: several Actions — each in its own language, but representing the **same functionality/destination** — share the same Parameter.

This is used when [cloning a page](/docs/academy/cluar/pages/cloning) to another language: for each Action associated with a component on the original page, CLUAR looks, among the existing Actions, for one that has the **same Parameter** and is in the cloning's **target language**. If it finds one, it automatically associates that Action (the already-translated version) with the cloned component — without needing to add it manually afterwards.

:::info The Action needs to be created in the target language first
The automatic association only works if an Action with the same Parameter already exists in the language being cloned to. If it doesn't exist yet, the action simply isn't associated with the cloned component — it's as if it hadn't been set at all. In other words, the Parameter doesn't translate or automatically create the Action; it only links existing equivalent Actions, once they've been created in each language.
:::

For example: an Action "Saiba mais" with the `learn-more` Parameter, in Portuguese, and another Action "Learn more" with the same `learn-more` Parameter, in English — when cloning a page from Portuguese to English, a Banner that had the first Action associated automatically gets the second one instead.

## Next step

Explore [Settings](/docs/academy/cluar/settings).