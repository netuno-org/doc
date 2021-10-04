---
id: dataSchema
title: DataSchema
sidebar_label: DataSchema
---

Manages the dynamic build of OpenAPI Schema and is used in scripts that are in `server/services/_schema`.

```javascript
if (_dataSchema.isMethod('POST')) {
    _dataSchema.getValues('properties')
        .set(
            'uid',
            _val.map()
                .set('type', 'uid')
        )
    _dataSchema.getValues('required')
        .add('uid')
}
```

---

## add

---

#### _dataSchema.add(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.add(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _dataSchema.addAll(arg0: _int_, arg1: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Collection_ |   |

##### Return

( _boolean_ )


---

#### _dataSchema.addAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _dataSchema.as(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.as(arg0: _Object_, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.asBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _dataSchema.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _dataSchema.asBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _dataSchema.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _dataSchema.asByte(arg0: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

##### Return

( _byte_ )


---

#### _dataSchema.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _dataSchema.asByte(arg0: string, arg1: _byte_) : _byte_
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

#### _dataSchema.asCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _dataSchema.asCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _dataSchema.asDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _dataSchema.asDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.asDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _dataSchema.asDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _dataSchema.asDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _dataSchema.asDouble(arg0: string, arg1: _double_) : _double_
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

#### _dataSchema.asFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _dataSchema.asFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _dataSchema.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _dataSchema.asFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _dataSchema.asFloat(arg0: string, arg1: _float_) : _float_
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

#### _dataSchema.asHtmlDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asHtmlEncode

---

#### _dataSchema.asHtmlEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asInstant

---

#### _dataSchema.asInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _dataSchema.asInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _dataSchema.asInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _dataSchema.asInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _dataSchema.asInt(arg0: string, arg1: _short_) : _int_
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

#### _dataSchema.asList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _dataSchema.asList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _dataSchema.asList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _dataSchema.asList(arg0: string, arg1: _Object_) : _List_
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

#### _dataSchema.asLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _dataSchema.asLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _dataSchema.asLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _dataSchema.asLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _dataSchema.asLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _dataSchema.asLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _dataSchema.asLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _dataSchema.asLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _dataSchema.asLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _dataSchema.asLong(arg0: string, arg1: _long_) : _long_
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

#### _dataSchema.asMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _dataSchema.asMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _dataSchema.asMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _dataSchema.asMap(arg0: string, arg1: _Object_) : _Map_
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

#### _dataSchema.asSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _dataSchema.asSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.asSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _dataSchema.asSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _dataSchema.asSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _dataSchema.asSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _dataSchema.asShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _dataSchema.asShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _dataSchema.asShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _dataSchema.asShort(arg0: string, arg1: _short_) : _short_
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

#### _dataSchema.asString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _dataSchema.asString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _dataSchema.asString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _dataSchema.asString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _dataSchema.asString(arg0: string, arg1: string, arg2: string) : string
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

#### _dataSchema.asUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _dataSchema.asUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _dataSchema.asValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.asValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.asValues(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.asValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.clear() : _void_
##### Return

( _void_ )


---

## cloneJSON

---

#### _dataSchema.cloneJSON() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## compute

---

#### _dataSchema.compute(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _dataSchema.computeIfAbsent(arg0: _Object_, arg1: _Function_) : _Object_
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

#### _dataSchema.computeIfPresent(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _dataSchema.contains(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

#### _dataSchema.contains(arg0: string, arg1: _Object_) : _boolean_
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

#### _dataSchema.containsAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _dataSchema.containsKey(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _dataSchema.containsValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## ensureJail

---

#### _dataSchema.ensureJail(jailPath: string) : _void_
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

#### _dataSchema.entrySet() : _Set_
##### Return

( _Set_ )


---

## filter

---

#### _dataSchema.filter(arg0: _Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.filter(arg0: _Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _dataSchema.find(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.find(arg0: _Predicate_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _Object_ )


---

#### _dataSchema.find(arg0: _Value_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _Object_ )


---

#### _dataSchema.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _dataSchema.forEach(arg0: _BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Return

( _void_ )


---

