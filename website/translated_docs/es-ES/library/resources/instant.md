---
id: instant
title: Instant
sidebar_label: Instant
---
Nos links abaixo tem toda a informação acerca de cada função da variável Instant. Uma breve descrição, como utilizar e tudo acerca dos atributos e o que retorna.

---

## now

---

_instant.**now**( _[Clock clock : java.time.Clock]_ ): _date_

#### Descrição

Retorna o tempo atual do sistema, opcionalmente pode utilizar o Clock do Java.

#### Como usar

```javascript
// Retorna o tempo atual do sistema em formato UTC
_instant.now()
```

---

## from

---

_instant.**from**(TemporalAccessor temporalAccessor : _java.time.temporal.TemporalAccessor_ ): _date_ 

#### Descrição

Retorna uma data a partir de um objeto do tipo TemporalAccessor.

<!--#### Como usar-->

<!--```javascript
// Retorna o tempo atual do sistema em formato UTC
_instant.from(object())
```-->

---

## parse

---

_instant.**parse**(dateTextoEmUTC : _string_ ): _date_

#### Descrição

Retorna uma instância de Instant a partir de uma data válida em UTC.

#### Como usar

```javascript
// Cria uma instância de Instant a partir de 2007-12-03T10:15:30.00Z
_instant.parse("2007-12-03T10:15:30.00Z")
```

---

## ofEpochMilli

---

_instant.**ofEpochMilli**(tempoEmMillisegundos : _int_): _date_

#### Descrição

Retorna uma data em UTC a partir dos millisegundos inseridos desde 1 de janeiro de 1970.

#### Como usar

```javascript
// Retorna uma data a partir de 123456789ms
_instant.ofEpochMilli(123456789)
```

---

## ofEpochSecond

---

_instant.**ofEpochSecond**(tempoEmSegundos : _int [, tempoEmNanosegundos : int]_): _date_

#### Descrição

Retorna uma data em UTC a partir dos segundos inseridos desde 1 de janeiro de 1970.

#### Como usar

```javascript
// Retorna uma data a partir de 123456789s
_instant.ofEpochSecond(123456789)
// Retorna uma data a partir de 123456789s e 12345ns
_instant.ofEpochSecond(123456789, 12345)
```
