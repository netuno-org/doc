---
id: rest
title: REST - Web Services
sidebar_label: REST - Web Services
---

## Introduction

REST requests are online addresses that return information from data processed on the server, which contains the business logic for data that requires security and reliability, with database integration.

> More about <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST" target="_blank">REST</a>

The REST API is built based on Netuno Services.

## ALL

To create a service in Netuno that responds to any type of HTTP method:

- `📂 server/services/my-service.js`

In the browser, this service will be executed for all request types at the address:

- http://localhost:9000/services/my-service

## GET

GET endpoints are normally used for listing or retrieving data operations.

To create a service in Netuno that responds only to the GET method type, use one of these forms:

- `📂 server/services/list/get.js`
- `📂 server/services/list.get.js`

In the browser, this service will be executed only for the GET request type at the address:

- GET http://localhost:9000/services/list

## POST

POST endpoints are normally used for operations that create or generate new data.

To create a service in Netuno that responds only to the POST method type, create the code file using one of these forms:

- `📂 server/services/create/post.js`
- `📂 server/services/create.post.js`

This service will be executed only for the POST request type at the address:

- POST http://localhost:9000/services/create

## PUT

PUT endpoints are normally used for operations that change data records.

To create a service in Netuno that responds only to the PUT method type, create the code file using one of these forms:

- `📂 server/services/save/put.js`
- `📂 server/services/save.put.js`

This service will be executed only for the PUT request type at the address:

- PUT http://localhost:9000/services/save

## DELETE

DELETE endpoints are normally used for operations that delete data records.

To create a service in Netuno that responds only to the DELETE method type, create the code file using one of these forms:

- `📂 server/services/remove/delete.js`
- `📂 server/services/remove.delete.js`

This service will be executed only for the DELETE request type at the address:

- DELETE http://localhost:9000/services/remove

## OPTIONS

When integrating with the frontend, during the CORS validation process, the browser makes an OPTIONS call.

> More about <a href="https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

To create a service in Netuno that responds only to the OPTIONS method type, create the code file using one of these forms:

- `📂 server/services/listing/options.js`
- `📂 server/services/listing.options.js`

It must be implemented for all services integrated into an external frontend, such as a website.

Code normally used:

```javascript
_out.json(_val.map().set("result", true))
```

This service will be executed for the OPTIONS request type at the address:

- OPTIONS http://localhost:9000/services/listing

## Clients and Test Execution

To run tests on services with a specific method type, you can use dedicated programs that test REST APIs, such as:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

With the `curl` command in the terminal, you can perform any type of test.

From the console/command line, send a GET:

```
curl http://localhost:9000/services/store
```

With `-X`, you can specify the method type:

```
curl -X POST -F 'name=Test' -F 'email=email@example.com' http://localhost:9000/services/store
```

> The `-F` parameter sends with Content-Type: `multipart/form-data`

Another way to send parameters:

```
curl -X POST -d 'name=Test' -d 'email=email@example.com' http://localhost:9000/services/store
```

It can be concatenated as follows:

```
curl -X POST -d 'name=Test&email=email@example.com' http://localhost:9000/services/store
```

> The `-d` parameter sends with Content-Type: `application/x-www-form-urlencoded`

### JSON

To send in JSON format, you must specify the content type:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "Test", "email": "email@example.com"}' \
    http://localhost:9000/services/store
```

> `-H` sets the header parameters (_HEADER_)

### Upload

To upload files:

```
curl -X POST -F 'image=@/home/user/file.jpg' http://localhost:9000/services/store
```

## Service Client - NPM

To easily integrate with the frontend, the NPM module is provided:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Installation command: `npm i -S @netuno/service-client`

When defining the services address, such as:

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

You can run services integrated with the frontend, for example:

```
  _service({
      url: "/services/my-service",
      method: 'POST',
      data: { param1: "1", param2: "2" },
      success: (response) => {
          if (response.json) {
              console.log("Service Response", response.json);
          }
      },
      fail: (e) => {
          console.log("Service Error", e);
      }
  });
```

## Conclusion

Services can be restricted to only the intended HTTP method type.

To integrate with the frontend, it can be done at the lowest level using `fetch`.

To speed up and standardize the implementation, the NPM module [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client) is provided.