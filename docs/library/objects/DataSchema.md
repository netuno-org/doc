---
id: DataSchema
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

#### add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### addAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### asBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### asBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### asBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### asByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### asByte(key: string, defaultValue: _byte_) : _byte_
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

#### asCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### asDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### asDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### asDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### asDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### asDouble(key: string, defaultValue: _double_) : _double_
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

#### asFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### asFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### asFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### asFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### asFloat(key: string, defaultValue: _float_) : _float_
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

#### asHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asHTMLEncode

---

#### asHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asInstant

---

#### asInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### asInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### asInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### asInt(key: string, defaultValue: _short_) : _int_
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

#### asList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### asList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### asLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### asLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### asLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### asLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### asLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### asLong(key: string, defaultValue: _long_) : _long_
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

#### asMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### asMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### asSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### asSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### asShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### asShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### asShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### asShort(key: string, defaultValue: _short_) : _short_
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

#### asString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### asString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### asString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### asString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### asString(key: string, defaultValue: string, charsetName: string) : string
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

#### asUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### asUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### asValues(index: _int_) : _[Values](../../objects/Values)_
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

#### asValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### asValues(key: string) : _[Values](../../objects/Values)_
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

#### asValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### clear() : _void_
##### Return

( _void_ )


---

## cloneJSON

---

#### cloneJSON() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## compute

---

#### compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
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

#### computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### contains(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### contains(key: string, value: _java.lang.Object_) : _boolean_
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

#### containsAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### containsKey(key: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### containsValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## ensureJail

---

#### ensureJail(jailPath: string) : _void_
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

#### entrySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## filter

---

#### filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### forEach(action: _java.util.function.BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### forEach(action: _java.util.function.Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### forceList() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### forceMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### fromJSON(content: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## get

---

#### get(key: _int_) : _java.lang.Object_
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

#### get(key: _java.lang.Object_) : _java.lang.Object_
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

#### get(key: string) : _java.lang.Object_
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

#### get(key: string, type: _java.lang.Class_) : _java.lang.Object_
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

#### getBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### getBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### getBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### getByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### getByte(key: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _byte_ )


---

#### getByte(key: string, defaultValue: _byte_) : _byte_
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

#### getCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### getDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### getDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### getDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### getDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### getDouble(key: string, defaultValue: _double_) : _double_
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

#### getFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### getFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### getFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### getFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### getFloat(key: string, defaultValue: _float_) : _float_
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

#### getForceList() : _boolean_
##### Return

( _boolean_ )


---

## getForceMap

---

#### getForceMap() : _boolean_
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### getHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getHTMLEncode

---

#### getHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getInstant

---

#### getInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### getInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### getInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### getInt(key: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _int_ )


---

#### getInt(key: string, defaultValue: _int_) : _int_
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

#### getKeys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## getList

---

#### getList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### getList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### getLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### getLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### getLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### getLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### getLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### getLong(key: string, defaultValue: _long_) : _long_
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

#### getMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### getMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

## getMethod

---

#### getMethod() : string
##### Return

( string )


---

## getOrDefault

---

#### getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### getSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### getSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## getService

---

#### getService() : string
##### Return

( string )


---

## getShort

---

#### getShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### getShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### getShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### getShort(key: string, defaultValue: _short_) : _short_
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

#### getSize() : _int_
##### Return

( _int_ )


---

## getStatusCode

---

#### getStatusCode() : _int_
##### Return

( _int_ )


---

## getString

---

#### getString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### getString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### getString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### getString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### getString(key: string, defaultValue: string, charsetName: string) : string
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

#### getUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( string )

Character encoding code.

---

## getUUID

---

#### getUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### getValues() : _java.util.Collection_
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### getValues(index: _int_) : _[Values](../../objects/Values)_
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

#### getValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### getValues(key: string) : _[Values](../../objects/Values)_
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

#### getValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### has(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### has(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### has(key: string, value: _java.lang.Object_) : _boolean_
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

#### hasKey(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### hasValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## in

---

#### in() : _boolean_
##### Return

( _boolean_ )


---

#### in(in: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _boolean_ |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## indexOf

---

#### indexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### is(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isEmpty

---

#### isEmpty() : _boolean_
##### Return

( _boolean_ )


---

## isIn

---

#### isIn() : _boolean_
##### Return

( _boolean_ )


---

## isJail

---

#### isJail() : _boolean_
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isList

---

#### isList() : _boolean_
##### Return

( _boolean_ )


---

#### isList(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### isLockedAsReadOnly() : _boolean_
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### isMap() : _boolean_
##### Return

( _boolean_ )


---

#### isMap(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### isMergeable(object: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMethod

---

#### isMethod(otherMethod: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| otherMethod | string |   |

##### Return

