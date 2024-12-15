---
id: firebase
title: Firebase
sidebar_label: Firebase
---

Recurso de comunicação com o Firebase.

---

## active

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>active</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## app

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>app</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.FirebaseApp</span>
##### Return

( _com.google.firebase.FirebaseApp_ )


---

## auth

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>auth</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.auth.FirebaseAuth</span>
##### Return

( _com.google.firebase.auth.FirebaseAuth_ )


---

## config

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## database

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>database</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.FirebaseDatabase</span>
##### Return

( _com.google.firebase.database.FirebaseDatabase_ )


---

## databaseReference

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>databaseReference</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _com.google.firebase.database.DatabaseReference_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>databaseReference</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |

##### Return

( _com.google.firebase.database.DatabaseReference_ )


---

## listener

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>listener</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>, <span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **url** | _string_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>listener</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>url</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **url** | _string_ |   |

##### Return

( _void_ )


---

## removeValue

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>removeValue</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>removeValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>removeValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |

##### Return

( _void_ )


---

## setValue

---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _java.util.List_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>ref</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.google.firebase.database.DatabaseReference</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_firebase</span>.<span style={{color: '#008000'}}>setValue</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _void_ )


---

