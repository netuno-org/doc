---
id: exec
title: Exec
sidebar_label: Exec
---

Realiza a execução de outros scripts, suporta também executar scripts em outras linguagens de programação.
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

#### _exec.add(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.add(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

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

#### _exec.addAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _exec.as(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.as(arg0: _Object_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## asBoolean

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

#### _exec.asBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## asByte

---

#### _exec.asByte(arg0: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.asByte(arg0: string, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

## asCalendar

---

#### _exec.asCalendar(arg0: string) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Calendar_ )


---

#### _exec.asCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Calendar_ |   |

##### Retorno

( _Calendar_ )


---

## asDate

---

#### _exec.asDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _exec.asDate(arg0: string, arg1: _Date_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

##### Retorno

( _Date_ )


---

## asDouble

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

#### _exec.asDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(arg0: string, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

## asFile

---

#### _exec.asFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _exec.asFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _exec.asFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(arg0: string, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

## asHtmlDecode

---

#### _exec.asHtmlDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asHtmlEncode

---

#### _exec.asHtmlEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asInstant

---

#### _exec.asInstant(arg0: string) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Instant_ )


---

#### _exec.asInstant(arg0: string, arg1: _Instant_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Instant_ |   |

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

#### _exec.asInt(arg0: _int_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.asInt(arg0: string, arg1: _short_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

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

#### _exec.asList(arg0: _int_, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _exec.asList(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

#### _exec.asList(arg0: string, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

## asLocalDate

---

#### _exec.asLocalDate(arg0: string) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDate_ )


---

#### _exec.asLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDate_ |   |

##### Retorno

( _LocalDate_ )


---

## asLocalDateTime

---

#### _exec.asLocalDateTime(arg0: string) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDateTime_ )


---

#### _exec.asLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDateTime_ |   |

##### Retorno

( _LocalDateTime_ )


---

## asLocalTime

---

#### _exec.asLocalTime(arg0: string) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalTime_ )


---

#### _exec.asLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalTime_ |   |

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

#### _exec.asLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(arg0: string, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
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

#### _exec.asMap(arg0: _int_, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _exec.asMap(arg0: string) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Map_ )


---

#### _exec.asMap(arg0: string, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

## asSQLDate

---

#### _exec.asSQLDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _exec.asSQLDate(arg0: string, arg1: _Date_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

##### Retorno

( _Date_ )


---

## asSQLTime

---

#### _exec.asSQLTime(arg0: string) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Time_ )


---

#### _exec.asSQLTime(arg0: string, arg1: _Time_) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Time_ |   |

##### Retorno

( _Time_ )


---

## asSQLTimestamp

---

#### _exec.asSQLTimestamp(arg0: string) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Timestamp_ )


---

#### _exec.asSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Timestamp_ |   |

##### Retorno

( _Timestamp_ )


---

## asShort

---

#### _exec.asShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _exec.asShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(arg0: string, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

## asString

---

#### _exec.asString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _exec.asString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _exec.asString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _exec.asString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _exec.asString(arg0: string, arg1: string, arg2: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( string )


---

## asUUID

---

#### _exec.asUUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _exec.asUUID(arg0: string, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

## asValues

---

#### _exec.asValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.asValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.asValues(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.asValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## async

---

#### _exec.async(arg0: _Value[]_) : _[Async](../../objects/Async)_
##### Descrição

Execução de funções de forma assíncrona.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value[]_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## asyncData

---

#### _exec.asyncData(arg0: _Object_, arg1: _Value[]_) : _[Async](../../objects/Async)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Value[]_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## asyncList

---

#### _exec.asyncList(arg0: _[Values](../../objects/Values)_, arg1: _Value_) : _[Async](../../objects/Async)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _Value_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## bind

---

#### _exec.bind(variavel: string, objeto: _Object_) : _Exec_
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
| variavel | string | Nome da variável que estará disponível no outro script que será executado. |
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

#### _exec.cloneJSON() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


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

#### _exec.contains(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.contains(arg0: string, arg1: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

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

