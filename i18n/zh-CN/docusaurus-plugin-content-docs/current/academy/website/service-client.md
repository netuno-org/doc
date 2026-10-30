---
sidebar_position: 4
id: service-client
title: HTTP 服务和 REST API 客户端
sidebar_label: 服务客户端
---

## 介绍

Netuno 技术生态系统中提供了一些 NPM 模块，例如：

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> 另请参阅 [Service Client 的 GIT 仓库](https://github.com/netuno-org/service-client)。

该模块用于与 Netuno 中开发的服务进行集成，即 Netuno 后端开发的 REST API 端点，位于 Netuno 应用程序中的 `server/services` 文件夹内。

在服务开发中，通常会使用以下程序：

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

用于对服务进行 HTTP 请求测试。

在前端代码中集成这些服务时，我们可以使用 fetch、requests、AXIOS 以及许多其他工具。

然而，Netuno 提供了自己的客户端，它既可用于 JavaScript 前端开发，也可用于 NodeJS 后端。

Netuno 之所以拥有自己的服务 HTTP 客户端实现，是为了提供更大的便利性，简化代码实现并确保更高的开发敏捷性。

## 安装

服务客户端的安装与安装任何其他模块一样。

在包含 `package.json` 文件的位置，执行安装命令：

```bash
bun add @netuno/service-client
```

## 导入

在现代 JavaScript 开发中导入服务客户端：

```js
import _service from '@netuno/service-client';
```

在经典 JavaScript 开发中导入服务客户端：

```js
const _service = require('@netuno/service-client');
```

请注意，代码中的内部名称为 `_service`。

> 默认情况下，Netuno 使用 `_` 作为前缀，表示这是其生态系统中的内部或特定内容，例如资源或工具。

因此，为了保持这一模式，我们应始终使用名称 `_service`。

## 配置

配置是全局进行的，只需定义一次配置，最好在通用代码的起始位置执行。

以下是最小配置：

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

也就是说，它定义了服务地址的前缀，从而避免总是填写完整 URL，这样在调用服务时只需指定 URL 的剩余部分。

### 完整配置

我们可以为所有服务调用配置默认值，而在调用每个服务时可以覆盖这些值。

查看我们可以配置的所有参数：

```js
_service.config({
  prefix: '',
  url: '',
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  },
  start: () => { },
  success: (data) => { },
  fail: (data) => {},
  end: () => { }
});
```

#### prefix

它是 URL 的全局前缀。

#### url

它是追加到前缀的 URL 部分，即服务的具体地址。

#### method

将在 HTTP 请求中使用的 HTTP 方法，默认是 `GET`。

#### credentials

定义 HTTP 调用中凭据的行为：

- `omit` - 从不发送也不接收凭据。
- `same-origin` - 仅当请求同一域名时发送并包含凭据。
- `include` - 始终包含凭据，即使域名不同。

默认值是 `include`，因为它在标准开发中最合理，后端是否在同一域名取决于架构，并且本地开发有时与生产环境不同，因此为避免意外，建议使用 `include`。

#### headers

在 `headers` 中，我们可以定义 HTTP 头部的键和值。

默认情况下，定义发送和接收的数据格式为 JSON。

#### start

当 HTTP 请求即将开始时执行的回调函数。

#### success

当 HTTP 请求在后端服务器上成功执行时执行的回调函数。

响应内容通过函数的第一个参数获取。

#### fail

当 HTTP 请求产生错误时执行的回调函数。

错误详情通过函数的第一个参数获取。

#### end

当 HTTP 请求完成时执行的回调函数。

无论成功还是出错，它都会执行。

## 使用

要使用 HTTP 请求执行服务，我们定义配置服务需求的参数值。

在 `data` 键中发送数据本身，即我们将发送到后端服务的所有数据参数。

查看一个基本请求示例：

```js
import _service from '@netuno/service-client';

_service({
  url: "我的服务",
  data: { id: 1, 示例: "你好，后端。" },
  start: () => {
    console.log("请求即将开始。");
  },
  success: (response) => {
    if (response.text) {
      console.info("以文本响应：", response.text);
    }
    if (response.json) {
      console.info("以 JSON 响应：", response.json);
    }
  },
  fail: (error) => {
    console.error("失败，错误：", error);
  },
  end: () => {
    console.log("请求已完成。");
  }
});
```

最终 URL 会考虑在全局配置中定义的前缀。

由于未定义 HTTP 方法，因此将使用全局配置中定义的默认方法，默认是 `GET`。

### 简单

执行 `POST` 类型请求的简单示例：

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "产品",
  data: { 名称: "草帽", 数量: 20 },
  success: ({json}) => {
    console.info("产品创建成功：", json);
  },
  fail: (error) => {
    console.error("创建产品失败：", error);
  }
});
```

### 表单

使用表单时，我们可以将表单内容加载到 FormData 类中，查看示例：

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("表单"));
_service({
  method: "PUT",
  url: "客户",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("客户更新成功。");
    } else {
      alert("无效响应。");
    }
  },
  fail: (e) => {
    console.log("错误", e);
  }
});
```

