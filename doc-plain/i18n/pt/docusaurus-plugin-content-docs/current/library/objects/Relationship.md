---
id: Relationship
title: Relationship
sidebar_label: Relationship
---

Definição da configuração do objeto Relation para configurar relacionamentos entre tabelas com Join.

---

## getColumn

---

#### getColumn() : string
##### Descrição

Retorna o nome da coluna que será usada no relacionamento.

##### Retorno

( _string_ )

Nome da coluna.

---

## getSubRelations

---

#### getSubRelations() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Descrição

Retorna os sub relacionamentos do objeto atual.

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

Sub relacionamentos

---

## getTableName

---

#### getTableName() : string
##### Descrição

Retorna o nome da tabela a ser relacionado.

##### Retorno

( _string_ )

Nome da tabela.

---

## getType

---

#### getType() : org.netuno.tritao.db.form.join.RelationshipType
##### Descrição

Retorna o tipo do relacionamento.

##### Retorno

( _org.netuno.tritao.db.form.join.RelationshipType_ )

Tipo do relacionamento.

---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Descrição

Retorna as configurações do filtro.

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Configurações do filtro.

---

## join

---

#### join(relacao: [Relationship](/docs/library/objects/Relationship)) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define um segundo nivel de relação INNER JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](/docs/library/objects/Relationship)_ | Relação INNER JOIN de segundo nivel. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## leftJoin

---

#### leftJoin(relacao: [Relationship](/docs/library/objects/Relationship)) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define um segundo nivel de relação LEFT JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](/docs/library/objects/Relationship)_ | Relação LEFT JOIN de segundo nivel. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## rightJoin

---

#### rightJoin(relacao: [Relationship](/docs/library/objects/Relationship)) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define um segundo nivel de relação RIGHT JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](/docs/library/objects/Relationship)_ | Relação RIGHT JOIN de segundo nivel. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## setColumn

---

#### setColumn(coluna: string) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define o nome da coluna que será usada no relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## setSubRelations

---

#### setSubRelations(subRelacionamentos: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define os sub relacionamentos do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subRelacionamentos** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Sub relacionamentos. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## setTableName

---

#### setTableName(tabelaNome: string) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define o nome da tabela a ser relacionado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabelaNome** | _string_ | Nome da tabela. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## setType

---

#### setType(tipo: org.netuno.tritao.db.form.join.RelationshipType) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define o tipo do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _org.netuno.tritao.db.form.join.RelationshipType_ | Tipo do relacionamento. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## setWhere

---

#### setWhere(filtro: [Where](/docs/library/objects/Where)) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define as configurações do filtro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _[Where](/docs/library/objects/Where)_ | Configurações do filtro. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

## where

---

#### where(filtro: [Where](/docs/library/objects/Where)) : [Relationship](/docs/library/objects/Relationship)
##### Descrição

Define as configurações do filtro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _[Where](/docs/library/objects/Where)_ | Configurações do filtro. |

##### Retorno

( _[Relationship](/docs/library/objects/Relationship)_ )

Objeto Relation atual.

---

