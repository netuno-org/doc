---
id: generate-uid-guid
title: 生成唯一 ID（UID/GUID）
sidebar_label: 生成唯一 ID（UID/GUID）
---

## 开始之前

在继续之前，请确保您已经知道如何创建 **REST Web 服务**，如果还不会，请访问以下链接：

* [REST Web 服务](/docs/academy/server/services/rest)

同时建议在开始本教程之前，确保您具备 _**JavaScript**_ 的基础知识。

## 什么是 UID

UID（_unique identifier_，唯一标识符），顾名思义，就是整个应用程序中唯一的字符串。它也被称为 GUID（_global unique identifier_，全局唯一标识符）。

为了演示 UID 的生成，我们将创建一个服务。

## 生成 UID

现在我们来演示如何生成一个随机 UID，这非常简单，因为 Netuno 已经内置了一个专门为此目的而创建的函数：

```javascript
_out.println(
  _uid.generate()
)
```

> 请注意，`_out.println()` 函数只是为了让您在浏览器中调用该服务时能够在屏幕上看到结果

如果您有任何疑问，请随时通过页面末尾提供的方式与我们联系。

祝您开发顺利！