---
id: random
title: Random
sidebar_label: Random
---

Generation of random data, such as keys, identifiers, passwords, etc.

---

## init

---

#### _random.init() : java.util.Random
##### Description

Generates the all Random class.

##### Return

( _java.util.Random_ )

Returns a class.

---

#### _random.init(seed: long) : java.util.Random
##### Description

Generates a random seed.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **seed** | _long_ |   |

##### Return

( _java.util.Random_ )

Returns a seed.

---

## initSecure

---

#### _random.initSecure() : java.security.SecureRandom
##### Return

( _java.security.SecureRandom_ )


---

#### _random.initSecure(seed: byte[]) : java.security.SecureRandom
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **seed** | _byte[]_ |   |

##### Return

( _java.security.SecureRandom_ )


---

## initString

---

#### _random.initString() : [RandomString](/docs/library/objects/RandomString)
##### Description

Generates a random text of 24 caracteres.

##### Return

( _[RandomString](/docs/library/objects/RandomString)_ )

Returns a 24 characters random string.

---

#### _random.initString(length: int) : [RandomString](/docs/library/objects/RandomString)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |

##### Return

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, withSymbols: boolean) : [RandomString](/docs/library/objects/RandomString)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **withSymbols** | _boolean_ |   |

##### Return

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, chars: string) : [RandomString](/docs/library/objects/RandomString)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **chars** | _string_ |   |

##### Return

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, random: java.util.Random) : [RandomString](/docs/library/objects/RandomString)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |

##### Return

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, random: java.util.Random, withSymbols: boolean) : [RandomString](/docs/library/objects/RandomString)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |
| **withSymbols** | _boolean_ |   |

##### Return

( _[RandomString](/docs/library/objects/RandomString)_ )


---

#### _random.initString(length: int, random: java.util.Random, chars: string) : [RandomString](/docs/library/objects/RandomString)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |
| **chars** | _string_ |   |

##### Return

( _[RandomString](/docs/library/objects/RandomString)_ )


---