#### _dataSchema.forEach(arg0: _Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Return

( _void_ )


---

#### _dataSchema.forEach(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### _dataSchema.forceList() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _dataSchema.forceMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _dataSchema.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## get

---

#### _dataSchema.get(key: _int_) : _Object_
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

#### _dataSchema.get(key: _Object_) : _Object_
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

#### _dataSchema.get(key: string) : _Object_
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

#### _dataSchema.get(key: string, type: _Class_) : _Object_
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

#### _dataSchema.getBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _dataSchema.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _dataSchema.getBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _dataSchema.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _dataSchema.getByte(arg0: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

##### Return

( _byte_ )


---

#### _dataSchema.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _dataSchema.getByte(arg0: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte_ )


---

#### _dataSchema.getByte(arg0: string, arg1: _byte_) : _byte_
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

#### _dataSchema.getCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _dataSchema.getCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _dataSchema.getDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _dataSchema.getDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.getDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _dataSchema.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _dataSchema.getDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _dataSchema.getDouble(arg0: string, arg1: _double_) : _double_
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

#### _dataSchema.getFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _dataSchema.getFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _dataSchema.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _dataSchema.getFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _dataSchema.getFloat(arg0: string, arg1: _float_) : _float_
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

#### _dataSchema.getForceList() : _boolean_
##### Return

( _boolean_ )


---

## getForceMap

---

#### _dataSchema.getForceMap() : _boolean_
##### Return

( _boolean_ )


---

## getHtmlDecode

---

#### _dataSchema.getHtmlDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getHtmlEncode

---

#### _dataSchema.getHtmlEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getInstant

---

#### _dataSchema.getInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _dataSchema.getInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _dataSchema.getInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _dataSchema.getInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _dataSchema.getInt(arg0: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _int_ )


---

#### _dataSchema.getInt(arg0: string, arg1: _int_) : _int_
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

#### _dataSchema.getKeys() : _Set_
##### Return

( _Set_ )


---

## getList

---

#### _dataSchema.getList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _dataSchema.getList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _dataSchema.getList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _dataSchema.getList(arg0: string, arg1: _Object_) : _List_
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

#### _dataSchema.getLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _dataSchema.getLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _dataSchema.getLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _dataSchema.getLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _dataSchema.getLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _dataSchema.getLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _dataSchema.getLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _dataSchema.getLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _dataSchema.getLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _dataSchema.getLong(arg0: string, arg1: _long_) : _long_
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

#### _dataSchema.getMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _dataSchema.getMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _dataSchema.getMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _dataSchema.getMap(arg0: string, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

## getMethod

---

#### _dataSchema.getMethod() : string
##### Return

( string )


---

## getOrDefault

---

#### _dataSchema.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _dataSchema.getSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _dataSchema.getSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.getSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _dataSchema.getSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _dataSchema.getSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _dataSchema.getSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Timestamp_ |   |

##### Return

( _Timestamp_ )


---

## getService

---

#### _dataSchema.getService() : string
##### Return

( string )


---

## getShort

---

#### _dataSchema.getShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _dataSchema.getShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _dataSchema.getShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _dataSchema.getShort(arg0: string, arg1: _short_) : _short_
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

#### _dataSchema.getSize() : _int_
##### Return

( _int_ )


---

## getStatusCode

---

#### _dataSchema.getStatusCode() : _int_
##### Return

( _int_ )


---

## getString

---

#### _dataSchema.getString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _dataSchema.getString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _dataSchema.getString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _dataSchema.getString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _dataSchema.getString(arg0: string, arg1: string, arg2: string) : string
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

#### _dataSchema.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( string )

Character encoding code.

---

## getUUID

---

#### _dataSchema.getUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _dataSchema.getUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _dataSchema.getValues() : _Collection_
##### Return

( _Collection_ )


---

#### _dataSchema.getValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.getValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.getValues(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.getValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.has(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

#### _dataSchema.has(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _dataSchema.has(arg0: string, arg1: _Object_) : _boolean_
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

#### _dataSchema.hasKey(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _dataSchema.hasValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## in

---

