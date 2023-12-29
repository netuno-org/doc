---
id: remote
title: Remote
sidebar_label: Remote
---

Recurso de invocação remota de APIs.
O Remote facilita esta integração e torna simples a integração com web services externos via REST e SOAP.

---

## acceptJSON

---

#### _remote.acceptJSON() : _[Remote](../../resources/Remote)_
##### Description

Defines that the content will be received in the application/json.

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## alwaysBodyData

---

#### _remote.alwaysBodyData() : _[Remote](../../resources/Remote)_
##### Description

Forces data to go in the body of the HTTP header, even in the case of the <code>GET</code> method.

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## asBinary

---

#### _remote.asBinary() : _[Remote](../../resources/Remote)_
##### Description

Defines that the content data received by the remote connection is in binary format, such as downloading files, images, zip, etc...

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## asForm

---

#### _remote.asForm() : _[Remote](../../resources/Remote)_
##### Description

Defines that the data content will be submitted in the application/x-www-form-urlencoded format.

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## asJSON

---

#### _remote.asJSON() : _[Remote](../../resources/Remote)_
##### Description

Defines that the data content will be submitted in the application/json format.

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## asMultipartFormData

---

#### _remote.asMultipartFormData() : _[Remote](../../resources/Remote)_
##### Description

Defines that the data content will be submitted in the multipart/form-data format.

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## asText

---

#### _remote.asText() : _[Remote](../../resources/Remote)_
##### Description

Defines that the data content will be submitted in the text/plain format.

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## delete

---

#### _remote.delete() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Submit the request for remote connection using the DELETE method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(url: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address it submits the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## get

---

#### _remote.get() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Submit the request for remote connection using the GET method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(url: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address it submits the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## getAuthorization

---

#### _remote.getAuthorization() : string
##### Return

( string )


---

## getCharset

---

#### _remote.getCharset() : string
##### Return

( string )


---

## getConnectTimeout

---

#### _remote.getConnectTimeout() : _int_
##### Return

( _int_ )


---

## getContentType

---

#### _remote.getContentType() : string
##### Return

( string )


---

## getData

---

#### _remote.getData() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getDefaultSubmitData

---

#### _remote.getDefaultSubmitData() : string
##### Return

( string )


---

## getFormData

---

#### _remote.getFormData() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getHeader

---

#### _remote.getHeader() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getQS

---

#### _remote.getQS() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getQueryString

---

#### _remote.getQueryString() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getReadTimeout

---

#### _remote.getReadTimeout() : _int_
##### Return

( _int_ )


---

## getSOAPAction

---

#### _remote.getSOAPAction() : string
##### Return

( string )


---

## getSOAPNS

---

#### _remote.getSOAPNS() : string
##### Return

( string )


---

## getSOAPURL

---

#### _remote.getSOAPURL() : string
##### Return

( string )


---

## getStatusCode

---

#### _remote.getStatusCode() : _int_
##### Return

( _int_ )


---

## getURL

---

#### _remote.getURL() : string
##### Return

( string )


---

## getURLPrefix

---

#### _remote.getURLPrefix() : string
##### Return

( string )


---

## init

---

#### _remote.init() : _[Remote](../../resources/Remote)_
##### Description

Starts a new Remote.

##### Return

( _[Remote](../../resources/Remote)_ )

New Remote instance.

---

#### _remote.init(configName: string) : _[Remote](../../resources/Remote)_
##### Description

Starts a new Remote based on the configuration key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configName | string | Name of the configuration that will be used. |

##### Return

( _[Remote](../../resources/Remote)_ )

New Remote instance.

---

#### _remote.init(configName: _[Values](../../objects/Values)_) : _[Remote](../../resources/Remote)_
##### Description

Starts a new Remote based on the configuration key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configName | _[Values](../../objects/Values)_ | Name of the configuration that will be used. |

##### Return

( _[Remote](../../resources/Remote)_ )

New Remote instance.

---

## isAlwaysDataBody

---

#### _remote.isAlwaysDataBody() : _boolean_
##### Return

( _boolean_ )


---

## isBinary

---

#### _remote.isBinary() : _boolean_
##### Return

( _boolean_ )


---

## isFollowRedirects

---

#### _remote.isFollowRedirects() : _boolean_
##### Return

( _boolean_ )


---

## isForm

---

#### _remote.isForm() : _boolean_
##### Return

( _boolean_ )


---

## isJSON

---

#### _remote.isJSON() : _boolean_
##### Return

( _boolean_ )


---

## isMultipartFormData

---

#### _remote.isMultipartFormData() : _boolean_
##### Return

( _boolean_ )


---

## isText

---

#### _remote.isText() : _boolean_
##### Return

( _boolean_ )


---

## json

---

#### _remote.json(method: string, url: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned address it submits as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.json(method: string, url: string, data: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | string | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.json(method: string, url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.json(method: string, url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## patch

---

#### _remote.patch() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Submit the request for remote connection using the PATCH method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(url: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address it submits the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## ping

---

#### _remote.ping(host: string) : _boolean_
##### Description

Check whether the server name or IP is available.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| host | string | Server name or IP. |

##### Return

( _boolean_ )

Result if address is available.

---

## portListening

---

#### _remote.portListening(host: string, port: _int_) : _boolean_
##### Description

Checks if the port is available for a server name or IP.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| host | string | Server name or IP. |
| port | _int_ | Port number. |

##### Return

( _boolean_ )

Result if port is available.

---

## post

---

#### _remote.post() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Submit the request for remote connection using the POST method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(url: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address it submits the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## put

---

#### _remote.put() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Submit the request for remote connection using the PUT method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(url: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address it submits the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the assigned address and data map, submit the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

With the map of assigned data it submits the request for remote connection through the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## setAlwaysBodyData

---

