---
id: MongoAggregateIterable
title: MongoAggregateIterable
sidebar_label: MongoAggregateIterable
---

Processes the results of MongoDB aggregation operations.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Returns all documents from the aggregation result.

##### How To Use

```javascript
const docs = collection.aggregate(...).all();
```

##### Return

( _java.util.List_ )

The list of documents.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Returns the first document from the aggregation result.

##### How To Use

```javascript
const doc = collection.aggregate(...).first();
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

The first document or null if there are no results.

---

## forEach

---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Description

Performs an action for each document in the aggregation result.

##### How To Use

```javascript
collection.aggregate(...).forEach((doc) => { /* process doc */ });
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ | The action to perform for each document. |

##### Return

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

This instance for chaining.

---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Description

Executes a function for each document in the aggregation result.

##### How To Use

```javascript
collection.aggregate(...).forEach((doc) => { /* process doc */ });
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _org.graalvm.polyglot.Value_ | The function to execute for each document. |

##### Return

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

This instance for chaining.

---

