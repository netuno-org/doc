---
id: MongoIndexes
title: MongoIndexes
sidebar_label: MongoIndexes
---

Definição das chaves de índice em **Bson** que são utilizadas nas operações de índice do MongoDB.

---

## ascending

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma especificação de índice ascendente para os campos informados.

##### Como Usar

```javascript
collection.createIndex(_mongo.indexes().ascending('quantity', 'price'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _string[]_ | Os nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A especificação do índice.

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma especificação de índice ascendente a partir de uma lista de campos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | A lista de nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A especificação do índice.

---

## compoundIndex

---

#### <span style={{color: '#008000'}}>compoundIndex</span>(<span style={{color: '#FF8000'}}>índice</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria as especificações de um índice composto. Se algum nome de campo for repetido, o último terá precedência.

##### Como Usar

```javascript
collection.createIndex(_mongo.indexes().compoundIndex(
  _mongo.indexes().descending('price'),
  _mongo.indexes().ascending('quantity')
));

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **índice** | _org.bson.conversions.Bson[]_ | As especificações do índice. |

##### Retorno

( _org.bson.conversions.Bson_ )

As especificações do índice composto.

---

#### <span style={{color: '#008000'}}>compoundIndex</span>(<span style={{color: '#FF8000'}}>índices</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria as especificações de um índice composto a partir de uma lista.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **índices** | _java.util.List_ | A lista de especificações do índice. |

##### Retorno

( _org.bson.conversions.Bson_ )

As especificações do índice composto.

---

## descending

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma especificação de índice descendente para os campos informados.

##### Como Usar

```javascript
collection.createIndex(_mongo.indexes().descending('price'));
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _string[]_ | Os nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A especificação do índice.

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma especificação de índice descendente a partir de uma lista de campos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | A lista de nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A especificação do índice.

---

