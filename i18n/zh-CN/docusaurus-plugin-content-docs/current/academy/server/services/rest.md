---
id: rest
title: REST - Web 服务
sidebar_label: REST - Web 服务
---

## 简介

REST 请求是返回服务器中处理后数据的在线地址，其中包含需要安全性和可靠性的数据业务逻辑，并与数据库集成。

> 更多关于 <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

REST API 的构建基于 Netuno 的服务。

## ALL

要在 Netuno 中创建响应任意 HTTP 方法类型的服务：

- `📂 server/services/我的服务.js`

在浏览器中，该服务将在以下地址对任意类型的请求执行：

- http://localhost:9000/services/我的服务

## GET

GET 类型的地址通常用于列出或获取数据的操作。

要在 Netuno 中创建仅响应 GET 方法类型的服务，请使用以下形式之一：

- `📂 server/services/列表/get.js`
- `📂 server/services/列表.get.js`

在浏览器中，该服务将仅在以下地址对 GET 类型的请求执行：

- GET http://localhost:9000/services/列表

## POST

POST 类型的地址通常用于创建或生成新数据的操作。

要在 Netuno 中创建仅响应 POST 方法类型的服务，请使用以下形式之一创建代码文件：

- `📂 server/services/创建/post.js`
- `📂 server/services/创建.post.js`

该服务将仅在以下地址对 POST 类型的请求执行：

- POST http://localhost:9000/services/创建

## PUT

PUT 类型的地址通常用于修改数据记录的操作。

要在 Netuno 中创建仅响应 PUT 方法类型的服务，请使用以下形式之一创建代码文件：

- `📂 server/services/保存/put.js`
- `📂 server/services/保存.put.js`

该服务将仅在以下地址对 PUT 类型的请求执行：

- PUT http://localhost:9000/services/保存

## DELETE

DELETE 类型的地址通常用于删除数据记录的操作。

要在 Netuno 中创建仅响应 DELETE 方法类型的服务，请使用以下形式之一创建代码文件：

- `📂 server/services/删除/delete.js`
- `📂 server/services/删除.delete.js`

该服务将仅在以下地址对 DELETE 类型的请求执行：

- DELETE http://localhost:9000/services/删除

## OPTIONS

在与前端集成时，CORS 验证过程中浏览器会发起 OPTIONS 类型的调用。

> 更多关于 <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>。

要在 Netuno 中创建仅响应 OPTIONS 方法类型的服务，请使用以下形式之一创建代码文件：

- `📂 server/services/列出/options.js`
- `📂 server/services/列出.options.js`

对于所有集成到外部前端（例如网站）的服务，都必须实现它。

通常使用的代码：

```javascript
_out.json(_val.map().set("result", true))
```

该服务将在以下地址对 OPTIONS 类型的请求执行：

- OPTIONS http://localhost:9000/services/列出

## 客户端与测试执行

要使用特定方法类型对服务执行测试，可以使用专门对 REST API 进行测试的程序，例如：

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

在终端中使用 `curl` 命令可以执行任意类型的测试。

在控制台/命令行中发送一个 GET：

```
curl http://localhost:9000/services/存储
```

使用 `-X` 可以指定方法类型：

```
curl -X POST -F '姓名=测试' -F '邮箱=email@example.com' http://localhost:9000/services/存储
```

> `-F` 参数会以 Content-Type: `multipart/form-data` 发送

发送参数的另一种方式：

```
curl -X POST -d '姓名=测试' -d '邮箱=email@example.com' http://localhost:9000/services/存储
```

也可以按以下方式拼接：

```
curl -X POST -d '姓名=测试&邮箱=email@example.com' http://localhost:9000/services/存储
```

> `-d` 参数会以 Content-Type: `application/x-www-form-urlencoded` 发送

### JSON

要以 JSON 格式发送，需要指定内容类型：

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"姓名": "测试", "邮箱": "email@example.com"}' \
    http://localhost:9000/services/存储
```

> `-H` 用于设置请求头（_HEADER_）参数

### 上传

要上传文件：

```
curl -X POST -F '图片=@/home/用户/文件.jpg' http://localhost:9000/services/存储
```

## 服务客户端 - NPM

为了便于与前端集成，提供了 NPM 模块：

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

安装命令：`npm i -S @netuno/service-client`

在设置服务地址时，例如：

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

即可执行与前端集成的服务，例如：

```
  _service({
      url: "/services/我的服务",
      method: 'POST',
      data: { 参数1: "1", 参数2: "2" },
      success: (响应) => {
          if (响应.json) {
              console.log("服务响应", 响应.json);
          }
      },
      fail: (e) => {
          console.log("服务错误", e);
      }
  });
```

## 结论

支持将服务限制为仅响应所需的 HTTP 方法类型。

与前端集成可以在最底层使用 `fetch` 完成。

为了加快并规范实现，提供了 NPM 模块 [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)。