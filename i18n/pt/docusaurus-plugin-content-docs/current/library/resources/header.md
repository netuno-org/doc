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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>acceptJSON</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## add

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>element</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## addAll

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>addAll</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>addAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## as

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>as</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>as</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>oDefault</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |
| **oDefault** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## asBoolean

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asByte</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asFile</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](../objects/File)_ )


---

## asFloat

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asHTMLDecode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asHTMLEncode

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asHTMLEncode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## asInstant

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asInt</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## asSQLDate

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charsetName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>indice</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índex para obter o objeto associado. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>indice</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>valorPadrao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índex para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valorPadrao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

## baseURL

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>baseURL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## cache

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>cache</span>(<span style={{color: '#FF8000'}}>time</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **time** | _int_ |   |

##### Retorno

( _[Header](../resources/header)_ )


---

## clear

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>clear</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## cloneJSON

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>cloneJSON</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## compute

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>compute</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>computeIfAbsent</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>computeIfPresent</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>containsAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## containsKey

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>containsKey</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## containsValue

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>containsValue</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## contentType

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentType</span>(<span style={{color: '#FF8000'}}>contentType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **contentType** | _string_ |   |

##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypeCSS

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypeCSS</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypeHTML

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypeHTML</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypeJPG

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypeJPG</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypeJS

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypeJS</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypeJSON

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypeJSON</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypeOctetStream

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypeOctetStream</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypePDF

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypePDF</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypePNG

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypePNG</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## contentTypePlain

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>contentTypePlain</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## downloadFile

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>downloadFile</span>(<span style={{color: '#FF8000'}}>fileName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fileName** | _string_ |   |

##### Retorno

( _[Header](../resources/header)_ )


---

## ensureJail

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>ensureJail</span>(<span style={{color: '#FF8000'}}>jailPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>entrySet</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## filter

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>filter</span>(<span style={{color: '#FF8000'}}>p</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Predicate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>filter</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## find

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>p</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Predicate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _[Values](../objects/Values)_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## forEach

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>action</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiConsumer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>action</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## forceList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>forceList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## forceMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>forceMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## fromJSON

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>fromJSON</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>fromJSON</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.net.Remote$Response</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## get

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Retorno

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Calendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Retorno

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[File](../objects/File)_ )


---

## getFloat

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Retorno

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getForceList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## getForceMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getForceMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## getHTMLDecode

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getHTMLDecode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getHTMLEncode

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getHTMLEncode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

## getInstant

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.Instant_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Retorno

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getKeys</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## getList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Retorno

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## getOrDefault

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getOrDefault</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Time_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.sql.Timestamp_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Retorno

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## getString

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charsetName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getURLCharacterEncoding</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém a codificação de caracteres para ser utilizada na formatação para URL (_QueryString_).

##### Retorno

( _string_ )

Código da codificação dos caracteres.

---

## getUUID

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Retorno

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>indice</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índice para obter o objeto associado. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>indice</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>valorPadrao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado ao índice e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indice** | _int_ | Índice para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valorPadrao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém o objeto associado à chave e converte para Valores (Dicionário ou Lista).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | A chave para obter o objeto associado. |
| **valorPadrao** | _java.lang.Object_ | Caso não consiga obter o valor como um objeto em Values então retorna este valor padrão como alternativa. |

##### Retorno

( _[Values](../objects/Values)_ )

Objeto convertido para Values.

---

## has

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>has</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>has</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>has</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>hasKey</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _boolean_ )


---

## hasValue

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>hasValue</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## host

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>host</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## indexOf

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>indexOf</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## is

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>is</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isAcceptJSON

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isAcceptJSON</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isCopy

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isCopy</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isDelete

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isDelete</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isEmpty

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isEmpty</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isGet

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isGet</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isHead

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isHead</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isJail

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isJail</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verfica se está ativa a restrição para todos os ficheiros associados serem carregados apenas a partir de um directório específico.

##### Retorno

( _boolean_ )

Se está ativo a restrição aos ficheiros associados.

---

## isLink

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isLink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isList</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isLock

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isLock</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isLockedAsReadOnly

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isLockedAsReadOnly</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _boolean_ )

Se está em modo apenas leitura ou não.

---

## isMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isMap</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isMergeable

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isMergeable</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _boolean_ )


---

## isOptions

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isPatch

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isPatch</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isPost

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isPost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isPropFind

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isPropFind</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isPurge

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isPurge</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isPut

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isPut</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isTrace

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isTrace</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isUnlink

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isUnlink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isUnlock

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isUnlock</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isView

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>isView</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## iterator

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>iterator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Iterator</span>
##### Retorno

( _java.util.Iterator_ )


---

## join

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>join</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## keySet

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>keySet</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## keys

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>keys</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## keysSorted

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>keysSorted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Retorno

( _java.util.Set_ )


---

## keysToString

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>keysToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>keysToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

## lastIndexOf

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>lastIndexOf</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _int_ )


---

