---
id: mongo
title: MongoDB - Client
sidebar_label: MongoDB - Client
---

Resource for MongoDB integrations.

---

## accumulators

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>accumulators</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAccumulators](/docs/library/objects/MongoAccumulators)</span>
##### Description

A factory for defining aggregation accumulators.

##### How To Use

```javascript
_mongo.aggregates().group('$customerId', _mongo.accumulators().sum('total', '$price'));
```

##### Return

( _[MongoAccumulators](/docs/library/objects/MongoAccumulators)_ )

The accumulator factory.

---

## aggregates

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>aggregates</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregates](/docs/library/objects/MongoAggregates)</span>
##### Description

A factory for defining aggregation stages.

##### How To Use

```javascript
collection.aggregate(_mongo.aggregates().match(_mongo.filters().eq('status', 'Active')));
```

##### Return

( _[MongoAggregates](/docs/library/objects/MongoAggregates)_ )

The aggregation factory.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Closes the MongoDB connection.

##### How To Use

```javascript
_mongo.close();
```

##### Return

( _void_ )


---

## countOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>countOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.CountOptions</span>
##### Description

Creates options for counting documents.

##### Return

( _com.mongodb.client.model.CountOptions_ )

The count options.

---

## database

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoDatabase](/docs/library/objects/MongoDatabase)</span>
##### Description

Gets an instance of a MongoDB database.

##### How To Use

```javascript
const mongo = _mongo.init('netunoapp');
cont db = mongo.database('mydb');

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The database name. |

##### Return

( _[MongoDatabase](/docs/library/objects/MongoDatabase)_ )

The MongoDB database instance.

---

## deleteOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>deleteOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>
##### Description

Creates options for delete operations.

##### Return

( _com.mongodb.client.model.DeleteOptions_ )

The delete options.

---

## docToVal

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>docToVal</span>(<span style={{color: '#FF8000'}}>doc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Converts a BSON document to a Values object.

##### How To Use

```javascript
const values = _mongo.docToVal(doc);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **doc** | _org.bson.Document_ | The BSON document to convert. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The resulting Values object.

---

## document

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>document</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>
##### Description

Creates a new empty document.

##### How To Use

```javascript
const doc = _mongo.document();
```

##### Return

( _org.bson.Document_ )

A new empty document.

---

## dropCollectionOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>dropCollectionOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DropCollectionOptions</span>
##### Description

Creates options for dropping a collection.

##### Return

( _com.mongodb.client.model.DropCollectionOptions_ )

The drop collection options.

---

## estimatedDocumentCountOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>estimatedDocumentCountOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.EstimatedDocumentCountOptions</span>
##### Description

Creates options for estimated document count.

##### Return

( _com.mongodb.client.model.EstimatedDocumentCountOptions_ )

The estimated document count options.

---

## filters

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>filters</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFilters](/docs/library/objects/MongoFilters)</span>
##### Description

A factory for defining query filters.

##### How To Use

```javascript
collection.find(_mongo.filters().eq('status', 'Active'));
```

##### Return

( _[MongoFilters](/docs/library/objects/MongoFilters)_ )

The filter factory.

---

## findOneAndDeleteOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndDeleteOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndDeleteOptions</span>
##### Description

Creates options for finding and deleting a single document.

##### Return

( _com.mongodb.client.model.FindOneAndDeleteOptions_ )

The find one and delete options.

---

## findOneAndReplaceOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndReplaceOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndReplaceOptions</span>
##### Description

Creates options for finding and replacing a single document.

##### Return

( _com.mongodb.client.model.FindOneAndReplaceOptions_ )

The find one and replace options.

---

## findOneAndUpdateOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndUpdateOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>
##### Description

Creates options for finding and updating a single document.

##### Return

( _com.mongodb.client.model.FindOneAndUpdateOptions_ )

The find one and update options.

---

## indexes

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>indexes</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoIndexes](/docs/library/objects/MongoIndexes)</span>
##### Description

A factory for defining index keys.

##### How To Use

```javascript
collection.createIndex(_mongo.indexes().ascending('quantity', 'price'));
```

##### Return

( _[MongoIndexes](/docs/library/objects/MongoIndexes)_ )

The index factory.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Mongo](/docs/library/resources/mongo)</span>
##### Description

Initializes a MongoDB connection with the default configuration.

##### Return

( _[Mongo](/docs/library/resources/mongo)_ )

The MongoDB client instance.

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKeyOrUrl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Mongo](/docs/library/resources/mongo)</span>
##### Description

Initializes the connection to MongoDB using a configuration key or connection URL.

##### How To Use

```javascript
const mongo = _mongo.init('mongodb://localhost:27017/mydb');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **configKeyOrUrl** | _string_ | The configuration key or the MongoDB connection URL. |

##### Return

( _[Mongo](/docs/library/resources/mongo)_ )

The MongoDB client instance.

---

## insertManyOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>insertManyOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertManyOptions</span>
##### Description

Creates options for inserting multiple documents.

##### Return

( _com.mongodb.client.model.InsertManyOptions_ )

The insert many options.

---

## insertOneOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>insertOneOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertOneOptions</span>
##### Description

Creates options for inserting a single document.

##### Return

( _com.mongodb.client.model.InsertOneOptions_ )

The insert one options.

---

## projections

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>projections</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoProjections](/docs/library/objects/MongoProjections)</span>
##### Description

A factory for defining field projections.

##### How To Use

```javascript
collection.find().projection(_mongo.projections().include('name', 'quantity')).all();
```

##### Return

( _[MongoProjections](/docs/library/objects/MongoProjections)_ )

The projection factory.

---

## replaceOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>replaceOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.ReplaceOptions</span>
##### Description

Creates options for replace operations.

##### Return

( _com.mongodb.client.model.ReplaceOptions_ )

The replace options.

---

## sorts

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>sorts</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoSorts](/docs/library/objects/MongoSorts)</span>
##### Description

A factory for defining sorts.

##### How To Use

```javascript
collection.find().sort(_mongo.sorts().ascending('name')).all();
```

##### Return

( _[MongoSorts](/docs/library/objects/MongoSorts)_ )

The sort factory.

---

## textSearchOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>textSearchOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.TextSearchOptions</span>
##### Description

Creates options for text search.

##### Return

( _com.mongodb.client.model.TextSearchOptions_ )

The text search options.

---

## updateOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>updateOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>
##### Description

Creates options for update operations.

##### Return

( _com.mongodb.client.model.UpdateOptions_ )

The update options.

---

## updates

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>updates</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoUpdates](/docs/library/objects/MongoUpdates)</span>
##### Description

A factory for defining data updates.

##### How To Use

```javascript
collection.updateOne(filter, _mongo.updates().set('name', 'New Name'));
```

##### Return

( _[MongoUpdates](/docs/library/objects/MongoUpdates)_ )

The updates factory.

---

## valToDoc

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>valToDoc</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>
##### Description

Converts a Values object to a BSON document.

##### How To Use

```javascript
const doc = _mongo.valToDoc(values);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | The Values object to convert. |

##### Return

( _org.bson.Document_ )

The resulting BSON document.

---

