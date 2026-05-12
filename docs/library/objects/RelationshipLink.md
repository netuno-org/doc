---
id: RelationshipLink
title: RelationshipLink
sidebar_label: RelationshipLink
---

Definição da configuração do objeto RelationLink para configurar realcionamentos entre formularios.

---

## getAlias

---

#### <span style={{color: '#008000'}}>getAlias</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


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

#### <span style={{color: '#008000'}}>getSubLinks</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>
##### Description

Returns the sub relationships

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

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

## setAlias

---

#### <span style={{color: '#008000'}}>setAlias</span>(<span style={{color: '#FF8000'}}>alias</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](/docs/library/objects/RelationshipLink)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **alias** | _string_ |   |

##### Return

( _[RelationshipLink](/docs/library/objects/RelationshipLink)_ )


---

## setFormLink

---

#### <span style={{color: '#008000'}}>setFormLink</span>(<span style={{color: '#FF8000'}}>form</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](/docs/library/objects/RelationshipLink)</span>
##### Description

Defines the name of the form to be related.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **form** | _string_ | The name of the form |

##### Return

( _[RelationshipLink](/docs/library/objects/RelationshipLink)_ )

Current RelationLink object.

---

## setSubLinks

---

#### <span style={{color: '#008000'}}>setSubLinks</span>(<span style={{color: '#FF8000'}}>subLinks</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](/docs/library/objects/RelationshipLink)</span>
##### Description

Defines the sub relationships

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subLinks** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | The sub relationships |

##### Return

( _[RelationshipLink](/docs/library/objects/RelationshipLink)_ )

Current RelationLink object.

---

