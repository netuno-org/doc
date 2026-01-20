---
id: Operation
title: Operation
sidebar_label: Operation
---

Definição da configuração do objeto Operation para operações em base de dados.

---

## all

---

#### all() : java.util.List
##### Descrição

Retorna todos os registros resultantes da execução da consulta, caso nenhum, retorna uma lista vazia.

##### Retorno

( _java.util.List_ )

Lista de registros.

---

## debug

---

#### debug(activo: boolean) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define se o debug está ativo ou não na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se o debug está ativo ou não. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## delete

---

#### delete() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### delete(forms: java.lang.String[]) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forms** | _java.lang.String[]_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## distinct

---

#### distinct(activo: boolean) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define se será aplicado o comando DISTINCT á consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se será aplicado ou não. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## first

---

#### first() : [Values](/docs/library/objects/Values)
##### Descrição

Retorna o primeiro registro resultante da execução da consulta, caso nenhum, retorna null.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Primeiro registro do resultado.

---

## get

---

#### get(column: string) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

#### get(column: string, alias: string) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |
| **alias** | _string_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

## getFieldsToGet

---

#### getFieldsToGet() : java.util.List
##### Descrição

Retorna os campos que serão obtidos na consulta.

##### Retorno

( _java.util.List_ )

Campos que serão obtidos na consulta.

---

## getFieldsToSet

---

#### getFieldsToSet() : java.util.List
##### Retorno

( _java.util.List_ )


---

## getFormName

---

#### getFormName() : string
##### Descrição

Retorna o nome da tabela principal da consulta.

##### Retorno

( _string_ )

Nome da tabela principal da consulta.

---

## getGroup

---

#### getGroup() : [Group](/docs/library/objects/Group)
##### Descrição

Retorna o objeto de agrupamento da consulta.

##### Retorno

( _[Group](/docs/library/objects/Group)_ )

Objeto de agrupamento da consulta.

---

## getJoin

---

#### getJoin() : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Descrição

Retorna os objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

##### Retorno

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

Objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

---

## getLimit

---

#### getLimit() : int
##### Retorno

( _int_ )


---

## getOrder

---

#### getOrder() : [Order](/docs/library/objects/Order)
##### Descrição

Retorna o objeto de ordenação da consulta.

##### Retorno

( _[Order](/docs/library/objects/Order)_ )

Objeto de ordenação da consulta.

---

## getPagination

---

#### getPagination() : org.netuno.tritao.db.form.pagination.Pagination
##### Descrição

Retorna o objeto de configuração da paginação (se houver) da consulta.

##### Retorno

( _org.netuno.tritao.db.form.pagination.Pagination_ )

Objeto de configuração da paginação (se houver) da consulta.

---

## getTablesToPopulate

---

#### getTablesToPopulate() : java.util.List
##### Retorno

( _java.util.List_ )


---

## getWhere

---

#### getWhere() : [Where](/docs/library/objects/Where)
##### Descrição

Retorna o object Where referente a tabela principal da consulta.

##### Retorno

( _[Where](/docs/library/objects/Where)_ )

Objeto Where da tabela principal da consulta.

---

## group

---

#### group(order: java.lang.String[]) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o objeto de agrupamento da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _java.lang.String[]_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

#### group(order: string) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o objeto de agrupamento da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _string_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## insert

---

#### insert() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## isDebug

---

#### isDebug() : boolean
##### Descrição

Retorna se o debug está ativo ou não na consulta.

##### Retorno

( _boolean_ )

Se o debug está ativo ou não na consulta.

---

## isDistinct

---

#### isDistinct() : boolean
##### Descrição

Retorna se será aplicado o comando DISTINCT á consulta.

##### Retorno

( _boolean_ )

Se será aplicado ou não.

---

## join

---

#### join(relacao: [Relationship](/docs/library/objects/Relationship)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define uma relacão de tipo INNER JOIN com uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](/docs/library/objects/Relationship)_ | Relação do tipo INNER JOIN. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## leftJoin

---

#### leftJoin(relacao: [Relationship](/docs/library/objects/Relationship)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define uma relacão de tipo LEFT JOIN com uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](/docs/library/objects/Relationship)_ | Relação do tipo LEFT JOIN. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## limit

---

#### limit(limit: int) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **limit** | _int_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

## link

---

#### link(formLink: string) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os criterios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

#### link(formLink: string, link: [Link](/docs/library/objects/Link)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os critérios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **link** | _[Link](/docs/library/objects/Link)_ | Objeto Link com uma subrelação. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

