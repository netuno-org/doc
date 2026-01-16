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

#### _exec.add(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.add(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## addAll

---

#### _exec.addAll(index: int, c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### _exec.addAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## afterClose

---

#### _exec.afterClose(function: java.util.function.Function) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Return

( _void_ )


---

## as

---

#### _exec.as(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.as(o: java.lang.Object, oDefault: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |
| **oDefault** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## asBoolean

---

#### _exec.asBoolean(index: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(index: int, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _exec.asBoolean(key: string, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

## asByte

---

#### _exec.asByte(index: int) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### _exec.asByte(index: int, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### _exec.asByte(key: string, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

## asCalendar

---

#### _exec.asCalendar(index: int) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.asCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.asCalendar(key: string) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.asCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## asDate

---

#### _exec.asDate(index: int) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Date_ )


---

#### _exec.asDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

#### _exec.asDate(key: string) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### _exec.asDate(key: string, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## asDouble

---

#### _exec.asDouble(index: int) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### _exec.asDouble(index: int, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### _exec.asDouble(key: string) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### _exec.asDouble(key: string, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

## asFile

---

#### _exec.asFile(index: int) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

#### _exec.asFile(key: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## asFloat

---

#### _exec.asFloat(index: int) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### _exec.asFloat(index: int, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### _exec.asFloat(key: string) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### _exec.asFloat(key: string, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

## asHTMLDecode

---

#### _exec.asHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asHTMLEncode

---

#### _exec.asHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asInstant

---

#### _exec.asInstant(index: int) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.asInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.asInstant(key: string) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.asInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## asInt

---

#### _exec.asInt(index: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### _exec.asInt(index: int, defaultValue: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### _exec.asInt(key: string, defaultValue: short) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _int_ )


---

## asList

---

#### _exec.asList(index: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(index: int, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## asLocalDate

---

#### _exec.asLocalDate(index: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(key: string) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### _exec.asLocalDateTime(index: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(key: string) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### _exec.asLocalTime(index: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(key: string) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## asLong

---

#### _exec.asLong(index: int) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### _exec.asLong(index: int, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### _exec.asLong(key: string) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### _exec.asLong(key: string, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

## asMap

---

#### _exec.asMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.asMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.asMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.asMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## asSQLDate

---

#### _exec.asSQLDate(index: int) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.asSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.asSQLDate(key: string) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.asSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## asSQLTime

---

#### _exec.asSQLTime(index: int) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.asSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.asSQLTime(key: string) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.asSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### _exec.asSQLTimestamp(index: int) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(key: string) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## asShort

---

#### _exec.asShort(index: int) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### _exec.asShort(index: int, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### _exec.asShort(key: string) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### _exec.asShort(key: string, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

## asString

---

#### _exec.asString(index: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### _exec.asString(index: int, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.asString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.asString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.asString(key: string, defaultValue: string, charsetName: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Return

( _string_ )


---

## asUID

---

#### _exec.asUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## asUUID

---

#### _exec.asUUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## asValues

---

#### _exec.asValues(index: int) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

#### _exec.asValues(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

#### _exec.asValues(key: string) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

#### _exec.asValues(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

## baseFile

---

#### _exec.baseFile(value: java.lang.Object, key: string, content: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |
| **key** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## beforeClose

---

#### _exec.beforeClose(function: java.util.function.Function) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Return

( _void_ )


---

## bind

---

#### _exec.bind(key: string, value: java.lang.Object) : [Exec](/docs/library/resources/exec)
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
| **key** | _string_ | Variable name that will be available in the other script that will be executed. |
| **value** | _java.lang.Object_ | Object to be passed to the other script that will be executed. |

##### Return

( _[Exec](/docs/library/resources/exec)_ )


---

## clear

---

#### _exec.clear() : void
##### Return

( _void_ )


---

## cloneJSON

---

#### _exec.cloneJSON() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## compute

---

#### _exec.compute(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## computeIfAbsent

---

#### _exec.computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function.Function) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.Function_ |   |

##### Return

( _java.lang.Object_ )


---

## computeIfPresent

---

#### _exec.computeIfPresent(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## contains

---

#### _exec.contains(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _exec.contains(key: string, value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsAll

---

#### _exec.containsAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _exec.containsKey(key: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _exec.containsValue(value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## core

---

#### _exec.core(path: string) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Description

Execution of scripts that are in the `server/core/` folder.

##### How To Use

```javascript
_exec.core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path with source in `core/` to execute. |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### _exec.core(path: string, path: boolean) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Description

Execution of scripts that are in the `server/core/` folder.

##### How To Use

```javascript
_exec.core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path with source in `core/` to execute. |
| **path** | _boolean_ | Script path with source in `core/` to execute. |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## debug

---

#### _exec.debug() : void
##### Return

( _void_ )


