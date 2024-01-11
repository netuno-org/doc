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

#### add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### addAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### asBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### asBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### asBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### asByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### asByte(key: string, defaultValue: _byte_) : _byte_
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

#### asCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### asDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### asDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### asDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### asDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### asDouble(key: string, defaultValue: _double_) : _double_
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

#### asFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### asFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### asFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### asFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### asFloat(key: string, defaultValue: _float_) : _float_
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

#### asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asHTMLEncode

---

#### asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asInstant

---

#### asInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### asInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### asInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### asInt(key: string, defaultValue: _short_) : _int_
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

#### asList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### asLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### asLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### asLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### asLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### asLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### asLong(key: string, defaultValue: _long_) : _long_
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

#### asMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### asMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### asSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### asSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### asShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### asShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### asShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### asShort(key: string, defaultValue: _short_) : _short_
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

#### asString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### asString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### asString(key: string, defaultValue: string, charsetName: string) : string
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

#### asUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### asUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### asValues(indice: _int_) : _[Values](../../objects/Values)_
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

#### asValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### asValues(chave: string) : _[Values](../../objects/Values)_
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

#### asValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### clear() : _void_
##### Retorno

( _void_ )


---

## cloneJSON

---

#### cloneJSON() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## compute

---

#### compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
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

#### computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### contains(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### contains(key: string, value: _java.lang.Object_) : _boolean_
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

#### containsAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### containsKey(key: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### containsValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## ensureJail

---

#### ensureJail(jailPath: string) : _void_
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

#### entrySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### forEach(action: _java.util.function.BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### forEach(action: _java.util.function.Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### forceList() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### forceMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### fromJSON(content: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## get

---

#### get(chave: _int_) : _java.lang.Object_
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

#### get(chave: _java.lang.Object_) : _java.lang.Object_
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

#### get(chave: string) : _java.lang.Object_
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

#### get(chave: string, tipo: _java.lang.Class_) : _java.lang.Object_
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

#### getBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### getBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### getBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### getByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### getByte(key: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _byte_ )


---

#### getByte(key: string, defaultValue: _byte_) : _byte_
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

#### getCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### getDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### getDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### getDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### getDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### getDouble(key: string, defaultValue: _double_) : _double_
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

#### getFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

---

#### getFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### getFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### getFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### getFloat(key: string, defaultValue: _float_) : _float_
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

#### getForceList() : _boolean_
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### getForceMap() : _boolean_
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getHTMLEncode

---

#### getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getInstant

---

#### getInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### getInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### getInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### getInt(key: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _int_ )


---

#### getInt(key: string, defaultValue: _int_) : _int_
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

#### getKeys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### getList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### getLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### getLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### getLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### getLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### getLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### getLong(key: string, defaultValue: _long_) : _long_
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

#### getMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### getMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

## getMethod

---

#### getMethod() : string
##### Retorno

( string )


---

## getOrDefault

---

#### getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### getSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### getSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## getService

---

#### getService() : string
##### Retorno

( string )


---

## getShort

---

#### getShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### getShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### getShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### getShort(key: string, defaultValue: _short_) : _short_
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

#### getSize() : _int_
##### Retorno

( _int_ )


---

## getStatusCode

---

#### getStatusCode() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### getString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### getString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### getString(key: string, defaultValue: string, charsetName: string) : string
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

#### getUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( string )

Código da codificação dos caracteres.

---

## getUUID

---

#### getUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### getValues() : _java.util.Collection_
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### getValues(indice: _int_) : _[Values](../../objects/Values)_
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

#### getValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### getValues(chave: string) : _[Values](../../objects/Values)_
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

#### getValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### has(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### has(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### has(key: string, value: _java.lang.Object_) : _boolean_
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

#### hasKey(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### hasValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## in

---

#### in() : _boolean_
##### Retorno

( _boolean_ )


---

#### in(in: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _boolean_ |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## indexOf

---

#### indexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### is(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### isEmpty() : _boolean_
##### Retorno

( _boolean_ )


---

## isIn

---

#### isIn() : _boolean_
##### Retorno

( _boolean_ )


---

## isJail

---

#### isJail() : _boolean_
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### isList() : _boolean_
##### Retorno

( _boolean_ )


---

#### isList(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### isLockedAsReadOnly() : _boolean_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### isMap() : _boolean_
##### Retorno

( _boolean_ )


---

#### isMap(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### isMergeable(object: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMethod

---

#### isMethod(otherMethod: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| otherMethod | string |   |

