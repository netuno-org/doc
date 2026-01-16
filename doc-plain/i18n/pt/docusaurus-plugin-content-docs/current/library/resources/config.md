---
id: config
title: Config
sidebar_label: Config
---

Com o recurso Config pode partilhar informação durante o processamento, sendo possível acessar os seus parâmetros em qualquer altura do ciclo de vida do pedido.

Por exemplo, quando um pedido para processar um serviço chega ao Netuno é executado uma série de scripts da aplicação e em qualquer um destes scripts é possível partilhar informação de forma centralizada com o Config.

```javascript
// Adiciona uma configuração
_config.set('admin-mail', 'admin@netuno.org');

// Pega o valor da configuração
const adminMail = _config.getString('admin-mail');
```

---

## add

---

#### _config.add(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.add(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## addAll

---

#### _config.addAll(index: int, c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _config.addAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _config.as(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.as(o: java.lang.Object, oDefault: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.asBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(key: string, defaultValue: boolean) : boolean
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

#### _config.asByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### _config.asByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _config.asByte(key: string, defaultValue: byte) : byte
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

#### _config.asCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.asCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.asCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.asCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _config.asDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.asDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.asDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.asDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _config.asDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(key: string, defaultValue: double) : double
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

#### _config.asFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### _config.asFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## asFloat

---

#### _config.asFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(key: string, defaultValue: float) : float
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

#### _config.asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asHTMLEncode

---

#### _config.asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### _config.asInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.asInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.asInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.asInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _config.asInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.asInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.asInt(key: string, defaultValue: short) : int
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

#### _config.asList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _config.asLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _config.asLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _config.asLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _config.asLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(key: string, defaultValue: long) : long
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

#### _config.asMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.asMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.asMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.asMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _config.asSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.asSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.asSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.asSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _config.asSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.asSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.asSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.asSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _config.asSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _config.asShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(key: string, defaultValue: short) : short
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

#### _config.asString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _config.asUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.asUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.asValues(indice: int) : [Values](/docs/library/objects/Values)
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

#### _config.asValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.asValues(chave: string) : [Values](/docs/library/objects/Values)
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

#### _config.asValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.baseFile(value: java.lang.Object, key: string, content: string) : [File](/docs/library/objects/File)
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

#### _config.clear() : void
##### Retorno

( _void_ )


---

## cloneJSON

---

#### _config.cloneJSON() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## compute

---

#### _config.compute(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _config.computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function.Function) : java.lang.Object
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

#### _config.computeIfPresent(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _config.contains(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.contains(key: string, value: java.lang.Object) : boolean
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

#### _config.containsAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _config.containsKey(key: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _config.containsValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## ensureJail

---

#### _config.ensureJail(jailPath: string) : void
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

#### _config.entrySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### _config.filter(p: java.util.function.Predicate) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.filter(function: org.graalvm.polyglot.Value) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## find

---

#### _config.find(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.find(p: java.util.function.Predicate) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.find(function: org.graalvm.polyglot.Value) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.find(filter: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### _config.forEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _config.forceList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forceMap

---

#### _config.forceMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## fromJSON

---

#### _config.fromJSON(content: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.fromJSON(content: org.netuno.psamata.net.Remote$Response) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## get

---

#### _config.get(chave: int) : java.lang.Object
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

#### _config.get(chave: java.lang.Object) : java.lang.Object
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

#### _config.get(chave: string) : java.lang.Object
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

#### _config.get(chave: string, tipo: java.lang.Class) : java.lang.Object
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

#### _config.getBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(key: string, defaultValue: boolean) : boolean
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

#### _config.getByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(key: string) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(key: string, defaultValue: byte) : byte
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

#### _config.getCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.getCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.getCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.getCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _config.getDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.getDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.getDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.getDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _config.getDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(key: string, defaultValue: double) : double
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

#### _config.getFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### _config.getFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## getFloat

---

#### _config.getFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(key: string, defaultValue: float) : float
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

#### _config.getForceList() : boolean
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### _config.getForceMap() : boolean
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### _config.getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getHTMLEncode

---

#### _config.getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### _config.getInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.getInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.getInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.getInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _config.getInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(key: string) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(key: string, defaultValue: int) : int
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

#### _config.getKeys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### _config.getList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _config.getLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _config.getLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _config.getLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _config.getLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(key: string, defaultValue: long) : long
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

#### _config.getMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.getMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.getMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _config.getMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _config.getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### _config.getSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.getSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.getSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.getSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _config.getSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.getSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.getSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.getSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _config.getSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _config.getShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(key: string, defaultValue: short) : short
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

#### _config.getSize() : int
##### Retorno

( _int_ )


---

## getString

---

#### _config.getString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _config.getUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( _string_ )

Código da codificação dos caracteres.

---

## getUUID

---

#### _config.getUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _config.getValues() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### _config.getValues(indice: int) : [Values](/docs/library/objects/Values)
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

#### _config.getValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.getValues(chave: string) : [Values](/docs/library/objects/Values)
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

#### _config.getValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.has(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.has(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _config.has(key: string, value: java.lang.Object) : boolean
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

