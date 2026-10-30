---
id: MongoCollection
title: MongoCollection
sidebar_label: MongoCollection
---

Allows you to interact with MongoDB collections.

---

## aggregate

---

#### <span style={{color: '#008000'}}>aggregate</span>(<span style={{color: '#FF8000'}}>pipeline</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Description

Aggregates documents according to the specified aggregation pipeline.

##### How To Use

```javascript
const docs = collection.aggregate(
  _mongo.aggregates().match(
    _mongo.filters().eq('status', 'Active')
  ),
  _mongo.aggregates().group(
    '$customerId',
    _mongo.accumulators().sum('total', '$price')
  ),
  _mongo.aggregates().project(
    _mongo.projections().fields(
      _mongo.projections().include('total'),
      _mongo.projections().excludeId()
    )
  )
).all();

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pipeline** | _org.bson.conversions.Bson[]_ | The aggregation pipeline. |

##### Return

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

An iterable containing the result of the aggregation operation.

---

#### <span style={{color: '#008000'}}>aggregate</span>(<span style={{color: '#FF8000'}}>pipeline</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Description

Aggregates documents according to the specified aggregation pipeline.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pipeline** | _java.util.List_ | The aggregation pipeline. |

##### Return

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

An iterable containing the result of the aggregation operation.

---

## countDocuments

---

#### <span style={{color: '#008000'}}>countDocuments</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Counts the number of documents in the collection.

##### How To Use

```javascript
collection.countDocuments();
```

##### Return

( _long_ )

The number of documents in the collection.

---

#### <span style={{color: '#008000'}}>countDocuments</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Counts the number of documents in the collection.

##### How To Use

```javascript
collection.countDocuments(_mongo.filters().eq('category', 'main'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | The query filter. |

##### Return

( _long_ )

The number of documents in the collection.

---

#### <span style={{color: '#008000'}}>countDocuments</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.CountOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Counts the number of documents in the collection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | The query filter. |
| **options** | _com.mongodb.client.model.CountOptions_ | The options describing the count. |

##### Return

( _long_ )

The number of documents in the collection.

---

## createIndex

---

#### <span style={{color: '#008000'}}>createIndex</span>(<span style={{color: '#FF8000'}}>keys</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Create an index with the given keys.

##### How To Use

```javascript
collection.createIndex(_mongo.indexes().ascending('quantity', 'price'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **keys** | _org.bson.conversions.Bson_ | An object describing the index key(s), which may not be null. |

##### Return

( _string_ )

The index name.

---

## deleteMany

---

#### <span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Deletes multiple documents from the collection.

##### How To Use

```javascript
collection.deleteMany(_mongo.filters().eq('status', 'Inactive'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Deletes multiple documents from the collection with the specified options.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **options** | _com.mongodb.client.model.DeleteOptions_ | The options to apply to the delete operation. |

##### Return

( _void_ )


---

## deleteOne

---

#### <span style={{color: '#008000'}}>deleteOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Deletes a single document from the collection.

##### How To Use

```javascript
collection.deleteOne(_mongo.filters().eq('name', 'Product'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>deleteOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Deletes a single document from the collection with the specified options.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **options** | _com.mongodb.client.model.DeleteOptions_ | The options to apply to the delete operation. |

##### Return

( _void_ )


---

## drop

---

#### <span style={{color: '#008000'}}>drop</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Drops this collection from the Database.

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>drop</span>(<span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DropCollectionOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Drops this collection from the Database.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **options** | _com.mongodb.client.model.DropCollectionOptions_ | Various options for dropping the collection. |

##### Return

( _void_ )


---

## estimatedDocumentCount

---

#### <span style={{color: '#008000'}}>estimatedDocumentCount</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Gets an estimate of the count of documents in a collection using collection metadata.

##### How To Use

```javascript
collection.();
```

##### Return

( _long_ )

The number of documents in the collection.

---

#### <span style={{color: '#008000'}}>estimatedDocumentCount</span>(<span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.EstimatedDocumentCountOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Gets an estimate of the count of documents in a collection using collection metadata.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **options** | _com.mongodb.client.model.EstimatedDocumentCountOptions_ | The options describing the count. |

##### Return

( _long_ )

The number of documents in the collection.

---

## find

---

#### <span style={{color: '#008000'}}>find</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Finds all documents in the collection.

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )

The find iterable interface.

---

#### <span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Finds all documents in the collection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | The query filter. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )

The find iterable interface.

---

## findOneAndDelete

---

#### <span style={{color: '#008000'}}>findOneAndDelete</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and delete it.

##### How To Use

```javascript
const old = collection.findOneAndDelete(_mongo.filters().eq('name', 'Product'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The found document, or null if no document matched.

---

#### <span style={{color: '#008000'}}>findOneAndDelete</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndDeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and delete it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **options** | _com.mongodb.client.model.FindOneAndDeleteOptions_ | The options to apply to the delete operation. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The found document, or null if no document matched.

---

## findOneAndReplace

---

#### <span style={{color: '#008000'}}>findOneAndReplace</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and replace it.

##### How To Use

```javascript
const old = collection.findOneAndReplace(
  _mongo.filters().eq('name', 'Product'),
  _val.map()
    .set('quantity', 200)
    .set('price', 12.99)
    .set('category', 'food')
);

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **data** | _[Values](/docs/library/objects/Values)_ | The replacement document, which must not contain update operators. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The found document, or null if no document matched.

---

#### <span style={{color: '#008000'}}>findOneAndReplace</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndReplaceOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and replace it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **data** | _[Values](/docs/library/objects/Values)_ | The replacement document, which must not contain update operators. |
| **options** | _com.mongodb.client.model.FindOneAndReplaceOptions_ | The options to apply to the replace operation. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The found document, or null if no document matched.

---

## findOneAndUpdate

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and update it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _java.util.List_ | A pipeline describing the update, which may not be null. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The document that was updated before the update was applied. If no documents matched the query filter, then null will be returned.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and update it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _java.util.List_ | A pipeline describing the update, which may not be null. |
| **options** | _com.mongodb.client.model.FindOneAndUpdateOptions_ | The options to apply to the update operation. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The found document, or null if no document matched.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and update it.

##### How To Use

```javascript
const setUpdate = _mongo.updates().set('quantity', 42);
const renameUpdate = _mongo.updates().rename('other', 'more');

const combinedUpdates = _mongo.updates().combine(setUpdate, renameUpdate);

collection.findOneAndUpdate(
  _mongo.filters().eq('name', 'Abc'),
  combinedUpdates
);

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _org.bson.conversions.Bson_ | A document describing the update, which may not be null. The update to apply must include at least one update operator. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The found document, or null if no document matched.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Atomically find a document and update it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _org.bson.conversions.Bson_ | A document describing the update, which may not be null. The update to apply must include at least one update operator. |
| **options** | _com.mongodb.client.model.FindOneAndUpdateOptions_ | The options to apply to the update operation. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The found document, or null if no document matched.

---

## insertMany

---

#### <span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Description

Inserts multiple documents into the collection.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | The data of the documents to insert. |

##### Return

( _java.util.List_ )

The list of IDs of the inserted documents.

---

#### <span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertManyOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Description

Inserts multiple documents into the collection with the specified options.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | The data of the documents to insert. |
| **options** | _com.mongodb.client.model.InsertManyOptions_ | The options to apply to the insert operation. |

##### Return

( _java.util.List_ )

The list of IDs of the inserted documents.

---

## insertOne

---

#### <span style={{color: '#008000'}}>insertOne</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Inserts a single document into the collection.

##### How To Use

```javascript
const id = collection.insertOne(
    _val.map()
      .set('name', 'Abc')
      .set('quantity', 100)
      .set('price', 9.99)
      .set('category', 'main')
);

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | The data of the document to insert. |

##### Return

( _string_ )

The ID of the inserted document.

---

#### <span style={{color: '#008000'}}>insertOne</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertOneOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Inserts a single document into the collection with the specified options.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ | The data of the document to insert. |
| **options** | _com.mongodb.client.model.InsertOneOptions_ | The options to apply to the insert operation. |

##### Return

( _string_ )

The ID of the inserted document.

---

## renameCollection

---

#### <span style={{color: '#008000'}}>renameCollection</span>(<span style={{color: '#FF8000'}}>fullName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Renames the collection to the provided full name.

##### How To Use

```javascript
collection.renameCollection('database.newCollection');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fullName** | _string_ | The full name of the new collection in the format 'database.collection'. |

##### Return

( _void_ )


---

#### <span style={{color: '#008000'}}>renameCollection</span>(<span style={{color: '#FF8000'}}>databaseName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>collectionName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Renames the collection to the provided database name and collection name.

##### How To Use

```javascript
collection.renameCollection('database', 'newCollection');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **databaseName** | _string_ | The name of the database. |
| **collectionName** | _string_ | The new name of the collection. |

##### Return

( _void_ )


---

## replaceOne

---

#### <span style={{color: '#008000'}}>replaceOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Replace a single document in the collection according to the specified filter.

##### How To Use

```javascript
collection.replaceOne(
  _mongo.filters().eq('name', 'Product'),
  _val.map()
    .set('quantity', 200)
    .set('price', 12.99)
    .set('category', 'food')
);

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **data** | _[Values](/docs/library/objects/Values)_ | The replacement document, which must not contain update operators. |

##### Return

( _long_ )

The number of modified documents.

---

#### <span style={{color: '#008000'}}>replaceOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.ReplaceOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Replace a single document in the collection according to the specified filter.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **data** | _[Values](/docs/library/objects/Values)_ | The replacement document, which must not contain update operators. |
| **options** | _com.mongodb.client.model.ReplaceOptions_ | The options to apply to the replace operation. |

##### Return

( _long_ )

The number of modified documents.

---

## updateMany

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update multiple documents in the collection according to the specified arguments.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _java.util.List_ | A pipeline describing the update, which may not be null. |

##### Return

( _long_ )

The number of modified documents.

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update multiple documents in the collection according to the specified arguments.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _java.util.List_ | A pipeline describing the update, which may not be null. |
| **options** | _com.mongodb.client.model.UpdateOptions_ | The options to apply to the update operation. |

##### Return

( _long_ )

The number of modified documents.

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update multiple documents in the collection according to the specified arguments.

##### How To Use

```javascript
collection.updateMany(
  _mongo.filters().eq('status', 'Active'),
  _mongo.updates().set('status', 'Inactive')
);

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _org.bson.conversions.Bson_ | A document describing the update, which may not be null. The update to apply must include at least one update operator. |

##### Return

( _long_ )

The number of modified documents.

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update multiple documents in the collection according to the specified arguments.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _org.bson.conversions.Bson_ | A document describing the update, which may not be null. The update to apply must include at least one update operator. |
| **options** | _com.mongodb.client.model.UpdateOptions_ | The options to apply to the update operation. |

##### Return

( _long_ )

The number of modified documents.

---

## updateOne

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update a single document in the collection according to the specified arguments.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _java.util.List_ | A pipeline describing the update, which may not be null. |

##### Return

( _long_ )

The result of the update one operation.

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update a single document in the collection according to the specified arguments.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _java.util.List_ | A pipeline describing the update, which may not be null. |
| **options** | _com.mongodb.client.model.UpdateOptions_ | The options to apply to the update operation. |

##### Return

( _long_ )

The result of the update one operation.

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update a single document in the collection according to the specified arguments.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _org.bson.conversions.Bson_ | A document describing the update, which may not be null. The update to apply must include at least one update operator. |

##### Return

( _long_ )

The result of the update one operation.

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Description

Update a single document in the collection according to the specified arguments.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | A document describing the query filter, which may not be null. |
| **update** | _org.bson.conversions.Bson_ | A document describing the update, which may not be null. The update to apply must include at least one update operator. |
| **options** | _com.mongodb.client.model.UpdateOptions_ | The options to apply to the update operation. |

##### Return

( _long_ )

The result of the update one operation.

---

