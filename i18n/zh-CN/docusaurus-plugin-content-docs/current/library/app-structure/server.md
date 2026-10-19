---
id: server
title: 服务端
sidebar_label: 服务端
---

后端与 API 开发。

## 服务端文件夹

`📂 server` 文件夹包含一组构成应用后端的文件和文件夹。

`📂 server` 文件夹中的所有内容都会用于后端服务器处理，例如集成、API、数据库、安全和身份验证、Cron Jobs 等。

## 文件夹结构

`📂 server` 文件夹中具有以下结构：

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Actions

在 `📂 actions` 中，可以为自动生成到后台的表单的 CRUD 操作添加按需自定义操作（_hooks_）；根据数据结构，可以在这里进行大量数据干预。

例如，删除客户时需要删除其所有订单，或者在创建新产品时必须与另一个系统集成。总之，任何与数据直接相关的开发都可以在这里完成。

Actions 受数据库 `triggers` 启发，但处于代码执行层面。

因此，可以针对数据的创建、修改和删除编写特定操作。

## Components

`📂 components` 用于在后台表单中定义自定义字段类型，这些类型可以自行进行数据处理。

可以通过脚本创建组件，为应用提供一种新的特定字段类型。

## Core

`📂 core` 文件夹允许将代码注入 HTTP 请求的处理流程中。

它也用于在各个服务及其他组件之间共享代码。

`_config.js` 会在每个 HTTP 请求加载配置后执行，即在应用的 `📂 config` 文件夹中的环境配置脚本之后执行。

`_init.js` 用于在应用首次初始化时注入一些指令。

### HTTP 请求处理

在应用任意 URL 的 HTTP 请求处理流程中，会执行相应的脚本：

- `_request_start.js` 在 HTTP 请求到达 Netuno 服务器时执行。
- `_request_url.js` 在 Netuno 处理 URL 时执行，可以将 URL 更改为其他目标。
- `_request_close.js` 在 HTTP 请求响应关闭时执行。
- `_request_end.js` 在 HTTP 请求最终完成时执行。
- `_request_error.js` 在 HTTP 请求处理发生错误时执行。

### API 服务处理

在应用任意 API 服务的处理流程中，会执行以下脚本：

- `_service_config.js` 在开始执行服务之前执行，用于定义服务的执行配置等。可以定义服务是否允许执行，也就是对 API 服务访问的安全控制。
- `_service_start.js` 在某个服务开始处理时立即执行。
- `_service_end.js` 在某个服务处理完成后执行。
- `_service_error.js` 在某个服务处理发生错误时执行。

## Services - API

应用 API 的服务正是在 `📂 services` 文件夹中创建的。

服务可以用多种语言编写：Javascript、Python、Java、Kotlin、Ruby 或 Groovy。

由于 Netuno 是多语言的，任何脚本文件都可以改为其他受支持的编程语言，只需让文件扩展名与语言相对应。

无需根据所使用的编程语言进行额外配置，只需创建服务文件并使用与编程语言相对应的正确扩展名即可。

## Setup

`📂 setup` 文件夹存放 Netuno 引擎自动生成的、用于定义数据库模式的代码，也可以在这里放置应用运行所必需的数据加载。

`_start.js` 脚本在开始数据库构建处理之前执行。

`_end.js` 脚本在数据库构建处理完成后执行。

根据数据结构的构建情况，Netuno 会在此 `📂 setup` 文件夹中自动创建必要代码，以便将整个数据结构重建到新数据库中，或重建应用最终在另一个数据库中运行时缺失的内容。

 ## Templates

`📂 templates` 文件夹包含应用后台页面的 HTML 内容，这些页面由 Netuno 服务器生成。

`📂 dev` 文件夹包含 `dashboard.html` 文件，它允许在开发者构建模式下更改工作区。

位于 templates 根目录的 `dashboard.html` 包含后台常规工作区的 HTML。

### 原生模板

在 `📂 _` 文件夹中，可以替换任何通用模板，也就是说 Netuno 的默认模板可以被修改。

- [这里有 Netuno 的原生模板。](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

如果文件夹和/或文件名称与此文件夹内原生模板的名称相同，则使用此文件夹中的模板，而不是原生模板。

也就是说，只需在 `📂 _` 文件夹内复制原生模板的相同结构即可替换它。

### 脚本

脚本模板会将 JavaScript 代码文件注入页面末尾，用途如下：

1. `scripts.html` 在**后台**页面末尾添加 JavaScript 代码。
2. `scripts_dev.html` 在**开发者构建区**页面末尾添加 JavaScript 代码。
3. `scripts_login.html` 在**登录**页面末尾添加 JavaScript 代码。

### 样式

样式模板会将样式文件注入页面开头，用途如下：

1. `styles.html` 在**后台**页面开头添加 CSS 代码。
2. `styles_dev.html` 在**开发者构建区**页面开头添加 CSS 代码。
3. `styles_login.html` 在**登录**页面开头添加 CSS 代码。