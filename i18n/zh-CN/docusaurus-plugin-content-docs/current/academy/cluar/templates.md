---
sidebar_position: 11
id: templates
title: 模板
sidebar_label: 模板
---

页面的整体布局是如何定义的，以及如何创建新模板。

## 简介

**模板**定义了一个[页面](/docs/academy/cluar/pages/overview)的整体布局——它是页面 `template` 字段的值，并对应 `website/src/pages/Template/` 中的一个文件夹。

:::info 组件类型机制的来源
[组件类型](/docs/academy/cluar/components/types) 的机制（动态文件夹 + `info.json`）正是受这套模板机制启发，后者最初就是这样运作的。结构几乎相同，只是应用于整个页面，而不是内容区块。
:::

## 工作原理

```
website/src/pages/Template/
├── index.jsx        # 路由器：选择要渲染的模板
└── Default/
    ├── index.jsx      # 模板本身
    ├── index.less
    └── info.json       # 模板名称/描述，按语言区分
```

`Template/` 内的每个文件夹都是页面编辑表单中**模板**字段里可选的模板。文件夹名（`Default`）就是写入页面 `template` 字段的值。

默认模板的 `info.json`，例如：

```json
{
  "en": { "label": "Default", "description": "适用于使用通用样式的页面。" },
  "pt": { "label": "Padrão", "description": "适用于使用通用样式的页面。" }
}
```

:::info 下拉框使用 `info.json` 中翻译后的标签
与组件类型一样，页面表单中的模板下拉框会显示 `info.json` 中翻译后的标签（`label`）——为此，向服务发起的请求会发送当前语言（`Cluar.currentLanguage().locale`）。写入页面 `template` 字段的仍然是文件夹名（`Default`）。
:::

服务器端还有一个服务（`server/services/page/template/list/`），它会实时扫描这些文件夹并返回可用模板列表——原因相同：**添加新模板无需重启服务器**，只需创建文件夹。

与组件类型的一个区别是：模板没有 `config.json`——目前没有可按模板配置的能力，只有 `index.jsx` 和 `info.json`。

## 默认模板

**默认**模板（`Default`）是大多数页面使用的模板：它在 `Builder` 周围用站点页眉和页脚（`BaseHeader` / `BaseFooter`）包裹页面内容——`Builder` 是实际遍历并渲染页面组件（横幅、内容、列表、滑块、功能）的组件，渲染顺序由每个组件各自的排序字段定义。

:::info 页面使用无法识别的模板
如果页面的 `template` 字段不对应任何现有文件夹（例如名称拼写错误，或文件夹已被删除），CLUAR **不会失败，也不会用默认模板替代**——而是只渲染“裸”的 `Builder`，没有站点页眉和页脚。这与组件类型中的行为不同：在组件类型中，无法识别的类型会回退到默认类型。
:::

由路由器（`Template/index.jsx`）决定：

```jsx
import Default from "./Default";
import Builder from "../../common/Builder";

const Template = ({ page }) => {
  if (page.template === "Default") {
    return <Default page={page} />;
  } else {
    return <Builder page={page} />;
  }
};

export default Template;
```

注意这里只有一个显式判断（`"Default"`）——`template` 的任何其他值，无论是否可识别，都会直接进入 `else`，只渲染 `Builder`。

## 如何创建新模板

1. 在 `website/src/pages/Template/` 内创建一个新文件夹（例如 `Template/落地页/`）。
2. 在它里面创建 `index.jsx`（模板的 React 布局）、`index.less`（样式）和 `info.json`（按语言区分的标签/描述——下拉框中显示的就是这个标签）。
3. 在路由器（`Template/index.jsx`）中，导入新模板，并将其加入根据 `page.template` 字段选择模板的条件中。
4. 新模板会自动出现在页面编辑表单的模板下拉框中，并以文件夹名作为写入值。

## 下一步

探索 [权限](/docs/academy/cluar/permissions)。