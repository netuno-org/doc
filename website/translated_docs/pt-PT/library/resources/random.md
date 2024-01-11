---
id: random
title: Random
sidebar_label: Random
---

Geração de valores aleatórios.

---

## init

---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">java.util.Random</span>
##### Descrição

Gera toda a classe Random.

##### Retorno

( _java.util.Random_ )

Retorna uma classe.

---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">seed</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">java.util.Random</span>
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

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">initSecure</span>() : <span style="font-weight: normal; font-style: italic;">java.security.SecureRandom</span>
##### Retorno

( _java.security.SecureRandom_ )


---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">initSecure</span>(<span style="color: #FF8000">seed</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">java.security.SecureRandom</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **seed** | _byte[]_ |   |

##### Retorno

( _java.security.SecureRandom_ )


---

## initString

---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">initString</span>() : <span style="font-weight: normal; font-style: italic;">[RandomString](../../objects/RandomString)</span>
##### Descrição

Gera aleatoriamente um texto de 24 caracteres.

##### Retorno

( _[RandomString](../../objects/RandomString)_ )

Retorna um texto de 24 caracteres aleatórios.

---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">initString</span>(<span style="color: #FF8000">length</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[RandomString](../../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">initString</span>(<span style="color: #FF8000">length</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">symbols</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RandomString](../../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **symbols** | _string_ |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">initString</span>(<span style="color: #FF8000">length</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">random</span>: <span style="font-weight: normal; font-style: italic;">java.util.Random</span>) : <span style="font-weight: normal; font-style: italic;">[RandomString](../../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

#### <span style="font-weight: normal">_random</span>.<span style="color: #008000">initString</span>(<span style="color: #FF8000">length</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">random</span>: <span style="font-weight: normal; font-style: italic;">java.util.Random</span>, <span style="color: #FF8000">symbols</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[RandomString](../../objects/RandomString)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **length** | _int_ |   |
| **random** | _java.util.Random_ |   |
| **symbols** | _string_ |   |

##### Retorno

( _[RandomString](../../objects/RandomString)_ )


---

