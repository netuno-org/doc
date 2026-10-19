---
sidebar_position: 4
id: content
title: 内容
sidebar_label: 内容
---

CLUAR 中最通用的文本和图片组件。

## 简介

**内容**是 CLUAR 中最通用的文本/图片组件——用于纯文本区块、文本旁带图片的区块，或仅一张图片的区块，具体取决于所选的类型。

它遵循所有组件共有的机制，详见[概览](/docs/academy/cluar/components/overview)和[组件类型](/docs/academy/cluar/components/types)。

## 字段

除了[常用字段](/docs/academy/cluar/components/overview#通用字段)（类型、顺序、编辑模式、反转背景、操作）之外，内容组件还有：

| 字段 | 描述 |
|---|---|
| **标题**（`title`） | 内容区块的标题。 |
| **内容**（`content` / `html_content`） | 区块的文本。 |
| **图片**（`image`） | 关联的图片（在纯文本类型中不使用）。 |
| **图片替代文本**（`image_alt`） | 图片的替代文本。 |
| **图片标题**（`image_title`） | 图片的 `title` 属性。 |
| **图片最大宽度**（`image_max_width`） | 限制图片的宽度，以像素为单位——用于避免图片在宽屏上被拉伸得过大，尤其是在图片位于文本旁边的类型中。 |

## 可用类型

与横幅不同，内容组件有多种专注于不同图片和文本布局的类型：

- **默认**（`Default`）
- **文本**（`TextContent`）——仅文本，无图片。
- **图片**（`ImageContent`）——仅图片，无文本。
- **图片在左侧**（`ImageLeft`）
- **图片在右侧**（`ImageRight`）
- **图片在顶部**（`ImageTop`）
- **图片在底部**（`ImageBottom`）

关于类型如何工作以及如何创建新类型的详细信息，请参阅[组件类型](/docs/academy/cluar/components/types)。

## 下一步

继续阅读[列表](/docs/academy/cluar/components/listing)。