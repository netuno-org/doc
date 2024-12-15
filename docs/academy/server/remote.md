---
id: remote
title: Remote
---

## How to make HTTP calls

### Introduction

Many times in our applications we need to make HTTP requests to external services. This can be done using **_remote**.

### HTTP Calls

#### Starting the request

In order to make an HTTP call, we must first initiate it. To do this, we will use the _remote init method and then save the result of this operation in a variable called remote so that we can reference the request:

```js
const remote = _remote.init();
```

#### Indicado o método da requisição

We do not need to explicitly indicate the HTTP method in the call header, for this our call reference has a function for each HTTP method:

```js
const remote = _remote.init();

remote.post(); // for POST calls
remote.get(); // for GET calls
remote.put(); // for PUT calls
remote.delete(); // for DELETE calls
```

#### Editing HTTP Headers

```js
const remote = _remote.init();
remote.getHeader().set("KEY", "VALUE");
```

#### Indicating the request URL

To indicate the request URL, we simply need to pass it as the function's first parameter:

```js
const remote = _remote.init();

remote.post("http://example.com"); // for POST calls
remote.get("http://example.com"); // for GET calls
remote.put("http://example.com"); // for PUT calls
remote.delete("http://example.com"); // for DELETE calls
```

#### Adding data to the request

If you need to add data to the body of the call, simply pass it as the function's second parameter:

```js
const remote = _remote.init();

remote.post("http://example.com", {"user_id": 1}); // for POST calls
remote.get("http://example.com", {"user_id": 1}); // for GET calls
remote.put("http://example.com", {"user_id": 1}); // for PUT calls
remote.delete("http://example.com", {"user_id": 1}); // for DELETE calls
```

#### Reading the request response

After receiving the request response we can read its data using the **content** method:

```js
const remote = _remote.init();

const response = remote.post("http://example.com", {"user_id": 1}); // for POST calls
const response = remote.get("http://example.com", {"user_id": 1}); // for GET calls
const response = remote.put("http://example.com", {"user_id": 1}); // for PUT calls
const response = remote.delete("http://example.com", {"user_id": 1}); // for POST calls

if (response.ok()) {
    _log.info("response", response.content());
} else {
    _log.info("failed "+ response.statusCode(), response.content());
}
```