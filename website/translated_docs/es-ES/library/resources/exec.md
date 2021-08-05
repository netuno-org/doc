---
id: exec
title: Exec
sidebar_label: Exec
---

Realiza a execução de outros scripts, suporta também executar scripts noutras linguagens de programação.
Executa o script indicado, retornando o seu output.

```javascript
// Executa outro script da App em `server/core/`
const outputOutput = _exec.core("outro-script");

// Executa outro script da App em `server/services/`
const outputServico = _exec.service("outro-servico");

```

---

## add

---

#### _exec.add(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

#### _exec.add(arg0: _int_, arg1: _Object_) : _Values_
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

#### _exec.addAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.addAll(arg0: _int_, arg1: _Collection_) : _boolean_
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

#### _exec.as(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

## asBoolean

---

#### _exec.asBoolean(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(arg0: _string_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
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

#### _exec.asCalendar(arg0: _string_, arg1: _Calendar_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Calendar_ |   |

##### Retorno

( _Calendar_ )


---

#### _exec.asCalendar(arg0: _string_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Calendar_ )


---

## asDate

---

#### _exec.asDate(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

#### _exec.asDate(arg0: _string_, arg1: _Date_) : _Date_
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

#### _exec.asDateInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## asDateTimeInSQLFormat

---

#### _exec.asDateTimeInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## asDouble

---

#### _exec.asDouble(arg0: _string_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(arg0: _string_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(arg0: _int_, arg1: _double_) : _double_
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

#### _exec.asFile(arg0: _string_) : _File_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _File_ )


---

## asFloat

---

#### _exec.asFloat(arg0: _string_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(arg0: _string_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

## asHtmlDecode

---

#### _exec.asHtmlDecode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## asHtmlEncode

---

#### _exec.asHtmlEncode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### _exec.asInstant(arg0: _string_, arg1: _Instant_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Instant_ |   |

##### Retorno

( _Instant_ )


---

#### _exec.asInstant(arg0: _string_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Instant_ )


---

## asInt

---

#### _exec.asInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.asInt(arg0: _string_, arg1: _short_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _short_ |   |

##### Retorno

( _int_ )


---

#### _exec.asInt(arg0: _int_, arg1: _int_) : _int_
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

#### _exec.asList(arg0: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _List_ )


---

#### _exec.asList(arg0: _string_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _List_ )


---

## asLocalDate

---

#### _exec.asLocalDate(arg0: _string_, arg1: _LocalDate_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDate_ |   |

##### Retorno

( _LocalDate_ )


---

#### _exec.asLocalDate(arg0: _string_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDate_ )


---

## asLocalDateTime

---

#### _exec.asLocalDateTime(arg0: _string_, arg1: _LocalDateTime_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDateTime_ |   |

##### Retorno

( _LocalDateTime_ )


---

#### _exec.asLocalDateTime(arg0: _string_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDateTime_ )


---

## asLocalTime

---

#### _exec.asLocalTime(arg0: _string_, arg1: _LocalTime_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalTime_ |   |

##### Retorno

( _LocalTime_ )


---

#### _exec.asLocalTime(arg0: _string_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalTime_ )


---

## asLong

---

#### _exec.asLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(arg0: _string_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(arg0: _string_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(arg0: _int_, arg1: _long_) : _long_
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

#### _exec.asMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _exec.asMap(arg0: _string_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Map_ )


---

## asShort

---

#### _exec.asShort(arg0: _string_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(arg0: _string_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

## asString

---

#### _exec.asString(arg0: _string_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(arg0: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(arg0: _int_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.asString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## asUUID

---

#### _exec.asUUID(arg0: _string_, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

#### _exec.asUUID(arg0: _string_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _UUID_ )


---

## asValues

---

#### _exec.asValues(arg0: _string_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

#### _exec.asValues(arg0: _int_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Values_ )


---

## bind

---

#### _exec.bind(variavel: _string_, objeto: _Object_) : _Exec_
##### Descrição

Realiza a transição de variáveis entre scripts, inclusive entre linguagens de programação diferentes.

##### Como Usar

