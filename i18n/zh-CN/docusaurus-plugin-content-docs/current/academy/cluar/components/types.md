---
sidebar_position: 2
id: types
title: 组件类型
sidebar_label: 组件类型
---

## 什么是组件类型

每个[组件](/docs/academy/cluar/components/overview)都有一个**类型**字段，用于定义渲染时采用哪种视觉变体。该字段并非数据库中固定的列表——它是**动态的**，由 `website/src/components/<组件>/` 内存在的文件夹构建而成。例如，对于 Banner：

```
website/src/components/Banner/
├── index.jsx           # “路由器”组件：选择要渲染的类型
├── Default/
│   ├── index.jsx        # 变体本身
│   ├── index.less
│   ├── info.json        # 类型的名称/描述，按语言
│   └── config.json       # 类型能力（例如：是否支持操作）
├── Secondary/
│   └── ...
└── DefaultSubBanner/
    └── ...
```

`Banner/` 中的每个文件夹都是该组件编辑表单里**类型**字段中可选择的**类型**（例如，在页面上添加或编辑 Banner 时，该表单中会显示包含可用类型的选择框）。

在下拉框中，用户**看到**的是 `info.json` 中定义的翻译标签（例如：“默认”），但组件 `type` 字段中**写入**的是**文件夹名称**（例如：`Default`）——随后“路由器”组件会使用这个文件夹名称来选择要渲染的变体（见下文 [`info.json` 与 `config.json`](#infojson-与-configjson)）。

> 像 `DefaultSubBanner` 这样的文件夹名称中的 “Sub” 并不表示它是嵌套在另一个类型内部的子文件夹——它只是与其他类型同级的又一个类型，只是其命名约定表示它是基础类型的一个更低调/次要的变体。

### `info.json` 与 `config.json`

- **`info.json`** —— 按语言定义类型的标签和描述。编辑表单的下拉框中显示的就是该标签（`label`）：
  ```json
  {
    "en": { "label": "Default", "description": "Add a banner." },
    "zh": { "label": "默认", "description": "添加一个横幅。" }
  }
  ```
- **`config.json`** —— 定义类型的能力。目前唯一的参数是 `action`，它控制是否在表单中显示“操作”区域，以及该类型是否渲染该区域：
  ```json
  { "action": true }
  ```

这两个文件由服务器上的服务（`server/services/components/<组件>/list/`）实时读取；该服务会遍历 `website/src/components/<组件>/` 中的文件夹，并返回可用类型列表——这正是该组件编辑表单中“类型”下拉框的数据来源。因此，**添加新类型无需重启服务器，也无需修改数据库**——只需创建文件夹即可。

在“路由器”组件（`Banner/index.jsx`）中，写入的 `type` 用于决定导入并渲染哪个变体：

```jsx
if (props.type === "Default") {
  layout = <Default {...props} actions={renderedActions} />;
} else if (props.type === "Secondary") {
  layout = <Secondary {...props} actions={renderedActions} />;
} else if (props.type === "DefaultSubBanner") {
  layout = <DefaultSubBanner {...props} actions={renderedActions} />;
}
```

## 如何创建新类型

1. 在 `website/src/components/<组件>/` 中创建一个新文件夹（例如：`Banner/Highlight/`）。
2. 在其中创建 `index.jsx`（该变体的 React 组件）、`index.less`（样式）、`info.json`（按语言的标签/描述）和 `config.json`（包含 `action: true` 或 `false`）。
3. 在父组件的 `index.jsx` 中（例如：`Banner/index.jsx`），导入新组件，并将其添加到按 `type` 选择变体的条件中。
4. 新类型会自动出现在该组件编辑表单的“类型”下拉框中，并以文件夹名称作为写入值。

## 下一步

详细了解每个组件：[Banner](/docs/academy/cluar/components/banner)、[内容](/docs/academy/cluar/components/content)、[列表](/docs/academy/cluar/components/listing)、[滑块](/docs/academy/cluar/components/slider)、[功能](/docs/academy/cluar/components/functionality)。