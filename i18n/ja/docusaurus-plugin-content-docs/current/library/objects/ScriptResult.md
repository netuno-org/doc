---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Script execution results if an error occurred or was successful.

---

## error

---

#### <span style={{color: '#008000'}}>error</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>
##### Return

( _java.lang.Throwable_ )


---

## get

---

#### <span style={{color: '#008000'}}>get</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Return

( _java.lang.Object_ )


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

## onError

---

#### <span style={{color: '#008000'}}>onError</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;java.lang.Throwable&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>onError</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## onSuccess

---

#### <span style={{color: '#008000'}}>onSuccess</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;java.lang.Object&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>onSuccess</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

