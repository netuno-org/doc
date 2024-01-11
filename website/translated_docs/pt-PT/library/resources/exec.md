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

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">add</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">element</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">add</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## addAll

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">addAll</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">c</span>: <span style="font-weight: normal; font-style: italic;">java.util.Collection</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">addAll</span>(<span style="color: #FF8000">c</span>: <span style="font-weight: normal; font-style: italic;">java.util.Collection</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">as</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">as</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">oDefault</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |
| **oDefault** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## asBoolean

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asBoolean</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asBoolean</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asBoolean</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asBoolean</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## asByte

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asByte</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asByte</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asByte</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

## asCalendar

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asCalendar</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asCalendar</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## asDate

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.Date</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

## asDouble

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asDouble</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asDouble</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asDouble</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asDouble</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

## asFile

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asFile</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## asFloat

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asFloat</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asFloat</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asFloat</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asFloat</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

## asHTMLDecode

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asHTMLDecode</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asHTMLEncode

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asHTMLEncode</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asInstant</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asInstant</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

## asInt

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asInt</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asInt</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asInt</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _int_ )


---

## asList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## asLocalDate

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLocalDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLocalDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLocalDateTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLocalDateTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLocalTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLocalTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## asLong

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLong</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLong</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLong</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asLong</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

## asMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asMap</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asMap</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asMap</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Map_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asMap</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

## asSQLDate

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asSQLDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asSQLDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.sql.Date</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## asSQLTime

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asSQLTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Time</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asSQLTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.sql.Time</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Time</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asSQLTimestamp</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Timestamp</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asSQLTimestamp</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.sql.Timestamp</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Timestamp</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## asShort

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asShort</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asShort</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asShort</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asShort</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

## asString

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asString</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asString</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asString</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asString</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asString</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charsetName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Retorno

( _string_ )


---

