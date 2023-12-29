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

#### whenError(arg0: _java.util.function.Consumer_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.Consumer_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### whenError(arg0: _org.graalvm.polyglot.Value_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## whenSucceed

---

#### whenSucceed(arg0: _java.lang.Runnable_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Runnable_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### whenSucceed(arg0: _org.graalvm.polyglot.Value_) : _[ScriptResult](../../objects/ScriptResult)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

