---
id: cors
title: CORS
sidebar_label: CORS
---

应用程序中的 CORS 配置。

## 简介

CORS（跨源资源共享，Cross Origin Resource Sharing）是浏览器执行的一种验证过程，用于验证是否可以集成由另一个地址共享的资源。

在以下情况下会用到：

- 使用 webpack 服务器开发前端层时，例如使用 ReactJS 和 VueJS 等现代技术开发 Web 界面（网站或 Web 应用）。
- 前端地址与服务地址不同时，例如服务运行在地址 `http://localhost:9000` 而前端运行在地址 `http://localhost:3000`。
- 在生产环境中，例如服务运行在自己的子域名 `api.example.com` 下，而前端运行在 `www.example.com` 下。

> 关于 CORS 的更多信息：
> - <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">维基百科</a>
> - <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS" target="_blank">Mozilla</a>

Netuno 已准备好以简单且即时的方式完成 CORS 的集成。

## 配置

CORS 配置在应用程序的配置文件中完成，具体取决于环境。

为此，请在正在开发的应用程序内导航到环境配置文件。在此示例中，我们将使用位于以下位置的开发环境文件：

- 📂 `config/_development.json`

请检查是否已存在 CORS 配置，如果不存在，请在配置文件（JSON 格式）末尾添加以下配置参数：

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

> CORS 配置是一个数组，支持多条不同的 CORS 规则。

### 源

在 `origins` 参数中，是与服务集成的前端地址列表。

### 生产环境

在生产环境中，我们必须将前端在线运行所用的地址定义为源。

应用程序中定义 `cors` 的配置文件应因环境而异。

应用程序的配置文件应为：

- 📂 `config/_production.json`

CORS 配置示例：

```json title="config/_production.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "https://my-project.com", "https://www.my-project.com" ]
        }
    ]
    ...
}
```

应用程序的配置文件是根据 Netuno 环境配置确定的 `_production.json`，其位于 `netuno/config.js` 文件中：

```javascript title="netuno/config.js"
config.env = 'production'
```

## 响应头（HTTP Header）

默认的响应头（HTTP 协议的 Header）为：

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization
Access-Control-Allow-Expose-Headers: Content-Length,Content-Range
Access-Control-Allow-Credentials: true
```

要自定义默认响应头，请添加配置参数 `header`，例如：

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "header": {
                "Access-Control-Allow-Headers": "Authorization"
            },
            "origins": [ "http://localhost:3000", "http://127.0.0.1:3000" ]
        }
    ]
    ...
}
```

在上面的示例中，该响应头将仅接受 `Authorization`，而不是之前定义的所有其他项。

您可以添加新的响应头定义，例如替换默认定义。

## 手动方式

除了使用 Netuno 的自动机制外，您也可以手动配置 CORS。

在您的 Netuno 应用程序中，只需修改以下文件：

- `📂 server/core/_request_url.js`

并使用以下代码：

```javascript title="server/core/_request_url.js"
const httpHeaderOrigin = _header.getString("Origin", "null")

if (httpHeaderOrigin == 'https://www.my-app.com'
	|| httpHeaderOrigin == 'http://localhost'
	|| httpHeaderOrigin == 'http://localhost:3000') {
	_header.response.set("Access-Control-Allow-Origin", httpHeaderOrigin)
	_header.response.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
	_header.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,authorization")
	_header.response.set("Access-Control-Allow-Credentials", true)
}
```

请注意，在上面的代码中，`if` 会根据源地址（`Origin`）限制 'Headers'。

请记得将其调整为将要使用的地址。

> 这样，您应用程序的所有服务和地址都将支持 CORS 响应头。

### 仅用于独立服务

如果您希望通过仅对特定服务启用响应头来提高安全级别，请在以下文件中使用相同的代码逻辑：

- `📂 server/core/_service_config.js`

而不是在以下文件中：

- `📂 server/core/_request_url.js`

## 结论

配置 CORS 后，Netuno 将自动为配置为 `origins` 的地址返回默认的响应头（HTTP 协议的 Header）。

默认的 `headers` 可以自定义和修改。

您可以配置多条 CORS 规则。

尽管 Netuno 支持通过编程方式手动配置 CORS 规则，但最好使用集成在应用程序配置中的自动机制。