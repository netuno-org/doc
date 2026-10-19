---
id: sending-emails
title: 邮件发送
sidebar_label: 邮件发送
---
## 开始之前

在继续之前，请确保您具备 _**JavaScript**_ 基础知识，并且已经通过 [学院](/docs/academy/overview) 中提供的分步教程掌握了 Netuno 的基础知识。

## 邮件发送演示

使用 Netuno 发送邮件非常简单，无论是要添加附件，还是要在内容中嵌入图片（对于签名很有用）。

Netuno 自带的名为 **demo** 的应用（演示应用）包含多种语言的大量代码实现示例，其中包括通过 `mail-send` 服务发送邮件的演示，该服务位于：

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## 配置
第一步是配置 Netuno 用于发送邮件的 SMTP 账户。

为此，请在您正在开发的应用中找到环境配置文件。在本示例中，我们将使用位于以下位置的开发环境文件：

* `config/_development.json`

检查是否还没有 SMTP 配置；如果尚未存在，请在配置文件（JSON 格式）末尾添加 SMTP 配置参数：

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

如果配置的是 Gmail，只需将星号替换为您的凭据，并在 Gmail 账户设置中启用 SMTP 连接。否则，请将所有参数替换为您自己 SMTP 账户的参数。

保存更改后，只需重启 Netuno 即可应用配置更改。顾名思义，`default` 表示用于发送邮件的默认配置。

```json
...
    "default": {
        ...
    }
...
```

您可以添加更多 SMTP 账户，但只能将其中一个设置为默认账户。

要添加更多 SMTP 账户，只需重复默认 SMTP 配置块，并将名称 `default` 换成您选择的其他名称，例如：

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "测试": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

类似上述示例的配置允许在代码中按以下方式调用时使用 `default` 账户：

```javascript
const smtp = _smtp.init()
```

要使用 `测试` 配置，只需将配置名称作为参数传给 `_smtp.init()` 函数，如下所示：

```javascript
const smtp = _smtp.init("测试")
```

> 如果未将配置名称作为参数传入，则始终使用默认账户。

## 详细代码
现在让我们仔细分析 Netuno 提供的示例代码。这里使用的是 JavaScript，结构如下：

初始化 SMTP：

```javascript
const smtp = _smtp.init()
```

> 请记住，您可以使用其他配置启动，例如：`_smtp.init("测试")`

为 smtp 变量添加 `.to` 可设置邮件收件人地址；如果有多个收件人，只需用 “;” 或 “,” 分隔：

```javascript
smtp.to = '*****@gmail.com'
```

添加 `.from` 可设置邮件发件人地址：

```javascript
smtp.from = '*****@gmail.com'
```

添加 `.cc` 可设置邮件抄送收件人地址；如果有多个抄送收件人，只需用 “;” 或 “,” 分隔：

```javascript
smtp.cc = '*****@gmail.com'
```

`.bcc` 也是如此，用于设置密送收件人：

```javascript
smtp.bcc = '*****@gmail.com'
```

添加 `.subject` 可设置邮件主题：

```javascript
smtp.subject = 'Netuno 测试'
```

添加 `.text` 可设置纯文本内容：

```javascript
smtp.text = '你收到这封邮件了吗？'
```

添加 `.html` 可设置邮件的 HTML 内容：

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
你收到这封邮件了吗？</p>
</div>`
```

要添加图片作为附件，可按上面的示例操作；在 HTML 中，为图片（`img`）的 `src` 属性添加 `cid:`（**C**ontent **ID**）前缀，后面紧跟通过 `attachment` 函数添加附件时定义的 `cid`（如下所示）。

要将附加图片添加到邮件，请按以下方式为 smtp 变量添加 `.attachment`：

```javascript
smtp.attachment(
    "logo.png", // 文件
    "image/png", // 文件格式
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // 文件位置
    "logo" // 在 "cid:logo" 中定义的变量名
)   
```

> 请注意，只有要将附件中的图片嵌入邮件的 HTML 内容时才需要 `cid`（**C**ontent **ID**）。

要添加不嵌入 HTML 的附件（例如文档），请按以下方式操作：

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

最后，要提交邮件发送，只需插入以下代码：

```javascript
smtp.send()
```

最后，如果所有配置都正确，您将收到类似以下内容的邮件：

![邮件发送示例1.png](/docs/assets/envio-emails1.png)

> 请注意，具体显示效果可能因您的电子邮件客户端而与上图有所不同。

## 使用模板的完整示例

像上面的示例那样将 HTML 内容直接放在代码中并不太优雅：

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
你收到这封邮件了吗？</p>
</div>`
```

为避免这种情况并保持代码更简洁优雅，应将 HTML 内容作为模板导入，如下所示：

