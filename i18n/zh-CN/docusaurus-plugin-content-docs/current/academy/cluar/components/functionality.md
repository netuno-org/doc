---
sidebar_position: 7
id: functionality
title: 功能
sidebar_label: 功能
---

可包含在页面中的具体功能，例如表单和地图。

## 简介

**功能**组件不同于其他组件：它不是同一内容的不同视觉变体，每个类型都是一个要包含在页面中的**具体功能**——目前包括联系表单或地图。

它遵循所有组件通用的同一机制，详见[概览](/docs/academy/cluar/components/overview)和[组件类型](/docs/academy/cluar/components/types)——但在这里，选择类型时，是在选择页面上显示**哪个功能**，而不仅仅是一种不同的样式。

## 字段

除了[常用字段](/docs/academy/cluar/components/overview#通用字段)（类型、顺序、编辑模式、反转背景、操作）之外，功能组件还有：

| 字段 | 描述 |
|---|---|
| **标题** (`title`) | 块的标题。 |
| **内容** (`content` / `html_content`) | 块的文本。 |
| **图片** (`image`) | 关联图片（并非所有类型都使用）。 |

## 可用类型

### 联系表单（`ContactForm`）

显示一个联系表单（姓名、电子邮件、消息），并由 reCAPTCHA 保护。提交后，会将数据发送到服务器上的 `contact` 服务，该服务会保存到 `contact` 实体（可在后台管理中查看），并允许配置电子邮件提醒。

### 联系地图（`ContactMap`）

显示一个交互式地图，使用 [Mapbox](https://www.mapbox.com/)。使用配置 `settings.cluar.website.mapbox`（见[配置](/docs/academy/cluar/configuration)）——特别是 `accessToken`（地图正常工作所必需）和 `dark` 选项（地图的浅色或深色主题）。

## 下一步

了解完这 5 个组件后，继续前往[操作](/docs/academy/cluar/actions)，这些操作可以关联到大多数组件。