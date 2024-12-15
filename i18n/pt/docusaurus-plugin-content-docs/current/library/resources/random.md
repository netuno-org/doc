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
##### Descrição

Gera toda a classe Random.

##### Retorno

( _java.util.Random_ )

Retorna uma classe.

---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>seed</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Random</span>
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

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initSecure</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.security.SecureRandom</span>
##### Retorno

( _java.security.SecureRandom_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initSecure</span>(<span style={{color: '#FF8000'}}>seed</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.security.SecureRandom</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seed** | _byte[]_ |   |

##### Retorno

( _java.security.SecureRandom_ )


---

## initString

---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Descrição

Gera aleatoriamente um texto de 24 caracteres.

##### Retorno

( _[RandomString](../objects/RandomString)_ )

Retorna um texto de 24 caracteres aleatórios.

---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |

##### Retorno

( _[RandomString](../objects/RandomString)_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>symbols</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **symbols** | _string_ |   |

##### Retorno

( _[RandomString](../objects/RandomString)_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>random</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Random</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |

##### Retorno

( _[RandomString](../objects/RandomString)_ )


---

#### <span style={{fontWeight: 'normal'}}>_random</span>.<span style={{color: '#008000'}}>initString</span>(<span style={{color: '#FF8000'}}>length</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>random</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Random</span>, <span style={{color: '#FF8000'}}>symbols</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[RandomString](../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |
| **symbols** | _string_ |   |

##### Retorno

( _[RandomString](../objects/RandomString)_ )


---

