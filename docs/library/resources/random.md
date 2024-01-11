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
##### Description

Generates the all Random class.

##### Return

( _java.util.Random_ )

Returns a class.

---

#### _random.init(seed: _long_) : _java.util.Random_
##### Description

Generates a random seed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| seed | _long_ |   |

##### Return

( _java.util.Random_ )

Returns a seed.

---

## initSecure

---

#### _random.initSecure() : _java.security.SecureRandom_
##### Return

( _java.security.SecureRandom_ )


---

#### _random.initSecure(seed: _byte[]_) : _java.security.SecureRandom_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| seed | _byte[]_ |   |

##### Return

( _java.security.SecureRandom_ )


---

## initString

---

#### _random.initString() : _[RandomString](../../objects/RandomString)_
##### Description

Generates a random text of 24 caracteres.

##### Return

( _[RandomString](../../objects/RandomString)_ )

Returns a 24 characters random string.

---

#### _random.initString(length: _int_) : _[RandomString](../../objects/RandomString)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| length | _int_ |   |

##### Return

( _[RandomString](../../objects/RandomString)_ )


---

#### _random.initString(length: _int_, symbols: string) : _[RandomString](../../objects/RandomString)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| length | _int_ |   |
| symbols | string |   |

##### Return

( _[RandomString](../../objects/RandomString)_ )


---

#### _random.initString(length: _int_, random: _java.util.Random_) : _[RandomString](../../objects/RandomString)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| length | _int_ |   |
| random | _java.util.Random_ |   |

##### Return

( _[RandomString](../../objects/RandomString)_ )


---

#### _random.initString(length: _int_, random: _java.util.Random_, symbols: string) : _[RandomString](../../objects/RandomString)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| length | _int_ |   |
| random | _java.util.Random_ |   |
| symbols | string |   |

##### Return

( _[RandomString](../../objects/RandomString)_ )


---

