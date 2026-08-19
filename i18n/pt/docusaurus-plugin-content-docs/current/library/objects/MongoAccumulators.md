---
id: MongoAccumulators
title: MongoAccumulators
sidebar_label: MongoAccumulators
---

Definição dos acumuladores em **Bson** que são utilizados nas operações de agregação do MongoDB.

---

## avg

---

#### <span style={{color: '#008000'}}>avg</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Cria um acumulador que calcula a média dos valores de um campo.

##### Como Usar

```javascript
_mongo.accumulators().avg('averagePrice', '$price');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## bottom

---

#### <span style={{color: '#008000'}}>bottom</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ordenação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Retorna o documento inferior com base na ordenação especificada.

##### Como Usar

```javascript
_mongo.accumulators().bottom('loser', _mongo.sorts().ascending('score'), '$playerId');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **ordenação** | _org.bson.conversions.Bson_ | A ordenação a ser aplicada. |
| **expressão** | _string_ | A expressão do campo de saída. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## bottomN

---

#### <span style={{color: '#008000'}}>bottomN</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ordenação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>n</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Retorna os N documentos inferiores com base na ordenação especificada.

##### Como Usar

```javascript
_mongo.accumulators().bottomN('bottomThree', _mongo.sorts().ascending('score'), '$playerId', 3);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **ordenação** | _org.bson.conversions.Bson_ | A ordenação a ser aplicada. |
| **expressão** | _string_ | A expressão do campo de saída. |
| **n** | _long_ | O número de valores a serem retornados. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Obtém o valor do campo do primeiro documento na lista ordenada.

##### Como Usar

```javascript
_mongo.accumulators().first('latestTotal', '$totalAmount');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## firstN

---

#### <span style={{color: '#008000'}}>firstN</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>n</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Obtém os primeiros N valores do campo dos primeiros documentos na lista ordenada.

##### Como Usar

```javascript
_mongo.accumulators().firstN('topThreeOrders', '$totalAmount', 3);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |
| **n** | _long_ | O número de valores a serem retornados. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## last

---

#### <span style={{color: '#008000'}}>last</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Obtém o valor do campo do último documento na lista ordenada.

##### Como Usar

```javascript
_mongo.accumulators().last('lastTotal', '$totalAmount');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## lastN

---

#### <span style={{color: '#008000'}}>lastN</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>n</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Obtém os últimos N valores do campo dos últimos documentos na lista ordenada.

##### Como Usar

```javascript
_mongo.accumulators().lastN('lastThreeOrders', '$totalAmount', 3);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |
| **n** | _long_ | O número de valores a serem retornados. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## max

---

#### <span style={{color: '#008000'}}>max</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Cria um acumulador que retorna o valor máximo do campo.

##### Como Usar

```javascript
_mongo.accumulators().max('maxPrice', '$price');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## maxN

---

#### <span style={{color: '#008000'}}>maxN</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>n</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Retorna os N maiores valores do campo.

##### Como Usar

```javascript
_mongo.accumulators().maxN('topThreePrices', '$price', 3);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |
| **n** | _long_ | O número de valores a serem retornados. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## min

---

#### <span style={{color: '#008000'}}>min</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Cria um acumulador que retorna o valor mínimo do campo.

##### Como Usar

```javascript
_mongo.accumulators().min('minPrice', '$price');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## minN

---

#### <span style={{color: '#008000'}}>minN</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>n</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Retorna os N menores valores do campo.

##### Como Usar

```javascript
_mongo.accumulators().minN('bottomThreePrices', '$price', 3);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |
| **n** | _long_ | O número de valores a serem retornados. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## sum

---

#### <span style={{color: '#008000'}}>sum</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Cria um acumulador que calcula a soma dos valores de um campo.

##### Como Usar

```javascript
_mongo.accumulators().sum('totalPrice', '$price');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **expressão** | _string_ | A expressão do campo de entrada. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## top

---

#### <span style={{color: '#008000'}}>top</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ordenação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Retorna o documento do topo com base na ordenação especificada.

##### Como Usar

```javascript
_mongo.accumulators().top('winner', _mongo.sorts().descending('score'), '$playerId');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **ordenação** | _org.bson.conversions.Bson_ | A ordenação a ser aplicada. |
| **expressão** | _string_ | A expressão do campo de saída. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

## topN

---

#### <span style={{color: '#008000'}}>topN</span>(<span style={{color: '#FF8000'}}>campo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ordenação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>, <span style={{color: '#FF8000'}}>expressão</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>n</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.mongodb.client.model.BsonField</span>
##### Descrição

Retorna os N documentos do topo com base na ordenação especificada.

##### Como Usar

```javascript
_mongo.accumulators().topN('topThree', _mongo.sorts().descending('score'), '$playerId', 3);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **campo** | _string_ | Nome do campo de saída. |
| **ordenação** | _org.bson.conversions.Bson_ | A ordenação a ser aplicada. |
| **expressão** | _string_ | A expressão do campo de saída. |
| **n** | _long_ | O número de valores a serem retornados. |

##### Retorno

( _com.mongodb.client.model.BsonField_ )

O acumulador BsonField.

---

