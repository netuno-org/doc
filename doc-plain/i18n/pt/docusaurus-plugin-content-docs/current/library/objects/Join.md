---
id: Join
title: Join
sidebar_label: Join
---

Definição da configuração do objeto Join para consultas simplificadas.

---

## getJoinType

---

#### getJoinType() : org.netuno.tritao.db.form.join.JoinType
##### Descrição

Retorna o tipo da junção do relacionamento.

##### Retorno

( _org.netuno.tritao.db.form.join.JoinType_ )

Tipo da junção.

---

## getRelation

---

#### getRelation() : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Retorna o objeto com a configuração do relacionamento.

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto com a configuração do relacionamento.

---

## getTable

---

#### getTable() : string
##### Descrição

Retorna o nome da tabela principal do relacionamento.

##### Retorno

( _string_ )

Nome da tabela principal do relacionamento.

---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Descrição

Retorna o objeto Where com a configuração das condições para a tabela a relacionar.

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where com a configuração das condições

---

## setJoinType

---

#### setJoinType(juncaoTipo: org.netuno.tritao.db.form.join.JoinType) : [Join](/docs/library/objects/Join)
##### Descrição

Define o tipo da junção do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **juncaoTipo** | _org.netuno.tritao.db.form.join.JoinType_ | Tipo da junção. |

##### Retorno

( _[Join](/docs/library/objects/Join)_ )

Objeto Join atual.

---

## setRelation

---

#### setRelation(relacao: [Relationship](/docs/library/objects/Relationship)) : [Join](/docs/library/objects/Join)
##### Descrição

Define o objeto com a configuração do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](/docs/library/objects/Relationship)_ | Objeto com a configuração do relacionamento. |

##### Retorno

( _[Join](/docs/library/objects/Join)_ )

Objeto Join atual.

---

## setTable

---

#### setTable(nomeTabela: string) : [Join](/docs/library/objects/Join)
##### Descrição

Define o nome da tabela principal do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela principal. |

##### Retorno

( _[Join](/docs/library/objects/Join)_ )

Objeto Join atual.

---

## setWhere

---

#### setWhere(condicao: [Where](/docs/library/objects/Where)) : [Join](/docs/library/objects/Join)
##### Descrição

Define o objeto Where com a configuração das condições para a tabela a relacionar.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **condicao** | _[Where](/docs/library/objects/Where)_ | Objeto Where com a configuração das condições |

##### Retorno

( _[Join](/docs/library/objects/Join)_ )

Objeto Join atual.

---

