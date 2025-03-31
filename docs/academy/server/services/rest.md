---
id: rest
title: REST Web Services
sidebar_label: REST Web Services
---

## Introduction

_Representational State Transfer_ (REST) is an architectural style that specifies constraints, such as the uniform interface, that if applied to a web service induce desirable properties, such as `performance`, `scalability`, and `modifiability`, that enable services to work best on the Web.

> About <a href="https://developer.mozilla.org/en-US/docs/Glossary/REST" target="_blank">REST</a>

_Netuno_ services are built on REST API.

## ALL

To build a _Netuno_ service that answers to any type of HTTP method:

- `📂 server/services/my-service.js`

In the browser, this service will be performed for all types of requests at the address:

- http://localhost:9000/services/my-service

## GET

For listing or data retrieval operations, GET-type addresses are normally used.

To create a service on _Netuno_ that only respondes to the GET method type, use one of the following:

- `📂 server/services/list/get.js`
- `📂 server/services/list.get.js`

Into your browser this service will be only executed for the GET request type at the address.

- GET http://localhost:9000/services/list

## POST

POST addresses are normally used for operations that create or generate new data.

To create a service on _Netuno_ that only responds to the POST method type, create the code file using one of the following options:

- `📂 server/services/create/post.js`
- `📂 server/services/create.post.js`

This service will be performed only for the POST request type at the address below:

- POST http://localhost:9000/services/create

## PUT

PUT addresses are normally used for operations that change or update data records.

To create a service on _Netuno_ that only responds to the PUT method type, create the code file using one of the below options:

- `📂 server/services/save/put.js`
- `📂 server/services/save.put.js`

This service will be only performed for the PUT order type at the below address:

- PUT http://localhost:9000/services/save

## DELETE

DELETE addresses are normally used for operations that will delete new data records.

To create a service on _Netuno_ that will only answer to the DELETE method type, create the code file using one of the following options:

- `📂 server/services/remove/delete.js`
- `📂 server/services/remove.delete.js`

This service will be only executed for the DELETE order type at the address below:

- DELETE http://localhost:9000/services/remove

## OPTIONS

Integrating with the frontend, during the CORS validation process, the browser makes an OPTIONS call.

> MORE About <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS</a>.

To create a service on _Netuno_ that will only answer to the OPTIONS method type, create the file code using one of the following options:

- `📂 server/services/list/options.js`
- `📂 server/services/list.options.js`

It should be implemented for all services that are integrated in an external frontend, such as a website.

See below the code line used:

```javascript
_out.json(_val.map().set("result", true))
```

This service will be executed for the order type OPTIONS at the address:

- OPTIONS http://localhost:9000/services/list

## Clients and Test Execution

To run tests on services with the specific type of method, you can use your own programs that perform tests on the REST API, see below example:

- <a href="https://www.postman.com/" target="_blank">Postman</a>
- <a href="https://insomnia.rest/" target="_blank">Insominia</a>

## CURL

The following `curl` command on the terminal the user will be able to execute type of test.

From the console / command line sends a GET:

```
curl http://localhost:9000/services/save
```

With `-X` can be specified the type of method:

```
curl -X POST -F 'nome=Test' -F 'email=email@example.com' http://localhost:9000/services/save
```

> The pamameter`-F` sends with the Content-Type: `multipart/form-data`

Another way to send parameters:

```
curl -X POST -d 'name=Test' -d 'email=email@example.com' http://localhost:9000/services/save
```

It can be concatenated as:

```
curl -X POST -d 'name=Test&email=email@example.com' http://localhost:9000/services/save
```

> The parameter `-d` sends with Content-Type: `application/x-www-form-urlencoded`

### JSON

To send in JSON format, it is necessary to specify the content type:

```
curl -X POST -H "Content-Type: application/json" \
    -d '{"nome": "Test", "email": "email@example.com"}' \
    http://localhost:9000/services/save
```

> To define the parameterization of the header (_HEADER_) use `-H` 

### Upload

To upload files:

```
curl -X POST -F 'image=@/home/user/file.jpg' http://localhost:9000/services/save
```

## Service Client - NPM

The NPM module is available, to easily integrate with the frontend:

- [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Instalation command: `npm i -S @netuno/service-client`

Define the services address 👇 👇

```
_service.config({
    prefix: 'http://localhost:9000/services/'
});
```

You can run services integrated with the frontend:

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

## Summarize

Only to the type of HTTP method desired, it is supported to restrict services.

To integrate with the frontend it can be done at the lowest level using `fetch`.

To streamline and standardize the implementation, the NPM module [@ netuno / service-client](https://www.npmjs.com/package/@netuno/service-client) is available.

