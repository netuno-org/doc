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
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Return

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _string_ )


---

## getOutput

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">getOutput</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">getOutput</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Return

( _string_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">getOutput</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _string_ )


---

## init

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[Template](../../resources/template)</span>
##### Return

( _[Template](../../resources/template)_ )


---

## initCore

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">initCore</span>() : <span style="font-weight: normal; font-style: italic;">[Template](../../resources/template)</span>
##### Return

( _[Template](../../resources/template)_ )


---

## out

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">out</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">out</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">out</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

## output

---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_template</span>.<span style="color: #008000">output</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

