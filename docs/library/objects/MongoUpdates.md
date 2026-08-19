---
id: MongoUpdates
title: MongoUpdates
sidebar_label: MongoUpdates
---

Definition of the changes in **Bson** that are used in data changes in MongoDB collections.

---

## combine

---

#### <span style={{color: '#008000'}}>combine</span>(<span style={{color: '#FF8000'}}>updates</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Combine a list of updates into a single update.

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
| **updates** | _org.bson.conversions.Bson[]_ | The list of updates. |

##### Return

( _org.bson.conversions.Bson_ )

A combined update.

---

#### <span style={{color: '#008000'}}>combine</span>(<span style={{color: '#FF8000'}}>updates</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Combine a list of updates into a single update.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **updates** | _java.util.List_ | The list of updates. |

##### Return

( _org.bson.conversions.Bson_ )

A combined update.

---

## push

---

#### <span style={{color: '#008000'}}>push</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Adds a value to an array in a document.

##### How To Use

```javascript
_mongo.updates().push('tags', 'newTag');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The array field name. |
| **o** | _java.lang.Object_ | The value to add. |

##### Return

( _org.bson.conversions.Bson_ )

The update in Bson format.

---

## rename

---

#### <span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Renames a field in a document.

##### How To Use

```javascript
_mongo.updates().rename('oldName', 'newName');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The current field name. |
| **newName** | _string_ | The new field name. |

##### Return

( _org.bson.conversions.Bson_ )

The update in Bson format.

---

## set

---

#### <span style={{color: '#008000'}}>set</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Sets the value of a field in a document.

##### How To Use

```javascript
_mongo.updates().set('name', 'new value');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The field name. |
| **o** | _java.lang.Object_ | The value to set. |

##### Return

( _org.bson.conversions.Bson_ )

The update in Bson format.

---

## unset

---

#### <span style={{color: '#008000'}}>unset</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Removes the value of a field in a document.

##### How To Use

```javascript
_mongo.updates().unset('name');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | The field name. |

##### Return

( _org.bson.conversions.Bson_ )

The update in Bson format.

---

