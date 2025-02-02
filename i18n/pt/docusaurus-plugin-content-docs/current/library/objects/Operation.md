---
id: Operation
title: Operation
sidebar_label: Operation
---

Definição da configuração do objeto Operation para operações em base de dados.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Retorna todos os registros resultantes da execução da consulta, caso nenhum, retorna uma lista vazia.

##### Retorno

( _java.util.List_ )

Lista de registros.

---

## debug

---

#### <span style={{color: '#008000'}}>debug</span>(<span style={{color: '#FF8000'}}>activo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define se o debug está ativo ou não na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se o debug está ativo ou não. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## delete

---

#### <span style={{color: '#008000'}}>delete</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

#### <span style={{color: '#008000'}}>delete</span>(<span style={{color: '#FF8000'}}>forms</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **forms** | _java.lang.String[]_ |   |

##### Retorno

( _[Values](../objects/Values)_ )


---

## distinct

---

#### <span style={{color: '#008000'}}>distinct</span>(<span style={{color: '#FF8000'}}>activo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define se será aplicado o comando DISTINCT á consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se será aplicado ou não. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Retorna o primeiro registro resultante da execução da consulta, caso nenhum, retorna null.

##### Retorno

( _[Values](../objects/Values)_ )

Primeiro registro do resultado.

---

## get

---

#### <span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

#### <span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>alias</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |
| **alias** | _string_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

## getFields

---

#### <span style={{color: '#008000'}}>getFields</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Retorna os campos que serão obtidos na consulta.

##### Retorno

( _java.util.List_ )

Campos que serão obtidos na consulta.

---

## getFormName

---

#### <span style={{color: '#008000'}}>getFormName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Retorna o nome da tabela principal da consulta.

##### Retorno

( _string_ )

Nome da tabela principal da consulta.

---

## getGroup

---

#### <span style={{color: '#008000'}}>getGroup</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Group](../objects/Group)</span>
##### Descrição

Retorna o objeto de agrupamento da consulta.

##### Retorno

( _[Group](../objects/Group)_ )

Objeto de agrupamento da consulta.

---

## getJoin

---

#### <span style={{color: '#008000'}}>getJoin</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Descrição

Retorna os objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

##### Retorno

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )

Objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

---

## getLimit

---

#### <span style={{color: '#008000'}}>getLimit</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## getOrder

---

#### <span style={{color: '#008000'}}>getOrder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Order](../objects/Order)</span>
##### Descrição

Retorna o objeto de ordenação da consulta.

##### Retorno

( _[Order](../objects/Order)_ )

Objeto de ordenação da consulta.

---

## getPagination

---

#### <span style={{color: '#008000'}}>getPagination</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.pagination.Pagination</span>
##### Descrição

Retorna o objeto de configuração da paginação (se houver) da consulta.

##### Retorno

( _org.netuno.tritao.db.form.pagination.Pagination_ )

Objeto de configuração da paginação (se houver) da consulta.

---

## getTablesToPopulate

---

#### <span style={{color: '#008000'}}>getTablesToPopulate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Retorno

( _java.util.List_ )


---

## getWhere

---

#### <span style={{color: '#008000'}}>getWhere</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>
##### Descrição

Retorna o object Where referente a tabela principal da consulta.

##### Retorno

( _[Where](../objects/Where)_ )

Objeto Where da tabela principal da consulta.

---

## group

---

#### <span style={{color: '#008000'}}>group</span>(<span style={{color: '#FF8000'}}>order</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define o objeto de agrupamento da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _string_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## insert

---

#### <span style={{color: '#008000'}}>insert</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## isDebug

---

#### <span style={{color: '#008000'}}>isDebug</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se o debug está ativo ou não na consulta.

##### Retorno

( _boolean_ )

Se o debug está ativo ou não na consulta.

---

## isDistinct

---

#### <span style={{color: '#008000'}}>isDistinct</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Retorna se será aplicado o comando DISTINCT á consulta.

##### Retorno

( _boolean_ )

Se será aplicado ou não.

---

## join

---

#### <span style={{color: '#008000'}}>join</span>(<span style={{color: '#FF8000'}}>relacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define uma relacão de tipo INNER JOIN com uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](../objects/Relationship)_ | Relação do tipo INNER JOIN. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## leftJoin

---

#### <span style={{color: '#008000'}}>leftJoin</span>(<span style={{color: '#FF8000'}}>relacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define uma relacão de tipo LEFT JOIN com uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](../objects/Relationship)_ | Relação do tipo LEFT JOIN. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## limit

---

#### <span style={{color: '#008000'}}>limit</span>(<span style={{color: '#FF8000'}}>limit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **limit** | _int_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

## link

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os criterios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>link</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os critérios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **link** | _[Link](../objects/Link)_ | Objeto Link com uma subrelação. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os criterios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **where** | _[Where](../objects/Where)_ | Objeto Where com as condições referente ao formulario que deseja relacionar. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

