---
id: MongoUpdates
title: MongoUpdates
sidebar_label: MongoUpdates
---

Definição das alterações em **Bson** que são utilizadas nas alterações de dados das coleções do MongoDB.

---

## combine

---

#### <span style={{color: '#008000'}}>combine</span>(<span style={{color: '#FF8000'}}>atualizações</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Combina uma lista de atualizações em uma única atualização.

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
| **atualizações** | _org.bson.conversions.Bson[]_ | A lista de atualizações. |

##### Retorno

( _org.bson.conversions.Bson_ )

Uma atualização combinada.

---

#### <span style={{color: '#008000'}}>combine</span>(<span style={{color: '#FF8000'}}>atualizações</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Combina uma lista de atualizações em uma única atualização.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **atualizações** | _java.util.List_ | A lista de atualizações. |

##### Retorno

( _org.bson.conversions.Bson_ )

Uma atualização combinada.

---

## push

---

#### <span style={{color: '#008000'}}>push</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Adiciona um valor a um array em um documento.

##### Como Usar

```javascript
_mongo.updates().push('tags', 'newTag');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do campo array. |
| **valor** | _java.lang.Object_ | O valor a ser adicionado. |

##### Retorno

( _org.bson.conversions.Bson_ )

A atualização no formato Bson.

---

## rename

---

#### <span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>novoNome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Renomeia um campo em um documento.

##### Como Usar

```javascript
_mongo.updates().rename('oldName', 'newName');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome atual do campo. |
| **novoNome** | _string_ | O novo nome do campo. |

##### Retorno

( _org.bson.conversions.Bson_ )

A atualização no formato Bson.

---

## set

---

#### <span style={{color: '#008000'}}>set</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>valor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Define o valor de um campo em um documento.

##### Como Usar

```javascript
_mongo.updates().set('name', 'new value');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do campo. |
| **valor** | _java.lang.Object_ | O valor a ser definido. |

##### Retorno

( _org.bson.conversions.Bson_ )

A atualização no formato Bson.

---

## unset

---

#### <span style={{color: '#008000'}}>unset</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.bson.conversions.Bson</span>
##### Descrição

Remove o valor de um campo em um documento.

##### Como Usar

```javascript
_mongo.updates().unset('name');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome do campo. |

##### Retorno

( _org.bson.conversions.Bson_ )

A atualização no formato Bson.

---

