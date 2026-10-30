---
sidebar_position: 1
id: initialization
title: 初始化
---


# 初始化

Demo 应用的初始化

要开始本教程，第一步是启动 **Demo** 应用的服务器并准备好开发环境。


### 启动服务器

打开操作系统的终端，并导航到 Netuno 平台安装所在的根目录（例如 `📁 /netuno`）。

执行以下命令以启动服务器：

```bash
./netuno server
```

:::info 启动的替代方式
如果主命令无法正常工作，或者 Demo 应用没有默认被加载，请通过指定应用参数来强制启动：
:::

```bash
./netuno server app=demo
```

### 选择代码编辑器
你可以使用自己偏好的代码编辑器来开发应用的 backend 和 frontend。

如果你还没有编辑器，我们推荐以下免费且开源的选择：

- VS Code：<a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>
- VS Codium：<a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- WebStorm：<a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>


#### 打开项目文件夹
打开代码编辑器后，找到并打开 Demo 应用的目录：`📁 apps/demo`。

该文件夹包含新应用的所有文件和配置。所有开发工作都只在这个目录内进行。

### 后续步骤

服务器已运行，文件也已在代码编辑器中打开，环境准备就绪。请继续进入教程的下一阶段，开始探索并修改应用。