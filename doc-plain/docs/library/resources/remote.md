---
id: remote
title: Remote
sidebar_label: Remote
---

Remote API invocation capability.

Remote facilitates this integration and makes it simple to integratewith external web services via REST, JSON, and SOAP.

---

## acceptJSON

---

#### _remote.acceptJSON() : [Remote](/docs/library/resources/remote)
##### Description

Defines that the content will be received in the application/json.

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## alwaysBodyData

---

#### _remote.alwaysBodyData() : [Remote](/docs/library/resources/remote)
##### Description

Forces data to go in the body of the HTTP header, even in the case of the <code>GET</code> method.

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## asBinary

---

#### _remote.asBinary() : [Remote](/docs/library/resources/remote)
##### Description

Defines that the content data received by the remote connection is in binary format, such as downloading files, images, zip, etc...

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## asForm

---

#### _remote.asForm() : [Remote](/docs/library/resources/remote)
##### Description

Defines that the data content will be submitted in the application/x-www-form-urlencoded format.

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## asJSON

---

#### _remote.asJSON() : [Remote](/docs/library/resources/remote)
##### Description

Defines that the data content will be submitted in the application/json format.

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## asMultipartFormData

---

#### _remote.asMultipartFormData() : [Remote](/docs/library/resources/remote)
##### Description

Defines that the data content will be submitted in the multipart/form-data format.

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## asText

---

#### _remote.asText() : [Remote](/docs/library/resources/remote)
##### Description

Defines that the data content will be submitted in the text/plain format.

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## delete

---

