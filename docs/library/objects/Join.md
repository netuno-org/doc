---
id: Join
title: Join
sidebar_label: Join
---

Definição da configuração do objeto Join para consultas simplificadas.

---

## getJoinType

---

#### <span style={{color: '#008000'}}>getJoinType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.JoinType</span>
##### Description

Returns the type of the joint or the relationship.

##### Return

( _org.netuno.tritao.db.form.join.JoinType_ )

The type of the joint

---

## getRelation

---

#### <span style={{color: '#008000'}}>getRelation</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](/docs/library/objects/Relationship)</span>
##### Description

Returns the object with the relationship configuration.

##### Return

( _[Relationship](/docs/library/objects/Relationship)_ )

The object with the relationship configuration.

---

## getTable

---

#### <span style={{color: '#008000'}}>getTable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the relationship's main table.

##### Return

( _string_ )

The name of the relationship's main table.

---

## getWhere

---

#### <span style={{color: '#008000'}}>getWhere</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>
##### Description

Returns the Where object with the configuration of conditions for the table to be related.

##### Return

( _[Where](/docs/library/objects/Where)_ )

The Where object with the configuration of conditions

---

## setJoinType

---

#### <span style={{color: '#008000'}}>setJoinType</span>(<span style={{color: '#FF8000'}}>joinType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.JoinType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Join](/docs/library/objects/Join)</span>
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

#### <span style={{color: '#008000'}}>setRelation</span>(<span style={{color: '#FF8000'}}>ralation</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](/docs/library/objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Join](/docs/library/objects/Join)</span>
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

#### <span style={{color: '#008000'}}>setTable</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Join](/docs/library/objects/Join)</span>
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

#### <span style={{color: '#008000'}}>setWhere</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](/docs/library/objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Join](/docs/library/objects/Join)</span>
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

