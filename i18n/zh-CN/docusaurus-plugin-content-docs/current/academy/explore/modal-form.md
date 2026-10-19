---
id: modal-form
title: 模态表单
---

在模态窗口中创建和管理表单。
## 介绍

模态框是一种（UI）功能，允许用户无需离开当前页面即可打开表单。

使用模态框可以显著提升用户体验（UX），允许执行 **CRUD（创建、读取、更新、删除）** 操作，而无需重新加载页面或丢失当前屏幕的上下文。

Netuno 会自动管理与后端的通信，并注入所需的 HTML。


#### 前置条件

要实现这些示例，你需要：

- 能够访问你的 Netuno 应用程序开发环境。
- 一个已在 Netuno 管理面板（后台）中正确配置的表单。
- 具备 JavaScript 和 DOM 事件处理的基础知识。

在以下示例中，我们将使用一个名为 **“测试”** 的通用表单。

如果对这些步骤有疑问，请参阅：[表单](/docs/academy/ui/forms)。

## 基本结构

在 Netuno 中，模态框的创建和操作集中在 `netuno.modal` 对象上。

方法 **netuno.modal.create()** 会在界面中创建模态框的基础结构。它接收一个包含以下属性的配置对象：

- **name (String)：** 表单名称（在后台创建），将作为模态框的基础。
- **callback (Function)：** 模态框结构注入 DOM 后（但在显示之前）立即执行的函数，接收已创建的模态框元素作为参数。

### 回调函数

在回调函数内部，应使用原生加载函数定义表单的状态（模式）：

- **列表模式 - `netuno.loadForm()`**：渲染该表单记录的搜索和列表表格。

- **编辑/创建模式 - `netuno.loadFormEdit()`**：渲染表单的输入字段。可用于插入新记录或编辑现有记录。

## 实现
下面，我们详细说明三种最常见的用法场景。

### 1. 列表模式

当你希望用户以搜索表格（网格）格式查看表单中的所有数据时，使用 `netuno.loadForm()`。

```jsx
netuno.modal.create({
  name: '测试',
  callback: function (modal) {
    // 1. 定位用于接收表单的内部容器
    let formContainer = modal.find('[netuno-form]');
    // 2. 将表单数据列表注入容器
    netuno.loadForm(formContainer); 
    // 3. 向用户显示模态框
    netuno.modal.show(modal);
  }
});
```
### 2. 创建模式

`netuno.loadFormEdit()` 用于“添加新项”类型的按钮。它会打开一个干净的表单，准备好进行数据输入。

```jsx
netuno.modal.create({
  name: '测试',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    // 以插入模式（新记录）加载表单
    netuno.loadFormEdit(formContainer); 
    netuno.modal.show(modal);
  }
});
```

:::info
当使用 `netuno.loadFormEdit()` 而不传递 **ID** 时，Netuno 会认为你想从零开始使用“编辑屏幕”。它会加载带有空输入字段的界面，准备好创建新记录。在这种情况下，Netuno 会在内部触发 `netuno:new` 事件。
:::

### 3. 编辑模式

如果你需要模态框加载特定记录进行修改，必须将记录的 **UID** 或 **ID** 作为加载函数的第二个参数传入。

```jsx
// 示例：编辑 ID 为 1234 的记录
const recordId = 1234; 

netuno.modal.create({
  name: '测试',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    // 将记录 1234 的数据注入表单字段
    netuno.loadFormEdit(formContainer, recordId); 
    netuno.modal.show(modal);
  }
});
```


## 事件

表单容器（`[netuno-form]`）会发出自定义事件，这些事件伴随用户交互的生命周期。

建议使用这些事件来触发前端特定的业务逻辑（例如在后台更新表格、显示警报等）。

| 事件类型   | 描述    |
| ------- |--------------|
| ` netuno:new` | 显示新条目创建屏幕时触发。 |
| `netuno:edit` | 显示现有条目的编辑屏幕时触发。 |
| `netuno:save` | 添加新条目时触发。 |
| `netuno:back` | 点击返回按钮后触发。 |
| `netuno:delete` | 删除条目后触发。 |


### 示例：拦截多个事件

在这个可用于生产的示例中，我们创建模态框并添加 *监听器* 来跟踪用户操作的成功情况：

```jsx
netuno.modal.create({
  name: '测试',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    
    // 监听插入屏幕
    formContainer.on('netuno:new', function(event) {
       console.info("创建界面已加载。");
    });

    // 监听成功保存
    formContainer.on('netuno:save', function(event) {
       console.success("记录已成功保存！");
       // 示例：保存后自动关闭模态框
       netuno.modal.hide(modal); 
    });

    // 以列表模式渲染模态框并显示
    netuno.loadForm(formContainer);
    netuno.modal.show(modal);
  }
});
```
如果遇到困难或有改进建议，请联系我们。
我们的团队和社区随时准备提供帮助。

祝你开发愉快！