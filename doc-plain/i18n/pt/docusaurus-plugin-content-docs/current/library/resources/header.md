---
id: header
title: Header
sidebar_label: Header
---

Recurso de gestão do header HTTP.

Com o recurso Header pode obter qualquer parâmetro vindo no cabeçalho do pedido do browser, ou seja, obter qualquer informação que venha no header do HTTP.

Mas também pode definir parâmetros de resposta no Header, por exemplo definir a reposta do código de status HTTP ou o Content-Type, entre outros.
Principais funções:
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

#### _header.acceptJSON() : boolean
##### Retorno

( _boolean_ )


---

## add

---

#### _header.add(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.add(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## addAll

---

#### _header.addAll(index: int, c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _header.addAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _header.as(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.as(o: java.lang.Object, oDefault: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |
| **oDefault** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## asBoolean

---

#### _header.asBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(key: string, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## asByte

---

#### _header.asByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### _header.asByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _header.asByte(key: string, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

## asCalendar

---

#### _header.asCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.asCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.asCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.asCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## asDate

---

#### _header.asDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.asDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.asDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.asDate(key: string, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

## asDouble

---

#### _header.asDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(key: string, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

## asFile

---

#### _header.asFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### _header.asFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## asFloat

---

#### _header.asFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(key: string, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

## asHTMLDecode

---

#### _header.asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asHTMLEncode

---

#### _header.asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### _header.asInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.asInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.asInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.asInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

## asInt

---

#### _header.asInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.asInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.asInt(key: string, defaultValue: short) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _int_ )


---

## asList

---

#### _header.asList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## asLocalDate

---

#### _header.asLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### _header.asLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### _header.asLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## asLong

---

#### _header.asLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### _header.asLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### _header.asLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### _header.asLong(key: string, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

## asMap

---

#### _header.asMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.asMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.asMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.asMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## asSQLDate

---

#### _header.asSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.asSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.asSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.asSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## asSQLTime

---

#### _header.asSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.asSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.asSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.asSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### _header.asSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## asShort

---

#### _header.asShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### _header.asShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### _header.asShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### _header.asShort(key: string, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

## asString

---

#### _header.asString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### _header.asString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.asString(key: string, defaultValue: string, charsetName: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Retorno

( _string_ )


---

## asUID

---

#### _header.asUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## asUUID

---

#### _header.asUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## asValues

---

#### _header.asValues(indice: int) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índex para obter o objeto associado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

#### _header.asValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índex para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

#### _header.asValues(chave: string) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

#### _header.asValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

## baseFile

---

#### _header.baseFile(value: java.lang.Object, key: string, content: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |
| **key** | _string_ |   |
| **content** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## baseURL

---

#### _header.baseURL() : string
##### Retorno

( _string_ )


---

## cache

---

#### _header.cache(time: int) : [Header](/docs/library/resources/header)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **time** | _int_ |   |

##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## clear

---

#### _header.clear() : void
##### Retorno

( _void_ )


---

## clientIP

---

#### _header.clientIP() : string
##### Retorno

( _string_ )


---

## cloneJSON

---

#### _header.cloneJSON() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## compute

---

#### _header.compute(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## computeIfAbsent

---

#### _header.computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function.Function) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.Function_ |   |

##### Retorno

( _java.lang.Object_ )


---

## computeIfPresent

---

#### _header.computeIfPresent(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## contains

---

#### _header.contains(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _header.contains(key: string, value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsAll

---

#### _header.containsAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _header.containsKey(key: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _header.containsValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## contentType

---

#### _header.contentType() : string
##### Retorno

( _string_ )


---

#### _header.contentType(contentType: string) : [Header](/docs/library/resources/header)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contentType** | _string_ |   |

##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeCSS

---

#### _header.contentTypeCSS() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeHTML

---

#### _header.contentTypeHTML() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeJPG

---

#### _header.contentTypeJPG() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeJS

---

#### _header.contentTypeJS() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeJSON

---

#### _header.contentTypeJSON() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypeOctetStream

---

#### _header.contentTypeOctetStream() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypePDF

---

#### _header.contentTypePDF() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypePNG

---

#### _header.contentTypePNG() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## contentTypePlain

---

#### _header.contentTypePlain() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## downloadFile

---

#### _header.downloadFile(fileName: string) : [Header](/docs/library/resources/header)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fileName** | _string_ |   |

