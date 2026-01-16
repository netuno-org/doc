---
id: server
title: Server
sidebar_label: Server
---

Interacts with the server and obtains configuration parameters specified in `config.js`, which is in Netuno root folder.

---

## getHost

---

#### _server.getHost() : string
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

#### _server.getName() : string
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

#### _server.getPort() : int
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

#### _server.host() : string
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

#### _server.name() : string
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

#### _server.port() : int
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

#### _server.print(message: string) : void
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

#### _server.println(message: string) : void
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

#### _server.shutdown() : void
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

#### _server.shutdown(intervalo: int) : void
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