( _boolean_ )


---

## isOut

---

#### isOut() : _boolean_
##### Return

( _boolean_ )


---

## iterator

---

#### iterator() : _java.util.Iterator_
##### Return

( _java.util.Iterator_ )


---

## join

---

#### join(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

## keySet

---

#### keySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keys

---

#### keys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### keysSorted() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### keysToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

#### keysToString(map: _java.util.Map_, splitter: string) : string
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

#### lastIndexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### length() : _int_
##### Return

( _int_ )


---

## list

---

#### list() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### list(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### listIterator() : _java.util.ListIterator_
##### Return

( _java.util.ListIterator_ )


---

#### listIterator(index: _int_) : _java.util.ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### listOfValues() : _java.util.List_
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### loadJSON(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### loadJSON(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### loadProperties(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### loadProperties(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### loadProperties(properties: _java.util.Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### loadPropertiesFromString(data: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### lockAsReadOnly() : _[Values](../../objects/Values)_
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](../../objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### map() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## merge

---

#### merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## method

---

#### method() : string
##### Return

( string )


---

#### method(method: string) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## of

---

#### of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### of(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| list | _java.util.List_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## out

---

#### out() : _boolean_
##### Return

( _boolean_ )


---

#### out(out: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _boolean_ |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## push

---

#### push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### put(key: string, value: _java.lang.Object_) : _java.lang.Object_
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

#### putAll(m: _java.util.Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| m | _java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### remove(i: _int_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| i | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### remove(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
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

#### removeAll() : _void_
##### Return

( _void_ )


---

#### removeAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
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

#### replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### retainAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### safeString(object: _java.lang.Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( string )


---

#### safeString(object: _java.lang.Object_, defaultValue: string) : string
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

#### saveJSON(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### saveJSON(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### saveProperties(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### saveProperties(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### search(content: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( string )


---

#### search(content: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### search(content: string, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Return

( string )


---

#### search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
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

#### service() : string
##### Return

( string )


---

#### service(service: string) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| service | string |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## set

---

#### set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceList | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceMap | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
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

#### setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIn

---

#### setIn(in: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _boolean_ |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## setMethod

---

#### setMethod(method: string) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| method | string |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## setNull

---

#### setNull(key: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setOut

---

#### setOut(out: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _boolean_ |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## setService

---

#### setService(service: string) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| service | string |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## setStatusCode

---

#### setStatusCode(statusCode: _int_) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| statusCode | _int_ |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## setURLCharacterEncoding

---

#### setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### size() : _int_
##### Return

( _int_ )


---

## sizeOfList

---

#### sizeOfList() : _int_
##### Return

( _int_ )


---

## sizeOfMap

---

#### sizeOfMap() : _int_
##### Return

( _int_ )


---

## sort

---

#### sort(c: _java.util.Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### spliterator() : _java.util.Spliterator_
##### Return

( _java.util.Spliterator_ )


---

## statusCode

---

#### statusCode() : _int_
##### Return

( _int_ )


---

#### statusCode(statusCode: _int_) : _[DataSchema](../../objects/DataSchema)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| statusCode | _int_ |   |

##### Return

( _[DataSchema](../../objects/DataSchema)_ )


---

## subList

---

#### subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
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

#### toArray() : _[Ljava.lang.Object;[]_
##### Return

( _[Ljava.lang.Object;[]_ )


---

#### toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### toByteArray() : _byte[]_
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### toDoubleArray() : _double[]_
##### Return

( _double[]_ )


---

## toFloatArray

---

#### toFloatArray() : _float[]_
##### Return

( _float[]_ )


---

## toFormMap

---

#### toFormMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### toIntArray() : _[I_
##### Return

( _[I_ )


---

## toJSON

---

#### toJSON() : string
##### Return

( string )


---

#### toJSON(htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### toJSON(indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| indentFactor | _int_ |   |

##### Return

( string )


---

#### toJSON(values: _java.util.List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |

##### Return

( string )


---

#### toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### toJSON(values: _java.util.List_, indentFactor: _int_) : string
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

#### toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
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

#### toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
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

#### toList() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### toList(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### toLongArray() : _long[]_
##### Return

( _long[]_ )


---

## toMap

---

#### toMap() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## toProperties

---

#### toProperties() : string
##### Return

( string )


---

## toShortArray

---

#### toShortArray() : _short[]_
##### Return

( _short[]_ )


---

## toStringArray

---

#### toStringArray() : _[Ljava.lang.String;[]_
##### Return

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### unset(key: string) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### unsetAll() : _void_
##### Return

( _void_ )


---

## values

---

#### values() : _java.util.Collection_
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

## valuesToString

---

#### valuesToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

#### valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### valuesToString(map: _java.util.Map_, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Return

( string )


---

#### valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
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

#### valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

