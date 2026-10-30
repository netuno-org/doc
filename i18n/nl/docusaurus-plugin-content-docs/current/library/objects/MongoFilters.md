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
##### Description

Creates a filter that matches all documents where the array field contains all the given values.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **values** | _java.lang.Object[]_ | Values that the array must contain. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the array field contains all the given values.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Values that the array must contain. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where all the given conditions are true (logical AND).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ | Filters to combine with logical AND. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where all the given conditions are true (logical AND).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Filters to combine with logical AND. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## empty

---

#### <span style={{color: '#008000'}}>empty</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates an empty filter that matches all documents in the collection.

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## eq

---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value equals the specified value.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Value to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field equals the given value.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **value** | _java.lang.Object_ | Value to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## exists

---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the specified field exists.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>exists</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the specified field exists or does not exist, according to the given flag.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **exists** | _boolean_ | True to check if the field exists, false to check if it does not exist. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## gt

---

#### <span style={{color: '#008000'}}>gt</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field is greater than the given value.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **value** | _java.lang.Object_ | Value to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## gte

---

#### <span style={{color: '#008000'}}>gte</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field is greater than or equal to the given value.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **value** | _java.lang.Object_ | Value to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## in

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field matches any of the given values.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **values** | _java.lang.Object[]_ | Values to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field matches any of the given values in the iterable.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Values to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## lt

---

#### <span style={{color: '#008000'}}>lt</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field is less than the given value.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **value** | _java.lang.Object_ | Value to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## lte

---

#### <span style={{color: '#008000'}}>lte</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field is less than or equal to the given value.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **value** | _java.lang.Object_ | Value to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

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
##### Description

Creates a filter that matches all documents where the value of the specified field does not equal the given value.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **value** | _java.lang.Object_ | Value to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## nin

---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field does not match any of the given values.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **values** | _java.lang.Object[]_ | Values to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the value of the specified field does not match any of the given values in the iterable.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Values to compare. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## nor

---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where none of the given conditions are true (logical NOR).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ | Filters to combine with logical NOR. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where none of the given conditions are true (logical NOR).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Filters to combine with logical NOR. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## not

---

#### <span style={{color: '#008000'}}>not</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that negates the given filter (logical NOT).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ | Filter to negate. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where at least one of the given conditions is true (logical OR).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ | Filters to combine with logical OR. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where at least one of the given conditions is true (logical OR).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Filters to combine with logical OR. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

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

Creates a filter that matches all documents where the value of the specified field matches the given regular expression pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **pattern** | _java.util.regex.Pattern_ | Regular expression pattern. |

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
##### Description

Creates a filter that matches all documents for which the given text search expression matches.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **search** | _string_ | Text to search for. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>search</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>textSearchOptions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.TextSearchOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents for which the given text search expression matches, with the specified text search options.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **search** | _string_ | Text to search for. |
| **textSearchOptions** | _com.mongodb.client.model.TextSearchOptions_ | Text search options. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

## type

---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the specified field is of the type indicated by the string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **type** | _string_ | Field type as string. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.BsonType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Description

Creates a filter that matches all documents where the specified field is of the given BsonType.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ | Document field name. |
| **type** | _org.bson.BsonType_ | BsonType of the field. |

##### Return

( _org.bson.conversions.Bson_ )

Returns a filter in Bson format.

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

