---
id: val
title: Val
sidebar_label: Val
---

Recurso para interagir com listas ou mapas com chaves e valores (dicionários). 
O valores é um objecto de armazenamento dados que pode ser representado como uma lista ou como um mapa de dados (dicionário). Uma vez inicializado como uma dessas estruturas, lista ou mapa, não poderá mais ser alterado para a outra.

```javascript
const mapaDeDados = _val.map()
  .set('id', 1)
  .set('name', 'Netuno')
  .set('site', 'www.netuno.org')
  .set('active', 'true')
const idComoString = mapaDeDados.getString('id')
const name = mapaDeDados['name']
const site = mapaDeDados['site']

const listaDeDados = _val.list()
listaDeDados.add('Linha 1')
listaDeDados.push('Linha 2')
for (const linha of listaDeDados) {
  _log.info(linha)
}
```

---

## cast

---

#### _val.cast(arg0: _Object_) : _[Values](../../objects/Values)_
##### Description

Transforma um objeto em valores se possível.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _[Values](../../objects/Values)_ )

O objeto convertido para valores.

---

## fromJSON

---

#### _val.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Description

Obtém o values de uma string com JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## init

---

#### _val.init() : _[Values](../../objects/Values)_
##### Description

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Return

( _[Values](../../objects/Values)_ )


---

#### _val.init(arg0: _Iterable_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Iterable_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _val.init(arg0: _Map_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## is

---

#### _val.is(arg0: _Object_) : _boolean_
##### Description

Verifica se o objeto é do tipo de valores.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )

Resultado da verificação se é do tipo valores ou não.

---

## list

---

#### _val.list() : _[Values](../../objects/Values)_
##### Description

Inicia um novo objeto de valores mas do tipo lista.

##### Return

( _[Values](../../objects/Values)_ )

O novo objeto de valores iniciado como lista.

---

#### _val.list(valores: _Object_) : _List_
##### Description

Transforma um objeto de valores para uma lista normal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| valores | _Object_ | Objeto de valores no modo lista. |

##### Return

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

#### _val.list(valores: _[Values](../../objects/Values)_) : _List_
##### Description

Transforma um objeto de valores para uma lista normal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores no modo lista. |

##### Return

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

## map

---

#### _val.map() : _[Values](../../objects/Values)_
##### Description

Inicia um novo objeto de valores mas do tipo mapa.

##### Return

( _[Values](../../objects/Values)_ )

O novo objeto de valores iniciado como mapa.

---

#### _val.map(arg0: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Map_ )


---

#### _val.map(arg0: _[Values](../../objects/Values)_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _Map_ )


---

## persistent

---

#### _val.persistent() : _[Values](../../objects/Values)_
##### Description

Values type instance to store data that persists in memory, that is, the data stored here are available for all HTTP requests.

##### How To Use

```javascript
// Count kept in memory that increases with each refresh:
const persistent = _val.persistent()
persistent.set('counter', persistent.getInt('counter') + 1)
_out.json(persistent)
```

##### Return

( _[Values](../../objects/Values)_ )

Data that is kept in memory and is available for all requests.

---

## toJSON

---

#### _val.toJSON(arg0: _List_) : string
##### Description

Converte o values para JSON.

##### How To Use

```javascript
const lista = _val.list()
lista.add("Item 1")lista.add("Item 2")lista.add("Item 3")const jsonString = _val.toJSON(values);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( string )


---

#### _val.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _val.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

#### _val.toJSON(arg0: _List_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_) : string
##### Description

Converte o values para JSON.

##### How To Use

```javascript
const lista = _val.list()
lista.add("Item 1")lista.add("Item 2")lista.add("Item 3")const jsonString = _val.toJSON(values);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_, arg1: _boolean_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _boolean_ |   |

##### Return

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_, arg1: _boolean_, arg2: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Return

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_, arg1: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _int_ |   |

##### Return

( string )


---

## toList

---

#### _val.toList(valores: _Object_) : _List_
##### Description

Transforma um objeto de valores para uma lista normal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| valores | _Object_ | Objeto de valores no modo lista. |

##### Return

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

#### _val.toList(valores: _[Values](../../objects/Values)_) : _List_
##### Description

Transforma um objeto de valores para uma lista normal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores no modo lista. |

##### Return

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

## toMap

---

#### _val.toMap(arg0: _Object_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Map_ )


---

#### _val.toMap(arg0: _[Values](../../objects/Values)_) : _Map_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _Map_ )


---