#### _exec.core(caminho: string) : _[Values](../../objects/Values)_
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("um-outro-script-em-outra-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do script com origem em 'core/' a executar. |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ensureJail

---

#### _exec.ensureJail(jailPath: string) : _void_
##### Descrição

Define a restrição de segurança em um diretório específico para os objetos processados do tipo de ficheiros, apenas pode ser definido uma única vez.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| jailPath | string | Caminho onde será restringido os ficheiros. |

##### Retorno

( _void_ )


---

## entrySet

---

#### _exec.entrySet() : _Set_
##### Retorno

( _Set_ )


---

## filter

---

#### _exec.filter(arg0: _Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.filter(arg0: _Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _exec.find(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.find(arg0: _Predicate_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Retorno

( _Object_ )


---

#### _exec.find(arg0: _Value_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _Object_ )


---

#### _exec.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _exec.forEach(arg0: _BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.forEach(arg0: _Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.forEach(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _exec.forceList() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _exec.forceMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _exec.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## gc

---

#### _exec.gc() : _void_
##### Descrição

Executa a limpeza da memória através da execução do coletor de lixo ([JVM garbage collector](https://www.baeldung.com/jvm-garbage-collectors)).

##### Como Usar

```javascript
// Libertar memória exetando o Garbage Collector:
_exec.gc();
```

##### Retorno

( _void_ )


---

## get

---

#### _exec.get(chave: _int_) : _Object_
##### Descrição

Obtém o objeto original associado a chave convertido para o tipo da classe especificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | _int_ | Chave para obter o objeto para associado. |

##### Retorno

( _Object_ )

Objeto original convertido para o tipo da classe definida.

---

#### _exec.get(chave: _Object_) : _Object_
##### Descrição

Obtém o objeto original associado a chave convertido para o tipo da classe especificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | _Object_ | Chave para obter o objeto para associado. |

##### Retorno

( _Object_ )

Objeto original convertido para o tipo da classe definida.

---

#### _exec.get(chave: string) : _Object_
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave para obter o objeto para associado. |

##### Retorno

( _Object_ )

Objeto original sem conversões.

---

#### _exec.get(chave: string, tipo: _Class_) : _Object_
##### Descrição

Obtém o objeto original associado a chave convertido para o tipo da classe especificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave para obter o objeto para associado. |
| tipo | _Class_ | Classe que representa o tipo de objeto que deve ser convertido (_cast_). |

##### Retorno

( _Object_ )

Objeto original convertido para o tipo da classe definida.

---

## getBoolean

---

#### _exec.getBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _exec.getBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## getByte

---

#### _exec.getByte(arg0: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(arg0: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(arg0: string, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

## getCalendar

---

#### _exec.getCalendar(arg0: string) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Calendar_ )


---

#### _exec.getCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Calendar_ |   |

##### Retorno

( _Calendar_ )


---

## getDate

---

#### _exec.getDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _exec.getDate(arg0: string, arg1: _Date_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

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

#### _exec.getDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(arg0: string, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

## getFile

---

#### _exec.getFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

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

#### _exec.getFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(arg0: string, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
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

#### _exec.getHtmlDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getHtmlEncode

---

#### _exec.getHtmlEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getInstant

---

#### _exec.getInstant(arg0: string) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Instant_ )


---

#### _exec.getInstant(arg0: string, arg1: _Instant_) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Instant_ |   |

##### Retorno

( _Instant_ )


---

## getInt

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

#### _exec.getInt(arg0: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(arg0: string, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

## getKeys

---

#### _exec.getKeys() : _Set_
##### Retorno

( _Set_ )


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

#### _exec.getList(arg0: _int_, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _exec.getList(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

#### _exec.getList(arg0: string, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

## getLocalDate

---

#### _exec.getLocalDate(arg0: string) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDate_ )


---

#### _exec.getLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDate_ |   |

##### Retorno

( _LocalDate_ )


---

## getLocalDateTime

---

#### _exec.getLocalDateTime(arg0: string) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDateTime_ )


---

#### _exec.getLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalDateTime_ |   |

##### Retorno

( _LocalDateTime_ )


---

## getLocalTime

---

#### _exec.getLocalTime(arg0: string) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalTime_ )


---

#### _exec.getLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _LocalTime_ |   |

##### Retorno

( _LocalTime_ )


---

## getLong

---

#### _exec.getLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _exec.getLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(arg0: string, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

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

#### _exec.getMap(arg0: _int_, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _exec.getMap(arg0: string) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Map_ )


---

#### _exec.getMap(arg0: string, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

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

## getSQLDate

---

#### _exec.getSQLDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _exec.getSQLDate(arg0: string, arg1: _Date_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Date_ |   |

##### Retorno

( _Date_ )


---

## getSQLTime

---

#### _exec.getSQLTime(arg0: string) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Time_ )


---

#### _exec.getSQLTime(arg0: string, arg1: _Time_) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Time_ |   |

##### Retorno

( _Time_ )


---

## getSQLTimestamp

---

#### _exec.getSQLTimestamp(arg0: string) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Timestamp_ )


---

#### _exec.getSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Timestamp_ |   |

##### Retorno

( _Timestamp_ )


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

#### _exec.getShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(arg0: string, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
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

#### _exec.getString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _exec.getString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _exec.getString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _exec.getString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _exec.getString(arg0: string, arg1: string, arg2: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( string )


---

## getURLCharacterEncoding

---

#### _exec.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( string )

Código da codificação dos caracteres.

---

## getUUID

---

#### _exec.getUUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _exec.getUUID(arg0: string, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

## getValues

---

#### _exec.getValues() : _Collection_
##### Retorno

( _Collection_ )


---

#### _exec.getValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.getValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.getValues(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.getValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## has

---

#### _exec.has(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.has(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _exec.has(arg0: string, arg1: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## hasKey

---

#### _exec.hasKey(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

## isEmpty

---

#### _exec.isEmpty() : _boolean_
##### Retorno

( _boolean_ )


---

## isJail

---

#### _exec.isJail() : _boolean_
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### _exec.isList() : _boolean_
##### Retorno

( _boolean_ )


---

#### _exec.isList(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _exec.isLockedAsReadOnly() : _boolean_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

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

#### _exec.keysToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _exec.keysToString(arg0: _Map_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Retorno

( string )


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

#### _exec.list(arg0: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Class_ |   |

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

#### _exec.loadJSON(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadJSON(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadProperties(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

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

#### _exec.loadPropertiesFromString(arg0: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### _exec.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](../../objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### _exec.map() : _Map_
##### Retorno

( _Map_ )


---

## merge

---

#### _exec.merge(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


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

#### _exec.push(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


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

#### _exec.put(arg0: string, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
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

#### _exec.remove(arg0: _int_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Object_ )


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

#### _exec.removeAll() : _void_
##### Retorno

( _void_ )


---

#### _exec.removeAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


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

#### _exec.replaceAll(arg0: _BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _exec.replaceAll(arg0: _UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _exec.replaceAll(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

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

#### _exec.safeString(arg0: _Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( string )


---

#### _exec.safeString(arg0: _Object_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

## saveJSON

---

#### _exec.saveJSON(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveJSON(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveProperties(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### _exec.search(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _exec.search(arg0: string, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.search(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _exec.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.search(arg0: _Map_, arg1: string, arg2: string, arg3: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | string |   |
| arg3 | _boolean_ |   |

##### Retorno

( string )


---

## service

---

#### _exec.service(caminho: string) : _[Values](../../objects/Values)_
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("um-outro-script-em-outra-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do script com origem em 'services/' a executar. |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## set

---

#### _exec.set(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.set(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceList

---

#### _exec.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _exec.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _exec.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfGreaterThanZero

---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfLowerThanZero

---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfNotEmpty

---

#### _exec.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfNotZero

---

#### _exec.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfTrue

---

#### _exec.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setNull

---

#### _exec.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _exec.setURLCharacterEncoding(characterEncoding: string) : _void_
##### Descrição

Define a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| characterEncoding | string | Código da codificação dos caracteres. |

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

## sleep

---

#### _exec.sleep(intervalo: _long_) : _void_
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
| intervalo | _long_ | Intervalo de tempo em milissegundos que deve fazer a pausa na execução. |

##### Retorno

( _void_ )


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

#### _exec.sort(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

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

## toFormMap

---

#### _exec.toFormMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## toJSON

---

#### _exec.toJSON() : string
##### Retorno

( string )


---

#### _exec.toJSON(arg0: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(arg0: _List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(arg0: _List_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


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

#### _exec.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


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

## toProperties

---

#### _exec.toProperties() : string
##### Retorno

( string )


---

## unset

---

#### _exec.unset(arg0: string) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _exec.valuesToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _exec.valuesToString(arg0: string, arg1: _String[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(arg0: string, arg1: _String[]_, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(arg0: _Map_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _exec.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_, arg3: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |
| arg3 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(arg0: _Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

