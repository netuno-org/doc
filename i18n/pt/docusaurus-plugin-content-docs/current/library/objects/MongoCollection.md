---
id: MongoCollection
title: MongoCollection
sidebar_label: MongoCollection
---

Permite interagir com as coleções do MongoDB.

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

#### <span style={{color: '#008000'}}>createIndex</span>(<span style={{color: '#FF8000'}}>keys</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **keys** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _string_ )


---

## deleteMany

---

#### <span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>deleteMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **options** | _com.mongodb.client.model.DeleteOptions_ |   |

##### Retorno

( _void_ )


---

## deleteOne

---

#### <span style={{color: '#008000'}}>deleteOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>deleteOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.DeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **options** | _com.mongodb.client.model.DeleteOptions_ |   |

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

#### <span style={{color: '#008000'}}>findOneAndDelete</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>findOneAndDelete</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndDeleteOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **options** | _com.mongodb.client.model.FindOneAndDeleteOptions_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## findOneAndReplace

---

#### <span style={{color: '#008000'}}>findOneAndReplace</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>findOneAndReplace</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndReplaceOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |
| **options** | _com.mongodb.client.model.FindOneAndReplaceOptions_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## findOneAndUpdate

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e atualiza um documento de forma atômica.

##### Como Usar

```javascript
const setUpdate = _mongo.updates().set('quantity', 42);
const renameUpdate = _mongo.updates().rename('other', 'more');
const updateList = _val.list();
updateList.add(setUpdate);
updateList.add(renameUpdate);
const combinedUpdates = _mongo.updates().combine(updateList);
c.findOneAndUpdate(
  _mongo.filters().eq('name', 'Abc'),
  combinedUpdates
);

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _java.util.List_ | Uma pipeline que descreve a atualização, que não pode ser nula. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento que foi atualizado antes da aplicação da atualização. Se nenhum documento corresponder ao filtro da consulta, então null será retornado.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _java.util.List_ |   |
| **options** | _com.mongodb.client.model.FindOneAndUpdateOptions_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filtro</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Encontra e atualiza um documento de forma atômica.

##### Como Usar

```javascript
const setUpdate = _mongo.updates().set('quantity', 42);
const renameUpdate = _mongo.updates().rename('other', 'more');
const updateList = _val.list();
updateList.add(setUpdate);
updateList.add(renameUpdate);
const combinedUpdates = _mongo.updates().combine(updateList);
c.findOneAndUpdate(
  _mongo.filters().eq('name', 'Abc'),
  combinedUpdates
);

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filtro** | _org.bson.conversions.Bson_ | Um documento que descreve o filtro de consulta, o qual não pode ser nulo. |
| **update** | _org.bson.conversions.Bson_ | Uma pipeline que descreve a atualização, que não pode ser nula. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O documento que foi atualizado antes da aplicação da atualização. Se nenhum documento corresponder ao filtro da consulta, então null será retornado.

---

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.FindOneAndUpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _org.bson.conversions.Bson_ |   |
| **options** | _com.mongodb.client.model.FindOneAndUpdateOptions_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## insertMany

---

#### <span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style={{color: '#008000'}}>insertMany</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertManyOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |
| **options** | _com.mongodb.client.model.InsertManyOptions_ |   |

##### Retorno

( _java.util.List_ )


---

## insertOne

---

#### <span style={{color: '#008000'}}>insertOne</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style={{color: '#008000'}}>insertOne</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.InsertOneOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |
| **options** | _com.mongodb.client.model.InsertOneOptions_ |   |

##### Retorno

( _string_ )


---

## renameCollection

---

#### <span style={{color: '#008000'}}>renameCollection</span>(<span style={{color: '#FF8000'}}>fullName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fullName** | _string_ |   |

##### Retorno

( _void_ )


---

#### <span style={{color: '#008000'}}>renameCollection</span>(<span style={{color: '#FF8000'}}>databaseName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>collectionName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **databaseName** | _string_ |   |
| **collectionName** | _string_ |   |

##### Retorno

( _void_ )


---

## replaceOne

---

#### <span style={{color: '#008000'}}>replaceOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _long_ )


---

#### <span style={{color: '#008000'}}>replaceOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.ReplaceOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |
| **options** | _com.mongodb.client.model.ReplaceOptions_ |   |

##### Retorno

( _long_ )


---

## updateMany

---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _java.util.List_ |   |

##### Retorno

( _long_ )


---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _java.util.List_ |   |
| **options** | _com.mongodb.client.model.UpdateOptions_ |   |

##### Retorno

( _long_ )


---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _long_ )


---

#### <span style={{color: '#008000'}}>updateMany</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _org.bson.conversions.Bson_ |   |
| **options** | _com.mongodb.client.model.UpdateOptions_ |   |

##### Retorno

( _long_ )


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

