---
sidebar_position: 5
id: listing
title: 列表
sidebar_label: 列表
---

如何呈现一系列相关项目——产品、服务、新闻等等。

## 介绍

**列表**用于呈现一系列相关项目——产品、服务、参考资料、新闻等等。每个列表都有自己的标题/介绍内容，并归集多个**项目**，这些项目在后台单独管理（`Listagem > Item`）。

它遵循所有组件共通的机制，详见[概览](/docs/academy/cluar/components/overview)和[组件类型](/docs/academy/cluar/components/types)。

## 列表字段

除了[通用字段](/docs/academy/cluar/components/overview#通用字段)（类型、排序、编辑模式、反转背景、操作）之外，列表还有：

| 字段 | 描述 |
|---|---|
| **标题**（`title`） | 列表的标题。 |
| **内容**（`content` / `html_content`） | 列表的介绍文本。 |
| **图片**（`image`） | 与列表本身（而非项目）关联的图片。 |
| **图片替代文本**（`image_alt`） | 图片的替代文本。 |
| **图片标题**（`image_title`） | 图片的 `title` 属性。 |

## 项目

每个项目都属于一个列表（`page_listing_id`），并拥有自己的字段：

| 字段 | 描述 |
|---|---|
| **标题**（`title`） | 项目的标题。 |
| **内容**（`content` / `html_content`） | 项目的文本。 |
| **图片**（`image`） | 项目的图片。 |
| **URL**（`link`） | 项目的链接——用户点击后前往的位置。 |
| **排序**（`sorter`） | 项目在列表内的位置。 |

请注意，项目**没有自己的类型字段**——它继承所属列表的类型：列表的 React 组件在渲染每个项目时会把自身的 `type` 传递给它。

## 渲染结构

与横幅和内容不同——在那里每个类型都是组件内的一个独立文件夹——在列表中，渲染项目的组件（`Item`）位于类型文件夹**内部**：

```
website/src/components/Listing/
├── index.jsx              # 路由器：选择列表类型
└── Default/
    ├── index.jsx           # 列表布局，渲染 <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # 该类型下每个项目如何渲染
```

这样做是合理的，因为项目的呈现方式（网格、列表、卡片……）通常直接取决于列表的布局——因此每个类型的 `Item` 可以随类型本身一起定制，而不是一个被所有类型共享的通用组件。

## 可用类型

目前只有**标准**类型（`Default`）。要创建新的列表类型（带有自己的 `Item`），请按照[组件类型](/docs/academy/cluar/components/types)中描述的相同流程操作，记得在新类型中包含 `Item/` 子文件夹。

## 下一步

继续阅读[滑块](/docs/academy/cluar/components/slider)。