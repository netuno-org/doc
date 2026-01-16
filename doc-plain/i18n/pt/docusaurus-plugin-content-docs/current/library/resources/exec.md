---
id: exec
title: Exec
sidebar_label: Exec
---

Funcionalidades para auxiliar à execução do código.

Realiza a execução de outros scripts, suporta também executar scripts em outras linguagens de programação.

Executa o script indicado, retornando o seu output.

Principais funções:
- [bind](#bind)
- [core](#core)
- [service](#service)
- [sleep](#sleep)
- [stop](#stop)
- [gc](#gc)


```javascript
// Executa outro script da App em `server/core/`
const outputOutput = _exec.core("outro-script");

// Executa outro script da App em `server/services/`
const outputServico = _exec.service("outro-servico");

// Pausa por 2 segundos:`
_exec.sleep(2000);

// Para a execução:`
_exec.stop();

```

---

## add

---

#### _exec.add(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.add(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## addAll

---

#### _exec.addAll(index: int, c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.addAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## afterClose

---

#### _exec.afterClose(function: java.util.function.Function) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Retorno

( _void_ )


---

## as

---

#### _exec.as(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.as(o: java.lang.Object, oDefault: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _exec.asBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(key: string, defaultValue: boolean) : boolean
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

#### _exec.asByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### _exec.asByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.asByte(key: string, defaultValue: byte) : byte
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

#### _exec.asCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.asCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.asCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.asCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _exec.asDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.asDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.asDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.asDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _exec.asDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(key: string, defaultValue: double) : double
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

#### _exec.asFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### _exec.asFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## asFloat

---

#### _exec.asFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(key: string, defaultValue: float) : float
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

#### _exec.asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asHTMLEncode

---

#### _exec.asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### _exec.asInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.asInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.asInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.asInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _exec.asInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.asInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.asInt(key: string, defaultValue: short) : int
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

#### _exec.asList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _exec.asLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _exec.asLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _exec.asLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _exec.asLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(key: string, defaultValue: long) : long
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

#### _exec.asMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.asMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.asMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.asMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _exec.asSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.asSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.asSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.asSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _exec.asSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.asSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.asSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.asSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _exec.asSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _exec.asShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(key: string, defaultValue: short) : short
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

#### _exec.asString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _exec.asUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _exec.asUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _exec.asValues(indice: int) : [Values](/docs/library/objects/Values)
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

#### _exec.asValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _exec.asValues(chave: string) : [Values](/docs/library/objects/Values)
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

#### _exec.asValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _exec.baseFile(value: java.lang.Object, key: string, content: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |
| **key** | _string_ |   |
| **content** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## beforeClose

---

#### _exec.beforeClose(function: java.util.function.Function) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Retorno

( _void_ )


---

## bind

---

#### _exec.bind(variavel: string, objeto: java.lang.Object) : [Exec](/docs/library/resources/exec)
##### Descrição

Realiza a transição de variáveis entre scripts, inclusive entre linguagens de programação diferentes.

##### Como Usar

```javascript
const minhaVarOriginal = "teste";
_exec    .bind("transitarVar", minhaVarOriginal)    .core("outro-script-talvez-em-outra-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **variavel** | _string_ | Nome da variável que estará disponível no outro script que será executado. |
| **objeto** | _java.lang.Object_ | Objeto a ser passado para o outro script que será executado. |

##### Retorno

( _[Exec](/docs/library/resources/exec)_ )


---

## clear

---

#### _exec.clear() : void
##### Retorno

( _void_ )


---

## cloneJSON

---

#### _exec.cloneJSON() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## compute

---

#### _exec.compute(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _exec.computeIfAbsent(arg0: java.lang.Object, arg1: java.util.function.Function) : java.lang.Object
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

#### _exec.computeIfPresent(arg0: java.lang.Object, arg1: java.util.function.BiFunction) : java.lang.Object
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

#### _exec.contains(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.contains(key: string, value: java.lang.Object) : boolean
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

#### _exec.containsAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _exec.containsKey(key: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _exec.containsValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## core

---

#### _exec.core(caminho: string) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em `core/` a executar. |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### _exec.core(caminho: string, caminho: boolean) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em `core/` a executar. |
| **caminho** | _boolean_ | Caminho do script com origem em `core/` a executar. |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## debug

---

#### _exec.debug() : void
##### Retorno

( _void_ )


---

## ensureJail

---

#### _exec.ensureJail(jailPath: string) : void
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

#### _exec.entrySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### _exec.filter(p: java.util.function.Predicate) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.filter(function: org.graalvm.polyglot.Value) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## find

---

#### _exec.find(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.find(p: java.util.function.Predicate) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.find(function: org.graalvm.polyglot.Value) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.find(filter: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### _exec.forEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.forEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.forEach(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _exec.forceList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## forceMap

---

#### _exec.forceMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## fromJSON

---

#### _exec.fromJSON(content: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.fromJSON(content: org.netuno.psamata.net.Remote$Response) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## functions

---

#### _exec.functions() : [Functions](/docs/library/objects/Functions)
##### Descrição

Gerencia a execução de funções.

##### Retorno

( _[Functions](/docs/library/objects/Functions)_ )


---

#### _exec.functions(functions: java.util.function.Function[]) : [Functions](/docs/library/objects/Functions)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **functions** | _java.util.function.Function[]_ |   |

##### Retorno

( _[Functions](/docs/library/objects/Functions)_ )


---

#### _exec.functions(data: java.lang.Object) : [Functions](/docs/library/objects/Functions)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.lang.Object_ |   |

##### Retorno

( _[Functions](/docs/library/objects/Functions)_ )


---

#### _exec.functions(data: java.lang.Object, functions: java.util.function.Function[]) : [Functions](/docs/library/objects/Functions)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.lang.Object_ |   |
| **functions** | _java.util.function.Function[]_ |   |

##### Retorno

( _[Functions](/docs/library/objects/Functions)_ )


---

## gc

---

#### _exec.gc() : void
##### Descrição

Executa a limpeza da memória através da execução do coletor de lixo ([JVM garbage collector](https://www.baeldung.com/jvm-garbage-collectors)).

##### Como Usar

```javascript
// Libertar memória executando o Garbage Collector:
_exec.gc();
```

##### Retorno

( _void_ )


---

## get

---

#### _exec.get(chave: int) : java.lang.Object
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

#### _exec.get(chave: java.lang.Object) : java.lang.Object
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

#### _exec.get(chave: string) : java.lang.Object
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

#### _exec.get(chave: string, tipo: java.lang.Class) : java.lang.Object
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

#### _exec.getBoolean(index: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(index: int, defaultValue: boolean) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(key: string, defaultValue: boolean) : boolean
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

#### _exec.getByte(index: int) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(index: int, defaultValue: byte) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(key: string) : byte
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(key: string, defaultValue: byte) : byte
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

#### _exec.getCalendar(index: int) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.getCalendar(index: int, defaultValue: java.util.Calendar) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.getCalendar(key: string) : java.util.Calendar
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.getCalendar(key: string, defaultValue: java.util.Calendar) : java.util.Calendar
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

#### _exec.getDate(index: int) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.getDate(index: int, defaultValue: java.util.Date) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.getDate(key: string) : java.util.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.getDate(key: string, defaultValue: java.util.Date) : java.util.Date
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

#### _exec.getDouble(index: int) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(index: int, defaultValue: double) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(key: string) : double
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(key: string, defaultValue: double) : double
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

#### _exec.getFile(index: int) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

#### _exec.getFile(key: string) : [File](/docs/library/objects/File)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](/docs/library/objects/File)_ )


---

## getFloat

---

#### _exec.getFloat(index: int) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(index: int, defaultValue: float) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(key: string) : float
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(key: string, defaultValue: float) : float
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

#### _exec.getForceList() : boolean
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### _exec.getForceMap() : boolean
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### _exec.getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getHTMLEncode

---

#### _exec.getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### _exec.getInstant(index: int) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.getInstant(index: int, defaultValue: java.time.Instant) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.getInstant(key: string) : java.time.Instant
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.getInstant(key: string, defaultValue: java.time.Instant) : java.time.Instant
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

#### _exec.getInt(index: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(index: int, defaultValue: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(key: string) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(key: string, defaultValue: int) : int
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

#### _exec.getKeys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### _exec.getList(index: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(index: int, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(index: int, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(index: int, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string, claz: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: java.lang.Object) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: java.lang.Object, claz: java.lang.Class) : java.util.List
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

#### _exec.getLocalDate(index: int) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(index: int, defaultValue: java.time.LocalDate) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(key: string) : java.time.LocalDate
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(key: string, defaultValue: java.time.LocalDate) : java.time.LocalDate
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

#### _exec.getLocalDateTime(index: int) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(index: int, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(key: string) : java.time.LocalDateTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(key: string, defaultValue: java.time.LocalDateTime) : java.time.LocalDateTime
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

#### _exec.getLocalTime(index: int) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(index: int, defaultValue: java.time.LocalTime) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(key: string) : java.time.LocalTime
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(key: string, defaultValue: java.time.LocalTime) : java.time.LocalTime
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

#### _exec.getLong(index: int) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(index: int, defaultValue: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(key: string) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(key: string, defaultValue: long) : long
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

#### _exec.getMap(index: int) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.getMap(index: int, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.getMap(key: string) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

#### _exec.getMap(key: string, defaultValue: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
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

#### _exec.getOrDefault(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### _exec.getSQLDate(index: int) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.getSQLDate(index: int, defaultValue: java.sql.Date) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.getSQLDate(key: string) : java.sql.Date
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.getSQLDate(key: string, defaultValue: java.sql.Date) : java.sql.Date
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

#### _exec.getSQLTime(index: int) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.getSQLTime(index: int, defaultValue: java.sql.Time) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.getSQLTime(key: string) : java.sql.Time
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.getSQLTime(key: string, defaultValue: java.sql.Time) : java.sql.Time
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

#### _exec.getSQLTimestamp(index: int) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(index: int, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(key: string) : java.sql.Timestamp
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(key: string, defaultValue: java.sql.Timestamp) : java.sql.Timestamp
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

#### _exec.getShort(index: int) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(index: int, defaultValue: short) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(key: string) : short
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(key: string, defaultValue: short) : short
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

#### _exec.getSize() : int
##### Retorno

( _int_ )


---

## getString

---

#### _exec.getString(index: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(index: int, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _exec.getUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _exec.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( _string_ )

Código da codificação dos caracteres.

---

## getUUID

---

#### _exec.getUUID(key: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: string) : java.util.UUID
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: java.util.UUID) : java.util.UUID
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

#### _exec.getValues() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### _exec.getValues(indice: int) : [Values](/docs/library/objects/Values)
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

#### _exec.getValues(indice: int, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _exec.getValues(chave: string) : [Values](/docs/library/objects/Values)
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

#### _exec.getValues(chave: string, valorPadrao: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _exec.has(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.has(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.has(key: string, value: java.lang.Object) : boolean
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

#### _exec.hasKey(key: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _exec.hasValue(value: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### _exec.indexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _exec.is(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### _exec.isEmpty() : boolean
##### Retorno

( _boolean_ )


---

## isJail

---

#### _exec.isJail() : boolean
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### _exec.isList() : boolean
##### Retorno

( _boolean_ )


---

#### _exec.isList(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _exec.isLockedAsReadOnly() : boolean
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### _exec.isMap() : boolean
##### Retorno

( _boolean_ )


---

#### _exec.isMap(o: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _exec.isMergeable(object: java.lang.Object) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## iterator

---

#### _exec.iterator() : java.util.Iterator
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### _exec.join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## keySet

---

#### _exec.keySet() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### _exec.keys() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### _exec.keysSorted() : java.util.Set
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### _exec.keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.keysToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
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

#### _exec.lastIndexOf(o: java.lang.Object) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### _exec.length() : int
##### Retorno

( _int_ )


---

## list

---

#### _exec.list() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### _exec.list(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _exec.listIterator() : java.util.ListIterator
##### Retorno

( _java.util.ListIterator_ )


---

#### _exec.listIterator(index: int) : java.util.ListIterator
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _exec.listOfValues() : java.util.List
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### _exec.loadJSON(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadJSON(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(in: [InputStream](/docs/library/objects/InputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadProperties(in: java.io.Reader) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadProperties(properties: java.util.Properties) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _exec.loadPropertiesFromString(data: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _string_ |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### _exec.lockAsReadOnly() : [Values](/docs/library/objects/Values)
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### _exec.map() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### _exec.merge(object: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.merge(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.util.function.BiFunction) : java.lang.Object
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

#### _exec.newList() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## newMap

---

#### _exec.newMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## of

---

#### _exec.of(array: java.lang.Object[]) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.of(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.of(list: java.util.List) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.of(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofList

---

#### _exec.ofList(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## ofMap

---

#### _exec.ofMap(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## onError

---

#### _exec.onError(function: java.util.function.Function) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Retorno

( _void_ )


---

## push

---

#### _exec.push(o: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## put

---

#### _exec.put(key: java.lang.Object, value: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.put(key: string, value: java.lang.Object) : java.lang.Object
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

#### _exec.putAll(m: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **m** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _exec.putIfAbsent(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
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

#### _exec.remove(i: int) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **i** | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.remove(o: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.remove(arg0: java.lang.Object, arg1: java.lang.Object) : boolean
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

#### _exec.removeAll() : void
##### Retorno

( _void_ )


---

#### _exec.removeAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### _exec.replace(arg0: java.lang.Object, arg1: java.lang.Object) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object) : boolean
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

#### _exec.replaceAll(arg0: java.util.function.BiFunction) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _exec.replaceAll(operator: java.util.function.UnaryOperator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _exec.replaceAll(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _exec.retainAll(c: java.util.Collection) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _exec.safeString(object: java.lang.Object) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _string_ )


---

#### _exec.safeString(object: java.lang.Object, defaultValue: string) : string
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

#### _exec.saveJSON(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveJSON(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(out: [OutputStream](/docs/library/objects/OutputStream)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveProperties(out: java.io.Writer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### _exec.search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(content: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(content: string, splitter: string, ignoreCase: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, content: string, splitter: string, ignoreCase: boolean) : string
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

#### _exec.service(caminho: string) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em 'services/' a executar. |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

#### _exec.service(caminho: string, preservarContexto: boolean) : [ScriptResult](/docs/library/objects/ScriptResult)
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em 'services/' a executar. |
| **preservarContexto** | _boolean_ | Se deve manter o mesmo contexto de execução ou iniciar um novo. |

##### Retorno

( _[ScriptResult](/docs/library/objects/ScriptResult)_ )


---

## set

---

#### _exec.set(index: int, element: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.set(key: string, value: java.lang.Object) : [Values](/docs/library/objects/Values)
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

#### _exec.setForceList(forceList: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setForceMap

---

#### _exec.setForceMap(forceMap: boolean) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setIfFalse

---

#### _exec.setIfFalse(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _exec.setIfGreaterThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _exec.setIfLowerThanZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _exec.setIfNotEmpty(key: string, value: string) : [Values](/docs/library/objects/Values)
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

#### _exec.setIfNotZero(key: string, value: double) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: float) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: long) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: short) : [Values](/docs/library/objects/Values)
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

#### _exec.setIfTrue(key: string, value: boolean) : [Values](/docs/library/objects/Values)
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

#### _exec.setNull(key: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _exec.setURLCharacterEncoding(characterEncoding: string) : void
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

#### _exec.size() : int
##### Retorno

( _int_ )


---

## sizeOfList

---

#### _exec.sizeOfList() : int
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### _exec.sizeOfMap() : int
##### Retorno

( _int_ )


---

## sleep

---

#### _exec.sleep(intervalo: long) : void
##### Descrição

Realiza uma pausa na execução, útil para provocar algum atraso de processamento controlado.

##### Como Usar

```javascript
// Para a execução por 3 segundos:
_exec.sleep(3000);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **intervalo** | _long_ | Intervalo de tempo em milissegundos que deve fazer a pausa na execução. |

##### Retorno

( _void_ )


---

## sort

---

#### _exec.sort(c: java.util.Comparator) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _exec.sort(function: org.graalvm.polyglot.Value) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _exec.spliterator() : java.util.Spliterator
##### Retorno

( _java.util.Spliterator_ )


---

## stop

---

#### _exec.stop() : void
##### Descrição

Realiza a paragem da execução do script atual, útil para interromper da execução.

##### Como Usar

```javascript
// Para a execução:
_out.println('Vai parar...<br/>');
_exec.stop();
_out.println('Não chega nesta linha.');
```

##### Retorno

( _void_ )


---

## subList

---

#### _exec.subList(fromIndex: int, toIndex: int) : java.util.List
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

#### _exec.toArray() : java.lang.Object[]
##### Retorno

( _java.lang.Object[]_ )


---

#### _exec.toArray(a: java.lang.Object[]) : java.lang.Object[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Retorno

( _java.lang.Object[]_ )


---

## toByteArray

---

#### _exec.toByteArray() : byte[]
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### _exec.toDoubleArray() : double[]
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### _exec.toFloatArray() : float[]
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### _exec.toFormMap() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.toFormMap(key: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _exec.toFormMap(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## toIntArray

---

#### _exec.toIntArray() : int[]
##### Retorno

( _int[]_ )


---

## toJSON

---

#### _exec.toJSON() : string
##### Retorno

( _string_ )


---

#### _exec.toJSON(htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(values: java.util.List) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(values: java.util.List, indentFactor: int) : string
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

#### _exec.toJSONObject(object: java.lang.Object, htmlEscape: boolean) : java.lang.Object
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

#### _exec.toJSONString(object: java.lang.Object, htmlEscape: boolean, indentFactor: int) : string
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

#### _exec.toList() : java.util.List
##### Retorno

( _java.util.List_ )


---

#### _exec.toList(cls: java.lang.Class) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _exec.toLongArray() : long[]
##### Retorno

( _long[]_ )


---

## toMap

---

#### _exec.toMap() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### _exec.toProperties() : string
##### Retorno

( _string_ )


---

## toShortArray

---

#### _exec.toShortArray() : short[]
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### _exec.toStringArray() : java.lang.String[]
##### Retorno

( _java.lang.String[]_ )


---

## typedForEach

---

#### _exec.typedForEach(action: java.util.function.BiConsumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.typedForEach(action: java.util.function.Consumer) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

## unset

---

#### _exec.unset(key: string) : java.lang.Object
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### _exec.unsetAll() : void
##### Retorno

( _void_ )


---

## values

---

#### _exec.values() : java.util.Collection
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### _exec.valuesToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, excludes: java.lang.String[], config: [Values](/docs/library/objects/Values)) : string
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

#### _exec.valuesToString(map: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map, splitter: string, config: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

