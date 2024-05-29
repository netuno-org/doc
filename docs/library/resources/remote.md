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

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">acceptJSON</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines that the content will be received in the application/json.

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## alwaysBodyData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">alwaysBodyData</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Forces data to go in the body of the HTTP header, even in the case of the <code>GET</code> method.

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## asBinary

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asBinary</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines that the content data received by the remote connection is in binary format, such as downloading files, images, zip, etc...

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## asForm

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asForm</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines that the data content will be submitted in the application/x-www-form-urlencoded format.

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## asJSON

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asJSON</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines that the data content will be submitted in the application/json format.

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## asMultipartFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asMultipartFormData</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines that the data content will be submitted in the multipart/form-data format.

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## asText

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asText</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines that the data content will be submitted in the text/plain format.

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## delete

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Submit the request for remote connection using the DELETE method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address it submits the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the DELETE method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## get

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Submit the request for remote connection using the GET method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address it submits the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the GET method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## getAuthorization

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getAuthorization</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getCharset

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getCharset</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getConnectTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getConnectTimeout</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## getContentType

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getContentType</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getDefaultSubmitData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getDefaultSubmitData</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getFormData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getHeader

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getHeader</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getQS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getQS</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getQueryString

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getQueryString</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getReadTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getReadTimeout</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## getSOAPAction

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getSOAPAction</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getSOAPNS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getSOAPNS</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getSOAPURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getSOAPURL</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getStatusCode

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getStatusCode</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## getURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getURL</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getURLPrefix

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getURLPrefix</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## init

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Starts a new Remote.

##### Return

( _[Remote](../../resources/remote)_ )

New Remote instance.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">configName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Starts a new Remote based on the configuration key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configName** | _string_ | Name of the configuration that will be used. |

##### Return

( _[Remote](../../resources/remote)_ )

New Remote instance.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">configName</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Starts a new Remote based on the configuration key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configName** | _[Values](../../objects/Values)_ | Name of the configuration that will be used. |

##### Return

( _[Remote](../../resources/remote)_ )

New Remote instance.

---

## isAlwaysDataBody

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isAlwaysDataBody</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isBinary

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isBinary</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isFollowRedirects

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isFollowRedirects</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isForm

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isForm</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isJSON

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isJSON</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isMultipartFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isMultipartFormData</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isText

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isText</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## json

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned address it submits as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _string_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## patch

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Submit the request for remote connection using the PATCH method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address it submits the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the PATCH method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## ping

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">ping</span>(<span style="color: #FF8000">host</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

## portListening

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">portListening</span>(<span style="color: #FF8000">host</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">port</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Submit the request for remote connection using the POST method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address it submits the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the POST method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## put

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Submit the request for remote connection using the PUT method.

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address it submits the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the assigned address and data map, submit the request for remote connection using the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

With the map of assigned data it submits the request for remote connection through the PUT method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## setAlwaysBodyData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setAlwaysBodyData</span>(<span style="color: #FF8000">alwaysDataBody</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Forces data to go in the body of the HTTP header, even in the case of the <code>GET</code> method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **alwaysDataBody** | _boolean_ | Defines whether the data should always go in the header body of the HTTP communication that will be sent over the remote connection. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setAuthorization

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setAuthorization</span>(<span style="color: #FF8000">authorization</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the exact content of the authorization that will header the communication that will be sent on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **authorization** | _string_ | Content of the authorization to be submitted. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setAuthorization</span>(<span style="color: #FF8000">username</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the content of the basic authorization with user and password that goes to the header of the communication that will be sent on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **username** | _string_ | Username of the authorization to be submitted. |
| **password** | _string_ | Password of the authorization to be submitted. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setBinary

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setBinary</span>(<span style="color: #FF8000">binary</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines that the content data received by the remote connection is in binary format, such as downloading files, images, zip, etc...

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **binary** | _boolean_ | It will be downloading files. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setCharset

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setCharset</span>(<span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the character encoding to be used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ | Character encoding code. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setConnectTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setConnectTimeout</span>(<span style="color: #FF8000">timeout</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Sets the timeout to stabilize the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeout** | _int_ | Timeout in milliseconds. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setContentType

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setContentType</span>(<span style="color: #FF8000">contentType</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the type of content to be used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **contentType** | _string_ | Content type code. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the parameterization of the data that will be sent as content of the remote connection, via POST or PUT.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ | Parameter map with data to be submitted. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setDefaultSubmitData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setDefaultSubmitData</span>(<span style="color: #FF8000">requestHeader</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the default data if there is no other data defined to be sent over the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **requestHeader** | _string_ | Standard data that will be submitted if there is no other data defined. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setFollowRedirects

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setFollowRedirects</span>(<span style="color: #FF8000">followRedirects</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines whether to follow redirects on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **followRedirects** | _boolean_ | Whether or not to follow redirects |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setFormData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.net.Remote</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote_ )


---

## setHeader

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setHeader</span>(<span style="color: #FF8000">requestHeader</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the header of the request that is submitted on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **requestHeader** | _[Values](../../objects/Values)_ | Header data of the request to be submitted. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setQS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setQS</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the parameterization of the query string data, that is, the parameters with data passed in the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ | Parameter map with data to be passed in the URL. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setQueryString

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setQueryString</span>(<span style="color: #FF8000">qs</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.net.Remote</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **qs** | _[Values](../../objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote_ )


---

## setReadTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setReadTimeout</span>(<span style="color: #FF8000">timeout</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Sets the time limit for reading data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **timeout** | _int_ | Timeout in milliseconds. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setSOAPAction

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setSOAPAction</span>(<span style="color: #FF8000">soapAction</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Defines the SOAP "action " (operation, method, etc.) of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapAction** | _string_ | SOAP action (operation or method) that will be invoked on submission. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setSOAPNS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setSOAPNS</span>(<span style="color: #FF8000">soapNS</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Define the SOAP namespace on the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapNS** | _string_ | SOAP namespace for submission. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setSOAPURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setSOAPURL</span>(<span style="color: #FF8000">soapURL</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Sets the SOAP address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapURL** | _string_ | SOAP Address to be submitted. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setURL</span>(<span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/remote)</span>
##### Description

Sets the address of the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ | Address to be submitted. |

##### Return

( _[Remote](../../resources/remote)_ )

The current Remote instance.

---

## setURLPrefix

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setURLPrefix</span>(<span style="color: #FF8000">urlPrefix</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.net.Remote</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **urlPrefix** | _string_ |   |

##### Return

( _org.netuno.psamata.net.Remote_ )


---

## soap11

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap11</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap11</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## soap12

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap12</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap12</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## submit

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned address it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address and assigned data, submit for remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _string_ | Data to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data for the querystring. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>, <span style="color: #FF8000">contentType</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data for the querystring. |
| **contentType** | _string_ | Content type code. |
| **data** | _string_ | Data to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Values](../../objects/Values)_ | Data for the querystring. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">contentType</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address, query string, content type and assigned data, it submits to the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **querystring** | _[Values](../../objects/Values)_ | Data for the querystring. |
| **contentType** | _string_ | Content type code. |
| **data** | _string_ | Data to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## submitForm

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned data map it submits the data as form for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

## submitJSON

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method, address and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **url** | _string_ | Address to be submitted. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">method</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Description

Through the HTTP method and assigned data map it submits the data as JSON for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |
| **data** | _[Values](../../objects/Values)_ | Data map to be submitted. |

##### Return

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Submission response, with status, header, content, etc.

---

