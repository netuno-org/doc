---
id: exec
title: Exec
sidebar_label: Exec
---

Functionalities to aid code execution.
It performs the execution of other scripts, it also supports the execution of scripts in other programming languages.
Executes the indicated script, returning its output.

```javascript
// Run another App script in `server/core/`
const outputOutput = _exec.core("other-script");

// Run another App script in `server/services/`
const outputService = _exec.service("other-service");

```

---

## add

---

#### _exec.add(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.add(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _exec.addAll(arg0: _int_, arg1: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Collection_ |   |

##### Return

( _boolean_ )


---

#### _exec.addAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _exec.as(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.as(arg0: _Object_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

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

#### _exec.asByte(arg0: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

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

#### _exec.asCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _exec.asCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Calendar_ |   |

##### Return

( _Calendar_ )


---

## asDate

---

#### _exec.asDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _exec.asDate(arg0: string, arg1: _Date_) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

##### Return

( _Date_ )


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

## asHtmlDecode

---

#### _exec.asHtmlDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asHtmlEncode

---

#### _exec.asHtmlEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asInstant

---

#### _exec.asInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _exec.asInstant(arg0: string, arg1: _Instant_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Instant_ |   |

##### Return

( _Instant_ )


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

#### _exec.asList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _exec.asList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _exec.asList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _exec.asList(arg0: string, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

## asLocalDate

---

#### _exec.asLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _exec.asLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDate_ |   |

##### Return

( _LocalDate_ )


---

## asLocalDateTime

---

#### _exec.asLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _exec.asLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDateTime_ |   |

##### Return

( _LocalDateTime_ )


---

## asLocalTime

---

#### _exec.asLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _exec.asLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalTime_ |   |

##### Return

( _LocalTime_ )


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

#### _exec.asMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _exec.asMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _exec.asMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _exec.asMap(arg0: string, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

## asSQLDate

---

#### _exec.asSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _exec.asSQLDate(arg0: string, arg1: _Date_) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

##### Return

( _Date_ )


---

## asSQLTime

---

#### _exec.asSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _exec.asSQLTime(arg0: string, arg1: _Time_) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Time_ |   |

##### Return

( _Time_ )


---

## asSQLTimestamp

---

#### _exec.asSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _exec.asSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Timestamp_ |   |

##### Return

( _Timestamp_ )


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

## asUUID

---

#### _exec.asUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _exec.asUUID(arg0: string, arg1: _UUID_) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Return

( _UUID_ )


---

## asValues

---

#### _exec.asValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.asValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.asValues(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.asValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## async

---

#### _exec.async(arg0: _Value[]_) : _[Async](../../objects/Async)_
##### Description

Execution of functions asynchronously.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value[]_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## asyncData

---

#### _exec.asyncData(arg0: _Object_, arg1: _Value[]_) : _[Async](../../objects/Async)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Value[]_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## asyncList

---

#### _exec.asyncList(arg0: _[Values](../../objects/Values)_, arg1: _Value_) : _[Async](../../objects/Async)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _Value_ |   |

##### Return

( _[Async](../../objects/Async)_ )


---

## bind

---

#### _exec.bind(key: string, value: _Object_) : _Exec_
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
| value | _Object_ | Object to be passed to the other script that will be executed. |

##### Return

( _Exec_ )


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

#### _exec.compute(arg0: _Object_, arg1: _BiFunction_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _BiFunction_ |   |

##### Return

( _Object_ )


---

## computeIfAbsent

---

#### _exec.computeIfAbsent(arg0: _Object_, arg1: _Function_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Function_ |   |

##### Return

( _Object_ )


---

## computeIfPresent

---

#### _exec.computeIfPresent(arg0: _Object_, arg1: _BiFunction_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _BiFunction_ |   |

##### Return

( _Object_ )


---

## contains

---

#### _exec.contains(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

#### _exec.contains(arg0: string, arg1: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _boolean_ )


---

## containsAll

---

#### _exec.containsAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _exec.containsKey(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _exec.containsValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## core

---

#### _exec.core(path: string) : _[Values](../../objects/Values)_
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

( _[Values](../../objects/Values)_ )


---

