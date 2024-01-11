---
id: server
title: Server
sidebar_label: Server
---

Interacts with the server and obtains configuration parameters specified in `config.js`, which is in Netuno root folder.

---

## getHost

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">getHost</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Obtém o hostname de rede ou ip configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### How To Use

```javascript
// Apresenta nos logs e no terminal o hostname ou IP do servidor:
_log.info(
    _server.getHost()
)
```

##### Return

( _string_ )

Network hostname or IP of the Netuno server.

---

## getName

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">getName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Obtém o nome do servidor do Netuno, especificado no config.js na pasta raíz do Netuno.

##### How To Use

```javascript
// Apresenta no output do serviço o nome do servidor:
_log.info(
    _server.getName()
)
```

##### Return

( _string_ )

Netuno server name.

---

## getPort

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">getPort</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Obtém o porto de rede configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### How To Use

```javascript
// Apresenta nos logs e no terminal o porto do servidor:
_log.info(
    `Porto do servidor: ${_server.getPort()}`
)
```

##### Return

( _int_ )

Network port number of the Netuno server.

---

## host

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">host</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Obtém o hostname de rede ou ip configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### How To Use

```javascript
// Apresenta nos logs e no terminal o hostname ou IP do servidor:
_log.info(
    _server.host()
)
```

##### Return

( _string_ )

Network hostname or IP of the Netuno server.

---

## name

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">name</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Obtém o nome do servidor do Netuno, especificado no config.js na pasta raíz do Netuno.

##### How To Use

```javascript
// Apresenta no output o nome do servidor:
_out.print(
    _server.name()
)
```

##### Return

( _string_ )

Netuno server name.

---

## port

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">port</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Obtém o porto de rede configurado do servidor do Netuno, fica especificado no config.js na pasta raíz do Netuno.

##### How To Use

```javascript
// Apresenta nos logs e no terminal o porto do servidor:
_log.info(
    `Porto do servidor: ${_server.port()}`
)
```

##### Return

( _int_ )

Network port number of the Netuno server.

---

## print

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a message directly to the Netuno server terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be displayed on the server terminal. |

##### Return

( _void_ )


---

## println

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with a message directly to the Netuno server terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be displayed on the server terminal. |

##### Return

( _void_ )


---

## shutdown

---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">shutdown</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Desliga o servidor do Netuno.

##### How To Use

```javascript
// Finaliza completamente o Netuno:
_server.shutdown()
```

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_server</span>.<span style="color: #008000">shutdown</span>(<span style="color: #FF8000">intervalo</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Desliga o servidor do Netuno depois de alguns tempo.

##### How To Use

```javascript
// Após 10 segundos finaliza completamente o Netuno:
_server.shutdown(10000)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **intervalo** | _int_ | Tempo de atraso para desligar o servidor. |

##### Return

( _void_ )


---

