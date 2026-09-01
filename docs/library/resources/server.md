---
id: server
title: Server
sidebar_label: Server
---

Interacts with the server and obtains configuration parameters specified in `config.js`, which is in Netuno root folder.

---

## getHost

---

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>getHost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>getPort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>host</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>port</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>shutdown</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_server</span>.<span style={{color: '#008000'}}>shutdown</span>(<span style={{color: '#FF8000'}}>intervalo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

