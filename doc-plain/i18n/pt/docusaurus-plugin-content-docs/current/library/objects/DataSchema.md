---
id: DataSchema
title: DataSchema
sidebar_label: DataSchema
---

Gere a construção dinâmica do OpenAPI Schema e é utilizada nos scripts que ficam em `server/services/_schema`.

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

#### add(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### add(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## addAll

---

#### addAll(index: int, c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### addAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### as(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### as(o: java.lang.Object, oDefault: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### asBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### asBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### asBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### asBoolean(key: string, defaultValue: boolean) : boolean
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

#### asByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### asByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### asByte(key: string, defaultValue: byte) : byte
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

#### asCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### asCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### asCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### asCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### asDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### asDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### asDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### asDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### asDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### asDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### asDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### asDouble(key: string, defaultValue: double) : double
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

#### asFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### asFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## asFloat

---

#### asFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### asFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### asFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### asFloat(key: string, defaultValue: float) : float
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

#### asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asHTMLEncode

---

#### asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### asInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### asInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### asInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### asInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### asInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### asInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### asInt(key: string, defaultValue: short) : int
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

#### asList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### asLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### asLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### asLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### asLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### asLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### asLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### asLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### asLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### asLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### asLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### asLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### asLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### asLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### asLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### asLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### asLong(key: string, defaultValue: long) : long
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

#### asMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### asMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### asMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### asMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### asSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### asSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### asSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### asSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### asSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### asSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### asSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### asSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### asSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### asSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### asSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### asSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### asShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### asShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### asShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### asShort(key: string, defaultValue: short) : short
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

#### asString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### asString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### asString(key: string, defaultValue: string, charsetName: string) : string
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

#### asUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### asUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### asValues(indice: int) : [Values](/docs/library/objects/Values)
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

#### asValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### asValues(chave: string) : [Values](/docs/library/objects/Values)
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

#### asValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### baseFile(value: java.lang.Object, key: string, content: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |
| **key** | _string_ |   |
| **content** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## clear

---

#### clear() : void
##### Retorno

( _void_ )


---

## cloneJSON

---

#### cloneJSON() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## compute

---

#### compute(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function.Function) : java.lang.Object
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

#### computeIfPresent(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### contains(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### contains(key: string, value: java.lang.Object) : boolean
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

#### containsAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### containsKey(key: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### containsValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## ensureJail

---

#### ensureJail(jailPath: string) : void
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

#### entrySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### filter(p: java.util.function.Predicate) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### filter(function: org.graalvm.polyglot.Value) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## find

---

#### find(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### find(p: java.util.function.Predicate) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### find(function: org.graalvm.polyglot.Value) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### find(filter: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### forEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### forEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### forEach(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### forceList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forceMap

---

#### forceMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## fromJSON

---

#### fromJSON(content: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### fromJSON(content: org.netuno.psamata.net.Remote$Response) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## get

---

#### get(chave: int) : java.lang.Object
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

#### get(chave: java.lang.Object) : java.lang.Object
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

#### get(chave: string) : java.lang.Object
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

#### get(chave: string, tipo: java.lang.Class) : java.lang.Object
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

#### getBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### getBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### getBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### getBoolean(key: string, defaultValue: boolean) : boolean
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

#### getByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### getByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### getByte(key: string) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _byte_ )


---

#### getByte(key: string, defaultValue: byte) : byte
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

#### getCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### getCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### getCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### getCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### getDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### getDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### getDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### getDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### getDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### getDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### getDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### getDouble(key: string, defaultValue: double) : double
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

#### getFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### getFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## getFloat

---

#### getFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### getFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### getFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### getFloat(key: string, defaultValue: float) : float
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

#### getForceList() : boolean
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### getForceMap() : boolean
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getHTMLEncode

---

#### getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### getInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### getInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### getInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### getInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### getInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### getInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### getInt(key: string) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _int_ )


---

