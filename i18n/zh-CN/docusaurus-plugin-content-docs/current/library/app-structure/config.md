---
id: config
title: 配置
sidebar_label: 配置
---

应用程序的常规设置。

## 配置文件夹

应用程序的配置位于 `📂 config` 文件夹中，这里会进行应用程序和外部集成的通用参数设置。

Netuno 支持多种环境类型，默认使用 `development`（开发）和 `production`（生产）。

激活的环境在 Netuno 安装根目录下的 `config.js` 中定义：

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

可以使用任意名称来定义环境，但应用程序中的文件名（应用程序 `📂 config` 文件夹中的 `.json` 和 `.js` 文件）必须使用相同的环境名称。

默认情况下，此文件夹中包含以下文件：

## _development.js

JavaScript 代码注入，可通过编程逻辑对 `_development.json` 文件中定义的参数进行动态配置。例如，根据数据库中的信息定义某些配置、设置代码执行行为的参数等。

此文件会依据环境定义使用，例如当环境为 `development`（开发）时。

## _development.json

定义应用程序的参数，例如语言、资源和集成的通用配置。例如数据库配置、Cron Jobs、SMTP 或远程 API 集成、身份验证等。

此文件会依据环境定义使用，例如当环境为 `development`（开发）时。

## _production.js

JavaScript 代码注入允许通过编程逻辑对 `_production.js` 中定义的参数进行动态配置。例如，使用数据库中的信息定义配置、设置代码执行行为的参数等。

此文件会依据环境定义使用，例如当环境为 `production`（生产）时。

## _production.json

定义应用程序的参数，例如语言、资源和集成的通用配置。例如数据库配置、Cron Jobs、SMTP 或远程 API 集成、身份验证等。

此文件会依据环境定义使用，例如当环境为 `production`（生产）时。