#### _config.hasKey(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _config.hasValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### _config.indexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _config.is(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### _config.isEmpty() : boolean
##### Retorno

( _boolean_ )


---

## isJail

---

#### _config.isJail() : boolean
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### _config.isList() : boolean
##### Retorno

( _boolean_ )


---

#### _config.isList(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _config.isLockedAsReadOnly() : boolean
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### _config.isMap() : boolean
##### Retorno

( _boolean_ )


---

#### _config.isMap(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _config.isMergeable(object: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## iterator

---

#### _config.iterator() : java.util.Iterator
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### _config.join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## keySet

---

#### _config.keySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### _config.keys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### _config.keysSorted() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### _config.keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.keysToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
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

#### _config.lastIndexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### _config.length() : int
##### Retorno

( _int_ )


---

## list

---

#### _config.list() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### _config.list(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _config.listIterator() : java.util.ListIterator
##### Retorno

( _java.util.ListIterator_ )


---

#### _config.listIterator(index: int) : java.util.ListIterator
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _config.listOfValues() : java.util.List
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### _config.loadJSON(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### _config.loadJSON(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(properties: java.util.Properties) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _config.loadPropertiesFromString(data: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _string_ |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### _config.lockAsReadOnly() : [Values](/docs/library/objects/Values)
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### _config.map() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### _config.merge(object: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## newList

---

#### _config.newList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## newMap

---

#### _config.newMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## of

---

#### _config.of(array: java.lang.Object[]) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.of(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.of(list: java.util.List) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.of(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofList

---

#### _config.ofList(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofMap

---

#### _config.ofMap(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## push

---

#### _config.push(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## put

---

#### _config.put(key: java.lang.Object, value: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.put(key: string, value: java.lang.Object) : java.lang.Object
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

#### _config.putAll(m: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **m** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _config.putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### _config.remove(i: int) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **i** | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.remove(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.remove(arg0: java.lang.Object, arg1: java.lang.Object) : boolean
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

#### _config.removeAll() : void
##### Retorno

( _void_ )


---

#### _config.removeAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### _config.replace(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object) : boolean
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

#### _config.replaceAll(arg0: java.util.function.BiFunction) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(operator: java.util.function.UnaryOperator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _config.retainAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _config.safeString(object: java.lang.Object) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _string_ )


---

#### _config.safeString(object: java.lang.Object, defaultValue: string) : string
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

#### _config.saveJSON(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### _config.saveJSON(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### _config.saveProperties(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### _config.search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.search(content: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.search(content: string, splitter: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.search(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, content: string, splitter: string, ignoreCase: boolean) : string
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

#### _config.set(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.set(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _config.setForceList(forceList: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setForceMap

---

#### _config.setForceMap(forceMap: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfFalse

---

#### _config.setIfFalse(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _config.setIfGreaterThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _config.setIfLowerThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _config.setIfNotEmpty(key: string, value: string) : [Values](/docs/library/objects/Values)
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

#### _config.setIfNotZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _config.setIfTrue(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _config.setNull(key: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _config.setURLCharacterEncoding(characterEncoding: string) : void
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

#### _config.size() : int
##### Retorno

( _int_ )


---

## sizeOfList

---

#### _config.sizeOfList() : int
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### _config.sizeOfMap() : int
##### Retorno

( _int_ )


---

## sort

---

#### _config.sort(c: java.util.Comparator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _config.sort(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _config.spliterator() : java.util.Spliterator
##### Retorno

( _java.util.Spliterator_ )


---

## subList

---

#### _config.subList(fromIndex: int, toIndex: int) : java.util.List
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

#### _config.toArray() : java.lang.Object[]
##### Retorno

( _java.lang.Object[]_ )


---

#### _config.toArray(a: java.lang.Object[]) : java.lang.Object[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Retorno

( _java.lang.Object[]_ )


---

## toByteArray

---

#### _config.toByteArray() : byte[]
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### _config.toDoubleArray() : double[]
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### _config.toFloatArray() : float[]
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### _config.toFormMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.toFormMap(key: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _config.toFormMap(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## toIntArray

---

#### _config.toIntArray() : int[]
##### Retorno

( _int[]_ )


---

## toJSON

---

#### _config.toJSON() : string
##### Retorno

( _string_ )


---

#### _config.toJSON(htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(values: java.util.List) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(values: java.util.List, indentFactor: int) : string
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

#### _config.toJSONObject(object: java.lang.Object, htmlEscape: boolean) : java.lang.Object
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

#### _config.toJSONString(object: java.lang.Object, htmlEscape: boolean, indentFactor: int) : string
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

#### _config.toList() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### _config.toList(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _config.toLongArray() : long[]
##### Retorno

( _long[]_ )


---

## toMap

---

#### _config.toMap() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### _config.toProperties() : string
##### Retorno

( _string_ )


---

## toShortArray

---

#### _config.toShortArray() : short[]
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### _config.toStringArray() : java.lang.String[]
##### Retorno

( _java.lang.String[]_ )


---

## typedForEach

---

#### _config.typedForEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _config.typedForEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

## unset

---

#### _config.unset(key: string) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### _config.unsetAll() : void
##### Retorno

( _void_ )


---

## values

---

#### _config.values() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### _config.valuesToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
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

#### _config.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

