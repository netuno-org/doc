---
id: ScriptResult
title: ScriptResult
sidebar_label: ScriptResult
---

Script execution results if an error occurred or was successful.

---

## isError

---

#### isError() : boolean
##### Return

( _boolean_ )


---

## isSuccess

---

#### isSuccess() : boolean
##### Return

( _boolean_ )


---

## whenError

---

#### whenError(func: java.util.function.Consumer) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _java.util.function.Consumer_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### whenError(function: org.graalvm.polyglot.Value) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## whenSucceed

---

#### whenSucceed(func: java.lang.Runnable) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _java.lang.Runnable_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### whenSucceed(function: org.graalvm.polyglot.Value) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

