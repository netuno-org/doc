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

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">acceptJSON</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define que o conteúdo será recebido no formato application/json.

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## alwaysBodyData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">alwaysBodyData</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Força os dados irem no corpo do cabeçalho HTTP, até mesmo no caso do método <code>GET</code>.

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## asBinary

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asBinary</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define que os dados do conteúdo recebido pela conexão remota estão no formato binário, como download de ficheiros, imagens, zip, etc...

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## asForm

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asForm</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define que o conteúdo de dados será submetido no formato application/x-www-form-urlencoded.

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## asJSON

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asJSON</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define que o conteúdo de dados será submetido no formato application/json.

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## asMultipartFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asMultipartFormData</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define que o conteúdo de dados será submetido no formato multipart/form-data.

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## asText

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">asText</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define que o conteúdo de dados será submetido no formato text/plain.

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## delete

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Submete o pedido para a conexão remota através do método DELETE.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">delete</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## get

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Submete o pedido para a conexão remota através do método GET.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## getAuthorization

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getAuthorization</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getCharset

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getCharset</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getConnectTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getConnectTimeout</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## getContentType

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getContentType</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getDefaultSubmitData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getDefaultSubmitData</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getFormData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getHeader

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getHeader</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getQS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getQS</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getQueryString

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getQueryString</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getReadTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getReadTimeout</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## getSOAPAction

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getSOAPAction</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getSOAPNS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getSOAPNS</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getSOAPURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getSOAPURL</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getStatusCode

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getStatusCode</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## getURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getURL</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getURLPrefix

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">getURLPrefix</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## init

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Inicia um novo Remote.

##### Retorno

( _[Remote](../../resources/Remote)_ )

Nova instância do Remote.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">nomeConfig</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Inicia um novo Remote com base na chave de configuração.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeConfig** | _string_ | Nome da configuração que será utilizada. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

Nova instância do Remote.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">nomeConfig</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Inicia um novo Remote com base na chave de configuração.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeConfig** | _[Values](../../objects/Values)_ | Nome da configuração que será utilizada. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

Nova instância do Remote.

---

## isAlwaysDataBody

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isAlwaysDataBody</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isBinary

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isBinary</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isFollowRedirects

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isFollowRedirects</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isForm

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isForm</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isJSON

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isJSON</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isMultipartFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isMultipartFormData</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isText

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">isText</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## json

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e endereço atribuído submete como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _string_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## patch

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Submete o pedido para a conexão remota através do método PATCH.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">patch</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## ping

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">ping</span>(<span style="color: #FF8000">servidor</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o nome de servidor ou IP está disponível.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **servidor** | _string_ | Nome ou IP do servidor. |

##### Retorno

( _boolean_ )

Resultado se endereço está disponível.

---

## portListening

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">portListening</span>(<span style="color: #FF8000">servidor</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">porto</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se a porta está disponível para um nome ou IP de servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **servidor** | _string_ | Nome ou IP do servidor. |
| **porto** | _int_ | Número do porto. |

##### Retorno

( _boolean_ )

Resultado se a porta está disponível.

---