---

## ensureJail

---

#### _exec.ensureJail(jailPath: string) : void
##### Description

Set the security restriction on a specific directory for processed objects of the file type, it can only be set once.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **jailPath** | _string_ | Path where files will be restricted. |

##### Return

( _void_ )


---

## entrySet

---

#### _exec.entrySet() : java.util.Set
##### Return

( _java.util.Set_ )


---

## filter

---

#### _exec.filter(p: java.util.function.Predicate) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.filter(function: org.graalvm.polyglot.Value) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## find

---

#### _exec.find(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.find(p: java.util.function.Predicate) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.find(function: org.graalvm.polyglot.Value) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.find(filter: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### _exec.forEach(action: java.util.function.BiConsumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(action: java.util.function.Consumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### _exec.forEach(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### _exec.forceList() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## forceMap

---

#### _exec.forceMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## fromJSON

---

#### _exec.fromJSON(content: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.fromJSON(content: org.netuno.psamata.net.Remote$Response) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## functions

---

#### _exec.functions() : [Functions](/docs/library/objects/Functions)
##### Description

Manages the execution of functions.

##### Return

( _[Functions](/docs/library/objects/Functions)_ )


---

#### _exec.functions(functions: java.util.function.Function[]) : [Functions](/docs/library/objects/Functions)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **functions** | _java.util.function.Function[]_ |   |

##### Return

( _[Functions](/docs/library/objects/Functions)_ )


---

#### _exec.functions(data: java.lang.Object) : [Functions](/docs/library/objects/Functions)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.lang.Object_ |   |

##### Return

( _[Functions](/docs/library/objects/Functions)_ )


---

#### _exec.functions(data: java.lang.Object, functions: java.util.function.Function[]) : [Functions](/docs/library/objects/Functions)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.lang.Object_ |   |
| **functions** | _java.util.function.Function[]_ |   |

##### Return

( _[Functions](/docs/library/objects/Functions)_ )


---

## gc

---

#### _exec.gc() : void
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

#### _exec.get(key: int) : java.lang.Object
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _int_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### _exec.get(key: java.lang.Object) : java.lang.Object
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### _exec.get(key: string) : java.lang.Object
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### _exec.get(key: string, type: java.lang.Class) : java.lang.Object
##### Description

Gets the original object associated with the key, but cast for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Key to get the associated object. |
| **type** | _java.lang.Class_ | Class representing the type of object that should be cast. |

##### Return

( _java.lang.Object_ )

Original object converted to the type of the defined class.

---

## getBoolean

---

#### _exec.getBoolean(index: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(index: int, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _exec.getBoolean(key: string, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

## getByte

---

#### _exec.getByte(index: int) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### _exec.getByte(index: int, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### _exec.getByte(key: string) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _byte_ )


---

#### _exec.getByte(key: string, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

## getCalendar

---

#### _exec.getCalendar(index: int) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.getCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.getCalendar(key: string) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _exec.getCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## getDate

---

#### _exec.getDate(index: int) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Date_ )


---

#### _exec.getDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

#### _exec.getDate(key: string) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### _exec.getDate(key: string, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## getDouble

---

#### _exec.getDouble(index: int) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### _exec.getDouble(index: int, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### _exec.getDouble(key: string) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### _exec.getDouble(key: string, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

## getFile

---

#### _exec.getFile(index: int) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

#### _exec.getFile(key: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## getFloat

---

#### _exec.getFloat(index: int) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### _exec.getFloat(index: int, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### _exec.getFloat(key: string) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### _exec.getFloat(key: string, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

## getForceList

---

#### _exec.getForceList() : boolean
##### Return

( _boolean_ )


---

## getForceMap

---

#### _exec.getForceMap() : boolean
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### _exec.getHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getHTMLEncode

---

#### _exec.getHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getInstant

---

#### _exec.getInstant(index: int) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.getInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.getInstant(key: string) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### _exec.getInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## getInt

---

#### _exec.getInt(index: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### _exec.getInt(index: int, defaultValue: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### _exec.getInt(key: string) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _int_ )


---

#### _exec.getInt(key: string, defaultValue: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

## getKeys

---

#### _exec.getKeys() : java.util.Set
##### Return

( _java.util.Set_ )


---

## getList

---

#### _exec.getList(index: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(index: int, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## getLocalDate

---

#### _exec.getLocalDate(index: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(key: string) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### _exec.getLocalDateTime(index: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(key: string) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### _exec.getLocalTime(index: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(key: string) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## getLong

---

#### _exec.getLong(index: int) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### _exec.getLong(index: int, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### _exec.getLong(key: string) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### _exec.getLong(key: string, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

## getMap

---

#### _exec.getMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.getMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.getMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.getMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## getOrDefault

---

#### _exec.getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## getSQLDate

---

