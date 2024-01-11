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

#### _config.add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _config.addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### _config.addAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _config.as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _config.asBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _config.asByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### _config.asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### _config.asByte(key: string, defaultValue: _byte_) : _byte_
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

#### _config.asCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _config.asDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### _config.asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _config.asDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### _config.asDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### _config.asDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### _config.asDouble(key: string, defaultValue: _double_) : _double_
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

#### _config.asFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _config.asFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### _config.asFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### _config.asFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### _config.asFloat(key: string, defaultValue: _float_) : _float_
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

#### _config.asHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asHTMLEncode

---

#### _config.asHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asInstant

---

#### _config.asInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### _config.asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _config.asInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### _config.asInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### _config.asInt(key: string, defaultValue: _short_) : _int_
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

#### _config.asList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _config.asLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _config.asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _config.asLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _config.asLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### _config.asLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### _config.asLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### _config.asLong(key: string, defaultValue: _long_) : _long_
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

#### _config.asMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _config.asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _config.asMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### _config.asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _config.asSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### _config.asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _config.asSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### _config.asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _config.asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _config.asShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### _config.asShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### _config.asShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### _config.asShort(key: string, defaultValue: _short_) : _short_
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

#### _config.asString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### _config.asString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _config.asString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### _config.asString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _config.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _config.asUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _config.asUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _config.asValues(index: _int_) : _[Values](../../objects/Values)_
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

#### _config.asValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _config.asValues(key: string) : _[Values](../../objects/Values)_
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

#### _config.asValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

## clear

---

#### _config.clear() : _void_
##### Return

( _void_ )


---

## cloneJSON

---

#### _config.cloneJSON() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## compute

---

#### _config.compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _config.computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
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

#### _config.computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _config.contains(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _config.contains(key: string, value: _java.lang.Object_) : _boolean_
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

#### _config.containsAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _config.containsKey(key: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _config.containsValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## ensureJail

---

#### _config.ensureJail(jailPath: string) : _void_
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

#### _config.entrySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## filter

---

#### _config.filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _config.find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _config.forEach(action: _java.util.function.BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _config.forEach(action: _java.util.function.Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### _config.forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### _config.forceList() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _config.forceMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _config.fromJSON(content: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## get

---

#### _config.get(key: _int_) : _java.lang.Object_
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

#### _config.get(key: _java.lang.Object_) : _java.lang.Object_
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

#### _config.get(key: string) : _java.lang.Object_
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

#### _config.get(key: string, type: _java.lang.Class_) : _java.lang.Object_
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

#### _config.getBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _config.getByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### _config.getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### _config.getByte(key: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _byte_ )


---

#### _config.getByte(key: string, defaultValue: _byte_) : _byte_
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

#### _config.getCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _config.getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _config.getDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### _config.getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _config.getDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### _config.getDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### _config.getDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### _config.getDouble(key: string, defaultValue: _double_) : _double_
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

#### _config.getFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _config.getFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### _config.getFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### _config.getFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### _config.getFloat(key: string, defaultValue: _float_) : _float_
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

#### _config.getForceList() : _boolean_
##### Return

( _boolean_ )


---

## getForceMap

---

#### _config.getForceMap() : _boolean_
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### _config.getHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getHTMLEncode

---

#### _config.getHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getInstant

---

#### _config.getInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### _config.getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _config.getInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### _config.getInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### _config.getInt(key: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _int_ )


---

#### _config.getInt(key: string, defaultValue: _int_) : _int_
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

#### _config.getKeys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## getList

---

#### _config.getList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _config.getLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _config.getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _config.getLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _config.getLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### _config.getLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### _config.getLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### _config.getLong(key: string, defaultValue: _long_) : _long_
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

#### _config.getMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _config.getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _config.getMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### _config.getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _config.getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### _config.getSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### _config.getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _config.getSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### _config.getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _config.getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _config.getShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### _config.getShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### _config.getShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### _config.getShort(key: string, defaultValue: _short_) : _short_
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

#### _config.getSize() : _int_
##### Return

( _int_ )


---

## getString

---

#### _config.getString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### _config.getString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _config.getString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### _config.getString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _config.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _config.getUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _config.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( string )

Character encoding code.

---

## getUUID

---

#### _config.getUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _config.getValues() : _java.util.Collection_
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### _config.getValues(index: _int_) : _[Values](../../objects/Values)_
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

#### _config.getValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _config.getValues(key: string) : _[Values](../../objects/Values)_
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

#### _config.getValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _config.has(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _config.has(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _config.has(key: string, value: _java.lang.Object_) : _boolean_
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

#### _config.hasKey(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _config.hasValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### _config.indexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _config.is(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isEmpty

---