#### _exec.core(path: string, path: _boolean_) : _[Values](../../objects/Values)_
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

( _[Values](../../objects/Values)_ )


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

#### _exec.entrySet() : _Set_
##### Return

( _Set_ )


---

## filter

---

#### _exec.filter(arg0: _Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.filter(arg0: _Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _exec.find(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.find(arg0: _Predicate_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _Object_ )


---

#### _exec.find(arg0: _Value_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _Object_ )


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

#### _exec.forEach(arg0: _BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(arg0: _Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

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

#### _exec.get(key: _int_) : _Object_
##### Description

Gets the original object associated with the cast key for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _int_ | Key to get the object to associate. |

##### Return

( _Object_ )

Original object converted to the type of the defined class.

---

#### _exec.get(key: _Object_) : _Object_
##### Description

Gets the original object associated with the cast key for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _Object_ | Key to get the object to associate. |

##### Return

( _Object_ )

Original object converted to the type of the defined class.

---

#### _exec.get(key: string) : _Object_
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Key to get the object to associate. |

##### Return

( _Object_ )

Original object without conversions.

---

#### _exec.get(key: string, type: _Class_) : _Object_
##### Description

Gets the original object associated with the cast key for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Key to get the object to associate. |
| type | _Class_ | Class representing the type of object that should be cast. |

##### Return

( _Object_ )

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

#### _exec.getByte(arg0: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

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

#### _exec.getCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _exec.getCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Calendar_ |   |

##### Return

( _Calendar_ )


---

## getDate

---

#### _exec.getDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _exec.getDate(arg0: string, arg1: _Date_) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

##### Return

( _Date_ )


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

## getHtmlDecode

---

#### _exec.getHtmlDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getHtmlEncode

---

#### _exec.getHtmlEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getInstant

---

#### _exec.getInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _exec.getInstant(arg0: string, arg1: _Instant_) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Instant_ |   |

##### Return

( _Instant_ )


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

#### _exec.getKeys() : _Set_
##### Return

( _Set_ )


---

## getList

---

#### _exec.getList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _exec.getList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _exec.getList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _exec.getList(arg0: string, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

## getLocalDate

---

#### _exec.getLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _exec.getLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDate_ |   |

##### Return

( _LocalDate_ )


---

## getLocalDateTime

---

#### _exec.getLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _exec.getLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDateTime_ |   |

##### Return

( _LocalDateTime_ )


---

## getLocalTime

---

#### _exec.getLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _exec.getLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalTime_ |   |

##### Return

( _LocalTime_ )


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

#### _exec.getMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _exec.getMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _exec.getMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _exec.getMap(arg0: string, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

## getOrDefault

---

#### _exec.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

## getSQLDate

---

#### _exec.getSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _exec.getSQLDate(arg0: string, arg1: _Date_) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

##### Return

( _Date_ )


---

## getSQLTime

---

#### _exec.getSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _exec.getSQLTime(arg0: string, arg1: _Time_) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Time_ |   |

##### Return

( _Time_ )


---

## getSQLTimestamp

---

#### _exec.getSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _exec.getSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Timestamp_ |   |

##### Return

( _Timestamp_ )


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

#### _exec.getUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _exec.getUUID(arg0: string, arg1: _UUID_) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Return

( _UUID_ )


---

## getValues

---

#### _exec.getValues() : _Collection_
##### Return

( _Collection_ )


---

#### _exec.getValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.getValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.getValues(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.getValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## has

---

#### _exec.has(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _exec.has(arg0: string, arg1: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

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

#### _exec.hasValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### _exec.indexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _exec.is(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _exec.isList(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _exec.isMap(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _exec.isMergeable(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## iterator

---

#### _exec.iterator() : _Iterator_
##### Return

( _Iterator_ )


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

#### _exec.keySet() : _Set_
##### Return

( _Set_ )


---

## keys

---

#### _exec.keys() : _Set_
##### Return

( _Set_ )


---

## keysSorted

---

#### _exec.keysSorted() : _Set_
##### Return

( _Set_ )


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

#### _exec.keysToString(arg0: _Map_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Return

( string )


---

## lastIndexOf

---

