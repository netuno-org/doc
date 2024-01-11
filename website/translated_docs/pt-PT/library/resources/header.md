---
id: header
title: Header
sidebar_label: Header
---

Recurso de gestão do header HTTP.

Com o recurso Header pode obter qualquer parâmetro vindo no cabeçalho do pedido do browser, ou seja, obter qualquer informação que venha no header do HTTP.

Mas também pode definir parâmetros de resposta no Header, por exemplo definir a reposta do código de status HTTP ou o Content-Type, entre outros.
Principais funções:
- [response](#response)
- [status](#status)
- [baseURL](#baseurl)
- [uri](#uri)
- [url](#url)
- [rawHost](#rawhost)
- [host](#host)
- [port](#port)
- [scheme](#scheme)
- [contentType](#contenttype)
- [contentTypePDF](#contenttypepdf)
- [contentTypeJSON](#contenttypejson)
- [contentTypeHTML](#contenttypehtml)
- [contentTypePlain](#contenttypeplain)
- [contentTypePNG](#contenttypepng)
- [contentTypeJPG](#contenttypejpg)
- [contentTypeCSS](#contenttypecss)
- [contentTypeOctetStream](#contenttypeoctetstream)
- [acceptJSON](#acceptjson)
- [isAcceptJSON](#isacceptjson)
- [cache](#cache)
- [noCache](#nocache)
- [downloadFile](#downloadfile)
- [isDelete](#isdelete)
- [isGet](#isget)
- [isHead](#ishead)
- [isOptions](#isoptions)
- [isPost](#ispost)
- [isPut](#isput)
- [isTrace](#istrace)
- [isCopy](#iscopy)
- [isLink](#islink)
- [isUnlink](#isunlink)
- [isPatch](#ispatch)
- [isPurge](#ispurge)
- [isLock](#islock)
- [isUnlock](#isunlock)
- [isPropFind](#ispropfind)
- [isView](#isview)


---

## acceptJSON

---

#### _header.acceptJSON() : _boolean_
##### Retorno

( _boolean_ )


---

## add

---

#### _header.add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _header.addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _header.addAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _header.as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.asBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _header.asByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### _header.asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _header.asByte(key: string, defaultValue: _byte_) : _byte_
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

#### _header.asCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _header.asDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _header.asDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(key: string, defaultValue: _double_) : _double_
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

#### _header.asFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _header.asFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(key: string, defaultValue: _float_) : _float_
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

#### _header.asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asHTMLEncode

---

#### _header.asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asInstant

---

#### _header.asInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _header.asInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.asInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.asInt(key: string, defaultValue: _short_) : _int_
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

#### _header.asList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _header.asLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _header.asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _header.asLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _header.asLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### _header.asLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### _header.asLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### _header.asLong(key: string, defaultValue: _long_) : _long_
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

#### _header.asMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.asMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _header.asSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _header.asSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _header.asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _header.asShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### _header.asShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### _header.asShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### _header.asShort(key: string, defaultValue: _short_) : _short_
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

#### _header.asString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### _header.asString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _header.asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### _header.asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _header.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _header.asUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.asUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.asValues(indice: _int_) : _[Values](../../objects/Values)_
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

#### _header.asValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.asValues(chave: string) : _[Values](../../objects/Values)_
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

#### _header.asValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

## baseURL

---

#### _header.baseURL() : string
##### Retorno

( string )


---

## cache

---

#### _header.cache(time: _int_) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| time | _int_ |   |

##### Retorno

( _[Header](../../resources/Header)_ )


---

## clear

---

#### _header.clear() : _void_
##### Retorno

( _void_ )


---

## cloneJSON

---

#### _header.cloneJSON() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## compute

---

#### _header.compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _header.computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
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

#### _header.computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _header.contains(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _header.contains(key: string, value: _java.lang.Object_) : _boolean_
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

#### _header.containsAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _header.containsKey(key: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _header.containsValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## contentType

---

#### _header.contentType() : string
##### Retorno

( string )


---

#### _header.contentType(contentType: string) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| contentType | string |   |

##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypeCSS

---

#### _header.contentTypeCSS() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypeHTML

---

#### _header.contentTypeHTML() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypeJPG

---

#### _header.contentTypeJPG() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypeJS

---

#### _header.contentTypeJS() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypeJSON

---

#### _header.contentTypeJSON() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypeOctetStream

---

#### _header.contentTypeOctetStream() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypePDF

---

#### _header.contentTypePDF() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypePNG

---

#### _header.contentTypePNG() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## contentTypePlain

---

#### _header.contentTypePlain() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## downloadFile

---

#### _header.downloadFile(fileName: string) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| fileName | string |   |

##### Retorno

( _[Header](../../resources/Header)_ )


---

## ensureJail

---

#### _header.ensureJail(jailPath: string) : _void_
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

#### _header.entrySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### _header.filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _header.find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _header.forEach(action: _java.util.function.BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _header.forEach(action: _java.util.function.Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _header.forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### _header.forceList() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### _header.forceMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### _header.fromJSON(content: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## get

---

#### _header.get(chave: _int_) : _java.lang.Object_
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

#### _header.get(chave: _java.lang.Object_) : _java.lang.Object_
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

#### _header.get(chave: string) : _java.lang.Object_
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

#### _header.get(chave: string, tipo: _java.lang.Class_) : _java.lang.Object_
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

#### _header.getBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _header.getByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(key: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(key: string, defaultValue: _byte_) : _byte_
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

#### _header.getCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _header.getDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _header.getDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(key: string, defaultValue: _double_) : _double_
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

#### _header.getFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _header.getFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(key: string, defaultValue: _float_) : _float_
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

#### _header.getForceList() : _boolean_
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### _header.getForceMap() : _boolean_
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### _header.getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getHTMLEncode

---

#### _header.getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getInstant

---

#### _header.getInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _header.getInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.getInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.getInt(key: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _int_ )


---

#### _header.getInt(key: string, defaultValue: _int_) : _int_
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

#### _header.getKeys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### _header.getList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _header.getLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _header.getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _header.getLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _header.getLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### _header.getLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### _header.getLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### _header.getLong(key: string, defaultValue: _long_) : _long_
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

#### _header.getMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.getMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _header.getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### _header.getSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _header.getSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _header.getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _header.getShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### _header.getShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### _header.getShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### _header.getShort(key: string, defaultValue: _short_) : _short_
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

#### _header.getSize() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### _header.getString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### _header.getString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _header.getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### _header.getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _header.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _header.getUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( string )

Código da codificação dos caracteres.

---

## getUUID

---

#### _header.getUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _header.getValues() : _java.util.Collection_
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### _header.getValues(indice: _int_) : _[Values](../../objects/Values)_
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

#### _header.getValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.getValues(chave: string) : _[Values](../../objects/Values)_
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

#### _header.getValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.has(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _header.has(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _header.has(key: string, value: _java.lang.Object_) : _boolean_
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

#### _header.hasKey(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _header.hasValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## host

---

#### _header.host() : string
##### Retorno

( string )


---

## indexOf

---

#### _header.indexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _header.is(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isAcceptJSON

---

#### _header.isAcceptJSON() : _boolean_
##### Retorno

( _boolean_ )


---

## isCopy

---

#### _header.isCopy() : _boolean_
##### Retorno

( _boolean_ )


---

## isDelete

---

#### _header.isDelete() : _boolean_
##### Retorno

( _boolean_ )


---

## isEmpty

---

#### _header.isEmpty() : _boolean_
##### Retorno

( _boolean_ )


---

## isGet

---

#### _header.isGet() : _boolean_
##### Retorno

( _boolean_ )


---

## isHead

---

#### _header.isHead() : _boolean_
##### Retorno

( _boolean_ )


---

## isJail

---

#### _header.isJail() : _boolean_
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isLink

---

#### _header.isLink() : _boolean_
##### Retorno

( _boolean_ )


---

## isList

---

#### _header.isList() : _boolean_
##### Retorno

( _boolean_ )


---

#### _header.isList(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLock

---

#### _header.isLock() : _boolean_
##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### _header.isLockedAsReadOnly() : _boolean_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### _header.isMap() : _boolean_
##### Retorno

( _boolean_ )


---

#### _header.isMap(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _header.isMergeable(object: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isOptions

---

#### _header.isOptions() : _boolean_
##### Retorno

( _boolean_ )


---

## isPatch

---

#### _header.isPatch() : _boolean_
##### Retorno

( _boolean_ )


---

## isPost

---

#### _header.isPost() : _boolean_
##### Retorno

( _boolean_ )


---

## isPropFind

---

#### _header.isPropFind() : _boolean_
##### Retorno

( _boolean_ )


---

## isPurge

---

#### _header.isPurge() : _boolean_
##### Retorno

( _boolean_ )


---

## isPut

---

#### _header.isPut() : _boolean_
##### Retorno

( _boolean_ )


---

## isTrace

---

#### _header.isTrace() : _boolean_
##### Retorno

( _boolean_ )


---

## isUnlink

---

#### _header.isUnlink() : _boolean_
##### Retorno

( _boolean_ )


---

## isUnlock

---

#### _header.isUnlock() : _boolean_
##### Retorno

( _boolean_ )


---

## isView

---

#### _header.isView() : _boolean_
##### Retorno

( _boolean_ )


---

## iterator

---

#### _header.iterator() : _java.util.Iterator_
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### _header.join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

## keySet

---

#### _header.keySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### _header.keys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### _header.keysSorted() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### _header.keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

#### _header.keysToString(map: _java.util.Map_, splitter: string) : string
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

#### _header.lastIndexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### _header.length() : _int_
##### Retorno

( _int_ )


---

## list

---

#### _header.list() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _header.list(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _header.listIterator() : _java.util.ListIterator_
##### Retorno

( _java.util.ListIterator_ )


---

#### _header.listIterator(index: _int_) : _java.util.ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _header.listOfValues() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### _header.loadJSON(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.loadJSON(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _header.loadProperties(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.loadProperties(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _header.loadProperties(properties: _java.util.Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _header.loadPropertiesFromString(data: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | string |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### _header.lockAsReadOnly() : _[Values](../../objects/Values)_
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](../../objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### _header.map() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## merge

---

#### _header.merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _header.method() : string
##### Retorno

( string )


---

## noCache

---

#### _header.noCache() : _[Header](../../resources/Header)_
##### Retorno

( _[Header](../../resources/Header)_ )


---

## of

---

#### _header.of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.of(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| list | _java.util.List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _header.ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _header.ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## port

---

#### _header.port() : string
##### Retorno

( string )


---

## push

---

#### _header.push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### _header.put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.put(key: string, value: _java.lang.Object_) : _java.lang.Object_
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

#### _header.putAll(m: _java.util.Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| m | _java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _header.putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## rawHost

---

#### _header.rawHost() : string
##### Retorno

( string )


---

## remove

---

#### _header.remove(i: _int_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| i | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.remove(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
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

#### _header.removeAll() : _void_
##### Retorno

( _void_ )


---

#### _header.removeAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### _header.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
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

#### _header.replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _header.replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _header.replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## response

---

#### _header.response() : _[Values](../../objects/Values)_
##### Descrição

Inicia uma nova instância do SMTP utilizando a configuração do STMP da chave `default`.

##### Retorno

( _[Values](../../objects/Values)_ )

A nova instância do recurso SMTP com base na configuração do STMP `default`.

---

## retainAll

---

#### _header.retainAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _header.safeString(object: _java.lang.Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( string )


---

#### _header.safeString(object: _java.lang.Object_, defaultValue: string) : string
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

#### _header.saveJSON(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.saveJSON(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _header.saveProperties(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.saveProperties(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## scheme

---

#### _header.scheme() : string
##### Retorno

( string )


---

## search

---

#### _header.search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( string )


---

#### _header.search(content: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### _header.search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Retorno

( string )


---

#### _header.search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### _header.search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
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

#### _header.set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceList | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _header.setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceMap | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _header.setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
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

#### _header.setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setNull(key: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### _header.setURLCharacterEncoding(characterEncoding: string) : _void_
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

#### _header.size() : _int_
##### Retorno

( _int_ )


---

## sizeOfList

---

#### _header.sizeOfList() : _int_
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### _header.sizeOfMap() : _int_
##### Retorno

( _int_ )


---

## sort

---

#### _header.sort(c: _java.util.Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _header.sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _header.spliterator() : _java.util.Spliterator_
##### Retorno

( _java.util.Spliterator_ )


---

## status

---

#### _header.status() : _int_
##### Retorno

( _int_ )


---

#### _header.status(httpStatus: _int_) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| httpStatus | _int_ |   |

##### Retorno

( _[Header](../../resources/Header)_ )


---

#### _header.status(httpStatus: _org.netuno.proteu.Proteu$HTTPStatus_) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| httpStatus | _org.netuno.proteu.Proteu$HTTPStatus_ |   |

##### Retorno

( _[Header](../../resources/Header)_ )


---

## subList

---

#### _header.subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
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

#### _header.toArray() : _[Ljava.lang.Object;[]_
##### Retorno

( _[Ljava.lang.Object;[]_ )


---

#### _header.toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### _header.toByteArray() : _byte[]_
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### _header.toDoubleArray() : _double[]_
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### _header.toFloatArray() : _float[]_
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### _header.toFormMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _header.toIntArray() : _[I_
##### Retorno

( _[I_ )


---

## toJSON

---

#### _header.toJSON() : string
##### Retorno

( string )


---

#### _header.toJSON(htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### _header.toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _header.toJSON(indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _header.toJSON(values: _java.util.List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |

##### Retorno

( string )


---

#### _header.toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### _header.toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _header.toJSON(values: _java.util.List_, indentFactor: _int_) : string
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

#### _header.toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
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

#### _header.toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
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

#### _header.toList() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _header.toList(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _header.toLongArray() : _long[]_
##### Retorno

( _long[]_ )


---

## toMap

---

#### _header.toMap() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## toProperties

---

#### _header.toProperties() : string
##### Retorno

( string )


---

## toShortArray

---

#### _header.toShortArray() : _short[]_
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### _header.toStringArray() : _[Ljava.lang.String;[]_
##### Retorno

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### _header.unset(key: string) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### _header.unsetAll() : _void_
##### Retorno

( _void_ )


---

## uri

---

#### _header.uri() : string
##### Retorno

( string )


---

## url

---

#### _header.url() : string
##### Retorno

( string )


---

## values

---

#### _header.values() : _java.util.Collection_
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### _header.valuesToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

#### _header.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(map: _java.util.Map_, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Retorno

( string )


---

#### _header.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
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

#### _header.valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

