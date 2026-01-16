---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Resultado da exceção de scripts, se ocorreu com sucesso ou se gerou algum erro.

---

## isError

---

#### isError() : boolean
##### Retorno

( _boolean_ )


---

## isSuccess

---

#### isSuccess() : boolean
##### Retorno

( _boolean_ )


---

## whenError

---

#### whenError(func: java.util.function.Consumer) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### whenError(function: org.graalvm.polyglot.Value) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## whenSucceed

---

#### whenSucceed(func: java.lang.Runnable) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **func** | _java.lang.Runnable_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### whenSucceed(function: org.graalvm.polyglot.Value) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

