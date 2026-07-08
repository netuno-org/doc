---
sidebar_position: 4
id: service-client
title: Service Client for HTTP and API REST
sidebar_label: Service Client
---

## Introduction

The Netuno technology ecosystem provides several modules on NPM, such as:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> See alo the [Service Client GIT](https://github.com/netuno-org/service-client).

Este módulo serve para realizar as integrações com os serviços desenvolvidos no Netuno, ou seja, os endpoints 
da API REST desenvolvidos no backend do Netuno, dentro da pasta `server/services` nas aplicações Netuno.

É comum no desenvolvimento dos serviços utilizar programas como:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

To perform HTTP request tests on services.

In the frontend code to integrate these services, we could use fetch, requests, AXIOS, and many others.

However, Netuno provides its own client, which works in both JavaScript frontend development and NodeJS backend development.

The reason Netuno has its own HTTP client implementation for services is to provide greater practicality, simplifying code implementation and ensuring greater agility in development.

## Installation

Installing the services client is like installing any other module.

Where we have the `package.json` file we execute the installation command:

```bash
bun add @netuno/service-client
```

## Importing

To import the service client in modern JavaScript development:

```js
import _service from '@netuno/service-client';
```

To import the service client in classic JavaScript development:

```js
const _service = require('@netuno/service-client');
```

Note that the internal name in the code is `_service`.

> By default, Neptune uses `_` as a prefix to indicate that it is something internal or specific, such as a 
> resource or a tool, within its ecosystem.

Therefore, to maintain consistency, we should always use the name `_service`.

## Configuration

The configuration is done globally; it is defined only once. It is advisable to execute it at an initial point in 
the overall code.

This will be the minimum configuration:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

In other words, it defines the prefix for service addresses, which avoids the need to always include the complete 
URL, so when calling services we can indicate only the rest of the URL.

### Full Setup

We can configure default values for all service calls, and in each service call we can override these values.

See all the parameters we can configure:

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

It is the global URL prefix.

#### url

It's the part of the URL that's added to the prefix, the specific address of the service.

#### method

The HTTP method that will be used in the HTTP request is, by default, `GET`.

#### credentials

Defines the behavior of credentials in HTTP calls:

- `omit` - Never sends or receives credentials.
- `same-origin` - Only sends and includes credentials when requests are on the same domain.
- `include` - Must always include credentials, even if the domain is different.

By default, the value is `include`, as it makes the most sense in
standard development, the backend may or may not be in the same domain
it depends on the architecture, and in local development it sometimes differs
from production, so to avoid surprises we recommend using `include`.

#### headers

In the `headers` section, we can define keys and values in the HTTP header.

By default, it is defined that data will be sent and received in JSON format.

#### start

Callback function executed when the HTTP request is about to begin.

#### success

The `callback` function is executed when the HTTP request has been successfully executed on the backend server.

The response content is obtained from the function's first argument.

#### fail

The `callback` function is executed when the HTTP request generates an error.

The error details are obtained from the function's first argument.

#### end

The `callback` function is executed when the HTTP request is completed.

It is always executed, regardless of whether the request was successful or resulted in an error.

## Usage

To execute a service with an HTTP request, we define the values of the parameters that configure the service 
requirements.

In the `data` key, we send the data itself, that is, all the data parameters that we will send to the backend 
service.

See the basic example of a request:

```js
import _service from '@netuno/service-client';

_service({
  url: "my-service",
  data: { id: 1, exemplo: "Hi backend." },
  start: () => {
    console.log("The request will begin.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Text response:", response.text);
    }
    if (response.json) {
      console.info("JSON response:", response.json);
    }
  },
  fail: (error) => {
    console.error("It failed due to error:", error);
  },
  end: () => {
    console.log("The request has been completed.");
  }
});
```

The final URL will take into account the prefix defined globally in the general configuration.

Since the HTTP method was not defined, it will be sent using the default method defined in the general 
configuration, which by default is `GET`.

### Simple

A simple example of how to execute a `POST` request:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "product",
  data: { nome: "Straw Hat", quantidade: 20 },
  success: ({json}) => {
    console.info("Product successfully created:", json);
  },
  fail: (error) => {
    console.error("Failed to create product:", error);
  }
});
```

### Form

When using forms, we can load the FormData class with the form's content, see the example:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("formulario"));
_service({
  method: "PUT",
  url: "client",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Client updated successfully.");
    } else {
      alert("Invalid reponse.");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

### Upload

A simple example of how to upload files using the `FormData` class:

```js
import _service from '@netuno/service-client';

