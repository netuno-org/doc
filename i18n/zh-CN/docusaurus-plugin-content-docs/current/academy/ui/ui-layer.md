---
sidebar_position: 8
id: ui-layer
title: UI 层
sidebar_label: UI 层
---

安装和编译应用程序的仪表盘及通用界面。

## 背景

Netuno 应用程序默认已经配置了一组面向前端的先进技术，其中包括 [React](https://react.dev/)、[Vite](https://vite.dev/)、[Less](https://lesscss.org/) 和 [Ant.Design](https://ant.design/)。

应用程序内部有 `📁 ui`（用户界面）文件夹，我们在这里开发仪表盘和其他前端组件。

## 开始之前

请确保已安装 [Bun](https://bun.sh/)，这是先决条件，更多信息：

- [安装 Bun](/docs/academy/website/bun)

## 安装依赖模块

要安装默认提供的所有依赖，请进入正在开发的应用中的 `📁 ui`（用户界面）文件夹，例如：

```shell
cd apps/我的应用/ui/
```

执行依赖模块安装命令：

```shell
bun install
```

> [Bun](https://bun.sh) 是比 NPM 更优秀、更优化的替代方案。

## 自动编译

进入正在开发的应用中的 `📁 ui`（用户界面）文件夹，例如：

```shell
cd apps/我的应用/ui/
```

要在每次代码更改时自动编译前端，请执行：

```shell
bun run watch
```

> 请确保已安装 [Bun](https://bun.sh/)。
 
## 前端与 Netuno 的自动集成

Netuno 允许将 UI 与 Netuno 应用服务器进程一起启动。

> 所有 React 编译消息都会集成到与 Netuno 应用相同的终端中。

为此，只需在 Netuno 应用的 `📂 config/_development.json` 中的 `commands` 里启用相应配置，也就是将 `path` 为 `ui` 的 `command` 的 `enabled` 设为 `true`，如下所示：

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> 每当编辑 Netuno 应用的配置文件时，都需要重启服务器，以便其采用新的更改。

最后，启动/重启您的 Netuno 应用服务器，以验证其运行情况。

现在，一切都将集成到一个集中式终端中，从而避免出现多个分散的终端。更多信息：

- [集中式终端](/docs/academy/explore/centralized-terminal)

## 其他前端技术

在 `📁 ui` 文件夹中，可以配置任何前端技术，或包含任何所需的新依赖模块。

如果您不想使用任何默认技术，可以替换为任何其他技术，特别是通过调整以下文件：

- `package.json`
- `vite.config.js`