---
id: ws
title: WebSocket
sidebar_label: WebSocket
---

Management of connections and communication with customers.

---

## allSessionsEndpoints

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">allSessionsEndpoints</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## broadcast

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">broadcast</span>(<span style="color: #FF8000">endpointName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastAsService

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">broadcastAsService</span>(<span style="color: #FF8000">endpointName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">broadcastAsService</span>(<span style="color: #FF8000">endpointName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

## broadcastService

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">broadcastService</span>(<span style="color: #FF8000">endpointName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">broadcastService</span>(<span style="color: #FF8000">endpointName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## close

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">close</span>(<span style="color: #FF8000">sessionId</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |

##### Return

( _boolean_ )


---

## closeCode

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">closeCode</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## closeData

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">closeData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## closeReason

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">closeReason</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## closeSession

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">closeSession</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">closeSession</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">reason</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">config</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## data

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">data</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">data</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## fullPath

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">fullPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">fullPath</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _string_ )


---

## getAllSessionsEndpoints

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getAllSessionsEndpoints</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getCloseCode

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getCloseCode</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getCloseData

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getCloseData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getCloseReason

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getCloseReason</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## getConfig

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getConfig</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getData

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getData</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getFullPath

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getFullPath</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getFullPath</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _string_ )


---

## getMessage

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getMessage</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.resource.WS$WSMessage</span>
##### Return

( _org.netuno.tritao.resource.WS$WSMessage_ )


---

## getPath

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getPath</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getPath</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getQS

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getQS</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## getSession

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getSession</span>() : <span style="font-weight: normal; font-style: italic;">javax.websocket.Session</span>
##### Return

( _javax.websocket.Session_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getSession</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">javax.websocket.Session</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _javax.websocket.Session_ )


---

## getSessionEndpoint

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getSessionEndpoint</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getSessionEndpoint</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getSessionId

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">getSessionId</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

## isClose

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">isClose</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isConnect

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">isConnect</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## message

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">message</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.resource.WS$WSMessage</span>
##### Return

( _org.netuno.tritao.resource.WS$WSMessage_ )


---

## path

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">path</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">path</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## qs

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">qs</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

## rawBroadcast

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">rawBroadcast</span>(<span style="color: #FF8000">endpointName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">rawBroadcast</span>(<span style="color: #FF8000">endpointName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **endpointName** | _string_ |   |
| **path** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _void_ )


---

## rawSend

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">rawSend</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">rawSend</span>(<span style="color: #FF8000">sessionId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

## send

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">send</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">send</span>(<span style="color: #FF8000">sessionId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">send</span>(<span style="color: #FF8000">sessionId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **content** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">send</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendAsService

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">sendAsService</span>(<span style="color: #FF8000">sessionId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">sendAsService</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## sendService

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">sendService</span>(<span style="color: #FF8000">sessionId</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sessionId** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">sendService</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## session

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">session</span>() : <span style="font-weight: normal; font-style: italic;">javax.websocket.Session</span>
##### Return

( _javax.websocket.Session_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">session</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">javax.websocket.Session</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _javax.websocket.Session_ )


---

## sessionEndpoint

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">sessionEndpoint</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">sessionEndpoint</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## sessionId

---

#### <span style="font-weight: normal">_ws</span>.<span style="color: #008000">sessionId</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Return

( _string_ )


---

