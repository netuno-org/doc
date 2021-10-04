---
id: server
title: Server
sidebar_label: Server
---

Interage com o servidor e obtém parâmetros de configurações especificados no `config.js`, que fica na pasta raíz do Netuno.

---

## getHost

---

#### _server.getHost() : string
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

( string )

Hostname de rede ou IP do servidor do Netuno.

---

## getName

---

#### _server.getName() : string
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

( string )

Nome do servidor do Netuno.

---

## getPort

---

#### _server.getPort() : _int_
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

#### _server.host() : string
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

( string )

Hostname de rede ou IP do servidor do Netuno.

---

## name

---

#### _server.name() : string
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

( string )

Nome do servidor do Netuno.

---

## port

---

#### _server.port() : _int_
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

#### _server.print(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem diretamente no terminal do servidor do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada no terminal do servidor. |

##### Retorno

( _void_ )


---

## println

---

#### _server.println(mensagem: string) : _void_
##### Descrição

Imprime uma linha com uma mensagem diretamente no terminal do servidor do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada no terminal do servidor. |

##### Retorno

( _void_ )


---

## shutdown

---

#### _server.shutdown() : _void_
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

#### _server.shutdown(intervalo: _int_) : _void_
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
| intervalo | _int_ | Tempo de atraso para desligar o servidor. |

##### Retorno

( _void_ )


---

