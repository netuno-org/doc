---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Resultado da exceção de scripts, se ocorreu com sucesso ou se gerou algum erro.

---

## isError

---

#### isError() : _boolean_
##### Retorno

( _boolean_ )


---

## isSuccess

---

#### isSuccess() : _boolean_
##### Retorno

( _boolean_ )


---

## whenError

---

#### whenError(func: _java.util.function.Consumer_) : _[ScriptResult](../../objects/ScriptResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| func | _java.util.function.Consumer_ |   |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### whenError(function: _org.graalvm.polyglot.Value_) : _[ScriptResult](../../objects/ScriptResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## whenSucceed

---

#### whenSucceed(func: _java.lang.Runnable_) : _[ScriptResult](../../objects/ScriptResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| func | _java.lang.Runnable_ |   |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### whenSucceed(function: _org.graalvm.polyglot.Value_) : _[ScriptResult](../../objects/ScriptResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

