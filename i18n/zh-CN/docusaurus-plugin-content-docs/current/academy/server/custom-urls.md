---
id: custom-urls
title: 自定义 URL
sidebar_label: 自定义 URL
---

## 简介

Netuno 允许更改默认地址，例如：

- 管理界面的地址，`admin`。
- 公共文件（如图片、CSS 和 JS）的地址，`public`。
- REST API 服务的地址，`services`。

## 配置

在正在开发的应用程序中，导航到环境配置文件。在本示例中，我们将使用位于以下位置的开发环境文件：

- 📂 `config/_development.json`

检查是否尚不存在 URL 配置；如果不存在，请在配置文件末尾（JSON 格式）添加 URL 配置参数，例如：

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

定义管理界面 URL 地址的前缀，默认仅为 `/`。

### public

定义公共静态文件（如图片、CSS 样式和 JavaScript 代码）的 URL 地址前缀，默认是 `/public`。

### services

定义 REST API Web 服务的初始 URL 地址，默认是 `/services`。

## 结论

自定义 URL 很重要，既可以使其更直观，也可以使其更复杂并提高安全性。

例如，可以在管理地址中放置一个由随机字符序列组成的前缀，这样只有记住该前缀的人才能访问该地址，从而增加访问难度并避免攻击。