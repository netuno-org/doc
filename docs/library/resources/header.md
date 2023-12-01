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

#### _header.add(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.add(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _header.addAll(arg0: _int_, arg1: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Collection_ |   |

##### Return

( _boolean_ )


---

#### _header.addAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _header.as(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.as(arg0: _Object_, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _header.asBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _header.asByte(arg0: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte_ )


---

#### _header.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _header.asByte(arg0: string, arg1: _byte_) : _byte_
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

#### _header.asCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _header.asCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _header.asDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _header.asDate(arg0: string, arg1: _Date_) : _Date_
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

#### _header.asDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _header.asDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _header.asDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _header.asDouble(arg0: string, arg1: _double_) : _double_
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

#### _header.asFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _header.asFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _header.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _header.asFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _header.asFloat(arg0: string, arg1: _float_) : _float_
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

#### _header.asHTMLDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asHTMLEncode

---

#### _header.asHTMLEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## asInstant

---

#### _header.asInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _header.asInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _header.asInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _header.asInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _header.asInt(arg0: string, arg1: _short_) : _int_
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

#### _header.asList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _header.asList(arg0: _int_, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _header.asList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _header.asList(arg0: _int_, arg1: _Object_, arg2: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Return

( _List_ )


---

#### _header.asList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _header.asList(arg0: string, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _header.asList(arg0: string, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _header.asList(arg0: string, arg1: _Object_, arg2: _Class_) : _List_
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

#### _header.asLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _header.asLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _header.asLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _header.asLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _header.asLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _header.asLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _header.asLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _header.asLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _header.asLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _header.asLong(arg0: string, arg1: _long_) : _long_
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

#### _header.asMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _header.asMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _header.asMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _header.asMap(arg0: string, arg1: _Object_) : _Map_
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

#### _header.asSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _header.asSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _header.asSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _header.asSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _header.asSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _header.asSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _header.asShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _header.asShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _header.asShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _header.asShort(arg0: string, arg1: _short_) : _short_
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

#### _header.asString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _header.asString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _header.asString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _header.asString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _header.asString(arg0: string, arg1: string, arg2: string) : string
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

#### _header.asUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _header.asUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _header.asUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _header.asUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _header.asUUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _header.asUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _header.asValues(key: _int_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _int_ | The key to get the associated object. |

##### Return

( _[Values](../../objects/Values)_ )

Object converted to Values.

---

#### _header.asValues(key: _int_, defaultValue: _Object_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _int_ | The key to get the associated object. |
| defaultValue | _Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

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

#### _header.asValues(key: string, defaultValue: _Object_) : _[Values](../../objects/Values)_
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | The key to get the associated object. |
| defaultValue | _Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

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

#### _header.cache(arg0: _int_) : _Header_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Header_ )


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

#### _header.compute(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _header.computeIfAbsent(arg0: _Object_, arg1: _Function_) : _Object_
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

#### _header.computeIfPresent(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _header.contains(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

#### _header.contains(arg0: string, arg1: _Object_) : _boolean_
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

#### _header.containsAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _header.containsKey(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _header.containsValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## contentType

---

#### _header.contentType() : string
##### Return

( string )


---

#### _header.contentType(arg0: string) : _Header_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Header_ )


---

## contentTypeCSS

---

#### _header.contentTypeCSS() : _Header_
##### Return

( _Header_ )


---

## contentTypeHTML

---

#### _header.contentTypeHTML() : _Header_
##### Return

( _Header_ )


---

## contentTypeJPG

---

#### _header.contentTypeJPG() : _Header_
##### Return

( _Header_ )


---

## contentTypeJS

---

#### _header.contentTypeJS() : _Header_
##### Return

( _Header_ )


---

## contentTypeJSON

---

#### _header.contentTypeJSON() : _Header_
##### Return

( _Header_ )


---

## contentTypeOctetStream

---

#### _header.contentTypeOctetStream() : _Header_
##### Return

( _Header_ )


---

## contentTypePDF

---

#### _header.contentTypePDF() : _Header_
##### Return

( _Header_ )


---

## contentTypePNG

