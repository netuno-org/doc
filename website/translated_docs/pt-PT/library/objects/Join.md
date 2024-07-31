---
id: Join
title: Join
sidebar_label: Join
---

Definição da configuração do objeto Join para consultas simplificadas.

---

## getRelation

---

#### <span style="color: #008000">getRelation</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.join.Relation</span>
##### Descrição

Retorna o objeto com a configuração do relacionamento.

##### Retorno

( _org.netuno.tritao.query.join.Relation_ )

Objeto com a configuração do relacionamento.

---

## getTable

---

#### <span style="color: #008000">getTable</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome da tabela principal do relacionamento.

##### Retorno

( _string_ )

Nome da tabela principal do relacionamento.

---

## getWhere

---

#### <span style="color: #008000">getWhere</span>() : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Retorna o objeto Where com a configuração das condições para a tabela a relacionar.

##### Retorno

( _[Where](../../objects/Where)_ )

Objeto Where com a configuração das condições

---

## setRelation

---

#### <span style="color: #008000">setRelation</span>(<span style="color: #FF8000">relacao</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.join.Relation</span>) : <span style="font-weight: normal; font-style: italic;">[Join](../../objects/Join)</span>
##### Descrição

Define o objeto com a configuração do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _org.netuno.tritao.query.join.Relation_ | Objeto com a configuração do relacionamento. |

##### Retorno

( _[Join](../../objects/Join)_ )

Objeto Join atual.

---

## setTable

---

#### <span style="color: #008000">setTable</span>(<span style="color: #FF8000">nomeTabela</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Join](../../objects/Join)</span>
##### Descrição

Define o nome da tabela principal do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela principal. |

##### Retorno

( _[Join](../../objects/Join)_ )

Objeto Join atual.

---

## setWhere

---

#### <span style="color: #008000">setWhere</span>(<span style="color: #FF8000">condicao</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Join](../../objects/Join)</span>
##### Descrição

Define o objeto Where com a configuração das condições para a tabela a relacionar.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **condicao** | _[Where](../../objects/Where)_ | Objeto Where com a configuração das condições |

##### Retorno

( _[Join](../../objects/Join)_ )

Objeto Join atual.

---

