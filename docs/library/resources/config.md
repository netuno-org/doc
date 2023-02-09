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

#### _config.add(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.add(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _config.addAll(arg0: _int_, arg1: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Collection_ |   |

##### Return

( _boolean_ )


---

#### _config.addAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _config.as(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.as(arg0: _Object_, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _config.asBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _config.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _config.asByte(arg0: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte_ )


---

#### _config.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _config.asByte(arg0: string, arg1: _byte_) : _byte_
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

#### _config.asCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _config.asCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _config.asDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _config.asDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.asDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _config.asDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _config.asDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _config.asDouble(arg0: string, arg1: _double_) : _double_
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

#### _config.asFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _config.asFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _config.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _config.asFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _config.asFloat(arg0: string, arg1: _float_) : _float_
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

#### _config.asHTMLDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asHTMLEncode

---

#### _config.asHTMLEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asInstant

---

#### _config.asInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _config.asInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _config.asInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _config.asInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _config.asInt(arg0: string, arg1: _short_) : _int_
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

#### _config.asList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _config.asList(arg0: _int_, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _config.asList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _config.asList(arg0: _int_, arg1: _Object_, arg2: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Return

( _List_ )


---

#### _config.asList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _config.asList(arg0: string, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _config.asList(arg0: string, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _config.asList(arg0: string, arg1: _Object_, arg2: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Return

( _List_ )


---

## asLocalDate

---

#### _config.asLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _config.asLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _config.asLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _config.asLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _config.asLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _config.asLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _config.asLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _config.asLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _config.asLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _config.asLong(arg0: string, arg1: _long_) : _long_
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

#### _config.asMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _config.asMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _config.asMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _config.asMap(arg0: string, arg1: _Object_) : _Map_
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

#### _config.asSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _config.asSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.asSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _config.asSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _config.asSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _config.asSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _config.asShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _config.asShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _config.asShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _config.asShort(arg0: string, arg1: _short_) : _short_
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

#### _config.asString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _config.asString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _config.asString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _config.asString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _config.asString(arg0: string, arg1: string, arg2: string) : string
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

#### _config.asUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _config.asUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _config.asUID(arg0: string, arg1: _UUID_) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Return

( _UUID_ )


---

## asUUID

---

#### _config.asUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _config.asUUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _config.asUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _config.asValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.asValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.asValues(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.asValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


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

#### _config.compute(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _config.computeIfAbsent(arg0: _Object_, arg1: _Function_) : _Object_
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

#### _config.computeIfPresent(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _config.contains(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

#### _config.contains(arg0: string, arg1: _Object_) : _boolean_
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

#### _config.containsAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _config.containsKey(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _config.containsValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _config.entrySet() : _Set_
##### Return

( _Set_ )


---

## filter

---

#### _config.filter(arg0: _Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.filter(arg0: _Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _config.find(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.find(arg0: _Predicate_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _Object_ )


---

#### _config.find(arg0: _Value_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _Object_ )


---

#### _config.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _config.forEach(arg0: _BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Return

( _void_ )


---

#### _config.forEach(arg0: _Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Return

( _void_ )


---

#### _config.forEach(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

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

#### _config.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.fromJSON(arg0: _Response_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Response_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## get

---

#### _config.get(key: _int_) : _Object_
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

#### _config.get(key: _Object_) : _Object_
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

#### _config.get(key: string) : _Object_
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

#### _config.get(key: string, type: _Class_) : _Object_
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

#### _config.getBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _config.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _config.getByte(arg0: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte_ )


---

#### _config.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _config.getByte(arg0: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte_ )


---

#### _config.getByte(arg0: string, arg1: _byte_) : _byte_
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

#### _config.getCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _config.getCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _config.getDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _config.getDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.getDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _config.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _config.getDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _config.getDouble(arg0: string, arg1: _double_) : _double_
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

#### _config.getFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _config.getFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _config.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _config.getFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _config.getFloat(arg0: string, arg1: _float_) : _float_
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

#### _config.getHTMLDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getHTMLEncode

---

#### _config.getHTMLEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getInstant

---

#### _config.getInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _config.getInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _config.getInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _config.getInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _config.getInt(arg0: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _int_ )


---

#### _config.getInt(arg0: string, arg1: _int_) : _int_
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

#### _config.getKeys() : _Set_
##### Return

( _Set_ )


---

## getList

---

#### _config.getList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _config.getList(arg0: _int_, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _config.getList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _config.getList(arg0: _int_, arg1: _Object_, arg2: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Return

( _List_ )


---

#### _config.getList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _config.getList(arg0: string, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _config.getList(arg0: string, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _config.getList(arg0: string, arg1: _Object_, arg2: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Return

( _List_ )


---

## getLocalDate

---

#### _config.getLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _config.getLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _config.getLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _config.getLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _config.getLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _config.getLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _config.getLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _config.getLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _config.getLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _config.getLong(arg0: string, arg1: _long_) : _long_
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

#### _config.getMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _config.getMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _config.getMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _config.getMap(arg0: string, arg1: _Object_) : _Map_
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

#### _config.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _config.getSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _config.getSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.getSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _config.getSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _config.getSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _config.getSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _config.getShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _config.getShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _config.getShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _config.getShort(arg0: string, arg1: _short_) : _short_
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

#### _config.getSize() : _int_
##### Return

( _int_ )


---

## getString

---

#### _config.getString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _config.getString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _config.getString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _config.getString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _config.getString(arg0: string, arg1: string, arg2: string) : string
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