```javascript
const minhaVarOriginal = "test";
_exec    .bind("transitarVar", minhaVarOriginal)    .core("um-outro-script-em-outra-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| variavel | _string_ | Nome da variável que estará disponível no outro script que será executado. |
| objeto | _Object_ | Objeto a ser passado para o outro script que será executado. |

##### Retorno

( _Exec_ )


---

## clear

---

#### _exec.clear() : _void_
##### Retorno

( _void_ )


---

## cloneJSON

---

#### _exec.cloneJSON() : _Values_
##### Retorno

( _Values_ )


---

## compute

---

#### _exec.compute(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _exec.computeIfAbsent(arg0: _Object_, arg1: _Function_) : _Object_
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

#### _exec.computeIfPresent(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _exec.contains(arg0: _string_, arg1: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.contains(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## containsAll

---

#### _exec.containsAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _exec.containsKey(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _exec.containsValue(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## core

---

#### _exec.core(caminho: _string_) : _Values_
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("um-outro-script-em-outra-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | _string_ | Caminho do script com origem em 'core/' a executar. |

##### Retorno

( _Values_ )


---

## ensureJail

---

#### _exec.ensureJail(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## entrySet

---

#### _exec.entrySet() : _Set_
##### Retorno

( _Set_ )


---

## find

---

#### _exec.find(arg0: _string_, arg1: _Object_) : _Values_
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

#### _exec.forEach(arg0: _Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.forEach(arg0: _BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _exec.forceList() : _Values_
##### Retorno

( _Values_ )


---

## forceMap

---

#### _exec.forceMap() : _Values_
##### Retorno

( _Values_ )


---

## fromJSON

---

#### _exec.fromJSON(arg0: _string_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

## get

---

#### _exec.get(arg0: _int_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Object_ )


---

#### _exec.get(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _exec.get(arg0: _string_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Object_ )


---

## getBoolean

---

#### _exec.getBoolean(arg0: _string_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

## getCalendar

---

#### _exec.getCalendar(arg0: _string_, arg1: _Calendar_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Calendar_ |   |

##### Retorno

( _Calendar_ )


---

#### _exec.getCalendar(arg0: _string_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Calendar_ )


---

## getDate

---

#### _exec.getDate(arg0: _string_, arg1: _Date_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Date_ |   |

##### Retorno

( _Date_ )


---

#### _exec.getDate(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## getDateInSQLFormat

---

#### _exec.getDateInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## getDateTimeInSQLFormat

---

#### _exec.getDateTimeInSQLFormat(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

## getDouble

---

#### _exec.getDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(arg0: _string_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(arg0: _string_, arg1: _double_) : _double_
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

#### _exec.getFile(arg0: _string_) : _File_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _File_ )


---

## getFloat

---

#### _exec.getFloat(arg0: _string_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(arg0: _string_, arg1: _float_) : _float_
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

#### _exec.getForceList() : _boolean_
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### _exec.getForceMap() : _boolean_
##### Retorno

( _boolean_ )


---

## getHtmlDecode

---

#### _exec.getHtmlDecode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## getHtmlEncode

---

#### _exec.getHtmlEncode(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### _exec.getInstant(arg0: _string_, arg1: _Instant_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Instant_ |   |

##### Retorno

( _Instant_ )


---

#### _exec.getInstant(arg0: _string_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Instant_ )


---

## getInt

---

#### _exec.getInt(arg0: _string_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(arg0: _string_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(arg0: _int_, arg1: _int_) : _int_
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

#### _exec.getList(arg0: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _List_ )


---

#### _exec.getList(arg0: _string_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _List_ )


---

## getLocalDate

---

#### _exec.getLocalDate(arg0: _string_, arg1: _LocalDate_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDate_ |   |

##### Retorno

( _LocalDate_ )


---

#### _exec.getLocalDate(arg0: _string_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDate_ )


---

## getLocalDateTime

---

#### _exec.getLocalDateTime(arg0: _string_, arg1: _LocalDateTime_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalDateTime_ |   |

##### Retorno

( _LocalDateTime_ )


---

#### _exec.getLocalDateTime(arg0: _string_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalDateTime_ )


---

## getLocalTime

---

#### _exec.getLocalTime(arg0: _string_, arg1: _LocalTime_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _LocalTime_ |   |

##### Retorno

( _LocalTime_ )


---

#### _exec.getLocalTime(arg0: _string_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _LocalTime_ )


---

## getLong

---

#### _exec.getLong(arg0: _string_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(arg0: _string_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

## getMap

---

#### _exec.getMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _exec.getMap(arg0: _string_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Map_ )


---

## getOrDefault

---

#### _exec.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _exec.getShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(arg0: _string_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(arg0: _string_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(arg0: _int_, arg1: _short_) : _short_
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

#### _exec.getSize() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### _exec.getString(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(arg0: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(arg0: _int_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.getString(arg0: _string_, arg1: _string_, arg2: _string_) : _string_
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

#### _exec.getUUID(arg0: _string_, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

#### _exec.getUUID(arg0: _string_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _UUID_ )


---

## getUrlCharacterEncoding

---

#### _exec.getUrlCharacterEncoding() : _string_
##### Retorno

( _string_ )


---

## getValues

---

#### _exec.getValues(arg0: _int_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Values_ )


---

#### _exec.getValues(arg0: _string_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

## has

---

#### _exec.has(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.has(arg0: _string_, arg1: _Object_) : _boolean_
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

#### _exec.hasKey(arg0: _string_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _exec.hasValue(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### _exec.indexOf(arg0: _Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _exec.is(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isArray

---

#### _exec.isArray(arg0: _ScriptObjectMirror_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _ScriptObjectMirror_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### _exec.isEmpty() : _boolean_
##### Retorno

( _boolean_ )


---

## isJail

---

#### _exec.isJail() : _boolean_
##### Retorno

( _boolean_ )


---

## isList

---

#### _exec.isList(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.isList() : _boolean_
##### Retorno

( _boolean_ )


---

## isMap

---

#### _exec.isMap() : _boolean_
##### Retorno

( _boolean_ )


---

#### _exec.isMap(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _exec.isMergeable(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## iterator

---

#### _exec.iterator() : _Iterator_
##### Retorno

( _Iterator_ )


---

## keySet

---

#### _exec.keySet() : _Set_
##### Retorno

( _Set_ )


---

## keys

---

#### _exec.keys() : _Set_
##### Retorno

( _Set_ )


---

## keysSorted

---

#### _exec.keysSorted() : _Set_
##### Retorno

( _Set_ )


---

## keysToString

---

#### _exec.keysToString(arg0: _Map_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.keysToString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## lastIndexOf

---

#### _exec.lastIndexOf(arg0: _Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### _exec.length() : _int_
##### Retorno

( _int_ )


---

## list

---

#### _exec.list() : _List_
##### Retorno

( _List_ )


---

## listIterator

---

#### _exec.listIterator() : _ListIterator_
##### Retorno

( _ListIterator_ )


---

#### _exec.listIterator(arg0: _int_) : _ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _ListIterator_ )


---

## listOfValues

---

#### _exec.listOfValues() : _List_
##### Retorno

( _List_ )


---

## loadJSON

---

#### _exec.loadJSON(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadJSON(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadProperties(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadProperties(arg0: _Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _exec.loadPropertiesFromString(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## map

---

#### _exec.map() : _Map_
##### Retorno

( _Map_ )


---

## merge

---

#### _exec.merge(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

#### _exec.merge(arg0: _Object_, arg1: _Object_, arg2: _BiFunction_) : _Object_
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

#### _exec.of(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

## push

---

#### _exec.push(arg0: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

## put

---

#### _exec.put(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _exec.put(arg0: _string_, arg1: _Object_) : _Object_
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

#### _exec.putAll(arg0: _Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _exec.putIfAbsent(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _exec.remove(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _exec.remove(arg0: _Object_, arg1: _Object_) : _boolean_
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

#### _exec.removeAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.removeAll() : _void_
##### Retorno

( _void_ )


---

## replace

---

#### _exec.replace(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _exec.replace(arg0: _Object_, arg1: _Object_, arg2: _Object_) : _boolean_
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

#### _exec.replaceAll(arg0: _UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _exec.replaceAll(arg0: _BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _exec.retainAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _exec.safeString(arg0: _Object_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.safeString(arg0: _Object_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _string_ )


---

## saveJSON

---

#### _exec.saveJSON(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveJSON(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveProperties(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

## savePropertiesToString

---

#### _exec.savePropertiesToString() : _string_
##### Retorno

( _string_ )


---

## search

---

#### _exec.search(arg0: _string_, arg1: _string_, arg2: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(arg0: _string_, arg1: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.search(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _boolean_) : _string_
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

## service

---

#### _exec.service(caminho: _string_) : _Values_
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("um-outro-script-em-outra-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | _string_ | Caminho do script com origem em 'services/' a executar. |

##### Retorno

( _Values_ )


---

## set

---

#### _exec.set(arg0: _int_, arg1: _Object_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Values_ )


---

#### _exec.set(arg0: _string_, arg1: _Object_) : _Values_
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

#### _exec.setForceList(arg0: _boolean_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Values_ )


---

## setForceMap

---

#### _exec.setForceMap(arg0: _boolean_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Values_ )


---

## setUrlCharacterEncoding

---

#### _exec.setUrlCharacterEncoding(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## size

---

#### _exec.size() : _int_
##### Retorno

( _int_ )


---

## sizeOfList

---

#### _exec.sizeOfList() : _int_
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### _exec.sizeOfMap() : _int_
##### Retorno

( _int_ )


---

## sort

---

#### _exec.sort(arg0: _Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Comparator_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _exec.spliterator() : _Spliterator_
##### Retorno

( _Spliterator_ )


---

## subList

---

#### _exec.subList(arg0: _int_, arg1: _int_) : _List_
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

#### _exec.toArray() : _Object[]_
##### Retorno

( _Object[]_ )


---

#### _exec.toArray(arg0: _Object[]_) : _Object[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Retorno

( _Object[]_ )


---

## toJSON

---

#### _exec.toJSON(arg0: _List_, arg1: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(arg0: _boolean_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(arg0: _List_, arg1: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(arg0: _List_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON() : _string_
##### Retorno

( _string_ )


---

#### _exec.toJSON(arg0: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(arg0: _boolean_, arg1: _int_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Retorno

( _string_ )


---

#### _exec.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : _string_
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

#### _exec.toJSONObject(arg0: _Object_, arg1: _boolean_) : _Object_
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

#### _exec.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : _string_
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

#### _exec.toList() : _List_
##### Retorno

( _List_ )


---

## toMap

---

#### _exec.toMap() : _Map_
##### Retorno

( _Map_ )


---

## toString

---

#### _exec.toString(arg0: _Values_, arg1: _string_, arg2: _string_, arg3: _String[]_, arg4: _Values_) : _string_
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

#### _exec.toString(arg0: _Values_, arg1: _string_, arg2: _string_, arg3: _String[]_) : _string_
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

#### _exec.toString(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _String[]_, arg4: _Values_) : _string_
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

#### _exec.toString(arg0: _string_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.toString(arg0: _string_, arg1: _string_, arg2: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _exec.toString(arg0: _string_, arg1: _string_, arg2: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _exec.toString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.toString(arg0: _Values_, arg1: _string_, arg2: _string_, arg3: _Values_) : _string_
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

#### _exec.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_, arg3: _String[]_, arg4: _Values_) : _string_
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

#### _exec.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_, arg3: _Values_) : _string_
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

#### _exec.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_, arg3: _String[]_) : _string_
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

#### _exec.toString(arg0: _Iterable_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Iterable_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.toString(arg0: _string_, arg1: _string_, arg2: _String[]_, arg3: _Values_) : _string_
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

#### _exec.toString(arg0: _Values_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.toString(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _Values_) : _string_
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

#### _exec.toString(arg0: _Map_, arg1: _string_, arg2: _string_, arg3: _String[]_) : _string_
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

#### _exec.toString(arg0: _Map_, arg1: _string_, arg2: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.toString() : _string_
##### Retorno

( _string_ )


---

## unset

---

#### _exec.unset(arg0: _string_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Object_ )


---

## unsetAll

---

#### _exec.unsetAll() : _void_
##### Retorno

( _void_ )


---

## values

---

#### _exec.values() : _Collection_
##### Retorno

( _Collection_ )


---

## valuesToString

---

#### _exec.valuesToString(arg0: _Map_, arg1: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(arg0: _Map_, arg1: _string_, arg2: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(arg0: _Map_, arg1: _string_, arg2: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | _string_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(arg0: _Map_, arg1: _string_, arg2: _String[]_, arg3: _Values_) : _string_
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

#### _exec.valuesToString(arg0: _string_, arg1: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(arg0: _string_, arg1: _String[]_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _String[]_ |   |

##### Retorno

( _string_ )


---

#### _exec.valuesToString(arg0: _string_, arg1: _String[]_, arg2: _Values_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _String[]_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _string_ )


---

