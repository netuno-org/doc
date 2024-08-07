---
id: Link
title: Link
sidebar_label: Link
---

Definição da configuração do objeto Link para realcionamento entre formularios.

---

## getForm

---

#### <span style="color: #008000">getForm</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome do formulario principal da consulta.

##### Retorno

( _string_ )

Nome do formulario.

---

## getRelationLink

---

#### <span style="color: #008000">getRelationLink</span>() : <span style="font-weight: normal; font-style: italic;">[RelationLink](../../objects/RelationLink)</span>
##### Descrição

Retorna a configuração do relacionamento.

##### Retorno

( _[RelationLink](../../objects/RelationLink)_ )

Configuração do relacionamento.

---

## getWhere

---

#### <span style="color: #008000">getWhere</span>() : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Retorna a configuração dos filtros para o formulario principal do objeto Link.

##### Retorno

( _[Where](../../objects/Where)_ )

Configuração dos filtros.

---

## link

---

#### <span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Descrição

Define um segundo nivel de relacionamento no objeto Link atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Nome do formulario a relacionar. |

##### Retorno

( _[Link](../../objects/Link)_ )

Objeto Link atual.

---

## setForm

---

#### <span style="color: #008000">setForm</span>(<span style="color: #FF8000">formulario</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Descrição

Define o nome do formulario principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formulario** | _string_ | Nome do formulario. |

##### Retorno

( _[Link](../../objects/Link)_ )

Objeto Link atual.

---

## setRelationLink

---

#### <span style="color: #008000">setRelationLink</span>(<span style="color: #FF8000">relationLink</span>: <span style="font-weight: normal; font-style: italic;">[RelationLink](../../objects/RelationLink)</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Descrição

Define a configuração do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relationLink** | _[RelationLink](../../objects/RelationLink)_ | configuração do relacionamento. |

##### Retorno

( _[Link](../../objects/Link)_ )

Objeto Link atual.

---

## setWhere

---

#### <span style="color: #008000">setWhere</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Descrição

Define a configuração dos filtros para o formulario principal do objeto Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../../objects/Where)_ | configuração dos filtros. |

##### Retorno

( _[Link](../../objects/Link)_ )

Objeto Link atual.

---

