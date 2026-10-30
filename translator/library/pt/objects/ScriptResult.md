---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Resultado da exceção de scripts, se ocorreu com sucesso ou se gerou algum erro.

---

## error

---

#### <span style={{color: '#008000'}}>error</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>
##### Retorno

( _java.lang.Throwable_ )


---

## get

---

#### <span style={{color: '#008000'}}>get</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Retorno

( _java.lang.Object_ )


---

## isError

---

#### <span style={{color: '#008000'}}>isError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isSuccess

---

#### <span style={{color: '#008000'}}>isSuccess</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## onError

---

#### <span style={{color: '#008000'}}>onError</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;java.lang.Throwable&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>onError</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## onSuccess

---

#### <span style={{color: '#008000'}}>onSuccess</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;java.lang.Object&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>onSuccess</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

