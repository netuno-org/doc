---
sidebar_position: 2
id: install
title: 安装
sidebar_label: 安装
---

## 前置要求

在安装 CLUAR 之前，需要先准备好：

1. 已安装 [Netuno](https://doc.netuno.org/pt/docs/get-started/installation)。
2. 已安装 [Bun](https://bun.sh/docs/installation)。

## 克隆项目

CLUAR 是一个 Netuno 应用，因此必须将其克隆到 Netuno 安装目录下的 `apps` 文件夹中：

```
[Netuno 根目录]/apps
```

使用以下命令：

```
git clone https://github.com/netuno-org/cluar.git
```

## 安装网站（使用 Bun）

进入 `website` 文件夹：

```
cd website
```

执行 Bun 的安装命令：

```
bun install
```

需要允许执行 ESBUILD 中不受信任的脚本：

```
bun pm trust --all
```

如果你需要重新开始网站的安装，请删除 `node_modules` 文件夹和 lock 文件，然后重新安装：

```
rm -rf node_modules
bun install
bun pm trust --all
```

## 下一步

代码和依赖都已安装完成，接下来请前往[配置](/docs/academy/cluar/configuration)。