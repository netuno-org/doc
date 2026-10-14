---
id: mongo
title: MongoDB - Cliente
sidebar_label: MongoDB - Cliente
---

Recurso para integrações com o MongoDB.

---

## accumulators

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>accumulators</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAccumulators](/docs/library/objects/MongoAccumulators)</span>
##### Descrição

Cria uma factory para definir acumuladores de agregação.

##### Como Usar

```javascript
_mongo.aggregates().group('$customerId', _mongo.accumulators().sum('total', '$price'));
```

##### Retorno

( _[MongoAccumulators](/docs/library/objects/MongoAccumulators)_ )

A factory de acumuladores.

---

## aggregates

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>aggregates</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregates](/docs/library/objects/MongoAggregates)</span>
##### Descrição

Cria uma factory para definir etapas de agregação.

##### Como Usar

```javascript
collection.aggregate(_mongo.aggregates().match(_mongo.filters().eq('status', 'Active')));
```

##### Retorno

( _[MongoAggregates](/docs/library/objects/MongoAggregates)_ )

A factory de agregação.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Fecha a conexão com o MongoDB.

##### Como Usar

```javascript
_mongo.close();
```

##### Retorno

( _void_ )


---

## countOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>countOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.CountOptions</span>
##### Descrição

Cria opções para contagem de documentos.

##### Retorno

( _com.mongodb.client.model.CountOptions_ )

As opções de contagem.

---

## database

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>database</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoDatabase](/docs/library/objects/MongoDatabase)</span>
##### Descrição

Obtém uma instância de uma base de dados MongoDB.

##### Como Usar

```javascript
const mongo = _mongo.init('netunoapp');
cont db = mongo.database('mydb');

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome da base de dados. |

##### Retorno

( _[MongoDatabase](/docs/library/objects/MongoDatabase)_ )

A instância da base de dados MongoDB.

---

## deleteOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>deleteOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>
##### Descrição

Cria opções para operações de remoção de documentos.

##### Retorno

( _com.mongodb.client.model.DeleteOptions_ )

As opções de remoção.

---

## docToVal

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>docToVal</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Converte um documento BSON para um objeto Values.

##### Como Usar

```javascript
const values = _mongo.docToVal(doc);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _org.bson.Document_ | O documento BSON a ser convertido. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O objeto Values resultante.

---

## document

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>document</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>
##### Descrição

Cria um novo documento vazio.

##### Como Usar

```javascript
const doc = _mongo.document();
```

##### Retorno

( _org.bson.Document_ )

Um novo documento vazio.

---

## dropCollectionOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>dropCollectionOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DropCollectionOptions</span>
##### Descrição

Cria opções para remoção de uma coleção.

##### Retorno

( _com.mongodb.client.model.DropCollectionOptions_ )

As opções de remoção da coleção.

---

## estimatedDocumentCountOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>estimatedDocumentCountOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.EstimatedDocumentCountOptions</span>
##### Descrição

Cria opções para contagem estimada de documentos.

##### Retorno

( _com.mongodb.client.model.EstimatedDocumentCountOptions_ )

As opções de contagem estimada.

---

## filters

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>filters</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFilters](/docs/library/objects/MongoFilters)</span>
##### Descrição

Cria uma factory para definir filtros de consulta.

##### Como Usar

```javascript
collection.find(_mongo.filters().eq('status', 'Active'));
```

##### Retorno

( _[MongoFilters](/docs/library/objects/MongoFilters)_ )

A factory de filtros.

---

## findOneAndDeleteOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndDeleteOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndDeleteOptions</span>
##### Descrição

Cria opções para encontrar e remover um único documento.

##### Retorno

( _com.mongodb.client.model.FindOneAndDeleteOptions_ )

As opções de encontrar e remover.

---

## findOneAndReplaceOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndReplaceOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndReplaceOptions</span>
##### Descrição

Cria opções para encontrar e substituir um único documento.

##### Retorno

( _com.mongodb.client.model.FindOneAndReplaceOptions_ )

As opções de encontrar e substituir.

---

## findOneAndUpdateOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>findOneAndUpdateOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>
##### Descrição

