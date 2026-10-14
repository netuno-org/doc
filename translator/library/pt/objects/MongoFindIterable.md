---
id: MongoFindIterable
title: MongoFindIterable
sidebar_label: MongoFindIterable
---

Processa as interações de pesquisas nas coleções do MongoDB.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Descrição

Retorna todos os documentos correspondentes como uma lista.

##### Como Usar

```javascript
const docs = collection.find().all();
```

##### Retorno

( _java.util.List_ )

A lista de todos os documentos encontrados.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Retorna o primeiro documento encontrado ou null se nenhum documento for encontrado.

##### Como Usar

```javascript
const doc = collection.find().first();
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O primeiro documento encontrado, ou null.

---

## forEach

---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>consumidor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Itera sobre os resultados usando um consumidor Java.

##### Como Usar

```javascript
collection.find().forEach((doc) => _out.println(doc.getString('name')));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumidor** | _java.util.function.Consumer_ | O consumidor a ser chamado para cada documento. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>função</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Itera sobre os resultados usando uma função poliglota GraalVM.

##### Como Usar

```javascript
collection.find().forEach((doc) => _out.println(doc.getString('name')));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **função** | _org.graalvm.polyglot.Value_ | A função a ser chamada para cada documento. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## hint

---

#### <span style={{color: '#008000'}}>hint</span>(<span style={{color: '#FF8000'}}>dica</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Fornece uma dica de índice para otimizar a consulta.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dica** | _org.bson.conversions.Bson_ | O documento de dica de índice. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## limit

---

#### <span style={{color: '#008000'}}>limit</span>(<span style={{color: '#FF8000'}}>limite</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Define o número máximo de resultados a serem retornados pela consulta.

##### Como Usar

```javascript
const docs = collection.find().limit(10).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **limite** | _int_ | O número máximo de resultados. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## max

---

#### <span style={{color: '#008000'}}>max</span>(<span style={{color: '#FF8000'}}>máximo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Define o limite superior exclusivo para um índice específico. Um valor nulo significa que nenhum limite máximo está definido.

##### Como Usar

```javascript
collection.createIndex(_mongo.indexes().compoundIndex(
  _mongo.indexes().descending('price'),
  _mongo.indexes().ascending('quantity')
));

const indexHint = _mongo.valToDoc(_val.map().set('price', 1)).append('quantity', -1);
const maxBound = _mongo.valToDoc(_val.map().set('price', 200)).append('quantity', 23);

const docs = collection.find().hint(indexHint).max(maxBound).all();

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **máximo** | _org.bson.conversions.Bson_ | O limite máximo. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## min

---

#### <span style={{color: '#008000'}}>min</span>(<span style={{color: '#FF8000'}}>mínimo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Define o limite inferior inclusivo para um índice específico. Um valor nulo significa que nenhum limite mínimo está definido.

##### Como Usar

```javascript
collection.createIndex(_mongo.indexes().compoundIndex(
  _mongo.indexes().descending('price'),
  _mongo.indexes().ascending('quantity')
));

const indexHint = _mongo.valToDoc(_val.map().set('price', 1)).append('quantity', -1);
const minBound = _mongo.valToDoc(_val.map().set('price', 50)).append('quantity', 10);

const docs = collection.find().hint(indexHint).min(minBound).all();

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mínimo** | _org.bson.conversions.Bson_ | O limite mínimo. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## projection

---

#### <span style={{color: '#008000'}}>projection</span>(<span style={{color: '#FF8000'}}>projeção</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Define um documento que descreve os campos a serem retornados para todos os documentos encontrados.

##### Como Usar

```javascript
const docs = collection.find().projection(_mongo.projections().include('name', 'quantity')).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **projeção** | _org.bson.conversions.Bson_ | O documento de projeção, que pode ser nulo. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## skip

---

#### <span style={{color: '#008000'}}>skip</span>(<span style={{color: '#FF8000'}}>pular</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Define o número de resultados a serem ignorados antes de retornar os documentos.

##### Como Usar

```javascript
const docs = collection.find().skip(5).limit(10).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pular** | _int_ | O número de resultados a serem ignorados. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

## sort

---

#### <span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>classificação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Define a ordem de classificação dos resultados da pesquisa.

##### Como Usar

```javascript
const docs = collection.find().sort(_mongo.sorts().ascending('name')).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **classificação** | _org.bson.conversions.Bson_ | O documento de classificação. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


---

