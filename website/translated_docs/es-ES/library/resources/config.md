---
id: config
title: Config
sidebar_label: Config
---

Com o recurso Config pode partilhar informação durante o processamento, sendo possível aceder aos seus parâmetros em qualquer altura do ciclo de vida do pedido.

Por exemplo, quando um pedido para processar um serviço chega ao Netuno são executados uma série de scripts da aplicação e em qualquer um destes scripts é possível partilhar informação de forma centralizada com o Config.

```javascript
// Adiciona uma configuração
_config.set('admin-mail', 'admin@netuno.org');

// Pega o valor da configuração
const adminMail = _config.getString('admin-mail');
```

---

## add

---

#### _config.add(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

#### _config.add(arg0: _int_, arg1: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Values_ )


---

## addAll

---

#### _config.addAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _config.addAll(arg0: _int_, arg1: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _config.as(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

## asBoolean

---

#### _config.asBoolean(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(arg0: _string_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## asCalendar

---

#### _config.asCalendar(arg0: _string_, arg1: _Calendar_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Calendar_ |   |

##### Retorno

( _Calendar_ )


---

#### _config.asCalendar(arg0: _string_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Calendar_ )


---

## asDate

---

#### _config.asDate(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

#### _config.asDate(arg0: _string_, arg1: _Date_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Date_ |   |

##### Retorno

( _Date_ )


---

## asDateInSQLFormat

---

#### _config.asDateInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## asDateTimeInSQLFormat

---

#### _config.asDateTimeInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## asDouble

---

#### _config.asDouble(arg0: _string_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(arg0: _string_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(arg0: _int_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

## asFile

---

#### _config.asFile(arg0: _string_) : _File_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _File_ )


---

## asFloat

---

#### _config.asFloat(arg0: _string_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(arg0: _string_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

## asHtmlDecode

---

#### _config.asHtmlDecode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## asHtmlEncode

---

#### _config.asHtmlEncode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### _config.asInstant(arg0: _string_, arg1: _Instant_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Instant_ |   |

##### Retorno

( _Instant_ )


---

#### _config.asInstant(arg0: _string_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Instant_ )


---

## asInt

---

#### _config.asInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.asInt(arg0: _string_, arg1: _short_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _short_ |   |

##### Retorno

( _int_ )


---

#### _config.asInt(arg0: _int_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

## asList

---

#### _config.asList(arg0: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: _string_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _List_ )


---

## asLocalDate

---

#### _config.asLocalDate(arg0: _string_, arg1: _LocalDate_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDate_ |   |

##### Retorno

( _LocalDate_ )


---

#### _config.asLocalDate(arg0: _string_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDate_ )


---

## asLocalDateTime

---

#### _config.asLocalDateTime(arg0: _string_, arg1: _LocalDateTime_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDateTime_ |   |

##### Retorno

( _LocalDateTime_ )


---

#### _config.asLocalDateTime(arg0: _string_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDateTime_ )


---

## asLocalTime

---

#### _config.asLocalTime(arg0: _string_, arg1: _LocalTime_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalTime_ |   |

##### Retorno

( _LocalTime_ )


---

#### _config.asLocalTime(arg0: _string_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalTime_ )


---

## asLong

---

#### _config.asLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(arg0: _string_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(arg0: _string_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

## asMap

---

#### _config.asMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _config.asMap(arg0: _string_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Map_ )


---

## asShort

---

#### _config.asShort(arg0: _string_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(arg0: _string_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

## asString

---

#### _config.asString(arg0: _string_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(arg0: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(arg0: _int_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.asString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## asUUID

---

#### _config.asUUID(arg0: _string_, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

#### _config.asUUID(arg0: _string_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _UUID_ )


---

## asValues

---

#### _config.asValues(arg0: _string_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

#### _config.asValues(arg0: _int_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Values_ )


---

## clear

---

#### _config.clear() : _void_
##### Retorno

( _void_ )


