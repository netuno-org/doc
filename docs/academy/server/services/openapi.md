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

## Programmatically

In the `_schema` folder, we can use `.js` files that will be executed together with the generation of the OpenAI definition, but also in the process of validating input and output of the services.

Through schema programming, we can generate dynamic validations, for example:
- Only accept a code that exists in the database.
- With the `UID`, it obtains the record in the database and shares it with the services.
- If it is `POST` or `PUT`, it generates a different type of schema than the one generated in the case of `DELETE`.

### Example with List of Values

Imagine we have a service that receives the code of a certain category.

We cannot receive any value as a code, because it may be a value that does not correspond to a valid category code.

So we can restrict the accepted codes to only those registered in the database.

The schema is created in: `server/services/_schema/category/codes.js`

```javascript
const dbCategories = _db.query("SELECT code FROM category")

const listCodes = _val.list()

for (const dbCategory of dbCategories) {
    listCodes.add(dbCategory.getString("code"))
}

_dataSchema
    .set('type', 'string')
    .set(
        'enum',
        listCodes
    )
```

> The `listCodes` will contain all category codes registered in the database.

In the service we can have the following `JSON` that uses the `category/codes` schema:

```json
{
  "summary": "List Products in Category",
  "description": "Gets all products associated with a given category.",
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

This way we can ensure that the service is only executed if the code is valid.

### Example with Global Object

Imagine that we have several services that receive the client's `UID` and in each service we have to access the database to obtain the client's data related to its `UID`.

We can centralize this in a programmed schema that, through the client's `UID` received, obtains the client's data from the database and stores it in a global object that is accessible in the services' code.

This way, the client's data is always loaded globally and automatically when we receive a client's `UID`.

We create a programmed schema in: `server/services/_schema/client.js`

```javascript
const client = _req.getValues('client', _val.map())

if (!_service.isGeneratingOpenAPIDefinition()) {
    const dbClient = _db.get('client', client.getString("uid"))
    
    if (dbClient == null) {
        _header.status(404)
        _out.json(
            _val.map()
                .set('error', true)
                .set('code', 'client-not-found')
        )
        _service.cancel()
    }
    
    _val.global().set('client', dbClient)
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

> With `_service.isGeneratingOpenAPIDefinition()` we can validate whether it is the generation of the OpenAPI definition, otherwise it is the execution of an HTTP request.
>
> If the client's `UID` is not found, then it returns 404 and stops the execution of the service.
>
> Note that we use `_val.global()`, which allows sharing data globally between all code files that are executed in the processing of the HTTP request.

In the following example, we have a service that lists the purchases made by the client.

We have the input validation for the service in: `server/services/client/purchase/post.in.json`

```json
{
    "summary": "Purchase List",
    "description": "Lists the purchases made by the customer.",
    "type": "object",
    "properties": {
        "cliente": {
            "_schema": "client"
        }
    },
    "required": [
        "client"
    ]
}
```

> Note that the value of the client's `"_schema"` is the name of the code file that we programmed in the schema previously.

And in the code of the client purchase service in: `server/services/client/purchases/post.js`

```javascript
const dbClient = _val.global().getValues('client')
...
```

Through `_val.global()` we obtain the customer data from the database that was loaded by the schema code automatically.

### Example with HTTP Method

We can return a different schema for each type of HTTP method.

For example, we can generate a schema by code for operations to create, edit or remove network ports:

- If it is POST, it performs the creation operation, so it does not contain the UID but requires the name and port number.
- If it is PUT, it performs the editing operation, it needs to require the UID, the name and the number of the network port.
- When it is PUT or DELETE, it needs the UID to perform the respective editing and deletion operations.

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

## Summarize

Therefore with OpenAPI support we can create validation rules using JSON Schema, which offers the following advantages:

- Ensure greater security data that is injected into the services.
- Alert in `log` if the service output is not as specified.
- Easily generate a navigation interface for services and tests.

