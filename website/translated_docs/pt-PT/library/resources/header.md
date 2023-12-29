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

#### _header.add(arg0: _int_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.add(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _header.addAll(arg0: _int_, arg1: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _header.addAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _header.as(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.as(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.asBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _header.asBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _header.asByte(arg0: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _byte_ )


---

#### _header.asByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _header.asByte(arg0: string, arg1: _byte_) : _byte_
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

#### _header.asCalendar(arg0: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.asCalendar(arg0: string, arg1: _java.util.Calendar_) : _java.util.Calendar_
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

#### _header.asDate(arg0: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.asDate(arg0: string, arg1: _java.util.Date_) : _java.util.Date_
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

#### _header.asDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(arg0: _int_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _header.asDouble(arg0: string, arg1: _double_) : _double_
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

#### _header.asFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _header.asFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _header.asFloat(arg0: string, arg1: _float_) : _float_
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

#### _header.asHTMLDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asHTMLEncode

---

#### _header.asHTMLEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## asInstant

---

#### _header.asInstant(arg0: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.asInstant(arg0: string, arg1: _java.time.Instant_) : _java.time.Instant_
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

#### _header.asInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.asInt(arg0: _int_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.asInt(arg0: string, arg1: _short_) : _int_
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

#### _header.asList(arg0: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(arg0: _int_, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(arg0: _int_, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(arg0: _int_, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(arg0: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(arg0: string, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(arg0: string, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.asList(arg0: string, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
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

#### _header.asLocalDate(arg0: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.asLocalDate(arg0: string, arg1: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _header.asLocalDateTime(arg0: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.asLocalDateTime(arg0: string, arg1: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _header.asLocalTime(arg0: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.asLocalTime(arg0: string, arg1: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _header.asLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

#### _header.asLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _header.asLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _header.asLong(arg0: string, arg1: _long_) : _long_
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

#### _header.asMap(arg0: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.asMap(arg0: _int_, arg1: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.asMap(arg0: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.asMap(arg0: string, arg1: _java.lang.Object_) : _java.util.Map_
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

#### _header.asSQLDate(arg0: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.asSQLDate(arg0: string, arg1: _java.sql.Date_) : _java.sql.Date_
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

#### _header.asSQLTime(arg0: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.asSQLTime(arg0: string, arg1: _java.sql.Time_) : _java.sql.Time_
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

#### _header.asSQLTimestamp(arg0: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.asSQLTimestamp(arg0: string, arg1: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _header.asShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

#### _header.asShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _header.asShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _header.asShort(arg0: string, arg1: _short_) : _short_
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

#### _header.asString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _header.asString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _header.asString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _header.asString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _header.asString(arg0: string, arg1: string, arg2: string) : string
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

#### _header.asUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
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

#### _header.asUUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.asUUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
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

#### _header.cache(arg0: _int_) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _header.contains(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _header.contains(arg0: string, arg1: _java.lang.Object_) : _boolean_
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

#### _header.containsAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _header.containsKey(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _header.containsValue(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## contentType

---

#### _header.contentType() : string
##### Retorno

( string )


---

#### _header.contentType(arg0: string) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _header.downloadFile(arg0: string) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _header.filter(arg0: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.filter(arg0: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _header.find(arg0: string, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.find(arg0: _java.util.function.Predicate_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.find(arg0: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.find(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _header.forEach(arg0: _java.util.function.BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _header.forEach(arg0: _java.util.function.Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _header.forEach(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

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

#### _header.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.fromJSON(arg0: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.psamata.net.Remote$Response_ |   |

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

#### _header.getBoolean(arg0: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(arg0: _int_, arg1: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _header.getBoolean(arg0: string, arg1: _boolean_) : _boolean_
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

#### _header.getByte(arg0: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(arg0: _int_, arg1: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(arg0: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte_ )


---

#### _header.getByte(arg0: string, arg1: _byte_) : _byte_
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

#### _header.getCalendar(arg0: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _header.getCalendar(arg0: string, arg1: _java.util.Calendar_) : _java.util.Calendar_
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

#### _header.getDate(arg0: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _header.getDate(arg0: string, arg1: _java.util.Date_) : _java.util.Date_
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

#### _header.getDouble(arg0: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(arg0: _int_, arg1: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _double_ |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(arg0: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _double_ )


---

#### _header.getDouble(arg0: string, arg1: _double_) : _double_
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

