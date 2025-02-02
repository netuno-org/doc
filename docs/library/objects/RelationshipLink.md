---
id: RelationshipLink
title: RelationshipLink
sidebar_label: RelationshipLink
---

Definição da configuração do objeto RelationLink para configurar realcionamentos entre formularios.

---

## getFormLink

---

#### <span style={{color: '#008000'}}>getFormLink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the form to be related.

##### Return

( _string_ )

The name of the form.

---

## getSubLinks

---

#### <span style={{color: '#008000'}}>getSubLinks</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Description

Returns the sub relationships

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )

The sub relationships.

---

## hasSubLinks

---

#### <span style={{color: '#008000'}}>hasSubLinks</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the current object has sub relationships.

##### Return

( _boolean_ )

Whether you have it or not.

---

## setFormLink

---

#### <span style={{color: '#008000'}}>setFormLink</span>(<span style={{color: '#FF8000'}}>form</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](../objects/RelationshipLink)</span>
##### Description

Defines the name of the form to be related.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **form** | _string_ | The name of the form |

##### Return

( _[RelationshipLink](../objects/RelationshipLink)_ )

Current RelationLink object.

---

## setSubLinks

---

#### <span style={{color: '#008000'}}>setSubLinks</span>(<span style={{color: '#FF8000'}}>subLinks</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](../objects/RelationshipLink)</span>
##### Description

Defines the sub relationships

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subLinks** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ | The sub relationships |

##### Return

( _[RelationshipLink](../objects/RelationshipLink)_ )

Current RelationLink object.

---