#### _exec.getSQLDate(index: int) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.getSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.getSQLDate(key: string) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### _exec.getSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## getSQLTime

---

#### _exec.getSQLTime(index: int) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.getSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.getSQLTime(key: string) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### _exec.getSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### _exec.getSQLTimestamp(index: int) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(key: string) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## getShort

---

#### _exec.getShort(index: int) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### _exec.getShort(index: int, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### _exec.getShort(key: string) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### _exec.getShort(key: string, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

## getSize

---

#### _exec.getSize() : int
##### Return

( _int_ )


---

## getString

---

#### _exec.getString(index: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### _exec.getString(index: int, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.getString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.getString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.getString(key: string, defaultValue: string, charsetName: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Return

( _string_ )


---

## getUID

---

#### _exec.getUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## getURLCharacterEncoding

---

#### _exec.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( _string_ )

Character encoding code.

---

## getUUID

---

#### _exec.getUUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## getValues

---

#### _exec.getValues() : java.util.Collection
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### _exec.getValues(index: int) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

#### _exec.getValues(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

#### _exec.getValues(key: string) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

#### _exec.getValues(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object converted to Values.

---

## has

---

#### _exec.has(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _exec.has(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _exec.has(key: string, value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## hasKey

---

#### _exec.hasKey(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _exec.hasValue(value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### _exec.indexOf(o: java.lang.Object) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _exec.is(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isEmpty

---

#### _exec.isEmpty() : boolean
##### Return

( _boolean_ )


---

## isJail

---

#### _exec.isJail() : boolean
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isList

---

#### _exec.isList() : boolean
##### Return

( _boolean_ )


---

#### _exec.isList(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _exec.isLockedAsReadOnly() : boolean
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### _exec.isMap() : boolean
##### Return

( _boolean_ )


---

#### _exec.isMap(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _exec.isMergeable(object: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## iterator

---

#### _exec.iterator() : java.util.Iterator
##### Return

( _java.util.Iterator_ )


---

## join

---

#### _exec.join(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

## keySet

---

#### _exec.keySet() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keys

---

#### _exec.keys() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### _exec.keysSorted() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### _exec.keysToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.keysToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

## lastIndexOf

---

#### _exec.lastIndexOf(o: java.lang.Object) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### _exec.length() : int
##### Return

( _int_ )


---

## list

---

#### _exec.list() : java.util.List
##### Return

( _java.util.List_ )


---

#### _exec.list(cls: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### _exec.listIterator() : java.util.ListIterator
##### Return

( _java.util.ListIterator_ )


---

