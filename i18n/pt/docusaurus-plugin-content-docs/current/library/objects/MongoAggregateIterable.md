---
id: MongoAggregateIterable
title: MongoAggregateIterable
sidebar_label: MongoAggregateIterable
---

Processa os resultados das operações de agregação do MongoDB.

---

## all

---

#### <span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Descrição

Retorna todos os documentos do resultado da agregação.

##### Como Usar

```javascript
const docs = collection.aggregate(...).all();
```

##### Retorno

( _java.util.List_ )

A lista de documentos.

---

## first

---

#### <span style={{color: '#008000'}}>first</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Retorna o primeiro documento do resultado da agregação.

##### Como Usar

```javascript
const doc = collection.aggregate(...).first();
```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

O primeiro documento ou null se não houver resultados.

---

## forEach

---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>consumidor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer&lt;[Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Descrição

Executa uma ação para cada documento do resultado da agregação.

##### Como Usar

```javascript
collection.aggregate(...).forEach((doc) => { /* process doc */ });
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **consumidor** | _java.util.function.Consumer_ | A ação a ser executada para cada documento. |

##### Retorno

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

Esta instância para encadeamento.

---

#### <span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>função</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)</span>
##### Descrição

Executa uma função para cada documento do resultado da agregação.

##### Como Usar

```javascript
collection.aggregate(...).forEach((doc) => { /* process doc */ });
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **função** | _org.graalvm.polyglot.Value_ | A função a ser executada para cada documento. |

##### Retorno

( _[MongoAggregateIterable](/docs/library/objects/MongoAggregateIterable)_ )

Esta instância para encadeamento.

---

