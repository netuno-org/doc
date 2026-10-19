---
sidebar_position: 4
id: versions
title: 版本
sidebar_label: 版本
---


# 版本

如果您刚开始使用 Netuno，建议执行**标准安装**，以确保使用平台最新且稳定的版本。

Netuno 也允许安装特定的旧版本或仍在开发中的实验版本，这适用于测试环境或复现缺陷。

在安装或更新到指定版本之前，请查阅官方发布列表：

- **版本列表：** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip 提示
在安装指定版本前，请查看发布说明，尤其是在生产环境中。
:::

## 安装指定版本

要将 Netuno 安装或更新到指定版本，请在安装命令中添加 `version` 参数，并填入所需版本的标识符。

选择最适合您环境的方法：

### 方法 1：Java 安装器

全新安装请使用此方法：

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### 方法 2：主执行器

如果已安装 Netuno，并且希望更新到指定版本，请使用此方法：

```bash
./netuno install version=20230417.0119
```

### 方法 3：netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
将 `20230417.0119` 替换为所需版本的标识符，可在 **[发布列表](https://github.com/netuno-org/platform/releases)** 中获取。

执行命令后，Netuno 将自动开始安装指定版本。
:::