---

## cloneJSON

---

#### _config.cloneJSON() : _Values_
##### Retorno

( _Values_ )


---

## compute

---

#### _config.compute(arg0: _Object_, arg1: _BiFunction_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _BiFunction_ |   |

##### Retorno

( _Object_ )


---

## computeIfAbsent

---

#### _config.computeIfAbsent(arg0: _Object_, arg1: _Function_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Function_ |   |

##### Retorno

( _Object_ )


---

## computeIfPresent

---

#### _config.computeIfPresent(arg0: _Object_, arg1: _BiFunction_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _BiFunction_ |   |

##### Retorno

( _Object_ )


---

## contains

---

#### _config.contains(arg0: _string_, arg1: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.contains(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## containsAll

---

#### _config.containsAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _config.containsKey(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _config.containsValue(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## ensureJail

---

#### _config.ensureJail(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## entrySet

---

#### _config.entrySet() : _Set_
##### Retorno

( _Set_ )


---

## find

---

#### _config.find(arg0: _string_, arg1: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Values_ )


---

## forEach

---

#### _config.forEach(arg0: _Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(arg0: _BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _config.forceList() : _Values_
##### Retorno

( _Values_ )


---

## forceMap

---

#### _config.forceMap() : _Values_
##### Retorno

( _Values_ )


---

## fromJSON

---

#### _config.fromJSON(arg0: _string_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

## get

---

#### _config.get(arg0: _int_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Object_ )


---

#### _config.get(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _config.get(arg0: _string_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Object_ )


---

## getBoolean

---

#### _config.getBoolean(arg0: _string_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

## getCalendar

---

#### _config.getCalendar(arg0: _string_, arg1: _Calendar_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Calendar_ |   |

##### Retorno

( _Calendar_ )


---

#### _config.getCalendar(arg0: _string_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Calendar_ )


---

## getDate

---

#### _config.getDate(arg0: _string_, arg1: _Date_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Date_ |   |

##### Retorno

( _Date_ )


---

#### _config.getDate(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## getDateInSQLFormat

---

#### _config.getDateInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## getDateTimeInSQLFormat

---

#### _config.getDateTimeInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## getDouble

---

#### _config.getDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(arg0: _string_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(arg0: _string_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

## getFile

---

#### _config.getFile(arg0: _string_) : _File_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _File_ )


---

## getFloat

---

#### _config.getFloat(arg0: _string_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(arg0: _string_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

## getForceList

---

#### _config.getForceList() : _boolean_
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### _config.getForceMap() : _boolean_
##### Retorno

( _boolean_ )


---

## getHtmlDecode

---

#### _config.getHtmlDecode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## getHtmlEncode

---

#### _config.getHtmlEncode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### _config.getInstant(arg0: _string_, arg1: _Instant_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Instant_ |   |

##### Retorno

( _Instant_ )


---

#### _config.getInstant(arg0: _string_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Instant_ )


---

## getInt

---

#### _config.getInt(arg0: _string_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(arg0: _string_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(arg0: _int_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

## getList

---

#### _config.getList(arg0: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _List_ )


---

#### _config.getList(arg0: _string_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _List_ )


---

## getLocalDate

---

#### _config.getLocalDate(arg0: _string_, arg1: _LocalDate_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDate_ |   |

##### Retorno

( _LocalDate_ )


---

#### _config.getLocalDate(arg0: _string_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDate_ )


---

## getLocalDateTime

---

#### _config.getLocalDateTime(arg0: _string_, arg1: _LocalDateTime_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDateTime_ |   |

##### Retorno

( _LocalDateTime_ )


---

#### _config.getLocalDateTime(arg0: _string_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDateTime_ )


---

## getLocalTime

---

#### _config.getLocalTime(arg0: _string_, arg1: _LocalTime_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalTime_ |   |

##### Retorno

( _LocalTime_ )


---

#### _config.getLocalTime(arg0: _string_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalTime_ )


