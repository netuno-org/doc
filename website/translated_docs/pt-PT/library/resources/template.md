---
id: template
title: Template
sidebar_label: Template
---

Recurso de gestão de templates. 
Este recurso permite a manipulação de templates com base no motor de templates do Apache Velocity

---

## get

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _string_ )


---

## getOutput

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">getOutput</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">getOutput</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">getOutput</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _string_ )


---

## init

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[Template](../../resources/Template)</span>
##### Retorno

( _[Template](../../resources/Template)_ )


---

## initCore

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">initCore</span>() : <span style="font-weight: normal; font-style: italic;">[Template](../../resources/Template)</span>
##### Retorno

( _[Template](../../resources/Template)_ )


---

## out

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">out</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">out</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">out</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

## output

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

