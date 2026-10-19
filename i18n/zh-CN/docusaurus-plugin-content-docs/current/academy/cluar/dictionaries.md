---
sidebar_position: 10
id: dictionaries
title: 字典
sidebar_label: 字典
---

如何翻译网站界面中的固定文本。

## 简介

**字典** 是网站界面固定文本的翻译系统 —— 标签、消息、按钮文本 —— 这些不是页面内容，而是"内嵌"在代码中的文本，但仍然需要以每种语言存在。

涉及后台中的两个表单：

- **条目**（`dictionary_entry`）
- **字典**（`dictionary`）

## 条目

定义一个翻译"键" —— **代码**（`code`，在代码中用来获取值）和**描述**。例如一个条目 `联系表单成功`，用于联系表单的成功消息（正是该条目出现在功能的 [`ContactForm`](/docs/academy/cluar/components/functionality) 中）。

## 字典

是一个条目针对某个特定**语言**（`language_id`）的**翻译值** —— **值**字段（`value`，接受 HTML）。

:::info 没有通用值/没有语言
与[配置](/docs/academy/cluar/settings)不同，字典**没有**无语言的回退机制 —— 每个条目都需要为使用它的每种语言显式定义一个值。如果某种语言缺少翻译，显示的文本就是条目自身的代码（例如 `联系表单成功`），而不是通用值。
:::

## 通过代码

类 `website/src/common/Cluar.js` 提供了读取字典条目的函数，如果没有翻译，它们都会返回条目代码作为结果（有助于发现缺失的翻译）：

- `Cluar.dictionary(条目)` —— 获取当前语言中的翻译值，与保存时的样子一致（可能包含 HTML）。
- `Cluar.plainDictionary(条目)` —— 相同，但会移除 `<p>` 和 `<br>` 标签。这是界面标签（按钮、表单字段、通知）中最常用的。
- `Cluar.plainTitle(条目)` —— 相同，但只移除 `<p>` 标签。
- `Cluar.plainHTML(条目)` —— 移除所有 HTML 标签。
- `Cluar.dictionaryNoParagraph(条目)` —— 只移除 `<p>` 标签（等同于 `plainTitle`）。

## 下一步

探索[模板](/docs/academy/cluar/templates)。