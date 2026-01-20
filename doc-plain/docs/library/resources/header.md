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
- [clientIP](#clientip)
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

#### _header.acceptJSON() : boolean
##### Return

( _boolean_ )


---

## add

---

#### _header.add(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.add(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## addAll

---

#### _header.addAll(index: int, c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### _header.addAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## as

---

#### _header.as(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.as(o: java.lang.Object, oDefault: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _header.asBoolean(index: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(index: int, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _header.asBoolean(key: string, defaultValue: boolean) : boolean
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

#### _header.asByte(index: int) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### _header.asByte(index: int, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### _header.asByte(key: string, defaultValue: byte) : byte
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

#### _header.asCalendar(index: int) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.asCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.asCalendar(key: string) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.asCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _header.asDate(index: int) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Date_ )


---

#### _header.asDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

#### _header.asDate(key: string) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### _header.asDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _header.asDouble(index: int) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### _header.asDouble(index: int, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### _header.asDouble(key: string) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### _header.asDouble(key: string, defaultValue: double) : double
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

#### _header.asFile(index: int) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

#### _header.asFile(key: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## asFloat

---

#### _header.asFloat(index: int) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### _header.asFloat(index: int, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### _header.asFloat(key: string) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### _header.asFloat(key: string, defaultValue: float) : float
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

#### _header.asHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asHTMLEncode

---

#### _header.asHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asInstant

---

#### _header.asInstant(index: int) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.Instant_ )


---

#### _header.asInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

#### _header.asInstant(key: string) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### _header.asInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _header.asInt(index: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### _header.asInt(index: int, defaultValue: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### _header.asInt(key: string, defaultValue: short) : int
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

#### _header.asList(index: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(index: int, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _header.asLocalDate(index: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(key: string) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _header.asLocalDateTime(index: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(key: string) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _header.asLocalTime(index: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(key: string) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _header.asLong(index: int) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### _header.asLong(index: int, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### _header.asLong(key: string) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### _header.asLong(key: string, defaultValue: long) : long
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

#### _header.asMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.asMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.asMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.asMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _header.asSQLDate(index: int) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Date_ )


---

#### _header.asSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

#### _header.asSQLDate(key: string) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### _header.asSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _header.asSQLTime(index: int) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Time_ )


---

#### _header.asSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

#### _header.asSQLTime(key: string) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### _header.asSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _header.asSQLTimestamp(index: int) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(key: string) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _header.asShort(index: int) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### _header.asShort(index: int, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### _header.asShort(key: string) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### _header.asShort(key: string, defaultValue: short) : short
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

#### _header.asString(index: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### _header.asString(index: int, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _header.asString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### _header.asString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _header.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _header.asUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _header.asUUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _header.asValues(index: int) : [Values](/docs/library/objects/Values)
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

#### _header.asValues(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _header.asValues(key: string) : [Values](/docs/library/objects/Values)
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

#### _header.asValues(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _header.baseFile(value: java.lang.Object, key: string, content: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |
| **key** | _string_ |   |
| **content** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## baseURL

---

#### _header.baseURL() : string
##### Return

( _string_ )


---

## cache

---

#### _header.cache(time: int) : [Header](/docs/library/resources/header)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **time** | _int_ |   |

##### Return

( _[Header](/docs/library/resources/header)_ )


---

## clear

---

#### _header.clear() : void
##### Return

( _void_ )


---

## clientIP

---

#### _header.clientIP() : string
##### Return

( _string_ )


---

## cloneJSON

---

#### _header.cloneJSON() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## compute

---

#### _header.compute(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _header.computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function.Function) : java.lang.Object
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

#### _header.computeIfPresent(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _header.contains(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _header.contains(key: string, value: java.lang.Object) : boolean
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

#### _header.containsAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### _header.containsKey(key: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### _header.containsValue(value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## contentType

---

#### _header.contentType() : string
##### Return

( _string_ )


---

#### _header.contentType(contentType: string) : [Header](/docs/library/resources/header)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **contentType** | _string_ |   |

##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeCSS

---

#### _header.contentTypeCSS() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeHTML

---

#### _header.contentTypeHTML() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeJPG

---

#### _header.contentTypeJPG() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeJS

---

#### _header.contentTypeJS() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeJSON

---

#### _header.contentTypeJSON() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeOctetStream

---

#### _header.contentTypeOctetStream() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypePDF

---

#### _header.contentTypePDF() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypePNG

---

#### _header.contentTypePNG() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## contentTypePlain

---

#### _header.contentTypePlain() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## downloadFile

---

#### _header.downloadFile(fileName: string) : [Header](/docs/library/resources/header)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fileName** | _string_ |   |

##### Return

( _[Header](/docs/library/resources/header)_ )


---

## ensureJail

---

#### _header.ensureJail(jailPath: string) : void
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

#### _header.entrySet() : java.util.Set
##### Return

( _java.util.Set_ )


---

## filter

---

#### _header.filter(p: java.util.function.Predicate) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.filter(function: org.graalvm.polyglot.Value) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## find

---

#### _header.find(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.find(p: java.util.function.Predicate) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.find(function: org.graalvm.polyglot.Value) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.find(filter: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### _header.forEach(action: java.util.function.BiConsumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _header.forEach(action: java.util.function.Consumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### _header.forEach(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### _header.forceList() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## forceMap

---

#### _header.forceMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## fromJSON

---

#### _header.fromJSON(content: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.fromJSON(content: org.netuno.psamata.net.Remote$Response) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## get

---

#### _header.get(key: int) : java.lang.Object
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

#### _header.get(key: java.lang.Object) : java.lang.Object
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

#### _header.get(key: string) : java.lang.Object
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

#### _header.get(key: string, type: java.lang.Class) : java.lang.Object
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

#### _header.getBoolean(index: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(index: int, defaultValue: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _header.getBoolean(key: string, defaultValue: boolean) : boolean
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

#### _header.getByte(index: int) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### _header.getByte(index: int, defaultValue: byte) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### _header.getByte(key: string) : byte
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _byte_ )


