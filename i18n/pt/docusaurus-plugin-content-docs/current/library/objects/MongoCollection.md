---
id: MongoCollection
title: MongoCollection
sidebar_label: MongoCollection
---

Permite interagir com as coleções do MongoDB.

---

## aggregate

---

#### <span style={{color: '#008000'}}>aggregate</span>(<span style={{color: '#FF8000'}}>pipeline</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Descrição

Agrega documentos de acordo com o pipeline de agregação especificado.

##### Como Usar

```javascript
const docs = collection.aggregate(
  _mongo.aggregates().match(
    _mongo.filters().eq('status', 'Active')
  ),
  _mongo.aggregates().group(
    '$customerId',
    _mongo.accumulators().sum('total', '$price')
  ),
  _mongo.aggregates().project(
    _mongo.projections().fields(
      _mongo.projections().include('total'),
      _mongo.projections().excludeId()
    )
  )
).all();

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pipeline** | _org.bson.conversions.Bson[]_ | O pipeline de agregação. |

##### Retorno

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

Um iterável contendo o resultado da operação de agregação.

---

#### <span style={{color: '#008000'}}>aggregate</span>(<span style={{color: '#FF8000'}}>pipeline</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Descrição

Agrega documentos de acordo com o pipeline de agregação especificado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pipeline** | _java.util.List_ | O pipeline de agregação. |

##### Retorno

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

Um iterável contendo o resultado da operação de agregação.

---

## countDocuments

---

#### <span style={{color: '#008000'}}>countDocuments</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Conta o número de documentos na coleção.

##### Como Usar

```javascript
collection.countDocuments();
```

##### Retorno

( _long_ )

O número de documentos na coleção.

---

#### <span style={{color: '#008000'}}>countDocuments</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Conta o número de documentos na coleção.

##### Como Usar

```javascript
collection.countDocuments(_mongo.filters().eq('category', 'main'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | O filtro da consulta. |

##### Retorno

( _long_ )

O número de documentos na coleção.

---

#### <span style={{color: '#008000'}}>countDocuments</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.CountOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Conta o número de documentos na coleção.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | O filtro da consulta. |
| **opções** | _com.mongodb.client.model.CountOptions_ | As opções que descrevem a contagem. |

##### Retorno

( _long_ )

O número de documentos na coleção.

---

## createIndex

---

#### <span style={{color: '#008000'}}>createIndex</span>(<span style={{color: '#FF8000'}}>atualizações</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Cria um índice com as chaves fornecidas.

##### Como Usar

```javascript
collection.createIndex(_mongo.indexes().ascending('quantity', 'price'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **atualizações** | _org.bson.conversions.Bson_ | Um objeto que descreve a(s) chave(s) do índice, que não pode ser nulo. |

##### Retorno

( _string_ )

O nome do índice.

---

## deleteMany

---

#### <span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Exclui múltiplos documentos da coleção.

##### Como Usar

```javascript
collection.deleteMany(_mongo.filters().eq('status', 'Inactive'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Exclui múltiplos documentos da coleção com as opções especificadas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **opções** | _com.mongodb.client.model.DeleteOptions_ | As opções a serem aplicadas à operação de exclusão. |

##### Retorno

( _void_ )


---

## deleteOne

---

#### <span style={{color: '#008000'}}>deleteOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Exclui um único documento da coleção.

##### Como Usar

```javascript
collection.deleteOne(_mongo.filters().eq('name', 'Product'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>deleteOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Exclui um único documento da coleção com as opções especificadas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **opções** | _com.mongodb.client.model.DeleteOptions_ | As opções a serem aplicadas à operação de exclusão. |

##### Retorno

( _void_ )


---

## drop

---

#### <span style={{color: '#008000'}}>drop</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Exclui esta coleção do banco de dados.

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>drop</span>(<span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DropCollectionOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Exclui esta coleção do banco de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **opções** | _com.mongodb.client.model.DropCollectionOptions_ | Várias opções para excluir a coleção. |

##### Retorno

( _void_ )


---

## estimatedDocumentCount

---

#### <span style={{color: '#008000'}}>estimatedDocumentCount</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Obtém uma estimativa da contagem de documentos em uma coleção utilizando os metadados da coleção.

##### Como Usar

```javascript
collection.estimatedDocumentCount();
```

##### Retorno

( _long_ )

O número de documentos na coleção.

---

#### <span style={{color: '#008000'}}>estimatedDocumentCount</span>(<span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.EstimatedDocumentCountOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Obtém uma estimativa da contagem de documentos em uma coleção utilizando os metadados da coleção.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **opções** | _com.mongodb.client.model.EstimatedDocumentCountOptions_ | As opções que descrevem a contagem. |

##### Retorno

( _long_ )

O número de documentos na coleção.

---

## find

---

#### <span style={{color: '#008000'}}>find</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Localizar todos os documentos na coleção.

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )

A interface FindIterable.

---

#### <span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Descrição

Localizar todos os documentos na coleção.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | O filtro da consulta. |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )

A interface FindIterable.

---

## findOneAndDelete

---

#### <span style={{color: '#008000'}}>findOneAndDelete</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e exclui um documento de forma atômica.

##### Como Usar

```javascript
const old = collection.findOneAndDelete(_mongo.filters().eq('name', 'Product'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento encontrado, ou null se nenhum documento corresponder.

---

#### <span style={{color: '#008000'}}>findOneAndDelete</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndDeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e exclui um documento de forma atômica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **opções** | _com.mongodb.client.model.FindOneAndDeleteOptions_ | As opções a serem aplicadas à operação de exclusão. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento encontrado, ou null se nenhum documento corresponder.

---

## findOneAndReplace

---

#### <span style={{color: '#008000'}}>findOneAndReplace</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e substitui um documento de forma atômica.

##### Como Usar

```javascript
const old = collection.findOneAndReplace(
  _mongo.filters().eq('name', 'Product'),
  _val.map()
    .set('quantity', 200)
    .set('price', 12.99)
    .set('category', 'food')
);

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **dados** | _[Values](/docs/library/objects/Values)_ | O documento de substituição, que não pode conter operadores de atualização. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento encontrado, ou null se nenhum documento corresponder.

---

#### <span style={{color: '#008000'}}>findOneAndReplace</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndReplaceOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e substitui um documento de forma atômica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **dados** | _[Values](/docs/library/objects/Values)_ | O documento de substituição, que não pode conter operadores de atualização. |
| **opções** | _com.mongodb.client.model.FindOneAndReplaceOptions_ | As opções a serem aplicadas à operação de substituição. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento encontrado, ou null se nenhum documento corresponder.

---

## findOneAndUpdate

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>atualização</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e atualiza um documento de forma atômica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **atualização** | _java.util.List_ | Uma pipeline que descreve a atualização, que não pode ser nula. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento que foi atualizado antes da aplicação da atualização. Se nenhum documento corresponder ao filtro da consulta, então null será retornado.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>atualização</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e atualiza um documento de forma atômica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **atualização** | _java.util.List_ | Uma pipeline que descreve a atualização, que não pode ser nula. |
| **opções** | _com.mongodb.client.model.FindOneAndUpdateOptions_ | As opções a serem aplicadas à operação de atualização. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento encontrado, ou null se nenhum documento corresponder.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>atualização</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e atualiza um documento de forma atômica.

##### Como Usar

```javascript
const setUpdate = _mongo.updates().set('quantity', 42);
const renameUpdate = _mongo.updates().rename('other', 'more');

const combinedUpdates = _mongo.updates().combine(setUpdate, renameUpdate);

collection.findOneAndUpdate(
  _mongo.filters().eq('name', 'Abc'),
  combinedUpdates
);

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **atualização** | _org.bson.conversions.Bson_ | Um documento que descreve a atualização, o qual não pode ser nulo. A atualização a ser aplicada deve incluir pelo menos um operador de atualização. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento encontrado, ou null se nenhum documento corresponder.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>atualização</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e atualiza um documento de forma atômica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **atualização** | _org.bson.conversions.Bson_ | Um documento que descreve a atualização, o qual não pode ser nulo. A atualização a ser aplicada deve incluir pelo menos um operador de atualização. |
| **opções** | _com.mongodb.client.model.FindOneAndUpdateOptions_ | As opções a serem aplicadas à operação de atualização. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento encontrado, ou null se nenhum documento corresponder.

---

## insertMany

---

#### <span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Descrição

Insere múltiplos documentos na coleção.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Os dados dos documentos a serem inseridos. |

##### Retorno

( _java.util.List_ )

A lista de IDs dos documentos inseridos.

---

#### <span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertManyOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Descrição

Insere múltiplos documentos na coleção com as opções especificadas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Os dados dos documentos a serem inseridos. |
| **opções** | _com.mongodb.client.model.InsertManyOptions_ | As opções a serem aplicadas à operação de inserção. |

##### Retorno

( _java.util.List_ )

A lista de IDs dos documentos inseridos.

---

## insertOne

---

#### <span style={{color: '#008000'}}>insertOne</span>(<span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Insere um único documento na coleção.

##### Como Usar

```javascript
const id = collection.insertOne(
    _val.map()
      .set('name', 'Abc')
      .set('quantity', 100)
      .set('price', 9.99)
      .set('category', 'main')
);

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Os dados do documento a ser inserido. |

##### Retorno

( _string_ )

O ID do documento inserido.

---

#### <span style={{color: '#008000'}}>insertOne</span>(<span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertOneOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Insere um único documento na coleção com as opções especificadas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dados** | _[Values](/docs/library/objects/Values)_ | Os dados do documento a ser inserido. |
| **opções** | _com.mongodb.client.model.InsertOneOptions_ | As opções a serem aplicadas à operação de inserção. |

##### Retorno

( _string_ )

O ID do documento inserido.

---

## renameCollection

---

#### <span style={{color: '#008000'}}>renameCollection</span>(<span style={{color: '#FF8000'}}>nomeCompleto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Renomeia a coleção para o nome completo fornecido.

##### Como Usar

```javascript
collection.renameCollection('database.newCollection');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeCompleto** | _string_ | O nome completo da nova coleção no formato 'database.collection'. |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>renameCollection</span>(<span style={{color: '#FF8000'}}>nomeBancoDados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nomeColecao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Renomeia a coleção para o banco de dados e nome da coleção fornecidos.

##### Como Usar

```javascript
collection.renameCollection('database', 'newCollection');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nomeBancoDados** | _string_ | O nome do banco de dados. |
| **nomeColecao** | _string_ | O novo nome da coleção. |

##### Retorno

( _void_ )


---

## replaceOne

---

#### <span style={{color: '#008000'}}>replaceOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Substitui um único documento na coleção de acordo com o filtro especificado.

##### Como Usar

```javascript
collection.replaceOne(
  _mongo.filters().eq('name', 'Product'),
  _val.map()
    .set('quantity', 200)
    .set('price', 12.99)
    .set('category', 'food')
);

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **dados** | _[Values](/docs/library/objects/Values)_ | O documento de substituição, que não pode conter operadores de atualização. |

##### Retorno

( _long_ )

O número de documentos modificados.

---

#### <span style={{color: '#008000'}}>replaceOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.ReplaceOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Substitui um único documento na coleção de acordo com o filtro especificado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **dados** | _[Values](/docs/library/objects/Values)_ | O documento de substituição, que não pode conter operadores de atualização. |
| **opções** | _com.mongodb.client.model.ReplaceOptions_ | As opções a serem aplicadas à operação de substituição. |

##### Retorno

( _long_ )

O número de documentos modificados.

---

## updateMany

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza múltiplos documentos na coleção de acordo com os argumentos especificados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _java.util.List_ | Uma pipeline que descreve a atualização, que não pode ser nula. |

##### Retorno

( _long_ )

O número de documentos modificados.

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza múltiplos documentos na coleção de acordo com os argumentos especificados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _java.util.List_ | Uma pipeline que descreve a atualização, que não pode ser nula. |
| **opções** | _com.mongodb.client.model.UpdateOptions_ | As opções a serem aplicadas à operação de atualização. |

##### Retorno

( _long_ )

O número de documentos modificados.

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza múltiplos documentos na coleção de acordo com os argumentos especificados.

##### Como Usar

```javascript
collection.updateMany(
  _mongo.filters().eq('status', 'Active'),
  _mongo.updates().set('status', 'Inactive')
);

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _org.bson.conversions.Bson_ | Um documento que descreve a atualização, o qual não pode ser nulo. A atualização a ser aplicada deve incluir pelo menos um operador de atualização. |

##### Retorno

( _long_ )

O número de documentos modificados.

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza múltiplos documentos na coleção de acordo com os argumentos especificados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _org.bson.conversions.Bson_ | Um documento que descreve a atualização, o qual não pode ser nulo. A atualização a ser aplicada deve incluir pelo menos um operador de atualização. |
| **opções** | _com.mongodb.client.model.UpdateOptions_ | As opções a serem aplicadas à operação de atualização. |

##### Retorno

( _long_ )

O número de documentos modificados.

---

## updateOne

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza um único documento na coleção de acordo com os argumentos especificados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _java.util.List_ | Uma pipeline que descreve a atualização, que não pode ser nula. |

##### Retorno

( _long_ )

O resultado da operação de atualização de um único documento.

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza um único documento na coleção de acordo com os argumentos especificados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _java.util.List_ | Uma pipeline que descreve a atualização, que não pode ser nula. |
| **opções** | _com.mongodb.client.model.UpdateOptions_ | As opções a serem aplicadas à operação de atualização. |

##### Retorno

( _long_ )

O resultado da operação de atualização de um único documento.

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza um único documento na coleção de acordo com os argumentos especificados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _org.bson.conversions.Bson_ | Um documento que descreve a atualização, o qual não pode ser nulo. A atualização a ser aplicada deve incluir pelo menos um operador de atualização. |

##### Retorno

( _long_ )

O resultado da operação de atualização de um único documento.

---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>opções</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Descrição

Atualiza um único documento na coleção de acordo com os argumentos especificados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _org.bson.conversions.Bson_ | Um documento que descreve a atualização, o qual não pode ser nulo. A atualização a ser aplicada deve incluir pelo menos um operador de atualização. |
| **opções** | _com.mongodb.client.model.UpdateOptions_ | As opções a serem aplicadas à operação de atualização. |

##### Retorno

( _long_ )

O resultado da operação de atualização de um único documento.

---