---

#### _header.contentTypePNG() : _Header_
##### Return

( _Header_ )


---

## contentTypePlain

---

#### _header.contentTypePlain() : _Header_
##### Return

( _Header_ )


---

## downloadFile

---

#### _header.downloadFile(arg0: string) : _Header_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Header_ )


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

#### _header.entrySet() : _Set_
##### Return

( _Set_ )


---

## filter

---

#### _header.filter(arg0: _Predicate_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.filter(arg0: _Value_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## find

---

#### _header.find(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.find(arg0: _Predicate_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Return

( _Object_ )


---

#### _header.find(arg0: _Value_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _Object_ )


---

#### _header.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _header.forEach(arg0: _BiConsumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Return

( _void_ )


---

#### _header.forEach(arg0: _Consumer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Return

( _void_ )


---

#### _header.forEach(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

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

#### _header.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.fromJSON(arg0: _Response_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Response_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## get

---

#### _header.get(key: _int_) : _Object_
##### Description

Gets the original object associated with the key, but cast for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _int_ | Key to get the associated object. |

##### Return

( _Object_ )

Original object converted to the type of the defined class.

---

#### _header.get(key: _Object_) : _Object_
##### Description

Gets the original object associated with the key, but cast for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _Object_ | Key to get the associated object. |

##### Return

( _Object_ )

Original object converted to the type of the defined class.

---

#### _header.get(key: string) : _Object_
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

#### _header.get(key: string, type: _Class_) : _Object_
##### Description

Gets the original object associated with the key, but cast for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Key to get the associated object. |
| type | _Class_ | Class representing the type of object that should be cast. |

##### Return

( _Object_ )

Original object converted to the type of the defined class.

---

## getBoolean

---

#### _header.getBoolean(arg0: _int_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _header.getByte(arg0: _int_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte_ )


---

#### _header.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Return

( _byte_ )


---

#### _header.getByte(arg0: string) : _byte_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte_ )


---

#### _header.getByte(arg0: string, arg1: _byte_) : _byte_
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

#### _header.getCalendar(arg0: string) : _Calendar_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Calendar_ )


---

#### _header.getCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _header.getDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _header.getDate(arg0: string, arg1: _Date_) : _Date_
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

#### _header.getDouble(arg0: _int_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )


---

#### _header.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Return

( _double_ )


---

#### _header.getDouble(arg0: string) : _double_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _double_ )


---

#### _header.getDouble(arg0: string, arg1: _double_) : _double_
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

#### _header.getFile(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _header.getFloat(arg0: _int_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )


---

#### _header.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Return

( _float_ )


---

#### _header.getFloat(arg0: string) : _float_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _float_ )


---

#### _header.getFloat(arg0: string, arg1: _float_) : _float_
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

#### _header.getHTMLDecode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getHTMLEncode

---

#### _header.getHTMLEncode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## getInstant

---

#### _header.getInstant(arg0: string) : _Instant_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Instant_ )


---

#### _header.getInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _header.getInt(arg0: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _int_ )


---

#### _header.getInt(arg0: _int_, arg1: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Return

( _int_ )


---

#### _header.getInt(arg0: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _int_ )


---

#### _header.getInt(arg0: string, arg1: _int_) : _int_
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

#### _header.getKeys() : _Set_
##### Return

( _Set_ )


---

## getList

---

#### _header.getList(arg0: _int_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _List_ )


---

#### _header.getList(arg0: _int_, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _header.getList(arg0: _int_, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _header.getList(arg0: _int_, arg1: _Object_, arg2: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Return

( _List_ )


---

#### _header.getList(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

#### _header.getList(arg0: string, arg1: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Class_ |   |

##### Return

( _List_ )


---

#### _header.getList(arg0: string, arg1: _Object_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Return

( _List_ )


---

#### _header.getList(arg0: string, arg1: _Object_, arg2: _Class_) : _List_
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

#### _header.getLocalDate(arg0: string) : _LocalDate_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDate_ )


---

#### _header.getLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _header.getLocalDateTime(arg0: string) : _LocalDateTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalDateTime_ )


---

