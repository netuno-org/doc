---
id: header
title: Header
sidebar_label: Header
---

HTTP header management feature.

With the Header feature, you can obtain any parameter coming in the header of the browser request, that is, obtain any information that comes in the HTTP header.
But you can also define response parameters in the Header, for example define the response of the HTTP status code or the Content-Type, among others.
Main functions:
- [response](#response)
- [status](#status)
- [baseURL](#baseurl)
- [uri](#uri)
- [url](#url)
- [rawHost](#rawhost)
- [host](#host)
- [port](#port)
- [scheme](#scheme)
- [contentType](#contenttype)
- [contentTypePDF](#contenttypepdf)
- [contentTypeJSON](#contenttypejson)
- [contentTypeHTML](#contenttypehtml)
- [contentTypePlain](#contenttypeplain)
- [contentTypePNG](#contenttypepng)
- [contentTypeJPG](#contenttypejpg)
- [contentTypeCSS](#contenttypecss)
- [contentTypeOctetStream](#contenttypeoctetstream)
- [acceptJSON](#acceptjson)
- [isAcceptJSON](#isacceptjson)
- [cache](#cache)
- [noCache](#nocache)
- [downloadFile](#downloadfile)
- [isDelete](#isdelete)
- [isGet](#isget)
- [isHead](#ishead)
- [isOptions](#isoptions)
- [isPost](#ispost)
- [isPut](#isput)
- [isTrace](#istrace)
- [isCopy](#iscopy)
- [isLink](#islink)
- [isUnlink](#isunlink)
- [isPatch](#ispatch)
- [isPurge](#ispurge)
- [isLock](#islock)
- [isUnlock](#isunlock)
- [isPropFind](#ispropfind)
- [isView](#isview)


---

## acceptJSON

---

#### _header.acceptJSON() : _boolean_
##### Return

( _boolean_ )


---

## add

---

#### _header.add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _header.addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### _header.addAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _header.as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.asBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _header.asByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### _header.asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### _header.asByte(key: string, defaultValue: _byte_) : _byte_
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

#### _header.asCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _header.asDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### _header.asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _header.asDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### _header.asDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### _header.asDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### _header.asDouble(key: string, defaultValue: _double_) : _double_
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

#### _header.asFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _header.asFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### _header.asFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### _header.asFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### _header.asFloat(key: string, defaultValue: _float_) : _float_
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

#### _header.asHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asHTMLEncode

---

#### _header.asHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## asInstant

---

#### _header.asInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### _header.asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _header.asInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### _header.asInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### _header.asInt(key: string, defaultValue: _short_) : _int_
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

#### _header.asList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _header.asLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _header.asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _header.asLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _header.asLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### _header.asLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### _header.asLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### _header.asLong(key: string, defaultValue: _long_) : _long_
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

#### _header.asMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _header.asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _header.asMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### _header.asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _header.asSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### _header.asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _header.asSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### _header.asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _header.asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _header.asShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### _header.asShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### _header.asShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### _header.asShort(key: string, defaultValue: _short_) : _short_
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

#### _header.asString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### _header.asString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _header.asString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### _header.asString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _header.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _header.asUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.asUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.asValues(index: _int_) : _[Values](../../objects/Values)_
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

#### _header.asValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.asValues(key: string) : _[Values](../../objects/Values)_
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

#### _header.asValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

## baseURL

---

#### _header.baseURL() : string
##### Return

( string )


---

## cache

---

#### _header.cache(time: _int_) : _[Header](../../resources/Header)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| time | _int_ |   |

##### Return

( _[Header](../../resources/Header)_ )


---

## clear

---

#### _header.clear() : _void_
##### Return

( _void_ )


---

## cloneJSON

---

#### _header.cloneJSON() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## compute

---

#### _header.compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _header.computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
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

#### _header.computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _header.contains(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _header.contains(key: string, value: _java.lang.Object_) : _boolean_
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

#### _header.containsAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _header.containsKey(key: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _header.containsValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## contentType

---

#### _header.contentType() : string
##### Return

( string )


---

#### _header.contentType(contentType: string) : _[Header](../../resources/Header)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| contentType | string |   |

##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypeCSS

---

#### _header.contentTypeCSS() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypeHTML

---

#### _header.contentTypeHTML() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypeJPG

---

#### _header.contentTypeJPG() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypeJS

---

#### _header.contentTypeJS() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypeJSON

---

#### _header.contentTypeJSON() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypeOctetStream

---

#### _header.contentTypeOctetStream() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypePDF

---

#### _header.contentTypePDF() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypePNG

---

#### _header.contentTypePNG() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## contentTypePlain

---

#### _header.contentTypePlain() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## downloadFile

---

#### _header.downloadFile(fileName: string) : _[Header](../../resources/Header)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| fileName | string |   |

##### Return

( _[Header](../../resources/Header)_ )


---

## ensureJail

---

#### _header.ensureJail(jailPath: string) : _void_
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

#### _header.entrySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## filter

---

#### _header.filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _header.find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _header.forEach(action: _java.util.function.BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _header.forEach(action: _java.util.function.Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### _header.forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### _header.forceList() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _header.forceMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _header.fromJSON(content: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## get

---

#### _header.get(key: _int_) : _java.lang.Object_
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

#### _header.get(key: _java.lang.Object_) : _java.lang.Object_
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

#### _header.get(key: string) : _java.lang.Object_
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

#### _header.get(key: string, type: _java.lang.Class_) : _java.lang.Object_
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

#### _header.getBoolean(index: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _header.getByte(index: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _byte_ )


---

#### _header.getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Return

( _byte_ )


---

#### _header.getByte(key: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _byte_ )


---

#### _header.getByte(key: string, defaultValue: _byte_) : _byte_
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

#### _header.getCalendar(key: string) : _java.util.Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _header.getDate(key: string) : _java.util.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Date_ )


---

#### _header.getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _header.getDouble(index: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _double_ )


---

#### _header.getDouble(index: _int_, defaultValue: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Return

( _double_ )


---

#### _header.getDouble(key: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _double_ )


---

#### _header.getDouble(key: string, defaultValue: _double_) : _double_
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

#### _header.getFile(key: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _header.getFloat(index: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _float_ )


---

#### _header.getFloat(index: _int_, defaultValue: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Return

( _float_ )


---

#### _header.getFloat(key: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _float_ )


---

#### _header.getFloat(key: string, defaultValue: _float_) : _float_
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

#### _header.getForceList() : _boolean_
##### Return

( _boolean_ )


---

## getForceMap

---

#### _header.getForceMap() : _boolean_
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### _header.getHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getHTMLEncode

---

#### _header.getHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

## getInstant

---

#### _header.getInstant(key: string) : _java.time.Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.Instant_ )


---

#### _header.getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _header.getInt(index: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _int_ )


---

#### _header.getInt(index: _int_, defaultValue: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Return

( _int_ )


---

#### _header.getInt(key: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _int_ )


---

#### _header.getInt(key: string, defaultValue: _int_) : _int_
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

#### _header.getKeys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## getList

---

#### _header.getList(index: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _header.getLocalDate(key: string) : _java.time.LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _header.getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _header.getLocalTime(key: string) : _java.time.LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _header.getLong(index: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _long_ )


---

#### _header.getLong(index: _int_, defaultValue: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Return

( _long_ )


---

#### _header.getLong(key: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _long_ )


---

#### _header.getLong(key: string, defaultValue: _long_) : _long_
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

#### _header.getMap(index: _int_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.Map_ )


---

#### _header.getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Return

( _java.util.Map_ )


---

#### _header.getMap(key: string) : _java.util.Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.Map_ )


---

#### _header.getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _header.getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### _header.getSQLDate(key: string) : _java.sql.Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Date_ )


---

#### _header.getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _header.getSQLTime(key: string) : _java.sql.Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Time_ )


---

#### _header.getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _header.getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _header.getShort(index: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _short_ )


---

#### _header.getShort(index: _int_, defaultValue: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Return

( _short_ )


---

#### _header.getShort(key: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _short_ )


---

#### _header.getShort(key: string, defaultValue: _short_) : _short_
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

#### _header.getSize() : _int_
##### Return

( _int_ )


---

## getString

---

#### _header.getString(index: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( string )


---

#### _header.getString(index: _int_, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _header.getString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( string )


---

#### _header.getString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( string )


---

#### _header.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _header.getUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( string )

Character encoding code.

---

## getUUID

---

#### _header.getUUID(key: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.getValues() : _java.util.Collection_
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### _header.getValues(index: _int_) : _[Values](../../objects/Values)_
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

#### _header.getValues(index: _int_, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.getValues(key: string) : _[Values](../../objects/Values)_
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

#### _header.getValues(key: string, defaultValue: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.has(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _header.has(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

#### _header.has(key: string, value: _java.lang.Object_) : _boolean_
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

#### _header.hasKey(key: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _header.hasValue(value: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## host

---

#### _header.host() : string
##### Return

( string )


---

## indexOf

---

#### _header.indexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _header.is(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isAcceptJSON

---

#### _header.isAcceptJSON() : _boolean_
##### Return

( _boolean_ )


---

## isCopy

---

#### _header.isCopy() : _boolean_
##### Return

( _boolean_ )


---

## isDelete

---

#### _header.isDelete() : _boolean_
##### Return

( _boolean_ )


---

## isEmpty

---

#### _header.isEmpty() : _boolean_
##### Return

( _boolean_ )


---

## isGet

---

#### _header.isGet() : _boolean_
##### Return

( _boolean_ )


---

## isHead

---

#### _header.isHead() : _boolean_
##### Return

( _boolean_ )


---

## isJail

---

#### _header.isJail() : _boolean_
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isLink

---

#### _header.isLink() : _boolean_
##### Return

( _boolean_ )


---

## isList

---

#### _header.isList() : _boolean_
##### Return

( _boolean_ )


---

#### _header.isList(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLock

---

#### _header.isLock() : _boolean_
##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _header.isLockedAsReadOnly() : _boolean_
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### _header.isMap() : _boolean_
##### Return

( _boolean_ )


---

#### _header.isMap(o: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _header.isMergeable(object: _java.lang.Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isOptions

---

#### _header.isOptions() : _boolean_
##### Return

( _boolean_ )


---

## isPatch

---

#### _header.isPatch() : _boolean_
##### Return

( _boolean_ )


---

## isPost

---

#### _header.isPost() : _boolean_
##### Return

( _boolean_ )


---

## isPropFind

---

#### _header.isPropFind() : _boolean_
##### Return

( _boolean_ )


---

## isPurge

---

#### _header.isPurge() : _boolean_
##### Return

( _boolean_ )


---

## isPut

---

#### _header.isPut() : _boolean_
##### Return

( _boolean_ )


---

## isTrace

---

#### _header.isTrace() : _boolean_
##### Return

( _boolean_ )


---

## isUnlink

---

#### _header.isUnlink() : _boolean_
##### Return

( _boolean_ )


---

## isUnlock

---

#### _header.isUnlock() : _boolean_
##### Return

( _boolean_ )


---

## isView

---

#### _header.isView() : _boolean_
##### Return

( _boolean_ )


---

## iterator

---

#### _header.iterator() : _java.util.Iterator_
##### Return

( _java.util.Iterator_ )


---

## join

---

#### _header.join(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

## keySet

---

#### _header.keySet() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keys

---

#### _header.keys() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### _header.keysSorted() : _java.util.Set_
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### _header.keysToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

#### _header.keysToString(map: _java.util.Map_, splitter: string) : string
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

#### _header.lastIndexOf(o: _java.lang.Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### _header.length() : _int_
##### Return

( _int_ )


---

## list

---

#### _header.list() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _header.list(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### _header.listIterator() : _java.util.ListIterator_
##### Return

( _java.util.ListIterator_ )


---

#### _header.listIterator(index: _int_) : _java.util.ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _header.listOfValues() : _java.util.List_
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### _header.loadJSON(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _header.loadJSON(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _header.loadProperties(in: _java.io.InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _void_ )


---

#### _header.loadProperties(in: _java.io.Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### _header.loadProperties(properties: _java.util.Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _header.loadPropertiesFromString(data: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | string |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### _header.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](../../objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### _header.map() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## merge

---

#### _header.merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _header.method() : string
##### Return

( string )


---

## noCache

---

#### _header.noCache() : _[Header](../../resources/Header)_
##### Return

( _[Header](../../resources/Header)_ )


---

## of

---

#### _header.of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.of(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| list | _java.util.List_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _header.ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _header.ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## port

---

#### _header.port() : string
##### Return

( string )


---

## push

---

#### _header.push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _header.put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.put(key: string, value: _java.lang.Object_) : _java.lang.Object_
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

#### _header.putAll(m: _java.util.Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| m | _java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _header.putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## rawHost

---

#### _header.rawHost() : string
##### Return

( string )


---

## remove

---

#### _header.remove(i: _int_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| i | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.remove(o: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
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

#### _header.removeAll() : _void_
##### Return

( _void_ )


---

#### _header.removeAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _header.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
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

#### _header.replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### _header.replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _header.replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## response

---

#### _header.response() : _[Values](../../objects/Values)_
##### Description

Starts a new instance of SMTP using the STMP configuration of the `default` key.

##### Return

( _[Values](../../objects/Values)_ )

The new instance of the SMTP resource based on the `default` STMP configuration.

---

## retainAll

---

#### _header.retainAll(c: _java.util.Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _header.safeString(object: _java.lang.Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Return

( string )


---

#### _header.safeString(object: _java.lang.Object_, defaultValue: string) : string
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

#### _header.saveJSON(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _header.saveJSON(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _header.saveProperties(out: _java.io.OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Return

( _void_ )


---

#### _header.saveProperties(out: _java.io.Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## scheme

---

#### _header.scheme() : string
##### Return

( string )


---

## search

---

#### _header.search(content: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |

##### Return

( string )


---

#### _header.search(content: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### _header.search(content: string, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Return

( string )


---

#### _header.search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Return

( string )


---

#### _header.search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
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

#### _header.set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceList | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _header.setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| forceMap | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _header.setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
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

#### _header.setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setNull(key: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _header.setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### _header.size() : _int_
##### Return

( _int_ )


---

## sizeOfList

---

#### _header.sizeOfList() : _int_
##### Return

( _int_ )


---

## sizeOfMap

---

#### _header.sizeOfMap() : _int_
##### Return

( _int_ )


---

## sort

---

#### _header.sort(c: _java.util.Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### _header.sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _header.spliterator() : _java.util.Spliterator_
##### Return

( _java.util.Spliterator_ )


---

## status

---

#### _header.status() : _int_
##### Return

( _int_ )


---

#### _header.status(httpStatus: _int_) : _[Header](../../resources/Header)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| httpStatus | _int_ |   |

##### Return

( _[Header](../../resources/Header)_ )


---

#### _header.status(httpStatus: _org.netuno.proteu.Proteu$HTTPStatus_) : _[Header](../../resources/Header)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| httpStatus | _org.netuno.proteu.Proteu$HTTPStatus_ |   |

##### Return

( _[Header](../../resources/Header)_ )


---

## subList

---

#### _header.subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
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

#### _header.toArray() : _[Ljava.lang.Object;[]_
##### Return

( _[Ljava.lang.Object;[]_ )


---

#### _header.toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### _header.toByteArray() : _byte[]_
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### _header.toDoubleArray() : _double[]_
##### Return

( _double[]_ )


---

## toFloatArray

---

#### _header.toFloatArray() : _float[]_
##### Return

( _float[]_ )


---

## toFormMap

---

#### _header.toFormMap() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _header.toIntArray() : _[I_
##### Return

( _[I_ )


---

## toJSON

---

#### _header.toJSON() : string
##### Return

( string )


---

#### _header.toJSON(htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### _header.toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _header.toJSON(indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _header.toJSON(values: _java.util.List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |

##### Return

( string )


---

#### _header.toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Return

( string )


---

#### _header.toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Return

( string )


---

#### _header.toJSON(values: _java.util.List_, indentFactor: _int_) : string
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

#### _header.toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
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

#### _header.toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
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

#### _header.toList() : _java.util.List_
##### Return

( _java.util.List_ )


---

#### _header.toList(cls: _java.lang.Class_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### _header.toLongArray() : _long[]_
##### Return

( _long[]_ )


---

## toMap

---

#### _header.toMap() : _java.util.Map_
##### Return

( _java.util.Map_ )


---

## toProperties

---

#### _header.toProperties() : string
##### Return

( string )


---

## toShortArray

---

#### _header.toShortArray() : _short[]_
##### Return

( _short[]_ )


---

## toStringArray

---

#### _header.toStringArray() : _[Ljava.lang.String;[]_
##### Return

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### _header.unset(key: string) : _java.lang.Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### _header.unsetAll() : _void_
##### Return

( _void_ )


---

## uri

---

#### _header.uri() : string
##### Return

( string )


---

## url

---

#### _header.url() : string
##### Return

( string )


---

## values

---

#### _header.values() : _java.util.Collection_
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

## valuesToString

---

#### _header.valuesToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |

##### Return

( string )


---

#### _header.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### _header.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _header.valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _header.valuesToString(map: _java.util.Map_, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Return

( string )


---

#### _header.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Return

( string )


---

#### _header.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
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

#### _header.valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

