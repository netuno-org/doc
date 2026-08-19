---
id: MongoSorts
title: MongoSorts
sidebar_label: MongoSorts
---

Definition of the sorts in **Bson** that are used in MongoDB collection queries.

---

## ascending

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates an ascending sort for the given fields.

##### How To Use

```javascript
collection.find().sort(_mongo.sorts().ascending('name')).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _string[]_ | The field names. |

##### Return

( _org.bson.conversions.Bson_ )

The sort.

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates an ascending sort from a list of field names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _java.util.List_ | The list of field names. |

##### Return

( _org.bson.conversions.Bson_ )

The sort.

---

## descending

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a descending sort for the given fields.

##### How To Use

```javascript
collection.find().sort(_mongo.sorts().descending('date')).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _string[]_ | The field names. |

##### Return

( _org.bson.conversions.Bson_ )

The sort.

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>fieldNames</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a descending sort from a list of field names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldNames** | _java.util.List_ | The list of field names. |

##### Return

( _org.bson.conversions.Bson_ )

The sort.

---

## orderBy

---

#### <span style={{color: '#008000'}}>orderBy</span>(<span style={{color: '#FF8000'}}>sorts</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Combines multiple sorts into a single sort.

##### How To Use

```javascript
collection.find().sort(_mongo.sorts().orderBy(_mongo.sorts().ascending('name'), _mongo.sorts().descending('date'))).all();
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sorts** | _org.bson.conversions.Bson[]_ | The sorts to combine. |

##### Return

( _org.bson.conversions.Bson_ )

The combined sort.

---

#### <span style={{color: '#008000'}}>orderBy</span>(<span style={{color: '#FF8000'}}>sorts</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Combines multiple sorts from a list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sorts** | _java.util.List_ | The list of sorts to combine. |

##### Return

( _org.bson.conversions.Bson_ )

The combined sort.

---

