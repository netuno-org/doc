---
id: MongoSorts
title: MongoSorts
sidebar_label: MongoSorts
---

Definição das ordenações em **Bson** que são utilizadas nas consultas das coleções do MongoDB.

---

## ascending

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma ordenação ascendente para os campos informados.

##### Como Usar

```javascript
collection.find().sort(_mongo.sorts().ascending('name')).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _string[]_ | Os nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A ordenação.

---

#### <span style={{color: '#008000'}}>ascending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma ordenação ascendente a partir de uma lista de campos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | A lista de nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A ordenação.

---

## descending

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma ordenação descendente para os campos informados.

##### Como Usar

```javascript
collection.find().sort(_mongo.sorts().descending('date')).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _string[]_ | Os nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A ordenação.

---

#### <span style={{color: '#008000'}}>descending</span>(<span style={{color: '#FF8000'}}>campos</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Cria uma ordenação descendente a partir de uma lista de campos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campos** | _java.util.List_ | A lista de nomes dos campos. |

##### Retorno

( _org.bson.conversions.Bson_ )

A ordenação.

---

## orderBy

---

#### <span style={{color: '#008000'}}>orderBy</span>(<span style={{color: '#FF8000'}}>ordenações</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Combina múltiplas ordenações em uma única ordenação.

##### Como Usar

```javascript
collection.find().sort(_mongo.sorts().orderBy(_mongo.sorts().ascending('name'), _mongo.sorts().descending('date'))).all();
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ordenações** | _org.bson.conversions.Bson[]_ | As ordenações a serem combinadas. |

##### Retorno

( _org.bson.conversions.Bson_ )

A ordenação combinada.

---

#### <span style={{color: '#008000'}}>orderBy</span>(<span style={{color: '#FF8000'}}>ordenações</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Combina múltiplas ordenações a partir de uma lista.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ordenações** | _java.util.List_ | A lista de ordenações a ser combinada. |

##### Retorno

( _org.bson.conversions.Bson_ )

A ordenação combinada.

---

