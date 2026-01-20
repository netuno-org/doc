---
id: config
title: Config
sidebar_label: Config
---

With the Config feature you can share information during processing and you can access your parameters at any time during the life cycle's order.

For example, when a request to process a service arrives at Netuno a series of application scripts are run and in any of these scripts it is possible to share information centrally with Config.

```javascript
// Add a configuration
_config.set('admin-mail', 'admin@netuno.org');

// Take the configuration value
const adminMail = _config.getString('admin-mail');
```

---

## add

---

#### _config.add(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.add(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## addAll

---

#### _config.addAll(index: int, c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### _config.addAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _config.as(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.as(o: java.lang.Object, oDefault: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.asBoolean(index: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(index: int, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(key: string, defaultValue: boolean) : boolean
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

#### _config.asByte(index: int) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### _config.asByte(index: int, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### _config.asByte(key: string, defaultValue: byte) : byte
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

#### _config.asCalendar(index: int) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.asCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.asCalendar(key: string) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.asCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _config.asDate(index: int) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Date_ )


---

#### _config.asDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

#### _config.asDate(key: string) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### _config.asDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _config.asDouble(index: int) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### _config.asDouble(index: int, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### _config.asDouble(key: string) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### _config.asDouble(key: string, defaultValue: double) : double
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

#### _config.asFile(index: int) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

#### _config.asFile(key: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## asFloat

---

#### _config.asFloat(index: int) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### _config.asFloat(index: int, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### _config.asFloat(key: string) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### _config.asFloat(key: string, defaultValue: float) : float
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

#### _config.asHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asHTMLEncode

---

#### _config.asHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asInstant

---

#### _config.asInstant(index: int) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.Instant_ )


---

#### _config.asInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

#### _config.asInstant(key: string) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### _config.asInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _config.asInt(index: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### _config.asInt(index: int, defaultValue: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### _config.asInt(key: string, defaultValue: short) : int
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

#### _config.asList(index: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(index: int, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _config.asLocalDate(index: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(key: string) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _config.asLocalDateTime(index: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(key: string) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _config.asLocalTime(index: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(key: string) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _config.asLong(index: int) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### _config.asLong(index: int, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### _config.asLong(key: string) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### _config.asLong(key: string, defaultValue: long) : long
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

#### _config.asMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.asMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.asMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.asMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _config.asSQLDate(index: int) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Date_ )


---

#### _config.asSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

#### _config.asSQLDate(key: string) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### _config.asSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _config.asSQLTime(index: int) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Time_ )


---

#### _config.asSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

#### _config.asSQLTime(key: string) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### _config.asSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _config.asSQLTimestamp(index: int) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(key: string) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _config.asShort(index: int) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### _config.asShort(index: int, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### _config.asShort(key: string) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### _config.asShort(key: string, defaultValue: short) : short
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

#### _config.asString(index: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### _config.asString(index: int, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _config.asString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### _config.asString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _config.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _config.asUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.asUUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.asValues(index: int) : [Values](/docs/library/objects/Values)
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

#### _config.asValues(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.asValues(key: string) : [Values](/docs/library/objects/Values)
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

#### _config.asValues(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.baseFile(value: java.lang.Object, key: string, content: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |
| **key** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## clear

---

#### _config.clear() : void
##### Return

( _void_ )


---

## cloneJSON

---

#### _config.cloneJSON() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## compute

---

#### _config.compute(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _config.computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function.Function) : java.lang.Object
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

#### _config.computeIfPresent(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _config.contains(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _config.contains(key: string, value: java.lang.Object) : boolean
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

#### _config.containsAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _config.containsKey(key: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _config.containsValue(value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## ensureJail

---

#### _config.ensureJail(jailPath: string) : void
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

#### _config.entrySet() : java.util.Set
##### Return

( _java.util.Set_ )


---

## filter

---

#### _config.filter(p: java.util.function.Predicate) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.filter(function: org.graalvm.polyglot.Value) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## find

---

#### _config.find(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.find(p: java.util.function.Predicate) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.find(function: org.graalvm.polyglot.Value) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.find(filter: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### _config.forEach(action: java.util.function.BiConsumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _config.forEach(action: java.util.function.Consumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### _config.forEach(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### _config.forceList() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## forceMap

---

#### _config.forceMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## fromJSON

---

#### _config.fromJSON(content: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.fromJSON(content: org.netuno.psamata.net.Remote$Response) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## get

---

#### _config.get(key: int) : java.lang.Object
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

#### _config.get(key: java.lang.Object) : java.lang.Object
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

#### _config.get(key: string) : java.lang.Object
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

#### _config.get(key: string, type: java.lang.Class) : java.lang.Object
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

#### _config.getBoolean(index: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(index: int, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(key: string, defaultValue: boolean) : boolean
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

