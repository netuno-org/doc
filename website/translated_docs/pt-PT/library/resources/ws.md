---
id: ws
title: WebSocket
sidebar_label: WebSocket
---

Gestão das conexões e comunicação com os clientes.

---

## allSessionsEndpoints

---

#### _ws.allSessionsEndpoints() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## broadcast

---

#### _ws.broadcast(endpointName: string, data: _[Values](../../objects/Values)_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endpointName | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

## broadcastAsService

---

#### _ws.broadcastAsService(endpointName: string, path: string, message: _[Values](../../objects/Values)_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endpointName | string |   |
| path | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

#### _ws.broadcastAsService(endpointName: string, message: _[Values](../../objects/Values)_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endpointName | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

## broadcastService

---

#### _ws.broadcastService(endpointName: string, path: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endpointName | string |   |
| path | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _ws.broadcastService(endpointName: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endpointName | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## close

---

#### _ws.close() : _boolean_
##### Retorno

( _boolean_ )


---

#### _ws.close(sessionId: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sessionId | string |   |

##### Retorno

( _boolean_ )


---

## closeCode

---

#### _ws.closeCode() : string
##### Retorno

( string )


---

## closeData

---

#### _ws.closeData() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## closeReason

---

#### _ws.closeReason() : string
##### Retorno

( string )


---

## closeSession

---

#### _ws.closeSession(id: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _boolean_ )


---

#### _ws.closeSession(id: string, reason: string, message: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |
| reason | string |   |
| message | string |   |

##### Retorno

( _boolean_ )


---

## config

---

#### _ws.config() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## data

---

#### _ws.data() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _ws.data(id: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## fullPath

---

#### _ws.fullPath() : string
##### Retorno

( string )


---

#### _ws.fullPath(id: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( string )


---

## getAllSessionsEndpoints

---

#### _ws.getAllSessionsEndpoints() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getCloseCode

---

#### _ws.getCloseCode() : string
##### Retorno

( string )


---

## getCloseData

---

#### _ws.getCloseData() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getCloseReason

---

#### _ws.getCloseReason() : string
##### Retorno

( string )


---

## getConfig

---

#### _ws.getConfig() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getData

---

#### _ws.getData() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _ws.getData(id: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getFullPath

---

#### _ws.getFullPath() : string
##### Retorno

( string )


---

#### _ws.getFullPath(id: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( string )


---

## getMessage

---

#### _ws.getMessage() : _org.netuno.tritao.resource.WS$WSMessage_
##### Retorno

( _org.netuno.tritao.resource.WS$WSMessage_ )


---

## getPath

---

#### _ws.getPath() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _ws.getPath(id: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getQS

---

#### _ws.getQS() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getSession

---

#### _ws.getSession() : _javax.websocket.Session_
##### Retorno

( _javax.websocket.Session_ )


---

#### _ws.getSession(id: string) : _javax.websocket.Session_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _javax.websocket.Session_ )


---

## getSessionEndpoint

---

#### _ws.getSessionEndpoint() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _ws.getSessionEndpoint(id: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getSessionId

---

#### _ws.getSessionId() : string
##### Retorno

( string )


---

## isClose

---

#### _ws.isClose() : _boolean_
##### Retorno

( _boolean_ )


---

## isConnect

---

#### _ws.isConnect() : _boolean_
##### Retorno

( _boolean_ )


---

## message

---

#### _ws.message() : _org.netuno.tritao.resource.WS$WSMessage_
##### Retorno

( _org.netuno.tritao.resource.WS$WSMessage_ )


---

## path

---

#### _ws.path() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _ws.path(id: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## qs

---

#### _ws.qs() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## rawBroadcast

---

#### _ws.rawBroadcast(endpointName: string, message: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endpointName | string |   |
| message | string |   |

##### Retorno

( _void_ )


---

#### _ws.rawBroadcast(endpointName: string, path: string, message: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| endpointName | string |   |
| path | string |   |
| message | string |   |

##### Retorno

( _void_ )


---

## rawSend

---

#### _ws.rawSend(content: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( _boolean_ )


---

#### _ws.rawSend(sessionId: string, content: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sessionId | string |   |
| content | string |   |

##### Retorno

( _boolean_ )


---

## send

---

#### _ws.send(content: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( _boolean_ )


---

#### _ws.send(sessionId: string, content: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sessionId | string |   |
| content | string |   |

##### Retorno

( _boolean_ )


---

#### _ws.send(sessionId: string, content: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sessionId | string |   |
| content | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _ws.send(content: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## sendAsService

---

#### _ws.sendAsService(sessionId: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sessionId | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _ws.sendAsService(message: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## sendService

---

#### _ws.sendService(sessionId: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sessionId | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _ws.sendService(message: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## session

---

#### _ws.session() : _javax.websocket.Session_
##### Retorno

( _javax.websocket.Session_ )


---

#### _ws.session(id: string) : _javax.websocket.Session_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _javax.websocket.Session_ )


---

## sessionEndpoint

---

#### _ws.sessionEndpoint() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _ws.sessionEndpoint(id: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## sessionId

---

#### _ws.sessionId() : string
##### Retorno

( string )


---

