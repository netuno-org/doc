---
id: MongoIndexes
title: MongoIndexes
sidebar_label: MongoIndexes
---

Definition of the index keys in **Bson** that are used in MongoDB index operations.

---

## ascending

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates an ascending index specification for the given fields.

##### How To Use

```javascript
collection.createIndex(_mongo.indexes().ascending('quantity', 'price'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _string[]_ | The field names. |

##### Return

( _org.bson.conversions.Bson_ )

The index specification.

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates an ascending index specification from a list of field names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _java.util.List_ | The list of field names. |

##### Return

( _org.bson.conversions.Bson_ )

The index specification.

---

## compoundIndex

---

#### <span style={{color: '#008000'}}>compoundIndex</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Create a compound index specifications. If any field names are repeated, the last one takes precedence.

##### How To Use

```javascript
collection.createIndex(_mongo.indexes().compoundIndex(
  _mongo.indexes().descending('price'),
  _mongo.indexes().ascending('quantity')
));

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _org.bson.conversions.Bson[]_ | The index specifications. |

##### Return

( _org.bson.conversions.Bson_ )

The compound index specifications.

---

#### <span style={{color: '#008000'}}>compoundIndex</span>(<span style={{color: '#FF8000'}}>indexes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Create a compound index specifications from a list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **indexes** | _java.util.List_ | The list of index specifications. |

##### Return

( _org.bson.conversions.Bson_ )

The compound index specifications.

---

## descending

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a descending index specification for the given fields.

##### How To Use

```javascript
collection.createIndex(_mongo.indexes().descending('price'));
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _string[]_ | The field names. |

##### Return

( _org.bson.conversions.Bson_ )

The index specification.

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a descending index specification from a list of field names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _java.util.List_ | The list of field names. |

##### Return

( _org.bson.conversions.Bson_ )

The index specification.

---

