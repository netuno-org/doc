---
id: Link
title: Link
sidebar_label: Link
---

Definição da configuração do objeto Link para realcionamento entre formularios.

---

## getForm

---

#### getForm() : string
##### Descrição

Retorna o nome do formulario principal da consulta.

##### Retorno

( _string_ )

Nome do formulario.

---

## getJoinType

---

#### getJoinType() : org.netuno.tritao.db.form.join.JoinType
##### Retorno

( _org.netuno.tritao.db.form.join.JoinType_ )


---

## getRelationLink

---

#### getRelationLink() : [RelationshipLink](/docs/library/objects/RelationshipLink)
##### Descrição

Retorna a configuração do relacionamento.

##### Retorno

( _[RelationshipLink](/docs/library/objects/RelationshipLink)_ )

Configuração do relacionamento.

---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Descrição

Retorna a configuração dos filtros para o formulario principal do objeto Link.

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Configuração dos filtros.

---

## link

---

#### link(formLink: string) : [Link](/docs/library/objects/Link)
##### Descrição

Define um segundo nivel de relacionamento no objeto Link atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Nome do formulario a relacionar. |

##### Retorno

( _[Link](/docs/library/objects/Link)_ )

Objeto Link atual.

---

#### link(formLink: [Link](/docs/library/objects/Link)) : [Link](/docs/library/objects/Link)
##### Descrição

Define um segundo nivel de relacionamento no objeto Link atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _[Link](/docs/library/objects/Link)_ | Nome do formulario a relacionar. |

##### Retorno

( _[Link](/docs/library/objects/Link)_ )

Objeto Link atual.

---

## setForm

---

#### setForm(formulario: string) : [Link](/docs/library/objects/Link)
##### Descrição

Define o nome do formulario principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formulario** | _string_ | Nome do formulario. |

##### Retorno

( _[Link](/docs/library/objects/Link)_ )

Objeto Link atual.

---

## setJoinType

---

#### setJoinType(joinType: org.netuno.tritao.db.form.join.JoinType) : [Link](/docs/library/objects/Link)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **joinType** | _org.netuno.tritao.db.form.join.JoinType_ |   |

##### Retorno

( _[Link](/docs/library/objects/Link)_ )


---

## setRelationLink

---

#### setRelationLink(relationLink: [RelationshipLink](/docs/library/objects/RelationshipLink)) : [Link](/docs/library/objects/Link)
##### Descrição

Define a configuração do relacionamento.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relationLink** | _[RelationshipLink](/docs/library/objects/RelationshipLink)_ | configuração do relacionamento. |

##### Retorno

( _[Link](/docs/library/objects/Link)_ )

Objeto Link atual.

---

## setWhere

---

#### setWhere(where: [Where](/docs/library/objects/Where)) : [Link](/docs/library/objects/Link)
##### Descrição

Define a configuração dos filtros para o formulario principal do objeto Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | configuração dos filtros. |

##### Retorno

( _[Link](/docs/library/objects/Link)_ )

Objeto Link atual.

---

## where

---

#### where(where: [Where](/docs/library/objects/Where)) : [Link](/docs/library/objects/Link)
##### Descrição

Define a configuração dos filtros para o formulario principal do objeto Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | configuração dos filtros. |

##### Retorno

( _[Link](/docs/library/objects/Link)_ )

Objeto Link atual.

---

## withInner

---

#### withInner() : [Link](/docs/library/objects/Link)
##### Retorno

( _[Link](/docs/library/objects/Link)_ )


---

## withLeft

---

#### withLeft() : [Link](/docs/library/objects/Link)
##### Retorno

( _[Link](/docs/library/objects/Link)_ )


---

## withRight

---

#### withRight() : [Link](/docs/library/objects/Link)
##### Retorno

( _[Link](/docs/library/objects/Link)_ )


---