const formData = new FormData();
formData.append('uid', 'c476964a-eb8b-40d1-8907-4fee2e1532fb');
formData.append('file', document.getElementById("fileField").files[0]);
formData.append('otherField', 'value...');
_service({
  method: "PUT",
  url: "/upload",
  data: formData,
  success: ({json}) => {
    alert('File sent successfully.');
  },
  fail: (e) => {
    console.log("Reponse Error", e);
  }
});
```

### Download

We can download files dynamically generated by services in an integrated way within the context of the page.

#### BLOB - Large Binary Object

To download binary responses, we must set `blob` to the value `true` in the base parameterization,
and obtain the bytes generated in the response's `blob`.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // It defines the response as binary.
  success: ({blob}) => {
    if (blob) {
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    } else {
        alert("Invalid response.");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

#### Custom File

The file name and type can be customized in the frontend; the [DownloadJS](https://www.npmjs.com/package/downloadjs) dependency is very useful in this process.

Install the [DownloadJS](https://www.npmjs.com/package/downloadjs) dependency:

```shell
bun add downloadjs
```

In the code, it can be used as follows:

```js
import _service from '@netuno/service-client';
import download from 'downloadjs';

_service({
  url: "/services/report/excel",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "report.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});

_service({
  url: "/services/report/pdf",
  blob: true,
  success: ({ blob }) => {
    if (blob) {
      download(blob, "report.pdf", "application/pdf");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

### URL for Services

There are situations where we need to generate service URLs, for example, when there are services that provide 
resources that need to be integrated into the HTML or CSS.

A clear example is the Avatar; the user defines their avatar image, and to display it we can generate the 
final URL as follows:

```js
const avatarLink = _service.url(`/profile/avatar?uid=${user.uid}`)
```

The generated URL can be injected into the HTML or into a CSS property, such as the background.

### React & Ant.Design

Since we use React and Ant.Design a lot, here are some useful tips.

Classic imports:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Define the processing state:

```js
const [loading, setLoading] = useState(false);
```

Implementation of the event to save a form, which will send the object with the filled values in JSON format:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: 'Error',
      description: 'The data could not be saved.'
    });
  };
  _service({
    url: '/client',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Success',
          description: 'The data was saved successfully.'
        });
        return;
      }
      onFail();
    },
    fail: (e) => {
      console.error("Service Failed.", e);
      onFail();
    },
    end: () => {
        setLoading(false);
    },
  });
};
```

In the Ant.Design form component, the action property that sends the data is defined using the previously 
implemented event, for example:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Upload

Here is a complete example of how to upload files using a form in Ant.Design and with FormData:

```jsx
import {useState} from 'react';
import _service from '@netuno/service-client';
import {Button, Form, Input, Upload, notification} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function UploadForm() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values)=> {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("file", values.file.fileList[0].originFileObj);
    _service({
      method: "POST",
      url: "file/save",
      data: formData,
      start: () => {
        setLoading(true);
      },
      success: () => {
        notification.success({
          title: 'Upload Form',
          description: 'Your data was successfully saved.'
        });
      },
      fail: (e) => {
        console.error("Upload Form Failed", e);
        notification.error({
          title: 'Upload Form',
          description: 'Unable to save your data.'
        });
      },
      end: () => {
        setLoading(false);
      }
    });
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Title" name="title"
        rules={[{ required: true, message: 'Please input your title.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="File" name="file"
        rules={[{ required: true, message: 'Please choose your file.' }]}
      >
        <Upload listType="text" maxCount={1}>
          <button type="button" style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'inherit'}}>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadForm;
```

## Conclusion

The Service Client streamlines backend integration for retrieving and sending data and files.

While it's possible to use any other native method or dependency to perform these operations, the Service Client 
is designed to facilitate and expedite integrations, being flexible and highly intuitive.

The main goal of Netuno providing the Service Client within its ecosystem is to ensure clear and fast development.

If you encounter any problems while using the Service Client, please report them in the project's 
[Issues](https://github.com/netuno-org/service-client/issues).

⭐ Remember to star the project on GitHub:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).
