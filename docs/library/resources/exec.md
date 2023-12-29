---
id: exec
title: Exec
sidebar_label: Exec
---

Functionalities to aid code execution.
It performs the execution of other scripts, it also supports the execution of scripts in other programming languages.
Executes the indicated script, returning its output.
Main functions:
- [bind](#bind)
- [core](#core)
- [service](#service)
- [sleep](#sleep)
- [stop](#stop)
- [gc](#gc)


```javascript
// Run another App script in `server/core/`
const outputOutput = _exec.core("other-script");

// Run another App script in `server/services/`
const outputService = _exec.service("other-service");

// Pause for 2 seconds:`
_exec.sleep(2000);

// Execution stop:`
_exec.stop();

```

---

## add

---

#### _exec.add(arg0: _int_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.add(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _exec.addAll(arg0: _int_, arg1: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### _exec.addAll(arg0: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _exec.as(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.as(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## asBoolean

---

#### _exec.asBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

## asByte

---

#### _exec.asByte(arg0: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte_ )


---

#### _exec.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _exec.asByte(arg0: string, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

## asCalendar

---

#### _exec.asCalendar(arg0: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.asCalendar(arg0: string, arg1: _java.util.Calendar_) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## asDate

---

#### _exec.asDate(arg0: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.Date_ )


---

#### _exec.asDate(arg0: string, arg1: _java.util.Date_) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## asDouble

---

#### _exec.asDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _exec.asDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _exec.asDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _exec.asDouble(arg0: string, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

## asFile

---

#### _exec.asFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _exec.asFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _exec.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _exec.asFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _exec.asFloat(arg0: string, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

## asHTMLDecode

---

#### _exec.asHTMLDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asHTMLEncode

---

#### _exec.asHTMLEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asInstant

---

#### _exec.asInstant(arg0: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.asInstant(arg0: string, arg1: _java.time.Instant_) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## asInt

---

#### _exec.asInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _exec.asInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _exec.asInt(arg0: string, arg1: _short_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Return

( _int_ )


---

## asList

---

#### _exec.asList(arg0: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(arg0: _int_, arg1: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(arg0: _int_, arg1: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(arg0: _int_, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(arg0: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(arg0: string, arg1: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(arg0: string, arg1: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(arg0: string, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## asLocalDate

---

#### _exec.asLocalDate(arg0: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(arg0: string, arg1: _java.time.LocalDate_) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### _exec.asLocalDateTime(arg0: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(arg0: string, arg1: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### _exec.asLocalTime(arg0: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(arg0: string, arg1: _java.time.LocalTime_) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## asLong

---

#### _exec.asLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _exec.asLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _exec.asLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _exec.asLong(arg0: string, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

## asMap

---

#### _exec.asMap(arg0: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.asMap(arg0: _int_, arg1: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.asMap(arg0: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.Map_ )


---

#### _exec.asMap(arg0: string, arg1: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

## asSQLDate

---

#### _exec.asSQLDate(arg0: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.asSQLDate(arg0: string, arg1: _java.sql.Date_) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## asSQLTime

---

#### _exec.asSQLTime(arg0: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.asSQLTime(arg0: string, arg1: _java.sql.Time_) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### _exec.asSQLTimestamp(arg0: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(arg0: string, arg1: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## asShort

---

#### _exec.asShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _exec.asShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _exec.asShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _exec.asShort(arg0: string, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

## asString

---

#### _exec.asString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _exec.asString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _exec.asString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _exec.asString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _exec.asString(arg0: string, arg1: string, arg2: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( string )


---

## asUID

---

#### _exec.asUID(arg0: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUID(arg0: string, arg1: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## asUUID

---

#### _exec.asUUID(arg0: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUUID(arg0: string, arg1: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## asValues

---

#### _exec.asValues(index: _int_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | The index to get the associated object. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

#### _exec.asValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | The index to get the associated object. |
| defaultValue | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

#### _exec.asValues(key: string) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | The key to get the associated object. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

#### _exec.asValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | The key to get the associated object. |
| defaultValue | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

## async

---

#### _exec.async(arg0: _[Lorg.graalvm.polyglot.Value;_) : _[Async](../../objects/Async)_
##### Description

Execution of functions asynchronously.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Lorg.graalvm.polyglot.Value;_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## asyncData

---

#### _exec.asyncData(arg0: _java.lang.Object_, arg1: _[Lorg.graalvm.polyglot.Value;_) : _[Async](../../objects/Async)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _[Lorg.graalvm.polyglot.Value;_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## asyncList

---

#### _exec.asyncList(arg0: _[Values](../../objects/Values)_, arg1: _org.graalvm.polyglot.Value_) : _[Async](../../objects/Async)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## bind

---

#### _exec.bind(key: string, value: _java.lang.Object_) : _[Exec](../../resources/Exec)_
##### Description

Transitions variables between scripts, including between different programming languages.

##### How To Use

```javascript
const originalVar = "test";
_exec    .bind("transitVar", originalVar)    .core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Variable name that will be available in the other script that will be executed. |
| value | _java.lang.Object_ | Object to be passed to the other script that will be executed. |

##### Return

( _[Exec](../../resources/Exec)_ )


---

## clear

---

#### _exec.clear() : _void_
##### Return

( _void_ )


---

## cloneJSON

---

#### _exec.cloneJSON() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## compute

---

#### _exec.compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## computeIfAbsent

---

#### _exec.computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.util.function.Function_ |   |

##### Return

( _java.lang.Object_ )


---

## computeIfPresent

---

#### _exec.computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## contains

---

#### _exec.contains(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _exec.contains(arg0: string, arg1: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsAll

---

#### _exec.containsAll(arg0: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _exec.containsKey(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _exec.containsValue(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## core

---

#### _exec.core(path: string) : _[ScriptResult](../../objects/ScriptResult)_
##### Description

Execution of scripts that are in the `server/core/` folder.

##### How To Use

```javascript
_exec.core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Script path with source in `core/` to execute. |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### _exec.core(path: string, path: _boolean_) : _[ScriptResult](../../objects/ScriptResult)_
##### Description

Execution of scripts that are in the `server/core/` folder.

##### How To Use

```javascript
_exec.core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Script path with source in `core/` to execute. |
| path | _boolean_ | Script path with source in `core/` to execute. |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## ensureJail

---

#### _exec.ensureJail(jailPath: string) : _void_
##### Description

Set the security restriction on a specific directory for processed objects of the file type, it can only be set once.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| jailPath | string | Path where files will be restricted. |

##### Return

( _void_ )


---

## entrySet

---

#### _exec.entrySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## filter

---

#### _exec.filter(arg0: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.filter(arg0: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _exec.find(arg0: string, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.find(arg0: _java.util.function.Predicate_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.find(arg0: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _exec.forEach(arg0: _java.util.function.BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(arg0: _java.util.function.Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### _exec.forceList() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _exec.forceMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _exec.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.fromJSON(arg0: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## gc

---

#### _exec.gc() : _void_
##### Description

Performs memory cleanup by running the garbage collector ([JVM garbage collector](https://www.baeldung.com/jvm-garbage-collectors)).

##### How To Use

```javascript
// Free up memory by running Garbage Collector:
_exec.gc();
```

##### Return

( _void_ )


---

## get

---

#### _exec.get(key: _int_) : _java.lang.Object_
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _int_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### _exec.get(key: _java.lang.Object_) : _java.lang.Object_
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### _exec.get(key: string) : _java.lang.Object_
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### _exec.get(key: string, type: _java.lang.Class_) : _java.lang.Object_
##### Description

Gets the original object associated with the key, but cast for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Key to get the associated object. |
| type | _java.lang.Class_ | Class representing the type of object that should be cast. |

##### Return

( _java.lang.Object_ )

Original object converted to the type of the defined class.

---

## getBoolean

---

#### _exec.getBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

## getByte

---

#### _exec.getByte(arg0: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte_ )


---

#### _exec.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _exec.getByte(arg0: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte_ )


---

#### _exec.getByte(arg0: string, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

## getCalendar

---

#### _exec.getCalendar(arg0: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.getCalendar(arg0: string, arg1: _java.util.Calendar_) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## getDate

---

#### _exec.getDate(arg0: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.Date_ )


---

#### _exec.getDate(arg0: string, arg1: _java.util.Date_) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## getDouble

---

#### _exec.getDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _exec.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _exec.getDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _exec.getDouble(arg0: string, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

## getFile

---

#### _exec.getFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _exec.getFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _exec.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _exec.getFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _exec.getFloat(arg0: string, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

## getForceList

---

#### _exec.getForceList() : _boolean_
##### Return

( _boolean_ )


---

## getForceMap

---

#### _exec.getForceMap() : _boolean_
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### _exec.getHTMLDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getHTMLEncode

---

#### _exec.getHTMLEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getInstant

---

#### _exec.getInstant(arg0: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.getInstant(arg0: string, arg1: _java.time.Instant_) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## getInt

---

#### _exec.getInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _exec.getInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _exec.getInt(arg0: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _int_ )


---

#### _exec.getInt(arg0: string, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

## getKeys

---

#### _exec.getKeys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## getList

---

#### _exec.getList(arg0: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(arg0: _int_, arg1: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(arg0: _int_, arg1: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(arg0: _int_, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(arg0: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(arg0: string, arg1: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(arg0: string, arg1: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(arg0: string, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## getLocalDate

---

#### _exec.getLocalDate(arg0: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(arg0: string, arg1: _java.time.LocalDate_) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### _exec.getLocalDateTime(arg0: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(arg0: string, arg1: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### _exec.getLocalTime(arg0: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(arg0: string, arg1: _java.time.LocalTime_) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## getLong

---

#### _exec.getLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _exec.getLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _exec.getLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _exec.getLong(arg0: string, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

## getMap

---

#### _exec.getMap(arg0: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.getMap(arg0: _int_, arg1: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.getMap(arg0: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.Map_ )


---

#### _exec.getMap(arg0: string, arg1: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

## getOrDefault

---

#### _exec.getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## getSQLDate

---

#### _exec.getSQLDate(arg0: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.getSQLDate(arg0: string, arg1: _java.sql.Date_) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## getSQLTime

---

#### _exec.getSQLTime(arg0: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.getSQLTime(arg0: string, arg1: _java.sql.Time_) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### _exec.getSQLTimestamp(arg0: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(arg0: string, arg1: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## getShort

---

#### _exec.getShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _exec.getShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _exec.getShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _exec.getShort(arg0: string, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

## getSize

---

#### _exec.getSize() : _int_
##### Return

( _int_ )


---

## getString

---

#### _exec.getString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _exec.getString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _exec.getString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _exec.getString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _exec.getString(arg0: string, arg1: string, arg2: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( string )


---

## getUID

---

#### _exec.getUID(arg0: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUID(arg0: string, arg1: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## getURLCharacterEncoding

---

#### _exec.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( string )

Character encoding code.

---

## getUUID

---

#### _exec.getUUID(arg0: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUUID(arg0: string, arg1: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## getValues

---

#### _exec.getValues() : _java.util.Collection_
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### _exec.getValues(index: _int_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | The index to get the associated object. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

#### _exec.getValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | The index to get the associated object. |
| defaultValue | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

#### _exec.getValues(key: string) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | The key to get the associated object. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

#### _exec.getValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | The key to get the associated object. |
| defaultValue | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

## has

---

#### _exec.has(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _exec.has(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _exec.has(arg0: string, arg1: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## hasKey

---

#### _exec.hasKey(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _exec.hasValue(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### _exec.indexOf(arg0: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _exec.is(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isEmpty

---

#### _exec.isEmpty() : _boolean_
##### Return

( _boolean_ )


---

## isJail

---

#### _exec.isJail() : _boolean_
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isList

---

#### _exec.isList() : _boolean_
##### Return

( _boolean_ )


---

#### _exec.isList(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _exec.isLockedAsReadOnly() : _boolean_
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### _exec.isMap() : _boolean_
##### Return

( _boolean_ )


---

#### _exec.isMap(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _exec.isMergeable(arg0: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## iterator

---

#### _exec.iterator() : _java.util.Iterator_
##### Return

( _java.util.Iterator_ )


---

## join

---

#### _exec.join(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## keySet

---

#### _exec.keySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keys

---

#### _exec.keys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### _exec.keysSorted() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### _exec.keysToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _exec.keysToString(arg0: _java.util.Map_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |

##### Return

( string )


---

## lastIndexOf

---

#### _exec.lastIndexOf(arg0: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### _exec.length() : _int_
##### Return

( _int_ )


---

## list

---

#### _exec.list() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _exec.list(arg0: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### _exec.listIterator() : _java.util.ListIterator_
##### Return

( _java.util.ListIterator_ )


---

#### _exec.listIterator(arg0: _int_) : _java.util.ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _exec.listOfValues() : _java.util.List_
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### _exec.loadJSON(arg0: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _exec.loadJSON(arg0: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(arg0: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(arg0: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(arg0: _java.util.Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _exec.loadPropertiesFromString(arg0: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### _exec.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](../../objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### _exec.map() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## merge

---

#### _exec.merge(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## of

---

#### _exec.of(arg0: _[Ljava.lang.Object;_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Ljava.lang.Object;_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.of(arg0: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.of(arg0: _java.util.List_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.List_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.of(arg0: _java.util.Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _exec.ofList(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _exec.ofMap(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## push

---

#### _exec.push(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _exec.put(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.put(arg0: string, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## putAll

---

#### _exec.putAll(arg0: _java.util.Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _exec.putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## remove

---

#### _exec.remove(arg0: _int_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.remove(arg0: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## removeAll

---

#### _exec.removeAll() : _void_
##### Return

( _void_ )


---

#### _exec.removeAll(arg0: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _exec.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## replaceAll

---

#### _exec.replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### _exec.replaceAll(arg0: _java.util.function.UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _exec.replaceAll(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _exec.retainAll(arg0: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _exec.safeString(arg0: _java.lang.Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( string )


---

#### _exec.safeString(arg0: _java.lang.Object_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | string |   |

##### Return

( string )


---

## saveJSON

---

#### _exec.saveJSON(arg0: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _exec.saveJSON(arg0: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(arg0: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _exec.saveProperties(arg0: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### _exec.search(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _exec.search(arg0: string, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _exec.search(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _exec.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Return

( string )


---

#### _exec.search(arg0: _java.util.Map_, arg1: string, arg2: string, arg3: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | string |   |
| arg3 | _boolean_ |   |

##### Return

( string )


---

## service

---

#### _exec.service(path: string) : _[ScriptResult](../../objects/ScriptResult)_
##### Description

Execution of scripts that are in the `server/services/` folder.

##### How To Use

```javascript
_exec.service("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Script path originating from 'services/' to be executed. |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### _exec.service(path: string, preserveContext: _boolean_) : _[ScriptResult](../../objects/ScriptResult)_
##### Description

Execution of scripts that are in the `server/services/` folder.

##### How To Use

```javascript
_exec.service("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Script path originating from 'services/' to be executed. |
| preserveContext | _boolean_ | Whether to keep the same execution context or start a new one. |

##### Return

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## set

---

#### _exec.set(arg0: _int_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.set(arg0: string, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceList

---

#### _exec.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _exec.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _exec.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfGreaterThanZero

---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfLowerThanZero

---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfNotEmpty

---

#### _exec.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfNotZero

---

#### _exec.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfTrue

---

#### _exec.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setNull

---

#### _exec.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _exec.setURLCharacterEncoding(characterEncoding: string) : _void_
##### Description

Defines the character encoding to be used in formatting for URL (_QueryString_).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| characterEncoding | string | Character encoding code. |

##### Return

( _void_ )


---

## size

---

#### _exec.size() : _int_
##### Return

( _int_ )


---

## sizeOfList

---

#### _exec.sizeOfList() : _int_
##### Return

( _int_ )


---

## sizeOfMap

---

#### _exec.sizeOfMap() : _int_
##### Return

( _int_ )


---

## sleep

---

#### _exec.sleep(interval: _long_) : _void_
##### Description

Pauses execution, useful for causing some controlled processing delay.

##### How To Use

```javascript
// Stop the execution for 3 seconds:
_exec.sleep(3000);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| interval | _long_ | Time interval in milliseconds to pause execution. |

##### Return

( _void_ )


---

## sort

---

#### _exec.sort(arg0: _java.util.Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### _exec.sort(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _exec.spliterator() : _java.util.Spliterator_
##### Return

( _java.util.Spliterator_ )


---

## stop

---

#### _exec.stop() : _void_
##### Description

It stops the execution of the current script, useful for interrupting the execution.

##### How To Use

```javascript
// For the execution:
_out.println('Will stop...<br>');
_exec.stop();
_out.println('Not run this line.');
```

##### Return

( _void_ )


---

## subList

---

#### _exec.subList(arg0: _int_, arg1: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _java.util.List_ )


---

## toArray

---

#### _exec.toArray() : _[Ljava.lang.Object;_
##### Return

( _[Ljava.lang.Object;_ )


---

#### _exec.toArray(arg0: _[Ljava.lang.Object;_) : _[Ljava.lang.Object;_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Ljava.lang.Object;_ |   |

##### Return

( _[Ljava.lang.Object;_ )


---

## toByteArray

---

#### _exec.toByteArray() : _[B_
##### Return

( _[B_ )


---

## toDoubleArray

---

#### _exec.toDoubleArray() : _[D_
##### Return

( _[D_ )


---

## toFloatArray

---

#### _exec.toFloatArray() : _[F_
##### Return

( _[F_ )


---

## toFormMap

---

#### _exec.toFormMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _exec.toIntArray() : _[I_
##### Return

( _[I_ )


---

## toJSON

---

#### _exec.toJSON() : string
##### Return

( string )


---

#### _exec.toJSON(arg0: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _java.util.List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.List_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _java.util.List_, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _java.util.List_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _java.util.List_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

## toJSONObject

---

#### _exec.toJSONObject(arg0: _java.lang.Object_, arg1: _boolean_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _boolean_ |   |

##### Return

( _java.lang.Object_ )


---

## toJSONString

---

#### _exec.toJSONString(arg0: _java.lang.Object_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

## toList

---

#### _exec.toList() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _exec.toList(arg0: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### _exec.toLongArray() : _[J_
##### Return

( _[J_ )


---

## toMap

---

#### _exec.toMap() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## toProperties

---

#### _exec.toProperties() : string
##### Return

( string )


---

## toShortArray

---

#### _exec.toShortArray() : _[S_
##### Return

( _[S_ )


---

## toStringArray

---

#### _exec.toStringArray() : _[Ljava.lang.String;_
##### Return

( _[Ljava.lang.String;_ )


---

## unset

---

#### _exec.unset(arg0: string) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### _exec.unsetAll() : _void_
##### Return

( _void_ )


---

## values

---

#### _exec.values() : _java.util.Collection_
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

## valuesToString

---

#### _exec.valuesToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: string, arg1: _[Ljava.lang.String;_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Ljava.lang.String;_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: string, arg1: _[Ljava.lang.String;_, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Ljava.lang.String;_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: _java.util.Map_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Ljava.lang.String;_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Ljava.lang.String;_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Ljava.lang.String;_, arg3: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Ljava.lang.String;_ |   |
| arg3 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

