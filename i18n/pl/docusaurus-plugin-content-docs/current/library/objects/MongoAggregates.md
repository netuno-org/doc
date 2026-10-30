---
id: MongoAggregates
title: MongoAggregates
sidebar_label: MongoAggregates
---

Definition of the aggregation pipeline stages in **Bson** used in MongoDB aggregation operations.

---

## count

---

#### <span style={{color: '#008000'}}>count</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Counts the number of input documents.

##### How To Use

```javascript
_mongo.aggregates().count();
```

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

## group

---

#### <span style={{color: '#008000'}}>group</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fieldAccumulators</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Groups the input documents by the specified field and applies the accumulators to the resulting groups.

##### How To Use

```javascript
_mongo.aggregates().group('$customerId', _mongo.accumulators().sum('total', '$price'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ | The group field expression. |
| **fieldAccumulators** | _com.mongodb.client.model.BsonField[]_ | The accumulators to apply to the groups. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

#### <span style={{color: '#008000'}}>group</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fieldAccumulators</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;com.mongodb.client.model.BsonField&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Groups the input documents by the specified field and applies the accumulators to the resulting groups.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ | The group field expression. |
| **fieldAccumulators** | _java.util.List_ | The accumulators to apply to the groups. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

## limit

---

#### <span style={{color: '#008000'}}>limit</span>(<span style={{color: '#FF8000'}}>limit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Limits the input documents to the first N documents.

##### How To Use

```javascript
_mongo.aggregates().limit(5);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **limit** | _int_ | The maximum number of documents. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

## lookup

---

#### <span style={{color: '#008000'}}>lookup</span>(<span style={{color: '#FF8000'}}>from</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>localField</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>foreignField</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>as</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Performs a join with another collection.

##### How To Use

```javascript
_mongo.aggregates().lookup('orders', 'customerId', '_id', 'orders');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **from** | _string_ | The collection to join. |
| **localField** | _string_ | The field from the input documents. |
| **foreignField** | _string_ | The field from the documents of the "from" collection. |
| **as** | _string_ | The output field name. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

#### <span style={{color: '#008000'}}>lookup</span>(<span style={{color: '#FF8000'}}>from</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>pipeline</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>as</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Performs a join with another collection using a pipeline.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **from** | _string_ | The collection to join. |
| **pipeline** | _java.util.List_ | The aggregation pipeline to run on the from collection. |
| **as** | _string_ | The output field name. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

## match

---

#### <span style={{color: '#008000'}}>match</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Filters the input documents to select only those that match the specified filter.

##### How To Use

```javascript
_mongo.aggregates().match(_mongo.filters().eq('status', 'Active'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | The query filter. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

## project

---

#### <span style={{color: '#008000'}}>project</span>(<span style={{color: '#FF8000'}}>projection</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Transforms each input document, adding, removing or altering fields.

##### How To Use

```javascript
_mongo.aggregates().project(_mongo.projections().include('name', 'quantity'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **projection** | _org.bson.conversions.Bson_ | The projection specification. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

## skip

---

#### <span style={{color: '#008000'}}>skip</span>(<span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Skips the first N documents of the input.

##### How To Use

```javascript
_mongo.aggregates().skip(10);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **skip** | _int_ | The number of documents to skip. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

## sort

---

#### <span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>sort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Sorts the input documents.

##### How To Use

```javascript
_mongo.aggregates().sort(_mongo.sorts().descending('date'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sort** | _org.bson.conversions.Bson_ | The sort specification. |

##### Return

( _org.bson.conversions.Bson_ )

The Bson aggregation stage.

---

