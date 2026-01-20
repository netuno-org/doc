---
id: Link
title: Link
sidebar_label: Link
---

Definição da configuração do objeto Link para realcionamento entre formularios.

---

## getForm

---

#### getForm() : string
##### Description

Returns the name of the query's main form.

##### Return

( _string_ )

The name of the form.

---

## getJoinType

---

#### getJoinType() : org.netuno.tritao.db.form.join.JoinType
##### Return

( _org.netuno.tritao.db.form.join.JoinType_ )


---

## getRelationLink

---

#### getRelationLink() : [RelationshipLink](/docs/library/objects/RelationshipLink)
##### Description

Returns the relationship configuration.

##### Return

( _[RelationshipLink](/docs/library/objects/RelationshipLink)_ )

Relationship configuration.

---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Description

Returns the filter configuration for the Link object's main form.

##### Return

( _[Where](/docs/library/objects/Where)_ )

The filters configuration

---

## link

---

#### link(formLink: string) : [Link](/docs/library/objects/Link)
##### Description

Defines a second relationship level on the current Link object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Name of the form to be listed. |

##### Return

( _[Link](/docs/library/objects/Link)_ )

Current Link object.

---

#### link(formLink: [Link](/docs/library/objects/Link)) : [Link](/docs/library/objects/Link)
##### Description

Defines a second relationship level on the current Link object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _[Link](/docs/library/objects/Link)_ | Name of the form to be listed. |

##### Return

( _[Link](/docs/library/objects/Link)_ )

Current Link object.

---

## setForm

---

#### setForm(form: string) : [Link](/docs/library/objects/Link)
##### Description

Defines the name of the query's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **form** | _string_ | The name of the form |

##### Return

( _[Link](/docs/library/objects/Link)_ )

Current Link object.

---

## setJoinType

---

#### setJoinType(joinType: org.netuno.tritao.db.form.join.JoinType) : [Link](/docs/library/objects/Link)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **joinType** | _org.netuno.tritao.db.form.join.JoinType_ |   |

##### Return

( _[Link](/docs/library/objects/Link)_ )


---

## setRelationLink

---

#### setRelationLink(relationLink: [RelationshipLink](/docs/library/objects/RelationshipLink)) : [Link](/docs/library/objects/Link)
##### Description

Defines the relationship configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationLink** | _[RelationshipLink](/docs/library/objects/RelationshipLink)_ | The relationship configuration. |

##### Return

( _[Link](/docs/library/objects/Link)_ )

Current Link object.

---

## setWhere

---

#### setWhere(where: [Where](/docs/library/objects/Where)) : [Link](/docs/library/objects/Link)
##### Description

Defines the filter configuration for the Link object's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | The filters configuration. |

##### Return

( _[Link](/docs/library/objects/Link)_ )

Current Link object.

---

## where

---

#### where(where: [Where](/docs/library/objects/Where)) : [Link](/docs/library/objects/Link)
##### Description

Defines the filter configuration for the Link object's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | The filters configuration. |

##### Return

( _[Link](/docs/library/objects/Link)_ )

Current Link object.

---

## withInner

---

#### withInner() : [Link](/docs/library/objects/Link)
##### Return

( _[Link](/docs/library/objects/Link)_ )


---

## withLeft

---

#### withLeft() : [Link](/docs/library/objects/Link)
##### Return

( _[Link](/docs/library/objects/Link)_ )


---

## withRight

---

#### withRight() : [Link](/docs/library/objects/Link)
##### Return

( _[Link](/docs/library/objects/Link)_ )


---