### 上传

使用 `FormData` 类上传文件的简单示例：

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('文件', document.getElementById("文件字段").files[0]);
formData.append('另一个字段', '值...');
_service({
  method: "PUT",
  url: "/上传",
  data: formData,
  success: ({json}) => {
    alert('文件上传成功。');
  },
  fail: (e) => {
    console.log("响应错误", e);
  }
});
```

### 下载

我们可以在页面上下文中集成下载由服务动态生成的文件。

#### BLOB - 大型二进制对象

要下载二进制响应，我们必须在基础参数中将 `blob` 设置为 `true`，并从响应的 `blob` 中获取生成的字节。

```js
import _service from '@netuno/service-client';

_service({
  url: "/下载",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // 定义响应为二进制。
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("无效响应。");
    }
  },
  fail: (e) => {
    console.log("错误", e);
  }
});
```

#### 自定义文件

文件名和类型可以在前端自定义，[DownloadJS](https://www.npmjs.com/package/downloadjs) 依赖在此过程中非常有用。

安装 [DownloadJS](https://www.npmjs.com/package/downloadjs) 依赖：

```shell
bun add downloadjs
```

在代码中可以按以下方式使用：

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/报告/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "报告.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("错误", e);
  }
});

_service({
  url: "/services/报告/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "报告.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("错误", e);
  }
});
```

### 服务 URL

有些情况下我们需要生成服务 URL，例如当某些服务提供的资源需要集成到 HTML 或 CSS 中时。

一个明显的例子是头像，用户设置其头像图片，为了展示，我们可以按以下方式生成最终 URL：

```js
const 头像链接 = _service.url(`/个人资料/头像?uid=${user.uid}`)
```

生成的 URL 可以注入到 HTML 或 CSS 属性中，例如 background。

### React 与 Ant.Design

由于我们大量使用 React 和 Ant.Design，以下是一些有用的提示。

经典导入：

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

定义处理状态：

```js
const [loading, setLoading] = useState(false);
```

保存表单的事件实现，它会以 JSON 格式发送包含已填写值的对象：

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: '错误',
      description: '无法保存数据。'
    });
  };
  _service({
    url: '/services/客户',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: '成功',
          description: '数据已成功保存。'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("服务失败。", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

在 Ant.Design 的表单组件中，设置提交操作属性，使用先前实现的事件来发送数据，例如：

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### 上传

以下是一个完整示例，展示如何使用 Ant.Design 中的表单和 FormData 上传文件：

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function 上传表单() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("标题", values.标题);
    formData.append("文件", values.文件.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "文件/保存",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: '表单',
          description: '您的数据已成功保存。'
        });
      },
      fail: (e) => {
        console.error("上传表单失败", e);
        notification.error({
          title: '表单',
          description: '无法保存您的数据。'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="标题" name="标题"
        rules={[{ required: true, message: '请输入标题。' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="文件" name="文件"
        rules={[{ required: true, message: '请选择文件。' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>上传</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          保存
        </Button>
      </Form.Item>
    </Form>
  );
}

export default 上传表单;
```

## 结论

Service Client 可加快与后端的集成，以获取和发送数据及文件。

可以使用任何其他原生方法或其他依赖来执行这些操作，但 Service Client 旨在促进和加快集成，灵活且非常直观。

Netuno 在其生态系统中提供 Service Client 的主要目的是确保开发清晰且快速。

使用 Service Client 时，如果遇到任何问题，请在项目的 [Issues](https://github.com/netuno-org/service-client/issues) 中报告。

⭐ 记得在项目的 GitHub 上给它点星：

- [netuno-org/service-client](https://github.com/netuno-org/service-client)。