---

#### _header.getByte(key: string, defaultValue: byte) : byte
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

#### _header.getCalendar(index: int) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.getCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.getCalendar(key: string) : java.util.Calendar
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### _header.getCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _header.getDate(index: int) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.Date_ )


---

#### _header.getDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

#### _header.getDate(key: string) : java.util.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### _header.getDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _header.getDouble(index: int) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### _header.getDouble(index: int, defaultValue: double) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### _header.getDouble(key: string) : double
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### _header.getDouble(key: string, defaultValue: double) : double
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

#### _header.getFile(index: int) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

#### _header.getFile(key: string) : [File](/docs/library/objects/File)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](/docs/library/objects/File)_ )


---

## getFloat

---

#### _header.getFloat(index: int) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### _header.getFloat(index: int, defaultValue: float) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### _header.getFloat(key: string) : float
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### _header.getFloat(key: string, defaultValue: float) : float
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

#### _header.getForceList() : boolean
##### Return

( _boolean_ )


---

## getForceMap

---

#### _header.getForceMap() : boolean
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### _header.getHTMLDecode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getHTMLEncode

---

#### _header.getHTMLEncode(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getInstant

---

#### _header.getInstant(index: int) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.Instant_ )


---

#### _header.getInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

#### _header.getInstant(key: string) : java.time.Instant
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### _header.getInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _header.getInt(index: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### _header.getInt(index: int, defaultValue: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### _header.getInt(key: string) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _int_ )


---

#### _header.getInt(key: string, defaultValue: int) : int
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

#### _header.getKeys() : java.util.Set
##### Return

( _java.util.Set_ )


---

## getList

---