## length

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>length</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## list

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>list</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>list</span>(<span style={{color: '#FF8000'}}>cls</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## listIterator

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>listIterator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.ListIterator</span>
##### Retorno

( _java.util.ListIterator_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>listIterator</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.ListIterator</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |

##### Retorno

( _java.util.ListIterator_ )


---

## listOfValues

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>listOfValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Retorno

( _java.util.List_ )


---

## loadJSON

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>loadJSON</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>loadJSON</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

## loadProperties

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>loadProperties</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>loadProperties</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>loadProperties</span>(<span style={{color: '#FF8000'}}>properties</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Properties</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Retorno

( _void_ )


---

## loadPropertiesFromString

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>loadPropertiesFromString</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _string_ |   |

##### Retorno

( _void_ )


---

## lockAsReadOnly

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>lockAsReadOnly</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Verfica se está bloqueado em modo de apenas leitura.

##### Retorno

( _[Values](../objects/Values)_ )

Se está em modo apenas leitura ou não.

---

## map

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>map</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>merge</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>merge</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg2</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.util.function.BiFunction_ |   |

##### Retorno

( _java.lang.Object_ )


---

## method

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>method</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## newList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>newList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## newMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>newMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## noCache

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>noCache</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Retorno

( _[Header](../resources/header)_ )


---

## of

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>array</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>list</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## ofList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>ofList</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## ofMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>ofMap</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## port

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>port</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## push

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>push</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## put

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>put</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>put</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>putAll</span>(<span style={{color: '#FF8000'}}>m</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **m** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

## putIfAbsent

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>putIfAbsent</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

## rawHost

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>rawHost</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## remove

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>i</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **i** | _int_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>removeAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>removeAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## replace

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>replace</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Retorno

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>replace</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg2</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>replaceAll</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>replaceAll</span>(<span style={{color: '#FF8000'}}>operator</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.UnaryOperator</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>replaceAll</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## response

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>response</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Inicia uma nova instância do SMTP utilizando a configuração do STMP da chave `default`.

##### Retorno

( _[Values](../objects/Values)_ )

A nova instância do recurso SMTP com base na configuração do STMP `default`.

---

## retainAll

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>retainAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Retorno

( _boolean_ )


---

## safeString

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>safeString</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>safeString</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>saveJSON</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>saveJSON</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## saveProperties

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>saveProperties</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>saveProperties</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Retorno

( _void_ )


---

## scheme

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>scheme</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## search

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ignoreCase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ignoreCase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ignoreCase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Retorno

( _string_ )


---

## set

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>set</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>element</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>set</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setForceList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setForceList</span>(<span style={{color: '#FF8000'}}>forceList</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setForceMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setForceMap</span>(<span style={{color: '#FF8000'}}>forceMap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setIfFalse

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfFalse</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setIfGreaterThanZero

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setIfLowerThanZero

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setIfNotEmpty

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfNotEmpty</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _string_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setIfNotZero

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setIfTrue

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setIfTrue</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setNull

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setNull</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>setURLCharacterEncoding</span>(<span style={{color: '#FF8000'}}>characterEncoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>size</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## sizeOfList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>sizeOfList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## sizeOfMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>sizeOfMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## sort

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Comparator</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Retorno

( _void_ )


---

## spliterator

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>spliterator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Spliterator</span>
##### Retorno

( _java.util.Spliterator_ )


---

## status

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>status</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>status</span>(<span style={{color: '#FF8000'}}>httpStatus</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **httpStatus** | _int_ |   |

##### Retorno

( _[Header](../resources/header)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>status</span>(<span style={{color: '#FF8000'}}>httpStatus</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.proteu.Proteu$HTTPStatus</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Header](../resources/header)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **httpStatus** | _org.netuno.proteu.Proteu$HTTPStatus_ |   |

##### Retorno

( _[Header](../resources/header)_ )


---

## subList

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>subList</span>(<span style={{color: '#FF8000'}}>fromIndex</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>toIndex</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>
##### Retorno

( _java.lang.Object[]_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toArray</span>(<span style={{color: '#FF8000'}}>a</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Retorno

( _java.lang.Object[]_ )


---

## toByteArray

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toByteArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Retorno

( _byte[]_ )


---

## toDoubleArray

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toDoubleArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double[]</span>
##### Retorno

( _double[]_ )


---

## toFloatArray

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toFloatArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float[]</span>
##### Retorno

( _float[]_ )


---

## toFormMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toFormMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toFormMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toFormMap</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../objects/Values)_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## toIntArray

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toIntArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
##### Retorno

( _int[]_ )


---

## toJSON

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSONObject</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toJSONString</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Retorno

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toList</span>(<span style={{color: '#FF8000'}}>cls</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Retorno

( _java.util.List_ )


---

## toLongArray

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toLongArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long[]</span>
##### Retorno

( _long[]_ )


---

## toMap

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toProperties</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## toShortArray

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toShortArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short[]</span>
##### Retorno

( _short[]_ )


---

## toStringArray

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>toStringArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>
##### Retorno

( _java.lang.String[]_ )


---

## unset

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>unset</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _string_ |   |

##### Retorno

( _java.lang.Object_ )


---

## unsetAll

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>unsetAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## uri

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>uri</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## url

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>url</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## values

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>values</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>
##### Descrição

Obtém todos objeto de valores armazenados tanto no modo dicionário como de lista.

##### Retorno

( _java.util.Collection_ )

Lista de todos os valores obtidos.

---

## valuesToString

---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_header</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Retorno

( _string_ )


---