##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## ensureJail

---

#### _header.ensureJail(jailPath: string) : void
##### Descrição

Define a restrição de segurança em um diretório específico para os objetos processados do tipo de ficheiros, apenas pode ser definido uma única vez.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jailPath** | _string_ | Caminho onde será restringido os ficheiros. |

##### Retorno

( _void_ )


---

## entrySet

---

#### _header.entrySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### _header.filter(p: java.util.function.Predicate) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.filter(function: org.graalvm.polyglot.Value) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## find

---

#### _header.find(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.find(p: java.util.function.Predicate) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.find(function: org.graalvm.polyglot.Value) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.find(filter: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### _header.forEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _header.forEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _header.forEach(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _header.forceList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forceMap

---

#### _header.forceMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## fromJSON

---

#### _header.fromJSON(content: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.fromJSON(content: org.netuno.psamata.net.Remote$Response) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## get

---

#### _header.get(chave: int) : java.lang.Object
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _int_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### _header.get(chave: java.lang.Object) : java.lang.Object
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _java.lang.Object_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### _header.get(chave: string) : java.lang.Object
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### _header.get(chave: string, tipo: java.lang.Class) : java.lang.Object
##### Descrição

Obtém o objeto original associado a chave, mas convertido para o tipo da classe especificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave para obter o objeto associado. |
| **tipo** | _java.lang.Class_ | Classe que representa o tipo de objeto que deve ser convertido (_cast_). |

##### Retorno

( _java.lang.Object_ )

Objeto original convertido para o tipo da classe definida.

---

## getBoolean

---

#### _header.getBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(key: string, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## getByte

---

#### _header.getByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(key: string) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(key: string, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

## getCalendar

---

#### _header.getCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.getCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.getCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.getCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## getDate

---

#### _header.getDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.getDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.getDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.getDate(key: string, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

## getDouble

---

#### _header.getDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(key: string, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

## getFile

---

#### _header.getFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### _header.getFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## getFloat

---

#### _header.getFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(key: string, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

## getForceList

---

#### _header.getForceList() : boolean
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### _header.getForceMap() : boolean
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### _header.getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getHTMLEncode

---

#### _header.getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### _header.getInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.getInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.getInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.getInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

## getInt

---

#### _header.getInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.getInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.getInt(key: string) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _int_ )


---

#### _header.getInt(key: string, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

## getKeys

---

#### _header.getKeys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### _header.getList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## getLocalDate

---

#### _header.getLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### _header.getLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### _header.getLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## getLong

---

#### _header.getLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### _header.getLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### _header.getLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### _header.getLong(key: string, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

## getMap

---

#### _header.getMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.getMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.getMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _header.getMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## getOrDefault

---

#### _header.getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## getSQLDate

---

#### _header.getSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.getSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.getSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.getSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## getSQLTime

---

#### _header.getSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.getSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.getSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.getSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### _header.getSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## getShort

---

#### _header.getShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### _header.getShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### _header.getShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### _header.getShort(key: string, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

## getSize

---

#### _header.getSize() : int
##### Retorno

( _int_ )


---

## getString

---

#### _header.getString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### _header.getString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.getString(key: string, defaultValue: string, charsetName: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Retorno

( _string_ )


---

## getUID

---

#### _header.getUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## getURLCharacterEncoding

---

#### _header.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( _string_ )

Código da codificação dos caracteres.

---

## getUUID

---

#### _header.getUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## getValues

---

#### _header.getValues() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### _header.getValues(indice: int) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índice para obter o objeto associado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

#### _header.getValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índice para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

#### _header.getValues(chave: string) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

#### _header.getValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Objeto convertido para Values.

---

## has

---

#### _header.has(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _header.has(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _header.has(key: string, value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## hasKey

---

#### _header.hasKey(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _header.hasValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## host

---

#### _header.host() : string
##### Retorno

( _string_ )


---

## indexOf

---

#### _header.indexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _header.is(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isAcceptJSON

---

#### _header.isAcceptJSON() : boolean
##### Retorno

( _boolean_ )


---

## isCopy

---

#### _header.isCopy() : boolean
##### Retorno

( _boolean_ )


---

## isDelete

---

#### _header.isDelete() : boolean
##### Retorno

( _boolean_ )


---

## isEmpty

---

