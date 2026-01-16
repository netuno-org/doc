---
id: firebase
title: Firebase
sidebar_label: Firebase
---

Firebase integration feature.

---

## active

---

#### _firebase.active() : boolean
##### Return

( _boolean_ )


---

## app

---

#### _firebase.app() : com.google.firebase.FirebaseApp
##### Return

( _com.google.firebase.FirebaseApp_ )


---

## auth

---

#### _firebase.auth() : com.google.firebase.auth.FirebaseAuth
##### Return

( _com.google.firebase.auth.FirebaseAuth_ )


---

## config

---

#### _firebase.config() : void
##### Return

( _void_ )


---

## database

---

#### _firebase.database() : com.google.firebase.database.FirebaseDatabase
##### Return

( _com.google.firebase.database.FirebaseDatabase_ )


---

## databaseReference

---

#### _firebase.databaseReference(path: string) : com.google.firebase.database.DatabaseReference
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _com.google.firebase.database.DatabaseReference_ )


---

#### _firebase.databaseReference(path: string, uid: string) : com.google.firebase.database.DatabaseReference
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

#### _firebase.listener(ref: com.google.firebase.database.DatabaseReference, url: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **url** | _string_ |   |

##### Return

( _void_ )


---

#### _firebase.listener(path: string, url: string) : void
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

#### _firebase.removeValue(ref: com.google.firebase.database.DatabaseReference) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |

##### Return

( _void_ )


---

#### _firebase.removeValue(path: string) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _void_ )


---

#### _firebase.removeValue(path: string, uid: string) : void
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

#### _firebase.setValue(ref: com.google.firebase.database.DatabaseReference, data: java.util.List) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _java.util.List_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(ref: com.google.firebase.database.DatabaseReference, data: [Values](/docs/library/objects/Values)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ref** | _com.google.firebase.database.DatabaseReference_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: java.util.List) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, uid: string, data: [Values](/docs/library/objects/Values)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **uid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, data: java.util.List) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **data** | _java.util.List_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _void_ )


---

#### _firebase.setValue(path: string, data: [Values](/docs/library/objects/Values)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

