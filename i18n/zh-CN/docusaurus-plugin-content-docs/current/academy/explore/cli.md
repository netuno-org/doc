---
id: cli
title: 命令行
sidebar_label: 命令行
---


Netuno 的命令行界面是管理开发环境的主要工具。通过它，你可以查询系统信息、管理应用并快速配置服务器。

#### 前置条件

- **终端：** 你必须打开一个终端（命令提示符、PowerShell 或 Bash），并位于安装 Netuno 的根目录下。

以下是用于检查你的环境是否已准备就绪的初始命令。

| 选项    | 描述    |
|----------|--------------|
| `help` | 查看 Netuno 提供的所有命令。 |
| `version` | 查看 Netuno 的当前版本。 |

#### 列出可用命令

如果你不确定可以执行哪些操作，请使用帮助命令。它会返回完整的功能列表。

```shell
./netuno help
```
#### 查看 Netuno 版本

了解你正在使用的版本，对于确保与特定脚本和模块的兼容性至关重要。

```shell
./netuno version
```

## 安装

在开始开发之前，需要在你的环境中安装 Netuno 引擎。更多信息请访问我们的[安装](/docs/get-started/installation)页面。

本节详细介绍在安装过程中可用于自动化或优化流程的参数。

| 选项 | 描述 |
|----------|--------------|
| `checksum` | 更新已安装包中所有文件的校验码（checksum）。 |
| `force` | 强制替换所有文件，即使存在本地更改。|
| `graal=true/false` | 设置是否使用 GraalVM，以获得更高的应用执行性能。 |
| `path=[目录]`| 手动设置 Netuno 的安装路径（文件夹）。|
| `remove` | 从系统中完全删除所有与 Netuno 相关的文件。|
| `version=[版本]`| 选择要安装的特定版本。使用 latest 表示开发版本。|
| `yes`| 对所有确认自动回答“是”，忽略有关数据丢失的警告。|

#### 更新校验码的示例：

```shell
./netuno install checksum
```

#### 强制应用所有本地更改的示例：

```shell
./netuno install force
```

#### 禁用 GraalVM 的示例： 

```shell
./netuno install graal=false
```

> 默认情况下 GraalVM 处于启用状态，并会在安装 Netuno 时自动下载。

#### 设置安装路径的示例：

```shell
./netuno install path ='netunoDir'
```
#### 删除 Netuno 所有文件夹的示例：

```shell
./netuno install remove
```

#### 选择要安装的 Netuno 版本的示例：

```shell
./netuno install version='latest'
```

##### 对所有问题回答“是”的示例： 
```shell
./netuno install yes 
```

## 服务器

安装完成后，启动服务器以开始开发你的应用。

要使用默认配置启动服务器，请在 Netuno 根目录中执行以下命令：

```shell
./netuno server
```

> 默认情况下，服务器使用 9000 端口。一旦终端提示系统已就绪，你就可以通过以下链接访问管理面板：http://localhost:9000/

本节详细介绍在服务器启动过程中可以使用的参数。

选项 | 描述 |
|----------|--------------|
| `app=[应用名称]` | 明确指定要启动哪个应用 |
| `host=[IP/主机名]` | 允许你更改 Netuno 的主机名 |
| `launch=true/false` | 设置 Netuno 是否应自动打开浏览器 |
| `npm` | 自动执行 'npm watch' 命令，以实时编译应用的前端 |
| `port=[数字]` | 设置服务器的启动端口 |
| `secret=[密码]` | 设置一个安全密码，以允许远程管理服务器访问 |
| `web=[文件夹]` | 更改预定义的项目根文件夹（web home） |

默认情况下，Netuno 使用 **'webapp'** 文件夹来存储其运行所需的所有基本文件。

**更改目录时请注意：** 如果你使用 web=[文件夹] 参数更改根文件夹名称，请记住你还必须在文件系统中实际重命名该文件夹。该命令只是告诉 Netuno 代码去哪里查找文件，它不会自动重命名文件夹。

