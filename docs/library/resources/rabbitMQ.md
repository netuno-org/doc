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

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">basicConsume</span>(<span style="color: #FF8000">settings</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RabbitMQ](../../resources/rabbitMQ)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **settings** | _[Values](../../objects/Values)_ |   |

##### Return

( _[RabbitMQ](../../resources/rabbitMQ)_ )


---

## channel

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">channel</span>() : <span style="font-weight: normal; font-style: italic;">com.rabbitmq.client.Channel</span>
##### Return

( _com.rabbitmq.client.Channel_ )


---

## connection

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">connection</span>() : <span style="font-weight: normal; font-style: italic;">com.rabbitmq.client.Connection</span>
##### Return

( _com.rabbitmq.client.Connection_ )


---

## connectionFactory

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">connectionFactory</span>() : <span style="font-weight: normal; font-style: italic;">com.rabbitmq.client.ConnectionFactory</span>
##### Return

( _com.rabbitmq.client.ConnectionFactory_ )


---

## init

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">serverName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RabbitMQ](../../resources/rabbitMQ)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **serverName** | _string_ |   |

##### Return

( _[RabbitMQ](../../resources/rabbitMQ)_ )


---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">serverName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">connectionName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RabbitMQ](../../resources/rabbitMQ)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **serverName** | _string_ |   |
| **connectionName** | _string_ |   |

##### Return

( _[RabbitMQ](../../resources/rabbitMQ)_ )


---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">serverName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">connectionName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">channelName</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RabbitMQ](../../resources/rabbitMQ)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **serverName** | _string_ |   |
| **connectionName** | _string_ |   |
| **channelName** | _string_ |   |

##### Return

( _[RabbitMQ](../../resources/rabbitMQ)_ )


---

## rpcConsume

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">rpcConsume</span>(<span style="color: #FF8000">settings</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[RabbitMQ](../../resources/rabbitMQ)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **settings** | _[Values](../../objects/Values)_ |   |

##### Return

( _[RabbitMQ](../../resources/rabbitMQ)_ )


---

## rpcPublish

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">rpcPublish</span>(<span style="color: #FF8000">queueName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _string_ )


---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">rpcPublish</span>(<span style="color: #FF8000">queueName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">rpcPublish</span>(<span style="color: #FF8000">queueName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |

##### Return

( _string_ )


---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">rpcPublish</span>(<span style="color: #FF8000">queueName</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _[Values](../../objects/Values)_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

## serverConfig

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">serverConfig</span>(<span style="color: #FF8000">server</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **server** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## serversConfig

---

#### <span style="font-weight: normal">_rabbitMQ</span>.<span style="color: #008000">serversConfig</span>(<span style="color: #FF8000">server</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **server** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