#### _config.getByte(index: int) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### _config.getByte(index: int, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### _config.getByte(key: string) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _byte_ )


---

#### _config.getByte(key: string, defaultValue: byte) : byte
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

#### _config.getCalendar(index: int) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.getCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.getCalendar(key: string) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.getCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _config.getDate(index: int) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Date_ )


---

#### _config.getDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

#### _config.getDate(key: string) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### _config.getDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _config.getDouble(index: int) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### _config.getDouble(index: int, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### _config.getDouble(key: string) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### _config.getDouble(key: string, defaultValue: double) : double
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

#### _config.getFile(index: int) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

#### _config.getFile(key: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## getFloat

---

#### _config.getFloat(index: int) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### _config.getFloat(index: int, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### _config.getFloat(key: string) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### _config.getFloat(key: string, defaultValue: float) : float
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

#### _config.getForceList() : boolean
##### Return

( _boolean_ )


---

## getForceMap

---

#### _config.getForceMap() : boolean
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### _config.getHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getHTMLEncode

---

#### _config.getHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getInstant

---

#### _config.getInstant(index: int) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.Instant_ )


---

#### _config.getInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

#### _config.getInstant(key: string) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### _config.getInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _config.getInt(index: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### _config.getInt(index: int, defaultValue: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### _config.getInt(key: string) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _int_ )


---

#### _config.getInt(key: string, defaultValue: int) : int
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

#### _config.getKeys() : java.util.Set
##### Return

( _java.util.Set_ )


---

## getList

---

#### _config.getList(index: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(index: int, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _config.getLocalDate(index: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(key: string) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _config.getLocalDateTime(index: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(key: string) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _config.getLocalTime(index: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(key: string) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _config.getLong(index: int) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### _config.getLong(index: int, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### _config.getLong(key: string) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### _config.getLong(key: string, defaultValue: long) : long
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

#### _config.getMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.getMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.getMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.getMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _config.getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### _config.getSQLDate(index: int) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Date_ )


---

#### _config.getSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

#### _config.getSQLDate(key: string) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### _config.getSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _config.getSQLTime(index: int) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Time_ )


---

#### _config.getSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

#### _config.getSQLTime(key: string) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### _config.getSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _config.getSQLTimestamp(index: int) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(key: string) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _config.getShort(index: int) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### _config.getShort(index: int, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### _config.getShort(key: string) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### _config.getShort(key: string, defaultValue: short) : short
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

#### _config.getSize() : int
##### Return

( _int_ )


---

## getString

---

#### _config.getString(index: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### _config.getString(index: int, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _config.getString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### _config.getString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _config.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _config.getUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( _string_ )

Character encoding code.

---

## getUUID

---

#### _config.getUUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.getValues() : java.util.Collection
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### _config.getValues(index: int) : [Values](/docs/library/objects/Values)
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

#### _config.getValues(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.getValues(key: string) : [Values](/docs/library/objects/Values)
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

#### _config.getValues(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.has(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _config.has(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _config.has(key: string, value: java.lang.Object) : boolean
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

#### _config.hasKey(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _config.hasValue(value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### _config.indexOf(o: java.lang.Object) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _config.is(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isEmpty

---

#### _config.isEmpty() : boolean
##### Return

( _boolean_ )


---

## isJail

---

#### _config.isJail() : boolean
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isList

---

#### _config.isList() : boolean
##### Return

( _boolean_ )


---

#### _config.isList(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _config.isLockedAsReadOnly() : boolean
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### _config.isMap() : boolean
##### Return

( _boolean_ )


---

#### _config.isMap(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _config.isMergeable(object: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## iterator

---

#### _config.iterator() : java.util.Iterator
##### Return

( _java.util.Iterator_ )


---

## join

---

#### _config.join(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

## keySet

---

#### _config.keySet() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keys

---

#### _config.keys() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### _config.keysSorted() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### _config.keysToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _config.keysToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
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

#### _config.lastIndexOf(o: java.lang.Object) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### _config.length() : int
##### Return

( _int_ )


---

## list

---

#### _config.list() : java.util.List
##### Return

( _java.util.List_ )


---

#### _config.list(cls: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### _config.listIterator() : java.util.ListIterator
##### Return

( _java.util.ListIterator_ )


---

