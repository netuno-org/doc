---
sidebar_position: 1
id: bun
title: 安装 Bun
sidebar_label: 安装 Bun
---

## 简介

NodeJS 和 NPM 是定义前端开发生态系统的基础。

尽管它们很有用，但其性能却差强人意。

因此我们建议使用 Bun，以获得显著且切实可感的收益，同时易于快速适应并保持兼容性。

在 Netuno 中，Bun 的使用正日益普及，请看其中的原因……

## Bun

Bun 与 NodeJS 相当，但更加强劲、现代、直观且超快。

Bun 的性能毋庸置疑，从 NodeJS 执行切换到 Bun 的人会立刻感受到它的优势。

由于前端项目通常启动需要一些时间，而使用 Bun 启动是即时的。

此外前端依赖通常占用大量空间，`📂 node_modules` 文件夹很容易达到数百兆甚至数 GB。

Bun 还解决了因依赖副本在多个项目中被复制而浪费空间的问题。

它会创建一个所有项目共享的中央依赖仓库，在安装时配置为链接文件夹。

从而大幅降低依赖占用的空间消耗。

> 在众多其他优势中，还突出表现在可用性以及经过改进的、直观且整体更进化的输出上。

鉴于性能优势对敏捷开发极为重要，我们推荐使用它。

要安装 Bun，请按照以下步骤操作：

- [**Bun 安装**](https://bun.sh/docs/installation)

### 在项目中的使用

要在项目中使用 Bun，请确认如果已使用 NPM、Yarn 或其他工具，必须删除 `📂 node_modules` 文件夹。

在包含 `package.json` 文件的位置，执行依赖安装命令：

- `bun install`

现在只需执行 `package.json` 中配置的 `scripts` 动作，例如：

- `bun run dev`

以及用于编译：

- `bun run build`

使用 Bun 与 NPM、Yarn、PNPM 等非常相似，只是速度更快、整体更好，而且在部署到测试和生产环境时，能够获得高性能，部署快速完成且整体更高效。

### Netuno 中的集成命令

在 Netuno 一侧，通过集中式终端，所有项目命令都在 Netuno 的同一进程和终端中一起执行。

- [了解关于集中式终端的更多内容。](/docs/academy/explore/centralized-terminal)

如果您已集成并使用 NPM 的命令执行，则应改为 Bun。

在 Netuno 应用的 `📂 config/_development.json` 中的 `commands` 配置里改为 Bun，例如：

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## 结论

不要再为 `📂 node_modules` 文件夹内众多依赖副本浪费数 GB 空间而苦恼。

也不必再长时间等待项目安装依赖、启动或编译。

没有任何因素阻碍使用 Bun，因为它保证与 NodeJS 和 NPM 兼容，简直是二合一。

在使用 Netuno 的项目中，我们正在使用并将一切迁移到 **Bun**，请跟上这一趋势。