## post

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Submete o pedido para a conexão remota através do método POST.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">post</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## put

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>() : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Submete o pedido para a conexão remota através do método PUT.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## setAlwaysBodyData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setAlwaysBodyData</span>(<span style="color: #FF8000">sempreCorpoData</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Força os dados irem no corpo do cabeçalho HTTP, até mesmo no caso do método <code>GET</code>.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sempreCorpoData** | _boolean_ | Define se os dados devem ir sempre no corpo do cabeçalho da comunicação HTTP que será enviada na conexão remota. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setAuthorization

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setAuthorization</span>(<span style="color: #FF8000">autorizacao</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o conteúdo exato da autorização que vai cabeçalho da comunicação que será enviada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **autorizacao** | _string_ | Conteúdo da autorização que será submetida. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setAuthorization</span>(<span style="color: #FF8000">usuario</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o conteúdo da autorização básica com utilizador e password que vai cabeçalho da comunicação que será enviada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **usuario** | _string_ | Usuário da autorização que será submetida. |
| **senha** | _string_ | Senha da autorização que será submetida. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setBinary

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setBinary</span>(<span style="color: #FF8000">binario</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define que os dados do conteúdo recebido pela conexão remota estão no formato binário, como download de ficheiros, imagens, zip, etc...

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **binario** | _boolean_ | Será o download de arquivos. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setCharset

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setCharset</span>(<span style="color: #FF8000">codificacaoCaracteres</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define a codificação de caracteres que deve ser utilizada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codificacaoCaracteres** | _string_ | Código da codificação de caracteres. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setConnectTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setConnectTimeout</span>(<span style="color: #FF8000">tempoLimite</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o o tempo limite para estabilizar a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tempoLimite** | _int_ | Tempo limite em milissegundos. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setContentType

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setContentType</span>(<span style="color: #FF8000">tipoConteudo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o tipo de conteúdo que deve ser utilizada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipoConteudo** | _string_ | Código do tipo de conteúdo. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setData</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define a parametrização dos dados que serão enviados como conteúdo da conexão remota, via POST ou PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](../../objects/Values)_ | Mapa de parâmetros com dados para serem submetidos. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setDefaultSubmitData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setDefaultSubmitData</span>(<span style="color: #FF8000">cabecalhoDoPedido</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define os dados padrão caso não haja outros dados definidos para ser enviados na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cabecalhoDoPedido** | _string_ | Dados padrão que vão ser submetidos caso não haja outros dados definidos. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setFollowRedirects

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setFollowRedirects</span>(<span style="color: #FF8000">seguirRedirects</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define se deve seguir redirecionamentos na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seguirRedirects** | _boolean_ | Se deve ou não seguir os redirecionamentos. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setFormData

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setFormData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.net.Remote</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote_ )


---

## setHeader

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setHeader</span>(<span style="color: #FF8000">cabecalhoDoPedido</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o cabeçalho do pedido que é submetido na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cabecalhoDoPedido** | _[Values](../../objects/Values)_ | Dados do cabeçalho do pedido que será submetido. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setQS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setQS</span>(<span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define a parametrização de dados da query string, ou seja, os parâmetros com dados passados no endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](../../objects/Values)_ | Mapa de parâmetros com dados para serem passados na URL. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setQueryString

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setQueryString</span>(<span style="color: #FF8000">qs</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.net.Remote</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **qs** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote_ )


---

## setReadTimeout

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setReadTimeout</span>(<span style="color: #FF8000">tempoLimite</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o o tempo limite para leitura de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tempoLimite** | _int_ | Tempo limite em milissegundos. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setSOAPAction

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setSOAPAction</span>(<span style="color: #FF8000">acaoSOAP</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define a "ação" (operação, método, etc.) SOAP da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acaoSOAP** | _string_ | Ação (operação ou método) SOAP que será invocado na submissão. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setSOAPNS

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setSOAPNS</span>(<span style="color: #FF8000">nsSOAP</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o namespace do SOAP na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nsSOAP** | _string_ | Namespace do SOAP para a submissão. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setSOAPURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setSOAPURL</span>(<span style="color: #FF8000">enderecoSOAP</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o endereço SOAP da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enderecoSOAP** | _string_ | Endereço SOAP que será submetido. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setURL

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setURL</span>(<span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Remote](../../resources/Remote)</span>
##### Descrição

Define o endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[Remote](../../resources/Remote)_ )

A instância atual do Remote.

---

## setURLPrefix

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">setURLPrefix</span>(<span style="color: #FF8000">urlPrefix</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.net.Remote</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **urlPrefix** | _string_ |   |

##### Retorno

( _org.netuno.psamata.net.Remote_ )


---

## soap11

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap11</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap11</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## soap12

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap12</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">soap12</span>(<span style="color: #FF8000">soapMethod</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## submit

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e endereço atribuído submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _string_ | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _java.util.Map_ | Dados para a querystring. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>, <span style="color: #FF8000">tipoConteudo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _java.util.Map_ | Dados para a querystring. |
| **tipoConteudo** | _string_ | Código do tipo de conteúdo. |
| **dados** | _string_ | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _[Values](../../objects/Values)_ | Dados para a querystring. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submit</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">querystring</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">tipoConteudo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _[Values](../../objects/Values)_ | Dados para a querystring. |
| **tipoConteudo** | _string_ | Código do tipo de conteúdo. |
| **dados** | _string_ | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## submitForm

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitForm</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## submitJSON

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">endereco</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### <span style="font-weight: normal">_remote</span>.<span style="color: #008000">submitJSON</span>(<span style="color: #FF8000">metodo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">dados</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RemoteResponse](../../objects/RemoteResponse)</span>
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

