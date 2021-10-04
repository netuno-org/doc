---
id: dataSchema
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

#### _dataSchema.add(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.add(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _dataSchema.addAll(arg0: _int_, arg1: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.addAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _dataSchema.as(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.as(arg0: _Object_, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.asBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.asBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _dataSchema.asByte(arg0: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _dataSchema.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _dataSchema.asByte(arg0: string, arg1: _byte_) : _byte_
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

#### _dataSchema.asCalendar(arg0: string) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Calendar_ )


---

#### _dataSchema.asCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _dataSchema.asDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _dataSchema.asDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.asDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _dataSchema.asDouble(arg0: _int_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _dataSchema.asDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _dataSchema.asDouble(arg0: string, arg1: _double_) : _double_
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

#### _dataSchema.asFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _dataSchema.asFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

#### _dataSchema.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _dataSchema.asFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _dataSchema.asFloat(arg0: string, arg1: _float_) : _float_
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

#### _dataSchema.asHtmlDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asHtmlEncode

---

#### _dataSchema.asHtmlEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asInstant

---

#### _dataSchema.asInstant(arg0: string) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Instant_ )


---

#### _dataSchema.asInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _dataSchema.asInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _dataSchema.asInt(arg0: _int_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

#### _dataSchema.asInt(arg0: string, arg1: _short_) : _int_
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

#### _dataSchema.asList(arg0: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _List_ )


---

#### _dataSchema.asList(arg0: _int_, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _dataSchema.asList(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

#### _dataSchema.asList(arg0: string, arg1: _Object_) : _List_
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

#### _dataSchema.asLocalDate(arg0: string) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDate_ )


---

#### _dataSchema.asLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _dataSchema.asLocalDateTime(arg0: string) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDateTime_ )


---

#### _dataSchema.asLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _dataSchema.asLocalTime(arg0: string) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalTime_ )


---

#### _dataSchema.asLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _dataSchema.asLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

#### _dataSchema.asLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _dataSchema.asLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _dataSchema.asLong(arg0: string, arg1: _long_) : _long_
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

#### _dataSchema.asMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _dataSchema.asMap(arg0: _int_, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _dataSchema.asMap(arg0: string) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Map_ )


---

#### _dataSchema.asMap(arg0: string, arg1: _Object_) : _Map_
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

#### _dataSchema.asSQLDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _dataSchema.asSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.asSQLTime(arg0: string) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Time_ )


---

#### _dataSchema.asSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _dataSchema.asSQLTimestamp(arg0: string) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Timestamp_ )


---

#### _dataSchema.asSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
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

#### _dataSchema.asShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

#### _dataSchema.asShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _dataSchema.asShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _dataSchema.asShort(arg0: string, arg1: _short_) : _short_
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

#### _dataSchema.asString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _dataSchema.asString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _dataSchema.asString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _dataSchema.asString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _dataSchema.asString(arg0: string, arg1: string, arg2: string) : string
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

#### _dataSchema.asUUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _dataSchema.asUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _dataSchema.asValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.asValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.asValues(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.asValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.clear() : _void_
##### Retorno

( _void_ )


---

## cloneJSON

---

#### _dataSchema.cloneJSON() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## compute

---

#### _dataSchema.compute(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _dataSchema.computeIfAbsent(arg0: _Object_, arg1: _Function_) : _Object_
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

#### _dataSchema.computeIfPresent(arg0: _Object_, arg1: _BiFunction_) : _Object_
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

#### _dataSchema.contains(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.contains(arg0: string, arg1: _Object_) : _boolean_
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

#### _dataSchema.containsAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _dataSchema.containsKey(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _dataSchema.containsValue(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## ensureJail

---

#### _dataSchema.ensureJail(jailPath: string) : _void_
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

#### _dataSchema.entrySet() : _Set_
##### Retorno

( _Set_ )


---

## filter

---

#### _dataSchema.filter(arg0: _Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.filter(arg0: _Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _dataSchema.find(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.find(arg0: _Predicate_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Predicate_ |   |

##### Retorno

( _Object_ )


---

#### _dataSchema.find(arg0: _Value_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _Object_ )


---

#### _dataSchema.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _dataSchema.forEach(arg0: _BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.forEach(arg0: _Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Consumer_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.forEach(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _dataSchema.forceList() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _dataSchema.forceMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _dataSchema.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## get

---

#### _dataSchema.get(chave: _int_) : _Object_
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

#### _dataSchema.get(chave: _Object_) : _Object_
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

#### _dataSchema.get(chave: string) : _Object_
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

#### _dataSchema.get(chave: string, tipo: _Class_) : _Object_
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