## asUID

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## asUUID

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asUUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asUUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asUUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## asValues

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asValues</span>(<span style="color: #FF8000">indice</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índex para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asValues</span>(<span style="color: #FF8000">indice</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">valorPadrao</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índex para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asValues</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asValues</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">valorPadrao</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

## async

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">async</span>(<span style="color: #FF8000">functions</span>: <span style="font-weight: normal; font-style: italic;">[Lorg.graalvm.polyglot.Value;[]</span>) : <span style="font-weight: normal; font-style: italic;">[Async](../../objects/Async)</span>
##### Descrição

Execução de funções de forma assíncrona.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **functions** | _[Lorg.graalvm.polyglot.Value;[]_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## asyncData

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asyncData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">functions</span>: <span style="font-weight: normal; font-style: italic;">[Lorg.graalvm.polyglot.Value;[]</span>) : <span style="font-weight: normal; font-style: italic;">[Async](../../objects/Async)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.lang.Object_ |   |
| **functions** | _[Lorg.graalvm.polyglot.Value;[]_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## asyncList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">asyncList</span>(<span style="color: #FF8000">list</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">function</span>: <span style="font-weight: normal; font-style: italic;">org.graalvm.polyglot.Value</span>) : <span style="font-weight: normal; font-style: italic;">[Async](../../objects/Async)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **list** | _[Values](../../objects/Values)_ |   |
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Async](../../objects/Async)_ )


---

## bind

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">bind</span>(<span style="color: #FF8000">variavel</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">objeto</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Exec](../../resources/Exec)</span>
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
| **variavel** | _string_ | Nome da variável que estará disponível no outro script que será executado. |
| **objeto** | _java.lang.Object_ | Objeto a ser passado para o outro script que será executado. |

##### Retorno

( _[Exec](../../resources/Exec)_ )


---

## clear

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">clear</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Retorno

( _void_ )


---

## cloneJSON

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">cloneJSON</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## compute

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">compute</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.BiFunction</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## computeIfAbsent

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">computeIfAbsent</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.Function</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.Function_ |   |

##### Retorno

( _java.lang.Object_ )


---

## computeIfPresent

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">computeIfPresent</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.BiFunction</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## contains

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">contains</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">contains</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsAll

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">containsAll</span>(<span style="color: #FF8000">c</span>: <span style="font-weight: normal; font-style: italic;">java.util.Collection</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">containsKey</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">containsValue</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## core

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">core</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[ScriptResult](../../objects/ScriptResult)</span>
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em `core/` a executar. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">core</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[ScriptResult](../../objects/ScriptResult)</span>
##### Descrição

Execução de scripts que estão na pasta `server/core/`.

##### Como Usar

```javascript
_exec.core("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em `core/` a executar. |
| **caminho** | _boolean_ | Caminho do script com origem em `core/` a executar. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## ensureJail

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">ensureJail</span>(<span style="color: #FF8000">jailPath</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Define a restrição de segurança em um diretório específico para os objetos processados do tipo de ficheiros, apenas pode ser definido uma única vez.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jailPath** | _string_ | Caminho onde será restringido os ficheiros. |

##### Retorno

( _void_ )


---

## entrySet

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">entrySet</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">filter</span>(<span style="color: #FF8000">p</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.Predicate</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">filter</span>(<span style="color: #FF8000">function</span>: <span style="font-weight: normal; font-style: italic;">org.graalvm.polyglot.Value</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## find

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">find</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">find</span>(<span style="color: #FF8000">p</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.Predicate</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">find</span>(<span style="color: #FF8000">function</span>: <span style="font-weight: normal; font-style: italic;">org.graalvm.polyglot.Value</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">find</span>(<span style="color: #FF8000">filter</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## forEach

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">forEach</span>(<span style="color: #FF8000">action</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.BiConsumer</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">forEach</span>(<span style="color: #FF8000">action</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.Consumer</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">forEach</span>(<span style="color: #FF8000">function</span>: <span style="font-weight: normal; font-style: italic;">org.graalvm.polyglot.Value</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">forceList</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## forceMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">forceMap</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## fromJSON

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">fromJSON</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">fromJSON</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.net.Remote$Response</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## gc

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">gc</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _int_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _java.lang.Object_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Descrição

Obtém o objeto original associado a chave.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave para obter o objeto para associado. |

##### Retorno

( _java.lang.Object_ )

Objeto original sem conversões.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Descrição

Obtém o objeto original associado a chave, mas convertido para o tipo da classe especificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave para obter o objeto associado. |
| **tipo** | _java.lang.Class_ | Classe que representa o tipo de objeto que deve ser convertido (_cast_). |

##### Retorno

( _java.lang.Object_ )

Objeto original convertido para o tipo da classe definida.

---

## getBoolean

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getBoolean</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getBoolean</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getBoolean</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getBoolean</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

## getByte

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getByte</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getByte</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getByte</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _byte_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getByte</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

## getCalendar

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getCalendar</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getCalendar</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Calendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Retorno

( _java.util.Calendar_ )


---

## getDate

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.Date</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Retorno

( _java.util.Date_ )


---

## getDouble

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getDouble</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getDouble</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getDouble</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getDouble</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

## getFile

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getFile</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](../../objects/File)_ )


---

## getFloat

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getFloat</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getFloat</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getFloat</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getFloat</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

## getForceList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getForceList</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getForceMap</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getHTMLDecode</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getHTMLEncode

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getHTMLEncode</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getInstant</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getInstant</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>) : <span style="font-weight: normal; font-style: italic;">java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Retorno

( _java.time.Instant_ )


---

## getInt

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getInt</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getInt</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getInt</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _int_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getInt</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

## getKeys

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getKeys</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getList</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">claz</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## getLocalDate

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLocalDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLocalDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLocalDateTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLocalDateTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLocalTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLocalTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>) : <span style="font-weight: normal; font-style: italic;">java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

## getLong

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLong</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLong</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLong</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getLong</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

## getMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getMap</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.Map_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getMap</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getMap</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Map_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getMap</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.Map_ )


---

## getOrDefault

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getOrDefault</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## getSQLDate

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getSQLDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getSQLDate</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.sql.Date</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Retorno

( _java.sql.Date_ )


---

## getSQLTime

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getSQLTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Time</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getSQLTime</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.sql.Time</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Time</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Retorno

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getSQLTimestamp</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Timestamp</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getSQLTimestamp</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.sql.Timestamp</span>) : <span style="font-weight: normal; font-style: italic;">java.sql.Timestamp</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

## getShort

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getShort</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getShort</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getShort</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getShort</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

## getSize

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getSize</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## getString

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getString</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getString</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getString</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getString</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getString</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charsetName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Retorno

( _string_ )


---

## getUID

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## getURLCharacterEncoding

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getURLCharacterEncoding</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( _string_ )

Código da codificação dos caracteres.

---

## getUUID

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getUUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getUUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getUUID</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Retorno

( _java.util.UUID_ )


---

## getValues

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getValues</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Collection</span>
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getValues</span>(<span style="color: #FF8000">indice</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índice para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getValues</span>(<span style="color: #FF8000">indice</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">valorPadrao</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índice para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getValues</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">getValues</span>(<span style="color: #FF8000">chave</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">valorPadrao</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../../objects/Values)_ )

Objeto convertido para Values.

---

## has

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">has</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">has</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">has</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## hasKey

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">hasKey</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">hasValue</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## indexOf

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">indexOf</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">is</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isEmpty

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isEmpty</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isJail

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isJail</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isList</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isList</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isLockedAsReadOnly</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isMap</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isMap</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">isMergeable</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## iterator

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">iterator</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Iterator</span>
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">join</span>(<span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## keySet

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">keySet</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">keys</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">keysSorted</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">keysToString</span>(<span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">keysToString</span>(<span style="color: #FF8000">map</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## lastIndexOf

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">lastIndexOf</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">length</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## list

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">list</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">list</span>(<span style="color: #FF8000">cls</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">listIterator</span>() : <span style="font-weight: normal; font-style: italic;">java.util.ListIterator</span>
##### Retorno

( _java.util.ListIterator_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">listIterator</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.ListIterator</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">listOfValues</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">loadJSON</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">loadJSON</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">java.io.Reader</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">loadProperties</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.InputStream_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">loadProperties</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">java.io.Reader</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">loadProperties</span>(<span style="color: #FF8000">properties</span>: <span style="font-weight: normal; font-style: italic;">java.util.Properties</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">loadPropertiesFromString</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _string_ |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">lockAsReadOnly</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](../../objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">map</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Retorno

( _java.util.Map_ )


---

## merge

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">merge</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">merge</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg2</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.BiFunction</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## of

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">of</span>(<span style="color: #FF8000">array</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.Object;[]</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **array** | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">of</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">of</span>(<span style="color: #FF8000">list</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">of</span>(<span style="color: #FF8000">map</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _java.util.Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">ofList</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## ofMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">ofMap</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## push

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">push</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## put

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">put</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## putAll

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">putAll</span>(<span style="color: #FF8000">m</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **m** | _java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">putIfAbsent</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## remove

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">remove</span>(<span style="color: #FF8000">i</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **i** | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">remove</span>(<span style="color: #FF8000">o</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">remove</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## removeAll

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">removeAll</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">removeAll</span>(<span style="color: #FF8000">c</span>: <span style="font-weight: normal; font-style: italic;">java.util.Collection</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">replace</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">replace</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg1</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">arg2</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## replaceAll

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">replaceAll</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.BiFunction</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">replaceAll</span>(<span style="color: #FF8000">operator</span>: <span style="font-weight: normal; font-style: italic;">java.util.function.UnaryOperator</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">replaceAll</span>(<span style="color: #FF8000">function</span>: <span style="font-weight: normal; font-style: italic;">org.graalvm.polyglot.Value</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## retainAll

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">retainAll</span>(<span style="color: #FF8000">c</span>: <span style="font-weight: normal; font-style: italic;">java.util.Collection</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">safeString</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">safeString</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">defaultValue</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

## saveJSON

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">saveJSON</span>(<span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">saveJSON</span>(<span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">java.io.Writer</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">saveProperties</span>(<span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.OutputStream_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">saveProperties</span>(<span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">java.io.Writer</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## search

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">search</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">search</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">ignoreCase</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">search</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">search</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">ignoreCase</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">search</span>(<span style="color: #FF8000">map</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">ignoreCase</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _java.util.Map_ |   |
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

## service

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">service</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[ScriptResult](../../objects/ScriptResult)</span>
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em 'services/' a executar. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">service</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">preservarContexto</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[ScriptResult](../../objects/ScriptResult)</span>
##### Descrição

Execução de scripts que estão na pasta `server/services/`.

##### Como Usar

```javascript
_exec.service("outro-script-talvez-em-outro-linguagem");
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do script com origem em 'services/' a executar. |
| **preservarContexto** | _boolean_ | Se deve manter o mesmo contexto de execução ou iniciar um novo. |

##### Retorno

( _[ScriptResult](../../objects/ScriptResult)_ )


---

## set

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">set</span>(<span style="color: #FF8000">index</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">element</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">set</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setForceList</span>(<span style="color: #FF8000">forceList</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setForceMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setForceMap</span>(<span style="color: #FF8000">forceMap</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfFalse

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfFalse</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfGreaterThanZero

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfGreaterThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfGreaterThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfGreaterThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfGreaterThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfGreaterThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfLowerThanZero

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfLowerThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfLowerThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfLowerThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfLowerThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfLowerThanZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfNotEmpty

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfNotEmpty</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfNotZero

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfNotZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfNotZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfNotZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfNotZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfNotZero</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setIfTrue

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setIfTrue</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setNull

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setNull</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">setURLCharacterEncoding</span>(<span style="color: #FF8000">characterEncoding</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Define a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **characterEncoding** | _string_ | Código da codificação dos caracteres. |

##### Retorno

( _void_ )


---

## size

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">size</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## sizeOfList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">sizeOfList</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">sizeOfMap</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Retorno

( _int_ )


---

## sleep

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">sleep</span>(<span style="color: #FF8000">intervalo</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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
| **intervalo** | _long_ | Intervalo de tempo em milissegundos que deve fazer a pausa na execução. |

##### Retorno

( _void_ )


---

## sort

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">sort</span>(<span style="color: #FF8000">c</span>: <span style="font-weight: normal; font-style: italic;">java.util.Comparator</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">sort</span>(<span style="color: #FF8000">function</span>: <span style="font-weight: normal; font-style: italic;">org.graalvm.polyglot.Value</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">spliterator</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Spliterator</span>
##### Retorno

( _java.util.Spliterator_ )


---

## stop

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">stop</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">subList</span>(<span style="color: #FF8000">fromIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">toIndex</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fromIndex** | _int_ |   |
| **toIndex** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## toArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toArray</span>() : <span style="font-weight: normal; font-style: italic;">[Ljava.lang.Object;[]</span>
##### Retorno

( _[Ljava.lang.Object;[]_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toArray</span>(<span style="color: #FF8000">a</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.Object;[]</span>) : <span style="font-weight: normal; font-style: italic;">[Ljava.lang.Object;[]</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **a** | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Ljava.lang.Object;[]_ )


---

## toByteArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toByteArray</span>() : <span style="font-weight: normal; font-style: italic;">byte[]</span>
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toDoubleArray</span>() : <span style="font-weight: normal; font-style: italic;">double[]</span>
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toFloatArray</span>() : <span style="font-weight: normal; font-style: italic;">float[]</span>
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toFormMap</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toFormMap</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toFormMap</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## toIntArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toIntArray</span>() : <span style="font-weight: normal; font-style: italic;">[I</span>
##### Retorno

( _[I_ )


---

## toJSON

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>, <span style="color: #FF8000">indentFactor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">indentFactor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">values</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">values</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">values</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>, <span style="color: #FF8000">indentFactor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">values</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">indentFactor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

## toJSONObject

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSONObject</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _java.lang.Object_ )


---

## toJSONString

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toJSONString</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>, <span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>, <span style="color: #FF8000">indentFactor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

## toList

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toList</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toList</span>(<span style="color: #FF8000">cls</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Class</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toLongArray</span>() : <span style="font-weight: normal; font-style: italic;">long[]</span>
##### Retorno

( _long[]_ )


---

## toMap

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toMap</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Map</span>
##### Retorno

( _java.util.Map_ )


---

## toProperties

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toProperties</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## toShortArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toShortArray</span>() : <span style="font-weight: normal; font-style: italic;">short[]</span>
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">toStringArray</span>() : <span style="font-weight: normal; font-style: italic;">[Ljava.lang.String;[]</span>
##### Retorno

( _[Ljava.lang.String;[]_ )


---

## unset

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">unset</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">unsetAll</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Retorno

( _void_ )


---

## values

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">values</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Collection</span>
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">excludes</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.String;[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _[Ljava.lang.String;[]_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">excludes</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.String;[]</span>, <span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _[Ljava.lang.String;[]_ |   |
| **config** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">map</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">map</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">excludes</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.String;[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _[Ljava.lang.String;[]_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">map</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">excludes</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.String;[]</span>, <span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _[Ljava.lang.String;[]_ |   |
| **config** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_exec</span>.<span style="color: #008000">valuesToString</span>(<span style="color: #FF8000">map</span>: <span style="font-weight: normal; font-style: italic;">java.util.Map</span>, <span style="color: #FF8000">splitter</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _string_ )


---

