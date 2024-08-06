---
id: Condition
title: Condition
sidebar_label: Condition
---

Definição da configuração do objeto Condition para construção de condições com o objeto Where

---

## getColumn

---

#### <span style="color: #008000">getColumn</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome da coluna a qual será aplicado a condição.

##### Retorno

( _string_ )

Nome da coluna a qual será aplicado a condição.

---

## getOperator

---

#### <span style="color: #008000">getOperator</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>
##### Descrição

Retorna o operador da condição.

##### Retorno

( _org.netuno.tritao.query.where.ConditionOperator_ )

Retorna o operador da condição.

---

## getRelationOperator

---

#### <span style="color: #008000">getRelationOperator</span>() : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna as configurações da relação.

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Configurações da relação.

---

## getSubCondition

---

#### <span style="color: #008000">getSubCondition</span>() : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Retorna um proximo nivel de condições dentro da condição atual.

##### Retorno

( _[Where](../../objects/Where)_ )

Proximo nivel de condições dentro da condição atual.

---

## hasSubCondition

---

#### <span style="color: #008000">hasSubCondition</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o objeto atual possui subcondições ou não.

##### Retorno

( _boolean_ )

Se possui ou não.

---

## setColumn

---

#### <span style="color: #008000">setColumn</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Condition](../../objects/Condition)</span>
##### Descrição

Define o nome da coluna a qual será aplicado a condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna a qual será aplicado a condição. |

##### Retorno

( _[Condition](../../objects/Condition)_ )

Objeto Condition atual.

---

## setOperator

---

#### <span style="color: #008000">setOperator</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>) : <span style="font-weight: normal; font-style: italic;">[Condition](../../objects/Condition)</span>
##### Descrição

Define o operador da condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _org.netuno.tritao.query.where.ConditionOperator_ | O operador da condição. |

##### Retorno

( _[Condition](../../objects/Condition)_ )

Objeto Condition atual.

---

## setRelationOperator

---

#### <span style="color: #008000">setRelationOperator</span>(<span style="color: #FF8000">operadorRelacional</span>: <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>) : <span style="font-weight: normal; font-style: italic;">[Condition](../../objects/Condition)</span>
##### Descrição

Define as configurações da relação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operadorRelacional** | _[RelationOperator](../../objects/RelationOperator)_ | Configurações da relação. |

##### Retorno

( _[Condition](../../objects/Condition)_ )

Objeto Condition atual.

---

## setSubCondition

---

#### <span style="color: #008000">setSubCondition</span>(<span style="color: #FF8000">subcondicao</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Condition](../../objects/Condition)</span>
##### Descrição

Define um proximo nivel de condições dentro da condição atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subcondicao** | _[Where](../../objects/Where)_ | Proximo nivel de condições dentro da condição atual. |

##### Retorno

( _[Condition](../../objects/Condition)_ )

Objeto Condition atual.

---

