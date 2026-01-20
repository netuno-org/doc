---
id: rabbitMQ
title: RabbitMQ
sidebar_label: RabbitMQ
---

Integration with RabbitMQ.

Allows you to send and receive messages.

---

## basicConsume

---

#### _rabbitMQ.basicConsume(settings: [Values](/docs/library/objects/Values)) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **settings** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## channel

---

#### _rabbitMQ.channel() : com.rabbitmq.client.Channel
##### Return

( _com.rabbitmq.client.Channel_ )


---

## connection

---

#### _rabbitMQ.connection() : com.rabbitmq.client.Connection
##### Return

( _com.rabbitmq.client.Connection_ )


---

## connectionFactory

---

#### _rabbitMQ.connectionFactory() : com.rabbitmq.client.ConnectionFactory
##### Return

( _com.rabbitmq.client.ConnectionFactory_ )


---

## init

---

#### _rabbitMQ.init(serverName: string) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **serverName** | _string_ |   |

##### Return

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **serverName** | _string_ |   |
| **connectionName** | _string_ |   |

##### Return

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string, channelName: string) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **serverName** | _string_ |   |
| **connectionName** | _string_ |   |
| **channelName** | _string_ |   |

##### Return

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## rpcConsume

---

#### _rabbitMQ.rpcConsume(settings: [Values](/docs/library/objects/Values)) : [RabbitMQ](/docs/library/resources/rabbitMQ)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **settings** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[RabbitMQ](/docs/library/resources/rabbitMQ)_ )


---

## rpcPublish

---

#### _rabbitMQ.rpcPublish(queueName: string, message: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |

##### Return

( _string_ )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: string, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _string_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: [Values](/docs/library/objects/Values)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _string_ )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: [Values](/docs/library/objects/Values), charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **queueName** | _string_ |   |
| **message** | _[Values](/docs/library/objects/Values)_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

## serverConfig

---

#### _rabbitMQ.serverConfig(server: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **server** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## serversConfig

---

#### _rabbitMQ.serversConfig(server: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **server** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

