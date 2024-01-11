---
id: server
title: Server
sidebar_label: Server
---

Interage com o servidor e obtém parâmetros de configurações especificados no `config.js`, que fica na pasta raíz do Netuno.

---

## getHost

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">getHost</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o hostname de rede ou ip configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### Como Usar

```javascript
// Apresenta nos logs e no terminal o hostname ou IP do servidor:
_log.info(
    _server.getHost()
)
```

##### Retorno

( _string_ )

Hostname de rede ou IP do servidor do Netuno.

---

## getName

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">getName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o nome do servidor do Netuno, especificado no config.js na pasta raíz do Netuno.

##### Como Usar

```javascript
// Apresenta no output do serviço o nome do servidor:
_log.info(
    _server.getName()
)
```

##### Retorno

( _string_ )

Nome do servidor do Netuno.

---

## getPort

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">getPort</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Obtém o porto de rede configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### Como Usar

```javascript
// Apresenta nos logs e no terminal o porto do servidor:
_log.info(
    `Porto do servidor: ${_server.getPort()}`
)
```

##### Retorno

( _int_ )

Número do porto de rede do servidor do Netuno.

---

## host

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">host</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o hostname de rede ou ip configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### Como Usar

```javascript
// Apresenta nos logs e no terminal o hostname ou IP do servidor:
_log.info(
    _server.host()
)
```

##### Retorno

( _string_ )

Hostname de rede ou IP do servidor do Netuno.

---

## name

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">name</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o nome do servidor do Netuno, especificado no config.js na pasta raíz do Netuno.

##### Como Usar

```javascript
// Apresenta no output o nome do servidor:
_out.print(
    _server.name()
)
```

##### Retorno

( _string_ )

Nome do servidor do Netuno.

---

## port

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">port</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Obtém o porto de rede configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### Como Usar

```javascript
// Apresenta nos logs e no terminal o porto do servidor:
_log.info(
    `Porto do servidor: ${_server.port()}`
)
```

##### Retorno

( _int_ )

Número do porto de rede do servidor do Netuno.

---

## print

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">mensagem</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Imprime uma mensagem diretamente no terminal do servidor do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada no terminal do servidor. |

##### Retorno

( _void_ )


---

## println

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">mensagem</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Imprime uma linha com uma mensagem diretamente no terminal do servidor do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada no terminal do servidor. |

##### Retorno

( _void_ )


---

## shutdown

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">shutdown</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Desliga o servidor do Netuno.

##### Como Usar

```javascript
// Finaliza completamente o Netuno:
_server.shutdown()
```

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">shutdown</span>(<span style="color: #FF8000">intervalo</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Desliga o servidor do Netuno depois de alguns tempo.

##### Como Usar

```javascript
// Após 10 segundos finaliza completamente o Netuno:
_server.shutdown(10000)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **intervalo** | _int_ | Tempo de atraso para desligar o servidor. |

##### Retorno

( _void_ )


---