#### getInt(key: string, defaultValue: int) : int
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

#### getKeys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### getList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### getLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### getLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### getLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### getLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### getLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### getLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### getLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### getLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### getLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### getLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### getLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### getLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### getLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### getLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### getLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### getLong(key: string, defaultValue: long) : long
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

#### getMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### getMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### getMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### getMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## getMethod

---

#### getMethod() : string
##### Retorno

( _string_ )


---

## getOrDefault

---

#### getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### getSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### getSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### getSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### getSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### getSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### getSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### getSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### getSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### getSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### getSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### getSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### getSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## getService

---

#### getService() : string
##### Retorno

( _string_ )


---

## getShort

---

#### getShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### getShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### getShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### getShort(key: string, defaultValue: short) : short
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

#### getSize() : int
##### Retorno

( _int_ )


---

## getStatusCode

---

#### getStatusCode() : int
##### Retorno

( _int_ )


---

## getString

---

#### getString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### getString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### getString(key: string, defaultValue: string, charsetName: string) : string
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

#### getUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( _string_ )

Código da codificação dos caracteres.

---

## getUUID

---

#### getUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### getValues() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### getValues(indice: int) : [Values](/docs/library/objects/Values)
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

#### getValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### getValues(chave: string) : [Values](/docs/library/objects/Values)
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

#### getValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### has(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### has(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### has(key: string, value: java.lang.Object) : boolean
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

#### hasKey(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### hasValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## in

---

#### in() : boolean
##### Retorno

( _boolean_ )


---

#### in(in: boolean) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _boolean_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## indexOf

---

#### indexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### is(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### isEmpty() : boolean
##### Retorno

( _boolean_ )


---

## isIn

---

#### isIn() : boolean
##### Retorno

( _boolean_ )


---

## isJail

---

#### isJail() : boolean
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### isList() : boolean
##### Retorno

( _boolean_ )


---

#### isList(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### isLockedAsReadOnly() : boolean
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### isMap() : boolean
##### Retorno

( _boolean_ )


---

#### isMap(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### isMergeable(object: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMethod

---

#### isMethod(otherMethod: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **otherMethod** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isOut

---

#### isOut() : boolean
##### Retorno

( _boolean_ )


---

## iterator

---

#### iterator() : java.util.Iterator
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## keySet

---

#### keySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### keys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### keysSorted() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### keysToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
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

#### lastIndexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### length() : int
##### Retorno

( _int_ )


---

## list

---

#### list() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### list(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### listIterator() : java.util.ListIterator
##### Retorno

( _java.util.ListIterator_ )


---

#### listIterator(index: int) : java.util.ListIterator
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### listOfValues() : java.util.List
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### loadJSON(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### loadJSON(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### loadProperties(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### loadProperties(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### loadProperties(properties: java.util.Properties) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### loadPropertiesFromString(data: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _string_ |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### lockAsReadOnly() : [Values](/docs/library/objects/Values)
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### map() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### merge(object: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction) : java.lang.Object
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

#### method() : string
##### Retorno

( _string_ )


---

#### method(method: string) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **method** | _string_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## newList

---

#### newList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## newMap

---

#### newMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## of

---

#### of(array: java.lang.Object[]) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### of(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### of(list: java.util.List) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### of(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofList

---

#### ofList(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofMap

---

#### ofMap(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## out

---

#### out() : boolean
##### Retorno

( _boolean_ )


---

#### out(out: boolean) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _boolean_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## push

---

#### push(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## put

---

#### put(key: java.lang.Object, value: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### put(key: string, value: java.lang.Object) : java.lang.Object
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

#### putAll(m: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **m** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## remove

---

#### remove(i: int) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **i** | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### remove(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### remove(arg0: java.lang.Object, arg1: java.lang.Object) : boolean
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

#### removeAll() : void
##### Retorno

( _void_ )


---

#### removeAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### replace(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object) : boolean
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

