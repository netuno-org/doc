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

#### _config.add(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.add(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

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

#### _config.addAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _config.as(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.as(arg0: _Object_, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _config.asBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _config.asByte(arg0: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _byte_ )


---

#### _config.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _config.asByte(arg0: string, arg1: _byte_) : _byte_
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

#### _config.asCalendar(arg0: string) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Calendar_ )


---

#### _config.asCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _config.asDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _config.asDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.asDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(arg0: string, arg1: _double_) : _double_
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

#### _config.asFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _config.asFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _config.asFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(arg0: string, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

## asHTMLDecode

---

#### _config.asHTMLDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asHTMLEncode

---

#### _config.asHTMLEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asInstant

---

#### _config.asInstant(arg0: string) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Instant_ )


---

#### _config.asInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _config.asInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _config.asInt(arg0: string, arg1: _short_) : _int_
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

#### _config.asList(arg0: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: _int_, arg1: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Class_ |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: _int_, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: _int_, arg1: _Object_, arg2: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: string, arg1: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Class_ |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: string, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _config.asList(arg0: string, arg1: _Object_, arg2: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Retorno

( _List_ )


---

## asLocalDate

---

#### _config.asLocalDate(arg0: string) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDate_ )


---

#### _config.asLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _config.asLocalDateTime(arg0: string) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDateTime_ )


---

#### _config.asLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _config.asLocalTime(arg0: string) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalTime_ )


---

#### _config.asLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _config.asLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _config.asLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _config.asLong(arg0: string, arg1: _long_) : _long_
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

#### _config.asMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _config.asMap(arg0: _int_, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _config.asMap(arg0: string) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Map_ )


---

#### _config.asMap(arg0: string, arg1: _Object_) : _Map_
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

#### _config.asSQLDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _config.asSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.asSQLTime(arg0: string) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Time_ )


---

#### _config.asSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _config.asSQLTimestamp(arg0: string) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Timestamp_ )


---

#### _config.asSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _config.asShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _config.asShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _config.asShort(arg0: string, arg1: _short_) : _short_
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

#### _config.asString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _config.asString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _config.asString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _config.asString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _config.asString(arg0: string, arg1: string, arg2: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( string )


---

## asUID

---

#### _config.asUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.asUID(arg0: string, arg1: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.asUID(arg0: string, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

## asUUID

---

#### _config.asUUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.asUUID(arg0: string, arg1: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.asUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _config.asValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.asValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.asValues(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.asValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## clear

---

#### _config.clear() : _void_
##### Retorno

( _void_ )


---

## cloneJSON

---

#### _config.cloneJSON() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


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

#### _config.contains(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.contains(arg0: string, arg1: _Object_) : _boolean_
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

#### _config.ensureJail(jailPath: string) : _void_
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

#### _config.entrySet() : _Set_
##### Retorno

( _Set_ )


---

## filter

---

#### _config.filter(arg0: _Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.filter(arg0: _Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _config.find(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.find(arg0: _Predicate_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Retorno

( _Object_ )


---

#### _config.find(arg0: _Value_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _Object_ )


---

#### _config.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _config.forEach(arg0: _BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(arg0: _Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _config.forceList() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _config.forceMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _config.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.fromJSON(arg0: _Response_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Response_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## get

---

#### _config.get(chave: _int_) : _Object_
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

#### _config.get(chave: _Object_) : _Object_
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

#### _config.get(chave: string) : _Object_
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

#### _config.get(chave: string, tipo: _Class_) : _Object_
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

#### _config.getBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _config.getBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _config.getByte(arg0: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(arg0: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(arg0: string, arg1: _byte_) : _byte_
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

#### _config.getCalendar(arg0: string) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Calendar_ )


---

#### _config.getCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _config.getDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _config.getDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.getDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(arg0: string, arg1: _double_) : _double_
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

#### _config.getFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

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

#### _config.getFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(arg0: string, arg1: _float_) : _float_
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

## getHTMLDecode

---

#### _config.getHTMLDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getHTMLEncode

---

#### _config.getHTMLEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getInstant

---

#### _config.getInstant(arg0: string) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Instant_ )


---

#### _config.getInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _config.getInt(arg0: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _int_ )


---

#### _config.getInt(arg0: string, arg1: _int_) : _int_
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

#### _config.getKeys() : _Set_
##### Retorno

( _Set_ )


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

#### _config.getList(arg0: _int_, arg1: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Class_ |   |

##### Retorno

( _List_ )


---

#### _config.getList(arg0: _int_, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _config.getList(arg0: _int_, arg1: _Object_, arg2: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Retorno

( _List_ )


---

#### _config.getList(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

#### _config.getList(arg0: string, arg1: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Class_ |   |

##### Retorno

( _List_ )


---

#### _config.getList(arg0: string, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _config.getList(arg0: string, arg1: _Object_, arg2: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |
| arg2 | _Class_ |   |

##### Retorno

( _List_ )


---

## getLocalDate

---

