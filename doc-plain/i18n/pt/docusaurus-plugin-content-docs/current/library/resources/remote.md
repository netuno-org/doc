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

#### _remote.acceptJSON() : [Remote](/docs/library/resources/remote)
##### Descrição

Define que o conteúdo será recebido no formato application/json.

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## alwaysBodyData

---

#### _remote.alwaysBodyData() : [Remote](/docs/library/resources/remote)
##### Descrição

Força os dados irem no corpo do cabeçalho HTTP, até mesmo no caso do método <code>GET</code>.

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## asBinary

---

#### _remote.asBinary() : [Remote](/docs/library/resources/remote)
##### Descrição

Define que os dados do conteúdo recebido pela conexão remota estão no formato binário, como download de ficheiros, imagens, zip, etc...

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## asForm

---

#### _remote.asForm() : [Remote](/docs/library/resources/remote)
##### Descrição

Define que o conteúdo de dados será submetido no formato application/x-www-form-urlencoded.

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## asJSON

---

#### _remote.asJSON() : [Remote](/docs/library/resources/remote)
##### Descrição

Define que o conteúdo de dados será submetido no formato application/json.

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## asMultipartFormData

---

#### _remote.asMultipartFormData() : [Remote](/docs/library/resources/remote)
##### Descrição

Define que o conteúdo de dados será submetido no formato multipart/form-data.

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## asText

---

#### _remote.asText() : [Remote](/docs/library/resources/remote)
##### Descrição

Define que o conteúdo de dados será submetido no formato text/plain.

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## delete

---

