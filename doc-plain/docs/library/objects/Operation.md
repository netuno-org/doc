---
id: Operation
title: Operation
sidebar_label: Operation
---

Definição da configuração do objeto Operation para operações em base de dados.

---

## all

---

#### all() : java.util.List
##### Description

Returns all records resulting from query execution, if none, returns an empty list.

##### Return

( _java.util.List_ )

List of records.

---

## debug

---

#### debug(enabled: boolean) : [Operation](/docs/library/objects/Operation)
##### Description

Defines whether debug is active or not in the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether the debug is active or not. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## delete

---

#### delete() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### delete(forms: java.lang.String[]) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forms** | _java.lang.String[]_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## distinct

---

#### distinct(enabled: boolean) : [Operation](/docs/library/objects/Operation)
##### Description

Defines whether the DISTINCT command will be applied to the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it will be applied or not. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## first

---

#### first() : [Values](/docs/library/objects/Values)
##### Description

Returns the first record resulting from the query execution, if none, returns null.

##### Return

( _[Values](/docs/library/objects/Values)_ )

First record of the result.

---

## get

---

#### get(column: string) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

#### get(column: string, alias: string) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ |   |
| **alias** | _string_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## getFieldsToGet

---

#### getFieldsToGet() : java.util.List
##### Description

Returns the fields that will be obtained in the query

##### Return

( _java.util.List_ )

The fields that will be obtained in the query

---

## getFieldsToSet

---

#### getFieldsToSet() : java.util.List
##### Return

( _java.util.List_ )


---

## getFormName

---

#### getFormName() : string
##### Description

Returns the name of the query's main table.

##### Return

( _string_ )

The name of the query's main table.

---

## getGroup

---

#### getGroup() : [Group](/docs/library/objects/Group)
##### Description

Returns the query grouping object.

##### Return

( _[Group](/docs/library/objects/Group)_ )

The query grouping object.

---

## getJoin

---

#### getJoin() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Description

Returns the Join objects (related tables) referring to the main table of the query.

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

The Join objects (related tables) referring to the main table of the query.

---

## getLimit

---

#### getLimit() : int
##### Return

( _int_ )


---

## getOrder

---

#### getOrder() : [Order](/docs/library/objects/Order)
##### Description

Returns the query ordering object.

##### Return

( _[Order](/docs/library/objects/Order)_ )

The query ordering object.

---

## getPagination

---

#### getPagination() : org.netuno.tritao.db.form.pagination.Pagination
##### Description

Returns the pagination configuration object (if any) of the query.

##### Return

( _org.netuno.tritao.db.form.pagination.Pagination_ )

The pagination configuration object (if any) of the query.

---

## getTablesToPopulate

---

#### getTablesToPopulate() : java.util.List
##### Return

( _java.util.List_ )


---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Description

Returns the Where object referring to the main table of the query.

##### Return

( _[Where](/docs/library/objects/Where)_ )

Where object of the query's main table.

---

## group

---

#### group(order: java.lang.String[]) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the query grouping object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **order** | _java.lang.String[]_ | The query grouping object. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

#### group(order: string) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the query grouping object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **order** | _string_ | The query grouping object. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## insert

---

#### insert() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isDebug

---

#### isDebug() : boolean
##### Description

Returns whether debug is active or not in the query.

##### Return

( _boolean_ )

Whether debug is active or not in the query.

---

## isDistinct

---

#### isDistinct() : boolean
##### Description

Returns whether the DISTINCT command will be applied to the query.

##### Return

( _boolean_ )

Whether it will be applied or not.

---

## join

---

#### join(relation: [Relationship](/docs/library/objects/Relationship)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines an INNER JOIN relationship with a table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](/docs/library/objects/Relationship)_ | INNER JOIN type relationship. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## leftJoin

---

#### leftJoin(relation: [Relationship](/docs/library/objects/Relationship)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines an LEFT JOIN relationship with a table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](/docs/library/objects/Relationship)_ | LEFT JOIN type relationship. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## limit

---

#### limit(limit: int) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **limit** | _int_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## link

---

#### link(formLink: string) : [Operation](/docs/library/objects/Operation)
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

#### link(formLink: string, link: [Link](/docs/library/objects/Link)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |
| **link** | _[Link](/docs/library/objects/Link)_ | Link object with a subrelation. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

