---
id: exec
title: Exec
sidebar_label: Exec
---

Funcionalidades para auxiliar à execução do código.
Realiza a execução de outros scripts, suporta também executar scripts em outras linguagens de programação.
Executa o script indicado, retornando o seu output.
Principais funções:
- [bind](#bind)
- [core](#core)
- [service](#service)
- [sleep](#sleep)
- [stop](#stop)
- [gc](#gc)


```javascript
// Executa outro script da App em `server/core/`
const outputOutput = _exec.core("outro-script");

// Executa outro script da App em `server/services/`
const outputServico = _exec.service("outro-servico");

// Pausa por 2 segundos:`
_exec.sleep(2000);

// Para a execução:`
_exec.stop();

```

---

## add

---

#### _exec.add(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.add(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### _exec.addAll(index: _int_, c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.addAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### _exec.as(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.as(o: _java.lang.Object_, oDefault: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _exec.asBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _exec.asBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _exec.asByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### _exec.asByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.asByte(key: string, defaultValue: _byte_) : _byte_
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

#### _exec.asCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.asCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _exec.asDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.asDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _exec.asDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### _exec.asDouble(key: string, defaultValue: _double_) : _double_
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

#### _exec.asFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### _exec.asFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### _exec.asFloat(key: string, defaultValue: _float_) : _float_
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

#### _exec.asHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asHTMLEncode

---

#### _exec.asHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## asInstant

---

#### _exec.asInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.asInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _exec.asInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.asInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.asInt(key: string, defaultValue: _short_) : _int_
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

#### _exec.asList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.asList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _exec.asLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.asLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _exec.asLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.asLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _exec.asLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.asLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _exec.asLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### _exec.asLong(key: string, defaultValue: _long_) : _long_
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

#### _exec.asMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _exec.asMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _exec.asMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _exec.asMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _exec.asSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.asSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _exec.asSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.asSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _exec.asSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.asSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _exec.asShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### _exec.asShort(key: string, defaultValue: _short_) : _short_
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

#### _exec.asString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### _exec.asString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _exec.asString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### _exec.asString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _exec.asString(key: string, defaultValue: string, charsetName: string) : string
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

#### _exec.asUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _exec.asUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.asUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _exec.asValues(indice: _int_) : _[Values](../../objects/Values)_
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

#### _exec.asValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _exec.asValues(chave: string) : _[Values](../../objects/Values)_
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

#### _exec.asValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

## async

---

#### _exec.async(functions: _[Lorg.graalvm.polyglot.Value;[]_) : _[Async](../../objects/Async)_
##### Descrição

Execução de funções de forma assíncrona.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| functions | _[Lorg.graalvm.polyglot.Value;[]_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## asyncData

---

#### _exec.asyncData(data: _java.lang.Object_, functions: _[Lorg.graalvm.polyglot.Value;[]_) : _[Async](../../objects/Async)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _java.lang.Object_ |   |
| functions | _[Lorg.graalvm.polyglot.Value;[]_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## asyncList

---

#### _exec.asyncList(list: _[Values](../../objects/Values)_, function: _org.graalvm.polyglot.Value_) : _[Async](../../objects/Async)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| list | _[Values](../../objects/Values)_ |   |
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## bind

---

#### _exec.bind(variavel: string, objeto: _java.lang.Object_) : _[Exec](../../resources/Exec)_
##### Descrição

Realiza a transição de variáveis entre scripts, inclusive entre linguagens de programação diferentes.

##### Como Usar

```javascript
const minhaVarOriginal = "teste";
_exec    .bind("transitarVar", minhaVarOriginal)    .core("outro-script-talvez-em-outra-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| variavel | string | Nome da variável que estará disponível no outro script que será executado. |
| objeto | _java.lang.Object_ | Objeto a ser passado para o outro script que será executado. |

##### Retorno

( _[Exec](../../resources/Exec)_ )


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

#### _exec.compute(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _exec.computeIfAbsent(arg0: _java.lang.Object_, arg1: _java.util.function.Function_) : _java.lang.Object_
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

#### _exec.computeIfPresent(arg0: _java.lang.Object_, arg1: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _exec.contains(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.contains(key: string, value: _java.lang.Object_) : _boolean_
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

#### _exec.containsAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### _exec.containsKey(key: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### _exec.containsValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## core

---

#### _exec.core(caminho: string) : _[ScriptResult](../../objects/ScriptResult)_
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do script com origem em `core/` a executar. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### _exec.core(caminho: string, caminho: _boolean_) : _[ScriptResult](../../objects/ScriptResult)_
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do script com origem em `core/` a executar. |
| caminho | _boolean_ | Caminho do script com origem em `core/` a executar. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


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

#### _exec.entrySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### _exec.filter(p: _java.util.function.Predicate_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.filter(function: _org.graalvm.polyglot.Value_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### _exec.find(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.find(p: _java.util.function.Predicate_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| p | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.find(function: _org.graalvm.polyglot.Value_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.find(filter: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| filter | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### _exec.forEach(action: _java.util.function.BiConsumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.forEach(action: _java.util.function.Consumer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| action | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### _exec.forEach(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

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

#### _exec.fromJSON(content: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.fromJSON(content: _org.netuno.psamata.net.Remote$Response_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | _org.netuno.psamata.net.Remote$Response_ |   |

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
// Libertar memória executando o Garbage Collector:
_exec.gc();
```

##### Retorno

( _void_ )


---

## get

---

#### _exec.get(chave: _int_) : _java.lang.Object_
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

#### _exec.get(chave: _java.lang.Object_) : _java.lang.Object_
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

#### _exec.get(chave: string) : _java.lang.Object_
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

#### _exec.get(chave: string, tipo: _java.lang.Class_) : _java.lang.Object_
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

#### _exec.getBoolean(index: _int_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(index: _int_, defaultValue: _boolean_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _exec.getBoolean(key: string, defaultValue: _boolean_) : _boolean_
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

#### _exec.getByte(index: _int_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(index: _int_, defaultValue: _byte_) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _byte_ |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(key: string) : _byte_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _byte_ )


---

#### _exec.getByte(key: string, defaultValue: _byte_) : _byte_
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

#### _exec.getCalendar(key: string) : _java.util.Calendar_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Calendar_ )


---

#### _exec.getCalendar(key: string, defaultValue: _java.util.Calendar_) : _java.util.Calendar_
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

#### _exec.getDate(key: string) : _java.util.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Date_ )


---

#### _exec.getDate(key: string, defaultValue: _java.util.Date_) : _java.util.Date_
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

#### _exec.getDouble(index: _int_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(index: _int_, defaultValue: _double_) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _double_ |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(key: string) : _double_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _double_ )


---

#### _exec.getDouble(key: string, defaultValue: _double_) : _double_
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

#### _exec.getFile(key: string) : _[File](../../objects/File)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

---

#### _exec.getFloat(index: _int_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(index: _int_, defaultValue: _float_) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _float_ |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(key: string) : _float_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _float_ )


---

#### _exec.getFloat(key: string, defaultValue: _float_) : _float_
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

## getHTMLDecode

---

#### _exec.getHTMLDecode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getHTMLEncode

---

#### _exec.getHTMLEncode(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

## getInstant

---

#### _exec.getInstant(key: string) : _java.time.Instant_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.Instant_ )


---

#### _exec.getInstant(key: string, defaultValue: _java.time.Instant_) : _java.time.Instant_
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

#### _exec.getInt(index: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(index: _int_, defaultValue: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _int_ |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(key: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _int_ )


---

#### _exec.getInt(key: string, defaultValue: _int_) : _int_
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

#### _exec.getKeys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### _exec.getList(index: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(index: _int_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(index: _int_, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(index: _int_, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string, claz: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| claz | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: _java.lang.Object_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### _exec.getList(key: string, defaultValue: _java.lang.Object_, claz: _java.lang.Class_) : _java.util.List_
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

#### _exec.getLocalDate(key: string) : _java.time.LocalDate_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### _exec.getLocalDate(key: string, defaultValue: _java.time.LocalDate_) : _java.time.LocalDate_
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

#### _exec.getLocalDateTime(key: string) : _java.time.LocalDateTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### _exec.getLocalDateTime(key: string, defaultValue: _java.time.LocalDateTime_) : _java.time.LocalDateTime_
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

#### _exec.getLocalTime(key: string) : _java.time.LocalTime_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### _exec.getLocalTime(key: string, defaultValue: _java.time.LocalTime_) : _java.time.LocalTime_
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

#### _exec.getLong(index: _int_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(index: _int_, defaultValue: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _long_ |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(key: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _long_ )


---

#### _exec.getLong(key: string, defaultValue: _long_) : _long_
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

#### _exec.getMap(index: _int_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _exec.getMap(index: _int_, defaultValue: _java.lang.Object_) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### _exec.getMap(key: string) : _java.util.Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.Map_ )


---

#### _exec.getMap(key: string, defaultValue: _java.lang.Object_) : _java.util.Map_
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

#### _exec.getOrDefault(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### _exec.getSQLDate(key: string) : _java.sql.Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Date_ )


---

#### _exec.getSQLDate(key: string, defaultValue: _java.sql.Date_) : _java.sql.Date_
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

#### _exec.getSQLTime(key: string) : _java.sql.Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Time_ )


---

#### _exec.getSQLTime(key: string, defaultValue: _java.sql.Time_) : _java.sql.Time_
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

#### _exec.getSQLTimestamp(key: string) : _java.sql.Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### _exec.getSQLTimestamp(key: string, defaultValue: _java.sql.Timestamp_) : _java.sql.Timestamp_
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

#### _exec.getShort(index: _int_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(index: _int_, defaultValue: _short_) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | _short_ |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(key: string) : _short_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _short_ )


---

#### _exec.getShort(key: string, defaultValue: _short_) : _short_
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

#### _exec.getSize() : _int_
##### Retorno

( _int_ )


---

## getString

---

#### _exec.getString(index: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( string )


---

#### _exec.getString(index: _int_, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _exec.getString(key: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( string )


---

#### _exec.getString(key: string, defaultValue: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( string )


---

#### _exec.getString(key: string, defaultValue: string, charsetName: string) : string
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

#### _exec.getUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _exec.getURLCharacterEncoding() : string
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( string )

Código da codificação dos caracteres.

---

## getUUID

---

#### _exec.getUUID(key: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: string) : _java.util.UUID_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| defaultValue | string |   |

##### Retorno

( _java.util.UUID_ )


---

#### _exec.getUUID(key: string, defaultValue: _java.util.UUID_) : _java.util.UUID_
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

#### _exec.getValues() : _java.util.Collection_
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### _exec.getValues(indice: _int_) : _[Values](../../objects/Values)_
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

#### _exec.getValues(indice: _int_, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _exec.getValues(chave: string) : _[Values](../../objects/Values)_
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

#### _exec.getValues(chave: string, valorPadrao: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _exec.has(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### _exec.has(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

#### _exec.has(key: string, value: _java.lang.Object_) : _boolean_
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

#### _exec.hasKey(key: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### _exec.hasValue(value: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### _exec.indexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### _exec.is(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _exec.isList(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _exec.isMap(o: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### _exec.isMergeable(object: _java.lang.Object_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## iterator

---

#### _exec.iterator() : _java.util.Iterator_
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### _exec.join(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

## keySet

---

#### _exec.keySet() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### _exec.keys() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### _exec.keysSorted() : _java.util.Set_
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### _exec.keysToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

#### _exec.keysToString(map: _java.util.Map_, splitter: string) : string
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

#### _exec.lastIndexOf(o: _java.lang.Object_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

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

#### _exec.list() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _exec.list(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### _exec.listIterator() : _java.util.ListIterator_
##### Retorno

( _java.util.ListIterator_ )


---

#### _exec.listIterator(index: _int_) : _java.util.ListIterator_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### _exec.listOfValues() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### _exec.loadJSON(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadJSON(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### _exec.loadProperties(in: _java.io.InputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadProperties(in: _java.io.Reader_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### _exec.loadProperties(properties: _java.util.Properties_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| properties | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### _exec.loadPropertiesFromString(data: string) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | string |   |

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

#### _exec.map() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## merge

---

#### _exec.merge(object: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.merge(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.util.function.BiFunction_) : _java.lang.Object_
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

#### _exec.of(array: _[Ljava.lang.Object;[]_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| array | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.of(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.of(list: _java.util.List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| list | _java.util.List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.of(map: _java.util.Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### _exec.ofList(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### _exec.ofMap(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## push

---

#### _exec.push(o: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### _exec.put(key: _java.lang.Object_, value: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | _java.lang.Object_ |   |
| value | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.put(key: string, value: _java.lang.Object_) : _java.lang.Object_
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

#### _exec.putAll(m: _java.util.Map_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| m | _java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### _exec.putIfAbsent(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
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

#### _exec.remove(i: _int_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| i | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.remove(o: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| o | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.remove(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _boolean_
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

#### _exec.removeAll() : _void_
##### Retorno

( _void_ )


---

#### _exec.removeAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### _exec.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.lang.Object_ |   |
| arg1 | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### _exec.replace(arg0: _java.lang.Object_, arg1: _java.lang.Object_, arg2: _java.lang.Object_) : _boolean_
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

#### _exec.replaceAll(arg0: _java.util.function.BiFunction_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### _exec.replaceAll(operator: _java.util.function.UnaryOperator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| operator | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### _exec.replaceAll(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### _exec.retainAll(c: _java.util.Collection_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### _exec.safeString(object: _java.lang.Object_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| object | _java.lang.Object_ |   |

##### Retorno

( string )


---

#### _exec.safeString(object: _java.lang.Object_, defaultValue: string) : string
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

#### _exec.saveJSON(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveJSON(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### _exec.saveProperties(out: _java.io.OutputStream_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### _exec.saveProperties(out: _java.io.Writer_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### _exec.search(content: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |

##### Retorno

( string )


---

#### _exec.search(content: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.search(content: string, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |

##### Retorno

( string )


---

#### _exec.search(content: string, splitter: string, ignoreCase: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| content | string |   |
| splitter | string |   |
| ignoreCase | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.search(map: _java.util.Map_, content: string, splitter: string, ignoreCase: _boolean_) : string
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

#### _exec.service(caminho: string) : _[ScriptResult](../../objects/ScriptResult)_
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do script com origem em 'services/' a executar. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### _exec.service(caminho: string, preservarContexto: _boolean_) : _[ScriptResult](../../objects/ScriptResult)_
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do script com origem em 'services/' a executar. |
| preservarContexto | _boolean_ | Se deve manter o mesmo contexto de execução ou iniciar um novo. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## set

---

#### _exec.set(index: _int_, element: _java.lang.Object_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | _int_ |   |
| element | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.set(key: string, value: _java.lang.Object_) : _[Values](../../objects/Values)_
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

#### _exec.setForceList(forceList: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceList | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### _exec.setForceMap(forceMap: _boolean_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| forceMap | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### _exec.setIfFalse(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _exec.setIfGreaterThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfGreaterThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _exec.setIfLowerThanZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfLowerThanZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _exec.setIfNotEmpty(key: string, value: string) : _[Values](../../objects/Values)_
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

#### _exec.setIfNotZero(key: string, value: _double_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _float_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _long_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| value | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.setIfNotZero(key: string, value: _short_) : _[Values](../../objects/Values)_
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

#### _exec.setIfTrue(key: string, value: _boolean_) : _[Values](../../objects/Values)_
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

#### _exec.setNull(key: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

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

#### _exec.sort(c: _java.util.Comparator_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### _exec.sort(function: _org.graalvm.polyglot.Value_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| function | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### _exec.spliterator() : _java.util.Spliterator_
##### Retorno

( _java.util.Spliterator_ )


---

## stop

---

#### _exec.stop() : _void_
##### Descrição

Realiza a paragem da execução do script atual, útil para interromper da execução.

##### Como Usar

```javascript
// Para a execução:
_out.println('Vai parar...<br>');
_exec.stop();
_out.println('Não chega nesta linha.');
```

##### Retorno

( _void_ )


---

## subList

---

#### _exec.subList(fromIndex: _int_, toIndex: _int_) : _java.util.List_
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

#### _exec.toArray() : _[Ljava.lang.Object;[]_
##### Retorno

( _[Ljava.lang.Object;[]_ )


---

#### _exec.toArray(a: _[Ljava.lang.Object;[]_) : _[Ljava.lang.Object;[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| a | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### _exec.toByteArray() : _byte[]_
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### _exec.toDoubleArray() : _double[]_
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### _exec.toFloatArray() : _float[]_
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### _exec.toFormMap() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(key: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _exec.toFormMap(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### _exec.toIntArray() : _[I_
##### Retorno

( _[I_ )


---

## toJSON

---

#### _exec.toJSON() : string
##### Retorno

( string )


---

#### _exec.toJSON(htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(values: _java.util.List_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(values: _java.util.List_, htmlEscape: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(values: _java.util.List_, htmlEscape: _boolean_, indentFactor: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| values | _java.util.List_ |   |
| htmlEscape | _boolean_ |   |
| indentFactor | _int_ |   |

##### Retorno

( string )


---

#### _exec.toJSON(values: _java.util.List_, indentFactor: _int_) : string
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

#### _exec.toJSONObject(object: _java.lang.Object_, htmlEscape: _boolean_) : _java.lang.Object_
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

#### _exec.toJSONString(object: _java.lang.Object_, htmlEscape: _boolean_, indentFactor: _int_) : string
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

#### _exec.toList() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _exec.toList(cls: _java.lang.Class_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cls | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### _exec.toLongArray() : _long[]_
##### Retorno

( _long[]_ )


---

## toMap

---

#### _exec.toMap() : _java.util.Map_
##### Retorno

( _java.util.Map_ )


---

## toProperties

---

#### _exec.toProperties() : string
##### Retorno

( string )


---

## toShortArray

---

#### _exec.toShortArray() : _short[]_
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### _exec.toStringArray() : _[Ljava.lang.String;[]_
##### Retorno

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### _exec.unset(key: string) : _java.lang.Object_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| key | string |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### _exec.unsetAll() : _void_
##### Retorno

( _void_ )


---

## values

---

#### _exec.values() : _java.util.Collection_
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### _exec.valuesToString(splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |

##### Retorno

( string )


---

#### _exec.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(map: _java.util.Map_, splitter: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |

##### Retorno

( string )


---

#### _exec.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| excludes | _[Ljava.lang.String;[]_ |   |

##### Retorno

( string )


---

#### _exec.valuesToString(map: _java.util.Map_, splitter: string, excludes: _[Ljava.lang.String;[]_, config: _[Values](../../objects/Values)_) : string
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

#### _exec.valuesToString(map: _java.util.Map_, splitter: string, config: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| map | _java.util.Map_ |   |
| splitter | string |   |
| config | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

