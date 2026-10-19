---
id: public
title: 公共
sidebar_label: 公共
---

公共文件可直接通过 URL 访问。

## 公共文件夹

`📂 public` 文件夹汇集了编译后的客户端 UI（User Interface）内容，以及其他公共文件，例如徽标和图标。

可以包含任何需要被公开访问的文件。

## 文件夹结构

进入 `📂 public` 文件夹后，默认会看到以下结构：

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## 图片

`📂 images` 文件夹最初包含应用程序的徽标和图标。

在此文件夹中，你可以放置应用程序的所有公共图片。

### icon.png

应用程序图标，显示在浏览器标签页中（favicon）。

### logo.png

这是显示在 backoffice 登录页面和错误页面中的徽标图片。

### logo-main.png

这是登录并进入 backoffice 后，在页眉（_header_）中显示的徽标图片。

## 脚本

`📂 scripts` 文件夹中存放的是 UI 编译后生成的最终 JavaScript 代码，也可以在这里放置其他公共 JavaScript 文件。

### ui.js

`ui.js` 文件是 UI 的最终代码编译产物。

通常，UI 使用 React 和 LESS 开发，并使用 [Vite](https://vite.dev/) 编译最终的 JavaScript bundle，即 `ui.js` 文件。

编译说明位于 `ui/vite.config.js` 中，此文件包含 `ui.js` 如何被处理和生成的详细信息。

### ui.js.map

`ui.js.map` 文件是 UI 的 source map，这个文件对于在浏览器 _控制台_ 中调试错误时指出原始代码非常重要。

## 样式
  
`📂 styles` 文件夹中应包含用于应用程序样式化的 CSS 文件。

### main.css

`main.css` 通常用于全局 CSS，或用于修改 Netuno 的默认样式。

### ui.css

`ui.css` 是从 UI 编译生成的 CSS。

通常，UI 使用 React 和 LESS 开发，并使用 [Vite](https://vite.dev/) 编译最终的 CSS bundle，即 `ui.css`。

编译说明位于 `ui/vite.config.js` 中，此文件包含 `ui.css` 如何生成的详细信息。