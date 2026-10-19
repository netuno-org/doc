---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

服务架构定义。

## 简介

OpenAPI 是一种规范，用于标准化 REST API 提供的服务，帮助理解服务如何定义，例如地址、输入和输出。

它支持生成测试界面，并自动生成客户端以与其他技术集成。

> 更多关于 <a href="https://www.openapis.org/" target="_blank">OpenAPI</a> 的信息。

## 激活与配置

要在 Netuno 应用中激活并配置 OpenAPI，需要编辑应用对应所使用环境的配置文件，例如：

- `📂 config/_development.json`
- `📂 config/_production.json`

插入并调整以下参数：

```
...
    "openapi": {
        "host": "http://my-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://my-app.local.netu.no:9000/services",
                "description": "本地开发"
            }
        ]
    },
...
```

请确保这些配置合理；上面的示例用于 _development_ 环境。

> 在生产环境中，建议使用 `https`。

### 服务中的 _openapi.json

在服务根目录中，配置 `_openapi.json` 文件。

应用内的完整路径为：

- `📂 server/services/_openapi.json`

该文件的内容如下例所示：

```
{
  "info": {
    "title": "我的应用",
    "description": "我的应用的 REST API，请谨慎使用。",
    "version": "1.0"
  },
  "components": {
    "securitySchemes": {
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

请根据你的实际情况调整标题和描述。

## 输入

配置输入的 _schema_ 文件后，Netuno 可以将收到的参数与 JSON Schema 规则进行比较，从而执行验证。

> 更多关于 <a href="https://json-schema.org/" target="blank">JSON Schema</a> 的信息。

如果验证失败，将阻止服务执行，并在 Netuno 的 `log` 中显示错误；对于服务调用方，则返回 HTTP 状态码 **400**（_Bad Request_）。

要配置输入参数的规则，需要在服务代码文件旁创建一个扩展名为 `in.json` 的文件，且名称必须相同。

- 服务 `detail.js` 需要具有文件 `detail.in.json`。
- 服务 `detail.post.js` 需要具有文件 `detail.post.in.json`。
- 服务 `detail/post.js` 需要具有文件 `detail/post.in.json`。

`in.json` 的内容示例：

```
{
    "tags":[
      "产品服务"
    ],
    "summary": "产品详情",
    "description": "获取指定产品的所有详情字段。",
    "type": "object",
    "properties": {
      "uid": {
        "type": "uid"
      }
    },
    "required": [
      "uid"
    ]
}
```

Netuno 支持一些 JSON Schema 不支持的其他类型，例如 `string-not-empty`、`array-not-empty`、`id` 和 `uid`（或 `uuid`，也可写作 `guid`）。

> 更多关于此规范的内容，请参阅 <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>。

## 输出

配置输出的 _schema_ 文件后，Netuno 可以将发送的参数与 JSON Schema 规则进行比较，从而执行验证。

> 更多关于 <a href="https://json-schema.org/" target="blank">JSON Schema</a> 的信息。

如果验证失败，输出仍会发送给服务调用方，但验证失败消息会显示在 Netuno 的 `log` 中。

要配置输出参数的规则，需要在服务代码文件旁创建一个扩展名为 `out.200.json` 的文件，名称必须与服务相同。

其中 **200** 是响应中的 HTTP 状态码；要支持多个 HTTP 状态码，只需添加更多使用不同数字的 JSON 文件。

一些示例：
- 服务 `save.js` 需要具有文件 `save.out.200.json`。
- 服务 `save.post.js` 需要具有文件 `save.post.out.200.json`。
- 服务 `save/post.js` 需要具有文件 `save/post.out.200.json`。

`out.200.json` 的内容示例：

```
{
    "type": "object",
    "properties": {
      "result": {
        "type": "boolean"
      }
    },
    "required": [
      "result"
    ]
}
```

Netuno 支持一些 JSON Schema 不支持的其他类型，例如 `string-not-empty`、`array-not-empty`、`id` 和 `uid`（或 `uuid`，也可写作 `guid`）。

> 更多关于此规范的内容，请参阅 <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>。

## Schema 导入

Netuno 支持导入 _schema_，从而可以在多个 JSON 中复用 _schema_ 的一部分。

> 导入 _schema_ 可以避免代码重复。

在服务文件夹根目录中创建 `_schema` 文件夹，路径为：

- `📂 server/services/_schema`

现在，在 JSON 配置中，可以通过 `_schema` 参数导入 _schema_，例如：

```
{
    "summary": "删除产品",
    "description": "允许永久删除产品。",
    "_schema": "get/only-code.in"
}
```

这意味着将导入 `_schema/get/only-code.in.json` 文件，其中包含 `_schema` 参数。

## 规范与测试

要生成所有支持 OpenAPI 与 JSON Schema 的服务的完整规范，例如访问：

- http://localhost:9000/services/_openapi

将显示包含完整规范的 JSON。

要测试，请复制生成的整个 JSON。

打开 Swagger 编辑器：https://editor.swagger.io/

删除左侧现有的内容并粘贴该 JSON，然后在询问是否将 JSON 转换为 YAML 时回答“是”。

通过右侧生成的界面，可以更好地了解所有可用服务并进行测试。

它还允许为其他技术自动生成客户端。

## 以编程方式

在 `_schema` 文件夹中，我们可以使用 `.js` 文件；这些文件会在生成 OpenAPI 定义时执行，也会在服务的输入和输出验证过程中执行。

通过编写 schema 程序，我们可以生成动态验证，例如：
- 只接受数据库中存在的代码。
- 使用 `UID` 获取数据库中的记录，并与服务共享。
- 如果是 `POST` 或 `PUT`，则生成与 `DELETE` 情况下不同的 schema 类型。

### 值列表示例

假设我们有一个服务，它接收某个类别的代码。

我们不能接受任意值作为代码，因为它可能不是有效的类别代码。

因此，我们可以限制只接受数据库中已注册的代码。

在 `server/services/_schema/category/codes.js` 中创建 schema：

```javascript
const dbCategories = _db.query("SELECT code FROM category")