#### _header.getList(index: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(index: int, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string, claz: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _header.getLocalDate(index: int) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(key: string) : java.time.LocalDate
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _header.getLocalDateTime(index: int) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(key: string) : java.time.LocalDateTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _header.getLocalTime(index: int) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(key: string) : java.time.LocalTime
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _header.getLong(index: int) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### _header.getLong(index: int, defaultValue: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### _header.getLong(key: string) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### _header.getLong(key: string, defaultValue: long) : long
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

#### _header.getMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.getMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.getMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.getMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _header.getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### _header.getSQLDate(index: int) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Date_ )


---

#### _header.getSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

#### _header.getSQLDate(key: string) : java.sql.Date
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### _header.getSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _header.getSQLTime(index: int) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Time_ )


---

#### _header.getSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

#### _header.getSQLTime(key: string) : java.sql.Time
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### _header.getSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _header.getSQLTimestamp(index: int) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(key: string) : java.sql.Timestamp
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _header.getShort(index: int) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### _header.getShort(index: int, defaultValue: short) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### _header.getShort(key: string) : short
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### _header.getShort(key: string, defaultValue: short) : short
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

#### _header.getSize() : int
##### Return

( _int_ )


---

## getString

---

#### _header.getString(index: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### _header.getString(index: int, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _header.getString(key: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### _header.getString(key: string, defaultValue: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### _header.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _header.getUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _header.getURLCharacterEncoding() : string
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( _string_ )

Character encoding code.

---

## getUUID

---

#### _header.getUUID(key: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: string) : java.util.UUID
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _header.getValues() : java.util.Collection
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### _header.getValues(index: int) : [Values](/docs/library/objects/Values)
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

#### _header.getValues(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _header.getValues(key: string) : [Values](/docs/library/objects/Values)
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

#### _header.getValues(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _header.has(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### _header.has(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### _header.has(key: string, value: java.lang.Object) : boolean
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

#### _header.hasKey(key: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### _header.hasValue(value: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## host

---

#### _header.host() : string
##### Return

( _string_ )


---

## indexOf

---

#### _header.indexOf(o: java.lang.Object) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### _header.is(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isAcceptJSON

---

#### _header.isAcceptJSON() : boolean
##### Return

( _boolean_ )


---

## isCopy

---

#### _header.isCopy() : boolean
##### Return

( _boolean_ )


---

## isDelete

---

#### _header.isDelete() : boolean
##### Return

( _boolean_ )


---

## isEmpty

---

#### _header.isEmpty() : boolean
##### Return

( _boolean_ )


---

## isGet

---

#### _header.isGet() : boolean
##### Return

( _boolean_ )


---

## isHead

---

#### _header.isHead() : boolean
##### Return

( _boolean_ )


---

## isJail

---

#### _header.isJail() : boolean
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isLink

---

#### _header.isLink() : boolean
##### Return

( _boolean_ )


---

## isList

---

#### _header.isList() : boolean
##### Return

( _boolean_ )


---

#### _header.isList(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLock

---

#### _header.isLock() : boolean
##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _header.isLockedAsReadOnly() : boolean
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### _header.isMap() : boolean
##### Return

( _boolean_ )


---

#### _header.isMap(o: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### _header.isMergeable(object: java.lang.Object) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isOptions

---

#### _header.isOptions() : boolean
##### Return

( _boolean_ )


---

## isPatch

---

#### _header.isPatch() : boolean
##### Return

( _boolean_ )


---

## isPost

---

#### _header.isPost() : boolean
##### Return

( _boolean_ )


---

## isPropFind

---

#### _header.isPropFind() : boolean
##### Return

( _boolean_ )


---

## isPurge

---

#### _header.isPurge() : boolean
##### Return

( _boolean_ )


---

## isPut

---

#### _header.isPut() : boolean
##### Return

( _boolean_ )


---

## isTrace

---

#### _header.isTrace() : boolean
##### Return

( _boolean_ )


---

## isUnlink

---

#### _header.isUnlink() : boolean
##### Return

( _boolean_ )


---

## isUnlock

---

#### _header.isUnlock() : boolean
##### Return

( _boolean_ )


