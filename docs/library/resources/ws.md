---
id: ws
title: WebSocket
sidebar_label: WebSocket
---

Management of connections and communication with customers.

---

## allSessionsEndpoints

---

#### _ws.allSessionsEndpoints() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## broadcast

---

#### _ws.broadcast(endpointName: string, data: _[Values](../../objects/Values)_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| endpointName | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastAsService

---

#### _ws.broadcastAsService(endpointName: string, path: string, message: _[Values](../../objects/Values)_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| endpointName | string |   |
| path | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

#### _ws.broadcastAsService(endpointName: string, message: _[Values](../../objects/Values)_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| endpointName | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastService

---

#### _ws.broadcastService(endpointName: string, path: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| endpointName | string |   |
| path | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.broadcastService(endpointName: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| endpointName | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## close

---

#### _ws.close() : _boolean_
##### Return

( _boolean_ )


---

#### _ws.close(sessionId: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sessionId | string |   |

##### Return

( _boolean_ )


---

## closeCode

---

#### _ws.closeCode() : string
##### Return

( string )


---

## closeData

---

#### _ws.closeData() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## closeReason

---

#### _ws.closeReason() : string
##### Return

( string )


---

## closeSession

---

#### _ws.closeSession(id: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _boolean_ )


---

#### _ws.closeSession(id: string, reason: string, message: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |
| reason | string |   |
| message | string |   |

##### Return

( _boolean_ )


---

## config

---

#### _ws.config() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## data

---

#### _ws.data() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _ws.data(id: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## fullPath

---

#### _ws.fullPath() : string
##### Return

( string )


---

#### _ws.fullPath(id: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( string )


---

## getAllSessionsEndpoints

---

#### _ws.getAllSessionsEndpoints() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getCloseCode

---

#### _ws.getCloseCode() : string
##### Return

( string )


---

## getCloseData

---

#### _ws.getCloseData() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getCloseReason

---

#### _ws.getCloseReason() : string
##### Return

( string )


---

## getConfig

---

#### _ws.getConfig() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getData

---

#### _ws.getData() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _ws.getData(id: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getFullPath

---

#### _ws.getFullPath() : string
##### Return

( string )


---

#### _ws.getFullPath(id: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( string )


---

## getMessage

---

#### _ws.getMessage() : _org.netuno.tritao.resource.WS$WSMessage_
##### Return

( _org.netuno.tritao.resource.WS$WSMessage_ )


---

## getPath

---

#### _ws.getPath() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _ws.getPath(id: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getQS

---

#### _ws.getQS() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getSession

---

#### _ws.getSession() : _javax.websocket.Session_
##### Return

( _javax.websocket.Session_ )


---

#### _ws.getSession(id: string) : _javax.websocket.Session_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _javax.websocket.Session_ )


---

## getSessionEndpoint

---

#### _ws.getSessionEndpoint() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _ws.getSessionEndpoint(id: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getSessionId

---

#### _ws.getSessionId() : string
##### Return

( string )


---

## isClose

---

#### _ws.isClose() : _boolean_
##### Return

( _boolean_ )


---

## isConnect

---

#### _ws.isConnect() : _boolean_
##### Return

( _boolean_ )


---

## message

---

#### _ws.message() : _org.netuno.tritao.resource.WS$WSMessage_
##### Return

( _org.netuno.tritao.resource.WS$WSMessage_ )


---

## path

---

#### _ws.path() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _ws.path(id: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## qs

---

#### _ws.qs() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## rawBroadcast

---

#### _ws.rawBroadcast(endpointName: string, message: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| endpointName | string |   |
| message | string |   |

##### Return

( _void_ )


---

#### _ws.rawBroadcast(endpointName: string, path: string, message: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| endpointName | string |   |
| path | string |   |
| message | string |   |

##### Return

( _void_ )


---

## rawSend

---

#### _ws.rawSend(content: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( _boolean_ )


---

#### _ws.rawSend(sessionId: string, content: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sessionId | string |   |
| content | string |   |

##### Return

( _boolean_ )


---

## send

---

#### _ws.send(content: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( _boolean_ )


---

#### _ws.send(sessionId: string, content: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sessionId | string |   |
| content | string |   |

##### Return

( _boolean_ )


---

#### _ws.send(sessionId: string, content: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sessionId | string |   |
| content | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.send(content: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendAsService

---

#### _ws.sendAsService(sessionId: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sessionId | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.sendAsService(message: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendService

---

#### _ws.sendService(sessionId: string, message: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sessionId | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.sendService(message: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## session

---

#### _ws.session() : _javax.websocket.Session_
##### Return

( _javax.websocket.Session_ )


---

#### _ws.session(id: string) : _javax.websocket.Session_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _javax.websocket.Session_ )


---

## sessionEndpoint

---

#### _ws.sessionEndpoint() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _ws.sessionEndpoint(id: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## sessionId

---

#### _ws.sessionId() : string
##### Return

( string )


---

