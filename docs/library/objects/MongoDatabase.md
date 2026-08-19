---
id: MongoDatabase
title: MongoDatabase
sidebar_label: MongoDatabase
---

Allows you to interact with the database in MongoDB.

---

## collection

---

#### <span style={{color: '#008000'}}>collection</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoCollection](/docs/library/objects/MongoCollection)</span>
##### Description

Gets a MongoCollection by name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the collection. |

##### Return

( _[MongoCollection](/docs/library/objects/MongoCollection)_ )

The MongoCollection wrapper.

---

## collectionNames

---

#### <span style={{color: '#008000'}}>collectionNames</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Description

Lists all collection names in the database.

##### Return

( _java.util.List_ )

The list of collection names.

---

## createCollection

---

#### <span style={{color: '#008000'}}>createCollection</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoDatabase](/docs/library/objects/MongoDatabase)</span>
##### Description

Creates a new collection with the given name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the collection. |

##### Return

( _[MongoDatabase](/docs/library/objects/MongoDatabase)_ )

This MongoDatabase instance for chaining.

---

## getCollection

---

#### <span style={{color: '#008000'}}>getCollection</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoCollection](/docs/library/objects/MongoCollection)</span>
##### Description

Gets a MongoCollection by name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The name of the collection. |

##### Return

( _[MongoCollection](/docs/library/objects/MongoCollection)_ )

The MongoCollection wrapper.

---

## ping

---

#### <span style={{color: '#008000'}}>ping</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoDatabase](/docs/library/objects/MongoDatabase)</span>
##### Description

Tests the connection to the database by running the ping command.

##### Return

( _[MongoDatabase](/docs/library/objects/MongoDatabase)_ )

This MongoDatabase instance for chaining.

---

