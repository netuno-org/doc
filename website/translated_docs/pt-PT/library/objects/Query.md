---
id: Query
title: Query
sidebar_label: Query
---

Definição da configuração do objeto Query para consultas simplificadas.

---

## all

---

#### <span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Descrição

Retorna todos os registros resultantes da execução da consulta, caso nenhum, retorna uma lista vazia.

##### Retorno

( _java.util.List_ )

Lista de registros.

---

## debug

---

#### <span style="color: #008000">debug</span>(<span style="color: #FF8000">activo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define se o debug está ativo ou não na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se o debug está ativo ou não. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## distinct

---

#### <span style="color: #008000">distinct</span>(<span style="color: #FF8000">activo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define se será aplicado o comando DISTINCT á consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se será aplicado ou não. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## fields

---

#### <span style="color: #008000">fields</span>(<span style="color: #FF8000">campos</span>: <span style="font-weight: normal; font-style: italic;">[Lorg.netuno.tritao.query.Field;[]</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define os campos que serão obtidos na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _[Lorg.netuno.tritao.query.Field;[]_ | Campos que serão obtidos na consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## first

---

#### <span style="color: #008000">first</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Retorna o primeiro registro resultante da execução da consulta, caso nenhum, retorna null.

##### Retorno

( _[Values](../../objects/Values)_ )

Primeiro registro do resultado.

---

## getFields

---

#### <span style="color: #008000">getFields</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Descrição

Retorna os campos que serão obtidos na consulta.

##### Retorno

( _java.util.List_ )

Campos que serão obtidos na consulta.

---

## getGroup

---

#### <span style="color: #008000">getGroup</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.Group</span>
##### Descrição

Retorna o objeto de agrupamento da consulta.

##### Retorno

( _org.netuno.tritao.query.Group_ )

Objeto de agrupamento da consulta.

---

## getJoin

---

#### <span style="color: #008000">getJoin</span>() : <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>
##### Descrição

Retorna os objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

##### Retorno

( _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ )

Objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

---

## getOrder

---

#### <span style="color: #008000">getOrder</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.Order</span>
##### Descrição

Retorna o objeto de ordenação da consulta.

##### Retorno

( _org.netuno.tritao.query.Order_ )

Objeto de ordenação da consulta.

---

## getPagination

---

#### <span style="color: #008000">getPagination</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.pagination.Pagination</span>
##### Descrição

Retorna o objeto de configuração da paginação (se houver) da consulta.

##### Retorno

( _org.netuno.tritao.query.pagination.Pagination_ )

Objeto de configuração da paginação (se houver) da consulta.

---

## getTableName

---

#### <span style="color: #008000">getTableName</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Retorna o nome da tabela principal da consulta.

##### Retorno

( _string_ )

Nome da tabela principal da consulta.

---

## getWhere

---

#### <span style="color: #008000">getWhere</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.Where</span>
##### Descrição

Retorna o object Where referente a tabela principal da consulta.

##### Retorno

( _org.netuno.tritao.query.where.Where_ )

Objeto Where da tabela principal da consulta.

---

## group

---

#### <span style="color: #008000">group</span>(<span style="color: #FF8000">order</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define o objeto de agrupamento da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _string_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## isDebug

---

#### <span style="color: #008000">isDebug</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se o debug está ativo ou não na consulta.

##### Retorno

( _boolean_ )

Se o debug está ativo ou não na consulta.

---

## isDistinct

---

#### <span style="color: #008000">isDistinct</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Retorna se será aplicado o comando DISTINCT á consulta.

##### Retorno

( _boolean_ )

Se será aplicado ou não.

---

## join

---

#### <span style="color: #008000">join</span>(<span style="color: #FF8000">join</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.join.Relation</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define os objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **join** | _org.netuno.tritao.query.join.Relation_ | Objetos Join (tabelas relacionadas) referente a tabela principal da consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## link

---

