---
sidebar_position: 2
id: config
title: 配置
---

# 配置应用

本指南介绍配置演示应用的语言、数据库以及启用随服务器自动执行命令的初始步骤。

所有更改均在位于 /apps/演示/**config** 文件夹中的 **演示** 应用配置文件 `_development.json` 中进行。

### 前置条件

编辑配置之前，请确认以下几点：

- 演示应用已创建并初始化。
- 您位于 Netuno 项目根目录。
- 代码编辑器已打开 `/apps/演示/config/development.json`。
- 保存更改后，您可以重启服务器。

## 语言配置

### 1. 应用

在配置文件中，找到 `language` 和 `locale` 字段以更改应用语言。

```json title="/apps/演示/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

根据所需语言设置值：

- **葡萄牙语**：`pt_PT` 或 `pt_BR`
- **英语**：`en_GB` 或 `en_US`

### 2. 数据库

找到 **"db"** 对象，然后找到 **"default"** 的配置。

更改 **"name"** 字段以定义相应数据库：

- `演示_pt`：葡萄牙语数据库。
- `演示_en`：英语数据库。

```json title="/apps/演示/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "演示_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. 启用多个命令

Netuno 允许在服务器启动时同时执行多个命令，并在同一控制台中显示输出。

默认情况下，**演示** 应用已配置 `bun run watch` 命令但处于禁用状态。该命令会自动编译后台代码文件中的任何更改。

要启用它，请找到 **"commands"** 数组，并将 **enabled** 字段的值从 false 改为 **true**。
 
```json title="/apps/演示/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### “commands” 对象的参数

- `enabled`：启用（true）或禁用（false）命令的自动执行。
- `path`：定义将在其中执行命令的应用路径（文件夹）。
- `command`：定义将在终端中执行的命令。

:::tip
您可以在 `"commands"` 数组内添加其他命令，只要保持相同的对象结构即可。
:::


保存配置文件后，重启 Netuno 服务器以应用更改。


## 预期结果

重启服务器后，请确认以下几点：

- 演示应用已使用配置的语言。
- 如果已启用，控制台会显示 `bun run watch` 命令的执行情况。

## 后续步骤

继续下一阶段 **表单**，以探索并修改演示应用。