#### _config.listIterator(index: int) : java.util.ListIterator
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _config.listOfValues() : java.util.List
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### _config.loadJSON(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### _config.loadJSON(in: java.io.Reader) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### _config.loadProperties(in: java.io.Reader) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### _config.loadProperties(properties: java.util.Properties) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _config.loadPropertiesFromString(data: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _string_ |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### _config.lockAsReadOnly() : [Values](/docs/library/objects/Values)
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](/docs/library/objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### _config.map() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### _config.merge(object: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction) : java.lang.Object
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

#### _config.newList() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## newMap

---

#### _config.newMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## of

---

#### _config.of(array: java.lang.Object[]) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.of(o: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.of(list: java.util.List) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.of(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## ofList

---

#### _config.ofList(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## ofMap

---

#### _config.ofMap(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## push

---

#### _config.push(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## put

---

#### _config.put(key: java.lang.Object, value: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.put(key: string, value: java.lang.Object) : java.lang.Object
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

#### _config.putAll(m: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **m** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _config.putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### _config.remove(i: int) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **i** | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.remove(o: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.remove(arg0: java.lang.Object, arg1: java.lang.Object) : boolean
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

#### _config.removeAll() : void
##### Return

( _void_ )


---

#### _config.removeAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _config.replace(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object) : boolean
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

#### _config.replaceAll(arg0: java.util.function.BiFunction) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### _config.replaceAll(operator: java.util.function.UnaryOperator) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _config.replaceAll(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _config.retainAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _config.safeString(object: java.lang.Object) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _string_ )


---

#### _config.safeString(object: java.lang.Object, defaultValue: string) : string
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

#### _config.saveJSON(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### _config.saveJSON(out: java.io.Writer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### _config.saveProperties(out: java.io.Writer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### _config.search(content: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _string_ )


---

#### _config.search(content: string, ignoreCase: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### _config.search(content: string, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _config.search(content: string, splitter: string, ignoreCase: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### _config.search(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, content: string, splitter: string, ignoreCase: boolean) : string
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

## set

---

#### _config.set(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.set(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.setForceList(forceList: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setForceMap

---

#### _config.setForceMap(forceMap: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfFalse

---

#### _config.setIfFalse(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _config.setIfGreaterThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _config.setIfLowerThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _config.setIfNotEmpty(key: string, value: string) : [Values](/docs/library/objects/Values)
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

#### _config.setIfNotZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _config.setIfTrue(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _config.setNull(key: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _config.setURLCharacterEncoding(characterEncoding: string) : void
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

#### _config.size() : int
##### Return

( _int_ )


---

## sizeOfList

---

#### _config.sizeOfList() : int
##### Return

( _int_ )


---

## sizeOfMap

---

#### _config.sizeOfMap() : int
##### Return

( _int_ )


---

## sort

---

#### _config.sort(c: java.util.Comparator) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### _config.sort(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _config.spliterator() : java.util.Spliterator
##### Return

( _java.util.Spliterator_ )


---

## subList

---

#### _config.subList(fromIndex: int, toIndex: int) : java.util.List
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

#### _config.toArray() : java.lang.Object[]
##### Return

( _java.lang.Object[]_ )


---

#### _config.toArray(a: java.lang.Object[]) : java.lang.Object[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Return

( _java.lang.Object[]_ )


---

## toByteArray

---

#### _config.toByteArray() : byte[]
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### _config.toDoubleArray() : double[]
##### Return

( _double[]_ )


---

## toFloatArray

---

#### _config.toFloatArray() : float[]
##### Return

( _float[]_ )


---

## toFormMap

---

#### _config.toFormMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.toFormMap(key: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.toFormMap(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## toIntArray

---

#### _config.toIntArray() : int[]
##### Return

( _int[]_ )


---

## toJSON

---

#### _config.toJSON() : string
##### Return

( _string_ )


---

#### _config.toJSON(htmlEscape: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### _config.toJSON(htmlEscape: boolean, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _config.toJSON(indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _config.toJSON(values: java.util.List) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Return

( _string_ )


---

#### _config.toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### _config.toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _config.toJSON(values: java.util.List, indentFactor: int) : string
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

#### _config.toJSONObject(object: java.lang.Object, htmlEscape: boolean) : java.lang.Object
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

#### _config.toJSONString(object: java.lang.Object, htmlEscape: boolean, indentFactor: int) : string
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

#### _config.toList() : java.util.List
##### Return

( _java.util.List_ )


---

#### _config.toList(cls: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### _config.toLongArray() : long[]
##### Return

( _long[]_ )


---

## toMap

---

#### _config.toMap() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### _config.toProperties() : string
##### Return

( _string_ )


---

## toShortArray

---

#### _config.toShortArray() : short[]
##### Return

( _short[]_ )


---

## toStringArray

---

#### _config.toStringArray() : java.lang.String[]
##### Return

( _java.lang.String[]_ )


---

## typedForEach

---

#### _config.typedForEach(action: java.util.function.BiConsumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _config.typedForEach(action: java.util.function.Consumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

## unset

---

#### _config.unset(key: string) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### _config.unsetAll() : void
##### Return

( _void_ )


---

## values

---

#### _config.values() : java.util.Collection
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

## valuesToString

---

#### _config.valuesToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _config.valuesToString(splitter: string, excludes: java.lang.String[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### _config.valuesToString(splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _config.valuesToString(splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
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

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

