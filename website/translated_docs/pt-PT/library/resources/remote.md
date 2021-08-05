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

#### _remote.acceptJSON() : _Remote_
##### Descrição

Define que o conteúdo será recebido no formato application/json.

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## alwaysBodyData

---

#### _remote.alwaysBodyData() : _Remote_
##### Descrição

Força os dados irem no corpo do cabeçalho HTTP, até mesmo no caso do método <code>GET</code>.

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## asBinary

---

#### _remote.asBinary() : _Remote_
##### Descrição

Define que os dados do conteúdo recebido pela conexão remota estão no formato binário, como download de ficheiros, imagens, zip, etc...

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## asForm

---

#### _remote.asForm() : _Remote_
##### Descrição

Define que o conteúdo de dados será submetido no formato application/x-www-form-urlencoded.

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## asJSON

---

#### _remote.asJSON() : _Remote_
##### Descrição

Define que o conteúdo de dados será submetido no formato application/json.

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## asMultipartFormData

---

#### _remote.asMultipartFormData() : _Remote_
##### Descrição

Define que o conteúdo de dados será submetido no formato multipart/form-data.

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## asText

---

#### _remote.asText() : _Remote_
##### Descrição

Define que o conteúdo de dados será submetido no formato text/plain.

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## delete

---

#### _remote.delete() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Submete o pedido para a conexão remota através do método DELETE.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(endereco: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.delete(dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método DELETE.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## get

---

#### _remote.get() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Submete o pedido para a conexão remota através do método GET.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(endereco: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.get(dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método GET.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## getAuthorization

---

#### _remote.getAuthorization() : string
##### Retorno

( string )


---

## getCharset

---

#### _remote.getCharset() : string
##### Retorno

( string )


---

## getConnectTimeout

---

#### _remote.getConnectTimeout() : _int_
##### Retorno

( _int_ )


---

## getContentType

---

#### _remote.getContentType() : string
##### Retorno

( string )


---

## getData

---

#### _remote.getData() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getDefaultSubmitData

---

#### _remote.getDefaultSubmitData() : string
##### Retorno

( string )


---

## getHeader

---

#### _remote.getHeader() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getQS

---

#### _remote.getQS() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getReadTimeout

---

#### _remote.getReadTimeout() : _int_
##### Retorno

( _int_ )


---

## getSOAPAction

---

#### _remote.getSOAPAction() : string
##### Retorno

( string )


---

## getSOAPNS

---

#### _remote.getSOAPNS() : string
##### Retorno

( string )


---

## getSOAPURL

---

#### _remote.getSOAPURL() : string
##### Retorno

( string )


---

## getStatusCode

---

#### _remote.getStatusCode() : _int_
##### Retorno

( _int_ )


---

## getURL

---

#### _remote.getURL() : string
##### Retorno

( string )


---

## getURLPrefix

---

#### _remote.getURLPrefix() : string
##### Retorno

( string )


---

## init

---

#### _remote.init() : _Remote_
##### Descrição

Inicia um novo Remote.

##### Retorno

( _Remote_ )

Nova instância do Remote.

---

#### _remote.init(nomeConfig: string) : _Remote_
##### Descrição

Inicia um novo Remote com base na chave de configuração.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nomeConfig | string | Nome da configuração que será utilizada. |

##### Retorno

( _Remote_ )

Nova instância do Remote.

---

#### _remote.init(nomeConfig: _[Values](../../objects/Values)_) : _Remote_
##### Descrição

Inicia um novo Remote com base na chave de configuração.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nomeConfig | _[Values](../../objects/Values)_ | Nome da configuração que será utilizada. |

##### Retorno

( _Remote_ )

Nova instância do Remote.

---

## isAlwaysDataBody

---

#### _remote.isAlwaysDataBody() : _boolean_
##### Retorno

( _boolean_ )


---

## isBinary

---

#### _remote.isBinary() : _boolean_
##### Retorno

( _boolean_ )


---

## isFollowRedirects

---

