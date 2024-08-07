---
id: RelationLink
title: RelationLink
sidebar_label: RelationLink
---

Definição da configuração do objeto RelationLink para configurar realcionamentos entre formularios.

---

## getFormLink

---

#### <span style="color: #008000">getFormLink</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome do formulario a ser relacionado.

##### Retorno

( _string_ )

Nome do formulario.

---

## getSubLinks

---

#### <span style="color: #008000">getSubLinks</span>() : <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>
##### Descrição

Retorna os sub relacionamentos.

##### Retorno

( _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ )

Sub relacionamentos.

---

## hasSubLinks

---

#### <span style="color: #008000">hasSubLinks</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o objeto atual possui sub relacionamentos.

##### Retorno

( _boolean_ )

Se possui ou não.

---

## setFormLink

---

#### <span style="color: #008000">setFormLink</span>(<span style="color: #FF8000">formulario</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RelationLink](../../objects/RelationLink)</span>
##### Descrição

Define o nome do formulario a ser relacionado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formulario** | _string_ | Nome do formulario. |

##### Retorno

( _[RelationLink](../../objects/RelationLink)_ )

Objeto RelationLink atual.

---

## setSubLinks

---

#### <span style="color: #008000">setSubLinks</span>(<span style="color: #FF8000">subRelacionamentos</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[RelationLink](../../objects/RelationLink)</span>
##### Descrição

Define os sub relacionamentos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **subRelacionamentos** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Sub relacionamentos. |

##### Retorno

( _[RelationLink](../../objects/RelationLink)_ )

Objeto RelationLink atual.

---

