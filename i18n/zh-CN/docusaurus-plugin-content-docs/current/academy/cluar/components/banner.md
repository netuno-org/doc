---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

大尺寸的突出展示组件，通常用于页面顶部。

## 简介

**Banner** 是页面中最大的亮点——通常是一张占满整个宽度的图片，图片上方有突出的标题，并且可选地包含一段介绍性文字和操作（按钮/链接）。

它遵循所有组件通用的机制，详见[概述](/docs/academy/cluar/components/overview)和[组件类型](/docs/academy/cluar/components/types)。

## 字段

除了[公共字段](/docs/academy/cluar/components/overview#通用字段)（类型、顺序、编辑模式、反转背景、操作）之外，Banner 还具有：

| 字段 | 描述 |
|---|---|
| **标题**（`title`） | 图片上方突出的标题。 |
| **内容**（`content` / `html_content`） | 介绍性文字，位于标题下方。 |
| **图片**（`image`） | 横幅的背景图片。 |
| **图片 Alt**（`image_alt`） | 图片的替代文本，用于无障碍访问和 SEO。 |
| **图片标题**（`image_title`） | 图片的 `title` 属性。 |
| **X 位置** / **Y 位置**（`position_x`、`position_y`） | 以百分比调整背景图片的焦点（`background-position`）。 |

## 图片位置

**X 位置**和 **Y 位置**字段控制当横幅在不同分辨率下被调整大小时，背景图片的哪一部分始终保持可见——这与 CSS 中 `background-position` 的原理相同。

例如，`50%` / `50%` 会将焦点居中于图片中部：在任何分辨率下，图片的中心区域都保持可见，并根据需要裁切边缘。

## 可用类型

目前有三种 Banner 类型：

- **标准**（`Default`）——基础布局，包含标题、内容和操作。
- **次要**（`Secondary`）——外观与标准类型不同（在 CSS/LESS 中拥有自己的样式），但字段结构相同。
- **带亮点的标准**（`DefaultSubBanner`）——更为低调的变体，不支持操作（在 `config.json` 中为 `action: false`）。

关于类型如何工作以及如何创建新类型的详细信息，请参阅[组件类型](/docs/academy/cluar/components/types)。

## 下一步

继续阅读[内容](/docs/academy/cluar/components/content)。