#### _exec.listIterator(index: int) : java.util.ListIterator
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _exec.listOfValues() : java.util.List
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### _exec.loadJSON(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### _exec.loadJSON(in: java.io.Reader) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(in: java.io.Reader) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### _exec.loadProperties(properties: java.util.Properties) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _exec.loadPropertiesFromString(data: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _string_ |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### _exec.lockAsReadOnly() : [Values](/docs/library/objects/Values)
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](/docs/library/objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### _exec.map() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### _exec.merge(object: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## newList

---

#### _exec.newList() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## newMap

---

#### _exec.newMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## of

---

#### _exec.of(array: java.lang.Object[]) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.of(o: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.of(list: java.util.List) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.of(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## ofList

---

#### _exec.ofList(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## ofMap

---

#### _exec.ofMap(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## onError

---

#### _exec.onError(function: java.util.function.Function) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Return

( _void_ )


---

## push

---

#### _exec.push(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## put

---

#### _exec.put(key: java.lang.Object, value: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.put(key: string, value: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## putAll

---

#### _exec.putAll(m: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **m** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _exec.putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## remove

---

#### _exec.remove(i: int) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **i** | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.remove(o: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.remove(arg0: java.lang.Object, arg1: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## removeAll

---

#### _exec.removeAll() : void
##### Return

( _void_ )


---

#### _exec.removeAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _exec.replace(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _exec.replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## replaceAll

---

#### _exec.replaceAll(arg0: java.util.function.BiFunction) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### _exec.replaceAll(operator: java.util.function.UnaryOperator) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _exec.replaceAll(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _exec.retainAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _exec.safeString(object: java.lang.Object) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _string_ )


---

#### _exec.safeString(object: java.lang.Object, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

## saveJSON

---

#### _exec.saveJSON(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### _exec.saveJSON(out: java.io.Writer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### _exec.saveProperties(out: java.io.Writer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### _exec.search(content: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.search(content: string, ignoreCase: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### _exec.search(content: string, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.search(content: string, splitter: string, ignoreCase: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### _exec.search(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, content: string, splitter: string, ignoreCase: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

## service

---

#### _exec.service(path: string) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Description

Execution of scripts that are in the `server/services/` folder.

##### How To Use

```javascript
_exec.service("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path originating from 'services/' to be executed. |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### _exec.service(path: string, preserveContext: boolean) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Description

Execution of scripts that are in the `server/services/` folder.

##### How To Use

```javascript
_exec.service("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path originating from 'services/' to be executed. |
| **preserveContext** | _boolean_ | Whether to keep the same execution context or start a new one. |

##### Return

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## set

---

#### _exec.set(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.set(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setForceList

---

#### _exec.setForceList(forceList: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setForceMap

---

#### _exec.setForceMap(forceMap: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfFalse

---

#### _exec.setIfFalse(key: string, value: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfGreaterThanZero

---

#### _exec.setIfGreaterThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfLowerThanZero

---

#### _exec.setIfLowerThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfNotEmpty

---

#### _exec.setIfNotEmpty(key: string, value: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfNotZero

---

#### _exec.setIfNotZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: short) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfTrue

---

#### _exec.setIfTrue(key: string, value: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setNull

---

#### _exec.setNull(key: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _exec.setURLCharacterEncoding(characterEncoding: string) : void
##### Description

Defines the character encoding to be used in formatting for URL (_QueryString_).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **characterEncoding** | _string_ | Character encoding code. |

##### Return

( _void_ )


---

## size

---

#### _exec.size() : int
##### Return

( _int_ )


---

## sizeOfList

---

#### _exec.sizeOfList() : int
##### Return

( _int_ )


---

## sizeOfMap

---

#### _exec.sizeOfMap() : int
##### Return

( _int_ )


---

## sleep

---

#### _exec.sleep(interval: long) : void
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
| **interval** | _long_ | Time interval in milliseconds to pause execution. |

##### Return

( _void_ )


---

## sort

---

#### _exec.sort(c: java.util.Comparator) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### _exec.sort(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _exec.spliterator() : java.util.Spliterator
##### Return

( _java.util.Spliterator_ )


---

## stop

---

#### _exec.stop() : void
##### Description

It stops the execution of the current script, useful for interrupting the execution.

##### How To Use

```javascript
// For the execution:
_out.println('Will stop...<br/>');
_exec.stop();
_out.println('Not run this line.');
```

##### Return

( _void_ )


---

## subList

---

#### _exec.subList(fromIndex: int, toIndex: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fromIndex** | _int_ |   |
| **toIndex** | _int_ |   |

##### Return

( _java.util.List_ )


---

## toArray

---

#### _exec.toArray() : java.lang.Object[]
##### Return

( _java.lang.Object[]_ )


---

#### _exec.toArray(a: java.lang.Object[]) : java.lang.Object[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Return

( _java.lang.Object[]_ )


---

## toByteArray

---

#### _exec.toByteArray() : byte[]
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### _exec.toDoubleArray() : double[]
##### Return

( _double[]_ )


---

## toFloatArray

---

#### _exec.toFloatArray() : float[]
##### Return

( _float[]_ )


---

## toFormMap

---

#### _exec.toFormMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.toFormMap(key: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.toFormMap(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## toIntArray

---

#### _exec.toIntArray() : int[]
##### Return

( _int[]_ )


---

## toJSON

---

#### _exec.toJSON() : string
##### Return

( _string_ )


---

#### _exec.toJSON(htmlEscape: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### _exec.toJSON(htmlEscape: boolean, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _exec.toJSON(indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _exec.toJSON(values: java.util.List) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Return

( _string_ )


---

#### _exec.toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### _exec.toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _exec.toJSON(values: java.util.List, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

## toJSONObject

---

#### _exec.toJSONObject(object: java.lang.Object, htmlEscape: boolean) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |

##### Return

( _java.lang.Object_ )


---

## toJSONString

---

#### _exec.toJSONString(object: java.lang.Object, htmlEscape: boolean, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

## toList

---

#### _exec.toList() : java.util.List
##### Return

( _java.util.List_ )


---

#### _exec.toList(cls: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### _exec.toLongArray() : long[]
##### Return

( _long[]_ )


---

## toMap

---

#### _exec.toMap() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### _exec.toProperties() : string
##### Return

( _string_ )


---

## toShortArray

---

#### _exec.toShortArray() : short[]
##### Return

( _short[]_ )


---

## toStringArray

---

#### _exec.toStringArray() : java.lang.String[]
##### Return

( _java.lang.String[]_ )


---

## typedForEach

---

#### _exec.typedForEach(action: java.util.function.BiConsumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _exec.typedForEach(action: java.util.function.Consumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

## unset

---

#### _exec.unset(key: string) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### _exec.unsetAll() : void
##### Return

( _void_ )


---

## values

---

#### _exec.values() : java.util.Collection
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
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.valuesToString(splitter: string, excludes: java.lang.String[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### _exec.valuesToString(splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _exec.valuesToString(splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

