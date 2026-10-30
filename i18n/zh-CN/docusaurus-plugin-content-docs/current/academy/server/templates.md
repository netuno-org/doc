---
id: templates
title: 模板
sidebar_label: 模板
---

## 开始之前
在创建调用模板的服务之前，请确保您知道如何创建 **REST Web 服务**；如果还不知道，请访问以下链接：

* [REST Web 服务](/docs/academy/server/services/rest)

还建议在开始本教程之前，确保您具备 _**JavaScript**_ 基础知识。

## 在服务中使用模板

本教程将介绍如何创建模板，以及在服务中调用模板所需的操作。

在 Netuno 中创建服务时，您可以选择访问自己创建的模板，也就是说，可以根据结果将服务重定向到带有数据的 HTML 模板。

在本示例中，我们将创建一个基本的 HTML 模板，并将服务中的数据传递给该模板。

## 创建模板

![模板1.png](/docs/assets/templates1.png)

进入上述目录后，我们将创建一个 `.html` 文件，在本示例中将其命名为 `模板.html`。

该页面的内容如下：

```html
<!-- 调用 Netuno 的页头 -->
_{include=_|includes/head}

<!-- 定义样式 -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- HTML 正文开始 -->
<h1>模板标题</h1>

<!-- 当需要将服务中的数据传递给模板时，请使用 _{&变量} -->
<p>你好，我是 <b>_{&data=名称}</b>，正在从服务接收 <b>_{&data=数据}</b>！</p>

<!-- HTML 正文结束 -->

<!-- 调用 Netuno 的页脚 -->
_{include=_|includes/foot}
```

最后，使用以下函数创建调用模板的服务：

`_template.output('模板名称', 变量(可选));`

以下是服务 `服务.js` 的示例：

```javascript
// 初始化 '数据' 对象，使其能够接收数据
var 数据 = _val.init()
    
// 为 '数据' 对象关联值
    .set("名称", "模板")
    .set("数据", "数据")

// 此函数用于调用模板
_template.output("模板", 数据);
```

> 如果您的模板位于子目录中，请在函数中指明：`_template.output('目录/模板名称')`

最后，只需在浏览器中调用该服务，就会出现类似以下内容：

![模板2.png](/docs/assets/templates2.png)

> 请注意，根据浏览器的不同，上面显示的结果可能会有所差异。

如果您有任何问题，请随时通过页面末尾提供的方式联系我们。

祝开发顺利！