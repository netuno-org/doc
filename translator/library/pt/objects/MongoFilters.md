---
id: MongoFilters
title: MongoFilters
sidebar_label: MongoFilters
---

Definição dos filtros em **Bson** que são utilizados nas operações das coleções do MongoDB.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o array do campo especificado contém todos os valores fornecidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valores** | _java.lang.Object[]_ | Valores que o array deve conter. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>all</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o array do campo especificado contém todos os valores fornecidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valores** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Valores que o array deve conter. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## and

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filtros</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que todas as condições fornecidas são verdadeiras (E lógico).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtros** | _org.bson.conversions.Bson[]_ | Filtros a serem combinados com E lógico. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>and</span>(<span style={{color: '#FF8000'}}>filtros</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que todas as condições fornecidas são verdadeiras (E lógico).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtros** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Filtros a serem combinados com E lógico. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## empty

---

#### <span style={{color: '#008000'}}>empty</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro vazio que corresponde a todos os documentos na coleção.

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## eq

---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor é igual ao valor fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _java.lang.Object_ | Valor a ser comparado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>eq</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado é igual ao valor fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valor** | _java.lang.Object_ | Valor a ser comparado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## exists

---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o campo especificado existe.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>exists</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>existe</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o campo especificado existe ou não, de acordo com a flag fornecida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **existe** | _boolean_ | True para verificar se o campo existe, false para verificar se não existe. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## gt

---

#### <span style={{color: '#008000'}}>gt</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado é maior que o valor fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valor** | _java.lang.Object_ | Valor a ser comparado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## gte

---

#### <span style={{color: '#008000'}}>gte</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado é maior ou igual ao valor fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valor** | _java.lang.Object_ | Valor a ser comparado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## in

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado corresponde a qualquer um dos valores fornecidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valores** | _java.lang.Object[]_ | Valores a serem comparados. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>in</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado corresponde a qualquer um dos valores fornecidos na iterable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valores** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Valores a serem comparados. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## lt

---

#### <span style={{color: '#008000'}}>lt</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado é menor que o valor fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valor** | _java.lang.Object_ | Valor a ser comparado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## lte

---

#### <span style={{color: '#008000'}}>lte</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado é menor ou igual ao valor fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valor** | _java.lang.Object_ | Valor a ser comparado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

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

#### <span style={{color: '#008000'}}>ne</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado é diferente do valor fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valor** | _java.lang.Object_ | Valor a ser comparado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## nin

---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado não corresponde a nenhum dos valores fornecidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valores** | _java.lang.Object[]_ | Valores a serem comparados. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>nin</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado não corresponde a nenhum dos valores fornecidos na iterable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **valores** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Valores a serem comparados. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## nor

---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filtros</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que nenhuma das condições fornecidas é verdadeira (NÃO OU lógico).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtros** | _org.bson.conversions.Bson[]_ | Filtros a serem combinados com NÃO OU lógico. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>nor</span>(<span style={{color: '#FF8000'}}>filtros</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que nenhuma das condições fornecidas é verdadeira (NÃO OU lógico).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtros** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Filtros a serem combinados com NÃO OU lógico. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## not

---

#### <span style={{color: '#008000'}}>not</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que nega o filtro fornecido (NÃO lógico).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Filtro a ser negado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## or

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filtros</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que pelo menos uma das condições fornecidas é verdadeira (OU lógico).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtros** | _org.bson.conversions.Bson[]_ | Filtros a serem combinados com OU lógico. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>or</span>(<span style={{color: '#FF8000'}}>filtros</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que pelo menos uma das condições fornecidas é verdadeira (OU lógico).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtros** | _[Values](/docs/library/objects/Values)_ &#124; _[DataSchema](/docs/library/objects/DataSchema)_ | java.lang.Iterable | Filtros a serem combinados com OU lógico. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

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

Cria um filtro que corresponde a todos os documentos em que o valor do campo especificado corresponde ao padrão de expressão regular fornecido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **padrão** | _java.util.regex.Pattern_ | Padrão de expressão regular. |

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

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>busca</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos para os quais a expressão de busca em texto fornecida corresponde.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **busca** | _string_ | Texto a ser pesquisado. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>busca</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.TextSearchOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos para os quais a expressão de busca em texto fornecida corresponde, com as opções de busca em texto especificadas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **busca** | _string_ | Texto a ser pesquisado. |
| **opções** | _com.mongodb.client.model.TextSearchOptions_ | Opções de busca em texto. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

## type

---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o campo especificado é do tipo indicado pela string.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **tipo** | _string_ | Tipo do campo como string. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

---

#### <span style={{color: '#008000'}}>type</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.BsonType</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria um filtro que corresponde a todos os documentos em que o campo especificado é do tipo Bson indicado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo do documento. |
| **tipo** | _org.bson.BsonType_ | Tipo Bson do campo. |

##### Retorno

( _org.bson.conversions.Bson_ )

Retorna um filtro no formato Bson.

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

