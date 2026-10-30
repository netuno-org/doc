---
sidebar_position: 2
id: forms
title: 表单
---

## 如何创建表单

表单管理是用于创建和管理应用程序数据结构的区域。您在此处创建的每个表单都会成为后台中用于插入、编辑和查看数据的界面，同时还会对应数据库中的一张表。

它分为两个必需的关键步骤，另外还简要介绍**表单分组**和**图表模式**。

![form-management-pt.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - 表单标题

这是您表单的名称，因此请填写一个清晰直观的名称。
它将显示在后台侧边菜单的以下部分中：**表单**（在查看模式下）和 **管理字段**（在构建模式下）。

![form-name-title-pt.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - 表名

这是用于在数据库中创建对应表的技术名称。该名称由系统内部和开发人员使用。

**如何填写：**

- **手动：** 输入一个唯一的单数名称，使用小写字母，不包含空格或特殊字符（使用 `snake_case` 格式，例如：customer_registration）。
- **自动：** 勾选字段旁的 **自动** 复选框。系统将根据**表单标题**自动生成技术名称。这是保持一致性所推荐的做法。
- 

![form-name-table-pt.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - 表单分组（父级）

此字段允许在表单之间创建层级关系。选择"父级"后，您就定义了当前表单是所选表单的子项。它将显示在关联主表单侧边菜单的以下部分中："表单"（在查看模式下）和"管理字段"（在构建模式下）。

**如何填写：**

- 如果这是一个主表单（如"客户"），请留空。
- 如果您想创建依赖关系，请从列表中选择一个现有表单。例如，一个"地址"表单可以将"客户"作为父级。

![form-grouping-parent-pt.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - 控制选项

这些复选框会为表单启用特定功能。

- **显示 Id：** 如果您希望每条记录的唯一标识字段（ID）在表单的数据列表中可见，请勾选此选项。
- **启用状态控制：** 为每条记录启用状态控制（启用/停用）。这样可以在不将项目从数据库中删除的情况下将其停用。
- **启用用户控制：** 使表单中创建的每条记录都关联到创建该记录的用户。这对于追踪每条记录由谁创建非常有用。
- **启用组控制：** 将每条记录关联到一个用户组。此选项通常用于根据系统中注册的组来管理数据访问权限。

![form-control-options-pt.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - 排序设置与关联用户

这些字段定义新记录的默认值以及显示顺序。

- **重新排序：** 设置一个数字，用于确定此表单在侧边菜单中的显示顺序。较小的数字（如 0、1、2）会先显示。
- **用户：** 如果启用了"启用用户控制"，请选择将关联到新记录的默认用户。"通用"表示没有指定用户。
- **组：** 如果启用了"启用组控制"，请选择将关联到新记录的默认组。"通用"表示没有指定组。

![form-sort-settings-and-associated-users-pt.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - 图表模式

**图表**屏幕以图形方式展示应用程序的整个数据结构。它被称为实体关系图（ERD），显示所有表单（代表数据库中的表）、它们各自的字段以及它们之间的连接。
此工具对于快速了解应用程序的信息如何组织和连接至关重要，有助于分析和开发。

![form-diagram-pt.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> 试着创建多个表单和字段，并在图表模式下查看吧！

## 下一步

保存表单并进入下一步：创建字段！

查看[此处](/docs/academy/ui/fields)了解如何开始创建字段。