---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

## Introduction

An open API, also called public API, is an application programming interface made publicly available to software developers. 

Open APIs are published on the internet and shared freely, allowing the owner of a network-accessible service to give a universal access to consumers.

An API is a software intermediary that makes it possible for application programs to interact with each other and share data. 

It's often used regarding REST APIs that expose a specific service or software functionality while protecting the rest of the application.

> About <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Configure and Activation

To activate and configure OpenAPI in your application on _Netuno_ you need to edit the application settings file for the environment you are using, such as:

- `📂 config/_development.json`
- `📂 config/_production.json`

Enter and adjust the following parameters:

```
...
    "openapi": {
        "host": "http://my-app.local.netu.no:9000",
        "basePath": "/services",
        "schemes": [ "http" ],
        "servers": [
            {
                "url": "http://my-app.local.netu.no:9000/services",
                "description": "Local Development"
            }
        ]
    },
...
```

Make sure the settings make sense, the example above is for the environment _development_.

> Should be used during development `https`.

### _openapi.json in Services

In the service root configure the file `_openapi.json`.

The complete way within application is:

- `📂 server/services/_openapi.json`

Below you can see an example of how is the content of this file:

```
{
  "info": {
    "title": "My application",
    "description": "REST API of My Application use sparingly.",
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

Adjust the title and description to what makes sense for you.

## Input

When configuring _schema_ files for inputs, it allows _Netuno_ to validate the parameters received when comparing them with the JSON Schema rules.

> More about <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

If there is any failure in the validation, the execution of the service is prevented and an error is presented in the _Netuno_ `log` and, for those who consume the service the HTTP Status Code ** 400 ** (_Bad Request_) is returned.

To configure the rules of the input parameters will be necessary to create a file with the extension `in.json` next to the service code file, the name should be the same.

- The service `detalhe.js` should have a file `detalhe.in.json`.
- The service `detalhe.post.js` should have a file `detalhe.post.in.json`.
- The service `detalhe/post.js` Should have a file `detalhe/post.in.json`.

Example of the content in `in.json`:

```
{
    "tags":[
      "product services"
    ],
    "summary": "Product Details",
    "description": "All detail fields for the specified product are obtained.",
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

_Netuno_ is supported by some additional types that are not supported by JSON Schema, such as `string-not-empty`,` array-not-empty`, `id` and` uid` (or `uuid` or` guid` ).

> Learn about <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Output

When configuring output _schema files, it allows _Netuno_ to validate the parameters sent when comparing them with JSON Schema rules.

> About <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

In case there is any failure in the validation the output is still sent to those who consume the service, but the messages of validation failures are presented in the `log` of _Netuno_.

To configure the rules of the output parameters, it is necessary to create a file with the extension `out.200.json` next to the service code file, the name should be the same as the service.

Where the **200** is the HTTP Status Code that goes as and response, to support multiple HTTP Status Code just add more JSON files with the different number.

Some examples:
- The service `guardar.js` would have to have the file `guardar.out.200.json`.
- The service `guardar.post.js` would have to have the file`guardar.post.out.200.json`.
- The service `guardar/post.js` would have to have the file `guardar/post.out.200.json`.

Example of the content `out.200.json`:

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

_Netuno_ is supported by some additional types that are not supported by JSON Schema, such as `string-not-empty`,` array-not-empty`, `id` and` uid` (or `uuid` or` guid`).

> More about this specification <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Schema Import

_Netuno_ supports importing _schemas_, which allows to use part of _schema_ in multiple JSONs.

> Avoid code repetition importing _schemas_ .

Create a file `_schema` at the root of the services folder:

- `📂 server/services/_schema`

Now in the JSON configuration it is possible to import _schemas_ with the parameter `_schema` in JSON, for example:

```
{
    "summary": "Delete Products",
    "description": "Allows you to permanently eliminate products.",
    "_schema": "get/only-code.in"
}
```

This means that the file `_schema/get/only-code.in.json` will be imported where the parameter` _schema` is.

## Tests and Specifications

To generate the complete specification of all services that support OpenAPI with JSON Schema, click on the example:

- http://localhost:9000/services/_openapi

A JSON will be presented with the entire specification.

To test just copy all the generated JSON.

Open the Swagger editor: https://editor.swagger.io/

Delete the content on the left and paste the JSON and answer yes in the question of converting from JSON to YAML.

With the generated interface on the right side it is possible a better understanding of all available services and perform tests.

It also allows you to automatically generate customers for other technologies.

## Summarize

Therefore with OpenAPI support we can create validation rules using JSON Schema, which offers the following advantages:

- Ensure greater security data that is injected into the services.
- Alert in `log` if the service output is not as specified.
- Easily generate a navigation interface for services and tests.