#### _remote.delete() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Submit the request for remote connection using the DELETE method.

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(url: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address it submits the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.delete(data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## get

---

#### _remote.get() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Submit the request for remote connection using the GET method.

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(url: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address it submits the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.get(data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## getAuthorization

---

#### _remote.getAuthorization() : string
##### Return

( _string_ )


---

## getCharset

---

#### _remote.getCharset() : string
##### Return

( _string_ )


---

## getConnectTimeout

---

#### _remote.getConnectTimeout() : int
##### Return

( _int_ )


---

## getContentType

---

#### _remote.getContentType() : string
##### Return

( _string_ )


---

## getData

---

#### _remote.getData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getDefaultSubmitData

---

#### _remote.getDefaultSubmitData() : string
##### Return

( _string_ )


---

## getFormData

---

#### _remote.getFormData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getHeader

---

#### _remote.getHeader() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getHostAddress

---

#### _remote.getHostAddress(host: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ |   |

##### Return

( _string_ )


---

## getQS

---

#### _remote.getQS() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getQueryString

---

#### _remote.getQueryString() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getReadTimeout

---

#### _remote.getReadTimeout() : int
##### Return

( _int_ )


---

## getSOAPAction

---

#### _remote.getSOAPAction() : string
##### Return

( _string_ )


---

## getSOAPNS

---

#### _remote.getSOAPNS() : string
##### Return

( _string_ )


---

## getSOAPURL

---

#### _remote.getSOAPURL() : string
##### Return

( _string_ )


---

## getStatusCode

---

#### _remote.getStatusCode() : int
##### Return

( _int_ )


---

## getURL

---

#### _remote.getURL() : string
##### Return

( _string_ )


---

## getURLPrefix

---

#### _remote.getURLPrefix() : string
##### Return

( _string_ )


---

## hostAddress

---

#### _remote.hostAddress(host: string) : string
##### Description

Get the IP address of a host.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ | Host name. |

##### Return

( _string_ )

Host IP address.

---

## init

---

#### _remote.init() : [Remote](/docs/library/resources/remote)
##### Description

Starts a new Remote.

##### Return

( _[Remote](/docs/library/resources/remote)_ )

New Remote instance.

---

#### _remote.init(configName: string) : [Remote](/docs/library/resources/remote)
##### Description

Starts a new Remote based on the configuration key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configName** | _string_ | Name of the configuration that will be used. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

New Remote instance.

---

#### _remote.init(configName: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Description

Starts a new Remote based on the configuration key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configName** | _[Values](/docs/library/objects/Values)_ | Name of the configuration that will be used. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

New Remote instance.

---

## isAlwaysDataBody

---

#### _remote.isAlwaysDataBody() : boolean
##### Return

( _boolean_ )


---

## isBinary

---

#### _remote.isBinary() : boolean
##### Return

( _boolean_ )


---

## isFollowRedirects

---

#### _remote.isFollowRedirects() : boolean
##### Return

( _boolean_ )


---

## isForm

---

#### _remote.isForm() : boolean
##### Return

( _boolean_ )


---

## isJSON

---

#### _remote.isJSON() : boolean
##### Return

( _boolean_ )


---

## isMultipartFormData

---

#### _remote.isMultipartFormData() : boolean
##### Return

( _boolean_ )


---

## isText

---

#### _remote.isText() : boolean
##### Return

( _boolean_ )


---

## json

---

#### _remote.json(method: string, url: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned address it submits as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.json(method: string, url: string, data: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _string_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.json(method: string, url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.json(method: string, url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## patch

---

#### _remote.patch() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Submit the request for remote connection using the PATCH method.

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(url: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address it submits the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.patch(data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## ping

---

#### _remote.ping(host: string) : boolean
##### Description

Check whether the server name or IP is available.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ | Server name or IP. |

##### Return

( _boolean_ )

Result if address is available.

---

#### _remote.ping(host: string, timeout: int) : boolean
##### Description

Check whether the server name or IP is available.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ | Server name or IP. |
| **timeout** | _int_ | Timeout to perform ping in milliseconds. |

##### Return

( _boolean_ )

Result if address is available.

---

## portListening

---

#### _remote.portListening(host: string, port: int) : boolean
##### Description

Checks if the port is available for a server name or IP.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **host** | _string_ | Server name or IP. |
| **port** | _int_ | Port number. |

##### Return

( _boolean_ )

Result if port is available.

---

## post

---

#### _remote.post() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Submit the request for remote connection using the POST method.

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(url: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address it submits the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.post(data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## put

---

#### _remote.put() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Submit the request for remote connection using the PUT method.

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(url: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address it submits the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the assigned address and data map, submit the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.put(data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

With the map of assigned data it submits the request for remote connection through the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## setAlwaysBodyData

---

#### _remote.setAlwaysBodyData(alwaysDataBody: boolean) : [Remote](/docs/library/resources/remote)
##### Description

Forces data to go in the body of the HTTP header, even in the case of the <code>GET</code> method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **alwaysDataBody** | _boolean_ | Defines whether the data should always go in the header body of the HTTP communication that will be sent over the remote connection. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setAuthorization

---

#### _remote.setAuthorization(authorization: string) : [Remote](/docs/library/resources/remote)
##### Description

Defines the exact content of the authorization that will header the communication that will be sent on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **authorization** | _string_ | Content of the authorization to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

#### _remote.setAuthorization(username: string, password: string) : [Remote](/docs/library/resources/remote)
##### Description

Defines the content of the basic authorization with user and password that goes to the header of the communication that will be sent on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **username** | _string_ | Username of the authorization to be submitted. |
| **password** | _string_ | Password of the authorization to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setBinary

---

#### _remote.setBinary(binary: boolean) : [Remote](/docs/library/resources/remote)
##### Description

Defines that the content data received by the remote connection is in binary format, such as downloading files, images, zip, etc...

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **binary** | _boolean_ | It will be downloading files. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setCharset

---

#### _remote.setCharset(charset: string) : [Remote](/docs/library/resources/remote)
##### Description

Defines the character encoding to be used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ | Character encoding code. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setConnectTimeout

---

#### _remote.setConnectTimeout(timeout: int) : [Remote](/docs/library/resources/remote)
##### Description

Sets the timeout to stabilize the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeout** | _int_ | Timeout in milliseconds. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setContentType

---

#### _remote.setContentType(contentType: string) : [Remote](/docs/library/resources/remote)
##### Description

Defines the type of content to be used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **contentType** | _string_ | Content type code. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setData

---

#### _remote.setData(data: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Description

Defines the parameterization of the data that will be sent as content of the remote connection, via POST or PUT.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Parameter map with data to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setDefaultSubmitData

---

#### _remote.setDefaultSubmitData(requestHeader: string) : [Remote](/docs/library/resources/remote)
##### Description

Defines the default data if there is no other data defined to be sent over the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **requestHeader** | _string_ | Standard data that will be submitted if there is no other data defined. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setFollowRedirects

---

#### _remote.setFollowRedirects(followRedirects: boolean) : [Remote](/docs/library/resources/remote)
##### Description

Defines whether to follow redirects on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **followRedirects** | _boolean_ | Whether or not to follow redirects |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setFormData

---

#### _remote.setFormData(formData: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Description

Defines the data to be submitted as form to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formData** | _[Values](/docs/library/objects/Values)_ | Data form to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setHeader

---

#### _remote.setHeader(requestHeader: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Description

Defines the header of the request that is submitted on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **requestHeader** | _[Values](/docs/library/objects/Values)_ | Header data of the request to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setQS

---

#### _remote.setQS(data: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Description

Defines the parameterization of the query string data, that is, the parameters with data passed in the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Parameter map with data to be passed in the URL. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setQueryString

---

#### _remote.setQueryString(data: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Description

Defines the parameterization of the query string data, that is, the parameters with data passed in the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | Parameter map with data to be passed in the URL. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setReadTimeout

---

#### _remote.setReadTimeout(timeout: int) : [Remote](/docs/library/resources/remote)
##### Description

Sets the time limit for reading data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeout** | _int_ | Timeout in milliseconds. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setSOAPAction

---

#### _remote.setSOAPAction(soapAction: string) : [Remote](/docs/library/resources/remote)
##### Description

Defines the SOAP "action " (operation, method, etc.) of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapAction** | _string_ | SOAP action (operation or method) that will be invoked on submission. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setSOAPNS

---

#### _remote.setSOAPNS(soapNS: string) : [Remote](/docs/library/resources/remote)
##### Description

Define the SOAP namespace on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapNS** | _string_ | SOAP namespace for submission. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setSOAPURL

---

#### _remote.setSOAPURL(soapURL: string) : [Remote](/docs/library/resources/remote)
##### Description

Sets the SOAP address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapURL** | _string_ | SOAP Address to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setURL

---

#### _remote.setURL(url: string) : [Remote](/docs/library/resources/remote)
##### Description

Sets the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## setURLPrefix

---

#### _remote.setURLPrefix(url: string) : [Remote](/docs/library/resources/remote)
##### Description

Sets the prefix of the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address prefix to be submitted. |

##### Return

( _[Remote](/docs/library/resources/remote)_ )

The current Remote instance.

---

## soap11

---

#### _remote.soap11(soapMethod: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _remote.soap11(soapMethod: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## soap12

---

#### _remote.soap12(soapMethod: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _remote.soap12(soapMethod: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## submit

---

#### _remote.submit(method: string, url: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned address it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, data: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address and assigned data, submit for remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _string_ | Data to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data for the querystring. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, contentType: string, data: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data for the querystring. |
| **contentType** | _string_ | Content type code. |
| **data** | _string_ | Data to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Values](/docs/library/objects/Values)_ | Data for the querystring. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submit(method: string, url: string, querystring: [Values](/docs/library/objects/Values), contentType: string, data: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Values](/docs/library/objects/Values)_ | Data for the querystring. |
| **contentType** | _string_ | Content type code. |
| **data** | _string_ | Data to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## submitForm

---

#### _remote.submitForm(method: string, url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitForm(method: string, url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitForm(method: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitForm(method: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## submitJSON

---

#### _remote.submitJSON(method: string, url: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitJSON(method: string, url: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitJSON(method: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### _remote.submitJSON(method: string, data: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Through the HTTP method and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Values](/docs/library/objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

