---
id: configuration
title: 配置
sidebar_label: 配置
---

## 应用程序的基本配置

在 Netuno 中创建的每个应用程序都有特定配置，用于定义它如何连接数据库、访问密钥以及其他基本参数。

Netuno 使用一套智能系统，根据应用程序运行的环境来组织这些配置，无论是在本地、正式服务器还是其他任何环境中。

应用程序的配置集中存放在项目根目录下的 **config** 文件夹中。

**默认路径：** `my-app/config`

### 运行环境

在 config 文件夹中，文件会根据其创建时对应的环境来命名。Netuno 会自动只加载与当前运行环境相匹配的文件：

- **开发环境**：命名为 `_development` 的文件仅在 Netuno 环境设置为开发环境时读取。

- **生产环境**：命名为 `_production` 的文件仅在 Netuno 环境设置为生产环境时读取。


### 配置文件类型

对于每个环境，你可以使用两种协同工作的文件类型：

### JSON

- `_development.json` 
- `_production.json`

**作用：** 存储静态定义和参数配置。

**示例：** 放置数据库凭据、外部 API 的 URL 以及固定配置。

### JS

- `_development.js` 
- `_production.js`

**作用：** 在加载配置时执行逻辑。

**示例：** 动态更改配置，或在应用程序完全运行前执行必要的初始任务和处理。


### 通用环境定义

为了让应用程序知道应使用哪套配置，你需要告诉 Netuno 服务器它当前运行在哪种“模式”下。此全局配置在 Netuno 根目录的单个文件中定义。

1. **定位全局配置文件：** 进入安装 Netuno 的根目录，找到并打开名为 `config.js` 的文件。
2. **找到环境变量：** 在该文件中查找 `config.env` 属性。
3. **设置所需环境：** 根据要激活的环境更改变量值。


#### 开发环境
用于你在自己的机器上编程和测试时。

```javascript
// 在 Netuno 根目录的 ./config.js 文件中
config.env = 'development'
```

#### 生产环境
用于项目已完成并在正式服务器上为用户运行时。

```javascript
// 在 Netuno 根目录的 ./config.js 文件中
config.env = 'production'
```

#### 其他环境（自定义）

Netuno 很灵活，允许你创建自定义环境名称，例如：`test`、`homologation` 或 `staging`。

```javascript
// 在 Netuno 根目录的 ./config.js 文件中
config.env = 'test'
```

> 应用程序配置必须以下划线 `_` 开头，使用 `.json` 扩展名，并且还要有一个使用 `.js` 扩展名的文件，二者属于同一环境。

## GIT 仓库

使用 Git 对应用程序代码进行版本控制时，确保数据安全至关重要。

配置文件通常包含敏感信息，例如数据库密码、私有 API 密钥等……因此，**你绝不应将真实配置文件提交到仓库**。

为确保密码不泄露，同时让其他开发者了解项目配置，请按以下两步操作：

### 1. 隐藏真实文件

在应用程序根目录中，打开（或创建）名为 `.gitignore` 的文件。添加 `.json` 配置文件的路径，使 Git 完全忽略它们。

**在 `.gitignore` 中添加内容的示例：**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. 示例配置文件

创建一个示例文件，包含新开发者轻松配置项目所需的数据。

- 进入应用程序的 config/ 文件夹。
- 创建一个名为 `sample.json` 的文件。
- 将 `_development.json` 的结构复制到其中，只保留字段名称。

你的 **config/sample.json** 应如下所示：

```json
{
  "database": {
    "host": "在此填写主机",
    "user": "你的用户名",
    "password": "你的密码"
  }
}
```

#### 如何在代码中访问配置

在配置文件（如 `_development.json`）中定义变量和键之后，你需要在应用程序逻辑中使用它们——例如，创建一个连接 API 并需要已保存访问令牌的服务时。

在 Netuno 中，可以通过原生资源 `_app` 访问这些配置。

#### 如何获取数据

在服务器执行的任何代码中（例如 `server/services/` 文件夹），你将使用 `_app.config()` 函数获取当前活动配置文件中的值。

为了理解这种关联是如何建立的，假设你在配置文件（`config/_development.json`）中定义了以下内容：

```json
{
  "name": "我的应用",
  "version": 2
}
```
 
 要获取键 "name" 的值并将其打印到服务器控制台（日志）中，你可以在 .js 服务中使用以下代码：

```javascript
// 1. Netuno 会进入 JSON 文件，查找键 "name" 并获取其值。
// 2. 然后，它将该值保存到我们称为 'appName' 的 JavaScript 变量中。
let appName = _app.config().getString("name");

// 3. 在 Netuno 终端中打印我们变量的内容："我的应用"
_log.info(appName);
```

## 自定义配置

除了数据库和服务器的默认配置外，你还可以创建自己的配置变量。

这对于定义业务规则非常有用，例如“每页最大项目数”或“电子邮件发送间隔”，这样每当这些规则发生变化时，就无需更改应用程序代码。

这些变量保存在 JSON 配置文件（如 `_development.json` 或 `_production.json`）的 `"settings"` 块中。

### JSON 结构与可见性（公开 vs. 私有）

创建配置时，必须区分用户界面（前端）可以查看的内容和只能保护在服务器（后端）中的内容。

* **私有变量：** 位于 `"settings"` 块内。只有服务器可以访问。
* **公共变量：** 位于 `"public"` 子块内。它们会被发送到管理区域的用户界面（`ui` 文件夹），例如开发仪表盘时。

**如何组织 `.json` 文件的示例：**

```json
{
  ...
  "settings": {
    "public": {
      "itemsPerPage": 10
    },
    "emailInterval": 10
  }
}
```

### 如何在代码中访问配置
获取这些数据的方式取决于你在哪里编写代码：

**1. 在服务器 / 后端（服务）中**

要访问通用或私有配置，请在服务器代码（server 文件夹中的 .js 文件）中使用 `_app.settings()` 资源。

```javascript
// 访问私有变量 "emailInterval"
const emailInterval = _app.settings().getInt("emailInterval");

_log.info("定义的间隔为：" + emailInterval);
```

**2. 在界面 / 前端（UI）中**

在界面开发中（ui 文件夹中的文件），你可以访问 `"public"` 块内定义的所有内容。为此，请使用全局对象 `netuno.config.app.settings`。

```javascript
// 在前端中访问公共变量 "itemsPerPage"
const itemsPerPage = netuno.config.app.settings.itemsPerPage;

console.log("在表格中显示 " + itemsPerPage + " 个项目。");
```
## 结论

Netuno 的配置系统为你的应用程序提供了灵活性和结构安全性。通过它，可以：

* **管理多个环境：** 创建并支持具有独立参数配置的不同执行环境（开发、生产等）。
* **自定义变量：** 使用 `settings` 块添加业务特定的配置。
* **分离职责：** 隔离并保护仅限后端的配置，使其与前端应可访问的配置分开。