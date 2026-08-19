---
id: MongoProjections
title: MongoProjections
sidebar_label: MongoProjections
---

Definição das projeções em **Bson** que são utilizadas nas consultas das coleções do MongoDB para selecionar campos específicos.

---

## computed

---

#### <span style={{color: '#008000'}}>computed</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que adiciona um campo calculado ao resultado.

##### Como Usar

```javascript
_mongo.projections().computed('fullName', expression);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | O nome do campo de saída. |
| **expressão** | _org.bson.conversions.Bson_ | A expressão do campo calculado. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

## elemMatch

---

#### <span style={{color: '#008000'}}>elemMatch</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que inclui para o campo especificado apenas o primeiro elemento de um array que corresponde ao filtro da consulta.

##### Como Usar

```javascript
const docs = collection.find(_mongo.filters().gt('array', 7)).projection(_mongo.projections().elemMatch('array')).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | O nome do campo cujo valor é o array. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

#### <span style={{color: '#008000'}}>elemMatch</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que inclui para o campo informado apenas o primeiro elemento do valor do array desse campo que corresponda ao filtro de consulta informado.

##### Como Usar

```javascript
const docs = collection.find().projection(
  _mongo.projections().elemMatch(
    "orders",
    _mongo.filters().eq("status", "pending")
  )
).all();

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | O nome do campo. |
| **filtro** | _org.bson.conversions.Bson_ | O filtro a ser aplicado. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

## exclude

---

#### <span style={{color: '#008000'}}>exclude</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que exclui todos os campos informados.

##### Como Usar

```javascript
const docs = collection.find().projection(_mongo.projections().exclude('internalField')).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _string[]_ | Os nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

#### <span style={{color: '#008000'}}>exclude</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que exclui todos os campos de uma lista.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | A lista de nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

## excludeId

---

#### <span style={{color: '#008000'}}>excludeId</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que exclui o campo _id.

##### Como Usar

```javascript
const docs = collection.find().projection(_mongo.projections().excludeId()).all();
```

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

## fields

---

#### <span style={{color: '#008000'}}>fields</span>(<span style={{color: '#FF8000'}}>projeções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que combina a lista de projeções em uma única. Se houver chaves duplicadas, a última terá precedência.

##### Como Usar

```javascript
const docs = collection.find().projection( _mongo.projections().fields(
        _mongo.projections().include("name", "quantity"),
        _mongo.projections().excludeId()
        )
    ).all();


```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **projeções** | _org.bson.conversions.Bson[]_ | A lista de projeções a ser combinada. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção combinada.

---

#### <span style={{color: '#008000'}}>fields</span>(<span style={{color: '#FF8000'}}>projeções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que combina a lista de projeções a partir de uma lista.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **projeções** | _java.util.List_ | A lista de projeções a ser combinada. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção combinada.

---

## include

---

#### <span style={{color: '#008000'}}>include</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que inclui todos os campos informados.

##### Como Usar

```javascript
const docs = collection.find().projection(_mongo.projections().include('name', 'quantity')).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _string[]_ | Os nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

#### <span style={{color: '#008000'}}>include</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que inclui todos os campos de uma lista.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | A lista de nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

## slice

---

#### <span style={{color: '#008000'}}>slice</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>limite</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que retorna apenas os primeiros N elementos de um array.

##### Como Usar

```javascript
const docs = collection.find().projection(_mongo.projections().slice('tags', 5)).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | O nome do campo cujo valor é o array. |
| **limite** | _int_ | O número de elementos a serem retornados. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

#### <span style={{color: '#008000'}}>slice</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>pular</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>limite</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma projeção que pula N elementos e retorna os próximos M elementos de um array.

##### Como Usar

```javascript
const docs = collection.find().projection(_mongo.projections().slice('tags', 2, 5)).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | O nome do campo cujo valor é o array. |
| **pular** | _int_ | O número de elementos a serem pulados. |
| **limite** | _int_ | O número de elementos a serem retornados. |

##### Retorno

( _org.bson.conversions.Bson_ )

A projeção.

---