#### _header.getLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _header.getLocalTime(arg0: string) : _LocalTime_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _LocalTime_ )


---

#### _header.getLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _header.getLong(arg0: _int_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )


---

#### _header.getLong(arg0: _int_, arg1: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Return

( _long_ )


---

#### _header.getLong(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

#### _header.getLong(arg0: string, arg1: _long_) : _long_
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

#### _header.getMap(arg0: _int_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Map_ )


---

#### _header.getMap(arg0: _int_, arg1: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _Map_ )


---

#### _header.getMap(arg0: string) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Map_ )


---

#### _header.getMap(arg0: string, arg1: _Object_) : _Map_
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

#### _header.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _header.getSQLDate(arg0: string) : _Date_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Date_ )


---

#### _header.getSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _header.getSQLTime(arg0: string) : _Time_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Time_ )


---

#### _header.getSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _header.getSQLTimestamp(arg0: string) : _Timestamp_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Timestamp_ )


---

#### _header.getSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _header.getShort(arg0: _int_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )


---

#### _header.getShort(arg0: _int_, arg1: _short_) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Return

( _short_ )


---

#### _header.getShort(arg0: string) : _short_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _short_ )


---

#### _header.getShort(arg0: string, arg1: _short_) : _short_
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

#### _header.getSize() : _int_
##### Return

( _int_ )


---

## getString

---

#### _header.getString(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _header.getString(arg0: _int_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _header.getString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _header.getString(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _header.getString(arg0: string, arg1: string, arg2: string) : string
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

#### _header.getUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _header.getUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _header.getUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _header.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( string )

Character encoding code.

---

## getUUID

---

#### _header.getUUID(arg0: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _UUID_ )


---

#### _header.getUUID(arg0: string, arg1: string) : _UUID_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _UUID_ )


---

#### _header.getUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _header.getValues() : _Collection_
##### Return

( _Collection_ )


---

#### _header.getValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.getValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.getValues(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.getValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _header.has(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

#### _header.has(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### _header.has(arg0: string, arg1: _Object_) : _boolean_
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

#### _header.hasKey(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _header.hasValue(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _header.indexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _header.is(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _header.isList(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _header.isMap(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _header.isMergeable(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _header.iterator() : _Iterator_
##### Return

( _Iterator_ )


---

## join

---

#### _header.join(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## keySet

---

#### _header.keySet() : _Set_
##### Return

( _Set_ )


---

## keys

---

#### _header.keys() : _Set_
##### Return

( _Set_ )


---

## keysSorted

---

#### _header.keysSorted() : _Set_
##### Return

( _Set_ )


---

## keysToString

---

#### _header.keysToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _header.keysToString(arg0: _Map_, arg1: string) : string
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

#### _header.lastIndexOf(arg0: _Object_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _header.list() : _List_
##### Return

( _List_ )


---

#### _header.list(arg0: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Class_ |   |

##### Return

( _List_ )


---

## listIterator

---

#### _header.listIterator() : _ListIterator_
##### Return

( _ListIterator_ )


---

#### _header.listIterator(arg0: _int_) : _ListIterator_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _ListIterator_ )


---

## listOfValues

---

#### _header.listOfValues() : _List_
##### Return

( _List_ )


---

## loadJSON

---

#### _header.loadJSON(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _header.loadJSON(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _header.loadProperties(arg0: _InputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _void_ )


---

#### _header.loadProperties(arg0: _Reader_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

##### Return

( _void_ )


---

#### _header.loadProperties(arg0: _Properties_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _header.loadPropertiesFromString(arg0: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

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

#### _header.map() : _Map_
##### Return

( _Map_ )


---

## merge

---

#### _header.merge(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.merge(arg0: _Object_, arg1: _Object_, arg2: _BiFunction_) : _Object_
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

#### _header.method() : string
##### Return

( string )


---

## noCache

---

#### _header.noCache() : _Header_
##### Return

( _Header_ )


---

## of

---

#### _header.of(arg0: _Object[]_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.of(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

#### _header.of(arg0: _List_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.of(arg0: _Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _header.ofList(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _header.ofMap(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _header.push(arg0: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## put

