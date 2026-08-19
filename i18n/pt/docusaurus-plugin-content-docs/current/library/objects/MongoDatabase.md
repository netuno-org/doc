---
id: MongoDatabase
title: MongoDatabase
sidebar_label: MongoDatabase
---

Permite interagir com a base de dados em MongoDB.

---

## collection

---

#### <span style={{color: '#008000'}}>collection</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoCollection](/docs/library/objects/MongoCollection)</span>
##### Descrição

Obtém uma MongoCollection pelo nome.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome da coleção. |

##### Retorno

( _[MongoCollection](/docs/library/objects/MongoCollection)_ )

O wrapper da MongoCollection.

---

## collectionNames

---

#### <span style={{color: '#008000'}}>collectionNames</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Descrição

Lista todos os nomes das coleções na base de dados.

##### Retorno

( _java.util.List_ )

A lista com os nomes das coleções.

---

## createCollection

---

#### <span style={{color: '#008000'}}>createCollection</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoDatabase](/docs/library/objects/MongoDatabase)</span>
##### Descrição

Cria uma nova coleção com o nome especificado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome da coleção. |

##### Retorno

( _[MongoDatabase](/docs/library/objects/MongoDatabase)_ )

Esta instância de MongoDatabase para encadeamento.

---

## getCollection

---

#### <span style={{color: '#008000'}}>getCollection</span>(<span style={{color: '#FF8000'}}>nome</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoCollection](/docs/library/objects/MongoCollection)</span>
##### Descrição

Obtém uma MongoCollection pelo nome.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | O nome da coleção. |

##### Retorno

( _[MongoCollection](/docs/library/objects/MongoCollection)_ )

O wrapper da MongoCollection.

---

## ping

---

#### <span style={{color: '#008000'}}>ping</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[MongoDatabase](/docs/library/objects/MongoDatabase)</span>
##### Descrição

Testa a conexão com a base de dados executando o comando ping.

##### Retorno

( _[MongoDatabase](/docs/library/objects/MongoDatabase)_ )

Esta instância de MongoDatabase para encadeamento.

---

