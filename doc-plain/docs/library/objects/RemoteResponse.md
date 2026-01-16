---
id: RemoteResponse
title: RemoteResponse
sidebar_label: RemoteResponse
---

Object that contains the details of the response obtained through the remote connection, when using the Remote resource.

---

## bytes

---

#### bytes() : byte[]
##### Return

( _byte[]_ )


---

## content

---

#### content() : java.lang.Object
##### Return

( _java.lang.Object_ )


---

## contentType

---

#### contentType() : string
##### Return

( _string_ )


---

## dataSent

---

#### dataSent() : [Values](/docs/library/objects/Values)
##### Description

Gets the data that was sent over the remote connection.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All data that was sent.

---

#### dataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## error

---

#### error() : java.lang.Throwable
##### Return

( _java.lang.Throwable_ )


---

## file

---

#### file() : [File](/docs/library/objects/File)
##### Return

( _[File](/docs/library/objects/File)_ )


---

## formDataSent

---

#### formDataSent() : [Values](/docs/library/objects/Values)
##### Description

Gets the data that was sent over the remote connection.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All data that was sent.

---

#### formDataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## getBytes

---

#### getBytes() : byte[]
##### Return

( _byte[]_ )


---

## getContent

---

#### getContent() : java.lang.Object
##### Return

( _java.lang.Object_ )


---

## getContentType

---

#### getContentType() : string
##### Return

( _string_ )


---

## getDataSent

---

#### getDataSent() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getError

---

#### getError() : java.lang.Throwable
##### Return

( _java.lang.Throwable_ )


---

## getFile

---

#### getFile() : [File](/docs/library/objects/File)
##### Return

( _[File](/docs/library/objects/File)_ )


---

## getFormDataSent

---

#### getFormDataSent() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getHeader

---

#### getHeader() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getJSON

---

#### getJSON() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getMethod

---

#### getMethod() : string
##### Description

Gets the code of the HTTP method used for the remote connection.

##### Return

( _string_ )

HTTP method code that was submitted.

---

## getQSSent

---

#### getQSSent() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getQueryStringSent

---

#### getQueryStringSent() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getStatusCode

---

#### getStatusCode() : int
##### Return

( _int_ )


---

## getURL

---

#### getURL() : string
##### Return

( _string_ )


---

## header

---

#### header() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isForm

---

#### isForm() : boolean
##### Return

( _boolean_ )


---

## isJSON

---

#### isJSON() : boolean
##### Return

( _boolean_ )


---

## isMultipartFormData

---

#### isMultipartFormData() : boolean
##### Return

( _boolean_ )


---

## isOk

---

#### isOk() : boolean
##### Return

( _boolean_ )


---

## isText

---

#### isText() : boolean
##### Return

( _boolean_ )


---

## json

---

#### json() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## method

---

#### method() : string
##### Description

Gets the code of the HTTP method used for the remote connection.

##### Return

( _string_ )

HTTP method code that was submitted.

---

#### method(method: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Defines the HTTP method code that was used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Remote connection submission response.

---

## ok

---

#### ok() : boolean
##### Return

( _boolean_ )


---

## qsSent

---

#### qsSent() : [Values](/docs/library/objects/Values)
##### Description

Gets the parameters of the query string that was sent on the remote connection.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All query string parameters that were sent.

---

#### qsSent(qsSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **qsSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## queryStringSent

---

#### queryStringSent() : [Values](/docs/library/objects/Values)
##### Description

Gets the parameters of the query string that was sent on the remote connection.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All query string parameters that were sent.

---

#### queryStringSent(qs: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **qs** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## setBytes

---

#### setBytes(bytes: byte[]) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ |   |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setContent

---

#### setContent(content: java.lang.Object) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _java.lang.Object_ |   |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setDataSent

---

#### setDataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## setError

---

#### setError(error: java.lang.Throwable) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **error** | _java.lang.Throwable_ |   |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setFormDataSent

---

#### setFormDataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## setHeader

---

#### setHeader(header: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **header** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setMethod

---

#### setMethod(method: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Description

Defines the HTTP method code that was used for the remote connection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **method** | _string_ | HTTP method code. |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Remote connection submission response.

---

## setQSSent

---

#### setQSSent(qsSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **qsSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## setQueryStringSent

---

#### setQueryStringSent(qs: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **qs** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## setStatusCode

---

#### setStatusCode(statusCode: int) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **statusCode** | _int_ |   |

##### Return

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setURL

---

#### setURL(url: string) : org.netuno.psamata.net.Remote$Response
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **url** | _string_ |   |

##### Return

( _org.netuno.psamata.net.Remote$Response_ )


---

## statusCode

---

#### statusCode() : int
##### Return

( _int_ )


---

## url

---

#### url() : string
##### Return

( _string_ )


---

