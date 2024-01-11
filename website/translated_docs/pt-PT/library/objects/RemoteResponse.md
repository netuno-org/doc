---
id: RemoteResponse
title: RemoteResponse
sidebar_label: RemoteResponse
---

Objeto que contém os detalhes da resposta obtida através da conexão remota, quando é utilizado o recurso Remote.

---

## bytes

---

#### bytes() : _byte[]_
##### Retorno

( _byte[]_ )


---

## content

---

#### content() : _java.lang.Object_
##### Retorno

( _java.lang.Object_ )


---

## contentType

---

#### contentType() : string
##### Retorno

( string )


---

## dataSent

---

#### dataSent() : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados que foram enviados na conexão remota.

##### Retorno

( _[Values](../../objects/Values)_ )

Todos os dados que foram enviados.

---

#### dataSent(dataSent: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dataSent | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## error

---

#### error() : _java.lang.Throwable_
##### Retorno

( _java.lang.Throwable_ )


---

## file

---

#### file() : _[File](../../objects/File)_
##### Retorno

( _[File](../../objects/File)_ )


---

## formDataSent

---

#### formDataSent() : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados que foram enviados na conexão remota.

##### Retorno

( _[Values](../../objects/Values)_ )

Todos os dados que foram enviados.

---

#### formDataSent(dataSent: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dataSent | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## getBytes

---

#### getBytes() : _byte[]_
##### Retorno

( _byte[]_ )


---

## getContent

---

#### getContent() : _java.lang.Object_
##### Retorno

( _java.lang.Object_ )


---

## getContentType

---

#### getContentType() : string
##### Retorno

( string )


---

## getDataSent

---

#### getDataSent() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getError

---

#### getError() : _java.lang.Throwable_
##### Retorno

( _java.lang.Throwable_ )


---

## getFile

---

#### getFile() : _[File](../../objects/File)_
##### Retorno

( _[File](../../objects/File)_ )


---

## getFormDataSent

---

#### getFormDataSent() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getHeader

---

#### getHeader() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getJSON

---

#### getJSON() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getMethod

---

#### getMethod() : string
##### Descrição

Obtém o código do método HTTP utilizado na conexão remota.

##### Retorno

( string )

Código do método HTTP que foi submetido.

---

## getQSSent

---

#### getQSSent() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getQueryStringSent

---

#### getQueryStringSent() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getStatusCode

---

#### getStatusCode() : _int_
##### Retorno

( _int_ )


---

## getURL

---

#### getURL() : string
##### Retorno

( string )


---

## header

---

#### header() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## isForm

---

#### isForm() : _boolean_
##### Retorno

( _boolean_ )


---

## isJSON

---

#### isJSON() : _boolean_
##### Retorno

( _boolean_ )


---

## isMultipartFormData

---

#### isMultipartFormData() : _boolean_
##### Retorno

( _boolean_ )


---

## isOk

---

#### isOk() : _boolean_
##### Retorno

( _boolean_ )


---

## isText

---

#### isText() : _boolean_
##### Retorno

( _boolean_ )


---

## json

---

#### json() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## method

---

#### method() : string
##### Descrição

Obtém o código do método HTTP utilizado na conexão remota.

##### Retorno

( string )

Código do método HTTP que foi submetido.

---

#### method(metodo: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Define o código do método HTTP que foi utilizado na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão da conexão remota.

---

## ok

---

#### ok() : _boolean_
##### Retorno

( _boolean_ )


---

## qsSent

---

#### qsSent() : _[Values](../../objects/Values)_
##### Descrição

Obtém os parâmetros de query string que foi enviada na conexão remota.

##### Retorno

( _[Values](../../objects/Values)_ )

Todos os parâmetros de query string que foram enviados.

---

#### qsSent(qsSent: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| qsSent | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## queryStringSent

---

#### queryStringSent() : _[Values](../../objects/Values)_
##### Descrição

Obtém os parâmetros de query string que foi enviada na conexão remota.

##### Retorno

( _[Values](../../objects/Values)_ )

Todos os parâmetros de query string que foram enviados.

---

#### queryStringSent(qs: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| qs | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setBytes

---

#### setBytes(bytes: _byte[]_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bytes | _byte[]_ |   |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )


---

## setContent

---

#### setContent(content: _java.lang.Object_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | _java.lang.Object_ |   |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )


---

## setDataSent

---

#### setDataSent(dataSent: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dataSent | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setError

---

#### setError(error: _java.lang.Throwable_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| error | _java.lang.Throwable_ |   |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )


---

## setFormDataSent

---

#### setFormDataSent(dataSent: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dataSent | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setHeader

---

#### setHeader(header: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| header | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )


---

## setMethod

---

#### setMethod(metodo: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Define o código do método HTTP que foi utilizado na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão da conexão remota.

---

## setQSSent

---

#### setQSSent(qsSent: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| qsSent | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setQueryStringSent

---

#### setQueryStringSent(qs: _[Values](../../objects/Values)_) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| qs | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## setStatusCode

---

#### setStatusCode(statusCode: _int_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| statusCode | _int_ |   |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )


---

## setURL

---

#### setURL(url: string) : _org.netuno.psamata.net.Remote$Response_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| url | string |   |

##### Retorno

( _org.netuno.psamata.net.Remote$Response_ )


---

## statusCode

---

#### statusCode() : _int_
##### Retorno

( _int_ )


---

## url

---

#### url() : string
##### Retorno

( string )


---

