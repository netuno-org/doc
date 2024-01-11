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
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| settings | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

## channel

---

#### _rabbitMQ.channel() : _com.rabbitmq.client.Channel_
##### Retorno

( _com.rabbitmq.client.Channel_ )


---

## connection

---

#### _rabbitMQ.connection() : _com.rabbitmq.client.Connection_
##### Retorno

( _com.rabbitmq.client.Connection_ )


---

## connectionFactory

---

#### _rabbitMQ.connectionFactory() : _com.rabbitmq.client.ConnectionFactory_
##### Retorno

( _com.rabbitmq.client.ConnectionFactory_ )


---

## init

---

#### _rabbitMQ.init(serverName: string) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| serverName | string |   |

##### Retorno

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| serverName | string |   |
| connectionName | string |   |

##### Retorno

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

#### _rabbitMQ.init(serverName: string, connectionName: string, channelName: string) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| serverName | string |   |
| connectionName | string |   |
| channelName | string |   |

##### Retorno

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

## rpcConsume

---

#### _rabbitMQ.rpcConsume(settings: _[Values](../../objects/Values)_) : _[RabbitMQ](../../resources/RabbitMQ)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| settings | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[RabbitMQ](../../resources/RabbitMQ)_ )


---

## rpcPublish

---

#### _rabbitMQ.rpcPublish(queueName: string, message: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| queueName | string |   |
| message | string |   |

##### Retorno

( string )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: string, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| queueName | string |   |
| message | string |   |
| charset | string |   |

##### Retorno

( string )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| queueName | string |   |
| message | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _rabbitMQ.rpcPublish(queueName: string, message: _[Values](../../objects/Values)_, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| queueName | string |   |
| message | _[Values](../../objects/Values)_ |   |
| charset | string |   |

##### Retorno

( string )


---

## serverConfig

---

#### _rabbitMQ.serverConfig(server: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| server | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## serversConfig

---

#### _rabbitMQ.serversConfig(server: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| server | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

