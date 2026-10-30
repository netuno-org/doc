---
sidebar_position: 8
id: actions
title: Actions
sidebar_label: Actions
---

How to create and reuse CTAs (buttons/links) associated with components.

## Introduction

An **Action** is essentially a reusable **CTA** (call-to-action) — a button/link with a title, text, image, and destination (`link`) — that can be associated with [Components](/docs/academy/cluar/components/overview) such as Banner, Content, Listing, Slider (in its items), and Feature.

## Fields

| Field | Description |
|---|---|
| **Title** (`title`) | Action title, rendered as a heading (`<h4>`). |
| **Content** (`content`) | Descriptive text of the action, rendered as a paragraph (`<p>`). |
| **Indication** (`indication`) | The text of the link/CTA itself — this is what appears written **inside** the clickable button (e.g., "Learn more", "Buy now"). |
| **Image** (`image`) | Image associated with the action (e.g., icon). |
| **Link** (`link`) | Destination of the action (URL) — where the CTA leads when clicked. |
| **Language** (`language_id`) | Language to which this action belongs. |
| **Parameter** (`parameter_id`) | Groups this action with its equivalents in other languages — see below. |

## Parameter

The **Parameter** (`action_parameter`, with only `code` and `description`) is a grouping mechanism: several Actions — each in its own language, but representing the **same functionality/destination** — share the same Parameter.

This is used when [cloning a page](/docs/academy/cluar/pages/cloning) to another language: for each Action associated with a component of the original page, CLUAR searches among the existing Actions for one that has the **same Parameter** and is in the **target language** of the cloning. If it finds one, it automatically associates that Action (the already translated version) with the cloned component — without needing to add it manually afterward.

:::info You must create the Action in the target language first
Automatic association only works if an Action with the same Parameter already exists in the language you are cloning to. If it does not exist yet, the action is simply not associated with the cloned component — it remains as if it had not been defined. In other words, the Parameter does not translate or create the Action automatically; it only links equivalent Actions that already exist, once they have been created in each language.
:::

For example: a "Learn more" Action with Parameter `learn-more` in Portuguese, and another "Learn more" Action with the same Parameter `learn-more` in English — when cloning a page from Portuguese to English, a Banner that had the first Action associated with it automatically gets the second one.

## Next step

Explore the [Settings](/docs/academy/cluar/settings).