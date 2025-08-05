---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Resultado da exceção de scripts, se ocorreu com sucesso ou se gerou algum erro.

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

## whenError

---

#### <span style={{color: '#008000'}}>whenError</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>whenError</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## whenSucceed

---

#### <span style={{color: '#008000'}}>whenSucceed</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Runnable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **func** | _java.lang.Runnable_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### <span style={{color: '#008000'}}>whenSucceed</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](/docs/library/objects/ScriptResult)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