#### replaceAll(arg0: java.util.function.BiFunction) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### replaceAll(operator: java.util.function.UnaryOperator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### replaceAll(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### retainAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### safeString(object: java.lang.Object) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _string_ )


---

#### safeString(object: java.lang.Object, defaultValue: string) : string
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

#### saveJSON(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### saveJSON(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### saveProperties(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### saveProperties(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _string_ )


---

#### search(content: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### search(content: string, splitter: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### search(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, content: string, splitter: string, ignoreCase: boolean) : string
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

## service

---

#### service() : string
##### Retorno

( _string_ )


---

#### service(service: string) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **service** | _string_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## set

---

#### set(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### set(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### setForceList(forceList: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setForceMap

---

#### setForceMap(forceMap: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfFalse

---

#### setIfFalse(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### setIfGreaterThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### setIfLowerThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### setIfNotEmpty(key: string, value: string) : [Values](/docs/library/objects/Values)
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

#### setIfNotZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfNotZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfNotZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfNotZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### setIfNotZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### setIfTrue(key: string, value: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIn

---

#### setIn(in: boolean) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _boolean_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## setMethod

---

#### setMethod(method: string) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **method** | _string_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## setNull

---

#### setNull(key: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setOut

---

#### setOut(out: boolean) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _boolean_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## setService

---

#### setService(service: string) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **service** | _string_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## setStatusCode

---

#### setStatusCode(statusCode: int) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **statusCode** | _int_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## setURLCharacterEncoding

---

#### setURLCharacterEncoding(characterEncoding: string) : void
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

#### size() : int
##### Retorno

( _int_ )


---

## sizeOfList

---

#### sizeOfList() : int
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### sizeOfMap() : int
##### Retorno

( _int_ )


---

## sort

---

#### sort(c: java.util.Comparator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### sort(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### spliterator() : java.util.Spliterator
##### Retorno

( _java.util.Spliterator_ )


---

## statusCode

---

#### statusCode() : int
##### Retorno

( _int_ )


---

#### statusCode(statusCode: int) : [DataSchema](/docs/library/objects/DataSchema)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **statusCode** | _int_ |   |

##### Retorno

( _[DataSchema](/docs/library/objects/DataSchema)_ )


---

## subList

---

#### subList(fromIndex: int, toIndex: int) : java.util.List
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

#### toArray() : java.lang.Object[]
##### Retorno

( _java.lang.Object[]_ )


---

#### toArray(a: java.lang.Object[]) : java.lang.Object[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Retorno

( _java.lang.Object[]_ )


---

## toByteArray

---

#### toByteArray() : byte[]
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### toDoubleArray() : double[]
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### toFloatArray() : float[]
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### toFormMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### toFormMap(key: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### toFormMap(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## toIntArray

---

#### toIntArray() : int[]
##### Retorno

( _int[]_ )


---

## toJSON

---

#### toJSON() : string
##### Retorno

( _string_ )


---

#### toJSON(htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### toJSON(htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### toJSON(indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### toJSON(values: java.util.List) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Retorno

( _string_ )


---

#### toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### toJSON(values: java.util.List, indentFactor: int) : string
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

#### toJSONObject(object: java.lang.Object, htmlEscape: boolean) : java.lang.Object
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

#### toJSONString(object: java.lang.Object, htmlEscape: boolean, indentFactor: int) : string
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

#### toList() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### toList(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### toLongArray() : long[]
##### Retorno

( _long[]_ )


---

## toMap

---

#### toMap() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### toProperties() : string
##### Retorno

( _string_ )


---

## toShortArray

---

#### toShortArray() : short[]
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### toStringArray() : java.lang.String[]
##### Retorno

( _java.lang.String[]_ )


---

## typedForEach

---

#### typedForEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### typedForEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

## unset

---

#### unset(key: string) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### unsetAll() : void
##### Retorno

( _void_ )


---

## values

---

#### values() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### valuesToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### valuesToString(splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### valuesToString(splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### valuesToString(splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
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

#### valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