Cria opções para encontrar e atualizar um único documento.

##### Retorno

( _com.mongodb.client.model.FindOneAndUpdateOptions_ )

As opções de encontrar e atualizar.

---

## indexes

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>indexes</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoIndexes](/docs/library/objects/MongoIndexes)</span>
##### Descrição

Uma factory para definir chaves de índice.

##### Como Usar

```javascript
collection.createIndex(_mongo.indexes().ascending('quantity', 'price'));
```

##### Retorno

( _[MongoIndexes](/docs/library/objects/MongoIndexes)_ )

A factory de índices.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Mongo](/docs/library/resources/mongo)</span>
##### Descrição

Inicializa a conexão com o MongoDB utilizando a configuração padrão.

##### Retorno

( _[Mongo](/docs/library/resources/mongo)_ )

A instância do cliente MongoDB.

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>chaveOuUrl</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Mongo](/docs/library/resources/mongo)</span>
##### Descrição

Inicializa a conexão com o MongoDB utilizando uma chave de configuração ou URL de conexão.

##### Como Usar

```javascript
const mongo = _mongo.init('mongodb://localhost:27017/mydb');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chaveOuUrl** | _string_ | A chave de configuração ou a URL de conexão do MongoDB. |

##### Retorno

( _[Mongo](/docs/library/resources/mongo)_ )

A instância do cliente MongoDB.

---

## insertManyOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>insertManyOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertManyOptions</span>
##### Descrição

Cria opções para inserção de múltiplos documentos.

##### Retorno

( _com.mongodb.client.model.InsertManyOptions_ )

As opções de inserção.

---

## insertOneOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>insertOneOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertOneOptions</span>
##### Descrição

Cria opções para inserção de um único documento.

##### Retorno

( _com.mongodb.client.model.InsertOneOptions_ )

As opções de inserção.

---

## projections

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>projections</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoProjections](/docs/library/objects/MongoProjections)</span>
##### Descrição

Cria uma factory para definir projeções de campos.

##### Como Usar

```javascript
collection.find().projection(_mongo.projections().include('name', 'quantity')).all();
```

##### Retorno

( _[MongoProjections](/docs/library/objects/MongoProjections)_ )

A factory de projeções.

---

## replaceOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>replaceOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.ReplaceOptions</span>
##### Descrição

Cria opções para operações de substituição.

##### Retorno

( _com.mongodb.client.model.ReplaceOptions_ )

As opções de substituição.

---

## sorts

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>sorts</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoSorts](/docs/library/objects/MongoSorts)</span>
##### Descrição

Cria uma factory para definir ordenações.

##### Como Usar

```javascript
collection.find().sort(_mongo.sorts().ascending('name')).all();
```

##### Retorno

( _[MongoSorts](/docs/library/objects/MongoSorts)_ )

A factory de ordenações.

---

## textSearchOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>textSearchOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.TextSearchOptions</span>
##### Descrição

Cria opções para pesquisa de texto.

##### Retorno

( _com.mongodb.client.model.TextSearchOptions_ )

As opções de pesquisa de texto.

---

## updateOptions

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>updateOptions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>
##### Descrição

Cria opções para operações de atualização.

##### Retorno

( _com.mongodb.client.model.UpdateOptions_ )

As opções de atualização.

---

## updates

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>updates</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoUpdates](/docs/library/objects/MongoUpdates)</span>
##### Descrição

Cria uma factory para definir alterações de dados.

##### Como Usar

```javascript
collection.updateOne(filter, _mongo.updates().set('name', 'New Name'));
```

##### Retorno

( _[MongoUpdates](/docs/library/objects/MongoUpdates)_ )

A factory de atualizações.

---

## valToDoc

---

#### <span style={{fontWeight: 'normal'}}>_mongo</span>.<span style={{color: '#008000'}}>valToDoc</span>(<span style={{color: '#FF8000'}}>valores</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.Document</span>
##### Descrição

Converte um objeto Values para um documento BSON.

##### Como Usar

```javascript
const doc = _mongo.valToDoc(values);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | O objeto Values a ser convertido. |

##### Retorno

( _org.bson.Document_ )

O documento BSON resultante.

---

