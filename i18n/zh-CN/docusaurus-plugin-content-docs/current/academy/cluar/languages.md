---
sidebar_position: 5
id: languages
title: 语言
sidebar_label: 语言
---

CLUAR 如何管理网站语言和多语言内容。

## 简介

CLUAR 默认即为多语言：每个**页面**都关联一种语言，网站会向访客提供语言选择器，以便在可用语言之间切换。

语言在后台中通过**语言**表单进行管理。

## 字段

| 字段 | 描述 |
|---|---|
| **代码**（`code`） | 语言的国际代码（例如：`PT`、`EN`）。该值用于将内容（页面、词典、配置）关联到此语言。 |
| **区域设置**（`locale`） | 完整的区域设置（例如：`pt`、`en`）。该值用于页面链接以及通过代码切换语言。 |
| **默认**（`default`） | 将此语言标记为网站的首选语言——默认加载的就是它。 |
| **描述**（`description`） | 展示给访客的语言名称（例如："葡萄牙语"）。 |

## 网站上的语言选择

目前项目中存在两个语言选择器：

- **公共站点页眉**（`website/src/base/Header`）——传统的选择器，使用 [Ant Design 的 Menu](https://ant.design/components/menu/) 实现。切换语言时，会导航到 `/{locale}/`。它只列出已有已发布页面的语言（通过 `Cluar.pages()`），以避免显示空白选项。
- **`LanguageSwitch`**（`website/src/components/LanguageSwitch`）——在保留区域（`ReservedArea`）内部使用。它是一个更简单的下拉菜单：切换当前活动语言并重新加载当前页面，而不会导航到其他路由。

## 通过代码操作

`website/src/common/Cluar.js` 类提供了用于处理语言的函数：

- `Cluar.defaultLanguage()` —— 获取被标记为默认的语言。
- `Cluar.currentLanguage()` —— 获取当前活动的语言。
- `Cluar.changeLanguage(codigoOuLocalizacao)` —— 以编程方式激活另一种语言（同时接受 `code` 和 `locale`）。
- `Cluar.languages()` —— 获取所有语言的列表。

## 下一步

了解每种语言的内容是如何在[页面](/docs/academy/cluar/pages/overview)中组织的。