#### _config.getLocalDate(arg0: string) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDate_ )


---

#### _config.getLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _config.getLocalDateTime(arg0: string) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDateTime_ )


---

#### _config.getLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _config.getLocalTime(arg0: string) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalTime_ )


---

#### _config.getLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _config.getLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _config.getLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _config.getLong(arg0: string, arg1: _long_) : _long_
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

#### _config.getMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _config.getMap(arg0: _int_, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _config.getMap(arg0: string) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Map_ )


---

#### _config.getMap(arg0: string, arg1: _Object_) : _Map_
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

#### _config.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _config.getSQLDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _config.getSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _config.getSQLTime(arg0: string) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Time_ )


---

#### _config.getSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _config.getSQLTimestamp(arg0: string) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Timestamp_ )


---

#### _config.getSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _config.getShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _config.getShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _config.getShort(arg0: string, arg1: _short_) : _short_
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

#### _config.getSize() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### _config.getString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _config.getString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _config.getString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _config.getString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _config.getString(arg0: string, arg1: string, arg2: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( string )


---

## getUID

---

#### _config.getUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.getUID(arg0: string, arg1: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.getUID(arg0: string, arg1: _UUID_) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _UUID_ |   |

##### Retorno

( _UUID_ )


---

## getURLCharacterEncoding

---

#### _config.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( string )

Código da codificação dos caracteres.

---

## getUUID

---

#### _config.getUUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.getUUID(arg0: string, arg1: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _UUID_ )


---

#### _config.getUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _config.getValues() : _Collection_
##### Retorno

( _Collection_ )


---

#### _config.getValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.getValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.getValues(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.getValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _config.has(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.has(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _config.has(arg0: string, arg1: _Object_) : _boolean_
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

#### _config.hasKey(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

## isEmpty

---

#### _config.isEmpty() : _boolean_
##### Retorno

( _boolean_ )


---

## isJail

---

#### _config.isJail() : _boolean_
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### _config.isList() : _boolean_
##### Retorno

( _boolean_ )


---

#### _config.isList(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _config.isLockedAsReadOnly() : _boolean_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

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

## join

---

#### _config.join(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


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

#### _config.keysToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _config.keysToString(arg0: _Map_, arg1: string) : string
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

#### _config.list(arg0: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Class_ |   |

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

#### _config.loadJSON(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.loadJSON(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

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

#### _config.loadPropertiesFromString(arg0: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### _config.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](../../objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### _config.map() : _Map_
##### Retorno

( _Map_ )


---

## merge

---

#### _config.merge(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


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

#### _config.of(arg0: _Object[]_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.of(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _config.of(arg0: _List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.of(arg0: _Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _config.ofList(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _config.ofMap(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## push

---

#### _config.push(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


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

#### _config.put(arg0: string, arg1: _Object_) : _Object_
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

#### _config.remove(arg0: _int_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Object_ )


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

#### _config.removeAll() : _void_
##### Retorno

( _void_ )


---

#### _config.removeAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


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

#### _config.replaceAll(arg0: _BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(arg0: _UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

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

#### _config.safeString(arg0: _Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( string )


---

#### _config.safeString(arg0: _Object_, arg1: string) : string
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

#### _config.saveJSON(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.saveJSON(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.saveProperties(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### _config.search(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _config.search(arg0: string, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _config.search(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _config.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Retorno

( string )


---

#### _config.search(arg0: _Map_, arg1: string, arg2: string, arg3: _boolean_) : string
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

## set

---

#### _config.set(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.set(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _config.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _config.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _config.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _config.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
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

#### _config.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _config.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _config.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _config.setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### _config.sort(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

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

## toByteArray

---

#### _config.toByteArray() : _byte[]_
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### _config.toDoubleArray() : _double[]_
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### _config.toFloatArray() : _float[]_
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### _config.toFormMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _config.toIntArray() : _int[]_
##### Retorno

( _int[]_ )


---

## toJSON

---

#### _config.toJSON() : string
##### Retorno

( string )


---

#### _config.toJSON(arg0: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _List_, arg1: _int_) : string
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

#### _config.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : string
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

#### _config.toList() : _List_
##### Retorno

( _List_ )


---

#### _config.toList(arg0: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Class_ |   |

##### Retorno

( _List_ )


---

## toLongArray

---

#### _config.toLongArray() : _long[]_
##### Retorno

( _long[]_ )


---

## toMap

---

#### _config.toMap() : _Map_
##### Retorno

( _Map_ )


---

## toProperties

---

#### _config.toProperties() : string
##### Retorno

( string )


---

## toShortArray

---

#### _config.toShortArray() : _short[]_
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### _config.toStringArray() : _String[]_
##### Retorno

( _String[]_ )


---

## unset

---

#### _config.unset(arg0: string) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _config.valuesToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: string, arg1: _String[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: string, arg1: _String[]_, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: _Map_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_, arg3: _[Values](../../objects/Values)_) : string
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

#### _config.valuesToString(arg0: _Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

