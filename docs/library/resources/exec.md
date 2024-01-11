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

#### _exec.add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _exec.addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### _exec.addAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _exec.as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |
| oDefault | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## asBoolean

---

#### _exec.asBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(key: string, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

## asByte

---

#### _exec.asByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### _exec.asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### _exec.asByte(key: string, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

## asCalendar

---

#### _exec.asCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## asDate

---

#### _exec.asDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### _exec.asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## asDouble

---

#### _exec.asDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### _exec.asDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### _exec.asDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### _exec.asDouble(key: string, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

## asFile

---

#### _exec.asFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _exec.asFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### _exec.asFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### _exec.asFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### _exec.asFloat(key: string, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

## asHTMLDecode

---

#### _exec.asHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asHTMLEncode

---

#### _exec.asHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asInstant

---

#### _exec.asInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## asInt

---

#### _exec.asInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### _exec.asInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### _exec.asInt(key: string, defaultValue: _short_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _short_ |   |

##### Return

( _int_ )


---

## asList

---

#### _exec.asList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## asLocalDate

---

#### _exec.asLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### _exec.asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### _exec.asLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## asLong

---

#### _exec.asLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### _exec.asLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### _exec.asLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### _exec.asLong(key: string, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

## asMap

---

#### _exec.asMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.asMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### _exec.asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

## asSQLDate

---

#### _exec.asSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## asSQLTime

---

#### _exec.asSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### _exec.asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## asShort

---

#### _exec.asShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### _exec.asShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### _exec.asShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### _exec.asShort(key: string, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

## asString

---

#### _exec.asString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### _exec.asString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _exec.asString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### _exec.asString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _exec.asString(key: string, defaultValue: string, charsetName: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |
| charsetName | string |   |

##### Return

( string )


---

## asUID

---

#### _exec.asUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## asUUID

---

#### _exec.asUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

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

#### _exec.async(functions: _[Lorg.graalvm.polyglot.Value;[]_) : _[Async](../../objects/Async)_
##### Description

