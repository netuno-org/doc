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

#### _config.add(arg0: _int_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.add(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _config.addAll(arg0: _int_, arg1: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _config.addAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _config.as(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.as(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

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

#### _config.asCalendar(arg0: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.asCalendar(arg0: string, arg1: _java.util.Calendar_) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## asDate

---

#### _config.asDate(arg0: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.asDate(arg0: string, arg1: _java.util.Date_) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


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

#### _config.asInstant(arg0: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.asInstant(arg0: string, arg1: _java.time.Instant_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


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

#### _config.asList(arg0: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(arg0: _int_, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(arg0: _int_, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(arg0: _int_, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(arg0: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(arg0: string, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(arg0: string, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(arg0: string, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## asLocalDate

---

#### _config.asLocalDate(arg0: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(arg0: string, arg1: _java.time.LocalDate_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### _config.asLocalDateTime(arg0: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(arg0: string, arg1: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### _config.asLocalTime(arg0: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(arg0: string, arg1: _java.time.LocalTime_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


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

#### _config.asMap(arg0: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.asMap(arg0: _int_, arg1: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.asMap(arg0: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.asMap(arg0: string, arg1: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

## asSQLDate

---

#### _config.asSQLDate(arg0: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.asSQLDate(arg0: string, arg1: _java.sql.Date_) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## asSQLTime

---

#### _config.asSQLTime(arg0: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.asSQLTime(arg0: string, arg1: _java.sql.Time_) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### _config.asSQLTimestamp(arg0: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(arg0: string, arg1: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


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

#### _config.asUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## asUUID

---

#### _config.asUUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## asValues

---

#### _config.asValues(indice: _int_) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indice | _int_ | Índex para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### _config.asValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indice | _int_ | Índex para obter o objeto associado. |
| valorPadrao | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### _config.asValues(chave: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | A chave para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### _config.asValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | A chave para obter o objeto associado. |
| valorPadrao | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

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

#### _config.compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## computeIfAbsent

---

#### _config.computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.util.function.Function_ |   |

##### Retorno

( _java.lang.Object_ )


---

## computeIfPresent

---

#### _config.computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## contains

---

#### _config.contains(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.contains(arg0: string, arg1: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsAll

---

#### _config.containsAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _config.containsKey(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _config.containsValue(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _config.entrySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### _config.filter(arg0: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.filter(arg0: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _config.find(arg0: string, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.find(arg0: _java.util.function.Predicate_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.find(arg0: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


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

#### _config.forEach(arg0: _java.util.function.BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(arg0: _java.util.function.Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

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

#### _config.fromJSON(arg0: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## get

---

#### _config.get(chave: _int_) : _java.lang.Object_
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | _int_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### _config.get(chave: _java.lang.Object_) : _java.lang.Object_
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | _java.lang.Object_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### _config.get(chave: string) : _java.lang.Object_
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### _config.get(chave: string, tipo: _java.lang.Class_) : _java.lang.Object_
##### Descrição

Obtém o objeto original associado a chave, mas convertido para o tipo da classe especificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave para obter o objeto associado. |
| tipo | _java.lang.Class_ | Classe que representa o tipo de objeto que deve ser convertido (_cast_). |

##### Retorno

( _java.lang.Object_ )

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

#### _config.getCalendar(arg0: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.getCalendar(arg0: string, arg1: _java.util.Calendar_) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## getDate

---

#### _config.getDate(arg0: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.getDate(arg0: string, arg1: _java.util.Date_) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


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

#### _config.getInstant(arg0: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.getInstant(arg0: string, arg1: _java.time.Instant_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


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

#### _config.getKeys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### _config.getList(arg0: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(arg0: _int_, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(arg0: _int_, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(arg0: _int_, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(arg0: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(arg0: string, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(arg0: string, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(arg0: string, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## getLocalDate

---

#### _config.getLocalDate(arg0: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(arg0: string, arg1: _java.time.LocalDate_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### _config.getLocalDateTime(arg0: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(arg0: string, arg1: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### _config.getLocalTime(arg0: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(arg0: string, arg1: _java.time.LocalTime_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


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

#### _config.getMap(arg0: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.getMap(arg0: _int_, arg1: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.getMap(arg0: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.getMap(arg0: string, arg1: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

## getOrDefault

---

#### _config.getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## getSQLDate

---

#### _config.getSQLDate(arg0: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.getSQLDate(arg0: string, arg1: _java.sql.Date_) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## getSQLTime

---

#### _config.getSQLTime(arg0: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.getSQLTime(arg0: string, arg1: _java.sql.Time_) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### _config.getSQLTimestamp(arg0: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(arg0: string, arg1: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


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

#### _config.getUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


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

#### _config.getUUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## getValues

---

#### _config.getValues() : _java.util.Collection_
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### _config.getValues(indice: _int_) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indice | _int_ | Índice para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### _config.getValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indice | _int_ | Índice para obter o objeto associado. |
| valorPadrao | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### _config.getValues(chave: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | A chave para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### _config.getValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | A chave para obter o objeto associado. |
| valorPadrao | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

