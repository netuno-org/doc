---
id: MongoAccumulators
title: MongoAccumulators
sidebar_label: MongoAccumulators
---

Definition of the accumulators in **Bson** that are used in MongoDB aggregation operations.

---

## avg

---

#### <span style={{color: '#008000'}}>avg</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Creates an accumulator that calculates the average of the values of a field.

##### How To Use

```javascript
_mongo.accumulators().avg('averagePrice', '$price');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **expression** | _string_ | The input field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## bottom

---

#### <span style={{color: '#008000'}}>bottom</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>sortBy</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>outExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Returns the bottom document based on the specified sort.

##### How To Use

```javascript
_mongo.accumulators().bottom('loser', _mongo.sorts().ascending('score'), '$playerId');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **sortBy** | _org.bson.conversions.Bson_ | The sort to apply. |
| **outExpression** | _string_ | The output field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## bottomN

---

#### <span style={{color: '#008000'}}>bottomN</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>sortBy</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>outExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Returns the bottom N documents based on the specified sort.

##### How To Use

```javascript
_mongo.accumulators().bottomN('bottomThree', _mongo.sorts().ascending('score'), '$playerId', 3);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **sortBy** | _org.bson.conversions.Bson_ | The sort to apply. |
| **outExpression** | _string_ | The output field expression. |
| **nExpression** | _long_ | The number of values to return. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Gets the field value from the first document in the ordered list.

##### How To Use

```javascript
_mongo.accumulators().first('latestTotal', '$totalAmount');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **expression** | _string_ | The input field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## firstN

---

#### <span style={{color: '#008000'}}>firstN</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>inExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Gets the first N values of the field from the first documents in the ordered list.

##### How To Use

```javascript
_mongo.accumulators().firstN('topThreeOrders', '$totalAmount', 3);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **inExpression** | _string_ | The input field expression. |
| **nExpression** | _long_ | The number of values to return. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## last

---

#### <span style={{color: '#008000'}}>last</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Gets the field value from the last document in the ordered list.

##### How To Use

```javascript
_mongo.accumulators().last('lastTotal', '$totalAmount');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **expression** | _string_ | The input field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## lastN

---

#### <span style={{color: '#008000'}}>lastN</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>inExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Gets the last N values of the field from the last documents in the ordered list.

##### How To Use

```javascript
_mongo.accumulators().lastN('lastThreeOrders', '$totalAmount', 3);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **inExpression** | _string_ | The input field expression. |
| **nExpression** | _long_ | The number of values to return. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## max

---

#### <span style={{color: '#008000'}}>max</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Creates an accumulator that returns the maximum value of the field.

##### How To Use

```javascript
_mongo.accumulators().max('maxPrice', '$price');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **expression** | _string_ | The input field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## maxN

---

#### <span style={{color: '#008000'}}>maxN</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>inExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Returns the top N values of the field.

##### How To Use

```javascript
_mongo.accumulators().maxN('topThreePrices', '$price', 3);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **inExpression** | _string_ | The input field expression. |
| **nExpression** | _long_ | The number of values to return. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## min

---

#### <span style={{color: '#008000'}}>min</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Creates an accumulator that returns the minimum value of the field.

##### How To Use

```javascript
_mongo.accumulators().min('minPrice', '$price');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **expression** | _string_ | The input field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## minN

---

#### <span style={{color: '#008000'}}>minN</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>inExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Returns the bottom N values of the field.

##### How To Use

```javascript
_mongo.accumulators().minN('bottomThreePrices', '$price', 3);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **inExpression** | _string_ | The input field expression. |
| **nExpression** | _long_ | The number of values to return. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## sum

---

#### <span style={{color: '#008000'}}>sum</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Creates an accumulator that calculates the sum of the values of a field.

##### How To Use

```javascript
_mongo.accumulators().sum('totalPrice', '$price');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **expression** | _string_ | The input field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## top

---

#### <span style={{color: '#008000'}}>top</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>sortBy</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>outExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Returns the top document based on the specified sort.

##### How To Use

```javascript
_mongo.accumulators().top('winner', _mongo.sorts().descending('score'), '$playerId');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **sortBy** | _org.bson.conversions.Bson_ | The sort to apply. |
| **outExpression** | _string_ | The output field expression. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

## topN

---

#### <span style={{color: '#008000'}}>topN</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>sortBy</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>outExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Description

Returns the top N documents based on the specified sort.

##### How To Use

```javascript
_mongo.accumulators().topN('topThree', _mongo.sorts().descending('score'), '$playerId', 3);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **sortBy** | _org.bson.conversions.Bson_ | The sort to apply. |
| **outExpression** | _string_ | The output field expression. |
| **nExpression** | _long_ | The number of values to return. |

##### Return

( _com.mongodb.client.model.BsonField_ )

The BsonField accumulator.

---