#### _header.isEmpty() : boolean
##### Retorno

( _boolean_ )


---

## isGet

---

#### _header.isGet() : boolean
##### Retorno

( _boolean_ )


---

## isHead

---

#### _header.isHead() : boolean
##### Retorno

( _boolean_ )


---

## isJail

---

#### _header.isJail() : boolean
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isLink

---

#### _header.isLink() : boolean
##### Retorno

( _boolean_ )


---

## isList

---

#### _header.isList() : boolean
##### Retorno

( _boolean_ )


---

#### _header.isList(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLock

---

#### _header.isLock() : boolean
##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _header.isLockedAsReadOnly() : boolean
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### _header.isMap() : boolean
##### Retorno

( _boolean_ )


---

#### _header.isMap(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _header.isMergeable(object: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isOptions

---

#### _header.isOptions() : boolean
##### Retorno

( _boolean_ )


---

## isPatch

---

#### _header.isPatch() : boolean
##### Retorno

( _boolean_ )


---

## isPost

---

#### _header.isPost() : boolean
##### Retorno

( _boolean_ )


---

## isPropFind

---

#### _header.isPropFind() : boolean
##### Retorno

( _boolean_ )


---

## isPurge

---

#### _header.isPurge() : boolean
##### Retorno

( _boolean_ )


---

## isPut

---

#### _header.isPut() : boolean
##### Retorno

( _boolean_ )


---

## isTrace

---

#### _header.isTrace() : boolean
##### Retorno

( _boolean_ )


---

## isUnlink

---

#### _header.isUnlink() : boolean
##### Retorno

( _boolean_ )


---

## isUnlock

---

#### _header.isUnlock() : boolean
##### Retorno

( _boolean_ )


---

## isView

---

#### _header.isView() : boolean
##### Retorno

( _boolean_ )


---

## iterator

---

#### _header.iterator() : java.util.Iterator
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### _header.join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## keySet

---

#### _header.keySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### _header.keys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### _header.keysSorted() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### _header.keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.keysToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## lastIndexOf

---

#### _header.lastIndexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### _header.length() : int
##### Retorno

( _int_ )


---

## list

---

#### _header.list() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### _header.list(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _header.listIterator() : java.util.ListIterator
##### Retorno

( _java.util.ListIterator_ )


---

#### _header.listIterator(index: int) : java.util.ListIterator
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _header.listOfValues() : java.util.List
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### _header.loadJSON(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### _header.loadJSON(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _header.loadProperties(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### _header.loadProperties(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _header.loadProperties(properties: java.util.Properties) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _header.loadPropertiesFromString(data: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _string_ |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### _header.lockAsReadOnly() : [Values](/docs/library/objects/Values)
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### _header.map() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### _header.merge(object: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## method

---

#### _header.method() : string
##### Retorno

( _string_ )


---

## newList

---

#### _header.newList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## newMap

---

#### _header.newMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## noCache

---

#### _header.noCache() : [Header](/docs/library/resources/header)
##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## of

---

#### _header.of(array: java.lang.Object[]) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.of(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.of(list: java.util.List) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.of(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofList

---

#### _header.ofList(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofMap

---

#### _header.ofMap(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## port

---

#### _header.port() : string
##### Retorno

( _string_ )


---

## push

---

#### _header.push(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## put

---

#### _header.put(key: java.lang.Object, value: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.put(key: string, value: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## putAll

---

#### _header.putAll(m: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **m** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _header.putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## rawHost

---

#### _header.rawHost() : string
##### Retorno

( _string_ )


---

## remove

---

#### _header.remove(i: int) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **i** | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.remove(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.remove(arg0: java.lang.Object, arg1: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## removeAll

---

#### _header.removeAll() : void
##### Retorno

( _void_ )


---

#### _header.removeAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### _header.replace(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## replaceAll

---

#### _header.replaceAll(arg0: java.util.function.BiFunction) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _header.replaceAll(operator: java.util.function.UnaryOperator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _header.replaceAll(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## response

---

#### _header.response() : [Values](/docs/library/objects/Values)
##### Descrição

Inicia uma nova instância do SMTP utilizando a configuração do STMP da chave `default`.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

A nova instância do recurso SMTP com base na configuração do STMP `default`.

---

## retainAll

---

#### _header.retainAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _header.safeString(object: java.lang.Object) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _string_ )


---

