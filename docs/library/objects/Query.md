---
id: Query
title: Query
sidebar_label: Query
---

Definição da configuração do objeto Query para consultas simplificadas.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Description

Returns all records resulting from query execution, if none, returns an empty list.

##### Return

( _java.util.List_ )

List of records.

---

## debug

---

#### <span style={{color: '#008000'}}>debug</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines whether debug is active or not in the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether the debug is active or not. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## distinct

---

#### <span style={{color: '#008000'}}>distinct</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines whether the DISTINCT command will be applied to the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it will be applied or not. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## fields

---

#### <span style={{color: '#008000'}}>fields</span>(<span style={{color: '#FF8000'}}>fields</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Lorg.netuno.tritao.query.Field;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the fields that will be obtained in the query

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fields** | _[Lorg.netuno.tritao.query.Field;[]_ | The fields that will be obtained in the query. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Returns the first record resulting from the query execution, if none, returns null.

##### Return

( _[Values](../objects/Values)_ )

First record of the result.

---

## getFields

---

#### <span style={{color: '#008000'}}>getFields</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Description

Returns the fields that will be obtained in the query

##### Return

( _java.util.List_ )

The fields that will be obtained in the query

---

## getGroup

---

#### <span style={{color: '#008000'}}>getGroup</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Group](../objects/Group)</span>
##### Description

Returns the query grouping object.

##### Return

( _[Group](../objects/Group)_ )

The query grouping object.

---

## getJoin

---

#### <span style={{color: '#008000'}}>getJoin</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>
##### Description

Returns the Join objects (related tables) referring to the main table of the query.

##### Return

( _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ )

The Join objects (related tables) referring to the main table of the query.

---

## getOrder

---

#### <span style={{color: '#008000'}}>getOrder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Order](../objects/Order)</span>
##### Description

Returns the query ordering object.

##### Return

( _[Order](../objects/Order)_ )

The query ordering object.

---

## getPagination

---

#### <span style={{color: '#008000'}}>getPagination</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.query.pagination.Pagination</span>
##### Description

Returns the pagination configuration object (if any) of the query.

##### Return

( _org.netuno.tritao.query.pagination.Pagination_ )

The pagination configuration object (if any) of the query.

---

## getTableName

---

#### <span style={{color: '#008000'}}>getTableName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the query's main table.

##### Return

( _string_ )

The name of the query's main table.

---

## getTablesToPopulate

---

#### <span style={{color: '#008000'}}>getTablesToPopulate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Return

( _java.util.List_ )


---

## getWhere

---

#### <span style={{color: '#008000'}}>getWhere</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Returns the Where object referring to the main table of the query.

##### Return

( _[Where](../objects/Where)_ )

Where object of the query's main table.

---

## group

---

#### <span style={{color: '#008000'}}>group</span>(<span style={{color: '#FF8000'}}>order</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the query grouping object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **order** | _string_ | The query grouping object. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## isDebug

---

#### <span style={{color: '#008000'}}>isDebug</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether debug is active or not in the query.

##### Return

( _boolean_ )

Whether debug is active or not in the query.

---

## isDistinct

---

#### <span style={{color: '#008000'}}>isDistinct</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the DISTINCT command will be applied to the query.

##### Return

( _boolean_ )

Whether it will be applied or not.

---

## join

---

#### <span style={{color: '#008000'}}>join</span>(<span style={{color: '#FF8000'}}>relation</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relation](../objects/Relation)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines an INNER JOIN relationship with a table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relation](../objects/Relation)_ | INNER JOIN type relationship. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## leftJoin

---

#### <span style={{color: '#008000'}}>leftJoin</span>(<span style={{color: '#FF8000'}}>relation</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relation](../objects/Relation)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines an LEFT JOIN relationship with a table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relation](../objects/Relation)_ | LEFT JOIN type relationship. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## link

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>link</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |
| **link** | _[Link](../objects/Link)_ | Link object with a subrelation. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |
| **where** | _[Where](../objects/Where)_ | Where object with the conditions referring to the form you want to relate. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>, <span style={{color: '#FF8000'}}>link</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |
| **where** | _[Where](../objects/Where)_ | Where object with the conditions referring to the form you want to relate. |
| **link** | _[Link](../objects/Link)_ | Link object with a subrelation. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## order

---

#### <span style={{color: '#008000'}}>order</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>order</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the ordering of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column for sorting. |
| **order** | _string_ | Meaning of ordering. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## page

---

#### <span style={{color: '#008000'}}>page</span>(<span style={{color: '#FF8000'}}>pagination</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.query.pagination.Pagination</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Returns Page with the items resulting from executing the query in a paged form and other pagination data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pagination** | _org.netuno.tritao.query.pagination.Pagination_ | Pagination object with pagination settings. |

##### Return

( _[Values](../objects/Values)_ )

Page with items and other pagination data.

---

## populate

---

#### <span style={{color: '#008000'}}>populate</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Field](../objects/Field)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _[Field](../objects/Field)_ |   |

##### Return

( _[Query](../objects/Query)_ )


---

#### <span style={{color: '#008000'}}>populate</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Field](../objects/Field)</span>, <span style={{color: '#FF8000'}}>fields</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _[Field](../objects/Field)_ |   |
| **fields** | _java.util.List_ |   |

##### Return

( _[Query](../objects/Query)_ )


---

## rightJoin

---

#### <span style={{color: '#008000'}}>rightJoin</span>(<span style={{color: '#FF8000'}}>relation</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relation](../objects/Relation)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines an RIGHT JOIN relationship with a table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relation](../objects/Relation)_ | RIGHT JOIN type relationship. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setDebug

---

#### <span style={{color: '#008000'}}>setDebug</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines whether debug is active or not in the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether the debug is active or not. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setDistinct

---

#### <span style={{color: '#008000'}}>setDistinct</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines whether the DISTINCT command will be applied to the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it will be applied or not. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setFields

---

#### <span style={{color: '#008000'}}>setFields</span>(<span style={{color: '#FF8000'}}>fields</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the fields that will be obtained in the query

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fields** | _java.util.List_ | The fields that will be obtained in the query. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setGroup

---

#### <span style={{color: '#008000'}}>setGroup</span>(<span style={{color: '#FF8000'}}>order</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Group](../objects/Group)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the query grouping object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **order** | _[Group](../objects/Group)_ | The query grouping object. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setJoin

---

#### <span style={{color: '#008000'}}>setJoin</span>(<span style={{color: '#FF8000'}}>join</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the Join objects (related tables) referring to the main table of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **join** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | The Join objects (related tables) referring to the main table of the query. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setOrder

---

#### <span style={{color: '#008000'}}>setOrder</span>(<span style={{color: '#FF8000'}}>order</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Order](../objects/Order)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the query ordering object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **order** | _[Order](../objects/Order)_ | The query ordering object. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setPagination

---

#### <span style={{color: '#008000'}}>setPagination</span>(<span style={{color: '#FF8000'}}>pagination</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.query.pagination.Pagination</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the pagination configuration object (if any) of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pagination** | _org.netuno.tritao.query.pagination.Pagination_ | the pagination configuration object of the query. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setTableName

---

#### <span style={{color: '#008000'}}>setTableName</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the name of the query's main table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the query's main table. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

## setTablesToPopulate

---

#### <span style={{color: '#008000'}}>setTablesToPopulate</span>(<span style={{color: '#FF8000'}}>tablesToPopulate</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tablesToPopulate** | _java.util.List_ |   |

##### Return

( _[Query](../objects/Query)_ )


---

## setWhere

---

#### <span style={{color: '#008000'}}>setWhere</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Query](../objects/Query)</span>
##### Description

Defines the Where object referring to the main table of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | Where object of the query's main table. |

##### Return

( _[Query](../objects/Query)_ )

Current Query object.

---

