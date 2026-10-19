---
sidebar_position: 4
id: service-client
title: Client for HTTP Services and REST API
sidebar_label: Client for Services
---

## Introduction

In the Netuno technology ecosystem, some modules are provided on NPM, such as:

- [Service Client](https://www.npmjs.com/package/@netuno/service-client)

> See also the [Service Client GIT repository](https://github.com/netuno-org/service-client).

This module is used to perform integrations with services developed in Netuno, that is, the REST API endpoints
developed in the Netuno backend, inside the `server/services` folder in Netuno applications.

It is common when developing services to use programs such as:

- [Pororoca](https://pororoca.io/) 
- [Yaak](https://yaak.app/)
- [API Dash](https://apidash.dev/)
- [Requestly](https://requestly.com/)
- [Bruno](https://www.usebruno.com/)
- [Scalar](https://scalar.com/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

To test HTTP requests against the services.

In frontend code, to integrate these services, we could use fetch, requests, AXIOS, and many others.

However, Netuno provides its own client, which works in JavaScript frontend development as
well as in NodeJS backend development.

The reason Netuno has its own HTTP client implementation for services is to provide greater
convenience, simplifying code implementation and ensuring greater agility in development.

## Installation

Installing the service client is like installing any other module.

Where we have the `package.json` file, we run the installation command:

```bash
bun add @netuno/service-client
```

## Import

To import the service client in modern JavaScript development:

```js
import _service from '@netuno/service-client';
```

To import the service client in classic JavaScript development:

```js
const _service = require('@netuno/service-client');
```

Note that the internal name in the code is `_service`.

> By default, Netuno uses `_` as a prefix to indicate that something is internal or specific, such as a resource
> or a tool from its ecosystem.

Therefore, to keep the standard, we should always use the name `_service`.

## Configuration

Configuration is done globally; the configuration is defined once,
and it is convenient to run it at an initial point in the general code.

This will be the minimum configuration:

```js
_service.config({
  prefix: 'http://localhost:9000/services/'
});
```

That is, it defines the prefix for service addresses, which avoids
the need to always include the full URL, so in service
calls we can indicate only the rest of the URL.

### Complete Configuration

We can configure default values for all service
calls, and in each service call we can override
these values.

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

It is the part of the URL that is appended to the prefix, the specific
address of the service.

#### method

The HTTP method that will be used in the HTTP request, by
default it is `GET`.

#### credentials

Defines the behavior of credentials in HTTP calls:

- `omit` - Never sends or receives credentials.
- `same-origin` - Only sends and includes credentials when
requests are made to the same domain.
- `include` - Should always include credentials, even if the domain is different.

By default, the value is `include`, because it makes the most sense in
standard development; the backend may or may not be on the same domain
depending on the architecture, and in local development it sometimes differs
from production, so to avoid surprises we recommend using
`include`.

#### headers

In `headers` we can define keys and values in the HTTP header.

By default, it is defined that data will be sent and received in
JSON format.

#### start

A `callback` function executed when the HTTP request is about to start.

#### success

A `callback` function executed when the HTTP request was executed
successfully on the backend server.

The response content is obtained in the first argument of the function.

#### fail

A `callback` function executed when the HTTP request generated some
error.

The error details are obtained in the first argument of the function.

#### end

A `callback` function executed when the HTTP request has completed.

It is always executed, regardless of whether there was success or error.

## Usage

To execute a service with an HTTP request, we define the values
of the parameters that configure the requirements of the service.

In the `data` key we send the data itself, that is, all the data
parameters that we will send to the backend service.

See the basic example of a request:

```js
import _service from '@netuno/service-client';

_service({
  url: "my-service",
  data: { id: 1, example: "Hello backend." },
  start: () => {
    console.log("The request is about to start.");
  },
  success: (response) => {
    if (response.text) {
      console.info("Responded in text:", response.text);
    }
    if (response.json) {
      console.info("Responded in JSON:", response.json);
    }
  },
  fail: (error) => {
    console.error("Failed with error:", error);
  },
  end: () => {
    console.log("The request has completed.");
  }
});
```

The final URL will take into account the prefix defined globally in the
general configuration.

Since the HTTP method was not defined, it will be sent with the
default method defined in the general configuration, which by
default is `GET`.

### Simple

Simple example of how to execute a `POST` request:

```js
import _service from '@netuno/service-client';

_service({
  method: "POST",
  url: "product",
  data: { name: "Straw Hat", quantity: 20 },
  success: ({json}) => {
    console.info("Product created successfully:", json);
  },
  fail: (error) => {
    console.error("Failed to create product:", error);
  }
});
```

### Form

When we use forms, we can load the FormData class with the form contents; see the example:

```js
import _service from '@netuno/service-client';

const formData = new FormData(document.getElementById("form"));
_service({
  method: "PUT",
  url: "customer",
  data: formData,
  success: ({json}) => {
    if (json.result === true) {
      alert("Customer updated successfully.");
    } else {
      alert("Invalid response.");
    }
  },
  fail: (e) => {
    console.log("Error", e);
  }
});
```

### Upload

Simple example of how to upload files using the `FormData` class:

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
    alert('File uploaded successfully.');
  },
  fail: (e) => {
    console.log("Error in Response", e);
  }
});
```

### Download

We can download files generated dynamically by services in an integrated way within the
page context.

#### BLOB - Binary Large Object

To download binary responses, we must define `blob` with the value `true` in the base parameters,
and we obtain the generated bytes in the response's `blob`.

```js
import _service from '@netuno/service-client';

_service({
  url: "/download",
  method: 'POST',
  data: { uid: "98e25c93-d662-4b5c-8b89-d19b42e2c998", type: "pdf" },
  blob: true, // Defines that the response is binary.
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

In the code it can be used as follows:

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

There are situations where we need to generate the URL for services, for example, when there are services that provide resources
that must be integrated into HTML or CSS.

A clear example is the Avatar; the user defines their avatar image, and to display it we can generate the final URL
as follows:

```js
const avatarLink = _service.url(`/profile/avatar?uid=${user.uid}`)
```

The generated URL can be injected into HTML or into a CSS property, such as background.

### React & Ant.Design

Since we use React and Ant.Design a lot, here are some useful tips.

The classic imports:

```js
import React, {useState} from "react";
import { Form, notification } from 'antd';
import _service from '@netuno/service-client';
```

Define the processing state:

```js
const [loading, setLoading] = useState(false);
```

Implementation of the event to save a form, which will send the object with the filled-in values in JSON format:

```js
const onFinish = (values) => {
  const onFail = () => {
    notification.error({
      title: 'Error',
      description: 'Could not save the data.'
    });
  };
  _service({
    url: '/services/customer',
    method: 'POST',
    data: values,
    start: () => {
      setLoading(true);
    },
    success: ({json}) => {
      if (json.result === true) {
        notification.success({
          title: 'Success',
          description: 'Data saved successfully.'
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

In the Ant.Design form component, you define the action property that sends the data with the event
previously implemented, for example:

```jsx
  <Form onFinish={onFinish}>
    ...
  </Form>
```

#### Upload

Here is a complete example of how to upload files using an Ant.Design form and
FormData:

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
          title: 'Form',
          description: 'Your data was saved successfully.'
        });
      },
      fail: (e) => {
        console.error("Upload Form Failed", e);
        notification.error({
          title: 'Form',
          description: 'Could not save your data.'
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
        rules={[{ required: true, message: 'Please enter the title.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="File" name="file"
        rules={[{ required: true, message: 'Please enter the file.' }]}
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
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadForm;
```

## Conclusion

The Service Client speeds up backend integration to obtain and send data and files.

It is possible to use any other native method or another dependency to perform these operations; however, the
Service Client is developed to make integrations easier and faster, being flexible and very intuitive.

The main purpose of Netuno providing the Service Client in its ecosystem is to ensure that development is
clear and fast.

When using the Service Client, if you encounter any problem, report it in the project's [Issues](https://github.com/netuno-org/service-client/issues).

⭐ Remember to give your star on the project's GitHub:

- [netuno-org/service-client](https://github.com/netuno-org/service-client).