#### _remote.delete() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Submete o pedido para a conexão remota através do método DELETE.

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(endereco: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## get

---

#### _remote.get() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Submete o pedido para a conexão remota através do método GET.

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(endereco: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## getAuthorization

---

#### _remote.getAuthorization() : string
##### Retorno

( _string_ )


---

## getCharset

---

#### _remote.getCharset() : string
##### Retorno

( _string_ )


---

## getConnectTimeout

---

#### _remote.getConnectTimeout() : int
##### Retorno

( _int_ )


---

## getContentType

---

#### _remote.getContentType() : string
##### Retorno

( _string_ )


---

## getData

---

#### _remote.getData() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getDefaultSubmitData

---

#### _remote.getDefaultSubmitData() : string
##### Retorno

( _string_ )


---

## getFormData

---

#### _remote.getFormData() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getHeader

---

#### _remote.getHeader() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getHostAddress

---

#### _remote.getHostAddress(host: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **host** | _string_ |   |

##### Retorno

( _string_ )


---

## getQS

---

#### _remote.getQS() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getQueryString

---

#### _remote.getQueryString() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getReadTimeout

---

#### _remote.getReadTimeout() : int
##### Retorno

( _int_ )


---

## getSOAPAction

---

#### _remote.getSOAPAction() : string
##### Retorno

( _string_ )


---

## getSOAPNS

---

#### _remote.getSOAPNS() : string
##### Retorno

( _string_ )


---

## getSOAPURL

---

#### _remote.getSOAPURL() : string
##### Retorno

( _string_ )


---

## getStatusCode

---

#### _remote.getStatusCode() : int
##### Retorno

( _int_ )


---

## getURL

---

#### _remote.getURL() : string
##### Retorno

( _string_ )


---

## getURLPrefix

---

#### _remote.getURLPrefix() : string
##### Retorno

( _string_ )


---

## hostAddress

---

#### _remote.hostAddress(servidor: string) : string
##### Descrição

Obtém o endereço IP de um anfitrião.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **servidor** | _string_ | Nome do anfitrião. |

##### Retorno

( _string_ )

Endereço IP do anfitrião.

---

## init

---

#### _remote.init() : [Remote](/docs/library/resources/remote)
##### Descrição

Inicia um novo Remote.

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

Nova instância do Remote.

---

#### _remote.init(nomeConfig: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Inicia um novo Remote com base na chave de configuração.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeConfig** | _string_ | Nome da configuração que será utilizada. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

Nova instância do Remote.

---

#### _remote.init(nomeConfig: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Descrição

Inicia um novo Remote com base na chave de configuração.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeConfig** | _[Values](/docs/library/objects/Values)_ | Nome da configuração que será utilizada. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

Nova instância do Remote.

---

## isAlwaysDataBody

---

#### _remote.isAlwaysDataBody() : boolean
##### Retorno

( _boolean_ )


---

## isBinary

---

#### _remote.isBinary() : boolean
##### Retorno

( _boolean_ )


---

## isFollowRedirects

---

#### _remote.isFollowRedirects() : boolean
##### Retorno

( _boolean_ )


---

## isForm

---

#### _remote.isForm() : boolean
##### Retorno

( _boolean_ )


---

## isJSON

---

#### _remote.isJSON() : boolean
##### Retorno

( _boolean_ )


---

## isMultipartFormData

---

#### _remote.isMultipartFormData() : boolean
##### Retorno

( _boolean_ )


---

## isText

---

#### _remote.isText() : boolean
##### Retorno

( _boolean_ )


---

## json

---

#### _remote.json(metodo: string, endereco: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e endereço atribuído submete como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.json(metodo: string, endereco: string, dados: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _string_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.json(metodo: string, endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.json(metodo: string, endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## patch

---

#### _remote.patch() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Submete o pedido para a conexão remota através do método PATCH.

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(endereco: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## ping

---

#### _remote.ping(servidor: string) : boolean
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

#### _remote.ping(servidor: string, tempoLimite: int) : boolean
##### Descrição

Verifica se o nome de servidor ou IP está disponível.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **servidor** | _string_ | Nome ou IP do servidor. |
| **tempoLimite** | _int_ | Tempo limite para realizar o ping em milissegundos. |

##### Retorno

( _boolean_ )

Resultado se endereço está disponível.

---

## portListening

---

#### _remote.portListening(servidor: string, porto: int) : boolean
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

#### _remote.post() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Submete o pedido para a conexão remota através do método POST.

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(endereco: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## put

---

#### _remote.put() : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Submete o pedido para a conexão remota através do método PUT.

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(endereco: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## setAlwaysBodyData

---

#### _remote.setAlwaysBodyData(sempreCorpoData: boolean) : [Remote](/docs/library/resources/remote)
##### Descrição

Força os dados irem no corpo do cabeçalho HTTP, até mesmo no caso do método <code>GET</code>.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sempreCorpoData** | _boolean_ | Define se os dados devem ir sempre no corpo do cabeçalho da comunicação HTTP que será enviada na conexão remota. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setAuthorization

---

#### _remote.setAuthorization(autorizacao: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o conteúdo exato da autorização que vai cabeçalho da comunicação que será enviada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **autorizacao** | _string_ | Conteúdo da autorização que será submetida. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

#### _remote.setAuthorization(usuario: string, senha: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o conteúdo da autorização básica com utilizador e password que vai cabeçalho da comunicação que será enviada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **usuario** | _string_ | Usuário da autorização que será submetida. |
| **senha** | _string_ | Senha da autorização que será submetida. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setBinary

---

#### _remote.setBinary(binario: boolean) : [Remote](/docs/library/resources/remote)
##### Descrição

Define que os dados do conteúdo recebido pela conexão remota estão no formato binário, como download de ficheiros, imagens, zip, etc...

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **binario** | _boolean_ | Será o download de arquivos. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setCharset

---

#### _remote.setCharset(codificacaoCaracteres: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define a codificação de caracteres que deve ser utilizada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codificacaoCaracteres** | _string_ | Código da codificação de caracteres. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setConnectTimeout

---

#### _remote.setConnectTimeout(tempoLimite: int) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o o tempo limite para estabilizar a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tempoLimite** | _int_ | Tempo limite em milissegundos. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setContentType

---

#### _remote.setContentType(tipoConteudo: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o tipo de conteúdo que deve ser utilizada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipoConteudo** | _string_ | Código do tipo de conteúdo. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setData

---

#### _remote.setData(dados: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Descrição

Define a parametrização dos dados que serão enviados como conteúdo da conexão remota, via POST ou PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de parâmetros com dados para serem submetidos. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setDefaultSubmitData

---

#### _remote.setDefaultSubmitData(cabecalhoDoPedido: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define os dados padrão caso não haja outros dados definidos para ser enviados na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cabecalhoDoPedido** | _string_ | Dados padrão que vão ser submetidos caso não haja outros dados definidos. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setFollowRedirects

---

#### _remote.setFollowRedirects(seguirRedirects: boolean) : [Remote](/docs/library/resources/remote)
##### Descrição

Define se deve seguir redirecionamentos na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seguirRedirects** | _boolean_ | Se deve ou não seguir os redirecionamentos. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setFormData

---

#### _remote.setFormData(dadosFormulario: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Descrição

Define os dados que serão submetidos como formulário na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dadosFormulario** | _[Values](/docs/library/objects/Values)_ | Dados de formulário que será submetido. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setHeader

---

#### _remote.setHeader(cabecalhoDoPedido: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o cabeçalho do pedido que é submetido na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cabecalhoDoPedido** | _[Values](/docs/library/objects/Values)_ | Dados do cabeçalho do pedido que será submetido. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setQS

---

#### _remote.setQS(dados: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Descrição

Define a parametrização de dados da query string, ou seja, os parâmetros com dados passados no endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de parâmetros com dados para serem passados na URL. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setQueryString

---

#### _remote.setQueryString(dados: [Values](/docs/library/objects/Values)) : [Remote](/docs/library/resources/remote)
##### Descrição

Define a parametrização de dados da query string, ou seja, os parâmetros com dados passados no endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de parâmetros com dados para serem passados na URL. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setReadTimeout

---

#### _remote.setReadTimeout(tempoLimite: int) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o o tempo limite para leitura de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tempoLimite** | _int_ | Tempo limite em milissegundos. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setSOAPAction

---

#### _remote.setSOAPAction(acaoSOAP: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define a "ação" (operação, método, etc.) SOAP da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **acaoSOAP** | _string_ | Ação (operação ou método) SOAP que será invocado na submissão. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setSOAPNS

---

#### _remote.setSOAPNS(nsSOAP: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o namespace do SOAP na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nsSOAP** | _string_ | Namespace do SOAP para a submissão. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setSOAPURL

---

#### _remote.setSOAPURL(enderecoSOAP: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o endereço SOAP da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enderecoSOAP** | _string_ | Endereço SOAP que será submetido. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setURL

---

#### _remote.setURL(endereco: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## setURLPrefix

---

#### _remote.setURLPrefix(endereco: string) : [Remote](/docs/library/resources/remote)
##### Descrição

Define o prefixo do endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **endereco** | _string_ | Prefixo do endereço que será submetido. |

##### Retorno

( _[Remote](/docs/library/resources/remote)_ )

A instância atual do Remote.

---

## soap11

---

#### _remote.soap11(soapMethod: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _remote.soap11(soapMethod: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## soap12

---

#### _remote.soap12(soapMethod: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _remote.soap12(soapMethod: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **soapMethod** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## submit

---

#### _remote.submit(metodo: string, endereco: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e endereço atribuído submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, dados: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _string_ | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Dados para a querystring. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, tipoConteudo: string, dados: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Dados para a querystring. |
| **tipoConteudo** | _string_ | Código do tipo de conteúdo. |
| **dados** | _string_ | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _[Values](/docs/library/objects/Values)_ | Dados para a querystring. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: [Values](/docs/library/objects/Values), tipoConteudo: string, dados: string) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **querystring** | _[Values](/docs/library/objects/Values)_ | Dados para a querystring. |
| **tipoConteudo** | _string_ | Código do tipo de conteúdo. |
| **dados** | _string_ | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## submitForm

---

#### _remote.submitForm(metodo: string, endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitForm(metodo: string, endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitForm(metodo: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitForm(metodo: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## submitJSON

---

#### _remote.submitJSON(metodo: string, endereco: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitJSON(metodo: string, endereco: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **endereco** | _string_ | Endereço que será submetido. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitJSON(metodo: string, dados: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitJSON(metodo: string, dados: [Values](/docs/library/objects/Values)) : [RemoteResponse](/docs/library/objects/RemoteResponse)
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **metodo** | _string_ | Código do método HTTP. |
| **dados** | _[Values](/docs/library/objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](/docs/library/objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

