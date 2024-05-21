---
id: firebase
title: Firebase
sidebar_label: Firebase
---

Recurso de comunicação com o Firebase.

---

## active

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">active</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## app

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">app</span>() : <span style="font-weight: normal; font-style: italic;">com.google.firebase.FirebaseApp</span>
##### Retorno

( _com.google.firebase.FirebaseApp_ )


---

## auth

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">auth</span>() : <span style="font-weight: normal; font-style: italic;">com.google.firebase.auth.FirebaseAuth</span>
##### Retorno

( _com.google.firebase.auth.FirebaseAuth_ )


---

## config

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">config</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Retorno

( _void_ )


---

## database

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">database</span>() : <span style="font-weight: normal; font-style: italic;">com.google.firebase.database.FirebaseDatabase</span>
##### Retorno

( _com.google.firebase.database.FirebaseDatabase_ )


---

## databaseReference

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">databaseReference</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.google.firebase.database.DatabaseReference</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _com.google.firebase.database.DatabaseReference_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">databaseReference</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">uid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.google.firebase.database.DatabaseReference</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |

##### Retorno

( _com.google.firebase.database.DatabaseReference_ )


---

## listener

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">listener</span>(<span style="color: #FF8000">ref</span>: <span style="font-weight: normal; font-style: italic;">com.google.firebase.database.DatabaseReference</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **url** | _string_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">listener</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">url</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **url** | _string_ |   |

##### Retorno

( _void_ )


---

## removeValue

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">removeValue</span>(<span style="color: #FF8000">ref</span>: <span style="font-weight: normal; font-style: italic;">com.google.firebase.database.DatabaseReference</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">removeValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">removeValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">uid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |

##### Retorno

( _void_ )


---

## setValue

---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">ref</span>: <span style="font-weight: normal; font-style: italic;">com.google.firebase.database.DatabaseReference</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">ref</span>: <span style="font-weight: normal; font-style: italic;">com.google.firebase.database.DatabaseReference</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">uid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">uid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">uid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _void_ )


---

#### <span style="font-weight: normal">_firebase</span>.<span style="color: #008000">setValue</span>(<span style="color: #FF8000">path</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

