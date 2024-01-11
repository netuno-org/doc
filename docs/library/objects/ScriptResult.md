---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Script execution results if an error occurred or was successful.

---

## isError

---

#### isError() : _boolean_
##### Return

( _boolean_ )


---

## isSuccess

---

#### isSuccess() : _boolean_
##### Return

( _boolean_ )


---

## whenError

---

#### whenError(func: _java.util.function.Consumer_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| func | _java.util.function.Consumer_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### whenError(function: _org.graalvm.polyglot.Value_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## whenSucceed

---

#### whenSucceed(func: _java.lang.Runnable_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| func | _java.lang.Runnable_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### whenSucceed(function: _org.graalvm.polyglot.Value_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