#### link(formLink: string, where: [Where](/docs/library/objects/Where)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |
| **where** | _[Where](/docs/library/objects/Where)_ | Where object with the conditions referring to the form you want to relate. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

#### link(formLink: string, where: [Where](/docs/library/objects/Where), link: [Link](/docs/library/objects/Link)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Form to be related. |
| **where** | _[Where](/docs/library/objects/Where)_ | Where object with the conditions referring to the form you want to relate. |
| **link** | _[Link](/docs/library/objects/Link)_ | Link object with a subrelation. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

#### link(formLink: [Link](/docs/library/objects/Link)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines a form to be related to the main table of the query using the Link criteria.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _[Link](/docs/library/objects/Link)_ | Form to be related. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## order

---

#### order(column: string, order: string) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the ordering of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column for sorting. |
| **order** | _string_ | Meaning of ordering. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## page

---

#### page(page: int, size: int) : [Values](/docs/library/objects/Values)
##### Description

Returns Page with the items resulting from executing the query in a paged form and other pagination data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _int_ | Records page number. |
| **size** | _int_ | Number of records per page. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Page with items and other pagination data.

---

#### page(pagination: org.netuno.tritao.db.form.pagination.Pagination) : [Values](/docs/library/objects/Values)
##### Description

Returns Page with the items resulting from executing the query in a paged form and other pagination data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pagination** | _org.netuno.tritao.db.form.pagination.Pagination_ | Pagination object with pagination settings. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Page with items and other pagination data.

---

## populate

---

#### populate(table: string, filter: org.netuno.tritao.db.form.Field) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _org.netuno.tritao.db.form.Field_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

#### populate(table: string, filter: org.netuno.tritao.db.form.Field, fields: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _org.netuno.tritao.db.form.Field_ |   |
| **fields** | _java.util.List_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## rightJoin

---

#### rightJoin(relation: [Relationship](/docs/library/objects/Relationship)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines an RIGHT JOIN relationship with a table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](/docs/library/objects/Relationship)_ | RIGHT JOIN type relationship. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## set

---

#### set(column: string, value: java.lang.Object) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## setDebug

---

#### setDebug(enabled: boolean) : [Operation](/docs/library/objects/Operation)
##### Description

Defines whether debug is active or not in the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether the debug is active or not. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setDistinct

---

#### setDistinct(enabled: boolean) : [Operation](/docs/library/objects/Operation)
##### Description

Defines whether the DISTINCT command will be applied to the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ | Whether it will be applied or not. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setFieldsToGet

---

#### setFieldsToGet(fields: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the fields that will be obtained in the query

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fields** | _java.util.List_ | The fields that will be obtained in the query. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setFieldsToSet

---

#### setFieldsToSet(fieldsToSet: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldsToSet** | _java.util.List_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## setFormName

---

#### setFormName(tableName: string) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the name of the query's main table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the query's main table. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setGroup

---

#### setGroup(order: [Group](/docs/library/objects/Group)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the query grouping object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **order** | _[Group](/docs/library/objects/Group)_ | The query grouping object. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setJoin

---

#### setJoin(join: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the Join objects (related tables) referring to the main table of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **join** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | The Join objects (related tables) referring to the main table of the query. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setLimit

---

#### setLimit(limit: int) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **limit** | _int_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## setOrder

---

#### setOrder(order: [Order](/docs/library/objects/Order)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the query ordering object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **order** | _[Order](/docs/library/objects/Order)_ | The query ordering object. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setPagination

---

#### setPagination(pagination: org.netuno.tritao.db.form.pagination.Pagination) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the pagination configuration object (if any) of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pagination** | _org.netuno.tritao.db.form.pagination.Pagination_ | the pagination configuration object of the query. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## setTablesToPopulate

---

#### setTablesToPopulate(tablesToPopulate: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tablesToPopulate** | _java.util.List_ |   |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )


---

## setWhere

---

#### setWhere(where: [Where](/docs/library/objects/Where)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the Where object referring to the main table of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Where object of the query's main table. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

## update

---

#### update() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## where

---

#### where(where: [Where](/docs/library/objects/Where)) : [Operation](/docs/library/objects/Operation)
##### Description

Defines the Where object referring to the main table of the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Where object of the query's main table. |

##### Return

( _[Operation](/docs/library/objects/Operation)_ )

Current Query object.

---

