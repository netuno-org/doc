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
##### Descrição

Retorna o nome da coluna a qual será aplicado a condição.

##### Retorno

( _string_ )

Nome da coluna a qual será aplicado a condição.

---

## getOperator

---

#### getOperator() : org.netuno.tritao.db.form.where.ConditionalOperatorType
##### Descrição

Retorna o operador da condição.

##### Retorno

( _org.netuno.tritao.db.form.where.ConditionalOperatorType_ )

Retorna o operador da condição.

---

## getRelationOperator

---

#### getRelationOperator() : [RelationalOperator](/docs/library/objects/RelationalOperator)
##### Descrição

Retorna as configurações da relação.

##### Retorno

( _[RelationalOperator](/docs/library/objects/RelationalOperator)_ )

Configurações da relação.

---

## getSubCondition

---

#### getSubCondition() : [Where](/docs/library/objects/Where)
##### Descrição

Retorna um proximo nivel de condições dentro da condição atual.

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Proximo nivel de condições dentro da condição atual.

---

## hasSubCondition

---

#### hasSubCondition() : boolean
##### Descrição

Retorna se o objeto atual possui subcondições ou não.

##### Retorno

( _boolean_ )

Se possui ou não.

---

## setColumn

---

#### setColumn(coluna: string) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Descrição

Define o nome da coluna a qual será aplicado a condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna a qual será aplicado a condição. |

##### Retorno

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Objeto Condition atual.

---

## setOperator

---

#### setOperator(coluna: org.netuno.tritao.db.form.where.ConditionalOperatorType) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Descrição

Define o operador da condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _org.netuno.tritao.db.form.where.ConditionalOperatorType_ | O operador da condição. |

##### Retorno

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Objeto Condition atual.

---

## setRelationOperator

---

#### setRelationOperator(operadorRelacional: [RelationalOperator](/docs/library/objects/RelationalOperator)) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Descrição

Define as configurações da relação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operadorRelacional** | _[RelationalOperator](/docs/library/objects/RelationalOperator)_ | Configurações da relação. |

##### Retorno

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Objeto Condition atual.

---

## setSubCondition

---

#### setSubCondition(subcondicao: [Where](/docs/library/objects/Where)) : [ConditionalOperator](/docs/library/objects/ConditionalOperator)
##### Descrição

Define um proximo nivel de condições dentro da condição atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subcondicao** | _[Where](/docs/library/objects/Where)_ | Proximo nivel de condições dentro da condição atual. |

##### Retorno

( _[ConditionalOperator](/docs/library/objects/ConditionalOperator)_ )

Objeto Condition atual.

---

