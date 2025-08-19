---
id: firebase
title: Firebase
sidebar_label: Firebase
---

Recurso de integração com o Firebase.

---

## active

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>active</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## app

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>app</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.FirebaseApp</span>
##### Retorno

( _com.google.firebase.FirebaseApp_ )


---

## auth

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>auth</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.auth.FirebaseAuth</span>
##### Retorno

( _com.google.firebase.auth.FirebaseAuth_ )


---

## config

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## database

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>database</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.FirebaseDatabase</span>
##### Retorno

( _com.google.firebase.database.FirebaseDatabase_ )


---

## databaseReference

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>databaseReference</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _com.google.firebase.database.DatabaseReference_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>databaseReference</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>
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

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>listener</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>, <span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **url** | _string_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>listener</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>removeValue</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>removeValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>removeValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _void_ )


---

