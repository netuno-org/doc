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
##### Descrição

Retorna o nome da coluna a qual será aplicado a condição.

##### Retorno

( _string_ )

Nome da coluna a qual será aplicado a condição.

---

## getOperator

---

#### <span style={{color: '#008000'}}>getOperator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.where.ConditionalOperatorType</span>
##### Descrição

Retorna o operador da condição.

##### Retorno

( _org.netuno.tritao.db.form.where.ConditionalOperatorType_ )

Retorna o operador da condição.

---

## getRelationOperator

---

#### <span style={{color: '#008000'}}>getRelationOperator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationalOperator](../objects/RelationalOperator)</span>
##### Descrição

Retorna as configurações da relação.

##### Retorno

( _[RelationalOperator](../objects/RelationalOperator)_ )

Configurações da relação.

---

## getSubCondition

---

#### <span style={{color: '#008000'}}>getSubCondition</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Retorna um proximo nivel de condições dentro da condição atual.

##### Retorno

( _[Where](../objects/Where)_ )

Proximo nivel de condições dentro da condição atual.

---

## hasSubCondition

---

#### <span style={{color: '#008000'}}>hasSubCondition</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o objeto atual possui subcondições ou não.

##### Retorno

( _boolean_ )

Se possui ou não.

---

## setColumn

---

#### <span style={{color: '#008000'}}>setColumn</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Descrição

Define o nome da coluna a qual será aplicado a condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna a qual será aplicado a condição. |

##### Retorno

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Objeto Condition atual.

---

## setOperator

---

#### <span style={{color: '#008000'}}>setOperator</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.where.ConditionalOperatorType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Descrição

Define o operador da condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _org.netuno.tritao.db.form.where.ConditionalOperatorType_ | O operador da condição. |

##### Retorno

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Objeto Condition atual.

---

## setRelationOperator

---

#### <span style={{color: '#008000'}}>setRelationOperator</span>(<span style={{color: '#FF8000'}}>operadorRelacional</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationalOperator](../objects/RelationalOperator)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Descrição

Define as configurações da relação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operadorRelacional** | _[RelationalOperator](../objects/RelationalOperator)_ | Configurações da relação. |

##### Retorno

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Objeto Condition atual.

---

## setSubCondition

---

#### <span style={{color: '#008000'}}>setSubCondition</span>(<span style={{color: '#FF8000'}}>subcondicao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ConditionalOperator](../objects/ConditionalOperator)</span>
##### Descrição

Define um proximo nivel de condições dentro da condição atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subcondicao** | _[Where](../objects/Where)_ | Proximo nivel de condições dentro da condição atual. |

##### Retorno

( _[ConditionalOperator](../objects/ConditionalOperator)_ )

Objeto Condition atual.

---

