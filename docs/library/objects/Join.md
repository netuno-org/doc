---
id: Join
title: Join
sidebar_label: Join
---

Definição da configuração do objeto Join para consultas simplificadas.

---

## getJoinType

---

#### <span style="color: #008000">getJoinType</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.join.JoinType</span>
##### Return

( _org.netuno.tritao.query.join.JoinType_ )


---

## getRelation

---

#### <span style="color: #008000">getRelation</span>() : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Description

Returns the object with the relationship configuration.

##### Return

( _[Relation](../../objects/Relation)_ )

The object with the relationship configuration.

---

## getTable

---

#### <span style="color: #008000">getTable</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of the relationship's main table.

##### Return

( _string_ )

The name of the relationship's main table.

---

## getWhere

---

#### <span style="color: #008000">getWhere</span>() : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Returns the Where object with the configuration of conditions for the table to be related.

##### Return

( _[Where](../../objects/Where)_ )

The Where object with the configuration of conditions

---

## setJoinType

---

#### <span style="color: #008000">setJoinType</span>(<span style="color: #FF8000">joinType</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.join.JoinType</span>) : <span style="font-weight: normal; font-style: italic;">[Join](../../objects/Join)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **joinType** | _org.netuno.tritao.query.join.JoinType_ |   |

##### Return

( _[Join](../../objects/Join)_ )


---

## setRelation

---

#### <span style="color: #008000">setRelation</span>(<span style="color: #FF8000">ralation</span>: <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>) : <span style="font-weight: normal; font-style: italic;">[Join](../../objects/Join)</span>
##### Description

Defines the object with the relationship configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **ralation** | _[Relation](../../objects/Relation)_ | The object with the relationship configuration. |

##### Return

( _[Join](../../objects/Join)_ )

Current Join object.

---

## setTable

---

#### <span style="color: #008000">setTable</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Join](../../objects/Join)</span>
##### Description

Defines the name of the relationship's main table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the query's main table. |

##### Return

( _[Join](../../objects/Join)_ )

Current Join object.

---

## setWhere

---

#### <span style="color: #008000">setWhere</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Join](../../objects/Join)</span>
##### Description

Defines the Where object with the configuration of conditions for the table to be related.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../../objects/Where)_ | The Where object with the configuration of conditions |

##### Return

( _[Join](../../objects/Join)_ )

Current Join object.

---

