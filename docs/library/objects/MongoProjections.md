---
id: MongoProjections
title: MongoProjections
sidebar_label: MongoProjections
---

Definition of the projections in **Bson** that are used in MongoDB collection queries to select specific fields.

---

## computed

---

#### <span style={{color: '#008000'}}>computed</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that adds a computed field to the result.

##### How To Use

```javascript
_mongo.projections().computed('fullName', expression);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The output field name. |
| **expression** | _org.bson.conversions.Bson_ | The computed field expression. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

## elemMatch

---

#### <span style={{color: '#008000'}}>elemMatch</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that includes for the given field only the first element of an array that matches the query filter.

##### How To Use

```javascript
const docs = collection.find(_mongo.filters().gt('array', 7)).projection(_mongo.projections().elemMatch('array')).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The field name whose value is the array. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

#### <span style={{color: '#008000'}}>elemMatch</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that includes for the given field only the first element of the array value of that field that matches the given query filter.

##### How To Use

```javascript
const docs = collection.find().projection(
  _mongo.projections().elemMatch(
    "orders",
    _mongo.filters().eq("status", "pending")
  )
).all();

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The field name. |
| **filter** | _org.bson.conversions.Bson_ | The filter to apply. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

## exclude

---

#### <span style={{color: '#008000'}}>exclude</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that excludes all of the given fields.

##### How To Use

```javascript
const docs = collection.find().projection(_mongo.projections().exclude('internalField')).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _string[]_ | The field names. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

#### <span style={{color: '#008000'}}>exclude</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that excludes all fields from a list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _java.util.List_ | The list of field names. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

## excludeId

---

#### <span style={{color: '#008000'}}>excludeId</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that excludes the _id field.

##### How To Use

```javascript
const docs = collection.find().projection(_mongo.projections().excludeId()).all();
```

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

## fields

---

#### <span style={{color: '#008000'}}>fields</span>(<span style={{color: '#FF8000'}}>projections</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that combines the list of projections into a single one. If there are duplicate keys, the last one takes precedence.

##### How To Use

```javascript
const docs = collection.find().projection( _mongo.projections().fields(
        _mongo.projections().include("name", "quantity"),
        _mongo.projections().excludeId()
        )
    ).all();


```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **projections** | _org.bson.conversions.Bson[]_ | The list of projections to combine. |

##### Return

( _org.bson.conversions.Bson_ )

The combined projection.

---

#### <span style={{color: '#008000'}}>fields</span>(<span style={{color: '#FF8000'}}>projections</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that combines the list of projections from a list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **projections** | _java.util.List_ | The list of projections to combine. |

##### Return

( _org.bson.conversions.Bson_ )

The combined projection.

---

## include

---

#### <span style={{color: '#008000'}}>include</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that includes all of the given fields.

##### How To Use

```javascript
const docs = collection.find().projection(_mongo.projections().include('name', 'quantity')).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _string[]_ | The field names. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

#### <span style={{color: '#008000'}}>include</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that includes all fields from a list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _java.util.List_ | The list of field names. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

## slice

---

#### <span style={{color: '#008000'}}>slice</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>limit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that returns only the first N elements of an array.

##### How To Use

```javascript
const docs = collection.find().projection(_mongo.projections().slice('tags', 5)).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The field name whose value is the array. |
| **limit** | _int_ | The number of elements to return. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

#### <span style={{color: '#008000'}}>slice</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>limit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a projection that skips N elements and returns the next M elements of an array.

##### How To Use

```javascript
const docs = collection.find().projection(_mongo.projections().slice('tags', 2, 5)).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | The field name whose value is the array. |
| **skip** | _int_ | The number of elements to skip. |
| **limit** | _int_ | The number of elements to return. |

##### Return

( _org.bson.conversions.Bson_ )

The projection.

---

