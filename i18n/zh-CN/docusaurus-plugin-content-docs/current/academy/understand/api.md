---
sidebar_position: 3
id: api
title: API
---

Netuno 拥有自己的框架，可以以低代码方式创建 REST API，并支持 JWT（JSON Web Token）和 OpenAPI 3.0。

Netuno 中用于开发 Web 服务的整个框架都非常灵活，允许进行任何类型的开发。

该框架已经为低代码开发带来了许多功能，节省了大量代码行，用于实现最常见的需求，例如发送邮件、调用其他 REST API、与其他数据库集成、生成 PDF 和 Excel 文件、发送短信、操作数据库数据等等。

而当 Netuno 框架中没有现成解决方案时，可以轻松集成已有的 Java、Kotlin 甚至 JavaScript 库，以开发定制资源并与 Netuno 框架集成。

## JWT - JSON Web Token

[JWT.io](https://jwt.io/) 是用于通过 JSON 对象将会话上下文数据传递给客户端的标准规范。

因此，服务器无需在会话中保存已登录用户的敏感数据，而是将其转换为一个令牌传递给客户端，随后在每个请求中都必须返回该令牌。

该令牌会经过一些安全控制，例如有效期限制，以及一个允许在不要求重新认证的情况下创建新令牌的流程。

Netuno 已集成对 JWT 的支持，使用简单方便，并且还能与 Netuno 原生的用户和认证机制集成。

## OpenAPI 3.0

在 Swagger v1 和 v2 取得成功之后，它们早已成为 Web 服务定义开发和客户端代码生成的标准。

因此，Swagger 将其规范开放，并演变成为 [OpenAPI 3](https://www.openapis.org/)。

它仍然是定义 API 如何被文档化以及如何生成消费 API 的客户端的标准基础。

Netuno 已带来与 OpenAPI 3.0 的完整集成，并结合 [JSON Schema](https://json-schema.org/) 的校验来使用 OpenAPI 定义。

也就是说，Netuno 还允许校验 Web 服务的输入和输出，借助对获取和返回的 JSON 的 schema 校验，从而：

- `输入`：如果对 Web 服务的调用不符合结构和校验规则，则会被拒绝
- `输出`：如果返回的数据不符合定义的结构和校验规则，则会生成一个警报，提示该 Web 服务不符合规范。

因此，Netuno 既省去了编写大量用于校验接收数据的 `if` 代码，又能保证对 Web 服务生成的结果进行校验，相当于执行了一次_单元测试_。

此外，Netuno 生成的 OpenAPI 结构还可以配合 [Swagger 编辑器](https://editor.swagger.io/) 使用，以生成测试界面、文档以及用于其他技术的 API 客户端代码。

## 基础

Netuno 也支持无需复杂配置即可创建 Web 服务和认证，也就是说，并非必须使用 JWT 或 OpenAPI，尽管这是默认推荐的做法。

很多时候，为了加快 API 的创建，或者在涉及服务器之间通信的场景中，人们会选择尽可能地简化，从而节省更多时间。

> Netuno 允许实现 [HTTP 认证](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication)。