#### _dataSchema.getBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.getBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _dataSchema.getByte(arg0: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _dataSchema.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _dataSchema.getByte(arg0: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte_ )


---

#### _dataSchema.getByte(arg0: string, arg1: _byte_) : _byte_
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

#### _dataSchema.getCalendar(arg0: string) : _Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Calendar_ )


---

#### _dataSchema.getCalendar(arg0: string, arg1: _Calendar_) : _Calendar_
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

#### _dataSchema.getDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _dataSchema.getDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.getDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _dataSchema.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _dataSchema.getDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _dataSchema.getDouble(arg0: string, arg1: _double_) : _double_
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

#### _dataSchema.getFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _dataSchema.getFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

#### _dataSchema.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _dataSchema.getFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _dataSchema.getFloat(arg0: string, arg1: _float_) : _float_
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

#### _dataSchema.getForceList() : _boolean_
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### _dataSchema.getForceMap() : _boolean_
##### Retorno

( _boolean_ )


---

## getHtmlDecode

---

#### _dataSchema.getHtmlDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getHtmlEncode

---

#### _dataSchema.getHtmlEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getInstant

---

#### _dataSchema.getInstant(arg0: string) : _Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Instant_ )


---

#### _dataSchema.getInstant(arg0: string, arg1: _Instant_) : _Instant_
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

#### _dataSchema.getInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _dataSchema.getInt(arg0: _int_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

#### _dataSchema.getInt(arg0: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _int_ )


---

#### _dataSchema.getInt(arg0: string, arg1: _int_) : _int_
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

#### _dataSchema.getKeys() : _Set_
##### Retorno

( _Set_ )


---

## getList

---

#### _dataSchema.getList(arg0: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _List_ )


---

#### _dataSchema.getList(arg0: _int_, arg1: _Object_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _List_ )


---

#### _dataSchema.getList(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

#### _dataSchema.getList(arg0: string, arg1: _Object_) : _List_
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

#### _dataSchema.getLocalDate(arg0: string) : _LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDate_ )


---

#### _dataSchema.getLocalDate(arg0: string, arg1: _LocalDate_) : _LocalDate_
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

#### _dataSchema.getLocalDateTime(arg0: string) : _LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalDateTime_ )


---

#### _dataSchema.getLocalDateTime(arg0: string, arg1: _LocalDateTime_) : _LocalDateTime_
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

#### _dataSchema.getLocalTime(arg0: string) : _LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _LocalTime_ )


---

#### _dataSchema.getLocalTime(arg0: string, arg1: _LocalTime_) : _LocalTime_
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

#### _dataSchema.getLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

#### _dataSchema.getLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _dataSchema.getLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _dataSchema.getLong(arg0: string, arg1: _long_) : _long_
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

#### _dataSchema.getMap(arg0: _int_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Map_ )


---

#### _dataSchema.getMap(arg0: _int_, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _dataSchema.getMap(arg0: string) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Map_ )


---

#### _dataSchema.getMap(arg0: string, arg1: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object_ |   |

##### Retorno

( _Map_ )


---

## getMethod

---

#### _dataSchema.getMethod() : string
##### Retorno

( string )


---

## getOrDefault

---

#### _dataSchema.getOrDefault(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _dataSchema.getSQLDate(arg0: string) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Date_ )


---

#### _dataSchema.getSQLDate(arg0: string, arg1: _Date_) : _Date_
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

#### _dataSchema.getSQLTime(arg0: string) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Time_ )


---

#### _dataSchema.getSQLTime(arg0: string, arg1: _Time_) : _Time_
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

#### _dataSchema.getSQLTimestamp(arg0: string) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Timestamp_ )


---

#### _dataSchema.getSQLTimestamp(arg0: string, arg1: _Timestamp_) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Timestamp_ |   |

##### Retorno

( _Timestamp_ )


---

## getService

---

#### _dataSchema.getService() : string
##### Retorno

( string )


---

## getShort

---

#### _dataSchema.getShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

#### _dataSchema.getShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _dataSchema.getShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _dataSchema.getShort(arg0: string, arg1: _short_) : _short_
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

#### _dataSchema.getSize() : _int_
##### Retorno

( _int_ )


---

## getStatusCode

---

#### _dataSchema.getStatusCode() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### _dataSchema.getString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _dataSchema.getString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _dataSchema.getString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _dataSchema.getString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _dataSchema.getString(arg0: string, arg1: string, arg2: string) : string
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

#### _dataSchema.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( string )

Código da codificação dos caracteres.

---

## getUUID

---

#### _dataSchema.getUUID(arg0: string) : _UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _UUID_ )


---

