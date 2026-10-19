---
sidebar_position: 1
id: overview
title: 概览
sidebar_label: 概览
---

**组件**是构成 [页面](/docs/academy/cluar/pages/overview) 的内容块，位于 [版本](/docs/academy/cluar/pages/versions-publishing) 之内。共有 5 种类型：

- **横幅**
- **内容**
- **列表**（含条目）
- **滑块**（含条目）
- **功能**

每一种都有自己的实体（`page_banner`、`page_content`、`page_listing`、`page_slider`、`page_functionality`），在后台管理系统中都有自己的表单，在网站上也有自己的 React 组件。

## 通用字段

尽管每个组件都有自己的专属字段，但大多数组件都共享一个相似的基础结构：

| 字段 | 描述 |
|---|---|
| **类型**（`type`） | 定义用于渲染该组件的视觉变体——见 [组件类型](/docs/academy/cluar/components/types)。 |
| **顺序**（`sorter`） | 组件在页面中的位置。 |
| **编辑模式**（`edit_mode`） | 定义内容（`content`）是纯文本还是 HTML（`html_content`）。 |
| **反转标题 / 内容的背景**（`title_invert_background`、`content_invert_background`） | 反转标题/内容文本**编辑器**的配色方案（浅色/深色）——在编写将置于深色背景之上的文本时很有用（例如横幅中的深色图片），以便在编辑时能看到具有对比度的文字。不会改变页面上已发布内容的颜色。 |
| **操作** | 与组件关联的按钮/链接——见 [操作](/docs/academy/cluar/actions)。并非所有类型都支持操作——见 [组件类型](/docs/academy/cluar/components/types)。 |

## 下一步

所有组件都使用相同的动态类型机制——见 [组件类型](/docs/academy/cluar/components/types)。然后，详细了解每个组件：[横幅](/docs/academy/cluar/components/banner)、[内容](/docs/academy/cluar/components/content)、[列表](/docs/academy/cluar/components/listing)、[滑块](/docs/academy/cluar/components/slider)、[功能](/docs/academy/cluar/components/functionality)。