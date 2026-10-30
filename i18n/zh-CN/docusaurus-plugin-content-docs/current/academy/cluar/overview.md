---
sidebar_position: 1
id: overview
title: 概述
sidebar_label: 概述
---

CLUAR 是一个基于 [Netuno](https://www.netuno.org/) 构建的开源 CMS，用于创建多语言网站。页面的视觉组件（横幅、列表、滑块等）使用 ReactJS 开发，界面使用 [Ant Design](https://ant.design/)，导航使用 [React Router](https://reactrouter.com/)，样式使用 [Less](https://lesscss.org/)——而内容（页面、文本、图片、语言、菜单）则通过后台管理进行管理，无需编程。

代码可在 [CLUAR 的 GitHub 仓库](https://github.com/netuno-org/cluar) 中获取——欢迎贡献。

## 内容模型

CLUAR 的内容遵循 **页面 → 版本 → 组件** 的结构：

- 每个**页面**代表站点的一个 URL（`link`），包含标题、菜单、SEO 等。
- 每个页面有一个或多个**版本**，允许在草稿中工作而不影响已发布的内容。
- 每个版本中包含内容**组件**——横幅、内容、列表、滑块和功能——这些是实际显示在页面上的区块，每个组件都有自己的视觉类型，并且可选地关联操作（按钮/链接）。

## 项目架构

项目分为四个部分：

- **`server`** — Netuno 应用：数据实体、REST 服务以及初始配置脚本（`setup`）。
- **`website`** — 使用 ReactJS 的站点，通过 REST 消费数据并渲染页面。
- **`ui`** — CLUAR 专用的 Netuno 后台管理扩展。
- **`config`** — 环境配置（数据库、认证、通用设置）。

## 后续步骤

- [安装](/docs/academy/cluar/install)
- [配置](/docs/academy/cluar/configuration)
- [组件](/docs/academy/cluar/components/overview)
- [页面](/docs/academy/cluar/pages/overview)
- [语言](/docs/academy/cluar/languages)
- [权限](/docs/academy/cluar/permissions)