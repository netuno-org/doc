---
id: firebase
title: Firebase
sidebar_label: Firebase
---

Recurso de comunicação com o Firebase.

---

## active

---

#### _firebase.active() : _boolean_
##### Return

( _boolean_ )


---

## app

---

#### _firebase.app() : _com.google.firebase.FirebaseApp_
##### Return

( _com.google.firebase.FirebaseApp_ )


---

## auth

---

#### _firebase.auth() : _com.google.firebase.auth.FirebaseAuth_
##### Return

( _com.google.firebase.auth.FirebaseAuth_ )


---

## config

---

#### _firebase.config() : _void_
##### Return

( _void_ )


---

## database

---

#### _firebase.database() : _com.google.firebase.database.FirebaseDatabase_
##### Return

( _com.google.firebase.database.FirebaseDatabase_ )


---

## databaseReference

---

#### _firebase.databaseReference(path: string) : _com.google.firebase.database.DatabaseReference_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |

##### Return

( _com.google.firebase.database.DatabaseReference_ )


---

#### _firebase.databaseReference(path: string, uid: string) : _com.google.firebase.database.DatabaseReference_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| uid | string |   |

##### Return

( _com.google.firebase.database.DatabaseReference_ )


---

## listener

---

#### _firebase.listener(ref: _com.google.firebase.database.DatabaseReference_, url: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| ref | _com.google.firebase.database.DatabaseReference_ |   |
| url | string |   |

##### Return

( _void_ )


---

#### _firebase.listener(path: string, url: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| url | string |   |

##### Return

( _void_ )


---

## removeValue

---

#### _firebase.removeValue(ref: _com.google.firebase.database.DatabaseReference_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| ref | _com.google.firebase.database.DatabaseReference_ |   |

##### Return

( _void_ )


---

#### _firebase.removeValue(path: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |

##### Return

( _void_ )


---

#### _firebase.removeValue(path: string, uid: string) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| uid | string |   |

##### Return

( _void_ )


---

## setValue

---

#### _firebase.setValue(ref: _com.google.firebase.database.DatabaseReference_, data: _java.util.List_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| ref | _com.google.firebase.database.DatabaseReference_ |   |
| data | _java.util.List_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(ref: _com.google.firebase.database.DatabaseReference_, data: _[Values](../../objects/Values)_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| ref | _com.google.firebase.database.DatabaseReference_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: _java.util.List_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| uid | string |   |
| data | _java.util.List_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: _java.util.Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| uid | string |   |
| data | _java.util.Map_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: _[Values](../../objects/Values)_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| uid | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, data: _java.util.List_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| data | _java.util.List_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, data: _java.util.Map_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| data | _java.util.Map_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, data: _[Values](../../objects/Values)_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

