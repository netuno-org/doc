---
id: mongo
title: MongoDB - Client
sidebar_label: MongoDB - Client
---

Resource for MongoDB integrations.

```javascript
// Example using the AI client with the default provider
const client = _ai.client();
const response = client.chat('Hello, how can I help?');
_log.info('Response: ' + response);

```

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## database

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoDatabase](/docs/library/objects/MongoDatabase)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[MongoDatabase](/docs/library/objects/MongoDatabase)_ )


---

## deleteOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>deleteOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>
##### Return

( _com.mongodb.client.model.DeleteOptions_ )


---

## docToVal

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>docToVal</span>(<span style={{color: '#FF8000'}}>doc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **doc** | _org.bson.Document_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## document

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>document</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>
##### Return

( _org.bson.Document_ )


---

## filters

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>filters</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFilters](/docs/library/objects/MongoFilters)</span>
##### Return

( _[MongoFilters](/docs/library/objects/MongoFilters)_ )


---

## findOneAndReplaceOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndReplaceOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndReplaceOptions</span>
##### Return

( _com.mongodb.client.model.FindOneAndReplaceOptions_ )


---

## findOneAndUpdateOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndUpdateOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>
##### Return

( _com.mongodb.client.model.FindOneAndUpdateOptions_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Mongo](/docs/library/resources/mongo)</span>
##### Return

( _[Mongo](/docs/library/resources/mongo)_ )


---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKeyOrUrl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Mongo](/docs/library/resources/mongo)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKeyOrUrl** | _string_ |   |

##### Return

( _[Mongo](/docs/library/resources/mongo)_ )


---

## insertManyOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>insertManyOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertManyOptions</span>
##### Return

( _com.mongodb.client.model.InsertManyOptions_ )


---

## insertOneOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>insertOneOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertOneOptions</span>
##### Return

( _com.mongodb.client.model.InsertOneOptions_ )


---

## replaceOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>replaceOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.ReplaceOptions</span>
##### Return

( _com.mongodb.client.model.ReplaceOptions_ )


---

## updateOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>updateOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>
##### Return

( _com.mongodb.client.model.UpdateOptions_ )


---

## updates

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>updates</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoUpdates](/docs/library/objects/MongoUpdates)</span>
##### Return

( _[MongoUpdates](/docs/library/objects/MongoUpdates)_ )


---

## valToDoc

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>valToDoc</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _org.bson.Document_ )


---

