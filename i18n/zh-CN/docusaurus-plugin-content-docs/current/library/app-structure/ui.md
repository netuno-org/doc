---
id: ui
title: UI
sidebar_label: UI
---

自定义后台管理与仪表盘的前端。

## 用户界面

顾名思义，`📂 ui` 文件夹中存放的是应用程序用户界面的逻辑。

它允许你进行开发，以改变应用程序后台管理的行为。

你可以按需生成仪表盘、添加或修改功能等等。

若要开发应用程序的通用代码，无论是后端还是前端，我们推荐使用免费的代码编辑器，例如：

- VS Codium：<a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom：<a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code：<a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm：<a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## 文件夹结构

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MyButton</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>DashboardContainer</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## 源代码

`📂 src` 文件夹汇集了前端的应用代码。在这个文件夹中，包含了 React 组件（component）与容器（container）的组织结构，分别对应 `components` 和 `containers`。

### 容器

`📂 containers` 文件夹用于存放容器，即用于交互较多的区域的 React 组件。也就是说，它们是功能更多的组件，通常覆盖屏幕上相当大的一块区域，并且可以根据其范围聚合其他组件。

例如，一个展示订单表格的容器，包含用于筛选的表单，以及汇总月度总额的图表，所有这些都放在同一个容器中；其中每一项都可以是独立的组件，但在仪表盘的订单容器中被聚合在一起。

### 组件

`📂 components` 文件夹用于存放可复用的 React _components_，它们通常实现非常具体的功能，适合被集成到其他组件或容器中。

通常它们包含较为简单的行为，并且非常专注于某一特定范围内的目标，以便在多个容器甚至其他组件中复用。

作为组件的示例，可以是某种特定的表格、一个表单、某类图表等等。

### 样式

`📂 styles` 文件夹通常用于存放应用程序各个容器的全局样式。尽管在这一方面并没有严格的规范，但我们建议将与 `component` 或 `container` 相关的特定样式组织在它们旁边，也就是放在各自组件文件夹内部。
 
## Vite
 
为了生成最终包含应用程序 UI 的 JavaScript 代码版本，需要执行对以 React/JSX 编写的前端代码的编译；该版本经过编译和优化，并由浏览器处理和使用。

该编译由 [Vite](https://vite.dev/) 完成，其配置及其他说明位于以下文件中：

- `vite.config.js`

该文件位于 `📂 ui` 文件夹的根目录下。

## 包管理器

`package.json` 文件供依赖模块管理器使用，我们推荐使用 [Bun](https://bun.sh) 来安装前端所需的所有依赖。

而执行命令也使用 [Bun](https://bun.sh)，这是另一项重要推荐。

因此，我们推荐安装 [Bun](https://bun.sh)。

## 说明

`README.md` 文件中包含安装与执行的说明。

要安装依赖，请执行：

- `bun install`

而要执行开发环境的前端代码编译：

- `bun run watch`

如果是要进行最终确定的、为生产环境优化的编译：

- `bun run build`

默认情况下，编译会生成以下文件：

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

这些文件会被集成到 Netuno 的处理流程中，以便对应用程序的后台管理页面（如仪表盘和特定功能）进行相应的按需自定义。