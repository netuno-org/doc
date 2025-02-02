---
id: ws
title: WebSocket
sidebar_label: WebSocket
---

Management of connections and communication with customers.

---

## allSessionsEndpoints

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>allSessionsEndpoints</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## awaitStream

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>awaitStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## binaryStreamed

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>binaryStreamed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Return

( _byte[]_ )


---

## broadcast

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcast</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastAsService

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastAsService</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastAsService</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastBinary

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastBinary</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **content** | _byte[]_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastBinary</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastService</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastService</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## broadcastText

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastText</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>broadcastText</span>(<span style={{color: '#FF8000'}}>endpointName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>close</span>(<span style={{color: '#FF8000'}}>sessionId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |

##### Return

( _boolean_ )


---

## closeCode

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>closeCode</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## closeData

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>closeData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## closeReason

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>closeReason</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## closeSession

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>closeSession</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>closeSession</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>reason</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## data

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>data</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>data</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## fullPath

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>fullPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>fullPath</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _string_ )


---

## getAllSessionsEndpoints

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getAllSessionsEndpoints</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## getCloseCode

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getCloseCode</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getCloseData

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getCloseData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## getCloseReason

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getCloseReason</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## getData

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getData</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## getFullPath

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getFullPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getFullPath</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _string_ )


---

## getMessage

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getMessage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[WSMessage](../objects/WSMessage)</span>
##### Return

( _[WSMessage](../objects/WSMessage)_ )


---

## getPath

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getPath</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## getQS

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getQS</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## getSession

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getSession</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>jakarta.websocket.Session</span>
##### Return

( _jakarta.websocket.Session_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getSession</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>jakarta.websocket.Session</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _jakarta.websocket.Session_ )


---

## getSessionEndpoint

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getSessionEndpoint</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getSessionEndpoint</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## getSessionId

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>getSessionId</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## isBinaryStreamed

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>isBinaryStreamed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isClose

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>isClose</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isConnect

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>isConnect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStream

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>isStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isTextStreamed

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>isTextStreamed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## message

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>message</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[WSMessage](../objects/WSMessage)</span>
##### Return

( _[WSMessage](../objects/WSMessage)_ )


---

## path

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>path</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>path</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## qs

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>qs</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## send

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>sessionId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>sessionId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>send</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendAsService

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendAsService</span>(<span style={{color: '#FF8000'}}>sessionId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendAsService</span>(<span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendBinary

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendBinary</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendBinary</span>(<span style={{color: '#FF8000'}}>sessionId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendService</span>(<span style={{color: '#FF8000'}}>sessionId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendService</span>(<span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _[Values](../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendText

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendText</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sendText</span>(<span style={{color: '#FF8000'}}>sessionId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>session</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>jakarta.websocket.Session</span>
##### Return

( _jakarta.websocket.Session_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>session</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>jakarta.websocket.Session</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _jakarta.websocket.Session_ )


---

## sessionEndpoint

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sessionEndpoint</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sessionEndpoint</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## sessionId

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>sessionId</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## textStreamed

---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>textStreamed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_ws</span>.<span style={{color: '#008000'}}>textStreamed</span>(<span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _string_ |   |

##### Return

( _string_ )


---