#### link(formLink: string, where: [Where](/docs/library/objects/Where)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os criterios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **where** | _[Where](/docs/library/objects/Where)_ | Objeto Where com as condições referente ao formulario que deseja relacionar. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

#### link(formLink: string, where: [Where](/docs/library/objects/Where), link: [Link](/docs/library/objects/Link)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os critérios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **where** | _[Where](/docs/library/objects/Where)_ | Objeto Where com as condições referente ao formulario que deseja relacionar. |
| **link** | _[Link](/docs/library/objects/Link)_ | Objeto Link com uma subrelação. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

#### link(formLink: [Link](/docs/library/objects/Link)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os criterios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _[Link](/docs/library/objects/Link)_ | Formulario a ser relacionada. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## order

---

#### order(coluna: string, sentido: string) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define a ordenação da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna para ordenação. |
| **sentido** | _string_ | Sentido da ordenação. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## page

---

#### page(page: int, size: int) : [Values](/docs/library/objects/Values)
##### Descrição

Retorna Pagina com os items resultante da execução da consulta de forma paginada e demais dados da paginação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **page** | _int_ | Numero da página de rigistos. |
| **size** | _int_ | Quantidade de registos por página. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Pagina com os items e demais dados da paginação.

---

#### page(paginacao: org.netuno.tritao.db.form.pagination.Pagination) : [Values](/docs/library/objects/Values)
##### Descrição

Retorna Pagina com os items resultante da execução da consulta de forma paginada e demais dados da paginação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **paginacao** | _org.netuno.tritao.db.form.pagination.Pagination_ | Objeto Pagination com as configurações da paginação. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Pagina com os items e demais dados da paginação.

---

## populate

---

#### populate(table: string, filter: org.netuno.tritao.db.form.Field) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _org.netuno.tritao.db.form.Field_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

#### populate(table: string, filter: org.netuno.tritao.db.form.Field, fields: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _org.netuno.tritao.db.form.Field_ |   |
| **fields** | _java.util.List_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

## rightJoin

---

#### rightJoin(relacao: [Relationship](/docs/library/objects/Relationship)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define uma relacão de tipo RIGHT JOIN com uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](/docs/library/objects/Relationship)_ | Relação do tipo RIGHT JOIN. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## set

---

#### set(column: string, value: java.lang.Object) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

## setDebug

---

#### setDebug(activo: boolean) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define se o debug está ativo ou não na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se o debug está ativo ou não. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setDistinct

---

#### setDistinct(activo: boolean) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define se será aplicado o comando DISTINCT á consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se será aplicado ou não. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setFieldsToGet

---

#### setFieldsToGet(campos: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define os campos que serão obtidos na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | Campos que serão obtidos na consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setFieldsToSet

---

#### setFieldsToSet(fieldsToSet: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldsToSet** | _java.util.List_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

## setFormName

---

#### setFormName(nomeTabela: string) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o nome da tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela principal. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setGroup

---

#### setGroup(order: [Group](/docs/library/objects/Group)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o objeto de agrupamento da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _[Group](/docs/library/objects/Group)_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setJoin

---

#### setJoin(join: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define os objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **join** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Objetos Join (tabelas relacionadas) referente a tabela principal da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setLimit

---

#### setLimit(limit: int) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **limit** | _int_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

## setOrder

---

#### setOrder(order: [Order](/docs/library/objects/Order)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o objeto de ordenação da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _[Order](/docs/library/objects/Order)_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setPagination

---

#### setPagination(paginacao: org.netuno.tritao.db.form.pagination.Pagination) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o objeto de configuração da paginação (se houver) da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **paginacao** | _org.netuno.tritao.db.form.pagination.Pagination_ | objeto de configuração da paginação da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## setTablesToPopulate

---

#### setTablesToPopulate(tablesToPopulate: java.util.List) : [Operation](/docs/library/objects/Operation)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tablesToPopulate** | _java.util.List_ |   |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )


---

## setWhere

---

#### setWhere(where: [Where](/docs/library/objects/Where)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o object Where referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Objeto Where da tabela principal da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

## update

---

#### update() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## where

---

#### where(where: [Where](/docs/library/objects/Where)) : [Operation](/docs/library/objects/Operation)
##### Descrição

Define o object Where referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](/docs/library/objects/Where)_ | Objeto Where da tabela principal da consulta. |

##### Retorno

( _[Operation](/docs/library/objects/Operation)_ )

Objeto Query atual.

---