const codeList = _val.list()

for (const dbCategory of dbCategories) {
    codeList.add(dbCategory.getString("code"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        codeList
    )
```

> `codeList` 将包含数据库中注册的所有类别代码。

在服务中，我们可以使用以下 `JSON`，它使用 `category/codes` schema：

```json
{
  "summary": "列出类别中的产品",
  "description": "获取与指定类别关联的所有产品。",
  "type": "object",
  "properties": {
    "category": {
      "type": "object",
      "properties": {
        "code": {
          "_schema": "category/codes"
        }
      },
      "required": [
        "code"
      ]
    }
  },
  "required": [
    "category"
  ]
}
```

这样，我们就能确保仅当代码有效时才执行服务。

### 全局对象示例

假设我们有多个服务接收客户的 `UID`，并且每个服务都必须访问数据库，以获取与该 `UID` 相关的客户数据。

我们可以将这一点集中到一个编程式 schema 中：它通过收到的客户 `UID` 从数据库获取客户数据，并将其存储到一个全局对象中，该对象可在服务代码中访问。

这样，当我们收到客户 `UID` 时，客户数据总会自动全局加载。

我们在 `server/services/_schema/customer.js` 中创建一个编程式 schema：

```javascript
const customer = _req.getValues('customer', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbCustomer = _db.get('customer', customer.getString("uid"))
    
    if (dbCustomer == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'customer-not-found')
        )
        _service.cancel()
    }
    
    _val.global().set('customer', dbCustomer)
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        _val.map()
            .set(
                'uid',
                _val.map()
                    .set('type', 'uid')
            )
    )
    .set(
        'required',
        _val.list()
            .add('uid')
    )
```

> 使用 `_service.isGeneratingOpenAPIDefinition()` 可以判断当前是否正在生成 OpenAPI 定义；否则就是在执行 HTTP 请求。
> 
> 如果找不到客户的 `UID`，则返回 404 并中断服务执行。
> 
> 注意，我们使用了 `_val.global()`，它允许在处理 HTTP 请求期间执行的所有代码文件之间全局共享数据。

继续这个示例，我们有一个服务，用于列出客户完成的购买。

该服务的输入验证位于：`server/services/customer/purchases/post.in.json`

```json
{
    "summary": "购买列表",
    "description": "列出客户完成的购买。",
    "type": "object",
    "properties": {
        "customer": {
            "_schema": "customer"
        }
    },
    "required": [
        "customer"
    ]
}
```

> 注意，客户对应的 `"_schema"` 值是我们在前面的 schema 中编写的代码文件名。

在客户购买服务的代码中：`server/services/customer/purchases/post.js`

```javascript
const dbCustomer = _val.global().getValues('customer')
...
```

通过 `_val.global()`，我们可以获取由 schema 代码自动加载的数据库客户数据。

### HTTP 方法示例

我们可以为每种 HTTP 方法类型返回不同的 schema。

例如，我们可以通过代码为创建、编辑或删除网络端口的操作生成 schema：

- 如果是 POST，则执行创建操作，因此不包含 UID，但要求提供名称和端口号。
- 如果是 PUT，则执行编辑操作，需要提供 UID、名称和网络端口号。
- 当方法为 PUT 或 DELETE 时，需要 UID 来执行相应的编辑和删除操作。

```javascript
const properties = _val.map()
const required = _val.list()

if (_dataSchema.isMethod('PUT') || _dataSchema.isMethod('DELETE')) {
    properties.set(
        'uid',
        _val.map()
            .set('type', 'uid')
    )
    required.add('uid')
}

if (!_dataSchema.isMethod('DELETE')) {
    properties
        .set(
            'name',
            _val.map()
                .set('type', 'string-not-empty')
                .set('pattern', '^[a-zA-Z0-9-_\\.]{1,16}$')
        )
        .set(
            'port',
            _val.map()
                .set('type', 'integer')
                .set('minimum', portMinimum)
                .set('maximum', portMaximum)
        )
    required
        .add('name')
        .add('port')
}

_dataSchema.set('type', 'object')
    .set(
        'properties',
        properties
    )
    .set(
        'required',
        required
    )
```

## 视频

以下是一些示例视频，展示如何开发与 OpenAPI 集成的 API：

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 结论

借助 OpenAPI 支持，我们可以使用 JSON Schema 创建验证规则，这带来以下优势：

- 确保注入服务的数据具有更高的安全性。
- 当服务输出不符合规范时，在 `log` 中发出警告。
- 轻松生成服务浏览和测试界面。