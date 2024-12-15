---
id: random
title: Random
sidebar_label: Random
---

Geração de valores aleatórios.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Random</span>
##### Description

Generates the all Random class.

##### Return

( _java.util.Random_ )

Returns a class.

---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>seed</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Random</span>
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

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initSecure</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.security.SecureRandom</span>
##### Return

( _java.security.SecureRandom_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initSecure</span>(<span style={{color: '#FF8000'}}>seed</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.security.SecureRandom</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **seed** | _byte[]_ |   |

##### Return

( _java.security.SecureRandom_ )


---

## initString

---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Description

Generates a random text of 24 caracteres.

##### Return

( _[RandomString](../objects/RandomString)_ )

Returns a 24 characters random string.

---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |

##### Return

( _[RandomString](../objects/RandomString)_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>symbols</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **symbols** | _string_ |   |

##### Return

( _[RandomString](../objects/RandomString)_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>random</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Random</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |

##### Return

( _[RandomString](../objects/RandomString)_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>random</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Random</span>, <span style={{color: '#FF8000'}}>symbols</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |
| **symbols** | _string_ |   |

##### Return

( _[RandomString](../objects/RandomString)_ )


---