#### _exec.lastIndexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _exec.list() : _List_
##### Return

( _List_ )


---

#### _exec.list(arg0: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Class_ |   |

##### Return

( _List_ )


---

## listIterator

---

#### _exec.listIterator() : _ListIterator_
##### Return

( _ListIterator_ )


---

#### _exec.listIterator(arg0: _int_) : _ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _ListIterator_ )


---

## listOfValues

---

#### _exec.listOfValues() : _List_
##### Return

( _List_ )


---

## loadJSON

---

#### _exec.loadJSON(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _exec.loadJSON(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(arg0: _Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Properties_ |   |

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

#### _exec.map() : _Map_
##### Return

( _Map_ )


---

## merge

---

#### _exec.merge(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.merge(arg0: _Object_, arg1: _Object_, arg2: _BiFunction_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |
| arg2 | _BiFunction_ |   |

##### Return

( _Object_ )


---

## of

---

#### _exec.of(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

## push

---

#### _exec.push(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _exec.put(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _exec.put(arg0: string, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

## putAll

---

#### _exec.putAll(arg0: _Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _exec.putIfAbsent(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

## remove

---

#### _exec.remove(arg0: _int_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Object_ )


---

#### _exec.remove(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

#### _exec.remove(arg0: _Object_, arg1: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _boolean_ )


---

## removeAll

---

#### _exec.removeAll() : _void_
##### Return

( _void_ )


---

#### _exec.removeAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _exec.replace(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _exec.replace(arg0: _Object_, arg1: _Object_, arg2: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |
| arg2 | _Object_ |   |

##### Return

( _boolean_ )


---

## replaceAll

---

#### _exec.replaceAll(arg0: _BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Return

( _void_ )


---

#### _exec.replaceAll(arg0: _UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _exec.replaceAll(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _exec.retainAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _exec.safeString(arg0: _Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( string )


---

#### _exec.safeString(arg0: _Object_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | string |   |

##### Return

( string )


---

## saveJSON

---

#### _exec.saveJSON(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _exec.saveJSON(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _exec.saveProperties(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

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

#### _exec.search(arg0: _Map_, arg1: string, arg2: string, arg3: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | string |   |
| arg3 | _boolean_ |   |

##### Return

( string )


---

## service

---

#### _exec.service(path: string) : _[Values](../../objects/Values)_
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

( _[Values](../../objects/Values)_ )


---

#### _exec.service(path: string, preserveContext: _boolean_) : _[Values](../../objects/Values)_
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

( _[Values](../../objects/Values)_ )


---

## set

---

#### _exec.set(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _exec.set(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

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

#### _exec.sort(arg0: _Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Comparator_ |   |

##### Return

( _void_ )


---

#### _exec.sort(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _exec.spliterator() : _Spliterator_
##### Return

( _Spliterator_ )


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

#### _exec.subList(arg0: _int_, arg1: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _List_ )


---

## toArray

---

#### _exec.toArray() : _Object[]_
##### Return

( _Object[]_ )


---

#### _exec.toArray(arg0: _Object[]_) : _Object[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Return

( _Object[]_ )


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

#### _exec.toJSON(arg0: _List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

#### _exec.toJSON(arg0: _List_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

## toJSONObject

---

#### _exec.toJSONObject(arg0: _Object_, arg1: _boolean_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _boolean_ |   |

##### Return

( _Object_ )


---

## toJSONString

---

#### _exec.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

## toList

---

#### _exec.toList() : _List_
##### Return

( _List_ )


---

## toMap

---

#### _exec.toMap() : _Map_
##### Return

( _Map_ )


---

## toProperties

---

#### _exec.toProperties() : string
##### Return

( string )


---

## unset

---

#### _exec.unset(arg0: string) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Object_ )


---

## unsetAll

---

#### _exec.unsetAll() : _void_
##### Return

( _void_ )


---

## values

---

#### _exec.values() : _Collection_
##### Return

( _Collection_ )


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

#### _exec.valuesToString(arg0: string, arg1: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: string, arg1: _String[]_, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |
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

#### _exec.valuesToString(arg0: _Map_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_, arg3: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |
| arg3 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _exec.valuesToString(arg0: _Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

