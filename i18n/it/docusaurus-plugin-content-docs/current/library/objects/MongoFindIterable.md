---
id: MongoFindIterable
title: MongoFindIterable
sidebar_label: MongoFindIterable
---

Processes search interactions across MongoDB collections.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Returns all matching documents as a list.

##### How To Use

```javascript
const docs = collection.find().all();
```

##### Return

( _java.util.List_ )

The list of all documents found.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Returns the first document found or null if no document is found.

##### How To Use

```javascript
const doc = collection.find().first();
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

The first document found, or null.

---

## forEach

---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Iterates over the results using a Java Consumer.

##### How To Use

```javascript
collection.find().forEach((doc) => _out.println(doc.getString('name')));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ | The consumer to be called for each document. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Iterates over the results using a GraalVM polyglot function.

##### How To Use

```javascript
collection.find().forEach((doc) => _out.println(doc));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _org.graalvm.polyglot.Value_ | The function to be called for each document. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## hint

---

#### <span style={{color: '#008000'}}>hint</span>(<span style={{color: '#FF8000'}}>hint</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Provides an index hint to optimize the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **hint** | _org.bson.conversions.Bson_ | The index hint document. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## limit

---

#### <span style={{color: '#008000'}}>limit</span>(<span style={{color: '#FF8000'}}>limit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Sets the maximum number of results returned by the query.

##### How To Use

```javascript
const docs = collection.find().limit(10).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **limit** | _int_ | The maximum number of results. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## max

---

#### <span style={{color: '#008000'}}>max</span>(<span style={{color: '#FF8000'}}>max</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Sets the exclusive upper bound for a specific index. A null value means no max is set.

##### How To Use

```javascript
collection.createIndex(_mongo.indexes().compoundIndex(
  _mongo.indexes().descending('price'),
  _mongo.indexes().ascending('quantity')
));

const indexHint = _mongo.valToDoc(_val.map().set('price', 1)).append('quantity', -1);
const maxBound = _mongo.valToDoc(_val.map().set('price', 200)).append('quantity', 23);

const docs = collection.find().hint(indexHint).max(maxBound).all();

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **max** | _org.bson.conversions.Bson_ | The max. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## min

---

#### <span style={{color: '#008000'}}>min</span>(<span style={{color: '#FF8000'}}>min</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Sets the inclusive lower bound for a specific index. A null value means no min is set.

##### How To Use

```javascript
collection.createIndex(_mongo.indexes().compoundIndex(
  _mongo.indexes().descending('price'),
  _mongo.indexes().ascending('quantity')
));

const indexHint = _mongo.valToDoc(_val.map().set('price', 1)).append('quantity', -1);
const minBound = _mongo.valToDoc(_val.map().set('price', 50)).append('quantity', 10);

const docs = collection.find().hint(indexHint).min(minBound).all();

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **min** | _org.bson.conversions.Bson_ | The min. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## projection

---

#### <span style={{color: '#008000'}}>projection</span>(<span style={{color: '#FF8000'}}>projection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Sets a document describing the fields to return for all matching documents.

##### How To Use

```javascript
const docs = collection.find().projection(_mongo.projections().include('name', 'quantity')).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **projection** | _org.bson.conversions.Bson_ | The project document, which may be null. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## skip

---

#### <span style={{color: '#008000'}}>skip</span>(<span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Sets the number of results to skip before returning documents.

##### How To Use

```javascript
const docs = collection.find().skip(5).limit(10).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **skip** | _int_ | The number of results to skip. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## sort

---

#### <span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>sort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Description

Sets the sort order of the query results.

##### How To Use

```javascript
const docs = collection.find().sort(_mongo.sorts().ascending('name')).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sort** | _org.bson.conversions.Bson_ | The sort document. |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