#### _remote.isFollowRedirects() : _boolean_
##### Retorno

( _boolean_ )


---

## isForm

---

#### _remote.isForm() : _boolean_
##### Retorno

( _boolean_ )


---

## isJSON

---

#### _remote.isJSON() : _boolean_
##### Retorno

( _boolean_ )


---

## isMultipartFormData

---

#### _remote.isMultipartFormData() : _boolean_
##### Retorno

( _boolean_ )


---

## isText

---

#### _remote.isText() : _boolean_
##### Retorno

( _boolean_ )


---

## json

---

#### _remote.json(metodo: string, endereco: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e endereço atribuído submete como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.json(metodo: string, endereco: string, dados: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | string | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.json(metodo: string, endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.json(metodo: string, endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## patch

---

#### _remote.patch() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Submete o pedido para a conexão remota através do método PATCH.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(endereco: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.patch(dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PATCH.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## post

---

#### _remote.post() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Submete o pedido para a conexão remota através do método POST.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(endereco: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.post(dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método POST.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## put

---

#### _remote.put() : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Submete o pedido para a conexão remota através do método PUT.

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(endereco: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço atríbudo submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o endereço e mapa de dados atríbudos, submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.put(dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Com o mapa de dados atríbudos submete o pedido para a conexão remota através do método PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## setAlwaysBodyData

---

#### _remote.setAlwaysBodyData(sempreCorpoData: _boolean_) : _Remote_
##### Descrição

Força os dados irem no corpo do cabeçalho HTTP, até mesmo no caso do método <code>GET</code>.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sempreCorpoData | _boolean_ | Define se os dados devem ir sempre no corpo do cabeçalho da comunicação HTTP que será enviada na conexão remota. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setAuthorization

---

#### _remote.setAuthorization(autorizacao: string) : _Remote_
##### Descrição

Define o conteúdo exato da autorização que vai cabeçalho da comunicação que será enviada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| autorizacao | string | Conteúdo da autorização que será submetida. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

#### _remote.setAuthorization(usuario: string, senha: string) : _Remote_
##### Descrição

Define o conteúdo da autorização básica com utilizador e password que vai cabeçalho da comunicação que será enviada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| usuario | string | Usuário da autorização que será submetida. |
| senha | string | Senha da autorização que será submetida. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setBinary

---

#### _remote.setBinary(binario: _boolean_) : _Remote_
##### Descrição

Define que os dados do conteúdo recebido pela conexão remota estão no formato binário, como download de ficheiros, imagens, zip, etc...

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| binario | _boolean_ | Será o download de arquivos. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setCharset

---

#### _remote.setCharset(codificacaoCaracteres: string) : _Remote_
##### Descrição

Define a codificação de caracteres que deve ser utilizada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| codificacaoCaracteres | string | Código da codificação de caracteres. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setConnectTimeout

---

#### _remote.setConnectTimeout(tempoLimite: _int_) : _Remote_
##### Descrição

Define o o tempo limite para estabilizar a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tempoLimite | _int_ | Tempo limite em milissegundos. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setContentType

---

#### _remote.setContentType(tipoConteudo: string) : _Remote_
##### Descrição

Define o tipo de conteúdo que deve ser utilizada na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipoConteudo | string | Código do tipo de conteúdo. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setData

---

#### _remote.setData(dados: _[Values](../../objects/Values)_) : _Remote_
##### Descrição

Define a parametrização dos dados que serão enviados como conteúdo da conexão remota, via POST ou PUT.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _[Values](../../objects/Values)_ | Mapa de parâmetros com dados para serem submetidos. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setDefaultSubmitData

---

#### _remote.setDefaultSubmitData(cabecalhoDoPedido: string) : _Remote_
##### Descrição

Define os dados padrão caso não haja outros dados definidos para ser enviados na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cabecalhoDoPedido | string | Dados padrão que vão ser submetidos caso não haja outros dados definidos. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setFollowRedirects

---

#### _remote.setFollowRedirects(seguirRedirects: _boolean_) : _Remote_
##### Descrição

Define se deve seguir redirecionamentos na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| seguirRedirects | _boolean_ | Se deve ou não seguir os redirecionamentos. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setHeader

---

#### _remote.setHeader(cabecalhoDoPedido: _[Values](../../objects/Values)_) : _Remote_
##### Descrição

Define o cabeçalho do pedido que é submetido na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cabecalhoDoPedido | _[Values](../../objects/Values)_ | Dados do cabeçalho do pedido que será submetido. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setQS

---

#### _remote.setQS(dados: _[Values](../../objects/Values)_) : _Remote_
##### Descrição

Define a parametrização de dados da query string, ou seja, os parâmetros com dados passados no endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | _[Values](../../objects/Values)_ | Mapa de parâmetros com dados para serem passados na URL. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setReadTimeout

---

#### _remote.setReadTimeout(tempoLimite: _int_) : _Remote_
##### Descrição

Define o o tempo limite para leitura de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tempoLimite | _int_ | Tempo limite em milissegundos. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setSOAPAction

---

#### _remote.setSOAPAction(acaoSOAP: string) : _Remote_
##### Descrição

Define a "ação" (operação, método, etc.) SOAP da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| acaoSOAP | string | Ação (operação ou método) SOAP que será invocado na submissão. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setSOAPNS

---

#### _remote.setSOAPNS(nsSOAP: string) : _Remote_
##### Descrição

Define o namespace do SOAP na conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nsSOAP | string | Namespace do SOAP para a submissão. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setSOAPURL

---

#### _remote.setSOAPURL(enderecoSOAP: string) : _Remote_
##### Descrição

Define o endereço SOAP da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| enderecoSOAP | string | Endereço SOAP que será submetido. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setURL

---

#### _remote.setURL(endereco: string) : _Remote_
##### Descrição

Define o endereço da conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endereco | string | Endereço que será submetido. |

##### Retorno

( _Remote_ )

A instância atual do Remote.

---

## setURLPrefix

---

#### _remote.setURLPrefix(arg0: string) : _Remote_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Remote_ )


---

## soap11

---

#### _remote.soap11(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _remote.soap11(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## soap12

---

#### _remote.soap12(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _remote.soap12(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## submit

---

#### _remote.submit(metodo: string, endereco: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e endereço atribuído submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, dados: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | string | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| querystring | _Map_ | Dados para a querystring. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: _Map_, tipoConteudo: string, dados: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| querystring | _Map_ | Dados para a querystring. |
| tipoConteudo | string | Código do tipo de conteúdo. |
| dados | string | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| querystring | _[Values](../../objects/Values)_ | Dados para a querystring. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submit(metodo: string, endereco: string, querystring: _[Values](../../objects/Values)_, tipoConteudo: string, dados: string) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço, query string, tipo de conteúdo e dados atribuídos, submete para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| querystring | _[Values](../../objects/Values)_ | Dados para a querystring. |
| tipoConteudo | string | Código do tipo de conteúdo. |
| dados | string | Dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## submitForm

---

#### _remote.submitForm(metodo: string, endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitForm(metodo: string, endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitForm(metodo: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitForm(metodo: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como formulário para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

## submitJSON

---

#### _remote.submitJSON(metodo: string, endereco: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitJSON(metodo: string, endereco: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP, endereço e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| endereco | string | Endereço que será submetido. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitJSON(metodo: string, dados: _Map_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| dados | _Map_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

#### _remote.submitJSON(metodo: string, dados: _[Values](../../objects/Values)_) : _[RemoteResponse](../../objects/RemoteResponse)_
##### Descrição

Através do método HTTP e mapa de dados atribuído submete os dados como JSON para a conexão remota.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| metodo | string | Código do método HTTP. |
| dados | _[Values](../../objects/Values)_ | Mapa de dados que serão submetido. |

##### Retorno

( _[RemoteResponse](../../objects/RemoteResponse)_ )

Resposta da submissão, com o estado, cabeçalho, conteúdo, etc.

---