`smtp.html = _template.getOutput('email/contact', data)`

在本示例中，应用配置中的 SMTP 配置如下：

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "my.server.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "网站联系 - ",
            "from": "noreply@my.domain.com",
            "to": "info@my.domain.com",
            "username": "noreply@my.domain.com",
            "password": "S3gr3d0"
        }
    },
...
```

请注意下面这个完整的服务代码示例如何使用，它可以放在文件 `server/services/contact.js` 中：

```
const name = _req.getString("name")
const email = _req.getString("email")
const subject = _req.getString("subject")
const message = _req.getString("message")

const smtp = _smtp.init("contact")

smtp.subject = subject

smtp.text = "HTML 内容。"

const data = _val.map()
      .set("name", name)
      .set("email", email)
      .set("subject", subject)
      .set("message", message)

smtp.html = _template.getOutput('email/contact', data)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("result", true)
)
```

> 模板的相对路径中不需要包含 `.html` 扩展名；请注意，还可以选择将信息传入模板。

模板的 HTML 内容必须定义在一个单独的文件中，该文件应放在 `server/templates/` 文件夹内；此路径从应用的根文件夹开始查找。 

按照上面的示例，示例模板文件将位于：

- `server/templates/email/contact.html`

此文件的示例内容可以是：

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      网站联系
    </h1>
    <p>姓名：_{&data=name}</p>
    <p>邮箱：_{data=email}</p>
    <p>标题：_{&data=subject}</p>
    <p>_{&data=message}</p>
  </div>
</div>

```

当使用 `_{data=...}` 向模板注入数据时，如果需要对 HTML 特殊字符进行编码，则需添加 `&`，即变为 `_{&data=...}`；等号 `=` 后面代替 `...` 的内容是要注入内容的键。

## 高级配置

环境配置 `config/_*.json` 支持更多高级配置。

代码中使用的 `smtp` 属性（如 `.from`、`.to`、`.cc`、`.bcc`、`.subject`、`.text` 和 `.html`）可以在配置中设置默认值，如下所示：

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "默认标题...",
        "text": "默认内容... 好的！",
        "html": "<p>默认内容... <b>好的！</b></p>"
        ...
    }
...
```

> 预先定义 `.from` 非常有用，因为邮件通常总是从同一地址发送。

还支持其他配置。完整列表如下：

| 参数    | 类型   | 默认值      | 描述    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | 启用或禁用邮件发送。 |
| `debug` | boolean | false | 启用调试模式，将显示详细描述与服务器通信的消息。 |
| `protocol` | string |  | 定义协议类型：smtp 或 smtps。 |
| `host` | string |  | SMTP 服务器的名称或 IP。 |
| `port` | integer | 465 | SMTP 服务器端口号。 |
| `ssl` | boolean | true | 启用 SSL。 |
| `tls` | boolean | false | 启用 TLS。 |
| `socketFactoryFallback` | boolean | true | 如果 Socket 生成失败，则使用原生 java.net.Socket。 |
| `socketFactoryClass` | string |  | 定义实现 javax.net.SocketFactory 接口的类，用于为 SMTP 生成 Socket。 |
| `socketFactoryPort` | integer |  | 定义 Socket 应使用的端口。 |
| `quitWait` | boolean | false | 启用后，在 QUIT 命令后等待服务器响应；禁用后，在 QUIT 命令后立即断开与服务器的连接。 |
| `authMechanisms` | string |  | 身份验证机制列表，默认是 “LOGIN PLAIN DIGEST-MD5 NTLM”，因此支持所有机制。 |
| `authNTLMDomain` | string |  | NTLM 身份验证域。 |
| `username` | string |  | 定义与服务器进行身份验证时使用的用户名。 |
| `html` | string |  | 电子邮件的 HTML 内容。 |
| `password` | string |  | 定义与服务器进行身份验证时使用的密码。 |
| `from` | string |  | 发件人的电子邮件地址。 |
| `to` | string |  | 收件人的电子邮件地址，可以添加多个邮箱，用 “;” 或 “,” 分隔。 |
| `cc` | string |  | 抄送收件人的电子邮件地址，可以添加多个邮箱，用 “;” 或 “,” 分隔。 |
| `bcc` | string |  | 密送收件人的电子邮件地址，可以添加多个邮箱，用 “;” 或 “,” 分隔。 |
| `subjectPrefix` |  | string | 定义电子邮件标题的前缀，从而确保所有发送的邮件都带有该前缀。 |
| `subject` | string |  | 电子邮件主题。 |
| `text` | string |  | 电子邮件的纯文本内容。 |

如果您有任何问题，请随时通过页面末尾提供的方式联系我们。

祝开发顺利！