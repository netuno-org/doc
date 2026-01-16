---
id: ws
title: WebSocket
sidebar_label: WebSocket
---

Management of connections and communication with customers.

---

## allSessionsEndpoints

---

#### _ws.allSessionsEndpoints() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## awaitStream

---

#### _ws.awaitStream() : boolean
##### Return

( _boolean_ )


---

## binaryStreamed

---

#### _ws.binaryStreamed() : byte[]
##### Return

( _byte[]_ )


---

## broadcast

---

#### _ws.broadcast(endpointName: string, data: [Values](/docs/library/objects/Values)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastAsService

---

#### _ws.broadcastAsService(endpointName: string, path: string, message: [Values](/docs/library/objects/Values)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

#### _ws.broadcastAsService(endpointName: string, message: [Values](/docs/library/objects/Values)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastBinary

---

#### _ws.broadcastBinary(endpointName: string, content: byte[]) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **content** | _byte[]_ |   |

##### Return

( _void_ )


---

#### _ws.broadcastBinary(endpointName: string, path: string, content: byte[]) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **content** | _byte[]_ |   |

##### Return

( _void_ )


---

## broadcastService

---

#### _ws.broadcastService(endpointName: string, path: string, message: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.broadcastService(endpointName: string, message: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## broadcastText

---

#### _ws.broadcastText(endpointName: string, message: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _void_ )


---

#### _ws.broadcastText(endpointName: string, path: string, message: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _void_ )


---

## close

---

#### _ws.close() : boolean
##### Return

( _boolean_ )


---

#### _ws.close(sessionId: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |

##### Return

( _boolean_ )


---

## closeCode

---

#### _ws.closeCode() : string
##### Return

( _string_ )


---

## closeData

---

#### _ws.closeData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## closeReason

---

#### _ws.closeReason() : string
##### Return

( _string_ )


---

## closeSession

---

#### _ws.closeSession(id: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _boolean_ )


---

#### _ws.closeSession(id: string, reason: string, message: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |
| **reason** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _boolean_ )


---

## config

---

#### _ws.config() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## data

---

#### _ws.data() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _ws.data(id: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## fullPath

---

#### _ws.fullPath() : string
##### Return

( _string_ )


---

#### _ws.fullPath(id: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _string_ )


---

## getAllSessionsEndpoints

---

#### _ws.getAllSessionsEndpoints() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getCloseCode

---

#### _ws.getCloseCode() : string
##### Return

( _string_ )


---

## getCloseData

---

#### _ws.getCloseData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getCloseReason

---

#### _ws.getCloseReason() : string
##### Return

( _string_ )


---

## getConfig

---

#### _ws.getConfig() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getData

---

#### _ws.getData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _ws.getData(id: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getFullPath

---

#### _ws.getFullPath() : string
##### Return

( _string_ )


---

#### _ws.getFullPath(id: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _string_ )


---

## getMessage

---

#### _ws.getMessage() : [WSMessage](/docs/library/objects/WSMessage)
##### Return

( _[WSMessage](/docs/library/objects/WSMessage)_ )


---

## getPath

---

#### _ws.getPath() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _ws.getPath(id: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getQS

---

#### _ws.getQS() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getSession

---

#### _ws.getSession() : jakarta.websocket.Session
##### Return

( _jakarta.websocket.Session_ )


---

#### _ws.getSession(id: string) : jakarta.websocket.Session
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _jakarta.websocket.Session_ )


---

## getSessionEndpoint

---

#### _ws.getSessionEndpoint() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _ws.getSessionEndpoint(id: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getSessionId

---

#### _ws.getSessionId() : string
##### Return

( _string_ )


---

## isBinaryStreamed

---

#### _ws.isBinaryStreamed() : boolean
##### Return

( _boolean_ )


---

## isClose

---

#### _ws.isClose() : boolean
##### Return

( _boolean_ )


---

## isConnect

---

#### _ws.isConnect() : boolean
##### Return

( _boolean_ )


---

## isStream

---

#### _ws.isStream() : boolean
##### Return

( _boolean_ )


---

## isTextStreamed

---

#### _ws.isTextStreamed() : boolean
##### Return

( _boolean_ )


---

## message

---

#### _ws.message() : [WSMessage](/docs/library/objects/WSMessage)
##### Return

( _[WSMessage](/docs/library/objects/WSMessage)_ )


---

## path

---

#### _ws.path() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _ws.path(id: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## qs

---

#### _ws.qs() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## send

---

#### _ws.send(content: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### _ws.send(sessionId: string, content: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### _ws.send(sessionId: string, content: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.send(content: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendAsService

---

#### _ws.sendAsService(sessionId: string, message: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.sendAsService(message: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendBinary

---

#### _ws.sendBinary(content: byte[]) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ |   |

##### Return

( _boolean_ )


---

#### _ws.sendBinary(sessionId: string, content: byte[]) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _byte[]_ |   |

##### Return

( _boolean_ )


---

## sendService

---

#### _ws.sendService(sessionId: string, message: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _ws.sendService(message: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendText

---

#### _ws.sendText(content: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### _ws.sendText(sessionId: string, content: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

## session

---

#### _ws.session() : jakarta.websocket.Session
##### Return

( _jakarta.websocket.Session_ )


---

#### _ws.session(id: string) : jakarta.websocket.Session
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _jakarta.websocket.Session_ )


---

## sessionEndpoint

---

#### _ws.sessionEndpoint() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _ws.sessionEndpoint(id: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## sessionId

---

#### _ws.sessionId() : string
##### Return

( _string_ )


---

## textStreamed

---

#### _ws.textStreamed() : string
##### Return

( _string_ )


---

#### _ws.textStreamed(charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ |   |

##### Return

( _string_ )


---