#### 启动特定应用的示例：

```shell
./netuno server app=myapp
```

#### 更改主机名（host）的示例：

```shell
./netuno server host=localhost
```

#### 设置 Netuno 是否自动启动浏览器的示例：

```shell
./netuno server launch=false
```

>默认情况下，Netuno 会打开浏览器并打开链接 [http://localhost:9000](http://localhost:9000)。

#### 执行 npm 以自动构建前端的示例

```shell
./netuno server npm
```

#### 更改端口的示例：

```shell
./netuno server port=10000
```

#### 设置访问远程服务器管理的密码的示例：

```shell
./netuno server secret='p#ssw@rd'
```

#### 更改默认 web 文件夹的示例：

```shell
./netuno server web=webapp
```

## 许可证

要开始使用 Netuno 进行开发，需要注册你的环境。

要管理你的许可证，请使用基础命令：

```shell
./netuno license
```

> 目前，Netuno 提供三种许可证类型：**Community、Standard 和 Enterprise**。

本节详细介绍用于配置或查询许可证的可用操作。

| 选项    | 描述    |
|----------|--------------|
| `create , change` | 启动创建新许可证或更改当前许可证的流程 |
| `key` | 显示你环境中当前激活的许可证密钥 |
| `mail=[your@mail.com]` | 设置与许可证账户关联的电子邮件地址 |
| `type=[community/standard/enterprise]`  | 设置许可证类型|


#### 创建许可证的示例：

```shell
./netuno license create
```

#### 查看许可证密钥的示例： 

```shell
./netuno license key
```
##### 设置你的电子邮件和许可证类型的示例：

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## 应用

在服务器配置完成且许可证已激活后，你可以通过创建新的解决方案来扩展你的生态系统。

```shell
./netuno app
```

生成的文件将自动组织在 Netuno 的文件夹结构中。

要访问或编辑应用的文件，请从系统根目录导航到以下路径：**webapp / apps / [你的应用名称]**

#### 文件夹结构

- **webapp**：这是根文件夹，包含 Netuno 运行所需的所有基本文件。

- **apps**：专门存放所有已开发或演示应用的文件夹。

- **[你的应用名称]**：你刚刚创建的应用的专属文件夹。

默认情况下，Netuno 有一个演示应用，在启动 Netuno 服务器时会显示出来。

| 选项    | 描述    |
|----------|--------------|
| `database=[数据库名称]` | 设置数据库名称 |
| `engine=[名称]` | 设置数据库类型 |
| `host=[地址]` | 设置数据库地址。 |
| `language=[语言]`  | 设置应用的语言 |
| `locale=[语言]` | 设置应用的区域语言 |
| `name=[名称]`  | 允许创建应用或重建现有应用 |
| `password=[密码]`  | 设置数据库密码 |
| `port=[数字]`  | 设置数据库端口 |
| `username=[名称]`  | 设置数据库用户名 |

#### 设置数据库名称的示例：

```shell
./netuno app database=employee
```

> 数据库名称可以包含数字和字母，如果名称包含多个单词，必须用 "_" 分隔，如下所示。
>
> **示例：** employee_db

#### 设置数据库类型的示例：

```shell
./netuno app engine=pg
```
有以下数据库类型：
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### 设置数据库服务器地址的示例：

```shell
./netuno app host=localhost
```

#### 设置语言和区域的示例：

```shell
./netuno app language=pt_PT locale=pt_PT
```
有以下语言：
> - 葡萄牙语 - pt_PT
> - 巴西葡萄牙语 - pt_BR
> - 英语 - en_US
> - 西班牙语 - es_ES

#### 创建应用或重建现有应用的示例：

```shell
./netuno app name=demo
```

#### 设置数据库密码的示例：

```shell
./netuno app password=secret
```

#### 设置数据库端口的示例：

```shell
./netuno app port=5432
```
默认情况下，端口分别为：  

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### 设置数据库用户名的示例：

```shell
./netuno username=root
```