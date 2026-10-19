---
id: import
title: 导入
sidebar_label: 导入
---

## 简介

开发时，我们需要使用多个相互关联的代码文件来组织代码、复用功能以避免重复，并通过集中管理实用函数来简化维护。这通常会减少代码行数，从而大幅降低 bug 出现的概率。

因此，我们将实用代码集中到另一个代码文件中，供其他文件导入并轻松复用。

下面将演示 Netuno 提供的几种实现代码复用的方案。

## 多语言核心

在 Netuno 支持的任意编程语言中，我们都可以导入应用 `server/core` 文件夹中的任意代码文件。

Netuno 提供的简化方式是使用一种特殊的注释格式来导入代码：注释行以 `_core:` 为前缀，后面是从应用 `server/core` 文件夹开始的代码文件路径。

因此，要导入代码文件：

- `server/core/示例/文件`

> 文件应具有与所用编程语言相对应的扩展名。

可以在任意代码文件的开头导入另一个文件，例如在服务中。

对于 JavaScript、Groovy 和 Kotlin：

```javascript
// _core: 示例/文件

...
```

对于 Python 和 Ruby：

```python
# _core: 示例/文件

...
```

> 在此特殊的导入注释中不需要写文件扩展名，Netuno 会自动检测。

在导入文件中声明的变量、常量、函数、类等，可供在文件开头使用此类注释进行导入的文件使用。

要导入多个文件，只需重复导入注释并写上其他文件的路径。

对于 JavaScript、Groovy 和 Kotlin，要导入多个文件：

```javascript
// _core: 示例/文件1
// _core: 示例/文件2
// _core: 示例/文件3

...
```

对于 Python 和 Ruby，要导入多个文件：

```python
# _core: 示例/文件1
# _core: 示例/文件2
# _core: 示例/文件3

...
```

## Exec 资源

通过 `_exec` 资源，我们可以在执行过程中的任何时候导入代码。

> 可以使用在被导入代码文件中声明的变量、常量、函数、类等。

### core

要以编程方式执行代码文件导入，此处是从 `📁 server/core` 文件夹内：

```javascript
_exec.core('路径/文件')
```

> 不需要写文件扩展名，Netuno 会自动检测。

### services

要以编程方式执行代码文件导入，此处是从 `📁 server/services` 文件夹内：

```javascript
_exec.service('路径/文件')
```

> 不需要写文件扩展名，Netuno 会自动检测。

## JavaScript

Netuno 为 JavaScript 开发提供了坚实基础。JavaScript 是最常用的语言之一，尤其是在 JavaScript 中我们既能编写前端也能编写后端，因此可以使用同一种编程语言完成全栈开发。

Netuno 会分析代码并自动检测使用的是 `import`（ECMAScript Modules）还是 `require`（CommonJS）。

> 不应混用 `import` 和 `require` 模式，只能使用其中一种。

因此，我们始终可以在代码文件中使用 `.js` 扩展名；当使用带有 `import` 的语句时，Netuno 会将其作为 ECMAScript Modules 处理，这样我们就可以使用 `export default`。

> 只要有可能，推荐使用 `import`，因为它是现代标准。

### 导入代码

使用原生导入时，与前面的示例不同，只会导入根据 CommonJS（`require`）或 ECMAScript Modules（`import`）标准显式导出的内容。

在 `📁 server` 文件夹中包含 `package.json` 文件，其中应有以下声明：

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

这样我们就可以在任何其他代码文件中导入任何文件，例如：

```js title="server/services/个人资料/get.js"
import 个人资料 from "#core/lib/个人资料.js";

const 数据库个人资料 = 个人资料.获取已登录();
```

由于使用了 `import`，在被导入的文件中将使用 `export default`：

```js title="server/core/lib/个人资料.js"
import {_db, _user} from "@netuno/server-types";

export default {
  获取已登录: () => {
    return _db.form("个人资料")
      .where(_db.where("个人资料_用户_id").equal(_user.id))
      .first();
  }
};
```

