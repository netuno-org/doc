---
id: RemoteResponse
title: RemoteResponse
sidebar_label: RemoteResponse
---

Objeto que contém os detalhes da resposta obtida através da conexão remota, quando é utilizado o recurso Remote.

---

## bytes

---

#### bytes() : byte[]
##### Retorno

( _byte[]_ )


---

## content

---

#### content() : java.lang.Object
##### Retorno

( _java.lang.Object_ )


---

## contentType

---

#### contentType() : string
##### Retorno

( _string_ )


---

## dataSent

---

#### dataSent() : [Values](/docs/library/objects/Values)
##### Descrição

Obtém os dados que foram enviados na conexão remota.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Todos os dados que foram enviados.

---

#### dataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## error

---

#### error() : java.lang.Throwable
##### Retorno

( _java.lang.Throwable_ )


---

## file

---

#### file() : [File](/docs/library/objects/File)
##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## formDataSent

---

#### formDataSent() : [Values](/docs/library/objects/Values)
##### Descrição

Obtém os dados que foram enviados na conexão remota.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Todos os dados que foram enviados.

---

#### formDataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## getBytes

---

#### getBytes() : byte[]
##### Retorno

( _byte[]_ )


---

## getContent

---

#### getContent() : java.lang.Object
##### Retorno

( _java.lang.Object_ )


---

## getContentType

---

#### getContentType() : string
##### Retorno

( _string_ )


---

## getDataSent

---

#### getDataSent() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getError

---

#### getError() : java.lang.Throwable
##### Retorno

( _java.lang.Throwable_ )


---

## getFile

---

#### getFile() : [File](/docs/library/objects/File)
##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## getFormDataSent

---

#### getFormDataSent() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getHeader

---

#### getHeader() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getJSON

---

#### getJSON() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getMethod

---

#### getMethod() : string
##### Descrição

Obtém o código do método HTTP utilizado na conexão remota.

##### Retorno

( _string_ )

Código do método HTTP que foi submetido.

---

## getQSSent

---

#### getQSSent() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getQueryStringSent

---

#### getQueryStringSent() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getStatusCode

---

#### getStatusCode() : int
##### Retorno

( _int_ )


---

## getURL

---

#### getURL() : string
##### Retorno

( _string_ )


---

## header

---

#### header() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## isForm

---

#### isForm() : boolean
##### Retorno

( _boolean_ )


---

## isJSON

---

#### isJSON() : boolean
##### Retorno

( _boolean_ )


---

## isMultipartFormData

---

#### isMultipartFormData() : boolean
##### Retorno

( _boolean_ )


---

## isOk

---

#### isOk() : boolean
##### Retorno

( _boolean_ )


---

## isText

---

#### isText() : boolean
##### Retorno

( _boolean_ )


---

## json

---

#### json() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## method

---

#### method() : string
##### Descrição

Obtém o código do método HTTP utilizado na conexão remota.

##### Retorno

( _string_ )

Código do método HTTP que foi submetido.

---

#### method(metodo: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Define o código do método HTTP que foi utilizado na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão da conexão remota.

---

## ok

---

#### ok() : boolean
##### Retorno

( _boolean_ )


---

## qsSent

---

#### qsSent() : [Values](/docs/library/objects/Values)
##### Descrição

Obtém os parâmetros de query string que foi enviada na conexão remota.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Todos os parâmetros de query string que foram enviados.

---

#### qsSent(qsSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **qsSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## queryStringSent

---

#### queryStringSent() : [Values](/docs/library/objects/Values)
##### Descrição

Obtém os parâmetros de query string que foi enviada na conexão remota.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Todos os parâmetros de query string que foram enviados.

---

#### queryStringSent(qs: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **qs** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setBytes

---

#### setBytes(bytes: byte[]) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ |   |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setContent

---

#### setContent(content: java.lang.Object) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _java.lang.Object_ |   |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setDataSent

---

#### setDataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setError

---

#### setError(error: java.lang.Throwable) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **error** | _java.lang.Throwable_ |   |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setFormDataSent

---

#### setFormDataSent(dataSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dataSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setHeader

---

#### setHeader(header: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **header** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setMethod

---

#### setMethod(metodo: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Define o código do método HTTP que foi utilizado na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão da conexão remota.

---

## setQSSent

---

#### setQSSent(qsSent: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **qsSent** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setQueryStringSent

---

#### setQueryStringSent(qs: [Values](/docs/library/objects/Values)) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **qs** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setStatusCode

---

#### setStatusCode(statusCode: int) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **statusCode** | _int_ |   |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )


---

## setURL

---

#### setURL(url: string) : org.netuno.psamata.net.Remote$Response
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **url** | _string_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## statusCode

---

#### statusCode() : int
##### Retorno

( _int_ )


---

## url

---

#### url() : string
##### Retorno

( _string_ )


---