#### _dataSchema.in() : _boolean_
##### Return

( _boolean_ )


---

#### _dataSchema.in(arg0: _boolean_) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _DataSchema_ )


---

## indexOf

---

#### _dataSchema.indexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _dataSchema.is(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isEmpty

---

#### _dataSchema.isEmpty() : _boolean_
##### Return

( _boolean_ )


---

## isIn

---

#### _dataSchema.isIn() : _boolean_
##### Return

( _boolean_ )


---

## isJail

---

#### _dataSchema.isJail() : _boolean_
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isList

---

#### _dataSchema.isList() : _boolean_
##### Return

( _boolean_ )


---

#### _dataSchema.isList(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _dataSchema.isLockedAsReadOnly() : _boolean_
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### _dataSchema.isMap() : _boolean_
##### Return

( _boolean_ )


---

#### _dataSchema.isMap(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _dataSchema.isMergeable(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isMethod

---

#### _dataSchema.isMethod(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## isOut

---

#### _dataSchema.isOut() : _boolean_
##### Return

( _boolean_ )


---

## iterator

---

#### _dataSchema.iterator() : _Iterator_
##### Return

( _Iterator_ )


---

## join

---

#### _dataSchema.join(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## keySet

---

#### _dataSchema.keySet() : _Set_
##### Return

( _Set_ )


---

## keys

---

#### _dataSchema.keys() : _Set_
##### Return

( _Set_ )


---

## keysSorted

---

#### _dataSchema.keysSorted() : _Set_
##### Return

( _Set_ )


---

## keysToString

---

#### _dataSchema.keysToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _dataSchema.keysToString(arg0: _Map_, arg1: string) : string
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

#### _dataSchema.lastIndexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _int_ )


---

## length

---

#### _dataSchema.length() : _int_
##### Return

( _int_ )


---

## list

---

#### _dataSchema.list() : _List_
##### Return

( _List_ )


---

#### _dataSchema.list(arg0: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Class_ |   |

##### Return

( _List_ )


---

## listIterator

---

#### _dataSchema.listIterator() : _ListIterator_
##### Return

( _ListIterator_ )


---

#### _dataSchema.listIterator(arg0: _int_) : _ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _ListIterator_ )


---

## listOfValues

---

#### _dataSchema.listOfValues() : _List_
##### Return

( _List_ )


---

## loadJSON

---

#### _dataSchema.loadJSON(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _dataSchema.loadJSON(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _dataSchema.loadProperties(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _dataSchema.loadProperties(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

#### _dataSchema.loadProperties(arg0: _Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _dataSchema.loadPropertiesFromString(arg0: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### _dataSchema.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](../../objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### _dataSchema.map() : _Map_
##### Return

( _Map_ )


---

## merge

---

#### _dataSchema.merge(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.merge(arg0: _Object_, arg1: _Object_, arg2: _BiFunction_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |
| arg2 | _BiFunction_ |   |

##### Return

( _Object_ )


---

## method

---

#### _dataSchema.method() : string
##### Return

( string )


---

#### _dataSchema.method(arg0: string) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _DataSchema_ )


---

## of

---

#### _dataSchema.of(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

## out

---

#### _dataSchema.out() : _boolean_
##### Return

( _boolean_ )


---

#### _dataSchema.out(arg0: _boolean_) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _DataSchema_ )


---

## push

---

#### _dataSchema.push(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _dataSchema.put(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _dataSchema.put(arg0: string, arg1: _Object_) : _Object_
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

#### _dataSchema.putAll(arg0: _Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _dataSchema.putIfAbsent(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _dataSchema.remove(arg0: _int_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Object_ )


---

#### _dataSchema.remove(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

#### _dataSchema.remove(arg0: _Object_, arg1: _Object_) : _boolean_
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

#### _dataSchema.removeAll() : _void_
##### Return

( _void_ )


---

#### _dataSchema.removeAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _dataSchema.replace(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _dataSchema.replace(arg0: _Object_, arg1: _Object_, arg2: _Object_) : _boolean_
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

#### _dataSchema.replaceAll(arg0: _BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Return

( _void_ )


---