> 不建议在同一个应用或项目中混用 `import`（ECMAScript Modules）和 `require`（CommonJS），即使是在不同文件或不同场景中也是如此；最好始终采用统一的规范。
> 我们推荐使用 `import`，因为它是现代方法。

另一种方式是，如果使用 `require`（CommonJS）而不是 `import`（ECMAScript Modules）：

```js title="server/services/个人资料/get.js"
const 个人资料 = require("#core/lib/个人资料.js");

const 数据库个人资料 = 个人资料.获取已登录();
```

由于使用了 `require`，在被导入的文件中将使用 `module.exports`：

```js title="server/core/lib/个人资料.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  获取已登录: () => {
    return _db.form("个人资料")
      .where(_db.where("个人资料_用户_id").equal(_user.id))
      .first();
  }
};
```

### 自动补全与代码校验

为了在编辑器中获得代码自动补全和集成代码校验功能，我们应在应用的 `📁 server` 文件夹中安装[服务器类型](https://www.npmjs.com/package/@netuno/server-types)。

> 服务器类型（`@netuno/server-types`）是用 TypeScript 定义的所有多语言低代码编程资源，它使编辑器能够检测 Netuno 多语言低代码框架提供的全部内容；但由于它是 TypeScript，仅用于辅助 JavaScript 代码。

在 `📁 server` 文件夹中安装[服务器类型](https://www.npmjs.com/package/@netuno/server-types)：

```bash
bun add @netuno/server-types
```

这样，在一般代码中就可以导入 Netuno 框架中可用的任意多语言低代码资源，例如以下服务代码：

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const 名称 = _req.getString("名称");

_db.form("产品")
  .set("名称", 名称)
  .insert();

_out.json(
  _val.map()
    .set("名称", 名称)
    .set("结果", true)
);
```

请注意，编辑器会校验并自动补全代码，这非常有用，并能大幅加快开发速度。

> 在某些编辑器中，可能需要进行一些配置/启用操作，才能将 `📁 server` 文件夹识别为代码根目录。例如，在 Visual Studio Code 中会自动检测，但在 WebStorm 中需要右键单击 `server` 文件夹，点击 `Mark Directory As > Resource Root`，然后重新打开项目。

## JS 与 NPM - 外部依赖

可以在应用内的 `📁 server` 文件夹（`package.json` 所在位置）中安装 **NPM** 外部依赖。

不过，与前面推荐的做法不同，导入外部库时我们使用 `require`，在这种情况下可以与项目内部文件的 `import` 混用；这不太优雅，但可行。

因此，要添加依赖，只需使用 `bun add` 命令安装。

例如，可以安装 `momentjs`：

- `bun add moment`

导入依赖时使用 `require`，示例如下：

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

另一个使用 `dayjs` 的示例，先安装：

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

查看一个使用 `date-fns` 的完整示例，先安装：

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import 个人资料 from "#core/lib/个人资料.js";

const 数据库个人资料 = 个人资料.获取已登录();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> 依赖外部库属于特殊情况，通常我们需要的一切都能在 Netuno 的多语言低代码框架中找到。

### NodeJS 原生模块

由于 GraalVM 与 NodeJS 原生模块并不完全兼容，为绕过这一问题，可以使用实现了这些模块替代方案的外部依赖来获得更好的兼容性。

可以安装一些替代外部依赖，它们提供与原生模块类似的兼容性。

以下是用于替代 NodeJS 原生模块的模块列表及其对应的安装命令：

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>：`bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>：`bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>：`bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>：`bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>：`bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>：`bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>：`bun add https-browserify`

请记住，应在应用内的 `📁 server` 文件夹中安装上述模块；使用这些替代模块即可提供与 NodeJS 原生模块的兼容性。

## 结论

我们可以用多种方式组织代码，但复用代码并避免重复始终非常重要。

代码行数越多，出现 bug 的可能性就越大。

请记住，要妥善组织代码并集中管理复用逻辑，这有助于维护、避免 bug，并整体提高生产力。

尽管使用外部依赖仍有一些限制，但我们正在努力改善生态。

与此同时，Netuno 提供了多种低代码和多语言资源，可满足大多数需求。