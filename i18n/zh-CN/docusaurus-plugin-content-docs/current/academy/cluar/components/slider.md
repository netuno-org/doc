---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

轮播组件，用于展示一系列精选条目。

## 简介

**Slider** 以轮播形式展示一系列条目——每一条都包含背景图片、标题、文本，以及可选的自身操作。它通过 [Keen Slider](https://keen-slider.io/) 库渲染。

它遵循所有组件通用的机制，详见 [概览](/docs/academy/cluar/components/overview) 和 [组件类型](/docs/academy/cluar/components/types)。

## Slider 字段

除了[通用字段](/docs/academy/cluar/components/overview#通用字段)（类型、顺序、编辑模式、反转背景）之外，Slider 还有：

| 字段 | 描述 |
|---|---|
| **标题** (`title`) | Slider 区块的标题。 |
| **内容** (`content` / `html_content`) | 区块的介绍文本。 |
| **图片** (`image`) | 与 Slider 本身关联的图片（而非与条目关联）。 |
| **图片替代文本** (`image_alt`) | 图片的替代文本。 |
| **图片标题** (`image_title`) | 图片的 `title` 属性。 |

## 条目

每个条目都属于一个 Slider（`page_slider_id`），并且是轮播中的一个“幻灯片”：

| 字段 | 描述 |
|---|---|
| **标题** (`title`) | 幻灯片的标题。 |
| **内容** (`content` / `html_content`) | 幻灯片的文本。 |
| **图片** (`image`) | 幻灯片的背景图片。 |
| **图片替代文本** (`image_alt`) | 图片的替代文本。 |
| **图片标题** (`image_title`) | 图片的 `title` 属性。 |
| **顺序** (`sorter`) | 幻灯片在轮播中的位置。 |
| **操作** | 每个条目都可以关联自己的操作——参见 [操作](/docs/academy/cluar/actions)。 |

:::info 与列表的区别
与列表条目不同，Slider 条目**拥有自己的操作**，并且是逐个关联的（`page_slider_item_action`）——每张幻灯片都可以有自己的按钮/链接。
:::

## 渲染结构

与列表一样，Slider 的 `Item` 位于类型文件夹的**内部**，而不是作为同级文件夹：

```
website/src/components/Slider/
├── index.jsx              # 路由器：选择 slider 类型
└── Default/
    ├── index.jsx           # slider 布局，使用 <Item /> 组装轮播
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # 每张幻灯片，包括其自身的操作
```

## 可用类型

目前只有 **默认** (`Default`) 类型。要创建新的 Slider 类型（带有自己的 `Item`），请遵循 [组件类型](/docs/academy/cluar/components/types) 中描述的相同流程，并记得在新类型中包含 `Item/` 子文件夹。

## 下一步

继续阅读 [功能](/docs/academy/cluar/components/functionality)。