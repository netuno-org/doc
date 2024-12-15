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

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _string_ )


---

## getOutput

---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>getOutput</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>getOutput</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>getOutput</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _string_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Template](../resources/template)</span>
##### Return

( _[Template](../resources/template)_ )


---

## initCore

---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>initCore</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Template](../resources/template)</span>
##### Return

( _[Template](../resources/template)_ )


---

## out

---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>out</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>out</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>out</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

## output

---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_template</span>.<span style={{color: '#008000'}}>output</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