---

#### _header.put(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _header.put(arg0: string, arg1: _Object_) : _Object_
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

#### _header.putAll(arg0: _Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _header.putIfAbsent(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

## rawHost

---

#### _header.rawHost() : string
##### Return

( string )


---

## remove

---

#### _header.remove(arg0: _int_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Object_ )


---

#### _header.remove(arg0: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )


---

#### _header.remove(arg0: _Object_, arg1: _Object_) : _boolean_
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

#### _header.removeAll() : _void_
##### Return

( _void_ )


---

#### _header.removeAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _header.replace(arg0: _Object_, arg1: _Object_) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Return

( _Object_ )


---

#### _header.replace(arg0: _Object_, arg1: _Object_, arg2: _Object_) : _boolean_
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

#### _header.replaceAll(arg0: _BiFunction_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Return

( _void_ )


---

#### _header.replaceAll(arg0: _UnaryOperator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _header.replaceAll(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

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

#### _header.retainAll(arg0: _Collection_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _header.safeString(arg0: _Object_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( string )


---

#### _header.safeString(arg0: _Object_, arg1: string) : string
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

#### _header.saveJSON(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _header.saveJSON(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _header.saveProperties(arg0: _OutputStream_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _void_ )


---

#### _header.saveProperties(arg0: _Writer_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Writer_ |   |

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

#### _header.search(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _header.search(arg0: string, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _header.search(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### _header.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Return

( string )


---

#### _header.search(arg0: _Map_, arg1: string, arg2: string, arg3: _boolean_) : string
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

#### _header.set(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.set(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _header.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _header.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _header.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
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

#### _header.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

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

#### _header.sort(arg0: _Comparator_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Comparator_ |   |

##### Return

( _void_ )


---

#### _header.sort(arg0: _Value_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _header.spliterator() : _Spliterator_
##### Return

( _Spliterator_ )


---

## status

---

#### _header.status() : _int_
##### Return

( _int_ )


---

#### _header.status(arg0: _int_) : _Header_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Header_ )


---

#### _header.status(arg0: _HTTPStatus_) : _Header_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _HTTPStatus_ |   |

##### Return

( _Header_ )


---

## subList

---

#### _header.subList(arg0: _int_, arg1: _int_) : _List_
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

#### _header.toArray() : _Object[]_
##### Return

( _Object[]_ )


---

#### _header.toArray(arg0: _Object[]_) : _Object[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Return

( _Object[]_ )


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

#### _header.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _header.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _header.toIntArray() : _int[]_
##### Return

( _int[]_ )


---

## toJSON

---

#### _header.toJSON() : string
##### Return

( string )


---

#### _header.toJSON(arg0: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( string )


---

#### _header.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

#### _header.toJSON(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _header.toJSON(arg0: _List_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( string )


---

#### _header.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _header.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

#### _header.toJSON(arg0: _List_, arg1: _int_) : string
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

#### _header.toJSONObject(arg0: _Object_, arg1: _boolean_) : _Object_
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

#### _header.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : string
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

#### _header.toList() : _List_
##### Return

( _List_ )


---

#### _header.toList(arg0: _Class_) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Class_ |   |

##### Return

( _List_ )


---

## toLongArray

---

#### _header.toLongArray() : _long[]_
##### Return

( _long[]_ )


---

## toMap

---

#### _header.toMap() : _Map_
##### Return

( _Map_ )


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

#### _header.toStringArray() : _String[]_
##### Return

( _String[]_ )


---

## unset

---

#### _header.unset(arg0: string) : _Object_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Object_ )


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

#### _header.values() : _Collection_
##### Return

( _Collection_ )


---

## valuesToString

---

#### _header.valuesToString(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _header.valuesToString(arg0: string, arg1: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |

##### Return

( string )


---

#### _header.valuesToString(arg0: string, arg1: _String[]_, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _header.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _header.valuesToString(arg0: _Map_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _header.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |

##### Return

( string )


---

#### _header.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_, arg3: _[Values](../../objects/Values)_) : string
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

#### _header.valuesToString(arg0: _Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

