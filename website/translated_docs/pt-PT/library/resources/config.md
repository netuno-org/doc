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

#### _config.add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _config.addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _config.addAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _config.as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |
| oDefault | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## asBoolean

---

#### _config.asBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _config.asBoolean(key: string, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## asByte

---

#### _config.asByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### _config.asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _config.asByte(key: string, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

## asCalendar

---

#### _config.asCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## asDate

---

#### _config.asDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

## asDouble

---

#### _config.asDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### _config.asDouble(key: string, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

## asFile

---

#### _config.asFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _config.asFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### _config.asFloat(key: string, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

## asHTMLDecode

---

#### _config.asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asHTMLEncode

---

#### _config.asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asInstant

---

#### _config.asInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

## asInt

---

#### _config.asInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.asInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.asInt(key: string, defaultValue: _short_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _short_ |   |

##### Retorno

( _int_ )


---

## asList

---

#### _config.asList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## asLocalDate

---

#### _config.asLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### _config.asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### _config.asLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## asLong

---

#### _config.asLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### _config.asLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### _config.asLong(key: string, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

## asMap

---

#### _config.asMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.asMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

## asSQLDate

---

#### _config.asSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## asSQLTime

---

#### _config.asSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### _config.asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## asShort

---

#### _config.asShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### _config.asShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### _config.asShort(key: string, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

## asString

---

#### _config.asString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### _config.asString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _config.asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### _config.asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _config.asString(key: string, defaultValue: string, charsetName: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |
| charsetName | string |   |

##### Retorno

( string )


---

## asUID

---

#### _config.asUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## asUUID

---

#### _config.asUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

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

#### _config.contains(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.contains(key: string, value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsAll

---

#### _config.containsAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _config.containsKey(key: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _config.containsValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

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

#### _config.filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _config.find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _config.forEach(action: _java.util.function.BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(action: _java.util.function.Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _config.forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

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

#### _config.fromJSON(content: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

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

#### _config.getBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _config.getBoolean(key: string, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## getByte

---

#### _config.getByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(key: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _byte_ )


---

#### _config.getByte(key: string, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

## getCalendar

---

#### _config.getCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _config.getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## getDate

---

#### _config.getDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _config.getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

## getDouble

---

#### _config.getDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### _config.getDouble(key: string, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

## getFile

---

#### _config.getFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _config.getFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### _config.getFloat(key: string, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _float_ |   |

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

#### _config.getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getHTMLEncode

---

#### _config.getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getInstant

---

#### _config.getInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _config.getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

## getInt

---

#### _config.getInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### _config.getInt(key: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _int_ )


---

#### _config.getInt(key: string, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _int_ |   |

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

#### _config.getList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _config.getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## getLocalDate

---

#### _config.getLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _config.getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### _config.getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _config.getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### _config.getLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _config.getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## getLong

---

#### _config.getLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### _config.getLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### _config.getLong(key: string, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

## getMap

---

#### _config.getMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.getMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _config.getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

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

#### _config.getSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _config.getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## getSQLTime

---

#### _config.getSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _config.getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### _config.getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _config.getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## getShort

---

#### _config.getShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### _config.getShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### _config.getShort(key: string, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _short_ |   |

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

#### _config.getString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### _config.getString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _config.getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### _config.getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _config.getString(key: string, defaultValue: string, charsetName: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |
| charsetName | string |   |

##### Retorno

( string )


---

## getUID

---

#### _config.getUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

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

#### _config.getUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _config.getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.util.UUID_ |   |

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

#### _config.has(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _config.has(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _config.has(key: string, value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## hasKey

---

#### _config.hasKey(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _config.hasValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### _config.indexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _config.is(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _config.isList(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _config.isMap(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _config.isMergeable(object: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

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

#### _config.join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

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

#### _config.keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

#### _config.keysToString(map: _java.util.Map_, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Retorno

( string )


---

## lastIndexOf

---

#### _config.lastIndexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _config.list(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _config.listIterator() : _java.util.ListIterator_
##### Retorno

( _java.util.ListIterator_ )


---

#### _config.listIterator(index: _int_) : _java.util.ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

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

#### _config.loadJSON(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.loadJSON(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _config.loadProperties(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _config.loadProperties(properties: _java.util.Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _config.loadPropertiesFromString(data: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | string |   |

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

#### _config.merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

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

#### _config.of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.of(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| list | _java.util.List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _config.ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _config.ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## push

---

#### _config.push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### _config.put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.put(key: string, value: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## putAll

---

#### _config.putAll(m: _java.util.Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| m | _java.util.Map_ |   |

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

#### _config.remove(i: _int_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| i | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _config.remove(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _config.removeAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

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

#### _config.replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _config.replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _config.retainAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _config.safeString(object: _java.lang.Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( string )


---

#### _config.safeString(object: _java.lang.Object_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

## saveJSON

---

#### _config.saveJSON(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.saveJSON(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _config.saveProperties(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _config.saveProperties(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### _config.search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( string )


---

#### _config.search(content: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### _config.search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Retorno

( string )


---

#### _config.search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### _config.search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

## set

---

#### _config.set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceList

---

#### _config.setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceList | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _config.setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceMap | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _config.setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfGreaterThanZero

---

#### _config.setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfLowerThanZero

---

#### _config.setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfNotEmpty

---

#### _config.setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfNotZero

---

#### _config.setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfTrue

---

#### _config.setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setNull

---

#### _config.setNull(key: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

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

#### _config.sort(c: _java.util.Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _config.sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

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

#### _config.subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| fromIndex | _int_ |   |
| toIndex | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## toArray

---

#### _config.toArray() : _[Ljava.lang.Object;[]_
##### Retorno

( _[Ljava.lang.Object;[]_ )


---

#### _config.toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Ljava.lang.Object;[]_ )


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

#### _config.toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _config.toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

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

#### _config.toJSON(htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### _config.toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _config.toJSON(indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _config.toJSON(values: _java.util.List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |

##### Retorno

( string )


---

#### _config.toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### _config.toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _config.toJSON(values: _java.util.List_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

## toJSONObject

---

#### _config.toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |
| htmlEscape | _boolean_ |   |

##### Retorno

( _java.lang.Object_ )


---

## toJSONString

---

#### _config.toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

## toList

---

#### _config.toList() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _config.toList(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _config.toLongArray() : _long[]_
##### Retorno

( _long[]_ )


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

#### _config.toShortArray() : _short[]_
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### _config.toStringArray() : _[Ljava.lang.String;[]_
##### Retorno

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### _config.unset(key: string) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

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

#### _config.valuesToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

#### _config.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(map: _java.util.Map_, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Retorno

( string )


---

#### _config.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _config.valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

