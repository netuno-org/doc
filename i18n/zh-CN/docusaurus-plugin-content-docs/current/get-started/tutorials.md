---
sidebar_position: 3
id: tutorials
title: 教程
sidebar_label: 教程
---

# 教程

探索 Netuno 平台的教程，通过实践学习如何配置资源、建模数据、创建界面以及在后端开发业务逻辑。

本页面汇集了面向初学者以及希望深入了解平台使用的主要内容。

## 开始之前

在开始任何教程之前，请检查你的环境是否已准备就绪：

- **已安装 Netuno** 并在本地或开发环境中运行。
- **拥有管理面板访问权限**，且具备相应权限。
- **建议具备基础知识**，包括数据建模、HTTP 和 REST API，以便更好地理解技术内容。

请先查阅[安装](./installation)指南再继续。

## 推荐顺序

如果这是你第一次使用 Netuno，请按照以下顺序进行：

1. 了解图形界面。
2. 学习创建表单和字段。
3. 配置表单之间的关系。
4. 进阶学习权限和用户组。
5. 根据项目需要，探索查询和后端资源。

## 图形界面 - 前端

本节教程面向希望通过平台管理界面辅助创建和配置应用程序的用户。

| 教程 | 目标 | 级别 |
|---|---|---|
| [了解图形界面](/docs/academy/ui/graphical-interface) | 理解面板结构、菜单和主要资源。 | 初级 |
| [表单](/docs/academy/ui/forms) | 以可视化方式创建和整理表单。 | 初级 |
| [字段](/docs/academy/ui/fields) | 配置字段的数据类型、验证和行为。 | 初级 |
| [表单之间的关系](/docs/academy/ui/relationships-between-forms) | 定义数据之间的关联以及表单之间的关系。 | 中级 |
| [组与用户](/docs/academy/ui/groups-users) | 管理权限、访问配置文件和用户组织。 | 中级 |
| [查询界面](/docs/academy/ui/queries-interface) | 创建可视化查询以进行数据分析和提取。 | 中级 |
| [模态表单](/docs/academy/explore/modal-form) | 使用模态窗口构建高级交互。 | 高级 |

## 后端

Netuno 允许在不同语言和场景中将低代码与后端开发相结合。以下教程可帮助你创建集成、操作数据并实现业务规则。

### 前置条件

在进入本节之前，建议熟悉以下内容：

- 客户端-服务器架构和 HTTP 协议。
- JSON 数据结构。
- 使用 JavaScript、Python 或与你的开发流程兼容的其他语言进行编程的逻辑能力。

### API 与集成

| 教程 | 目标 | 级别 |
|---|---|---|
| [REST Web 服务](/docs/academy/server/services/rest) | 创建并对外暴露端点，供应用程序和外部系统使用。 | 中级 |
| [发送电子邮件](/docs/academy/server/services/sending-emails) | 配置通过 SMTP 发送事务性电子邮件。 | 中级 |

### 数据与持久化

| 教程 | 目标 | 级别 |
|---|---|---|
| [以编程方式执行查询](/docs/academy/server/database/db-query-execute) | 执行自定义查询以及直接与数据库交互。 | 中级 |
| [表单与数据库操作](/docs/academy/server/database/db-form-operations) | 控制数据在插入、更新和删除过程中的生命周期。 | 中级 |
| [生成唯一 ID（UID/GUID）](/docs/academy/server/services/generate-uid-guid) | 以最佳实践实现唯一标识符。 | 中级 |

### 基础设施与数据库

| 教程 | 目标 | 级别 |
|---|---|---|
| [MSSQL 配置](/docs/academy/server/database/mssql) | 将 Netuno 连接并配置到 Microsoft SQL Server。 | 中级 |
| [多数据库](/docs/academy/server/database/multiple-databases) | 在同一项目中使用多个数据库。 | 高级 |

### 高级资源

| 教程 | 目标 | 级别 |
|---|---|---|
| [模板](/docs/academy/server/templates) | 创建可复用且动态的结构以加速开发。 | 高级 |
| [JWT Token](/docs/academy/server/services/jwt) | 实现基于令牌的身份验证。 | 高级 |
| [Java 开发与调试](/docs/academy/server/java-core/setup) | 配置用于调试和 Java 扩展的环境。 | 高级 |

:::tip 如何选择教程

当目标是通过界面可视化配置应用程序、构建数据结构并管理资源时，请使用**图形界面**教程。
当需要创建业务逻辑、集成、身份验证、自动化或对数据进行编程访问时，请使用**后端**教程。
:::

## 后续步骤

完成最初的教程后，请访问 [Netuno 学院](/docs/academy/overview)，深入学习平台特定领域的知识。


如果发现任何错误（bug）或有新功能建议，欢迎[在 GitHub 上提交 issue](https://github.com/netuno-org/doc)。我们的团队和社区随时准备提供帮助。