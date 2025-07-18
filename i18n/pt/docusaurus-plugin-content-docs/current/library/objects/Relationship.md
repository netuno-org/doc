---
id: Relationship
title: Relationship
sidebar_label: Relationship
---

Definição da configuração do objeto Relation para configurar relacionamentos entre tabelas com Join.

---

## getColumn

---

#### <span style={{color: '#008000'}}>getColumn</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome da coluna que será usada no relacionamento.

##### Retorno

( _string_ )

Nome da coluna.

---

## getSubRelations

---

#### <span style={{color: '#008000'}}>getSubRelations</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Descrição

Retorna os sub relacionamentos do objeto atual.

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )

Sub relacionamentos

---

## getTableName

---

#### <span style={{color: '#008000'}}>getTableName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome da tabela a ser relacionado.

##### Retorno

( _string_ )

Nome da tabela.

---

## getType

---

#### <span style={{color: '#008000'}}>getType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.RelationshipType</span>
##### Descrição

Retorna o tipo do relacionamento.

##### Retorno

( _org.netuno.tritao.db.form.join.RelationshipType_ )

Tipo do relacionamento.

---

## getWhere

---

#### <span style={{color: '#008000'}}>getWhere</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Retorna as configurações do filtro.

##### Retorno

( _[Where](../objects/Where)_ )

Configurações do filtro.

---

## join

---

#### <span style={{color: '#008000'}}>join</span>(<span style={{color: '#FF8000'}}>relacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define um segundo nivel de relação INNER JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](../objects/Relationship)_ | Relação INNER JOIN de segundo nivel. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## leftJoin

---

#### <span style={{color: '#008000'}}>leftJoin</span>(<span style={{color: '#FF8000'}}>relacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define um segundo nivel de relação LEFT JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](../objects/Relationship)_ | Relação LEFT JOIN de segundo nivel. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## rightJoin

---

#### <span style={{color: '#008000'}}>rightJoin</span>(<span style={{color: '#FF8000'}}>relacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define um segundo nivel de relação RIGHT JOIN no objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](../objects/Relationship)_ | Relação RIGHT JOIN de segundo nivel. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## setColumn

---

#### <span style={{color: '#008000'}}>setColumn</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define o nome da coluna que será usada no relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## setSubRelations

---

#### <span style={{color: '#008000'}}>setSubRelations</span>(<span style={{color: '#FF8000'}}>subRelacionamentos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define os sub relacionamentos do objeto atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subRelacionamentos** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ | Sub relacionamentos. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## setTableName

---

#### <span style={{color: '#008000'}}>setTableName</span>(<span style={{color: '#FF8000'}}>tabelaNome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define o nome da tabela a ser relacionado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabelaNome** | _string_ | Nome da tabela. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## setType

---

#### <span style={{color: '#008000'}}>setType</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.RelationshipType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define o tipo do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _org.netuno.tritao.db.form.join.RelationshipType_ | Tipo do relacionamento. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## setWhere

---

#### <span style={{color: '#008000'}}>setWhere</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define as configurações do filtro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _[Where](../objects/Where)_ | Configurações do filtro. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

## where

---

#### <span style={{color: '#008000'}}>where</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>
##### Descrição

Define as configurações do filtro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _[Where](../objects/Where)_ | Configurações do filtro. |

##### Retorno

( _[Relationship](../objects/Relationship)_ )

Objeto Relation atual.

---

