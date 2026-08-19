---
id: MongoAggregates
title: MongoAggregates
sidebar_label: MongoAggregates
---

Definição das etapas do pipeline de agregação em **Bson** utilizadas nas operações de agregação do MongoDB.

---

## count

---

#### <span style={{color: '#008000'}}>count</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Conta o número de documentos de entrada.

##### Como Usar

```javascript
_mongo.aggregates().count();
```

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

## group

---

#### <span style={{color: '#008000'}}>group</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>acumuladores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Agrupa os documentos de entrada pelo campo especificado e aplica os acumuladores aos grupos resultantes.

##### Como Usar

```javascript
_mongo.aggregates().group('$customerId', _mongo.accumulators().sum('total', '$price'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _string_ | A expressão do campo de agrupamento. |
| **acumuladores** | _com.mongodb.client.model.BsonField[]_ | Os acumuladores a serem aplicados aos grupos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

#### <span style={{color: '#008000'}}>group</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>acumuladores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;com.mongodb.client.model.BsonField&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Agrupa os documentos de entrada pelo campo especificado e aplica os acumuladores aos grupos resultantes.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _string_ | A expressão do campo de agrupamento. |
| **acumuladores** | _java.util.List_ | Os acumuladores a serem aplicados aos grupos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

## limit

---

#### <span style={{color: '#008000'}}>limit</span>(<span style={{color: '#FF8000'}}>limite</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Limita os documentos de entrada aos primeiros N documentos.

##### Como Usar

```javascript
_mongo.aggregates().limit(5);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **limite** | _int_ | O número máximo de documentos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

## lookup

---

#### <span style={{color: '#008000'}}>lookup</span>(<span style={{color: '#FF8000'}}>coleção</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>campoLocal</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>campoEstrangeiro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>como</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Executa uma consulta de junção (join) com outra coleção.

##### Como Usar

```javascript
_mongo.aggregates().lookup('orders', 'customerId', '_id', 'orders');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coleção** | _string_ | O nome da coleção a ser joinada. |
| **campoLocal** | _string_ | O campo da coleção de entrada. |
| **campoEstrangeiro** | _string_ | O campo da coleção de origem. |
| **como** | _string_ | O nome do campo de saída. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

#### <span style={{color: '#008000'}}>lookup</span>(<span style={{color: '#FF8000'}}>coleção</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>pipeline</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>como</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Executa uma consulta de junção (join) com outra coleção usando um pipeline.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **coleção** | _string_ | O nome da coleção a ser joinada. |
| **pipeline** | _java.util.List_ | O pipeline de agregação a ser executado na coleção de origem. |
| **como** | _string_ | O nome do campo de saída. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

## match

---

#### <span style={{color: '#008000'}}>match</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Filtra os documentos de entrada para selecionar apenas os que correspondem ao filtro especificado.

##### Como Usar

```javascript
_mongo.aggregates().match(_mongo.filters().eq('status', 'Active'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | O filtro de consulta. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

## project

---

#### <span style={{color: '#008000'}}>project</span>(<span style={{color: '#FF8000'}}>projeção</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Transforma cada documento da entrada, adicionando, removendo ou alterando campos.

##### Como Usar

```javascript
_mongo.aggregates().project(_mongo.projections().include('name', 'quantity'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **projeção** | _org.bson.conversions.Bson_ | A especificação da projeção. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

## skip

---

#### <span style={{color: '#008000'}}>skip</span>(<span style={{color: '#FF8000'}}>pular</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Pula os primeiros N documentos da entrada.

##### Como Usar

```javascript
_mongo.aggregates().skip(10);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pular** | _int_ | O número de documentos a serem pulados. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

## sort

---

#### <span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>ordenação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Ordena os documentos de entrada.

##### Como Usar

```javascript
_mongo.aggregates().sort(_mongo.sorts().descending('date'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ordenação** | _org.bson.conversions.Bson_ | A especificação de ordenação. |

##### Retorno

( _org.bson.conversions.Bson_ )

A etapa de agregação Bson.

---

