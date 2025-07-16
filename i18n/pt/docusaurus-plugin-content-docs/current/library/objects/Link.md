---
id: Link
title: Link
sidebar_label: Link
---

Definição da configuração do objeto Link para realcionamento entre formularios.

---

## getForm

---

#### <span style={{color: '#008000'}}>getForm</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome do formulario principal da consulta.

##### Retorno

( _string_ )

Nome do formulario.

---

## getJoinType

---

#### <span style={{color: '#008000'}}>getJoinType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.JoinType</span>
##### Retorno

( _org.netuno.tritao.db.form.join.JoinType_ )


---

## getRelationLink

---

#### <span style={{color: '#008000'}}>getRelationLink</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](../objects/RelationshipLink)</span>
##### Descrição

Retorna a configuração do relacionamento.

##### Retorno

( _[RelationshipLink](../objects/RelationshipLink)_ )

Configuração do relacionamento.

---

## getWhere

---

#### <span style={{color: '#008000'}}>getWhere</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Retorna a configuração dos filtros para o formulario principal do objeto Link.

##### Retorno

( _[Where](../objects/Where)_ )

Configuração dos filtros.

---

## link

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Descrição

Define um segundo nivel de relacionamento no objeto Link atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Nome do formulario a relacionar. |

##### Retorno

( _[Link](../objects/Link)_ )

Objeto Link atual.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Descrição

Define um segundo nivel de relacionamento no objeto Link atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _[Link](../objects/Link)_ | Nome do formulario a relacionar. |

##### Retorno

( _[Link](../objects/Link)_ )

Objeto Link atual.

---

## setForm

---

#### <span style={{color: '#008000'}}>setForm</span>(<span style={{color: '#FF8000'}}>formulario</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Descrição

Define o nome do formulario principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formulario** | _string_ | Nome do formulario. |

##### Retorno

( _[Link](../objects/Link)_ )

Objeto Link atual.

---

## setJoinType

---

#### <span style={{color: '#008000'}}>setJoinType</span>(<span style={{color: '#FF8000'}}>joinType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.join.JoinType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **joinType** | _org.netuno.tritao.db.form.join.JoinType_ |   |

##### Retorno

( _[Link](../objects/Link)_ )


---

## setRelationLink

---

#### <span style={{color: '#008000'}}>setRelationLink</span>(<span style={{color: '#FF8000'}}>relationLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RelationshipLink](../objects/RelationshipLink)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Descrição

Define a configuração do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relationLink** | _[RelationshipLink](../objects/RelationshipLink)_ | configuração do relacionamento. |

##### Retorno

( _[Link](../objects/Link)_ )

Objeto Link atual.

---

## setWhere

---

#### <span style={{color: '#008000'}}>setWhere</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Descrição

Define a configuração dos filtros para o formulario principal do objeto Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | configuração dos filtros. |

##### Retorno

( _[Link](../objects/Link)_ )

Objeto Link atual.

---

## where

---

#### <span style={{color: '#008000'}}>where</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Descrição

Define a configuração dos filtros para o formulario principal do objeto Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | configuração dos filtros. |

##### Retorno

( _[Link](../objects/Link)_ )

Objeto Link atual.

---

## withInner

---

#### <span style={{color: '#008000'}}>withInner</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Retorno

( _[Link](../objects/Link)_ )


---

## withLeft

---

#### <span style={{color: '#008000'}}>withLeft</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Retorno

( _[Link](../objects/Link)_ )


---

## withRight

---

#### <span style={{color: '#008000'}}>withRight</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>
##### Retorno

( _[Link](../objects/Link)_ )


---

