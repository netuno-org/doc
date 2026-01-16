---
id: firebase
title: Firebase
sidebar_label: Firebase
---

Recurso de integração com o Firebase.

---

## active

---

#### _firebase.active() : boolean
##### Retorno

( _boolean_ )


---

## app

---

#### _firebase.app() : com.google.firebase.FirebaseApp
##### Retorno

( _com.google.firebase.FirebaseApp_ )


---

## auth

---

#### _firebase.auth() : com.google.firebase.auth.FirebaseAuth
##### Retorno

( _com.google.firebase.auth.FirebaseAuth_ )


---

## config

---

#### _firebase.config() : void
##### Retorno

( _void_ )


---

## database

---

#### _firebase.database() : com.google.firebase.database.FirebaseDatabase
##### Retorno

( _com.google.firebase.database.FirebaseDatabase_ )


---

## databaseReference

---

#### _firebase.databaseReference(path: string) : com.google.firebase.database.DatabaseReference
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _com.google.firebase.database.DatabaseReference_ )


---

#### _firebase.databaseReference(path: string, uid: string) : com.google.firebase.database.DatabaseReference
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

#### _firebase.listener(ref: com.google.firebase.database.DatabaseReference, url: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **url** | _string_ |   |

##### Retorno

( _void_ )


---

#### _firebase.listener(path: string, url: string) : void
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

#### _firebase.removeValue(ref: com.google.firebase.database.DatabaseReference) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |

##### Retorno

( _void_ )


---

#### _firebase.removeValue(path: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _void_ )


---

#### _firebase.removeValue(path: string, uid: string) : void
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

#### _firebase.setValue(ref: com.google.firebase.database.DatabaseReference, data: java.util.List) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### _firebase.setValue(ref: com.google.firebase.database.DatabaseReference, data: [Values](/docs/library/objects/Values)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: java.util.List) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: [Values](/docs/library/objects/Values)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _void_ )


---

#### _firebase.setValue(path: string, data: java.util.List) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Retorno

( _void_ )


---

#### _firebase.setValue(path: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _void_ )


---

#### _firebase.setValue(path: string, data: [Values](/docs/library/objects/Values)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _void_ )


---