Execution of functions asynchronously.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| functions | _[Lorg.graalvm.polyglot.Value;[]_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## asyncData

---

#### _exec.asyncData(data: _java.lang.Object_, functions: _[Lorg.graalvm.polyglot.Value;[]_) : _[Async](../../objects/Async)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _java.lang.Object_ |   |
| functions | _[Lorg.graalvm.polyglot.Value;[]_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## asyncList

---

#### _exec.asyncList(list: _[Values](../../objects/Values)_, function: _org.graalvm.polyglot.Value_) : _[Async](../../objects/Async)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| list | _[Values](../../objects/Values)_ |   |
| function | _org.graalvm.polyglot.Value_ |   |

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

#### _exec.contains(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _exec.contains(key: string, value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsAll

---

#### _exec.containsAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _exec.containsKey(key: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _exec.containsValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

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

#### _exec.filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _exec.find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _exec.forEach(action: _java.util.function.BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(action: _java.util.function.Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

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

#### _exec.fromJSON(content: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

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

#### _exec.getBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(key: string, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

## getByte

---

#### _exec.getByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### _exec.getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### _exec.getByte(key: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _byte_ )


---

#### _exec.getByte(key: string, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

## getCalendar

---

#### _exec.getCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## getDate

---

#### _exec.getDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### _exec.getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## getDouble

---

#### _exec.getDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### _exec.getDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### _exec.getDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### _exec.getDouble(key: string, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

## getFile

---

#### _exec.getFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _exec.getFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### _exec.getFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### _exec.getFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### _exec.getFloat(key: string, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _float_ |   |

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

#### _exec.getHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getHTMLEncode

---

#### _exec.getHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getInstant

---

#### _exec.getInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## getInt

---

#### _exec.getInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### _exec.getInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### _exec.getInt(key: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _int_ )


---

#### _exec.getInt(key: string, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _int_ |   |

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

#### _exec.getList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## getLocalDate

---

#### _exec.getLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### _exec.getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### _exec.getLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## getLong

---

#### _exec.getLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### _exec.getLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### _exec.getLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### _exec.getLong(key: string, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

## getMap

---

#### _exec.getMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _exec.getMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### _exec.getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

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

#### _exec.getSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## getSQLTime

---

#### _exec.getSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### _exec.getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## getShort

---

#### _exec.getShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### _exec.getShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### _exec.getShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### _exec.getShort(key: string, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _short_ |   |

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

#### _exec.getString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### _exec.getString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _exec.getString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### _exec.getString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _exec.getString(key: string, defaultValue: string, charsetName: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |
| charsetName | string |   |

##### Return

( string )


---

## getUID

---

#### _exec.getUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

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

#### _exec.getUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

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

#### _exec.has(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _exec.has(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _exec.has(key: string, value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## hasKey

---

#### _exec.hasKey(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _exec.hasValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### _exec.indexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _exec.is(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _exec.isList(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _exec.isMap(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _exec.isMergeable(object: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

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

#### _exec.join(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

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

#### _exec.keysToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

#### _exec.keysToString(map: _java.util.Map_, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Return

( string )


---

## lastIndexOf

---

#### _exec.lastIndexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _exec.list(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### _exec.listIterator() : _java.util.ListIterator_
##### Return

( _java.util.ListIterator_ )


---

#### _exec.listIterator(index: _int_) : _java.util.ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

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

#### _exec.loadJSON(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _exec.loadJSON(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(properties: _java.util.Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _exec.loadPropertiesFromString(data: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string |   |

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

#### _exec.merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

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

#### _exec.of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.of(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| list | _java.util.List_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _exec.ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _exec.ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## push

---

#### _exec.push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _exec.put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.put(key: string, value: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## putAll

---

#### _exec.putAll(m: _java.util.Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| m | _java.util.Map_ |   |

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

#### _exec.remove(i: _int_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| i | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.remove(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _exec.removeAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

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

#### _exec.replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _exec.replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _exec.retainAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _exec.safeString(object: _java.lang.Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( string )


---

#### _exec.safeString(object: _java.lang.Object_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |
| defaultValue | string |   |

##### Return

( string )


---

## saveJSON

---

#### _exec.saveJSON(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _exec.saveJSON(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _exec.saveProperties(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### _exec.search(content: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( string )


---

#### _exec.search(content: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### _exec.search(content: string, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Return

( string )


---

#### _exec.search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### _exec.search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

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

#### _exec.set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceList

---

#### _exec.setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceList | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _exec.setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceMap | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _exec.setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfGreaterThanZero

---

#### _exec.setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _short_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfLowerThanZero

---

#### _exec.setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _short_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfNotEmpty

---

#### _exec.setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfNotZero

---

#### _exec.setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _short_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfTrue

---

#### _exec.setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setNull

---

#### _exec.setNull(key: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

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

#### _exec.sort(c: _java.util.Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### _exec.sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

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

#### _exec.subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| fromIndex | _int_ |   |
| toIndex | _int_ |   |

##### Return

( _java.util.List_ )


---

## toArray

---

#### _exec.toArray() : _[Ljava.lang.Object;[]_
##### Return

( _[Ljava.lang.Object;[]_ )


---

#### _exec.toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### _exec.toByteArray() : _byte[]_
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### _exec.toDoubleArray() : _double[]_
##### Return

( _double[]_ )


---

## toFloatArray

---

#### _exec.toFloatArray() : _float[]_
##### Return

( _float[]_ )


---

## toFormMap

---

#### _exec.toFormMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

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

#### _exec.toJSON(htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### _exec.toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _exec.toJSON(indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _exec.toJSON(values: _java.util.List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |

##### Return

( string )


---

#### _exec.toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### _exec.toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _exec.toJSON(values: _java.util.List_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

## toJSONObject

---

#### _exec.toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |
| htmlEscape | _boolean_ |   |

##### Return

( _java.lang.Object_ )


---

## toJSONString

---

#### _exec.toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

## toList

---

#### _exec.toList() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _exec.toList(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### _exec.toLongArray() : _long[]_
##### Return

( _long[]_ )


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

#### _exec.toShortArray() : _short[]_
##### Return

( _short[]_ )


---

## toStringArray

---

#### _exec.toStringArray() : _[Ljava.lang.String;[]_
##### Return

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### _exec.unset(key: string) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

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

#### _exec.valuesToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

#### _exec.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### _exec.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _exec.valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _exec.valuesToString(map: _java.util.Map_, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Return

( string )


---

#### _exec.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### _exec.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _exec.valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

