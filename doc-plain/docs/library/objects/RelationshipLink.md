---
id: RelationshipLink
title: RelationshipLink
sidebar_label: RelationshipLink
---

Definição da configuração do objeto RelationLink para configurar realcionamentos entre formularios.

---

## getFormLink

---

#### getFormLink() : string
##### Description

Returns the name of the form to be related.

##### Return

( _string_ )

The name of the form.

---

## getSubLinks

---

#### getSubLinks() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Description

Returns the sub relationships

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

The sub relationships.

---

## hasSubLinks

---

#### hasSubLinks() : boolean
##### Description

Returns whether the current object has sub relationships.

##### Return

( _boolean_ )

Whether you have it or not.

---

## setFormLink

---

#### setFormLink(form: string) : [RelationshipLink](/docs/library/objects/RelationshipLink)
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

#### setSubLinks(subLinks: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RelationshipLink](/docs/library/objects/RelationshipLink)
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

