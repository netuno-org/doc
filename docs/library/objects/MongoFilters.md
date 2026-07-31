---
id: MongoFilters
title: MongoFilters
sidebar_label: MongoFilters
---

Definition of the filters in **Bson** that are used in MongoDB collection operations.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _java.lang.Object[]_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Return

( _org.bson.conversions.Bson_ )


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

## empty

---

#### <span style={{color: '#008000'}}>empty</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
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

## mod

---

#### <span style={{color: '#008000'}}>mod</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>divisor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>remainder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of a field divided by a divisor has the specified remainder (i.e. perform a modulo operation to select documents).

##### How To Use

```javascript
_mongo.filters().mod('quantity', 5, 2);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **divisor** | _long_ | The modulus of the operation. |
| **remainder** | _long_ | The remainder of the operation. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

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

## regex

---

#### <span style={{color: '#008000'}}>regex</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>pattern</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the field matches the given regular expression pattern.

##### How To Use

```javascript
_mongo.filters().regex('fieldName', 'regex');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **pattern** | _string_ | Regular expression. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>regex</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>pattern</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the field matches the given regular expression pattern with the given options applied.

##### How To Use

```javascript
_mongo.filters().regex('fieldName', 'regex', 'i');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **pattern** | _string_ | Regular expression. |
| **options** | _string_ | Regex options. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>regex</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>pattern</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.regex.Pattern</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the field matches the given regular expression pattern.

##### How To Use

```javascript
_mongo.filters().regex('fieldName', 'regex');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **pattern** | _java.util.regex.Pattern_ | Regular expression. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## size

---

#### <span style={{color: '#008000'}}>size</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of a field is an array of the specified size.

##### How To Use

```javascript
_mongo.filters().size('fieldName', '3');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **size** | _int_ | Size of the array. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## text

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>search</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **search** | _string_ |   |

##### Return

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>search</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>textSearchOptions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.TextSearchOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **search** | _string_ |   |
| **textSearchOptions** | _com.mongodb.client.model.TextSearchOptions_ |   |

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

## where

---

#### <span style={{color: '#008000'}}>where</span>(<span style={{color: '#FF8000'}}>javaScriptExpression</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents for which the given expression is true.

##### How To Use

```javascript
_mongo.filters().where('javascript-expression');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **javaScriptExpression** | _string_ | JavaScript expression. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