#### _header.safeString(object: java.lang.Object, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

## saveJSON

---

#### _header.saveJSON(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### _header.saveJSON(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _header.saveProperties(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### _header.saveProperties(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## scheme

---

#### _header.scheme() : string
##### Retorno

( _string_ )


---

## search

---

#### _header.search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.search(content: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _header.search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.search(content: string, splitter: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _header.search(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, content: string, splitter: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

## set

---

#### _header.set(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.set(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setForceList

---

#### _header.setForceList(forceList: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setForceMap

---

#### _header.setForceMap(forceMap: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfFalse

---

#### _header.setIfFalse(key: string, value: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfGreaterThanZero

---

#### _header.setIfGreaterThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfLowerThanZero

---

#### _header.setIfLowerThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfNotEmpty

---

#### _header.setIfNotEmpty(key: string, value: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfNotZero

---

#### _header.setIfNotZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: short) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfTrue

---

#### _header.setIfTrue(key: string, value: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setNull

---

#### _header.setNull(key: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _header.setURLCharacterEncoding(characterEncoding: string) : void
##### Descrição

Define a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **characterEncoding** | _string_ | Código da codificação dos caracteres. |

##### Retorno

( _void_ )


---

## size

---

#### _header.size() : int
##### Retorno

( _int_ )


---

## sizeOfList

---

#### _header.sizeOfList() : int
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### _header.sizeOfMap() : int
##### Retorno

( _int_ )


---

## sort

---

#### _header.sort(c: java.util.Comparator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _header.sort(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _header.spliterator() : java.util.Spliterator
##### Retorno

( _java.util.Spliterator_ )


---

## status

---

#### _header.status() : int
##### Retorno

( _int_ )


---

#### _header.status(httpStatus: int) : [Header](/docs/library/resources/header)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **httpStatus** | _int_ |   |

##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

#### _header.status(httpStatus: org.netuno.proteu.Proteu$HTTPStatus) : [Header](/docs/library/resources/header)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **httpStatus** | _org.netuno.proteu.Proteu$HTTPStatus_ |   |

##### Retorno

( _[Header](/docs/library/resources/header)_ )


---

## subList

---

#### _header.subList(fromIndex: int, toIndex: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fromIndex** | _int_ |   |
| **toIndex** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## toArray

---

#### _header.toArray() : java.lang.Object[]
##### Retorno

( _java.lang.Object[]_ )


---

#### _header.toArray(a: java.lang.Object[]) : java.lang.Object[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Retorno

( _java.lang.Object[]_ )


---

## toByteArray

---

#### _header.toByteArray() : byte[]
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### _header.toDoubleArray() : double[]
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### _header.toFloatArray() : float[]
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### _header.toFormMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.toFormMap(key: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _header.toFormMap(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## toIntArray

---

#### _header.toIntArray() : int[]
##### Retorno

( _int[]_ )


---

## toJSON

---

#### _header.toJSON() : string
##### Retorno

( _string_ )


---

#### _header.toJSON(htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _header.toJSON(htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _header.toJSON(indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _header.toJSON(values: java.util.List) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Retorno

( _string_ )


---

#### _header.toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _header.toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _header.toJSON(values: java.util.List, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

## toJSONObject

---

#### _header.toJSONObject(object: java.lang.Object, htmlEscape: boolean) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _java.lang.Object_ )


---

## toJSONString

---

#### _header.toJSONString(object: java.lang.Object, htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

## toList

---

#### _header.toList() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### _header.toList(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _header.toLongArray() : long[]
##### Retorno

( _long[]_ )


---

## toMap

---

#### _header.toMap() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### _header.toProperties() : string
##### Retorno

( _string_ )


---

## toShortArray

---

#### _header.toShortArray() : short[]
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### _header.toStringArray() : java.lang.String[]
##### Retorno

( _java.lang.String[]_ )


---

## typedForEach

---

#### _header.typedForEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _header.typedForEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

## unset

---

#### _header.unset(key: string) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### _header.unsetAll() : void
##### Retorno

( _void_ )


---

## uri

---

#### _header.uri() : string
##### Retorno

( _string_ )


---

## url

---

#### _header.url() : string
##### Retorno

( _string_ )


---

## values

---

#### _header.values() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### _header.valuesToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.valuesToString(splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### _header.valuesToString(splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _header.valuesToString(splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _header.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

