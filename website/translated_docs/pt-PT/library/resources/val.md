---
id: val
title: Val
sidebar_label: Val
---

Recurso para interagir com listas ou mapas com chaves e valores (dicionários). 
O valores é um objeto de armazenamento dados que pode ser representado como uma lista ou como um mapa de dados (dicionário). Uma vez inicializado como uma dessas estruturas, lista ou mapa, não poderá mais ser alterado para a outra.

```javascript
const mapaDeDados = _val.map()
    .set('id', 1)
    .set('name', 'Netuno')
    .set('site', 'www.netuno.org')
    .set('active', 'true')
const idComoString = mapaDeDados.getString('id')
const name = mapaDeDados['name']
const site = mapaDeDados['site']
const active = mapaDeDados.getBoolean('active')

const listaDeDados = _val.list()
    .add('Linha 1')
    .push('Linha 2')
    .add('Linha 3')
for (const linha of listaDeDados) {
    _log.info(linha)
}
```

---

## cast

---

#### _val.cast(obj: _Object_) : _[Values](../../objects/Values)_
##### Descrição

Transforma um objeto em valores se possível.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _Object_ | Objeto para ser convertido. |

##### Retorno

( _[Values](../../objects/Values)_ )

O objeto convertido para valores.

---

## fromJSON

---

#### _val.fromJSON(texto: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém o values de uma string com array ou objecto em JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Conteúdo JSON. |

##### Retorno

( _[Values](../../objects/Values)_ )

O objeto de valores carregado com a estrutura e dados obtidos com a string JSON.

---

## global

---

#### _val.global() : _[Values](../../objects/Values)_
##### Descrição

Instância do tipo Values para armazenar dados que ficam disponíveis apenas durante a execução do pedido HTTP, é útil para partilhar dados entre scripts.

##### Como Usar

```javascript
// Define que esta sendo processado o cliente 10:
const global = _val.global()
global.set('clienteId', 10)
_out.json(global)
```

##### Retorno

( _[Values](../../objects/Values)_ )

Dados que são partilhados globalmente entre os diversos scripts durante a execução da chamada HTTP.

---

## init

---

#### _val.init() : _[Values](../../objects/Values)_
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Retorno

( _[Values](../../objects/Values)_ )

O novo objeto de valores genérico.

---

#### _val.init(obj: _Iterable_) : _[Values](../../objects/Values)_
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _Iterable_ | Objeto para carregar o novo objeto de valores criado. |

##### Retorno

( _[Values](../../objects/Values)_ )

O novo objeto de valores iniciado com os dados do objeto passado.

---

#### _val.init(obj: _Object_) : _[Values](../../objects/Values)_
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _Object_ | Objeto para carregar o novo objeto de valores criado. |

##### Retorno

( _[Values](../../objects/Values)_ )

O novo objeto de valores iniciado com os dados do objeto passado.

---

#### _val.init(obj: _Map_) : _[Values](../../objects/Values)_
##### Descrição

Inicializa valores de modo genérico, o primeiro dado a ser atribuído definirá se será lista ou mapa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _Map_ | Objeto para carregar o novo objeto de valores criado. |

##### Retorno

( _[Values](../../objects/Values)_ )

O novo objeto de valores iniciado com os dados do objeto passado.

---

## is

---

#### _val.is(obj: _Object_) : _boolean_
##### Descrição

Verifica se o objeto é do tipo de valores.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _Object_ | Objeto para ser validado se é do tipo de valores. |

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

#### _val.map(valores: _Object_) : _Map_
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _Object_ | Objeto de valores no modo mapa. |

##### Retorno

( _Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

---

#### _val.map(valores: _[Values](../../objects/Values)_) : _Map_
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores no modo mapa. |

##### Retorno

( _Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

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

#### _val.toJSON(valores: _List_) : string
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _List_ | Objeto de valores para ser transformado no formato JSON. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

---

#### _val.toJSON(valores: _List_, indentacao: _boolean_) : string
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _List_ | Objeto de valores para ser transformado no formato JSON. |
| indentacao | _boolean_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

---

#### _val.toJSON(valores: _List_, emHTML: _boolean_, indentacao: _int_) : string
##### Descrição

Converte o values para JSON.

##### Como Usar

```javascript
const lista = _val.list()
    .add("Item 1")
    .add("Item 2")
    .add("Item 3")
const listaString = _val.toJSON(lista)
_out.println(`${listaString}<br/>`)
const mapa = _val.map()
    .set("chave1", "Valor 1")
    .set("chave2", "Valor 2")
const mapaString = _val.toJSON(mapa)
_out.println(`${mapaString}<br/>`)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _List_ | Objeto de valores para ser transformado no formato JSON. |
| emHTML | _boolean_ | Ativa a formatação automática em HTML dos caracteres especiais que estão nos valores de texto, útil para a transformação de acentos. |
| indentacao | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

---

#### _val.toJSON(valores: _List_, indentacao: _int_) : string
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _List_ | Objeto de valores para ser transformado no formato JSON. |
| indentacao | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

---

#### _val.toJSON(valores: _[Values](../../objects/Values)_) : string
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

---

#### _val.toJSON(valores: _[Values](../../objects/Values)_, emHTML: _boolean_) : string
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |
| emHTML | _boolean_ | Ativa a formatação automática em HTML dos caracteres especiais que estão nos valores de texto, útil para a transformação de acentos. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

---

#### _val.toJSON(valores: _[Values](../../objects/Values)_, emHTML: _boolean_, indentacao: _int_) : string
##### Descrição

Converte o values para JSON.

##### Como Usar

```javascript
const lista = _val.list()
    .add("Item 1")
    .add("Item 2")
    .add("Item 3")
const listaString = _val.toJSON(lista)
_out.println(`${listaString}<br/>`)
const mapa = _val.map()
    .set("chave1", "Valor 1")
    .set("chave2", "Valor 2")
const mapaString = _val.toJSON(mapa)
_out.println(`${mapaString}<br/>`)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |
| emHTML | _boolean_ | Ativa a formatação automática em HTML dos caracteres especiais que estão nos valores de texto, útil para a transformação de acentos. |
| indentacao | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

---

#### _val.toJSON(valores: _[Values](../../objects/Values)_, indentacao: _int_) : string
##### Descrição

Converte o values para JSON.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores para ser transformado no formato JSON. |
| indentacao | _int_ | Quantidade de espaços que deve ser utilizado na indentação do JSON. |

##### Retorno

( string )

String JSON com a estrutura e dados do objeto de valores.

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

#### _val.toMap(valores: _Object_) : _Map_
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _Object_ | Objeto de valores no modo mapa. |

##### Retorno

( _Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

---

#### _val.toMap(valores: _[Values](../../objects/Values)_) : _Map_
##### Descrição

Transforma um objeto de valores para um mapa normal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Objeto de valores no modo mapa. |

##### Retorno

( _Map_ )

Uma novo mapa normal com os dados do objeto de valores recebido.

---

