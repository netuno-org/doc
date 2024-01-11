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

#### _rabbitMQ.basicConsume(settings: _[Values](../../objects/Values)_) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| settings | _[Values](../../objects/Values)_ |   |

##### Return

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

## channel

---

#### _rabbitMQ.channel() : _com.rabbitmq.client.Channel_
##### Return

( _com.rabbitmq.client.Channel_ )


---

## connection

---

#### _rabbitMQ.connection() : _com.rabbitmq.client.Connection_
##### Return

( _com.rabbitmq.client.Connection_ )


---

## connectionFactory

---

#### _rabbitMQ.connectionFactory() : _com.rabbitmq.client.ConnectionFactory_
##### Return

( _com.rabbitmq.client.ConnectionFactory_ )


---

## init

---

#### _rabbitMQ.init(serverName: string) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| serverName | string |   |

##### Return

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| serverName | string |   |
| connectionName | string |   |

##### Return

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string, channelName: string) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| serverName | string |   |
| connectionName | string |   |
| channelName | string |   |

##### Return

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

## rpcConsume

---

#### _rabbitMQ.rpcConsume(settings: _[Values](../../objects/Values)_) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| settings | _[Values](../../objects/Values)_ |   |

##### Return

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

## rpcPublish

---

#### _rabbitMQ.rpcPublish(queueName: string, message: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| queueName | string |   |
| message | string |   |

##### Return

( string )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: string, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| queueName | string |   |
| message | string |   |
| charset | string |   |

##### Return

( string )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: _[Values](../../objects/Values)_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| queueName | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: _[Values](../../objects/Values)_, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| queueName | string |   |
| message | _[Values](../../objects/Values)_ |   |
| charset | string |   |

##### Return

( string )


---

## serverConfig

---

#### _rabbitMQ.serverConfig(server: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| server | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## serversConfig

---

#### _rabbitMQ.serversConfig(server: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| server | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

