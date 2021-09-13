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
##### Descrição

Transforma um objeto em valores se possível.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )

O objeto convertido para valores.

---

## fromJSON

---

#### _val.fromJSON(arg0: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém o values de uma string com JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## init

---

#### _val.init() : _[Values](../../objects/Values)_
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _val.init(arg0: _Iterable_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Iterable_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _val.init(arg0: _Map_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## is

---

#### _val.is(arg0: _Object_) : _boolean_
##### Descrição

Verifica se o objeto é do tipo de valores.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _boolean_ )

Resultado da verificação se é do tipo valores ou não.

---

## list

---

#### _val.list() : _[Values](../../objects/Values)_
##### Descrição

Inicia um novo objeto de valores mas do tipo lista.

##### Retorno

( _[Values](../../objects/Values)_ )

O novo objeto de valores iniciado como lista.

---

#### _val.list(valores: _Object_) : _List_
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _Object_ | Objeto de valores no modo lista. |

##### Retorno

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

#### _val.list(valores: _[Values](../../objects/Values)_) : _List_
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores no modo lista. |

##### Retorno

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

## map

---

#### _val.map() : _[Values](../../objects/Values)_
##### Descrição

Inicia um novo objeto de valores mas do tipo mapa.

##### Retorno

( _[Values](../../objects/Values)_ )

O novo objeto de valores iniciado como mapa.

---

#### _val.map(arg0: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _val.map(arg0: _[Values](../../objects/Values)_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _Map_ )


---

## persistent

---

#### _val.persistent() : _[Values](../../objects/Values)_
##### Descrição

Instância do tipo Values para armazenar dados que persistem na memória, ou seja os dados aqui guardados ficam disponíveis por todos os pedidos HTTP.

##### Como Usar

```javascript
// Contagem mantida em memória que aumenta a cada refresh:
const persistente = _val.persistent()
persistente.set('counter', persistente.getInt('counter') + 1)
_out.json(persistente)
```

##### Retorno

( _[Values](../../objects/Values)_ )

Dados que são mantidos em memória e que estão disponíveis para todas as solicitações.

---

## toJSON

---

#### _val.toJSON(arg0: _List_) : string
##### Descrição

Converte o values para JSON.

##### Como Usar

```javascript
const lista = _val.list()
lista.add("Item 1")lista.add("Item 2")lista.add("Item 3")const jsonString = _val.toJSON(values);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( string )


---

#### _val.toJSON(arg0: _List_, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _val.toJSON(arg0: _List_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

#### _val.toJSON(arg0: _List_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_) : string
##### Descrição

Converte o values para JSON.

##### Como Usar

```javascript
const lista = _val.list()
lista.add("Item 1")lista.add("Item 2")lista.add("Item 3")const jsonString = _val.toJSON(values);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_, arg1: _boolean_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _boolean_ |   |

##### Retorno

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_, arg1: _boolean_, arg2: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _boolean_ |   |
| arg2 | _int_ |   |

##### Retorno

( string )


---

#### _val.toJSON(arg0: _[Values](../../objects/Values)_, arg1: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |
| arg1 | _int_ |   |

##### Retorno

( string )


---

## toList

---

#### _val.toList(valores: _Object_) : _List_
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _Object_ | Objeto de valores no modo lista. |

##### Retorno

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

#### _val.toList(valores: _[Values](../../objects/Values)_) : _List_
##### Descrição

Transforma um objeto de valores para uma lista normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores no modo lista. |

##### Retorno

( _List_ )

Uma nova lista normal com os itens do objeto de valores recebido.

---

## toMap

---

#### _val.toMap(arg0: _Object_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Map_ )


---

#### _val.toMap(arg0: _[Values](../../objects/Values)_) : _Map_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _Map_ )


---