#### _config.getUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _config.getUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _config.getUID(arg0: string, arg1: _UUID_) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Return

( _UUID_ )


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

#### _config.getUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _config.getUUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _config.getUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _config.getValues() : _Collection_
##### Return

( _Collection_ )


---

#### _config.getValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.getValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.getValues(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.getValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _config.has(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

#### _config.has(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _config.has(arg0: string, arg1: _Object_) : _boolean_
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

#### _config.hasKey(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _config.hasValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### _config.indexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _config.is(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _config.isList(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _config.isMap(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _config.isMergeable(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## iterator

---

#### _config.iterator() : _Iterator_
##### Return

( _Iterator_ )


---

## join

---

#### _config.join(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## keySet

---

#### _config.keySet() : _Set_
##### Return

( _Set_ )


---

## keys

---

#### _config.keys() : _Set_
##### Return

( _Set_ )


---

## keysSorted

---

#### _config.keysSorted() : _Set_
##### Return

( _Set_ )


---

## keysToString

---

#### _config.keysToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _config.keysToString(arg0: _Map_, arg1: string) : string
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

#### _config.lastIndexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _config.list() : _List_
##### Return

( _List_ )


---

#### _config.list(arg0: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Class_ |   |

##### Return

( _List_ )


---

## listIterator

---

#### _config.listIterator() : _ListIterator_
##### Return

( _ListIterator_ )


---

#### _config.listIterator(arg0: _int_) : _ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _ListIterator_ )


---

## listOfValues

---

#### _config.listOfValues() : _List_
##### Return

( _List_ )


---

## loadJSON

---

#### _config.loadJSON(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _config.loadJSON(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _config.loadProperties(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

#### _config.loadProperties(arg0: _Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _config.loadPropertiesFromString(arg0: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

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

#### _config.map() : _Map_
##### Return

( _Map_ )


---

## merge

---

#### _config.merge(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.merge(arg0: _Object_, arg1: _Object_, arg2: _BiFunction_) : _Object_
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

#### _config.of(arg0: _Object[]_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.of(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

#### _config.of(arg0: _List_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.of(arg0: _Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _config.ofList(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _config.ofMap(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## push

---

#### _config.push(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _config.put(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _config.put(arg0: string, arg1: _Object_) : _Object_
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

#### _config.putAll(arg0: _Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _config.putIfAbsent(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _config.remove(arg0: _int_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Object_ )


---

#### _config.remove(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

#### _config.remove(arg0: _Object_, arg1: _Object_) : _boolean_
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

#### _config.removeAll() : _void_
##### Return

( _void_ )


---

#### _config.removeAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _config.replace(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _config.replace(arg0: _Object_, arg1: _Object_, arg2: _Object_) : _boolean_
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

#### _config.replaceAll(arg0: _BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Return

( _void_ )


---

#### _config.replaceAll(arg0: _UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _config.replaceAll(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _config.retainAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _config.safeString(arg0: _Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( string )


---

#### _config.safeString(arg0: _Object_, arg1: string) : string
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

#### _config.saveJSON(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _config.saveJSON(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _config.saveProperties(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### _config.search(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _config.search(arg0: string, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _config.search(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _config.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Return

( string )


---

#### _config.search(arg0: _Map_, arg1: string, arg2: string, arg3: _boolean_) : string
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

## set

---

#### _config.set(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.set(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _config.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _config.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _config.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _config.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
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

#### _config.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _config.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

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

#### _config.sort(arg0: _Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Comparator_ |   |

##### Return

( _void_ )


---

#### _config.sort(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _config.spliterator() : _Spliterator_
##### Return

( _Spliterator_ )


---

## subList

---

#### _config.subList(arg0: _int_, arg1: _int_) : _List_
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

#### _config.toArray() : _Object[]_
##### Return

( _Object[]_ )


---

#### _config.toArray(arg0: _Object[]_) : _Object[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Return

( _Object[]_ )


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

#### _config.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _config.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _config.toIntArray() : _int[]_
##### Return

( _int[]_ )


---

## toJSON

---

#### _config.toJSON() : string
##### Return

( string )


---

#### _config.toJSON(arg0: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( string )


---

#### _config.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

#### _config.toJSON(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _config.toJSON(arg0: _List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( string )


---

#### _config.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _config.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

#### _config.toJSON(arg0: _List_, arg1: _int_) : string
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

#### _config.toJSONObject(arg0: _Object_, arg1: _boolean_) : _Object_
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

#### _config.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : string
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

#### _config.toList() : _List_
##### Return

( _List_ )


---

#### _config.toList(arg0: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Class_ |   |

##### Return

( _List_ )


---

## toLongArray

---

#### _config.toLongArray() : _long[]_
##### Return

( _long[]_ )


---

## toMap

---

#### _config.toMap() : _Map_
##### Return

( _Map_ )


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

#### _config.toStringArray() : _String[]_
##### Return

( _String[]_ )


---

## unset

---

#### _config.unset(arg0: string) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Object_ )


---

## unsetAll

---

#### _config.unsetAll() : _void_
##### Return

( _void_ )


---

## values

---

#### _config.values() : _Collection_
##### Return

( _Collection_ )


---

## valuesToString

---

#### _config.valuesToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _config.valuesToString(arg0: string, arg1: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |

##### Return

( string )


---

#### _config.valuesToString(arg0: string, arg1: _String[]_, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _config.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _config.valuesToString(arg0: _Map_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _config.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |

##### Return

( string )


---

#### _config.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_, arg3: _[Values](../../objects/Values)_) : string
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

#### _config.valuesToString(arg0: _Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

