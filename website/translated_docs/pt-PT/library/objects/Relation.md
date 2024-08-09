---
id: Relation
title: Relation
sidebar_label: Relation
---

Definição da configuração do objeto Relation para configurar relacionamentos entre tabelas com Join.

---

## getColumn

---

#### <span style="color: #008000">getColumn</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome da coluna que será usada no relacionamento.

##### Retorno

( _string_ )

Nome da coluna.

---

## getSubRelations

---

#### <span style="color: #008000">getSubRelations</span>() : <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>
##### Descrição

Retorna os sub relacionamentos do objeto atual.

##### Retorno

( _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ )

Sub relacionamentos

---

## getTableName

---

#### <span style="color: #008000">getTableName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome da tabela a ser relacionado.

##### Retorno

( _string_ )

Nome da tabela.

---

## getType

---

#### <span style="color: #008000">getType</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.join.RelationType</span>
##### Descrição

Retorna o tipo do relacionamento.

##### Retorno

( _org.netuno.tritao.query.join.RelationType_ )

Tipo do relacionamento.

---

## getWhere

---

#### <span style="color: #008000">getWhere</span>() : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Retorna as configurações do filtro.

##### Retorno

( _[Where](../../objects/Where)_ )

Configurações do filtro.

---

## join

---

#### <span style="color: #008000">join</span>(<span style="color: #FF8000">relacao</span>: <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define um segundo nivel de relação INNER JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relation](../../objects/Relation)_ | Relação INNER JOIN de segundo nivel. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

## leftJoin

---

#### <span style="color: #008000">leftJoin</span>(<span style="color: #FF8000">relacao</span>: <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define um segundo nivel de relação LEFT JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relation](../../objects/Relation)_ | Relação LEFT JOIN de segundo nivel. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

## rightJoin

---

#### <span style="color: #008000">rightJoin</span>(<span style="color: #FF8000">relacao</span>: <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define um segundo nivel de relação RIGHT JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relation](../../objects/Relation)_ | Relação RIGHT JOIN de segundo nivel. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

## setColumn

---

#### <span style="color: #008000">setColumn</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define o nome da coluna que será usada no relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

## setSubRelations

---

#### <span style="color: #008000">setSubRelations</span>(<span style="color: #FF8000">subRelacionamentos</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define os sub relacionamentos do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subRelacionamentos** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Sub relacionamentos. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

## setTableName

---

#### <span style="color: #008000">setTableName</span>(<span style="color: #FF8000">tabelaNome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define o nome da tabela a ser relacionado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabelaNome** | _string_ | Nome da tabela. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

## setType

---

#### <span style="color: #008000">setType</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.join.RelationType</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define o tipo do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _org.netuno.tritao.query.join.RelationType_ | Tipo do relacionamento. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

## setWhere

---

#### <span style="color: #008000">setWhere</span>(<span style="color: #FF8000">filtro</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Define as configurações do filtro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _[Where](../../objects/Where)_ | Configurações do filtro. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Objeto Relation atual.

---

