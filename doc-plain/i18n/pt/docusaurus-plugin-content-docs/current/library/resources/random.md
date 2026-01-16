---
id: random
title: Random
sidebar_label: Random
---

Geração de dados aleatórios, como chaves, identificadores, passwords, etc.

---

## init

---

#### _random.init() : java.util.Random
##### Descrição

Gera toda a classe Random.

##### Retorno

( _java.util.Random_ )

Retorna uma classe.

---

#### _random.init(seed: long) : java.util.Random
##### Descrição

Gera aleatoriamente uma seed.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seed** | _long_ |   |

##### Retorno

( _java.util.Random_ )

Retorna uma seed.

---

## initSecure

---

#### _random.initSecure() : java.security.SecureRandom
##### Retorno

( _java.security.SecureRandom_ )


---

#### _random.initSecure(seed: byte[]) : java.security.SecureRandom
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seed** | _byte[]_ |   |

##### Retorno

( _java.security.SecureRandom_ )


---

## initString

---

#### _random.initString() : [RandomString](/docs/library/objects/RandomString)
##### Descrição

Gera aleatoriamente um texto de 24 caracteres.

##### Retorno

( _[RandomString](/docs/library/objects/RandomString)_ )

Retorna um texto de 24 caracteres aleatórios.

---

#### _random.initString(length: int) : [RandomString](/docs/library/objects/RandomString)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |

##### Retorno

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, withSymbols: boolean) : [RandomString](/docs/library/objects/RandomString)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **withSymbols** | _boolean_ |   |

##### Retorno

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, chars: string) : [RandomString](/docs/library/objects/RandomString)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **chars** | _string_ |   |

##### Retorno

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, random: java.util.Random) : [RandomString](/docs/library/objects/RandomString)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |

##### Retorno

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, random: java.util.Random, withSymbols: boolean) : [RandomString](/docs/library/objects/RandomString)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |
| **withSymbols** | _boolean_ |   |

##### Retorno

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, random: java.util.Random, chars: string) : [RandomString](/docs/library/objects/RandomString)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |
| **chars** | _string_ |   |

##### Retorno

( _[RandomString](/docs/library/objects/RandomString)_ )


---