---

## isView

---

#### _header.isView() : boolean
##### Return

( _boolean_ )


---

## iterator

---

#### _header.iterator() : java.util.Iterator
##### Return

( _java.util.Iterator_ )


---

## join

---

#### _header.join(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

## keySet

---

#### _header.keySet() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keys

---

#### _header.keys() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### _header.keysSorted() : java.util.Set
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### _header.keysToString(splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _header.keysToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
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

#### _header.lastIndexOf(o: java.lang.Object) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### _header.length() : int
##### Return

( _int_ )


---

## list

---

#### _header.list() : java.util.List
##### Return

( _java.util.List_ )


---

#### _header.list(cls: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### _header.listIterator() : java.util.ListIterator
##### Return

( _java.util.ListIterator_ )


---

#### _header.listIterator(index: int) : java.util.ListIterator
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _header.listOfValues() : java.util.List
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### _header.loadJSON(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### _header.loadJSON(in: java.io.Reader) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### _header.loadProperties(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### _header.loadProperties(in: java.io.Reader) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### _header.loadProperties(properties: java.util.Properties) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### _header.loadPropertiesFromString(data: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _string_ |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### _header.lockAsReadOnly() : [Values](/docs/library/objects/Values)
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](/docs/library/objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### _header.map() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### _header.merge(object: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## method

---

#### _header.method() : string
##### Return

( _string_ )


---

## newList

---

#### _header.newList() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## newMap

---

#### _header.newMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## noCache

---

#### _header.noCache() : [Header](/docs/library/resources/header)
##### Return

( _[Header](/docs/library/resources/header)_ )


---

## of

---

#### _header.of(array: java.lang.Object[]) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.of(o: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.of(list: java.util.List) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.of(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## ofList

---

#### _header.ofList(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## ofMap

---

#### _header.ofMap(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## port

---

#### _header.port() : string
##### Return

( _string_ )


---

## push

---

#### _header.push(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## put

---

#### _header.put(key: java.lang.Object, value: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.put(key: string, value: java.lang.Object) : java.lang.Object
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

#### _header.putAll(m: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **m** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### _header.putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## rawHost

---

#### _header.rawHost() : string
##### Return

( _string_ )


---

## remove

---

#### _header.remove(i: int) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **i** | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.remove(o: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.remove(arg0: java.lang.Object, arg1: java.lang.Object) : boolean
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

#### _header.removeAll() : void
##### Return

( _void_ )


---

#### _header.removeAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### _header.replace(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### _header.replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object) : boolean
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

#### _header.replaceAll(arg0: java.util.function.BiFunction) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### _header.replaceAll(operator: java.util.function.UnaryOperator) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### _header.replaceAll(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## response

---

#### _header.response() : [Values](/docs/library/objects/Values)
##### Description

Starts a new instance of SMTP using the STMP configuration of the `default` key.

##### Return

( _[Values](/docs/library/objects/Values)_ )

The new instance of the SMTP resource based on the `default` STMP configuration.

---

## retainAll

---

#### _header.retainAll(c: java.util.Collection) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### _header.safeString(object: java.lang.Object) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _string_ )


---

#### _header.safeString(object: java.lang.Object, defaultValue: string) : string
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

#### _header.saveJSON(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### _header.saveJSON(out: java.io.Writer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### _header.saveProperties(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### _header.saveProperties(out: java.io.Writer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## scheme

---

#### _header.scheme() : string
##### Return

( _string_ )


---

## search

---

#### _header.search(content: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _string_ )


---

#### _header.search(content: string, ignoreCase: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### _header.search(content: string, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _header.search(content: string, splitter: string, ignoreCase: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### _header.search(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, content: string, splitter: string, ignoreCase: boolean) : string
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

#### _header.set(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.set(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _header.setForceList(forceList: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setForceMap

---

#### _header.setForceMap(forceMap: boolean) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setIfFalse

---

#### _header.setIfFalse(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _header.setIfGreaterThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _header.setIfLowerThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _header.setIfNotEmpty(key: string, value: string) : [Values](/docs/library/objects/Values)
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

#### _header.setIfNotZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _header.setIfTrue(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _header.setNull(key: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _header.setURLCharacterEncoding(characterEncoding: string) : void
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

#### _header.size() : int
##### Return

( _int_ )


---

## sizeOfList

---

#### _header.sizeOfList() : int
##### Return

( _int_ )


---

## sizeOfMap

---

#### _header.sizeOfMap() : int
##### Return

( _int_ )


---

## sort

---

#### _header.sort(c: java.util.Comparator) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### _header.sort(function: org.graalvm.polyglot.Value) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### _header.spliterator() : java.util.Spliterator
##### Return

( _java.util.Spliterator_ )


---

## status

---

#### _header.status() : int
##### Return

( _int_ )


---

#### _header.status(httpStatus: int) : [Header](/docs/library/resources/header)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **httpStatus** | _int_ |   |

##### Return

( _[Header](/docs/library/resources/header)_ )


---

#### _header.status(httpStatus: org.netuno.proteu.Proteu$HTTPStatus) : [Header](/docs/library/resources/header)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **httpStatus** | _org.netuno.proteu.Proteu$HTTPStatus_ |   |

##### Return

( _[Header](/docs/library/resources/header)_ )


---

## subList

---

#### _header.subList(fromIndex: int, toIndex: int) : java.util.List
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

#### _header.toArray() : java.lang.Object[]
##### Return

( _java.lang.Object[]_ )


---

#### _header.toArray(a: java.lang.Object[]) : java.lang.Object[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Return

( _java.lang.Object[]_ )


---

## toByteArray

---

#### _header.toByteArray() : byte[]
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### _header.toDoubleArray() : double[]
##### Return

( _double[]_ )


---

## toFloatArray

---

#### _header.toFloatArray() : float[]
##### Return

( _float[]_ )


---

## toFormMap

---

#### _header.toFormMap() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.toFormMap(key: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.toFormMap(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## toIntArray

---

#### _header.toIntArray() : int[]
##### Return

( _int[]_ )


---

## toJSON

---

#### _header.toJSON() : string
##### Return

( _string_ )


---

#### _header.toJSON(htmlEscape: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### _header.toJSON(htmlEscape: boolean, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _header.toJSON(indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _header.toJSON(values: java.util.List) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Return

( _string_ )


---

#### _header.toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### _header.toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### _header.toJSON(values: java.util.List, indentFactor: int) : string
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

#### _header.toJSONObject(object: java.lang.Object, htmlEscape: boolean) : java.lang.Object
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

#### _header.toJSONString(object: java.lang.Object, htmlEscape: boolean, indentFactor: int) : string
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

#### _header.toList() : java.util.List
##### Return

( _java.util.List_ )


---

#### _header.toList(cls: java.lang.Class) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### _header.toLongArray() : long[]
##### Return

( _long[]_ )


---

## toMap

---

#### _header.toMap() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### _header.toProperties() : string
##### Return

( _string_ )


---

## toShortArray

---

#### _header.toShortArray() : short[]
##### Return

( _short[]_ )


---

## toStringArray

---

#### _header.toStringArray() : java.lang.String[]
##### Return

( _java.lang.String[]_ )


---

## typedForEach

---

#### _header.typedForEach(action: java.util.function.BiConsumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### _header.typedForEach(action: java.util.function.Consumer) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

## unset

---

#### _header.unset(key: string) : java.lang.Object
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### _header.unsetAll() : void
##### Return

( _void_ )


---

## uri

---

#### _header.uri() : string
##### Return

( _string_ )


---

## url

---

#### _header.url() : string
##### Return

( _string_ )


---

## values

---

#### _header.values() : java.util.Collection
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
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _header.valuesToString(splitter: string, excludes: java.lang.String[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### _header.valuesToString(splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _header.valuesToString(splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
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

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

