---
id: rabbitMQ
title: RabbitMQ
sidebar_label: RabbitMQ
---

Integração com o RabbitMQ.
Permite enviar e receber mensagens.

---

## basicConsume

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>basicConsume</span>(<span style={{color: '#FF8000'}}>settings</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RabbitMQ](/docs/library/resources/rabbitMQ)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **settings** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## channel

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>channel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.rabbitmq.client.Channel</span>
##### Retorno

( _com.rabbitmq.client.Channel_ )


---

## connection

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>connection</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.rabbitmq.client.Connection</span>
##### Retorno

( _com.rabbitmq.client.Connection_ )


---

## connectionFactory

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>connectionFactory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.rabbitmq.client.ConnectionFactory</span>
##### Retorno

( _com.rabbitmq.client.ConnectionFactory_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>serverName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RabbitMQ](/docs/library/resources/rabbitMQ)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **serverName** | _string_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>serverName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>connectionName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RabbitMQ](/docs/library/resources/rabbitMQ)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **serverName** | _string_ |   |
| **connectionName** | _string_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>serverName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>connectionName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>channelName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RabbitMQ](/docs/library/resources/rabbitMQ)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **serverName** | _string_ |   |
| **connectionName** | _string_ |   |
| **channelName** | _string_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## rpcConsume

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>rpcConsume</span>(<span style={{color: '#FF8000'}}>settings</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RabbitMQ](/docs/library/resources/rabbitMQ)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **settings** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## rpcPublish

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>rpcPublish</span>(<span style={{color: '#FF8000'}}>queueName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>rpcPublish</span>(<span style={{color: '#FF8000'}}>queueName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |
| **charset** | _string_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>rpcPublish</span>(<span style={{color: '#FF8000'}}>queueName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>rpcPublish</span>(<span style={{color: '#FF8000'}}>queueName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>message</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |
| **charset** | _string_ |   |

##### Retorno

( _string_ )


---

## serverConfig

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>serverConfig</span>(<span style={{color: '#FF8000'}}>server</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **server** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## serversConfig

---

#### <span style={{fontWeight: 'normal'}}>_rabbitMQ</span>.<span style={{color: '#008000'}}>serversConfig</span>(<span style={{color: '#FF8000'}}>server</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **server** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

