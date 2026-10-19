---
sidebar_position: 4
id: queries-interface
title: 查询界面
---


Netuno 的查询工具是一项强大功能，可通过 SQL（结构化查询语言）直接与应用数据库交互。

此功能对于测试业务逻辑、验证已存储的信息，以及为报表或复杂界面组件奠定基础至关重要。Netuno 目前支持三种数据库管理系统：**PostgreSql、H2 Database 和 MySQL**。

## 1 - 查询部分

在“构建”模式下，从侧边菜单进入“管理”区域，然后单击“查询”部分。

![查询界面](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - 命令区域

此区域是与项目数据库直接交互的环境。这里可以精确、即时地执行命令来查询、检索和分析数据。

请确保使用的语法与 Netuno 环境中配置的数据库兼容。

![数据库查询区域](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - 验证区域

验证区域可即时反馈代码语法和执行情况。

- **成功（绿色）：** 当查询执行时没有语法或结构错误，消息会以绿色背景显示。这表明数据已处理完毕，可以查看。

![验证区域成功提示](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **失败或错误（红色）：** 如果执行过程中存在任何阻碍（例如语法错误、列名不正确或缺少权限），消息会以红色背景显示。除颜色外，系统还会显示技术错误日志以帮助诊断。

![验证区域失败提示](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - 结果区域

这里以结构化方式呈现向数据库请求的信息。你可以查看表内容，并确认查询逻辑是否返回预期记录。

![结果区域](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - 操作按钮

本节详细介绍可用于执行、保存和管理 SQL 脚本的工具，以优化工作流程并复用复杂查询。

它不仅可以实时执行命令，还可以通过历史记录和已保存脚本库实现高效的生产力管理。

![操作按钮](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 按钮 - 执行

- **功能：** 将“命令”区域中的脚本发送给数据库处理。

- **反馈：** 执行后，系统会显示成功消息（绿色），并自动将请求的数据填充到“结果区域”。

### 5.2 按钮 - 历史记录

- **功能：** 记录最近执行的查询，显示执行时间（毫秒）以及每次操作的“日期/时间”记录。

- **快速恢复：** 单击历史记录列表中的任意记录，相应脚本会重新插入“命令”区域，以便执行或编辑。

![历史命令按钮](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 按钮 - 保存

**功能：** 允许保存有用的脚本并将其转换为永久模板。这对于需要频繁执行的复杂查询很有用。

**保存步骤：**

- 脚本在编辑器中准备好后，单击“保存”。

- 在“保存命令”模态窗口中，输入清晰的“名称”以标识查询功能（例如：“按价格筛选产品”）。

- 单击模态窗口中的“保存”按钮以确认保存。

![保存命令按钮](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 按钮 - 记录

**功能：** 允许列出之前保存的所有脚本。

- **加载脚本：** 单击所需脚本，将其添加到“命令”区域。

- **删除：** 使用每条记录旁的垃圾桶图标，在确认后将其永久删除。

![已注册命令按钮](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)