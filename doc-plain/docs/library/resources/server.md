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

Gets the configured network hostname or IP address of the Netuno server.

##### How To Use

```javascript
// Logs the server hostname or IP address:
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

Gets the configured Netuno server name.

##### How To Use

```javascript
// Writes the server name to the log:
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

Gets the configured network port of the Netuno server.

##### How To Use

```javascript
// Logs the server port:
_log.info(
    `Server port: ${_server.getPort()}`
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

Gets the configured network hostname or IP address of the Netuno server.

##### How To Use

```javascript
// Logs the server hostname or IP address:
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

Gets the configured Netuno server name.

##### How To Use

```javascript
// Writes the server name to the response:
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

Gets the configured network port of the Netuno server.

##### How To Use

```javascript
// Logs the server port:
_log.info(
    `Server port: ${_server.port()}`
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
// Shuts Netuno down completely after 10 seconds:
_server.shutdown(10000)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **intervalo** | _int_ | Tempo de atraso para desligar o servidor. |

##### Return

( _void_ )


---

