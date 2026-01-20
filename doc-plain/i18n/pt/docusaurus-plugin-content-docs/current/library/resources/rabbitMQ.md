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

#### _rabbitMQ.basicConsume(settings: [Values](/docs/library/objects/Values)) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **settings** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## channel

---

#### _rabbitMQ.channel() : com.rabbitmq.client.Channel
##### Retorno

( _com.rabbitmq.client.Channel_ )


---

## connection

---

#### _rabbitMQ.connection() : com.rabbitmq.client.Connection
##### Retorno

( _com.rabbitmq.client.Connection_ )


---

## connectionFactory

---

#### _rabbitMQ.connectionFactory() : com.rabbitmq.client.ConnectionFactory
##### Retorno

( _com.rabbitmq.client.ConnectionFactory_ )


---

## init

---

#### _rabbitMQ.init(serverName: string) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **serverName** | _string_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **serverName** | _string_ |   |
| **connectionName** | _string_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string, channelName: string) : [RabbitMQ](/docs/library/resources/rabbitMQ)
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

#### _rabbitMQ.rpcConsume(settings: [Values](/docs/library/objects/Values)) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **settings** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## rpcPublish

---

#### _rabbitMQ.rpcPublish(queueName: string, message: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |

##### Retorno

( _string_ )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: string, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |
| **charset** | _string_ |   |

##### Retorno

( _string_ )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: [Values](/docs/library/objects/Values)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _string_ )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: [Values](/docs/library/objects/Values), charset: string) : string
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

#### _rabbitMQ.serverConfig(server: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **server** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## serversConfig

---

#### _rabbitMQ.serversConfig(server: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **server** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

