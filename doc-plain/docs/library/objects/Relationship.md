---
id: Relationship
title: Relationship
sidebar_label: Relationship
---

Definição da configuração do objeto Relation para configurar relacionamentos entre tabelas com Join.

---

## getColumn

---

#### getColumn() : string
##### Description

Returns the name of the column that will be used in the relationship.

##### Return

( _string_ )

The name of the column.

---

## getSubRelations

---

#### getSubRelations() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Description

Returns the sub relationships of the current object.

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

The sub relationships

---

## getTableName

---

#### getTableName() : string
##### Description

Returns the name of the table to be related.

##### Return

( _string_ )

The name of the table.

---

## getType

---

#### getType() : org.netuno.tritao.db.form.join.RelationshipType
##### Description

Returns the type of the relationship.

##### Return

( _org.netuno.tritao.db.form.join.RelationshipType_ )

The type of the relationship.

---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Description

Returns the filter settings.

##### Return

( _[Where](/docs/library/objects/Where)_ )

The filter settings.

---

## join

---

#### join(relation: [Relationship](/docs/library/objects/Relationship)) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines a second level of INNER JOIN relationship on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](/docs/library/objects/Relationship)_ | Second level INNER JOIN relationship. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## leftJoin

---

#### leftJoin(relation: [Relationship](/docs/library/objects/Relationship)) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines a second level of LEFT JOIN relationship on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](/docs/library/objects/Relationship)_ | Second level LEFT JOIN relationship. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## rightJoin

---

#### rightJoin(relation: [Relationship](/docs/library/objects/Relationship)) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines a second level of RIGHT JOIN relationship on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](/docs/library/objects/Relationship)_ | Second level RIGHT JOIN relationship. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## setColumn

---

#### setColumn(column: string) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines the name of the column that will be used in the relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | The name of the column |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## setSubRelations

---

#### setSubRelations(subRelations: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines the sub relationships of the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subRelations** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | the sub relationships. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## setTableName

---

#### setTableName(tableName: string) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines the name of the table to be related.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the table |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## setType

---

#### setType(type: org.netuno.tritao.db.form.join.RelationshipType) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines the type of the relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _org.netuno.tritao.db.form.join.RelationshipType_ | The type of the relationship. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## setWhere

---

#### setWhere(where: [Where](/docs/library/objects/Where)) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines the filter settings.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | The filter settings. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

## where

---

#### where(where: [Where](/docs/library/objects/Where)) : [Relationship](/docs/library/objects/Relationship)
##### Description

Defines the filter settings.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | The filter settings. |

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

Current Relation object.

---

