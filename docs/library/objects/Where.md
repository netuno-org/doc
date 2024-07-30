---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o o objeto Query.

---

## and

---

#### <span style="color: #008000">and</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines a condition with the conditional AND operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |
| **value** | _java.lang.Object_ | Condition value. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

#### <span style="color: #008000">and</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">relationOperator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.RelationOperator</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines a condition with the conditional AND operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |
| **relationOperator** | _org.netuno.tritao.query.where.RelationOperator_ | Condition relation operator. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

#### <span style="color: #008000">and</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines a second level conditions with the conditional AND operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../../objects/Where)_ | Where object of the next level. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

## getConditions

---

#### <span style="color: #008000">getConditions</span>() : <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>
##### Description

Returns the other nested conditions of the object.

##### Return

( _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ )

The other nested conditions of the object.

---

## getFirstCondition

---

#### <span style="color: #008000">getFirstCondition</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.Condition</span>
##### Description

Returns the base condition of the object.

##### Return

( _org.netuno.tritao.query.where.Condition_ )

The base condition of the object.

---

## getTable

---

#### <span style="color: #008000">getTable</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Returns the name of the table to which the condition will be applied.

##### Return

( _string_ )

The name of the table to which the condition will be applied.

---

## or

---

#### <span style="color: #008000">or</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines a condition with the conditional OR operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |
| **value** | _java.lang.Object_ | Condition value. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

#### <span style="color: #008000">or</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">relationOperator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.RelationOperator</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines a condition with the conditional OR operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | Column to which the condition will be applied. |
| **relationOperator** | _org.netuno.tritao.query.where.RelationOperator_ | Condition relation operator. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

#### <span style="color: #008000">or</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines a second level conditions with the conditional OR operator on the Where object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **where** | _[Where](../../objects/Where)_ | Where object of the next level. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

## setConditions

---

#### <span style="color: #008000">setConditions</span>(<span style="color: #FF8000">conditions</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines the other nested conditions of the object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **conditions** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | The other nested conditions of the object. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

## setFirstCondition

---

#### <span style="color: #008000">setFirstCondition</span>(<span style="color: #FF8000">firstCondition</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.Condition</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines the base condition of the object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firstCondition** | _org.netuno.tritao.query.where.Condition_ | The base condition of the object. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

## setTable

---

#### <span style="color: #008000">setTable</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Description

Defines the name of the table to which the condition will be applied.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ | The name of the table to which the condition will be applied. |

##### Return

( _[Where](../../objects/Where)_ )

Current Where object.

---

