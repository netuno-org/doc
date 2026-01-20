---
id: ConditionalOperator
title: ConditionalOperator
sidebar_label: ConditionalOperator
---

Definição da configuração do objeto Condition para construção de condições com o objeto Where

---

## getColumn

---

#### getColumn() : string
##### Description

Returns the name of the column to which the condition will be applied.

##### Return

( _string_ )

The name of the column to which the condition will be applied.

---

## getOperator

---

#### getOperator() : org.netuno.tritao.db.form.where.ConditionalOperatorType
##### Description

Returns the condition condition operator.

##### Return

( _org.netuno.tritao.db.form.where.ConditionalOperatorType_ )

The condition condition operator.

---

## getRelationOperator

---

#### getRelationOperator() : [RelationalOperator](/docs/library/objects/RelationalOperator)
##### Description

Returns the relationship settings.

##### Return

( _[RelationalOperator](/docs/library/objects/RelationalOperator)_ )

The relationship settings.

---

## getSubCondition

---

#### getSubCondition() : [Where](/docs/library/objects/Where)
##### Description

Returns the next level of conditions within the current condition.

##### Return

( _[Where](/docs/library/objects/Where)_ )

The next level of conditions within the current condition.

---

## hasSubCondition

---

#### hasSubCondition() : boolean
##### Description

Returns whether the current object has subconditions or not.

##### Return

( _boolean_ )

Whether you have it or not.

---

## setColumn

---

#### setColumn(column: string) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Description

Defines the name of the column to which the condition will be applied.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | The name of the column to which the condition will be applied. |

##### Return

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Current Condition object.

---

## setOperator

---

#### setOperator(column: org.netuno.tritao.db.form.where.ConditionalOperatorType) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Description

Defines the condition condition operator.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _org.netuno.tritao.db.form.where.ConditionalOperatorType_ | The condition condition operator. |

##### Return

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Current Condition object.

---

## setRelationOperator

---

#### setRelationOperator(relationOperator: [RelationalOperator](/docs/library/objects/RelationalOperator)) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Description

Defines the relationship settings.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationOperator** | _[RelationalOperator](/docs/library/objects/RelationalOperator)_ | The relationship settings. |

##### Return

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Current Condition object.

---

## setSubCondition

---

#### setSubCondition(subcondition: [Where](/docs/library/objects/Where)) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Description

Defines the next level of conditions within the current condition.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subcondition** | _[Where](/docs/library/objects/Where)_ | The next level of conditions within the current condition. |

##### Return

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Current Condition object.

---