#### _header.getFile(arg0: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _header.getFloat(arg0: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(arg0: _int_, arg1: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _float_ |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(arg0: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _float_ )


---

#### _header.getFloat(arg0: string, arg1: _float_) : _float_
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

#### _header.getHTMLDecode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getHTMLEncode

---

#### _header.getHTMLEncode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## getInstant

---

#### _header.getInstant(arg0: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _header.getInstant(arg0: string, arg1: _java.time.Instant_) : _java.time.Instant_
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

#### _header.getInt(arg0: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.getInt(arg0: _int_, arg1: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _int_ )


---

#### _header.getInt(arg0: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _int_ )


---

#### _header.getInt(arg0: string, arg1: _int_) : _int_
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

#### _header.getKeys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### _header.getList(arg0: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(arg0: _int_, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(arg0: _int_, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(arg0: _int_, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |
| arg2 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(arg0: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(arg0: string, arg1: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(arg0: string, arg1: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _header.getList(arg0: string, arg1: _java.lang.Object_, arg2: _java.lang.Class_) : _java.util.List_
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

#### _header.getLocalDate(arg0: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _header.getLocalDate(arg0: string, arg1: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _header.getLocalDateTime(arg0: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _header.getLocalDateTime(arg0: string, arg1: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _header.getLocalTime(arg0: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _header.getLocalTime(arg0: string, arg1: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _header.getLong(arg0: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )


---

#### _header.getLong(arg0: _int_, arg1: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _long_ |   |

##### Retorno

( _long_ )


---

#### _header.getLong(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

#### _header.getLong(arg0: string, arg1: _long_) : _long_
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

#### _header.getMap(arg0: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.getMap(arg0: _int_, arg1: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.getMap(arg0: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _header.getMap(arg0: string, arg1: _java.lang.Object_) : _java.util.Map_
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

#### _header.getSQLDate(arg0: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _header.getSQLDate(arg0: string, arg1: _java.sql.Date_) : _java.sql.Date_
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

#### _header.getSQLTime(arg0: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _header.getSQLTime(arg0: string, arg1: _java.sql.Time_) : _java.sql.Time_
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

#### _header.getSQLTimestamp(arg0: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _header.getSQLTimestamp(arg0: string, arg1: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _header.getShort(arg0: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )


---

#### _header.getShort(arg0: _int_, arg1: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _short_ |   |

##### Retorno

( _short_ )


---

#### _header.getShort(arg0: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _short_ )


---

#### _header.getShort(arg0: string, arg1: _short_) : _short_
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

#### _header.getSize() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### _header.getString(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _header.getString(arg0: _int_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _header.getString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _header.getString(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _header.getString(arg0: string, arg1: string, arg2: string) : string
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

#### _header.getUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
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

#### _header.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( string )

Código da codificação dos caracteres.

---

## getUUID

---

#### _header.getUUID(arg0: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUUID(arg0: string, arg1: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _header.getUUID(arg0: string, arg1: _java.util.UUID_) : _java.util.UUID_
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

#### _header.has(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _header.has(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

#### _header.has(arg0: string, arg1: _java.lang.Object_) : _boolean_
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

#### _header.hasKey(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _header.hasValue(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.indexOf(arg0: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _header.is(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.isList(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.isMap(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _header.isMergeable(arg0: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.join(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _header.keysToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _header.keysToString(arg0: _java.util.Map_, arg1: string) : string
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

#### _header.lastIndexOf(arg0: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.list(arg0: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _header.listIterator() : _java.util.ListIterator_
##### Retorno

( _java.util.ListIterator_ )


---

#### _header.listIterator(arg0: _int_) : _java.util.ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

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

#### _header.loadJSON(arg0: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.loadJSON(arg0: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _header.loadProperties(arg0: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.loadProperties(arg0: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _header.loadProperties(arg0: _java.util.Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _header.loadPropertiesFromString(arg0: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _header.merge(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.of(arg0: _[Ljava.lang.Object;_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Ljava.lang.Object;_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.of(arg0: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.of(arg0: _java.util.List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.of(arg0: _java.util.Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _header.ofList(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _header.ofMap(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.push(arg0: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### _header.put(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.put(arg0: string, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### _header.putAll(arg0: _java.util.Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |

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

#### _header.remove(arg0: _int_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _header.remove(arg0: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

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

#### _header.removeAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

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

#### _header.replaceAll(arg0: _java.util.function.UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _header.replaceAll(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

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

#### _header.retainAll(arg0: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _header.safeString(arg0: _java.lang.Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Retorno

( string )


---

#### _header.safeString(arg0: _java.lang.Object_, arg1: string) : string
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

#### _header.saveJSON(arg0: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.saveJSON(arg0: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _header.saveProperties(arg0: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _header.saveProperties(arg0: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.Writer_ |   |

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

#### _header.search(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _header.search(arg0: string, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _header.search(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _header.search(arg0: string, arg1: string, arg2: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _boolean_ |   |

##### Retorno

( string )


---

#### _header.search(arg0: _java.util.Map_, arg1: string, arg2: string, arg3: _boolean_) : string
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

#### _header.set(arg0: _int_, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.set(arg0: string, arg1: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _header.setForceList(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _header.setForceMap(arg0: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _header.setIfFalse(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setIfGreaterThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfGreaterThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfLowerThanZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfLowerThanZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfNotEmpty(arg0: string, arg1: string) : _[Values](../../objects/Values)_
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

#### _header.setIfNotZero(arg0: string, arg1: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.setIfNotZero(arg0: string, arg1: _short_) : _[Values](../../objects/Values)_
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

#### _header.setIfTrue(arg0: string, arg1: _boolean_) : _[Values](../../objects/Values)_
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

#### _header.setNull(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _header.sort(arg0: _java.util.Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _header.sort(arg0: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.graalvm.polyglot.Value_ |   |

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

#### _header.status(arg0: _int_) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Header](../../resources/Header)_ )


---

#### _header.status(arg0: _org.netuno.proteu.Proteu$HTTPStatus_) : _[Header](../../resources/Header)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.proteu.Proteu$HTTPStatus_ |   |

##### Retorno

( _[Header](../../resources/Header)_ )


---

## subList

---

#### _header.subList(arg0: _int_, arg1: _int_) : _java.util.List_
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

#### _header.toArray() : _[Ljava.lang.Object;_
##### Retorno

( _[Ljava.lang.Object;_ )


---

#### _header.toArray(arg0: _[Ljava.lang.Object;_) : _[Ljava.lang.Object;_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Ljava.lang.Object;_ |   |

##### Retorno

( _[Ljava.lang.Object;_ )


---

## toByteArray

---

#### _header.toByteArray() : _[B_
##### Retorno

( _[B_ )


---

## toDoubleArray

---

#### _header.toDoubleArray() : _[D_
##### Retorno

( _[D_ )


---

## toFloatArray

---

#### _header.toFloatArray() : _[F_
##### Retorno

( _[F_ )


---

## toFormMap

---

#### _header.toFormMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.toFormMap(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _header.toFormMap(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

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

#### _header.toJSON(arg0: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( string )


---

#### _header.toJSON(arg0: _boolean_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


---

#### _header.toJSON(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _header.toJSON(arg0: _java.util.List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |

##### Retorno

( string )


---

#### _header.toJSON(arg0: _java.util.List_, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _header.toJSON(arg0: _java.util.List_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

#### _header.toJSON(arg0: _java.util.List_, arg1: _int_) : string
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

#### _header.toJSONObject(arg0: _java.lang.Object_, arg1: _boolean_) : _java.lang.Object_
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

#### _header.toJSONString(arg0: _java.lang.Object_, arg1: _boolean_, arg2: _int_) : string
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

#### _header.toList() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _header.toList(arg0: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _header.toLongArray() : _[J_
##### Retorno

( _[J_ )


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

#### _header.toShortArray() : _[S_
##### Retorno

( _[S_ )


---

## toStringArray

---

#### _header.toStringArray() : _[Ljava.lang.String;_
##### Retorno

( _[Ljava.lang.String;_ )


---

## unset

---

#### _header.unset(arg0: string) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### _header.valuesToString(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _header.valuesToString(arg0: string, arg1: _[Ljava.lang.String;_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Ljava.lang.String;_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(arg0: string, arg1: _[Ljava.lang.String;_, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Ljava.lang.String;_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(arg0: _java.util.Map_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### _header.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Ljava.lang.String;_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Ljava.lang.String;_ |   |

##### Retorno

( string )


---

#### _header.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Ljava.lang.String;_, arg3: _[Values](../../objects/Values)_) : string
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

#### _header.valuesToString(arg0: _java.util.Map_, arg1: string, arg2: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.Map_ |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

