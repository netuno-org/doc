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
##### Return

( _java.util.List_ )


---

## first

---

#### <span style={{color: '#008000'}}>first</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## forEach

---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>consumer</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **consumer** | _java.util.function.Consumer_ |   |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>func</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **func** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## limit

---

#### <span style={{color: '#008000'}}>limit</span>(<span style={{color: '#FF8000'}}>limit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **limit** | _int_ |   |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## projection

---

#### <span style={{color: '#008000'}}>projection</span>(<span style={{color: '#FF8000'}}>sort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sort** | _org.bson.conversions.Bson_ |   |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## skip

---

#### <span style={{color: '#008000'}}>skip</span>(<span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **skip** | _int_ |   |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## sort

---

#### <span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>sort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sort** | _org.bson.conversions.Bson_ |   |

##### Return

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

