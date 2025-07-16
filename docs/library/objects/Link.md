---
id: Link
title: Link
sidebar_label: Link
---

Definição da configuração do objeto Link para realcionamento entre formularios.

---

## getForm

---

#### <span style={{color: '#008000'}}>getForm</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the query's main form.

##### Return

( _string_ )

The name of the form.

---

## getJoinType

---

#### <span style={{color: '#008000'}}>getJoinType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.JoinType</span>
##### Return

( _org.netuno.tritao.db.form.join.JoinType_ )


---

## getRelationLink

---

#### <span style={{color: '#008000'}}>getRelationLink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](../objects/RelationshipLink)</span>
##### Description

Returns the relationship configuration.

##### Return

( _[RelationshipLink](../objects/RelationshipLink)_ )

Relationship configuration.

---

## getWhere

---

#### <span style={{color: '#008000'}}>getWhere</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Returns the filter configuration for the Link object's main form.

##### Return

( _[Where](../objects/Where)_ )

The filters configuration

---

## link

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Description

Defines a second relationship level on the current Link object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Name of the form to be listed. |

##### Return

( _[Link](../objects/Link)_ )

Current Link object.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Description

Defines a second relationship level on the current Link object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _[Link](../objects/Link)_ | Name of the form to be listed. |

##### Return

( _[Link](../objects/Link)_ )

Current Link object.

---

## setForm

---

#### <span style={{color: '#008000'}}>setForm</span>(<span style={{color: '#FF8000'}}>form</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Description

Defines the name of the query's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **form** | _string_ | The name of the form |

##### Return

( _[Link](../objects/Link)_ )

Current Link object.

---

## setJoinType

---

#### <span style={{color: '#008000'}}>setJoinType</span>(<span style={{color: '#FF8000'}}>joinType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.JoinType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **joinType** | _org.netuno.tritao.db.form.join.JoinType_ |   |

##### Return

( _[Link](../objects/Link)_ )


---

## setRelationLink

---

#### <span style={{color: '#008000'}}>setRelationLink</span>(<span style={{color: '#FF8000'}}>relationLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](../objects/RelationshipLink)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Description

Defines the relationship configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationLink** | _[RelationshipLink](../objects/RelationshipLink)_ | The relationship configuration. |

##### Return

( _[Link](../objects/Link)_ )

Current Link object.

---

## setWhere

---

#### <span style={{color: '#008000'}}>setWhere</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Description

Defines the filter configuration for the Link object's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | The filters configuration. |

##### Return

( _[Link](../objects/Link)_ )

Current Link object.

---

## where

---

#### <span style={{color: '#008000'}}>where</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Description

Defines the filter configuration for the Link object's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | The filters configuration. |

##### Return

( _[Link](../objects/Link)_ )

Current Link object.

---

## withInner

---

#### <span style={{color: '#008000'}}>withInner</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Return

( _[Link](../objects/Link)_ )


---

## withLeft

---

#### <span style={{color: '#008000'}}>withLeft</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Return

( _[Link](../objects/Link)_ )


---

## withRight

---

#### <span style={{color: '#008000'}}>withRight</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Return

( _[Link](../objects/Link)_ )


---

