---
id: RelationshipLink
title: RelationshipLink
sidebar_label: RelationshipLink
---

Definição da configuração do objeto RelationLink para configurar realcionamentos entre formularios.

---

## getFormLink

---

#### getFormLink() : string
##### Descrição

Retorna o nome do formulario a ser relacionado.

##### Retorno

( _string_ )

Nome do formulario.

---

## getSubLinks

---

#### getSubLinks() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Descrição

Retorna os sub relacionamentos.

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

Sub relacionamentos.

---

## hasSubLinks

---

#### hasSubLinks() : boolean
##### Descrição

Retorna se o objeto atual possui sub relacionamentos.

##### Retorno

( _boolean_ )

Se possui ou não.

---

## setFormLink

---

#### setFormLink(formulario: string) : [RelationshipLink](/docs/library/objects/RelationshipLink)
##### Descrição

Define o nome do formulario a ser relacionado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formulario** | _string_ | Nome do formulario. |

##### Retorno

( _[RelationshipLink](/docs/library/objects/RelationshipLink)_ )

Objeto RelationLink atual.

---

## setSubLinks

---

#### setSubLinks(subRelacionamentos: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [RelationshipLink](/docs/library/objects/RelationshipLink)
##### Descrição

Define os sub relacionamentos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subRelacionamentos** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Sub relacionamentos. |

##### Retorno

( _[RelationshipLink](/docs/library/objects/RelationshipLink)_ )

Objeto RelationLink atual.

---