---

## getLong

---

#### _config.getLong(arg0: _string_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(arg0: _string_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

## getMap

---

#### _config.getMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _config.getMap(arg0: _string_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Map_ )


---

## getOrDefault

---

#### _config.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

## getShort

---

#### _config.getShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(arg0: _string_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(arg0: _string_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

## getSize

---

#### _config.getSize() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### _config.getString(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(arg0: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(arg0: _int_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.getString(arg0: _string_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

## getUUID

---

#### _config.getUUID(arg0: _string_, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

#### _config.getUUID(arg0: _string_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _UUID_ )


---

## getUrlCharacterEncoding

---

#### _config.getUrlCharacterEncoding() : _string_
##### Retorno

( _string_ )


---

## getValues

---

#### _config.getValues(arg0: _int_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Values_ )


---

#### _config.getValues(arg0: _string_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

## has

---

#### _config.has(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _config.has(arg0: _string_, arg1: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## hasKey

---

#### _config.hasKey(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _config.hasValue(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### _config.indexOf(arg0: _Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _config.is(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isArray

---

#### _config.isArray(arg0: _ScriptObjectMirror_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _ScriptObjectMirror_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### _config.isEmpty() : _boolean_
##### Retorno

( _boolean_ )


---

## isJail

---

#### _config.isJail() : _boolean_
##### Retorno

( _boolean_ )


---

## isList

---

#### _config.isList(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.isList() : _boolean_
##### Retorno

( _boolean_ )


---

## isMap

---

#### _config.isMap() : _boolean_
##### Retorno

( _boolean_ )


---

#### _config.isMap(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _config.isMergeable(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## iterator

---

#### _config.iterator() : _Iterator_
##### Retorno

( _Iterator_ )


---

## keySet

---

#### _config.keySet() : _Set_
##### Retorno

( _Set_ )


---

## keys

---

#### _config.keys() : _Set_
##### Retorno

( _Set_ )


---

## keysSorted

---

#### _config.keysSorted() : _Set_
##### Retorno

( _Set_ )


---

## keysToString

---

#### _config.keysToString(arg0: _Map_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.keysToString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## lastIndexOf

---

#### _config.lastIndexOf(arg0: _Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### _config.length() : _int_
##### Retorno

( _int_ )


---

## list

---

#### _config.list() : _List_
##### Retorno

( _List_ )


---

## listIterator

---

#### _config.listIterator() : _ListIterator_
##### Retorno

( _ListIterator_ )


---

#### _config.listIterator(arg0: _int_) : _ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _ListIterator_ )


---

## listOfValues

---

#### _config.listOfValues() : _List_
##### Retorno

( _List_ )


---

## loadJSON

---

#### _config.loadJSON(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

#### _config.loadJSON(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(arg0: _Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _config.loadPropertiesFromString(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## map

---

#### _config.map() : _Map_
##### Retorno

( _Map_ )


---

## merge

---

#### _config.merge(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

#### _config.merge(arg0: _Object_, arg1: _Object_, arg2: _BiFunction_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |
| arg2 | _BiFunction_ |   |

##### Retorno

( _Object_ )


---

## of

---

#### _config.of(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

## push

---

#### _config.push(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

## put

---

#### _config.put(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _config.put(arg0: _string_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

## putAll

---

#### _config.putAll(arg0: _Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _config.putIfAbsent(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

## remove

---

#### _config.remove(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _config.remove(arg0: _Object_, arg1: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## removeAll

---

#### _config.removeAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _config.removeAll() : _void_
##### Retorno

( _void_ )


---

## replace

---

#### _config.replace(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _config.replace(arg0: _Object_, arg1: _Object_, arg2: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |
| arg2 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## replaceAll

---

#### _config.replaceAll(arg0: _UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(arg0: _BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _config.retainAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _config.safeString(arg0: _Object_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.safeString(arg0: _Object_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _string_ )


---

## saveJSON

---

#### _config.saveJSON(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

