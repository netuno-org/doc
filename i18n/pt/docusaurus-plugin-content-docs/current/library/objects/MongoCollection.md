---
id: MongoCollection
title: MongoCollection
sidebar_label: MongoCollection
---

Permite interagir com as coleções do MongoDB.

---

## countDocuments

---

#### <span style={{color: '#008000'}}>countDocuments</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _long_ )


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
##### Retorno

( _void_ )


---

## estimatedDocumentCount

---

#### <span style={{color: '#008000'}}>estimatedDocumentCount</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Retorno

( _long_ )


---

## find

---

#### <span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoFindIterable](/docs/library/objects/MongoFindIterable)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _[MongoFindIterable](/docs/library/objects/MongoFindIterable)_ )


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

#### <span style={{color: '#008000'}}>findOneAndUpdate</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


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

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _org.bson.conversions.Bson_ |   |

##### Retorno

( _long_ )


---

#### <span style={{color: '#008000'}}>updateOne</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>update</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>options</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.UpdateOptions</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **filter** | _org.bson.conversions.Bson_ |   |
| **update** | _org.bson.conversions.Bson_ |   |
| **options** | _com.mongodb.client.model.UpdateOptions_ |   |

##### Retorno

( _long_ )


---