##### Retorno

( _boolean_ )


---

## isOut

---

#### isOut() : _boolean_
##### Retorno

( _boolean_ )


---

## iterator

---

#### iterator() : _java.util.Iterator_
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

## keySet

---

#### keySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### keys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### keysSorted() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

#### keysToString(map: _java.util.Map_, splitter: string) : string
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

#### lastIndexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### length() : _int_
##### Retorno

( _int_ )


---

## list

---

#### list() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### list(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### listIterator() : _java.util.ListIterator_
##### Retorno

( _java.util.ListIterator_ )


---

#### listIterator(index: _int_) : _java.util.ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### listOfValues() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### loadJSON(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### loadJSON(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### loadProperties(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### loadProperties(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### loadProperties(properties: _java.util.Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### loadPropertiesFromString(data: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | string |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### lockAsReadOnly() : _[Values](../../objects/Values)_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](../../objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### map() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## merge

---

#### merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## method

---

#### method() : string
##### Retorno

( string )


---

#### method(method: string) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| method | string |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## of

---

#### of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### of(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| list | _java.util.List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## out

---

#### out() : _boolean_
##### Retorno

( _boolean_ )


---

#### out(out: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _boolean_ |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## push

---

#### push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### put(key: string, value: _java.lang.Object_) : _java.lang.Object_
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

#### putAll(m: _java.util.Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| m | _java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### remove(i: _int_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| i | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### remove(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
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

#### removeAll() : _void_
##### Retorno

( _void_ )


---

#### removeAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
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

#### replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### retainAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### safeString(object: _java.lang.Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( string )


---

#### safeString(object: _java.lang.Object_, defaultValue: string) : string
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

#### saveJSON(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### saveJSON(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### saveProperties(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### saveProperties(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( string )


---

#### search(content: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Retorno

( string )


---

#### search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
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

## service

---

#### service() : string
##### Retorno

( string )


---

#### service(service: string) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| service | string |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## set

---

#### set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceList | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceMap | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
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

#### setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIn

---

#### setIn(in: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _boolean_ |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## setMethod

---

#### setMethod(method: string) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| method | string |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## setNull

---

#### setNull(key: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setOut

---

#### setOut(out: _boolean_) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _boolean_ |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## setService

---

#### setService(service: string) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| service | string |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## setStatusCode

---

#### setStatusCode(statusCode: _int_) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| statusCode | _int_ |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## setURLCharacterEncoding

---

#### setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### size() : _int_
##### Retorno

( _int_ )


---

## sizeOfList

---

#### sizeOfList() : _int_
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### sizeOfMap() : _int_
##### Retorno

( _int_ )


---

## sort

---

#### sort(c: _java.util.Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### spliterator() : _java.util.Spliterator_
##### Retorno

( _java.util.Spliterator_ )


---

## statusCode

---

#### statusCode() : _int_
##### Retorno

( _int_ )


---

#### statusCode(statusCode: _int_) : _[DataSchema](../../objects/DataSchema)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| statusCode | _int_ |   |

##### Retorno

( _[DataSchema](../../objects/DataSchema)_ )


---

## subList

---

#### subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
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

#### toArray() : _[Ljava.lang.Object;[]_
##### Retorno

( _[Ljava.lang.Object;[]_ )


---

#### toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### toByteArray() : _byte[]_
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### toDoubleArray() : _double[]_
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### toFloatArray() : _float[]_
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### toFormMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### toIntArray() : _[I_
##### Retorno

( _[I_ )


---

## toJSON

---

#### toJSON() : string
##### Retorno

( string )


---

#### toJSON(htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### toJSON(indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### toJSON(values: _java.util.List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |

##### Retorno

( string )


---

#### toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### toJSON(values: _java.util.List_, indentFactor: _int_) : string
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

#### toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
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

#### toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
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

#### toList() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### toList(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### toLongArray() : _long[]_
##### Retorno

( _long[]_ )


---

## toMap

---

#### toMap() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## toProperties

---

#### toProperties() : string
##### Retorno

( string )


---

## toShortArray

---

#### toShortArray() : _short[]_
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### toStringArray() : _[Ljava.lang.String;[]_
##### Retorno

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### unset(key: string) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### unsetAll() : _void_
##### Retorno

( _void_ )


---

## values

---

#### values() : _java.util.Collection_
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
| splitter | string |   |

##### Retorno

( string )


---

#### valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### valuesToString(map: _java.util.Map_, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Retorno

( string )


---

#### valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
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

#### valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

