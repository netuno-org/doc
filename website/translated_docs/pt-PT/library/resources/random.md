---
id: random
title: Random
sidebar_label: Random
---

Geração de valores aleatórios.

---

## init

---

#### _random.init() : _java.util.Random_
##### Descrição

Gera toda a classe Random.

##### Retorno

( _java.util.Random_ )

Retorna uma classe.

---

#### _random.init(seed: _long_) : _java.util.Random_
##### Descrição

Gera aleatoriamente uma seed.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| seed | _long_ |   |

##### Retorno

( _java.util.Random_ )

Retorna uma seed.

---

## initSecure

---

#### _random.initSecure() : _java.security.SecureRandom_
##### Retorno

( _java.security.SecureRandom_ )


---

#### _random.initSecure(seed: _byte[]_) : _java.security.SecureRandom_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| seed | _byte[]_ |   |

##### Retorno

( _java.security.SecureRandom_ )


---

## initString

---

#### _random.initString() : _[RandomString](../../objects/RandomString)_
##### Descrição

Gera aleatoriamente um texto de 24 caracteres.

##### Retorno

( _[RandomString](../../objects/RandomString)_ )

Retorna um texto de 24 caracteres aleatórios.

---

#### _random.initString(length: _int_) : _[RandomString](../../objects/RandomString)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| length | _int_ |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

#### _random.initString(length: _int_, symbols: string) : _[RandomString](../../objects/RandomString)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| length | _int_ |   |
| symbols | string |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

#### _random.initString(length: _int_, random: _java.util.Random_) : _[RandomString](../../objects/RandomString)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| length | _int_ |   |
| random | _java.util.Random_ |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

#### _random.initString(length: _int_, random: _java.util.Random_, symbols: string) : _[RandomString](../../objects/RandomString)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| length | _int_ |   |
| random | _java.util.Random_ |   |
| symbols | string |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

