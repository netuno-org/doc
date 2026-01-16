---
id: Join
title: Join
sidebar_label: Join
---

Definição da configuração do objeto Join para consultas simplificadas.

---

## getJoinType

---

#### getJoinType() : org.netuno.tritao.db.form.join.JoinType
##### Description

Returns the type of the joint or the relationship.

##### Return

( _org.netuno.tritao.db.form.join.JoinType_ )

The type of the joint

---

## getRelation

---

#### getRelation() : [Relationship](/docs/library/objects/Relationship)
##### Description

Returns the object with the relationship configuration.

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

The object with the relationship configuration.

---

## getTable

---

#### getTable() : string
##### Description

Returns the name of the relationship's main table.

##### Return

( _string_ )

The name of the relationship's main table.

---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Description

Returns the Where object with the configuration of conditions for the table to be related.

##### Return

( _[Where](/docs/library/objects/Where)_ )

The Where object with the configuration of conditions

---

## setJoinType

---

#### setJoinType(joinType: org.netuno.tritao.db.form.join.JoinType) : [Join](/docs/library/objects/Join)
##### Description

Defines the type of the joint or the relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **joinType** | _org.netuno.tritao.db.form.join.JoinType_ | The type of the joint. |

##### Return

( _[Join](/docs/library/objects/Join)_ )

Current Join object.

---

## setRelation

---

#### setRelation(ralation: [Relationship](/docs/library/objects/Relationship)) : [Join](/docs/library/objects/Join)
##### Description

Defines the object with the relationship configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ralation** | _[Relationship](/docs/library/objects/Relationship)_ | The object with the relationship configuration. |

##### Return

( _[Join](/docs/library/objects/Join)_ )

Current Join object.

---

## setTable

---

#### setTable(tableName: string) : [Join](/docs/library/objects/Join)
##### Description

Defines the name of the relationship's main table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the query's main table. |

##### Return

( _[Join](/docs/library/objects/Join)_ )

Current Join object.

---

## setWhere

---

#### setWhere(where: [Where](/docs/library/objects/Where)) : [Join](/docs/library/objects/Join)
##### Description

Defines the Where object with the configuration of conditions for the table to be related.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | The Where object with the configuration of conditions |

##### Return

( _[Join](/docs/library/objects/Join)_ )

Current Join object.

---

