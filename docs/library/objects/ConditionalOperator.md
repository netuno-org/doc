---
id: ConditionalOperator
title: ConditionalOperator
sidebar_label: ConditionalOperator
---

Definição da configuração do objeto Condition para construção de condições com o objeto Where

---

## getColumn

---

#### <span style={{color: '#008000'}}>getColumn</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Returns the name of the column to which the condition will be applied.

##### Return

( _string_ )

The name of the column to which the condition will be applied.

---

## getOperator

---

#### <span style={{color: '#008000'}}>getOperator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.where.ConditionalOperatorType</span>
##### Description

Returns the condition condition operator.

##### Return

( _org.netuno.tritao.db.form.where.ConditionalOperatorType_ )

The condition condition operator.

---

## getRelationOperator

---

#### <span style={{color: '#008000'}}>getRelationOperator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationalOperator](../objects/RelationalOperator)</span>
##### Description

Returns the relationship settings.

##### Return

( _[RelationalOperator](../objects/RelationalOperator)_ )

The relationship settings.

---

## getSubCondition

---

#### <span style={{color: '#008000'}}>getSubCondition</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Description

Returns the next level of conditions within the current condition.

##### Return

( _[Where](../objects/Where)_ )

The next level of conditions within the current condition.

---

## hasSubCondition

---

#### <span style={{color: '#008000'}}>hasSubCondition</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Returns whether the current object has subconditions or not.

##### Return

( _boolean_ )

Whether you have it or not.

---

## setColumn

---

#### <span style={{color: '#008000'}}>setColumn</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Description

Defines the name of the column to which the condition will be applied.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _string_ | The name of the column to which the condition will be applied. |

##### Return

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Current Condition object.

---

## setOperator

---

#### <span style={{color: '#008000'}}>setOperator</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.where.ConditionalOperatorType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Description

Defines the condition condition operator.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **column** | _org.netuno.tritao.db.form.where.ConditionalOperatorType_ | The condition condition operator. |

##### Return

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Current Condition object.

---

## setRelationOperator

---

#### <span style={{color: '#008000'}}>setRelationOperator</span>(<span style={{color: '#FF8000'}}>relationOperator</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationalOperator](../objects/RelationalOperator)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Description

Defines the relationship settings.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationOperator** | _[RelationalOperator](../objects/RelationalOperator)_ | The relationship settings. |

##### Return

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Current Condition object.

---

## setSubCondition

---

#### <span style={{color: '#008000'}}>setSubCondition</span>(<span style={{color: '#FF8000'}}>subcondition</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Description

Defines the next level of conditions within the current condition.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **subcondition** | _[Where](../objects/Where)_ | The next level of conditions within the current condition. |

##### Return

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Current Condition object.

---

