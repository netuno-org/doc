---
id: form
title: Form
sidebar_label: Form
---

Application form generator programmatically.

---

## AND

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">AND</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>
##### Description

Returns an AND conditional operator.

##### Return

( _org.netuno.tritao.query.where.ConditionOperator_ )

Conditional operator.

---

## OR

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">OR</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>
##### Description

Returns an OR conditional operator.

##### Return

( _org.netuno.tritao.query.where.ConditionOperator_ )

Conditional operator.

---

## all

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Return

( _java.util.List_ )


---

## contains

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">contains</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters any occurrence that includes the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## create

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">create</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponent

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponentIfNotExists

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createIfNotExists

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createIfNotExists</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## different

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">different</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters any occurrence that differs from the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## endsWith

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">endsWith</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters any occurrence that ends with the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## field

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">field</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Field](../../objects/Field)</span>
##### Description

Returns a field based on the given column.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column name. |

##### Return

( _[Field](../../objects/Field)_ )

Objeto Field.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">field</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">elias</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Field](../../objects/Field)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ |   |
| **elias** | _string_ |   |

##### Return

( _[Field](../../objects/Field)_ )


---

## fields

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">fields</span>(<span style="color: #FF8000">fields</span>: <span style="font-weight: normal; font-style: italic;">[Lorg.netuno.tritao.query.Field;[]</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

List of column-based fields to be returned in the query.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fields** | _[Lorg.netuno.tritao.query.Field;[]_ | List of fields. |

##### Return

( _java.util.List_ )

List of fields.

---

## get

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getAllComponents

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## getComponent

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## greaterOrEqualsThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">greaterOrEqualsThan</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters out any occurrence that is greater or equals than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## greaterThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">greaterThan</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters out any occurrence that is greater than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## in

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">in</span>(<span style="color: #FF8000">values</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters any occurrence that is equal to any of the given patterns.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](../../objects/Values)_ | Conditional values. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## lessOrEqualsThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">lessOrEqualsThan</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters out any occurrence that is less or equals than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## lessThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">lessThan</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters out any occurrence that is less than the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## link

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Description

Returns a relationship with a form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Name of the form to be related. |

##### Return

( _[Link](../../objects/Link)_ )

Objeto Link.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Return

( _[Link](../../objects/Link)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>, <span style="color: #FF8000">link</span>: <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |
| **link** | _[Link](../../objects/Link)_ |   |

##### Return

( _[Link](../../objects/Link)_ )


---

## manyToOne

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">manyToOne</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Description

Returns a new Many To One relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |
| **column** | _string_ | Column name. |

##### Return

( _[Relation](../../objects/Relation)_ )

Many To One relationship.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">manyToOne</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Return

( _[Relation](../../objects/Relation)_ )


---

## notNulls

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## oneToMany

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">oneToMany</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Description

Returns a new One To Many relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |
| **column** | _string_ | Column name. |

##### Return

( _[Relation](../../objects/Relation)_ )

One To Many relationship.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">oneToMany</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Return

( _[Relation](../../objects/Relation)_ )


---

## pagination

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">pagination</span>(<span style="color: #FF8000">page</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">pageSize</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.pagination.Pagination</span>
##### Description

Returns the object for pagination configuration when using Query's page() method.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _int_ | Page number. |
| **pageSize** | _int_ | Number of elements per page. |

##### Return

( _org.netuno.tritao.query.pagination.Pagination_ )

Objeto Pagination.

---

## primaryKeys

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">primaryKeys</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">primaryKeys</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## query

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">query</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Description

Returns a new Query object ready to be configured.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | Table name. |

##### Return

( _[Query](../../objects/Query)_ )

A new Query object

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">query</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Return

( _[Query](../../objects/Query)_ )


---

## startsWith

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">startsWith</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Description

Returns a relational operator that filters any occurrence that starts with the given pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ | Conditional value. |

##### Return

( _[RelationOperator](../../objects/RelationOperator)_ )

Relational operator.

---

## where

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Returns a new Where object ready to be configured.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column name. |
| **value** | _java.lang.Object_ | Conditional values. |

##### Return

( _[Where](../../objects/Where)_ )

A new Where object

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Returns a new Where object ready to be configured.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column name. |
| **value** | _[RelationOperator](../../objects/RelationOperator)_ | Conditional values. |

##### Return

( _[Where](../../objects/Where)_ )

A new Where object

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">operator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **operator** | _org.netuno.tritao.query.where.ConditionOperator_ |   |
| **column** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Where](../../objects/Where)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">operator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">relationOperator</span>: <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **operator** | _org.netuno.tritao.query.where.ConditionOperator_ |   |
| **column** | _string_ |   |
| **relationOperator** | _[RelationOperator](../../objects/RelationOperator)_ |   |

##### Return

( _[Where](../../objects/Where)_ )


---