#### _dataSchema.getUUID(arg0: string, arg1: _UUID_) : _UUID_
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

#### _dataSchema.getValues() : _Collection_
##### Retorno

( _Collection_ )


---

#### _dataSchema.getValues(arg0: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.getValues(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.getValues(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.getValues(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.has(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.has(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _dataSchema.has(arg0: string, arg1: _Object_) : _boolean_
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

#### _dataSchema.hasKey(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _dataSchema.hasValue(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## in

---

#### _dataSchema.in() : _boolean_
##### Retorno

( _boolean_ )


---

#### _dataSchema.in(arg0: _boolean_) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _DataSchema_ )


---

## indexOf

---

#### _dataSchema.indexOf(arg0: _Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _dataSchema.is(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### _dataSchema.isEmpty() : _boolean_
##### Retorno

( _boolean_ )


---

## isIn

---

#### _dataSchema.isIn() : _boolean_
##### Retorno

( _boolean_ )


---

## isJail

---

#### _dataSchema.isJail() : _boolean_
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### _dataSchema.isList() : _boolean_
##### Retorno

( _boolean_ )


---

#### _dataSchema.isList(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _dataSchema.isLockedAsReadOnly() : _boolean_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### _dataSchema.isMap() : _boolean_
##### Retorno

( _boolean_ )


---

#### _dataSchema.isMap(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _dataSchema.isMergeable(arg0: _Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## isMethod

---

#### _dataSchema.isMethod(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## isOut

---

#### _dataSchema.isOut() : _boolean_
##### Retorno

( _boolean_ )


---

## iterator

---

#### _dataSchema.iterator() : _Iterator_
##### Retorno

( _Iterator_ )


---

## join

---

#### _dataSchema.join(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## keySet

---

#### _dataSchema.keySet() : _Set_
##### Retorno

( _Set_ )


---

## keys

---

#### _dataSchema.keys() : _Set_
##### Retorno

( _Set_ )


---

## keysSorted

---

#### _dataSchema.keysSorted() : _Set_
##### Retorno

( _Set_ )


---

## keysToString

---

#### _dataSchema.keysToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _dataSchema.keysToString(arg0: _Map_, arg1: string) : string
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

#### _dataSchema.lastIndexOf(arg0: _Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### _dataSchema.length() : _int_
##### Retorno

( _int_ )


---

## list

---

#### _dataSchema.list() : _List_
##### Retorno

( _List_ )


---

#### _dataSchema.list(arg0: _Class_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Class_ |   |

##### Retorno

( _List_ )


---

## listIterator

---

#### _dataSchema.listIterator() : _ListIterator_
##### Retorno

( _ListIterator_ )


---

#### _dataSchema.listIterator(arg0: _int_) : _ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _ListIterator_ )


---

## listOfValues

---

#### _dataSchema.listOfValues() : _List_
##### Retorno

( _List_ )


---

## loadJSON

---

#### _dataSchema.loadJSON(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.loadJSON(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _dataSchema.loadProperties(arg0: _InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.loadProperties(arg0: _Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.loadProperties(arg0: _Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _dataSchema.loadPropertiesFromString(arg0: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### _dataSchema.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](../../objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### _dataSchema.map() : _Map_
##### Retorno

( _Map_ )


---

## merge

---

#### _dataSchema.merge(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.merge(arg0: _Object_, arg1: _Object_, arg2: _BiFunction_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |
| arg2 | _BiFunction_ |   |

##### Retorno

( _Object_ )


---

## method

---

#### _dataSchema.method() : string
##### Retorno

( string )


---

#### _dataSchema.method(arg0: string) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataSchema_ )


---

## of

---

#### _dataSchema.of(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

## out

---

#### _dataSchema.out() : _boolean_
##### Retorno

( _boolean_ )


---

#### _dataSchema.out(arg0: _boolean_) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _DataSchema_ )


---

## push

---

#### _dataSchema.push(arg0: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### _dataSchema.put(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _dataSchema.put(arg0: string, arg1: _Object_) : _Object_
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

#### _dataSchema.putAll(arg0: _Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _dataSchema.putIfAbsent(arg0: _Object_, arg1: _Object_) : _Object_
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

#### _dataSchema.remove(arg0: _int_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Object_ )


---

#### _dataSchema.remove(arg0: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _dataSchema.remove(arg0: _Object_, arg1: _Object_) : _boolean_
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

#### _dataSchema.removeAll() : _void_
##### Retorno

( _void_ )


---

#### _dataSchema.removeAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### _dataSchema.replace(arg0: _Object_, arg1: _Object_) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _Object_ )


---

