---
id: val
title: Val
sidebar_label: Val
---

Recurso de inicialização do Values. 
O values é um objecto de armazenamento de dados que pode ser representado como uma lista ou dicionário. Uma vez inicializado como lista ou dicionário não vai ser possível alterar para a outra.

```javascript
var item = _val.init()
item.set('id', 1)
  .set('name', 'Netuno')
  .set('site', 'www.netuno.org')
  .set('active', 'true')
var idComoString = item.getString('id')
var name = item['name']
var site = item['site']
var active = item.getBoolean('active')

```

---

## cast

---

#### _val.cast(arg0: _Object_) : _Values_
##### Descrição

Transforma objecto em Values.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Values_ )


---

## fromJSON

---

#### _val.fromJSON(arg0: _string_) : _Values_
##### Descrição

Obtém Values do jsonString.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

## init

---

#### _val.init(arg0: _Iterable_) : _Values_
##### Descrição

Inicializa o Values.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Iterable_ |   |

##### Retorno

( _Values_ )


---

#### _val.init(arg0: _Map_) : _Values_
##### Descrição

Inicializa o Values.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |

##### Retorno

( _Values_ )


---

#### _val.init() : _Values_
##### Descrição

Inicializa o Values.

##### Retorno

( _Values_ )


---

## is

---

#### _val.is(arg0: _Object_) : _boolean_
##### Descrição

Verifica se objecto é do tipo Values.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )


---

## list

---

#### _val.list(arg0: _Values_) : _List_
##### Descrição

Gera um novo Values como lista.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |

##### Retorno

( _List_ )


---

#### _val.list() : _Values_
##### Descrição

Gera um novo Values como lista.

##### Retorno

( _Values_ )


---

## map

---

#### _val.map(arg0: _Values_) : _Map_
##### Descrição

Gera um novo Values como dicionário.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |

##### Retorno

( _Map_ )


---

#### _val.map() : _Values_
##### Descrição

Gera um novo Values como dicionário.

##### Retorno

( _Values_ )


---

## toJSON

---

#### _val.toJSON(arg0: _List_, arg1: _int_) : _string_
##### Descrição

Converte o values para Json.

##### Como Usar

```javascript
var value = _val.initList()
var jsonString = _val.toJson(values);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _int_ |   |

##### Retorno

( _string_ )


---

#### _val.toJSON(arg0: _List_) : _string_
##### Descrição

Converte o values para Json.

##### Como Usar

```javascript
var value = _val.initList()
var jsonString = _val.toJson(values);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( _string_ )


---

#### _val.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : _string_
##### Descrição

Converte o values para Json.

##### Como Usar

```javascript
var value = _val.initList()
var jsonString = _val.toJson(values);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( _string_ )


---

#### _val.toJSON(arg0: _List_, arg1: _boolean_) : _string_
##### Descrição

Converte o values para Json.

##### Como Usar

```javascript
var value = _val.initList()
var jsonString = _val.toJson(values);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( _string_ )


---

## toList

---

#### _val.toList(arg0: _Values_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |

##### Retorno

( _List_ )


---

## toMap

---

#### _val.toMap(arg0: _Values_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Values_ |   |

##### Retorno

( _Map_ )


---

## toString

---

#### _val.toString() : _string_
##### Retorno

( _string_ )


---

