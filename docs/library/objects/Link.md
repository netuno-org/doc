---
id: Link
title: Link
sidebar_label: Link
---

Definição da configuração do objeto Link para realcionamento entre formularios.

---

## getForm

---

#### <span style="color: #008000">getForm</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of the query's main form.

##### Return

( _string_ )

The name of the form.

---

## getRelationLink

---

#### <span style="color: #008000">getRelationLink</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.link.RelationLink</span>
##### Description

Returns the relationship configuration.

##### Return

( _org.netuno.tritao.query.link.RelationLink_ )

Relationship configuration.

---

## getWhere

---

#### <span style="color: #008000">getWhere</span>() : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Returns the filter configuration for the Link object's main form.

##### Return

( _[Where](../../objects/Where)_ )

The filters configuration

---

## link

---

#### <span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Description

Defines a second relationship level on the current Link object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formLink** | _string_ | Name of the form to be listed. |

##### Return

( _[Link](../../objects/Link)_ )

Current Link object.

---

## setForm

---

#### <span style="color: #008000">setForm</span>(<span style="color: #FF8000">form</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Description

Defines the name of the query's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **form** | _string_ | The name of the form |

##### Return

( _[Link](../../objects/Link)_ )

Current Link object.

---

## setRelationLink

---

#### <span style="color: #008000">setRelationLink</span>(<span style="color: #FF8000">relationLink</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.link.RelationLink</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Description

Defines the relationship configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationLink** | _org.netuno.tritao.query.link.RelationLink_ | The relationship configuration. |

##### Return

( _[Link](../../objects/Link)_ )

Current Link object.

---

## setWhere

---

#### <span style="color: #008000">setWhere</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Description

Defines the filter configuration for the Link object's main form.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../../objects/Where)_ | The filters configuration. |

##### Return

( _[Link](../../objects/Link)_ )

Current Link object.

---