#### _dataSchema.replaceAll(arg0: _UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _dataSchema.replaceAll(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### _dataSchema.retainAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _dataSchema.safeString(arg0: _Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( string )


---

#### _dataSchema.safeString(arg0: _Object_, arg1: string) : string
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

#### _dataSchema.saveJSON(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _dataSchema.saveJSON(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _dataSchema.saveProperties(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _dataSchema.saveProperties(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### _dataSchema.search(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _dataSchema.search(arg0: string, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _dataSchema.search(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _dataSchema.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Return

( string )


---

#### _dataSchema.search(arg0: _Map_, arg1: string, arg2: string, arg3: _boolean_) : string
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

#### _dataSchema.service() : string
##### Return

( string )


---

#### _dataSchema.service(arg0: string) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _DataSchema_ )


---

## set

---

#### _dataSchema.set(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.set(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _dataSchema.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _dataSchema.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIn

---

#### _dataSchema.setIn(arg0: _boolean_) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _DataSchema_ )


---

## setMethod

---

#### _dataSchema.setMethod(arg0: string) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _DataSchema_ )


---

## setNull

---

#### _dataSchema.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setOut

---

#### _dataSchema.setOut(arg0: _boolean_) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _DataSchema_ )


---

## setService

---

#### _dataSchema.setService(arg0: string) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _DataSchema_ )


---

## setStatusCode

---

#### _dataSchema.setStatusCode(arg0: _int_) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _DataSchema_ )


---

## setURLCharacterEncoding

---

#### _dataSchema.setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### _dataSchema.size() : _int_
##### Return

( _int_ )


---

## sizeOfList

---

#### _dataSchema.sizeOfList() : _int_
##### Return

( _int_ )


---

## sizeOfMap

---

#### _dataSchema.sizeOfMap() : _int_
##### Return

( _int_ )


---

## sort

---

#### _dataSchema.sort(arg0: _Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Comparator_ |   |

##### Return

( _void_ )


---

#### _dataSchema.sort(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _dataSchema.spliterator() : _Spliterator_
##### Return

( _Spliterator_ )


---

## statusCode

---

#### _dataSchema.statusCode() : _int_
##### Return

( _int_ )


---

#### _dataSchema.statusCode(arg0: _int_) : _DataSchema_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _DataSchema_ )


---

## subList

---

#### _dataSchema.subList(arg0: _int_, arg1: _int_) : _List_
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

#### _dataSchema.toArray() : _Object[]_
##### Return

( _Object[]_ )


---

#### _dataSchema.toArray(arg0: _Object[]_) : _Object[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Return

( _Object[]_ )


---

## toFormMap

---

#### _dataSchema.toFormMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## toJSON

---

#### _dataSchema.toJSON() : string
##### Return

( string )


---

#### _dataSchema.toJSON(arg0: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( string )


---

#### _dataSchema.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

#### _dataSchema.toJSON(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _dataSchema.toJSON(arg0: _List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( string )


---

#### _dataSchema.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _dataSchema.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

#### _dataSchema.toJSON(arg0: _List_, arg1: _int_) : string
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

#### _dataSchema.toJSONObject(arg0: _Object_, arg1: _boolean_) : _Object_
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

#### _dataSchema.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : string
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

#### _dataSchema.toList() : _List_
##### Return

( _List_ )


---

## toMap

---

#### _dataSchema.toMap() : _Map_
##### Return

( _Map_ )


---

## toProperties

---

#### _dataSchema.toProperties() : string
##### Return

( string )


---

## unset

---

#### _dataSchema.unset(arg0: string) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Object_ )


---

## unsetAll

---

#### _dataSchema.unsetAll() : _void_
##### Return

( _void_ )


---

## values

---

#### _dataSchema.values() : _Collection_
##### Return

( _Collection_ )


---

## valuesToString

---

#### _dataSchema.valuesToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _dataSchema.valuesToString(arg0: string, arg1: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |

##### Return

( string )


---

#### _dataSchema.valuesToString(arg0: string, arg1: _String[]_, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _dataSchema.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |

##### Return

( string )


---

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_, arg3: _[Values](../../objects/Values)_) : string
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

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

