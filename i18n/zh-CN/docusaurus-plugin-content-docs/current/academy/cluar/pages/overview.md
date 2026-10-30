---
sidebar_position: 1
id: overview
title: 概述
sidebar_label: 概述
---

**页面**是 CLUAR 的核心实体：它表示网站的一个 URL。每个页面只属于一种语言——不存在一个单一的“多语言”页面，每种语言都有自己的页面（拥有自己的 `link`、标题、内容等），这些页面之间仅通过[克隆](/docs/academy/cluar/pages/cloning)操作相互关联。

每个页面都属于一个组织。页面可以有子页面，子页面默认属于父页面的组织。

## 字段

| 字段 | 描述 |
|---|---|
| **标题** (`title`) | 页面标题。 |
| **链接** (`link`) | 页面 URL（例如：`/关于我们`）。 |
| **语言** (`language_id`) | 此页面所属的语言。 |
| **父级** (`parent_id`) | 父页面，用于构建层级/面包屑导航和子菜单。 |
| **模板** (`template`) | 用于渲染页面的模板（参见[模板](/docs/academy/cluar/templates)）。它是表单中的一个下拉选择框，会动态填充 `website/src/pages/Template/` 中现有的文件夹。 |
| **状态** (`status_id`) | 草稿或已发布——反映当前版本的状态。 |
| **菜单** (`menu`) | 如果勾选，页面会显示在导航菜单中。 |
| **菜单标题** (`menu_title`) | 菜单中显示的替代标题（如果为空，则使用页面标题）。 |
| **可导航** (`navigable`) | 控制页面是否可直接访问（即使不出现在菜单中）。 |
| **排序** (`sorter`) | 页面在其“同级”页面中的位置（相同 `parent_id`）。 |
| **描述** / **关键词** | SEO 元标签（`<meta name="description">` / `<meta name="keywords">`）。 |
| **社交媒体描述** / **社交媒体图片** | 页面被分享时用于 Open Graph 标签（`og:description`、`og:image`）。 |

## 下一步

每个页面都有多个版本，并会经历发布流程——参见[版本与发布](/docs/academy/cluar/pages/versions-publishing)。