#### _dataSchema.replace(arg0: _Object_, arg1: _Object_, arg2: _Object_) : _boolean_
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

#### _dataSchema.replaceAll(arg0: _BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.replaceAll(arg0: _UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.replaceAll(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _dataSchema.retainAll(arg0: _Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _dataSchema.safeString(arg0: _Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( string )


---

#### _dataSchema.safeString(arg0: _Object_, arg1: string) : string
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

#### _dataSchema.saveJSON(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.saveJSON(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _dataSchema.saveProperties(arg0: _OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.saveProperties(arg0: _Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### _dataSchema.search(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _dataSchema.search(arg0: string, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _dataSchema.search(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _dataSchema.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Retorno

( string )


---

#### _dataSchema.search(arg0: _Map_, arg1: string, arg2: string, arg3: _boolean_) : string
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

#### _dataSchema.service() : string
##### Retorno

( string )


---

#### _dataSchema.service(arg0: string) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataSchema_ )


---

## set

---

#### _dataSchema.set(arg0: _int_, arg1: _Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.set(arg0: string, arg1: _Object_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _dataSchema.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _dataSchema.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _dataSchema.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIn

---

#### _dataSchema.setIn(arg0: _boolean_) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _DataSchema_ )


---

## setMethod

---

#### _dataSchema.setMethod(arg0: string) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataSchema_ )


---

## setNull

---

#### _dataSchema.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setOut

---

#### _dataSchema.setOut(arg0: _boolean_) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _DataSchema_ )


---

## setService

---

#### _dataSchema.setService(arg0: string) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataSchema_ )


---

## setStatusCode

---

#### _dataSchema.setStatusCode(arg0: _int_) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _DataSchema_ )


---

## setURLCharacterEncoding

---

#### _dataSchema.setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### _dataSchema.size() : _int_
##### Retorno

( _int_ )


---

## sizeOfList

---

#### _dataSchema.sizeOfList() : _int_
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### _dataSchema.sizeOfMap() : _int_
##### Retorno

( _int_ )


---

## sort

---

#### _dataSchema.sort(arg0: _Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Comparator_ |   |

##### Retorno

( _void_ )


---

#### _dataSchema.sort(arg0: _Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _dataSchema.spliterator() : _Spliterator_
##### Retorno

( _Spliterator_ )


---

## statusCode

---

#### _dataSchema.statusCode() : _int_
##### Retorno

( _int_ )


---

#### _dataSchema.statusCode(arg0: _int_) : _DataSchema_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _DataSchema_ )


---

## subList

---

#### _dataSchema.subList(arg0: _int_, arg1: _int_) : _List_
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

#### _dataSchema.toArray() : _Object[]_
##### Retorno

( _Object[]_ )


---

#### _dataSchema.toArray(arg0: _Object[]_) : _Object[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object[]_ |   |

##### Retorno

( _Object[]_ )


---

## toFormMap

---

#### _dataSchema.toFormMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _dataSchema.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## toJSON

---

#### _dataSchema.toJSON() : string
##### Retorno

( string )


---

#### _dataSchema.toJSON(arg0: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( string )


---

#### _dataSchema.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


---

#### _dataSchema.toJSON(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _dataSchema.toJSON(arg0: _List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( string )


---

#### _dataSchema.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _dataSchema.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

#### _dataSchema.toJSON(arg0: _List_, arg1: _int_) : string
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

#### _dataSchema.toJSONObject(arg0: _Object_, arg1: _boolean_) : _Object_
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

#### _dataSchema.toJSONString(arg0: _Object_, arg1: _boolean_, arg2: _int_) : string
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

#### _dataSchema.toList() : _List_
##### Retorno

( _List_ )


---

## toMap

---

#### _dataSchema.toMap() : _Map_
##### Retorno

( _Map_ )


---

## toProperties

---

#### _dataSchema.toProperties() : string
##### Retorno

( string )


---

## unset

---

#### _dataSchema.unset(arg0: string) : _Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Object_ )


---

## unsetAll

---

#### _dataSchema.unsetAll() : _void_
##### Retorno

( _void_ )


---

## values

---

#### _dataSchema.values() : _Collection_
##### Retorno

( _Collection_ )


---

## valuesToString

---

#### _dataSchema.valuesToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _dataSchema.valuesToString(arg0: string, arg1: _String[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |

##### Retorno

( string )


---

#### _dataSchema.valuesToString(arg0: string, arg1: _String[]_, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _String[]_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _dataSchema.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _String[]_ |   |

##### Retorno

( string )


---

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string, arg2: _String[]_, arg3: _[Values](../../objects/Values)_) : string
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

#### _dataSchema.valuesToString(arg0: _Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

