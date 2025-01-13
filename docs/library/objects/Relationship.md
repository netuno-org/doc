---
id: Relationship
title: Relationship
sidebar_label: Relationship
---

Definição da configuração do objeto Relation para configurar relacionamentos entre tabelas com Join.

---

## getColumn

---

#### <span style={{color: '#008000'}}>getColumn</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the column that will be used in the relationship.

##### Return

( _string_ )

The name of the column.

---

## getSubRelations

---

#### <span style={{color: '#008000'}}>getSubRelations</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>
##### Description

Returns the sub relationships of the current object.

##### Return

( _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ )

The sub relationships

---

## getTableName

---

#### <span style={{color: '#008000'}}>getTableName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the table to be related.

##### Return

( _string_ )

The name of the table.

---

## getType

---

#### <span style={{color: '#008000'}}>getType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.RelationshipType</span>
##### Description

Returns the type of the relationship.

##### Return

( _org.netuno.tritao.db.form.join.RelationshipType_ )

The type of the relationship.

---

## getWhere

---

#### <span style={{color: '#008000'}}>getWhere</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Returns the filter settings.

##### Return

( _[Where](../objects/Where)_ )

The filter settings.

---

## join

---

#### <span style={{color: '#008000'}}>join</span>(<span style={{color: '#FF8000'}}>relation</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines a second level of INNER JOIN relationship on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](../objects/Relationship)_ | Second level INNER JOIN relationship. |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

## leftJoin

---

#### <span style={{color: '#008000'}}>leftJoin</span>(<span style={{color: '#FF8000'}}>relation</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines a second level of LEFT JOIN relationship on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](../objects/Relationship)_ | Second level LEFT JOIN relationship. |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

## rightJoin

---

#### <span style={{color: '#008000'}}>rightJoin</span>(<span style={{color: '#FF8000'}}>relation</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines a second level of RIGHT JOIN relationship on the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relation** | _[Relationship](../objects/Relationship)_ | Second level RIGHT JOIN relationship. |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

## setColumn

---

#### <span style={{color: '#008000'}}>setColumn</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines the name of the column that will be used in the relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | The name of the column |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

## setSubRelations

---

#### <span style={{color: '#008000'}}>setSubRelations</span>(<span style={{color: '#FF8000'}}>subRelations</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines the sub relationships of the current object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subRelations** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ | the sub relationships. |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

## setTableName

---

#### <span style={{color: '#008000'}}>setTableName</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines the name of the table to be related.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the table |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

## setType

---

#### <span style={{color: '#008000'}}>setType</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.RelationshipType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines the type of the relationship.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _org.netuno.tritao.db.form.join.RelationshipType_ | The type of the relationship. |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

## setWhere

---

#### <span style={{color: '#008000'}}>setWhere</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Description

Defines the filter settings.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | The filter settings. |

##### Return

( _[Relationship](../objects/Relationship)_ )

Current Relation object.

---

