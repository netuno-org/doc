---
id: MongoFilters
title: MongoFilters
sidebar_label: MongoFilters
---

Definição dos filtros em **Bson** que são utilizados nas operações das coleções do MongoDB.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _java.lang.Object[]_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## empty

---

#### <span style={{color: '#008000'}}>empty</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Retorno

( _org.bson.conversions.Bson_ )


---

## eq

---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## exists

---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>exists</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **exists** | _boolean_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## gt

---

#### <span style={{color: '#008000'}}>gt</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## gte

---

#### <span style={{color: '#008000'}}>gte</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## in

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _java.lang.Object[]_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## lt

---

#### <span style={{color: '#008000'}}>lt</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## lte

---

#### <span style={{color: '#008000'}}>lte</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## mod

---

#### <span style={{color: '#008000'}}>mod</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>divisor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>resto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor de um campo dividido por um divisor tem o resto especificado (ou seja, executa uma operação de módulo para selecionar documentos).

##### Como Usar

```javascript
_mongo.filters().mod('quantity', 5, 2);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **divisor** | _long_ | O módulo da operação. |
| **resto** | _long_ | O resto da operação. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## ne

---

#### <span style={{color: '#008000'}}>ne</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## nin

---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _java.lang.Object[]_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **values** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## nor

---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## not

---

#### <span style={{color: '#008000'}}>not</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filters** | _org.bson.conversions.Bson[]_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filters</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filters** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## regex

---

#### <span style={{color: '#008000'}}>regex</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>padrão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo corresponde ao padrão de expressão regular fornecido.

##### Como Usar

```javascript
_mongo.filters().regex('fieldName', 'regex');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **padrão** | _string_ | Expressão regular. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>regex</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>padrão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo corresponde ao padrão de expressão regular fornecido, com as opções dadas aplicadas.

##### Como Usar

```javascript
_mongo.filters().regex('fieldName', 'regex', 'i');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **padrão** | _string_ | Expressão regular. |
| **opções** | _string_ | Opções da regex. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>regex</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>padrão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.regex.Pattern</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo corresponde ao padrão de expressão regular fornecido.

##### Como Usar

```javascript
_mongo.filters().regex('fieldName', 'regex');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **padrão** | _java.util.regex.Pattern_ | Expressão regular. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## size

---

#### <span style={{color: '#008000'}}>size</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tamanho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos nos quais o valor de um campo é um array do tamanho especificado.

##### Como Usar

```javascript
_mongo.filters().size('fieldName', '3');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **tamanho** | _int_ | Tamanho do array. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## text

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>search</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **search** | _string_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>search</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>textSearchOptions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.TextSearchOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **search** | _string_ |   |
| **textSearchOptions** | _com.mongodb.client.model.TextSearchOptions_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## type

---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **type** | _string_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.BsonType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |
| **type** | _org.bson.BsonType_ |   |

##### Retorno

( _org.bson.conversions.Bson_ )


---

## where

---

#### <span style={{color: '#008000'}}>where</span>(<span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos para os quais a expressão fornecida é verdadeira.

##### Como Usar

```javascript
_mongo.filters().where('javascript-expression');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **expressão** | _string_ | Expressão JavaScript. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

