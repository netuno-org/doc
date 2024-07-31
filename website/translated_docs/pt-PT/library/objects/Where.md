---
id: Where
title: Where
sidebar_label: Where
---

Definição da configuração do objeto Where para construção de condições nas consultas com o o objeto Query.

---

## and

---

#### <span style="color: #008000">and</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define uma condição com o operador condicional AND no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |
| **coluna** | _java.lang.Object_ | Valor da condição. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

#### <span style="color: #008000">and</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">relationOperator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.RelationOperator</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define uma condição com o operador condicional AND no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |
| **relationOperator** | _org.netuno.tritao.query.where.RelationOperator_ | Operador de relação da condição. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

#### <span style="color: #008000">and</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define um segundo nivel condições com o operador condicional AND no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../../objects/Where)_ | Objeto Where do proximo nivel. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

## getConditions

---

#### <span style="color: #008000">getConditions</span>() : <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>
##### Descrição

Retorna as demais condições aninhadas do objeto.

##### Retorno

( _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ )

Demais condições aninhadas do objeto.

---

## getFirstCondition

---

#### <span style="color: #008000">getFirstCondition</span>() : <span style="font-weight: normal; font-style: italic;">[Condition](../../objects/Condition)</span>
##### Descrição

Retorna a condição base do objeto.

##### Retorno

( _[Condition](../../objects/Condition)_ )

Condição base do objeto.

---

## getTable

---

#### <span style="color: #008000">getTable</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome da tabela a qual será aplicado a condição.

##### Retorno

( _string_ )

Nome da tabela a qual será aplicado a condição.

---

## or

---

#### <span style="color: #008000">or</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define uma condição com o operador condicional OR no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |
| **valor** | _java.lang.Object_ | Valor da condição. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

#### <span style="color: #008000">or</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">relationOperator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.RelationOperator</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define uma condição com o operador condicional OR no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna a qual será aplicado a condição. |
| **relationOperator** | _org.netuno.tritao.query.where.RelationOperator_ | Operador de relação da condição. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

#### <span style="color: #008000">or</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define um segundo nivel condições com o operador condicional OR no objeto Where.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../../objects/Where)_ | Objeto Where do proximo nivel. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

## setConditions

---

#### <span style="color: #008000">setConditions</span>(<span style="color: #FF8000">conditions</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define as demais condições aninhadas do objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conditions** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Demais condições aninhadas do objeto. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

## setFirstCondition

---

#### <span style="color: #008000">setFirstCondition</span>(<span style="color: #FF8000">firstCondition</span>: <span style="font-weight: normal; font-style: italic;">[Condition](../../objects/Condition)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define a condição base do objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **firstCondition** | _[Condition](../../objects/Condition)_ | Condição base do objeto. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

## setTable

---

#### <span style="color: #008000">setTable</span>(<span style="color: #FF8000">nomeTabela</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Define o nome da tabela a qual será aplicado a condição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela a qual será aplicado a condição. |

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where atual.

---