#### _config.isEmpty() : _boolean_
##### Return

( _boolean_ )


---

## isJail

---

#### _config.isJail() : _boolean_
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isList

---

#### _config.isList() : _boolean_
##### Return

( _boolean_ )


---

#### _config.isList(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _config.isLockedAsReadOnly() : _boolean_
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### _config.isMap() : _boolean_
##### Return

( _boolean_ )


---

#### _config.isMap(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _config.isMergeable(object: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## iterator

---

#### _config.iterator() : _java.util.Iterator_
##### Return

( _java.util.Iterator_ )


---

## join

---

#### _config.join(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

## keySet

---

#### _config.keySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keys

---

#### _config.keys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### _config.keysSorted() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### _config.keysToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

#### _config.keysToString(map: _java.util.Map_, splitter: string) : string
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

#### _config.lastIndexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### _config.length() : _int_
##### Return

( _int_ )


---

## list

---

#### _config.list() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _config.list(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### _config.listIterator() : _java.util.ListIterator_
##### Return

( _java.util.ListIterator_ )


---

#### _config.listIterator(index: _int_) : _java.util.ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _config.listOfValues() : _java.util.List_
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### _config.loadJSON(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _config.loadJSON(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _config.loadProperties(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### _config.loadProperties(properties: _java.util.Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _config.loadPropertiesFromString(data: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### _config.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](../../objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### _config.map() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## merge

---

#### _config.merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _config.of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.of(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| list | _java.util.List_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _config.ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _config.ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## push

---

#### _config.push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _config.put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.put(key: string, value: _java.lang.Object_) : _java.lang.Object_
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

#### _config.putAll(m: _java.util.Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| m | _java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _config.putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### _config.remove(i: _int_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| i | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.remove(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
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

#### _config.removeAll() : _void_
##### Return

( _void_ )


---

#### _config.removeAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _config.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _config.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
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

#### _config.replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### _config.replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _config.replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _config.retainAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _config.safeString(object: _java.lang.Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( string )


---

#### _config.safeString(object: _java.lang.Object_, defaultValue: string) : string
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

#### _config.saveJSON(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _config.saveJSON(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _config.saveProperties(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### _config.search(content: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( string )


---

#### _config.search(content: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### _config.search(content: string, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Return

( string )


---

#### _config.search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### _config.search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
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

## set

---

#### _config.set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _config.setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceList | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _config.setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceMap | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _config.setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _config.setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
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

#### _config.setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _config.setNull(key: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _config.setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### _config.size() : _int_
##### Return

( _int_ )


---

## sizeOfList

---

#### _config.sizeOfList() : _int_
##### Return

( _int_ )


---

## sizeOfMap

---

#### _config.sizeOfMap() : _int_
##### Return

( _int_ )


---

## sort

---

#### _config.sort(c: _java.util.Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### _config.sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _config.spliterator() : _java.util.Spliterator_
##### Return

( _java.util.Spliterator_ )


---

## subList

---

#### _config.subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
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

#### _config.toArray() : _[Ljava.lang.Object;[]_
##### Return

( _[Ljava.lang.Object;[]_ )


---

#### _config.toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### _config.toByteArray() : _byte[]_
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### _config.toDoubleArray() : _double[]_
##### Return

( _double[]_ )


---

## toFloatArray

---

#### _config.toFloatArray() : _float[]_
##### Return

( _float[]_ )


---

## toFormMap

---

#### _config.toFormMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _config.toIntArray() : _[I_
##### Return

( _[I_ )


---

## toJSON

---

#### _config.toJSON() : string
##### Return

( string )


---

#### _config.toJSON(htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### _config.toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _config.toJSON(indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _config.toJSON(values: _java.util.List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |

##### Return

( string )


---

#### _config.toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### _config.toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _config.toJSON(values: _java.util.List_, indentFactor: _int_) : string
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

#### _config.toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
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

#### _config.toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
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

#### _config.toList() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _config.toList(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### _config.toLongArray() : _long[]_
##### Return

( _long[]_ )


---

## toMap

---

#### _config.toMap() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## toProperties

---

#### _config.toProperties() : string
##### Return

( string )


---

## toShortArray

---

#### _config.toShortArray() : _short[]_
##### Return

( _short[]_ )


---

## toStringArray

---

#### _config.toStringArray() : _[Ljava.lang.String;[]_
##### Return

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### _config.unset(key: string) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### _config.unsetAll() : _void_
##### Return

( _void_ )


---

## values

---

#### _config.values() : _java.util.Collection_
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
| splitter | string |   |

##### Return

( string )


---

#### _config.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### _config.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _config.valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _config.valuesToString(map: _java.util.Map_, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Return

( string )


---

#### _config.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### _config.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
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

#### _config.valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