## has

---

#### _config.has(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _config.has(arg0: string, arg1: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

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

#### _config.hasValue(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### _config.indexOf(arg0: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _config.is(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _config.isList(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _config.isMap(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _config.isMergeable(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## iterator

---

#### _config.iterator() : _java.util.Iterator_
##### Retorno

( _java.util.Iterator_ )


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

#### _config.keySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### _config.keys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### _config.keysSorted() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


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

#### _config.keysToString(arg0: _java.util.Map_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

## lastIndexOf

---

#### _config.lastIndexOf(arg0: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _config.list() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _config.list(arg0: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _config.listIterator() : _java.util.ListIterator_
##### Retorno

( _java.util.ListIterator_ )


---

#### _config.listIterator(arg0: _int_) : _java.util.ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _config.listOfValues() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### _config.loadJSON(arg0: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.loadJSON(arg0: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(arg0: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(arg0: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(arg0: _java.util.Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Properties_ |   |

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

#### _config.map() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## merge

---

#### _config.merge(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## of

---

#### _config.of(arg0: _[Ljava.lang.Object;_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Ljava.lang.Object;_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.of(arg0: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.of(arg0: _java.util.List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.of(arg0: _java.util.Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _config.ofList(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _config.ofMap(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## push

---

#### _config.push(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### _config.put(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.put(arg0: string, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## putAll

---

#### _config.putAll(arg0: _java.util.Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _config.putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## remove

---

#### _config.remove(arg0: _int_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.remove(arg0: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## removeAll

---

#### _config.removeAll() : _void_
##### Retorno

( _void_ )


---

#### _config.removeAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### _config.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## replaceAll

---

#### _config.replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(arg0: _java.util.function.UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _config.retainAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _config.safeString(arg0: _java.lang.Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( string )


---

#### _config.safeString(arg0: _java.lang.Object_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

## saveJSON

---

#### _config.saveJSON(arg0: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.saveJSON(arg0: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(arg0: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.saveProperties(arg0: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Writer_ |   |

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

#### _config.search(arg0: _java.util.Map_, arg1: string, arg2: string, arg3: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | string |   |
| arg3 | _boolean_ |   |

##### Retorno

( string )


---

## set

---

#### _config.set(arg0: _int_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.set(arg0: string, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

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

#### _config.sort(arg0: _java.util.Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _config.sort(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _config.spliterator() : _java.util.Spliterator_
##### Retorno

( _java.util.Spliterator_ )


---

## subList

---

#### _config.subList(arg0: _int_, arg1: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## toArray

---

#### _config.toArray() : _[Ljava.lang.Object;_
##### Retorno

( _[Ljava.lang.Object;_ )


---

#### _config.toArray(arg0: _[Ljava.lang.Object;_) : _[Ljava.lang.Object;_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Ljava.lang.Object;_ |   |

##### Retorno

( _[Ljava.lang.Object;_ )


---

## toByteArray

---

#### _config.toByteArray() : _[B_
##### Retorno

( _[B_ )


---

## toDoubleArray

---

#### _config.toDoubleArray() : _[D_
##### Retorno

( _[D_ )


---

## toFloatArray

---

#### _config.toFloatArray() : _[F_
##### Retorno

( _[F_ )


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

#### _config.toIntArray() : _[I_
##### Retorno

( _[I_ )


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

#### _config.toJSON(arg0: _java.util.List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _java.util.List_, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _java.util.List_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

#### _config.toJSON(arg0: _java.util.List_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


---

## toJSONObject

---

#### _config.toJSONObject(arg0: _java.lang.Object_, arg1: _boolean_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _java.lang.Object_ )


---

## toJSONString

---

#### _config.toJSONString(arg0: _java.lang.Object_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

## toList

---

#### _config.toList() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _config.toList(arg0: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _config.toLongArray() : _[J_
##### Retorno

( _[J_ )


---

## toMap

---

#### _config.toMap() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## toProperties

---

#### _config.toProperties() : string
##### Retorno

( string )


---

## toShortArray

---

#### _config.toShortArray() : _[S_
##### Retorno

( _[S_ )


---

## toStringArray

---

#### _config.toStringArray() : _[Ljava.lang.String;_
##### Retorno

( _[Ljava.lang.String;_ )


---

## unset

---

#### _config.unset(arg0: string) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### _config.unsetAll() : _void_
##### Retorno

( _void_ )


---

## values

---

#### _config.values() : _java.util.Collection_
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

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

#### _config.valuesToString(arg0: string, arg1: _[Ljava.lang.String;_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Ljava.lang.String;_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: string, arg1: _[Ljava.lang.String;_, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Ljava.lang.String;_ |   |
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

#### _config.valuesToString(arg0: _java.util.Map_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Ljava.lang.String;_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Ljava.lang.String;_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Ljava.lang.String;_, arg3: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Ljava.lang.String;_ |   |
| arg3 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

