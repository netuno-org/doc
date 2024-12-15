---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Script execution results if an error occurred or was successful.

---

## isError

---

#### <span style={{color: '#008000'}}>isError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isSuccess

---

#### <span style={{color: '#008000'}}>isSuccess</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## whenError

---

#### <span style={{color: '#008000'}}>whenError</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>whenError</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

## whenSucceed

---

#### <span style={{color: '#008000'}}>whenSucceed</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Runnable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _java.lang.Runnable_ |   |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>whenSucceed</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

