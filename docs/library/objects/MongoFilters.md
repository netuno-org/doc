---
id: MongoFilters
title: MongoFilters
sidebar_label: MongoFilters
---

Definition of the filters in **Bson** that are used in MongoDB collection operations.

---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## eq

---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## exists

---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>exists</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **exists** | _boolean_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## gt

---

#### <span style={{color: '#008000'}}>gt</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## gte

---

#### <span style={{color: '#008000'}}>gte</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## in

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _java.lang.Object[]_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## lt

---

#### <span style={{color: '#008000'}}>lt</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## lte

---

#### <span style={{color: '#008000'}}>lte</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## ne

---

#### <span style={{color: '#008000'}}>ne</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## nin

---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _java.lang.Object[]_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## nor

---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## not

---

#### <span style={{color: '#008000'}}>not</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Return

( _org.bson.conversions.Bson_ )


---

## type

---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **type** | _string_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.BsonType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **type** | _org.bson.BsonType_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