#### <span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os criterios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

#### <span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">link</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.link.Link</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os critérios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **link** | _org.netuno.tritao.query.link.Link_ | Objeto Link com uma subrelação. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

#### <span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.Where</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os criterios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **where** | _org.netuno.tritao.query.where.Where_ | Objeto Where com as condições referente ao formulario que deseja relacionar. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

#### <span style="color: #008000">link</span>(<span style="color: #FF8000">formLink</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.Where</span>, <span style="color: #FF8000">link</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.link.Link</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define um formulario para ser relacionado com a tabela principal da consulta usando os critérios do Link.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formLink** | _string_ | Formulario a ser relacionada. |
| **where** | _org.netuno.tritao.query.where.Where_ | Objeto Where com as condições referente ao formulario que deseja relacionar. |
| **link** | _org.netuno.tritao.query.link.Link_ | Objeto Link com uma subrelação. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## order

---

#### <span style="color: #008000">order</span>(<span style="color: #FF8000">column</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">order</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **column** | _string_ |   |
| **order** | _string_ |   |

##### Retorno

( _[Query](../../objects/Query)_ )


---

## page

---

#### <span style="color: #008000">page</span>(<span style="color: #FF8000">paginacao</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.pagination.Pagination</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Retorna Pagina com os items resultante da execução da consulta de forma paginada e demais dados da paginação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **paginacao** | _org.netuno.tritao.query.pagination.Pagination_ | Objeto Pagination com as configurações da paginação. |

##### Retorno

( _[Values](../../objects/Values)_ )

Pagina com os items e demais dados da paginação.

---

## setDebug

---

#### <span style="color: #008000">setDebug</span>(<span style="color: #FF8000">activo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define se o debug está ativo ou não na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se o debug está ativo ou não. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setDistinct

---

#### <span style="color: #008000">setDistinct</span>(<span style="color: #FF8000">activo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define se será aplicado o comando DISTINCT á consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **activo** | _boolean_ | Se será aplicado ou não. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setFields

---

#### <span style="color: #008000">setFields</span>(<span style="color: #FF8000">campos</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define os campos que serão obtidos na consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | Campos que serão obtidos na consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setGroup

---

#### <span style="color: #008000">setGroup</span>(<span style="color: #FF8000">order</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.Group</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define o objeto de agrupamento da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _org.netuno.tritao.query.Group_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setJoin

---

#### <span style="color: #008000">setJoin</span>(<span style="color: #FF8000">join</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define os objetos Join (tabelas relacionadas) referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **join** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ | Objetos Join (tabelas relacionadas) referente a tabela principal da consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setOrder

---

#### <span style="color: #008000">setOrder</span>(<span style="color: #FF8000">order</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.Order</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define o objeto de ordenação da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **order** | _org.netuno.tritao.query.Order_ | Objeto de ordenação da consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setPagination

---

#### <span style="color: #008000">setPagination</span>(<span style="color: #FF8000">paginacao</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.pagination.Pagination</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define o objeto de configuração da paginação (se houver) da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **paginacao** | _org.netuno.tritao.query.pagination.Pagination_ | objeto de configuração da paginação da consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setTableName

---

#### <span style="color: #008000">setTableName</span>(<span style="color: #FF8000">nomeTabela</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define o nome da tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeTabela** | _string_ | Nome da tabela principal. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

## setWhere

---

#### <span style="color: #008000">setWhere</span>(<span style="color: #FF8000">where</span>: <span style="font-weight: normal; font-style: italic;">org.netuno.tritao.query.where.Where</span>) : <span style="font-weight: normal; font-style: italic;">[Query](../../objects/Query)</span>
##### Descrição

Define o object Where referente a tabela principal da consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **where** | _org.netuno.tritao.query.where.Where_ | Objeto Where da tabela principal da consulta. |

##### Retorno

( _[Query](../../objects/Query)_ )

Objeto Query atual.

---