#### _config.saveJSON(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

#### _config.saveProperties(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

## savePropertiesToString

---

#### _config.savePropertiesToString() : _string_
##### Retorno

( _string_ )


---

## search

---

#### _config.search(arg0: _string_, arg1: _string_, arg2: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.search(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.search(arg0: _string_, arg1: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.search(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.search(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _boolean_ |   |

##### Retorno

( _string_ )


---

## set

---

#### _config.set(arg0: _int_, arg1: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Values_ )


---

#### _config.set(arg0: _string_, arg1: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Values_ )


---

## setForceList

---

#### _config.setForceList(arg0: _boolean_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Values_ )


---

## setForceMap

---

#### _config.setForceMap(arg0: _boolean_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Values_ )


---

## setUrlCharacterEncoding

---

#### _config.setUrlCharacterEncoding(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## size

---

#### _config.size() : _int_
##### Retorno

( _int_ )


---

## sizeOfList

---

#### _config.sizeOfList() : _int_
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### _config.sizeOfMap() : _int_
##### Retorno

( _int_ )


---

## sort

---

#### _config.sort(arg0: _Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Comparator_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _config.spliterator() : _Spliterator_
##### Retorno

( _Spliterator_ )


---

## subList

---

#### _config.subList(arg0: _int_, arg1: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _List_ )


---

## toArray

---

#### _config.toArray() : _Object[]_
##### Retorno

( _Object[]_ )


---

#### _config.toArray(arg0: _Object[]_) : _Object[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Retorno

( _Object[]_ )


---

## toJSON

---

#### _config.toJSON(arg0: _List_, arg1: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(arg0: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(arg0: _List_, arg1: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(arg0: _List_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON() : _string_
##### Retorno

( _string_ )


---

#### _config.toJSON(arg0: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(arg0: _boolean_, arg1: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Retorno

( _string_ )


---

#### _config.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( _string_ )


---

## toJSONObject

---

#### _config.toJSONObject(arg0: _Object_, arg1: _boolean_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _Object_ )


---

## toJSONString

---

#### _config.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( _string_ )


---

## toList

---

#### _config.toList() : _List_
##### Retorno

( _List_ )


---

## toMap

---

#### _config.toMap() : _Map_
##### Retorno

( _Map_ )


---

## toString

---

#### _config.toString(arg0: _Values_, arg1: _string_, arg2: _string_, arg3: _String[]_, arg4: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _String[]_ |   |
| arg4 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Values_, arg1: _string_, arg2: _string_, arg3: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _String[]_, arg4: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _String[]_ |   |
| arg4 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _string_, arg1: _string_, arg2: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _string_, arg1: _string_, arg2: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Values_, arg1: _string_, arg2: _string_, arg3: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_, arg3: _String[]_, arg4: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Iterable_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _String[]_ |   |
| arg4 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_, arg3: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Iterable_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_, arg3: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Iterable_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Iterable_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _string_, arg1: _string_, arg2: _String[]_, arg3: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _String[]_ |   |
| arg3 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Values_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |
| arg3 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.toString(arg0: _Map_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.toString() : _string_
##### Retorno

( _string_ )


---

## unset

---

#### _config.unset(arg0: _string_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Object_ )


---

## unsetAll

---

#### _config.unsetAll() : _void_
##### Retorno

( _void_ )


---

## values

---

#### _config.values() : _Collection_
##### Retorno

( _Collection_ )


---

## valuesToString

---

#### _config.valuesToString(arg0: _Map_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(arg0: _Map_, arg1: _string_, arg2: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(arg0: _Map_, arg1: _string_, arg2: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(arg0: _Map_, arg1: _string_, arg2: _String[]_, arg3: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _String[]_ |   |
| arg3 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(arg0: _string_, arg1: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(arg0: _string_, arg1: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _config.valuesToString(arg0: _string_, arg1: _String[]_, arg2: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _String[]_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _string_ )


---

