---
id: openapi
title: OpenAPI
sidebar_label: OpenAPI
---

Service schema definition.

## Introduction

OpenAPI is a specification that standardizes the services offered by REST APIs, helping to understand how services are defined, including address, inputs, and outputs.

It allows generating a testing interface and automatically generating clients to integrate with other technologies.

> More about <a href="https://www.openapis.org/" target="_blank">OpenAPI</a>.

## Activation and Configuration

To activate and configure OpenAPI in your Netuno application, you must edit the application configuration file for the environment you are using, such as:

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

Make sure the settings make sense; the example above is for the _development_ environment.

> In production, it is advisable to use `https`.

### _openapi.json in Services

At the root of the services, configure the `_openapi.json` file.

The full path inside the application is:

- `📂 server/services/_openapi.json`

The content of this file will be like this example:

```
{
  "info": {
    "title": "My Application",
    "description": "My Application REST API, use sparingly.",
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

Adjust the title and description to what makes sense in your case.

## Input

When configuring input _schema_ files, it allows Netuno to validate the received parameters by comparing them with the JSON Schema rules.

> More about <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

If there is any validation failure, execution of the service is prevented and an error is shown in the Netuno `log`, and the HTTP Status Code **400** (_Bad Request_) is returned to the service consumer.

To configure input parameter rules, you must create a file with the `in.json` extension alongside the service code file; the name must be the same.

- The `detail.js` service would have the `detail.in.json` file.
- The `detail.post.js` service would have the `detail.post.in.json` file.
- The `detail/post.js` service would have the `detail/post.in.json` file.

Example of `in.json` content:

```
{
    "tags":[
      "product services"
    ],
    "summary": "Product Detail",
    "description": "All detail fields of the specified product are obtained.",
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

Netuno supports some additional types that are not supported by JSON Schema, such as `string-not-empty`, `array-not-empty`, `id`, and `uid` (or `uuid` or even `guid`).

> More about this specification at <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Output

When configuring output _schema_ files, it allows Netuno to validate the sent parameters by comparing them with the JSON Schema rules.

> More about <a href="https://json-schema.org/" target="blank">JSON Schema</a>.

If there is any validation failure, the output is still sent to the service consumer, but validation failure messages are shown in the Netuno `log`.

To configure output parameter rules, you must create a file with the `out.200.json` extension alongside the service code file; the name must be the same as the service.

Where **200** is the HTTP Status Code in the response; to support multiple HTTP Status Codes, simply add more JSON files with a different number.

Some examples:
- The `save.js` service would have the `save.out.200.json` file.
- The `save.post.js` service would have the `save.post.out.200.json` file.
- The `save/post.js` service would have the `save/post.out.200.json` file.

Example of `out.200.json` content:

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

Netuno supports some additional types that are not supported by JSON Schema, such as `string-not-empty`, `array-not-empty`, `id`, and `uid` (or `uuid` or even `guid`).

> More about this specification at <a href="https://json-schema.org/learn/" target="_blank">JSON Schema Learn</a>.

## Schema Import

Netuno supports importing _schemas_, which allows reusing part of a _schema_ across multiple JSONs.

> By importing _schemas_, you avoid code duplication.

Create the `_schema` folder at the root of the services folder, in:

- `📂 server/services/_schema`

Now, in the JSON configuration, it is possible to import _schemas_ with the `_schema` parameter in the JSON, for example:

```
{
    "summary": "Delete Products",
    "description": "Allows permanently deleting products.",
    "_schema": "get/only-code.in"
}
```

This means that the `_schema/get/only-code.in.json` file will be imported where the `_schema` parameter is.

## Specification and Testing

To generate the complete specification of all services that support OpenAPI with JSON Schema, access for example:

- http://localhost:9000/services/_openapi

A JSON with the entire specification will be displayed.

To test, copy the entire generated JSON.

Open the Swagger Editor: https://editor.swagger.io/

Delete the existing content on the left side, paste the JSON, and answer yes to the question about converting JSON to YAML.

With the generated interface on the right side, it is possible to better understand all available services and perform tests.

It also allows automatically generating clients for other technologies.

## Programmatically

In the `_schema` folder, we can use `.js` files that will be executed together with the generation of the OpenAPI definition, but also in the input and output validation process of services.

Through schema programming, we can generate dynamic validations, for example:
- Only accept a code that exists in the database.
- With the `UID`, retrieve the database record and share it with the services.
- If it is `POST` or `PUT`, generate a different type of schema from the one generated for `DELETE`.

### Example with Value List

Imagine we have a service that receives the code of a specific category.

We cannot accept any value as a code, because it may be a value that does not correspond to a valid category code.

So we can restrict accepted codes to only those registered in the database.

Create the schema in: `server/services/_schema/category/codes.js`

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

> `codeList` will contain all category codes registered in the database.

In the service, we can have the following `JSON` that uses the `category/codes` schema:

```json
{
  "summary": "Lists the Products in the Category",
  "description": "Gets all products associated with a specific category.",
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

This way, we can ensure that the service only executes if the code is valid.

### Example with Global Object

Imagine that we have several services that receive the customer's `UID`, and in each service we have to access the database to obtain the data of the customer related to their `UID`.

We can centralize this in a programmed schema that, through the received customer `UID`, retrieves the customer data from the database and stores it in a global object that is accessible in the service code.

Thus, customer data is always loaded globally and automatically when we receive a customer `UID`.

Create a programmed schema in: `server/services/_schema/customer.js`

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

> With `_service.isGeneratingOpenAPIDefinition()` we can check whether it is the generation of the OpenAPI definition; otherwise, it is the execution of an HTTP request.
> 
> If the customer `UID` is not found, then it returns 404 and interrupts service execution.
> 
> Note that we use `_val.global()`, which allows sharing data globally among all code files executed during HTTP request processing.

Following the example, we have a service that lists the purchases made by the customer.

We have the input validation for the service in: `server/services/customer/purchases/post.in.json`

```json
{
    "summary": "Purchase List",
    "description": "Lists the purchases made by the customer.",
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

> Note that the customer's `"_schema"` value is the name of the code file we programmed in the schema earlier.

And in the customer purchases service code in: `server/services/customer/purchases/post.js`

```javascript
const dbCustomer = _val.global().getValues('customer')
...
```

Through `_val.global()`, we obtain the customer data from the database that was automatically loaded by the schema code.

### Example with HTTP Method

We can return a different schema for each type of HTTP method.

For example, we can generate a schema by code for operations to create, edit, or remove network ports:

- If it is POST, it performs the create operation, so it does not contain the UID but requires the name and port number.
- If it is PUT, it performs the edit operation and must require the UID, the name, and the network port number.
- When it is PUT or DELETE, it requires the UID to perform the respective edit and remove operations.

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

## Videos

Below are some example videos on how to develop an API integrated with OpenAPI:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/SaeaMh_zwRg?si=oNt_rOcL8Xuu4qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Conclusion

With OpenAPI support, we can create validation rules using JSON Schema, which offers the following advantages:

- Ensure greater security for data injected into services.
- Alert in the `log` if the service output is not as specified.
- Easily generate a service navigation and testing interface.