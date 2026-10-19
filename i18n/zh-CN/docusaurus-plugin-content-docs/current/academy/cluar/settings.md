---
sidebar_position: 9
id: settings
title: 配置
sidebar_label: 配置
---

由内容编辑器管理、无需编写代码的键/值参数系统。

## 简介

**配置** 是一个键/值参数系统，由后台的内容编辑器管理——专为网站中经常变化或随语言而不同的值而设计（例如：电话号码、地址、社交媒体链接、一张徽标图片），无需改动代码。

它涉及后台中的三个表单：

- **类型**（`configuration_parameter_type`）
- **参数**（`configuration_parameter`）
- **配置**（`configuration`）

## 类型

定义某个参数接受何种类型的值。它只有 **代码**（`code`）和 **名称**（`name`）。以下类型已默认创建：

| 代码 | 名称 |
|---|---|
| `boolean` | 布尔值 |
| `number` | 数字 |
| `image` | 图片 |
| `color` | 颜色 |
| `text` | 文本 |
| `html` | HTML |

## 参数

定义一个配置“键”——**代码**（`code`，在代码中用于获取该值）、**描述** 以及 **类型**（即上述哪种类型）。例如：一个 `phone-number` 参数，类型为文本。

## 配置

是某个参数在特定 **语言** 下的 **值**——**值**（`value`，文本）或 **图片**（`value_img`），取决于该参数的类型。

### 无语言的值（通用回退）

如果某个配置的 **语言** 字段留空，该值就会作为 **所有未针对该参数定义自身值的语言的回退值**。这样就避免了在每种语言中分别重复相同的值（例如：在所有语言中都相同的电话号码）——只需定义一次，不关联任何语言，仅在确实不同的地方为特定语言定义具体值。

## 通过代码

`website/src/common/Cluar.js` 类提供了读取配置的函数：

- `Cluar.configuration(parametro)` — 获取某个参数在当前语言下的值；如果该语言没有值，则使用无语言的值（回退）；如果两者都不存在，则返回参数本身的名称（便于快速发现缺失的配置）。
- `Cluar.configurationNumber(parametro)` — 同上，但会将值转换为数字（如果不是数字则为 0）。
- `Cluar.configurationMultilines(parametro)` — 同上，但会将换行符转换为 `<br>`。

## 下一步

探索 [字典](/docs/academy/cluar/dictionaries)。