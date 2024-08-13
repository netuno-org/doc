---
id: form
title: Form
sidebar_label: Form
---

Gerador do formulário da aplicação programaticamente.

---

## AND

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">AND</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>
##### Descrição

Retorna um operador condicional do tipo AND.

##### Retorno

( _org.netuno.tritao.query.where.ConditionOperator_ )

Operador condicional.

---

## OR

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">OR</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>
##### Descrição

Retorna um operador condicional do tipo OR.

##### Retorno

( _org.netuno.tritao.query.where.ConditionOperator_ )

Operador condicional.

---

## all

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Retorno

( _java.util.List_ )


---

## contains

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">contains</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que inclua o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## create

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">create</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponent

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponentIfNotExists

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createIfNotExists

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createIfNotExists</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## different

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">different</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que diferente do padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## endsWith

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">endsWith</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que termina com o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## field

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">field</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Field](../../objects/Field)</span>
##### Descrição

Retorna um campo baseado na coluna informada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna. |

##### Retorno

( _[Field](../../objects/Field)_ )

Objeto Field.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">field</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">elias</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Field](../../objects/Field)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |
| **elias** | _string_ |   |

##### Retorno

( _[Field](../../objects/Field)_ )


---

## fields

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">fields</span>(<span style="color: #FF8000">campos</span>: <span style="font-weight: normal; font-style: italic;">[Lorg.netuno.tritao.query.Field;[]</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Descrição

Lista com os campos baseado em colunas para serem retornados na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _[Lorg.netuno.tritao.query.Field;[]_ | Lista de campos |

##### Retorno

( _java.util.List_ )

Lista de campos.

---

## get

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getAllComponents

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## getComponent

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## greaterOrEqualsThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">greaterOrEqualsThan</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que seja maior ou igual que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## greaterThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">greaterThan</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que seja maior que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## in

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">in</span>(<span style="color: #FF8000">valores</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que seja igual a algum dos padrões informados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](../../objects/Values)_ | Volores da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## lessOrEqualsThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">lessOrEqualsThan</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que seja menor ou igual que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## lessThan

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">lessThan</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que seja menor que o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## link

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Descrição

Retorna uma relação com um formulário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Nome do formulário a ser relacionado. |

##### Retorno

( _[Link](../../objects/Link)_ )

Objeto Link.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Retorno

( _[Link](../../objects/Link)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>, <span style="color: #FF8000">link</span>: <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>) : <span style="font-weight: normal; font-style: italic;">[Link](../../objects/Link)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |
| **link** | _[Link](../../objects/Link)_ |   |

##### Retorno

( _[Link](../../objects/Link)_ )


---

## manyToOne

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">manyToOne</span>(<span style="color: #FF8000">tabelaNome</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">colunaNome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Retorna uma nova relação do tipo Many To One.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabelaNome** | _string_ | Nome da tabela. |
| **colunaNome** | _string_ | Nome da coluna. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Relação do tipo Many To One.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">manyToOne</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Retorno

( _[Relation](../../objects/Relation)_ )


---

## notNulls

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## oneToMany

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">oneToMany</span>(<span style="color: #FF8000">tabelaNome</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">colunaNome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Descrição

Retorna uma nova relação do tipo One To Many.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabelaNome** | _string_ | Nome da tabela. |
| **colunaNome** | _string_ | Nome da coluna. |

##### Retorno

( _[Relation](../../objects/Relation)_ )

Relação do tipo One To Many.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">oneToMany</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Relation](../../objects/Relation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tableName** | _string_ |   |
| **column** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Retorno

( _[Relation](../../objects/Relation)_ )


---

## pagination

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">pagination</span>(<span style="color: #FF8000">pagina</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">pageSize</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.pagination.Pagination</span>
##### Descrição

Retorna o objeto para configuração de paginação ao usar o metodo page() do Query.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pagina** | _int_ | Número da página. |
| **pageSize** | _int_ | Número de elementos por página. |

##### Retorno

( _org.netuno.tritao.query.pagination.Pagination_ )

Objeto Pagination.

---

## primaryKeys

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">primaryKeys</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">primaryKeys</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## query

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">query</span>(<span style="color: #FF8000">tabelaNome</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Retorna um novo objeto Query pronto para ser configurado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tabelaNome** | _string_ | Nome da tabela. |

##### Retorno

( _[Query](../../objects/Query)_ )

Novo objeto Query.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">query</span>(<span style="color: #FF8000">tableName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tableName** | _string_ |   |
| **where** | _[Where](../../objects/Where)_ |   |

##### Retorno

( _[Query](../../objects/Query)_ )


---

## startsWith

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">startsWith</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>
##### Descrição

Retorna um operador relacional que filtra qualquer ocorrência que inicia com o padrão informado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Volor da condição. |

##### Retorno

( _[RelationOperator](../../objects/RelationOperator)_ )

Operador relacional.

---

## where

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Retorna um novo objeto Where pronto para ser configurado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna. |
| **valor** | _java.lang.Object_ | Valor da condição. |

##### Retorno

( _[Where](../../objects/Where)_ )

Novo objeto Where.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">coluna</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Descrição

Retorna um novo objeto Where pronto para ser configurado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Nome da coluna. |
| **valor** | _[RelationOperator](../../objects/RelationOperator)_ | Valor da condição. |

##### Retorno

( _[Where](../../objects/Where)_ )

Novo objeto Where.

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">operator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _org.netuno.tritao.query.where.ConditionOperator_ |   |
| **column** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Where](../../objects/Where)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">where</span>(<span style="color: #FF8000">operator</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.ConditionOperator</span>, <span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">relationOperator</span>: <span style="font-weight: normal; font-style: italic;">[RelationOperator](../../objects/RelationOperator)</span>) : <span style="font-weight: normal; font-style: italic;">[Where](../../objects/Where)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **operator** | _org.netuno.tritao.query.where.ConditionOperator_ |   |
| **column** | _string_ |   |
| **relationOperator** | _[RelationOperator](../../objects/RelationOperator)_ |   |

##### Retorno

( _[Where](../../objects/Where)_ )


---

