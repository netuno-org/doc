---
sidebar_position: 1
id: folders-overview
title: 文件夹概览
sidebar_label: 概览
---

探索并了解应用程序的文件夹和文件。

## 结构

从安装 Netuno 的根目录开始，我们可以找到 `📂 apps` 文件夹。

在 `📂 apps` 文件夹内，存放着 Netuno 平台上所有可用的应用程序。

有些应用程序可以在本地创建，而另一些则可以是外部的，例如从 GIT 仓库克隆而来的应用程序。

从 Netuno 根目录查看一个刚创建的应用程序的完整结构：

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>wo_de_ying_yong</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> `apps` 文件夹中包含 Netuno 中所有可用的应用程序。

最初，该文件夹中已经存在 `demo` 应用程序，正如其名称所示，它是一个 Netuno 功能的**演示**_示例_。

当创建一个新应用程序时，会添加一个新的文件夹，其中包含与上面所示相同的子文件夹层级结构。

## 主要文件夹

在应用程序的文件夹内，有若干主要文件夹，每个文件夹都有其特定的用途。

主要文件夹包括：

- [📂 config](config) - 通用配置；
- [📂 dbs](dbs) - 与数据库相关的内容；
- [📂 docs](docs) - 文档以及一般性的其他文档；
- [📂 public](public) - 可直接通过 URL 访问的公开内容，例如图片、JavaScript 和 CSS；
- [📂 server](server) - 后端代码，例如服务、作业、模板、报表以及整体 API。
- [📂 storage](storage) - 组织与数据相关或在代码中使用的文件。
- [📂 ui](ui) - 后台的用户界面，前端代码，例如仪表板和其他功能。