#### <span style={{color: '#008000'}}>link</span>(<span style={{color: '#FF8000'}}>formLink</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>, <span style={{color: '#FF8000'}}>link</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Link](../objects/Link)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os critérios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **where** | _[Where](../objects/Where)_ | Objeto Where com as condições referente ao formulario que deseja relacionar. |
| **link** | _[Link](../objects/Link)_ | Objeto Link com uma subrelação. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## order

---

#### <span style={{color: '#008000'}}>order</span>(<span style={{color: '#FF8000'}}>coluna</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>sentido</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define a ordenação da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coluna** | _string_ | Coluna para ordenação. |
| **sentido** | _string_ | Sentido da ordenação. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## page

---

#### <span style={{color: '#008000'}}>page</span>(<span style={{color: '#FF8000'}}>paginacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.pagination.Pagination</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Retorna Pagina com os items resultante da execução da consulta de forma paginada e demais dados da paginação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **paginacao** | _org.netuno.tritao.db.form.pagination.Pagination_ | Objeto Pagination com as configurações da paginação. |

##### Retorno

( _[Values](../objects/Values)_ )

Pagina com os items e demais dados da paginação.

---

## populate

---

#### <span style={{color: '#008000'}}>populate</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.Field</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _org.netuno.tritao.db.form.Field_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

#### <span style={{color: '#008000'}}>populate</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.Field</span>, <span style={{color: '#FF8000'}}>fields</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **filter** | _org.netuno.tritao.db.form.Field_ |   |
| **fields** | _java.util.List_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

## rightJoin

---

#### <span style={{color: '#008000'}}>rightJoin</span>(<span style={{color: '#FF8000'}}>relacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Relationship](../objects/Relationship)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define uma relacão de tipo RIGHT JOIN com uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relacao** | _[Relationship](../objects/Relationship)_ | Relação do tipo RIGHT JOIN. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## set

---

#### <span style={{color: '#008000'}}>set</span>(<span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

## setDebug

---

#### <span style={{color: '#008000'}}>setDebug</span>(<span style={{color: '#FF8000'}}>activo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define se o debug está ativo ou não na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se o debug está ativo ou não. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setDistinct

---

#### <span style={{color: '#008000'}}>setDistinct</span>(<span style={{color: '#FF8000'}}>activo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define se será aplicado o comando DISTINCT á consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se será aplicado ou não. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setFields

---

#### <span style={{color: '#008000'}}>setFields</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define os campos que serão obtidos na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | Campos que serão obtidos na consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setFormName

---

#### <span style={{color: '#008000'}}>setFormName</span>(<span style={{color: '#FF8000'}}>nomeTabela</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define o nome da tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela principal. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setGroup

---

#### <span style={{color: '#008000'}}>setGroup</span>(<span style={{color: '#FF8000'}}>order</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Group](../objects/Group)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define o objeto de agrupamento da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _[Group](../objects/Group)_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setJoin

---

#### <span style={{color: '#008000'}}>setJoin</span>(<span style={{color: '#FF8000'}}>join</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define os objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **join** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ | Objetos Join (tabelas relacionadas) referente a tabela principal da consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setLimit

---

#### <span style={{color: '#008000'}}>setLimit</span>(<span style={{color: '#FF8000'}}>limit</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **limit** | _int_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

## setOrder

---

#### <span style={{color: '#008000'}}>setOrder</span>(<span style={{color: '#FF8000'}}>order</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Order](../objects/Order)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define o objeto de ordenação da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _[Order](../objects/Order)_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setPagination

---

#### <span style={{color: '#008000'}}>setPagination</span>(<span style={{color: '#FF8000'}}>paginacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.form.pagination.Pagination</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define o objeto de configuração da paginação (se houver) da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **paginacao** | _org.netuno.tritao.db.form.pagination.Pagination_ | objeto de configuração da paginação da consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## setTablesToPopulate

---

#### <span style={{color: '#008000'}}>setTablesToPopulate</span>(<span style={{color: '#FF8000'}}>tablesToPopulate</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tablesToPopulate** | _java.util.List_ |   |

##### Retorno

( _[Operation](../objects/Operation)_ )


---

## setWhere

---

#### <span style={{color: '#008000'}}>setWhere</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define o object Where referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | Objeto Where da tabela principal da consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

## update

---

#### <span style={{color: '#008000'}}>update</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Retorno

( _[Values](../objects/Values)_ )


---

## where

---

#### <span style={{color: '#008000'}}>where</span>(<span style={{color: '#FF8000'}}>where</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Where](../objects/Where)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Operation](../objects/Operation)</span>
##### Descrição

Define o object Where referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _[Where](../objects/Where)_ | Objeto Where da tabela principal da consulta. |

##### Retorno

( _[Operation](../objects/Operation)_ )

Objeto Query atual.

---