#### _remote.setAlwaysBodyData(alwaysDataBody: _boolean_) : _[Remote](../../resources/Remote)_
##### Description

Forces data to go in the body of the HTTP header, even in the case of the <code>GET</code> method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| alwaysDataBody | _boolean_ | Defines whether the data should always go in the header body of the HTTP communication that will be sent over the remote connection. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setAuthorization

---

#### _remote.setAuthorization(authorization: string) : _[Remote](../../resources/Remote)_
##### Description

Defines the exact content of the authorization that will header the communication that will be sent on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| authorization | string | Content of the authorization to be submitted. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

#### _remote.setAuthorization(username: string, password: string) : _[Remote](../../resources/Remote)_
##### Description

Defines the content of the basic authorization with user and password that goes to the header of the communication that will be sent on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| username | string | Username of the authorization to be submitted. |
| password | string | Password of the authorization to be submitted. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setBinary

---

#### _remote.setBinary(binary: _boolean_) : _[Remote](../../resources/Remote)_
##### Description

Defines that the content data received by the remote connection is in binary format, such as downloading files, images, zip, etc...

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| binary | _boolean_ | It will be downloading files. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setCharset

---

#### _remote.setCharset(charset: string) : _[Remote](../../resources/Remote)_
##### Description

Defines the character encoding to be used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| charset | string | Character encoding code. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setConnectTimeout

---

#### _remote.setConnectTimeout(timeout: _int_) : _[Remote](../../resources/Remote)_
##### Description

Sets the timeout to stabilize the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| timeout | _int_ | Timeout in milliseconds. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setContentType

---

#### _remote.setContentType(contentType: string) : _[Remote](../../resources/Remote)_
##### Description

Defines the type of content to be used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| contentType | string | Content type code. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setData

---

#### _remote.setData(data: _[Values](../../objects/Values)_) : _[Remote](../../resources/Remote)_
##### Description

Defines the parameterization of the data that will be sent as content of the remote connection, via POST or PUT.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ | Parameter map with data to be submitted. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setDefaultSubmitData

---

#### _remote.setDefaultSubmitData(requestHeader: string) : _[Remote](../../resources/Remote)_
##### Description

Defines the default data if there is no other data defined to be sent over the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| requestHeader | string | Standard data that will be submitted if there is no other data defined. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setFollowRedirects

---

#### _remote.setFollowRedirects(followRedirects: _boolean_) : _[Remote](../../resources/Remote)_
##### Description

Defines whether to follow redirects on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| followRedirects | _boolean_ | Whether or not to follow redirects |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setFormData

---

#### _remote.setFormData(arg0: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote_ )


---

## setHeader

---

#### _remote.setHeader(requestHeader: _[Values](../../objects/Values)_) : _[Remote](../../resources/Remote)_
##### Description

Defines the header of the request that is submitted on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| requestHeader | _[Values](../../objects/Values)_ | Header data of the request to be submitted. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setQS

---

#### _remote.setQS(data: _[Values](../../objects/Values)_) : _[Remote](../../resources/Remote)_
##### Description

Defines the parameterization of the query string data, that is, the parameters with data passed in the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ | Parameter map with data to be passed in the URL. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setQueryString

---

#### _remote.setQueryString(arg0: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote_ )


---

## setReadTimeout

---

#### _remote.setReadTimeout(timeout: _int_) : _[Remote](../../resources/Remote)_
##### Description

Sets the time limit for reading data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| timeout | _int_ | Timeout in milliseconds. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setSOAPAction

---

#### _remote.setSOAPAction(soapAction: string) : _[Remote](../../resources/Remote)_
##### Description

Defines the SOAP "action " (operation, method, etc.) of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| soapAction | string | SOAP action (operation or method) that will be invoked on submission. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setSOAPNS

---

#### _remote.setSOAPNS(soapNS: string) : _[Remote](../../resources/Remote)_
##### Description

Define the SOAP namespace on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| soapNS | string | SOAP namespace for submission. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setSOAPURL

---

#### _remote.setSOAPURL(soapURL: string) : _[Remote](../../resources/Remote)_
##### Description

Sets the SOAP address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| soapURL | string | SOAP Address to be submitted. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setURL

---

#### _remote.setURL(url: string) : _[Remote](../../resources/Remote)_
##### Description

Sets the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| url | string | Address to be submitted. |

##### Return

( _[Remote](../../resources/Remote)_ )

The current Remote instance.

---

## setURLPrefix

---

#### _remote.setURLPrefix(arg0: string) : _org.netuno.psamata.net.Remote_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _org.netuno.psamata.net.Remote_ )


---

## soap11

---

#### _remote.soap11(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _remote.soap11(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## soap12

---

#### _remote.soap12(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _remote.soap12(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## submit

---

#### _remote.submit(method: string, url: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned address it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, data: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address and assigned data, submit for remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | string | Data to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| querystring | _java.util.Map_ | Data for the querystring. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: _java.util.Map_, contentType: string, data: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| querystring | _java.util.Map_ | Data for the querystring. |
| contentType | string | Content type code. |
| data | string | Data to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| querystring | _[Values](../../objects/Values)_ | Data for the querystring. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: _[Values](../../objects/Values)_, contentType: string, data: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| querystring | _[Values](../../objects/Values)_ | Data for the querystring. |
| contentType | string | Content type code. |
| data | string | Data to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## submitForm

---

#### _remote.submitForm(method: string, url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitForm(method: string, url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitForm(method: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitForm(method: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## submitJSON

---

#### _remote.submitJSON(method: string, url: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitJSON(method: string, url: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| url | string | Address to be submitted. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitJSON(method: string, data: _java.util.Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| data | _java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitJSON(method: string, data: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Description

Through the HTTP method and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string | HTTP method code. |
| data | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

